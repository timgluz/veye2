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
