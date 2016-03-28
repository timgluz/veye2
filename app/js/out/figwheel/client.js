// Compiled by ClojureScript 1.7.122 {:elide-asserts true}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
if(typeof figwheel.client.autoload !== 'undefined'){
} else {
figwheel.client.autoload = cljs.core.atom.call(null,true);
}
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
return cljs.core.swap_BANG_.call(null,figwheel.client.autoload,cljs.core.not);
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__31402__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__31402 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31403__i = 0, G__31403__a = new Array(arguments.length -  0);
while (G__31403__i < G__31403__a.length) {G__31403__a[G__31403__i] = arguments[G__31403__i + 0]; ++G__31403__i;}
  args = new cljs.core.IndexedSeq(G__31403__a,0);
} 
return G__31402__delegate.call(this,args);};
G__31402.cljs$lang$maxFixedArity = 0;
G__31402.cljs$lang$applyTo = (function (arglist__31404){
var args = cljs.core.seq(arglist__31404);
return G__31402__delegate(args);
});
G__31402.cljs$core$IFn$_invoke$arity$variadic = G__31402__delegate;
return G__31402;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__31405){
var map__31408 = p__31405;
var map__31408__$1 = ((((!((map__31408 == null)))?((((map__31408.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31408.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31408):map__31408);
var message = cljs.core.get.call(null,map__31408__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__31408__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__16449__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16449__auto__)){
return or__16449__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__16437__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__16437__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__16437__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__19778__auto___31556 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19778__auto___31556,ch){
return (function (){
var f__19779__auto__ = (function (){var switch__19713__auto__ = ((function (c__19778__auto___31556,ch){
return (function (state_31526){
var state_val_31527 = (state_31526[(1)]);
if((state_val_31527 === (7))){
var inst_31522 = (state_31526[(2)]);
var state_31526__$1 = state_31526;
var statearr_31528_31557 = state_31526__$1;
(statearr_31528_31557[(2)] = inst_31522);

(statearr_31528_31557[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31527 === (1))){
var state_31526__$1 = state_31526;
var statearr_31529_31558 = state_31526__$1;
(statearr_31529_31558[(2)] = null);

(statearr_31529_31558[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31527 === (4))){
var inst_31485 = (state_31526[(7)]);
var inst_31485__$1 = (state_31526[(2)]);
var state_31526__$1 = (function (){var statearr_31530 = state_31526;
(statearr_31530[(7)] = inst_31485__$1);

return statearr_31530;
})();
if(cljs.core.truth_(inst_31485__$1)){
var statearr_31531_31559 = state_31526__$1;
(statearr_31531_31559[(1)] = (5));

} else {
var statearr_31532_31560 = state_31526__$1;
(statearr_31532_31560[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31527 === (15))){
var inst_31492 = (state_31526[(8)]);
var inst_31507 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_31492);
var inst_31508 = cljs.core.first.call(null,inst_31507);
var inst_31509 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_31508);
var inst_31510 = console.warn("Figwheel: Not loading code with warnings - ",inst_31509);
var state_31526__$1 = state_31526;
var statearr_31533_31561 = state_31526__$1;
(statearr_31533_31561[(2)] = inst_31510);

(statearr_31533_31561[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31527 === (13))){
var inst_31515 = (state_31526[(2)]);
var state_31526__$1 = state_31526;
var statearr_31534_31562 = state_31526__$1;
(statearr_31534_31562[(2)] = inst_31515);

(statearr_31534_31562[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31527 === (6))){
var state_31526__$1 = state_31526;
var statearr_31535_31563 = state_31526__$1;
(statearr_31535_31563[(2)] = null);

(statearr_31535_31563[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31527 === (17))){
var inst_31513 = (state_31526[(2)]);
var state_31526__$1 = state_31526;
var statearr_31536_31564 = state_31526__$1;
(statearr_31536_31564[(2)] = inst_31513);

(statearr_31536_31564[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31527 === (3))){
var inst_31524 = (state_31526[(2)]);
var state_31526__$1 = state_31526;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31526__$1,inst_31524);
} else {
if((state_val_31527 === (12))){
var inst_31491 = (state_31526[(9)]);
var inst_31505 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_31491,opts);
var state_31526__$1 = state_31526;
if(cljs.core.truth_(inst_31505)){
var statearr_31537_31565 = state_31526__$1;
(statearr_31537_31565[(1)] = (15));

} else {
var statearr_31538_31566 = state_31526__$1;
(statearr_31538_31566[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31527 === (2))){
var state_31526__$1 = state_31526;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31526__$1,(4),ch);
} else {
if((state_val_31527 === (11))){
var inst_31492 = (state_31526[(8)]);
var inst_31497 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31498 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_31492);
var inst_31499 = cljs.core.async.timeout.call(null,(1000));
var inst_31500 = [inst_31498,inst_31499];
var inst_31501 = (new cljs.core.PersistentVector(null,2,(5),inst_31497,inst_31500,null));
var state_31526__$1 = state_31526;
return cljs.core.async.ioc_alts_BANG_.call(null,state_31526__$1,(14),inst_31501);
} else {
if((state_val_31527 === (9))){
var state_31526__$1 = state_31526;
var statearr_31539_31567 = state_31526__$1;
(statearr_31539_31567[(2)] = null);

(statearr_31539_31567[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31527 === (5))){
var inst_31485 = (state_31526[(7)]);
var inst_31487 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_31488 = (new cljs.core.PersistentArrayMap(null,2,inst_31487,null));
var inst_31489 = (new cljs.core.PersistentHashSet(null,inst_31488,null));
var inst_31490 = figwheel.client.focus_msgs.call(null,inst_31489,inst_31485);
var inst_31491 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_31490);
var inst_31492 = cljs.core.first.call(null,inst_31490);
var inst_31493 = cljs.core.deref.call(null,figwheel.client.autoload);
var state_31526__$1 = (function (){var statearr_31540 = state_31526;
(statearr_31540[(9)] = inst_31491);

(statearr_31540[(8)] = inst_31492);

return statearr_31540;
})();
if(cljs.core.truth_(inst_31493)){
var statearr_31541_31568 = state_31526__$1;
(statearr_31541_31568[(1)] = (8));

} else {
var statearr_31542_31569 = state_31526__$1;
(statearr_31542_31569[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31527 === (14))){
var inst_31503 = (state_31526[(2)]);
var state_31526__$1 = state_31526;
var statearr_31543_31570 = state_31526__$1;
(statearr_31543_31570[(2)] = inst_31503);

(statearr_31543_31570[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31527 === (16))){
var state_31526__$1 = state_31526;
var statearr_31544_31571 = state_31526__$1;
(statearr_31544_31571[(2)] = null);

(statearr_31544_31571[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31527 === (10))){
var inst_31518 = (state_31526[(2)]);
var state_31526__$1 = (function (){var statearr_31545 = state_31526;
(statearr_31545[(10)] = inst_31518);

return statearr_31545;
})();
var statearr_31546_31572 = state_31526__$1;
(statearr_31546_31572[(2)] = null);

(statearr_31546_31572[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31527 === (8))){
var inst_31491 = (state_31526[(9)]);
var inst_31495 = figwheel.client.reload_file_state_QMARK_.call(null,inst_31491,opts);
var state_31526__$1 = state_31526;
if(cljs.core.truth_(inst_31495)){
var statearr_31547_31573 = state_31526__$1;
(statearr_31547_31573[(1)] = (11));

} else {
var statearr_31548_31574 = state_31526__$1;
(statearr_31548_31574[(1)] = (12));

}

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
}
}
}
}
}
}
}
});})(c__19778__auto___31556,ch))
;
return ((function (switch__19713__auto__,c__19778__auto___31556,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__19714__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__19714__auto____0 = (function (){
var statearr_31552 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31552[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__19714__auto__);

(statearr_31552[(1)] = (1));

return statearr_31552;
});
var figwheel$client$file_reloader_plugin_$_state_machine__19714__auto____1 = (function (state_31526){
while(true){
var ret_value__19715__auto__ = (function (){try{while(true){
var result__19716__auto__ = switch__19713__auto__.call(null,state_31526);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19716__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19716__auto__;
}
break;
}
}catch (e31553){if((e31553 instanceof Object)){
var ex__19717__auto__ = e31553;
var statearr_31554_31575 = state_31526;
(statearr_31554_31575[(5)] = ex__19717__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31526);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31553;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31576 = state_31526;
state_31526 = G__31576;
continue;
} else {
return ret_value__19715__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__19714__auto__ = function(state_31526){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__19714__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__19714__auto____1.call(this,state_31526);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__19714__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__19714__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__19714__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__19714__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__19714__auto__;
})()
;})(switch__19713__auto__,c__19778__auto___31556,ch))
})();
var state__19780__auto__ = (function (){var statearr_31555 = f__19779__auto__.call(null);
(statearr_31555[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19778__auto___31556);

return statearr_31555;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19780__auto__);
});})(c__19778__auto___31556,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__31577_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__31577_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_31584 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_31584){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_31582 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_31583 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_31582,_STAR_print_newline_STAR_31583,base_path_31584){
return (function() { 
var G__31585__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__31585 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31586__i = 0, G__31586__a = new Array(arguments.length -  0);
while (G__31586__i < G__31586__a.length) {G__31586__a[G__31586__i] = arguments[G__31586__i + 0]; ++G__31586__i;}
  args = new cljs.core.IndexedSeq(G__31586__a,0);
} 
return G__31585__delegate.call(this,args);};
G__31585.cljs$lang$maxFixedArity = 0;
G__31585.cljs$lang$applyTo = (function (arglist__31587){
var args = cljs.core.seq(arglist__31587);
return G__31585__delegate(args);
});
G__31585.cljs$core$IFn$_invoke$arity$variadic = G__31585__delegate;
return G__31585;
})()
;})(_STAR_print_fn_STAR_31582,_STAR_print_newline_STAR_31583,base_path_31584))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_31583;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_31582;
}}catch (e31581){if((e31581 instanceof Error)){
var e = e31581;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_31584], null));
} else {
var e = e31581;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_31584))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__31588){
var map__31595 = p__31588;
var map__31595__$1 = ((((!((map__31595 == null)))?((((map__31595.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31595.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31595):map__31595);
var opts = map__31595__$1;
var build_id = cljs.core.get.call(null,map__31595__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__31595,map__31595__$1,opts,build_id){
return (function (p__31597){
var vec__31598 = p__31597;
var map__31599 = cljs.core.nth.call(null,vec__31598,(0),null);
var map__31599__$1 = ((((!((map__31599 == null)))?((((map__31599.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31599.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31599):map__31599);
var msg = map__31599__$1;
var msg_name = cljs.core.get.call(null,map__31599__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__31598,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__31598,map__31599,map__31599__$1,msg,msg_name,_,map__31595,map__31595__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__31598,map__31599,map__31599__$1,msg,msg_name,_,map__31595,map__31595__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__31595,map__31595__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__31605){
var vec__31606 = p__31605;
var map__31607 = cljs.core.nth.call(null,vec__31606,(0),null);
var map__31607__$1 = ((((!((map__31607 == null)))?((((map__31607.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31607.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31607):map__31607);
var msg = map__31607__$1;
var msg_name = cljs.core.get.call(null,map__31607__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__31606,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__31609){
var map__31619 = p__31609;
var map__31619__$1 = ((((!((map__31619 == null)))?((((map__31619.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31619.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31619):map__31619);
var on_compile_warning = cljs.core.get.call(null,map__31619__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__31619__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__31619,map__31619__$1,on_compile_warning,on_compile_fail){
return (function (p__31621){
var vec__31622 = p__31621;
var map__31623 = cljs.core.nth.call(null,vec__31622,(0),null);
var map__31623__$1 = ((((!((map__31623 == null)))?((((map__31623.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31623.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31623):map__31623);
var msg = map__31623__$1;
var msg_name = cljs.core.get.call(null,map__31623__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__31622,(1));
var pred__31625 = cljs.core._EQ_;
var expr__31626 = msg_name;
if(cljs.core.truth_(pred__31625.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__31626))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__31625.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__31626))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__31619,map__31619__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__19778__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19778__auto__,msg_hist,msg_names,msg){
return (function (){
var f__19779__auto__ = (function (){var switch__19713__auto__ = ((function (c__19778__auto__,msg_hist,msg_names,msg){
return (function (state_31842){
var state_val_31843 = (state_31842[(1)]);
if((state_val_31843 === (7))){
var inst_31766 = (state_31842[(2)]);
var state_31842__$1 = state_31842;
if(cljs.core.truth_(inst_31766)){
var statearr_31844_31890 = state_31842__$1;
(statearr_31844_31890[(1)] = (8));

} else {
var statearr_31845_31891 = state_31842__$1;
(statearr_31845_31891[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31843 === (20))){
var inst_31836 = (state_31842[(2)]);
var state_31842__$1 = state_31842;
var statearr_31846_31892 = state_31842__$1;
(statearr_31846_31892[(2)] = inst_31836);

(statearr_31846_31892[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31843 === (27))){
var inst_31832 = (state_31842[(2)]);
var state_31842__$1 = state_31842;
var statearr_31847_31893 = state_31842__$1;
(statearr_31847_31893[(2)] = inst_31832);

(statearr_31847_31893[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31843 === (1))){
var inst_31759 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_31842__$1 = state_31842;
if(cljs.core.truth_(inst_31759)){
var statearr_31848_31894 = state_31842__$1;
(statearr_31848_31894[(1)] = (2));

} else {
var statearr_31849_31895 = state_31842__$1;
(statearr_31849_31895[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31843 === (24))){
var inst_31834 = (state_31842[(2)]);
var state_31842__$1 = state_31842;
var statearr_31850_31896 = state_31842__$1;
(statearr_31850_31896[(2)] = inst_31834);

(statearr_31850_31896[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31843 === (4))){
var inst_31840 = (state_31842[(2)]);
var state_31842__$1 = state_31842;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31842__$1,inst_31840);
} else {
if((state_val_31843 === (15))){
var inst_31838 = (state_31842[(2)]);
var state_31842__$1 = state_31842;
var statearr_31851_31897 = state_31842__$1;
(statearr_31851_31897[(2)] = inst_31838);

(statearr_31851_31897[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31843 === (21))){
var inst_31797 = (state_31842[(2)]);
var state_31842__$1 = state_31842;
var statearr_31852_31898 = state_31842__$1;
(statearr_31852_31898[(2)] = inst_31797);

(statearr_31852_31898[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31843 === (31))){
var inst_31821 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_31842__$1 = state_31842;
if(cljs.core.truth_(inst_31821)){
var statearr_31853_31899 = state_31842__$1;
(statearr_31853_31899[(1)] = (34));

} else {
var statearr_31854_31900 = state_31842__$1;
(statearr_31854_31900[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31843 === (32))){
var inst_31830 = (state_31842[(2)]);
var state_31842__$1 = state_31842;
var statearr_31855_31901 = state_31842__$1;
(statearr_31855_31901[(2)] = inst_31830);

(statearr_31855_31901[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31843 === (33))){
var inst_31819 = (state_31842[(2)]);
var state_31842__$1 = state_31842;
var statearr_31856_31902 = state_31842__$1;
(statearr_31856_31902[(2)] = inst_31819);

(statearr_31856_31902[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31843 === (13))){
var inst_31780 = figwheel.client.heads_up.clear.call(null);
var state_31842__$1 = state_31842;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31842__$1,(16),inst_31780);
} else {
if((state_val_31843 === (22))){
var inst_31801 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31802 = figwheel.client.heads_up.append_message.call(null,inst_31801);
var state_31842__$1 = state_31842;
var statearr_31857_31903 = state_31842__$1;
(statearr_31857_31903[(2)] = inst_31802);

(statearr_31857_31903[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31843 === (36))){
var inst_31828 = (state_31842[(2)]);
var state_31842__$1 = state_31842;
var statearr_31858_31904 = state_31842__$1;
(statearr_31858_31904[(2)] = inst_31828);

(statearr_31858_31904[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31843 === (29))){
var inst_31812 = (state_31842[(2)]);
var state_31842__$1 = state_31842;
var statearr_31859_31905 = state_31842__$1;
(statearr_31859_31905[(2)] = inst_31812);

(statearr_31859_31905[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31843 === (6))){
var inst_31761 = (state_31842[(7)]);
var state_31842__$1 = state_31842;
var statearr_31860_31906 = state_31842__$1;
(statearr_31860_31906[(2)] = inst_31761);

(statearr_31860_31906[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31843 === (28))){
var inst_31808 = (state_31842[(2)]);
var inst_31809 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31810 = figwheel.client.heads_up.display_warning.call(null,inst_31809);
var state_31842__$1 = (function (){var statearr_31861 = state_31842;
(statearr_31861[(8)] = inst_31808);

return statearr_31861;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31842__$1,(29),inst_31810);
} else {
if((state_val_31843 === (25))){
var inst_31806 = figwheel.client.heads_up.clear.call(null);
var state_31842__$1 = state_31842;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31842__$1,(28),inst_31806);
} else {
if((state_val_31843 === (34))){
var inst_31823 = figwheel.client.heads_up.flash_loaded.call(null);
var state_31842__$1 = state_31842;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31842__$1,(37),inst_31823);
} else {
if((state_val_31843 === (17))){
var inst_31788 = (state_31842[(2)]);
var state_31842__$1 = state_31842;
var statearr_31862_31907 = state_31842__$1;
(statearr_31862_31907[(2)] = inst_31788);

(statearr_31862_31907[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31843 === (3))){
var inst_31778 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_31842__$1 = state_31842;
if(cljs.core.truth_(inst_31778)){
var statearr_31863_31908 = state_31842__$1;
(statearr_31863_31908[(1)] = (13));

} else {
var statearr_31864_31909 = state_31842__$1;
(statearr_31864_31909[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31843 === (12))){
var inst_31774 = (state_31842[(2)]);
var state_31842__$1 = state_31842;
var statearr_31865_31910 = state_31842__$1;
(statearr_31865_31910[(2)] = inst_31774);

(statearr_31865_31910[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31843 === (2))){
var inst_31761 = (state_31842[(7)]);
var inst_31761__$1 = cljs.core.deref.call(null,figwheel.client.autoload);
var state_31842__$1 = (function (){var statearr_31866 = state_31842;
(statearr_31866[(7)] = inst_31761__$1);

return statearr_31866;
})();
if(cljs.core.truth_(inst_31761__$1)){
var statearr_31867_31911 = state_31842__$1;
(statearr_31867_31911[(1)] = (5));

} else {
var statearr_31868_31912 = state_31842__$1;
(statearr_31868_31912[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31843 === (23))){
var inst_31804 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_31842__$1 = state_31842;
if(cljs.core.truth_(inst_31804)){
var statearr_31869_31913 = state_31842__$1;
(statearr_31869_31913[(1)] = (25));

} else {
var statearr_31870_31914 = state_31842__$1;
(statearr_31870_31914[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31843 === (35))){
var state_31842__$1 = state_31842;
var statearr_31871_31915 = state_31842__$1;
(statearr_31871_31915[(2)] = null);

(statearr_31871_31915[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31843 === (19))){
var inst_31799 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_31842__$1 = state_31842;
if(cljs.core.truth_(inst_31799)){
var statearr_31872_31916 = state_31842__$1;
(statearr_31872_31916[(1)] = (22));

} else {
var statearr_31873_31917 = state_31842__$1;
(statearr_31873_31917[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31843 === (11))){
var inst_31770 = (state_31842[(2)]);
var state_31842__$1 = state_31842;
var statearr_31874_31918 = state_31842__$1;
(statearr_31874_31918[(2)] = inst_31770);

(statearr_31874_31918[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31843 === (9))){
var inst_31772 = figwheel.client.heads_up.clear.call(null);
var state_31842__$1 = state_31842;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31842__$1,(12),inst_31772);
} else {
if((state_val_31843 === (5))){
var inst_31763 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_31842__$1 = state_31842;
var statearr_31875_31919 = state_31842__$1;
(statearr_31875_31919[(2)] = inst_31763);

(statearr_31875_31919[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31843 === (14))){
var inst_31790 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_31842__$1 = state_31842;
if(cljs.core.truth_(inst_31790)){
var statearr_31876_31920 = state_31842__$1;
(statearr_31876_31920[(1)] = (18));

} else {
var statearr_31877_31921 = state_31842__$1;
(statearr_31877_31921[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31843 === (26))){
var inst_31814 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_31842__$1 = state_31842;
if(cljs.core.truth_(inst_31814)){
var statearr_31878_31922 = state_31842__$1;
(statearr_31878_31922[(1)] = (30));

} else {
var statearr_31879_31923 = state_31842__$1;
(statearr_31879_31923[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31843 === (16))){
var inst_31782 = (state_31842[(2)]);
var inst_31783 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31784 = figwheel.client.format_messages.call(null,inst_31783);
var inst_31785 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31786 = figwheel.client.heads_up.display_error.call(null,inst_31784,inst_31785);
var state_31842__$1 = (function (){var statearr_31880 = state_31842;
(statearr_31880[(9)] = inst_31782);

return statearr_31880;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31842__$1,(17),inst_31786);
} else {
if((state_val_31843 === (30))){
var inst_31816 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31817 = figwheel.client.heads_up.display_warning.call(null,inst_31816);
var state_31842__$1 = state_31842;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31842__$1,(33),inst_31817);
} else {
if((state_val_31843 === (10))){
var inst_31776 = (state_31842[(2)]);
var state_31842__$1 = state_31842;
var statearr_31881_31924 = state_31842__$1;
(statearr_31881_31924[(2)] = inst_31776);

(statearr_31881_31924[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31843 === (18))){
var inst_31792 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31793 = figwheel.client.format_messages.call(null,inst_31792);
var inst_31794 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31795 = figwheel.client.heads_up.display_error.call(null,inst_31793,inst_31794);
var state_31842__$1 = state_31842;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31842__$1,(21),inst_31795);
} else {
if((state_val_31843 === (37))){
var inst_31825 = (state_31842[(2)]);
var state_31842__$1 = state_31842;
var statearr_31882_31925 = state_31842__$1;
(statearr_31882_31925[(2)] = inst_31825);

(statearr_31882_31925[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31843 === (8))){
var inst_31768 = figwheel.client.heads_up.flash_loaded.call(null);
var state_31842__$1 = state_31842;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31842__$1,(11),inst_31768);
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
}
}
}
}
}
}
}
});})(c__19778__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__19713__auto__,c__19778__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19714__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19714__auto____0 = (function (){
var statearr_31886 = [null,null,null,null,null,null,null,null,null,null];
(statearr_31886[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19714__auto__);

(statearr_31886[(1)] = (1));

return statearr_31886;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19714__auto____1 = (function (state_31842){
while(true){
var ret_value__19715__auto__ = (function (){try{while(true){
var result__19716__auto__ = switch__19713__auto__.call(null,state_31842);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19716__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19716__auto__;
}
break;
}
}catch (e31887){if((e31887 instanceof Object)){
var ex__19717__auto__ = e31887;
var statearr_31888_31926 = state_31842;
(statearr_31888_31926[(5)] = ex__19717__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31842);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31887;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31927 = state_31842;
state_31842 = G__31927;
continue;
} else {
return ret_value__19715__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19714__auto__ = function(state_31842){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19714__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19714__auto____1.call(this,state_31842);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19714__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19714__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19714__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19714__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19714__auto__;
})()
;})(switch__19713__auto__,c__19778__auto__,msg_hist,msg_names,msg))
})();
var state__19780__auto__ = (function (){var statearr_31889 = f__19779__auto__.call(null);
(statearr_31889[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19778__auto__);

return statearr_31889;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19780__auto__);
});})(c__19778__auto__,msg_hist,msg_names,msg))
);

return c__19778__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__19778__auto___31990 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19778__auto___31990,ch){
return (function (){
var f__19779__auto__ = (function (){var switch__19713__auto__ = ((function (c__19778__auto___31990,ch){
return (function (state_31973){
var state_val_31974 = (state_31973[(1)]);
if((state_val_31974 === (1))){
var state_31973__$1 = state_31973;
var statearr_31975_31991 = state_31973__$1;
(statearr_31975_31991[(2)] = null);

(statearr_31975_31991[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31974 === (2))){
var state_31973__$1 = state_31973;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31973__$1,(4),ch);
} else {
if((state_val_31974 === (3))){
var inst_31971 = (state_31973[(2)]);
var state_31973__$1 = state_31973;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31973__$1,inst_31971);
} else {
if((state_val_31974 === (4))){
var inst_31961 = (state_31973[(7)]);
var inst_31961__$1 = (state_31973[(2)]);
var state_31973__$1 = (function (){var statearr_31976 = state_31973;
(statearr_31976[(7)] = inst_31961__$1);

return statearr_31976;
})();
if(cljs.core.truth_(inst_31961__$1)){
var statearr_31977_31992 = state_31973__$1;
(statearr_31977_31992[(1)] = (5));

} else {
var statearr_31978_31993 = state_31973__$1;
(statearr_31978_31993[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31974 === (5))){
var inst_31961 = (state_31973[(7)]);
var inst_31963 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_31961);
var state_31973__$1 = state_31973;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31973__$1,(8),inst_31963);
} else {
if((state_val_31974 === (6))){
var state_31973__$1 = state_31973;
var statearr_31979_31994 = state_31973__$1;
(statearr_31979_31994[(2)] = null);

(statearr_31979_31994[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31974 === (7))){
var inst_31969 = (state_31973[(2)]);
var state_31973__$1 = state_31973;
var statearr_31980_31995 = state_31973__$1;
(statearr_31980_31995[(2)] = inst_31969);

(statearr_31980_31995[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31974 === (8))){
var inst_31965 = (state_31973[(2)]);
var state_31973__$1 = (function (){var statearr_31981 = state_31973;
(statearr_31981[(8)] = inst_31965);

return statearr_31981;
})();
var statearr_31982_31996 = state_31973__$1;
(statearr_31982_31996[(2)] = null);

(statearr_31982_31996[(1)] = (2));


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
});})(c__19778__auto___31990,ch))
;
return ((function (switch__19713__auto__,c__19778__auto___31990,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__19714__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__19714__auto____0 = (function (){
var statearr_31986 = [null,null,null,null,null,null,null,null,null];
(statearr_31986[(0)] = figwheel$client$heads_up_plugin_$_state_machine__19714__auto__);

(statearr_31986[(1)] = (1));

return statearr_31986;
});
var figwheel$client$heads_up_plugin_$_state_machine__19714__auto____1 = (function (state_31973){
while(true){
var ret_value__19715__auto__ = (function (){try{while(true){
var result__19716__auto__ = switch__19713__auto__.call(null,state_31973);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19716__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19716__auto__;
}
break;
}
}catch (e31987){if((e31987 instanceof Object)){
var ex__19717__auto__ = e31987;
var statearr_31988_31997 = state_31973;
(statearr_31988_31997[(5)] = ex__19717__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31973);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31987;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31998 = state_31973;
state_31973 = G__31998;
continue;
} else {
return ret_value__19715__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__19714__auto__ = function(state_31973){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__19714__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__19714__auto____1.call(this,state_31973);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__19714__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__19714__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__19714__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__19714__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__19714__auto__;
})()
;})(switch__19713__auto__,c__19778__auto___31990,ch))
})();
var state__19780__auto__ = (function (){var statearr_31989 = f__19779__auto__.call(null);
(statearr_31989[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19778__auto___31990);

return statearr_31989;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19780__auto__);
});})(c__19778__auto___31990,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__19778__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19778__auto__){
return (function (){
var f__19779__auto__ = (function (){var switch__19713__auto__ = ((function (c__19778__auto__){
return (function (state_32019){
var state_val_32020 = (state_32019[(1)]);
if((state_val_32020 === (1))){
var inst_32014 = cljs.core.async.timeout.call(null,(3000));
var state_32019__$1 = state_32019;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32019__$1,(2),inst_32014);
} else {
if((state_val_32020 === (2))){
var inst_32016 = (state_32019[(2)]);
var inst_32017 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_32019__$1 = (function (){var statearr_32021 = state_32019;
(statearr_32021[(7)] = inst_32016);

return statearr_32021;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32019__$1,inst_32017);
} else {
return null;
}
}
});})(c__19778__auto__))
;
return ((function (switch__19713__auto__,c__19778__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__19714__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__19714__auto____0 = (function (){
var statearr_32025 = [null,null,null,null,null,null,null,null];
(statearr_32025[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__19714__auto__);

(statearr_32025[(1)] = (1));

return statearr_32025;
});
var figwheel$client$enforce_project_plugin_$_state_machine__19714__auto____1 = (function (state_32019){
while(true){
var ret_value__19715__auto__ = (function (){try{while(true){
var result__19716__auto__ = switch__19713__auto__.call(null,state_32019);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19716__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19716__auto__;
}
break;
}
}catch (e32026){if((e32026 instanceof Object)){
var ex__19717__auto__ = e32026;
var statearr_32027_32029 = state_32019;
(statearr_32027_32029[(5)] = ex__19717__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32019);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32026;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32030 = state_32019;
state_32019 = G__32030;
continue;
} else {
return ret_value__19715__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__19714__auto__ = function(state_32019){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__19714__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__19714__auto____1.call(this,state_32019);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__19714__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__19714__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__19714__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__19714__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__19714__auto__;
})()
;})(switch__19713__auto__,c__19778__auto__))
})();
var state__19780__auto__ = (function (){var statearr_32028 = f__19779__auto__.call(null);
(statearr_32028[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19778__auto__);

return statearr_32028;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19780__auto__);
});})(c__19778__auto__))
);

return c__19778__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__32031){
var map__32038 = p__32031;
var map__32038__$1 = ((((!((map__32038 == null)))?((((map__32038.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32038.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32038):map__32038);
var ed = map__32038__$1;
var formatted_exception = cljs.core.get.call(null,map__32038__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__32038__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__32038__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__32040_32044 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__32041_32045 = null;
var count__32042_32046 = (0);
var i__32043_32047 = (0);
while(true){
if((i__32043_32047 < count__32042_32046)){
var msg_32048 = cljs.core._nth.call(null,chunk__32041_32045,i__32043_32047);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_32048);

var G__32049 = seq__32040_32044;
var G__32050 = chunk__32041_32045;
var G__32051 = count__32042_32046;
var G__32052 = (i__32043_32047 + (1));
seq__32040_32044 = G__32049;
chunk__32041_32045 = G__32050;
count__32042_32046 = G__32051;
i__32043_32047 = G__32052;
continue;
} else {
var temp__4425__auto___32053 = cljs.core.seq.call(null,seq__32040_32044);
if(temp__4425__auto___32053){
var seq__32040_32054__$1 = temp__4425__auto___32053;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32040_32054__$1)){
var c__17252__auto___32055 = cljs.core.chunk_first.call(null,seq__32040_32054__$1);
var G__32056 = cljs.core.chunk_rest.call(null,seq__32040_32054__$1);
var G__32057 = c__17252__auto___32055;
var G__32058 = cljs.core.count.call(null,c__17252__auto___32055);
var G__32059 = (0);
seq__32040_32044 = G__32056;
chunk__32041_32045 = G__32057;
count__32042_32046 = G__32058;
i__32043_32047 = G__32059;
continue;
} else {
var msg_32060 = cljs.core.first.call(null,seq__32040_32054__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_32060);

var G__32061 = cljs.core.next.call(null,seq__32040_32054__$1);
var G__32062 = null;
var G__32063 = (0);
var G__32064 = (0);
seq__32040_32044 = G__32061;
chunk__32041_32045 = G__32062;
count__32042_32046 = G__32063;
i__32043_32047 = G__32064;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__32065){
var map__32068 = p__32065;
var map__32068__$1 = ((((!((map__32068 == null)))?((((map__32068.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32068.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32068):map__32068);
var w = map__32068__$1;
var message = cljs.core.get.call(null,map__32068__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__16437__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__16437__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__16437__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__32076 = cljs.core.seq.call(null,plugins);
var chunk__32077 = null;
var count__32078 = (0);
var i__32079 = (0);
while(true){
if((i__32079 < count__32078)){
var vec__32080 = cljs.core._nth.call(null,chunk__32077,i__32079);
var k = cljs.core.nth.call(null,vec__32080,(0),null);
var plugin = cljs.core.nth.call(null,vec__32080,(1),null);
if(cljs.core.truth_(plugin)){
var pl_32082 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__32076,chunk__32077,count__32078,i__32079,pl_32082,vec__32080,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_32082.call(null,msg_hist);
});})(seq__32076,chunk__32077,count__32078,i__32079,pl_32082,vec__32080,k,plugin))
);
} else {
}

var G__32083 = seq__32076;
var G__32084 = chunk__32077;
var G__32085 = count__32078;
var G__32086 = (i__32079 + (1));
seq__32076 = G__32083;
chunk__32077 = G__32084;
count__32078 = G__32085;
i__32079 = G__32086;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__32076);
if(temp__4425__auto__){
var seq__32076__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32076__$1)){
var c__17252__auto__ = cljs.core.chunk_first.call(null,seq__32076__$1);
var G__32087 = cljs.core.chunk_rest.call(null,seq__32076__$1);
var G__32088 = c__17252__auto__;
var G__32089 = cljs.core.count.call(null,c__17252__auto__);
var G__32090 = (0);
seq__32076 = G__32087;
chunk__32077 = G__32088;
count__32078 = G__32089;
i__32079 = G__32090;
continue;
} else {
var vec__32081 = cljs.core.first.call(null,seq__32076__$1);
var k = cljs.core.nth.call(null,vec__32081,(0),null);
var plugin = cljs.core.nth.call(null,vec__32081,(1),null);
if(cljs.core.truth_(plugin)){
var pl_32091 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__32076,chunk__32077,count__32078,i__32079,pl_32091,vec__32081,k,plugin,seq__32076__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_32091.call(null,msg_hist);
});})(seq__32076,chunk__32077,count__32078,i__32079,pl_32091,vec__32081,k,plugin,seq__32076__$1,temp__4425__auto__))
);
} else {
}

var G__32092 = cljs.core.next.call(null,seq__32076__$1);
var G__32093 = null;
var G__32094 = (0);
var G__32095 = (0);
seq__32076 = G__32092;
chunk__32077 = G__32093;
count__32078 = G__32094;
i__32079 = G__32095;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args32096 = [];
var len__17507__auto___32099 = arguments.length;
var i__17508__auto___32100 = (0);
while(true){
if((i__17508__auto___32100 < len__17507__auto___32099)){
args32096.push((arguments[i__17508__auto___32100]));

var G__32101 = (i__17508__auto___32100 + (1));
i__17508__auto___32100 = G__32101;
continue;
} else {
}
break;
}

var G__32098 = args32096.length;
switch (G__32098) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32096.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__17514__auto__ = [];
var len__17507__auto___32107 = arguments.length;
var i__17508__auto___32108 = (0);
while(true){
if((i__17508__auto___32108 < len__17507__auto___32107)){
args__17514__auto__.push((arguments[i__17508__auto___32108]));

var G__32109 = (i__17508__auto___32108 + (1));
i__17508__auto___32108 = G__32109;
continue;
} else {
}
break;
}

var argseq__17515__auto__ = ((((0) < args__17514__auto__.length))?(new cljs.core.IndexedSeq(args__17514__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17515__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__32104){
var map__32105 = p__32104;
var map__32105__$1 = ((((!((map__32105 == null)))?((((map__32105.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32105.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32105):map__32105);
var opts = map__32105__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq32103){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32103));
});

//# sourceMappingURL=client.js.map