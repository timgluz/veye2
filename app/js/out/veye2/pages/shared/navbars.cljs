(ns veye2.pages.shared.navbars
  (:require [reagent.core :as r :refer [cursor]]
            [secretary.core :as secretary]))

(defn navbar []
  [:nav.navbar
    [:div.navbar-left
      [:div.navbar-item
        [:p {:class "subtitle is-5"}
          [:img {:class "image is-32x32"
                 :src "images/logo-small.png"}]]]
      [:div.navbar-item
        [:p {:class "is-text-centered"} "Veye/2"]]]

    [:div.navbar-right
      [:div.tabs
        [:ul
          [:li {:class "navbar-item"}
            [:a {:class "link is-info"
                 :on-click #(secretary/dispatch! "/home")}
              [:i {:class "fa fa-eye-slash"}]
              "My projects"]]
          [:li {:class "navbar-item"}
            [:a {:class "link is-info"
                 :on-click #(secretary/dispatch! "/upload")}
              [:i {:class "fa fa-upload"}]
              "Upload project"]]
          [:li {:class "navbar-item"}
            [:a {:class "link is-info" :href "#"}
              [:i {:class "fa fa-search"}]
              "Search"]] 
          [:li {:class "navbar-item"}
            [:a {:class "link is-info"
                 :on-click #(secretary/dispatch! "/")}
              [:i {:class "fa fa-power-off"}]
              "Logout"]]]]]])
