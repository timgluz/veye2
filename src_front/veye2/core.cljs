(ns veye2.core
  (:require [figwheel.client :as fw :include-macros true]
            [reagent.core :as reagent :refer [atom cursor]]
            [reagent.session :as session]
            [secretary.core :as secretary :refer-macros [defroute]]
            [goog.events :as events]
            [goog.history.EventType :as HistoryEventType]
            [veye2.pages.projects :as projects-page]
            [veye2.pages.login :as login-page]
            [veye2.pages.syncing :as syncing-page]
            [veye2.pages.upload :as upload-page]
            [veye2.utils :refer [current-ms]])
  (:import goog.History))

(fw/watch-and-reload
  :websocket-url   "ws://localhost:3449/figwheel-ws"
  :jsload-callback 'mount-root)

(enable-console-print!)

(defonce db
  (atom {:session {:active? false
                   :api-key nil}
         :users {} ; key : user-profile ; to keep auth-info for offline auth
         :projects {:selected nil
                    :items []
                    :details {}
                    :uploads [] ;to keep track of uploaded files
                    :synced-at 0}
         :progress [{:timestamp (current-ms)
                     :from "main"
                     :message "Going to pull latest data from the API"}]}))

(defroute "/" []
  (session/put! :current-page (login-page/render db)))

(defroute "/syncing" []
  (session/put! :current-page (syncing-page/render db)))

(defroute "/home" []  
  (session/put! :current-page (projects-page/render db)))

(defroute "/upload" []
  (session/put! :current-page (upload-page/render db)))

;(defroute "*" []
;  (js/alert "Not implemented"))

(defn session-handler []
  [(session/get :current-page)])

(defn mount-root []
  (reagent/render [session-handler]
                  (.getElementById js/document "app")))

(defn init! []
  (secretary/set-config! :prefix "#")
  (secretary/dispatch! "/")
  (mount-root))

(init!)
