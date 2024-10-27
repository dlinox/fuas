import{k as $,d as B,b as c,r as a,o as y,c as V,w as t,a as e,u as w,m as J,l as K,g as f,f as L,t as Q,n as G,p as q,F as H,i as W,j as X}from"./index-4CRXydyP.js";import{i as Y,_ as Z}from"./DialogConfirm.vue_vue_type_script_setup_true_lang-D7pCQa67.js";import{r as A}from"./ruleUtils-DaB-ACZt.js";import{c as h}from"./worker.services-vhtFMs60.js";const D="https://api.fuas.linox.net.pe/api/users",ee=async p=>{try{const n=localStorage.getItem("token");return(await $(n,D).post("/load-data-table",p)).data.data}catch{return Y()}},te=async p=>{try{const n=localStorage.getItem("token");return await $(n,D).post("/save",p),!0}catch{return!1}},oe=async p=>{try{const n=localStorage.getItem("token");return await $(n,D).delete(`/delete/${p}`),!0}catch{return!1}},ae=async()=>{try{const p=localStorage.getItem("token"),n=await $(p,D).get("/all-permissions");return console.log(n.data),n.data.data}catch{return[]}},z={email:[A],password:[],workerId:[A],status:[A]},le=()=>({id:null,email:"",password:null,workerId:null,permissions:[],status:!0}),M=B({__name:"Form",props:{formState:{type:Object,default:()=>({})}},emits:["onSuccess"],setup(p,{emit:n}){const d=n,i=p,o=c(null),u=c(!1),m=c(!1),s=c({...le(),...i.formState}),g=c([]),b=async()=>{const{valid:l}=await o.value.validate();if(console.log(s.value),!l)return;await te(s.value)&&(s.value.id==null&&o.value.reset(),d("onSuccess"),m.value=!1),u.value=!1};return(async()=>{g.value=await h()})(),(l,r)=>{const C=a("v-list-item"),T=a("v-select"),k=a("v-col"),U=a("v-text-field"),S=a("v-switch"),R=a("v-row"),E=a("v-card-item"),P=a("v-btn"),N=a("v-spacer"),O=a("v-card-actions"),x=a("v-card"),I=a("v-form"),j=a("v-dialog");return y(),V(j,{"max-width":"700",modelValue:m.value,"onUpdate:modelValue":r[5]||(r[5]=_=>m.value=_),activator:"parent"},{default:t(()=>[e(I,{ref_key:"formRef",ref:o,onSubmit:L(b,["prevent"])},{default:t(()=>[e(x,{title:s.value.id?"Editar Registro":"Nuevo Registro"},{default:t(()=>[e(E,{class:"border-t border-b"},{default:t(()=>[e(R,null,{default:t(()=>[e(k,{cols:"12"},{default:t(()=>[e(T,{modelValue:s.value.workerId,"onUpdate:modelValue":r[0]||(r[0]=_=>s.value.workerId=_),label:"Trabajador",items:g.value,rules:w(z).workerId},{item:t(({props:_,item:F})=>[e(C,J(_,{title:F.title,disabled:F.raw.hasUser=="1"}),null,16,["title","disabled"])]),_:1},8,["modelValue","items","rules"])]),_:1}),e(k,{cols:"12"},{default:t(()=>[e(U,{modelValue:s.value.email,"onUpdate:modelValue":r[1]||(r[1]=_=>s.value.email=_),label:"Correo electrónico",rules:w(z).email,autocomplete:"off"},null,8,["modelValue","rules"])]),_:1}),s.value.id?K("",!0):(y(),V(k,{key:0,cols:"12"},{default:t(()=>[e(U,{modelValue:s.value.password,"onUpdate:modelValue":r[2]||(r[2]=_=>s.value.password=_),label:"Contraseña",rules:w(z).password,type:"password",autocomplete:"new-password"},null,8,["modelValue","rules"])]),_:1})),e(k,{cols:"12"},{default:t(()=>[e(S,{label:s.value.status?"Habilitado":"Deshabilitado",modelValue:s.value.status,"onUpdate:modelValue":r[3]||(r[3]=_=>s.value.status=_),color:"blue-darken-4",inset:""},null,8,["label","modelValue"])]),_:1})]),_:1})]),_:1}),e(O,null,{default:t(()=>[e(P,{type:"button",variant:"text",color:"secondary",onClick:r[4]||(r[4]=_=>m.value=!1)},{default:t(()=>r[6]||(r[6]=[f(" Cancelar ")])),_:1}),e(N),e(P,{text:"Guardar",color:"primary",type:"submit",loading:u.value},null,8,["loading"])]),_:1})]),_:1},8,["title"])]),_:1},512)]),_:1},8,["modelValue"])}}}),se=[{title:"Op.",key:"actions",value:"actions",fixed:!0,width:"50px",sortable:!1},{title:"Nombre Completo",key:"fullName",value:"fullName"},{title:"Correo",key:"email",value:"email"},{title:"Estado",key:"status",value:"status"}],ne=B({__name:"DataTable",props:{options:{},items:{},loading:{type:Boolean},total:{}},emits:["onUpdateTable"],setup(p,{emit:n}){const d=n;return(i,o)=>{const u=a("v-icon"),m=a("v-list-item"),s=a("v-list"),g=a("v-menu"),b=a("v-btn"),v=a("v-data-table-server");return y(),V(v,{"items-per-page":i.options.itemsPerPage,"onUpdate:itemsPerPage":[o[1]||(o[1]=l=>i.options.itemsPerPage=l),o[4]||(o[4]=l=>d("onUpdateTable"))],"sort-by":i.options.sortBy,"onUpdate:sortBy":[o[2]||(o[2]=l=>i.options.sortBy=l),o[5]||(o[5]=l=>d("onUpdateTable"))],page:i.options.page,"onUpdate:page":[o[3]||(o[3]=l=>i.options.page=l),o[6]||(o[6]=l=>d("onUpdateTable"))],headers:w(se),items:i.items,"items-length":i.total,loading:i.loading,"item-value":"id","multi-sort":""},{"item.actions":t(({item:l})=>[e(b,{icon:"",density:"compact",variant:"text"},{default:t(()=>[e(u,null,{default:t(()=>o[7]||(o[7]=[f("mdi-dots-vertical")])),_:1}),e(g,{activator:"parent"},{default:t(()=>[e(s,{density:"compact"},{default:t(()=>[e(m,{key:"permissions",value:"permissions",class:"text-subtitle-2"},{append:t(()=>[e(u,{size:"small"},{default:t(()=>o[8]||(o[8]=[f(" mdi-lock ")])),_:1})]),default:t(()=>[o[9]||(o[9]=f(" Asignar permisos ")),e(w(re),{permissions:l.permissions},null,8,["permissions"])]),_:2},1024),e(m,{key:"edit",value:"edit",class:"text-subtitle-2"},{append:t(()=>[e(u,{size:"small"},{default:t(()=>o[10]||(o[10]=[f(" mdi-pencil ")])),_:1})]),default:t(()=>[o[11]||(o[11]=f(" Editar ")),e(w(M),{formState:l,onOnSuccess:o[0]||(o[0]=r=>d("onUpdateTable"))},null,8,["formState"])]),_:2},1024),e(m,{key:"delete",value:"delete",class:"text-red text-subtitle-2"},{append:t(()=>[e(u,{size:"small",color:"red"},{default:t(()=>o[12]||(o[12]=[f(" mdi-delete ")])),_:1})]),default:t(()=>[e(Z,{title:"Eliminar",message:"¿Está seguro de eliminar este registro?",onOnConfirm:async()=>{await w(oe)(l.id)&&d("onUpdateTable")}},null,8,["onOnConfirm"]),o[13]||(o[13]=f(" Eliminar "))]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),"item.status":t(({item:l})=>[e(b,{color:l.status?"blue":"error","text-color":"white",density:"compact",variant:"tonal"},{default:t(()=>[f(Q(l.status?"Habilitado":"Deshabilitado"),1)]),_:2},1032,["color"])]),_:1},8,["items-per-page","sort-by","page","headers","items","items-length","loading"])}}}),re=B({__name:"AssignPermissions",props:{permissions:{}},emits:["onSuccess"],setup(p,{emit:n}){const d=p,i=c(null),o=c(!1),u=c([...d.permissions]),m=async()=>{console.log(u.value)},s=c([]);return(async()=>{s.value=await ae()})(),(b,v)=>{const l=a("v-checkbox"),r=a("v-col"),C=a("v-row"),T=a("v-expansion-panel-text"),k=a("v-expansion-panel"),U=a("v-expansion-panels"),S=a("v-btn"),R=a("v-spacer"),E=a("v-card-actions"),P=a("v-card"),N=a("v-form"),O=a("v-dialog");return y(),V(O,{"max-width":"1000",modelValue:o.value,"onUpdate:modelValue":v[2]||(v[2]=x=>o.value=x),activator:"parent"},{default:t(()=>[e(N,{ref_key:"formRef",ref:i,onSubmit:L(m,["prevent"])},{default:t(()=>[e(P,{title:"Asignar permisos"},{default:t(()=>[e(U,null,{default:t(()=>[(y(!0),G(H,null,q(s.value,x=>(y(),V(k,{key:x.id,title:x.description},{default:t(()=>[e(T,null,{default:t(()=>[e(C,null,{default:t(()=>[(y(!0),G(H,null,q(x.children,I=>(y(),V(r,{cols:"12",sm:"6",md:"4",class:"ma-0 pa-1",key:I.id},{default:t(()=>[e(l,{modelValue:u.value,"onUpdate:modelValue":v[0]||(v[0]=j=>u.value=j),label:I.description,value:I.id},null,8,["modelValue","label","value"])]),_:2},1024))),128))]),_:2},1024)]),_:2},1024)]),_:2},1032,["title"]))),128))]),_:1}),e(E,null,{default:t(()=>[e(S,{type:"button",variant:"text",color:"secondary",onClick:v[1]||(v[1]=x=>o.value=!1)},{default:t(()=>v[3]||(v[3]=[f(" Cancelar ")])),_:1}),e(R),e(S,{text:"Guardar",color:"primary",type:"submit"})]),_:1})]),_:1})]),_:1},512)]),_:1},8,["modelValue"])}}}),pe=B({__name:"index",setup(p){const n=c(!1),d=c(!1),i=c([]),o=c(0),u=c({itemsPerPage:10,sortBy:[],page:1,search:"",filters:{}}),m=async()=>{d.value=!0;const g=await ee(u.value);i.value=g.data,o.value=g.total,d.value=!1},s=async()=>{n.value=!0,await m(),n.value=!1};return s(),(g,b)=>{const v=a("v-text-field"),l=a("v-col"),r=a("v-btn"),C=a("v-row"),T=a("v-card-item"),k=a("v-card"),U=W("tooltip");return y(),V(k,{title:"Usuarios",subtitle:"Gestión de usuarios",disabled:n.value},{default:t(()=>[e(T,{class:"border-t border-b"},{default:t(()=>[e(C,{class:"d-flex justify-space-between"},{default:t(()=>[e(l,{cols:"12",md:"4"},{default:t(()=>[e(v,{modelValue:u.value.search,"onUpdate:modelValue":b[0]||(b[0]=S=>u.value.search=S),label:"Buscar",clearable:"",onInput:m},null,8,["modelValue"])]),_:1}),e(l,{cols:"12",md:"4",class:"d-md-flex d-block justify-end text-end"},{default:t(()=>[e(r,{class:"h-md-auto me-2",disabled:n.value},{default:t(()=>[b[1]||(b[1]=f(" nuevo ")),e(w(M),{onOnSuccess:m})]),_:1},8,["disabled"]),X(e(r,{class:"h-md-auto",density:"comfortable",icon:"mdi-reload",onClick:s,loading:d.value},null,8,["loading"]),[[U,"Recargar registros"]])]),_:1})]),_:1})]),_:1}),e(w(ne),{options:u.value,loading:d.value,items:i.value,total:o.value,onOnUpdateTable:m},null,8,["options","loading","items","total"])]),_:1},8,["disabled"])}}});export{pe as default};
