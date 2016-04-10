(ns veye2.actions.projects
  (:require [secretary.core :as secretary]
            [veye2.storage :as storage]
            [veye2.api :as api]
            [veye2.utils :refer [current-ms]]))

(defn sync-projects! [db]
  (let [max-queue-size 10 ;;how many progress messages to keep
        api-key (get-in @db [:session :api-key])
        on-sync-end (fn [project-db]
                      (swap! db assoc :projects project-db)
                      (storage/set-key! (str "projects-" api-key) project-db)
                      (secretary/dispatch! "/home"))
        on-sync-fail (fn [error]
                       (let [error-msg {:from "sync-projects!"
                                        :timestamp (current-ms)
                                        :message (str "Failed to sync projects: " error)}
                             old-msgs (take max-queue-size (:progress @db))]
                         (swap! db assoc :progress (cons error-msg old-msgs))
                         (secretary/dispatch! "/")))
        on-sync-step (fn [step-event]
                       (let [new-msg (assoc step-event :timestamp (current-ms))
                             old-msgs (take max-queue-size (:progress @db))]
                         (swap! db assoc :progress (cons new-msg old-msgs))))]
    (api/sync-all api-key
                  on-sync-end
                  on-sync-fail
                  on-sync-step)))


(defn upload-project!
  "creates a new project by uploading project file"
  [db upload-dt]
  (let [api-key (get-in @db [:session :api-key])
        on-success (fn [res]
                     (let [project-dt res]
                      (.log js/console "Project-id: " (:id project-dt))
                       
                      (swap! db assoc-in [:projects :details (:id project-dt)] project-dt)
                      (swap! db assoc-in [:projects :uploads]
                             (cons
                               (assoc upload-dt
                                      :project-id (:id project-dt)
                                      :uploaded-at (current-ms))
                               (take 9 (get-in @db [:projects :uploads]))))
                      ;;update stored project data
                      (storage/set-key! (str "projects-" api-key) (:projects @db))
                      (swap! db assoc-in [:projects :selected] (:id project-dt))
                      (secretary/dispatch! "/home")))
        on-failure (fn [err]
                   (let []
                     (js/alert "Failed to upload a project: " (pr-str err))
                     ))]
    (if (or
          (nil? (:project-id upload-dt))
          (= "true" (:temp upload-dt)))
      (api/create-from-file upload-dt api-key on-success on-failure)
      (api/update-from-file (dissoc upload-dt :project-id)
                            (:project-id upload-dt)
                            api-key
                            on-success
                            on-failure))))
