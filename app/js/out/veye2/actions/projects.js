// Compiled by ClojureScript 1.7.122 {:elide-asserts true}
goog.provide('veye2.actions.projects');
goog.require('cljs.core');
goog.require('secretary.core');
goog.require('veye2.storage');
goog.require('veye2.api');
goog.require('veye2.utils');
veye2.actions.projects.sync_projects_BANG_ = (function veye2$actions$projects$sync_projects_BANG_(db){
var max_queue_size = (10);
var api_key = cljs.core.get_in.call(null,cljs.core.deref.call(null,db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword(null,"api-key","api-key",1037904031)], null));
var on_sync_end = ((function (max_queue_size,api_key){
return (function (project_db){
cljs.core.swap_BANG_.call(null,db,cljs.core.assoc,new cljs.core.Keyword(null,"projects","projects",-364845983),project_db);

veye2.storage.set_key_BANG_.call(null,[cljs.core.str("projects-"),cljs.core.str(api_key)].join(''),project_db);

return secretary.core.dispatch_BANG_.call(null,"/home");
});})(max_queue_size,api_key))
;
var on_sync_fail = ((function (max_queue_size,api_key,on_sync_end){
return (function (error){
var error_msg = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"from","from",1815293044),"sync-projects!",new cljs.core.Keyword(null,"timestamp","timestamp",579478971),veye2.utils.current_ms.call(null),new cljs.core.Keyword(null,"message","message",-406056002),[cljs.core.str("Failed to sync projects: "),cljs.core.str(error)].join('')], null);
var old_msgs = cljs.core.take.call(null,max_queue_size,new cljs.core.Keyword(null,"progress","progress",244323547).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db)));
cljs.core.swap_BANG_.call(null,db,cljs.core.assoc,new cljs.core.Keyword(null,"progress","progress",244323547),cljs.core.cons.call(null,error_msg,old_msgs));

return secretary.core.dispatch_BANG_.call(null,"/");
});})(max_queue_size,api_key,on_sync_end))
;
var on_sync_step = ((function (max_queue_size,api_key,on_sync_end,on_sync_fail){
return (function (step_event){
var new_msg = cljs.core.assoc.call(null,step_event,new cljs.core.Keyword(null,"timestamp","timestamp",579478971),veye2.utils.current_ms.call(null));
var old_msgs = cljs.core.take.call(null,max_queue_size,new cljs.core.Keyword(null,"progress","progress",244323547).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db)));
return cljs.core.swap_BANG_.call(null,db,cljs.core.assoc,new cljs.core.Keyword(null,"progress","progress",244323547),cljs.core.cons.call(null,new_msg,old_msgs));
});})(max_queue_size,api_key,on_sync_end,on_sync_fail))
;
return veye2.api.sync_all.call(null,api_key,on_sync_end,on_sync_fail,on_sync_step);
});

//# sourceMappingURL=projects.js.map