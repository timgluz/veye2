// Compiled by ClojureScript 1.7.122 {:elide-asserts true}
goog.provide('veye2.api');
goog.require('cljs.core');
goog.require('ajax.core');
goog.require('clojure.string');
goog.require('cljs.core.async');
veye2.api.api_url = "https://www.versioneye.com/api/v2";
/**
 * pulls list of projects from the VersionEye API
 */
veye2.api.fetch_projects = (function veye2$api$fetch_projects(api_key,success_fn,error_fn){
return ajax.core.GET.call(null,[cljs.core.str(veye2.api.api_url),cljs.core.str("/projects")].join(''),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"api_key","api_key",-1567758224),api_key], null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true,new cljs.core.Keyword(null,"handler","handler",-195596612),success_fn,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),error_fn], null));
});
