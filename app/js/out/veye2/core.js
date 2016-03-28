// Compiled by ClojureScript 1.7.122 {:elide-asserts true}
goog.provide('veye2.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('secretary.core');
goog.require('goog.history.EventType');
goog.require('reagent.session');
goog.require('veye2.pages.projects');
goog.require('figwheel.client');
goog.require('veye2.pages.login');
goog.require('goog.History');
goog.require('goog.events');
goog.require('veye2.pages.syncing');
goog.require('veye2.utils');
figwheel.client.watch_and_reload.call(null,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws",new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369),new cljs.core.Symbol(null,"mount-root","mount-root",-1218647583,null));
cljs.core.enable_console_print_BANG_.call(null);
if(typeof veye2.core.db !== 'undefined'){
} else {
veye2.core.db = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"active?","active?",459499776),false,new cljs.core.Keyword(null,"api-key","api-key",1037904031),null], null),new cljs.core.Keyword(null,"projects","projects",-364845983),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"selected","selected",574897764),null,new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"details","details",1956795411),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.Keyword(null,"progress","progress",244323547),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"timestamp","timestamp",579478971),veye2.utils.current_ms.call(null),new cljs.core.Keyword(null,"from","from",1815293044),"main",new cljs.core.Keyword(null,"message","message",-406056002),"Going to pull latest data from the API"], null)], null)], null));
}
var action__24539__auto___25108 = (function (params__24540__auto__){
if(cljs.core.map_QMARK_.call(null,params__24540__auto__)){
var map__25105 = params__24540__auto__;
var map__25105__$1 = ((((!((map__25105 == null)))?((((map__25105.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25105.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25105):map__25105);
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),veye2.pages.login.render.call(null,veye2.core.db));
} else {
if(cljs.core.vector_QMARK_.call(null,params__24540__auto__)){
var vec__25107 = params__24540__auto__;
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),veye2.pages.login.render.call(null,veye2.core.db));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__24539__auto___25108);

var action__24539__auto___25112 = (function (params__24540__auto__){
if(cljs.core.map_QMARK_.call(null,params__24540__auto__)){
var map__25109 = params__24540__auto__;
var map__25109__$1 = ((((!((map__25109 == null)))?((((map__25109.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25109.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25109):map__25109);
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),veye2.pages.syncing.render.call(null,veye2.core.db));
} else {
if(cljs.core.vector_QMARK_.call(null,params__24540__auto__)){
var vec__25111 = params__24540__auto__;
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),veye2.pages.syncing.render.call(null,veye2.core.db));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/syncing",action__24539__auto___25112);

var action__24539__auto___25116 = (function (params__24540__auto__){
if(cljs.core.map_QMARK_.call(null,params__24540__auto__)){
var map__25113 = params__24540__auto__;
var map__25113__$1 = ((((!((map__25113 == null)))?((((map__25113.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25113.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25113):map__25113);
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),veye2.pages.projects.render.call(null,veye2.core.db));
} else {
if(cljs.core.vector_QMARK_.call(null,params__24540__auto__)){
var vec__25115 = params__24540__auto__;
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),veye2.pages.projects.render.call(null,veye2.core.db));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/home",action__24539__auto___25116);

veye2.core.session_handler = (function veye2$core$session_handler(){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.session.get.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180))], null);
});
veye2.core.mount_root = (function veye2$core$mount_root(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [veye2.core.session_handler], null),document.getElementById("app"));
});
veye2.core.init_BANG_ = (function veye2$core$init_BANG_(){
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");

secretary.core.dispatch_BANG_.call(null,"/");

return veye2.core.mount_root.call(null);
});
veye2.core.init_BANG_.call(null);

//# sourceMappingURL=core.js.map