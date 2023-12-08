import{_ as V}from"./icon_note-96b9c260.js";import{_ as k}from"./icon_search_white-67c4c154.js";import{_ as q}from"./icon_outcome-1d2e6907.js";import{a3 as T,r as p,d as Q,J as C,a5 as N,W as B,o as b,c as v,a as s,b as i,w as l,u as o,l as _,L as x,m,i as F,h,a2 as U,F as $,j,t as r,s as O,x as P,_ as D}from"./index-72eb97a3.js";import{N as H}from"./Breadcrumbs-574415ee.js";import{_ as L}from"./InputDate.vue_vue_type_style_index_0_lang-16a23bdb.js";import{N as S}from"./Checkbox-6f1f35a8.js";import{T as z}from"./Table-f729a9ac.js";const G=T("useReportQuery",()=>{const n=p({id:"",policySerno:"",customerName:"",policyNum:"",webStatus:!1,publishStartAt:"",publishEndAt:"",insuranceList:"",unfinishedList:"",policyStatistics:""}),f=p([{id:"",policySerno:"",customerName:"",policyNum:"",webStatus:!1,publishStartAt:"",publishEndAt:"",insuranceList:"",unfinishedList:"",policyStatistics:""}]),y=p([{id:"",policySerno:"20230116170501",customerName:"合作金庫",policyNum:"20230116170505",webStatus:!0,publishStartAt:"2023/08/17",publishEndAt:"2023/08/18",insuranceList:"",unfinishedList:"",policyStatistics:""},{id:"",policySerno:"20230116170502",customerName:"合作金庫",policyNum:"20230116170505",webStatus:!1,publishStartAt:"2023/09/18",publishEndAt:"2023/09/19",insuranceList:"",unfinishedList:"",policyStatistics:""},{id:"",policySerno:"20230116170503",customerName:"合作金庫",policyNum:"20230116170505",webStatus:!1,publishStartAt:"2023/10/19",publishEndAt:"2023/10/20",insuranceList:"",unfinishedList:"",policyStatistics:""},{id:"",policySerno:"20230116170504",customerName:"合作金庫",policyNum:"20230116170505",webStatus:!0,publishStartAt:"2023/11/01",publishEndAt:"2023/11/02",insuranceList:"",unfinishedList:"",policyStatistics:""}]);return{reportInitValues:n,filterReportInfo:f,ReportInfo:y}}),e=n=>(O("data-v-55e1e519"),n=n(),P(),n),J={class:"query-view"},K={class:"query-container"},M={class:"breadcrumb-area"},W={class:"query-area"},Y=e(()=>s("h2",{class:"query-title-text"}," 報表查詢 ",-1)),X=e(()=>s("div",{class:"query-title"},[s("span",{class:"title-img"},[s("img",{src:V,alt:""}),h(" 搜尋報表 ")])],-1)),Z={class:"query-table"},ss=e(()=>s("div",{class:"query-header"}," 請輸入搜尋條件(擇一) ",-1)),es={class:"query-body"},ts={class:"flex justify-between items-end max-[1065px]:flex-col max-[1065px]:items-start"},is={class:"grid grid-cols-2 w-[80%] gap-y-8 gap-x-12 max-[1065px]:grid-cols-1"},os=e(()=>s("label",null,"保戶編號",-1)),as=e(()=>s("label",null,"保單號碼",-1)),ls=e(()=>s("label",null,"客戶名稱",-1)),cs={class:"flex flex-col"},ns=e(()=>s("label",{class:"mb-1 block"},"發佈時間",-1)),rs={class:"flex items-center max-[1065px]:flex-col max-[1065px]:items-start"},ds={class:"mr-[52px] max-[510px]:mr-0"},us=e(()=>s("span",{class:"mx-2"},"-",-1)),_s={class:"mt-8 flex"},ms={class:"flex items-center mr-4"},ps=e(()=>s("label",{for:"insuranceList",class:"cursor-pointer"},"投保清單",-1)),hs={class:"flex items-center mr-4"},fs=e(()=>s("label",{for:"unfinishedList",class:"cursor-pointer"},"未完成清單",-1)),ys={class:"flex items-center"},bs=e(()=>s("label",{for:"policyStatistics",class:"cursor-pointer"},"保單統計",-1)),vs={class:"ml-4 max-[1065px]:self-end max-[1065px]:m-0 max-[1065px]:mt-5"},xs=e(()=>s("img",{src:k,alt:"icon-search",class:"mr-4"},null,-1)),Ss=e(()=>s("div",{class:"query-title"},[s("span",{class:"title-img"},[s("img",{src:q,alt:""}),h(" 結果查詢 ")])],-1)),gs=e(()=>s("caption",null,"Report QueryView Table",-1)),ws=e(()=>s("th",null,"保戶編號",-1)),Ns=e(()=>s("th",{class:"w-[10%]"}," 客戶名稱 ",-1)),Ls=e(()=>s("th",null,"保單號碼",-1)),As=e(()=>s("th",{class:"w-[12%]"}," 網頁狀態 ",-1)),Rs=e(()=>s("th",{class:"w-[10%]"}," 發佈時間 ",-1)),Es=e(()=>s("th",{class:"w-[10%]"}," 下架時間 ",-1)),Is=e(()=>s("th",{class:"w-[8%]"}," 投保清單 ",-1)),Vs=e(()=>s("th",{class:"w-[8%]"}," 未完成清單 ",-1)),ks=e(()=>s("th",{class:"w-[8%]"}," 保單統計 ",-1)),qs={"data-title":"保戶編號："},Ts={class:"w-[10%]","data-title":"客戶名稱："},Qs={"data-title":"保單號碼："},Cs={class:"w-[12%]","data-title":"網頁狀態："},Bs={class:"flex"},Fs={class:"ml-[20px]"},Us=["src"],$s={class:"w-[10%]","data-title":"發佈時間："},js={class:"w-[10%]","data-title":"下架時間："},Os=e(()=>s("td",{class:"w-[8%]","data-title":"投保清單："},[s("span",{class:"text-[#1170C0] underline cursor-pointer"},"下載")],-1)),Ps=e(()=>s("td",{class:"w-[8%]","data-title":"未完成清單："},[s("span",{class:"text-[#1170C0] underline cursor-pointer"},"下載")],-1)),Ds=e(()=>s("td",{class:"w-[8%]","data-title":"保單統計："},[s("span",{class:"text-[#1170C0] underline cursor-pointer"},"下載")],-1)),Hs=Q({__name:"ReportQueryView",setup(n){const f=G(),{ReportInfo:y,reportInitValues:c}=C(f),A=[{title:"首頁",path:N.BACKHOME},{title:"報表查詢",path:N.REPORT_QUERY}],R=p([...y.value]),E=B({});function I(d){console.log(d)}const g=d=>{console.log("從子元件收到的截止日期:",d),c.value.publishEndAt=d};return(d,w)=>(b(),v("div",J,[s("div",K,[s("div",M,[i(H,{breadcrumb:A})]),s("div",W,[Y,X,s("div",Z,[ss,s("div",es,[i(o(U),{"validation-schema":o(E),"initial-values":o(c),onSubmit:w[0]||(w[0]=t=>I(t))},{default:l(()=>[s("div",ts,[s("div",null,[s("div",is,[s("div",null,[os,i(o(_),{name:"policySerno"},{default:l(({field:t,value:a,errorMessage:u})=>[i(x,m(t,{placeholder:"請輸入保戶編號","model-value":o(c).policySerno=a,"error-message":u}),null,16,["model-value","error-message"])]),_:1})]),s("div",null,[as,i(o(_),{name:"policyNum"},{default:l(({field:t,value:a,errorMessage:u})=>[i(x,m(t,{placeholder:"請輸入保單編號","model-value":o(c).policyNum=a,"error-message":u}),null,16,["model-value","error-message"])]),_:1})]),s("div",null,[ls,i(o(_),{name:"customerName"},{default:l(({field:t,value:a,errorMessage:u})=>[i(x,m(t,{placeholder:"請輸入客戶名稱","model-value":o(c).customerName=a,"error-message":u}),null,16,["model-value","error-message"])]),_:1})]),s("div",cs,[ns,s("div",rs,[s("div",ds,[i(o(_),{name:"customerName"},{default:l(({field:t,errorMessage:a})=>[i(L,m(t,{placeholder:"請選擇日期","error-message":a,class:"date-picker-input","onUpdate:modelValue":g}),null,16,["error-message"])]),_:1})]),us,i(o(_),{name:"customerName"},{default:l(({field:t,errorMessage:a})=>[i(L,m(t,{placeholder:"請選擇日期","error-message":a,class:"date-picker-input","onUpdate:modelValue":g}),null,16,["error-message"])]),_:1})])])]),s("div",_s,[s("div",ms,[i(S,{id:"insuranceList",name:"insuranceList","model-value":o(c).insuranceList},null,8,["model-value"]),ps]),s("div",hs,[i(S,{id:"unfinishedList",name:"unfinishedList","model-value":o(c).insuranceList},null,8,["model-value"]),fs]),s("div",ys,[i(S,{id:"policyStatistics",name:"policyStatistics","model-value":o(c).insuranceList},null,8,["model-value"]),bs])])]),s("div",vs,[i(F,{class:"flex items-center justify-center",size:"custom",width:130,height:40,type:"submit"},{default:l(()=>[xs,h(" 搜尋 ")]),_:1})])])]),_:1},8,["validation-schema","initial-values"])])])]),Ss,i(z,null,{th:l(()=>[ws,Ns,Ls,As,Rs,Es,Is,Vs,ks]),tobodyTr:l(()=>[(b(!0),v($,null,j(R.value,(t,a)=>(b(),v("tr",{key:a},[s("td",qs,r(t.policySerno),1),s("td",Ts,r(t.customerName),1),s("td",Qs,r(t.policyNum),1),s("td",Cs,[s("div",Bs,[s("div",Fs,[s("img",{src:t.webStatus?"images/icons/icon_check.png":"images/icons/icon_alert_grey.png",class:"inline-block mr-2",alt:"State Image"},null,8,Us),h(" "+r(t.webStatus?"發佈中":"未發佈"),1)])])]),s("td",$s,r(t.publishStartAt),1),s("td",js,r(t.publishEndAt),1),Os,Ps,Ds]))),128))]),default:l(()=>[gs]),_:1})])]))}});const Zs=D(Hs,[["__scopeId","data-v-55e1e519"]]);export{Zs as default};
