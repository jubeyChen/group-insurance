import{_ as Z,a as ee,b as te}from"./icon_delete-cb30b165.js";import{d as j,L as ae,M as le,o as a,c as l,a as e,b as w,w as k,u as N,F as ne,R as se,k as m,l as _,j as E,h as g,Q as ie,e as $,bG as D,t as b,s as I,x as O,_ as J,r as W,J as de,g as oe,n as U,p as ce,i as f,at as ue}from"./index-18b1c807.js";import{_ as re}from"./FormTitle.vue_vue_type_script_setup_true_lang-38a3dfda.js";/* empty css                                                               */import{u as be}from"./pagination-7c599237.js";import{N as ve}from"./Breadcrumbs-8068045f.js";const C=o=>(I("data-v-7fbd1c3c"),o=o(),O(),o),me={class:"modal-mask"},_e={class:"content"},he={class:"content-box pb-6 flex justify-center align-middle"},fe={class:"show-modal"},ge={class:"show-modal-body"},we={class:"show-modal-input"},pe=C(()=>e("label",{for:"addNewPermissions"},"角色名稱",-1)),Me={class:"show-modal-table"},ye=C(()=>e("label",{class:"show-modal-label",for:"addNewPermissions"}," 管理權限 ",-1)),We={class:"show-table-container"},Ne={class:"table-container"},ke=C(()=>e("div",{class:"container-title"}," 創建網站 ",-1)),Ce={class:"check-container"},Re=["id","onUpdate:modelValue"],Ve=["for"],$e=C(()=>e("div",{class:"container-title"}," 報表查詢 ",-1)),De={class:"check-container"},Ee=["id","onUpdate:modelValue"],Pe=["for"],Se=C(()=>e("div",{class:"container-title"}," 資料維護 ",-1)),xe={class:"check-container"},Fe=["id","onUpdate:modelValue"],Ue=["for"],Le=C(()=>e("div",{class:"container-title"}," 權限管理 ",-1)),Ae={class:"check-container"},Qe=["id","onUpdate:modelValue"],je=["for"],Ie=C(()=>e("div",{class:"container-title"}," 帳號管理 ",-1)),Oe={class:"check-container"},Je=["id","onUpdate:modelValue"],Te=["for"],Be={class:"show-modal-button"},qe=j({__name:"AuthorityManagementForms",props:{initValues:{type:Object,default:()=>({})},navButton:{type:Object,default:()=>({})},currentNavButton:{type:Number,default:0},checkBoxes:{type:Array,default:()=>[]}},emits:["close","onSubmit"],setup(o,{emit:P}){function M(){P("close")}function R(){P("onSubmit")}const x=ae({account:le().required("請輸入角色名稱").test("addNewPermissions","必須輸入內容",V=>/^.*/.test(V))});return(V,h)=>(a(),l("div",me,[e("div",_e,[w(re,{title:"新增角色",onClose:M}),e("div",he,[e("div",fe,[w(N(ie),{"validation-schema":N(x),"initial-values":o.initValues},{default:k(()=>[e("div",ge,[e("div",we,[pe,w(N(ne),{id:"addNewPermissions",name:"addNewPermissions"},{default:k(({field:t,errorMessage:r})=>[w(se,{modelValue:o.initValues.addNewPermissions,"onUpdate:modelValue":h[0]||(h[0]=d=>o.initValues.addNewPermissions=d),"v-bind":t,class:"modal-input",placeholder:"系統管理員","error-message":r},null,8,["modelValue","v-bind","error-message"])]),_:1})]),e("div",Me,[ye,e("div",We,[e("div",Ne,[ke,e("div",Ce,[(a(!0),l(m,null,_(o.checkBoxes[0],(t,r)=>(a(),l("div",{key:r,class:"check-box"},[$(e("input",{id:t.id,"onUpdate:modelValue":d=>t.selected=d,type:"checkbox"},null,8,Re),[[D,t.selected]]),e("label",{class:"check-label",for:t.id},b(t.label),9,Ve)]))),128))]),$e,e("div",De,[(a(!0),l(m,null,_(o.checkBoxes[1],(t,r)=>(a(),l("div",{key:r,class:"check-box"},[$(e("input",{id:t.id,"onUpdate:modelValue":d=>t.selected=d,type:"checkbox"},null,8,Ee),[[D,t.selected]]),e("label",{class:"check-label",for:t.id},b(t.label),9,Pe)]))),128))]),Se,e("div",xe,[(a(!0),l(m,null,_(o.checkBoxes[2],(t,r)=>(a(),l("div",{key:r,class:"check-box"},[$(e("input",{id:t.id,"onUpdate:modelValue":d=>t.selected=d,type:"checkbox"},null,8,Fe),[[D,t.selected]]),e("label",{class:"check-label",for:t.id},b(t.label),9,Ue)]))),128))]),Le,e("div",Ae,[(a(!0),l(m,null,_(o.checkBoxes[3],(t,r)=>(a(),l("div",{key:r,class:"check-box"},[$(e("input",{id:t.id,"onUpdate:modelValue":d=>t.selected=d,type:"checkbox"},null,8,Qe),[[D,t.selected]]),e("label",{class:"check-label",for:t.id},b(t.label),9,je)]))),128))]),Ie,e("div",Oe,[(a(!0),l(m,null,_(o.checkBoxes[4],(t,r)=>(a(),l("div",{key:r,class:"check-box"},[$(e("input",{id:t.id,"onUpdate:modelValue":d=>t.selected=d,type:"checkbox"},null,8,Je),[[D,t.selected]]),e("label",{class:"check-label",for:t.id},b(t.label),9,Te)]))),128))])])])])]),e("div",Be,[w(E,{outline:!0,onClick:M},{default:k(()=>[g(" 取消 ")]),_:1}),w(E,{type:"submit",onClick:R},{default:k(()=>[g(" 確認 ")]),_:1})])]),_:1},8,["validation-schema","initial-values"])])])])]))}});const ze=J(qe,[["__scopeId","data-v-7fbd1c3c"]]),p=o=>(I("data-v-54130027"),o=o(),O(),o),Ge={class:"create-view-container"},He={class:"breadcrumb"},Ke={class:"box mx-auto w-full"},Xe=p(()=>e("h2",{class:"title-text"}," 權限管理 ",-1)),Ye={class:"management-title"},Ze=p(()=>e("span",{class:"management-title-text"},[e("img",{src:Z,alt:""}),g(" 權限列表 ")],-1)),et=p(()=>e("span",null," ＋ ",-1)),tt={class:"table-container"},at=ue('<div class="table-header" data-v-54130027><div class="table-header-title1" data-v-54130027> 序號 </div><div class="table-header-title2" data-v-54130027> 角色名稱 </div><div class="table-header-title3" data-v-54130027> 角色名稱 </div><div class="table-header-title4" data-v-54130027> 操作 </div></div>',1),lt={class:"table-body-item1","data-title":"序　　號："},nt={class:"table-body-item2","data-title":"角色名稱："},st={class:"table-body-item3","data-title":"角色名稱："},it={class:"table-body-direction"},dt={class:"table-body-item-text"},ot=p(()=>e("div",null,"創建網站-",-1)),ct={key:0},ut={key:0,class:"separate"},rt={class:"table-body-item-text"},bt=p(()=>e("div",null,"報價查詢-",-1)),vt={key:0},mt={class:"table-body-item-text"},_t=p(()=>e("div",null,"資料維護-",-1)),ht={key:0},ft={key:0,class:"separate"},gt={class:"table-body-item-text"},wt=p(()=>e("div",null,"權限管理-",-1)),pt={key:0},Mt={key:0,class:"separate"},yt={class:"table-body-item-text"},Wt=p(()=>e("div",null,"帳號管理-",-1)),Nt={key:0},kt={key:0,class:"separate"},Ct={class:"table-body-item4"},Rt=p(()=>e("img",{src:ee,alt:""},null,-1)),Vt=p(()=>e("img",{src:te,alt:""},null,-1)),$t={class:"pagination"},Dt=["disabled"],Et={width:"7",height:"12",viewBox:"0 0 7 12",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Pt=["onClick"],St=["disabled"],xt={width:"7",height:"12",viewBox:"0 0 7 12",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Ft=j({__name:"AuthorityManagementView",setup(o){const P=[{title:"首頁",path:"/back-home"},{title:"權限管理",path:"/back-authority-management"}],M=W(!1),R=W("add"),x=W(0),V=W(0),h=W({addNewPermissions:""}),t=W([{code:"20230116170505",roleName:"主任",actions:[[{value:"createWebPreview",id:"createWebPreview",label:"預覽",selected:!0},{value:"createWebUploadFiles",id:"uploadFiles",label:"上傳文件",selected:!0},{value:"createWebCopyFiles",id:"createWebCopyFiles",label:"複製案件",selected:!0},{value:"createWebDeletion",id:"createWebDeletion",label:"刪除",selected:!0},{value:"createWebRegistering",id:"createWebRegistering",label:"套版",selected:!0},{value:"createWebEdit",id:"createWebEdit",label:"編輯",selected:!0},{value:"createWebNew",id:"createWebNew",label:"新增",selected:!0},{value:"createWebReview",id:"createWebReview",label:"審核",selected:!0},{value:"createWebSecondStageReview",id:"createWebSecondStageReview",label:"二階段審核",selected:!0},{value:"createWebRemovedContent",id:"createWebRemovedContent",label:"下架內容",selected:!0}],[{value:"reportQueryViewContent",id:"reportQueryViewContent",label:"查看內容",selected:!0}],[{value:"dataMaintenanceViewContent",id:"dataMaintenanceViewContent",label:"查看內容",selected:!0},{value:"dataMaintenanceDeletion",id:"dataMaintenanceDeletion",label:"刪除",selected:!0},{value:"dataMaintenanceEdit",id:"dataMaintenanceEdit",label:"編輯",selected:!0},{value:"dataMaintenanceRemovedContent",id:"dataMaintenanceRemovedContent",label:"下架",selected:!0},{value:"dataMaintenanceReview",id:"dataMaintenanceReview",label:"審核",selected:!0}],[{value:"authorityManagementEdit",id:"authorityManagementEdit",label:"編輯",selected:!0},{value:"authorityManagementDeletion",id:"authorityManagementDeletion",label:"刪除",selected:!0},{value:"authorityManagementNew",id:"authorityManagementNew",label:"新增",selected:!0}],[{value:"accountManagementEdit",id:"accountManagementEdit",label:"編輯",selected:!0},{value:"accountManagementDeletion",id:"accountManagementDeletion",label:"刪除",selected:!0},{value:"accountManagementNew",id:"accountManagementNew",label:"新增",selected:!0}]]},{code:"20230116170505",roleName:"合作金庫",actions:[[{value:"createWebPreview",id:"createWebPreview",label:"預覽",selected:!0},{value:"createWebUploadFiles",id:"uploadFiles",label:"上傳文件",selected:!1},{value:"createWebCopyFiles",id:"createWebCopyFiles",label:"複製案件",selected:!1},{value:"createWebDeletion",id:"createWebDeletion",label:"刪除",selected:!1},{value:"createWebRegistering",id:"createWebRegistering",label:"套版",selected:!1},{value:"createWebEdit",id:"createWebEdit",label:"編輯",selected:!1},{value:"createWebNew",id:"createWebNew",label:"新增",selected:!1},{value:"createWebReview",id:"createWebReview",label:"審核",selected:!1},{value:"createWebSecondStageReview",id:"createWebSecondStageReview",label:"二階段審核",selected:!1},{value:"createWebRemovedContent",id:"createWebRemovedContent",label:"下架內容",selected:!1}],[{value:"reportQueryViewContent",id:"reportQueryViewContent",label:"查看內容",selected:!0}],[{value:"dataMaintenanceViewContent",id:"dataMaintenanceViewContent",label:"查看內容",selected:!0},{value:"dataMaintenanceDeletion",id:"dataMaintenanceDeletion",label:"刪除",selected:!1},{value:"dataMaintenanceEdit",id:"dataMaintenanceEdit",label:"編輯",selected:!1},{value:"dataMaintenanceRemovedContent",id:"dataMaintenanceRemovedContent",label:"下架",selected:!1},{value:"dataMaintenanceReview",id:"dataMaintenanceReview",label:"審核",selected:!1}],[{value:"authorityManagementEdit",id:"authorityManagementEdit",label:"編輯",selected:!0},{value:"authorityManagementDeletion",id:"authorityManagementDeletion",label:"刪除",selected:!1},{value:"authorityManagementNew",id:"authorityManagementNew",label:"新增",selected:!1}],[{value:"accountManagementEdit",id:"accountManagementEdit",label:"編輯",selected:!0},{value:"accountManagementDeletion",id:"accountManagementDeletion",label:"刪除",selected:!1},{value:"accountManagementNew",id:"accountManagementNew",label:"新增",selected:!1}]]},{code:"20230116170505",roleName:"合作金庫",actions:[[{value:"createWebPreview",id:"createWebPreview",label:"預覽",selected:!0},{value:"createWebUploadFiles",id:"uploadFiles",label:"上傳文件",selected:!1},{value:"createWebCopyFiles",id:"createWebCopyFiles",label:"複製案件",selected:!1},{value:"createWebDeletion",id:"createWebDeletion",label:"刪除",selected:!1},{value:"createWebRegistering",id:"createWebRegistering",label:"套版",selected:!1},{value:"createWebEdit",id:"createWebEdit",label:"編輯",selected:!1},{value:"createWebNew",id:"createWebNew",label:"新增",selected:!1},{value:"createWebReview",id:"createWebReview",label:"審核",selected:!1},{value:"createWebSecondStageReview",id:"createWebSecondStageReview",label:"二階段審核",selected:!1},{value:"createWebRemovedContent",id:"createWebRemovedContent",label:"下架內容",selected:!1}],[{value:"reportQueryViewContent",id:"reportQueryViewContent",label:"查看內容",selected:!0}],[{value:"dataMaintenanceViewContent",id:"dataMaintenanceViewContent",label:"查看內容",selected:!0},{value:"dataMaintenanceDeletion",id:"dataMaintenanceDeletion",label:"刪除",selected:!1},{value:"dataMaintenanceEdit",id:"dataMaintenanceEdit",label:"編輯",selected:!1},{value:"dataMaintenanceRemovedContent",id:"dataMaintenanceRemovedContent",label:"下架",selected:!1},{value:"dataMaintenanceReview",id:"dataMaintenanceReview",label:"審核",selected:!1}],[{value:"authorityManagementEdit",id:"authorityManagementEdit",label:"編輯",selected:!0},{value:"authorityManagementDeletion",id:"authorityManagementDeletion",label:"刪除",selected:!1},{value:"authorityManagementNew",id:"authorityManagementNew",label:"新增",selected:!1}],[{value:"accountManagementEdit",id:"accountManagementEdit",label:"編輯",selected:!0},{value:"accountManagementDeletion",id:"accountManagementDeletion",label:"刪除",selected:!1},{value:"accountManagementNew",id:"accountManagementNew",label:"新增",selected:!1}]]}]),r=W([{buttonName:"創建網站",index:0},{buttonName:"報表查詢",index:1},{buttonName:"資料維護",index:2},{buttonName:"權限管理",index:3},{buttonName:"帳號管理",index:4}]),d=W([[{value:"createWebPreview",id:"createWebPreview",label:"預覽",selected:!1},{value:"createWebUploadFiles",id:"uploadFiles",label:"上傳文件",selected:!1},{value:"createWebCopyFiles",id:"createWebCopyFiles",label:"複製案件",selected:!1},{value:"createWebDeletion",id:"createWebDeletion",label:"刪除",selected:!1},{value:"createWebRegistering",id:"createWebRegistering",label:"套版",selected:!1},{value:"createWebEdit",id:"createWebEdit",label:"編輯",selected:!1},{value:"createWebNew",id:"createWebNew",label:"新增",selected:!1},{value:"createWebReview",id:"createWebReview",label:"審核",selected:!1},{value:"createWebSecondStageReview",id:"createWebSecondStageReview",label:"二階段審核",selected:!1},{value:"createWebRemovedContent",id:"createWebRemovedContent",label:"下架內容",selected:!1}],[{value:"reportQueryViewContent",id:"reportQueryViewContent",label:"查看內容",selected:!1}],[{value:"dataMaintenanceViewContent",id:"dataMaintenanceViewContent",label:"查看內容",selected:!1},{value:"dataMaintenanceDeletion",id:"dataMaintenanceDeletion",label:"刪除",selected:!1},{value:"dataMaintenanceEdit",id:"dataMaintenanceEdit",label:"編輯",selected:!1},{value:"dataMaintenanceRemovedContent",id:"dataMaintenanceRemovedContent",label:"下架",selected:!1},{value:"dataMaintenanceReview",id:"dataMaintenanceReview",label:"審核",selected:!1}],[{value:"authorityManagementEdit",id:"authorityManagementEdit",label:"編輯",selected:!1},{value:"authorityManagementDeletion",id:"authorityManagementDeletion",label:"刪除",selected:!1},{value:"authorityManagementNew",id:"authorityManagementNew",label:"新增",selected:!1}],[{value:"accountManagementEdit",id:"accountManagementEdit",label:"編輯",selected:!1},{value:"accountManagementDeletion",id:"accountManagementDeletion",label:"刪除",selected:!1},{value:"accountManagementNew",id:"accountManagementNew",label:"新增",selected:!1}]]);function S(s,u){for(let n=u.length-1;n>s;n--)if(u[n].selected)return!1;return!0}const L=be(),{pageSet:v,totalPages:A}=de(L);function T(){const s=v.value.currentPage-1;v.value.currentPage=s,v.value.totalElements=t.value.length}function B(){const s=v.value.currentPage+1;v.value.currentPage=s,v.value.totalElements=t.value.length}function q(s){s!==v.value.currentPage&&(v.value.currentPage=s,v.value.totalElements=t.value.length)}function Q(s){const u=document.getElementById(s);if(u)return!!u.disabled}oe(()=>{L.$reset()});function z(s){t.value.splice(s,1)}function G(){R.value="add",h.value.addNewPermissions="";for(const s of d.value)for(const u of s)u.selected=!1;M.value=!0}function H(s,u){R.value="edit",V.value=u;const n=JSON.parse(JSON.stringify(s));h.value.addNewPermissions=n.roleName;const{actions:y}=n;y.forEach((i,c)=>{i.forEach((F,Y)=>{d.value[c][Y].selected=F.selected})}),M.value=!0}function K(){h.value.addNewPermissions="";for(const s of d.value)for(const u of s)u.selected=!1;M.value=!1}const X=async()=>{if(R.value==="add"){const s=h.value.addNewPermissions,u=d.value,n={code:"20230116170505",roleName:s,actions:u};t.value.push(n),M.value=!1}else if(R.value==="edit"){const s=t.value[V.value],u=h.value.addNewPermissions,n=d.value.map((y,i)=>y.map((c,F)=>({...s.actions[i][F],selected:c.selected})));s.roleName=u,s.actions=n,M.value=!1}};return(s,u)=>(a(),l("div",Ge,[e("div",He,[w(ve,{breadcrumb:P})]),e("div",Ke,[Xe,e("div",Ye,[Ze,w(E,{onClick:G},{default:k(()=>[et,g(" 新增角色 ")]),_:1})]),e("div",tt,[at,(a(!0),l(m,null,_(t.value,(n,y)=>(a(),l("div",{key:y,class:"table-body"},[e("div",lt,b(n.code),1),e("div",nt,b(n.roleName),1),e("div",st,[e("div",it,[e("div",dt,[ot,(a(!0),l(m,null,_(n.actions[0],(i,c)=>(a(),l("span",{key:c},[i.selected?(a(),l("span",ct,[g(b(i.label),1),S(c,n.actions[0])?f("",!0):(a(),l("span",ut,","))])):f("",!0)]))),128))]),e("div",rt,[bt,(a(!0),l(m,null,_(n.actions[1],(i,c)=>(a(),l("span",{key:c},[i.selected?(a(),l("span",vt,b(i.label),1)):f("",!0)]))),128))]),e("div",mt,[_t,(a(!0),l(m,null,_(n.actions[2],(i,c)=>(a(),l("span",{key:c,class:"table-body-item-text"},[i.selected?(a(),l("span",ht,[g(b(i.label),1),S(c,n.actions[2])?f("",!0):(a(),l("span",ft,","))])):f("",!0)]))),128))]),e("div",gt,[wt,(a(!0),l(m,null,_(n.actions[3],(i,c)=>(a(),l("span",{key:c,class:"table-body-item-text"},[i.selected?(a(),l("span",pt,[g(b(i.label),1),S(c,n.actions[3])?f("",!0):(a(),l("span",Mt,","))])):f("",!0)]))),128))]),e("div",yt,[Wt,(a(!0),l(m,null,_(n.actions[4],(i,c)=>(a(),l("span",{key:c,class:"table-body-item-text"},[i.selected?(a(),l("span",Nt,[g(b(i.label),1),S(c,n.actions[4])?f("",!0):(a(),l("span",kt,","))])):f("",!0)]))),128))])])]),e("div",Ct,[w(E,{class:"edit-button",onClick:i=>H(n,y)},{default:k(()=>[Rt,g(" 編輯 ")]),_:2},1032,["onClick"]),w(E,{class:"delete-button",onClick:i=>z(y)},{default:k(()=>[Vt,g(" 刪除 ")]),_:2},1032,["onClick"])])]))),128)),e("div",$t,[e("button",{disabled:N(v).currentPage===1,onClick:T},[(a(),l("svg",Et,[e("path",{class:U({"disabled-btn":Q("pre-btn")}),d:"M6.16602 1.33301L1.49935 5.99967L6.16602 10.6663",stroke:"black","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"},null,2)]))],8,Dt),(a(!0),l(m,null,_(N(A),n=>(a(),l("button",{key:n,class:U(n===N(v).currentPage?"chosenPageBtn":"unchosenPageBtn"),onClick:y=>q(n)},b(n),11,Pt))),128)),e("button",{disabled:N(v).currentPage===N(A),onClick:B},[(a(),l("svg",xt,[e("path",{class:U({"disabled-btn":Q("next-btn")}),d:"M1.5 1.33301L6.16667 5.99967L1.5 10.6663",stroke:"black","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"},null,2)]))],8,St)])])]),M.value?(a(),ce(ze,{key:0,"init-values":h.value,"nav-button":r.value,"check-boxes":d.value,"current-nav-button":x.value,onClose:K,onOnSubmit:X},null,8,["init-values","nav-button","check-boxes","current-nav-button"])):f("",!0)]))}});const Ot=J(Ft,[["__scopeId","data-v-54130027"]]);export{Ot as default};
