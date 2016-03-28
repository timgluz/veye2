// Compiled by ClojureScript 1.7.122 {:elide-asserts true}
goog.provide('reagent.impl.template');
goog.require('cljs.core');
goog.require('reagent.impl.util');
goog.require('reagent.impl.component');
goog.require('reagent.interop');
goog.require('reagent.ratom');
goog.require('reagent.impl.batching');
goog.require('clojure.string');
goog.require('reagent.debug');
/**
 * Regular expression that parses a CSS-style id and class
 *           from a tag name.
 */
reagent.impl.template.re_tag = /([^\s\.#]+)(?:#([^\s\.#]+))?(?:\.([^\s#]+))?/;

/**
* @constructor
*/
reagent.impl.template.NativeWrapper = (function (comp){
this.comp = comp;
})

reagent.impl.template.NativeWrapper.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"comp","comp",-1462482139,null)], null);
});

reagent.impl.template.NativeWrapper.cljs$lang$type = true;

reagent.impl.template.NativeWrapper.cljs$lang$ctorStr = "reagent.impl.template/NativeWrapper";

reagent.impl.template.NativeWrapper.cljs$lang$ctorPrWriter = (function (this__17047__auto__,writer__17048__auto__,opt__17049__auto__){
return cljs.core._write.call(null,writer__17048__auto__,"reagent.impl.template/NativeWrapper");
});

reagent.impl.template.__GT_NativeWrapper = (function reagent$impl$template$__GT_NativeWrapper(comp){
return (new reagent.impl.template.NativeWrapper(comp));
});

reagent.impl.template.named_QMARK_ = (function reagent$impl$template$named_QMARK_(x){
return ((x instanceof cljs.core.Keyword)) || ((x instanceof cljs.core.Symbol));
});
reagent.impl.template.hiccup_tag_QMARK_ = (function reagent$impl$template$hiccup_tag_QMARK_(x){
var or__16449__auto__ = reagent.impl.template.named_QMARK_.call(null,x);
if(cljs.core.truth_(or__16449__auto__)){
return or__16449__auto__;
} else {
return typeof x === 'string';
}
});
reagent.impl.template.valid_tag_QMARK_ = (function reagent$impl$template$valid_tag_QMARK_(x){
var or__16449__auto__ = reagent.impl.template.hiccup_tag_QMARK_.call(null,x);
if(cljs.core.truth_(or__16449__auto__)){
return or__16449__auto__;
} else {
return (cljs.core.ifn_QMARK_.call(null,x)) || ((x instanceof reagent.impl.template.NativeWrapper));
}
});
reagent.impl.template.prop_name_cache = {"class": "className", "for": "htmlFor", "charset": "charSet"};
reagent.impl.template.obj_get = (function reagent$impl$template$obj_get(o,k){
if(cljs.core.truth_(o.hasOwnProperty(k))){
return (o[k]);
} else {
return null;
}
});
reagent.impl.template.cached_prop_name = (function reagent$impl$template$cached_prop_name(k){
if(cljs.core.truth_(reagent.impl.template.named_QMARK_.call(null,k))){
var temp__4427__auto__ = reagent.impl.template.obj_get.call(null,reagent.impl.template.prop_name_cache,cljs.core.name.call(null,k));
if((temp__4427__auto__ == null)){
return (reagent.impl.template.prop_name_cache[cljs.core.name.call(null,k)] = reagent.impl.util.dash_to_camel.call(null,k));
} else {
var k_SINGLEQUOTE_ = temp__4427__auto__;
return k_SINGLEQUOTE_;
}
} else {
return k;
}
});
reagent.impl.template.convert_prop_value = (function reagent$impl$template$convert_prop_value(x){
if((typeof x === 'string') || (typeof x === 'number') || (cljs.core.fn_QMARK_.call(null,x))){
return x;
} else {
if(cljs.core.truth_(reagent.impl.template.named_QMARK_.call(null,x))){
return cljs.core.name.call(null,x);
} else {
if(cljs.core.map_QMARK_.call(null,x)){
return cljs.core.reduce_kv.call(null,(function (o,k,v){
var G__31203 = o;
(G__31203[reagent.impl.template.cached_prop_name.call(null,k)] = reagent$impl$template$convert_prop_value.call(null,v));

return G__31203;
}),{},x);
} else {
if(cljs.core.coll_QMARK_.call(null,x)){
return cljs.core.clj__GT_js.call(null,x);
} else {
if(cljs.core.ifn_QMARK_.call(null,x)){
return (function() { 
var G__31204__delegate = function (args){
return cljs.core.apply.call(null,x,args);
};
var G__31204 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31205__i = 0, G__31205__a = new Array(arguments.length -  0);
while (G__31205__i < G__31205__a.length) {G__31205__a[G__31205__i] = arguments[G__31205__i + 0]; ++G__31205__i;}
  args = new cljs.core.IndexedSeq(G__31205__a,0);
} 
return G__31204__delegate.call(this,args);};
G__31204.cljs$lang$maxFixedArity = 0;
G__31204.cljs$lang$applyTo = (function (arglist__31206){
var args = cljs.core.seq(arglist__31206);
return G__31204__delegate(args);
});
G__31204.cljs$core$IFn$_invoke$arity$variadic = G__31204__delegate;
return G__31204;
})()
;
} else {
return cljs.core.clj__GT_js.call(null,x);

}
}
}
}
}
});
reagent.impl.template.set_id_class = (function reagent$impl$template$set_id_class(props,id,class$){
var p = (((props == null))?{}:props);
if((cljs.core.some_QMARK_.call(null,id)) && (((p["id"]) == null))){
(p["id"] = id);
} else {
}

if(cljs.core.some_QMARK_.call(null,class$)){
var old_31207 = (p["className"]);
(p["className"] = ((cljs.core.some_QMARK_.call(null,old_31207))?[cljs.core.str(class$),cljs.core.str(" "),cljs.core.str(old_31207)].join(''):class$));
} else {
}

return p;
});
reagent.impl.template.convert_props = (function reagent$impl$template$convert_props(props,id_class){
var id = (id_class["id"]);
var class$ = (id_class["className"]);
var no_id_class = ((id == null)) && ((class$ == null));
if((no_id_class) && (cljs.core.empty_QMARK_.call(null,props))){
return null;
} else {
var objprops = reagent.impl.template.convert_prop_value.call(null,props);
if(no_id_class){
return objprops;
} else {
return reagent.impl.template.set_id_class.call(null,objprops,id,class$);
}
}
});
reagent.impl.template.input_unmount = (function reagent$impl$template$input_unmount(this$){
return (this$["cljsInputValue"] = null);
});
reagent.impl.template.these_inputs_have_selection_api = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, ["url",null,"tel",null,"text",null,"textarea",null,"password",null,"search",null], null), null);
reagent.impl.template.has_selection_api_QMARK_ = (function reagent$impl$template$has_selection_api_QMARK_(input_type){
return cljs.core.contains_QMARK_.call(null,reagent.impl.template.these_inputs_have_selection_api,input_type);
});
reagent.impl.template.input_set_value = (function reagent$impl$template$input_set_value(this$){
var temp__4429__auto__ = (this$["cljsInputValue"]);
if((temp__4429__auto__ == null)){
return null;
} else {
var value = temp__4429__auto__;
(this$["cljsInputDirty"] = false);

var node = (this$["getDOMNode"])();
var node_value = (node["value"]);
if(cljs.core.not_EQ_.call(null,value,node_value)){
if(cljs.core.not.call(null,(function (){var and__16437__auto__ = (node === document.activeElement);
if(and__16437__auto__){
var and__16437__auto____$1 = reagent.impl.template.has_selection_api_QMARK_.call(null,(node["type"]));
if(cljs.core.truth_(and__16437__auto____$1)){
return (typeof value === 'string') && (typeof node_value === 'string');
} else {
return and__16437__auto____$1;
}
} else {
return and__16437__auto__;
}
})())){
return (node["value"] = value);
} else {
var existing_offset_from_end = (cljs.core.count.call(null,node_value) - (node["selectionStart"]));
var new_cursor_offset = (cljs.core.count.call(null,value) - existing_offset_from_end);
(node["value"] = value);

(node["selectionStart"] = new_cursor_offset);

return (node["selectionEnd"] = new_cursor_offset);
}
} else {
return null;
}
}
});
reagent.impl.template.input_handle_change = (function reagent$impl$template$input_handle_change(this$,on_change,e){
var res = on_change.call(null,e);
if(cljs.core.truth_((this$["cljsInputDirty"]))){
} else {
(this$["cljsInputDirty"] = true);

reagent.impl.batching.do_later.call(null,((function (res){
return (function (){
return reagent.impl.template.input_set_value.call(null,this$);
});})(res))
);
}

return res;
});
reagent.impl.template.input_render_setup = (function reagent$impl$template$input_render_setup(this$,jsprops){
if(cljs.core.truth_((function (){var and__16437__auto__ = (jsprops["hasOwnProperty"])("onChange");
if(cljs.core.truth_(and__16437__auto__)){
return (jsprops["hasOwnProperty"])("value");
} else {
return and__16437__auto__;
}
})())){
var v = (jsprops["value"]);
var value = (((v == null))?"":v);
var on_change = (jsprops["onChange"]);
(this$["cljsInputValue"] = value);

delete jsprops["value"];

var G__31210 = jsprops;
(G__31210["defaultValue"] = value);

(G__31210["onChange"] = ((function (G__31210,v,value,on_change){
return (function (p1__31208_SHARP_){
return reagent.impl.template.input_handle_change.call(null,this$,on_change,p1__31208_SHARP_);
});})(G__31210,v,value,on_change))
);

return G__31210;
} else {
return (this$["cljsInputValue"] = null);
}
});
reagent.impl.template.input_component_QMARK_ = (function reagent$impl$template$input_component_QMARK_(x){
return ((x === "input")) || ((x === "textarea"));
});
reagent.impl.template.reagent_input_class = null;
reagent.impl.template.make_element;
reagent.impl.template.input_spec = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"ReagentInput",new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),reagent.impl.template.input_set_value,new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),reagent.impl.template.input_unmount,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (argv,comp,jsprops,first_child){
var this$ = reagent.impl.component._STAR_current_component_STAR_;
reagent.impl.template.input_render_setup.call(null,this$,jsprops);

return reagent.impl.template.make_element.call(null,argv,comp,jsprops,first_child);
})], null);
reagent.impl.template.reagent_input = (function reagent$impl$template$reagent_input(){
if((reagent.impl.template.reagent_input_class == null)){
reagent.impl.template.reagent_input_class = reagent.impl.component.create_class.call(null,reagent.impl.template.input_spec);
} else {
}

return reagent.impl.template.reagent_input_class;
});
reagent.impl.template.parse_tag = (function reagent$impl$template$parse_tag(hiccup_tag){
var vec__31212 = cljs.core.next.call(null,cljs.core.re_matches.call(null,reagent.impl.template.re_tag,cljs.core.name.call(null,hiccup_tag)));
var tag = cljs.core.nth.call(null,vec__31212,(0),null);
var id = cljs.core.nth.call(null,vec__31212,(1),null);
var class$ = cljs.core.nth.call(null,vec__31212,(2),null);
var class_SINGLEQUOTE_ = (cljs.core.truth_(class$)?clojure.string.replace.call(null,class$,/\./," "):null);

return {"name": tag, "id": id, "className": class_SINGLEQUOTE_};
});
reagent.impl.template.fn_to_class = (function reagent$impl$template$fn_to_class(f){


var spec = cljs.core.meta.call(null,f);
var withrender = cljs.core.assoc.call(null,spec,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),f);
var res = reagent.impl.component.create_class.call(null,withrender);
var wrapf = reagent.impl.util.cached_react_class.call(null,res);
reagent.impl.util.cache_react_class.call(null,f,wrapf);

return wrapf;
});
reagent.impl.template.as_class = (function reagent$impl$template$as_class(tag){
var temp__4427__auto__ = reagent.impl.util.cached_react_class.call(null,tag);
if((temp__4427__auto__ == null)){
return reagent.impl.template.fn_to_class.call(null,tag);
} else {
var cached_class = temp__4427__auto__;
return cached_class;
}
});
reagent.impl.template.get_key = (function reagent$impl$template$get_key(x){
if(cljs.core.map_QMARK_.call(null,x)){
try{return cljs.core.get.call(null,x,new cljs.core.Keyword(null,"key","key",-1516042587));
}catch (e31214){var e = e31214;
return null;
}} else {
return null;
}
});
reagent.impl.template.key_from_vec = (function reagent$impl$template$key_from_vec(v){
var temp__4427__auto__ = (function (){var G__31216 = cljs.core.meta.call(null,v);
var G__31216__$1 = (((G__31216 == null))?null:reagent.impl.template.get_key.call(null,G__31216));
return G__31216__$1;
})();
if((temp__4427__auto__ == null)){
return reagent.impl.template.get_key.call(null,cljs.core.nth.call(null,v,(1),null));
} else {
var k = temp__4427__auto__;
return k;
}
});
reagent.impl.template.reag_element = (function reagent$impl$template$reag_element(tag,v){
var c = reagent.impl.template.as_class.call(null,tag);
var jsprops = {"argv": v};
var G__31218_31219 = v;
var G__31218_31220__$1 = (((G__31218_31219 == null))?null:reagent.impl.template.key_from_vec.call(null,G__31218_31219));
var G__31218_31221__$2 = (((G__31218_31220__$1 == null))?null:(jsprops["key"] = G__31218_31220__$1));

return (React["createElement"])(c,jsprops);
});
reagent.impl.template.adapt_react_class = (function reagent$impl$template$adapt_react_class(c){
return (new reagent.impl.template.NativeWrapper({"name": c, "id": null, "class": null}));
});
reagent.impl.template.tag_name_cache = {};
reagent.impl.template.cached_parse = (function reagent$impl$template$cached_parse(x){
var temp__4427__auto__ = reagent.impl.template.obj_get.call(null,reagent.impl.template.tag_name_cache,x);
if((temp__4427__auto__ == null)){
return (reagent.impl.template.tag_name_cache[x] = reagent.impl.template.parse_tag.call(null,x));
} else {
var s = temp__4427__auto__;
return s;
}
});
reagent.impl.template.as_element;
reagent.impl.template.native_element = (function reagent$impl$template$native_element(parsed,argv){
var comp = (parsed["name"]);
var props = cljs.core.nth.call(null,argv,(1),null);
var hasprops = ((props == null)) || (cljs.core.map_QMARK_.call(null,props));
var jsprops = reagent.impl.template.convert_props.call(null,((hasprops)?props:null),parsed);
var first_child = ((hasprops)?(2):(1));
if(cljs.core.truth_(reagent.impl.template.input_component_QMARK_.call(null,comp))){
return reagent.impl.template.as_element.call(null,cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.reagent_input.call(null),argv,comp,jsprops,first_child], null),cljs.core.meta.call(null,argv)));
} else {
var p = (function (){var temp__4427__auto__ = (function (){var G__31224 = cljs.core.meta.call(null,argv);
var G__31224__$1 = (((G__31224 == null))?null:reagent.impl.template.get_key.call(null,G__31224));
return G__31224__$1;
})();
if((temp__4427__auto__ == null)){
return jsprops;
} else {
var key = temp__4427__auto__;
var G__31225 = (((jsprops == null))?{}:jsprops);
(G__31225["key"] = key);

return G__31225;
}
})();
return reagent.impl.template.make_element.call(null,argv,comp,p,first_child);
}
});
reagent.impl.template.vec_to_elem = (function reagent$impl$template$vec_to_elem(v){
while(true){

var tag = cljs.core.nth.call(null,v,(0));

if(cljs.core.truth_(reagent.impl.template.hiccup_tag_QMARK_.call(null,tag))){
var n = cljs.core.name.call(null,tag);
var pos = n.indexOf(">");
if((pos === (-1))){
return reagent.impl.template.native_element.call(null,reagent.impl.template.cached_parse.call(null,n),v);
} else {
var G__31226 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,n,(0),pos),cljs.core.assoc.call(null,v,(0),cljs.core.subs.call(null,n,(pos + (1))))], null);
v = G__31226;
continue;
}
} else {
if((tag instanceof reagent.impl.template.NativeWrapper)){
return reagent.impl.template.native_element.call(null,tag.comp,v);
} else {
return reagent.impl.template.reag_element.call(null,tag,v);

}
}
break;
}
});
reagent.impl.template.expand_seq;
reagent.impl.template.expand_seq_check;
reagent.impl.template.as_element = (function reagent$impl$template$as_element(x){
if(typeof x === 'string'){
return x;
} else {
if(cljs.core.vector_QMARK_.call(null,x)){
return reagent.impl.template.vec_to_elem.call(null,x);
} else {
if(cljs.core.seq_QMARK_.call(null,x)){
return reagent.impl.template.expand_seq.call(null,x);

} else {
return x;

}
}
}
});
reagent.impl.template.expand_seq = (function reagent$impl$template$expand_seq(s){
var a = cljs.core.into_array.call(null,s);
var n__17352__auto___31227 = a.length;
var i_31228 = (0);
while(true){
if((i_31228 < n__17352__auto___31227)){
(a[i_31228] = reagent.impl.template.as_element.call(null,(a[i_31228])));

var G__31229 = (i_31228 + (1));
i_31228 = G__31229;
continue;
} else {
}
break;
}

return a;
});
reagent.impl.template.expand_seq_dev = (function reagent$impl$template$expand_seq_dev(s,o){
var a = cljs.core.into_array.call(null,s);
var n__17352__auto___31230 = a.length;
var i_31231 = (0);
while(true){
if((i_31231 < n__17352__auto___31230)){
var val_31232 = (a[i_31231]);
if((cljs.core.vector_QMARK_.call(null,val_31232)) && ((reagent.impl.template.key_from_vec.call(null,val_31232) == null))){
(o["no-key"] = true);
} else {
}

(a[i_31231] = reagent.impl.template.as_element.call(null,val_31232));

var G__31233 = (i_31231 + (1));
i_31231 = G__31233;
continue;
} else {
}
break;
}

return a;
});
reagent.impl.template.expand_seq_check = (function reagent$impl$template$expand_seq_check(x){
var ctx = {};
var res = (((reagent.ratom._STAR_ratom_context_STAR_ == null))?reagent.impl.template.expand_seq_dev.call(null,x,ctx):reagent.ratom.capture_derefed.call(null,((function (ctx){
return (function (){
return reagent.impl.template.expand_seq_dev.call(null,x,ctx);
});})(ctx))
,ctx));
if(cljs.core.truth_(reagent.ratom.captured.call(null,ctx))){
} else {
}

if(cljs.core.truth_((function (){var and__16437__auto__ = cljs.core.not.call(null,reagent.impl.component._STAR_non_reactive_STAR_);
if(and__16437__auto__){
return (ctx["no-key"]);
} else {
return and__16437__auto__;
}
})())){
} else {
}

return res;
});
reagent.impl.template.make_element = (function reagent$impl$template$make_element(argv,comp,jsprops,first_child){
var G__31235 = (cljs.core.count.call(null,argv) - first_child);
switch (G__31235) {
case (0):
return (React["createElement"])(comp,jsprops);

break;
case (1):
return (React["createElement"])(comp,jsprops,reagent.impl.template.as_element.call(null,cljs.core.nth.call(null,argv,first_child)));

break;
default:
return (React["createElement"]).apply(null,cljs.core.reduce_kv.call(null,((function (G__31235){
return (function (a,k,v){
if((k >= first_child)){
a.push(reagent.impl.template.as_element.call(null,v));
} else {
}

return a;
});})(G__31235))
,[comp,jsprops],argv));

}
});

//# sourceMappingURL=template.js.map