(ns veye2.utils
  (:require [clojure.string :as string]))

(defn current-ms []
  (.floor js/Math
          (.getTime (js/Date.))))

(defn epoch []
  (let [current-dt (js/Date.)]
    (.floor js/Math
      (/ (.getTime current-dt) 1000))))

(defn time-ago [from-time]
  (.fromNow (js/moment from-time)))
