// Compiled by ClojureScript 1.7.122 {:elide-asserts true}
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.eq');
goog.require('goog.math.Long');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = true;

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});
cljs.core.UUID.prototype.cljs$core$IComparable$ = true;

cljs.core.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});
goog.math.Long.prototype.cljs$core$IEquiv$ = true;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv.call(null,other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
goog.math.Long.prototype.cljs$core$IHash$ = true;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.hash.call(null,this$__$1.toString());
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (uuid,writer,_){
var uuid__$1 = this;
return cljs.core._write.call(null,writer,[cljs.core.str("#uuid \""),cljs.core.str(uuid__$1.toString()),cljs.core.str("\"")].join(''));
});
cognitect.transit.opts_merge = (function cognitect$transit$opts_merge(a,b){
var seq__23020_23024 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__23021_23025 = null;
var count__23022_23026 = (0);
var i__23023_23027 = (0);
while(true){
if((i__23023_23027 < count__23022_23026)){
var k_23028 = cljs.core._nth.call(null,chunk__23021_23025,i__23023_23027);
var v_23029 = (b[k_23028]);
(a[k_23028] = v_23029);

var G__23030 = seq__23020_23024;
var G__23031 = chunk__23021_23025;
var G__23032 = count__23022_23026;
var G__23033 = (i__23023_23027 + (1));
seq__23020_23024 = G__23030;
chunk__23021_23025 = G__23031;
count__23022_23026 = G__23032;
i__23023_23027 = G__23033;
continue;
} else {
var temp__4425__auto___23034 = cljs.core.seq.call(null,seq__23020_23024);
if(temp__4425__auto___23034){
var seq__23020_23035__$1 = temp__4425__auto___23034;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23020_23035__$1)){
var c__17252__auto___23036 = cljs.core.chunk_first.call(null,seq__23020_23035__$1);
var G__23037 = cljs.core.chunk_rest.call(null,seq__23020_23035__$1);
var G__23038 = c__17252__auto___23036;
var G__23039 = cljs.core.count.call(null,c__17252__auto___23036);
var G__23040 = (0);
seq__23020_23024 = G__23037;
chunk__23021_23025 = G__23038;
count__23022_23026 = G__23039;
i__23023_23027 = G__23040;
continue;
} else {
var k_23041 = cljs.core.first.call(null,seq__23020_23035__$1);
var v_23042 = (b[k_23041]);
(a[k_23041] = v_23042);

var G__23043 = cljs.core.next.call(null,seq__23020_23035__$1);
var G__23044 = null;
var G__23045 = (0);
var G__23046 = (0);
seq__23020_23024 = G__23043;
chunk__23021_23025 = G__23044;
count__23022_23026 = G__23045;
i__23023_23027 = G__23046;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.call(null,m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});

cognitect.transit.MapBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__17047__auto__,writer__17048__auto__,opt__17049__auto__){
return cljs.core._write.call(null,writer__17048__auto__,"cognitect.transit/MapBuilder");
});

cognitect.transit.__GT_MapBuilder = (function cognitect$transit$__GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.call(null,v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});

cognitect.transit.VectorBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__17047__auto__,writer__17048__auto__,opt__17049__auto__){
return cljs.core._write.call(null,writer__17048__auto__,"cognitect.transit/VectorBuilder");
});

cognitect.transit.__GT_VectorBuilder = (function cognitect$transit$__GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
 * Return a transit reader. type may be either :json or :json-verbose.
 * opts may be a map optionally containing a :handlers entry. The value
 * of :handlers should be map from tag to a decoder function which returns
 * then in-memory representation of the semantic transit value.
 */
cognitect.transit.reader = (function cognitect$transit$reader(var_args){
var args23047 = [];
var len__17507__auto___23050 = arguments.length;
var i__17508__auto___23051 = (0);
while(true){
if((i__17508__auto___23051 < len__17507__auto___23050)){
args23047.push((arguments[i__17508__auto___23051]));

var G__23052 = (i__17508__auto___23051 + (1));
i__17508__auto___23051 = G__23052;
continue;
} else {
}
break;
}

var G__23049 = args23047.length;
switch (G__23049) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23047.length)].join('')));

}
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.reader.call(null,type,null);
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){
return cljs.core.symbol.call(null,v);
}),":",(function (v){
return cljs.core.keyword.call(null,v);
}),"set",(function (v){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){
return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__23054 = (i + (2));
var G__23055 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__23054;
ret = G__23055;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts))), "mapBuilder": (new cognitect.transit.MapBuilder()), "arrayBuilder": (new cognitect.transit.VectorBuilder()), "prefersStrings": false},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.reader.cljs$lang$maxFixedArity = 2;
/**
 * Read a transit encoded string into ClojureScript values given a 
 * transit reader.
 */
cognitect.transit.read = (function cognitect$transit$read(r,str){
return r.read(str);
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__17047__auto__,writer__17048__auto__,opt__17049__auto__){
return cljs.core._write.call(null,writer__17048__auto__,"cognitect.transit/KeywordHandler");
});

cognitect.transit.__GT_KeywordHandler = (function cognitect$transit$__GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__17047__auto__,writer__17048__auto__,opt__17049__auto__){
return cljs.core._write.call(null,writer__17048__auto__,"cognitect.transit/SymbolHandler");
});

cognitect.transit.__GT_SymbolHandler = (function cognitect$transit$__GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__23056_23060 = cljs.core.seq.call(null,v);
var chunk__23057_23061 = null;
var count__23058_23062 = (0);
var i__23059_23063 = (0);
while(true){
if((i__23059_23063 < count__23058_23062)){
var x_23064 = cljs.core._nth.call(null,chunk__23057_23061,i__23059_23063);
ret.push(x_23064);

var G__23065 = seq__23056_23060;
var G__23066 = chunk__23057_23061;
var G__23067 = count__23058_23062;
var G__23068 = (i__23059_23063 + (1));
seq__23056_23060 = G__23065;
chunk__23057_23061 = G__23066;
count__23058_23062 = G__23067;
i__23059_23063 = G__23068;
continue;
} else {
var temp__4425__auto___23069 = cljs.core.seq.call(null,seq__23056_23060);
if(temp__4425__auto___23069){
var seq__23056_23070__$1 = temp__4425__auto___23069;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23056_23070__$1)){
var c__17252__auto___23071 = cljs.core.chunk_first.call(null,seq__23056_23070__$1);
var G__23072 = cljs.core.chunk_rest.call(null,seq__23056_23070__$1);
var G__23073 = c__17252__auto___23071;
var G__23074 = cljs.core.count.call(null,c__17252__auto___23071);
var G__23075 = (0);
seq__23056_23060 = G__23072;
chunk__23057_23061 = G__23073;
count__23058_23062 = G__23074;
i__23059_23063 = G__23075;
continue;
} else {
var x_23076 = cljs.core.first.call(null,seq__23056_23070__$1);
ret.push(x_23076);

var G__23077 = cljs.core.next.call(null,seq__23056_23070__$1);
var G__23078 = null;
var G__23079 = (0);
var G__23080 = (0);
seq__23056_23060 = G__23077;
chunk__23057_23061 = G__23078;
count__23058_23062 = G__23079;
i__23059_23063 = G__23080;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__17047__auto__,writer__17048__auto__,opt__17049__auto__){
return cljs.core._write.call(null,writer__17048__auto__,"cognitect.transit/ListHandler");
});

cognitect.transit.__GT_ListHandler = (function cognitect$transit$__GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__17047__auto__,writer__17048__auto__,opt__17049__auto__){
return cljs.core._write.call(null,writer__17048__auto__,"cognitect.transit/MapHandler");
});

cognitect.transit.__GT_MapHandler = (function cognitect$transit$__GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__23081_23085 = cljs.core.seq.call(null,v);
var chunk__23082_23086 = null;
var count__23083_23087 = (0);
var i__23084_23088 = (0);
while(true){
if((i__23084_23088 < count__23083_23087)){
var x_23089 = cljs.core._nth.call(null,chunk__23082_23086,i__23084_23088);
ret.push(x_23089);

var G__23090 = seq__23081_23085;
var G__23091 = chunk__23082_23086;
var G__23092 = count__23083_23087;
var G__23093 = (i__23084_23088 + (1));
seq__23081_23085 = G__23090;
chunk__23082_23086 = G__23091;
count__23083_23087 = G__23092;
i__23084_23088 = G__23093;
continue;
} else {
var temp__4425__auto___23094 = cljs.core.seq.call(null,seq__23081_23085);
if(temp__4425__auto___23094){
var seq__23081_23095__$1 = temp__4425__auto___23094;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23081_23095__$1)){
var c__17252__auto___23096 = cljs.core.chunk_first.call(null,seq__23081_23095__$1);
var G__23097 = cljs.core.chunk_rest.call(null,seq__23081_23095__$1);
var G__23098 = c__17252__auto___23096;
var G__23099 = cljs.core.count.call(null,c__17252__auto___23096);
var G__23100 = (0);
seq__23081_23085 = G__23097;
chunk__23082_23086 = G__23098;
count__23083_23087 = G__23099;
i__23084_23088 = G__23100;
continue;
} else {
var x_23101 = cljs.core.first.call(null,seq__23081_23095__$1);
ret.push(x_23101);

var G__23102 = cljs.core.next.call(null,seq__23081_23095__$1);
var G__23103 = null;
var G__23104 = (0);
var G__23105 = (0);
seq__23081_23085 = G__23102;
chunk__23082_23086 = G__23103;
count__23083_23087 = G__23104;
i__23084_23088 = G__23105;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__17047__auto__,writer__17048__auto__,opt__17049__auto__){
return cljs.core._write.call(null,writer__17048__auto__,"cognitect.transit/SetHandler");
});

cognitect.transit.__GT_SetHandler = (function cognitect$transit$__GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__23106_23110 = cljs.core.seq.call(null,v);
var chunk__23107_23111 = null;
var count__23108_23112 = (0);
var i__23109_23113 = (0);
while(true){
if((i__23109_23113 < count__23108_23112)){
var x_23114 = cljs.core._nth.call(null,chunk__23107_23111,i__23109_23113);
ret.push(x_23114);

var G__23115 = seq__23106_23110;
var G__23116 = chunk__23107_23111;
var G__23117 = count__23108_23112;
var G__23118 = (i__23109_23113 + (1));
seq__23106_23110 = G__23115;
chunk__23107_23111 = G__23116;
count__23108_23112 = G__23117;
i__23109_23113 = G__23118;
continue;
} else {
var temp__4425__auto___23119 = cljs.core.seq.call(null,seq__23106_23110);
if(temp__4425__auto___23119){
var seq__23106_23120__$1 = temp__4425__auto___23119;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23106_23120__$1)){
var c__17252__auto___23121 = cljs.core.chunk_first.call(null,seq__23106_23120__$1);
var G__23122 = cljs.core.chunk_rest.call(null,seq__23106_23120__$1);
var G__23123 = c__17252__auto___23121;
var G__23124 = cljs.core.count.call(null,c__17252__auto___23121);
var G__23125 = (0);
seq__23106_23110 = G__23122;
chunk__23107_23111 = G__23123;
count__23108_23112 = G__23124;
i__23109_23113 = G__23125;
continue;
} else {
var x_23126 = cljs.core.first.call(null,seq__23106_23120__$1);
ret.push(x_23126);

var G__23127 = cljs.core.next.call(null,seq__23106_23120__$1);
var G__23128 = null;
var G__23129 = (0);
var G__23130 = (0);
seq__23106_23110 = G__23127;
chunk__23107_23111 = G__23128;
count__23108_23112 = G__23129;
i__23109_23113 = G__23130;
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__17047__auto__,writer__17048__auto__,opt__17049__auto__){
return cljs.core._write.call(null,writer__17048__auto__,"cognitect.transit/VectorHandler");
});

cognitect.transit.__GT_VectorHandler = (function cognitect$transit$__GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

cognitect.transit.UUIDHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__17047__auto__,writer__17048__auto__,opt__17049__auto__){
return cljs.core._write.call(null,writer__17048__auto__,"cognitect.transit/UUIDHandler");
});

cognitect.transit.__GT_UUIDHandler = (function cognitect$transit$__GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
 * Return a transit writer. type maybe either :json or :json-verbose.
 *   opts is a map containing a :handlers entry. :handlers is a map of
 *   type constructors to handler instances.
 */
cognitect.transit.writer = (function cognitect$transit$writer(var_args){
var args23131 = [];
var len__17507__auto___23142 = arguments.length;
var i__17508__auto___23143 = (0);
while(true){
if((i__17508__auto___23143 < len__17507__auto___23142)){
args23131.push((arguments[i__17508__auto___23143]));

var G__23144 = (i__17508__auto___23143 + (1));
i__17508__auto___23143 = G__23144;
continue;
} else {
}
break;
}

var G__23133 = args23131.length;
switch (G__23133) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23131.length)].join('')));

}
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.writer.call(null,type,null);
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));
return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__23134 = obj;
G__23134.push(kfn.call(null,k),vfn.call(null,v));

return G__23134;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x23135 = cljs.core.clone.call(null,handlers);
x23135.forEach = ((function (x23135,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__23136 = cljs.core.seq.call(null,coll);
var chunk__23137 = null;
var count__23138 = (0);
var i__23139 = (0);
while(true){
if((i__23139 < count__23138)){
var vec__23140 = cljs.core._nth.call(null,chunk__23137,i__23139);
var k = cljs.core.nth.call(null,vec__23140,(0),null);
var v = cljs.core.nth.call(null,vec__23140,(1),null);
f.call(null,v,k);

var G__23146 = seq__23136;
var G__23147 = chunk__23137;
var G__23148 = count__23138;
var G__23149 = (i__23139 + (1));
seq__23136 = G__23146;
chunk__23137 = G__23147;
count__23138 = G__23148;
i__23139 = G__23149;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__23136);
if(temp__4425__auto__){
var seq__23136__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23136__$1)){
var c__17252__auto__ = cljs.core.chunk_first.call(null,seq__23136__$1);
var G__23150 = cljs.core.chunk_rest.call(null,seq__23136__$1);
var G__23151 = c__17252__auto__;
var G__23152 = cljs.core.count.call(null,c__17252__auto__);
var G__23153 = (0);
seq__23136 = G__23150;
chunk__23137 = G__23151;
count__23138 = G__23152;
i__23139 = G__23153;
continue;
} else {
var vec__23141 = cljs.core.first.call(null,seq__23136__$1);
var k = cljs.core.nth.call(null,vec__23141,(0),null);
var v = cljs.core.nth.call(null,vec__23141,(1),null);
f.call(null,v,k);

var G__23154 = cljs.core.next.call(null,seq__23136__$1);
var G__23155 = null;
var G__23156 = (0);
var G__23157 = (0);
seq__23136 = G__23154;
chunk__23137 = G__23155;
count__23138 = G__23156;
i__23139 = G__23157;
continue;
}
} else {
return null;
}
}
break;
}
});})(x23135,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x23135;
})(), "unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.writer.cljs$lang$maxFixedArity = 2;
/**
 * Encode an object into a transit string given a transit writer.
 */
cognitect.transit.write = (function cognitect$transit$write(w,o){
return w.write(o);
});
/**
 * Construct a read handler. Implemented as identity, exists primarily
 * for API compatiblity with transit-clj
 */
cognitect.transit.read_handler = (function cognitect$transit$read_handler(from_rep){
return from_rep;
});
/**
 * Creates a transit write handler whose tag, rep,
 * stringRep, and verboseWriteHandler methods
 * invoke the provided fns.
 */
cognitect.transit.write_handler = (function cognitect$transit$write_handler(var_args){
var args23158 = [];
var len__17507__auto___23164 = arguments.length;
var i__17508__auto___23165 = (0);
while(true){
if((i__17508__auto___23165 < len__17507__auto___23164)){
args23158.push((arguments[i__17508__auto___23165]));

var G__23166 = (i__17508__auto___23165 + (1));
i__17508__auto___23165 = G__23166;
continue;
} else {
}
break;
}

var G__23160 = args23158.length;
switch (G__23160) {
case 2:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23158.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit23161 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit23161 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta23162){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta23162 = meta23162;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit23161.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23163,meta23162__$1){
var self__ = this;
var _23163__$1 = this;
return (new cognitect.transit.t_cognitect$transit23161(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta23162__$1));
});

cognitect.transit.t_cognitect$transit23161.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23163){
var self__ = this;
var _23163__$1 = this;
return self__.meta23162;
});

cognitect.transit.t_cognitect$transit23161.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit23161.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit23161.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit23161.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit23161.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta23162","meta23162",1365527414,null)], null);
});

cognitect.transit.t_cognitect$transit23161.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit23161.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit23161";

cognitect.transit.t_cognitect$transit23161.cljs$lang$ctorPrWriter = (function (this__17047__auto__,writer__17048__auto__,opt__17049__auto__){
return cljs.core._write.call(null,writer__17048__auto__,"cognitect.transit/t_cognitect$transit23161");
});

cognitect.transit.__GT_t_cognitect$transit23161 = (function cognitect$transit$__GT_t_cognitect$transit23161(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta23162){
return (new cognitect.transit.t_cognitect$transit23161(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta23162));
});

}

return (new cognitect.transit.t_cognitect$transit23161(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
});

cognitect.transit.write_handler.cljs$lang$maxFixedArity = 4;
/**
 * Construct a tagged value. tag must be a string and rep can
 * be any transit encodeable value.
 */
cognitect.transit.tagged_value = (function cognitect$transit$tagged_value(tag,rep){
return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
 * Returns true if x is a transit tagged value, false otherwise.
 */
cognitect.transit.tagged_value_QMARK_ = (function cognitect$transit$tagged_value_QMARK_(x){
return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
 * Construct a transit integer value. Returns JavaScript number if
 *   in the 53bit integer range, a goog.math.Long instance if above. s
 *   may be a string or a JavaScript number.
 */
cognitect.transit.integer = (function cognitect$transit$integer(s){
return com.cognitect.transit.types.intValue.call(null,s);
});
/**
 * Returns true if x is an integer value between the 53bit and 64bit
 *   range, false otherwise.
 */
cognitect.transit.integer_QMARK_ = (function cognitect$transit$integer_QMARK_(x){
return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
 * Construct a big integer from a string.
 */
cognitect.transit.bigint = (function cognitect$transit$bigint(s){
return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
 * Returns true if x is a transit big integer value, false otherwise.
 */
cognitect.transit.bigint_QMARK_ = (function cognitect$transit$bigint_QMARK_(x){
return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
 * Construct a big decimal from a string.
 */
cognitect.transit.bigdec = (function cognitect$transit$bigdec(s){
return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
 * Returns true if x is a transit big decimal value, false otherwise.
 */
cognitect.transit.bigdec_QMARK_ = (function cognitect$transit$bigdec_QMARK_(x){
return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
 * Construct a URI from a string.
 */
cognitect.transit.uri = (function cognitect$transit$uri(s){
return com.cognitect.transit.types.uri.call(null,s);
});
/**
 * Returns true if x is a transit URI value, false otherwise.
 */
cognitect.transit.uri_QMARK_ = (function cognitect$transit$uri_QMARK_(x){
return com.cognitect.transit.types.isURI.call(null,x);
});
/**
 * Construct a UUID from a string.
 */
cognitect.transit.uuid = (function cognitect$transit$uuid(s){
return com.cognitect.transit.types.uuid.call(null,s);
});
/**
 * Returns true if x is a transit UUID value, false otherwise.
 */
cognitect.transit.uuid_QMARK_ = (function cognitect$transit$uuid_QMARK_(x){
var or__16449__auto__ = com.cognitect.transit.types.isUUID.call(null,x);
if(cljs.core.truth_(or__16449__auto__)){
return or__16449__auto__;
} else {
return (x instanceof cljs.core.UUID);
}
});
/**
 * Construct a transit binary value. s should be base64 encoded
 * string.
 */
cognitect.transit.binary = (function cognitect$transit$binary(s){
return com.cognitect.transit.types.binary.call(null,s);
});
/**
 * Returns true if x is a transit binary value, false otherwise.
 */
cognitect.transit.binary_QMARK_ = (function cognitect$transit$binary_QMARK_(x){
return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
 * Construct a quoted transit value. x should be a transit
 * encodeable value.
 */
cognitect.transit.quoted = (function cognitect$transit$quoted(x){
return com.cognitect.transit.types.quoted.call(null,x);
});
/**
 * Returns true if x is a transit quoted value, false otherwise.
 */
cognitect.transit.quoted_QMARK_ = (function cognitect$transit$quoted_QMARK_(x){
return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
 * Construct a transit link value. x should be an IMap instance
 * containing at a minimum the following keys: :href, :rel. It
 * may optionall include :name, :render, and :prompt. :href must
 * be a transit URI, all other values are strings, and :render must
 * be either :image or :link.
 */
cognitect.transit.link = (function cognitect$transit$link(x){
return com.cognitect.transit.types.link.call(null,x);
});
/**
 * Returns true if x a transit link value, false if otherwise.
 */
cognitect.transit.link_QMARK_ = (function cognitect$transit$link_QMARK_(x){
return com.cognitect.transit.types.isLink.call(null,x);
});

//# sourceMappingURL=transit.js.map