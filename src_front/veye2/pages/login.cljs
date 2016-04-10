(ns veye2.pages.login
  (:require [reagent.core :as r :refer [cursor atom]]
            [secretary.core :as secretary]
            [veye2.storage :as storage]
            [veye2.actions.auth :refer [authorize! logout!]]))

;;TODO: add authorization - storage/get-key "session-<apikey>" == true or API call
(defn login-form [db]
  (let [session-cur (cursor db [:session])
        the-api-key (r/atom "")
        update-key (fn [ev]
                    (reset! the-api-key (-> ev .-target .-value str)))]
    (fn []
      (if (:active? @session-cur)
        [:div
          [:p "Current active session: " (:api-key @session-cur)]
          [:button {:class "button is-primary"
                    :on-click #(secretary/dispatch! "/home")}
            [:i {:class "fa fa-diamond"}]
            "Go to projects"]
          [:button {:class "button is-danger"
                    :on-click #(logout! db)}
            [:i {:class "fa fa-sign-out"}]
            "Close active session"]]
        ;;- when no active session
        [:div {:class "login-form control"}
          [:input {:class (str "input "
                               (when-not (empty? (:message @session-cur))
                                "is-danger"))
                   :on-change update-key}]
         (when-not (empty? (:message @session-cur)) 
           [:span {:class "help is-danger"} (:message @session-cur)])
          
         [:button {:class "button is-primary"
                    :on-click #(authorize! db @the-api-key) }
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

