(ns veye2.core
    (:require [cljs.nodejs :as nodejs]))

(def path (nodejs/require "path"))
(def Electron (nodejs/require "electron"))
(def BrowserWindow (nodejs/require "browser-window"))
(def crash-reporter (nodejs/require "crash-reporter"))
(def *win* (atom nil))
(def app (.-app Electron))

(defn -main []
  (.start crash-reporter
          (clj->js {:companyName "VersionEye"
                    :submitURL   "http://github.com/timgluz/veye2"}))

  ;; error listener
  (.on nodejs/process "error"
       (fn [err] (.log js/console err)))

  ;; window all closed listener
  (.on app "window-all-closed"
       (fn [] (if (not= (.-platform nodejs/process) "darwin")
                (.quit app))))

  ;; ready listener
  (.on app "ready"
       (fn []
         (reset! *win* (BrowserWindow. (clj->js {:width 800 :height 600})))

         ;; when no optimize comment out
         (.loadURL @*win* (str "file://" (.resolve path (js* "__dirname") "../index.html")))
         ;; when no optimize uncomment
         ;; (.loadURL @*win* (str "file://" (.resolve path (js* "__dirname") "../../../index.html")))

         (.on @*win* "closed" (fn [] (reset! *win* nil))))))

(nodejs/enable-util-print!)
(set! *main-cli-fn* -main)
