import{d as S,r,z as C,o as n,c as l,a as t,b as c,w as _,h as i,j as m,F as w,k as p,Q as T,u as I,i as V,aj as y,t as d,n as f,l as Q,s as U,x as D,_ as E}from"./index-18f364fe.js";import{N as Y}from"./Checkbox-fbd1f9e6.js";const j="/group-insurance/images/icons/icon_consent.png",G="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFdSURBVHgB7ZTLccIwEIZXAQ6+UQIlUAKpAEqghHSQdEA6iDuADkwHpAPcAWQmE1kvb7TCwsKYwcY+8s/sWJatT/uSAJ66IwYPSgi9sKvnCPiDBjZRNNpCXxLafGXKYGhCmXfoKkQcZypfeyiXJs10vu9lE4ILle9Kr/N13TxXagZtdQ13dviVclpGZg5uXqrPcO1LE7jUmNhiOhhDiO3jaG08ZIOENmGMHYGsrTjiJMwxV+aD5gl69tg9w7rIZSe4V2UTX/S4F7iXVGZVLXojhXBrq7p/qCXL9sx3VKtGcC718la3dIY774XenNrN7MNC+k06wYt+dov/MvlW7RYbXXyOzDrAOZ9AG4Xp8YvruqUN/OKg2UO0KIbfURSlBBmxwZwBS8swIUUjX+k7NNAwfEHGpnR/WyBkSid2NMOC+gj8SraXk+o1XOR+S+lrVdA60QGjQtI13Bv0qXv6B6EKNlwxIhFgAAAAAElFTkSuQmCC",M="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEnSURBVHgBzZTvzQIhDMZ7xu+6gbwbvCM4giM4giO4gSN4TqAbqBu4gXWCOyfAYsDUWg7wT/RJLpBS+nsqCMAvyVq7pm9ZsqcvCgxp+I/kuvjE5+1pwEgeVlWFmjtDX2NfV+ONXtVjjBbep6Ea9V3UzM2YfTMWn4k19PGau49BpqGKiI85WKzdwLJeT2G0vCMoU5sDQDbvbvfRBOYAuAsDaXWaeACIO5zsQORk/UQ80cCHAGdlcxKg/YNjgKMfB9DhTgI09SPxkx//QoDcHejGrFxBmu8UAEIBILgd8SAVniq5Ruy5U+qQc84g6FwCwALASJjKAjzzXDQlAGTzVBfhIpy0xdQhOy3ccwxxDeAZUdGtLZPR6lQdALdhDunnwnVb0xXewDd0AdvZKp8Cb6A5AAAAAElFTkSuQmCC",s=u=>(U("data-v-1d39a98e"),u=u(),D(),u),L={class:"create-view-container flex flex-col"},K=s(()=>t("div",{class:"breadcrumb"},[t("div",null,[i("首頁 "),t("span",{style:{margin:"0 8px"}},">"),i(" 權限管理")])],-1)),R={class:"box mx-auto flex flex-col w-full"},Z=s(()=>t("h2",{class:"title-text"}," 權限管理 ",-1)),q={class:"management-title"},z=s(()=>t("span",{class:"management-title-text"},[t("img",{src:j,alt:""}),i(" 權限列表 ")],-1)),P=s(()=>t("span",null," ＋ ",-1)),W={class:"table-container"},F=y('<div class="table-row table-header" data-v-1d39a98e><div class="table-item1" data-v-1d39a98e> 序號 </div><div class="table-item2" data-v-1d39a98e> 角色名稱 </div><div class="table-item3" data-v-1d39a98e> 角色名稱 </div><div class="table-item4" data-v-1d39a98e> 操作 </div></div>',1),H={class:"table-item1"},J={class:"table-item2"},$={class:"table-col table-item3"},tt={class:"table-col-item"},et={class:"table-col-item1"},st={class:"table-col-item2"},ot={class:"table-item4"},at=s(()=>t("img",{src:G,alt:""},null,-1)),nt=["onClick"],lt=s(()=>t("img",{src:M,alt:""},null,-1)),it={class:"pagination"},ct=s(()=>t("button",null,"<",-1)),dt=["onClick"],At=s(()=>t("button",null,">",-1)),rt={key:0,class:"overlay"},_t={class:"show-modal"},ut={class:"show-modal-header"},vt=s(()=>t("span",null,"新增角色",-1)),mt={class:"show-modal-body"},ht={class:"show-modal-input"},bt=s(()=>t("label",{for:"role-name"},"角色名稱",-1)),xt={class:"show-modal-table"},wt=s(()=>t("label",{class:"show-modal-label"}," 管理權限 ",-1)),pt={class:"show-table-container"},gt={class:"table-container-left"},Nt=["onClick"],Ct={class:"table-container-right"},ft=s(()=>t("div",{class:"container-right-title"}," 功能 ",-1)),Bt={class:"check-container"},kt={class:"check-box"},Xt=s(()=>t("label",{class:"check-label",for:"Preview"}," 預覽 ",-1)),Ot={class:"show-modal-button"},g=8,St=S({__name:"AuthorityManagementView",setup(u){const h=r([{code:"20230116170505",roleName:"合作金庫",actions:[{textOne:"創建網站-操作，新增，審核 | 報價查詢-操作 | 資料維護-新增，審核",textTwo:"權限管理-操作，新增 | 帳號管理-操作，新增"}]},{code:"20230116180606",roleName:"國際兆豐商銀",actions:[{textOne:"資料維護-新增，審核",textTwo:"帳號管理-操作，新增"}]},{code:"20230116190707",roleName:"永豐銀行",actions:[{textOne:"創建網站-操作，新增，審核 | 報價查詢-操作",textTwo:"權限管理-操作，新增 | 帳號管理-操作，新增"}]},{code:"20230116160404",roleName:"台積電半導體",actions:[{textOne:"創建網站-操作，新增，審核 | 報價查詢-操作 | 資料維護-新增，審核",textTwo:"權限管理-操作，新增 | 帳號管理-操作，新增"}]},{code:"20230116170505",roleName:"合作金庫",actions:[{textOne:"創建網站-操作，新增，審核 | 報價查詢-操作 | 資料維護-新增，審核",textTwo:"權限管理-操作，新增 | 帳號管理-操作，新增"}]},{code:"20230116180606",roleName:"國際兆豐商銀",actions:[{textOne:"資料維護-新增，審核",textTwo:"帳號管理-操作，新增"}]},{code:"20230116190707",roleName:"永豐銀行",actions:[{textOne:"創建網站-操作，新增，審核 | 報價查詢-操作",textTwo:"權限管理-操作，新增 | 帳號管理-操作，新增"}]},{code:"20230116160404",roleName:"台積電半導體",actions:[{textOne:"創建網站-操作，新增，審核 | 報價查詢-操作 | 資料維護-新增，審核",textTwo:"權限管理-操作，新增 | 帳號管理-操作，新增"}]},{code:"20230116160404",roleName:"台積電半導體",actions:[{textOne:"創建網站-操作，新增，審核 | 報價查詢-操作 | 資料維護-新增，審核",textTwo:"權限管理-操作，新增 | 帳號管理-操作，新增"}]},{code:"20230116160404",roleName:"台積電半導體",actions:[{textOne:"創建網站-操作，新增，審核 | 報價查詢-操作 | 資料維護-新增，審核",textTwo:"權限管理-操作，新增 | 帳號管理-操作，新增"}]},{code:"20230116160404",roleName:"台積電半導體",actions:[{textOne:"創建網站-操作，新增，審核 | 報價查詢-操作 | 資料維護-新增，審核",textTwo:"權限管理-操作，新增 | 帳號管理-操作，新增"}]}]),b=r(1),v=r(!0),B=r([{buttonName:"創建網站",index:1},{buttonName:"報表查詢",index:2},{buttonName:"資料維護",index:3},{buttonName:"權限管理",index:4},{buttonName:"帳號管理",index:5}]),N=r(0),k=C(()=>Math.ceil(h.value.length/g)),X=C(()=>{const A=(b.value-1)*g,o=A+g;return h.value.slice(A,o)});function O(A){h.value.splice(A,1)}return(A,o)=>(n(),l("div",L,[K,t("div",R,[Z,t("div",q,[z,c(m,{onClick:o[0]||(o[0]=e=>v.value=!0)},{default:_(()=>[P,i(" 新增角色 ")]),_:1})]),t("div",W,[F,(n(!0),l(w,null,p(X.value,(e,a)=>(n(),l("div",{key:a,class:"table-row table-body"},[t("div",H,d(e.code),1),t("div",J,d(e.roleName),1),t("div",$,[t("div",tt,[t("div",et,d(e.actions[0].textOne),1),t("div",st,d(e.actions[0].textTwo),1)])]),t("div",ot,[c(m,{class:"edit-button"},{default:_(()=>[at,i(" 編輯 ")]),_:1}),t("button",{class:"delete-button",onClick:x=>O(a)},[lt,i(" 刪除 ")],8,nt)])]))),128)),t("div",it,[ct,(n(!0),l(w,null,p(k.value,e=>(n(),l("button",{key:e,class:f({"button-active":e===b.value}),onClick:a=>b.value=e},d(e),11,dt))),128)),At])])]),v.value?(n(),l("div",rt,[t("div",_t,[t("form",null,[t("div",ut,[vt,t("button",{class:"close-button",onClick:o[1]||(o[1]=e=>v.value=!1)}," ✕ ")]),t("div",mt,[t("div",ht,[bt,c(I(Q),{id:"phone",name:"phone"},{default:_(({field:e,value:a,errorMessage:x})=>[c(T,{id:"role-name",class:"modal-input",type:"text",placeholder:"輸入角色名稱",value:a,"error-message":x,"v-bind":e},null,8,["value","error-message","v-bind"])]),_:1})]),t("div",xt,[wt,t("div",pt,[t("div",gt,[(n(!0),l(w,null,p(B.value,(e,a)=>(n(),l("button",{key:a,type:"button",class:f({"table-button-active":e.index-1===N.value}),onClick:x=>N.value=a},d(e.buttonName),11,Nt))),128))]),t("div",Ct,[ft,t("div",Bt,[t("div",kt,[c(Y,{id:"Preview"}),Xt])])])])])]),t("div",Ot,[c(m,{outline:!0,onClick:o[2]||(o[2]=e=>v.value=!1)},{default:_(()=>[i(" 取消 ")]),_:1}),c(m,{type:"submit"},{default:_(()=>[i(" 確認 ")]),_:1})])])])])):V("",!0)]))}});const Vt=E(St,[["__scopeId","data-v-1d39a98e"]]);export{Vt as default};
