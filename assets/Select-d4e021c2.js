import{W as Se,E as Y,F as J,I as se,B as de,r as L,C as K,x as W,y as g,d as M,D as ce,G as Le,H as j,z as T,o as I,c as N,a as R,n as A,t as _,K as G,b as F,w as V,u as C,T as Ee,i as Pe,l as De,_ as ke}from"./index-1069c7c8.js";function $(e,l,...n){if(e in l){let t=l[e];return typeof t=="function"?t(...n):t}let a=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(l).map(t=>`"${t}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(a,$),a}var X=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(X||{}),Te=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(Te||{});function U({visible:e=!0,features:l=0,ourProps:n,theirProps:a,...t}){var r;let i=pe(a,n),s=Object.assign(t,{props:i});if(e||l&2&&i.static)return Q(s);if(l&1){let v=(r=i.unmount)==null||r?0:1;return $(v,{0(){return null},1(){return Q({...t,props:{...i,hidden:!0,style:{display:"none"}}})}})}return Q(s)}function Q({props:e,attrs:l,slots:n,slot:a,name:t}){var r,i;let{as:s,...v}=fe(e,["unmount","static"]),o=(r=n.default)==null?void 0:r.call(n,a),u={};if(a){let y=!1,S=[];for(let[w,O]of Object.entries(a))typeof O=="boolean"&&(y=!0),O===!0&&S.push(w);y&&(u["data-headlessui-state"]=S.join(" "))}if(s==="template"){if(o=ve(o??[]),Object.keys(v).length>0||Object.keys(l).length>0){let[y,...S]=o??[];if(!Ie(y)||S.length>0)throw new Error(['Passing props on "template"!',"",`The current component <${t} /> is rendering a "template".`,"However we need to passthrough the following props:",Object.keys(v).concat(Object.keys(l)).map(m=>m.trim()).filter((m,k,p)=>p.indexOf(m)===k).sort((m,k)=>m.localeCompare(k)).map(m=>`  - ${m}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".',"Render a single element as the child so that we can forward the props onto that element."].map(m=>`  - ${m}`).join(`
`)].join(`
`));let w=pe((i=y.props)!=null?i:{},v),O=Se(y,w);for(let m in w)m.startsWith("on")&&(O.props||(O.props={}),O.props[m]=w[m]);return O}return Array.isArray(o)&&o.length===1?o[0]:o}return Y(s,Object.assign({},v,u),{default:()=>o})}function ve(e){return e.flatMap(l=>l.type===J?ve(l.children):[l])}function pe(...e){if(e.length===0)return{};if(e.length===1)return e[0];let l={},n={};for(let a of e)for(let t in a)t.startsWith("on")&&typeof a[t]=="function"?(n[t]!=null||(n[t]=[]),n[t].push(a[t])):l[t]=a[t];if(l.disabled||l["aria-disabled"])return Object.assign(l,Object.fromEntries(Object.keys(n).map(a=>[a,void 0])));for(let a in n)Object.assign(l,{[a](t,...r){let i=n[a];for(let s of i){if(t instanceof Event&&t.defaultPrevented)return;s(t,...r)}}});return l}function $e(e){let l=Object.assign({},e);for(let n in l)l[n]===void 0&&delete l[n];return l}function fe(e,l=[]){let n=Object.assign({},e);for(let a of l)a in n&&delete n[a];return n}function Ie(e){return e==null?!1:typeof e.type=="string"||typeof e.type=="object"||typeof e.type=="function"}let Ne=0;function Re(){return++Ne}function Z(){return Re()}var x=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(x||{});function je(e){throw new Error("Unexpected object: "+e)}var E=(e=>(e[e.First=0]="First",e[e.Previous=1]="Previous",e[e.Next=2]="Next",e[e.Last=3]="Last",e[e.Specific=4]="Specific",e[e.Nothing=5]="Nothing",e))(E||{});function Ae(e,l){let n=l.resolveItems();if(n.length<=0)return null;let a=l.resolveActiveIndex(),t=a??-1,r=(()=>{switch(e.focus){case 0:return n.findIndex(i=>!l.resolveDisabled(i));case 1:{let i=n.slice().reverse().findIndex((s,v,o)=>t!==-1&&o.length-v-1>=t?!1:!l.resolveDisabled(s));return i===-1?i:n.length-1-i}case 2:return n.findIndex((i,s)=>s<=t?!1:!l.resolveDisabled(i));case 3:{let i=n.slice().reverse().findIndex(s=>!l.resolveDisabled(s));return i===-1?i:n.length-1-i}case 4:return n.findIndex(i=>l.resolveId(i)===e.id);case 5:return null;default:je(e)}})();return r===-1?a:r}function h(e){var l;return e==null||e.value==null?null:(l=e.value.$el)!=null?l:e.value}let be=Symbol("Context");var H=(e=>(e[e.Open=1]="Open",e[e.Closed=2]="Closed",e[e.Closing=4]="Closing",e[e.Opening=8]="Opening",e))(H||{});function Fe(){return se(be,null)}function Ce(e){de(be,e)}function ne(e,l){if(e)return e;let n=l??"button";if(typeof n=="string"&&n.toLowerCase()==="button")return"button"}function Me(e,l){let n=L(ne(e.value.type,e.value.as));return K(()=>{n.value=ne(e.value.type,e.value.as)}),W(()=>{var a;n.value||h(l)&&h(l)instanceof HTMLButtonElement&&!((a=h(l))!=null&&a.hasAttribute("type"))&&(n.value="button")}),n}var Be=Object.defineProperty,Ve=(e,l,n)=>l in e?Be(e,l,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[l]=n,ae=(e,l,n)=>(Ve(e,typeof l!="symbol"?l+"":l,n),n);class He{constructor(){ae(this,"current",this.detect()),ae(this,"currentId",0)}set(l){this.current!==l&&(this.currentId=0,this.current=l)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}}let ee=new He;function Ue(e){if(ee.isServer)return null;if(e instanceof Node)return e.ownerDocument;if(e!=null&&e.hasOwnProperty("value")){let l=h(e);if(l)return l.ownerDocument}return document}let re=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var _e=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))(_e||{}),ze=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(ze||{}),Ke=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(Ke||{}),te=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(te||{});function me(e,l=0){var n;return e===((n=Ue(e))==null?void 0:n.body)?!1:$(l,{0(){return e.matches(re)},1(){let a=e;for(;a!==null;){if(a.matches(re))return!0;a=a.parentElement}return!1}})}var We=(e=>(e[e.Keyboard=0]="Keyboard",e[e.Mouse=1]="Mouse",e))(We||{});typeof window<"u"&&typeof document<"u"&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",e=>{e.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:e.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));function qe(e,l=n=>n){return e.slice().sort((n,a)=>{let t=l(n),r=l(a);if(t===null||r===null)return 0;let i=t.compareDocumentPosition(r);return i&Node.DOCUMENT_POSITION_FOLLOWING?-1:i&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function z(e,l,n){ee.isServer||W(a=>{document.addEventListener(e,l,n),a(()=>document.removeEventListener(e,l,n))})}function Ge(e,l,n){ee.isServer||W(a=>{window.addEventListener(e,l,n),a(()=>window.removeEventListener(e,l,n))})}function Qe(e,l,n=g(()=>!0)){function a(r,i){if(!n.value||r.defaultPrevented)return;let s=i(r);if(s===null||!s.getRootNode().contains(s))return;let v=function o(u){return typeof u=="function"?o(u()):Array.isArray(u)||u instanceof Set?u:[u]}(e);for(let o of v){if(o===null)continue;let u=o instanceof HTMLElement?o:h(o);if(u!=null&&u.contains(s)||r.composed&&r.composedPath().includes(u))return}return!me(s,te.Loose)&&s.tabIndex!==-1&&r.preventDefault(),l(r,s)}let t=L(null);z("pointerdown",r=>{var i,s;n.value&&(t.value=((s=(i=r.composedPath)==null?void 0:i.call(r))==null?void 0:s[0])||r.target)},!0),z("mousedown",r=>{var i,s;n.value&&(t.value=((s=(i=r.composedPath)==null?void 0:i.call(r))==null?void 0:s[0])||r.target)},!0),z("click",r=>{t.value&&(a(r,()=>t.value),t.value=null)},!0),z("touchend",r=>a(r,()=>r.target instanceof HTMLElement?r.target:null),!0),Ge("blur",r=>a(r,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}var he=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(he||{});let Ye=M({name:"Hidden",props:{as:{type:[Object,String],default:"div"},features:{type:Number,default:1}},setup(e,{slots:l,attrs:n}){return()=>{let{features:a,...t}=e,r={"aria-hidden":(a&2)===2?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(a&4)===4&&(a&2)!==2&&{display:"none"}}};return U({ourProps:r,theirProps:t,slot:{},attrs:n,slots:l,name:"Hidden"})}}});function ge(e={},l=null,n=[]){for(let[a,t]of Object.entries(e))xe(n,ye(l,a),t);return n}function ye(e,l){return e?e+"["+l+"]":l}function xe(e,l,n){if(Array.isArray(n))for(let[a,t]of n.entries())xe(e,ye(l,a.toString()),t);else n instanceof Date?e.push([l,n.toISOString()]):typeof n=="boolean"?e.push([l,n?"1":"0"]):typeof n=="string"?e.push([l,n]):typeof n=="number"?e.push([l,`${n}`]):n==null?e.push([l,""]):ge(n,l,e)}function Xe(e,l,n){let a=L(n==null?void 0:n.value),t=g(()=>e.value!==void 0);return[g(()=>t.value?e.value:a.value),function(r){return t.value||(a.value=r),l==null?void 0:l(r)}]}function oe(e){return[e.screenX,e.screenY]}function Je(){let e=L([-1,-1]);return{wasMoved(l){let n=oe(l);return e.value[0]===n[0]&&e.value[1]===n[1]?!1:(e.value=n,!0)},update(l){e.value=oe(l)}}}let ie=/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;function ue(e){var l,n;let a=(l=e.innerText)!=null?l:"",t=e.cloneNode(!0);if(!(t instanceof HTMLElement))return a;let r=!1;for(let s of t.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))s.remove(),r=!0;let i=r?(n=t.innerText)!=null?n:"":a;return ie.test(i)&&(i=i.replace(ie,"")),i}function Ze(e){let l=e.getAttribute("aria-label");if(typeof l=="string")return l.trim();let n=e.getAttribute("aria-labelledby");if(n){let a=n.split(" ").map(t=>{let r=document.getElementById(t);if(r){let i=r.getAttribute("aria-label");return typeof i=="string"?i.trim():ue(r).trim()}return null}).filter(Boolean);if(a.length>0)return a.join(", ")}return ue(e).trim()}function et(e){let l=L(""),n=L("");return()=>{let a=h(e);if(!a)return"";let t=a.innerText;if(l.value===t)return n.value;let r=Ze(a).trim().toLowerCase();return l.value=t,n.value=r,r}}function tt(e,l){return e===l}var lt=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(lt||{}),nt=(e=>(e[e.Single=0]="Single",e[e.Multi=1]="Multi",e))(nt||{}),at=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))(at||{});function rt(e){requestAnimationFrame(()=>requestAnimationFrame(e))}let we=Symbol("ListboxContext");function q(e){let l=se(we,null);if(l===null){let n=new Error(`<${e} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,q),n}return l}let ot=M({name:"Listbox",emits:{"update:modelValue":e=>!0},props:{as:{type:[Object,String],default:"template"},disabled:{type:[Boolean],default:!1},by:{type:[String,Function],default:()=>tt},horizontal:{type:[Boolean],default:!1},modelValue:{type:[Object,String,Number,Boolean],default:void 0},defaultValue:{type:[Object,String,Number,Boolean],default:void 0},form:{type:String,optional:!0},name:{type:String,optional:!0},multiple:{type:[Boolean],default:!1}},inheritAttrs:!1,setup(e,{slots:l,attrs:n,emit:a}){let t=L(1),r=L(null),i=L(null),s=L(null),v=L([]),o=L(""),u=L(null),y=L(1);function S(d=c=>c){let c=u.value!==null?v.value[u.value]:null,f=qe(d(v.value.slice()),D=>h(D.dataRef.domRef)),b=c?f.indexOf(c):null;return b===-1&&(b=null),{options:f,activeOptionIndex:b}}let w=g(()=>e.multiple?1:0),[O,m]=Xe(g(()=>e.modelValue),d=>a("update:modelValue",d),g(()=>e.defaultValue)),k=g(()=>O.value===void 0?$(w.value,{1:[],0:void 0}):O.value),p={listboxState:t,value:k,mode:w,compare(d,c){if(typeof e.by=="string"){let f=e.by;return(d==null?void 0:d[f])===(c==null?void 0:c[f])}return e.by(d,c)},orientation:g(()=>e.horizontal?"horizontal":"vertical"),labelRef:r,buttonRef:i,optionsRef:s,disabled:g(()=>e.disabled),options:v,searchQuery:o,activeOptionIndex:u,activationTrigger:y,closeListbox(){e.disabled||t.value!==1&&(t.value=1,u.value=null)},openListbox(){e.disabled||t.value!==0&&(t.value=0)},goToOption(d,c,f){if(e.disabled||t.value===1)return;let b=S(),D=Ae(d===E.Specific?{focus:E.Specific,id:c}:{focus:d},{resolveItems:()=>b.options,resolveActiveIndex:()=>b.activeOptionIndex,resolveId:B=>B.id,resolveDisabled:B=>B.dataRef.disabled});o.value="",u.value=D,y.value=f??1,v.value=b.options},search(d){if(e.disabled||t.value===1)return;let c=o.value!==""?0:1;o.value+=d.toLowerCase();let f=(u.value!==null?v.value.slice(u.value+c).concat(v.value.slice(0,u.value+c)):v.value).find(D=>D.dataRef.textValue.startsWith(o.value)&&!D.dataRef.disabled),b=f?v.value.indexOf(f):-1;b===-1||b===u.value||(u.value=b,y.value=1)},clearSearch(){e.disabled||t.value!==1&&o.value!==""&&(o.value="")},registerOption(d,c){let f=S(b=>[...b,{id:d,dataRef:c}]);v.value=f.options,u.value=f.activeOptionIndex},unregisterOption(d){let c=S(f=>{let b=f.findIndex(D=>D.id===d);return b!==-1&&f.splice(b,1),f});v.value=c.options,u.value=c.activeOptionIndex,y.value=1},theirOnChange(d){e.disabled||m(d)},select(d){e.disabled||m($(w.value,{0:()=>d,1:()=>{let c=T(p.value.value).slice(),f=T(d),b=c.findIndex(D=>p.compare(f,T(D)));return b===-1?c.push(f):c.splice(b,1),c}}))}};Qe([i,s],(d,c)=>{var f;p.closeListbox(),me(c,te.Loose)||(d.preventDefault(),(f=h(i))==null||f.focus())},g(()=>t.value===0)),de(we,p),Ce(g(()=>$(t.value,{0:H.Open,1:H.Closed})));let P=g(()=>{var d;return(d=h(i))==null?void 0:d.closest("form")});return K(()=>{ce([P],()=>{if(!P.value||e.defaultValue===void 0)return;function d(){p.theirOnChange(e.defaultValue)}return P.value.addEventListener("reset",d),()=>{var c;(c=P.value)==null||c.removeEventListener("reset",d)}},{immediate:!0})}),()=>{let{name:d,modelValue:c,disabled:f,form:b,...D}=e,B={open:t.value===0,disabled:f,value:k.value};return Y(J,[...d!=null&&k.value!=null?ge({[d]:k.value}).map(([le,Oe])=>Y(Ye,$e({features:he.Hidden,key:le,as:"input",type:"hidden",hidden:!0,readOnly:!0,form:b,name:le,value:Oe}))):[],U({ourProps:{},theirProps:{...n,...fe(D,["defaultValue","onUpdate:modelValue","horizontal","multiple","by"])},slot:B,slots:l,attrs:n,name:"Listbox"})])}}}),it=M({name:"ListboxButton",props:{as:{type:[Object,String],default:"button"},id:{type:String,default:()=>`headlessui-listbox-button-${Z()}`}},setup(e,{attrs:l,slots:n,expose:a}){let t=q("ListboxButton");a({el:t.buttonRef,$el:t.buttonRef});function r(o){switch(o.key){case x.Space:case x.Enter:case x.ArrowDown:o.preventDefault(),t.openListbox(),j(()=>{var u;(u=h(t.optionsRef))==null||u.focus({preventScroll:!0}),t.value.value||t.goToOption(E.First)});break;case x.ArrowUp:o.preventDefault(),t.openListbox(),j(()=>{var u;(u=h(t.optionsRef))==null||u.focus({preventScroll:!0}),t.value.value||t.goToOption(E.Last)});break}}function i(o){switch(o.key){case x.Space:o.preventDefault();break}}function s(o){t.disabled.value||(t.listboxState.value===0?(t.closeListbox(),j(()=>{var u;return(u=h(t.buttonRef))==null?void 0:u.focus({preventScroll:!0})})):(o.preventDefault(),t.openListbox(),rt(()=>{var u;return(u=h(t.optionsRef))==null?void 0:u.focus({preventScroll:!0})})))}let v=Me(g(()=>({as:e.as,type:l.type})),t.buttonRef);return()=>{var o,u;let y={open:t.listboxState.value===0,disabled:t.disabled.value,value:t.value.value},{id:S,...w}=e,O={ref:t.buttonRef,id:S,type:v.value,"aria-haspopup":"listbox","aria-controls":(o=h(t.optionsRef))==null?void 0:o.id,"aria-expanded":t.listboxState.value===0,"aria-labelledby":t.labelRef.value?[(u=h(t.labelRef))==null?void 0:u.id,S].join(" "):void 0,disabled:t.disabled.value===!0?!0:void 0,onKeydown:r,onKeyup:i,onClick:s};return U({ourProps:O,theirProps:w,slot:y,attrs:l,slots:n,name:"ListboxButton"})}}}),ut=M({name:"ListboxOptions",props:{as:{type:[Object,String],default:"ul"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:()=>`headlessui-listbox-options-${Z()}`}},setup(e,{attrs:l,slots:n,expose:a}){let t=q("ListboxOptions"),r=L(null);a({el:t.optionsRef,$el:t.optionsRef});function i(o){switch(r.value&&clearTimeout(r.value),o.key){case x.Space:if(t.searchQuery.value!=="")return o.preventDefault(),o.stopPropagation(),t.search(o.key);case x.Enter:if(o.preventDefault(),o.stopPropagation(),t.activeOptionIndex.value!==null){let u=t.options.value[t.activeOptionIndex.value];t.select(u.dataRef.value)}t.mode.value===0&&(t.closeListbox(),j(()=>{var u;return(u=h(t.buttonRef))==null?void 0:u.focus({preventScroll:!0})}));break;case $(t.orientation.value,{vertical:x.ArrowDown,horizontal:x.ArrowRight}):return o.preventDefault(),o.stopPropagation(),t.goToOption(E.Next);case $(t.orientation.value,{vertical:x.ArrowUp,horizontal:x.ArrowLeft}):return o.preventDefault(),o.stopPropagation(),t.goToOption(E.Previous);case x.Home:case x.PageUp:return o.preventDefault(),o.stopPropagation(),t.goToOption(E.First);case x.End:case x.PageDown:return o.preventDefault(),o.stopPropagation(),t.goToOption(E.Last);case x.Escape:o.preventDefault(),o.stopPropagation(),t.closeListbox(),j(()=>{var u;return(u=h(t.buttonRef))==null?void 0:u.focus({preventScroll:!0})});break;case x.Tab:o.preventDefault(),o.stopPropagation();break;default:o.key.length===1&&(t.search(o.key),r.value=setTimeout(()=>t.clearSearch(),350));break}}let s=Fe(),v=g(()=>s!==null?(s.value&H.Open)===H.Open:t.listboxState.value===0);return()=>{var o,u,y,S;let w={open:t.listboxState.value===0},{id:O,...m}=e,k={"aria-activedescendant":t.activeOptionIndex.value===null||(o=t.options.value[t.activeOptionIndex.value])==null?void 0:o.id,"aria-multiselectable":t.mode.value===1?!0:void 0,"aria-labelledby":(S=(u=h(t.labelRef))==null?void 0:u.id)!=null?S:(y=h(t.buttonRef))==null?void 0:y.id,"aria-orientation":t.orientation.value,id:O,onKeydown:i,role:"listbox",tabIndex:0,ref:t.optionsRef};return U({ourProps:k,theirProps:m,slot:w,attrs:l,slots:n,features:X.RenderStrategy|X.Static,visible:v.value,name:"ListboxOptions"})}}}),st=M({name:"ListboxOption",props:{as:{type:[Object,String],default:"li"},value:{type:[Object,String,Number,Boolean]},disabled:{type:Boolean,default:!1},id:{type:String,default:()=>`headlessui-listbox.option-${Z()}`}},setup(e,{slots:l,attrs:n,expose:a}){let t=q("ListboxOption"),r=L(null);a({el:r,$el:r});let i=g(()=>t.activeOptionIndex.value!==null?t.options.value[t.activeOptionIndex.value].id===e.id:!1),s=g(()=>$(t.mode.value,{0:()=>t.compare(T(t.value.value),T(e.value)),1:()=>T(t.value.value).some(p=>t.compare(T(p),T(e.value)))})),v=g(()=>$(t.mode.value,{1:()=>{var p;let P=T(t.value.value);return((p=t.options.value.find(d=>P.some(c=>t.compare(T(c),T(d.dataRef.value)))))==null?void 0:p.id)===e.id},0:()=>s.value})),o=et(r),u=g(()=>({disabled:e.disabled,value:e.value,get textValue(){return o()},domRef:r}));K(()=>t.registerOption(e.id,u)),Le(()=>t.unregisterOption(e.id)),K(()=>{ce([t.listboxState,s],()=>{t.listboxState.value===0&&s.value&&$(t.mode.value,{1:()=>{v.value&&t.goToOption(E.Specific,e.id)},0:()=>{t.goToOption(E.Specific,e.id)}})},{immediate:!0})}),W(()=>{t.listboxState.value===0&&i.value&&t.activationTrigger.value!==0&&j(()=>{var p,P;return(P=(p=h(r))==null?void 0:p.scrollIntoView)==null?void 0:P.call(p,{block:"nearest"})})});function y(p){if(e.disabled)return p.preventDefault();t.select(e.value),t.mode.value===0&&(t.closeListbox(),j(()=>{var P;return(P=h(t.buttonRef))==null?void 0:P.focus({preventScroll:!0})}))}function S(){if(e.disabled)return t.goToOption(E.Nothing);t.goToOption(E.Specific,e.id)}let w=Je();function O(p){w.update(p)}function m(p){w.wasMoved(p)&&(e.disabled||i.value||t.goToOption(E.Specific,e.id,0))}function k(p){w.wasMoved(p)&&(e.disabled||i.value&&t.goToOption(E.Nothing))}return()=>{let{disabled:p}=e,P={active:i.value,selected:s.value,disabled:p},{id:d,value:c,disabled:f,...b}=e,D={id:d,ref:r,role:"option",tabIndex:p===!0?void 0:-1,"aria-disabled":p===!0?!0:void 0,"aria-selected":s.value,disabled:void 0,onClick:y,onFocus:S,onPointerenter:O,onMouseenter:O,onPointermove:m,onMousemove:m,onPointerleave:k,onMouseleave:k};return U({ourProps:D,theirProps:b,slot:P,attrs:n,slots:l,name:"ListboxOption"})}}});function dt(e,l){return I(),N("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[R("path",{"fill-rule":"evenodd",d:"M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z","clip-rule":"evenodd"})])}function ct(e,l){return I(),N("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[R("path",{"fill-rule":"evenodd",d:"M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z","clip-rule":"evenodd"})])}const vt={class:"inline-block w-52 relative"},pt={class:"relative"},ft={key:0,class:"label"},bt=["placeholder"],mt={class:"pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"},ht={class:"block"},gt=M({__name:"Select",props:{placeholder:{type:String,default:""},options:{type:Array,required:!0},value:{type:null},errorMessage:{type:String,default:""},label:{type:String,default:""}},emits:["update:modelValue"],setup(e,{emit:l}){const n=e,a=g(()=>{const t=n.options.find(r=>r.value===n.value);return t==null?void 0:t.label});return(t,r)=>(I(),N("div",vt,[e.errorMessage?(I(),N("span",{key:0,class:A(["block text-[red] absolute mt-9 ml-1",{"label-in-error":e.label!==""}])},_(e.errorMessage),3)):G("",!0),F(C(ot),{"model-value":e.value,class:A([{"mb-6":!!e.errorMessage},"w-full"]),"onUpdate:modelValue":r[0]||(r[0]=i=>t.$emit("update:modelValue",i))},{default:V(()=>[R("div",pt,[e.label!==""?(I(),N("label",ft,_(e.label),1)):G("",!0),F(C(it),{class:A(["relative w-full cursor-pointer rounded-md border border-gray-300 h-[46px] py-1 px-4 text-left bg-white focus:border-primary-500 focus:transition focus:duration-150 focus:ease-in",{"label-in":e.label!==""}])},{default:V(()=>[R("span",{class:A([e.value>0?"text-gray-900":"text-gray-400","block truncate"]),placeholder:e.placeholder},_(e.value>0?a.value:e.placeholder),11,bt),R("span",mt,[F(C(ct),{class:"h-5 w-5 text-primary-400","aria-hidden":"true"})])]),_:1},8,["class"]),F(Ee,{"leave-active-class":"transition ease-in duration-100","leave-from-class":"opacity-100","leave-to-class":"opacity-0"},{default:V(()=>[F(C(ut),{class:"absolute z-10 mt-0.5 max-h-40 w-full overflow-auto rounded-md border border-gray-300 bg-white py-1 text-base"},{default:V(()=>[(I(!0),N(J,null,Pe(e.options,i=>(I(),De(C(st),{key:i.value,as:"template",value:i.value},{default:V(({active:s,selected:v})=>[R("li",{class:A([s?"bg-primary-500 text-white":"text-gray-900","relative cursor-default select-none py-2 px-4 text-left"])},[R("span",ht,_(i.label),1),v?(I(),N("span",{key:0,class:A([s?"text-white":"text-primary-500","absolute inset-y-0 right-0 flex items-center pr-4"])},[F(C(dt),{class:"h-5 w-5","aria-hidden":"true"})],2)):G("",!0)],2)]),_:2},1032,["value"]))),128))]),_:1})]),_:1})])]),_:1},8,["model-value","class"])]))}});const xt=ke(gt,[["__scopeId","data-v-38898e17"]]);export{U as H,$e as K,xt as N,qe as O,fe as T,E as a,he as b,Ce as c,Xe as d,ge as e,Ye as f,Me as g,X as h,Je as i,x as j,H as l,Ue as m,h as o,Fe as p,dt as r,Z as t,$ as u,Ae as x,Qe as y};
