// Compiled by ClojureScript 1.7.122 {:elide-asserts true}
goog.provide('veye2.utils');
goog.require('cljs.core');
goog.require('clojure.string');
veye2.utils.current_ms = (function veye2$utils$current_ms(){
return Math.floor((new Date()).getTime());
});
veye2.utils.epoch = (function veye2$utils$epoch(){
var current_dt = (new Date());
return Math.floor((current_dt.getTime() / (1000)));
});

//# sourceMappingURL=utils.js.map