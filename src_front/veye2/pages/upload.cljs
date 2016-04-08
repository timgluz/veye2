(ns veye2.pages.upload
  (:require [reagent.core :as r]
            [clojure.string :as string]
            [veye2.pages.shared.navbars :refer [navbar]]))

(defn upload-steps []
  [:div
    [:ol
      [:li "Pick file"]
      [:li "Update settings"]
      [:li "Upload"]
      [:li "Result!"]]])

(defn upload-form [form-state db]
  (let [orgs-cur (r/cursor db [:user :organizations])
        form-vals (r/atom {:upload nil
                           :visibility "public"
                           :name ""
                           :orga_name ""
                           :team_name ""
                           :temp "false"})]
    (fn []
      [:div {:id "upload-form"}
        [:h3.title "Create a new project:"]
        [:div {:class "control"}
          [:label.label "Pick a file"]
          [:input {:type "file"
                   :placeholder "Select a project file"}]]
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
                      :name "visibility"}
                      (when (= "public" (:visibility @form-vals))
                        {:checked "checked"}))
             "Public"]]]
        [:div {:class "control"}
          [:label.label "Organization & team"]
          [:span.select
            [:select
              {:on-select (fn [ev]
                            (js/alert (-> ev .-target .-value))
                            (.stopPropagation ev)
                            )}
              [:option {:id "" :selected true} ""]
              [:option {:id "VersionEye/devops"} "VersionEye/devops"]
              [:option {:id "VersionEye/services"} "VersionEye/service"]]]]
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
             "save it on VersionEye"]]]
        [:div {:class "control"}
          [:button {:class "button is-info"}
            "Upload"]] 
       ])))

(defn render [db]
  (let [form-state (r/atom :display)]
    (fn []
      [:section {:class "is-medium"}
        [navbar]
        [:div.container
          [:div.columns
            [:div {:class "column is-third"}
              [upload-steps]]
            [:div {:class "column is-auto"}
              [upload-form form-state db]]]]])))
