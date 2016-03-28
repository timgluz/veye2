// Compiled by ClojureScript 1.7.122 {:elide-asserts true}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');
goog.require('goog.string');
figwheel.client.heads_up.clear;

figwheel.client.heads_up.cljs_logo_svg;
figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__17514__auto__ = [];
var len__17507__auto___32247 = arguments.length;
var i__17508__auto___32248 = (0);
while(true){
if((i__17508__auto___32248 < len__17507__auto___32247)){
args__17514__auto__.push((arguments[i__17508__auto___32248]));

var G__32249 = (i__17508__auto___32248 + (1));
i__17508__auto___32248 = G__32249;
continue;
} else {
}
break;
}

var argseq__17515__auto__ = ((((2) < args__17514__auto__.length))?(new cljs.core.IndexedSeq(args__17514__auto__.slice((2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17515__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__32239_32250 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__32240_32251 = null;
var count__32241_32252 = (0);
var i__32242_32253 = (0);
while(true){
if((i__32242_32253 < count__32241_32252)){
var k_32254 = cljs.core._nth.call(null,chunk__32240_32251,i__32242_32253);
e.setAttribute(cljs.core.name.call(null,k_32254),cljs.core.get.call(null,attrs,k_32254));

var G__32255 = seq__32239_32250;
var G__32256 = chunk__32240_32251;
var G__32257 = count__32241_32252;
var G__32258 = (i__32242_32253 + (1));
seq__32239_32250 = G__32255;
chunk__32240_32251 = G__32256;
count__32241_32252 = G__32257;
i__32242_32253 = G__32258;
continue;
} else {
var temp__4425__auto___32259 = cljs.core.seq.call(null,seq__32239_32250);
if(temp__4425__auto___32259){
var seq__32239_32260__$1 = temp__4425__auto___32259;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32239_32260__$1)){
var c__17252__auto___32261 = cljs.core.chunk_first.call(null,seq__32239_32260__$1);
var G__32262 = cljs.core.chunk_rest.call(null,seq__32239_32260__$1);
var G__32263 = c__17252__auto___32261;
var G__32264 = cljs.core.count.call(null,c__17252__auto___32261);
var G__32265 = (0);
seq__32239_32250 = G__32262;
chunk__32240_32251 = G__32263;
count__32241_32252 = G__32264;
i__32242_32253 = G__32265;
continue;
} else {
var k_32266 = cljs.core.first.call(null,seq__32239_32260__$1);
e.setAttribute(cljs.core.name.call(null,k_32266),cljs.core.get.call(null,attrs,k_32266));

var G__32267 = cljs.core.next.call(null,seq__32239_32260__$1);
var G__32268 = null;
var G__32269 = (0);
var G__32270 = (0);
seq__32239_32250 = G__32267;
chunk__32240_32251 = G__32268;
count__32241_32252 = G__32269;
i__32242_32253 = G__32270;
continue;
}
} else {
}
}
break;
}

var seq__32243_32271 = cljs.core.seq.call(null,children);
var chunk__32244_32272 = null;
var count__32245_32273 = (0);
var i__32246_32274 = (0);
while(true){
if((i__32246_32274 < count__32245_32273)){
var ch_32275 = cljs.core._nth.call(null,chunk__32244_32272,i__32246_32274);
e.appendChild(ch_32275);

var G__32276 = seq__32243_32271;
var G__32277 = chunk__32244_32272;
var G__32278 = count__32245_32273;
var G__32279 = (i__32246_32274 + (1));
seq__32243_32271 = G__32276;
chunk__32244_32272 = G__32277;
count__32245_32273 = G__32278;
i__32246_32274 = G__32279;
continue;
} else {
var temp__4425__auto___32280 = cljs.core.seq.call(null,seq__32243_32271);
if(temp__4425__auto___32280){
var seq__32243_32281__$1 = temp__4425__auto___32280;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32243_32281__$1)){
var c__17252__auto___32282 = cljs.core.chunk_first.call(null,seq__32243_32281__$1);
var G__32283 = cljs.core.chunk_rest.call(null,seq__32243_32281__$1);
var G__32284 = c__17252__auto___32282;
var G__32285 = cljs.core.count.call(null,c__17252__auto___32282);
var G__32286 = (0);
seq__32243_32271 = G__32283;
chunk__32244_32272 = G__32284;
count__32245_32273 = G__32285;
i__32246_32274 = G__32286;
continue;
} else {
var ch_32287 = cljs.core.first.call(null,seq__32243_32281__$1);
e.appendChild(ch_32287);

var G__32288 = cljs.core.next.call(null,seq__32243_32281__$1);
var G__32289 = null;
var G__32290 = (0);
var G__32291 = (0);
seq__32243_32271 = G__32288;
chunk__32244_32272 = G__32289;
count__32245_32273 = G__32290;
i__32246_32274 = G__32291;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq32236){
var G__32237 = cljs.core.first.call(null,seq32236);
var seq32236__$1 = cljs.core.next.call(null,seq32236);
var G__32238 = cljs.core.first.call(null,seq32236__$1);
var seq32236__$2 = cljs.core.next.call(null,seq32236__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__32237,G__32238,seq32236__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__17362__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17363__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17364__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17365__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17366__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__17362__auto__,prefer_table__17363__auto__,method_cache__17364__auto__,cached_hierarchy__17365__auto__,hierarchy__17366__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__17362__auto__,prefer_table__17363__auto__,method_cache__17364__auto__,cached_hierarchy__17365__auto__,hierarchy__17366__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17366__auto__,method_table__17362__auto__,prefer_table__17363__auto__,method_cache__17364__auto__,cached_hierarchy__17365__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_32292 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_32292.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_32292.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_32292.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_32292);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__32293,st_map){
var map__32298 = p__32293;
var map__32298__$1 = ((((!((map__32298 == null)))?((((map__32298.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32298.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32298):map__32298);
var container_el = cljs.core.get.call(null,map__32298__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__32298,map__32298__$1,container_el){
return (function (p__32300){
var vec__32301 = p__32300;
var k = cljs.core.nth.call(null,vec__32301,(0),null);
var v = cljs.core.nth.call(null,vec__32301,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__32298,map__32298__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__32302,dom_str){
var map__32305 = p__32302;
var map__32305__$1 = ((((!((map__32305 == null)))?((((map__32305.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32305.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32305):map__32305);
var c = map__32305__$1;
var content_area_el = cljs.core.get.call(null,map__32305__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__32307){
var map__32310 = p__32307;
var map__32310__$1 = ((((!((map__32310 == null)))?((((map__32310.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32310.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32310):map__32310);
var content_area_el = cljs.core.get.call(null,map__32310__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__19778__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19778__auto__){
return (function (){
var f__19779__auto__ = (function (){var switch__19713__auto__ = ((function (c__19778__auto__){
return (function (state_32353){
var state_val_32354 = (state_32353[(1)]);
if((state_val_32354 === (1))){
var inst_32338 = (state_32353[(7)]);
var inst_32338__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_32339 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_32340 = ["10px","10px","100%","68px","1.0"];
var inst_32341 = cljs.core.PersistentHashMap.fromArrays(inst_32339,inst_32340);
var inst_32342 = cljs.core.merge.call(null,inst_32341,style);
var inst_32343 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_32338__$1,inst_32342);
var inst_32344 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_32338__$1,msg);
var inst_32345 = cljs.core.async.timeout.call(null,(300));
var state_32353__$1 = (function (){var statearr_32355 = state_32353;
(statearr_32355[(8)] = inst_32344);

(statearr_32355[(9)] = inst_32343);

(statearr_32355[(7)] = inst_32338__$1);

return statearr_32355;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32353__$1,(2),inst_32345);
} else {
if((state_val_32354 === (2))){
var inst_32338 = (state_32353[(7)]);
var inst_32347 = (state_32353[(2)]);
var inst_32348 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_32349 = ["auto"];
var inst_32350 = cljs.core.PersistentHashMap.fromArrays(inst_32348,inst_32349);
var inst_32351 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_32338,inst_32350);
var state_32353__$1 = (function (){var statearr_32356 = state_32353;
(statearr_32356[(10)] = inst_32347);

return statearr_32356;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32353__$1,inst_32351);
} else {
return null;
}
}
});})(c__19778__auto__))
;
return ((function (switch__19713__auto__,c__19778__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__19714__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__19714__auto____0 = (function (){
var statearr_32360 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32360[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__19714__auto__);

(statearr_32360[(1)] = (1));

return statearr_32360;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__19714__auto____1 = (function (state_32353){
while(true){
var ret_value__19715__auto__ = (function (){try{while(true){
var result__19716__auto__ = switch__19713__auto__.call(null,state_32353);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19716__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19716__auto__;
}
break;
}
}catch (e32361){if((e32361 instanceof Object)){
var ex__19717__auto__ = e32361;
var statearr_32362_32364 = state_32353;
(statearr_32362_32364[(5)] = ex__19717__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32353);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32361;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32365 = state_32353;
state_32353 = G__32365;
continue;
} else {
return ret_value__19715__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__19714__auto__ = function(state_32353){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__19714__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__19714__auto____1.call(this,state_32353);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__19714__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__19714__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__19714__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__19714__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__19714__auto__;
})()
;})(switch__19713__auto__,c__19778__auto__))
})();
var state__19780__auto__ = (function (){var statearr_32363 = f__19779__auto__.call(null);
(statearr_32363[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19778__auto__);

return statearr_32363;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19780__auto__);
});})(c__19778__auto__))
);

return c__19778__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var msg__$1 = goog.string.htmlEscape(msg);
var temp__4423__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg__$1);
if(cljs.core.truth_(temp__4423__auto__)){
var vec__32367 = temp__4423__auto__;
var f = cljs.core.nth.call(null,vec__32367,(0),null);
var ln = cljs.core.nth.call(null,vec__32367,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__32370 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__32370,(0),null);
var file_line = cljs.core.nth.call(null,vec__32370,(1),null);
var file_column = cljs.core.nth.call(null,vec__32370,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__32370,file_name,file_line,file_column){
return (function (p1__32368_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__32368_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__32370,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__16449__auto__ = file_line;
if(cljs.core.truth_(or__16449__auto__)){
return or__16449__auto__;
} else {
var and__16437__auto__ = cause;
if(cljs.core.truth_(and__16437__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__16437__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(goog.string.htmlEscape(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause))),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__32373 = figwheel.client.heads_up.ensure_container.call(null);
var map__32373__$1 = ((((!((map__32373 == null)))?((((map__32373.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32373.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32373):map__32373);
var content_area_el = cljs.core.get.call(null,map__32373__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__19778__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19778__auto__){
return (function (){
var f__19779__auto__ = (function (){var switch__19713__auto__ = ((function (c__19778__auto__){
return (function (state_32421){
var state_val_32422 = (state_32421[(1)]);
if((state_val_32422 === (1))){
var inst_32404 = (state_32421[(7)]);
var inst_32404__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_32405 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_32406 = ["0.0"];
var inst_32407 = cljs.core.PersistentHashMap.fromArrays(inst_32405,inst_32406);
var inst_32408 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_32404__$1,inst_32407);
var inst_32409 = cljs.core.async.timeout.call(null,(300));
var state_32421__$1 = (function (){var statearr_32423 = state_32421;
(statearr_32423[(7)] = inst_32404__$1);

(statearr_32423[(8)] = inst_32408);

return statearr_32423;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32421__$1,(2),inst_32409);
} else {
if((state_val_32422 === (2))){
var inst_32404 = (state_32421[(7)]);
var inst_32411 = (state_32421[(2)]);
var inst_32412 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_32413 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_32414 = cljs.core.PersistentHashMap.fromArrays(inst_32412,inst_32413);
var inst_32415 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_32404,inst_32414);
var inst_32416 = cljs.core.async.timeout.call(null,(200));
var state_32421__$1 = (function (){var statearr_32424 = state_32421;
(statearr_32424[(9)] = inst_32411);

(statearr_32424[(10)] = inst_32415);

return statearr_32424;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32421__$1,(3),inst_32416);
} else {
if((state_val_32422 === (3))){
var inst_32404 = (state_32421[(7)]);
var inst_32418 = (state_32421[(2)]);
var inst_32419 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_32404,"");
var state_32421__$1 = (function (){var statearr_32425 = state_32421;
(statearr_32425[(11)] = inst_32418);

return statearr_32425;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32421__$1,inst_32419);
} else {
return null;
}
}
}
});})(c__19778__auto__))
;
return ((function (switch__19713__auto__,c__19778__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__19714__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__19714__auto____0 = (function (){
var statearr_32429 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32429[(0)] = figwheel$client$heads_up$clear_$_state_machine__19714__auto__);

(statearr_32429[(1)] = (1));

return statearr_32429;
});
var figwheel$client$heads_up$clear_$_state_machine__19714__auto____1 = (function (state_32421){
while(true){
var ret_value__19715__auto__ = (function (){try{while(true){
var result__19716__auto__ = switch__19713__auto__.call(null,state_32421);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19716__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19716__auto__;
}
break;
}
}catch (e32430){if((e32430 instanceof Object)){
var ex__19717__auto__ = e32430;
var statearr_32431_32433 = state_32421;
(statearr_32431_32433[(5)] = ex__19717__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32421);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32430;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32434 = state_32421;
state_32421 = G__32434;
continue;
} else {
return ret_value__19715__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__19714__auto__ = function(state_32421){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__19714__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__19714__auto____1.call(this,state_32421);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__19714__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__19714__auto____0;
figwheel$client$heads_up$clear_$_state_machine__19714__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__19714__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__19714__auto__;
})()
;})(switch__19713__auto__,c__19778__auto__))
})();
var state__19780__auto__ = (function (){var statearr_32432 = f__19779__auto__.call(null);
(statearr_32432[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19778__auto__);

return statearr_32432;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19780__auto__);
});})(c__19778__auto__))
);

return c__19778__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__19778__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19778__auto__){
return (function (){
var f__19779__auto__ = (function (){var switch__19713__auto__ = ((function (c__19778__auto__){
return (function (state_32466){
var state_val_32467 = (state_32466[(1)]);
if((state_val_32467 === (1))){
var inst_32456 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_32466__$1 = state_32466;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32466__$1,(2),inst_32456);
} else {
if((state_val_32467 === (2))){
var inst_32458 = (state_32466[(2)]);
var inst_32459 = cljs.core.async.timeout.call(null,(400));
var state_32466__$1 = (function (){var statearr_32468 = state_32466;
(statearr_32468[(7)] = inst_32458);

return statearr_32468;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32466__$1,(3),inst_32459);
} else {
if((state_val_32467 === (3))){
var inst_32461 = (state_32466[(2)]);
var inst_32462 = figwheel.client.heads_up.clear.call(null);
var state_32466__$1 = (function (){var statearr_32469 = state_32466;
(statearr_32469[(8)] = inst_32461);

return statearr_32469;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32466__$1,(4),inst_32462);
} else {
if((state_val_32467 === (4))){
var inst_32464 = (state_32466[(2)]);
var state_32466__$1 = state_32466;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32466__$1,inst_32464);
} else {
return null;
}
}
}
}
});})(c__19778__auto__))
;
return ((function (switch__19713__auto__,c__19778__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__19714__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__19714__auto____0 = (function (){
var statearr_32473 = [null,null,null,null,null,null,null,null,null];
(statearr_32473[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__19714__auto__);

(statearr_32473[(1)] = (1));

return statearr_32473;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__19714__auto____1 = (function (state_32466){
while(true){
var ret_value__19715__auto__ = (function (){try{while(true){
var result__19716__auto__ = switch__19713__auto__.call(null,state_32466);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19716__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19716__auto__;
}
break;
}
}catch (e32474){if((e32474 instanceof Object)){
var ex__19717__auto__ = e32474;
var statearr_32475_32477 = state_32466;
(statearr_32475_32477[(5)] = ex__19717__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32466);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32474;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32478 = state_32466;
state_32466 = G__32478;
continue;
} else {
return ret_value__19715__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__19714__auto__ = function(state_32466){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__19714__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__19714__auto____1.call(this,state_32466);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__19714__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__19714__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__19714__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__19714__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__19714__auto__;
})()
;})(switch__19713__auto__,c__19778__auto__))
})();
var state__19780__auto__ = (function (){var statearr_32476 = f__19779__auto__.call(null);
(statearr_32476[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19778__auto__);

return statearr_32476;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19780__auto__);
});})(c__19778__auto__))
);

return c__19778__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";

//# sourceMappingURL=heads_up.js.map