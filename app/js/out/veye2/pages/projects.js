// Compiled by ClojureScript 1.7.122 {:elide-asserts true}
goog.provide('veye2.pages.projects');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('clojure.string');
veye2.pages.projects.project_icon = (function veye2$pages$projects$project_icon(lang){
var G__29104 = clojure.string.lower_case.call(null,lang);
if(cljs.core._EQ_.call(null,"rubygem",G__29104)){
return "icon-ruby";
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"else","else",-1508377146),G__29104)){
return "icon-script";
} else {
if(cljs.core._EQ_.call(null,"bower",G__29104)){
return "icon-css";
} else {
if(cljs.core._EQ_.call(null,"lein",G__29104)){
return "icon-clojure";
} else {
if(cljs.core._EQ_.call(null,"cocoapods",G__29104)){
return "icon-objc";
} else {
if(cljs.core._EQ_.call(null,"composer",G__29104)){
return "icon-php";
} else {
if(cljs.core._EQ_.call(null,"gradle",G__29104)){
return "icon-gradle";
} else {
if(cljs.core._EQ_.call(null,"sbt",G__29104)){
return "icon-scala";
} else {
if(cljs.core._EQ_.call(null,"node.js",G__29104)){
return "icon-nodejs";
} else {
if(cljs.core._EQ_.call(null,"maven2",G__29104)){
return "icon-java";
} else {
if(cljs.core._EQ_.call(null,"biicode",G__29104)){
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
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav.navbar","nav.navbar",-121192499),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.navbar-left","div.navbar-left",784204232),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.navbar-item","div.navbar-item",-404991620),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"subtitle is-5"], null),"Veye/2"], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.navbar-right","div.navbar-right",1396396432),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"navbar-item"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"link is-info",new cljs.core.Keyword(null,"href","href",-793805698),"#"], null),"My projects |"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"navbar-item"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"link is-info",new cljs.core.Keyword(null,"href","href",-793805698),"#"], null),"Search |"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"navbar-item"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"link is-info",new cljs.core.Keyword(null,"href","href",-793805698),"#"], null),"Logout"], null)], null)], null)], null);
});
veye2.pages.projects.project_list = (function veye2$pages$projects$project_list(projects_cur){
var on_select = (function (ev){
var item_el = ev.target.closest("a.menu-block");
var project_id = item_el.getAttribute("data-id");
console.debug([cljs.core.str("selected project: "),cljs.core.str(project_id)].join(''));

return cljs.core.swap_BANG_.call(null,projects_cur,cljs.core.assoc,new cljs.core.Keyword(null,"selected","selected",574897764),project_id);
});
return ((function (on_select){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav.menu","nav.menu",712557538),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.menu-heading","p.menu-heading",1706356722),"Projects: ",cljs.core.count.call(null,new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,projects_cur)))], null),(function (){var iter__17338__auto__ = ((function (on_select){
return (function veye2$pages$projects$project_list_$_iter__29109(s__29110){
return (new cljs.core.LazySeq(null,((function (on_select){
return (function (){
var s__29110__$1 = s__29110;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__29110__$1);
if(temp__4425__auto__){
var s__29110__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__29110__$2)){
var c__17336__auto__ = cljs.core.chunk_first.call(null,s__29110__$2);
var size__17337__auto__ = cljs.core.count.call(null,c__17336__auto__);
var b__29112 = cljs.core.chunk_buffer.call(null,size__17337__auto__);
if((function (){var i__29111 = (0);
while(true){
if((i__29111 < size__17337__auto__)){
var project = cljs.core._nth.call(null,c__17336__auto__,i__29111);
cljs.core.chunk_append.call(null,b__29112,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("menu-block "),cljs.core.str(((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,projects_cur)),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(project)))?"is-active":null))].join(''),new cljs.core.Keyword(null,"data-id","data-id",1023855591),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(project),new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_select], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.menu-icon","span.menu-icon",-986462898),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("fg-green "),cljs.core.str(veye2.pages.projects.project_icon.call(null,new cljs.core.Keyword(null,"project_type","project_type",-1848513041).cljs$core$IFn$_invoke$arity$1(project)))].join('')], null)], null)], null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(project)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(project)], null)));

var G__29113 = (i__29111 + (1));
i__29111 = G__29113;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29112),veye2$pages$projects$project_list_$_iter__29109.call(null,cljs.core.chunk_rest.call(null,s__29110__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29112),null);
}
} else {
var project = cljs.core.first.call(null,s__29110__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("menu-block "),cljs.core.str(((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,projects_cur)),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(project)))?"is-active":null))].join(''),new cljs.core.Keyword(null,"data-id","data-id",1023855591),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(project),new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_select], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.menu-icon","span.menu-icon",-986462898),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("fg-green "),cljs.core.str(veye2.pages.projects.project_icon.call(null,new cljs.core.Keyword(null,"project_type","project_type",-1848513041).cljs$core$IFn$_invoke$arity$1(project)))].join('')], null)], null)], null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(project)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(project)], null)),veye2$pages$projects$project_list_$_iter__29109.call(null,cljs.core.rest.call(null,s__29110__$2)));
}
} else {
return null;
}
break;
}
});})(on_select))
,null,null));
});})(on_select))
;
return iter__17338__auto__.call(null,new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,projects_cur)));
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.menu-block","div.menu-block",-967673767),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"button is-primary is-outlined is-fullwidth"], null),"Reload"], null)], null)], null);
});
;})(on_select))
});
veye2.pages.projects.project_dependency_table = (function veye2$pages$projects$project_dependency_table(the_project){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.table","table.table",-538258781),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Package name"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Outdated?"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Locked version"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Newest version"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Licenses"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var iter__17338__auto__ = (function veye2$pages$projects$project_dependency_table_$_iter__29134(s__29135){
return (new cljs.core.LazySeq(null,(function (){
var s__29135__$1 = s__29135;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__29135__$1);
if(temp__4425__auto__){
var s__29135__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__29135__$2)){
var c__17336__auto__ = cljs.core.chunk_first.call(null,s__29135__$2);
var size__17337__auto__ = cljs.core.count.call(null,c__17336__auto__);
var b__29137 = cljs.core.chunk_buffer.call(null,size__17337__auto__);
if((function (){var i__29136 = (0);
while(true){
if((i__29136 < size__17337__auto__)){
var dep = cljs.core._nth.call(null,c__17336__auto__,i__29136);
cljs.core.chunk_append.call(null,b__29137,cljs.core.with_meta(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(dep)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),((new cljs.core.Keyword(null,"outdated","outdated",-33910140).cljs$core$IFn$_invoke$arity$1(dep) === true)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"fa fa-frown-o fg-red",new cljs.core.Keyword(null,"title","title",636505583),"Outdated"], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"fa fa-smile-o fg-green",new cljs.core.Keyword(null,"title","title",636505583),"Fine"], null)], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"version_requested","version_requested",680675093).cljs$core$IFn$_invoke$arity$1(dep)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"version_current","version_current",1007435391).cljs$core$IFn$_invoke$arity$1(dep)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"table-link"], null),(function (){var iter__17338__auto__ = ((function (i__29136,dep,c__17336__auto__,size__17337__auto__,b__29137,s__29135__$2,temp__4425__auto__){
return (function veye2$pages$projects$project_dependency_table_$_iter__29134_$_iter__29146(s__29147){
return (new cljs.core.LazySeq(null,((function (i__29136,dep,c__17336__auto__,size__17337__auto__,b__29137,s__29135__$2,temp__4425__auto__){
return (function (){
var s__29147__$1 = s__29147;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__29147__$1);
if(temp__4425__auto____$1){
var s__29147__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__29147__$2)){
var c__17336__auto____$1 = cljs.core.chunk_first.call(null,s__29147__$2);
var size__17337__auto____$1 = cljs.core.count.call(null,c__17336__auto____$1);
var b__29149 = cljs.core.chunk_buffer.call(null,size__17337__auto____$1);
if((function (){var i__29148 = (0);
while(true){
if((i__29148 < size__17337__auto____$1)){
var lic = cljs.core._nth.call(null,c__17336__auto____$1,i__29148);
cljs.core.chunk_append.call(null,b__29149,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(lic),new cljs.core.Keyword(null,"target","target",253001721),"_new"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(lic)], null)], null));

var G__29154 = (i__29148 + (1));
i__29148 = G__29154;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29149),veye2$pages$projects$project_dependency_table_$_iter__29134_$_iter__29146.call(null,cljs.core.chunk_rest.call(null,s__29147__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29149),null);
}
} else {
var lic = cljs.core.first.call(null,s__29147__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(lic),new cljs.core.Keyword(null,"target","target",253001721),"_new"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(lic)], null)], null),veye2$pages$projects$project_dependency_table_$_iter__29134_$_iter__29146.call(null,cljs.core.rest.call(null,s__29147__$2)));
}
} else {
return null;
}
break;
}
});})(i__29136,dep,c__17336__auto__,size__17337__auto__,b__29137,s__29135__$2,temp__4425__auto__))
,null,null));
});})(i__29136,dep,c__17336__auto__,size__17337__auto__,b__29137,s__29135__$2,temp__4425__auto__))
;
return iter__17338__auto__.call(null,new cljs.core.Keyword(null,"licenses","licenses",521774891).cljs$core$IFn$_invoke$arity$1(dep));
})()], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str(new cljs.core.Keyword(null,"prod_key","prod_key",-742533133).cljs$core$IFn$_invoke$arity$1(dep)),cljs.core.str("-"),cljs.core.str(new cljs.core.Keyword(null,"version_requested","version_requested",680675093).cljs$core$IFn$_invoke$arity$1(dep))].join('')], null)));

var G__29155 = (i__29136 + (1));
i__29136 = G__29155;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29137),veye2$pages$projects$project_dependency_table_$_iter__29134.call(null,cljs.core.chunk_rest.call(null,s__29135__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29137),null);
}
} else {
var dep = cljs.core.first.call(null,s__29135__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(dep)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),((new cljs.core.Keyword(null,"outdated","outdated",-33910140).cljs$core$IFn$_invoke$arity$1(dep) === true)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"fa fa-frown-o fg-red",new cljs.core.Keyword(null,"title","title",636505583),"Outdated"], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"fa fa-smile-o fg-green",new cljs.core.Keyword(null,"title","title",636505583),"Fine"], null)], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"version_requested","version_requested",680675093).cljs$core$IFn$_invoke$arity$1(dep)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"version_current","version_current",1007435391).cljs$core$IFn$_invoke$arity$1(dep)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"table-link"], null),(function (){var iter__17338__auto__ = ((function (dep,s__29135__$2,temp__4425__auto__){
return (function veye2$pages$projects$project_dependency_table_$_iter__29134_$_iter__29150(s__29151){
return (new cljs.core.LazySeq(null,((function (dep,s__29135__$2,temp__4425__auto__){
return (function (){
var s__29151__$1 = s__29151;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__29151__$1);
if(temp__4425__auto____$1){
var s__29151__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__29151__$2)){
var c__17336__auto__ = cljs.core.chunk_first.call(null,s__29151__$2);
var size__17337__auto__ = cljs.core.count.call(null,c__17336__auto__);
var b__29153 = cljs.core.chunk_buffer.call(null,size__17337__auto__);
if((function (){var i__29152 = (0);
while(true){
if((i__29152 < size__17337__auto__)){
var lic = cljs.core._nth.call(null,c__17336__auto__,i__29152);
cljs.core.chunk_append.call(null,b__29153,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(lic),new cljs.core.Keyword(null,"target","target",253001721),"_new"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(lic)], null)], null));

var G__29156 = (i__29152 + (1));
i__29152 = G__29156;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29153),veye2$pages$projects$project_dependency_table_$_iter__29134_$_iter__29150.call(null,cljs.core.chunk_rest.call(null,s__29151__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29153),null);
}
} else {
var lic = cljs.core.first.call(null,s__29151__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(lic),new cljs.core.Keyword(null,"target","target",253001721),"_new"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(lic)], null)], null),veye2$pages$projects$project_dependency_table_$_iter__29134_$_iter__29150.call(null,cljs.core.rest.call(null,s__29151__$2)));
}
} else {
return null;
}
break;
}
});})(dep,s__29135__$2,temp__4425__auto__))
,null,null));
});})(dep,s__29135__$2,temp__4425__auto__))
;
return iter__17338__auto__.call(null,new cljs.core.Keyword(null,"licenses","licenses",521774891).cljs$core$IFn$_invoke$arity$1(dep));
})()], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str(new cljs.core.Keyword(null,"prod_key","prod_key",-742533133).cljs$core$IFn$_invoke$arity$1(dep)),cljs.core.str("-"),cljs.core.str(new cljs.core.Keyword(null,"version_requested","version_requested",680675093).cljs$core$IFn$_invoke$arity$1(dep))].join('')], null)),veye2$pages$projects$project_dependency_table_$_iter__29134.call(null,cljs.core.rest.call(null,s__29135__$2)));
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
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.heading","div.heading",-1527964144),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.title","h1.title",-2139952071),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("fg-blue "),cljs.core.str(veye2.pages.projects.project_icon.call(null,new cljs.core.Keyword(null,"project_type","project_type",-1848513041).cljs$core$IFn$_invoke$arity$1(the_project)))].join('')], null)], null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(the_project),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small","small",2133478704),[cljs.core.str("(id: "),cljs.core.str(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(the_project)),cljs.core.str(")")].join('')], null)], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav.navbar","nav.navbar",-121192499),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, ["backgroundColor","floralwhite"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"navbar-item is-text-centered"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.heading","p.heading",938013724),"Source"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.title","p.title",-1265013094),new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(the_project)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"navbar-item is-text-centered"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.heading","p.heading",938013724),"Visibility"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.title","p.title",-1265013094),((new cljs.core.Keyword(null,"public","public",1566243851).cljs$core$IFn$_invoke$arity$1(the_project) === true)?"public":"private")], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"navbar-item is-text-centered"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.heading","p.heading",938013724),"Dependencies"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.title","p.title",-1265013094),new cljs.core.Keyword(null,"dep_number","dep_number",212270215).cljs$core$IFn$_invoke$arity$1(the_project)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"navbar-item is-text-centered"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.heading","p.heading",938013724),"License:Conflict"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.title","p.title",-1265013094),new cljs.core.Keyword(null,"licenses_red","licenses_red",1152545035).cljs$core$IFn$_invoke$arity$1(the_project)], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [veye2.pages.projects.project_dependency_table.call(null,the_project)], null)], null);
});
});
veye2.pages.projects.render = (function veye2$pages$projects$render(db){
var projects_cur = reagent.core.cursor.call(null,db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"projects","projects",-364845983)], null));
return ((function (projects_cur){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"is-medium"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [veye2.pages.projects.navbar], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.columns","div.columns",-437221213),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"column is-third"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [veye2.pages.projects.project_list,projects_cur], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"column is-auto"], null),(((new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,projects_cur)) == null))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Click on the project"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [veye2.pages.projects.project_detail,projects_cur], null))], null)], null)], null)], null);
});
;})(projects_cur))
});

//# sourceMappingURL=projects.js.map