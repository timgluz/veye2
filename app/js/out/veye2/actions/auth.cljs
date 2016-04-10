(ns veye2.actions.auth
  (:require [secretary.core :as secretary]
            [veye2.storage :as storage]
            [veye2.api :as api]))

(defn authorize!
  [db the-api-key]
  (let [cached-users (or (storage/get-key "users") {})
        on-login-success (fn [user-profile]
                           (let [cached-projects (storage/get-key
                                                   (str "projects-" the-api-key))
                                 updated-users (assoc cached-users the-api-key user-profile)]
                             (swap! db assoc
                                    :session {:active? true
                                              :api-key the-api-key}
                                    :projects (or cached-projects {})
                                    :users updated-users)
                             (storage/set-key! "users" updated-users)
                             (secretary/dispatch! "/home")))
        on-login-failure (fn [error]
                           (swap! db assoc-in [:session :message] "Wrong API key"))]
    (if-let [the-user (get cached-users the-api-key)]
      (on-login-success the-user)
      (api/fetch-me the-api-key on-login-success on-login-failure))))

(defn logout!
  [db]
  (let [api-key (get-in @db [:session :api-key])]
    (swap! db assoc :session {:active? false
                              :api-key nil})
    (secretary/dispatch! "/")))
