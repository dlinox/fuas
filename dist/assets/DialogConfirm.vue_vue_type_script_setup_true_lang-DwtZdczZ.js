import{d as v,e as C,r as a,o as x,c as b,w as n,a as o,g as i,t as d}from"./index-CYNkoq92.js";const S=()=>({current_page:0,data:[],first_page_url:"",from:0,per_page:0,to:0,total:0}),k=v({__name:"DialogConfirm",props:{title:{type:String,required:!0,default:"Confirmar"},textCancel:{type:String,default:"Cancelar"},textConfirm:{type:String,default:"Aceptar"},message:{type:String,required:!0},loading:{type:Boolean,default:!1}},emits:["onConfirm","onCancel"],setup(e,{emit:c}){const m=c,r=C(!1);return(y,t)=>{const u=a("v-card-item"),s=a("v-btn"),p=a("v-spacer"),f=a("v-card-actions"),_=a("v-card"),g=a("v-dialog");return x(),b(g,{modelValue:r.value,"onUpdate:modelValue":t[2]||(t[2]=l=>r.value=l),"max-width":"350",activator:"parent",persistent:!0},{default:n(()=>[o(_,{"prepend-icon":"mdi-alert-circle",title:e.title},{default:n(()=>[o(u,{class:"text-center border-t border-b"},{default:n(()=>[i(d(e.message),1)]),_:1}),o(f,null,{default:n(()=>[o(s,{type:"button",color:"secondary",variant:"text",onClick:t[0]||(t[0]=l=>r.value=!1),disabled:e.loading},{default:n(()=>[i(d(e.textCancel),1)]),_:1},8,["disabled"]),o(p),o(s,{type:"button",color:"primary",onClick:t[1]||(t[1]=l=>m("onConfirm")),loading:e.loading},{default:n(()=>[i(d(e.textConfirm),1)]),_:1},8,["loading"])]),_:1})]),_:1},8,["title"])]),_:1},8,["modelValue"])}}});export{k as _,S as i};