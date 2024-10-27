import{_ as F,a as M,b as R}from"./worker.services-hh2zdspK.js";import{d as L,b as v,r as n,o as I,c as x,w as a,a as e,u as r,g as w,f as A,t as G,i as q,j as H}from"./index-ooGDqISt.js";import{c as W}from"./office.services-D1Otw7vT.js";import{c as z}from"./position.services-X5Unhxl6.js";import{r as g}from"./ruleUtils-DaB-ACZt.js";import{_ as J}from"./DialogConfirm.vue_vue_type_script_setup_true_lang-DuPVaZJL.js";const V={documentType:[g],documentNumber:[g],name:[g],paternalLastName:[g],maternalLastName:[g],birthDate:[],gender:[g],phoneNumber:[g],email:[],status:[g],positionId:[],officeId:[],description:[]},K=()=>({id:null,documentType:"DNI",documentNumber:"",name:"",paternalLastName:"",maternalLastName:"",birthDate:null,gender:"M",phoneNumber:"",email:null,status:!0,positionId:null,officeId:null}),C=L({__name:"Form",props:{formState:{type:Object,default:()=>({})}},emits:["onSuccess"],setup(T,{emit:b}){const m=b,i=T,s=v(!1),p=v(!1),t=v({...K(),...i.formState}),y=v([]),_=v([]),c=async()=>{s.value=!0,await F(t.value)&&(m("onSuccess"),p.value=!1),s.value=!1};return(async()=>{console.log("init"),y.value=await W(),_.value=await z()})(),(u,l)=>{const N=n("v-select"),d=n("v-col"),f=n("v-text-field"),k=n("v-switch"),D=n("v-row"),P=n("v-card-item"),S=n("v-btn"),$=n("v-spacer"),B=n("v-card-actions"),O=n("v-card"),j=n("v-form"),E=n("v-dialog");return I(),x(E,{"max-width":"700",modelValue:p.value,"onUpdate:modelValue":l[13]||(l[13]=o=>p.value=o),activator:"parent"},{default:a(()=>[e(j,{ref:"formRef",onSubmit:A(c,["prevent"])},{default:a(()=>[e(O,{title:t.value.id?"Editar Registro":"Nuevo Registro"},{default:a(()=>[e(P,{class:"border-t border-b"},{default:a(()=>[e(D,null,{default:a(()=>[e(d,{cols:"12",md:"6"},{default:a(()=>[e(N,{modelValue:t.value.documentType,"onUpdate:modelValue":l[0]||(l[0]=o=>t.value.documentType=o),items:["DNI"],label:"Tipo de documento",rules:r(V).documentType},null,8,["modelValue","rules"])]),_:1}),e(d,{cols:"12",md:"6"},{default:a(()=>[e(f,{modelValue:t.value.documentNumber,"onUpdate:modelValue":l[1]||(l[1]=o=>t.value.documentNumber=o),label:"Número de documento",rules:r(V).documentNumber},null,8,["modelValue","rules"])]),_:1}),e(d,{cols:"12"},{default:a(()=>[e(f,{modelValue:t.value.name,"onUpdate:modelValue":l[2]||(l[2]=o=>t.value.name=o),label:"Nombre",rules:r(V).name},null,8,["modelValue","rules"])]),_:1}),e(d,{cols:"12"},{default:a(()=>[e(f,{modelValue:t.value.paternalLastName,"onUpdate:modelValue":l[3]||(l[3]=o=>t.value.paternalLastName=o),label:"Apellido paterno",rules:r(V).paternalLastName},null,8,["modelValue","rules"])]),_:1}),e(d,{cols:"12"},{default:a(()=>[e(f,{modelValue:t.value.maternalLastName,"onUpdate:modelValue":l[4]||(l[4]=o=>t.value.maternalLastName=o),label:"Apellido materno",rules:r(V).maternalLastName},null,8,["modelValue","rules"])]),_:1}),e(d,{cols:"12"},{default:a(()=>[e(f,{modelValue:t.value.email,"onUpdate:modelValue":l[5]||(l[5]=o=>t.value.email=o),label:"Correo electrónico",rules:r(V).email},null,8,["modelValue","rules"])]),_:1}),e(d,{cols:"12"},{default:a(()=>[e(f,{modelValue:t.value.phoneNumber,"onUpdate:modelValue":l[6]||(l[6]=o=>t.value.phoneNumber=o),label:"Número de teléfono",rules:r(V).phoneNumber},null,8,["modelValue","rules"])]),_:1}),e(d,{cols:"12"},{default:a(()=>[e(f,{modelValue:t.value.birthDate,"onUpdate:modelValue":l[7]||(l[7]=o=>t.value.birthDate=o),label:"Fecha de nacimiento",type:"date",rules:r(V).birthDate},null,8,["modelValue","rules"])]),_:1}),e(d,{cols:"12"},{default:a(()=>[e(N,{modelValue:t.value.gender,"onUpdate:modelValue":l[8]||(l[8]=o=>t.value.gender=o),items:[{title:"Masculino",value:"M"},{title:"Femenino",value:"F"}],label:"Género"},null,8,["modelValue"])]),_:1}),e(d,{cols:"12"},{default:a(()=>[e(N,{modelValue:t.value.positionId,"onUpdate:modelValue":l[9]||(l[9]=o=>t.value.positionId=o),items:_.value,label:"Cargo","item-title":"title","item-value":"value"},null,8,["modelValue","items"])]),_:1}),e(d,{cols:"12"},{default:a(()=>[e(N,{modelValue:t.value.officeId,"onUpdate:modelValue":l[10]||(l[10]=o=>t.value.officeId=o),items:y.value,label:"Oficina","item-title":"title","item-value":"value"},null,8,["modelValue","items"])]),_:1}),e(d,{cols:"12"},{default:a(()=>[e(k,{label:t.value.status?"Habilitado":"Deshabilitado",modelValue:t.value.status,"onUpdate:modelValue":l[11]||(l[11]=o=>t.value.status=o),color:"blue-darken-4",inset:""},null,8,["label","modelValue"])]),_:1})]),_:1})]),_:1}),e(B,null,{default:a(()=>[e(S,{type:"button",variant:"text",color:"secondary",onClick:l[12]||(l[12]=o=>p.value=!1)},{default:a(()=>l[14]||(l[14]=[w(" Cancelar ")])),_:1}),e($),e(S,{text:"Guardar",color:"primary",type:"submit",loading:s.value},null,8,["loading"])]),_:1})]),_:1},8,["title"])]),_:1},512)]),_:1},8,["modelValue"])}}}),Q=[{title:"Op.",key:"actions",value:"actions",fixed:!0,width:"50px",sortable:!1},{title:"Documento",key:"documentNumber",value:"documentNumber"},{title:"Nombre",key:"name",value:"name"},{title:"Apellido Paterno",key:"paternalLastName",value:"paternalLastName"},{title:"Apellido Materno",key:"maternalLastName",value:"maternalLastName"},{title:"Fecha de Nacimiento",key:"birthDate",value:"birthDate"},{title:"Género",key:"gender",value:"gender"},{title:"Estado",key:"status",value:"status"}],X=L({__name:"DataTable",props:{options:{},items:{},loading:{type:Boolean},total:{}},emits:["onUpdateTable"],setup(T,{emit:b}){const m=b;return(i,s)=>{const p=n("v-icon"),t=n("v-list-item"),y=n("v-list"),_=n("v-menu"),c=n("v-btn"),U=n("v-data-table-server");return I(),x(U,{"items-per-page":i.options.itemsPerPage,"onUpdate:itemsPerPage":[s[1]||(s[1]=u=>i.options.itemsPerPage=u),s[4]||(s[4]=u=>m("onUpdateTable"))],"sort-by":i.options.sortBy,"onUpdate:sortBy":[s[2]||(s[2]=u=>i.options.sortBy=u),s[5]||(s[5]=u=>m("onUpdateTable"))],page:i.options.page,"onUpdate:page":[s[3]||(s[3]=u=>i.options.page=u),s[6]||(s[6]=u=>m("onUpdateTable"))],headers:r(Q),items:i.items,"items-length":i.total,loading:i.loading,"item-value":"id","multi-sort":""},{"item.actions":a(({item:u})=>[e(c,{icon:"",density:"compact",variant:"text"},{default:a(()=>[e(p,null,{default:a(()=>s[7]||(s[7]=[w("mdi-dots-vertical")])),_:1}),e(_,{activator:"parent"},{default:a(()=>[e(y,{density:"compact"},{default:a(()=>[e(t,{key:"edit",value:"edit",title:"Editar","append-icon":"mdi-pencil"},{default:a(()=>[e(r(C),{formState:u,onOnSuccess:s[0]||(s[0]=l=>m("onUpdateTable"))},null,8,["formState"])]),_:2},1024),e(t,{key:"delete",value:"delete",title:"Eliminar",class:"text-red","append-icon":"mdi-delete"},{default:a(()=>[e(J,{title:"Eliminar",message:"¿Está seguro de eliminar este registro?",onOnConfirm:async()=>{await r(M)(u.id)&&m("onUpdateTable")}},null,8,["onOnConfirm"])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),"item.status":a(({item:u})=>[e(c,{color:u.status?"blue":"error","text-color":"white",density:"compact",variant:"tonal"},{default:a(()=>[w(G(u.status?"Habilitado":"Deshabilitado"),1)]),_:2},1032,["color"])]),_:1},8,["items-per-page","sort-by","page","headers","items","items-length","loading"])}}}),ae=L({__name:"index",setup(T){const b=v(!1),m=v(!1),i=v([]),s=v(0),p=v({itemsPerPage:10,sortBy:[],page:1,search:"",filters:{}}),t=async()=>{m.value=!0;const _=await R(p.value);i.value=_.data,s.value=_.total,m.value=!1},y=async()=>{b.value=!0,await t(),b.value=!1};return y(),(_,c)=>{const U=n("v-text-field"),u=n("v-col"),l=n("v-btn"),N=n("v-row"),d=n("v-card-item"),f=n("v-card"),k=q("tooltip");return I(),x(f,{title:"Trabajadores",subtitle:"Gestión de trabajadores",disabled:b.value},{default:a(()=>[e(d,{class:"border-t border-b"},{default:a(()=>[e(N,{class:"d-flex justify-space-between"},{default:a(()=>[e(u,{cols:"12",md:"4"},{default:a(()=>[e(U,{modelValue:p.value.search,"onUpdate:modelValue":c[0]||(c[0]=D=>p.value.search=D),label:"Buscar",clearable:"",onInput:t},null,8,["modelValue"])]),_:1}),e(u,{cols:"12",md:"4",class:"d-md-flex d-block justify-end text-end"},{default:a(()=>[e(l,{class:"h-md-auto me-2",disabled:b.value},{default:a(()=>[c[1]||(c[1]=w(" nuevo ")),e(r(C),{onOnSuccess:t})]),_:1},8,["disabled"]),H(e(l,{class:"h-md-auto",density:"comfortable",icon:"mdi-reload",onClick:y,loading:m.value},null,8,["loading"]),[[k,"Recargar registros"]])]),_:1})]),_:1})]),_:1}),e(r(X),{options:p.value,loading:m.value,items:i.value,total:s.value,onOnUpdateTable:t},null,8,["options","loading","items","total"])]),_:1},8,["disabled"])}}});export{ae as default};
