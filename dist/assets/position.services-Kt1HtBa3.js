import{k as a}from"./index-4CRXydyP.js";import{i as r}from"./DialogConfirm.vue_vue_type_script_setup_true_lang-D7pCQa67.js";const o="https://api.fuas.linox.net.pe/api/positions",l=async e=>{try{const t=localStorage.getItem("token");return(await a(t,o).post("/load-data-table",e)).data.data}catch{return r()}},p=async e=>{try{const t=localStorage.getItem("token");return await a(t,o).post("/save",e),!0}catch{return!1}},i=async e=>{try{const t=localStorage.getItem("token");return await a(t,o).delete(`/delete/${e}`),!0}catch{return!1}},d=async()=>{try{const e=localStorage.getItem("token");return(await a(e,o).get("/load-select")).data.data}catch{return[]}};export{p as _,i as a,l as b,d as c};
