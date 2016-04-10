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
/**
 * creates a new project by uploading project file
 */
veye2.actions.projects.upload_project_BANG_ = (function veye2$actions$projects$upload_project_BANG_(db,upload_dt){
var api_key = cljs.core.get_in.call(null,cljs.core.deref.call(null,db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword(null,"api-key","api-key",1037904031)], null));
var on_success = ((function (api_key){
return (function (res){
var project_dt = res;
console.log("Project-id: ",new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(project_dt));

cljs.core.swap_BANG_.call(null,db,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"projects","projects",-364845983),new cljs.core.Keyword(null,"details","details",1956795411),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(project_dt)], null),project_dt);

cljs.core.swap_BANG_.call(null,db,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"projects","projects",-364845983),new cljs.core.Keyword(null,"uploads","uploads",-1652488906)], null),cljs.core.cons.call(null,cljs.core.assoc.call(null,upload_dt,new cljs.core.Keyword(null,"upload","upload",-255769218),null,new cljs.core.Keyword(null,"project-id","project-id",206449307),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(project_dt),new cljs.core.Keyword(null,"uploaded-at","uploaded-at",329122281),veye2.utils.current_ms.call(null)),cljs.core.take.call(null,(9),cljs.core.get_in.call(null,cljs.core.deref.call(null,db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"projects","projects",-364845983),new cljs.core.Keyword(null,"uploads","uploads",-1652488906)], null)))));

veye2.storage.set_key_BANG_.call(null,[cljs.core.str("projects-"),cljs.core.str(api_key)].join(''),new cljs.core.Keyword(null,"projects","projects",-364845983).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db)));

cljs.core.swap_BANG_.call(null,db,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"projects","projects",-364845983),new cljs.core.Keyword(null,"selected","selected",574897764)], null),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(project_dt));

return secretary.core.dispatch_BANG_.call(null,"/home");
});})(api_key))
;
var on_failure = ((function (api_key,on_success){
return (function (err){
return alert("Failed to upload a project: ",cljs.core.pr_str.call(null,err));
});})(api_key,on_success))
;
if(((new cljs.core.Keyword(null,"project-id","project-id",206449307).cljs$core$IFn$_invoke$arity$1(upload_dt) == null)) || (cljs.core._EQ_.call(null,"true",new cljs.core.Keyword(null,"temp","temp",1791541284).cljs$core$IFn$_invoke$arity$1(upload_dt)))){
return veye2.api.create_from_file.call(null,upload_dt,api_key,on_success,on_failure);
} else {
return veye2.api.update_from_file.call(null,cljs.core.dissoc.call(null,upload_dt,new cljs.core.Keyword(null,"project-id","project-id",206449307)),new cljs.core.Keyword(null,"project-id","project-id",206449307).cljs$core$IFn$_invoke$arity$1(upload_dt),api_key,on_success,on_failure);
}
});

//# sourceMappingURL=projects.js.map