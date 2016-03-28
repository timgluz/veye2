// Compiled by ClojureScript 1.7.122 {:elide-asserts true}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
figwheel.client.file_reloading.queued_file_reload;
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__16449__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__16449__auto__){
return or__16449__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__16449__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__16449__auto__)){
return or__16449__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__32572_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__32572_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__32577 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__32578 = null;
var count__32579 = (0);
var i__32580 = (0);
while(true){
if((i__32580 < count__32579)){
var n = cljs.core._nth.call(null,chunk__32578,i__32580);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__32581 = seq__32577;
var G__32582 = chunk__32578;
var G__32583 = count__32579;
var G__32584 = (i__32580 + (1));
seq__32577 = G__32581;
chunk__32578 = G__32582;
count__32579 = G__32583;
i__32580 = G__32584;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__32577);
if(temp__4425__auto__){
var seq__32577__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32577__$1)){
var c__17252__auto__ = cljs.core.chunk_first.call(null,seq__32577__$1);
var G__32585 = cljs.core.chunk_rest.call(null,seq__32577__$1);
var G__32586 = c__17252__auto__;
var G__32587 = cljs.core.count.call(null,c__17252__auto__);
var G__32588 = (0);
seq__32577 = G__32585;
chunk__32578 = G__32586;
count__32579 = G__32587;
i__32580 = G__32588;
continue;
} else {
var n = cljs.core.first.call(null,seq__32577__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__32589 = cljs.core.next.call(null,seq__32577__$1);
var G__32590 = null;
var G__32591 = (0);
var G__32592 = (0);
seq__32577 = G__32589;
chunk__32578 = G__32590;
count__32579 = G__32591;
i__32580 = G__32592;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__32631_32638 = cljs.core.seq.call(null,deps);
var chunk__32632_32639 = null;
var count__32633_32640 = (0);
var i__32634_32641 = (0);
while(true){
if((i__32634_32641 < count__32633_32640)){
var dep_32642 = cljs.core._nth.call(null,chunk__32632_32639,i__32634_32641);
topo_sort_helper_STAR_.call(null,dep_32642,(depth + (1)),state);

var G__32643 = seq__32631_32638;
var G__32644 = chunk__32632_32639;
var G__32645 = count__32633_32640;
var G__32646 = (i__32634_32641 + (1));
seq__32631_32638 = G__32643;
chunk__32632_32639 = G__32644;
count__32633_32640 = G__32645;
i__32634_32641 = G__32646;
continue;
} else {
var temp__4425__auto___32647 = cljs.core.seq.call(null,seq__32631_32638);
if(temp__4425__auto___32647){
var seq__32631_32648__$1 = temp__4425__auto___32647;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32631_32648__$1)){
var c__17252__auto___32649 = cljs.core.chunk_first.call(null,seq__32631_32648__$1);
var G__32650 = cljs.core.chunk_rest.call(null,seq__32631_32648__$1);
var G__32651 = c__17252__auto___32649;
var G__32652 = cljs.core.count.call(null,c__17252__auto___32649);
var G__32653 = (0);
seq__32631_32638 = G__32650;
chunk__32632_32639 = G__32651;
count__32633_32640 = G__32652;
i__32634_32641 = G__32653;
continue;
} else {
var dep_32654 = cljs.core.first.call(null,seq__32631_32648__$1);
topo_sort_helper_STAR_.call(null,dep_32654,(depth + (1)),state);

var G__32655 = cljs.core.next.call(null,seq__32631_32648__$1);
var G__32656 = null;
var G__32657 = (0);
var G__32658 = (0);
seq__32631_32638 = G__32655;
chunk__32632_32639 = G__32656;
count__32633_32640 = G__32657;
i__32634_32641 = G__32658;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__32635){
var vec__32637 = p__32635;
var x = cljs.core.nth.call(null,vec__32637,(0),null);
var xs = cljs.core.nthnext.call(null,vec__32637,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__32637,x,xs,get_deps__$1){
return (function (p1__32593_SHARP_){
return clojure.set.difference.call(null,p1__32593_SHARP_,x);
});})(vec__32637,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__32671 = cljs.core.seq.call(null,provides);
var chunk__32672 = null;
var count__32673 = (0);
var i__32674 = (0);
while(true){
if((i__32674 < count__32673)){
var prov = cljs.core._nth.call(null,chunk__32672,i__32674);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__32675_32683 = cljs.core.seq.call(null,requires);
var chunk__32676_32684 = null;
var count__32677_32685 = (0);
var i__32678_32686 = (0);
while(true){
if((i__32678_32686 < count__32677_32685)){
var req_32687 = cljs.core._nth.call(null,chunk__32676_32684,i__32678_32686);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_32687,prov);

var G__32688 = seq__32675_32683;
var G__32689 = chunk__32676_32684;
var G__32690 = count__32677_32685;
var G__32691 = (i__32678_32686 + (1));
seq__32675_32683 = G__32688;
chunk__32676_32684 = G__32689;
count__32677_32685 = G__32690;
i__32678_32686 = G__32691;
continue;
} else {
var temp__4425__auto___32692 = cljs.core.seq.call(null,seq__32675_32683);
if(temp__4425__auto___32692){
var seq__32675_32693__$1 = temp__4425__auto___32692;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32675_32693__$1)){
var c__17252__auto___32694 = cljs.core.chunk_first.call(null,seq__32675_32693__$1);
var G__32695 = cljs.core.chunk_rest.call(null,seq__32675_32693__$1);
var G__32696 = c__17252__auto___32694;
var G__32697 = cljs.core.count.call(null,c__17252__auto___32694);
var G__32698 = (0);
seq__32675_32683 = G__32695;
chunk__32676_32684 = G__32696;
count__32677_32685 = G__32697;
i__32678_32686 = G__32698;
continue;
} else {
var req_32699 = cljs.core.first.call(null,seq__32675_32693__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_32699,prov);

var G__32700 = cljs.core.next.call(null,seq__32675_32693__$1);
var G__32701 = null;
var G__32702 = (0);
var G__32703 = (0);
seq__32675_32683 = G__32700;
chunk__32676_32684 = G__32701;
count__32677_32685 = G__32702;
i__32678_32686 = G__32703;
continue;
}
} else {
}
}
break;
}

var G__32704 = seq__32671;
var G__32705 = chunk__32672;
var G__32706 = count__32673;
var G__32707 = (i__32674 + (1));
seq__32671 = G__32704;
chunk__32672 = G__32705;
count__32673 = G__32706;
i__32674 = G__32707;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__32671);
if(temp__4425__auto__){
var seq__32671__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32671__$1)){
var c__17252__auto__ = cljs.core.chunk_first.call(null,seq__32671__$1);
var G__32708 = cljs.core.chunk_rest.call(null,seq__32671__$1);
var G__32709 = c__17252__auto__;
var G__32710 = cljs.core.count.call(null,c__17252__auto__);
var G__32711 = (0);
seq__32671 = G__32708;
chunk__32672 = G__32709;
count__32673 = G__32710;
i__32674 = G__32711;
continue;
} else {
var prov = cljs.core.first.call(null,seq__32671__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__32679_32712 = cljs.core.seq.call(null,requires);
var chunk__32680_32713 = null;
var count__32681_32714 = (0);
var i__32682_32715 = (0);
while(true){
if((i__32682_32715 < count__32681_32714)){
var req_32716 = cljs.core._nth.call(null,chunk__32680_32713,i__32682_32715);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_32716,prov);

var G__32717 = seq__32679_32712;
var G__32718 = chunk__32680_32713;
var G__32719 = count__32681_32714;
var G__32720 = (i__32682_32715 + (1));
seq__32679_32712 = G__32717;
chunk__32680_32713 = G__32718;
count__32681_32714 = G__32719;
i__32682_32715 = G__32720;
continue;
} else {
var temp__4425__auto___32721__$1 = cljs.core.seq.call(null,seq__32679_32712);
if(temp__4425__auto___32721__$1){
var seq__32679_32722__$1 = temp__4425__auto___32721__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32679_32722__$1)){
var c__17252__auto___32723 = cljs.core.chunk_first.call(null,seq__32679_32722__$1);
var G__32724 = cljs.core.chunk_rest.call(null,seq__32679_32722__$1);
var G__32725 = c__17252__auto___32723;
var G__32726 = cljs.core.count.call(null,c__17252__auto___32723);
var G__32727 = (0);
seq__32679_32712 = G__32724;
chunk__32680_32713 = G__32725;
count__32681_32714 = G__32726;
i__32682_32715 = G__32727;
continue;
} else {
var req_32728 = cljs.core.first.call(null,seq__32679_32722__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_32728,prov);

var G__32729 = cljs.core.next.call(null,seq__32679_32722__$1);
var G__32730 = null;
var G__32731 = (0);
var G__32732 = (0);
seq__32679_32712 = G__32729;
chunk__32680_32713 = G__32730;
count__32681_32714 = G__32731;
i__32682_32715 = G__32732;
continue;
}
} else {
}
}
break;
}

var G__32733 = cljs.core.next.call(null,seq__32671__$1);
var G__32734 = null;
var G__32735 = (0);
var G__32736 = (0);
seq__32671 = G__32733;
chunk__32672 = G__32734;
count__32673 = G__32735;
i__32674 = G__32736;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__32741_32745 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__32742_32746 = null;
var count__32743_32747 = (0);
var i__32744_32748 = (0);
while(true){
if((i__32744_32748 < count__32743_32747)){
var ns_32749 = cljs.core._nth.call(null,chunk__32742_32746,i__32744_32748);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_32749);

var G__32750 = seq__32741_32745;
var G__32751 = chunk__32742_32746;
var G__32752 = count__32743_32747;
var G__32753 = (i__32744_32748 + (1));
seq__32741_32745 = G__32750;
chunk__32742_32746 = G__32751;
count__32743_32747 = G__32752;
i__32744_32748 = G__32753;
continue;
} else {
var temp__4425__auto___32754 = cljs.core.seq.call(null,seq__32741_32745);
if(temp__4425__auto___32754){
var seq__32741_32755__$1 = temp__4425__auto___32754;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32741_32755__$1)){
var c__17252__auto___32756 = cljs.core.chunk_first.call(null,seq__32741_32755__$1);
var G__32757 = cljs.core.chunk_rest.call(null,seq__32741_32755__$1);
var G__32758 = c__17252__auto___32756;
var G__32759 = cljs.core.count.call(null,c__17252__auto___32756);
var G__32760 = (0);
seq__32741_32745 = G__32757;
chunk__32742_32746 = G__32758;
count__32743_32747 = G__32759;
i__32744_32748 = G__32760;
continue;
} else {
var ns_32761 = cljs.core.first.call(null,seq__32741_32755__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_32761);

var G__32762 = cljs.core.next.call(null,seq__32741_32755__$1);
var G__32763 = null;
var G__32764 = (0);
var G__32765 = (0);
seq__32741_32745 = G__32762;
chunk__32742_32746 = G__32763;
count__32743_32747 = G__32764;
i__32744_32748 = G__32765;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__16449__auto__ = goog.require__;
if(cljs.core.truth_(or__16449__auto__)){
return or__16449__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__32766__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__32766 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32767__i = 0, G__32767__a = new Array(arguments.length -  0);
while (G__32767__i < G__32767__a.length) {G__32767__a[G__32767__i] = arguments[G__32767__i + 0]; ++G__32767__i;}
  args = new cljs.core.IndexedSeq(G__32767__a,0);
} 
return G__32766__delegate.call(this,args);};
G__32766.cljs$lang$maxFixedArity = 0;
G__32766.cljs$lang$applyTo = (function (arglist__32768){
var args = cljs.core.seq(arglist__32768);
return G__32766__delegate(args);
});
G__32766.cljs$core$IFn$_invoke$arity$variadic = G__32766__delegate;
return G__32766;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__32769 = cljs.core._EQ_;
var expr__32770 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__32769.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__32770))){
return ((function (pred__32769,expr__32770){
return (function (request_url,callback){

var root = clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.drop.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,__dirname,"/")))));
var path = [cljs.core.str(root),cljs.core.str("/"),cljs.core.str(figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))].join('');
(require.cache[path] = null);

return callback.call(null,(function (){try{return require(path);
}catch (e32772){if((e32772 instanceof Error)){
var e = e32772;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e32772;

}
}})());
});
;})(pred__32769,expr__32770))
} else {
if(cljs.core.truth_(pred__32769.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__32770))){
return ((function (pred__32769,expr__32770){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__32769,expr__32770){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__32769,expr__32770))
);

return deferred.addErrback(((function (deferred,pred__32769,expr__32770){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__32769,expr__32770))
);
});
;})(pred__32769,expr__32770))
} else {
return ((function (pred__32769,expr__32770){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__32769,expr__32770))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__32773,callback){
var map__32776 = p__32773;
var map__32776__$1 = ((((!((map__32776 == null)))?((((map__32776.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32776.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32776):map__32776);
var file_msg = map__32776__$1;
var request_url = cljs.core.get.call(null,map__32776__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__32776,map__32776__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__32776,map__32776__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__19778__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19778__auto__){
return (function (){
var f__19779__auto__ = (function (){var switch__19713__auto__ = ((function (c__19778__auto__){
return (function (state_32800){
var state_val_32801 = (state_32800[(1)]);
if((state_val_32801 === (7))){
var inst_32796 = (state_32800[(2)]);
var state_32800__$1 = state_32800;
var statearr_32802_32822 = state_32800__$1;
(statearr_32802_32822[(2)] = inst_32796);

(statearr_32802_32822[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32801 === (1))){
var state_32800__$1 = state_32800;
var statearr_32803_32823 = state_32800__$1;
(statearr_32803_32823[(2)] = null);

(statearr_32803_32823[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32801 === (4))){
var inst_32780 = (state_32800[(7)]);
var inst_32780__$1 = (state_32800[(2)]);
var state_32800__$1 = (function (){var statearr_32804 = state_32800;
(statearr_32804[(7)] = inst_32780__$1);

return statearr_32804;
})();
if(cljs.core.truth_(inst_32780__$1)){
var statearr_32805_32824 = state_32800__$1;
(statearr_32805_32824[(1)] = (5));

} else {
var statearr_32806_32825 = state_32800__$1;
(statearr_32806_32825[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32801 === (6))){
var state_32800__$1 = state_32800;
var statearr_32807_32826 = state_32800__$1;
(statearr_32807_32826[(2)] = null);

(statearr_32807_32826[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32801 === (3))){
var inst_32798 = (state_32800[(2)]);
var state_32800__$1 = state_32800;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32800__$1,inst_32798);
} else {
if((state_val_32801 === (2))){
var state_32800__$1 = state_32800;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32800__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_32801 === (11))){
var inst_32792 = (state_32800[(2)]);
var state_32800__$1 = (function (){var statearr_32808 = state_32800;
(statearr_32808[(8)] = inst_32792);

return statearr_32808;
})();
var statearr_32809_32827 = state_32800__$1;
(statearr_32809_32827[(2)] = null);

(statearr_32809_32827[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32801 === (9))){
var inst_32784 = (state_32800[(9)]);
var inst_32786 = (state_32800[(10)]);
var inst_32788 = inst_32786.call(null,inst_32784);
var state_32800__$1 = state_32800;
var statearr_32810_32828 = state_32800__$1;
(statearr_32810_32828[(2)] = inst_32788);

(statearr_32810_32828[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32801 === (5))){
var inst_32780 = (state_32800[(7)]);
var inst_32782 = figwheel.client.file_reloading.blocking_load.call(null,inst_32780);
var state_32800__$1 = state_32800;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32800__$1,(8),inst_32782);
} else {
if((state_val_32801 === (10))){
var inst_32784 = (state_32800[(9)]);
var inst_32790 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_32784);
var state_32800__$1 = state_32800;
var statearr_32811_32829 = state_32800__$1;
(statearr_32811_32829[(2)] = inst_32790);

(statearr_32811_32829[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32801 === (8))){
var inst_32780 = (state_32800[(7)]);
var inst_32786 = (state_32800[(10)]);
var inst_32784 = (state_32800[(2)]);
var inst_32785 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_32786__$1 = cljs.core.get.call(null,inst_32785,inst_32780);
var state_32800__$1 = (function (){var statearr_32812 = state_32800;
(statearr_32812[(9)] = inst_32784);

(statearr_32812[(10)] = inst_32786__$1);

return statearr_32812;
})();
if(cljs.core.truth_(inst_32786__$1)){
var statearr_32813_32830 = state_32800__$1;
(statearr_32813_32830[(1)] = (9));

} else {
var statearr_32814_32831 = state_32800__$1;
(statearr_32814_32831[(1)] = (10));

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
});})(c__19778__auto__))
;
return ((function (switch__19713__auto__,c__19778__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__19714__auto__ = null;
var figwheel$client$file_reloading$state_machine__19714__auto____0 = (function (){
var statearr_32818 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32818[(0)] = figwheel$client$file_reloading$state_machine__19714__auto__);

(statearr_32818[(1)] = (1));

return statearr_32818;
});
var figwheel$client$file_reloading$state_machine__19714__auto____1 = (function (state_32800){
while(true){
var ret_value__19715__auto__ = (function (){try{while(true){
var result__19716__auto__ = switch__19713__auto__.call(null,state_32800);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19716__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19716__auto__;
}
break;
}
}catch (e32819){if((e32819 instanceof Object)){
var ex__19717__auto__ = e32819;
var statearr_32820_32832 = state_32800;
(statearr_32820_32832[(5)] = ex__19717__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32800);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32819;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32833 = state_32800;
state_32800 = G__32833;
continue;
} else {
return ret_value__19715__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__19714__auto__ = function(state_32800){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__19714__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__19714__auto____1.call(this,state_32800);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__19714__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__19714__auto____0;
figwheel$client$file_reloading$state_machine__19714__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__19714__auto____1;
return figwheel$client$file_reloading$state_machine__19714__auto__;
})()
;})(switch__19713__auto__,c__19778__auto__))
})();
var state__19780__auto__ = (function (){var statearr_32821 = f__19779__auto__.call(null);
(statearr_32821[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19778__auto__);

return statearr_32821;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19780__auto__);
});})(c__19778__auto__))
);

return c__19778__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__32834,callback){
var map__32837 = p__32834;
var map__32837__$1 = ((((!((map__32837 == null)))?((((map__32837.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32837.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32837):map__32837);
var file_msg = map__32837__$1;
var namespace = cljs.core.get.call(null,map__32837__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__32837,map__32837__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__32837,map__32837__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__32839){
var map__32842 = p__32839;
var map__32842__$1 = ((((!((map__32842 == null)))?((((map__32842.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32842.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32842):map__32842);
var file_msg = map__32842__$1;
var namespace = cljs.core.get.call(null,map__32842__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__16437__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__16437__auto__){
var or__16449__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16449__auto__)){
return or__16449__auto__;
} else {
var or__16449__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16449__auto____$1)){
return or__16449__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__16437__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__32844,callback){
var map__32847 = p__32844;
var map__32847__$1 = ((((!((map__32847 == null)))?((((map__32847.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32847.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32847):map__32847);
var file_msg = map__32847__$1;
var request_url = cljs.core.get.call(null,map__32847__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__32847__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__19778__auto___32935 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19778__auto___32935,out){
return (function (){
var f__19779__auto__ = (function (){var switch__19713__auto__ = ((function (c__19778__auto___32935,out){
return (function (state_32917){
var state_val_32918 = (state_32917[(1)]);
if((state_val_32918 === (1))){
var inst_32895 = cljs.core.nth.call(null,files,(0),null);
var inst_32896 = cljs.core.nthnext.call(null,files,(1));
var inst_32897 = files;
var state_32917__$1 = (function (){var statearr_32919 = state_32917;
(statearr_32919[(7)] = inst_32897);

(statearr_32919[(8)] = inst_32895);

(statearr_32919[(9)] = inst_32896);

return statearr_32919;
})();
var statearr_32920_32936 = state_32917__$1;
(statearr_32920_32936[(2)] = null);

(statearr_32920_32936[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32918 === (2))){
var inst_32897 = (state_32917[(7)]);
var inst_32900 = (state_32917[(10)]);
var inst_32900__$1 = cljs.core.nth.call(null,inst_32897,(0),null);
var inst_32901 = cljs.core.nthnext.call(null,inst_32897,(1));
var inst_32902 = (inst_32900__$1 == null);
var inst_32903 = cljs.core.not.call(null,inst_32902);
var state_32917__$1 = (function (){var statearr_32921 = state_32917;
(statearr_32921[(11)] = inst_32901);

(statearr_32921[(10)] = inst_32900__$1);

return statearr_32921;
})();
if(inst_32903){
var statearr_32922_32937 = state_32917__$1;
(statearr_32922_32937[(1)] = (4));

} else {
var statearr_32923_32938 = state_32917__$1;
(statearr_32923_32938[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32918 === (3))){
var inst_32915 = (state_32917[(2)]);
var state_32917__$1 = state_32917;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32917__$1,inst_32915);
} else {
if((state_val_32918 === (4))){
var inst_32900 = (state_32917[(10)]);
var inst_32905 = figwheel.client.file_reloading.reload_js_file.call(null,inst_32900);
var state_32917__$1 = state_32917;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32917__$1,(7),inst_32905);
} else {
if((state_val_32918 === (5))){
var inst_32911 = cljs.core.async.close_BANG_.call(null,out);
var state_32917__$1 = state_32917;
var statearr_32924_32939 = state_32917__$1;
(statearr_32924_32939[(2)] = inst_32911);

(statearr_32924_32939[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32918 === (6))){
var inst_32913 = (state_32917[(2)]);
var state_32917__$1 = state_32917;
var statearr_32925_32940 = state_32917__$1;
(statearr_32925_32940[(2)] = inst_32913);

(statearr_32925_32940[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32918 === (7))){
var inst_32901 = (state_32917[(11)]);
var inst_32907 = (state_32917[(2)]);
var inst_32908 = cljs.core.async.put_BANG_.call(null,out,inst_32907);
var inst_32897 = inst_32901;
var state_32917__$1 = (function (){var statearr_32926 = state_32917;
(statearr_32926[(12)] = inst_32908);

(statearr_32926[(7)] = inst_32897);

return statearr_32926;
})();
var statearr_32927_32941 = state_32917__$1;
(statearr_32927_32941[(2)] = null);

(statearr_32927_32941[(1)] = (2));


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
});})(c__19778__auto___32935,out))
;
return ((function (switch__19713__auto__,c__19778__auto___32935,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19714__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19714__auto____0 = (function (){
var statearr_32931 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32931[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19714__auto__);

(statearr_32931[(1)] = (1));

return statearr_32931;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19714__auto____1 = (function (state_32917){
while(true){
var ret_value__19715__auto__ = (function (){try{while(true){
var result__19716__auto__ = switch__19713__auto__.call(null,state_32917);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19716__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19716__auto__;
}
break;
}
}catch (e32932){if((e32932 instanceof Object)){
var ex__19717__auto__ = e32932;
var statearr_32933_32942 = state_32917;
(statearr_32933_32942[(5)] = ex__19717__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32917);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32932;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32943 = state_32917;
state_32917 = G__32943;
continue;
} else {
return ret_value__19715__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19714__auto__ = function(state_32917){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19714__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19714__auto____1.call(this,state_32917);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19714__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19714__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19714__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19714__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19714__auto__;
})()
;})(switch__19713__auto__,c__19778__auto___32935,out))
})();
var state__19780__auto__ = (function (){var statearr_32934 = f__19779__auto__.call(null);
(statearr_32934[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19778__auto___32935);

return statearr_32934;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19780__auto__);
});})(c__19778__auto___32935,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__32944,opts){
var map__32948 = p__32944;
var map__32948__$1 = ((((!((map__32948 == null)))?((((map__32948.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32948.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32948):map__32948);
var eval_body__$1 = cljs.core.get.call(null,map__32948__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__32948__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__16437__auto__ = eval_body__$1;
if(cljs.core.truth_(and__16437__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__16437__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e32950){var e = e32950;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4423__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__32951_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__32951_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4423__auto__)){
var file_msg = temp__4423__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__32956){
var vec__32957 = p__32956;
var k = cljs.core.nth.call(null,vec__32957,(0),null);
var v = cljs.core.nth.call(null,vec__32957,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__32958){
var vec__32959 = p__32958;
var k = cljs.core.nth.call(null,vec__32959,(0),null);
var v = cljs.core.nth.call(null,vec__32959,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__32963,p__32964){
var map__33211 = p__32963;
var map__33211__$1 = ((((!((map__33211 == null)))?((((map__33211.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33211.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33211):map__33211);
var opts = map__33211__$1;
var before_jsload = cljs.core.get.call(null,map__33211__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__33211__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__33211__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__33212 = p__32964;
var map__33212__$1 = ((((!((map__33212 == null)))?((((map__33212.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33212.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33212):map__33212);
var msg = map__33212__$1;
var files = cljs.core.get.call(null,map__33212__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__33212__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__33212__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__19778__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19778__auto__,map__33211,map__33211__$1,opts,before_jsload,on_jsload,reload_dependents,map__33212,map__33212__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__19779__auto__ = (function (){var switch__19713__auto__ = ((function (c__19778__auto__,map__33211,map__33211__$1,opts,before_jsload,on_jsload,reload_dependents,map__33212,map__33212__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_33365){
var state_val_33366 = (state_33365[(1)]);
if((state_val_33366 === (7))){
var inst_33229 = (state_33365[(7)]);
var inst_33227 = (state_33365[(8)]);
var inst_33228 = (state_33365[(9)]);
var inst_33226 = (state_33365[(10)]);
var inst_33234 = cljs.core._nth.call(null,inst_33227,inst_33229);
var inst_33235 = figwheel.client.file_reloading.eval_body.call(null,inst_33234,opts);
var inst_33236 = (inst_33229 + (1));
var tmp33367 = inst_33227;
var tmp33368 = inst_33228;
var tmp33369 = inst_33226;
var inst_33226__$1 = tmp33369;
var inst_33227__$1 = tmp33367;
var inst_33228__$1 = tmp33368;
var inst_33229__$1 = inst_33236;
var state_33365__$1 = (function (){var statearr_33370 = state_33365;
(statearr_33370[(7)] = inst_33229__$1);

(statearr_33370[(8)] = inst_33227__$1);

(statearr_33370[(9)] = inst_33228__$1);

(statearr_33370[(10)] = inst_33226__$1);

(statearr_33370[(11)] = inst_33235);

return statearr_33370;
})();
var statearr_33371_33457 = state_33365__$1;
(statearr_33371_33457[(2)] = null);

(statearr_33371_33457[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33366 === (20))){
var inst_33269 = (state_33365[(12)]);
var inst_33277 = figwheel.client.file_reloading.sort_files.call(null,inst_33269);
var state_33365__$1 = state_33365;
var statearr_33372_33458 = state_33365__$1;
(statearr_33372_33458[(2)] = inst_33277);

(statearr_33372_33458[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33366 === (27))){
var state_33365__$1 = state_33365;
var statearr_33373_33459 = state_33365__$1;
(statearr_33373_33459[(2)] = null);

(statearr_33373_33459[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33366 === (1))){
var inst_33218 = (state_33365[(13)]);
var inst_33215 = before_jsload.call(null,files);
var inst_33216 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_33217 = (function (){return ((function (inst_33218,inst_33215,inst_33216,state_val_33366,c__19778__auto__,map__33211,map__33211__$1,opts,before_jsload,on_jsload,reload_dependents,map__33212,map__33212__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__32960_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__32960_SHARP_);
});
;})(inst_33218,inst_33215,inst_33216,state_val_33366,c__19778__auto__,map__33211,map__33211__$1,opts,before_jsload,on_jsload,reload_dependents,map__33212,map__33212__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_33218__$1 = cljs.core.filter.call(null,inst_33217,files);
var inst_33219 = cljs.core.not_empty.call(null,inst_33218__$1);
var state_33365__$1 = (function (){var statearr_33374 = state_33365;
(statearr_33374[(14)] = inst_33215);

(statearr_33374[(13)] = inst_33218__$1);

(statearr_33374[(15)] = inst_33216);

return statearr_33374;
})();
if(cljs.core.truth_(inst_33219)){
var statearr_33375_33460 = state_33365__$1;
(statearr_33375_33460[(1)] = (2));

} else {
var statearr_33376_33461 = state_33365__$1;
(statearr_33376_33461[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33366 === (24))){
var state_33365__$1 = state_33365;
var statearr_33377_33462 = state_33365__$1;
(statearr_33377_33462[(2)] = null);

(statearr_33377_33462[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33366 === (39))){
var inst_33319 = (state_33365[(16)]);
var state_33365__$1 = state_33365;
var statearr_33378_33463 = state_33365__$1;
(statearr_33378_33463[(2)] = inst_33319);

(statearr_33378_33463[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33366 === (46))){
var inst_33360 = (state_33365[(2)]);
var state_33365__$1 = state_33365;
var statearr_33379_33464 = state_33365__$1;
(statearr_33379_33464[(2)] = inst_33360);

(statearr_33379_33464[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33366 === (4))){
var inst_33263 = (state_33365[(2)]);
var inst_33264 = cljs.core.List.EMPTY;
var inst_33265 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_33264);
var inst_33266 = (function (){return ((function (inst_33263,inst_33264,inst_33265,state_val_33366,c__19778__auto__,map__33211,map__33211__$1,opts,before_jsload,on_jsload,reload_dependents,map__33212,map__33212__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__32961_SHARP_){
var and__16437__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__32961_SHARP_);
if(cljs.core.truth_(and__16437__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__32961_SHARP_));
} else {
return and__16437__auto__;
}
});
;})(inst_33263,inst_33264,inst_33265,state_val_33366,c__19778__auto__,map__33211,map__33211__$1,opts,before_jsload,on_jsload,reload_dependents,map__33212,map__33212__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_33267 = cljs.core.filter.call(null,inst_33266,files);
var inst_33268 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_33269 = cljs.core.concat.call(null,inst_33267,inst_33268);
var state_33365__$1 = (function (){var statearr_33380 = state_33365;
(statearr_33380[(12)] = inst_33269);

(statearr_33380[(17)] = inst_33263);

(statearr_33380[(18)] = inst_33265);

return statearr_33380;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_33381_33465 = state_33365__$1;
(statearr_33381_33465[(1)] = (16));

} else {
var statearr_33382_33466 = state_33365__$1;
(statearr_33382_33466[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33366 === (15))){
var inst_33253 = (state_33365[(2)]);
var state_33365__$1 = state_33365;
var statearr_33383_33467 = state_33365__$1;
(statearr_33383_33467[(2)] = inst_33253);

(statearr_33383_33467[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33366 === (21))){
var inst_33279 = (state_33365[(19)]);
var inst_33279__$1 = (state_33365[(2)]);
var inst_33280 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_33279__$1);
var state_33365__$1 = (function (){var statearr_33384 = state_33365;
(statearr_33384[(19)] = inst_33279__$1);

return statearr_33384;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33365__$1,(22),inst_33280);
} else {
if((state_val_33366 === (31))){
var inst_33363 = (state_33365[(2)]);
var state_33365__$1 = state_33365;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33365__$1,inst_33363);
} else {
if((state_val_33366 === (32))){
var inst_33319 = (state_33365[(16)]);
var inst_33324 = inst_33319.cljs$lang$protocol_mask$partition0$;
var inst_33325 = (inst_33324 & (64));
var inst_33326 = inst_33319.cljs$core$ISeq$;
var inst_33327 = (inst_33325) || (inst_33326);
var state_33365__$1 = state_33365;
if(cljs.core.truth_(inst_33327)){
var statearr_33385_33468 = state_33365__$1;
(statearr_33385_33468[(1)] = (35));

} else {
var statearr_33386_33469 = state_33365__$1;
(statearr_33386_33469[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33366 === (40))){
var inst_33340 = (state_33365[(20)]);
var inst_33339 = (state_33365[(2)]);
var inst_33340__$1 = cljs.core.get.call(null,inst_33339,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_33341 = cljs.core.get.call(null,inst_33339,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_33342 = cljs.core.not_empty.call(null,inst_33340__$1);
var state_33365__$1 = (function (){var statearr_33387 = state_33365;
(statearr_33387[(21)] = inst_33341);

(statearr_33387[(20)] = inst_33340__$1);

return statearr_33387;
})();
if(cljs.core.truth_(inst_33342)){
var statearr_33388_33470 = state_33365__$1;
(statearr_33388_33470[(1)] = (41));

} else {
var statearr_33389_33471 = state_33365__$1;
(statearr_33389_33471[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33366 === (33))){
var state_33365__$1 = state_33365;
var statearr_33390_33472 = state_33365__$1;
(statearr_33390_33472[(2)] = false);

(statearr_33390_33472[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33366 === (13))){
var inst_33239 = (state_33365[(22)]);
var inst_33243 = cljs.core.chunk_first.call(null,inst_33239);
var inst_33244 = cljs.core.chunk_rest.call(null,inst_33239);
var inst_33245 = cljs.core.count.call(null,inst_33243);
var inst_33226 = inst_33244;
var inst_33227 = inst_33243;
var inst_33228 = inst_33245;
var inst_33229 = (0);
var state_33365__$1 = (function (){var statearr_33391 = state_33365;
(statearr_33391[(7)] = inst_33229);

(statearr_33391[(8)] = inst_33227);

(statearr_33391[(9)] = inst_33228);

(statearr_33391[(10)] = inst_33226);

return statearr_33391;
})();
var statearr_33392_33473 = state_33365__$1;
(statearr_33392_33473[(2)] = null);

(statearr_33392_33473[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33366 === (22))){
var inst_33282 = (state_33365[(23)]);
var inst_33287 = (state_33365[(24)]);
var inst_33283 = (state_33365[(25)]);
var inst_33279 = (state_33365[(19)]);
var inst_33282__$1 = (state_33365[(2)]);
var inst_33283__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_33282__$1);
var inst_33284 = (function (){var all_files = inst_33279;
var res_SINGLEQUOTE_ = inst_33282__$1;
var res = inst_33283__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_33282,inst_33287,inst_33283,inst_33279,inst_33282__$1,inst_33283__$1,state_val_33366,c__19778__auto__,map__33211,map__33211__$1,opts,before_jsload,on_jsload,reload_dependents,map__33212,map__33212__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__32962_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__32962_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_33282,inst_33287,inst_33283,inst_33279,inst_33282__$1,inst_33283__$1,state_val_33366,c__19778__auto__,map__33211,map__33211__$1,opts,before_jsload,on_jsload,reload_dependents,map__33212,map__33212__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_33285 = cljs.core.filter.call(null,inst_33284,inst_33282__$1);
var inst_33286 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_33287__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_33286);
var inst_33288 = cljs.core.not_empty.call(null,inst_33287__$1);
var state_33365__$1 = (function (){var statearr_33393 = state_33365;
(statearr_33393[(23)] = inst_33282__$1);

(statearr_33393[(24)] = inst_33287__$1);

(statearr_33393[(25)] = inst_33283__$1);

(statearr_33393[(26)] = inst_33285);

return statearr_33393;
})();
if(cljs.core.truth_(inst_33288)){
var statearr_33394_33474 = state_33365__$1;
(statearr_33394_33474[(1)] = (23));

} else {
var statearr_33395_33475 = state_33365__$1;
(statearr_33395_33475[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33366 === (36))){
var state_33365__$1 = state_33365;
var statearr_33396_33476 = state_33365__$1;
(statearr_33396_33476[(2)] = false);

(statearr_33396_33476[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33366 === (41))){
var inst_33340 = (state_33365[(20)]);
var inst_33344 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_33345 = cljs.core.map.call(null,inst_33344,inst_33340);
var inst_33346 = cljs.core.pr_str.call(null,inst_33345);
var inst_33347 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_33346)].join('');
var inst_33348 = figwheel.client.utils.log.call(null,inst_33347);
var state_33365__$1 = state_33365;
var statearr_33397_33477 = state_33365__$1;
(statearr_33397_33477[(2)] = inst_33348);

(statearr_33397_33477[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33366 === (43))){
var inst_33341 = (state_33365[(21)]);
var inst_33351 = (state_33365[(2)]);
var inst_33352 = cljs.core.not_empty.call(null,inst_33341);
var state_33365__$1 = (function (){var statearr_33398 = state_33365;
(statearr_33398[(27)] = inst_33351);

return statearr_33398;
})();
if(cljs.core.truth_(inst_33352)){
var statearr_33399_33478 = state_33365__$1;
(statearr_33399_33478[(1)] = (44));

} else {
var statearr_33400_33479 = state_33365__$1;
(statearr_33400_33479[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33366 === (29))){
var inst_33282 = (state_33365[(23)]);
var inst_33287 = (state_33365[(24)]);
var inst_33319 = (state_33365[(16)]);
var inst_33283 = (state_33365[(25)]);
var inst_33285 = (state_33365[(26)]);
var inst_33279 = (state_33365[(19)]);
var inst_33315 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_33318 = (function (){var all_files = inst_33279;
var res_SINGLEQUOTE_ = inst_33282;
var res = inst_33283;
var files_not_loaded = inst_33285;
var dependencies_that_loaded = inst_33287;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33282,inst_33287,inst_33319,inst_33283,inst_33285,inst_33279,inst_33315,state_val_33366,c__19778__auto__,map__33211,map__33211__$1,opts,before_jsload,on_jsload,reload_dependents,map__33212,map__33212__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__33317){
var map__33401 = p__33317;
var map__33401__$1 = ((((!((map__33401 == null)))?((((map__33401.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33401.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33401):map__33401);
var namespace = cljs.core.get.call(null,map__33401__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33282,inst_33287,inst_33319,inst_33283,inst_33285,inst_33279,inst_33315,state_val_33366,c__19778__auto__,map__33211,map__33211__$1,opts,before_jsload,on_jsload,reload_dependents,map__33212,map__33212__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_33319__$1 = cljs.core.group_by.call(null,inst_33318,inst_33285);
var inst_33321 = (inst_33319__$1 == null);
var inst_33322 = cljs.core.not.call(null,inst_33321);
var state_33365__$1 = (function (){var statearr_33403 = state_33365;
(statearr_33403[(16)] = inst_33319__$1);

(statearr_33403[(28)] = inst_33315);

return statearr_33403;
})();
if(inst_33322){
var statearr_33404_33480 = state_33365__$1;
(statearr_33404_33480[(1)] = (32));

} else {
var statearr_33405_33481 = state_33365__$1;
(statearr_33405_33481[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33366 === (44))){
var inst_33341 = (state_33365[(21)]);
var inst_33354 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_33341);
var inst_33355 = cljs.core.pr_str.call(null,inst_33354);
var inst_33356 = [cljs.core.str("not required: "),cljs.core.str(inst_33355)].join('');
var inst_33357 = figwheel.client.utils.log.call(null,inst_33356);
var state_33365__$1 = state_33365;
var statearr_33406_33482 = state_33365__$1;
(statearr_33406_33482[(2)] = inst_33357);

(statearr_33406_33482[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33366 === (6))){
var inst_33260 = (state_33365[(2)]);
var state_33365__$1 = state_33365;
var statearr_33407_33483 = state_33365__$1;
(statearr_33407_33483[(2)] = inst_33260);

(statearr_33407_33483[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33366 === (28))){
var inst_33285 = (state_33365[(26)]);
var inst_33312 = (state_33365[(2)]);
var inst_33313 = cljs.core.not_empty.call(null,inst_33285);
var state_33365__$1 = (function (){var statearr_33408 = state_33365;
(statearr_33408[(29)] = inst_33312);

return statearr_33408;
})();
if(cljs.core.truth_(inst_33313)){
var statearr_33409_33484 = state_33365__$1;
(statearr_33409_33484[(1)] = (29));

} else {
var statearr_33410_33485 = state_33365__$1;
(statearr_33410_33485[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33366 === (25))){
var inst_33283 = (state_33365[(25)]);
var inst_33299 = (state_33365[(2)]);
var inst_33300 = cljs.core.not_empty.call(null,inst_33283);
var state_33365__$1 = (function (){var statearr_33411 = state_33365;
(statearr_33411[(30)] = inst_33299);

return statearr_33411;
})();
if(cljs.core.truth_(inst_33300)){
var statearr_33412_33486 = state_33365__$1;
(statearr_33412_33486[(1)] = (26));

} else {
var statearr_33413_33487 = state_33365__$1;
(statearr_33413_33487[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33366 === (34))){
var inst_33334 = (state_33365[(2)]);
var state_33365__$1 = state_33365;
if(cljs.core.truth_(inst_33334)){
var statearr_33414_33488 = state_33365__$1;
(statearr_33414_33488[(1)] = (38));

} else {
var statearr_33415_33489 = state_33365__$1;
(statearr_33415_33489[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33366 === (17))){
var state_33365__$1 = state_33365;
var statearr_33416_33490 = state_33365__$1;
(statearr_33416_33490[(2)] = recompile_dependents);

(statearr_33416_33490[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33366 === (3))){
var state_33365__$1 = state_33365;
var statearr_33417_33491 = state_33365__$1;
(statearr_33417_33491[(2)] = null);

(statearr_33417_33491[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33366 === (12))){
var inst_33256 = (state_33365[(2)]);
var state_33365__$1 = state_33365;
var statearr_33418_33492 = state_33365__$1;
(statearr_33418_33492[(2)] = inst_33256);

(statearr_33418_33492[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33366 === (2))){
var inst_33218 = (state_33365[(13)]);
var inst_33225 = cljs.core.seq.call(null,inst_33218);
var inst_33226 = inst_33225;
var inst_33227 = null;
var inst_33228 = (0);
var inst_33229 = (0);
var state_33365__$1 = (function (){var statearr_33419 = state_33365;
(statearr_33419[(7)] = inst_33229);

(statearr_33419[(8)] = inst_33227);

(statearr_33419[(9)] = inst_33228);

(statearr_33419[(10)] = inst_33226);

return statearr_33419;
})();
var statearr_33420_33493 = state_33365__$1;
(statearr_33420_33493[(2)] = null);

(statearr_33420_33493[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33366 === (23))){
var inst_33282 = (state_33365[(23)]);
var inst_33287 = (state_33365[(24)]);
var inst_33283 = (state_33365[(25)]);
var inst_33285 = (state_33365[(26)]);
var inst_33279 = (state_33365[(19)]);
var inst_33290 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_33292 = (function (){var all_files = inst_33279;
var res_SINGLEQUOTE_ = inst_33282;
var res = inst_33283;
var files_not_loaded = inst_33285;
var dependencies_that_loaded = inst_33287;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33282,inst_33287,inst_33283,inst_33285,inst_33279,inst_33290,state_val_33366,c__19778__auto__,map__33211,map__33211__$1,opts,before_jsload,on_jsload,reload_dependents,map__33212,map__33212__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__33291){
var map__33421 = p__33291;
var map__33421__$1 = ((((!((map__33421 == null)))?((((map__33421.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33421.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33421):map__33421);
var request_url = cljs.core.get.call(null,map__33421__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33282,inst_33287,inst_33283,inst_33285,inst_33279,inst_33290,state_val_33366,c__19778__auto__,map__33211,map__33211__$1,opts,before_jsload,on_jsload,reload_dependents,map__33212,map__33212__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_33293 = cljs.core.reverse.call(null,inst_33287);
var inst_33294 = cljs.core.map.call(null,inst_33292,inst_33293);
var inst_33295 = cljs.core.pr_str.call(null,inst_33294);
var inst_33296 = figwheel.client.utils.log.call(null,inst_33295);
var state_33365__$1 = (function (){var statearr_33423 = state_33365;
(statearr_33423[(31)] = inst_33290);

return statearr_33423;
})();
var statearr_33424_33494 = state_33365__$1;
(statearr_33424_33494[(2)] = inst_33296);

(statearr_33424_33494[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33366 === (35))){
var state_33365__$1 = state_33365;
var statearr_33425_33495 = state_33365__$1;
(statearr_33425_33495[(2)] = true);

(statearr_33425_33495[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33366 === (19))){
var inst_33269 = (state_33365[(12)]);
var inst_33275 = figwheel.client.file_reloading.expand_files.call(null,inst_33269);
var state_33365__$1 = state_33365;
var statearr_33426_33496 = state_33365__$1;
(statearr_33426_33496[(2)] = inst_33275);

(statearr_33426_33496[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33366 === (11))){
var state_33365__$1 = state_33365;
var statearr_33427_33497 = state_33365__$1;
(statearr_33427_33497[(2)] = null);

(statearr_33427_33497[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33366 === (9))){
var inst_33258 = (state_33365[(2)]);
var state_33365__$1 = state_33365;
var statearr_33428_33498 = state_33365__$1;
(statearr_33428_33498[(2)] = inst_33258);

(statearr_33428_33498[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33366 === (5))){
var inst_33229 = (state_33365[(7)]);
var inst_33228 = (state_33365[(9)]);
var inst_33231 = (inst_33229 < inst_33228);
var inst_33232 = inst_33231;
var state_33365__$1 = state_33365;
if(cljs.core.truth_(inst_33232)){
var statearr_33429_33499 = state_33365__$1;
(statearr_33429_33499[(1)] = (7));

} else {
var statearr_33430_33500 = state_33365__$1;
(statearr_33430_33500[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33366 === (14))){
var inst_33239 = (state_33365[(22)]);
var inst_33248 = cljs.core.first.call(null,inst_33239);
var inst_33249 = figwheel.client.file_reloading.eval_body.call(null,inst_33248,opts);
var inst_33250 = cljs.core.next.call(null,inst_33239);
var inst_33226 = inst_33250;
var inst_33227 = null;
var inst_33228 = (0);
var inst_33229 = (0);
var state_33365__$1 = (function (){var statearr_33431 = state_33365;
(statearr_33431[(7)] = inst_33229);

(statearr_33431[(32)] = inst_33249);

(statearr_33431[(8)] = inst_33227);

(statearr_33431[(9)] = inst_33228);

(statearr_33431[(10)] = inst_33226);

return statearr_33431;
})();
var statearr_33432_33501 = state_33365__$1;
(statearr_33432_33501[(2)] = null);

(statearr_33432_33501[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33366 === (45))){
var state_33365__$1 = state_33365;
var statearr_33433_33502 = state_33365__$1;
(statearr_33433_33502[(2)] = null);

(statearr_33433_33502[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33366 === (26))){
var inst_33282 = (state_33365[(23)]);
var inst_33287 = (state_33365[(24)]);
var inst_33283 = (state_33365[(25)]);
var inst_33285 = (state_33365[(26)]);
var inst_33279 = (state_33365[(19)]);
var inst_33302 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_33304 = (function (){var all_files = inst_33279;
var res_SINGLEQUOTE_ = inst_33282;
var res = inst_33283;
var files_not_loaded = inst_33285;
var dependencies_that_loaded = inst_33287;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33282,inst_33287,inst_33283,inst_33285,inst_33279,inst_33302,state_val_33366,c__19778__auto__,map__33211,map__33211__$1,opts,before_jsload,on_jsload,reload_dependents,map__33212,map__33212__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__33303){
var map__33434 = p__33303;
var map__33434__$1 = ((((!((map__33434 == null)))?((((map__33434.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33434.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33434):map__33434);
var namespace = cljs.core.get.call(null,map__33434__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__33434__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33282,inst_33287,inst_33283,inst_33285,inst_33279,inst_33302,state_val_33366,c__19778__auto__,map__33211,map__33211__$1,opts,before_jsload,on_jsload,reload_dependents,map__33212,map__33212__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_33305 = cljs.core.map.call(null,inst_33304,inst_33283);
var inst_33306 = cljs.core.pr_str.call(null,inst_33305);
var inst_33307 = figwheel.client.utils.log.call(null,inst_33306);
var inst_33308 = (function (){var all_files = inst_33279;
var res_SINGLEQUOTE_ = inst_33282;
var res = inst_33283;
var files_not_loaded = inst_33285;
var dependencies_that_loaded = inst_33287;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33282,inst_33287,inst_33283,inst_33285,inst_33279,inst_33302,inst_33304,inst_33305,inst_33306,inst_33307,state_val_33366,c__19778__auto__,map__33211,map__33211__$1,opts,before_jsload,on_jsload,reload_dependents,map__33212,map__33212__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33282,inst_33287,inst_33283,inst_33285,inst_33279,inst_33302,inst_33304,inst_33305,inst_33306,inst_33307,state_val_33366,c__19778__auto__,map__33211,map__33211__$1,opts,before_jsload,on_jsload,reload_dependents,map__33212,map__33212__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_33309 = setTimeout(inst_33308,(10));
var state_33365__$1 = (function (){var statearr_33436 = state_33365;
(statearr_33436[(33)] = inst_33302);

(statearr_33436[(34)] = inst_33307);

return statearr_33436;
})();
var statearr_33437_33503 = state_33365__$1;
(statearr_33437_33503[(2)] = inst_33309);

(statearr_33437_33503[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33366 === (16))){
var state_33365__$1 = state_33365;
var statearr_33438_33504 = state_33365__$1;
(statearr_33438_33504[(2)] = reload_dependents);

(statearr_33438_33504[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33366 === (38))){
var inst_33319 = (state_33365[(16)]);
var inst_33336 = cljs.core.apply.call(null,cljs.core.hash_map,inst_33319);
var state_33365__$1 = state_33365;
var statearr_33439_33505 = state_33365__$1;
(statearr_33439_33505[(2)] = inst_33336);

(statearr_33439_33505[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33366 === (30))){
var state_33365__$1 = state_33365;
var statearr_33440_33506 = state_33365__$1;
(statearr_33440_33506[(2)] = null);

(statearr_33440_33506[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33366 === (10))){
var inst_33239 = (state_33365[(22)]);
var inst_33241 = cljs.core.chunked_seq_QMARK_.call(null,inst_33239);
var state_33365__$1 = state_33365;
if(inst_33241){
var statearr_33441_33507 = state_33365__$1;
(statearr_33441_33507[(1)] = (13));

} else {
var statearr_33442_33508 = state_33365__$1;
(statearr_33442_33508[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33366 === (18))){
var inst_33273 = (state_33365[(2)]);
var state_33365__$1 = state_33365;
if(cljs.core.truth_(inst_33273)){
var statearr_33443_33509 = state_33365__$1;
(statearr_33443_33509[(1)] = (19));

} else {
var statearr_33444_33510 = state_33365__$1;
(statearr_33444_33510[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33366 === (42))){
var state_33365__$1 = state_33365;
var statearr_33445_33511 = state_33365__$1;
(statearr_33445_33511[(2)] = null);

(statearr_33445_33511[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33366 === (37))){
var inst_33331 = (state_33365[(2)]);
var state_33365__$1 = state_33365;
var statearr_33446_33512 = state_33365__$1;
(statearr_33446_33512[(2)] = inst_33331);

(statearr_33446_33512[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33366 === (8))){
var inst_33226 = (state_33365[(10)]);
var inst_33239 = (state_33365[(22)]);
var inst_33239__$1 = cljs.core.seq.call(null,inst_33226);
var state_33365__$1 = (function (){var statearr_33447 = state_33365;
(statearr_33447[(22)] = inst_33239__$1);

return statearr_33447;
})();
if(inst_33239__$1){
var statearr_33448_33513 = state_33365__$1;
(statearr_33448_33513[(1)] = (10));

} else {
var statearr_33449_33514 = state_33365__$1;
(statearr_33449_33514[(1)] = (11));

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
}
});})(c__19778__auto__,map__33211,map__33211__$1,opts,before_jsload,on_jsload,reload_dependents,map__33212,map__33212__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__19713__auto__,c__19778__auto__,map__33211,map__33211__$1,opts,before_jsload,on_jsload,reload_dependents,map__33212,map__33212__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19714__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19714__auto____0 = (function (){
var statearr_33453 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33453[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__19714__auto__);

(statearr_33453[(1)] = (1));

return statearr_33453;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19714__auto____1 = (function (state_33365){
while(true){
var ret_value__19715__auto__ = (function (){try{while(true){
var result__19716__auto__ = switch__19713__auto__.call(null,state_33365);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19716__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19716__auto__;
}
break;
}
}catch (e33454){if((e33454 instanceof Object)){
var ex__19717__auto__ = e33454;
var statearr_33455_33515 = state_33365;
(statearr_33455_33515[(5)] = ex__19717__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33365);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33454;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33516 = state_33365;
state_33365 = G__33516;
continue;
} else {
return ret_value__19715__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__19714__auto__ = function(state_33365){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19714__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19714__auto____1.call(this,state_33365);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__19714__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19714__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__19714__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19714__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19714__auto__;
})()
;})(switch__19713__auto__,c__19778__auto__,map__33211,map__33211__$1,opts,before_jsload,on_jsload,reload_dependents,map__33212,map__33212__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__19780__auto__ = (function (){var statearr_33456 = f__19779__auto__.call(null);
(statearr_33456[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19778__auto__);

return statearr_33456;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19780__auto__);
});})(c__19778__auto__,map__33211,map__33211__$1,opts,before_jsload,on_jsload,reload_dependents,map__33212,map__33212__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__19778__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__33519,link){
var map__33522 = p__33519;
var map__33522__$1 = ((((!((map__33522 == null)))?((((map__33522.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33522.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33522):map__33522);
var file = cljs.core.get.call(null,map__33522__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__33522,map__33522__$1,file){
return (function (p1__33517_SHARP_,p2__33518_SHARP_){
if(cljs.core._EQ_.call(null,p1__33517_SHARP_,p2__33518_SHARP_)){
return p1__33517_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__33522,map__33522__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__33528){
var map__33529 = p__33528;
var map__33529__$1 = ((((!((map__33529 == null)))?((((map__33529.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33529.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33529):map__33529);
var match_length = cljs.core.get.call(null,map__33529__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__33529__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__33524_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__33524_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4425__auto__)){
var res = temp__4425__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args33531 = [];
var len__17507__auto___33534 = arguments.length;
var i__17508__auto___33535 = (0);
while(true){
if((i__17508__auto___33535 < len__17507__auto___33534)){
args33531.push((arguments[i__17508__auto___33535]));

var G__33536 = (i__17508__auto___33535 + (1));
i__17508__auto___33535 = G__33536;
continue;
} else {
}
break;
}

var G__33533 = args33531.length;
switch (G__33533) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33531.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__33538_SHARP_,p2__33539_SHARP_){
return cljs.core.assoc.call(null,p1__33538_SHARP_,cljs.core.get.call(null,p2__33539_SHARP_,key),p2__33539_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__33540){
var map__33543 = p__33540;
var map__33543__$1 = ((((!((map__33543 == null)))?((((map__33543.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33543.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33543):map__33543);
var f_data = map__33543__$1;
var file = cljs.core.get.call(null,map__33543__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__33545,files_msg){
var map__33552 = p__33545;
var map__33552__$1 = ((((!((map__33552 == null)))?((((map__33552.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33552.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33552):map__33552);
var opts = map__33552__$1;
var on_cssload = cljs.core.get.call(null,map__33552__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__33554_33558 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__33555_33559 = null;
var count__33556_33560 = (0);
var i__33557_33561 = (0);
while(true){
if((i__33557_33561 < count__33556_33560)){
var f_33562 = cljs.core._nth.call(null,chunk__33555_33559,i__33557_33561);
figwheel.client.file_reloading.reload_css_file.call(null,f_33562);

var G__33563 = seq__33554_33558;
var G__33564 = chunk__33555_33559;
var G__33565 = count__33556_33560;
var G__33566 = (i__33557_33561 + (1));
seq__33554_33558 = G__33563;
chunk__33555_33559 = G__33564;
count__33556_33560 = G__33565;
i__33557_33561 = G__33566;
continue;
} else {
var temp__4425__auto___33567 = cljs.core.seq.call(null,seq__33554_33558);
if(temp__4425__auto___33567){
var seq__33554_33568__$1 = temp__4425__auto___33567;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33554_33568__$1)){
var c__17252__auto___33569 = cljs.core.chunk_first.call(null,seq__33554_33568__$1);
var G__33570 = cljs.core.chunk_rest.call(null,seq__33554_33568__$1);
var G__33571 = c__17252__auto___33569;
var G__33572 = cljs.core.count.call(null,c__17252__auto___33569);
var G__33573 = (0);
seq__33554_33558 = G__33570;
chunk__33555_33559 = G__33571;
count__33556_33560 = G__33572;
i__33557_33561 = G__33573;
continue;
} else {
var f_33574 = cljs.core.first.call(null,seq__33554_33568__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_33574);

var G__33575 = cljs.core.next.call(null,seq__33554_33568__$1);
var G__33576 = null;
var G__33577 = (0);
var G__33578 = (0);
seq__33554_33558 = G__33575;
chunk__33555_33559 = G__33576;
count__33556_33560 = G__33577;
i__33557_33561 = G__33578;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__33552,map__33552__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__33552,map__33552__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map