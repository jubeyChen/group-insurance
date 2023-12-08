import{_ as oe}from"./icon_note-96b9c260.js";import{_ as ne}from"./icon_search_white-67c4c154.js";import{_ as ie}from"./icon_outcome-1d2e6907.js";import{a3 as re,r as k,d as Z,J as Y,W as ee,C as ue,o as m,c as v,b as o,w as c,a as e,u as r,a2 as te,F as W,j as se,t as S,i as P,a4 as J,h as b,k as y,n as O,a6 as de,a7 as ce,a8 as K,a5 as A,l as j,L as F,m as q,s as pe,x as me,_ as ve}from"./index-72eb97a3.js";import{N as I}from"./Checkbox-6f1f35a8.js";import{_ as Q}from"./InputDate.vue_vue_type_style_index_0_lang-16a23bdb.js";import{P as p,u as _e}from"./createPageStore-5e2e62fe.js";import{N as he}from"./Breadcrumbs-574415ee.js";import{_ as fe}from"./icon_upload-consent-letter-8322da82.js";import{P as ye}from"./Panel-5ec0232a.js";import{h as X}from"./moment-fbc5633a.js";import{T as be}from"./Table-f729a9ac.js";const ae=re("searchPage",()=>{const E=k({policySerno:"",policyNum:"",customerName:"",publishStartAt:"",publishEndAt:"",status:[]}),B=k([{id:"1",policySerno:"20230116",policyNum:"20230116170505",customerName:"台積電",publishStartAt:"2023/11/11",publishEndAt:"2025/11/11",status:p.Published},{id:"2",policySerno:"20230120",policyNum:"20230116170505",customerName:"宏達電",publishStartAt:"2023/10/11",publishEndAt:"2025/12/11",status:p.Awaiting},{id:"3",policySerno:"20230120",policyNum:"20230116170505",customerName:"合作金庫",publishStartAt:"2023/10/11",publishEndAt:"2025/12/11",status:p.InReview2},{id:"4",policySerno:"20230120",policyNum:"20230116170505",customerName:"第一銀行",publishStartAt:"2023/10/11",publishEndAt:"2025/12/11",status:p.InReview1},{id:"5",policySerno:"20230120",policyNum:"20230116170505",customerName:"台新銀行",publishStartAt:"2023/10/11",publishEndAt:"2025/12/11",status:p.InApproval},{id:"6",policySerno:"20230120",policyNum:"20230116170505",customerName:"鴻海",publishStartAt:"2023/10/11",publishEndAt:"2025/12/11",status:p.Editing},{id:"7",policySerno:"20230120",policyNum:"20230116170505",customerName:"永豐",publishStartAt:"2023/10/11",publishEndAt:"2025/12/11",status:p.Suspended}]),f=k({districtAdminApprovalLetter:"",managerApprovalLetter:"",departmentApprovalLetter:""});return{pageInfo:E,searchOutcome:B,uploadApprovalValue:f}}),xe={class:"min-h-[75vh] upload-approval"},ge=e("div",{class:"query-area"},[e("h2",{class:"query-title-text"}," 上傳文件 ")],-1),Ae={class:"mb-4 text-primary-600 text-[22px]"},we=["onClick"],Se=e("img",{src:fe,alt:"icon",class:"mb-2"},null,-1),ke=e("p",{class:"text-sm text-black/50 mb-4"}," 限上傳PNG檔或JPG檔 ",-1),Ee=["id"],Ne={key:0,class:"flex items-center"},Ce={class:"inline-block w-[110px] truncate"},De=["onClick"],Ie={class:"flex justify-center"},Pe=Z({__name:"UploadApproval",emits:["back"],setup(E,{emit:B}){const f=ae(),{uploadApprovalValue:N}=Y(f),C=k(!0),s=k([{id:"admin",name:"地區行政覆核同意信函",uploadData:void 0,uploadDataName:""},{id:"manager",name:"業務管理處主管同意信函",uploadData:void 0,uploadDataName:""},{id:"department",name:"報價處主管同意信函",uploadData:void 0,uploadDataName:""}]),l=ee({});ue(s.value,()=>{console.log(s.value);const d=s.value.filter(i=>i.uploadData!==void 0).length;console.log(d),d>=3?C.value=!1:C.value=!0});function $(d){return s.value.findIndex(i=>i.id===d)}function L(d){const i=document.getElementById(`upload-area-${d}`),n=document.getElementById(`upload-input-${d}`);n==null||n.remove();const h=document.createElement("input");i==null||i.appendChild(h),h.id=`upload-input-${d}`,h.style.display="none",h.type="file",h.accept="image/png,image/jpeg",h.addEventListener("change",g=>{V(g,d)}),h.addEventListener("click",g=>{g.stopPropagation()}),h.click()}function V(d,i){const n=d.target.files[0],h=s.value[$(i)],g=document.getElementById(`upload-input-${i}`);switch(h.uploadData=n,h.uploadDataName=n.name,i){case"admin":N.value.districtAdminApprovalLetter=n;break;case"manager":N.value.managerApprovalLetter=n;break;case"department":N.value.departmentApprovalLetter=n;break}g==null||g.remove()}function R(d){const i=document.getElementById(`upload-input-${d}`);i==null||i.remove();const n=s.value[$(d)];n.uploadData=void 0,n.uploadDataName=""}function U(d){const i=document.getElementById(`btn${d}`);i&&i.disabled||(i.click(),i.disabled=!0)}function T(d){console.log(d)}return(d,i)=>(m(),v("div",xe,[ge,o(ye,{title:"需繳交同意信函","img-src":"/images/icons/icon_consent.png",style:{margin:0,"max-width":"100%"}},{default:c(()=>[o(r(te),{"validation-schema":r(l),"initial-values":r(N),onSubmit:i[1]||(i[1]=n=>T(r(N)))},{default:c(()=>[(m(!0),v(W,null,se(s.value,(n,h)=>(m(),v("div",{key:h,class:"mb-6 w-full"},[e("h2",Ae,S(n.name),1),e("div",{class:O(["border border-dashed border-black/30 rounded-md p-10 flex flex-col items-center justify-center",{"cursor-pointer":n.uploadDataName===""}]),onClick:g=>U(n.id)},[Se,ke,o(P,{id:`btn${n.id}`,size:"m",class:"mb-4",disabled:n.uploadDataName!=="",onClick:J(g=>L(n.id),["stop"])},{default:c(()=>[b(S(n.uploadDataName!==""?"已上傳":"上傳檔案"),1)]),_:2},1032,["id","disabled","onClick"]),e("div",{id:"upload-area-"+n.id,class:"min-h-[24px]"},[n.uploadDataName!==""?(m(),v("div",Ne,[e("span",Ce,S(n.uploadDataName),1),e("span",{class:"cursor-pointer flex items-center justify-center rounded-full bg-primary-400 text-xs text-white hover:bg-primary-600 min-h-[18px] min-w-[18px]",onClick:J(g=>R(n.id),["stop"])},"✕",8,De)])):y("",!0)],8,Ee)],10,we)]))),128)),e("div",Ie,[o(P,{size:"l",outline:!0,class:"mr-4",onClick:i[0]||(i[0]=n=>B("back",!1))},{default:c(()=>[b(" 返回 ")]),_:1}),o(P,{size:"l",type:"submit",disabled:C.value,class:O({"cursor-not-allowed":C.value})},{default:c(()=>[b(" 送審 ")]),_:1},8,["disabled","class"])])]),_:1},8,["validation-schema","initial-values"])]),_:1},8,["img-src"])]))}}),u=E=>(pe("data-v-101f5fa6"),E=E(),me(),E),$e={key:0,class:"query-view"},Re={class:"query-container"},Te={class:"breadcrumb-area"},Be={key:0},Le={class:"query-area"},Ve=u(()=>e("h2",{class:"query-title-text"}," 創建網頁 ",-1)),je={class:"query-title"},qe=u(()=>e("span",{class:"title-img"},[e("img",{src:oe,alt:""}),b(" 搜尋網頁 ")],-1)),Ue=u(()=>e("span",{class:"text-xl mr-2 mb-[2px]"},"+",-1)),Me={class:"query-table"},Ge=u(()=>e("div",{class:"query-header"}," 請輸入搜尋條件(擇一) ",-1)),ze={class:"query-body"},Fe={class:"flex justify-between items-end max-[1010px]:flex-col max-[1010px]:items-start"},Ye={class:"grid grid-cols-2 w-[80%] gap-y-8 gap-x-12 max-[1010px]:grid-cols-1"},We=u(()=>e("label",null,"保戶編號",-1)),Oe=u(()=>e("label",null,"保單號碼",-1)),He=u(()=>e("label",null,"客戶名稱",-1)),Je=u(()=>e("label",{class:"mb-1 block"},"發佈時間",-1)),Ke={class:"date-containter"},Qe={class:"mr-[52px] max-[510px]:mr-0"},Xe=u(()=>e("span",{class:"mx-2"},"-",-1)),Ze={class:"mt-8 flex max-[875px]:grid max-[875px]:grid-cols-4 gap-y-4 max-[510px]:grid-cols-3"},et={class:"flex items-center mr-4"},tt=u(()=>e("label",{for:"Published",class:"cursor-pointer"},"發佈中",-1)),st={class:"flex items-center mr-4"},at=u(()=>e("label",{for:"Awaiting",class:"cursor-pointer"},"等待發佈",-1)),lt={class:"flex items-center mr-4"},ot=u(()=>e("label",{for:"InReview2",class:"cursor-pointer"},"科主管審核完成",-1)),nt={class:"flex items-center mr-4"},it=u(()=>e("label",{for:"InReview1",class:"cursor-pointer"},"審核中",-1)),rt={class:"flex items-center mr-4"},ut=u(()=>e("label",{for:"InApproval",class:"cursor-pointer"},"尚未上傳同意信函",-1)),dt={class:"flex items-center mr-4"},ct=u(()=>e("label",{for:"Editing",class:"cursor-pointer"},"編輯中",-1)),pt={class:"flex items-center mr-4"},mt=u(()=>e("label",{for:"Suspended",class:"cursor-pointer"},"下架",-1)),vt={class:"ml-4 max-[1010px]:self-end max-[1010px]:m-0 max-[1010px]:mt-6"},_t=u(()=>e("img",{src:ne,alt:"icon-search",class:"mr-4"},null,-1)),ht=u(()=>e("div",{class:"query-title"},[e("span",{class:"title-img"},[e("img",{src:ie,alt:""}),b(" 搜尋結果 ")])],-1)),ft=u(()=>e("th",{class:"w-[10%]"}," 保戶編號 ",-1)),yt=u(()=>e("th",{class:"w-[13%]"}," 保單號碼 ",-1)),bt=u(()=>e("th",{class:"w-[10%]"}," 客戶名稱 ",-1)),xt=u(()=>e("th",{class:"w-[13%]"}," 網頁狀態 ",-1)),gt=u(()=>e("th",{class:"w-[10%]"}," 上架時間 ",-1)),At=u(()=>e("th",{class:"w-[10%]"}," 下架時間 ",-1)),wt=u(()=>e("th",{class:""}," 操作 ",-1)),St={key:0,class:"w-[14%]"},kt={class:"w-[10%]","data-title":"保戶編號："},Et={class:"w-[13%]","data-title":"保單編號："},Nt={class:"w-[10%]","data-title":"客戶名稱："},Ct={class:"w-[13%]","data-title":"網頁狀態："},Dt={class:"flex items-center text-left"},It=["src"],Pt={class:"w-[10%]","data-title":"上架時間："},$t={class:"w-[10%]","data-title":"下架時間："},Rt={class:"max-[1065px]:flex","data-title":"操作："},Tt={key:0,class:"underline cursor-pointer text-[#1170C0]"},Bt={key:1,class:"underline cursor-pointer text-[#1170C0]"},Lt={class:"underline cursor-pointer text-[#1170C0]"},Vt={key:2,class:"underline cursor-pointer text-[#1170C0]"},jt={key:4,class:"underline cursor-pointer text-[#1170C0]"},qt={key:5,class:"underline cursor-pointer text-[#1170C0]"},Ut={key:6,class:"underline cursor-pointer text-[#1170C0]"},Mt={key:0,class:"w-[14%]","data-title":"審核："},Gt={key:0,class:"flex items-center"},zt={key:1},Ft=Z({__name:"CreateView",setup(E){const B=ae(),{pageInfo:f,searchOutcome:N}=Y(B),C=_e(),{createInfo:s,fakeData:l,clickType:$}=Y(C),L=de(),V=k(),R=k(!1),U=ee({}),T=k("區主管");function d(_,a){switch(a){case"publishStartAt":f.value.publishStartAt=X(_).format("YYYY/MM/DD");break;case"publishEndAt":f.value.publishEndAt=X(_).format("YYYY/MM/DD");break}}function i(_){return f.value.status.some(a=>a===_)}function n(_,a){if(_)f.value.status.push(a);else{const D=f.value.status.findIndex(z=>z===a);f.value.status.splice(D,1)}}function h(_){return _===p.Published||_===p.Awaiting}function g(_){switch(T.value){case"科主管":return _===p.InReview1;case"區主管":return _===p.InReview1||_===p.InReview2;default:return!1}}function H(){L.currentRoute.value.path===A.NEW_PAGE?V.value=[{title:"首頁",path:A.BACKHOME},{title:"創建網頁",path:A.CREATE},{title:"新增網頁",path:A.NEW_PAGE}]:V.value=[{title:"首頁",path:A.BACKHOME},{title:"創建網頁",path:A.CREATE}]}function M(){window.scrollTo({top:0,behavior:"smooth"})}function G(_){switch(_){case"query":$.value="query",s.value.insuredSecret=l.value.insuredSecret;break;case"edit":$.value="edit",s.value.insuredSecret=l.value.insuredSecret;break;case"copy":$.value="copy",s.value.insuredSecret="";break}M(),s.value.insuredCodeType=l.value.insuredCodeType,s.value.isPolicyNumByPlan=l.value.isPolicyNumByPlan,s.value.policySerno=l.value.policySerno,s.value.policyNum=l.value.policyNum,s.value.customerName=l.value.customerName,s.value.anniversary=l.value.anniversary,s.value.nsBranchCode=l.value.nsBranchCode,s.value.noChangeFillIn=l.value.noChangeFillIn,s.value.applicationSendType=l.value.applicationSendType,s.value.effectDaysNew=l.value.effectDaysNew,s.value.effectDaysSpouse=l.value.effectDaysSpouse,s.value.effectDaysChild=l.value.effectDaysChild,s.value.effectDayType=l.value.effectDayType,s.value.effectDayTypeDays=l.value.effectDayTypeDays,s.value.coverageDayType=l.value.coverageDayType,s.value.onlyCoverageSpecifiedDate=l.value.onlyCoverageSpecifiedDate,s.value.coverageEffDayType=l.value.coverageEffDayType,s.value.surrenderEffDayType=l.value.surrenderEffDayType,s.value.roleList=l.value.roleList,s.value.dataBasicList=l.value.dataBasicList,s.value.dataRoleList=l.value.dataRoleList,s.value.paymentMethod=l.value.paymentMethod,s.value.isAllowPaymentCredit=l.value.isAllowPaymentCredit,s.value.isAllowPaymentAccount=l.value.isAllowPaymentAccount,s.value.publishStartAt=l.value.publishStartAt,s.value.publishEndAt=l.value.publishEndAt,s.value.remark=l.value.remark,s.value.planList=l.value.planList,s.value.selectedQA=l.value.selectedQA,s.value.selectedAd=l.value.selectedAd,s.value.selectedBanner=l.value.selectedBanner,s.value.selectedRules=l.value.selectedRules}function le(_){console.log(_)}return ce(()=>{H()}),L.afterEach(H),(_,a)=>{const D=K("router-link"),z=K("router-view");return m(),v(W,null,[r(L).currentRoute.value.path===r(A).CREATE?(m(),v("div",$e,[e("div",Re,[e("div",Te,[o(he,{breadcrumb:V.value},null,8,["breadcrumb"])]),R.value?y("",!0):(m(),v("div",Be,[e("div",Le,[Ve,e("div",je,[qe,o(P,{size:"custom",width:130,height:40},{default:c(()=>[o(D,{to:r(A).NEW_PAGE,class:"flex items-center justify-center text-white",onClick:r(C).resetCreateInfo},{default:c(()=>[Ue,b(" 新增網頁 ")]),_:1},8,["to","onClick"])]),_:1})]),e("div",Me,[Ge,e("div",ze,[o(r(te),{"validation-schema":r(U),"initial-values":r(f),onSubmit:a[9]||(a[9]=t=>le(t))},{default:c(()=>[e("div",Fe,[e("div",null,[e("div",Ye,[e("div",null,[We,o(r(j),{name:"policySerno"},{default:c(({field:t,value:x,errorMessage:w})=>[o(F,q(t,{placeholder:"請輸入保戶編號","model-value":r(f).policySerno=x,"error-message":w}),null,16,["model-value","error-message"])]),_:1})]),e("div",null,[Oe,o(r(j),{name:"policyNum"},{default:c(({field:t,value:x,errorMessage:w})=>[o(F,q(t,{placeholder:"請輸入保單編號","model-value":r(f).policyNum=x,"error-message":w}),null,16,["model-value","error-message"])]),_:1})]),e("div",null,[He,o(r(j),{name:"customerName"},{default:c(({field:t,value:x,errorMessage:w})=>[o(F,q(t,{placeholder:"請輸入客戶名稱","model-value":r(f).customerName=x,"error-message":w}),null,16,["model-value","error-message"])]),_:1})]),e("div",null,[Je,e("div",Ke,[e("div",Qe,[o(r(j),{name:"publishStartAt"},{default:c(({field:t,errorMessage:x})=>[o(Q,q(t,{placeholder:"請選擇日期","error-message":x,class:"date-picker-input","onUpdate:modelValue":a[0]||(a[0]=w=>d(w,"publishStartAt"))}),null,16,["error-message"])]),_:1})]),Xe,o(r(j),{name:"publishEndAt"},{default:c(({field:t,errorMessage:x})=>[o(Q,q(t,{placeholder:"請選擇日期","error-message":x,class:"date-picker-input","onUpdate:modelValue":a[1]||(a[1]=w=>d(w,"publishEndAt"))}),null,16,["error-message"])]),_:1})])])]),e("div",Ze,[e("div",et,[o(I,{id:"Published",name:"Published","model-value":i("Published"),"onUpdate:modelValue":a[2]||(a[2]=t=>n(t,"Published"))},null,8,["model-value"]),tt]),e("div",st,[o(I,{id:"Awaiting",name:"Awaiting","model-value":i("Awaiting"),"onUpdate:modelValue":a[3]||(a[3]=t=>n(t,"Awaiting"))},null,8,["model-value"]),at]),e("div",lt,[o(I,{id:"InReview2",name:"InReview2","model-value":i("InReview2"),"onUpdate:modelValue":a[4]||(a[4]=t=>n(t,"InReview2"))},null,8,["model-value"]),ot]),e("div",nt,[o(I,{id:"InReview1",name:"InReview1","model-value":i("InReview1"),"onUpdate:modelValue":a[5]||(a[5]=t=>n(t,"InReview1"))},null,8,["model-value"]),it]),e("div",rt,[o(I,{id:"InApproval",name:"InApproval","model-value":i("InApproval"),"onUpdate:modelValue":a[6]||(a[6]=t=>n(t,"InApproval"))},null,8,["model-value"]),ut]),e("div",dt,[o(I,{id:"Editing",name:"Editing","model-value":i("Editing"),"onUpdate:modelValue":a[7]||(a[7]=t=>n(t,"Editing"))},null,8,["model-value"]),ct]),e("div",pt,[o(I,{id:"Suspended",name:"Suspended","model-value":i("Suspended"),"onUpdate:modelValue":a[8]||(a[8]=t=>n(t,"Suspended"))},null,8,["model-value"]),mt])])]),e("div",vt,[o(P,{class:"flex items-center justify-center",size:"custom",width:130,height:40,type:"submit"},{default:c(()=>[_t,b(" 搜尋 ")]),_:1})])])]),_:1},8,["validation-schema","initial-values"])])])]),ht,o(be,null,{th:c(()=>[ft,yt,bt,xt,gt,At,wt,T.value!==""?(m(),v("th",St," 審核 ")):y("",!0)]),tobodyTr:c(()=>[(m(!0),v(W,null,se(r(N),t=>(m(),v("tr",{key:t.id},[e("td",kt,S(t.policySerno),1),e("td",Et,S(t.policyNum),1),e("td",Nt,S(t.customerName),1),e("td",Ct,[e("div",Dt,[e("img",{src:h(t.status)?"images/icons/icon_check.png":"images/icons/icon_alert_grey.png",alt:"icon",class:"mr-1"},null,8,It),b(" "+S(t.status),1)])]),e("td",Pt,S(t.publishStartAt),1),e("td",$t,S(t.publishEndAt),1),e("td",Rt,[e("div",{class:O(["grid max-[1065px]:w-[180px] max-[420px]:w-[150px]",T.value===""?"grid-cols-5 max-[420px]:grid-cols-2 max-[420px]:gap-y-2":"grid-cols-3 gap-y-2"])},[t.status!==r(p).Editing?(m(),v("span",Tt,[o(D,{to:r(A).HOME,class:"flex items-center justify-center max-[1065px]:justify-start",onClick:M},{default:c(()=>[b("前台 ")]),_:1},8,["to"])])):y("",!0),t.status!==r(p).Editing?(m(),v("span",Bt,[o(D,{to:r(A).NEW_PAGE,class:"flex items-center justify-center max-[1065px]:justify-start",onClick:a[10]||(a[10]=x=>G("query"))},{default:c(()=>[b("後台 ")]),_:1},8,["to"])])):y("",!0),e("span",Lt,[o(D,{to:r(A).NEW_PAGE,class:"flex items-center justify-center max-[1065px]:justify-start",onClick:a[11]||(a[11]=x=>G("copy"))},{default:c(()=>[b("複製 ")]),_:1},8,["to"])]),t.status===r(p).Published||t.status===r(p).Awaiting?(m(),v("span",Vt,"套印")):y("",!0),t.status===r(p).InApproval?(m(),v("span",{key:3,class:"underline cursor-pointer text-[#1170C0]",onClick:a[12]||(a[12]=x=>{R.value=!0,M()})},"上傳 ")):y("",!0),t.status===r(p).Editing||t.status===r(p).Suspended?(m(),v("span",jt,"刪除")):y("",!0),t.status!==r(p).Published?(m(),v("span",qt,[o(D,{to:r(A).NEW_PAGE,class:"flex items-center justify-center max-[1065px]:justify-start",onClick:a[13]||(a[13]=x=>G("edit"))},{default:c(()=>[b("編輯 ")]),_:1},8,["to"])])):y("",!0),t.status===r(p).Published?(m(),v("span",Ut,"下架")):y("",!0)],2)]),T.value!==""?(m(),v("td",Mt,[g(t.status)?(m(),v("div",Gt,[o(P,{size:"s",class:"mr-2"},{default:c(()=>[b(" 通過 ")]),_:1}),o(P,{size:"s",class:"denyBtn"},{default:c(()=>[b(" 駁回 ")]),_:1})])):y("",!0)])):y("",!0)]))),128))]),_:1})])),R.value?(m(),v("div",zt,[o(Pe,{onBack:a[14]||(a[14]=t=>R.value=t)})])):y("",!0)])])):y("",!0),o(z)],64)}}});const as=ve(Ft,[["__scopeId","data-v-101f5fa6"]]);export{as as default};
