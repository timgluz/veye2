(ns veye2.pages.login
  (:require [reagent.core :as r :refer [cursor atom]]
            [secretary.core :as secretary]
            [veye2.storage :as storage]
            [veye2.api :as api]
            [veye2.utils :refer [current-ms]]))

(defn sync-projects! [db]
  (let [api-key (get-in @db [:session :api-key]) 
        on-sync-end (fn [project-db]
                      (swap! db assoc :projects project-db)
                      (storage/set-key! (str "projects-" api-key) project-db)
                      (secretary/dispatch! "/home"))
        on-sync-fail (fn [error]
                       (secretary/dispatch! "/"))
        on-sync-step (fn [step-event]
                       (let [new-msg (assoc step-event :timestamp (current-ms)) 
                             old-msgs (take 9 (:progress @db))]
                         (swap! db assoc :progress (cons new-msg old-msgs))))]
    (api/sync-all api-key
                  on-sync-end
                  on-sync-fail
                  on-sync-step)))

;;TODO: add authorization - storage/get-key "session-<apikey>" == true or API call
(defn login-form [db]
  (let [session-cur (cursor db [:session])
        update-key (fn [ev]
                    (let [api-key (-> ev .-target .-value)]
                      (swap! session-cur assoc :api-key api-key)))
        on-login (fn [ev]
                  (swap! session-cur assoc :active? true)
                  (if-let [cached-projects (storage/get-key
                                             (str "projects-" (:api-key @session-cur)))]
                    (do
                      (js/alert "using cached projects")
                      (swap! db assoc :projects cached-projects)
                      (secretary/dispatch! "/home"))
                    ;; when no saved projects for the APIkey 
                    (do
                      (sync-projects! db)
                      (secretary/dispatch! "/syncing"))))]
    (fn []
      (if (:active? @session-cur)
        [:div
          [:p "Current active session: " (:api-key @session-cur)]
          [:button {:class "button is-primary"
                    :on-click #(secretary/dispatch! "/home")}
            [:i {:class "fa fa-diamond"}]
            "Go to projects"]]
        ;;- when no active session
        [:div {:class "login-form"}
          [:input {:class "input"
                   :on-change update-key}]
          [:button {:class "button is-primary"
                    :on-click on-login }
            [:i {:class "fa fa-diamond"}]
            "Login"]]))))

(defn render [db]
  (fn []
    [:div
      [:section {:class "hero is-medium is-primary is-bold"}
        [:div.hero-content
          [:div.container
            [:h1.title "Veye For Desktops"]
            [:h4.subtitle "Keep your dependencies up-to-date!"]]]]
      [:section {:class "section"}
        [:div.container
          [:div.columns
           [:div.column
            [:h3 "Login"]
            [:p "Your login is your VersionEye API token."]]
           [:div.column
             [login-form db]]]]]
      [:section.footer
        [:div.container
          [:div {:class "content is-centered"}
            [:span [:i {:class "fa fa-github"}]]]]]]))

