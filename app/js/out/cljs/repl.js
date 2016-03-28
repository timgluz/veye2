// Compiled by ClojureScript 1.7.122 {:elide-asserts true}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__32495_32509 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__32496_32510 = null;
var count__32497_32511 = (0);
var i__32498_32512 = (0);
while(true){
if((i__32498_32512 < count__32497_32511)){
var f_32513 = cljs.core._nth.call(null,chunk__32496_32510,i__32498_32512);
cljs.core.println.call(null,"  ",f_32513);

var G__32514 = seq__32495_32509;
var G__32515 = chunk__32496_32510;
var G__32516 = count__32497_32511;
var G__32517 = (i__32498_32512 + (1));
seq__32495_32509 = G__32514;
chunk__32496_32510 = G__32515;
count__32497_32511 = G__32516;
i__32498_32512 = G__32517;
continue;
} else {
var temp__4425__auto___32518 = cljs.core.seq.call(null,seq__32495_32509);
if(temp__4425__auto___32518){
var seq__32495_32519__$1 = temp__4425__auto___32518;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32495_32519__$1)){
var c__17252__auto___32520 = cljs.core.chunk_first.call(null,seq__32495_32519__$1);
var G__32521 = cljs.core.chunk_rest.call(null,seq__32495_32519__$1);
var G__32522 = c__17252__auto___32520;
var G__32523 = cljs.core.count.call(null,c__17252__auto___32520);
var G__32524 = (0);
seq__32495_32509 = G__32521;
chunk__32496_32510 = G__32522;
count__32497_32511 = G__32523;
i__32498_32512 = G__32524;
continue;
} else {
var f_32525 = cljs.core.first.call(null,seq__32495_32519__$1);
cljs.core.println.call(null,"  ",f_32525);

var G__32526 = cljs.core.next.call(null,seq__32495_32519__$1);
var G__32527 = null;
var G__32528 = (0);
var G__32529 = (0);
seq__32495_32509 = G__32526;
chunk__32496_32510 = G__32527;
count__32497_32511 = G__32528;
i__32498_32512 = G__32529;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_32530 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16449__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16449__auto__)){
return or__16449__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_32530);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_32530)))?cljs.core.second.call(null,arglists_32530):arglists_32530));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__32499 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__32500 = null;
var count__32501 = (0);
var i__32502 = (0);
while(true){
if((i__32502 < count__32501)){
var vec__32503 = cljs.core._nth.call(null,chunk__32500,i__32502);
var name = cljs.core.nth.call(null,vec__32503,(0),null);
var map__32504 = cljs.core.nth.call(null,vec__32503,(1),null);
var map__32504__$1 = ((((!((map__32504 == null)))?((((map__32504.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32504.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32504):map__32504);
var doc = cljs.core.get.call(null,map__32504__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__32504__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__32531 = seq__32499;
var G__32532 = chunk__32500;
var G__32533 = count__32501;
var G__32534 = (i__32502 + (1));
seq__32499 = G__32531;
chunk__32500 = G__32532;
count__32501 = G__32533;
i__32502 = G__32534;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__32499);
if(temp__4425__auto__){
var seq__32499__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32499__$1)){
var c__17252__auto__ = cljs.core.chunk_first.call(null,seq__32499__$1);
var G__32535 = cljs.core.chunk_rest.call(null,seq__32499__$1);
var G__32536 = c__17252__auto__;
var G__32537 = cljs.core.count.call(null,c__17252__auto__);
var G__32538 = (0);
seq__32499 = G__32535;
chunk__32500 = G__32536;
count__32501 = G__32537;
i__32502 = G__32538;
continue;
} else {
var vec__32506 = cljs.core.first.call(null,seq__32499__$1);
var name = cljs.core.nth.call(null,vec__32506,(0),null);
var map__32507 = cljs.core.nth.call(null,vec__32506,(1),null);
var map__32507__$1 = ((((!((map__32507 == null)))?((((map__32507.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32507.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32507):map__32507);
var doc = cljs.core.get.call(null,map__32507__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__32507__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__32539 = cljs.core.next.call(null,seq__32499__$1);
var G__32540 = null;
var G__32541 = (0);
var G__32542 = (0);
seq__32499 = G__32539;
chunk__32500 = G__32540;
count__32501 = G__32541;
i__32502 = G__32542;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map