(ns veye2.api
  (:require-macros
    [cljs.core.async.macros :as csp-m :refer [go go-loop]])
  (:require [ajax.core :refer [GET POST PUT]]
            [clojure.string :as string]
            [cljs.core.async :as csp]))

(def api-url "https://www.versioneye.com/api/v2")
(defn clj->json [clj-dt]
  (.stringify js/JSON (clj->js clj-dt)))

(defn fetch-projects
  "pulls list of projects from the VersionEye API"
  [api-key success-fn error-fn] 
  (GET (str api-url "/projects")
       {:params {:api_key api-key}
        :response-format :json
        :keywords? true
        :handler success-fn
        :error-handler error-fn}))

(defn fetch-project-by-id
  [api-key project-id success-fn error-fn]
  (GET (str api-url "/projects/" project-id)
       {:params {:api_key api-key}
        :response-format :json
        :keywords? true
        :handler success-fn
        :error-handler error-fn}))

(defn ->form-data
  [upload-dt]
  (let [form-dt (js/FormData.)]
    (doseq [[field data] upload-dt]
      (.append form-dt (name field) data))
    form-dt))

(defn create-from-file
  [upload-dt api-key on-success on-failure]
  (POST (str api-url "/projects?api_key=" api-key)
        {:params {:api_key api-key}
         :response-format :json
         :keywords? true ;JSON-fields will be Clojure keywords
         :body (->form-data upload-dt)
         :handler on-success 
         :error-handler on-failure}))

(defn update-from-file
  [upload-dt project-id api-key on-success on-failure]
  (POST (str api-url "/projects/" project-id "?api_key=" api-key)
        {:params {:api_key api-key}
         :response-format :json
         :keywords? true
         :body (->form-data upload-dt)
         :handler on-success
         :error-handler on-failure}))

(defn sync-all
  [api-key on-success on-failure on-step]
  (let [api-db (atom {:selected nil
                      :synced-at (.valueOf (js/moment))
                      :items []
                      :details {}})
        done? (fn [state]
                "checks is syncing done"
                (and
                  (not (empty? (:details state)))
                  (= (count (:details state)) 
                     (count (:items state)))))

        failed-detail {:id nil
                       :error :sync-error
                       :reason "Failed to fetch information from API."}
        project-ch (csp/chan)
        progress-ch (csp/chan)
        list-handler (fn [project-ch progress-ch]
                      (fn [res]
                        (swap! api-db assoc :items res)
                        (csp/put! progress-ch
                                  {:from "project-list"
                                   :event "list-success"
                                   :message "success: got a list of projects"})
                        (doseq [proj res] 
                          (csp/put! project-ch (:id proj)))
                        (csp/close! project-ch)))
        list-error-handler (fn [project-ch progress-ch]
                             (fn [res]
                              (.error js/console
                                      "Failed to fetch projectlist. Stopped sync")
                              (csp/put! progress-ch
                                        {:from "project-list"
                                         :event "detail-failure"
                                         :message (str "Failed to fetch projects "
                                                       "from the API: " res)})
                              (csp/close! project-ch)
                              (csp/close! progress-ch)
                              (on-failure res)))
        detail-handler (fn [project-id progress-ch]
                         (fn [res]
                            (.log js/console "Got details for: " project-id)
                            (swap! api-db assoc-in [:details project-id] res)
                            (csp/put! progress-ch
                                      {:from "project-detail"
                                       :event "detail-success"
                                       :message (str "success: got project details "
                                                     " for " project-id)
                                       :id project-id})))
        detail-fail-handler
          (fn [project-id progress-ch]
             (fn [res]
               (swap! api-db assoc-in [:details project-id] failed-detail)
               (csp/put! progress-ch
                         {:from "project-detail"
                          :event "detail-fail"
                          :message (str "failure: got no project details "
                                        " for " project-id)
                          :id project-id})))]
    ;;fetch a projects list
    (fetch-projects api-key
                    (list-handler project-ch progress-ch)
                    (list-error-handler project-ch progress-ch))

    ;;fetch a detail of all the user projects
    (go-loop []
      (when-let [project-id (csp/<! project-ch)]
        (fetch-project-by-id api-key
                             project-id
                             (detail-handler project-id progress-ch)
                             (detail-fail-handler project-id progress-ch))
        (recur)))
    ;;track progress
    (go-loop []
      (when-let [ev (csp/<! progress-ch)]
        (on-step ev)
        (if (done? @api-db) 
          (on-success @api-db)
          (recur))))))


