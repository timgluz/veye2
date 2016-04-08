(ns veye2.pages.shared.navbars
  (:require [reagent.core :as r :refer [cursor]]))

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
            [:a {:class "link is-info" :href "#"}
              [:i {:class "fa fa-eye-slash"}]
              "My projects"]]
          [:li {:class "navbar-item"}
            [:a {:class "link is-info" :href "#"}
              [:i {:class "fa fa-search"}]
              "Search"]] 
          [:li {:class "navbar-item"}
            [:a {:class "link is-info" :href "#"}
              [:I {:class "fa fa-power-off"}]
              "Logout"]]]]]])
