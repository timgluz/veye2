(ns veye2.storage
  (:require [cljs.reader :refer [read-string]]))

(def the-storage js/localStorage)

(defn to-LS-key
  "transfroms a key to valid js string which can be used for localStorage"
  [the-key]
  (cond
    (keyword? the-key) (name the-key)
    (number? the-key) (str the-key)
    (string? the-key) the-key
    :else (js/throw "unsupported type for localStorage key")))

(defn get-key
  "gets a value from localStorage and transforms it to CLJ object"
  [the-key]
  (some-> the-storage
          (.getItem (to-LS-key the-key))
          read-string))

(defn set-key!
  "saves clojure object into localStorage"
  [the-key the-value]
  (.setItem the-storage
            (to-LS-key the-key)
            (prn-str the-value)))

(defn remove-key!
  "removes item from localStorage"
  [the-key]
  (.removeItem the-storage (to-LS-key the-key)))

(defn clear! []
  "swipes entire localStorage"
  (.clear the-storage))

