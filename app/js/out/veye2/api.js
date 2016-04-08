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
veye2.api.fetch_project_by_id = (function veye2$api$fetch_project_by_id(api_key,project_id,success_fn,error_fn){
return ajax.core.GET.call(null,[cljs.core.str(veye2.api.api_url),cljs.core.str("/projects/"),cljs.core.str(project_id)].join(''),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"api_key","api_key",-1567758224),api_key], null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true,new cljs.core.Keyword(null,"handler","handler",-195596612),success_fn,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),error_fn], null));
});
veye2.api.clj__GT_json = (function veye2$api$clj__GT_json(clj_dt){
return JSON.stringify(cljs.core.clj__GT_js.call(null,clj_dt));
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

var seq__19854_19930 = cljs.core.seq.call(null,res);
var chunk__19855_19931 = null;
var count__19856_19932 = (0);
var i__19857_19933 = (0);
while(true){
if((i__19857_19933 < count__19856_19932)){
var proj_19934 = cljs.core._nth.call(null,chunk__19855_19931,i__19857_19933);
cljs.core.async.put_BANG_.call(null,project_ch__$1,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(proj_19934));

var G__19935 = seq__19854_19930;
var G__19936 = chunk__19855_19931;
var G__19937 = count__19856_19932;
var G__19938 = (i__19857_19933 + (1));
seq__19854_19930 = G__19935;
chunk__19855_19931 = G__19936;
count__19856_19932 = G__19937;
i__19857_19933 = G__19938;
continue;
} else {
var temp__4425__auto___19939 = cljs.core.seq.call(null,seq__19854_19930);
if(temp__4425__auto___19939){
var seq__19854_19940__$1 = temp__4425__auto___19939;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19854_19940__$1)){
var c__17369__auto___19941 = cljs.core.chunk_first.call(null,seq__19854_19940__$1);
var G__19942 = cljs.core.chunk_rest.call(null,seq__19854_19940__$1);
var G__19943 = c__17369__auto___19941;
var G__19944 = cljs.core.count.call(null,c__17369__auto___19941);
var G__19945 = (0);
seq__19854_19930 = G__19942;
chunk__19855_19931 = G__19943;
count__19856_19932 = G__19944;
i__19857_19933 = G__19945;
continue;
} else {
var proj_19946 = cljs.core.first.call(null,seq__19854_19940__$1);
cljs.core.async.put_BANG_.call(null,project_ch__$1,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(proj_19946));

var G__19947 = cljs.core.next.call(null,seq__19854_19940__$1);
var G__19948 = null;
var G__19949 = (0);
var G__19950 = (0);
seq__19854_19930 = G__19947;
chunk__19855_19931 = G__19948;
count__19856_19932 = G__19949;
i__19857_19933 = G__19950;
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

var c__19733__auto___19951 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19733__auto___19951,api_db,done_QMARK_,failed_detail,project_ch,progress_ch,list_handler,list_error_handler,detail_handler,detail_fail_handler){
return (function (){
var f__19734__auto__ = (function (){var switch__19712__auto__ = ((function (c__19733__auto___19951,api_db,done_QMARK_,failed_detail,project_ch,progress_ch,list_handler,list_error_handler,detail_handler,detail_fail_handler){
return (function (state_19872){
var state_val_19873 = (state_19872[(1)]);
if((state_val_19873 === (1))){
var state_19872__$1 = state_19872;
var statearr_19874_19952 = state_19872__$1;
(statearr_19874_19952[(2)] = null);

(statearr_19874_19952[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19873 === (2))){
var state_19872__$1 = state_19872;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19872__$1,(4),project_ch);
} else {
if((state_val_19873 === (3))){
var inst_19870 = (state_19872[(2)]);
var state_19872__$1 = state_19872;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19872__$1,inst_19870);
} else {
if((state_val_19873 === (4))){
var inst_19860 = (state_19872[(7)]);
var inst_19860__$1 = (state_19872[(2)]);
var state_19872__$1 = (function (){var statearr_19875 = state_19872;
(statearr_19875[(7)] = inst_19860__$1);

return statearr_19875;
})();
if(cljs.core.truth_(inst_19860__$1)){
var statearr_19876_19953 = state_19872__$1;
(statearr_19876_19953[(1)] = (5));

} else {
var statearr_19877_19954 = state_19872__$1;
(statearr_19877_19954[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19873 === (5))){
var inst_19860 = (state_19872[(7)]);
var inst_19862 = detail_handler.call(null,inst_19860,progress_ch);
var inst_19863 = detail_fail_handler.call(null,inst_19860,progress_ch);
var inst_19864 = veye2.api.fetch_project_by_id.call(null,api_key,inst_19860,inst_19862,inst_19863);
var state_19872__$1 = (function (){var statearr_19878 = state_19872;
(statearr_19878[(8)] = inst_19864);

return statearr_19878;
})();
var statearr_19879_19955 = state_19872__$1;
(statearr_19879_19955[(2)] = null);

(statearr_19879_19955[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19873 === (6))){
var state_19872__$1 = state_19872;
var statearr_19880_19956 = state_19872__$1;
(statearr_19880_19956[(2)] = null);

(statearr_19880_19956[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19873 === (7))){
var inst_19868 = (state_19872[(2)]);
var state_19872__$1 = state_19872;
var statearr_19881_19957 = state_19872__$1;
(statearr_19881_19957[(2)] = inst_19868);

(statearr_19881_19957[(1)] = (3));


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
});})(c__19733__auto___19951,api_db,done_QMARK_,failed_detail,project_ch,progress_ch,list_handler,list_error_handler,detail_handler,detail_fail_handler))
;
return ((function (switch__19712__auto__,c__19733__auto___19951,api_db,done_QMARK_,failed_detail,project_ch,progress_ch,list_handler,list_error_handler,detail_handler,detail_fail_handler){
return (function() {
var veye2$api$sync_all_$_state_machine__19713__auto__ = null;
var veye2$api$sync_all_$_state_machine__19713__auto____0 = (function (){
var statearr_19885 = [null,null,null,null,null,null,null,null,null];
(statearr_19885[(0)] = veye2$api$sync_all_$_state_machine__19713__auto__);

(statearr_19885[(1)] = (1));

return statearr_19885;
});
var veye2$api$sync_all_$_state_machine__19713__auto____1 = (function (state_19872){
while(true){
var ret_value__19714__auto__ = (function (){try{while(true){
var result__19715__auto__ = switch__19712__auto__.call(null,state_19872);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19715__auto__;
}
break;
}
}catch (e19886){if((e19886 instanceof Object)){
var ex__19716__auto__ = e19886;
var statearr_19887_19958 = state_19872;
(statearr_19887_19958[(5)] = ex__19716__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19872);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19886;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19959 = state_19872;
state_19872 = G__19959;
continue;
} else {
return ret_value__19714__auto__;
}
break;
}
});
veye2$api$sync_all_$_state_machine__19713__auto__ = function(state_19872){
switch(arguments.length){
case 0:
return veye2$api$sync_all_$_state_machine__19713__auto____0.call(this);
case 1:
return veye2$api$sync_all_$_state_machine__19713__auto____1.call(this,state_19872);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
veye2$api$sync_all_$_state_machine__19713__auto__.cljs$core$IFn$_invoke$arity$0 = veye2$api$sync_all_$_state_machine__19713__auto____0;
veye2$api$sync_all_$_state_machine__19713__auto__.cljs$core$IFn$_invoke$arity$1 = veye2$api$sync_all_$_state_machine__19713__auto____1;
return veye2$api$sync_all_$_state_machine__19713__auto__;
})()
;})(switch__19712__auto__,c__19733__auto___19951,api_db,done_QMARK_,failed_detail,project_ch,progress_ch,list_handler,list_error_handler,detail_handler,detail_fail_handler))
})();
var state__19735__auto__ = (function (){var statearr_19888 = f__19734__auto__.call(null);
(statearr_19888[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19733__auto___19951);

return statearr_19888;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19735__auto__);
});})(c__19733__auto___19951,api_db,done_QMARK_,failed_detail,project_ch,progress_ch,list_handler,list_error_handler,detail_handler,detail_fail_handler))
);


var c__19733__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19733__auto__,api_db,done_QMARK_,failed_detail,project_ch,progress_ch,list_handler,list_error_handler,detail_handler,detail_fail_handler){
return (function (){
var f__19734__auto__ = (function (){var switch__19712__auto__ = ((function (c__19733__auto__,api_db,done_QMARK_,failed_detail,project_ch,progress_ch,list_handler,list_error_handler,detail_handler,detail_fail_handler){
return (function (state_19909){
var state_val_19910 = (state_19909[(1)]);
if((state_val_19910 === (7))){
var inst_19905 = (state_19909[(2)]);
var state_19909__$1 = state_19909;
var statearr_19911_19960 = state_19909__$1;
(statearr_19911_19960[(2)] = inst_19905);

(statearr_19911_19960[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19910 === (1))){
var state_19909__$1 = state_19909;
var statearr_19912_19961 = state_19909__$1;
(statearr_19912_19961[(2)] = null);

(statearr_19912_19961[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19910 === (4))){
var inst_19891 = (state_19909[(7)]);
var inst_19891__$1 = (state_19909[(2)]);
var state_19909__$1 = (function (){var statearr_19913 = state_19909;
(statearr_19913[(7)] = inst_19891__$1);

return statearr_19913;
})();
if(cljs.core.truth_(inst_19891__$1)){
var statearr_19914_19962 = state_19909__$1;
(statearr_19914_19962[(1)] = (5));

} else {
var statearr_19915_19963 = state_19909__$1;
(statearr_19915_19963[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19910 === (6))){
var state_19909__$1 = state_19909;
var statearr_19916_19964 = state_19909__$1;
(statearr_19916_19964[(2)] = null);

(statearr_19916_19964[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19910 === (3))){
var inst_19907 = (state_19909[(2)]);
var state_19909__$1 = state_19909;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19909__$1,inst_19907);
} else {
if((state_val_19910 === (2))){
var state_19909__$1 = state_19909;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19909__$1,(4),progress_ch);
} else {
if((state_val_19910 === (9))){
var state_19909__$1 = state_19909;
var statearr_19917_19965 = state_19909__$1;
(statearr_19917_19965[(2)] = null);

(statearr_19917_19965[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19910 === (5))){
var inst_19891 = (state_19909[(7)]);
var inst_19893 = on_step.call(null,inst_19891);
var inst_19894 = cljs.core.deref.call(null,api_db);
var inst_19895 = done_QMARK_.call(null,inst_19894);
var state_19909__$1 = (function (){var statearr_19918 = state_19909;
(statearr_19918[(8)] = inst_19893);

return statearr_19918;
})();
if(cljs.core.truth_(inst_19895)){
var statearr_19919_19966 = state_19909__$1;
(statearr_19919_19966[(1)] = (8));

} else {
var statearr_19920_19967 = state_19909__$1;
(statearr_19920_19967[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19910 === (10))){
var inst_19902 = (state_19909[(2)]);
var state_19909__$1 = state_19909;
var statearr_19921_19968 = state_19909__$1;
(statearr_19921_19968[(2)] = inst_19902);

(statearr_19921_19968[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19910 === (8))){
var inst_19897 = cljs.core.deref.call(null,api_db);
var inst_19898 = on_success.call(null,inst_19897);
var state_19909__$1 = state_19909;
var statearr_19922_19969 = state_19909__$1;
(statearr_19922_19969[(2)] = inst_19898);

(statearr_19922_19969[(1)] = (10));


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
});})(c__19733__auto__,api_db,done_QMARK_,failed_detail,project_ch,progress_ch,list_handler,list_error_handler,detail_handler,detail_fail_handler))
;
return ((function (switch__19712__auto__,c__19733__auto__,api_db,done_QMARK_,failed_detail,project_ch,progress_ch,list_handler,list_error_handler,detail_handler,detail_fail_handler){
return (function() {
var veye2$api$sync_all_$_state_machine__19713__auto__ = null;
var veye2$api$sync_all_$_state_machine__19713__auto____0 = (function (){
var statearr_19926 = [null,null,null,null,null,null,null,null,null];
(statearr_19926[(0)] = veye2$api$sync_all_$_state_machine__19713__auto__);

(statearr_19926[(1)] = (1));

return statearr_19926;
});
var veye2$api$sync_all_$_state_machine__19713__auto____1 = (function (state_19909){
while(true){
var ret_value__19714__auto__ = (function (){try{while(true){
var result__19715__auto__ = switch__19712__auto__.call(null,state_19909);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19715__auto__;
}
break;
}
}catch (e19927){if((e19927 instanceof Object)){
var ex__19716__auto__ = e19927;
var statearr_19928_19970 = state_19909;
(statearr_19928_19970[(5)] = ex__19716__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19909);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19927;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19971 = state_19909;
state_19909 = G__19971;
continue;
} else {
return ret_value__19714__auto__;
}
break;
}
});
veye2$api$sync_all_$_state_machine__19713__auto__ = function(state_19909){
switch(arguments.length){
case 0:
return veye2$api$sync_all_$_state_machine__19713__auto____0.call(this);
case 1:
return veye2$api$sync_all_$_state_machine__19713__auto____1.call(this,state_19909);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
veye2$api$sync_all_$_state_machine__19713__auto__.cljs$core$IFn$_invoke$arity$0 = veye2$api$sync_all_$_state_machine__19713__auto____0;
veye2$api$sync_all_$_state_machine__19713__auto__.cljs$core$IFn$_invoke$arity$1 = veye2$api$sync_all_$_state_machine__19713__auto____1;
return veye2$api$sync_all_$_state_machine__19713__auto__;
})()
;})(switch__19712__auto__,c__19733__auto__,api_db,done_QMARK_,failed_detail,project_ch,progress_ch,list_handler,list_error_handler,detail_handler,detail_fail_handler))
})();
var state__19735__auto__ = (function (){var statearr_19929 = f__19734__auto__.call(null);
(statearr_19929[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19733__auto__);

return statearr_19929;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19735__auto__);
});})(c__19733__auto__,api_db,done_QMARK_,failed_detail,project_ch,progress_ch,list_handler,list_error_handler,detail_handler,detail_fail_handler))
);

return c__19733__auto__;
});

//# sourceMappingURL=api.js.map