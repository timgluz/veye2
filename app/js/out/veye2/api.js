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
var api_db = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"selected","selected",574897764),null,new cljs.core.Keyword(null,"synced-at","synced-at",98622459),null,new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"details","details",1956795411),cljs.core.PersistentArrayMap.EMPTY], null));
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

var seq__24733_24809 = cljs.core.seq.call(null,res);
var chunk__24734_24810 = null;
var count__24735_24811 = (0);
var i__24736_24812 = (0);
while(true){
if((i__24736_24812 < count__24735_24811)){
var proj_24813 = cljs.core._nth.call(null,chunk__24734_24810,i__24736_24812);
cljs.core.async.put_BANG_.call(null,project_ch__$1,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(proj_24813));

var G__24814 = seq__24733_24809;
var G__24815 = chunk__24734_24810;
var G__24816 = count__24735_24811;
var G__24817 = (i__24736_24812 + (1));
seq__24733_24809 = G__24814;
chunk__24734_24810 = G__24815;
count__24735_24811 = G__24816;
i__24736_24812 = G__24817;
continue;
} else {
var temp__4425__auto___24818 = cljs.core.seq.call(null,seq__24733_24809);
if(temp__4425__auto___24818){
var seq__24733_24819__$1 = temp__4425__auto___24818;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24733_24819__$1)){
var c__17369__auto___24820 = cljs.core.chunk_first.call(null,seq__24733_24819__$1);
var G__24821 = cljs.core.chunk_rest.call(null,seq__24733_24819__$1);
var G__24822 = c__17369__auto___24820;
var G__24823 = cljs.core.count.call(null,c__17369__auto___24820);
var G__24824 = (0);
seq__24733_24809 = G__24821;
chunk__24734_24810 = G__24822;
count__24735_24811 = G__24823;
i__24736_24812 = G__24824;
continue;
} else {
var proj_24825 = cljs.core.first.call(null,seq__24733_24819__$1);
cljs.core.async.put_BANG_.call(null,project_ch__$1,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(proj_24825));

var G__24826 = cljs.core.next.call(null,seq__24733_24819__$1);
var G__24827 = null;
var G__24828 = (0);
var G__24829 = (0);
seq__24733_24809 = G__24826;
chunk__24734_24810 = G__24827;
count__24735_24811 = G__24828;
i__24736_24812 = G__24829;
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

var c__20074__auto___24830 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20074__auto___24830,api_db,done_QMARK_,failed_detail,project_ch,progress_ch,list_handler,list_error_handler,detail_handler,detail_fail_handler){
return (function (){
var f__20075__auto__ = (function (){var switch__20009__auto__ = ((function (c__20074__auto___24830,api_db,done_QMARK_,failed_detail,project_ch,progress_ch,list_handler,list_error_handler,detail_handler,detail_fail_handler){
return (function (state_24751){
var state_val_24752 = (state_24751[(1)]);
if((state_val_24752 === (1))){
var state_24751__$1 = state_24751;
var statearr_24753_24831 = state_24751__$1;
(statearr_24753_24831[(2)] = null);

(statearr_24753_24831[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24752 === (2))){
var state_24751__$1 = state_24751;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24751__$1,(4),project_ch);
} else {
if((state_val_24752 === (3))){
var inst_24749 = (state_24751[(2)]);
var state_24751__$1 = state_24751;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24751__$1,inst_24749);
} else {
if((state_val_24752 === (4))){
var inst_24739 = (state_24751[(7)]);
var inst_24739__$1 = (state_24751[(2)]);
var state_24751__$1 = (function (){var statearr_24754 = state_24751;
(statearr_24754[(7)] = inst_24739__$1);

return statearr_24754;
})();
if(cljs.core.truth_(inst_24739__$1)){
var statearr_24755_24832 = state_24751__$1;
(statearr_24755_24832[(1)] = (5));

} else {
var statearr_24756_24833 = state_24751__$1;
(statearr_24756_24833[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24752 === (5))){
var inst_24739 = (state_24751[(7)]);
var inst_24741 = detail_handler.call(null,inst_24739,progress_ch);
var inst_24742 = detail_fail_handler.call(null,inst_24739,progress_ch);
var inst_24743 = veye2.api.fetch_project_by_id.call(null,api_key,inst_24739,inst_24741,inst_24742);
var state_24751__$1 = (function (){var statearr_24757 = state_24751;
(statearr_24757[(8)] = inst_24743);

return statearr_24757;
})();
var statearr_24758_24834 = state_24751__$1;
(statearr_24758_24834[(2)] = null);

(statearr_24758_24834[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24752 === (6))){
var state_24751__$1 = state_24751;
var statearr_24759_24835 = state_24751__$1;
(statearr_24759_24835[(2)] = null);

(statearr_24759_24835[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24752 === (7))){
var inst_24747 = (state_24751[(2)]);
var state_24751__$1 = state_24751;
var statearr_24760_24836 = state_24751__$1;
(statearr_24760_24836[(2)] = inst_24747);

(statearr_24760_24836[(1)] = (3));


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
});})(c__20074__auto___24830,api_db,done_QMARK_,failed_detail,project_ch,progress_ch,list_handler,list_error_handler,detail_handler,detail_fail_handler))
;
return ((function (switch__20009__auto__,c__20074__auto___24830,api_db,done_QMARK_,failed_detail,project_ch,progress_ch,list_handler,list_error_handler,detail_handler,detail_fail_handler){
return (function() {
var veye2$api$sync_all_$_state_machine__20010__auto__ = null;
var veye2$api$sync_all_$_state_machine__20010__auto____0 = (function (){
var statearr_24764 = [null,null,null,null,null,null,null,null,null];
(statearr_24764[(0)] = veye2$api$sync_all_$_state_machine__20010__auto__);

(statearr_24764[(1)] = (1));

return statearr_24764;
});
var veye2$api$sync_all_$_state_machine__20010__auto____1 = (function (state_24751){
while(true){
var ret_value__20011__auto__ = (function (){try{while(true){
var result__20012__auto__ = switch__20009__auto__.call(null,state_24751);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20012__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20012__auto__;
}
break;
}
}catch (e24765){if((e24765 instanceof Object)){
var ex__20013__auto__ = e24765;
var statearr_24766_24837 = state_24751;
(statearr_24766_24837[(5)] = ex__20013__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24751);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24765;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20011__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24838 = state_24751;
state_24751 = G__24838;
continue;
} else {
return ret_value__20011__auto__;
}
break;
}
});
veye2$api$sync_all_$_state_machine__20010__auto__ = function(state_24751){
switch(arguments.length){
case 0:
return veye2$api$sync_all_$_state_machine__20010__auto____0.call(this);
case 1:
return veye2$api$sync_all_$_state_machine__20010__auto____1.call(this,state_24751);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
veye2$api$sync_all_$_state_machine__20010__auto__.cljs$core$IFn$_invoke$arity$0 = veye2$api$sync_all_$_state_machine__20010__auto____0;
veye2$api$sync_all_$_state_machine__20010__auto__.cljs$core$IFn$_invoke$arity$1 = veye2$api$sync_all_$_state_machine__20010__auto____1;
return veye2$api$sync_all_$_state_machine__20010__auto__;
})()
;})(switch__20009__auto__,c__20074__auto___24830,api_db,done_QMARK_,failed_detail,project_ch,progress_ch,list_handler,list_error_handler,detail_handler,detail_fail_handler))
})();
var state__20076__auto__ = (function (){var statearr_24767 = f__20075__auto__.call(null);
(statearr_24767[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20074__auto___24830);

return statearr_24767;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20076__auto__);
});})(c__20074__auto___24830,api_db,done_QMARK_,failed_detail,project_ch,progress_ch,list_handler,list_error_handler,detail_handler,detail_fail_handler))
);


var c__20074__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20074__auto__,api_db,done_QMARK_,failed_detail,project_ch,progress_ch,list_handler,list_error_handler,detail_handler,detail_fail_handler){
return (function (){
var f__20075__auto__ = (function (){var switch__20009__auto__ = ((function (c__20074__auto__,api_db,done_QMARK_,failed_detail,project_ch,progress_ch,list_handler,list_error_handler,detail_handler,detail_fail_handler){
return (function (state_24788){
var state_val_24789 = (state_24788[(1)]);
if((state_val_24789 === (7))){
var inst_24784 = (state_24788[(2)]);
var state_24788__$1 = state_24788;
var statearr_24790_24839 = state_24788__$1;
(statearr_24790_24839[(2)] = inst_24784);

(statearr_24790_24839[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24789 === (1))){
var state_24788__$1 = state_24788;
var statearr_24791_24840 = state_24788__$1;
(statearr_24791_24840[(2)] = null);

(statearr_24791_24840[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24789 === (4))){
var inst_24770 = (state_24788[(7)]);
var inst_24770__$1 = (state_24788[(2)]);
var state_24788__$1 = (function (){var statearr_24792 = state_24788;
(statearr_24792[(7)] = inst_24770__$1);

return statearr_24792;
})();
if(cljs.core.truth_(inst_24770__$1)){
var statearr_24793_24841 = state_24788__$1;
(statearr_24793_24841[(1)] = (5));

} else {
var statearr_24794_24842 = state_24788__$1;
(statearr_24794_24842[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24789 === (6))){
var state_24788__$1 = state_24788;
var statearr_24795_24843 = state_24788__$1;
(statearr_24795_24843[(2)] = null);

(statearr_24795_24843[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24789 === (3))){
var inst_24786 = (state_24788[(2)]);
var state_24788__$1 = state_24788;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24788__$1,inst_24786);
} else {
if((state_val_24789 === (2))){
var state_24788__$1 = state_24788;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24788__$1,(4),progress_ch);
} else {
if((state_val_24789 === (9))){
var state_24788__$1 = state_24788;
var statearr_24796_24844 = state_24788__$1;
(statearr_24796_24844[(2)] = null);

(statearr_24796_24844[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24789 === (5))){
var inst_24770 = (state_24788[(7)]);
var inst_24772 = on_step.call(null,inst_24770);
var inst_24773 = cljs.core.deref.call(null,api_db);
var inst_24774 = done_QMARK_.call(null,inst_24773);
var state_24788__$1 = (function (){var statearr_24797 = state_24788;
(statearr_24797[(8)] = inst_24772);

return statearr_24797;
})();
if(cljs.core.truth_(inst_24774)){
var statearr_24798_24845 = state_24788__$1;
(statearr_24798_24845[(1)] = (8));

} else {
var statearr_24799_24846 = state_24788__$1;
(statearr_24799_24846[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24789 === (10))){
var inst_24781 = (state_24788[(2)]);
var state_24788__$1 = state_24788;
var statearr_24800_24847 = state_24788__$1;
(statearr_24800_24847[(2)] = inst_24781);

(statearr_24800_24847[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24789 === (8))){
var inst_24776 = cljs.core.deref.call(null,api_db);
var inst_24777 = on_success.call(null,inst_24776);
var state_24788__$1 = state_24788;
var statearr_24801_24848 = state_24788__$1;
(statearr_24801_24848[(2)] = inst_24777);

(statearr_24801_24848[(1)] = (10));


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
});})(c__20074__auto__,api_db,done_QMARK_,failed_detail,project_ch,progress_ch,list_handler,list_error_handler,detail_handler,detail_fail_handler))
;
return ((function (switch__20009__auto__,c__20074__auto__,api_db,done_QMARK_,failed_detail,project_ch,progress_ch,list_handler,list_error_handler,detail_handler,detail_fail_handler){
return (function() {
var veye2$api$sync_all_$_state_machine__20010__auto__ = null;
var veye2$api$sync_all_$_state_machine__20010__auto____0 = (function (){
var statearr_24805 = [null,null,null,null,null,null,null,null,null];
(statearr_24805[(0)] = veye2$api$sync_all_$_state_machine__20010__auto__);

(statearr_24805[(1)] = (1));

return statearr_24805;
});
var veye2$api$sync_all_$_state_machine__20010__auto____1 = (function (state_24788){
while(true){
var ret_value__20011__auto__ = (function (){try{while(true){
var result__20012__auto__ = switch__20009__auto__.call(null,state_24788);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20012__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20012__auto__;
}
break;
}
}catch (e24806){if((e24806 instanceof Object)){
var ex__20013__auto__ = e24806;
var statearr_24807_24849 = state_24788;
(statearr_24807_24849[(5)] = ex__20013__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24788);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24806;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20011__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24850 = state_24788;
state_24788 = G__24850;
continue;
} else {
return ret_value__20011__auto__;
}
break;
}
});
veye2$api$sync_all_$_state_machine__20010__auto__ = function(state_24788){
switch(arguments.length){
case 0:
return veye2$api$sync_all_$_state_machine__20010__auto____0.call(this);
case 1:
return veye2$api$sync_all_$_state_machine__20010__auto____1.call(this,state_24788);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
veye2$api$sync_all_$_state_machine__20010__auto__.cljs$core$IFn$_invoke$arity$0 = veye2$api$sync_all_$_state_machine__20010__auto____0;
veye2$api$sync_all_$_state_machine__20010__auto__.cljs$core$IFn$_invoke$arity$1 = veye2$api$sync_all_$_state_machine__20010__auto____1;
return veye2$api$sync_all_$_state_machine__20010__auto__;
})()
;})(switch__20009__auto__,c__20074__auto__,api_db,done_QMARK_,failed_detail,project_ch,progress_ch,list_handler,list_error_handler,detail_handler,detail_fail_handler))
})();
var state__20076__auto__ = (function (){var statearr_24808 = f__20075__auto__.call(null);
(statearr_24808[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20074__auto__);

return statearr_24808;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20076__auto__);
});})(c__20074__auto__,api_db,done_QMARK_,failed_detail,project_ch,progress_ch,list_handler,list_error_handler,detail_handler,detail_fail_handler))
);

return c__20074__auto__;
});

//# sourceMappingURL=api.js.map