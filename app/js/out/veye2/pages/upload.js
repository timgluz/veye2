// Compiled by ClojureScript 1.7.122 {:elide-asserts true}
goog.provide('veye2.pages.upload');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('clojure.string');
goog.require('veye2.actions.projects');
goog.require('veye2.pages.shared.navbars');
goog.require('veye2.utils');
veye2.pages.upload.upload_history = (function veye2$pages$upload$upload_history(db){
var upload_cur = reagent.core.cursor.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"projects","projects",-364845983),new cljs.core.Keyword(null,"uploads","uploads",-1652488906)], null));
var get_name = ((function (upload_cur){
return (function (upload_dt){
return [cljs.core.str(((cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(upload_dt)))?new cljs.core.Keyword(null,"upload","upload",-255769218).cljs$core$IFn$_invoke$arity$1(upload_dt).name:new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(upload_dt)))].join('');
});})(upload_cur))
;
return ((function (upload_cur,get_name){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav.panel","nav.panel",-933286493),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-heading","div.panel-heading",-368913146),"Upload history"], null),(function (){var iter__17338__auto__ = ((function (upload_cur,get_name){
return (function veye2$pages$upload$upload_history_$_iter__23093(s__23094){
return (new cljs.core.LazySeq(null,((function (upload_cur,get_name){
return (function (){
var s__23094__$1 = s__23094;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__23094__$1);
if(temp__4425__auto__){
var s__23094__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23094__$2)){
var c__17336__auto__ = cljs.core.chunk_first.call(null,s__23094__$2);
var size__17337__auto__ = cljs.core.count.call(null,c__17336__auto__);
var b__23096 = cljs.core.chunk_buffer.call(null,size__17337__auto__);
if((function (){var i__23095 = (0);
while(true){
if((i__23095 < size__17337__auto__)){
var u = cljs.core._nth.call(null,c__17336__auto__,i__23095);
cljs.core.chunk_append.call(null,b__23096,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"panel-block",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__23095,u,c__17336__auto__,size__17337__auto__,b__23096,s__23094__$2,temp__4425__auto__,upload_cur,get_name){
return (function (ev){
return null;
});})(i__23095,u,c__17336__auto__,size__17337__auto__,b__23096,s__23094__$2,temp__4425__auto__,upload_cur,get_name))
], null),cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.panel-icon","span.panel-icon",1747807276),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"fa fa-file-code-o"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"project-id","project-id",206449307).cljs$core$IFn$_invoke$arity$1(u)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),get_name.call(null,u),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small","small",2133478704)," - ",veye2.utils.time_ago.call(null,new cljs.core.Keyword(null,"uploaded-at","uploaded-at",329122281).cljs$core$IFn$_invoke$arity$1(u))], null)], null)], null));

var G__23097 = (i__23095 + (1));
i__23095 = G__23097;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23096),veye2$pages$upload$upload_history_$_iter__23093.call(null,cljs.core.chunk_rest.call(null,s__23094__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23096),null);
}
} else {
var u = cljs.core.first.call(null,s__23094__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"panel-block",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (u,s__23094__$2,temp__4425__auto__,upload_cur,get_name){
return (function (ev){
return null;
});})(u,s__23094__$2,temp__4425__auto__,upload_cur,get_name))
], null),cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.panel-icon","span.panel-icon",1747807276),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"fa fa-file-code-o"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"project-id","project-id",206449307).cljs$core$IFn$_invoke$arity$1(u)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),get_name.call(null,u),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small","small",2133478704)," - ",veye2.utils.time_ago.call(null,new cljs.core.Keyword(null,"uploaded-at","uploaded-at",329122281).cljs$core$IFn$_invoke$arity$1(u))], null)], null)], null),veye2$pages$upload$upload_history_$_iter__23093.call(null,cljs.core.rest.call(null,s__23094__$2)));
}
} else {
return null;
}
break;
}
});})(upload_cur,get_name))
,null,null));
});})(upload_cur,get_name))
;
return iter__17338__auto__.call(null,cljs.core.deref.call(null,upload_cur));
})()], null);
});
;})(upload_cur,get_name))
});
veye2.pages.upload.upload_form = (function veye2$pages$upload$upload_form(db){
var orgs_cur = reagent.core.cursor.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user","user",1532431356),new cljs.core.Keyword(null,"organizations","organizations",-755443762)], null));
var form_vals = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"project-id","project-id",206449307),null,new cljs.core.Keyword(null,"upload","upload",-255769218),null,new cljs.core.Keyword(null,"visibility","visibility",1338380893),"public",new cljs.core.Keyword(null,"name","name",1843675177),"",new cljs.core.Keyword(null,"orga_name","orga_name",1527009607),"",new cljs.core.Keyword(null,"team_name","team_name",-120010564),"",new cljs.core.Keyword(null,"temp","temp",1791541284),"true"], null));
return ((function (orgs_cur,form_vals){
return (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"upload-form"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.title","h3.title",1837656649),"Create a new project:"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"control"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.label","label.label",725637336),"Pick a file"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"file",new cljs.core.Keyword(null,"class","class",-2030961996),"button in-line",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Select a project file",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (orgs_cur,form_vals){
return (function (ev){
var the_file = ev.target.files.item((0));
return cljs.core.swap_BANG_.call(null,form_vals,cljs.core.assoc,new cljs.core.Keyword(null,"upload","upload",-255769218),the_file);
});})(orgs_cur,form_vals))
], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"control"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"checkbox",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (orgs_cur,form_vals){
return (function (ev){
cljs.core.swap_BANG_.call(null,form_vals,cljs.core.assoc,new cljs.core.Keyword(null,"temp","temp",1791541284),((cljs.core._EQ_.call(null,"true",new cljs.core.Keyword(null,"temp","temp",1791541284).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,form_vals))))?"false":"true"));

return ev.stopPropagation();
});})(orgs_cur,form_vals))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox"], null),((cljs.core._EQ_.call(null,"true",new cljs.core.Keyword(null,"temp","temp",1791541284).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,form_vals))))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"checked","checked",-50955819),"checked"], null):null)),"create temporary project"], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"control",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),((cljs.core._EQ_.call(null,"true",new cljs.core.Keyword(null,"temp","temp",1791541284).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,form_vals))))?"block":"none")], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"title is-4"], null),"Little remark"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"It will create a temporary project, that will not stored\n             at VersionEye. ",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),"Also this project will be removed \n             from the project list of this App after fetching newest data\n            from the VersionEye."], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),((cljs.core._EQ_.call(null,"false",new cljs.core.Keyword(null,"temp","temp",1791541284).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,form_vals))))?"block":"none")], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"control"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.label","label.label",725637336),"Project's name"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),"input",new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Project's name",new cljs.core.Keyword(null,"default-value","default-value",232220170),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,form_vals)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (orgs_cur,form_vals){
return (function (ev){
var the_name = [cljs.core.str(ev.target.value)].join('');
return cljs.core.swap_BANG_.call(null,form_vals,cljs.core.assoc,new cljs.core.Keyword(null,"name","name",1843675177),the_name);
});})(orgs_cur,form_vals))
], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"control"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.label","label.label",725637336),"Project's visibility: ",new cljs.core.Keyword(null,"visibility","visibility",1338380893).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,form_vals))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.radio","label.radio",1705843347),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (orgs_cur,form_vals){
return (function (ev){
cljs.core.swap_BANG_.call(null,form_vals,cljs.core.assoc,new cljs.core.Keyword(null,"visibility","visibility",1338380893),"private");

return ev.stopPropagation();
});})(orgs_cur,form_vals))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),"visibility"], null),((cljs.core._EQ_.call(null,"private",new cljs.core.Keyword(null,"visibility","visibility",1338380893).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,form_vals))))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"checked","checked",-50955819),"checked"], null):null)),"Private"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.radio","label.radio",1705843347),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (orgs_cur,form_vals){
return (function (){
return cljs.core.swap_BANG_.call(null,form_vals,cljs.core.assoc,new cljs.core.Keyword(null,"visibility","visibility",1338380893),"public");
});})(orgs_cur,form_vals))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),"visibility",new cljs.core.Keyword(null,"default-checked","default-checked",1039965863),true], null),((cljs.core._EQ_.call(null,"public",new cljs.core.Keyword(null,"visibility","visibility",1338380893).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,form_vals))))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"checked","checked",-50955819),"checked"], null):null)),"Public"], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"control"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.label","label.label",725637336),"Organization name:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small","small",2133478704),"It attaches the new project to the specified organization."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),"input",new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Organization",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (orgs_cur,form_vals){
return (function (ev){
var new_val = [cljs.core.str(ev.target.value)].join('');
return cljs.core.swap_BANG_.call(null,form_vals,cljs.core.assoc,new cljs.core.Keyword(null,"orga_name","orga_name",1527009607),new_val);
});})(orgs_cur,form_vals))
], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"control"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.label","label.label",725637336),"Team name:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small","small",2133478704),"It attaches the new project to the specified team."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),"input",new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Optional team name",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (orgs_cur,form_vals){
return (function (ev){
var new_val = [cljs.core.str(ev.target.value)].join('');
return cljs.core.swap_BANG_.call(null,form_vals,cljs.core.assoc,new cljs.core.Keyword(null,"team_name","team_name",-120010564),new_val);
});})(orgs_cur,form_vals))
], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"control"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"button is-info",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (orgs_cur,form_vals){
return (function (ev){
return veye2.actions.projects.upload_project_BANG_.call(null,db,cljs.core.deref.call(null,form_vals));
});})(orgs_cur,form_vals))
], null),"Upload"], null)], null)], null);
});
;})(orgs_cur,form_vals))
});
veye2.pages.upload.render = (function veye2$pages$upload$render(db){
var form_state = reagent.core.atom.call(null,new cljs.core.Keyword(null,"display","display",242065432));
return ((function (form_state){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"is-medium"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [veye2.pages.shared.navbars.navbar], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.columns","div.columns",-437221213),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"column is-third"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [veye2.pages.upload.upload_history,db], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"column is-auto"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [veye2.pages.upload.upload_form,db], null)], null)], null)], null)], null);
});
;})(form_state))
});

//# sourceMappingURL=upload.js.map