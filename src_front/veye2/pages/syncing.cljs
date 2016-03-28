(ns veye2.pages.syncing
  (:require [reagent.core :as r :refer [cursor atom]]))

(defn render [db]
  (let [progress-cur (cursor db [:progress])]
    (fn []
      [:div.container
        (for [msg @progress-cur]
          ^{:key (:timestamp msg)}
          [:div {:class "message is-info"}
            [:div.message-header
             (str (:from msg) " - " (:timestamp msg))]
            [:div.message-body (str (:message msg))]])])))
