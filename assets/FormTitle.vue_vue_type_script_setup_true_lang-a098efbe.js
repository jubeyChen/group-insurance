import{bO as i,r as o,y as l,d as c,o as g,c as p,a as t,t as u}from"./index-5d944958.js";const m="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKQSURBVHgBvVc9iNRAFP4m2Zx4CK4/B1tJBAs7Y2Ojsl5nJedPK2pleWdxIFiYKwStzJVaaa9iaaeirRgrG+Gi1cGJplDBhN3cezPJbnYvezvJJftByMtk5n1vvje/AppIVtptWNYSmV0IOFRiA6Kd/g3JDqjcRx/vEcevhReGOn7FtApEbGPOWibr5pBQy/Mz/I/XKJBg92qTidtEfJ/MFewFAl4aSFj8u5ice/2WTBv1IEAULxapYewgX11waiaH9EU+pe8xjCjQQM/HsUMJkSPnnH9ukDwfxOlsTAxToAacjeZhY5/kkpAKpNJvYJaI4uOcCqVALqJKOHAUuPZYPSfO67WxLDm9RZr736iKuXng0gMKYmFY9vEJ8O3DtJYhq2Cky2s1cM85gB+fRsvPXNdpTUu7uWTQMOyiCpj84j3g3G3AfwX82Rr+i/7q+TCMrumenXcpEx2UQUbOsvPTi0n2p8D+g0qRN5SS6J+WqxbKTr08eQbnivr2X5ISP1ECtlFqhysiz9A5iQpoG6WqO1eLyTn/LHu53ksY6jChCVagRnJCyAoE2tUPH6uTnBHQIBRfyHC0qmcjmwl/fU+nX2Vy3gj8FhK8I+OGVoMXd1Ar6PyYLsWtjVKzgcFrPi9Ck8Cp2fyKXRHFh9RuuHrEgzCWMUvQoVU82rqlpqFpeZg1hLnGLxmAeLgZIOmvY1ZIsC45kT8RxT0XZaZkdQR0cXGzj0EA8oxmmItoNoiAOfJ3hJGlWKUCl9FMENJ3Jv2As6hmcrdjo9+r92LCPR8jZxRuRrIiHZ1rGZg04OQxvIBcck1tr9RwydRbLVWrEIl4DtP0JhFrBzBwmV3PBS7Q1ynI9OSv55zjxCdRS13PtwFvqe269ad/vAAAAABJRU5ErkJggg==",x=i("pagination",()=>{const e=o({pageSize:10,totalElements:1,currentPage:1}),a=l(()=>Math.ceil(e.value.totalElements/e.value.pageSize));function A(n,r){e.value.pageSize=r||e.value.pageSize,e.value.totalElements=n,e.value.currentPage=1}function s(){e.value={pageSize:10,totalElements:1,currentPage:1}}return{pageSet:e,totalPages:a,initialize:A,$reset:s}}),v={class:"p-4 border-b-orange-default border-b-2 relative"},d={class:"flex items-center w-[85%] mx-auto"},R=t("img",{class:"mr-2",src:m},null,-1),B=c({__name:"FormTitle",props:{title:{type:String,default:""}},emits:["close"],setup(e,{emit:a}){function A(){a("close")}return(s,n)=>(g(),p("div",v,[t("div",d,[R,t("h2",null,u(e.title),1)]),t("p",{class:"text-orange-default text-2xl cursor-pointer absolute right-6 top-4",onClick:A}," ✕ ")]))}});export{B as _,m as a,x as u};
