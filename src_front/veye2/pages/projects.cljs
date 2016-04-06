(ns veye2.pages.projects
  (:require [reagent.core :as r :refer [atom cursor]]
            [clojure.string :as string]
            [veye2.actions.projects :refer [sync-projects!]]))

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

(defn project-list [projects-cur]
  (let [filter-term (r/atom "")
        apply-filter (fn [items]
                       (let [ft filter-term
                             match? (fn [term project]
                                      (or
                                        (-> project :name string/lower-case (.includes term))
                                        (-> project
                                            :project_type
                                            string/lower-case
                                            (.includes term))))]
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
                (:name project)])]))))

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
          the-project (get-in @projects-cur [:details selected-id])
          n-outdated (count
                       (filter (fn [x] (true? (:outdated x)))
                               (:dependencies the-project)))
          on-close (fn [ev]
                     (swap! projects-cur assoc :selected nil))] 
      [:section
        [:span {:class "pull-right"}
            [:a {:class "button is-success is-outlined"
                 :on-click on-close}
              [:span.icon
                [:i {:class "fa fa-times"}]]
              [:span "close"]]]
        [:div.heading
          [:h1.title
           (:name the-project)
           [:small (str "(id: " (:id the-project) ")")]]]
        [:nav.navbar {:style {"backgroundColor" "floralwhite"}}
          [:div {:class "navbar-item is-text-centered"}
            [:p.heading "PkgManager"]
            [:p.title
               [:i {:class (str "fg-green "
                                (project-icon (:project_type the-project)))
                    :title (:project_type the-project)}]]]
          
          [:div {:class "navbar-item is-text-centered"}
            [:p.heading "Dependencies"]
            [:p.title (:dep_number the-project)]]
          [:div {:class "navbar-item is-text-centered"}
            [:p.heading "Outdated"]
            [:p.title n-outdated]]
          [:div {:class "navbar-item is-text-centered"}
            [:p.heading "License:Conflict"]
            [:p.title (:licenses_red the-project)]]] 
        [(project-dependency-table the-project)]])))

(defn project-summary-tile [db]
  (let [projects (get-in @db [:projects :details])
        n-projects (count projects)
        n-deps (->> projects
                  (map (fn [[id p]] (-> p :dependencies count)))
                  (apply +))
        n-outdated (->> projects
                        (map (fn [[id p]] (:dependencies p)))
                        (flatten)
                        (map (fn [dep] (:outdated dep)))
                        (filter true?)
                        (count))]
    (fn []
      [:div {:class "card is-half"}
        [:header {:class "card-header"}
          [:p {:class "card-header-title"}
            "Projects summary"]]
        [:div.card-content
          [:div.content
            [:ul
              [:li [:strong "Projects: "] (or n-projects "-")]
              [:li [:strong "Dependencies: "] (or n-deps "-")]
              [:li [:strong "Outdated: "] (or n-outdated "-")]]]]])))

(defn project-cache-tile [db]
  (let [from-time (get-in @db [:projects :updated_at] 0)
        time-ago (.fromNow (js/moment from-time))]
    (fn []
      [:div {:class "card"}
        [:header {:class "card-header"}
          [:p {:class "card-header-title"} "Sync details"]
          [:a {:class "card-header-icon"}
            [:i {:class "fa fa-refresh"
                 :title "Pull latest details from the VersionEye"}]]]
        [:div.card-content
          [:div.content
            "Cache was updated: " [:br]
            (str time-ago)]]
        [:footer.card-footer
          [:a {:class "card-footer-item"}
            [:i {:class "fa fa-refresh"}]
            [:span "re-import projects"]]]])))

(defn project-license-tile [db]
  (let [projects (vals (get-in @db [:projects :details]))
        n-unknown (->> projects
                      (map :licenses_unknown)  
                      (reduce + 0))
        n-red (->> projects
                   (map :licenses_red)
                   (reduce + 0))
        n-whitelist (->> projects
                         (map :license_whitelist)
                         (remove empty?)
                         (count))]
    (fn []
      [:div {:class "card is-half"}
        [:header {:class "card-header"}
          [:p {:class "card-header-title"}
            "Licenses overview"]]
        [:div.card-content
          [:div.content
            [:ul
              [:li [:strong "Unknown:  "] (or n-unknown "-")]
              [:li [:strong "In red: "] (or n-red "-")]
              [:li [:strong "In whitelist: "] (or n-whitelist "-")]]]]])))

(defn project-home [db]
  (fn []
    [:div.container
      [:div.content
        [:header.title "Projects dashboard"]
        [:p "Here you can manage your and your organization projects."
            [:br]
            ""]]
      [:div {:class "columns is-multiline"}
        [:div {:class "column is-half"}
          [project-summary-tile db]]
        [:div {:class "column is-half"}
          [project-license-tile db]]

        [:div {:class "column is-half"}
          [project-cache-tile db]] 
        [:div {:class "column is-half"}
          [:button {:class "button is-outline is-large is-info"}
            [:span.icon [:i {:class "fa fa-file-code-o"}]]
            "Upload from file"]]
      ]]))

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
                [project-home db]
                [project-detail projects-cur])]]]])))


