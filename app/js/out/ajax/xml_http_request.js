// Compiled by ClojureScript 1.7.122 {:elide-asserts true}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__23171,handler){
var map__23172 = p__23171;
var map__23172__$1 = ((((!((map__23172 == null)))?((((map__23172.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23172.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23172):map__23172);
var uri = cljs.core.get.call(null,map__23172__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__23172__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__23172__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__23172__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__23172__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__23172__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__23172__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__23172,map__23172__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__23170_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__23170_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__23172,map__23172__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4425__auto___23180 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4425__auto___23180)){
var response_type_23181 = temp__4425__auto___23180;
this$__$1.responseType = cljs.core.name.call(null,response_type_23181);
} else {
}

var seq__23174_23182 = cljs.core.seq.call(null,headers);
var chunk__23175_23183 = null;
var count__23176_23184 = (0);
var i__23177_23185 = (0);
while(true){
if((i__23177_23185 < count__23176_23184)){
var vec__23178_23186 = cljs.core._nth.call(null,chunk__23175_23183,i__23177_23185);
var k_23187 = cljs.core.nth.call(null,vec__23178_23186,(0),null);
var v_23188 = cljs.core.nth.call(null,vec__23178_23186,(1),null);
this$__$1.setRequestHeader(k_23187,v_23188);

var G__23189 = seq__23174_23182;
var G__23190 = chunk__23175_23183;
var G__23191 = count__23176_23184;
var G__23192 = (i__23177_23185 + (1));
seq__23174_23182 = G__23189;
chunk__23175_23183 = G__23190;
count__23176_23184 = G__23191;
i__23177_23185 = G__23192;
continue;
} else {
var temp__4425__auto___23193 = cljs.core.seq.call(null,seq__23174_23182);
if(temp__4425__auto___23193){
var seq__23174_23194__$1 = temp__4425__auto___23193;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23174_23194__$1)){
var c__17252__auto___23195 = cljs.core.chunk_first.call(null,seq__23174_23194__$1);
var G__23196 = cljs.core.chunk_rest.call(null,seq__23174_23194__$1);
var G__23197 = c__17252__auto___23195;
var G__23198 = cljs.core.count.call(null,c__17252__auto___23195);
var G__23199 = (0);
seq__23174_23182 = G__23196;
chunk__23175_23183 = G__23197;
count__23176_23184 = G__23198;
i__23177_23185 = G__23199;
continue;
} else {
var vec__23179_23200 = cljs.core.first.call(null,seq__23174_23194__$1);
var k_23201 = cljs.core.nth.call(null,vec__23179_23200,(0),null);
var v_23202 = cljs.core.nth.call(null,vec__23179_23200,(1),null);
this$__$1.setRequestHeader(k_23201,v_23202);

var G__23203 = cljs.core.next.call(null,seq__23174_23194__$1);
var G__23204 = null;
var G__23205 = (0);
var G__23206 = (0);
seq__23174_23182 = G__23203;
chunk__23175_23183 = G__23204;
count__23176_23184 = G__23205;
i__23177_23185 = G__23206;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__16449__auto__ = body;
if(cljs.core.truth_(or__16449__auto__)){
return or__16449__auto__;
} else {
return "";
}
})());

return this$__$1;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.call(null,(0),this$__$1.readyState);
});

//# sourceMappingURL=xml_http_request.js.map