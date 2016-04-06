// Compiled by ClojureScript 1.7.122 {:elide-asserts true}
goog.provide('veye2.pages.projects');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('clojure.string');
goog.require('veye2.actions.projects');
veye2.pages.projects.project_icon = (function veye2$pages$projects$project_icon(lang){
var G__28560 = clojure.string.lower_case.call(null,lang);
if(cljs.core._EQ_.call(null,"rubygem",G__28560)){
return "icon-ruby";
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"else","else",-1508377146),G__28560)){
return "icon-script";
} else {
if(cljs.core._EQ_.call(null,"bower",G__28560)){
return "icon-css";
} else {
if(cljs.core._EQ_.call(null,"lein",G__28560)){
return "icon-clojure";
} else {
if(cljs.core._EQ_.call(null,"cocoapods",G__28560)){
return "icon-objc";
} else {
if(cljs.core._EQ_.call(null,"composer",G__28560)){
return "icon-php";
} else {
if(cljs.core._EQ_.call(null,"gradle",G__28560)){
return "icon-gradle";
} else {
if(cljs.core._EQ_.call(null,"sbt",G__28560)){
return "icon-scala";
} else {
if(cljs.core._EQ_.call(null,"node.js",G__28560)){
return "icon-nodejs";
} else {
if(cljs.core._EQ_.call(null,"maven2",G__28560)){
return "icon-java";
} else {
if(cljs.core._EQ_.call(null,"biicode",G__28560)){
return "icon-cplusplus";
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(clojure.string.lower_case.call(null,lang))].join('')));

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
});
veye2.pages.projects.navbar = (function veye2$pages$projects$navbar(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav.navbar","nav.navbar",-121192499),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.navbar-left","div.navbar-left",784204232),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.navbar-item","div.navbar-item",-404991620),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"subtitle is-5"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"image is-32x32",new cljs.core.Keyword(null,"src","src",-1651076051),"images/logo-small.png"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.navbar-item","div.navbar-item",-404991620),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"is-text-centered"], null),"Veye/2"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.navbar-right","div.navbar-right",1396396432),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tabs","div.tabs",-1767258748),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"navbar-item"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"link is-info",new cljs.core.Keyword(null,"href","href",-793805698),"#"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"fa fa-eye-slash"], null)], null),"My projects"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"navbar-item"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"link is-info",new cljs.core.Keyword(null,"href","href",-793805698),"#"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"fa fa-search"], null)], null),"Search"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"navbar-item"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"link is-info",new cljs.core.Keyword(null,"href","href",-793805698),"#"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"I","I",1827140963),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"fa fa-power-off"], null)], null),"Logout"], null)], null)], null)], null)], null)], null);
});
veye2.pages.projects.project_list = (function veye2$pages$projects$project_list(projects_cur){
var filter_term = reagent.core.atom.call(null,"");
var apply_filter = ((function (filter_term){
return (function (items){
var ft = filter_term;
var match_QMARK_ = ((function (ft,filter_term){
return (function (term,project){
var or__16566__auto__ = clojure.string.lower_case.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(project)).includes(term);
if(cljs.core.truth_(or__16566__auto__)){
return or__16566__auto__;
} else {
return clojure.string.lower_case.call(null,new cljs.core.Keyword(null,"project_type","project_type",-1848513041).cljs$core$IFn$_invoke$arity$1(project)).includes(term);
}
});})(ft,filter_term))
;
if(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,ft))){
return items;
} else {
return cljs.core.doall.call(null,cljs.core.filter.call(null,((function (ft,match_QMARK_,filter_term){
return (function (p1__28561_SHARP_){
return match_QMARK_.call(null,cljs.core.deref.call(null,ft),p1__28561_SHARP_);
});})(ft,match_QMARK_,filter_term))
,items));
}
});})(filter_term))
;
var on_select = ((function (filter_term,apply_filter){
return (function (ev){
var item_el = ev.target.closest("a.panel-block");
var project_id = item_el.getAttribute("data-id");
return cljs.core.swap_BANG_.call(null,projects_cur,cljs.core.assoc,new cljs.core.Keyword(null,"selected","selected",574897764),project_id);
});})(filter_term,apply_filter))
;
var on_filter_update = ((function (filter_term,apply_filter,on_select){
return (function (ev){
var ft = filter_term;
var v = [cljs.core.str(ev.target.value)].join('');
return cljs.core.reset_BANG_.call(null,ft,v);
});})(filter_term,apply_filter,on_select))
;
var on_filter_reset = ((function (filter_term,apply_filter,on_select,on_filter_update){
return (function (ev){
var ft = filter_term;
var filter_el = document.getElementById("project-filter-input");
cljs.core.reset_BANG_.call(null,ft,"");

return filter_el.value = "";
});})(filter_term,apply_filter,on_select,on_filter_update))
;
return ((function (filter_term,apply_filter,on_select,on_filter_update,on_filter_reset){
return (function (){
var filtered_projects = apply_filter.call(null,new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,projects_cur)));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav.panel","nav.panel",-933286493),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.panel-heading","p.panel-heading",1850435418),"Projects: ",cljs.core.count.call(null,filtered_projects)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"control has-addons"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),"project-filter-input",new cljs.core.Keyword(null,"class","class",-2030961996),"input project-filter",new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Filter projects",new cljs.core.Keyword(null,"default-value","default-value",232220170),[cljs.core.str(cljs.core.deref.call(null,filter_term))].join(''),new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_filter_update], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"button is-primary",new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_filter_reset,new cljs.core.Keyword(null,"title","title",636505583),"Clear the filter"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"fa fa-remove"], null)], null)], null)], null),(function (){var iter__17338__auto__ = ((function (filtered_projects,filter_term,apply_filter,on_select,on_filter_update,on_filter_reset){
return (function veye2$pages$projects$project_list_$_iter__28566(s__28567){
return (new cljs.core.LazySeq(null,((function (filtered_projects,filter_term,apply_filter,on_select,on_filter_update,on_filter_reset){
return (function (){
var s__28567__$1 = s__28567;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__28567__$1);
if(temp__4425__auto__){
var s__28567__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28567__$2)){
var c__17336__auto__ = cljs.core.chunk_first.call(null,s__28567__$2);
var size__17337__auto__ = cljs.core.count.call(null,c__17336__auto__);
var b__28569 = cljs.core.chunk_buffer.call(null,size__17337__auto__);
if((function (){var i__28568 = (0);
while(true){
if((i__28568 < size__17337__auto__)){
var project = cljs.core._nth.call(null,c__17336__auto__,i__28568);
cljs.core.chunk_append.call(null,b__28569,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("panel-block "),cljs.core.str(((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,projects_cur)),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(project)))?"is-active":null))].join(''),new cljs.core.Keyword(null,"data-id","data-id",1023855591),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(project),new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_select], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.menu-icon","span.menu-icon",-986462898),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("fg-green "),cljs.core.str(veye2.pages.projects.project_icon.call(null,new cljs.core.Keyword(null,"project_type","project_type",-1848513041).cljs$core$IFn$_invoke$arity$1(project)))].join('')], null)], null)], null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(project)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(project)], null)));

var G__28570 = (i__28568 + (1));
i__28568 = G__28570;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28569),veye2$pages$projects$project_list_$_iter__28566.call(null,cljs.core.chunk_rest.call(null,s__28567__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28569),null);
}
} else {
var project = cljs.core.first.call(null,s__28567__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("panel-block "),cljs.core.str(((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,projects_cur)),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(project)))?"is-active":null))].join(''),new cljs.core.Keyword(null,"data-id","data-id",1023855591),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(project),new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_select], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.menu-icon","span.menu-icon",-986462898),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("fg-green "),cljs.core.str(veye2.pages.projects.project_icon.call(null,new cljs.core.Keyword(null,"project_type","project_type",-1848513041).cljs$core$IFn$_invoke$arity$1(project)))].join('')], null)], null)], null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(project)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(project)], null)),veye2$pages$projects$project_list_$_iter__28566.call(null,cljs.core.rest.call(null,s__28567__$2)));
}
} else {
return null;
}
break;
}
});})(filtered_projects,filter_term,apply_filter,on_select,on_filter_update,on_filter_reset))
,null,null));
});})(filtered_projects,filter_term,apply_filter,on_select,on_filter_update,on_filter_reset))
;
return iter__17338__auto__.call(null,filtered_projects);
})()], null);
});
;})(filter_term,apply_filter,on_select,on_filter_update,on_filter_reset))
});
veye2.pages.projects.project_dependency_table = (function veye2$pages$projects$project_dependency_table(the_project){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.table","table.table",-538258781),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Package name"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Outdated?"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Locked version"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Newest version"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Licenses"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var iter__17338__auto__ = (function veye2$pages$projects$project_dependency_table_$_iter__28591(s__28592){
return (new cljs.core.LazySeq(null,(function (){
var s__28592__$1 = s__28592;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__28592__$1);
if(temp__4425__auto__){
var s__28592__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28592__$2)){
var c__17336__auto__ = cljs.core.chunk_first.call(null,s__28592__$2);
var size__17337__auto__ = cljs.core.count.call(null,c__17336__auto__);
var b__28594 = cljs.core.chunk_buffer.call(null,size__17337__auto__);
if((function (){var i__28593 = (0);
while(true){
if((i__28593 < size__17337__auto__)){
var dep = cljs.core._nth.call(null,c__17336__auto__,i__28593);
cljs.core.chunk_append.call(null,b__28594,cljs.core.with_meta(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(dep)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),((new cljs.core.Keyword(null,"outdated","outdated",-33910140).cljs$core$IFn$_invoke$arity$1(dep) === true)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"fa fa-frown-o fg-red",new cljs.core.Keyword(null,"title","title",636505583),"Outdated"], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"fa fa-smile-o fg-green",new cljs.core.Keyword(null,"title","title",636505583),"Fine"], null)], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"version_requested","version_requested",680675093).cljs$core$IFn$_invoke$arity$1(dep)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"version_current","version_current",1007435391).cljs$core$IFn$_invoke$arity$1(dep)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"table-link"], null),(function (){var iter__17338__auto__ = ((function (i__28593,dep,c__17336__auto__,size__17337__auto__,b__28594,s__28592__$2,temp__4425__auto__){
return (function veye2$pages$projects$project_dependency_table_$_iter__28591_$_iter__28603(s__28604){
return (new cljs.core.LazySeq(null,((function (i__28593,dep,c__17336__auto__,size__17337__auto__,b__28594,s__28592__$2,temp__4425__auto__){
return (function (){
var s__28604__$1 = s__28604;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__28604__$1);
if(temp__4425__auto____$1){
var s__28604__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28604__$2)){
var c__17336__auto____$1 = cljs.core.chunk_first.call(null,s__28604__$2);
var size__17337__auto____$1 = cljs.core.count.call(null,c__17336__auto____$1);
var b__28606 = cljs.core.chunk_buffer.call(null,size__17337__auto____$1);
if((function (){var i__28605 = (0);
while(true){
if((i__28605 < size__17337__auto____$1)){
var lic = cljs.core._nth.call(null,c__17336__auto____$1,i__28605);
cljs.core.chunk_append.call(null,b__28606,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(lic),new cljs.core.Keyword(null,"target","target",253001721),"_new"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(lic)], null)], null));

var G__28611 = (i__28605 + (1));
i__28605 = G__28611;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28606),veye2$pages$projects$project_dependency_table_$_iter__28591_$_iter__28603.call(null,cljs.core.chunk_rest.call(null,s__28604__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28606),null);
}
} else {
var lic = cljs.core.first.call(null,s__28604__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(lic),new cljs.core.Keyword(null,"target","target",253001721),"_new"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(lic)], null)], null),veye2$pages$projects$project_dependency_table_$_iter__28591_$_iter__28603.call(null,cljs.core.rest.call(null,s__28604__$2)));
}
} else {
return null;
}
break;
}
});})(i__28593,dep,c__17336__auto__,size__17337__auto__,b__28594,s__28592__$2,temp__4425__auto__))
,null,null));
});})(i__28593,dep,c__17336__auto__,size__17337__auto__,b__28594,s__28592__$2,temp__4425__auto__))
;
return iter__17338__auto__.call(null,new cljs.core.Keyword(null,"licenses","licenses",521774891).cljs$core$IFn$_invoke$arity$1(dep));
})()], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str(new cljs.core.Keyword(null,"prod_key","prod_key",-742533133).cljs$core$IFn$_invoke$arity$1(dep)),cljs.core.str("-"),cljs.core.str(new cljs.core.Keyword(null,"version_requested","version_requested",680675093).cljs$core$IFn$_invoke$arity$1(dep))].join('')], null)));

var G__28612 = (i__28593 + (1));
i__28593 = G__28612;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28594),veye2$pages$projects$project_dependency_table_$_iter__28591.call(null,cljs.core.chunk_rest.call(null,s__28592__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28594),null);
}
} else {
var dep = cljs.core.first.call(null,s__28592__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(dep)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),((new cljs.core.Keyword(null,"outdated","outdated",-33910140).cljs$core$IFn$_invoke$arity$1(dep) === true)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"fa fa-frown-o fg-red",new cljs.core.Keyword(null,"title","title",636505583),"Outdated"], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"fa fa-smile-o fg-green",new cljs.core.Keyword(null,"title","title",636505583),"Fine"], null)], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"version_requested","version_requested",680675093).cljs$core$IFn$_invoke$arity$1(dep)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"version_current","version_current",1007435391).cljs$core$IFn$_invoke$arity$1(dep)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"table-link"], null),(function (){var iter__17338__auto__ = ((function (dep,s__28592__$2,temp__4425__auto__){
return (function veye2$pages$projects$project_dependency_table_$_iter__28591_$_iter__28607(s__28608){
return (new cljs.core.LazySeq(null,((function (dep,s__28592__$2,temp__4425__auto__){
return (function (){
var s__28608__$1 = s__28608;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__28608__$1);
if(temp__4425__auto____$1){
var s__28608__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28608__$2)){
var c__17336__auto__ = cljs.core.chunk_first.call(null,s__28608__$2);
var size__17337__auto__ = cljs.core.count.call(null,c__17336__auto__);
var b__28610 = cljs.core.chunk_buffer.call(null,size__17337__auto__);
if((function (){var i__28609 = (0);
while(true){
if((i__28609 < size__17337__auto__)){
var lic = cljs.core._nth.call(null,c__17336__auto__,i__28609);
cljs.core.chunk_append.call(null,b__28610,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(lic),new cljs.core.Keyword(null,"target","target",253001721),"_new"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(lic)], null)], null));

var G__28613 = (i__28609 + (1));
i__28609 = G__28613;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28610),veye2$pages$projects$project_dependency_table_$_iter__28591_$_iter__28607.call(null,cljs.core.chunk_rest.call(null,s__28608__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28610),null);
}
} else {
var lic = cljs.core.first.call(null,s__28608__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(lic),new cljs.core.Keyword(null,"target","target",253001721),"_new"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(lic)], null)], null),veye2$pages$projects$project_dependency_table_$_iter__28591_$_iter__28607.call(null,cljs.core.rest.call(null,s__28608__$2)));
}
} else {
return null;
}
break;
}
});})(dep,s__28592__$2,temp__4425__auto__))
,null,null));
});})(dep,s__28592__$2,temp__4425__auto__))
;
return iter__17338__auto__.call(null,new cljs.core.Keyword(null,"licenses","licenses",521774891).cljs$core$IFn$_invoke$arity$1(dep));
})()], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str(new cljs.core.Keyword(null,"prod_key","prod_key",-742533133).cljs$core$IFn$_invoke$arity$1(dep)),cljs.core.str("-"),cljs.core.str(new cljs.core.Keyword(null,"version_requested","version_requested",680675093).cljs$core$IFn$_invoke$arity$1(dep))].join('')], null)),veye2$pages$projects$project_dependency_table_$_iter__28591.call(null,cljs.core.rest.call(null,s__28592__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17338__auto__.call(null,cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"outdated","outdated",-33910140),cljs.core._GT_,new cljs.core.Keyword(null,"dependencies","dependencies",1108064605).cljs$core$IFn$_invoke$arity$1(the_project)));
})()], null)], null);
});
});
veye2.pages.projects.project_detail = (function veye2$pages$projects$project_detail(projects_cur){
return (function (){
var selected_id = new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,projects_cur));
var the_project = cljs.core.get_in.call(null,cljs.core.deref.call(null,projects_cur),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"details","details",1956795411),selected_id], null));
var n_outdated = cljs.core.count.call(null,cljs.core.filter.call(null,((function (selected_id,the_project){
return (function (x){
return new cljs.core.Keyword(null,"outdated","outdated",-33910140).cljs$core$IFn$_invoke$arity$1(x) === true;
});})(selected_id,the_project))
,new cljs.core.Keyword(null,"dependencies","dependencies",1108064605).cljs$core$IFn$_invoke$arity$1(the_project)));
var on_close = ((function (selected_id,the_project,n_outdated){
return (function (ev){
return cljs.core.swap_BANG_.call(null,projects_cur,cljs.core.assoc,new cljs.core.Keyword(null,"selected","selected",574897764),null);
});})(selected_id,the_project,n_outdated))
;
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"pull-right"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"button is-success is-outlined",new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_close], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.icon","span.icon",-1181275586),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"fa fa-times"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"close"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.heading","div.heading",-1527964144),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.title","h1.title",-2139952071),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(the_project),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small","small",2133478704),[cljs.core.str("(id: "),cljs.core.str(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(the_project)),cljs.core.str(")")].join('')], null)], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav.navbar","nav.navbar",-121192499),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, ["backgroundColor","floralwhite"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"navbar-item is-text-centered"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.heading","p.heading",938013724),"PkgManager"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.title","p.title",-1265013094),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("fg-green "),cljs.core.str(veye2.pages.projects.project_icon.call(null,new cljs.core.Keyword(null,"project_type","project_type",-1848513041).cljs$core$IFn$_invoke$arity$1(the_project)))].join(''),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"project_type","project_type",-1848513041).cljs$core$IFn$_invoke$arity$1(the_project)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"navbar-item is-text-centered"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.heading","p.heading",938013724),"Dependencies"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.title","p.title",-1265013094),new cljs.core.Keyword(null,"dep_number","dep_number",212270215).cljs$core$IFn$_invoke$arity$1(the_project)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"navbar-item is-text-centered"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.heading","p.heading",938013724),"Outdated"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.title","p.title",-1265013094),n_outdated], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"navbar-item is-text-centered"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.heading","p.heading",938013724),"License:Conflict"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.title","p.title",-1265013094),new cljs.core.Keyword(null,"licenses_red","licenses_red",1152545035).cljs$core$IFn$_invoke$arity$1(the_project)], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [veye2.pages.projects.project_dependency_table.call(null,the_project)], null)], null);
});
});
veye2.pages.projects.project_summary_tile = (function veye2$pages$projects$project_summary_tile(db){
var projects = cljs.core.get_in.call(null,cljs.core.deref.call(null,db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"projects","projects",-364845983),new cljs.core.Keyword(null,"details","details",1956795411)], null));
var n_projects = cljs.core.count.call(null,projects);
var n_deps = cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,((function (projects,n_projects){
return (function (p__28618){
var vec__28619 = p__28618;
var id = cljs.core.nth.call(null,vec__28619,(0),null);
var p = cljs.core.nth.call(null,vec__28619,(1),null);
return cljs.core.count.call(null,new cljs.core.Keyword(null,"dependencies","dependencies",1108064605).cljs$core$IFn$_invoke$arity$1(p));
});})(projects,n_projects))
,projects));
var n_outdated = cljs.core.count.call(null,cljs.core.filter.call(null,cljs.core.true_QMARK_,cljs.core.map.call(null,((function (projects,n_projects,n_deps){
return (function (dep){
return new cljs.core.Keyword(null,"outdated","outdated",-33910140).cljs$core$IFn$_invoke$arity$1(dep);
});})(projects,n_projects,n_deps))
,cljs.core.flatten.call(null,cljs.core.map.call(null,((function (projects,n_projects,n_deps){
return (function (p__28620){
var vec__28621 = p__28620;
var id = cljs.core.nth.call(null,vec__28621,(0),null);
var p = cljs.core.nth.call(null,vec__28621,(1),null);
return new cljs.core.Keyword(null,"dependencies","dependencies",1108064605).cljs$core$IFn$_invoke$arity$1(p);
});})(projects,n_projects,n_deps))
,projects)))));
return ((function (projects,n_projects,n_deps,n_outdated){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"card is-half"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"card-header"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"card-header-title"], null),"Projects summary"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-content","div.card-content",1464214949),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.content","div.content",-298042649),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"Projects: "], null),(function (){var or__16566__auto__ = n_projects;
if(cljs.core.truth_(or__16566__auto__)){
return or__16566__auto__;
} else {
return "-";
}
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"Dependencies: "], null),(function (){var or__16566__auto__ = n_deps;
if(cljs.core.truth_(or__16566__auto__)){
return or__16566__auto__;
} else {
return "-";
}
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"Outdated: "], null),(function (){var or__16566__auto__ = n_outdated;
if(cljs.core.truth_(or__16566__auto__)){
return or__16566__auto__;
} else {
return "-";
}
})()], null)], null)], null)], null)], null);
});
;})(projects,n_projects,n_deps,n_outdated))
});
veye2.pages.projects.project_cache_tile = (function veye2$pages$projects$project_cache_tile(db){
var from_time = cljs.core.get_in.call(null,cljs.core.deref.call(null,db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"projects","projects",-364845983),new cljs.core.Keyword(null,"updated_at","updated_at",-460224592)], null),(0));
var time_ago = moment(from_time).fromNow();
return ((function (from_time,time_ago){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"card"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"card-header"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"card-header-title"], null),"Sync details"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"card-header-icon"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"fa fa-refresh",new cljs.core.Keyword(null,"title","title",636505583),"Pull latest details from the VersionEye"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-content","div.card-content",1464214949),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.content","div.content",-298042649),"Cache was updated: ",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),[cljs.core.str(time_ago)].join('')], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"footer.card-footer","footer.card-footer",1618482451),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"card-footer-item"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"fa fa-refresh"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"re-import projects"], null)], null)], null)], null);
});
;})(from_time,time_ago))
});
veye2.pages.projects.project_license_tile = (function veye2$pages$projects$project_license_tile(db){
var projects = cljs.core.vals.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"projects","projects",-364845983),new cljs.core.Keyword(null,"details","details",1956795411)], null)));
var n_unknown = cljs.core.reduce.call(null,cljs.core._PLUS_,(0),cljs.core.map.call(null,new cljs.core.Keyword(null,"licenses_unknown","licenses_unknown",1529076534),projects));
var n_red = cljs.core.reduce.call(null,cljs.core._PLUS_,(0),cljs.core.map.call(null,new cljs.core.Keyword(null,"licenses_red","licenses_red",1152545035),projects));
var n_whitelist = cljs.core.count.call(null,cljs.core.remove.call(null,cljs.core.empty_QMARK_,cljs.core.map.call(null,new cljs.core.Keyword(null,"license_whitelist","license_whitelist",1880939082),projects)));
return ((function (projects,n_unknown,n_red,n_whitelist){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"card is-half"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"card-header"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"card-header-title"], null),"Licenses overview"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-content","div.card-content",1464214949),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.content","div.content",-298042649),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"Unknown:  "], null),(function (){var or__16566__auto__ = n_unknown;
if(cljs.core.truth_(or__16566__auto__)){
return or__16566__auto__;
} else {
return "-";
}
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"In red: "], null),(function (){var or__16566__auto__ = n_red;
if(cljs.core.truth_(or__16566__auto__)){
return or__16566__auto__;
} else {
return "-";
}
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"In whitelist: "], null),(function (){var or__16566__auto__ = n_whitelist;
if(cljs.core.truth_(or__16566__auto__)){
return or__16566__auto__;
} else {
return "-";
}
})()], null)], null)], null)], null)], null);
});
;})(projects,n_unknown,n_red,n_whitelist))
});
veye2.pages.projects.project_home = (function veye2$pages$projects$project_home(db){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.content","div.content",-298042649),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header.title","header.title",-447168475),"Projects dashboard"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Here you can manage your and your organization projects.",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),""], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"columns is-multiline"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"column is-half"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [veye2.pages.projects.project_summary_tile,db], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"column is-half"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [veye2.pages.projects.project_license_tile,db], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"column is-half"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [veye2.pages.projects.project_cache_tile,db], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"column is-half"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"button is-outline is-large is-info"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.icon","span.icon",-1181275586),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"fa fa-file-code-o"], null)], null)], null),"Upload from file"], null)], null)], null)], null);
});
});
veye2.pages.projects.render = (function veye2$pages$projects$render(db){
var projects_cur = reagent.core.cursor.call(null,db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"projects","projects",-364845983)], null));
return ((function (projects_cur){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"is-medium"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [veye2.pages.projects.navbar], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.columns","div.columns",-437221213),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"column is-third"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [veye2.pages.projects.project_list,projects_cur], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"column is-auto"], null),(((new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,projects_cur)) == null))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [veye2.pages.projects.project_home,db], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [veye2.pages.projects.project_detail,projects_cur], null))], null)], null)], null)], null);
});
;})(projects_cur))
});

//# sourceMappingURL=projects.js.map