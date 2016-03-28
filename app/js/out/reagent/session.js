// Compiled by ClojureScript 1.7.122 {:elide-asserts true}
goog.provide('reagent.session');
goog.require('cljs.core');
goog.require('reagent.core');
reagent.session.state = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
 * Get the key's value from the session, returns nil if it doesn't exist.
 */
reagent.session.get = (function reagent$session$get(var_args){
var args__17514__auto__ = [];
var len__17507__auto___19714 = arguments.length;
var i__17508__auto___19715 = (0);
while(true){
if((i__17508__auto___19715 < len__17507__auto___19714)){
args__17514__auto__.push((arguments[i__17508__auto___19715]));

var G__19716 = (i__17508__auto___19715 + (1));
i__17508__auto___19715 = G__19716;
continue;
} else {
}
break;
}

var argseq__17515__auto__ = ((((1) < args__17514__auto__.length))?(new cljs.core.IndexedSeq(args__17514__auto__.slice((1)),(0))):null);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17515__auto__);
});

reagent.session.get.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__19712){
var vec__19713 = p__19712;
var default$ = cljs.core.nth.call(null,vec__19713,(0),null);
return cljs.core.get.call(null,cljs.core.deref.call(null,reagent.session.state),k,default$);
});

reagent.session.get.cljs$lang$maxFixedArity = (1);

reagent.session.get.cljs$lang$applyTo = (function (seq19710){
var G__19711 = cljs.core.first.call(null,seq19710);
var seq19710__$1 = cljs.core.next.call(null,seq19710);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic(G__19711,seq19710__$1);
});
reagent.session.put_BANG_ = (function reagent$session$put_BANG_(k,v){
return cljs.core.swap_BANG_.call(null,reagent.session.state,cljs.core.assoc,k,v);
});
/**
 * Gets the value at the path specified by the vector ks from the session,
 *   returns nil if it doesn't exist.
 */
reagent.session.get_in = (function reagent$session$get_in(var_args){
var args__17514__auto__ = [];
var len__17507__auto___19721 = arguments.length;
var i__17508__auto___19722 = (0);
while(true){
if((i__17508__auto___19722 < len__17507__auto___19721)){
args__17514__auto__.push((arguments[i__17508__auto___19722]));

var G__19723 = (i__17508__auto___19722 + (1));
i__17508__auto___19722 = G__19723;
continue;
} else {
}
break;
}

var argseq__17515__auto__ = ((((1) < args__17514__auto__.length))?(new cljs.core.IndexedSeq(args__17514__auto__.slice((1)),(0))):null);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17515__auto__);
});

reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__19719){
var vec__19720 = p__19719;
var default$ = cljs.core.nth.call(null,vec__19720,(0),null);
return cljs.core.get_in.call(null,cljs.core.deref.call(null,reagent.session.state),ks,default$);
});

reagent.session.get_in.cljs$lang$maxFixedArity = (1);

reagent.session.get_in.cljs$lang$applyTo = (function (seq19717){
var G__19718 = cljs.core.first.call(null,seq19717);
var seq19717__$1 = cljs.core.next.call(null,seq19717);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic(G__19718,seq19717__$1);
});
/**
 * Replace the current session's value with the result of executing f with
 *   the current value and args.
 */
reagent.session.swap_BANG_ = (function reagent$session$swap_BANG_(var_args){
var args__17514__auto__ = [];
var len__17507__auto___19726 = arguments.length;
var i__17508__auto___19727 = (0);
while(true){
if((i__17508__auto___19727 < len__17507__auto___19726)){
args__17514__auto__.push((arguments[i__17508__auto___19727]));

var G__19728 = (i__17508__auto___19727 + (1));
i__17508__auto___19727 = G__19728;
continue;
} else {
}
break;
}

var argseq__17515__auto__ = ((((1) < args__17514__auto__.length))?(new cljs.core.IndexedSeq(args__17514__auto__.slice((1)),(0))):null);
return reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17515__auto__);
});

reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return cljs.core.apply.call(null,cljs.core.swap_BANG_,reagent.session.state,f,args);
});

reagent.session.swap_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.swap_BANG_.cljs$lang$applyTo = (function (seq19724){
var G__19725 = cljs.core.first.call(null,seq19724);
var seq19724__$1 = cljs.core.next.call(null,seq19724);
return reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__19725,seq19724__$1);
});
/**
 * Remove all data from the session and start over cleanly.
 */
reagent.session.clear_BANG_ = (function reagent$session$clear_BANG_(){
return cljs.core.reset_BANG_.call(null,reagent.session.state,cljs.core.PersistentArrayMap.EMPTY);
});
reagent.session.reset_BANG_ = (function reagent$session$reset_BANG_(m){
return cljs.core.reset_BANG_.call(null,reagent.session.state,m);
});
/**
 * Remove a key from the session
 */
reagent.session.remove_BANG_ = (function reagent$session$remove_BANG_(k){
return cljs.core.swap_BANG_.call(null,reagent.session.state,cljs.core.dissoc,k);
});
/**
 * Associates a value in the session, where ks is a
 * sequence of keys and v is the new value and returns
 * a new nested structure. If any levels do not exist,
 * hash-maps will be created.
 */
reagent.session.assoc_in_BANG_ = (function reagent$session$assoc_in_BANG_(ks,v){
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__19729_SHARP_){
return cljs.core.assoc_in.call(null,p1__19729_SHARP_,ks,v);
}));
});
/**
 * Destructive get from the session. This returns the current value of the key
 *   and then removes it from the session.
 */
reagent.session.get_BANG_ = (function reagent$session$get_BANG_(var_args){
var args__17514__auto__ = [];
var len__17507__auto___19734 = arguments.length;
var i__17508__auto___19735 = (0);
while(true){
if((i__17508__auto___19735 < len__17507__auto___19734)){
args__17514__auto__.push((arguments[i__17508__auto___19735]));

var G__19736 = (i__17508__auto___19735 + (1));
i__17508__auto___19735 = G__19736;
continue;
} else {
}
break;
}

var argseq__17515__auto__ = ((((1) < args__17514__auto__.length))?(new cljs.core.IndexedSeq(args__17514__auto__.slice((1)),(0))):null);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17515__auto__);
});

reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__19732){
var vec__19733 = p__19732;
var default$ = cljs.core.nth.call(null,vec__19733,(0),null);
var cur = reagent.session.get.call(null,k,default$);
reagent.session.remove_BANG_.call(null,k);

return cur;
});

reagent.session.get_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.get_BANG_.cljs$lang$applyTo = (function (seq19730){
var G__19731 = cljs.core.first.call(null,seq19730);
var seq19730__$1 = cljs.core.next.call(null,seq19730);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__19731,seq19730__$1);
});
/**
 * Destructive get from the session. This returns the current value of the path
 *   specified by the vector ks and then removes it from the session.
 */
reagent.session.get_in_BANG_ = (function reagent$session$get_in_BANG_(var_args){
var args__17514__auto__ = [];
var len__17507__auto___19741 = arguments.length;
var i__17508__auto___19742 = (0);
while(true){
if((i__17508__auto___19742 < len__17507__auto___19741)){
args__17514__auto__.push((arguments[i__17508__auto___19742]));

var G__19743 = (i__17508__auto___19742 + (1));
i__17508__auto___19742 = G__19743;
continue;
} else {
}
break;
}

var argseq__17515__auto__ = ((((1) < args__17514__auto__.length))?(new cljs.core.IndexedSeq(args__17514__auto__.slice((1)),(0))):null);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17515__auto__);
});

reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__19739){
var vec__19740 = p__19739;
var default$ = cljs.core.nth.call(null,vec__19740,(0),null);
var cur = cljs.core.get_in.call(null,cljs.core.deref.call(null,reagent.session.state),ks,default$);
reagent.session.assoc_in_BANG_.call(null,ks,null);

return cur;
});

reagent.session.get_in_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.get_in_BANG_.cljs$lang$applyTo = (function (seq19737){
var G__19738 = cljs.core.first.call(null,seq19737);
var seq19737__$1 = cljs.core.next.call(null,seq19737);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__19738,seq19737__$1);
});
/**
 * Updates a value in session where k is a key and f
 * is the function that takes the old value along with any
 * supplied args and return the new value. If key is not
 * present it will be added.
 */
reagent.session.update_BANG_ = (function reagent$session$update_BANG_(var_args){
var args__17514__auto__ = [];
var len__17507__auto___19748 = arguments.length;
var i__17508__auto___19749 = (0);
while(true){
if((i__17508__auto___19749 < len__17507__auto___19748)){
args__17514__auto__.push((arguments[i__17508__auto___19749]));

var G__19750 = (i__17508__auto___19749 + (1));
i__17508__auto___19749 = G__19750;
continue;
} else {
}
break;
}

var argseq__17515__auto__ = ((((2) < args__17514__auto__.length))?(new cljs.core.IndexedSeq(args__17514__auto__.slice((2)),(0))):null);
return reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17515__auto__);
});

reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,f,args){
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__19744_SHARP_){
return cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.update,p1__19744_SHARP_,k,f),args);
}));
});

reagent.session.update_BANG_.cljs$lang$maxFixedArity = (2);

reagent.session.update_BANG_.cljs$lang$applyTo = (function (seq19745){
var G__19746 = cljs.core.first.call(null,seq19745);
var seq19745__$1 = cljs.core.next.call(null,seq19745);
var G__19747 = cljs.core.first.call(null,seq19745__$1);
var seq19745__$2 = cljs.core.next.call(null,seq19745__$1);
return reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__19746,G__19747,seq19745__$2);
});
/**
 * 'Updates a value in the session, where ks is a
 * sequence of keys and f is a function that will
 * take the old value along with any supplied args and return
 * the new value. If any levels do not exist, hash-maps
 * will be created.
 */
reagent.session.update_in_BANG_ = (function reagent$session$update_in_BANG_(var_args){
var args__17514__auto__ = [];
var len__17507__auto___19755 = arguments.length;
var i__17508__auto___19756 = (0);
while(true){
if((i__17508__auto___19756 < len__17507__auto___19755)){
args__17514__auto__.push((arguments[i__17508__auto___19756]));

var G__19757 = (i__17508__auto___19756 + (1));
i__17508__auto___19756 = G__19757;
continue;
} else {
}
break;
}

var argseq__17515__auto__ = ((((2) < args__17514__auto__.length))?(new cljs.core.IndexedSeq(args__17514__auto__.slice((2)),(0))):null);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17515__auto__);
});

reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,f,args){
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__19751_SHARP_){
return cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.update_in,p1__19751_SHARP_,ks,f),args);
}));
});

reagent.session.update_in_BANG_.cljs$lang$maxFixedArity = (2);

reagent.session.update_in_BANG_.cljs$lang$applyTo = (function (seq19752){
var G__19753 = cljs.core.first.call(null,seq19752);
var seq19752__$1 = cljs.core.next.call(null,seq19752);
var G__19754 = cljs.core.first.call(null,seq19752__$1);
var seq19752__$2 = cljs.core.next.call(null,seq19752__$1);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__19753,G__19754,seq19752__$2);
});

//# sourceMappingURL=session.js.map