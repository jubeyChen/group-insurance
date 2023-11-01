import{d as u,r as l,o as s,c as o,t as p,i as b,a as t,n as c,b as n,w as g,j as h,h as r,s as x,x as C,_ as f,b7 as w,F as _}from"./index-f36eac26.js";const V="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAZCAYAAAArK+5dAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAE4SURBVHgB7ZTLccIwEIb/tSGnZMYlUILTgX3IITdSQjpwKe6AEuCWQw52CZTgEjjkFDBCawnGwg8tcIADO2ONtNr9P+uxAp52byNnlP3MoKYL3duAwm/k6UYigmwZQb0tdS/SeWk7L3AjXxLd8DeHqgtkReTTNuKvhc2LsftP2tNngGClm8oOYi/kJE6x9VSY7NfDAF4abVMRpE+cc/PPqh1G6P2z5ix42TPrWTt7KxQfBoxB9PlLxccBQxAoSMX9gH4IpOIyQAP5TaCocDOVFv8ofamBL8CsgBYdP/t47iZAZ3sU3/HjPTdzHkhwkTj9peYmySHCOrDi+ZetA114XIBciMYuqAOf+ClOBqGrxEch4fvwa7qbxmJxtubtOjuTejtvh7iASVja4NIr3oWsmrywLvG0h7IDcXe8T6YcdEkAAAAASUVORK5CYII=",i=e=>(x("data-v-bb4c65b7"),e=e(),C(),e),v={class:"inline-block relative w-[147px]"},y={key:0,class:"block text-danger text-xs absolute mt-[52px] err-msg"},I=i(()=>t("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M5.92364 5.54766C5.92364 6.10184 6.36845 6.5511 6.91714 6.5511C7.46584 6.5511 7.91065 6.10184 7.91065 5.54766V5.27891H12.0893V5.54766C12.0893 6.10184 12.5342 6.5511 13.0829 6.5511C13.6316 6.5511 14.0764 6.10184 14.0764 5.54766V5.27891H15.0195C15.5682 5.27891 16.013 5.72817 16.013 6.28236V8.36041H3.98701V6.28236C3.98701 5.72817 4.43182 5.27891 4.98052 5.27891H5.92364V5.54766ZM7.91065 3.27203V3.00344C7.91065 2.44926 7.46584 2 6.91714 2C6.36845 2 5.92364 2.44926 5.92364 3.00344V3.27203H4.98052C3.33442 3.27203 2 4.6198 2 6.28236V14.9897C2 16.6522 3.33442 18 4.98052 18H15.0195C16.6656 18 18 16.6522 18 14.9897V6.28236C18 4.6198 16.6656 3.27203 15.0195 3.27203H14.0764V3.00344C14.0764 2.44926 13.6316 2 13.0829 2C12.5342 2 12.0893 2.44926 12.0893 3.00344V3.27203H7.91065ZM3.98701 10.3673V14.9897C3.98701 15.5439 4.43182 15.9931 4.98052 15.9931H15.0195C15.5682 15.9931 16.013 15.5439 16.013 14.9897V10.3673H3.98701Z",fill:"#006FBC"},null,-1)),S=[I],B=["value","placeholder","maxlength","disabled","autocomplete"],M={class:"date-picker-wrapper"},D=i(()=>t("div",{class:"title"},[r(" 選擇日期 "),t("img",{src:V})],-1)),N={class:"btn-area"},T=u({__name:"DateInput",props:{name:{},value:{},placeholder:{type:String,default:"選擇起始日"},modelValue:{default:l()},errorMessage:{type:String,default:""},maxlength:{type:Number,default:100},autocomplete:{type:String,default:"off"},disabled:{type:Boolean,default:!1}},emits:["update:modelValue","blur","input","change"],setup(e,{emit:A}){return l({currentMonth:new Date().getMonth(),currentYear:new Date().getFullYear(),months:["January","February","March","April","May","June","July","August","September","October","November","December"],days:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],calendarDays:[],today:new Date,currentMonthName:"",todayBtnVisible:!0}),(d,a)=>(s(),o("div",v,[e.errorMessage?(s(),o("span",y,p(e.errorMessage),1)):b("",!0),t("span",null,[(s(),o("svg",{class:c(["indicator",{"indicator-disabled":e.disabled}]),width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},S,2))]),t("input",{type:"text",name:"",value:e.modelValue,placeholder:e.placeholder,maxlength:e.maxlength,disabled:e.disabled,autocomplete:e.autocomplete,class:c(["rounded-lg border border-neutral-400 h-[48px] text-neutral-800 text-base p-3 pl-[40px] my-1 w-full focus:border-primary-400 focus:transition focus:duration-150 focus:ease-in",{error:!!e.errorMessage,"bg-neutral-300":e.disabled}]),onInput:a[0]||(a[0]=m=>d.$emit("update:modelValue",m.target.value))},null,42,B),t("div",M,[D,t("div",N,[n(h,{class:"w-full"},{default:g(()=>[r(" 確定 ")]),_:1})])])]))}});const H=f(T,[["__scopeId","data-v-bb4c65b7"]]),k=u({__name:"DataMaintenanceView",setup(e){return l([]),(A,d)=>{const a=w("router-view");return s(),o(_,null,[r(" 我是資料維護 "),n(a),n(H)],64)}}});export{k as default};
