import{W as i,r,y as u}from"./index-01998dcb.js";const g=i("pagination",()=>{const e=r({pageSize:10,totalElements:1,currentPage:1}),a=u(()=>Math.ceil(e.value.totalElements/e.value.pageSize));function n(o,t){e.value.pageSize=t||e.value.pageSize,e.value.totalElements=o,e.value.currentPage=1}function l(){e.value={pageSize:10,totalElements:1,currentPage:1}}return{pageSet:e,totalPages:a,initialize:n,$reset:l}});export{g as u};
