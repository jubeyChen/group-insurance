import{d as n,r as t,o as s,c as l,t as i,i as r,a as c,n as u}from"./index-1ffe262f.js";const m={class:"inline-block relative text-[0px] mr-2 h-[20px]"},f={key:0,class:"block text-danger text-xs mt-[24px] absolute"},k=["id","value","name","checked","disabled"],p=n({__name:"Checkbox",props:{name:{type:String,default:t()},id:{type:String,default:t()},modelValue:{type:Boolean,default:t()},isChecked:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},errorMessage:{type:String,default:""}},emits:["update:modelValue"],setup(e,{emit:x}){return(d,a)=>(s(),l("div",m,[e.errorMessage?(s(),l("span",f,i(e.errorMessage),1)):r("",!0),c("input",{id:e.id,value:e.modelValue,name:e.name,type:"checkbox",class:u({error:!!e.errorMessage}),checked:e.isChecked,disabled:e.disabled,onInput:a[0]||(a[0]=o=>d.$emit("update:modelValue",o.target.value))},null,42,k)]))}});export{p as _};
