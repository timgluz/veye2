// Compiled by ClojureScript 1.7.122 {:elide-asserts true}
goog.provide('veye2.actions.auth');
goog.require('cljs.core');
goog.require('secretary.core');
goog.require('veye2.storage');
goog.require('veye2.api');
veye2.actions.auth.authorize_BANG_ = (function veye2$actions$auth$authorize_BANG_(db,the_api_key){
var cached_users = (function (){var or__16566__auto__ = veye2.storage.get_key.call(null,"users");
if(cljs.core.truth_(or__16566__auto__)){
return or__16566__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var on_login_success = ((function (cached_users){
return (function (user_profile){
var cached_projects = veye2.storage.get_key.call(null,[cljs.core.str("projects-"),cljs.core.str(the_api_key)].join(''));
alert([cljs.core.str("APIkey: "),cljs.core.str(the_api_key)].join(''));

cljs.core.swap_BANG_.call(null,db,cljs.core.assoc,new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"active?","active?",459499776),true,new cljs.core.Keyword(null,"api-key","api-key",1037904031),the_api_key], null),new cljs.core.Keyword(null,"projects","projects",-364845983),(function (){var or__16566__auto__ = cached_projects;
if(cljs.core.truth_(or__16566__auto__)){
return or__16566__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());

veye2.storage.set_key_BANG_.call(null,"users",cljs.core.assoc.call(null,cached_users,the_api_key,user_profile));

return secretary.core.dispatch_BANG_.call(null,"/home");
});})(cached_users))
;
var on_login_failure = ((function (cached_users,on_login_success){
return (function (error){
return cljs.core.swap_BANG_.call(null,db,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword(null,"message","message",-406056002)], null),"Wrong API key");
});})(cached_users,on_login_success))
;
var temp__4423__auto__ = cljs.core.get.call(null,cached_users,the_api_key);
if(cljs.core.truth_(temp__4423__auto__)){
var the_user = temp__4423__auto__;
return on_login_success.call(null,the_user);
} else {
return veye2.api.fetch_me.call(null,the_api_key,on_login_success,on_login_failure);
}
});
veye2.actions.auth.logout_BANG_ = (function veye2$actions$auth$logout_BANG_(db){
var api_key = cljs.core.get_in.call(null,cljs.core.deref.call(null,db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword(null,"api-key","api-key",1037904031)], null));
cljs.core.swap_BANG_.call(null,db,cljs.core.assoc,new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"active?","active?",459499776),false,new cljs.core.Keyword(null,"api-key","api-key",1037904031),null], null));

return secretary.core.dispatch_BANG_.call(null,"/");
});

//# sourceMappingURL=auth.js.map