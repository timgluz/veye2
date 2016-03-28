// Compiled by ClojureScript 1.7.122 {:elide-asserts true}
goog.provide('veye2.storage');
goog.require('cljs.core');
goog.require('cljs.reader');
veye2.storage.the_storage = localStorage;
/**
 * transfroms a key to valid js string which can be used for localStorage
 */
veye2.storage.to_LS_key = (function veye2$storage$to_LS_key(the_key){
if((the_key instanceof cljs.core.Keyword)){
return cljs.core.name.call(null,the_key);
} else {
if(typeof the_key === 'number'){
return [cljs.core.str(the_key)].join('');
} else {
if(typeof the_key === 'string'){
return the_key;
} else {
return throw$("unsupported type for localStorage key");

}
}
}
});
/**
 * gets a value from localStorage and transforms it to CLJ object
 */
veye2.storage.get_key = (function veye2$storage$get_key(the_key){
var G__36460 = veye2.storage.the_storage;
var G__36460__$1 = (((G__36460 == null))?null:G__36460.getItem(veye2.storage.to_LS_key.call(null,the_key)));
var G__36460__$2 = (((G__36460__$1 == null))?null:cljs.reader.read_string.call(null,G__36460__$1));
return G__36460__$2;
});
/**
 * saves clojure object into localStorage
 */
veye2.storage.set_key_BANG_ = (function veye2$storage$set_key_BANG_(the_key,the_value){
return veye2.storage.the_storage.setItem(veye2.storage.to_LS_key.call(null,the_key),cljs.core.prn_str.call(null,the_value));
});
/**
 * removes item from localStorage
 */
veye2.storage.remove_key_BANG_ = (function veye2$storage$remove_key_BANG_(the_key){
return veye2.storage.the_storage.removeItem(veye2.storage.to_LS_key.call(null,the_key));
});
veye2.storage.clear_BANG_ = (function veye2$storage$clear_BANG_(){

return veye2.storage.the_storage.clear();
});

//# sourceMappingURL=storage.js.map