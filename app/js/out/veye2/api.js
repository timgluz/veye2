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
veye2.api.fetch_me = (function veye2$api$fetch_me(api_key,on_success,on_failure){
return ajax.core.GET.call(null,[cljs.core.str(veye2.api.api_url),cljs.core.str("/me")].join(''),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"api_key","api_key",-1567758224),api_key], null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true,new cljs.core.Keyword(null,"handler","handler",-195596612),on_success,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),on_failure], null));
});
veye2.api.__GT_form_data = (function veye2$api$__GT_form_data(upload_dt){
var form_dt = (new FormData());
var seq__25080_25086 = cljs.core.seq.call(null,upload_dt);
var chunk__25081_25087 = null;
var count__25082_25088 = (0);
var i__25083_25089 = (0);
while(true){
if((i__25083_25089 < count__25082_25088)){
var vec__25084_25090 = cljs.core._nth.call(null,chunk__25081_25087,i__25083_25089);
var field_25091 = cljs.core.nth.call(null,vec__25084_25090,(0),null);
var data_25092 = cljs.core.nth.call(null,vec__25084_25090,(1),null);
form_dt.append(cljs.core.name.call(null,field_25091),data_25092);

var G__25093 = seq__25080_25086;
var G__25094 = chunk__25081_25087;
var G__25095 = count__25082_25088;
var G__25096 = (i__25083_25089 + (1));
seq__25080_25086 = G__25093;
chunk__25081_25087 = G__25094;
count__25082_25088 = G__25095;
i__25083_25089 = G__25096;
continue;
} else {
var temp__4425__auto___25097 = cljs.core.seq.call(null,seq__25080_25086);
if(temp__4425__auto___25097){
var seq__25080_25098__$1 = temp__4425__auto___25097;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25080_25098__$1)){
var c__17369__auto___25099 = cljs.core.chunk_first.call(null,seq__25080_25098__$1);
var G__25100 = cljs.core.chunk_rest.call(null,seq__25080_25098__$1);
var G__25101 = c__17369__auto___25099;
var G__25102 = cljs.core.count.call(null,c__17369__auto___25099);
var G__25103 = (0);
seq__25080_25086 = G__25100;
chunk__25081_25087 = G__25101;
count__25082_25088 = G__25102;
i__25083_25089 = G__25103;
continue;
} else {
var vec__25085_25104 = cljs.core.first.call(null,seq__25080_25098__$1);
var field_25105 = cljs.core.nth.call(null,vec__25085_25104,(0),null);
var data_25106 = cljs.core.nth.call(null,vec__25085_25104,(1),null);
form_dt.append(cljs.core.name.call(null,field_25105),data_25106);

var G__25107 = cljs.core.next.call(null,seq__25080_25098__$1);
var G__25108 = null;
var G__25109 = (0);
var G__25110 = (0);
seq__25080_25086 = G__25107;
chunk__25081_25087 = G__25108;
count__25082_25088 = G__25109;
i__25083_25089 = G__25110;
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

var seq__25187_25263 = cljs.core.seq.call(null,res);
var chunk__25188_25264 = null;
var count__25189_25265 = (0);
var i__25190_25266 = (0);
while(true){
if((i__25190_25266 < count__25189_25265)){
var proj_25267 = cljs.core._nth.call(null,chunk__25188_25264,i__25190_25266);
cljs.core.async.put_BANG_.call(null,project_ch__$1,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(proj_25267));

var G__25268 = seq__25187_25263;
var G__25269 = chunk__25188_25264;
var G__25270 = count__25189_25265;
var G__25271 = (i__25190_25266 + (1));
seq__25187_25263 = G__25268;
chunk__25188_25264 = G__25269;
count__25189_25265 = G__25270;
i__25190_25266 = G__25271;
continue;
} else {
var temp__4425__auto___25272 = cljs.core.seq.call(null,seq__25187_25263);
if(temp__4425__auto___25272){
var seq__25187_25273__$1 = temp__4425__auto___25272;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25187_25273__$1)){
var c__17369__auto___25274 = cljs.core.chunk_first.call(null,seq__25187_25273__$1);
var G__25275 = cljs.core.chunk_rest.call(null,seq__25187_25273__$1);
var G__25276 = c__17369__auto___25274;
var G__25277 = cljs.core.count.call(null,c__17369__auto___25274);
var G__25278 = (0);
seq__25187_25263 = G__25275;
chunk__25188_25264 = G__25276;
count__25189_25265 = G__25277;
i__25190_25266 = G__25278;
continue;
} else {
var proj_25279 = cljs.core.first.call(null,seq__25187_25273__$1);
cljs.core.async.put_BANG_.call(null,project_ch__$1,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(proj_25279));

var G__25280 = cljs.core.next.call(null,seq__25187_25273__$1);
var G__25281 = null;
var G__25282 = (0);
var G__25283 = (0);
seq__25187_25263 = G__25280;
chunk__25188_25264 = G__25281;
count__25189_25265 = G__25282;
i__25190_25266 = G__25283;
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

var c__20180__auto___25284 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20180__auto___25284,api_db,done_QMARK_,failed_detail,project_ch,progress_ch,list_handler,list_error_handler,detail_handler,detail_fail_handler){
return (function (){
var f__20181__auto__ = (function (){var switch__20115__auto__ = ((function (c__20180__auto___25284,api_db,done_QMARK_,failed_detail,project_ch,progress_ch,list_handler,list_error_handler,detail_handler,detail_fail_handler){
return (function (state_25205){
var state_val_25206 = (state_25205[(1)]);
if((state_val_25206 === (1))){
var state_25205__$1 = state_25205;
var statearr_25207_25285 = state_25205__$1;
(statearr_25207_25285[(2)] = null);

(statearr_25207_25285[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25206 === (2))){
var state_25205__$1 = state_25205;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25205__$1,(4),project_ch);
} else {
if((state_val_25206 === (3))){
var inst_25203 = (state_25205[(2)]);
var state_25205__$1 = state_25205;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25205__$1,inst_25203);
} else {
if((state_val_25206 === (4))){
var inst_25193 = (state_25205[(7)]);
var inst_25193__$1 = (state_25205[(2)]);
var state_25205__$1 = (function (){var statearr_25208 = state_25205;
(statearr_25208[(7)] = inst_25193__$1);

return statearr_25208;
})();
if(cljs.core.truth_(inst_25193__$1)){
var statearr_25209_25286 = state_25205__$1;
(statearr_25209_25286[(1)] = (5));

} else {
var statearr_25210_25287 = state_25205__$1;
(statearr_25210_25287[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25206 === (5))){
var inst_25193 = (state_25205[(7)]);
var inst_25195 = detail_handler.call(null,inst_25193,progress_ch);
var inst_25196 = detail_fail_handler.call(null,inst_25193,progress_ch);
var inst_25197 = veye2.api.fetch_project_by_id.call(null,api_key,inst_25193,inst_25195,inst_25196);
var state_25205__$1 = (function (){var statearr_25211 = state_25205;
(statearr_25211[(8)] = inst_25197);

return statearr_25211;
})();
var statearr_25212_25288 = state_25205__$1;
(statearr_25212_25288[(2)] = null);

(statearr_25212_25288[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25206 === (6))){
var state_25205__$1 = state_25205;
var statearr_25213_25289 = state_25205__$1;
(statearr_25213_25289[(2)] = null);

(statearr_25213_25289[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25206 === (7))){
var inst_25201 = (state_25205[(2)]);
var state_25205__$1 = state_25205;
var statearr_25214_25290 = state_25205__$1;
(statearr_25214_25290[(2)] = inst_25201);

(statearr_25214_25290[(1)] = (3));


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
});})(c__20180__auto___25284,api_db,done_QMARK_,failed_detail,project_ch,progress_ch,list_handler,list_error_handler,detail_handler,detail_fail_handler))
;
return ((function (switch__20115__auto__,c__20180__auto___25284,api_db,done_QMARK_,failed_detail,project_ch,progress_ch,list_handler,list_error_handler,detail_handler,detail_fail_handler){
return (function() {
var veye2$api$sync_all_$_state_machine__20116__auto__ = null;
var veye2$api$sync_all_$_state_machine__20116__auto____0 = (function (){
var statearr_25218 = [null,null,null,null,null,null,null,null,null];
(statearr_25218[(0)] = veye2$api$sync_all_$_state_machine__20116__auto__);

(statearr_25218[(1)] = (1));

return statearr_25218;
});
var veye2$api$sync_all_$_state_machine__20116__auto____1 = (function (state_25205){
while(true){
var ret_value__20117__auto__ = (function (){try{while(true){
var result__20118__auto__ = switch__20115__auto__.call(null,state_25205);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20118__auto__;
}
break;
}
}catch (e25219){if((e25219 instanceof Object)){
var ex__20119__auto__ = e25219;
var statearr_25220_25291 = state_25205;
(statearr_25220_25291[(5)] = ex__20119__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25205);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25219;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20117__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25292 = state_25205;
state_25205 = G__25292;
continue;
} else {
return ret_value__20117__auto__;
}
break;
}
});
veye2$api$sync_all_$_state_machine__20116__auto__ = function(state_25205){
switch(arguments.length){
case 0:
return veye2$api$sync_all_$_state_machine__20116__auto____0.call(this);
case 1:
return veye2$api$sync_all_$_state_machine__20116__auto____1.call(this,state_25205);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
veye2$api$sync_all_$_state_machine__20116__auto__.cljs$core$IFn$_invoke$arity$0 = veye2$api$sync_all_$_state_machine__20116__auto____0;
veye2$api$sync_all_$_state_machine__20116__auto__.cljs$core$IFn$_invoke$arity$1 = veye2$api$sync_all_$_state_machine__20116__auto____1;
return veye2$api$sync_all_$_state_machine__20116__auto__;
})()
;})(switch__20115__auto__,c__20180__auto___25284,api_db,done_QMARK_,failed_detail,project_ch,progress_ch,list_handler,list_error_handler,detail_handler,detail_fail_handler))
})();
var state__20182__auto__ = (function (){var statearr_25221 = f__20181__auto__.call(null);
(statearr_25221[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20180__auto___25284);

return statearr_25221;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20182__auto__);
});})(c__20180__auto___25284,api_db,done_QMARK_,failed_detail,project_ch,progress_ch,list_handler,list_error_handler,detail_handler,detail_fail_handler))
);


var c__20180__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20180__auto__,api_db,done_QMARK_,failed_detail,project_ch,progress_ch,list_handler,list_error_handler,detail_handler,detail_fail_handler){
return (function (){
var f__20181__auto__ = (function (){var switch__20115__auto__ = ((function (c__20180__auto__,api_db,done_QMARK_,failed_detail,project_ch,progress_ch,list_handler,list_error_handler,detail_handler,detail_fail_handler){
return (function (state_25242){
var state_val_25243 = (state_25242[(1)]);
if((state_val_25243 === (7))){
var inst_25238 = (state_25242[(2)]);
var state_25242__$1 = state_25242;
var statearr_25244_25293 = state_25242__$1;
(statearr_25244_25293[(2)] = inst_25238);

(statearr_25244_25293[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25243 === (1))){
var state_25242__$1 = state_25242;
var statearr_25245_25294 = state_25242__$1;
(statearr_25245_25294[(2)] = null);

(statearr_25245_25294[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25243 === (4))){
var inst_25224 = (state_25242[(7)]);
var inst_25224__$1 = (state_25242[(2)]);
var state_25242__$1 = (function (){var statearr_25246 = state_25242;
(statearr_25246[(7)] = inst_25224__$1);

return statearr_25246;
})();
if(cljs.core.truth_(inst_25224__$1)){
var statearr_25247_25295 = state_25242__$1;
(statearr_25247_25295[(1)] = (5));

} else {
var statearr_25248_25296 = state_25242__$1;
(statearr_25248_25296[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25243 === (6))){
var state_25242__$1 = state_25242;
var statearr_25249_25297 = state_25242__$1;
(statearr_25249_25297[(2)] = null);

(statearr_25249_25297[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25243 === (3))){
var inst_25240 = (state_25242[(2)]);
var state_25242__$1 = state_25242;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25242__$1,inst_25240);
} else {
if((state_val_25243 === (2))){
var state_25242__$1 = state_25242;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25242__$1,(4),progress_ch);
} else {
if((state_val_25243 === (9))){
var state_25242__$1 = state_25242;
var statearr_25250_25298 = state_25242__$1;
(statearr_25250_25298[(2)] = null);

(statearr_25250_25298[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25243 === (5))){
var inst_25224 = (state_25242[(7)]);
var inst_25226 = on_step.call(null,inst_25224);
var inst_25227 = cljs.core.deref.call(null,api_db);
var inst_25228 = done_QMARK_.call(null,inst_25227);
var state_25242__$1 = (function (){var statearr_25251 = state_25242;
(statearr_25251[(8)] = inst_25226);

return statearr_25251;
})();
if(cljs.core.truth_(inst_25228)){
var statearr_25252_25299 = state_25242__$1;
(statearr_25252_25299[(1)] = (8));

} else {
var statearr_25253_25300 = state_25242__$1;
(statearr_25253_25300[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25243 === (10))){
var inst_25235 = (state_25242[(2)]);
var state_25242__$1 = state_25242;
var statearr_25254_25301 = state_25242__$1;
(statearr_25254_25301[(2)] = inst_25235);

(statearr_25254_25301[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25243 === (8))){
var inst_25230 = cljs.core.deref.call(null,api_db);
var inst_25231 = on_success.call(null,inst_25230);
var state_25242__$1 = state_25242;
var statearr_25255_25302 = state_25242__$1;
(statearr_25255_25302[(2)] = inst_25231);

(statearr_25255_25302[(1)] = (10));


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
});})(c__20180__auto__,api_db,done_QMARK_,failed_detail,project_ch,progress_ch,list_handler,list_error_handler,detail_handler,detail_fail_handler))
;
return ((function (switch__20115__auto__,c__20180__auto__,api_db,done_QMARK_,failed_detail,project_ch,progress_ch,list_handler,list_error_handler,detail_handler,detail_fail_handler){
return (function() {
var veye2$api$sync_all_$_state_machine__20116__auto__ = null;
var veye2$api$sync_all_$_state_machine__20116__auto____0 = (function (){
var statearr_25259 = [null,null,null,null,null,null,null,null,null];
(statearr_25259[(0)] = veye2$api$sync_all_$_state_machine__20116__auto__);

(statearr_25259[(1)] = (1));

return statearr_25259;
});
var veye2$api$sync_all_$_state_machine__20116__auto____1 = (function (state_25242){
while(true){
var ret_value__20117__auto__ = (function (){try{while(true){
var result__20118__auto__ = switch__20115__auto__.call(null,state_25242);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20118__auto__;
}
break;
}
}catch (e25260){if((e25260 instanceof Object)){
var ex__20119__auto__ = e25260;
var statearr_25261_25303 = state_25242;
(statearr_25261_25303[(5)] = ex__20119__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25242);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25260;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20117__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25304 = state_25242;
state_25242 = G__25304;
continue;
} else {
return ret_value__20117__auto__;
}
break;
}
});
veye2$api$sync_all_$_state_machine__20116__auto__ = function(state_25242){
switch(arguments.length){
case 0:
return veye2$api$sync_all_$_state_machine__20116__auto____0.call(this);
case 1:
return veye2$api$sync_all_$_state_machine__20116__auto____1.call(this,state_25242);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
veye2$api$sync_all_$_state_machine__20116__auto__.cljs$core$IFn$_invoke$arity$0 = veye2$api$sync_all_$_state_machine__20116__auto____0;
veye2$api$sync_all_$_state_machine__20116__auto__.cljs$core$IFn$_invoke$arity$1 = veye2$api$sync_all_$_state_machine__20116__auto____1;
return veye2$api$sync_all_$_state_machine__20116__auto__;
})()
;})(switch__20115__auto__,c__20180__auto__,api_db,done_QMARK_,failed_detail,project_ch,progress_ch,list_handler,list_error_handler,detail_handler,detail_fail_handler))
})();
var state__20182__auto__ = (function (){var statearr_25262 = f__20181__auto__.call(null);
(statearr_25262[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20180__auto__);

return statearr_25262;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20182__auto__);
});})(c__20180__auto__,api_db,done_QMARK_,failed_detail,project_ch,progress_ch,list_handler,list_error_handler,detail_handler,detail_fail_handler))
);

return c__20180__auto__;
});

//# sourceMappingURL=api.js.map