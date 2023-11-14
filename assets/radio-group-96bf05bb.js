import{m as S,t as L,d as W,O as _,e as M,f as U,K as q,b as z,H as P,T as J,o as k,h as R,P as x,n as O,q as T,k as Q}from"./Select-95a47108.js";import{E as X,r as h,B as A,y as s,d as V,z as y,g as j,C as Y,D as C,k as Z,I as ee,G as ae}from"./index-01998dcb.js";function le({container:a,accept:d,walk:p,enabled:n}){X(()=>{let u=a.value;if(!u||n!==void 0&&!n.value)return;let o=S(a);if(!o)return;let t=Object.assign(E=>d(E),{acceptNode:d}),c=o.createTreeWalker(u,NodeFilter.SHOW_ELEMENT,t,!1);for(;c.nextNode();)p(c.currentNode)})}let te=Symbol("DescriptionContext");function F({slot:a=h({}),name:d="Description",props:p={}}={}){let n=h([]);function u(o){return n.value.push(o),()=>{let t=n.value.indexOf(o);t!==-1&&n.value.splice(t,1)}}return A(te,{register:u,slot:a,name:d,props:p}),s(()=>n.value.length>0?n.value.join(" "):void 0)}let re=Symbol("LabelContext");function D({slot:a={},name:d="Label",props:p={}}={}){let n=h([]);function u(o){return n.value.push(o),()=>{let t=n.value.indexOf(o);t!==-1&&n.value.splice(t,1)}}return A(re,{register:u,slot:a,name:d,props:p}),s(()=>n.value.length>0?n.value.join(" "):void 0)}function oe(a,d){return a===d}let B=Symbol("RadioGroupContext");function I(a){let d=ae(B,null);if(d===null){let p=new Error(`<${a} /> is missing a parent <RadioGroup /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(p,I),p}return d}let de=V({name:"RadioGroup",emits:{"update:modelValue":a=>!0},props:{as:{type:[Object,String],default:"div"},disabled:{type:[Boolean],default:!1},by:{type:[String,Function],default:()=>oe},modelValue:{type:[Object,String,Number,Boolean],default:void 0},defaultValue:{type:[Object,String,Number,Boolean],default:void 0},form:{type:String,optional:!0},name:{type:String,optional:!0},id:{type:String,default:()=>`headlessui-radiogroup-${L()}`}},inheritAttrs:!1,setup(a,{emit:d,attrs:p,slots:n,expose:u}){let o=h(null),t=h([]),c=D({name:"RadioGroupLabel"}),E=F({name:"RadioGroupDescription"});u({el:o,$el:o});let[m,w]=W(s(()=>a.modelValue),e=>d("update:modelValue",e),s(()=>a.defaultValue)),f={options:t,value:m,disabled:s(()=>a.disabled),firstOption:s(()=>t.value.find(e=>!e.propsRef.disabled)),containsCheckedOption:s(()=>t.value.some(e=>f.compare(y(e.propsRef.value),y(a.modelValue)))),compare(e,r){if(typeof a.by=="string"){let l=a.by;return(e==null?void 0:e[l])===(r==null?void 0:r[l])}return a.by(e,r)},change(e){var r;if(a.disabled||f.compare(y(m.value),y(e)))return!1;let l=(r=t.value.find(v=>f.compare(y(v.propsRef.value),y(e))))==null?void 0:r.propsRef;return l!=null&&l.disabled?!1:(w(e),!0)},registerOption(e){t.value.push(e),t.value=_(t.value,r=>r.element)},unregisterOption(e){let r=t.value.findIndex(l=>l.id===e);r!==-1&&t.value.splice(r,1)}};A(B,f),le({container:s(()=>k(o)),accept(e){return e.getAttribute("role")==="radio"?NodeFilter.FILTER_REJECT:e.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(e){e.setAttribute("role","none")}});function b(e){if(!o.value||!o.value.contains(e.target))return;let r=t.value.filter(l=>l.propsRef.disabled===!1).map(l=>l.element);switch(e.key){case R.Enter:Q(e.currentTarget);break;case R.ArrowLeft:case R.ArrowUp:if(e.preventDefault(),e.stopPropagation(),x(r,O.Previous|O.WrapAround)===T.Success){let l=t.value.find(v=>{var i;return v.element===((i=S(o))==null?void 0:i.activeElement)});l&&f.change(l.propsRef.value)}break;case R.ArrowRight:case R.ArrowDown:if(e.preventDefault(),e.stopPropagation(),x(r,O.Next|O.WrapAround)===T.Success){let l=t.value.find(v=>{var i;return v.element===((i=S(v.element))==null?void 0:i.activeElement)});l&&f.change(l.propsRef.value)}break;case R.Space:{e.preventDefault(),e.stopPropagation();let l=t.value.find(v=>{var i;return v.element===((i=S(v.element))==null?void 0:i.activeElement)});l&&f.change(l.propsRef.value)}break}}let g=s(()=>{var e;return(e=k(o))==null?void 0:e.closest("form")});return j(()=>{Y([g],()=>{if(!g.value||a.defaultValue===void 0)return;function e(){f.change(a.defaultValue)}return g.value.addEventListener("reset",e),()=>{var r;(r=g.value)==null||r.removeEventListener("reset",e)}},{immediate:!0})}),()=>{let{disabled:e,name:r,id:l,form:v,...i}=a,G={ref:o,id:l,role:"radiogroup","aria-labelledby":c.value,"aria-describedby":E.value,onKeydown:b};return C(Z,[...r!=null&&m.value!=null?M({[r]:m.value}).map(([$,N])=>C(U,q({features:z.Hidden,key:$,as:"input",type:"hidden",hidden:!0,readOnly:!0,form:v,name:$,value:N}))):[],P({ourProps:G,theirProps:{...p,...J(i,["modelValue","defaultValue","by"])},slot:{},attrs:p,slots:n,name:"RadioGroup"})])}}});var ne=(a=>(a[a.Empty=1]="Empty",a[a.Active=2]="Active",a))(ne||{});let se=V({name:"RadioGroupOption",props:{as:{type:[Object,String],default:"div"},value:{type:[Object,String,Number,Boolean]},disabled:{type:Boolean,default:!1},id:{type:String,default:()=>`headlessui-radiogroup-option-${L()}`}},setup(a,{attrs:d,slots:p,expose:n}){let u=I("RadioGroupOption"),o=D({name:"RadioGroupLabel"}),t=F({name:"RadioGroupDescription"}),c=h(null),E=s(()=>({value:a.value,disabled:a.disabled})),m=h(1);n({el:c,$el:c});let w=s(()=>k(c));j(()=>u.registerOption({id:a.id,element:w,propsRef:E})),ee(()=>u.unregisterOption(a.id));let f=s(()=>{var i;return((i=u.firstOption.value)==null?void 0:i.id)===a.id}),b=s(()=>u.disabled.value||a.disabled),g=s(()=>u.compare(y(u.value.value),y(a.value))),e=s(()=>b.value?-1:g.value||!u.containsCheckedOption.value&&f.value?0:-1);function r(){var i;u.change(a.value)&&(m.value|=2,(i=k(c))==null||i.focus())}function l(){m.value|=2}function v(){m.value&=-3}return()=>{let{id:i,value:G,disabled:$,...N}=a,K={checked:g.value,disabled:b.value,active:!!(m.value&2)},H={id:i,ref:c,role:"radio","aria-checked":g.value?"true":"false","aria-labelledby":o.value,"aria-describedby":t.value,"aria-disabled":b.value?!0:void 0,tabIndex:e.value,onClick:b.value?void 0:r,onFocus:b.value?void 0:l,onBlur:b.value?void 0:v};return P({ourProps:H,theirProps:N,slot:K,attrs:d,slots:p,name:"RadioGroupOption"})}}});export{se as E,de as k,le as p};
