// Compiled by ClojureScript 1.7.122 {:elide-asserts true}
goog.provide('veye2.pages.syncing');
goog.require('cljs.core');
goog.require('reagent.core');
veye2.pages.syncing.render = (function veye2$pages$syncing$render(db){
var progress_cur = reagent.core.cursor.call(null,db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"progress","progress",244323547)], null));
return ((function (progress_cur){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),(function (){var iter__17338__auto__ = ((function (progress_cur){
return (function veye2$pages$syncing$render_$_iter__25124(s__25125){
return (new cljs.core.LazySeq(null,((function (progress_cur){
return (function (){
var s__25125__$1 = s__25125;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__25125__$1);
if(temp__4425__auto__){
var s__25125__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25125__$2)){
var c__17336__auto__ = cljs.core.chunk_first.call(null,s__25125__$2);
var size__17337__auto__ = cljs.core.count.call(null,c__17336__auto__);
var b__25127 = cljs.core.chunk_buffer.call(null,size__17337__auto__);
if((function (){var i__25126 = (0);
while(true){
if((i__25126 < size__17337__auto__)){
var msg = cljs.core._nth.call(null,c__17336__auto__,i__25126);
cljs.core.chunk_append.call(null,b__25127,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"message is-info"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.message-header","div.message-header",912962896),[cljs.core.str(new cljs.core.Keyword(null,"from","from",1815293044).cljs$core$IFn$_invoke$arity$1(msg)),cljs.core.str(" - "),cljs.core.str(new cljs.core.Keyword(null,"timestamp","timestamp",579478971).cljs$core$IFn$_invoke$arity$1(msg))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.message-body","div.message-body",566197895),[cljs.core.str(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg))].join('')], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"timestamp","timestamp",579478971).cljs$core$IFn$_invoke$arity$1(msg)], null)));

var G__25128 = (i__25126 + (1));
i__25126 = G__25128;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25127),veye2$pages$syncing$render_$_iter__25124.call(null,cljs.core.chunk_rest.call(null,s__25125__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25127),null);
}
} else {
var msg = cljs.core.first.call(null,s__25125__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"message is-info"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.message-header","div.message-header",912962896),[cljs.core.str(new cljs.core.Keyword(null,"from","from",1815293044).cljs$core$IFn$_invoke$arity$1(msg)),cljs.core.str(" - "),cljs.core.str(new cljs.core.Keyword(null,"timestamp","timestamp",579478971).cljs$core$IFn$_invoke$arity$1(msg))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.message-body","div.message-body",566197895),[cljs.core.str(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg))].join('')], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"timestamp","timestamp",579478971).cljs$core$IFn$_invoke$arity$1(msg)], null)),veye2$pages$syncing$render_$_iter__25124.call(null,cljs.core.rest.call(null,s__25125__$2)));
}
} else {
return null;
}
break;
}
});})(progress_cur))
,null,null));
});})(progress_cur))
;
return iter__17338__auto__.call(null,cljs.core.deref.call(null,progress_cur));
})()], null);
});
;})(progress_cur))
});

//# sourceMappingURL=syncing.js.map