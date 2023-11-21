import{_ as E}from"./icon_note-96b9c260.js";import{_ as $}from"./icon_search_white-67c4c154.js";import{_ as F}from"./icon_outcome-1d2e6907.js";import{W as j,r as _,d as M,J as S,g as U,o as n,c as u,a as e,b as r,u as a,Q as p,w as z,i as A,F as P,j as x,n as y,aA as T,h,t as b,s as J,x as W,_ as G}from"./index-bb56bd93.js";import{u as H}from"./pagination-ef4283f5.js";import{N as K}from"./Breadcrumbs-7beb235e.js";import{_ as q}from"./InputDate.vue_vue_type_script_setup_true_lang-18f48396.js";import"./InputDate.vue_vue_type_style_index_0_lang-ead59afd.js";import{N as f}from"./Checkbox-cd931c72.js";import"./Checkbox.vue_vue_type_style_index_0_scoped_5953a614_lang-1ab8c476.js";const O=j("useReportQuery",()=>{const m=_({policyholderNumber:"",customerName:"",policyNumber:"",webPageStatus:!1,releaseTime:"",removalTime:"",insuranceList:"",unfinishedList:"",policyStatistics:""}),v=_([{policyholderNumber:"",customerName:"",policyNumber:"",webPageStatus:!1,releaseTime:"",removalTime:"",insuranceList:"",unfinishedList:"",policyStatistics:""}]),c=_([{policyholderNumber:"20230116170501",customerName:"合作金庫",policyNumber:"20230116170505",webPageStatus:!0,releaseTime:"2023/08/17",removalTime:"2023/08/18",insuranceList:"",unfinishedList:"",policyStatistics:""},{policyholderNumber:"20230116170502",customerName:"合作金庫",policyNumber:"20230116170505",webPageStatus:!1,releaseTime:"2023/09/18",removalTime:"2023/09/19",insuranceList:"",unfinishedList:"",policyStatistics:""},{policyholderNumber:"20230116170503",customerName:"合作金庫",policyNumber:"20230116170505",webPageStatus:!1,releaseTime:"2023/10/19",removalTime:"2023/10/20",insuranceList:"",unfinishedList:"",policyStatistics:""},{policyholderNumber:"20230116170504",customerName:"合作金庫",policyNumber:"20230116170505",webPageStatus:!0,releaseTime:"2023/11/01",removalTime:"2023/11/02",insuranceList:"",unfinishedList:"",policyStatistics:""}]);return{reportQueryInitValues:m,filterReportQueryDataList:v,reportQueryDataList:c}}),i=m=>(J("data-v-c1fb76d3"),m=m(),W(),m),X={class:"report-queryView-container"},Y={class:"breadcrumb"},Z={class:"report-query-box mx-auto w-full"},ee=i(()=>e("h2",{class:"title-text"}," 報表查詢 ",-1)),te=i(()=>e("div",{class:"report-query-title"},[e("span",{class:"report-query-title-text"},[e("img",{src:E,alt:""}),h(" 搜尋報表 ")])],-1)),se={class:"report-query-table-container"},ae=i(()=>e("div",{class:"report-query-table-header"},[e("div",{class:"table-header-title"}," 案請輸入搜尋條件(擇一) ")],-1)),ie={class:"report-query-table-body"},le={class:"table-body-row"},oe={class:"table-body-item","data-title":"保戶編號："},re=i(()=>e("label",{class:"table-body-item-title"}," 保戶編號 ",-1)),de={class:"table-body-item","data-title":"保單號碼："},ce=i(()=>e("label",{class:"table-body-item-title"}," 保單號碼 ",-1)),ne={class:"table-body-row pb-[24px]"},ue={class:"table-body-item","data-title":"保戶編號："},be=i(()=>e("label",{class:"table-body-item-title"}," 客戶名稱 ",-1)),me={class:"table-body-item","data-title":"保單號碼："},_e=i(()=>e("label",{class:"table-body-item-title"}," 發布時間 ",-1)),he={class:"input-date flex row align-middle"},ve=i(()=>e("div",{class:"date-input-delimiter"}," - ",-1)),pe={class:"table-body-row"},ye={class:"table-body-item w-full"},fe={class:"table-body-check-box"},ge={class:"check-box-container"},we={class:"check-box"},Ne=i(()=>e("label",{for:"insuranceList"},"投保清單",-1)),Le={class:"check-box"},ke=i(()=>e("label",{for:"unfinishedList"},"未完成清單",-1)),Se={class:"check-box"},Pe=i(()=>e("label",{for:"policyStatistics"},"保單統計",-1)),xe={class:"search-button"},qe=i(()=>e("img",{src:$,alt:""},null,-1)),Te={class:"report-query-box mx-auto w-full"},Ve=i(()=>e("div",{class:"report-query-title"},[e("span",{class:"report-query-title-text"},[e("img",{src:F,alt:""}),h(" 結果查詢 ")])],-1)),Ce={class:"query-result-table-container"},Qe=T('<div class="query-result-table-table-header" data-v-c1fb76d3><div class="table-header-title1" data-v-c1fb76d3> 保戶編號 </div><div class="table-header-title2" data-v-c1fb76d3> 客戶名稱 </div><div class="table-header-title3" data-v-c1fb76d3> 保單號碼 </div><div class="table-header-title4" data-v-c1fb76d3> 網頁狀態 </div><div class="table-header-title5" data-v-c1fb76d3> 發布時間 </div><div class="table-header-title6" data-v-c1fb76d3> 下架時間 </div><div class="table-header-title7" data-v-c1fb76d3> 投保清單 </div><div class="table-header-title8" data-v-c1fb76d3> 未完成清單 </div><div class="table-header-title9" data-v-c1fb76d3> 保單統計 </div></div>',1),Be={class:"query-result-body-item1","data-title":"保戶編號："},Re={class:"query-result-body-item2","data-title":"客戶名稱："},Ie={class:"query-result-body-item3","data-title":"保單號碼："},De={class:"query-result-body-item4","data-title":"網頁狀態："},Ee={class:"table-body-direction"},$e=["src"],Fe={class:"query-result-body-item5","data-title":"發布時間："},je={class:"query-result-body-item6","data-title":"下架時間："},Me=T('<div class="query-result-body-item7" data-title="投保清單：" data-v-c1fb76d3><a href="" data-v-c1fb76d3> 下載 </a></div><div class="query-result-body-item8" data-title="未完成清單：" data-v-c1fb76d3><a href="" data-v-c1fb76d3> 下載 </a></div><div class="query-result-body-item9" data-title="保單統計：" data-v-c1fb76d3><a href="" data-v-c1fb76d3> 下載 </a></div>',3),Ue={class:"query-result-pagination"},ze=["disabled"],Ae={width:"7",height:"12",viewBox:"0 0 7 12",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Je=["onClick"],We=["disabled"],Ge={width:"7",height:"12",viewBox:"0 0 7 12",fill:"none",xmlns:"http://www.w3.org/2000/svg"},He=M({__name:"ReportQueryView",setup(m){const v=O(),{reportQueryDataList:c,reportQueryInitValues:l}=S(v),V=[{title:"首頁",path:"/back-home"},{title:"報表查詢",path:"/back-report-query"}],g=H(),{pageSet:o,totalPages:w}=S(g),C=()=>{const s=o.value.currentPage-1;o.value.currentPage=s,o.value.totalElements=c.value.length},Q=()=>{const s=o.value.currentPage+1;o.value.currentPage=s,o.value.totalElements=c.value.length},B=s=>{s!==o.value.currentPage&&(o.value.currentPage=s,o.value.totalElements=c.value.length)},N=s=>{const d=document.getElementById(s);if(d)return!!d.disabled};U(()=>{g.$reset()});const R=s=>{console.log("從子元件收到的起始日期:",s),l.value.releaseTime=s},I=s=>{console.log("從子元件收到的截止日期:",s),l.value.removalTime=s},L=_([...c.value]),D=()=>{L.value=c.value.filter(s=>s.policyholderNumber.includes(l.value.policyholderNumber))};return(s,d)=>(n(),u("div",X,[e("div",Y,[r(K,{breadcrumb:V})]),e("div",Z,[ee,te,e("div",se,[ae,e("div",ie,[e("div",le,[e("div",oe,[re,r(p,{modelValue:a(l).policyholderNumber,"onUpdate:modelValue":d[0]||(d[0]=t=>a(l).policyholderNumber=t),placeholder:"請輸入保戶編號",class:"table-body-item-input"},null,8,["modelValue"])]),e("div",de,[ce,r(p,{modelValue:a(l).policyNumber,"onUpdate:modelValue":d[1]||(d[1]=t=>a(l).policyNumber=t),placeholder:"請輸入保單號碼",class:"table-body-item-input"},null,8,["modelValue"])])]),e("div",ne,[e("div",ue,[be,r(p,{modelValue:a(l).customerName,"onUpdate:modelValue":d[2]||(d[2]=t=>a(l).customerName=t),placeholder:"請輸入保戶編號",class:"table-body-item-input"},null,8,["modelValue"])]),e("div",me,[_e,e("div",he,[r(q,{placeholder:"請選擇日期",class:"date-picker-input",onSelectedDate:R}),ve,r(q,{placeholder:"請選擇日期",class:"date-picker-input",onSelectedDate:I})])])]),e("div",pe,[e("div",ye,[e("div",fe,[e("div",ge,[e("div",we,[r(f,{id:"insuranceList",name:"insuranceList","model-value":a(l).insuranceList},null,8,["model-value"]),Ne]),e("div",Le,[r(f,{id:"unfinishedList",name:"unfinishedList","model-value":a(l).insuranceList},null,8,["model-value"]),ke]),e("div",Se,[r(f,{id:"policyStatistics",name:"policyStatistics","model-value":a(l).insuranceList},null,8,["model-value"]),Pe])]),e("div",xe,[r(A,{class:"bg-[#006FBC]",size:"custom",width:130,height:40,onClick:D},{default:z(()=>[qe,h(" 搜尋 ")]),_:1})])])])])])])]),e("div",Te,[Ve,e("div",Ce,[Qe,(n(!0),u(P,null,x(L.value,(t,k)=>(n(),u("div",{key:k,class:"query-result-table-body"},[e("div",Be,b(t.policyholderNumber),1),e("div",Re,b(t.customerName),1),e("div",Ie,b(t.policyNumber),1),e("div",De,[e("div",Ee,[e("img",{src:t.webPageStatus?"images/icons/icon_check.png":"images/icons/icon_alert_grey.png",class:"inline-block",alt:"State Image"},null,8,$e),h(" "+b(t.webPageStatus?"發布中":"未發布"),1)])]),e("div",Fe,b(t.releaseTime),1),e("div",je,b(t.removalTime),1),Me]))),128)),e("div",Ue,[e("button",{disabled:a(o).currentPage===1,onClick:C},[(n(),u("svg",Ae,[e("path",{class:y({"disabled-btn":N("pre-btn")}),d:"M6.16602 1.33301L1.49935 5.99967L6.16602 10.6663",stroke:"black","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"},null,2)]))],8,ze),(n(!0),u(P,null,x(a(w),t=>(n(),u("button",{key:t,class:y(t===a(o).currentPage?"chosenPageBtn":"unchosenPageBtn"),onClick:k=>B(t)},b(t),11,Je))),128)),e("button",{disabled:a(o).currentPage===a(w),onClick:Q},[(n(),u("svg",Ge,[e("path",{class:y({"disabled-btn":N("next-btn")}),d:"M1.5 1.33301L6.16667 5.99967L1.5 10.6663",stroke:"black","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"},null,2)]))],8,We)])])])]))}});const lt=G(He,[["__scopeId","data-v-c1fb76d3"]]);export{lt as default};
