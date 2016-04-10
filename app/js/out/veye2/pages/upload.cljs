(ns veye2.pages.upload
  (:require [reagent.core :as r]
            [clojure.string :as string]
            [veye2.actions.projects :refer [upload-project!]]
            [veye2.pages.shared.navbars :refer [navbar]]
            [veye2.utils :refer [time-ago]]))

(defn upload-history [db]
  (let [upload-cur (r/cursor db [:projects :uploads])
        get-name (fn [upload-dt]
                   (str
                     (if (empty? (:name upload-dt))
                       (.-name (:upload upload-dt))
                       (:name upload-dt))))]
    (fn []
      [:nav.panel
        [:div.panel-heading
          "Upload history"]
        (for [u @upload-cur]
          [:a {:class "panel-block"
               :on-click (fn [ev])}
            ^{:key (:project-id u)}
            [:span.panel-icon
              [:i {:class "fa fa-file-code-o"}]]
            [:span
              (get-name u)
              [:small " - " (time-ago (:uploaded-at u))]]])])))

(defn upload-form [db]
  (let [orgs-cur (r/cursor db [:user :organizations])
        form-vals (r/atom {:project-id nil
                           :upload nil
                           :visibility "public"
                           :name ""
                           :orga_name ""
                           :team_name ""
                           :temp "true"})]
    (fn []
      [:div {:id "upload-form"}
        [:h3.title "Create a new project:"]
        [:div {:class "control"}
          [:label.label "Pick a file"]
          [:input {:type "file"
                   :class "button in-line"
                   :placeholder "Select a project file"
                   :on-change (fn [ev]
                               (let [the-file (-> ev .-target .-files (.item 0))]
                                 ;;TODO: check is the project file supported & size
                                 (swap! form-vals assoc :upload the-file)))}]]
        
        [:div {:class "control"}
          [:label {:class "checkbox"
                   :on-click (fn [ev]
                               (swap! form-vals assoc
                                      :temp (if (= "true" (:temp @form-vals))
                                              "false"
                                              "true"))
                               (.stopPropagation ev))}
            [:input
              (merge {:type "checkbox"}
                     (when (= "true" (:temp @form-vals))
                       {:checked "checked"}))
             "create temporary project"]]]       
       
        [:div {:class "control"
               :style {:display (if (= "true" (:temp @form-vals))
                                      "block"
                                      "none")}}
         [:p {:class "title is-4"} "Little remark"]
         [:p "It will create a temporary project, that will not stored
             at VersionEye. "
            [:br ]
            "Also this project will be removed 
             from the project list of this App after fetching newest data
            from the VersionEye."]]

        [:div {:style {:display (if (= "false" (:temp @form-vals))
                                     "block"
                                     "none")}} 
          [:div {:class "control"}
            [:label.label "Project's name"]
            [:input {:class "input"
                     :type "text"
                     :placeholder "Project's name"
                     :default-value (:name @form-vals)
                     :on-change (fn [ev]
                                  (let [the-name (-> ev .-target .-value str)]
                                    (swap! form-vals assoc :name the-name)))}]]
           
          [:div {:class "control"}
            [:label.label "Project's visibility: " (:visibility @form-vals)]
            [:label.radio
              {:on-click (fn [ev]
                           (swap! form-vals assoc :visibility "private")
                           (.stopPropagation ev))}
              [:input 
                (merge {:type "radio"
                        :name "visibility"}
                       (when (= "private" (:visibility @form-vals))
                          {:checked "checked"}))
               "Private"]]
            [:label.radio
              {:on-click #(swap! form-vals assoc :visibility "public")}
              [:input
                (merge {:type "radio"
                        :name "visibility"
                        :default-checked true}
                        (when (= "public" (:visibility @form-vals))
                          {:checked "checked"}))
               "Public"]]]

          [:div {:class "control"}
            [:label.label "Organization name:"]
            [:small
              "It attaches the new project to the specified organization."]
            [:input
              {:class "input"
               :type "text"
               :placeholder "Organization"
               :on-change (fn [ev]
                            (let [new-val (-> ev .-target .-value str)]
                              (swap! form-vals assoc :orga_name new-val)))}]]
          
          [:div {:class "control"}
            [:label.label "Team name:"]
            [:small
              "It attaches the new project to the specified team."]
            [:input
              {:class "input"
               :type "text"
               :placeholder "Optional team name"
               :on-change (fn [ev]
                            (let [new-val (-> ev .-target .-value str)]
                              (swap! form-vals assoc :team_name new-val)))}]]]

        [:div {:class "control"}
          [:button {:class "button is-info"
                    :on-click (fn [ev]
                                (upload-project! db @form-vals))}
            "Upload"]]])))

(defn render [db]
  (let [form-state (r/atom :display)]
    (fn []
      [:section {:class "is-medium"}
        [navbar]
        [:div.container
          [:div.columns
            [:div {:class "column is-third"}
              [upload-history db]]
            [:div {:class "column is-auto"}
              [upload-form db]]]]])))
