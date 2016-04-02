(ns veye2.pages.projects
  (:require [reagent.core :as r :refer [atom cursor]]
            [clojure.string :as string]))

(defn project-icon [lang]
  (case (string/lower-case lang)
    "lein"      "icon-clojure"
    "rubygem"   "icon-ruby"
    "node.js"   "icon-nodejs"
    "maven2"    "icon-java"
    "bower"     "icon-css"
    "sbt"       "icon-scala"
    "composer"  "icon-php"
    "cocoapods" "icon-objc"
    "gradle"    "icon-gradle"
    "biicode"   "icon-cplusplus"
    :else "icon-script"))

(defn navbar []
  [:nav.navbar
    [:div.navbar-left
      [:div.navbar-item
        [:p {:class "subtitle is-5"} "Veye/2"]]]

    [:div.navbar-right
      [:p {:class "navbar-item"}
        [:a {:class "link is-info" :href "#"} "My projects |"]]
      [:p {:class "navbar-item"}
        [:a {:class "link is-info" :href "#"} "Search |"]] 
      [:p {:class "navbar-item"}
        [:a {:class "link is-info" :href "#"} "Logout"]]]])

(defn project-list [projects-cur]
  (let [filter-term (r/atom "")
        apply-filter (fn [items]
                       (let [ft filter-term
                             match? (fn [term project]
                                      (.includes (:name project) term))]
                         (if (empty? @ft)
                           items
                           (doall
                             (filter #(match? @ft %) items)))))
        on-select (fn [ev]
                    (let [item-el (.closest (.-target ev) "a.panel-block")
                          project-id (.getAttribute item-el "data-id")]
                      (swap! projects-cur assoc :selected project-id)))
        on-filter-update (fn [ev]
                           (let [ft filter-term
                                 v (-> ev .-target .-value str)]
                              (reset! ft v)))
        on-filter-reset (fn [ev]
                          (let [ft filter-term ;;keep the variable in the local context
                                filter-el (.getElementById
                                            js/document
                                            "project-filter-input")]
                            (reset! ft "")
                            (set! (.-value filter-el) "")))]
    (fn []
      (let [filtered-projects (apply-filter (:items @projects-cur))]
        [:nav.panel 
          [:p.panel-heading "Projects: " (count filtered-projects)]
          [:p {:class "control has-addons"}
            [:input {:id "project-filter-input"
                     :class "input project-filter"
                     :type "text"
                     :placeholder "Filter projects"
                     :default-value (str @filter-term)
                     :on-change on-filter-update}]
            [:a {:class "button is-primary"
                 :on-click on-filter-reset
                 :title "Clear the filter"}
              [:i {:class "fa fa-remove"}]]]
          (for [project filtered-projects]
            ^{:key (:id project)}
              [:a {:href "#"
                   :class (str "panel-block "
                               (when (= (:selected @projects-cur)
                                        (:id project))
                                 "is-active"))
                   :data-id (:id project)
                   :on-click on-select}
                [:span.menu-icon
                  [:i {:class (str "fg-green " (project-icon (:project_type project)))}]]
                (:name project)])
          [:div.menu-block
            [:button {:class "button is-primary is-outlined is-fullwidth"}
              "Reload"]]]))))

(defn project-dependency-table
  [the-project]
  (fn []
    [:table.table
      [:thead
        [:tr
          [:th "Package name"]
          [:th "Outdated?"]   
          [:th "Locked version"]
          [:th "Newest version"]
          [:th "Licenses"]]]
      [:tbody
       (for [dep (sort-by :outdated > (:dependencies the-project))]
         ^{:key (str (:prod_key dep) "-" (:version_requested dep))}
          [:tr 
            [:td (:name dep)]
            [:td
              (if (true? (:outdated dep))
                [:i {:class "fa fa-frown-o fg-red" :title "Outdated"}]
                [:i {:class "fa fa-smile-o fg-green" :title "Fine"}])]
            [:td  
              (:version_requested dep)]
            [:td (:version_current dep)]
            [:td {:class "table-link"}
              (for [lic (:licenses dep)]
              [:a {:href (:url lic) :target "_new"}
                [:span (:name lic)]])]])]]))

(defn project-detail [projects-cur]
  (fn []
    (let [selected-id (:selected @projects-cur)
          the-project (get-in @projects-cur [:details selected-id])] 
      [:section
        [:div.heading
          [:h1.title
           [:i {:class (str "fg-blue " (project-icon (:project_type the-project)))}]
           (:name the-project)
           [:small (str "(id: " (:id the-project) ")")]]]
        [:nav.navbar {:style {"backgroundColor" "floralwhite"}}
          [:div {:class "navbar-item is-text-centered"}
            [:p.heading "Source"]
            [:p.title
               (:source the-project)]]
          [:div {:class "navbar-item is-text-centered"}
            [:p.heading "Visibility"]
            [:p.title (if (true? (:public the-project)) "public" "private")]]
          [:div {:class "navbar-item is-text-centered"}
            [:p.heading "Dependencies"]
            [:p.title (:dep_number the-project)]]
          [:div {:class "navbar-item is-text-centered"}
            [:p.heading "License:Conflict"]
            [:p.title (:licenses_red the-project)]]] 
        [(project-dependency-table the-project)]])))

(defn render [db]
  (let [projects-cur (cursor db [:projects])]
    (fn []
      [:section {:class "is-medium"}
        [navbar]
        [:div.container
          [:div.columns
            [:div {:class "column is-third"}
              [project-list projects-cur]]
            [:div {:class "column is-auto"}
              (if (nil? (:selected @projects-cur))
                [:p  "Click on the project"]
                [project-detail projects-cur])]]]])))


