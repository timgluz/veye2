// Compiled by ClojureScript 1.7.122 {:elide-asserts true}
goog.provide('veye2.api');
goog.require('cljs.core');
goog.require('ajax.core');
goog.require('clojure.string');
goog.require('cljs.core.async');
veye2.api.api_url = "https://www.versioneye.com/api/v2";
veye2.api.clj__GT_json = (function veye2$api$clj__GT_json(clj_dt){
return JSON.stringify(cljs.core.clj__GT_js.call(null,clj_dt));
});
/**
 * pulls list of projects from the VersionEye API
 */
veye2.api.fetch_projects = (function veye2$api$fetch_projects(api_key,success_fn,error_fn){
return ajax.core.GET.call(null,[cljs.core.str(veye2.api.api_url),cljs.core.str("/projects")].join(''),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"api_key","api_key",-1567758224),api_key], null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true,new cljs.core.Keyword(null,"handler","handler",-195596612),success_fn,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),error_fn], null));
});
veye2.api.fetch_project_by_id = (function veye2$api$fetch_project_by_id(api_key,project_id,success_fn,error_fn){
return ajax.core.GET.call(null,[cljs.core.str(veye2.api.api_url),cljs.core.str("/projects/"),cljs.core.str(project_id)].join(''),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"api_key","api_key",-1567758224),api_key], null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true,new cljs.core.Keyword(null,"handler","handler",-195596612),success_fn,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),error_fn], null));
});
veye2.api.__GT_form_data = (function veye2$api$__GT_form_data(upload_dt){
var form_dt = (new FormData());
var seq__22224_22230 = cljs.core.seq.call(null,upload_dt);
var chunk__22225_22231 = null;
var count__22226_22232 = (0);
var i__22227_22233 = (0);
while(true){
if((i__22227_22233 < count__22226_22232)){
var vec__22228_22234 = cljs.core._nth.call(null,chunk__22225_22231,i__22227_22233);
var field_22235 = cljs.core.nth.call(null,vec__22228_22234,(0),null);
var data_22236 = cljs.core.nth.call(null,vec__22228_22234,(1),null);
form_dt.append(cljs.core.name.call(null,field_22235),data_22236);

var G__22237 = seq__22224_22230;
var G__22238 = chunk__22225_22231;
var G__22239 = count__22226_22232;
var G__22240 = (i__22227_22233 + (1));
seq__22224_22230 = G__22237;
chunk__22225_22231 = G__22238;
count__22226_22232 = G__22239;
i__22227_22233 = G__22240;
continue;
} else {
var temp__4425__auto___22241 = cljs.core.seq.call(null,seq__22224_22230);
if(temp__4425__auto___22241){
var seq__22224_22242__$1 = temp__4425__auto___22241;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22224_22242__$1)){
var c__17369__auto___22243 = cljs.core.chunk_first.call(null,seq__22224_22242__$1);
var G__22244 = cljs.core.chunk_rest.call(null,seq__22224_22242__$1);
var G__22245 = c__17369__auto___22243;
var G__22246 = cljs.core.count.call(null,c__17369__auto___22243);
var G__22247 = (0);
seq__22224_22230 = G__22244;
chunk__22225_22231 = G__22245;
count__22226_22232 = G__22246;
i__22227_22233 = G__22247;
continue;
} else {
var vec__22229_22248 = cljs.core.first.call(null,seq__22224_22242__$1);
var field_22249 = cljs.core.nth.call(null,vec__22229_22248,(0),null);
var data_22250 = cljs.core.nth.call(null,vec__22229_22248,(1),null);
form_dt.append(cljs.core.name.call(null,field_22249),data_22250);

var G__22251 = cljs.core.next.call(null,seq__22224_22242__$1);
var G__22252 = null;
var G__22253 = (0);
var G__22254 = (0);
seq__22224_22230 = G__22251;
chunk__22225_22231 = G__22252;
count__22226_22232 = G__22253;
i__22227_22233 = G__22254;
continue;
}
} else {
}
}
break;
}

return form_dt;
});
veye2.api.create_from_file = (function veye2$api$create_from_file(upload_dt,api_key,on_success,on_failure){
return ajax.core.POST.call(null,[cljs.core.str(veye2.api.api_url),cljs.core.str("/projects?api_key="),cljs.core.str(api_key)].join(''),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"api_key","api_key",-1567758224),api_key], null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true,new cljs.core.Keyword(null,"body","body",-2049205669),veye2.api.__GT_form_data.call(null,upload_dt),new cljs.core.Keyword(null,"handler","handler",-195596612),on_success,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),on_failure], null));
});
veye2.api.update_from_file = (function veye2$api$update_from_file(upload_dt,project_id,api_key,on_success,on_failure){
return ajax.core.POST.call(null,[cljs.core.str(veye2.api.api_url),cljs.core.str("/projects/"),cljs.core.str(project_id),cljs.core.str("?api_key="),cljs.core.str(api_key)].join(''),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"api_key","api_key",-1567758224),api_key], null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true,new cljs.core.Keyword(null,"body","body",-2049205669),veye2.api.__GT_form_data.call(null,upload_dt),new cljs.core.Keyword(null,"handler","handler",-195596612),on_success,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),on_failure], null));
});
veye2.api.sync_all = (function veye2$api$sync_all(api_key,on_success,on_failure,on_step){
var api_db = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"selected","selected",574897764),null,new cljs.core.Keyword(null,"synced-at","synced-at",98622459),moment().valueOf(),new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"details","details",1956795411),cljs.core.PersistentArrayMap.EMPTY], null));
var done_QMARK_ = ((function (api_db){
return (function (state){

return (!(cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"details","details",1956795411).cljs$core$IFn$_invoke$arity$1(state)))) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,new cljs.core.Keyword(null,"details","details",1956795411).cljs$core$IFn$_invoke$arity$1(state)),cljs.core.count.call(null,new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(state))));
});})(api_db))
;
var failed_detail = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"sync-error","sync-error",-373216840),new cljs.core.Keyword(null,"reason","reason",-2070751759),"Failed to fetch information from API."], null);
var project_ch = cljs.core.async.chan.call(null);
var progress_ch = cljs.core.async.chan.call(null);
var list_handler = ((function (api_db,done_QMARK_,failed_detail,project_ch,progress_ch){
return (function (project_ch__$1,progress_ch__$1){
return ((function (api_db,done_QMARK_,failed_detail,project_ch,progress_ch){
return (function (res){
cljs.core.swap_BANG_.call(null,api_db,cljs.core.assoc,new cljs.core.Keyword(null,"items","items",1031954938),res);

cljs.core.async.put_BANG_.call(null,progress_ch__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"from","from",1815293044),"project-list",new cljs.core.Keyword(null,"event","event",301435442),"list-success",new cljs.core.Keyword(null,"message","message",-406056002),"success: got a list of projects"], null));

var seq__22331_22407 = cljs.core.seq.call(null,res);
var chunk__22332_22408 = null;
var count__22333_22409 = (0);
var i__22334_22410 = (0);
while(true){
if((i__22334_22410 < count__22333_22409)){
var proj_22411 = cljs.core._nth.call(null,chunk__22332_22408,i__22334_22410);
cljs.core.async.put_BANG_.call(null,project_ch__$1,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(proj_22411));

var G__22412 = seq__22331_22407;
var G__22413 = chunk__22332_22408;
var G__22414 = count__22333_22409;
var G__22415 = (i__22334_22410 + (1));
seq__22331_22407 = G__22412;
chunk__22332_22408 = G__22413;
count__22333_22409 = G__22414;
i__22334_22410 = G__22415;
continue;
} else {
var temp__4425__auto___22416 = cljs.core.seq.call(null,seq__22331_22407);
if(temp__4425__auto___22416){
var seq__22331_22417__$1 = temp__4425__auto___22416;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22331_22417__$1)){
var c__17369__auto___22418 = cljs.core.chunk_first.call(null,seq__22331_22417__$1);
var G__22419 = cljs.core.chunk_rest.call(null,seq__22331_22417__$1);
var G__22420 = c__17369__auto___22418;
var G__22421 = cljs.core.count.call(null,c__17369__auto___22418);
var G__22422 = (0);
seq__22331_22407 = G__22419;
chunk__22332_22408 = G__22420;
count__22333_22409 = G__22421;
i__22334_22410 = G__22422;
continue;
} else {
var proj_22423 = cljs.core.first.call(null,seq__22331_22417__$1);
cljs.core.async.put_BANG_.call(null,project_ch__$1,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(proj_22423));

var G__22424 = cljs.core.next.call(null,seq__22331_22417__$1);
var G__22425 = null;
var G__22426 = (0);
var G__22427 = (0);
seq__22331_22407 = G__22424;
chunk__22332_22408 = G__22425;
count__22333_22409 = G__22426;
i__22334_22410 = G__22427;
continue;
}
} else {
}
}
break;
}

return cljs.core.async.close_BANG_.call(null,project_ch__$1);
});
;})(api_db,done_QMARK_,failed_detail,project_ch,progress_ch))
});})(api_db,done_QMARK_,failed_detail,project_ch,progress_ch))
;
var list_error_handler = ((function (api_db,done_QMARK_,failed_detail,project_ch,progress_ch,list_handler){
return (function (project_ch__$1,progress_ch__$1){
return ((function (api_db,done_QMARK_,failed_detail,project_ch,progress_ch,list_handler){
return (function (res){
console.error("Failed to fetch projectlist. Stopped sync");

cljs.core.async.put_BANG_.call(null,progress_ch__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"from","from",1815293044),"project-list",new cljs.core.Keyword(null,"event","event",301435442),"detail-failure",new cljs.core.Keyword(null,"message","message",-406056002),[cljs.core.str("Failed to fetch projects "),cljs.core.str("from the API: "),cljs.core.str(res)].join('')], null));

cljs.core.async.close_BANG_.call(null,project_ch__$1);

cljs.core.async.close_BANG_.call(null,progress_ch__$1);

return on_failure.call(null,res);
});
;})(api_db,done_QMARK_,failed_detail,project_ch,progress_ch,list_handler))
});})(api_db,done_QMARK_,failed_detail,project_ch,progress_ch,list_handler))
;
var detail_handler = ((function (api_db,done_QMARK_,failed_detail,project_ch,progress_ch,list_handler,list_error_handler){
return (function (project_id,progress_ch__$1){
return ((function (api_db,done_QMARK_,failed_detail,project_ch,progress_ch,list_handler,list_error_handler){
return (function (res){
console.log("Got details for: ",project_id);

cljs.core.swap_BANG_.call(null,api_db,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"details","details",1956795411),project_id], null),res);

return cljs.core.async.put_BANG_.call(null,progress_ch__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"from","from",1815293044),"project-detail",new cljs.core.Keyword(null,"event","event",301435442),"detail-success",new cljs.core.Keyword(null,"message","message",-406056002),[cljs.core.str("success: got project details "),cljs.core.str(" for "),cljs.core.str(project_id)].join(''),new cljs.core.Keyword(null,"id","id",-1388402092),project_id], null));
});
;})(api_db,done_QMARK_,failed_detail,project_ch,progress_ch,list_handler,list_error_handler))
});})(api_db,done_QMARK_,failed_detail,project_ch,progress_ch,list_handler,list_error_handler))
;
var detail_fail_handler = ((function (api_db,done_QMARK_,failed_detail,project_ch,progress_ch,list_handler,list_error_handler,detail_handler){
return (function (project_id,progress_ch__$1){
return ((function (api_db,done_QMARK_,failed_detail,project_ch,progress_ch,list_handler,list_error_handler,detail_handler){
return (function (res){
cljs.core.swap_BANG_.call(null,api_db,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"details","details",1956795411),project_id], null),failed_detail);

return cljs.core.async.put_BANG_.call(null,progress_ch__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"from","from",1815293044),"project-detail",new cljs.core.Keyword(null,"event","event",301435442),"detail-fail",new cljs.core.Keyword(null,"message","message",-406056002),[cljs.core.str("failure: got no project details "),cljs.core.str(" for "),cljs.core.str(project_id)].join(''),new cljs.core.Keyword(null,"id","id",-1388402092),project_id], null));
});
;})(api_db,done_QMARK_,failed_detail,project_ch,progress_ch,list_handler,list_error_handler,detail_handler))
});})(api_db,done_QMARK_,failed_detail,project_ch,progress_ch,list_handler,list_error_handler,detail_handler))
;
veye2.api.fetch_projects.call(null,api_key,list_handler.call(null,project_ch,progress_ch),list_error_handler.call(null,project_ch,progress_ch));

var c__19752__auto___22428 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19752__auto___22428,api_db,done_QMARK_,failed_detail,project_ch,progress_ch,list_handler,list_error_handler,detail_handler,detail_fail_handler){
return (function (){
var f__19753__auto__ = (function (){var switch__19731__auto__ = ((function (c__19752__auto___22428,api_db,done_QMARK_,failed_detail,project_ch,progress_ch,list_handler,list_error_handler,detail_handler,detail_fail_handler){
return (function (state_22349){
var state_val_22350 = (state_22349[(1)]);
if((state_val_22350 === (1))){
var state_22349__$1 = state_22349;
var statearr_22351_22429 = state_22349__$1;
(statearr_22351_22429[(2)] = null);

(statearr_22351_22429[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22350 === (2))){
var state_22349__$1 = state_22349;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22349__$1,(4),project_ch);
} else {
if((state_val_22350 === (3))){
var inst_22347 = (state_22349[(2)]);
var state_22349__$1 = state_22349;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22349__$1,inst_22347);
} else {
if((state_val_22350 === (4))){
var inst_22337 = (state_22349[(7)]);
var inst_22337__$1 = (state_22349[(2)]);
var state_22349__$1 = (function (){var statearr_22352 = state_22349;
(statearr_22352[(7)] = inst_22337__$1);

return statearr_22352;
})();
if(cljs.core.truth_(inst_22337__$1)){
var statearr_22353_22430 = state_22349__$1;
(statearr_22353_22430[(1)] = (5));

} else {
var statearr_22354_22431 = state_22349__$1;
(statearr_22354_22431[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22350 === (5))){
var inst_22337 = (state_22349[(7)]);
var inst_22339 = detail_handler.call(null,inst_22337,progress_ch);
var inst_22340 = detail_fail_handler.call(null,inst_22337,progress_ch);
var inst_22341 = veye2.api.fetch_project_by_id.call(null,api_key,inst_22337,inst_22339,inst_22340);
var state_22349__$1 = (function (){var statearr_22355 = state_22349;
(statearr_22355[(8)] = inst_22341);

return statearr_22355;
})();
var statearr_22356_22432 = state_22349__$1;
(statearr_22356_22432[(2)] = null);

(statearr_22356_22432[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22350 === (6))){
var state_22349__$1 = state_22349;
var statearr_22357_22433 = state_22349__$1;
(statearr_22357_22433[(2)] = null);

(statearr_22357_22433[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22350 === (7))){
var inst_22345 = (state_22349[(2)]);
var state_22349__$1 = state_22349;
var statearr_22358_22434 = state_22349__$1;
(statearr_22358_22434[(2)] = inst_22345);

(statearr_22358_22434[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__19752__auto___22428,api_db,done_QMARK_,failed_detail,project_ch,progress_ch,list_handler,list_error_handler,detail_handler,detail_fail_handler))
;
return ((function (switch__19731__auto__,c__19752__auto___22428,api_db,done_QMARK_,failed_detail,project_ch,progress_ch,list_handler,list_error_handler,detail_handler,detail_fail_handler){
return (function() {
var veye2$api$sync_all_$_state_machine__19732__auto__ = null;
var veye2$api$sync_all_$_state_machine__19732__auto____0 = (function (){
var statearr_22362 = [null,null,null,null,null,null,null,null,null];
(statearr_22362[(0)] = veye2$api$sync_all_$_state_machine__19732__auto__);

(statearr_22362[(1)] = (1));

return statearr_22362;
});
var veye2$api$sync_all_$_state_machine__19732__auto____1 = (function (state_22349){
while(true){
var ret_value__19733__auto__ = (function (){try{while(true){
var result__19734__auto__ = switch__19731__auto__.call(null,state_22349);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19734__auto__;
}
break;
}
}catch (e22363){if((e22363 instanceof Object)){
var ex__19735__auto__ = e22363;
var statearr_22364_22435 = state_22349;
(statearr_22364_22435[(5)] = ex__19735__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22349);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22363;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19733__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22436 = state_22349;
state_22349 = G__22436;
continue;
} else {
return ret_value__19733__auto__;
}
break;
}
});
veye2$api$sync_all_$_state_machine__19732__auto__ = function(state_22349){
switch(arguments.length){
case 0:
return veye2$api$sync_all_$_state_machine__19732__auto____0.call(this);
case 1:
return veye2$api$sync_all_$_state_machine__19732__auto____1.call(this,state_22349);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
veye2$api$sync_all_$_state_machine__19732__auto__.cljs$core$IFn$_invoke$arity$0 = veye2$api$sync_all_$_state_machine__19732__auto____0;
veye2$api$sync_all_$_state_machine__19732__auto__.cljs$core$IFn$_invoke$arity$1 = veye2$api$sync_all_$_state_machine__19732__auto____1;
return veye2$api$sync_all_$_state_machine__19732__auto__;
})()
;})(switch__19731__auto__,c__19752__auto___22428,api_db,done_QMARK_,failed_detail,project_ch,progress_ch,list_handler,list_error_handler,detail_handler,detail_fail_handler))
})();
var state__19754__auto__ = (function (){var statearr_22365 = f__19753__auto__.call(null);
(statearr_22365[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19752__auto___22428);

return statearr_22365;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19754__auto__);
});})(c__19752__auto___22428,api_db,done_QMARK_,failed_detail,project_ch,progress_ch,list_handler,list_error_handler,detail_handler,detail_fail_handler))
);


var c__19752__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19752__auto__,api_db,done_QMARK_,failed_detail,project_ch,progress_ch,list_handler,list_error_handler,detail_handler,detail_fail_handler){
return (function (){
var f__19753__auto__ = (function (){var switch__19731__auto__ = ((function (c__19752__auto__,api_db,done_QMARK_,failed_detail,project_ch,progress_ch,list_handler,list_error_handler,detail_handler,detail_fail_handler){
return (function (state_22386){
var state_val_22387 = (state_22386[(1)]);
if((state_val_22387 === (7))){
var inst_22382 = (state_22386[(2)]);
var state_22386__$1 = state_22386;
var statearr_22388_22437 = state_22386__$1;
(statearr_22388_22437[(2)] = inst_22382);

(statearr_22388_22437[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22387 === (1))){
var state_22386__$1 = state_22386;
var statearr_22389_22438 = state_22386__$1;
(statearr_22389_22438[(2)] = null);

(statearr_22389_22438[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22387 === (4))){
var inst_22368 = (state_22386[(7)]);
var inst_22368__$1 = (state_22386[(2)]);
var state_22386__$1 = (function (){var statearr_22390 = state_22386;
(statearr_22390[(7)] = inst_22368__$1);

return statearr_22390;
})();
if(cljs.core.truth_(inst_22368__$1)){
var statearr_22391_22439 = state_22386__$1;
(statearr_22391_22439[(1)] = (5));

} else {
var statearr_22392_22440 = state_22386__$1;
(statearr_22392_22440[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22387 === (6))){
var state_22386__$1 = state_22386;
var statearr_22393_22441 = state_22386__$1;
(statearr_22393_22441[(2)] = null);

(statearr_22393_22441[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22387 === (3))){
var inst_22384 = (state_22386[(2)]);
var state_22386__$1 = state_22386;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22386__$1,inst_22384);
} else {
if((state_val_22387 === (2))){
var state_22386__$1 = state_22386;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22386__$1,(4),progress_ch);
} else {
if((state_val_22387 === (9))){
var state_22386__$1 = state_22386;
var statearr_22394_22442 = state_22386__$1;
(statearr_22394_22442[(2)] = null);

(statearr_22394_22442[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22387 === (5))){
var inst_22368 = (state_22386[(7)]);
var inst_22370 = on_step.call(null,inst_22368);
var inst_22371 = cljs.core.deref.call(null,api_db);
var inst_22372 = done_QMARK_.call(null,inst_22371);
var state_22386__$1 = (function (){var statearr_22395 = state_22386;
(statearr_22395[(8)] = inst_22370);

return statearr_22395;
})();
if(cljs.core.truth_(inst_22372)){
var statearr_22396_22443 = state_22386__$1;
(statearr_22396_22443[(1)] = (8));

} else {
var statearr_22397_22444 = state_22386__$1;
(statearr_22397_22444[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22387 === (10))){
var inst_22379 = (state_22386[(2)]);
var state_22386__$1 = state_22386;
var statearr_22398_22445 = state_22386__$1;
(statearr_22398_22445[(2)] = inst_22379);

(statearr_22398_22445[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22387 === (8))){
var inst_22374 = cljs.core.deref.call(null,api_db);
var inst_22375 = on_success.call(null,inst_22374);
var state_22386__$1 = state_22386;
var statearr_22399_22446 = state_22386__$1;
(statearr_22399_22446[(2)] = inst_22375);

(statearr_22399_22446[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__19752__auto__,api_db,done_QMARK_,failed_detail,project_ch,progress_ch,list_handler,list_error_handler,detail_handler,detail_fail_handler))
;
return ((function (switch__19731__auto__,c__19752__auto__,api_db,done_QMARK_,failed_detail,project_ch,progress_ch,list_handler,list_error_handler,detail_handler,detail_fail_handler){
return (function() {
var veye2$api$sync_all_$_state_machine__19732__auto__ = null;
var veye2$api$sync_all_$_state_machine__19732__auto____0 = (function (){
var statearr_22403 = [null,null,null,null,null,null,null,null,null];
(statearr_22403[(0)] = veye2$api$sync_all_$_state_machine__19732__auto__);

(statearr_22403[(1)] = (1));

return statearr_22403;
});
var veye2$api$sync_all_$_state_machine__19732__auto____1 = (function (state_22386){
while(true){
var ret_value__19733__auto__ = (function (){try{while(true){
var result__19734__auto__ = switch__19731__auto__.call(null,state_22386);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19734__auto__;
}
break;
}
}catch (e22404){if((e22404 instanceof Object)){
var ex__19735__auto__ = e22404;
var statearr_22405_22447 = state_22386;
(statearr_22405_22447[(5)] = ex__19735__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22386);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22404;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19733__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22448 = state_22386;
state_22386 = G__22448;
continue;
} else {
return ret_value__19733__auto__;
}
break;
}
});
veye2$api$sync_all_$_state_machine__19732__auto__ = function(state_22386){
switch(arguments.length){
case 0:
return veye2$api$sync_all_$_state_machine__19732__auto____0.call(this);
case 1:
return veye2$api$sync_all_$_state_machine__19732__auto____1.call(this,state_22386);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
veye2$api$sync_all_$_state_machine__19732__auto__.cljs$core$IFn$_invoke$arity$0 = veye2$api$sync_all_$_state_machine__19732__auto____0;
veye2$api$sync_all_$_state_machine__19732__auto__.cljs$core$IFn$_invoke$arity$1 = veye2$api$sync_all_$_state_machine__19732__auto____1;
return veye2$api$sync_all_$_state_machine__19732__auto__;
})()
;})(switch__19731__auto__,c__19752__auto__,api_db,done_QMARK_,failed_detail,project_ch,progress_ch,list_handler,list_error_handler,detail_handler,detail_fail_handler))
})();
var state__19754__auto__ = (function (){var statearr_22406 = f__19753__auto__.call(null);
(statearr_22406[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19752__auto__);

return statearr_22406;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19754__auto__);
});})(c__19752__auto__,api_db,done_QMARK_,failed_detail,project_ch,progress_ch,list_handler,list_error_handler,detail_handler,detail_fail_handler))
);

return c__19752__auto__;
});

//# sourceMappingURL=api.js.map