import{_ as a}from"./icon_note-96b9c260.js";import{d as r,o as l,c,a as t,t as i}from"./index-ee8c1cae.js";const n={class:"p-4 border-b-orange-default border-b-2 relative"},_={class:"flex items-center w-[85%] mx-auto"},m=t("img",{class:"mr-2",src:a,alt:"icon"},null,-1),d={class:"font-semibold text-xl text-neutral-800"},h=r({__name:"FormTitle",props:{title:{type:String,default:""}},emits:["close"],setup(e,{emit:o}){function s(){o("close")}return(p,u)=>(l(),c("div",n,[t("div",_,[m,t("h2",d,i(e.title),1)]),t("p",{class:"text-orange-default text-2xl cursor-pointer absolute right-6 top-4",onClick:s}," ✕ ")]))}});export{h as _};
