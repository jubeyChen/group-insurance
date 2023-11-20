import{_ as de}from"./icon_consent-da7b8deb.js";import{_ as ce,a as re}from"./icon_delete-7a56ee05.js";import{d as U,I as ue,y as B,r as E,g as Z,C as me,D as z,F as R,o as y,p as ee,w as u,a as e,n as $,u as t,W as pe,J as q,L as ve,M as _e,c as k,b as s,l as x,Q as O,m as Q,i as P,h as D,O as ge,s as ae,x as te,_ as le,j as Y,k as he,aA as be,t as V}from"./index-597ec5e4.js";import{_ as fe}from"./FormTitle.vue_vue_type_script_setup_true_lang-86829e6e.js";import{t as Se,d as ye,j as Me,o as we,f as ke,K as $e,b as xe,H as Ee,T as De,i as X,k as Ce,N as Ie}from"./Select-269d2ec6.js";import{k as Ne,E as J}from"./radio-group-d89546ba.js";import{u as Ve}from"./pagination-14266765.js";import{N as Le}from"./Breadcrumbs-cd69ec89.js";/* empty css                                                               */let Pe=Symbol("GroupContext"),Te=U({name:"Switch",emits:{"update:modelValue":c=>!0},props:{as:{type:[Object,String],default:"button"},modelValue:{type:Boolean,default:void 0},defaultChecked:{type:Boolean,optional:!0},form:{type:String,optional:!0},name:{type:String,optional:!0},value:{type:String,optional:!0},id:{type:String,default:()=>`headlessui-switch-${Se()}`}},inheritAttrs:!1,setup(c,{emit:h,attrs:a,slots:l,expose:L}){let _=ue(Pe,null),[w,C]=ye(B(()=>c.modelValue),r=>h("update:modelValue",r),B(()=>c.defaultChecked));function I(){C(!w.value)}let b=E(null),S=_===null?b:_.switchRef,g=Me(B(()=>({as:c.as,type:a.type})),S);L({el:S,$el:S});function n(r){r.preventDefault(),I()}function i(r){r.key===X.Space?(r.preventDefault(),I()):r.key===X.Enter&&Ce(r.currentTarget)}function v(r){r.preventDefault()}let p=B(()=>{var r,f;return(f=(r=we(S))==null?void 0:r.closest)==null?void 0:f.call(r,"form")});return Z(()=>{me([p],()=>{if(!p.value||c.defaultChecked===void 0)return;function r(){C(c.defaultChecked)}return p.value.addEventListener("reset",r),()=>{var f;(f=p.value)==null||f.removeEventListener("reset",r)}},{immediate:!0})}),()=>{let{id:r,name:f,value:F,form:j,...G}=c,W={checked:w.value},K={id:r,ref:S,role:"switch",type:g.value,tabIndex:0,"aria-checked":w.value,"aria-labelledby":_==null?void 0:_.labelledby.value,"aria-describedby":_==null?void 0:_.describedby.value,onClick:n,onKeyup:i,onKeypress:v};return z(R,[f!=null&&w.value!=null?z(ke,$e({features:xe.Hidden,as:"input",type:"checkbox",hidden:!0,readOnly:!0,checked:w.value,form:j,name:f,value:F})):null,Ee({ourProps:K,theirProps:{...a,...De(G,["modelValue","defaultChecked"])},slot:W,attrs:a,slots:l,name:"Switch"})])}}});const Ae=U({__name:"Toggle",props:{value:{type:null}},setup(c){return(h,a)=>(y(),ee(t(Te),{"model-value":c.value,as:"template","onUpdate:modelValue":a[0]||(a[0]=l=>h.$emit("update:modelValue",l))},{default:u(({checked:l})=>[e("button",{class:$([l?"bg-primary-500 on":"bg-gray-200 off","relative inline-flex h-7 w-14 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-1 focus:ring-primary-500 focus:ring-offset-2"])},[e("span",{"aria-hidden":"true",class:$([l?"translate-x-7":"translate-x-0","pointer-events-none inline-block h-5 w-5 self-center transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out "])},null,2)],2)]),_:1},8,["model-value"]))}});const oe=pe("accountManagement",()=>{const c=E("add"),h=E({serialNumber:"",employeeID:"",department:"",name:"",role:{label:"",value:0},accountState:!1,sectionManagerEmail:"",departmentManagerEmail:""}),a=E([{serialNumber:"20230116170505",employeeID:"W901111",department:"Other",name:"玉南山",role:{label:"內勤人員",value:1},accountState:!0,sectionManagerEmail:"NSLSM@mail.com",departmentManagerEmail:"NSLDM@mail.com"},{serialNumber:"20230717190707",employeeID:"W902222",department:"AGTeam",name:"玉北山",role:{label:"外勤人員",value:2},accountState:!1,sectionManagerEmail:"NSLSM2@mail.com",departmentManagerEmail:"NSLDM2@mail.com"},{serialNumber:"20231010221010",employeeID:"W904444",department:"AGTeam",name:"玉東山",role:{label:"經理",value:4},accountState:!1,sectionManagerEmail:"NSLSM4@mail.com",departmentManagerEmail:"NSLDM4@mail.com"},{serialNumber:"20231111231111",employeeID:"W906666",department:"DBTeam",name:"玉西山",role:{label:"處長",value:6},accountState:!0,sectionManagerEmail:"NSLSM6@mail.com",departmentManagerEmail:"NSLDM6@mail.com"}]),l=E([{label:"內勤人員",value:1},{label:"外勤人員",value:2},{label:"專員",value:3},{label:"經理",value:4},{label:"科主管",value:5},{label:"處主管",value:6}]);return{initValues:h,accountManagementDataList:a,options:l,modeState:c}}),M=c=>(ae("data-v-2379f6b9"),c=c(),te(),c),Be={class:"modal-mask"},Oe={class:"content"},Ue={class:"pb-6 flex justify-center align-middle"},Fe={class:"show-modal"},je={class:"show-modal-row"},Ge={class:"show-modal-input"},We=M(()=>e("label",{for:"employeeID"},"員工編號",-1)),Ke={class:"show-modal-input"},He=M(()=>e("label",{for:"department"},"部門",-1)),Je={class:"flex items-center mb-4"},Re=M(()=>e("span",{class:"radio-text"},"DB TEAM",-1)),qe={class:"flex items-center"},ze=M(()=>e("span",{class:"radio-text"},"AG TEAM",-1)),Qe={class:"flex items-center"},Ye=M(()=>e("span",{class:"radio-text"},"Other",-1)),Xe={class:"show-modal-row"},Ze={class:"show-modal-input"},ea=M(()=>e("label",{for:"name"},"姓名",-1)),aa={class:"show-modal-input"},ta=M(()=>e("label",{for:"role"},"角色",-1)),la={class:"show-modal-row"},oa={class:"show-modal-input"},na=M(()=>e("label",{for:"sectionManagerEmail"},"科主管Email",-1)),sa={class:"show-modal-input"},ia=M(()=>e("label",{for:"departmentManagerEmail"},"處主管Email",-1)),da={class:"show-modal-row"},ca={class:"show-modal-input"},ra=M(()=>e("label",{for:"accountState"},"帳號狀態",-1)),ua={class:"show-modal-button"},ma=U({__name:"AccountManagementForms",emits:["close","onSubmit","update:toggle-change","update:select-change"],setup(c,{emit:h}){const a=oe(),{initValues:l,accountManagementDataList:L,options:_,modeState:w}=q(a);function C(g){console.log("update:ToggleChange："+g),h("update:toggle-change",g)}function I(g){console.log("update:SelectChange："+g),h("update:select-change",g)}function b(){h("close")}function S(){h("onSubmit")}return ve({account:_e().required("請輸入角色名稱").test("addNewPermissions","必須輸入內容",g=>/^.*/.test(g))}),(g,n)=>(y(),k("div",Be,[e("div",Oe,[s(fe,{title:t(w)==="add"?"新增帳號":"編輯帳號",onClose:b},null,8,["title"]),e("div",Ue,[e("div",Fe,[s(t(ge),{"initial-values":t(l),onSubmit:S},{default:u(()=>[e("div",je,[e("div",Ge,[We,s(t(x),{id:"employeeID",name:"employeeID"},{default:u(({field:i,errorMessage:v})=>[s(O,{modelValue:t(l).employeeID,"onUpdate:modelValue":n[0]||(n[0]=p=>t(l).employeeID=p),"v-bind":i,class:"modal-input",placeholder:"請輸入人員代碼","error-message":v},null,8,["modelValue","v-bind","error-message"])]),_:1})]),e("div",Ke,[He,s(t(x),{id:"department",name:"department"},{default:u(()=>[s(t(Ne),{modelValue:t(l).department,"onUpdate:modelValue":n[1]||(n[1]=i=>t(l).department=i),class:"flex gap-5 pt-3 h-0"},{default:u(()=>[s(t(J),{value:"DBTeam",class:"w-fit"},{default:u(({checked:i})=>[e("div",Je,[e("span",{class:$(["radio-circle text-[0px]",{"is-checked":i}])},null,2),Re])]),_:1}),s(t(J),{value:"AGTeam",class:"w-fit"},{default:u(({checked:i})=>[e("div",qe,[e("span",{class:$(["radio-circle text-[0px]",{"is-checked":i}])},null,2),ze])]),_:1}),s(t(J),{value:"Other",class:"w-fit"},{default:u(({checked:i})=>[e("div",Qe,[e("span",{class:$(["radio-circle text-[0px]",{"is-checked":i}])},null,2),Ye])]),_:1})]),_:1},8,["modelValue"])]),_:1})])]),e("div",Xe,[e("div",Ze,[ea,s(t(x),{id:"name",name:"name"},{default:u(({field:i,errorMessage:v})=>[s(O,{modelValue:t(l).name,"onUpdate:modelValue":n[2]||(n[2]=p=>t(l).name=p),"v-bind":i,class:"modal-input",placeholder:"請輸入姓名","error-message":v},null,8,["modelValue","v-bind","error-message"])]),_:1})]),e("div",aa,[ta,s(t(x),{id:"role",name:"role"},{default:u(({field:i,errorMessage:v})=>[s(Ie,Q(i,{class:"modal-input",value:t(l).role.value,"model-value":t(l).role.value,placeholder:"請選擇角色",options:t(_),"error-message":v,"onUpdate:modelValue":I}),null,16,["value","model-value","options","error-message"])]),_:1})])]),e("div",la,[e("div",oa,[na,s(t(x),{id:"sectionManagerEmail",name:"sectionManagerEmail"},{default:u(({field:i,errorMessage:v})=>[s(O,{modelValue:t(l).sectionManagerEmail,"onUpdate:modelValue":n[3]||(n[3]=p=>t(l).sectionManagerEmail=p),"v-bind":i,class:"modal-input",placeholder:"請輸email","error-message":v},null,8,["modelValue","v-bind","error-message"])]),_:1})]),e("div",sa,[ia,s(t(x),{id:"departmentManagerEmail",name:"departmentManagerEmail"},{default:u(({field:i,errorMessage:v})=>[s(O,{modelValue:t(l).departmentManagerEmail,"onUpdate:modelValue":n[4]||(n[4]=p=>t(l).departmentManagerEmail=p),"v-bind":i,class:"modal-input",placeholder:"請輸email","error-message":v},null,8,["modelValue","v-bind","error-message"])]),_:1})])]),e("div",da,[e("div",ca,[ra,s(t(x),{id:"accountState",name:"accountState"},{default:u(({value:i,field:v,errorMessage:p})=>[s(Ae,Q({class:"modal-radio-button mt-3"},v,{"error-message":p,"model-value":t(l).accountState=i,"onUpdate:modelValue":C}),null,16,["error-message","model-value"])]),_:1})])]),e("div",ua,[s(P,{type:"button",outline:!0,onClick:b},{default:u(()=>[D(" 取消 ")]),_:1}),s(P,{type:"submit"},{default:u(()=>[D(" 確認 ")]),_:1})])]),_:1},8,["initial-values"])])])])]))}});const pa=le(ma,[["__scopeId","data-v-2379f6b9"]]),T=c=>(ae("data-v-b85325f3"),c=c(),te(),c),va={class:"account-management-container"},_a={class:"breadcrumb"},ga={class:"box mx-auto w-full"},ha=T(()=>e("h2",{class:"title-text"}," 帳號管理 ",-1)),ba={class:"account-management-title"},fa=T(()=>e("span",{class:"account-management-title-text"},[e("img",{src:de,alt:""}),D(" 帳號列表 ")],-1)),Sa=T(()=>e("span",null," ＋ ",-1)),ya={class:"table-container"},Ma=be('<div class="table-header" data-v-b85325f3><div class="table-header-title1" data-v-b85325f3> 序號 </div><div class="table-header-title2" data-v-b85325f3> 人員代碼 </div><div class="table-header-title3" data-v-b85325f3> 姓名 </div><div class="table-header-title4" data-v-b85325f3> 角色 </div><div class="table-header-title5" data-v-b85325f3> 帳號狀態 </div><div class="table-header-title6" data-v-b85325f3> 操作 </div></div>',1),wa={class:"table-body-item1","data-title":"序　　號："},ka={class:"table-body-item2","data-title":"人員代碼："},$a={class:"table-body-item3","data-title":"姓　　名："},xa={class:"table-body-direction"},Ea={class:"table-body-item4","data-title":"角　　色："},Da={class:"table-body-direction"},Ca={class:"table-body-item5","data-title":"帳號狀態："},Ia={class:"table-body-direction w-full"},Na={class:"web-state"},Va=["src"],La={class:"table-body-item6"},Pa=T(()=>e("img",{src:ce,alt:""},null,-1)),Ta=T(()=>e("img",{src:re,alt:""},null,-1)),Aa={class:"pagination"},Ba=["disabled"],Oa={width:"7",height:"12",viewBox:"0 0 7 12",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Ua=["onClick"],Fa=["disabled"],ja={width:"7",height:"12",viewBox:"0 0 7 12",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Ga=U({__name:"AccountManagementView",setup(c){const h=oe(),{initValues:a,accountManagementDataList:l,options:L,modeState:_}=q(h),w=o=>{console.log("ToggleChanged:",o),a.value.accountState=o},C=o=>{console.log("SelectChanged:",o),a.value.role.value=o;const m=L.value.find(d=>d.value===o);m?a.value.role.label=m.label:console.log("沒有找到對應的選項")},I=[{title:"首頁",path:"/back-home"},{title:"帳號管理",path:"/back-account-management"}],b=E(!1),S=E(0),g=Ve(),{pageSet:n,totalPages:i}=q(g);function v(){const o=n.value.currentPage-1;n.value.currentPage=o,n.value.totalElements=l.value.length}function p(){const o=n.value.currentPage+1;n.value.currentPage=o,n.value.totalElements=l.value.length}function r(o){o!==n.value.currentPage&&(n.value.currentPage=o,n.value.totalElements=l.value.length)}function f(o){const m=document.getElementById(o);if(m)return!!m.disabled}Z(()=>{g.$reset()});function F(o){const m=l.value.findIndex(d=>d.serialNumber===o);console.log(m),m!==-1&&l.value.splice(m,1)}function j(){_.value="add",a.value.employeeID="",a.value.department="",a.value.name="",a.value.role={label:"內勤人員",value:0},a.value.accountState=!1,a.value.sectionManagerEmail="",b.value=!0}function G(o){_.value="edit",S.value=o;const m=l.value.find(d=>d.serialNumber===o);if(m){const d=JSON.parse(JSON.stringify(m));a.value=d}else console.log("沒有找到對應的資料");b.value=!0}function W(){a.value.employeeID="",a.value.department="",a.value.name="",a.value.role={label:"",value:0},a.value.accountState=!1,a.value.sectionManagerEmail="",a.value.departmentManagerEmail="",b.value=!1}const K=async()=>{if(_.value==="add"){console.log("新增成功!");const o=a.value.employeeID,m=a.value.department,d=a.value.name,A=a.value.role,H=a.value.accountState,ne=a.value.sectionManagerEmail,se=a.value.departmentManagerEmail,ie={serialNumber:(()=>{const N=new Date;return`${N.getFullYear()}${String(N.getMonth()+1).padStart(2,"0")}${String(N.getDate()).padStart(2,"0")}${String(N.getHours()).padStart(2,"0")}${String(N.getMinutes()).padStart(2,"0")}${String(N.getSeconds()).padStart(2,"0")}`})(),employeeID:o,department:m,name:d,role:A,accountState:H,sectionManagerEmail:ne,departmentManagerEmail:se};l.value.push(ie),b.value=!1}else if(_.value==="edit"){console.log("編輯成功!");const o=l.value.findIndex(m=>m.serialNumber===S.value);o!==-1?(l.value[o]=a.value,console.log(l.value[o])):console.log("沒有找到對應的資料"),b.value=!1}};return(o,m)=>(y(),k("div",va,[e("div",_a,[s(Le,{breadcrumb:I})]),e("div",ga,[ha,e("div",ba,[fa,s(P,{onClick:j},{default:u(()=>[Sa,D(" 新增帳號 ")]),_:1})]),e("div",ya,[Ma,(y(!0),k(R,null,Y(t(l),(d,A)=>(y(),k("div",{key:A,class:"table-body"},[e("div",wa,V(d.serialNumber),1),e("div",ka,V(d.employeeID),1),e("div",$a,[e("div",xa,V(d.name),1)]),e("div",Ea,[e("div",Da,V(d.role.label),1)]),e("div",Ca,[e("div",Ia,[e("div",Na,[e("img",{src:d.accountState?"/images/icons/icon_check.png":"/images/icons/icon_alert_grey.png",class:"inline-block",alt:"State Image"},null,8,Va),D(" "+V(d.accountState?"啟用":"未啟用"),1)])])]),e("div",La,[s(P,{class:"edit-button",onClick:H=>G(d.serialNumber)},{default:u(()=>[Pa,D(" 編輯 ")]),_:2},1032,["onClick"]),s(P,{class:"delete-button",onClick:H=>F(d.serialNumber)},{default:u(()=>[Ta,D(" 刪除 ")]),_:2},1032,["onClick"])])]))),128)),e("div",Aa,[e("button",{disabled:t(n).currentPage===1,onClick:v},[(y(),k("svg",Oa,[e("path",{class:$({"disabled-btn":f("pre-btn")}),d:"M6.16602 1.33301L1.49935 5.99967L6.16602 10.6663",stroke:"black","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"},null,2)]))],8,Ba),(y(!0),k(R,null,Y(t(i),d=>(y(),k("button",{key:d,class:$(d===t(n).currentPage?"chosenPageBtn":"unchosenPageBtn"),onClick:A=>r(d)},V(d),11,Ua))),128)),e("button",{disabled:t(n).currentPage===t(i),onClick:p},[(y(),k("svg",ja,[e("path",{class:$({"disabled-btn":f("next-btn")}),d:"M1.5 1.33301L6.16667 5.99967L1.5 10.6663",stroke:"black","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"},null,2)]))],8,Fa)])])]),b.value?(y(),ee(pa,{key:0,class:"nsl-form","init-values":t(a),options:t(L),onClose:W,onOnSubmit:K,"onUpdate:toggleChange":w,"onUpdate:selectChange":C},null,8,["init-values","options"])):he("",!0)]))}});const Za=le(Ga,[["__scopeId","data-v-b85325f3"]]);export{Za as default};
