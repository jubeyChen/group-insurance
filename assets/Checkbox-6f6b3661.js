import{d as n,r as t,o as s,c as l,t as i,i as c,a as r,n as u,_ as m}from"./index-5a2cfbc4.js";const f={class:"inline-block relative text-[0px] mr-2 h-[20px]"},x={key:0,class:"block text-danger text-xs mt-[24px] absolute"},b=["id","value","name","checked","disabled"],k=n({__name:"Checkbox",props:{name:{type:String,default:t()},id:{type:String,default:t()},modelValue:{type:Boolean,default:t()},isChecked:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},errorMessage:{type:String,default:""}},emits:["update:modelValue"],setup(e,{emit:p}){return(o,a)=>(s(),l("div",f,[e.errorMessage?(s(),l("span",x,i(e.errorMessage),1)):c("",!0),r("input",{id:e.id,value:e.modelValue,name:e.name,type:"checkbox",class:u({error:!!e.errorMessage}),checked:e.isChecked,disabled:e.disabled,onInput:a[0]||(a[0]=d=>o.$emit("update:modelValue",d.target.value))},null,42,b)]))}});const h=m(k,[["__scopeId","data-v-38c6b2f8"]]);export{h as N};
