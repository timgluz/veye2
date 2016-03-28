// Compiled by ClojureScript 1.7.122 {:elide-asserts true}
goog.provide('veye2.pages.login');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('secretary.core');
goog.require('veye2.storage');
goog.require('veye2.api');
goog.require('veye2.utils');
veye2.pages.login.sync_projects_BANG_ = (function veye2$pages$login$sync_projects_BANG_(db){
var api_key = cljs.core.get_in.call(null,cljs.core.deref.call(null,db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword(null,"api-key","api-key",1037904031)], null));
var on_sync_end = ((function (api_key){
return (function (project_db){
cljs.core.swap_BANG_.call(null,db,cljs.core.assoc,new cljs.core.Keyword(null,"projects","projects",-364845983),project_db);

veye2.storage.set_key_BANG_.call(null,[cljs.core.str("projects-"),cljs.core.str(api_key)].join(''),project_db);

return secretary.core.dispatch_BANG_.call(null,"/home");
});})(api_key))
;
var on_sync_fail = ((function (api_key,on_sync_end){
return (function (error){
return secretary.core.dispatch_BANG_.call(null,"/");
});})(api_key,on_sync_end))
;
var on_sync_step = ((function (api_key,on_sync_end,on_sync_fail){
return (function (step_event){
var new_msg = cljs.core.assoc.call(null,step_event,new cljs.core.Keyword(null,"timestamp","timestamp",579478971),veye2.utils.current_ms.call(null));
var old_msgs = cljs.core.take.call(null,(9),new cljs.core.Keyword(null,"progress","progress",244323547).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db)));
return cljs.core.swap_BANG_.call(null,db,cljs.core.assoc,new cljs.core.Keyword(null,"progress","progress",244323547),cljs.core.cons.call(null,new_msg,old_msgs));
});})(api_key,on_sync_end,on_sync_fail))
;
return veye2.api.sync_all.call(null,api_key,on_sync_end,on_sync_fail,on_sync_step);
});
veye2.pages.login.login_form = (function veye2$pages$login$login_form(db){
var session_cur = reagent.core.cursor.call(null,db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103)], null));
var update_key = ((function (session_cur){
return (function (ev){
var api_key = ev.target.value;
return cljs.core.swap_BANG_.call(null,session_cur,cljs.core.assoc,new cljs.core.Keyword(null,"api-key","api-key",1037904031),api_key);
});})(session_cur))
;
var on_login = ((function (session_cur,update_key){
return (function (ev){
cljs.core.swap_BANG_.call(null,session_cur,cljs.core.assoc,new cljs.core.Keyword(null,"active?","active?",459499776),true);

var temp__4423__auto__ = veye2.storage.get_key.call(null,[cljs.core.str("projects-"),cljs.core.str(new cljs.core.Keyword(null,"api-key","api-key",1037904031).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,session_cur)))].join(''));
if(cljs.core.truth_(temp__4423__auto__)){
var cached_projects = temp__4423__auto__;
alert("using cached projects");

cljs.core.swap_BANG_.call(null,db,cljs.core.assoc,new cljs.core.Keyword(null,"projects","projects",-364845983),cached_projects);

return secretary.core.dispatch_BANG_.call(null,"/home");
} else {
veye2.pages.login.sync_projects_BANG_.call(null,db);

return secretary.core.dispatch_BANG_.call(null,"/syncing");
}
});})(session_cur,update_key))
;
return ((function (session_cur,update_key,on_login){
return (function (){
if(cljs.core.truth_(new cljs.core.Keyword(null,"active?","active?",459499776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,session_cur)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Current active session: ",new cljs.core.Keyword(null,"api-key","api-key",1037904031).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,session_cur))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"button is-primary",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (session_cur,update_key,on_login){
return (function (){
return secretary.core.dispatch_BANG_.call(null,"/home");
});})(session_cur,update_key,on_login))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"fa fa-diamond"], null)], null),"Go to projects"], null)], null);
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"login-form"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"input",new cljs.core.Keyword(null,"on-change","on-change",-732046149),update_key], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"button is-primary",new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_login], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"fa fa-diamond"], null)], null),"Login"], null)], null);
}
});
;})(session_cur,update_key,on_login))
});
veye2.pages.login.render = (function veye2$pages$login$render(db){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"hero is-medium is-primary is-bold"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.hero-content","div.hero-content",1708749333),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.title","h1.title",-2139952071),"Veye For Desktops"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.subtitle","h4.subtitle",1520938720),"Keep your dependencies up-to-date!"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"section"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.columns","div.columns",-437221213),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.column","div.column",-1380853326),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Login"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Your login is your VersionEye API token."], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.column","div.column",-1380853326),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [veye2.pages.login.login_form,db], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.footer","section.footer",522269118),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"content is-centered"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"fa fa-github"], null)], null)], null)], null)], null)], null)], null);
});
});

//# sourceMappingURL=login.js.map