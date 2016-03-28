// Compiled by ClojureScript 1.7.122 {:elide-asserts true}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t_cljs$core$async33645 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33645 = (function (fn_handler,f,meta33646){
this.fn_handler = fn_handler;
this.f = f;
this.meta33646 = meta33646;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async33645.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33647,meta33646__$1){
var self__ = this;
var _33647__$1 = this;
return (new cljs.core.async.t_cljs$core$async33645(self__.fn_handler,self__.f,meta33646__$1));
});

cljs.core.async.t_cljs$core$async33645.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33647){
var self__ = this;
var _33647__$1 = this;
return self__.meta33646;
});

cljs.core.async.t_cljs$core$async33645.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async33645.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async33645.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async33645.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta33646","meta33646",-314948612,null)], null);
});

cljs.core.async.t_cljs$core$async33645.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33645.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33645";

cljs.core.async.t_cljs$core$async33645.cljs$lang$ctorPrWriter = (function (this__17047__auto__,writer__17048__auto__,opt__17049__auto__){
return cljs.core._write.call(null,writer__17048__auto__,"cljs.core.async/t_cljs$core$async33645");
});

cljs.core.async.__GT_t_cljs$core$async33645 = (function cljs$core$async$fn_handler_$___GT_t_cljs$core$async33645(fn_handler__$1,f__$1,meta33646){
return (new cljs.core.async.t_cljs$core$async33645(fn_handler__$1,f__$1,meta33646));
});

}

return (new cljs.core.async.t_cljs$core$async33645(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args33650 = [];
var len__17507__auto___33653 = arguments.length;
var i__17508__auto___33654 = (0);
while(true){
if((i__17508__auto___33654 < len__17507__auto___33653)){
args33650.push((arguments[i__17508__auto___33654]));

var G__33655 = (i__17508__auto___33654 + (1));
i__17508__auto___33654 = G__33655;
continue;
} else {
}
break;
}

var G__33652 = args33650.length;
switch (G__33652) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33650.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args33657 = [];
var len__17507__auto___33660 = arguments.length;
var i__17508__auto___33661 = (0);
while(true){
if((i__17508__auto___33661 < len__17507__auto___33660)){
args33657.push((arguments[i__17508__auto___33661]));

var G__33662 = (i__17508__auto___33661 + (1));
i__17508__auto___33661 = G__33662;
continue;
} else {
}
break;
}

var G__33659 = args33657.length;
switch (G__33659) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33657.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_33664 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_33664);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_33664,ret){
return (function (){
return fn1.call(null,val_33664);
});})(val_33664,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args33665 = [];
var len__17507__auto___33668 = arguments.length;
var i__17508__auto___33669 = (0);
while(true){
if((i__17508__auto___33669 < len__17507__auto___33668)){
args33665.push((arguments[i__17508__auto___33669]));

var G__33670 = (i__17508__auto___33669 + (1));
i__17508__auto___33669 = G__33670;
continue;
} else {
}
break;
}

var G__33667 = args33665.length;
switch (G__33667) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33665.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__17352__auto___33672 = n;
var x_33673 = (0);
while(true){
if((x_33673 < n__17352__auto___33672)){
(a[x_33673] = (0));

var G__33674 = (x_33673 + (1));
x_33673 = G__33674;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__33675 = (i + (1));
i = G__33675;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async33679 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33679 = (function (alt_flag,flag,meta33680){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta33680 = meta33680;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async33679.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_33681,meta33680__$1){
var self__ = this;
var _33681__$1 = this;
return (new cljs.core.async.t_cljs$core$async33679(self__.alt_flag,self__.flag,meta33680__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async33679.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_33681){
var self__ = this;
var _33681__$1 = this;
return self__.meta33680;
});})(flag))
;

cljs.core.async.t_cljs$core$async33679.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async33679.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async33679.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async33679.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta33680","meta33680",-1267985446,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async33679.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33679.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33679";

cljs.core.async.t_cljs$core$async33679.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__17047__auto__,writer__17048__auto__,opt__17049__auto__){
return cljs.core._write.call(null,writer__17048__auto__,"cljs.core.async/t_cljs$core$async33679");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async33679 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async33679(alt_flag__$1,flag__$1,meta33680){
return (new cljs.core.async.t_cljs$core$async33679(alt_flag__$1,flag__$1,meta33680));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async33679(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async33685 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33685 = (function (alt_handler,flag,cb,meta33686){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta33686 = meta33686;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async33685.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33687,meta33686__$1){
var self__ = this;
var _33687__$1 = this;
return (new cljs.core.async.t_cljs$core$async33685(self__.alt_handler,self__.flag,self__.cb,meta33686__$1));
});

cljs.core.async.t_cljs$core$async33685.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33687){
var self__ = this;
var _33687__$1 = this;
return self__.meta33686;
});

cljs.core.async.t_cljs$core$async33685.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async33685.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async33685.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async33685.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta33686","meta33686",-1314865502,null)], null);
});

cljs.core.async.t_cljs$core$async33685.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33685.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33685";

cljs.core.async.t_cljs$core$async33685.cljs$lang$ctorPrWriter = (function (this__17047__auto__,writer__17048__auto__,opt__17049__auto__){
return cljs.core._write.call(null,writer__17048__auto__,"cljs.core.async/t_cljs$core$async33685");
});

cljs.core.async.__GT_t_cljs$core$async33685 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async33685(alt_handler__$1,flag__$1,cb__$1,meta33686){
return (new cljs.core.async.t_cljs$core$async33685(alt_handler__$1,flag__$1,cb__$1,meta33686));
});

}

return (new cljs.core.async.t_cljs$core$async33685(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33688_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33688_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33689_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33689_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__16449__auto__ = wport;
if(cljs.core.truth_(or__16449__auto__)){
return or__16449__auto__;
} else {
return port;
}
})()], null));
} else {
var G__33690 = (i + (1));
i = G__33690;
continue;
}
} else {
return null;
}
break;
}
})();
var or__16449__auto__ = ret;
if(cljs.core.truth_(or__16449__auto__)){
return or__16449__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__16437__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__16437__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__16437__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__17514__auto__ = [];
var len__17507__auto___33696 = arguments.length;
var i__17508__auto___33697 = (0);
while(true){
if((i__17508__auto___33697 < len__17507__auto___33696)){
args__17514__auto__.push((arguments[i__17508__auto___33697]));

var G__33698 = (i__17508__auto___33697 + (1));
i__17508__auto___33697 = G__33698;
continue;
} else {
}
break;
}

var argseq__17515__auto__ = ((((1) < args__17514__auto__.length))?(new cljs.core.IndexedSeq(args__17514__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17515__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__33693){
var map__33694 = p__33693;
var map__33694__$1 = ((((!((map__33694 == null)))?((((map__33694.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33694.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33694):map__33694);
var opts = map__33694__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq33691){
var G__33692 = cljs.core.first.call(null,seq33691);
var seq33691__$1 = cljs.core.next.call(null,seq33691);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__33692,seq33691__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args33699 = [];
var len__17507__auto___33749 = arguments.length;
var i__17508__auto___33750 = (0);
while(true){
if((i__17508__auto___33750 < len__17507__auto___33749)){
args33699.push((arguments[i__17508__auto___33750]));

var G__33751 = (i__17508__auto___33750 + (1));
i__17508__auto___33750 = G__33751;
continue;
} else {
}
break;
}

var G__33701 = args33699.length;
switch (G__33701) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33699.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__19778__auto___33753 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19778__auto___33753){
return (function (){
var f__19779__auto__ = (function (){var switch__19713__auto__ = ((function (c__19778__auto___33753){
return (function (state_33725){
var state_val_33726 = (state_33725[(1)]);
if((state_val_33726 === (7))){
var inst_33721 = (state_33725[(2)]);
var state_33725__$1 = state_33725;
var statearr_33727_33754 = state_33725__$1;
(statearr_33727_33754[(2)] = inst_33721);

(statearr_33727_33754[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33726 === (1))){
var state_33725__$1 = state_33725;
var statearr_33728_33755 = state_33725__$1;
(statearr_33728_33755[(2)] = null);

(statearr_33728_33755[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33726 === (4))){
var inst_33704 = (state_33725[(7)]);
var inst_33704__$1 = (state_33725[(2)]);
var inst_33705 = (inst_33704__$1 == null);
var state_33725__$1 = (function (){var statearr_33729 = state_33725;
(statearr_33729[(7)] = inst_33704__$1);

return statearr_33729;
})();
if(cljs.core.truth_(inst_33705)){
var statearr_33730_33756 = state_33725__$1;
(statearr_33730_33756[(1)] = (5));

} else {
var statearr_33731_33757 = state_33725__$1;
(statearr_33731_33757[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33726 === (13))){
var state_33725__$1 = state_33725;
var statearr_33732_33758 = state_33725__$1;
(statearr_33732_33758[(2)] = null);

(statearr_33732_33758[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33726 === (6))){
var inst_33704 = (state_33725[(7)]);
var state_33725__$1 = state_33725;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33725__$1,(11),to,inst_33704);
} else {
if((state_val_33726 === (3))){
var inst_33723 = (state_33725[(2)]);
var state_33725__$1 = state_33725;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33725__$1,inst_33723);
} else {
if((state_val_33726 === (12))){
var state_33725__$1 = state_33725;
var statearr_33733_33759 = state_33725__$1;
(statearr_33733_33759[(2)] = null);

(statearr_33733_33759[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33726 === (2))){
var state_33725__$1 = state_33725;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33725__$1,(4),from);
} else {
if((state_val_33726 === (11))){
var inst_33714 = (state_33725[(2)]);
var state_33725__$1 = state_33725;
if(cljs.core.truth_(inst_33714)){
var statearr_33734_33760 = state_33725__$1;
(statearr_33734_33760[(1)] = (12));

} else {
var statearr_33735_33761 = state_33725__$1;
(statearr_33735_33761[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33726 === (9))){
var state_33725__$1 = state_33725;
var statearr_33736_33762 = state_33725__$1;
(statearr_33736_33762[(2)] = null);

(statearr_33736_33762[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33726 === (5))){
var state_33725__$1 = state_33725;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33737_33763 = state_33725__$1;
(statearr_33737_33763[(1)] = (8));

} else {
var statearr_33738_33764 = state_33725__$1;
(statearr_33738_33764[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33726 === (14))){
var inst_33719 = (state_33725[(2)]);
var state_33725__$1 = state_33725;
var statearr_33739_33765 = state_33725__$1;
(statearr_33739_33765[(2)] = inst_33719);

(statearr_33739_33765[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33726 === (10))){
var inst_33711 = (state_33725[(2)]);
var state_33725__$1 = state_33725;
var statearr_33740_33766 = state_33725__$1;
(statearr_33740_33766[(2)] = inst_33711);

(statearr_33740_33766[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33726 === (8))){
var inst_33708 = cljs.core.async.close_BANG_.call(null,to);
var state_33725__$1 = state_33725;
var statearr_33741_33767 = state_33725__$1;
(statearr_33741_33767[(2)] = inst_33708);

(statearr_33741_33767[(1)] = (10));


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
});})(c__19778__auto___33753))
;
return ((function (switch__19713__auto__,c__19778__auto___33753){
return (function() {
var cljs$core$async$state_machine__19714__auto__ = null;
var cljs$core$async$state_machine__19714__auto____0 = (function (){
var statearr_33745 = [null,null,null,null,null,null,null,null];
(statearr_33745[(0)] = cljs$core$async$state_machine__19714__auto__);

(statearr_33745[(1)] = (1));

return statearr_33745;
});
var cljs$core$async$state_machine__19714__auto____1 = (function (state_33725){
while(true){
var ret_value__19715__auto__ = (function (){try{while(true){
var result__19716__auto__ = switch__19713__auto__.call(null,state_33725);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19716__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19716__auto__;
}
break;
}
}catch (e33746){if((e33746 instanceof Object)){
var ex__19717__auto__ = e33746;
var statearr_33747_33768 = state_33725;
(statearr_33747_33768[(5)] = ex__19717__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33725);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33746;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33769 = state_33725;
state_33725 = G__33769;
continue;
} else {
return ret_value__19715__auto__;
}
break;
}
});
cljs$core$async$state_machine__19714__auto__ = function(state_33725){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19714__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19714__auto____1.call(this,state_33725);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19714__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19714__auto____0;
cljs$core$async$state_machine__19714__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19714__auto____1;
return cljs$core$async$state_machine__19714__auto__;
})()
;})(switch__19713__auto__,c__19778__auto___33753))
})();
var state__19780__auto__ = (function (){var statearr_33748 = f__19779__auto__.call(null);
(statearr_33748[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19778__auto___33753);

return statearr_33748;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19780__auto__);
});})(c__19778__auto___33753))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__33953){
var vec__33954 = p__33953;
var v = cljs.core.nth.call(null,vec__33954,(0),null);
var p = cljs.core.nth.call(null,vec__33954,(1),null);
var job = vec__33954;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__19778__auto___34136 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19778__auto___34136,res,vec__33954,v,p,job,jobs,results){
return (function (){
var f__19779__auto__ = (function (){var switch__19713__auto__ = ((function (c__19778__auto___34136,res,vec__33954,v,p,job,jobs,results){
return (function (state_33959){
var state_val_33960 = (state_33959[(1)]);
if((state_val_33960 === (1))){
var state_33959__$1 = state_33959;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33959__$1,(2),res,v);
} else {
if((state_val_33960 === (2))){
var inst_33956 = (state_33959[(2)]);
var inst_33957 = cljs.core.async.close_BANG_.call(null,res);
var state_33959__$1 = (function (){var statearr_33961 = state_33959;
(statearr_33961[(7)] = inst_33956);

return statearr_33961;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33959__$1,inst_33957);
} else {
return null;
}
}
});})(c__19778__auto___34136,res,vec__33954,v,p,job,jobs,results))
;
return ((function (switch__19713__auto__,c__19778__auto___34136,res,vec__33954,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19714__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19714__auto____0 = (function (){
var statearr_33965 = [null,null,null,null,null,null,null,null];
(statearr_33965[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19714__auto__);

(statearr_33965[(1)] = (1));

return statearr_33965;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19714__auto____1 = (function (state_33959){
while(true){
var ret_value__19715__auto__ = (function (){try{while(true){
var result__19716__auto__ = switch__19713__auto__.call(null,state_33959);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19716__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19716__auto__;
}
break;
}
}catch (e33966){if((e33966 instanceof Object)){
var ex__19717__auto__ = e33966;
var statearr_33967_34137 = state_33959;
(statearr_33967_34137[(5)] = ex__19717__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33959);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33966;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34138 = state_33959;
state_33959 = G__34138;
continue;
} else {
return ret_value__19715__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19714__auto__ = function(state_33959){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19714__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19714__auto____1.call(this,state_33959);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19714__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19714__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19714__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19714__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19714__auto__;
})()
;})(switch__19713__auto__,c__19778__auto___34136,res,vec__33954,v,p,job,jobs,results))
})();
var state__19780__auto__ = (function (){var statearr_33968 = f__19779__auto__.call(null);
(statearr_33968[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19778__auto___34136);

return statearr_33968;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19780__auto__);
});})(c__19778__auto___34136,res,vec__33954,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__33969){
var vec__33970 = p__33969;
var v = cljs.core.nth.call(null,vec__33970,(0),null);
var p = cljs.core.nth.call(null,vec__33970,(1),null);
var job = vec__33970;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__17352__auto___34139 = n;
var __34140 = (0);
while(true){
if((__34140 < n__17352__auto___34139)){
var G__33971_34141 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__33971_34141) {
case "compute":
var c__19778__auto___34143 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__34140,c__19778__auto___34143,G__33971_34141,n__17352__auto___34139,jobs,results,process,async){
return (function (){
var f__19779__auto__ = (function (){var switch__19713__auto__ = ((function (__34140,c__19778__auto___34143,G__33971_34141,n__17352__auto___34139,jobs,results,process,async){
return (function (state_33984){
var state_val_33985 = (state_33984[(1)]);
if((state_val_33985 === (1))){
var state_33984__$1 = state_33984;
var statearr_33986_34144 = state_33984__$1;
(statearr_33986_34144[(2)] = null);

(statearr_33986_34144[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33985 === (2))){
var state_33984__$1 = state_33984;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33984__$1,(4),jobs);
} else {
if((state_val_33985 === (3))){
var inst_33982 = (state_33984[(2)]);
var state_33984__$1 = state_33984;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33984__$1,inst_33982);
} else {
if((state_val_33985 === (4))){
var inst_33974 = (state_33984[(2)]);
var inst_33975 = process.call(null,inst_33974);
var state_33984__$1 = state_33984;
if(cljs.core.truth_(inst_33975)){
var statearr_33987_34145 = state_33984__$1;
(statearr_33987_34145[(1)] = (5));

} else {
var statearr_33988_34146 = state_33984__$1;
(statearr_33988_34146[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33985 === (5))){
var state_33984__$1 = state_33984;
var statearr_33989_34147 = state_33984__$1;
(statearr_33989_34147[(2)] = null);

(statearr_33989_34147[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33985 === (6))){
var state_33984__$1 = state_33984;
var statearr_33990_34148 = state_33984__$1;
(statearr_33990_34148[(2)] = null);

(statearr_33990_34148[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33985 === (7))){
var inst_33980 = (state_33984[(2)]);
var state_33984__$1 = state_33984;
var statearr_33991_34149 = state_33984__$1;
(statearr_33991_34149[(2)] = inst_33980);

(statearr_33991_34149[(1)] = (3));


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
});})(__34140,c__19778__auto___34143,G__33971_34141,n__17352__auto___34139,jobs,results,process,async))
;
return ((function (__34140,switch__19713__auto__,c__19778__auto___34143,G__33971_34141,n__17352__auto___34139,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19714__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19714__auto____0 = (function (){
var statearr_33995 = [null,null,null,null,null,null,null];
(statearr_33995[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19714__auto__);

(statearr_33995[(1)] = (1));

return statearr_33995;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19714__auto____1 = (function (state_33984){
while(true){
var ret_value__19715__auto__ = (function (){try{while(true){
var result__19716__auto__ = switch__19713__auto__.call(null,state_33984);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19716__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19716__auto__;
}
break;
}
}catch (e33996){if((e33996 instanceof Object)){
var ex__19717__auto__ = e33996;
var statearr_33997_34150 = state_33984;
(statearr_33997_34150[(5)] = ex__19717__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33984);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33996;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34151 = state_33984;
state_33984 = G__34151;
continue;
} else {
return ret_value__19715__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19714__auto__ = function(state_33984){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19714__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19714__auto____1.call(this,state_33984);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19714__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19714__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19714__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19714__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19714__auto__;
})()
;})(__34140,switch__19713__auto__,c__19778__auto___34143,G__33971_34141,n__17352__auto___34139,jobs,results,process,async))
})();
var state__19780__auto__ = (function (){var statearr_33998 = f__19779__auto__.call(null);
(statearr_33998[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19778__auto___34143);

return statearr_33998;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19780__auto__);
});})(__34140,c__19778__auto___34143,G__33971_34141,n__17352__auto___34139,jobs,results,process,async))
);


break;
case "async":
var c__19778__auto___34152 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__34140,c__19778__auto___34152,G__33971_34141,n__17352__auto___34139,jobs,results,process,async){
return (function (){
var f__19779__auto__ = (function (){var switch__19713__auto__ = ((function (__34140,c__19778__auto___34152,G__33971_34141,n__17352__auto___34139,jobs,results,process,async){
return (function (state_34011){
var state_val_34012 = (state_34011[(1)]);
if((state_val_34012 === (1))){
var state_34011__$1 = state_34011;
var statearr_34013_34153 = state_34011__$1;
(statearr_34013_34153[(2)] = null);

(statearr_34013_34153[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34012 === (2))){
var state_34011__$1 = state_34011;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34011__$1,(4),jobs);
} else {
if((state_val_34012 === (3))){
var inst_34009 = (state_34011[(2)]);
var state_34011__$1 = state_34011;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34011__$1,inst_34009);
} else {
if((state_val_34012 === (4))){
var inst_34001 = (state_34011[(2)]);
var inst_34002 = async.call(null,inst_34001);
var state_34011__$1 = state_34011;
if(cljs.core.truth_(inst_34002)){
var statearr_34014_34154 = state_34011__$1;
(statearr_34014_34154[(1)] = (5));

} else {
var statearr_34015_34155 = state_34011__$1;
(statearr_34015_34155[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34012 === (5))){
var state_34011__$1 = state_34011;
var statearr_34016_34156 = state_34011__$1;
(statearr_34016_34156[(2)] = null);

(statearr_34016_34156[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34012 === (6))){
var state_34011__$1 = state_34011;
var statearr_34017_34157 = state_34011__$1;
(statearr_34017_34157[(2)] = null);

(statearr_34017_34157[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34012 === (7))){
var inst_34007 = (state_34011[(2)]);
var state_34011__$1 = state_34011;
var statearr_34018_34158 = state_34011__$1;
(statearr_34018_34158[(2)] = inst_34007);

(statearr_34018_34158[(1)] = (3));


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
});})(__34140,c__19778__auto___34152,G__33971_34141,n__17352__auto___34139,jobs,results,process,async))
;
return ((function (__34140,switch__19713__auto__,c__19778__auto___34152,G__33971_34141,n__17352__auto___34139,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19714__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19714__auto____0 = (function (){
var statearr_34022 = [null,null,null,null,null,null,null];
(statearr_34022[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19714__auto__);

(statearr_34022[(1)] = (1));

return statearr_34022;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19714__auto____1 = (function (state_34011){
while(true){
var ret_value__19715__auto__ = (function (){try{while(true){
var result__19716__auto__ = switch__19713__auto__.call(null,state_34011);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19716__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19716__auto__;
}
break;
}
}catch (e34023){if((e34023 instanceof Object)){
var ex__19717__auto__ = e34023;
var statearr_34024_34159 = state_34011;
(statearr_34024_34159[(5)] = ex__19717__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34011);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34023;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34160 = state_34011;
state_34011 = G__34160;
continue;
} else {
return ret_value__19715__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19714__auto__ = function(state_34011){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19714__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19714__auto____1.call(this,state_34011);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19714__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19714__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19714__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19714__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19714__auto__;
})()
;})(__34140,switch__19713__auto__,c__19778__auto___34152,G__33971_34141,n__17352__auto___34139,jobs,results,process,async))
})();
var state__19780__auto__ = (function (){var statearr_34025 = f__19779__auto__.call(null);
(statearr_34025[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19778__auto___34152);

return statearr_34025;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19780__auto__);
});})(__34140,c__19778__auto___34152,G__33971_34141,n__17352__auto___34139,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__34161 = (__34140 + (1));
__34140 = G__34161;
continue;
} else {
}
break;
}

var c__19778__auto___34162 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19778__auto___34162,jobs,results,process,async){
return (function (){
var f__19779__auto__ = (function (){var switch__19713__auto__ = ((function (c__19778__auto___34162,jobs,results,process,async){
return (function (state_34047){
var state_val_34048 = (state_34047[(1)]);
if((state_val_34048 === (1))){
var state_34047__$1 = state_34047;
var statearr_34049_34163 = state_34047__$1;
(statearr_34049_34163[(2)] = null);

(statearr_34049_34163[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34048 === (2))){
var state_34047__$1 = state_34047;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34047__$1,(4),from);
} else {
if((state_val_34048 === (3))){
var inst_34045 = (state_34047[(2)]);
var state_34047__$1 = state_34047;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34047__$1,inst_34045);
} else {
if((state_val_34048 === (4))){
var inst_34028 = (state_34047[(7)]);
var inst_34028__$1 = (state_34047[(2)]);
var inst_34029 = (inst_34028__$1 == null);
var state_34047__$1 = (function (){var statearr_34050 = state_34047;
(statearr_34050[(7)] = inst_34028__$1);

return statearr_34050;
})();
if(cljs.core.truth_(inst_34029)){
var statearr_34051_34164 = state_34047__$1;
(statearr_34051_34164[(1)] = (5));

} else {
var statearr_34052_34165 = state_34047__$1;
(statearr_34052_34165[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34048 === (5))){
var inst_34031 = cljs.core.async.close_BANG_.call(null,jobs);
var state_34047__$1 = state_34047;
var statearr_34053_34166 = state_34047__$1;
(statearr_34053_34166[(2)] = inst_34031);

(statearr_34053_34166[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34048 === (6))){
var inst_34033 = (state_34047[(8)]);
var inst_34028 = (state_34047[(7)]);
var inst_34033__$1 = cljs.core.async.chan.call(null,(1));
var inst_34034 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34035 = [inst_34028,inst_34033__$1];
var inst_34036 = (new cljs.core.PersistentVector(null,2,(5),inst_34034,inst_34035,null));
var state_34047__$1 = (function (){var statearr_34054 = state_34047;
(statearr_34054[(8)] = inst_34033__$1);

return statearr_34054;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34047__$1,(8),jobs,inst_34036);
} else {
if((state_val_34048 === (7))){
var inst_34043 = (state_34047[(2)]);
var state_34047__$1 = state_34047;
var statearr_34055_34167 = state_34047__$1;
(statearr_34055_34167[(2)] = inst_34043);

(statearr_34055_34167[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34048 === (8))){
var inst_34033 = (state_34047[(8)]);
var inst_34038 = (state_34047[(2)]);
var state_34047__$1 = (function (){var statearr_34056 = state_34047;
(statearr_34056[(9)] = inst_34038);

return statearr_34056;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34047__$1,(9),results,inst_34033);
} else {
if((state_val_34048 === (9))){
var inst_34040 = (state_34047[(2)]);
var state_34047__$1 = (function (){var statearr_34057 = state_34047;
(statearr_34057[(10)] = inst_34040);

return statearr_34057;
})();
var statearr_34058_34168 = state_34047__$1;
(statearr_34058_34168[(2)] = null);

(statearr_34058_34168[(1)] = (2));


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
});})(c__19778__auto___34162,jobs,results,process,async))
;
return ((function (switch__19713__auto__,c__19778__auto___34162,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19714__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19714__auto____0 = (function (){
var statearr_34062 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34062[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19714__auto__);

(statearr_34062[(1)] = (1));

return statearr_34062;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19714__auto____1 = (function (state_34047){
while(true){
var ret_value__19715__auto__ = (function (){try{while(true){
var result__19716__auto__ = switch__19713__auto__.call(null,state_34047);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19716__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19716__auto__;
}
break;
}
}catch (e34063){if((e34063 instanceof Object)){
var ex__19717__auto__ = e34063;
var statearr_34064_34169 = state_34047;
(statearr_34064_34169[(5)] = ex__19717__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34047);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34063;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34170 = state_34047;
state_34047 = G__34170;
continue;
} else {
return ret_value__19715__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19714__auto__ = function(state_34047){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19714__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19714__auto____1.call(this,state_34047);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19714__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19714__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19714__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19714__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19714__auto__;
})()
;})(switch__19713__auto__,c__19778__auto___34162,jobs,results,process,async))
})();
var state__19780__auto__ = (function (){var statearr_34065 = f__19779__auto__.call(null);
(statearr_34065[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19778__auto___34162);

return statearr_34065;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19780__auto__);
});})(c__19778__auto___34162,jobs,results,process,async))
);


var c__19778__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19778__auto__,jobs,results,process,async){
return (function (){
var f__19779__auto__ = (function (){var switch__19713__auto__ = ((function (c__19778__auto__,jobs,results,process,async){
return (function (state_34103){
var state_val_34104 = (state_34103[(1)]);
if((state_val_34104 === (7))){
var inst_34099 = (state_34103[(2)]);
var state_34103__$1 = state_34103;
var statearr_34105_34171 = state_34103__$1;
(statearr_34105_34171[(2)] = inst_34099);

(statearr_34105_34171[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34104 === (20))){
var state_34103__$1 = state_34103;
var statearr_34106_34172 = state_34103__$1;
(statearr_34106_34172[(2)] = null);

(statearr_34106_34172[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34104 === (1))){
var state_34103__$1 = state_34103;
var statearr_34107_34173 = state_34103__$1;
(statearr_34107_34173[(2)] = null);

(statearr_34107_34173[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34104 === (4))){
var inst_34068 = (state_34103[(7)]);
var inst_34068__$1 = (state_34103[(2)]);
var inst_34069 = (inst_34068__$1 == null);
var state_34103__$1 = (function (){var statearr_34108 = state_34103;
(statearr_34108[(7)] = inst_34068__$1);

return statearr_34108;
})();
if(cljs.core.truth_(inst_34069)){
var statearr_34109_34174 = state_34103__$1;
(statearr_34109_34174[(1)] = (5));

} else {
var statearr_34110_34175 = state_34103__$1;
(statearr_34110_34175[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34104 === (15))){
var inst_34081 = (state_34103[(8)]);
var state_34103__$1 = state_34103;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34103__$1,(18),to,inst_34081);
} else {
if((state_val_34104 === (21))){
var inst_34094 = (state_34103[(2)]);
var state_34103__$1 = state_34103;
var statearr_34111_34176 = state_34103__$1;
(statearr_34111_34176[(2)] = inst_34094);

(statearr_34111_34176[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34104 === (13))){
var inst_34096 = (state_34103[(2)]);
var state_34103__$1 = (function (){var statearr_34112 = state_34103;
(statearr_34112[(9)] = inst_34096);

return statearr_34112;
})();
var statearr_34113_34177 = state_34103__$1;
(statearr_34113_34177[(2)] = null);

(statearr_34113_34177[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34104 === (6))){
var inst_34068 = (state_34103[(7)]);
var state_34103__$1 = state_34103;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34103__$1,(11),inst_34068);
} else {
if((state_val_34104 === (17))){
var inst_34089 = (state_34103[(2)]);
var state_34103__$1 = state_34103;
if(cljs.core.truth_(inst_34089)){
var statearr_34114_34178 = state_34103__$1;
(statearr_34114_34178[(1)] = (19));

} else {
var statearr_34115_34179 = state_34103__$1;
(statearr_34115_34179[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34104 === (3))){
var inst_34101 = (state_34103[(2)]);
var state_34103__$1 = state_34103;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34103__$1,inst_34101);
} else {
if((state_val_34104 === (12))){
var inst_34078 = (state_34103[(10)]);
var state_34103__$1 = state_34103;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34103__$1,(14),inst_34078);
} else {
if((state_val_34104 === (2))){
var state_34103__$1 = state_34103;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34103__$1,(4),results);
} else {
if((state_val_34104 === (19))){
var state_34103__$1 = state_34103;
var statearr_34116_34180 = state_34103__$1;
(statearr_34116_34180[(2)] = null);

(statearr_34116_34180[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34104 === (11))){
var inst_34078 = (state_34103[(2)]);
var state_34103__$1 = (function (){var statearr_34117 = state_34103;
(statearr_34117[(10)] = inst_34078);

return statearr_34117;
})();
var statearr_34118_34181 = state_34103__$1;
(statearr_34118_34181[(2)] = null);

(statearr_34118_34181[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34104 === (9))){
var state_34103__$1 = state_34103;
var statearr_34119_34182 = state_34103__$1;
(statearr_34119_34182[(2)] = null);

(statearr_34119_34182[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34104 === (5))){
var state_34103__$1 = state_34103;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34120_34183 = state_34103__$1;
(statearr_34120_34183[(1)] = (8));

} else {
var statearr_34121_34184 = state_34103__$1;
(statearr_34121_34184[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34104 === (14))){
var inst_34083 = (state_34103[(11)]);
var inst_34081 = (state_34103[(8)]);
var inst_34081__$1 = (state_34103[(2)]);
var inst_34082 = (inst_34081__$1 == null);
var inst_34083__$1 = cljs.core.not.call(null,inst_34082);
var state_34103__$1 = (function (){var statearr_34122 = state_34103;
(statearr_34122[(11)] = inst_34083__$1);

(statearr_34122[(8)] = inst_34081__$1);

return statearr_34122;
})();
if(inst_34083__$1){
var statearr_34123_34185 = state_34103__$1;
(statearr_34123_34185[(1)] = (15));

} else {
var statearr_34124_34186 = state_34103__$1;
(statearr_34124_34186[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34104 === (16))){
var inst_34083 = (state_34103[(11)]);
var state_34103__$1 = state_34103;
var statearr_34125_34187 = state_34103__$1;
(statearr_34125_34187[(2)] = inst_34083);

(statearr_34125_34187[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34104 === (10))){
var inst_34075 = (state_34103[(2)]);
var state_34103__$1 = state_34103;
var statearr_34126_34188 = state_34103__$1;
(statearr_34126_34188[(2)] = inst_34075);

(statearr_34126_34188[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34104 === (18))){
var inst_34086 = (state_34103[(2)]);
var state_34103__$1 = state_34103;
var statearr_34127_34189 = state_34103__$1;
(statearr_34127_34189[(2)] = inst_34086);

(statearr_34127_34189[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34104 === (8))){
var inst_34072 = cljs.core.async.close_BANG_.call(null,to);
var state_34103__$1 = state_34103;
var statearr_34128_34190 = state_34103__$1;
(statearr_34128_34190[(2)] = inst_34072);

(statearr_34128_34190[(1)] = (10));


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
}
}
}
}
});})(c__19778__auto__,jobs,results,process,async))
;
return ((function (switch__19713__auto__,c__19778__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19714__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19714__auto____0 = (function (){
var statearr_34132 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34132[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19714__auto__);

(statearr_34132[(1)] = (1));

return statearr_34132;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19714__auto____1 = (function (state_34103){
while(true){
var ret_value__19715__auto__ = (function (){try{while(true){
var result__19716__auto__ = switch__19713__auto__.call(null,state_34103);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19716__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19716__auto__;
}
break;
}
}catch (e34133){if((e34133 instanceof Object)){
var ex__19717__auto__ = e34133;
var statearr_34134_34191 = state_34103;
(statearr_34134_34191[(5)] = ex__19717__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34103);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34133;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34192 = state_34103;
state_34103 = G__34192;
continue;
} else {
return ret_value__19715__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19714__auto__ = function(state_34103){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19714__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19714__auto____1.call(this,state_34103);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19714__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19714__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19714__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19714__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19714__auto__;
})()
;})(switch__19713__auto__,c__19778__auto__,jobs,results,process,async))
})();
var state__19780__auto__ = (function (){var statearr_34135 = f__19779__auto__.call(null);
(statearr_34135[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19778__auto__);

return statearr_34135;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19780__auto__);
});})(c__19778__auto__,jobs,results,process,async))
);

return c__19778__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args34193 = [];
var len__17507__auto___34196 = arguments.length;
var i__17508__auto___34197 = (0);
while(true){
if((i__17508__auto___34197 < len__17507__auto___34196)){
args34193.push((arguments[i__17508__auto___34197]));

var G__34198 = (i__17508__auto___34197 + (1));
i__17508__auto___34197 = G__34198;
continue;
} else {
}
break;
}

var G__34195 = args34193.length;
switch (G__34195) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34193.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args34200 = [];
var len__17507__auto___34203 = arguments.length;
var i__17508__auto___34204 = (0);
while(true){
if((i__17508__auto___34204 < len__17507__auto___34203)){
args34200.push((arguments[i__17508__auto___34204]));

var G__34205 = (i__17508__auto___34204 + (1));
i__17508__auto___34204 = G__34205;
continue;
} else {
}
break;
}

var G__34202 = args34200.length;
switch (G__34202) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34200.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args34207 = [];
var len__17507__auto___34260 = arguments.length;
var i__17508__auto___34261 = (0);
while(true){
if((i__17508__auto___34261 < len__17507__auto___34260)){
args34207.push((arguments[i__17508__auto___34261]));

var G__34262 = (i__17508__auto___34261 + (1));
i__17508__auto___34261 = G__34262;
continue;
} else {
}
break;
}

var G__34209 = args34207.length;
switch (G__34209) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34207.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__19778__auto___34264 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19778__auto___34264,tc,fc){
return (function (){
var f__19779__auto__ = (function (){var switch__19713__auto__ = ((function (c__19778__auto___34264,tc,fc){
return (function (state_34235){
var state_val_34236 = (state_34235[(1)]);
if((state_val_34236 === (7))){
var inst_34231 = (state_34235[(2)]);
var state_34235__$1 = state_34235;
var statearr_34237_34265 = state_34235__$1;
(statearr_34237_34265[(2)] = inst_34231);

(statearr_34237_34265[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34236 === (1))){
var state_34235__$1 = state_34235;
var statearr_34238_34266 = state_34235__$1;
(statearr_34238_34266[(2)] = null);

(statearr_34238_34266[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34236 === (4))){
var inst_34212 = (state_34235[(7)]);
var inst_34212__$1 = (state_34235[(2)]);
var inst_34213 = (inst_34212__$1 == null);
var state_34235__$1 = (function (){var statearr_34239 = state_34235;
(statearr_34239[(7)] = inst_34212__$1);

return statearr_34239;
})();
if(cljs.core.truth_(inst_34213)){
var statearr_34240_34267 = state_34235__$1;
(statearr_34240_34267[(1)] = (5));

} else {
var statearr_34241_34268 = state_34235__$1;
(statearr_34241_34268[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34236 === (13))){
var state_34235__$1 = state_34235;
var statearr_34242_34269 = state_34235__$1;
(statearr_34242_34269[(2)] = null);

(statearr_34242_34269[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34236 === (6))){
var inst_34212 = (state_34235[(7)]);
var inst_34218 = p.call(null,inst_34212);
var state_34235__$1 = state_34235;
if(cljs.core.truth_(inst_34218)){
var statearr_34243_34270 = state_34235__$1;
(statearr_34243_34270[(1)] = (9));

} else {
var statearr_34244_34271 = state_34235__$1;
(statearr_34244_34271[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34236 === (3))){
var inst_34233 = (state_34235[(2)]);
var state_34235__$1 = state_34235;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34235__$1,inst_34233);
} else {
if((state_val_34236 === (12))){
var state_34235__$1 = state_34235;
var statearr_34245_34272 = state_34235__$1;
(statearr_34245_34272[(2)] = null);

(statearr_34245_34272[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34236 === (2))){
var state_34235__$1 = state_34235;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34235__$1,(4),ch);
} else {
if((state_val_34236 === (11))){
var inst_34212 = (state_34235[(7)]);
var inst_34222 = (state_34235[(2)]);
var state_34235__$1 = state_34235;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34235__$1,(8),inst_34222,inst_34212);
} else {
if((state_val_34236 === (9))){
var state_34235__$1 = state_34235;
var statearr_34246_34273 = state_34235__$1;
(statearr_34246_34273[(2)] = tc);

(statearr_34246_34273[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34236 === (5))){
var inst_34215 = cljs.core.async.close_BANG_.call(null,tc);
var inst_34216 = cljs.core.async.close_BANG_.call(null,fc);
var state_34235__$1 = (function (){var statearr_34247 = state_34235;
(statearr_34247[(8)] = inst_34215);

return statearr_34247;
})();
var statearr_34248_34274 = state_34235__$1;
(statearr_34248_34274[(2)] = inst_34216);

(statearr_34248_34274[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34236 === (14))){
var inst_34229 = (state_34235[(2)]);
var state_34235__$1 = state_34235;
var statearr_34249_34275 = state_34235__$1;
(statearr_34249_34275[(2)] = inst_34229);

(statearr_34249_34275[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34236 === (10))){
var state_34235__$1 = state_34235;
var statearr_34250_34276 = state_34235__$1;
(statearr_34250_34276[(2)] = fc);

(statearr_34250_34276[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34236 === (8))){
var inst_34224 = (state_34235[(2)]);
var state_34235__$1 = state_34235;
if(cljs.core.truth_(inst_34224)){
var statearr_34251_34277 = state_34235__$1;
(statearr_34251_34277[(1)] = (12));

} else {
var statearr_34252_34278 = state_34235__$1;
(statearr_34252_34278[(1)] = (13));

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
});})(c__19778__auto___34264,tc,fc))
;
return ((function (switch__19713__auto__,c__19778__auto___34264,tc,fc){
return (function() {
var cljs$core$async$state_machine__19714__auto__ = null;
var cljs$core$async$state_machine__19714__auto____0 = (function (){
var statearr_34256 = [null,null,null,null,null,null,null,null,null];
(statearr_34256[(0)] = cljs$core$async$state_machine__19714__auto__);

(statearr_34256[(1)] = (1));

return statearr_34256;
});
var cljs$core$async$state_machine__19714__auto____1 = (function (state_34235){
while(true){
var ret_value__19715__auto__ = (function (){try{while(true){
var result__19716__auto__ = switch__19713__auto__.call(null,state_34235);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19716__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19716__auto__;
}
break;
}
}catch (e34257){if((e34257 instanceof Object)){
var ex__19717__auto__ = e34257;
var statearr_34258_34279 = state_34235;
(statearr_34258_34279[(5)] = ex__19717__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34235);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34257;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34280 = state_34235;
state_34235 = G__34280;
continue;
} else {
return ret_value__19715__auto__;
}
break;
}
});
cljs$core$async$state_machine__19714__auto__ = function(state_34235){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19714__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19714__auto____1.call(this,state_34235);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19714__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19714__auto____0;
cljs$core$async$state_machine__19714__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19714__auto____1;
return cljs$core$async$state_machine__19714__auto__;
})()
;})(switch__19713__auto__,c__19778__auto___34264,tc,fc))
})();
var state__19780__auto__ = (function (){var statearr_34259 = f__19779__auto__.call(null);
(statearr_34259[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19778__auto___34264);

return statearr_34259;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19780__auto__);
});})(c__19778__auto___34264,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__19778__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19778__auto__){
return (function (){
var f__19779__auto__ = (function (){var switch__19713__auto__ = ((function (c__19778__auto__){
return (function (state_34327){
var state_val_34328 = (state_34327[(1)]);
if((state_val_34328 === (1))){
var inst_34313 = init;
var state_34327__$1 = (function (){var statearr_34329 = state_34327;
(statearr_34329[(7)] = inst_34313);

return statearr_34329;
})();
var statearr_34330_34345 = state_34327__$1;
(statearr_34330_34345[(2)] = null);

(statearr_34330_34345[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34328 === (2))){
var state_34327__$1 = state_34327;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34327__$1,(4),ch);
} else {
if((state_val_34328 === (3))){
var inst_34325 = (state_34327[(2)]);
var state_34327__$1 = state_34327;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34327__$1,inst_34325);
} else {
if((state_val_34328 === (4))){
var inst_34316 = (state_34327[(8)]);
var inst_34316__$1 = (state_34327[(2)]);
var inst_34317 = (inst_34316__$1 == null);
var state_34327__$1 = (function (){var statearr_34331 = state_34327;
(statearr_34331[(8)] = inst_34316__$1);

return statearr_34331;
})();
if(cljs.core.truth_(inst_34317)){
var statearr_34332_34346 = state_34327__$1;
(statearr_34332_34346[(1)] = (5));

} else {
var statearr_34333_34347 = state_34327__$1;
(statearr_34333_34347[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34328 === (5))){
var inst_34313 = (state_34327[(7)]);
var state_34327__$1 = state_34327;
var statearr_34334_34348 = state_34327__$1;
(statearr_34334_34348[(2)] = inst_34313);

(statearr_34334_34348[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34328 === (6))){
var inst_34313 = (state_34327[(7)]);
var inst_34316 = (state_34327[(8)]);
var inst_34320 = f.call(null,inst_34313,inst_34316);
var inst_34313__$1 = inst_34320;
var state_34327__$1 = (function (){var statearr_34335 = state_34327;
(statearr_34335[(7)] = inst_34313__$1);

return statearr_34335;
})();
var statearr_34336_34349 = state_34327__$1;
(statearr_34336_34349[(2)] = null);

(statearr_34336_34349[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34328 === (7))){
var inst_34323 = (state_34327[(2)]);
var state_34327__$1 = state_34327;
var statearr_34337_34350 = state_34327__$1;
(statearr_34337_34350[(2)] = inst_34323);

(statearr_34337_34350[(1)] = (3));


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
});})(c__19778__auto__))
;
return ((function (switch__19713__auto__,c__19778__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__19714__auto__ = null;
var cljs$core$async$reduce_$_state_machine__19714__auto____0 = (function (){
var statearr_34341 = [null,null,null,null,null,null,null,null,null];
(statearr_34341[(0)] = cljs$core$async$reduce_$_state_machine__19714__auto__);

(statearr_34341[(1)] = (1));

return statearr_34341;
});
var cljs$core$async$reduce_$_state_machine__19714__auto____1 = (function (state_34327){
while(true){
var ret_value__19715__auto__ = (function (){try{while(true){
var result__19716__auto__ = switch__19713__auto__.call(null,state_34327);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19716__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19716__auto__;
}
break;
}
}catch (e34342){if((e34342 instanceof Object)){
var ex__19717__auto__ = e34342;
var statearr_34343_34351 = state_34327;
(statearr_34343_34351[(5)] = ex__19717__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34327);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34342;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34352 = state_34327;
state_34327 = G__34352;
continue;
} else {
return ret_value__19715__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__19714__auto__ = function(state_34327){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__19714__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__19714__auto____1.call(this,state_34327);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__19714__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__19714__auto____0;
cljs$core$async$reduce_$_state_machine__19714__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__19714__auto____1;
return cljs$core$async$reduce_$_state_machine__19714__auto__;
})()
;})(switch__19713__auto__,c__19778__auto__))
})();
var state__19780__auto__ = (function (){var statearr_34344 = f__19779__auto__.call(null);
(statearr_34344[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19778__auto__);

return statearr_34344;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19780__auto__);
});})(c__19778__auto__))
);

return c__19778__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args34353 = [];
var len__17507__auto___34405 = arguments.length;
var i__17508__auto___34406 = (0);
while(true){
if((i__17508__auto___34406 < len__17507__auto___34405)){
args34353.push((arguments[i__17508__auto___34406]));

var G__34407 = (i__17508__auto___34406 + (1));
i__17508__auto___34406 = G__34407;
continue;
} else {
}
break;
}

var G__34355 = args34353.length;
switch (G__34355) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34353.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__19778__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19778__auto__){
return (function (){
var f__19779__auto__ = (function (){var switch__19713__auto__ = ((function (c__19778__auto__){
return (function (state_34380){
var state_val_34381 = (state_34380[(1)]);
if((state_val_34381 === (7))){
var inst_34362 = (state_34380[(2)]);
var state_34380__$1 = state_34380;
var statearr_34382_34409 = state_34380__$1;
(statearr_34382_34409[(2)] = inst_34362);

(statearr_34382_34409[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34381 === (1))){
var inst_34356 = cljs.core.seq.call(null,coll);
var inst_34357 = inst_34356;
var state_34380__$1 = (function (){var statearr_34383 = state_34380;
(statearr_34383[(7)] = inst_34357);

return statearr_34383;
})();
var statearr_34384_34410 = state_34380__$1;
(statearr_34384_34410[(2)] = null);

(statearr_34384_34410[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34381 === (4))){
var inst_34357 = (state_34380[(7)]);
var inst_34360 = cljs.core.first.call(null,inst_34357);
var state_34380__$1 = state_34380;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34380__$1,(7),ch,inst_34360);
} else {
if((state_val_34381 === (13))){
var inst_34374 = (state_34380[(2)]);
var state_34380__$1 = state_34380;
var statearr_34385_34411 = state_34380__$1;
(statearr_34385_34411[(2)] = inst_34374);

(statearr_34385_34411[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34381 === (6))){
var inst_34365 = (state_34380[(2)]);
var state_34380__$1 = state_34380;
if(cljs.core.truth_(inst_34365)){
var statearr_34386_34412 = state_34380__$1;
(statearr_34386_34412[(1)] = (8));

} else {
var statearr_34387_34413 = state_34380__$1;
(statearr_34387_34413[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34381 === (3))){
var inst_34378 = (state_34380[(2)]);
var state_34380__$1 = state_34380;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34380__$1,inst_34378);
} else {
if((state_val_34381 === (12))){
var state_34380__$1 = state_34380;
var statearr_34388_34414 = state_34380__$1;
(statearr_34388_34414[(2)] = null);

(statearr_34388_34414[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34381 === (2))){
var inst_34357 = (state_34380[(7)]);
var state_34380__$1 = state_34380;
if(cljs.core.truth_(inst_34357)){
var statearr_34389_34415 = state_34380__$1;
(statearr_34389_34415[(1)] = (4));

} else {
var statearr_34390_34416 = state_34380__$1;
(statearr_34390_34416[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34381 === (11))){
var inst_34371 = cljs.core.async.close_BANG_.call(null,ch);
var state_34380__$1 = state_34380;
var statearr_34391_34417 = state_34380__$1;
(statearr_34391_34417[(2)] = inst_34371);

(statearr_34391_34417[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34381 === (9))){
var state_34380__$1 = state_34380;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34392_34418 = state_34380__$1;
(statearr_34392_34418[(1)] = (11));

} else {
var statearr_34393_34419 = state_34380__$1;
(statearr_34393_34419[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34381 === (5))){
var inst_34357 = (state_34380[(7)]);
var state_34380__$1 = state_34380;
var statearr_34394_34420 = state_34380__$1;
(statearr_34394_34420[(2)] = inst_34357);

(statearr_34394_34420[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34381 === (10))){
var inst_34376 = (state_34380[(2)]);
var state_34380__$1 = state_34380;
var statearr_34395_34421 = state_34380__$1;
(statearr_34395_34421[(2)] = inst_34376);

(statearr_34395_34421[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34381 === (8))){
var inst_34357 = (state_34380[(7)]);
var inst_34367 = cljs.core.next.call(null,inst_34357);
var inst_34357__$1 = inst_34367;
var state_34380__$1 = (function (){var statearr_34396 = state_34380;
(statearr_34396[(7)] = inst_34357__$1);

return statearr_34396;
})();
var statearr_34397_34422 = state_34380__$1;
(statearr_34397_34422[(2)] = null);

(statearr_34397_34422[(1)] = (2));


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
});})(c__19778__auto__))
;
return ((function (switch__19713__auto__,c__19778__auto__){
return (function() {
var cljs$core$async$state_machine__19714__auto__ = null;
var cljs$core$async$state_machine__19714__auto____0 = (function (){
var statearr_34401 = [null,null,null,null,null,null,null,null];
(statearr_34401[(0)] = cljs$core$async$state_machine__19714__auto__);

(statearr_34401[(1)] = (1));

return statearr_34401;
});
var cljs$core$async$state_machine__19714__auto____1 = (function (state_34380){
while(true){
var ret_value__19715__auto__ = (function (){try{while(true){
var result__19716__auto__ = switch__19713__auto__.call(null,state_34380);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19716__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19716__auto__;
}
break;
}
}catch (e34402){if((e34402 instanceof Object)){
var ex__19717__auto__ = e34402;
var statearr_34403_34423 = state_34380;
(statearr_34403_34423[(5)] = ex__19717__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34380);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34402;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34424 = state_34380;
state_34380 = G__34424;
continue;
} else {
return ret_value__19715__auto__;
}
break;
}
});
cljs$core$async$state_machine__19714__auto__ = function(state_34380){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19714__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19714__auto____1.call(this,state_34380);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19714__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19714__auto____0;
cljs$core$async$state_machine__19714__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19714__auto____1;
return cljs$core$async$state_machine__19714__auto__;
})()
;})(switch__19713__auto__,c__19778__auto__))
})();
var state__19780__auto__ = (function (){var statearr_34404 = f__19779__auto__.call(null);
(statearr_34404[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19778__auto__);

return statearr_34404;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19780__auto__);
});})(c__19778__auto__))
);

return c__19778__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__17104__auto__ = (((_ == null))?null:_);
var m__17105__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__17104__auto__)]);
if(!((m__17105__auto__ == null))){
return m__17105__auto__.call(null,_);
} else {
var m__17105__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__17105__auto____$1 == null))){
return m__17105__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__17104__auto__ = (((m == null))?null:m);
var m__17105__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__17104__auto__)]);
if(!((m__17105__auto__ == null))){
return m__17105__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__17105__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__17105__auto____$1 == null))){
return m__17105__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__17104__auto__ = (((m == null))?null:m);
var m__17105__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__17104__auto__)]);
if(!((m__17105__auto__ == null))){
return m__17105__auto__.call(null,m,ch);
} else {
var m__17105__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__17105__auto____$1 == null))){
return m__17105__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__17104__auto__ = (((m == null))?null:m);
var m__17105__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__17104__auto__)]);
if(!((m__17105__auto__ == null))){
return m__17105__auto__.call(null,m);
} else {
var m__17105__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__17105__auto____$1 == null))){
return m__17105__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async34646 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34646 = (function (mult,ch,cs,meta34647){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta34647 = meta34647;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async34646.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_34648,meta34647__$1){
var self__ = this;
var _34648__$1 = this;
return (new cljs.core.async.t_cljs$core$async34646(self__.mult,self__.ch,self__.cs,meta34647__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async34646.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_34648){
var self__ = this;
var _34648__$1 = this;
return self__.meta34647;
});})(cs))
;

cljs.core.async.t_cljs$core$async34646.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async34646.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async34646.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async34646.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async34646.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async34646.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async34646.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta34647","meta34647",1269020302,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async34646.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34646.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34646";

cljs.core.async.t_cljs$core$async34646.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__17047__auto__,writer__17048__auto__,opt__17049__auto__){
return cljs.core._write.call(null,writer__17048__auto__,"cljs.core.async/t_cljs$core$async34646");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async34646 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async34646(mult__$1,ch__$1,cs__$1,meta34647){
return (new cljs.core.async.t_cljs$core$async34646(mult__$1,ch__$1,cs__$1,meta34647));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async34646(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__19778__auto___34867 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19778__auto___34867,cs,m,dchan,dctr,done){
return (function (){
var f__19779__auto__ = (function (){var switch__19713__auto__ = ((function (c__19778__auto___34867,cs,m,dchan,dctr,done){
return (function (state_34779){
var state_val_34780 = (state_34779[(1)]);
if((state_val_34780 === (7))){
var inst_34775 = (state_34779[(2)]);
var state_34779__$1 = state_34779;
var statearr_34781_34868 = state_34779__$1;
(statearr_34781_34868[(2)] = inst_34775);

(statearr_34781_34868[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34780 === (20))){
var inst_34680 = (state_34779[(7)]);
var inst_34690 = cljs.core.first.call(null,inst_34680);
var inst_34691 = cljs.core.nth.call(null,inst_34690,(0),null);
var inst_34692 = cljs.core.nth.call(null,inst_34690,(1),null);
var state_34779__$1 = (function (){var statearr_34782 = state_34779;
(statearr_34782[(8)] = inst_34691);

return statearr_34782;
})();
if(cljs.core.truth_(inst_34692)){
var statearr_34783_34869 = state_34779__$1;
(statearr_34783_34869[(1)] = (22));

} else {
var statearr_34784_34870 = state_34779__$1;
(statearr_34784_34870[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34780 === (27))){
var inst_34727 = (state_34779[(9)]);
var inst_34651 = (state_34779[(10)]);
var inst_34722 = (state_34779[(11)]);
var inst_34720 = (state_34779[(12)]);
var inst_34727__$1 = cljs.core._nth.call(null,inst_34720,inst_34722);
var inst_34728 = cljs.core.async.put_BANG_.call(null,inst_34727__$1,inst_34651,done);
var state_34779__$1 = (function (){var statearr_34785 = state_34779;
(statearr_34785[(9)] = inst_34727__$1);

return statearr_34785;
})();
if(cljs.core.truth_(inst_34728)){
var statearr_34786_34871 = state_34779__$1;
(statearr_34786_34871[(1)] = (30));

} else {
var statearr_34787_34872 = state_34779__$1;
(statearr_34787_34872[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34780 === (1))){
var state_34779__$1 = state_34779;
var statearr_34788_34873 = state_34779__$1;
(statearr_34788_34873[(2)] = null);

(statearr_34788_34873[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34780 === (24))){
var inst_34680 = (state_34779[(7)]);
var inst_34697 = (state_34779[(2)]);
var inst_34698 = cljs.core.next.call(null,inst_34680);
var inst_34660 = inst_34698;
var inst_34661 = null;
var inst_34662 = (0);
var inst_34663 = (0);
var state_34779__$1 = (function (){var statearr_34789 = state_34779;
(statearr_34789[(13)] = inst_34663);

(statearr_34789[(14)] = inst_34660);

(statearr_34789[(15)] = inst_34697);

(statearr_34789[(16)] = inst_34661);

(statearr_34789[(17)] = inst_34662);

return statearr_34789;
})();
var statearr_34790_34874 = state_34779__$1;
(statearr_34790_34874[(2)] = null);

(statearr_34790_34874[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34780 === (39))){
var state_34779__$1 = state_34779;
var statearr_34794_34875 = state_34779__$1;
(statearr_34794_34875[(2)] = null);

(statearr_34794_34875[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34780 === (4))){
var inst_34651 = (state_34779[(10)]);
var inst_34651__$1 = (state_34779[(2)]);
var inst_34652 = (inst_34651__$1 == null);
var state_34779__$1 = (function (){var statearr_34795 = state_34779;
(statearr_34795[(10)] = inst_34651__$1);

return statearr_34795;
})();
if(cljs.core.truth_(inst_34652)){
var statearr_34796_34876 = state_34779__$1;
(statearr_34796_34876[(1)] = (5));

} else {
var statearr_34797_34877 = state_34779__$1;
(statearr_34797_34877[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34780 === (15))){
var inst_34663 = (state_34779[(13)]);
var inst_34660 = (state_34779[(14)]);
var inst_34661 = (state_34779[(16)]);
var inst_34662 = (state_34779[(17)]);
var inst_34676 = (state_34779[(2)]);
var inst_34677 = (inst_34663 + (1));
var tmp34791 = inst_34660;
var tmp34792 = inst_34661;
var tmp34793 = inst_34662;
var inst_34660__$1 = tmp34791;
var inst_34661__$1 = tmp34792;
var inst_34662__$1 = tmp34793;
var inst_34663__$1 = inst_34677;
var state_34779__$1 = (function (){var statearr_34798 = state_34779;
(statearr_34798[(13)] = inst_34663__$1);

(statearr_34798[(14)] = inst_34660__$1);

(statearr_34798[(18)] = inst_34676);

(statearr_34798[(16)] = inst_34661__$1);

(statearr_34798[(17)] = inst_34662__$1);

return statearr_34798;
})();
var statearr_34799_34878 = state_34779__$1;
(statearr_34799_34878[(2)] = null);

(statearr_34799_34878[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34780 === (21))){
var inst_34701 = (state_34779[(2)]);
var state_34779__$1 = state_34779;
var statearr_34803_34879 = state_34779__$1;
(statearr_34803_34879[(2)] = inst_34701);

(statearr_34803_34879[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34780 === (31))){
var inst_34727 = (state_34779[(9)]);
var inst_34731 = done.call(null,null);
var inst_34732 = cljs.core.async.untap_STAR_.call(null,m,inst_34727);
var state_34779__$1 = (function (){var statearr_34804 = state_34779;
(statearr_34804[(19)] = inst_34731);

return statearr_34804;
})();
var statearr_34805_34880 = state_34779__$1;
(statearr_34805_34880[(2)] = inst_34732);

(statearr_34805_34880[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34780 === (32))){
var inst_34721 = (state_34779[(20)]);
var inst_34719 = (state_34779[(21)]);
var inst_34722 = (state_34779[(11)]);
var inst_34720 = (state_34779[(12)]);
var inst_34734 = (state_34779[(2)]);
var inst_34735 = (inst_34722 + (1));
var tmp34800 = inst_34721;
var tmp34801 = inst_34719;
var tmp34802 = inst_34720;
var inst_34719__$1 = tmp34801;
var inst_34720__$1 = tmp34802;
var inst_34721__$1 = tmp34800;
var inst_34722__$1 = inst_34735;
var state_34779__$1 = (function (){var statearr_34806 = state_34779;
(statearr_34806[(20)] = inst_34721__$1);

(statearr_34806[(22)] = inst_34734);

(statearr_34806[(21)] = inst_34719__$1);

(statearr_34806[(11)] = inst_34722__$1);

(statearr_34806[(12)] = inst_34720__$1);

return statearr_34806;
})();
var statearr_34807_34881 = state_34779__$1;
(statearr_34807_34881[(2)] = null);

(statearr_34807_34881[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34780 === (40))){
var inst_34747 = (state_34779[(23)]);
var inst_34751 = done.call(null,null);
var inst_34752 = cljs.core.async.untap_STAR_.call(null,m,inst_34747);
var state_34779__$1 = (function (){var statearr_34808 = state_34779;
(statearr_34808[(24)] = inst_34751);

return statearr_34808;
})();
var statearr_34809_34882 = state_34779__$1;
(statearr_34809_34882[(2)] = inst_34752);

(statearr_34809_34882[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34780 === (33))){
var inst_34738 = (state_34779[(25)]);
var inst_34740 = cljs.core.chunked_seq_QMARK_.call(null,inst_34738);
var state_34779__$1 = state_34779;
if(inst_34740){
var statearr_34810_34883 = state_34779__$1;
(statearr_34810_34883[(1)] = (36));

} else {
var statearr_34811_34884 = state_34779__$1;
(statearr_34811_34884[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34780 === (13))){
var inst_34670 = (state_34779[(26)]);
var inst_34673 = cljs.core.async.close_BANG_.call(null,inst_34670);
var state_34779__$1 = state_34779;
var statearr_34812_34885 = state_34779__$1;
(statearr_34812_34885[(2)] = inst_34673);

(statearr_34812_34885[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34780 === (22))){
var inst_34691 = (state_34779[(8)]);
var inst_34694 = cljs.core.async.close_BANG_.call(null,inst_34691);
var state_34779__$1 = state_34779;
var statearr_34813_34886 = state_34779__$1;
(statearr_34813_34886[(2)] = inst_34694);

(statearr_34813_34886[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34780 === (36))){
var inst_34738 = (state_34779[(25)]);
var inst_34742 = cljs.core.chunk_first.call(null,inst_34738);
var inst_34743 = cljs.core.chunk_rest.call(null,inst_34738);
var inst_34744 = cljs.core.count.call(null,inst_34742);
var inst_34719 = inst_34743;
var inst_34720 = inst_34742;
var inst_34721 = inst_34744;
var inst_34722 = (0);
var state_34779__$1 = (function (){var statearr_34814 = state_34779;
(statearr_34814[(20)] = inst_34721);

(statearr_34814[(21)] = inst_34719);

(statearr_34814[(11)] = inst_34722);

(statearr_34814[(12)] = inst_34720);

return statearr_34814;
})();
var statearr_34815_34887 = state_34779__$1;
(statearr_34815_34887[(2)] = null);

(statearr_34815_34887[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34780 === (41))){
var inst_34738 = (state_34779[(25)]);
var inst_34754 = (state_34779[(2)]);
var inst_34755 = cljs.core.next.call(null,inst_34738);
var inst_34719 = inst_34755;
var inst_34720 = null;
var inst_34721 = (0);
var inst_34722 = (0);
var state_34779__$1 = (function (){var statearr_34816 = state_34779;
(statearr_34816[(20)] = inst_34721);

(statearr_34816[(21)] = inst_34719);

(statearr_34816[(27)] = inst_34754);

(statearr_34816[(11)] = inst_34722);

(statearr_34816[(12)] = inst_34720);

return statearr_34816;
})();
var statearr_34817_34888 = state_34779__$1;
(statearr_34817_34888[(2)] = null);

(statearr_34817_34888[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34780 === (43))){
var state_34779__$1 = state_34779;
var statearr_34818_34889 = state_34779__$1;
(statearr_34818_34889[(2)] = null);

(statearr_34818_34889[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34780 === (29))){
var inst_34763 = (state_34779[(2)]);
var state_34779__$1 = state_34779;
var statearr_34819_34890 = state_34779__$1;
(statearr_34819_34890[(2)] = inst_34763);

(statearr_34819_34890[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34780 === (44))){
var inst_34772 = (state_34779[(2)]);
var state_34779__$1 = (function (){var statearr_34820 = state_34779;
(statearr_34820[(28)] = inst_34772);

return statearr_34820;
})();
var statearr_34821_34891 = state_34779__$1;
(statearr_34821_34891[(2)] = null);

(statearr_34821_34891[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34780 === (6))){
var inst_34711 = (state_34779[(29)]);
var inst_34710 = cljs.core.deref.call(null,cs);
var inst_34711__$1 = cljs.core.keys.call(null,inst_34710);
var inst_34712 = cljs.core.count.call(null,inst_34711__$1);
var inst_34713 = cljs.core.reset_BANG_.call(null,dctr,inst_34712);
var inst_34718 = cljs.core.seq.call(null,inst_34711__$1);
var inst_34719 = inst_34718;
var inst_34720 = null;
var inst_34721 = (0);
var inst_34722 = (0);
var state_34779__$1 = (function (){var statearr_34822 = state_34779;
(statearr_34822[(29)] = inst_34711__$1);

(statearr_34822[(20)] = inst_34721);

(statearr_34822[(30)] = inst_34713);

(statearr_34822[(21)] = inst_34719);

(statearr_34822[(11)] = inst_34722);

(statearr_34822[(12)] = inst_34720);

return statearr_34822;
})();
var statearr_34823_34892 = state_34779__$1;
(statearr_34823_34892[(2)] = null);

(statearr_34823_34892[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34780 === (28))){
var inst_34738 = (state_34779[(25)]);
var inst_34719 = (state_34779[(21)]);
var inst_34738__$1 = cljs.core.seq.call(null,inst_34719);
var state_34779__$1 = (function (){var statearr_34824 = state_34779;
(statearr_34824[(25)] = inst_34738__$1);

return statearr_34824;
})();
if(inst_34738__$1){
var statearr_34825_34893 = state_34779__$1;
(statearr_34825_34893[(1)] = (33));

} else {
var statearr_34826_34894 = state_34779__$1;
(statearr_34826_34894[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34780 === (25))){
var inst_34721 = (state_34779[(20)]);
var inst_34722 = (state_34779[(11)]);
var inst_34724 = (inst_34722 < inst_34721);
var inst_34725 = inst_34724;
var state_34779__$1 = state_34779;
if(cljs.core.truth_(inst_34725)){
var statearr_34827_34895 = state_34779__$1;
(statearr_34827_34895[(1)] = (27));

} else {
var statearr_34828_34896 = state_34779__$1;
(statearr_34828_34896[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34780 === (34))){
var state_34779__$1 = state_34779;
var statearr_34829_34897 = state_34779__$1;
(statearr_34829_34897[(2)] = null);

(statearr_34829_34897[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34780 === (17))){
var state_34779__$1 = state_34779;
var statearr_34830_34898 = state_34779__$1;
(statearr_34830_34898[(2)] = null);

(statearr_34830_34898[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34780 === (3))){
var inst_34777 = (state_34779[(2)]);
var state_34779__$1 = state_34779;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34779__$1,inst_34777);
} else {
if((state_val_34780 === (12))){
var inst_34706 = (state_34779[(2)]);
var state_34779__$1 = state_34779;
var statearr_34831_34899 = state_34779__$1;
(statearr_34831_34899[(2)] = inst_34706);

(statearr_34831_34899[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34780 === (2))){
var state_34779__$1 = state_34779;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34779__$1,(4),ch);
} else {
if((state_val_34780 === (23))){
var state_34779__$1 = state_34779;
var statearr_34832_34900 = state_34779__$1;
(statearr_34832_34900[(2)] = null);

(statearr_34832_34900[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34780 === (35))){
var inst_34761 = (state_34779[(2)]);
var state_34779__$1 = state_34779;
var statearr_34833_34901 = state_34779__$1;
(statearr_34833_34901[(2)] = inst_34761);

(statearr_34833_34901[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34780 === (19))){
var inst_34680 = (state_34779[(7)]);
var inst_34684 = cljs.core.chunk_first.call(null,inst_34680);
var inst_34685 = cljs.core.chunk_rest.call(null,inst_34680);
var inst_34686 = cljs.core.count.call(null,inst_34684);
var inst_34660 = inst_34685;
var inst_34661 = inst_34684;
var inst_34662 = inst_34686;
var inst_34663 = (0);
var state_34779__$1 = (function (){var statearr_34834 = state_34779;
(statearr_34834[(13)] = inst_34663);

(statearr_34834[(14)] = inst_34660);

(statearr_34834[(16)] = inst_34661);

(statearr_34834[(17)] = inst_34662);

return statearr_34834;
})();
var statearr_34835_34902 = state_34779__$1;
(statearr_34835_34902[(2)] = null);

(statearr_34835_34902[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34780 === (11))){
var inst_34660 = (state_34779[(14)]);
var inst_34680 = (state_34779[(7)]);
var inst_34680__$1 = cljs.core.seq.call(null,inst_34660);
var state_34779__$1 = (function (){var statearr_34836 = state_34779;
(statearr_34836[(7)] = inst_34680__$1);

return statearr_34836;
})();
if(inst_34680__$1){
var statearr_34837_34903 = state_34779__$1;
(statearr_34837_34903[(1)] = (16));

} else {
var statearr_34838_34904 = state_34779__$1;
(statearr_34838_34904[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34780 === (9))){
var inst_34708 = (state_34779[(2)]);
var state_34779__$1 = state_34779;
var statearr_34839_34905 = state_34779__$1;
(statearr_34839_34905[(2)] = inst_34708);

(statearr_34839_34905[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34780 === (5))){
var inst_34658 = cljs.core.deref.call(null,cs);
var inst_34659 = cljs.core.seq.call(null,inst_34658);
var inst_34660 = inst_34659;
var inst_34661 = null;
var inst_34662 = (0);
var inst_34663 = (0);
var state_34779__$1 = (function (){var statearr_34840 = state_34779;
(statearr_34840[(13)] = inst_34663);

(statearr_34840[(14)] = inst_34660);

(statearr_34840[(16)] = inst_34661);

(statearr_34840[(17)] = inst_34662);

return statearr_34840;
})();
var statearr_34841_34906 = state_34779__$1;
(statearr_34841_34906[(2)] = null);

(statearr_34841_34906[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34780 === (14))){
var state_34779__$1 = state_34779;
var statearr_34842_34907 = state_34779__$1;
(statearr_34842_34907[(2)] = null);

(statearr_34842_34907[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34780 === (45))){
var inst_34769 = (state_34779[(2)]);
var state_34779__$1 = state_34779;
var statearr_34843_34908 = state_34779__$1;
(statearr_34843_34908[(2)] = inst_34769);

(statearr_34843_34908[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34780 === (26))){
var inst_34711 = (state_34779[(29)]);
var inst_34765 = (state_34779[(2)]);
var inst_34766 = cljs.core.seq.call(null,inst_34711);
var state_34779__$1 = (function (){var statearr_34844 = state_34779;
(statearr_34844[(31)] = inst_34765);

return statearr_34844;
})();
if(inst_34766){
var statearr_34845_34909 = state_34779__$1;
(statearr_34845_34909[(1)] = (42));

} else {
var statearr_34846_34910 = state_34779__$1;
(statearr_34846_34910[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34780 === (16))){
var inst_34680 = (state_34779[(7)]);
var inst_34682 = cljs.core.chunked_seq_QMARK_.call(null,inst_34680);
var state_34779__$1 = state_34779;
if(inst_34682){
var statearr_34847_34911 = state_34779__$1;
(statearr_34847_34911[(1)] = (19));

} else {
var statearr_34848_34912 = state_34779__$1;
(statearr_34848_34912[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34780 === (38))){
var inst_34758 = (state_34779[(2)]);
var state_34779__$1 = state_34779;
var statearr_34849_34913 = state_34779__$1;
(statearr_34849_34913[(2)] = inst_34758);

(statearr_34849_34913[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34780 === (30))){
var state_34779__$1 = state_34779;
var statearr_34850_34914 = state_34779__$1;
(statearr_34850_34914[(2)] = null);

(statearr_34850_34914[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34780 === (10))){
var inst_34663 = (state_34779[(13)]);
var inst_34661 = (state_34779[(16)]);
var inst_34669 = cljs.core._nth.call(null,inst_34661,inst_34663);
var inst_34670 = cljs.core.nth.call(null,inst_34669,(0),null);
var inst_34671 = cljs.core.nth.call(null,inst_34669,(1),null);
var state_34779__$1 = (function (){var statearr_34851 = state_34779;
(statearr_34851[(26)] = inst_34670);

return statearr_34851;
})();
if(cljs.core.truth_(inst_34671)){
var statearr_34852_34915 = state_34779__$1;
(statearr_34852_34915[(1)] = (13));

} else {
var statearr_34853_34916 = state_34779__$1;
(statearr_34853_34916[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34780 === (18))){
var inst_34704 = (state_34779[(2)]);
var state_34779__$1 = state_34779;
var statearr_34854_34917 = state_34779__$1;
(statearr_34854_34917[(2)] = inst_34704);

(statearr_34854_34917[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34780 === (42))){
var state_34779__$1 = state_34779;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34779__$1,(45),dchan);
} else {
if((state_val_34780 === (37))){
var inst_34651 = (state_34779[(10)]);
var inst_34738 = (state_34779[(25)]);
var inst_34747 = (state_34779[(23)]);
var inst_34747__$1 = cljs.core.first.call(null,inst_34738);
var inst_34748 = cljs.core.async.put_BANG_.call(null,inst_34747__$1,inst_34651,done);
var state_34779__$1 = (function (){var statearr_34855 = state_34779;
(statearr_34855[(23)] = inst_34747__$1);

return statearr_34855;
})();
if(cljs.core.truth_(inst_34748)){
var statearr_34856_34918 = state_34779__$1;
(statearr_34856_34918[(1)] = (39));

} else {
var statearr_34857_34919 = state_34779__$1;
(statearr_34857_34919[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34780 === (8))){
var inst_34663 = (state_34779[(13)]);
var inst_34662 = (state_34779[(17)]);
var inst_34665 = (inst_34663 < inst_34662);
var inst_34666 = inst_34665;
var state_34779__$1 = state_34779;
if(cljs.core.truth_(inst_34666)){
var statearr_34858_34920 = state_34779__$1;
(statearr_34858_34920[(1)] = (10));

} else {
var statearr_34859_34921 = state_34779__$1;
(statearr_34859_34921[(1)] = (11));

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
});})(c__19778__auto___34867,cs,m,dchan,dctr,done))
;
return ((function (switch__19713__auto__,c__19778__auto___34867,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__19714__auto__ = null;
var cljs$core$async$mult_$_state_machine__19714__auto____0 = (function (){
var statearr_34863 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34863[(0)] = cljs$core$async$mult_$_state_machine__19714__auto__);

(statearr_34863[(1)] = (1));

return statearr_34863;
});
var cljs$core$async$mult_$_state_machine__19714__auto____1 = (function (state_34779){
while(true){
var ret_value__19715__auto__ = (function (){try{while(true){
var result__19716__auto__ = switch__19713__auto__.call(null,state_34779);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19716__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19716__auto__;
}
break;
}
}catch (e34864){if((e34864 instanceof Object)){
var ex__19717__auto__ = e34864;
var statearr_34865_34922 = state_34779;
(statearr_34865_34922[(5)] = ex__19717__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34779);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34864;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34923 = state_34779;
state_34779 = G__34923;
continue;
} else {
return ret_value__19715__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__19714__auto__ = function(state_34779){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__19714__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__19714__auto____1.call(this,state_34779);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__19714__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__19714__auto____0;
cljs$core$async$mult_$_state_machine__19714__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__19714__auto____1;
return cljs$core$async$mult_$_state_machine__19714__auto__;
})()
;})(switch__19713__auto__,c__19778__auto___34867,cs,m,dchan,dctr,done))
})();
var state__19780__auto__ = (function (){var statearr_34866 = f__19779__auto__.call(null);
(statearr_34866[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19778__auto___34867);

return statearr_34866;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19780__auto__);
});})(c__19778__auto___34867,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args34924 = [];
var len__17507__auto___34927 = arguments.length;
var i__17508__auto___34928 = (0);
while(true){
if((i__17508__auto___34928 < len__17507__auto___34927)){
args34924.push((arguments[i__17508__auto___34928]));

var G__34929 = (i__17508__auto___34928 + (1));
i__17508__auto___34928 = G__34929;
continue;
} else {
}
break;
}

var G__34926 = args34924.length;
switch (G__34926) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34924.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__17104__auto__ = (((m == null))?null:m);
var m__17105__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__17104__auto__)]);
if(!((m__17105__auto__ == null))){
return m__17105__auto__.call(null,m,ch);
} else {
var m__17105__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__17105__auto____$1 == null))){
return m__17105__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__17104__auto__ = (((m == null))?null:m);
var m__17105__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__17104__auto__)]);
if(!((m__17105__auto__ == null))){
return m__17105__auto__.call(null,m,ch);
} else {
var m__17105__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__17105__auto____$1 == null))){
return m__17105__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__17104__auto__ = (((m == null))?null:m);
var m__17105__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__17104__auto__)]);
if(!((m__17105__auto__ == null))){
return m__17105__auto__.call(null,m);
} else {
var m__17105__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__17105__auto____$1 == null))){
return m__17105__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__17104__auto__ = (((m == null))?null:m);
var m__17105__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__17104__auto__)]);
if(!((m__17105__auto__ == null))){
return m__17105__auto__.call(null,m,state_map);
} else {
var m__17105__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__17105__auto____$1 == null))){
return m__17105__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__17104__auto__ = (((m == null))?null:m);
var m__17105__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__17104__auto__)]);
if(!((m__17105__auto__ == null))){
return m__17105__auto__.call(null,m,mode);
} else {
var m__17105__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__17105__auto____$1 == null))){
return m__17105__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__17514__auto__ = [];
var len__17507__auto___34941 = arguments.length;
var i__17508__auto___34942 = (0);
while(true){
if((i__17508__auto___34942 < len__17507__auto___34941)){
args__17514__auto__.push((arguments[i__17508__auto___34942]));

var G__34943 = (i__17508__auto___34942 + (1));
i__17508__auto___34942 = G__34943;
continue;
} else {
}
break;
}

var argseq__17515__auto__ = ((((3) < args__17514__auto__.length))?(new cljs.core.IndexedSeq(args__17514__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17515__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__34935){
var map__34936 = p__34935;
var map__34936__$1 = ((((!((map__34936 == null)))?((((map__34936.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34936.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34936):map__34936);
var opts = map__34936__$1;
var statearr_34938_34944 = state;
(statearr_34938_34944[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__34936,map__34936__$1,opts){
return (function (val){
var statearr_34939_34945 = state;
(statearr_34939_34945[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__34936,map__34936__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_34940_34946 = state;
(statearr_34940_34946[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq34931){
var G__34932 = cljs.core.first.call(null,seq34931);
var seq34931__$1 = cljs.core.next.call(null,seq34931);
var G__34933 = cljs.core.first.call(null,seq34931__$1);
var seq34931__$2 = cljs.core.next.call(null,seq34931__$1);
var G__34934 = cljs.core.first.call(null,seq34931__$2);
var seq34931__$3 = cljs.core.next.call(null,seq34931__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__34932,G__34933,G__34934,seq34931__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async35110 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35110 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta35111){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta35111 = meta35111;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async35110.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_35112,meta35111__$1){
var self__ = this;
var _35112__$1 = this;
return (new cljs.core.async.t_cljs$core$async35110(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta35111__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35110.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_35112){
var self__ = this;
var _35112__$1 = this;
return self__.meta35111;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35110.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async35110.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35110.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async35110.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35110.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35110.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35110.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35110.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35110.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta35111","meta35111",-1175988936,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35110.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35110.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35110";

cljs.core.async.t_cljs$core$async35110.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__17047__auto__,writer__17048__auto__,opt__17049__auto__){
return cljs.core._write.call(null,writer__17048__auto__,"cljs.core.async/t_cljs$core$async35110");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async35110 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async35110(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35111){
return (new cljs.core.async.t_cljs$core$async35110(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35111));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async35110(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19778__auto___35273 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19778__auto___35273,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__19779__auto__ = (function (){var switch__19713__auto__ = ((function (c__19778__auto___35273,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_35210){
var state_val_35211 = (state_35210[(1)]);
if((state_val_35211 === (7))){
var inst_35128 = (state_35210[(2)]);
var state_35210__$1 = state_35210;
var statearr_35212_35274 = state_35210__$1;
(statearr_35212_35274[(2)] = inst_35128);

(statearr_35212_35274[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35211 === (20))){
var inst_35140 = (state_35210[(7)]);
var state_35210__$1 = state_35210;
var statearr_35213_35275 = state_35210__$1;
(statearr_35213_35275[(2)] = inst_35140);

(statearr_35213_35275[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35211 === (27))){
var state_35210__$1 = state_35210;
var statearr_35214_35276 = state_35210__$1;
(statearr_35214_35276[(2)] = null);

(statearr_35214_35276[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35211 === (1))){
var inst_35116 = (state_35210[(8)]);
var inst_35116__$1 = calc_state.call(null);
var inst_35118 = (inst_35116__$1 == null);
var inst_35119 = cljs.core.not.call(null,inst_35118);
var state_35210__$1 = (function (){var statearr_35215 = state_35210;
(statearr_35215[(8)] = inst_35116__$1);

return statearr_35215;
})();
if(inst_35119){
var statearr_35216_35277 = state_35210__$1;
(statearr_35216_35277[(1)] = (2));

} else {
var statearr_35217_35278 = state_35210__$1;
(statearr_35217_35278[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35211 === (24))){
var inst_35163 = (state_35210[(9)]);
var inst_35170 = (state_35210[(10)]);
var inst_35184 = (state_35210[(11)]);
var inst_35184__$1 = inst_35163.call(null,inst_35170);
var state_35210__$1 = (function (){var statearr_35218 = state_35210;
(statearr_35218[(11)] = inst_35184__$1);

return statearr_35218;
})();
if(cljs.core.truth_(inst_35184__$1)){
var statearr_35219_35279 = state_35210__$1;
(statearr_35219_35279[(1)] = (29));

} else {
var statearr_35220_35280 = state_35210__$1;
(statearr_35220_35280[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35211 === (4))){
var inst_35131 = (state_35210[(2)]);
var state_35210__$1 = state_35210;
if(cljs.core.truth_(inst_35131)){
var statearr_35221_35281 = state_35210__$1;
(statearr_35221_35281[(1)] = (8));

} else {
var statearr_35222_35282 = state_35210__$1;
(statearr_35222_35282[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35211 === (15))){
var inst_35157 = (state_35210[(2)]);
var state_35210__$1 = state_35210;
if(cljs.core.truth_(inst_35157)){
var statearr_35223_35283 = state_35210__$1;
(statearr_35223_35283[(1)] = (19));

} else {
var statearr_35224_35284 = state_35210__$1;
(statearr_35224_35284[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35211 === (21))){
var inst_35162 = (state_35210[(12)]);
var inst_35162__$1 = (state_35210[(2)]);
var inst_35163 = cljs.core.get.call(null,inst_35162__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35164 = cljs.core.get.call(null,inst_35162__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35165 = cljs.core.get.call(null,inst_35162__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_35210__$1 = (function (){var statearr_35225 = state_35210;
(statearr_35225[(12)] = inst_35162__$1);

(statearr_35225[(13)] = inst_35164);

(statearr_35225[(9)] = inst_35163);

return statearr_35225;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_35210__$1,(22),inst_35165);
} else {
if((state_val_35211 === (31))){
var inst_35192 = (state_35210[(2)]);
var state_35210__$1 = state_35210;
if(cljs.core.truth_(inst_35192)){
var statearr_35226_35285 = state_35210__$1;
(statearr_35226_35285[(1)] = (32));

} else {
var statearr_35227_35286 = state_35210__$1;
(statearr_35227_35286[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35211 === (32))){
var inst_35169 = (state_35210[(14)]);
var state_35210__$1 = state_35210;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35210__$1,(35),out,inst_35169);
} else {
if((state_val_35211 === (33))){
var inst_35162 = (state_35210[(12)]);
var inst_35140 = inst_35162;
var state_35210__$1 = (function (){var statearr_35228 = state_35210;
(statearr_35228[(7)] = inst_35140);

return statearr_35228;
})();
var statearr_35229_35287 = state_35210__$1;
(statearr_35229_35287[(2)] = null);

(statearr_35229_35287[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35211 === (13))){
var inst_35140 = (state_35210[(7)]);
var inst_35147 = inst_35140.cljs$lang$protocol_mask$partition0$;
var inst_35148 = (inst_35147 & (64));
var inst_35149 = inst_35140.cljs$core$ISeq$;
var inst_35150 = (inst_35148) || (inst_35149);
var state_35210__$1 = state_35210;
if(cljs.core.truth_(inst_35150)){
var statearr_35230_35288 = state_35210__$1;
(statearr_35230_35288[(1)] = (16));

} else {
var statearr_35231_35289 = state_35210__$1;
(statearr_35231_35289[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35211 === (22))){
var inst_35170 = (state_35210[(10)]);
var inst_35169 = (state_35210[(14)]);
var inst_35168 = (state_35210[(2)]);
var inst_35169__$1 = cljs.core.nth.call(null,inst_35168,(0),null);
var inst_35170__$1 = cljs.core.nth.call(null,inst_35168,(1),null);
var inst_35171 = (inst_35169__$1 == null);
var inst_35172 = cljs.core._EQ_.call(null,inst_35170__$1,change);
var inst_35173 = (inst_35171) || (inst_35172);
var state_35210__$1 = (function (){var statearr_35232 = state_35210;
(statearr_35232[(10)] = inst_35170__$1);

(statearr_35232[(14)] = inst_35169__$1);

return statearr_35232;
})();
if(cljs.core.truth_(inst_35173)){
var statearr_35233_35290 = state_35210__$1;
(statearr_35233_35290[(1)] = (23));

} else {
var statearr_35234_35291 = state_35210__$1;
(statearr_35234_35291[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35211 === (36))){
var inst_35162 = (state_35210[(12)]);
var inst_35140 = inst_35162;
var state_35210__$1 = (function (){var statearr_35235 = state_35210;
(statearr_35235[(7)] = inst_35140);

return statearr_35235;
})();
var statearr_35236_35292 = state_35210__$1;
(statearr_35236_35292[(2)] = null);

(statearr_35236_35292[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35211 === (29))){
var inst_35184 = (state_35210[(11)]);
var state_35210__$1 = state_35210;
var statearr_35237_35293 = state_35210__$1;
(statearr_35237_35293[(2)] = inst_35184);

(statearr_35237_35293[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35211 === (6))){
var state_35210__$1 = state_35210;
var statearr_35238_35294 = state_35210__$1;
(statearr_35238_35294[(2)] = false);

(statearr_35238_35294[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35211 === (28))){
var inst_35180 = (state_35210[(2)]);
var inst_35181 = calc_state.call(null);
var inst_35140 = inst_35181;
var state_35210__$1 = (function (){var statearr_35239 = state_35210;
(statearr_35239[(15)] = inst_35180);

(statearr_35239[(7)] = inst_35140);

return statearr_35239;
})();
var statearr_35240_35295 = state_35210__$1;
(statearr_35240_35295[(2)] = null);

(statearr_35240_35295[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35211 === (25))){
var inst_35206 = (state_35210[(2)]);
var state_35210__$1 = state_35210;
var statearr_35241_35296 = state_35210__$1;
(statearr_35241_35296[(2)] = inst_35206);

(statearr_35241_35296[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35211 === (34))){
var inst_35204 = (state_35210[(2)]);
var state_35210__$1 = state_35210;
var statearr_35242_35297 = state_35210__$1;
(statearr_35242_35297[(2)] = inst_35204);

(statearr_35242_35297[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35211 === (17))){
var state_35210__$1 = state_35210;
var statearr_35243_35298 = state_35210__$1;
(statearr_35243_35298[(2)] = false);

(statearr_35243_35298[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35211 === (3))){
var state_35210__$1 = state_35210;
var statearr_35244_35299 = state_35210__$1;
(statearr_35244_35299[(2)] = false);

(statearr_35244_35299[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35211 === (12))){
var inst_35208 = (state_35210[(2)]);
var state_35210__$1 = state_35210;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35210__$1,inst_35208);
} else {
if((state_val_35211 === (2))){
var inst_35116 = (state_35210[(8)]);
var inst_35121 = inst_35116.cljs$lang$protocol_mask$partition0$;
var inst_35122 = (inst_35121 & (64));
var inst_35123 = inst_35116.cljs$core$ISeq$;
var inst_35124 = (inst_35122) || (inst_35123);
var state_35210__$1 = state_35210;
if(cljs.core.truth_(inst_35124)){
var statearr_35245_35300 = state_35210__$1;
(statearr_35245_35300[(1)] = (5));

} else {
var statearr_35246_35301 = state_35210__$1;
(statearr_35246_35301[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35211 === (23))){
var inst_35169 = (state_35210[(14)]);
var inst_35175 = (inst_35169 == null);
var state_35210__$1 = state_35210;
if(cljs.core.truth_(inst_35175)){
var statearr_35247_35302 = state_35210__$1;
(statearr_35247_35302[(1)] = (26));

} else {
var statearr_35248_35303 = state_35210__$1;
(statearr_35248_35303[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35211 === (35))){
var inst_35195 = (state_35210[(2)]);
var state_35210__$1 = state_35210;
if(cljs.core.truth_(inst_35195)){
var statearr_35249_35304 = state_35210__$1;
(statearr_35249_35304[(1)] = (36));

} else {
var statearr_35250_35305 = state_35210__$1;
(statearr_35250_35305[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35211 === (19))){
var inst_35140 = (state_35210[(7)]);
var inst_35159 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35140);
var state_35210__$1 = state_35210;
var statearr_35251_35306 = state_35210__$1;
(statearr_35251_35306[(2)] = inst_35159);

(statearr_35251_35306[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35211 === (11))){
var inst_35140 = (state_35210[(7)]);
var inst_35144 = (inst_35140 == null);
var inst_35145 = cljs.core.not.call(null,inst_35144);
var state_35210__$1 = state_35210;
if(inst_35145){
var statearr_35252_35307 = state_35210__$1;
(statearr_35252_35307[(1)] = (13));

} else {
var statearr_35253_35308 = state_35210__$1;
(statearr_35253_35308[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35211 === (9))){
var inst_35116 = (state_35210[(8)]);
var state_35210__$1 = state_35210;
var statearr_35254_35309 = state_35210__$1;
(statearr_35254_35309[(2)] = inst_35116);

(statearr_35254_35309[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35211 === (5))){
var state_35210__$1 = state_35210;
var statearr_35255_35310 = state_35210__$1;
(statearr_35255_35310[(2)] = true);

(statearr_35255_35310[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35211 === (14))){
var state_35210__$1 = state_35210;
var statearr_35256_35311 = state_35210__$1;
(statearr_35256_35311[(2)] = false);

(statearr_35256_35311[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35211 === (26))){
var inst_35170 = (state_35210[(10)]);
var inst_35177 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_35170);
var state_35210__$1 = state_35210;
var statearr_35257_35312 = state_35210__$1;
(statearr_35257_35312[(2)] = inst_35177);

(statearr_35257_35312[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35211 === (16))){
var state_35210__$1 = state_35210;
var statearr_35258_35313 = state_35210__$1;
(statearr_35258_35313[(2)] = true);

(statearr_35258_35313[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35211 === (38))){
var inst_35200 = (state_35210[(2)]);
var state_35210__$1 = state_35210;
var statearr_35259_35314 = state_35210__$1;
(statearr_35259_35314[(2)] = inst_35200);

(statearr_35259_35314[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35211 === (30))){
var inst_35164 = (state_35210[(13)]);
var inst_35163 = (state_35210[(9)]);
var inst_35170 = (state_35210[(10)]);
var inst_35187 = cljs.core.empty_QMARK_.call(null,inst_35163);
var inst_35188 = inst_35164.call(null,inst_35170);
var inst_35189 = cljs.core.not.call(null,inst_35188);
var inst_35190 = (inst_35187) && (inst_35189);
var state_35210__$1 = state_35210;
var statearr_35260_35315 = state_35210__$1;
(statearr_35260_35315[(2)] = inst_35190);

(statearr_35260_35315[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35211 === (10))){
var inst_35116 = (state_35210[(8)]);
var inst_35136 = (state_35210[(2)]);
var inst_35137 = cljs.core.get.call(null,inst_35136,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35138 = cljs.core.get.call(null,inst_35136,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35139 = cljs.core.get.call(null,inst_35136,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_35140 = inst_35116;
var state_35210__$1 = (function (){var statearr_35261 = state_35210;
(statearr_35261[(16)] = inst_35139);

(statearr_35261[(17)] = inst_35138);

(statearr_35261[(7)] = inst_35140);

(statearr_35261[(18)] = inst_35137);

return statearr_35261;
})();
var statearr_35262_35316 = state_35210__$1;
(statearr_35262_35316[(2)] = null);

(statearr_35262_35316[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35211 === (18))){
var inst_35154 = (state_35210[(2)]);
var state_35210__$1 = state_35210;
var statearr_35263_35317 = state_35210__$1;
(statearr_35263_35317[(2)] = inst_35154);

(statearr_35263_35317[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35211 === (37))){
var state_35210__$1 = state_35210;
var statearr_35264_35318 = state_35210__$1;
(statearr_35264_35318[(2)] = null);

(statearr_35264_35318[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35211 === (8))){
var inst_35116 = (state_35210[(8)]);
var inst_35133 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35116);
var state_35210__$1 = state_35210;
var statearr_35265_35319 = state_35210__$1;
(statearr_35265_35319[(2)] = inst_35133);

(statearr_35265_35319[(1)] = (10));


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
});})(c__19778__auto___35273,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__19713__auto__,c__19778__auto___35273,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__19714__auto__ = null;
var cljs$core$async$mix_$_state_machine__19714__auto____0 = (function (){
var statearr_35269 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35269[(0)] = cljs$core$async$mix_$_state_machine__19714__auto__);

(statearr_35269[(1)] = (1));

return statearr_35269;
});
var cljs$core$async$mix_$_state_machine__19714__auto____1 = (function (state_35210){
while(true){
var ret_value__19715__auto__ = (function (){try{while(true){
var result__19716__auto__ = switch__19713__auto__.call(null,state_35210);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19716__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19716__auto__;
}
break;
}
}catch (e35270){if((e35270 instanceof Object)){
var ex__19717__auto__ = e35270;
var statearr_35271_35320 = state_35210;
(statearr_35271_35320[(5)] = ex__19717__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35210);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35270;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35321 = state_35210;
state_35210 = G__35321;
continue;
} else {
return ret_value__19715__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__19714__auto__ = function(state_35210){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__19714__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__19714__auto____1.call(this,state_35210);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__19714__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__19714__auto____0;
cljs$core$async$mix_$_state_machine__19714__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__19714__auto____1;
return cljs$core$async$mix_$_state_machine__19714__auto__;
})()
;})(switch__19713__auto__,c__19778__auto___35273,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__19780__auto__ = (function (){var statearr_35272 = f__19779__auto__.call(null);
(statearr_35272[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19778__auto___35273);

return statearr_35272;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19780__auto__);
});})(c__19778__auto___35273,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__17104__auto__ = (((p == null))?null:p);
var m__17105__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__17104__auto__)]);
if(!((m__17105__auto__ == null))){
return m__17105__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__17105__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__17105__auto____$1 == null))){
return m__17105__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__17104__auto__ = (((p == null))?null:p);
var m__17105__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__17104__auto__)]);
if(!((m__17105__auto__ == null))){
return m__17105__auto__.call(null,p,v,ch);
} else {
var m__17105__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__17105__auto____$1 == null))){
return m__17105__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args35322 = [];
var len__17507__auto___35325 = arguments.length;
var i__17508__auto___35326 = (0);
while(true){
if((i__17508__auto___35326 < len__17507__auto___35325)){
args35322.push((arguments[i__17508__auto___35326]));

var G__35327 = (i__17508__auto___35326 + (1));
i__17508__auto___35326 = G__35327;
continue;
} else {
}
break;
}

var G__35324 = args35322.length;
switch (G__35324) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35322.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__17104__auto__ = (((p == null))?null:p);
var m__17105__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17104__auto__)]);
if(!((m__17105__auto__ == null))){
return m__17105__auto__.call(null,p);
} else {
var m__17105__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17105__auto____$1 == null))){
return m__17105__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__17104__auto__ = (((p == null))?null:p);
var m__17105__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17104__auto__)]);
if(!((m__17105__auto__ == null))){
return m__17105__auto__.call(null,p,v);
} else {
var m__17105__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17105__auto____$1 == null))){
return m__17105__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args35330 = [];
var len__17507__auto___35455 = arguments.length;
var i__17508__auto___35456 = (0);
while(true){
if((i__17508__auto___35456 < len__17507__auto___35455)){
args35330.push((arguments[i__17508__auto___35456]));

var G__35457 = (i__17508__auto___35456 + (1));
i__17508__auto___35456 = G__35457;
continue;
} else {
}
break;
}

var G__35332 = args35330.length;
switch (G__35332) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35330.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__16449__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__16449__auto__)){
return or__16449__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__16449__auto__,mults){
return (function (p1__35329_SHARP_){
if(cljs.core.truth_(p1__35329_SHARP_.call(null,topic))){
return p1__35329_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__35329_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16449__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async35333 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35333 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta35334){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta35334 = meta35334;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async35333.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_35335,meta35334__$1){
var self__ = this;
var _35335__$1 = this;
return (new cljs.core.async.t_cljs$core$async35333(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta35334__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35333.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_35335){
var self__ = this;
var _35335__$1 = this;
return self__.meta35334;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35333.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async35333.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35333.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async35333.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35333.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35333.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35333.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35333.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta35334","meta35334",1844235353,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35333.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35333.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35333";

cljs.core.async.t_cljs$core$async35333.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__17047__auto__,writer__17048__auto__,opt__17049__auto__){
return cljs.core._write.call(null,writer__17048__auto__,"cljs.core.async/t_cljs$core$async35333");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async35333 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async35333(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35334){
return (new cljs.core.async.t_cljs$core$async35333(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35334));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async35333(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19778__auto___35459 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19778__auto___35459,mults,ensure_mult,p){
return (function (){
var f__19779__auto__ = (function (){var switch__19713__auto__ = ((function (c__19778__auto___35459,mults,ensure_mult,p){
return (function (state_35407){
var state_val_35408 = (state_35407[(1)]);
if((state_val_35408 === (7))){
var inst_35403 = (state_35407[(2)]);
var state_35407__$1 = state_35407;
var statearr_35409_35460 = state_35407__$1;
(statearr_35409_35460[(2)] = inst_35403);

(statearr_35409_35460[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35408 === (20))){
var state_35407__$1 = state_35407;
var statearr_35410_35461 = state_35407__$1;
(statearr_35410_35461[(2)] = null);

(statearr_35410_35461[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35408 === (1))){
var state_35407__$1 = state_35407;
var statearr_35411_35462 = state_35407__$1;
(statearr_35411_35462[(2)] = null);

(statearr_35411_35462[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35408 === (24))){
var inst_35386 = (state_35407[(7)]);
var inst_35395 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_35386);
var state_35407__$1 = state_35407;
var statearr_35412_35463 = state_35407__$1;
(statearr_35412_35463[(2)] = inst_35395);

(statearr_35412_35463[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35408 === (4))){
var inst_35338 = (state_35407[(8)]);
var inst_35338__$1 = (state_35407[(2)]);
var inst_35339 = (inst_35338__$1 == null);
var state_35407__$1 = (function (){var statearr_35413 = state_35407;
(statearr_35413[(8)] = inst_35338__$1);

return statearr_35413;
})();
if(cljs.core.truth_(inst_35339)){
var statearr_35414_35464 = state_35407__$1;
(statearr_35414_35464[(1)] = (5));

} else {
var statearr_35415_35465 = state_35407__$1;
(statearr_35415_35465[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35408 === (15))){
var inst_35380 = (state_35407[(2)]);
var state_35407__$1 = state_35407;
var statearr_35416_35466 = state_35407__$1;
(statearr_35416_35466[(2)] = inst_35380);

(statearr_35416_35466[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35408 === (21))){
var inst_35400 = (state_35407[(2)]);
var state_35407__$1 = (function (){var statearr_35417 = state_35407;
(statearr_35417[(9)] = inst_35400);

return statearr_35417;
})();
var statearr_35418_35467 = state_35407__$1;
(statearr_35418_35467[(2)] = null);

(statearr_35418_35467[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35408 === (13))){
var inst_35362 = (state_35407[(10)]);
var inst_35364 = cljs.core.chunked_seq_QMARK_.call(null,inst_35362);
var state_35407__$1 = state_35407;
if(inst_35364){
var statearr_35419_35468 = state_35407__$1;
(statearr_35419_35468[(1)] = (16));

} else {
var statearr_35420_35469 = state_35407__$1;
(statearr_35420_35469[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35408 === (22))){
var inst_35392 = (state_35407[(2)]);
var state_35407__$1 = state_35407;
if(cljs.core.truth_(inst_35392)){
var statearr_35421_35470 = state_35407__$1;
(statearr_35421_35470[(1)] = (23));

} else {
var statearr_35422_35471 = state_35407__$1;
(statearr_35422_35471[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35408 === (6))){
var inst_35388 = (state_35407[(11)]);
var inst_35386 = (state_35407[(7)]);
var inst_35338 = (state_35407[(8)]);
var inst_35386__$1 = topic_fn.call(null,inst_35338);
var inst_35387 = cljs.core.deref.call(null,mults);
var inst_35388__$1 = cljs.core.get.call(null,inst_35387,inst_35386__$1);
var state_35407__$1 = (function (){var statearr_35423 = state_35407;
(statearr_35423[(11)] = inst_35388__$1);

(statearr_35423[(7)] = inst_35386__$1);

return statearr_35423;
})();
if(cljs.core.truth_(inst_35388__$1)){
var statearr_35424_35472 = state_35407__$1;
(statearr_35424_35472[(1)] = (19));

} else {
var statearr_35425_35473 = state_35407__$1;
(statearr_35425_35473[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35408 === (25))){
var inst_35397 = (state_35407[(2)]);
var state_35407__$1 = state_35407;
var statearr_35426_35474 = state_35407__$1;
(statearr_35426_35474[(2)] = inst_35397);

(statearr_35426_35474[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35408 === (17))){
var inst_35362 = (state_35407[(10)]);
var inst_35371 = cljs.core.first.call(null,inst_35362);
var inst_35372 = cljs.core.async.muxch_STAR_.call(null,inst_35371);
var inst_35373 = cljs.core.async.close_BANG_.call(null,inst_35372);
var inst_35374 = cljs.core.next.call(null,inst_35362);
var inst_35348 = inst_35374;
var inst_35349 = null;
var inst_35350 = (0);
var inst_35351 = (0);
var state_35407__$1 = (function (){var statearr_35427 = state_35407;
(statearr_35427[(12)] = inst_35349);

(statearr_35427[(13)] = inst_35350);

(statearr_35427[(14)] = inst_35348);

(statearr_35427[(15)] = inst_35373);

(statearr_35427[(16)] = inst_35351);

return statearr_35427;
})();
var statearr_35428_35475 = state_35407__$1;
(statearr_35428_35475[(2)] = null);

(statearr_35428_35475[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35408 === (3))){
var inst_35405 = (state_35407[(2)]);
var state_35407__$1 = state_35407;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35407__$1,inst_35405);
} else {
if((state_val_35408 === (12))){
var inst_35382 = (state_35407[(2)]);
var state_35407__$1 = state_35407;
var statearr_35429_35476 = state_35407__$1;
(statearr_35429_35476[(2)] = inst_35382);

(statearr_35429_35476[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35408 === (2))){
var state_35407__$1 = state_35407;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35407__$1,(4),ch);
} else {
if((state_val_35408 === (23))){
var state_35407__$1 = state_35407;
var statearr_35430_35477 = state_35407__$1;
(statearr_35430_35477[(2)] = null);

(statearr_35430_35477[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35408 === (19))){
var inst_35388 = (state_35407[(11)]);
var inst_35338 = (state_35407[(8)]);
var inst_35390 = cljs.core.async.muxch_STAR_.call(null,inst_35388);
var state_35407__$1 = state_35407;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35407__$1,(22),inst_35390,inst_35338);
} else {
if((state_val_35408 === (11))){
var inst_35348 = (state_35407[(14)]);
var inst_35362 = (state_35407[(10)]);
var inst_35362__$1 = cljs.core.seq.call(null,inst_35348);
var state_35407__$1 = (function (){var statearr_35431 = state_35407;
(statearr_35431[(10)] = inst_35362__$1);

return statearr_35431;
})();
if(inst_35362__$1){
var statearr_35432_35478 = state_35407__$1;
(statearr_35432_35478[(1)] = (13));

} else {
var statearr_35433_35479 = state_35407__$1;
(statearr_35433_35479[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35408 === (9))){
var inst_35384 = (state_35407[(2)]);
var state_35407__$1 = state_35407;
var statearr_35434_35480 = state_35407__$1;
(statearr_35434_35480[(2)] = inst_35384);

(statearr_35434_35480[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35408 === (5))){
var inst_35345 = cljs.core.deref.call(null,mults);
var inst_35346 = cljs.core.vals.call(null,inst_35345);
var inst_35347 = cljs.core.seq.call(null,inst_35346);
var inst_35348 = inst_35347;
var inst_35349 = null;
var inst_35350 = (0);
var inst_35351 = (0);
var state_35407__$1 = (function (){var statearr_35435 = state_35407;
(statearr_35435[(12)] = inst_35349);

(statearr_35435[(13)] = inst_35350);

(statearr_35435[(14)] = inst_35348);

(statearr_35435[(16)] = inst_35351);

return statearr_35435;
})();
var statearr_35436_35481 = state_35407__$1;
(statearr_35436_35481[(2)] = null);

(statearr_35436_35481[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35408 === (14))){
var state_35407__$1 = state_35407;
var statearr_35440_35482 = state_35407__$1;
(statearr_35440_35482[(2)] = null);

(statearr_35440_35482[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35408 === (16))){
var inst_35362 = (state_35407[(10)]);
var inst_35366 = cljs.core.chunk_first.call(null,inst_35362);
var inst_35367 = cljs.core.chunk_rest.call(null,inst_35362);
var inst_35368 = cljs.core.count.call(null,inst_35366);
var inst_35348 = inst_35367;
var inst_35349 = inst_35366;
var inst_35350 = inst_35368;
var inst_35351 = (0);
var state_35407__$1 = (function (){var statearr_35441 = state_35407;
(statearr_35441[(12)] = inst_35349);

(statearr_35441[(13)] = inst_35350);

(statearr_35441[(14)] = inst_35348);

(statearr_35441[(16)] = inst_35351);

return statearr_35441;
})();
var statearr_35442_35483 = state_35407__$1;
(statearr_35442_35483[(2)] = null);

(statearr_35442_35483[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35408 === (10))){
var inst_35349 = (state_35407[(12)]);
var inst_35350 = (state_35407[(13)]);
var inst_35348 = (state_35407[(14)]);
var inst_35351 = (state_35407[(16)]);
var inst_35356 = cljs.core._nth.call(null,inst_35349,inst_35351);
var inst_35357 = cljs.core.async.muxch_STAR_.call(null,inst_35356);
var inst_35358 = cljs.core.async.close_BANG_.call(null,inst_35357);
var inst_35359 = (inst_35351 + (1));
var tmp35437 = inst_35349;
var tmp35438 = inst_35350;
var tmp35439 = inst_35348;
var inst_35348__$1 = tmp35439;
var inst_35349__$1 = tmp35437;
var inst_35350__$1 = tmp35438;
var inst_35351__$1 = inst_35359;
var state_35407__$1 = (function (){var statearr_35443 = state_35407;
(statearr_35443[(12)] = inst_35349__$1);

(statearr_35443[(13)] = inst_35350__$1);

(statearr_35443[(14)] = inst_35348__$1);

(statearr_35443[(16)] = inst_35351__$1);

(statearr_35443[(17)] = inst_35358);

return statearr_35443;
})();
var statearr_35444_35484 = state_35407__$1;
(statearr_35444_35484[(2)] = null);

(statearr_35444_35484[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35408 === (18))){
var inst_35377 = (state_35407[(2)]);
var state_35407__$1 = state_35407;
var statearr_35445_35485 = state_35407__$1;
(statearr_35445_35485[(2)] = inst_35377);

(statearr_35445_35485[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35408 === (8))){
var inst_35350 = (state_35407[(13)]);
var inst_35351 = (state_35407[(16)]);
var inst_35353 = (inst_35351 < inst_35350);
var inst_35354 = inst_35353;
var state_35407__$1 = state_35407;
if(cljs.core.truth_(inst_35354)){
var statearr_35446_35486 = state_35407__$1;
(statearr_35446_35486[(1)] = (10));

} else {
var statearr_35447_35487 = state_35407__$1;
(statearr_35447_35487[(1)] = (11));

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
}
}
}
}
}
}
}
}
});})(c__19778__auto___35459,mults,ensure_mult,p))
;
return ((function (switch__19713__auto__,c__19778__auto___35459,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__19714__auto__ = null;
var cljs$core$async$state_machine__19714__auto____0 = (function (){
var statearr_35451 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35451[(0)] = cljs$core$async$state_machine__19714__auto__);

(statearr_35451[(1)] = (1));

return statearr_35451;
});
var cljs$core$async$state_machine__19714__auto____1 = (function (state_35407){
while(true){
var ret_value__19715__auto__ = (function (){try{while(true){
var result__19716__auto__ = switch__19713__auto__.call(null,state_35407);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19716__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19716__auto__;
}
break;
}
}catch (e35452){if((e35452 instanceof Object)){
var ex__19717__auto__ = e35452;
var statearr_35453_35488 = state_35407;
(statearr_35453_35488[(5)] = ex__19717__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35407);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35452;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35489 = state_35407;
state_35407 = G__35489;
continue;
} else {
return ret_value__19715__auto__;
}
break;
}
});
cljs$core$async$state_machine__19714__auto__ = function(state_35407){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19714__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19714__auto____1.call(this,state_35407);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19714__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19714__auto____0;
cljs$core$async$state_machine__19714__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19714__auto____1;
return cljs$core$async$state_machine__19714__auto__;
})()
;})(switch__19713__auto__,c__19778__auto___35459,mults,ensure_mult,p))
})();
var state__19780__auto__ = (function (){var statearr_35454 = f__19779__auto__.call(null);
(statearr_35454[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19778__auto___35459);

return statearr_35454;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19780__auto__);
});})(c__19778__auto___35459,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args35490 = [];
var len__17507__auto___35493 = arguments.length;
var i__17508__auto___35494 = (0);
while(true){
if((i__17508__auto___35494 < len__17507__auto___35493)){
args35490.push((arguments[i__17508__auto___35494]));

var G__35495 = (i__17508__auto___35494 + (1));
i__17508__auto___35494 = G__35495;
continue;
} else {
}
break;
}

var G__35492 = args35490.length;
switch (G__35492) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35490.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args35497 = [];
var len__17507__auto___35500 = arguments.length;
var i__17508__auto___35501 = (0);
while(true){
if((i__17508__auto___35501 < len__17507__auto___35500)){
args35497.push((arguments[i__17508__auto___35501]));

var G__35502 = (i__17508__auto___35501 + (1));
i__17508__auto___35501 = G__35502;
continue;
} else {
}
break;
}

var G__35499 = args35497.length;
switch (G__35499) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35497.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args35504 = [];
var len__17507__auto___35575 = arguments.length;
var i__17508__auto___35576 = (0);
while(true){
if((i__17508__auto___35576 < len__17507__auto___35575)){
args35504.push((arguments[i__17508__auto___35576]));

var G__35577 = (i__17508__auto___35576 + (1));
i__17508__auto___35576 = G__35577;
continue;
} else {
}
break;
}

var G__35506 = args35504.length;
switch (G__35506) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35504.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__19778__auto___35579 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19778__auto___35579,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__19779__auto__ = (function (){var switch__19713__auto__ = ((function (c__19778__auto___35579,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_35545){
var state_val_35546 = (state_35545[(1)]);
if((state_val_35546 === (7))){
var state_35545__$1 = state_35545;
var statearr_35547_35580 = state_35545__$1;
(statearr_35547_35580[(2)] = null);

(statearr_35547_35580[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35546 === (1))){
var state_35545__$1 = state_35545;
var statearr_35548_35581 = state_35545__$1;
(statearr_35548_35581[(2)] = null);

(statearr_35548_35581[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35546 === (4))){
var inst_35509 = (state_35545[(7)]);
var inst_35511 = (inst_35509 < cnt);
var state_35545__$1 = state_35545;
if(cljs.core.truth_(inst_35511)){
var statearr_35549_35582 = state_35545__$1;
(statearr_35549_35582[(1)] = (6));

} else {
var statearr_35550_35583 = state_35545__$1;
(statearr_35550_35583[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35546 === (15))){
var inst_35541 = (state_35545[(2)]);
var state_35545__$1 = state_35545;
var statearr_35551_35584 = state_35545__$1;
(statearr_35551_35584[(2)] = inst_35541);

(statearr_35551_35584[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35546 === (13))){
var inst_35534 = cljs.core.async.close_BANG_.call(null,out);
var state_35545__$1 = state_35545;
var statearr_35552_35585 = state_35545__$1;
(statearr_35552_35585[(2)] = inst_35534);

(statearr_35552_35585[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35546 === (6))){
var state_35545__$1 = state_35545;
var statearr_35553_35586 = state_35545__$1;
(statearr_35553_35586[(2)] = null);

(statearr_35553_35586[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35546 === (3))){
var inst_35543 = (state_35545[(2)]);
var state_35545__$1 = state_35545;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35545__$1,inst_35543);
} else {
if((state_val_35546 === (12))){
var inst_35531 = (state_35545[(8)]);
var inst_35531__$1 = (state_35545[(2)]);
var inst_35532 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_35531__$1);
var state_35545__$1 = (function (){var statearr_35554 = state_35545;
(statearr_35554[(8)] = inst_35531__$1);

return statearr_35554;
})();
if(cljs.core.truth_(inst_35532)){
var statearr_35555_35587 = state_35545__$1;
(statearr_35555_35587[(1)] = (13));

} else {
var statearr_35556_35588 = state_35545__$1;
(statearr_35556_35588[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35546 === (2))){
var inst_35508 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_35509 = (0);
var state_35545__$1 = (function (){var statearr_35557 = state_35545;
(statearr_35557[(9)] = inst_35508);

(statearr_35557[(7)] = inst_35509);

return statearr_35557;
})();
var statearr_35558_35589 = state_35545__$1;
(statearr_35558_35589[(2)] = null);

(statearr_35558_35589[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35546 === (11))){
var inst_35509 = (state_35545[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_35545,(10),Object,null,(9));
var inst_35518 = chs__$1.call(null,inst_35509);
var inst_35519 = done.call(null,inst_35509);
var inst_35520 = cljs.core.async.take_BANG_.call(null,inst_35518,inst_35519);
var state_35545__$1 = state_35545;
var statearr_35559_35590 = state_35545__$1;
(statearr_35559_35590[(2)] = inst_35520);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35545__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35546 === (9))){
var inst_35509 = (state_35545[(7)]);
var inst_35522 = (state_35545[(2)]);
var inst_35523 = (inst_35509 + (1));
var inst_35509__$1 = inst_35523;
var state_35545__$1 = (function (){var statearr_35560 = state_35545;
(statearr_35560[(7)] = inst_35509__$1);

(statearr_35560[(10)] = inst_35522);

return statearr_35560;
})();
var statearr_35561_35591 = state_35545__$1;
(statearr_35561_35591[(2)] = null);

(statearr_35561_35591[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35546 === (5))){
var inst_35529 = (state_35545[(2)]);
var state_35545__$1 = (function (){var statearr_35562 = state_35545;
(statearr_35562[(11)] = inst_35529);

return statearr_35562;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35545__$1,(12),dchan);
} else {
if((state_val_35546 === (14))){
var inst_35531 = (state_35545[(8)]);
var inst_35536 = cljs.core.apply.call(null,f,inst_35531);
var state_35545__$1 = state_35545;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35545__$1,(16),out,inst_35536);
} else {
if((state_val_35546 === (16))){
var inst_35538 = (state_35545[(2)]);
var state_35545__$1 = (function (){var statearr_35563 = state_35545;
(statearr_35563[(12)] = inst_35538);

return statearr_35563;
})();
var statearr_35564_35592 = state_35545__$1;
(statearr_35564_35592[(2)] = null);

(statearr_35564_35592[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35546 === (10))){
var inst_35513 = (state_35545[(2)]);
var inst_35514 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_35545__$1 = (function (){var statearr_35565 = state_35545;
(statearr_35565[(13)] = inst_35513);

return statearr_35565;
})();
var statearr_35566_35593 = state_35545__$1;
(statearr_35566_35593[(2)] = inst_35514);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35545__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35546 === (8))){
var inst_35527 = (state_35545[(2)]);
var state_35545__$1 = state_35545;
var statearr_35567_35594 = state_35545__$1;
(statearr_35567_35594[(2)] = inst_35527);

(statearr_35567_35594[(1)] = (5));


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
});})(c__19778__auto___35579,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__19713__auto__,c__19778__auto___35579,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__19714__auto__ = null;
var cljs$core$async$state_machine__19714__auto____0 = (function (){
var statearr_35571 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35571[(0)] = cljs$core$async$state_machine__19714__auto__);

(statearr_35571[(1)] = (1));

return statearr_35571;
});
var cljs$core$async$state_machine__19714__auto____1 = (function (state_35545){
while(true){
var ret_value__19715__auto__ = (function (){try{while(true){
var result__19716__auto__ = switch__19713__auto__.call(null,state_35545);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19716__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19716__auto__;
}
break;
}
}catch (e35572){if((e35572 instanceof Object)){
var ex__19717__auto__ = e35572;
var statearr_35573_35595 = state_35545;
(statearr_35573_35595[(5)] = ex__19717__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35545);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35572;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35596 = state_35545;
state_35545 = G__35596;
continue;
} else {
return ret_value__19715__auto__;
}
break;
}
});
cljs$core$async$state_machine__19714__auto__ = function(state_35545){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19714__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19714__auto____1.call(this,state_35545);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19714__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19714__auto____0;
cljs$core$async$state_machine__19714__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19714__auto____1;
return cljs$core$async$state_machine__19714__auto__;
})()
;})(switch__19713__auto__,c__19778__auto___35579,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__19780__auto__ = (function (){var statearr_35574 = f__19779__auto__.call(null);
(statearr_35574[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19778__auto___35579);

return statearr_35574;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19780__auto__);
});})(c__19778__auto___35579,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args35598 = [];
var len__17507__auto___35654 = arguments.length;
var i__17508__auto___35655 = (0);
while(true){
if((i__17508__auto___35655 < len__17507__auto___35654)){
args35598.push((arguments[i__17508__auto___35655]));

var G__35656 = (i__17508__auto___35655 + (1));
i__17508__auto___35655 = G__35656;
continue;
} else {
}
break;
}

var G__35600 = args35598.length;
switch (G__35600) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35598.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19778__auto___35658 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19778__auto___35658,out){
return (function (){
var f__19779__auto__ = (function (){var switch__19713__auto__ = ((function (c__19778__auto___35658,out){
return (function (state_35630){
var state_val_35631 = (state_35630[(1)]);
if((state_val_35631 === (7))){
var inst_35610 = (state_35630[(7)]);
var inst_35609 = (state_35630[(8)]);
var inst_35609__$1 = (state_35630[(2)]);
var inst_35610__$1 = cljs.core.nth.call(null,inst_35609__$1,(0),null);
var inst_35611 = cljs.core.nth.call(null,inst_35609__$1,(1),null);
var inst_35612 = (inst_35610__$1 == null);
var state_35630__$1 = (function (){var statearr_35632 = state_35630;
(statearr_35632[(7)] = inst_35610__$1);

(statearr_35632[(8)] = inst_35609__$1);

(statearr_35632[(9)] = inst_35611);

return statearr_35632;
})();
if(cljs.core.truth_(inst_35612)){
var statearr_35633_35659 = state_35630__$1;
(statearr_35633_35659[(1)] = (8));

} else {
var statearr_35634_35660 = state_35630__$1;
(statearr_35634_35660[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35631 === (1))){
var inst_35601 = cljs.core.vec.call(null,chs);
var inst_35602 = inst_35601;
var state_35630__$1 = (function (){var statearr_35635 = state_35630;
(statearr_35635[(10)] = inst_35602);

return statearr_35635;
})();
var statearr_35636_35661 = state_35630__$1;
(statearr_35636_35661[(2)] = null);

(statearr_35636_35661[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35631 === (4))){
var inst_35602 = (state_35630[(10)]);
var state_35630__$1 = state_35630;
return cljs.core.async.ioc_alts_BANG_.call(null,state_35630__$1,(7),inst_35602);
} else {
if((state_val_35631 === (6))){
var inst_35626 = (state_35630[(2)]);
var state_35630__$1 = state_35630;
var statearr_35637_35662 = state_35630__$1;
(statearr_35637_35662[(2)] = inst_35626);

(statearr_35637_35662[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35631 === (3))){
var inst_35628 = (state_35630[(2)]);
var state_35630__$1 = state_35630;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35630__$1,inst_35628);
} else {
if((state_val_35631 === (2))){
var inst_35602 = (state_35630[(10)]);
var inst_35604 = cljs.core.count.call(null,inst_35602);
var inst_35605 = (inst_35604 > (0));
var state_35630__$1 = state_35630;
if(cljs.core.truth_(inst_35605)){
var statearr_35639_35663 = state_35630__$1;
(statearr_35639_35663[(1)] = (4));

} else {
var statearr_35640_35664 = state_35630__$1;
(statearr_35640_35664[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35631 === (11))){
var inst_35602 = (state_35630[(10)]);
var inst_35619 = (state_35630[(2)]);
var tmp35638 = inst_35602;
var inst_35602__$1 = tmp35638;
var state_35630__$1 = (function (){var statearr_35641 = state_35630;
(statearr_35641[(10)] = inst_35602__$1);

(statearr_35641[(11)] = inst_35619);

return statearr_35641;
})();
var statearr_35642_35665 = state_35630__$1;
(statearr_35642_35665[(2)] = null);

(statearr_35642_35665[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35631 === (9))){
var inst_35610 = (state_35630[(7)]);
var state_35630__$1 = state_35630;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35630__$1,(11),out,inst_35610);
} else {
if((state_val_35631 === (5))){
var inst_35624 = cljs.core.async.close_BANG_.call(null,out);
var state_35630__$1 = state_35630;
var statearr_35643_35666 = state_35630__$1;
(statearr_35643_35666[(2)] = inst_35624);

(statearr_35643_35666[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35631 === (10))){
var inst_35622 = (state_35630[(2)]);
var state_35630__$1 = state_35630;
var statearr_35644_35667 = state_35630__$1;
(statearr_35644_35667[(2)] = inst_35622);

(statearr_35644_35667[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35631 === (8))){
var inst_35602 = (state_35630[(10)]);
var inst_35610 = (state_35630[(7)]);
var inst_35609 = (state_35630[(8)]);
var inst_35611 = (state_35630[(9)]);
var inst_35614 = (function (){var cs = inst_35602;
var vec__35607 = inst_35609;
var v = inst_35610;
var c = inst_35611;
return ((function (cs,vec__35607,v,c,inst_35602,inst_35610,inst_35609,inst_35611,state_val_35631,c__19778__auto___35658,out){
return (function (p1__35597_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__35597_SHARP_);
});
;})(cs,vec__35607,v,c,inst_35602,inst_35610,inst_35609,inst_35611,state_val_35631,c__19778__auto___35658,out))
})();
var inst_35615 = cljs.core.filterv.call(null,inst_35614,inst_35602);
var inst_35602__$1 = inst_35615;
var state_35630__$1 = (function (){var statearr_35645 = state_35630;
(statearr_35645[(10)] = inst_35602__$1);

return statearr_35645;
})();
var statearr_35646_35668 = state_35630__$1;
(statearr_35646_35668[(2)] = null);

(statearr_35646_35668[(1)] = (2));


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
});})(c__19778__auto___35658,out))
;
return ((function (switch__19713__auto__,c__19778__auto___35658,out){
return (function() {
var cljs$core$async$state_machine__19714__auto__ = null;
var cljs$core$async$state_machine__19714__auto____0 = (function (){
var statearr_35650 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35650[(0)] = cljs$core$async$state_machine__19714__auto__);

(statearr_35650[(1)] = (1));

return statearr_35650;
});
var cljs$core$async$state_machine__19714__auto____1 = (function (state_35630){
while(true){
var ret_value__19715__auto__ = (function (){try{while(true){
var result__19716__auto__ = switch__19713__auto__.call(null,state_35630);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19716__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19716__auto__;
}
break;
}
}catch (e35651){if((e35651 instanceof Object)){
var ex__19717__auto__ = e35651;
var statearr_35652_35669 = state_35630;
(statearr_35652_35669[(5)] = ex__19717__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35630);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35651;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35670 = state_35630;
state_35630 = G__35670;
continue;
} else {
return ret_value__19715__auto__;
}
break;
}
});
cljs$core$async$state_machine__19714__auto__ = function(state_35630){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19714__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19714__auto____1.call(this,state_35630);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19714__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19714__auto____0;
cljs$core$async$state_machine__19714__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19714__auto____1;
return cljs$core$async$state_machine__19714__auto__;
})()
;})(switch__19713__auto__,c__19778__auto___35658,out))
})();
var state__19780__auto__ = (function (){var statearr_35653 = f__19779__auto__.call(null);
(statearr_35653[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19778__auto___35658);

return statearr_35653;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19780__auto__);
});})(c__19778__auto___35658,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args35671 = [];
var len__17507__auto___35720 = arguments.length;
var i__17508__auto___35721 = (0);
while(true){
if((i__17508__auto___35721 < len__17507__auto___35720)){
args35671.push((arguments[i__17508__auto___35721]));

var G__35722 = (i__17508__auto___35721 + (1));
i__17508__auto___35721 = G__35722;
continue;
} else {
}
break;
}

var G__35673 = args35671.length;
switch (G__35673) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35671.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19778__auto___35724 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19778__auto___35724,out){
return (function (){
var f__19779__auto__ = (function (){var switch__19713__auto__ = ((function (c__19778__auto___35724,out){
return (function (state_35697){
var state_val_35698 = (state_35697[(1)]);
if((state_val_35698 === (7))){
var inst_35679 = (state_35697[(7)]);
var inst_35679__$1 = (state_35697[(2)]);
var inst_35680 = (inst_35679__$1 == null);
var inst_35681 = cljs.core.not.call(null,inst_35680);
var state_35697__$1 = (function (){var statearr_35699 = state_35697;
(statearr_35699[(7)] = inst_35679__$1);

return statearr_35699;
})();
if(inst_35681){
var statearr_35700_35725 = state_35697__$1;
(statearr_35700_35725[(1)] = (8));

} else {
var statearr_35701_35726 = state_35697__$1;
(statearr_35701_35726[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35698 === (1))){
var inst_35674 = (0);
var state_35697__$1 = (function (){var statearr_35702 = state_35697;
(statearr_35702[(8)] = inst_35674);

return statearr_35702;
})();
var statearr_35703_35727 = state_35697__$1;
(statearr_35703_35727[(2)] = null);

(statearr_35703_35727[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35698 === (4))){
var state_35697__$1 = state_35697;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35697__$1,(7),ch);
} else {
if((state_val_35698 === (6))){
var inst_35692 = (state_35697[(2)]);
var state_35697__$1 = state_35697;
var statearr_35704_35728 = state_35697__$1;
(statearr_35704_35728[(2)] = inst_35692);

(statearr_35704_35728[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35698 === (3))){
var inst_35694 = (state_35697[(2)]);
var inst_35695 = cljs.core.async.close_BANG_.call(null,out);
var state_35697__$1 = (function (){var statearr_35705 = state_35697;
(statearr_35705[(9)] = inst_35694);

return statearr_35705;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35697__$1,inst_35695);
} else {
if((state_val_35698 === (2))){
var inst_35674 = (state_35697[(8)]);
var inst_35676 = (inst_35674 < n);
var state_35697__$1 = state_35697;
if(cljs.core.truth_(inst_35676)){
var statearr_35706_35729 = state_35697__$1;
(statearr_35706_35729[(1)] = (4));

} else {
var statearr_35707_35730 = state_35697__$1;
(statearr_35707_35730[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35698 === (11))){
var inst_35674 = (state_35697[(8)]);
var inst_35684 = (state_35697[(2)]);
var inst_35685 = (inst_35674 + (1));
var inst_35674__$1 = inst_35685;
var state_35697__$1 = (function (){var statearr_35708 = state_35697;
(statearr_35708[(10)] = inst_35684);

(statearr_35708[(8)] = inst_35674__$1);

return statearr_35708;
})();
var statearr_35709_35731 = state_35697__$1;
(statearr_35709_35731[(2)] = null);

(statearr_35709_35731[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35698 === (9))){
var state_35697__$1 = state_35697;
var statearr_35710_35732 = state_35697__$1;
(statearr_35710_35732[(2)] = null);

(statearr_35710_35732[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35698 === (5))){
var state_35697__$1 = state_35697;
var statearr_35711_35733 = state_35697__$1;
(statearr_35711_35733[(2)] = null);

(statearr_35711_35733[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35698 === (10))){
var inst_35689 = (state_35697[(2)]);
var state_35697__$1 = state_35697;
var statearr_35712_35734 = state_35697__$1;
(statearr_35712_35734[(2)] = inst_35689);

(statearr_35712_35734[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35698 === (8))){
var inst_35679 = (state_35697[(7)]);
var state_35697__$1 = state_35697;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35697__$1,(11),out,inst_35679);
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
});})(c__19778__auto___35724,out))
;
return ((function (switch__19713__auto__,c__19778__auto___35724,out){
return (function() {
var cljs$core$async$state_machine__19714__auto__ = null;
var cljs$core$async$state_machine__19714__auto____0 = (function (){
var statearr_35716 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35716[(0)] = cljs$core$async$state_machine__19714__auto__);

(statearr_35716[(1)] = (1));

return statearr_35716;
});
var cljs$core$async$state_machine__19714__auto____1 = (function (state_35697){
while(true){
var ret_value__19715__auto__ = (function (){try{while(true){
var result__19716__auto__ = switch__19713__auto__.call(null,state_35697);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19716__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19716__auto__;
}
break;
}
}catch (e35717){if((e35717 instanceof Object)){
var ex__19717__auto__ = e35717;
var statearr_35718_35735 = state_35697;
(statearr_35718_35735[(5)] = ex__19717__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35697);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35717;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35736 = state_35697;
state_35697 = G__35736;
continue;
} else {
return ret_value__19715__auto__;
}
break;
}
});
cljs$core$async$state_machine__19714__auto__ = function(state_35697){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19714__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19714__auto____1.call(this,state_35697);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19714__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19714__auto____0;
cljs$core$async$state_machine__19714__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19714__auto____1;
return cljs$core$async$state_machine__19714__auto__;
})()
;})(switch__19713__auto__,c__19778__auto___35724,out))
})();
var state__19780__auto__ = (function (){var statearr_35719 = f__19779__auto__.call(null);
(statearr_35719[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19778__auto___35724);

return statearr_35719;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19780__auto__);
});})(c__19778__auto___35724,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async35744 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35744 = (function (map_LT_,f,ch,meta35745){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta35745 = meta35745;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async35744.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35746,meta35745__$1){
var self__ = this;
var _35746__$1 = this;
return (new cljs.core.async.t_cljs$core$async35744(self__.map_LT_,self__.f,self__.ch,meta35745__$1));
});

cljs.core.async.t_cljs$core$async35744.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35746){
var self__ = this;
var _35746__$1 = this;
return self__.meta35745;
});

cljs.core.async.t_cljs$core$async35744.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async35744.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35744.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35744.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async35744.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async35747 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35747 = (function (map_LT_,f,ch,meta35745,_,fn1,meta35748){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta35745 = meta35745;
this._ = _;
this.fn1 = fn1;
this.meta35748 = meta35748;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async35747.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_35749,meta35748__$1){
var self__ = this;
var _35749__$1 = this;
return (new cljs.core.async.t_cljs$core$async35747(self__.map_LT_,self__.f,self__.ch,self__.meta35745,self__._,self__.fn1,meta35748__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async35747.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_35749){
var self__ = this;
var _35749__$1 = this;
return self__.meta35748;
});})(___$1))
;

cljs.core.async.t_cljs$core$async35747.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async35747.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async35747.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__35737_SHARP_){
return f1.call(null,(((p1__35737_SHARP_ == null))?null:self__.f.call(null,p1__35737_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async35747.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35745","meta35745",-1120738503,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async35744","cljs.core.async/t_cljs$core$async35744",1117765997,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta35748","meta35748",782963944,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async35747.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35747.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35747";

cljs.core.async.t_cljs$core$async35747.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__17047__auto__,writer__17048__auto__,opt__17049__auto__){
return cljs.core._write.call(null,writer__17048__auto__,"cljs.core.async/t_cljs$core$async35747");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async35747 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async35747(map_LT___$1,f__$1,ch__$1,meta35745__$1,___$2,fn1__$1,meta35748){
return (new cljs.core.async.t_cljs$core$async35747(map_LT___$1,f__$1,ch__$1,meta35745__$1,___$2,fn1__$1,meta35748));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async35747(self__.map_LT_,self__.f,self__.ch,self__.meta35745,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__16437__auto__ = ret;
if(cljs.core.truth_(and__16437__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__16437__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async35744.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async35744.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async35744.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35745","meta35745",-1120738503,null)], null);
});

cljs.core.async.t_cljs$core$async35744.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35744.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35744";

cljs.core.async.t_cljs$core$async35744.cljs$lang$ctorPrWriter = (function (this__17047__auto__,writer__17048__auto__,opt__17049__auto__){
return cljs.core._write.call(null,writer__17048__auto__,"cljs.core.async/t_cljs$core$async35744");
});

cljs.core.async.__GT_t_cljs$core$async35744 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async35744(map_LT___$1,f__$1,ch__$1,meta35745){
return (new cljs.core.async.t_cljs$core$async35744(map_LT___$1,f__$1,ch__$1,meta35745));
});

}

return (new cljs.core.async.t_cljs$core$async35744(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async35753 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35753 = (function (map_GT_,f,ch,meta35754){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta35754 = meta35754;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async35753.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35755,meta35754__$1){
var self__ = this;
var _35755__$1 = this;
return (new cljs.core.async.t_cljs$core$async35753(self__.map_GT_,self__.f,self__.ch,meta35754__$1));
});

cljs.core.async.t_cljs$core$async35753.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35755){
var self__ = this;
var _35755__$1 = this;
return self__.meta35754;
});

cljs.core.async.t_cljs$core$async35753.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async35753.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35753.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async35753.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async35753.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async35753.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async35753.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35754","meta35754",1399266081,null)], null);
});

cljs.core.async.t_cljs$core$async35753.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35753.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35753";

cljs.core.async.t_cljs$core$async35753.cljs$lang$ctorPrWriter = (function (this__17047__auto__,writer__17048__auto__,opt__17049__auto__){
return cljs.core._write.call(null,writer__17048__auto__,"cljs.core.async/t_cljs$core$async35753");
});

cljs.core.async.__GT_t_cljs$core$async35753 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async35753(map_GT___$1,f__$1,ch__$1,meta35754){
return (new cljs.core.async.t_cljs$core$async35753(map_GT___$1,f__$1,ch__$1,meta35754));
});

}

return (new cljs.core.async.t_cljs$core$async35753(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async35759 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35759 = (function (filter_GT_,p,ch,meta35760){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta35760 = meta35760;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async35759.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35761,meta35760__$1){
var self__ = this;
var _35761__$1 = this;
return (new cljs.core.async.t_cljs$core$async35759(self__.filter_GT_,self__.p,self__.ch,meta35760__$1));
});

cljs.core.async.t_cljs$core$async35759.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35761){
var self__ = this;
var _35761__$1 = this;
return self__.meta35760;
});

cljs.core.async.t_cljs$core$async35759.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async35759.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35759.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35759.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async35759.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async35759.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async35759.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async35759.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35760","meta35760",286901401,null)], null);
});

cljs.core.async.t_cljs$core$async35759.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35759.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35759";

cljs.core.async.t_cljs$core$async35759.cljs$lang$ctorPrWriter = (function (this__17047__auto__,writer__17048__auto__,opt__17049__auto__){
return cljs.core._write.call(null,writer__17048__auto__,"cljs.core.async/t_cljs$core$async35759");
});

cljs.core.async.__GT_t_cljs$core$async35759 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async35759(filter_GT___$1,p__$1,ch__$1,meta35760){
return (new cljs.core.async.t_cljs$core$async35759(filter_GT___$1,p__$1,ch__$1,meta35760));
});

}

return (new cljs.core.async.t_cljs$core$async35759(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args35762 = [];
var len__17507__auto___35806 = arguments.length;
var i__17508__auto___35807 = (0);
while(true){
if((i__17508__auto___35807 < len__17507__auto___35806)){
args35762.push((arguments[i__17508__auto___35807]));

var G__35808 = (i__17508__auto___35807 + (1));
i__17508__auto___35807 = G__35808;
continue;
} else {
}
break;
}

var G__35764 = args35762.length;
switch (G__35764) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35762.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19778__auto___35810 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19778__auto___35810,out){
return (function (){
var f__19779__auto__ = (function (){var switch__19713__auto__ = ((function (c__19778__auto___35810,out){
return (function (state_35785){
var state_val_35786 = (state_35785[(1)]);
if((state_val_35786 === (7))){
var inst_35781 = (state_35785[(2)]);
var state_35785__$1 = state_35785;
var statearr_35787_35811 = state_35785__$1;
(statearr_35787_35811[(2)] = inst_35781);

(statearr_35787_35811[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35786 === (1))){
var state_35785__$1 = state_35785;
var statearr_35788_35812 = state_35785__$1;
(statearr_35788_35812[(2)] = null);

(statearr_35788_35812[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35786 === (4))){
var inst_35767 = (state_35785[(7)]);
var inst_35767__$1 = (state_35785[(2)]);
var inst_35768 = (inst_35767__$1 == null);
var state_35785__$1 = (function (){var statearr_35789 = state_35785;
(statearr_35789[(7)] = inst_35767__$1);

return statearr_35789;
})();
if(cljs.core.truth_(inst_35768)){
var statearr_35790_35813 = state_35785__$1;
(statearr_35790_35813[(1)] = (5));

} else {
var statearr_35791_35814 = state_35785__$1;
(statearr_35791_35814[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35786 === (6))){
var inst_35767 = (state_35785[(7)]);
var inst_35772 = p.call(null,inst_35767);
var state_35785__$1 = state_35785;
if(cljs.core.truth_(inst_35772)){
var statearr_35792_35815 = state_35785__$1;
(statearr_35792_35815[(1)] = (8));

} else {
var statearr_35793_35816 = state_35785__$1;
(statearr_35793_35816[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35786 === (3))){
var inst_35783 = (state_35785[(2)]);
var state_35785__$1 = state_35785;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35785__$1,inst_35783);
} else {
if((state_val_35786 === (2))){
var state_35785__$1 = state_35785;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35785__$1,(4),ch);
} else {
if((state_val_35786 === (11))){
var inst_35775 = (state_35785[(2)]);
var state_35785__$1 = state_35785;
var statearr_35794_35817 = state_35785__$1;
(statearr_35794_35817[(2)] = inst_35775);

(statearr_35794_35817[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35786 === (9))){
var state_35785__$1 = state_35785;
var statearr_35795_35818 = state_35785__$1;
(statearr_35795_35818[(2)] = null);

(statearr_35795_35818[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35786 === (5))){
var inst_35770 = cljs.core.async.close_BANG_.call(null,out);
var state_35785__$1 = state_35785;
var statearr_35796_35819 = state_35785__$1;
(statearr_35796_35819[(2)] = inst_35770);

(statearr_35796_35819[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35786 === (10))){
var inst_35778 = (state_35785[(2)]);
var state_35785__$1 = (function (){var statearr_35797 = state_35785;
(statearr_35797[(8)] = inst_35778);

return statearr_35797;
})();
var statearr_35798_35820 = state_35785__$1;
(statearr_35798_35820[(2)] = null);

(statearr_35798_35820[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35786 === (8))){
var inst_35767 = (state_35785[(7)]);
var state_35785__$1 = state_35785;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35785__$1,(11),out,inst_35767);
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
});})(c__19778__auto___35810,out))
;
return ((function (switch__19713__auto__,c__19778__auto___35810,out){
return (function() {
var cljs$core$async$state_machine__19714__auto__ = null;
var cljs$core$async$state_machine__19714__auto____0 = (function (){
var statearr_35802 = [null,null,null,null,null,null,null,null,null];
(statearr_35802[(0)] = cljs$core$async$state_machine__19714__auto__);

(statearr_35802[(1)] = (1));

return statearr_35802;
});
var cljs$core$async$state_machine__19714__auto____1 = (function (state_35785){
while(true){
var ret_value__19715__auto__ = (function (){try{while(true){
var result__19716__auto__ = switch__19713__auto__.call(null,state_35785);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19716__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19716__auto__;
}
break;
}
}catch (e35803){if((e35803 instanceof Object)){
var ex__19717__auto__ = e35803;
var statearr_35804_35821 = state_35785;
(statearr_35804_35821[(5)] = ex__19717__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35785);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35803;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35822 = state_35785;
state_35785 = G__35822;
continue;
} else {
return ret_value__19715__auto__;
}
break;
}
});
cljs$core$async$state_machine__19714__auto__ = function(state_35785){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19714__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19714__auto____1.call(this,state_35785);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19714__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19714__auto____0;
cljs$core$async$state_machine__19714__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19714__auto____1;
return cljs$core$async$state_machine__19714__auto__;
})()
;})(switch__19713__auto__,c__19778__auto___35810,out))
})();
var state__19780__auto__ = (function (){var statearr_35805 = f__19779__auto__.call(null);
(statearr_35805[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19778__auto___35810);

return statearr_35805;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19780__auto__);
});})(c__19778__auto___35810,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args35823 = [];
var len__17507__auto___35826 = arguments.length;
var i__17508__auto___35827 = (0);
while(true){
if((i__17508__auto___35827 < len__17507__auto___35826)){
args35823.push((arguments[i__17508__auto___35827]));

var G__35828 = (i__17508__auto___35827 + (1));
i__17508__auto___35827 = G__35828;
continue;
} else {
}
break;
}

var G__35825 = args35823.length;
switch (G__35825) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35823.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__19778__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19778__auto__){
return (function (){
var f__19779__auto__ = (function (){var switch__19713__auto__ = ((function (c__19778__auto__){
return (function (state_35995){
var state_val_35996 = (state_35995[(1)]);
if((state_val_35996 === (7))){
var inst_35991 = (state_35995[(2)]);
var state_35995__$1 = state_35995;
var statearr_35997_36038 = state_35995__$1;
(statearr_35997_36038[(2)] = inst_35991);

(statearr_35997_36038[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35996 === (20))){
var inst_35961 = (state_35995[(7)]);
var inst_35972 = (state_35995[(2)]);
var inst_35973 = cljs.core.next.call(null,inst_35961);
var inst_35947 = inst_35973;
var inst_35948 = null;
var inst_35949 = (0);
var inst_35950 = (0);
var state_35995__$1 = (function (){var statearr_35998 = state_35995;
(statearr_35998[(8)] = inst_35948);

(statearr_35998[(9)] = inst_35947);

(statearr_35998[(10)] = inst_35972);

(statearr_35998[(11)] = inst_35949);

(statearr_35998[(12)] = inst_35950);

return statearr_35998;
})();
var statearr_35999_36039 = state_35995__$1;
(statearr_35999_36039[(2)] = null);

(statearr_35999_36039[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35996 === (1))){
var state_35995__$1 = state_35995;
var statearr_36000_36040 = state_35995__$1;
(statearr_36000_36040[(2)] = null);

(statearr_36000_36040[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35996 === (4))){
var inst_35936 = (state_35995[(13)]);
var inst_35936__$1 = (state_35995[(2)]);
var inst_35937 = (inst_35936__$1 == null);
var state_35995__$1 = (function (){var statearr_36001 = state_35995;
(statearr_36001[(13)] = inst_35936__$1);

return statearr_36001;
})();
if(cljs.core.truth_(inst_35937)){
var statearr_36002_36041 = state_35995__$1;
(statearr_36002_36041[(1)] = (5));

} else {
var statearr_36003_36042 = state_35995__$1;
(statearr_36003_36042[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35996 === (15))){
var state_35995__$1 = state_35995;
var statearr_36007_36043 = state_35995__$1;
(statearr_36007_36043[(2)] = null);

(statearr_36007_36043[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35996 === (21))){
var state_35995__$1 = state_35995;
var statearr_36008_36044 = state_35995__$1;
(statearr_36008_36044[(2)] = null);

(statearr_36008_36044[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35996 === (13))){
var inst_35948 = (state_35995[(8)]);
var inst_35947 = (state_35995[(9)]);
var inst_35949 = (state_35995[(11)]);
var inst_35950 = (state_35995[(12)]);
var inst_35957 = (state_35995[(2)]);
var inst_35958 = (inst_35950 + (1));
var tmp36004 = inst_35948;
var tmp36005 = inst_35947;
var tmp36006 = inst_35949;
var inst_35947__$1 = tmp36005;
var inst_35948__$1 = tmp36004;
var inst_35949__$1 = tmp36006;
var inst_35950__$1 = inst_35958;
var state_35995__$1 = (function (){var statearr_36009 = state_35995;
(statearr_36009[(8)] = inst_35948__$1);

(statearr_36009[(9)] = inst_35947__$1);

(statearr_36009[(14)] = inst_35957);

(statearr_36009[(11)] = inst_35949__$1);

(statearr_36009[(12)] = inst_35950__$1);

return statearr_36009;
})();
var statearr_36010_36045 = state_35995__$1;
(statearr_36010_36045[(2)] = null);

(statearr_36010_36045[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35996 === (22))){
var state_35995__$1 = state_35995;
var statearr_36011_36046 = state_35995__$1;
(statearr_36011_36046[(2)] = null);

(statearr_36011_36046[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35996 === (6))){
var inst_35936 = (state_35995[(13)]);
var inst_35945 = f.call(null,inst_35936);
var inst_35946 = cljs.core.seq.call(null,inst_35945);
var inst_35947 = inst_35946;
var inst_35948 = null;
var inst_35949 = (0);
var inst_35950 = (0);
var state_35995__$1 = (function (){var statearr_36012 = state_35995;
(statearr_36012[(8)] = inst_35948);

(statearr_36012[(9)] = inst_35947);

(statearr_36012[(11)] = inst_35949);

(statearr_36012[(12)] = inst_35950);

return statearr_36012;
})();
var statearr_36013_36047 = state_35995__$1;
(statearr_36013_36047[(2)] = null);

(statearr_36013_36047[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35996 === (17))){
var inst_35961 = (state_35995[(7)]);
var inst_35965 = cljs.core.chunk_first.call(null,inst_35961);
var inst_35966 = cljs.core.chunk_rest.call(null,inst_35961);
var inst_35967 = cljs.core.count.call(null,inst_35965);
var inst_35947 = inst_35966;
var inst_35948 = inst_35965;
var inst_35949 = inst_35967;
var inst_35950 = (0);
var state_35995__$1 = (function (){var statearr_36014 = state_35995;
(statearr_36014[(8)] = inst_35948);

(statearr_36014[(9)] = inst_35947);

(statearr_36014[(11)] = inst_35949);

(statearr_36014[(12)] = inst_35950);

return statearr_36014;
})();
var statearr_36015_36048 = state_35995__$1;
(statearr_36015_36048[(2)] = null);

(statearr_36015_36048[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35996 === (3))){
var inst_35993 = (state_35995[(2)]);
var state_35995__$1 = state_35995;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35995__$1,inst_35993);
} else {
if((state_val_35996 === (12))){
var inst_35981 = (state_35995[(2)]);
var state_35995__$1 = state_35995;
var statearr_36016_36049 = state_35995__$1;
(statearr_36016_36049[(2)] = inst_35981);

(statearr_36016_36049[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35996 === (2))){
var state_35995__$1 = state_35995;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35995__$1,(4),in$);
} else {
if((state_val_35996 === (23))){
var inst_35989 = (state_35995[(2)]);
var state_35995__$1 = state_35995;
var statearr_36017_36050 = state_35995__$1;
(statearr_36017_36050[(2)] = inst_35989);

(statearr_36017_36050[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35996 === (19))){
var inst_35976 = (state_35995[(2)]);
var state_35995__$1 = state_35995;
var statearr_36018_36051 = state_35995__$1;
(statearr_36018_36051[(2)] = inst_35976);

(statearr_36018_36051[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35996 === (11))){
var inst_35961 = (state_35995[(7)]);
var inst_35947 = (state_35995[(9)]);
var inst_35961__$1 = cljs.core.seq.call(null,inst_35947);
var state_35995__$1 = (function (){var statearr_36019 = state_35995;
(statearr_36019[(7)] = inst_35961__$1);

return statearr_36019;
})();
if(inst_35961__$1){
var statearr_36020_36052 = state_35995__$1;
(statearr_36020_36052[(1)] = (14));

} else {
var statearr_36021_36053 = state_35995__$1;
(statearr_36021_36053[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35996 === (9))){
var inst_35983 = (state_35995[(2)]);
var inst_35984 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_35995__$1 = (function (){var statearr_36022 = state_35995;
(statearr_36022[(15)] = inst_35983);

return statearr_36022;
})();
if(cljs.core.truth_(inst_35984)){
var statearr_36023_36054 = state_35995__$1;
(statearr_36023_36054[(1)] = (21));

} else {
var statearr_36024_36055 = state_35995__$1;
(statearr_36024_36055[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35996 === (5))){
var inst_35939 = cljs.core.async.close_BANG_.call(null,out);
var state_35995__$1 = state_35995;
var statearr_36025_36056 = state_35995__$1;
(statearr_36025_36056[(2)] = inst_35939);

(statearr_36025_36056[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35996 === (14))){
var inst_35961 = (state_35995[(7)]);
var inst_35963 = cljs.core.chunked_seq_QMARK_.call(null,inst_35961);
var state_35995__$1 = state_35995;
if(inst_35963){
var statearr_36026_36057 = state_35995__$1;
(statearr_36026_36057[(1)] = (17));

} else {
var statearr_36027_36058 = state_35995__$1;
(statearr_36027_36058[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35996 === (16))){
var inst_35979 = (state_35995[(2)]);
var state_35995__$1 = state_35995;
var statearr_36028_36059 = state_35995__$1;
(statearr_36028_36059[(2)] = inst_35979);

(statearr_36028_36059[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35996 === (10))){
var inst_35948 = (state_35995[(8)]);
var inst_35950 = (state_35995[(12)]);
var inst_35955 = cljs.core._nth.call(null,inst_35948,inst_35950);
var state_35995__$1 = state_35995;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35995__$1,(13),out,inst_35955);
} else {
if((state_val_35996 === (18))){
var inst_35961 = (state_35995[(7)]);
var inst_35970 = cljs.core.first.call(null,inst_35961);
var state_35995__$1 = state_35995;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35995__$1,(20),out,inst_35970);
} else {
if((state_val_35996 === (8))){
var inst_35949 = (state_35995[(11)]);
var inst_35950 = (state_35995[(12)]);
var inst_35952 = (inst_35950 < inst_35949);
var inst_35953 = inst_35952;
var state_35995__$1 = state_35995;
if(cljs.core.truth_(inst_35953)){
var statearr_36029_36060 = state_35995__$1;
(statearr_36029_36060[(1)] = (10));

} else {
var statearr_36030_36061 = state_35995__$1;
(statearr_36030_36061[(1)] = (11));

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
}
}
}
}
}
}
});})(c__19778__auto__))
;
return ((function (switch__19713__auto__,c__19778__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__19714__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__19714__auto____0 = (function (){
var statearr_36034 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36034[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__19714__auto__);

(statearr_36034[(1)] = (1));

return statearr_36034;
});
var cljs$core$async$mapcat_STAR__$_state_machine__19714__auto____1 = (function (state_35995){
while(true){
var ret_value__19715__auto__ = (function (){try{while(true){
var result__19716__auto__ = switch__19713__auto__.call(null,state_35995);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19716__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19716__auto__;
}
break;
}
}catch (e36035){if((e36035 instanceof Object)){
var ex__19717__auto__ = e36035;
var statearr_36036_36062 = state_35995;
(statearr_36036_36062[(5)] = ex__19717__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35995);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36035;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36063 = state_35995;
state_35995 = G__36063;
continue;
} else {
return ret_value__19715__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__19714__auto__ = function(state_35995){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__19714__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__19714__auto____1.call(this,state_35995);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__19714__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__19714__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__19714__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__19714__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__19714__auto__;
})()
;})(switch__19713__auto__,c__19778__auto__))
})();
var state__19780__auto__ = (function (){var statearr_36037 = f__19779__auto__.call(null);
(statearr_36037[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19778__auto__);

return statearr_36037;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19780__auto__);
});})(c__19778__auto__))
);

return c__19778__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args36064 = [];
var len__17507__auto___36067 = arguments.length;
var i__17508__auto___36068 = (0);
while(true){
if((i__17508__auto___36068 < len__17507__auto___36067)){
args36064.push((arguments[i__17508__auto___36068]));

var G__36069 = (i__17508__auto___36068 + (1));
i__17508__auto___36068 = G__36069;
continue;
} else {
}
break;
}

var G__36066 = args36064.length;
switch (G__36066) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36064.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args36071 = [];
var len__17507__auto___36074 = arguments.length;
var i__17508__auto___36075 = (0);
while(true){
if((i__17508__auto___36075 < len__17507__auto___36074)){
args36071.push((arguments[i__17508__auto___36075]));

var G__36076 = (i__17508__auto___36075 + (1));
i__17508__auto___36075 = G__36076;
continue;
} else {
}
break;
}

var G__36073 = args36071.length;
switch (G__36073) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36071.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args36078 = [];
var len__17507__auto___36129 = arguments.length;
var i__17508__auto___36130 = (0);
while(true){
if((i__17508__auto___36130 < len__17507__auto___36129)){
args36078.push((arguments[i__17508__auto___36130]));

var G__36131 = (i__17508__auto___36130 + (1));
i__17508__auto___36130 = G__36131;
continue;
} else {
}
break;
}

var G__36080 = args36078.length;
switch (G__36080) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36078.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19778__auto___36133 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19778__auto___36133,out){
return (function (){
var f__19779__auto__ = (function (){var switch__19713__auto__ = ((function (c__19778__auto___36133,out){
return (function (state_36104){
var state_val_36105 = (state_36104[(1)]);
if((state_val_36105 === (7))){
var inst_36099 = (state_36104[(2)]);
var state_36104__$1 = state_36104;
var statearr_36106_36134 = state_36104__$1;
(statearr_36106_36134[(2)] = inst_36099);

(statearr_36106_36134[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36105 === (1))){
var inst_36081 = null;
var state_36104__$1 = (function (){var statearr_36107 = state_36104;
(statearr_36107[(7)] = inst_36081);

return statearr_36107;
})();
var statearr_36108_36135 = state_36104__$1;
(statearr_36108_36135[(2)] = null);

(statearr_36108_36135[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36105 === (4))){
var inst_36084 = (state_36104[(8)]);
var inst_36084__$1 = (state_36104[(2)]);
var inst_36085 = (inst_36084__$1 == null);
var inst_36086 = cljs.core.not.call(null,inst_36085);
var state_36104__$1 = (function (){var statearr_36109 = state_36104;
(statearr_36109[(8)] = inst_36084__$1);

return statearr_36109;
})();
if(inst_36086){
var statearr_36110_36136 = state_36104__$1;
(statearr_36110_36136[(1)] = (5));

} else {
var statearr_36111_36137 = state_36104__$1;
(statearr_36111_36137[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36105 === (6))){
var state_36104__$1 = state_36104;
var statearr_36112_36138 = state_36104__$1;
(statearr_36112_36138[(2)] = null);

(statearr_36112_36138[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36105 === (3))){
var inst_36101 = (state_36104[(2)]);
var inst_36102 = cljs.core.async.close_BANG_.call(null,out);
var state_36104__$1 = (function (){var statearr_36113 = state_36104;
(statearr_36113[(9)] = inst_36101);

return statearr_36113;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36104__$1,inst_36102);
} else {
if((state_val_36105 === (2))){
var state_36104__$1 = state_36104;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36104__$1,(4),ch);
} else {
if((state_val_36105 === (11))){
var inst_36084 = (state_36104[(8)]);
var inst_36093 = (state_36104[(2)]);
var inst_36081 = inst_36084;
var state_36104__$1 = (function (){var statearr_36114 = state_36104;
(statearr_36114[(7)] = inst_36081);

(statearr_36114[(10)] = inst_36093);

return statearr_36114;
})();
var statearr_36115_36139 = state_36104__$1;
(statearr_36115_36139[(2)] = null);

(statearr_36115_36139[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36105 === (9))){
var inst_36084 = (state_36104[(8)]);
var state_36104__$1 = state_36104;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36104__$1,(11),out,inst_36084);
} else {
if((state_val_36105 === (5))){
var inst_36084 = (state_36104[(8)]);
var inst_36081 = (state_36104[(7)]);
var inst_36088 = cljs.core._EQ_.call(null,inst_36084,inst_36081);
var state_36104__$1 = state_36104;
if(inst_36088){
var statearr_36117_36140 = state_36104__$1;
(statearr_36117_36140[(1)] = (8));

} else {
var statearr_36118_36141 = state_36104__$1;
(statearr_36118_36141[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36105 === (10))){
var inst_36096 = (state_36104[(2)]);
var state_36104__$1 = state_36104;
var statearr_36119_36142 = state_36104__$1;
(statearr_36119_36142[(2)] = inst_36096);

(statearr_36119_36142[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36105 === (8))){
var inst_36081 = (state_36104[(7)]);
var tmp36116 = inst_36081;
var inst_36081__$1 = tmp36116;
var state_36104__$1 = (function (){var statearr_36120 = state_36104;
(statearr_36120[(7)] = inst_36081__$1);

return statearr_36120;
})();
var statearr_36121_36143 = state_36104__$1;
(statearr_36121_36143[(2)] = null);

(statearr_36121_36143[(1)] = (2));


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
});})(c__19778__auto___36133,out))
;
return ((function (switch__19713__auto__,c__19778__auto___36133,out){
return (function() {
var cljs$core$async$state_machine__19714__auto__ = null;
var cljs$core$async$state_machine__19714__auto____0 = (function (){
var statearr_36125 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36125[(0)] = cljs$core$async$state_machine__19714__auto__);

(statearr_36125[(1)] = (1));

return statearr_36125;
});
var cljs$core$async$state_machine__19714__auto____1 = (function (state_36104){
while(true){
var ret_value__19715__auto__ = (function (){try{while(true){
var result__19716__auto__ = switch__19713__auto__.call(null,state_36104);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19716__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19716__auto__;
}
break;
}
}catch (e36126){if((e36126 instanceof Object)){
var ex__19717__auto__ = e36126;
var statearr_36127_36144 = state_36104;
(statearr_36127_36144[(5)] = ex__19717__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36104);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36126;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36145 = state_36104;
state_36104 = G__36145;
continue;
} else {
return ret_value__19715__auto__;
}
break;
}
});
cljs$core$async$state_machine__19714__auto__ = function(state_36104){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19714__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19714__auto____1.call(this,state_36104);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19714__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19714__auto____0;
cljs$core$async$state_machine__19714__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19714__auto____1;
return cljs$core$async$state_machine__19714__auto__;
})()
;})(switch__19713__auto__,c__19778__auto___36133,out))
})();
var state__19780__auto__ = (function (){var statearr_36128 = f__19779__auto__.call(null);
(statearr_36128[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19778__auto___36133);

return statearr_36128;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19780__auto__);
});})(c__19778__auto___36133,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args36146 = [];
var len__17507__auto___36216 = arguments.length;
var i__17508__auto___36217 = (0);
while(true){
if((i__17508__auto___36217 < len__17507__auto___36216)){
args36146.push((arguments[i__17508__auto___36217]));

var G__36218 = (i__17508__auto___36217 + (1));
i__17508__auto___36217 = G__36218;
continue;
} else {
}
break;
}

var G__36148 = args36146.length;
switch (G__36148) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36146.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19778__auto___36220 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19778__auto___36220,out){
return (function (){
var f__19779__auto__ = (function (){var switch__19713__auto__ = ((function (c__19778__auto___36220,out){
return (function (state_36186){
var state_val_36187 = (state_36186[(1)]);
if((state_val_36187 === (7))){
var inst_36182 = (state_36186[(2)]);
var state_36186__$1 = state_36186;
var statearr_36188_36221 = state_36186__$1;
(statearr_36188_36221[(2)] = inst_36182);

(statearr_36188_36221[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36187 === (1))){
var inst_36149 = (new Array(n));
var inst_36150 = inst_36149;
var inst_36151 = (0);
var state_36186__$1 = (function (){var statearr_36189 = state_36186;
(statearr_36189[(7)] = inst_36150);

(statearr_36189[(8)] = inst_36151);

return statearr_36189;
})();
var statearr_36190_36222 = state_36186__$1;
(statearr_36190_36222[(2)] = null);

(statearr_36190_36222[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36187 === (4))){
var inst_36154 = (state_36186[(9)]);
var inst_36154__$1 = (state_36186[(2)]);
var inst_36155 = (inst_36154__$1 == null);
var inst_36156 = cljs.core.not.call(null,inst_36155);
var state_36186__$1 = (function (){var statearr_36191 = state_36186;
(statearr_36191[(9)] = inst_36154__$1);

return statearr_36191;
})();
if(inst_36156){
var statearr_36192_36223 = state_36186__$1;
(statearr_36192_36223[(1)] = (5));

} else {
var statearr_36193_36224 = state_36186__$1;
(statearr_36193_36224[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36187 === (15))){
var inst_36176 = (state_36186[(2)]);
var state_36186__$1 = state_36186;
var statearr_36194_36225 = state_36186__$1;
(statearr_36194_36225[(2)] = inst_36176);

(statearr_36194_36225[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36187 === (13))){
var state_36186__$1 = state_36186;
var statearr_36195_36226 = state_36186__$1;
(statearr_36195_36226[(2)] = null);

(statearr_36195_36226[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36187 === (6))){
var inst_36151 = (state_36186[(8)]);
var inst_36172 = (inst_36151 > (0));
var state_36186__$1 = state_36186;
if(cljs.core.truth_(inst_36172)){
var statearr_36196_36227 = state_36186__$1;
(statearr_36196_36227[(1)] = (12));

} else {
var statearr_36197_36228 = state_36186__$1;
(statearr_36197_36228[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36187 === (3))){
var inst_36184 = (state_36186[(2)]);
var state_36186__$1 = state_36186;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36186__$1,inst_36184);
} else {
if((state_val_36187 === (12))){
var inst_36150 = (state_36186[(7)]);
var inst_36174 = cljs.core.vec.call(null,inst_36150);
var state_36186__$1 = state_36186;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36186__$1,(15),out,inst_36174);
} else {
if((state_val_36187 === (2))){
var state_36186__$1 = state_36186;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36186__$1,(4),ch);
} else {
if((state_val_36187 === (11))){
var inst_36166 = (state_36186[(2)]);
var inst_36167 = (new Array(n));
var inst_36150 = inst_36167;
var inst_36151 = (0);
var state_36186__$1 = (function (){var statearr_36198 = state_36186;
(statearr_36198[(10)] = inst_36166);

(statearr_36198[(7)] = inst_36150);

(statearr_36198[(8)] = inst_36151);

return statearr_36198;
})();
var statearr_36199_36229 = state_36186__$1;
(statearr_36199_36229[(2)] = null);

(statearr_36199_36229[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36187 === (9))){
var inst_36150 = (state_36186[(7)]);
var inst_36164 = cljs.core.vec.call(null,inst_36150);
var state_36186__$1 = state_36186;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36186__$1,(11),out,inst_36164);
} else {
if((state_val_36187 === (5))){
var inst_36150 = (state_36186[(7)]);
var inst_36159 = (state_36186[(11)]);
var inst_36151 = (state_36186[(8)]);
var inst_36154 = (state_36186[(9)]);
var inst_36158 = (inst_36150[inst_36151] = inst_36154);
var inst_36159__$1 = (inst_36151 + (1));
var inst_36160 = (inst_36159__$1 < n);
var state_36186__$1 = (function (){var statearr_36200 = state_36186;
(statearr_36200[(12)] = inst_36158);

(statearr_36200[(11)] = inst_36159__$1);

return statearr_36200;
})();
if(cljs.core.truth_(inst_36160)){
var statearr_36201_36230 = state_36186__$1;
(statearr_36201_36230[(1)] = (8));

} else {
var statearr_36202_36231 = state_36186__$1;
(statearr_36202_36231[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36187 === (14))){
var inst_36179 = (state_36186[(2)]);
var inst_36180 = cljs.core.async.close_BANG_.call(null,out);
var state_36186__$1 = (function (){var statearr_36204 = state_36186;
(statearr_36204[(13)] = inst_36179);

return statearr_36204;
})();
var statearr_36205_36232 = state_36186__$1;
(statearr_36205_36232[(2)] = inst_36180);

(statearr_36205_36232[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36187 === (10))){
var inst_36170 = (state_36186[(2)]);
var state_36186__$1 = state_36186;
var statearr_36206_36233 = state_36186__$1;
(statearr_36206_36233[(2)] = inst_36170);

(statearr_36206_36233[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36187 === (8))){
var inst_36150 = (state_36186[(7)]);
var inst_36159 = (state_36186[(11)]);
var tmp36203 = inst_36150;
var inst_36150__$1 = tmp36203;
var inst_36151 = inst_36159;
var state_36186__$1 = (function (){var statearr_36207 = state_36186;
(statearr_36207[(7)] = inst_36150__$1);

(statearr_36207[(8)] = inst_36151);

return statearr_36207;
})();
var statearr_36208_36234 = state_36186__$1;
(statearr_36208_36234[(2)] = null);

(statearr_36208_36234[(1)] = (2));


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
});})(c__19778__auto___36220,out))
;
return ((function (switch__19713__auto__,c__19778__auto___36220,out){
return (function() {
var cljs$core$async$state_machine__19714__auto__ = null;
var cljs$core$async$state_machine__19714__auto____0 = (function (){
var statearr_36212 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36212[(0)] = cljs$core$async$state_machine__19714__auto__);

(statearr_36212[(1)] = (1));

return statearr_36212;
});
var cljs$core$async$state_machine__19714__auto____1 = (function (state_36186){
while(true){
var ret_value__19715__auto__ = (function (){try{while(true){
var result__19716__auto__ = switch__19713__auto__.call(null,state_36186);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19716__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19716__auto__;
}
break;
}
}catch (e36213){if((e36213 instanceof Object)){
var ex__19717__auto__ = e36213;
var statearr_36214_36235 = state_36186;
(statearr_36214_36235[(5)] = ex__19717__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36186);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36213;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36236 = state_36186;
state_36186 = G__36236;
continue;
} else {
return ret_value__19715__auto__;
}
break;
}
});
cljs$core$async$state_machine__19714__auto__ = function(state_36186){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19714__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19714__auto____1.call(this,state_36186);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19714__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19714__auto____0;
cljs$core$async$state_machine__19714__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19714__auto____1;
return cljs$core$async$state_machine__19714__auto__;
})()
;})(switch__19713__auto__,c__19778__auto___36220,out))
})();
var state__19780__auto__ = (function (){var statearr_36215 = f__19779__auto__.call(null);
(statearr_36215[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19778__auto___36220);

return statearr_36215;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19780__auto__);
});})(c__19778__auto___36220,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args36237 = [];
var len__17507__auto___36311 = arguments.length;
var i__17508__auto___36312 = (0);
while(true){
if((i__17508__auto___36312 < len__17507__auto___36311)){
args36237.push((arguments[i__17508__auto___36312]));

var G__36313 = (i__17508__auto___36312 + (1));
i__17508__auto___36312 = G__36313;
continue;
} else {
}
break;
}

var G__36239 = args36237.length;
switch (G__36239) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36237.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19778__auto___36315 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19778__auto___36315,out){
return (function (){
var f__19779__auto__ = (function (){var switch__19713__auto__ = ((function (c__19778__auto___36315,out){
return (function (state_36281){
var state_val_36282 = (state_36281[(1)]);
if((state_val_36282 === (7))){
var inst_36277 = (state_36281[(2)]);
var state_36281__$1 = state_36281;
var statearr_36283_36316 = state_36281__$1;
(statearr_36283_36316[(2)] = inst_36277);

(statearr_36283_36316[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36282 === (1))){
var inst_36240 = [];
var inst_36241 = inst_36240;
var inst_36242 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_36281__$1 = (function (){var statearr_36284 = state_36281;
(statearr_36284[(7)] = inst_36241);

(statearr_36284[(8)] = inst_36242);

return statearr_36284;
})();
var statearr_36285_36317 = state_36281__$1;
(statearr_36285_36317[(2)] = null);

(statearr_36285_36317[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36282 === (4))){
var inst_36245 = (state_36281[(9)]);
var inst_36245__$1 = (state_36281[(2)]);
var inst_36246 = (inst_36245__$1 == null);
var inst_36247 = cljs.core.not.call(null,inst_36246);
var state_36281__$1 = (function (){var statearr_36286 = state_36281;
(statearr_36286[(9)] = inst_36245__$1);

return statearr_36286;
})();
if(inst_36247){
var statearr_36287_36318 = state_36281__$1;
(statearr_36287_36318[(1)] = (5));

} else {
var statearr_36288_36319 = state_36281__$1;
(statearr_36288_36319[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36282 === (15))){
var inst_36271 = (state_36281[(2)]);
var state_36281__$1 = state_36281;
var statearr_36289_36320 = state_36281__$1;
(statearr_36289_36320[(2)] = inst_36271);

(statearr_36289_36320[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36282 === (13))){
var state_36281__$1 = state_36281;
var statearr_36290_36321 = state_36281__$1;
(statearr_36290_36321[(2)] = null);

(statearr_36290_36321[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36282 === (6))){
var inst_36241 = (state_36281[(7)]);
var inst_36266 = inst_36241.length;
var inst_36267 = (inst_36266 > (0));
var state_36281__$1 = state_36281;
if(cljs.core.truth_(inst_36267)){
var statearr_36291_36322 = state_36281__$1;
(statearr_36291_36322[(1)] = (12));

} else {
var statearr_36292_36323 = state_36281__$1;
(statearr_36292_36323[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36282 === (3))){
var inst_36279 = (state_36281[(2)]);
var state_36281__$1 = state_36281;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36281__$1,inst_36279);
} else {
if((state_val_36282 === (12))){
var inst_36241 = (state_36281[(7)]);
var inst_36269 = cljs.core.vec.call(null,inst_36241);
var state_36281__$1 = state_36281;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36281__$1,(15),out,inst_36269);
} else {
if((state_val_36282 === (2))){
var state_36281__$1 = state_36281;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36281__$1,(4),ch);
} else {
if((state_val_36282 === (11))){
var inst_36249 = (state_36281[(10)]);
var inst_36245 = (state_36281[(9)]);
var inst_36259 = (state_36281[(2)]);
var inst_36260 = [];
var inst_36261 = inst_36260.push(inst_36245);
var inst_36241 = inst_36260;
var inst_36242 = inst_36249;
var state_36281__$1 = (function (){var statearr_36293 = state_36281;
(statearr_36293[(11)] = inst_36261);

(statearr_36293[(7)] = inst_36241);

(statearr_36293[(12)] = inst_36259);

(statearr_36293[(8)] = inst_36242);

return statearr_36293;
})();
var statearr_36294_36324 = state_36281__$1;
(statearr_36294_36324[(2)] = null);

(statearr_36294_36324[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36282 === (9))){
var inst_36241 = (state_36281[(7)]);
var inst_36257 = cljs.core.vec.call(null,inst_36241);
var state_36281__$1 = state_36281;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36281__$1,(11),out,inst_36257);
} else {
if((state_val_36282 === (5))){
var inst_36249 = (state_36281[(10)]);
var inst_36245 = (state_36281[(9)]);
var inst_36242 = (state_36281[(8)]);
var inst_36249__$1 = f.call(null,inst_36245);
var inst_36250 = cljs.core._EQ_.call(null,inst_36249__$1,inst_36242);
var inst_36251 = cljs.core.keyword_identical_QMARK_.call(null,inst_36242,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_36252 = (inst_36250) || (inst_36251);
var state_36281__$1 = (function (){var statearr_36295 = state_36281;
(statearr_36295[(10)] = inst_36249__$1);

return statearr_36295;
})();
if(cljs.core.truth_(inst_36252)){
var statearr_36296_36325 = state_36281__$1;
(statearr_36296_36325[(1)] = (8));

} else {
var statearr_36297_36326 = state_36281__$1;
(statearr_36297_36326[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36282 === (14))){
var inst_36274 = (state_36281[(2)]);
var inst_36275 = cljs.core.async.close_BANG_.call(null,out);
var state_36281__$1 = (function (){var statearr_36299 = state_36281;
(statearr_36299[(13)] = inst_36274);

return statearr_36299;
})();
var statearr_36300_36327 = state_36281__$1;
(statearr_36300_36327[(2)] = inst_36275);

(statearr_36300_36327[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36282 === (10))){
var inst_36264 = (state_36281[(2)]);
var state_36281__$1 = state_36281;
var statearr_36301_36328 = state_36281__$1;
(statearr_36301_36328[(2)] = inst_36264);

(statearr_36301_36328[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36282 === (8))){
var inst_36249 = (state_36281[(10)]);
var inst_36241 = (state_36281[(7)]);
var inst_36245 = (state_36281[(9)]);
var inst_36254 = inst_36241.push(inst_36245);
var tmp36298 = inst_36241;
var inst_36241__$1 = tmp36298;
var inst_36242 = inst_36249;
var state_36281__$1 = (function (){var statearr_36302 = state_36281;
(statearr_36302[(14)] = inst_36254);

(statearr_36302[(7)] = inst_36241__$1);

(statearr_36302[(8)] = inst_36242);

return statearr_36302;
})();
var statearr_36303_36329 = state_36281__$1;
(statearr_36303_36329[(2)] = null);

(statearr_36303_36329[(1)] = (2));


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
});})(c__19778__auto___36315,out))
;
return ((function (switch__19713__auto__,c__19778__auto___36315,out){
return (function() {
var cljs$core$async$state_machine__19714__auto__ = null;
var cljs$core$async$state_machine__19714__auto____0 = (function (){
var statearr_36307 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36307[(0)] = cljs$core$async$state_machine__19714__auto__);

(statearr_36307[(1)] = (1));

return statearr_36307;
});
var cljs$core$async$state_machine__19714__auto____1 = (function (state_36281){
while(true){
var ret_value__19715__auto__ = (function (){try{while(true){
var result__19716__auto__ = switch__19713__auto__.call(null,state_36281);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19716__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19716__auto__;
}
break;
}
}catch (e36308){if((e36308 instanceof Object)){
var ex__19717__auto__ = e36308;
var statearr_36309_36330 = state_36281;
(statearr_36309_36330[(5)] = ex__19717__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36281);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36308;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36331 = state_36281;
state_36281 = G__36331;
continue;
} else {
return ret_value__19715__auto__;
}
break;
}
});
cljs$core$async$state_machine__19714__auto__ = function(state_36281){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19714__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19714__auto____1.call(this,state_36281);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19714__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19714__auto____0;
cljs$core$async$state_machine__19714__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19714__auto____1;
return cljs$core$async$state_machine__19714__auto__;
})()
;})(switch__19713__auto__,c__19778__auto___36315,out))
})();
var state__19780__auto__ = (function (){var statearr_36310 = f__19779__auto__.call(null);
(statearr_36310[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19778__auto___36315);

return statearr_36310;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19780__auto__);
});})(c__19778__auto___36315,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map