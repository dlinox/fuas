import{d as V,e as u,o as k,c as C,w as l,r as n,b as o,a,f as I,u as c,g as B,t as N,s as S}from"./index-5KJAA8ng.js";import{r as v}from"./ruleUtils-DaB-ACZt.js";const f={email:[v],password:[v]},U={class:"text-center"},A=V({__name:"index",setup(D){const t=u({email:"dpumaticona@gmail.com",password:"linox123"}),r=u(!1),s=u(!1),_=async()=>{r.value=!0,await S(t.value),r.value=!1};return(F,e)=>{const m=n("v-text-field"),d=n("v-col"),w=n("v-btn"),x=n("v-row"),g=n("v-form"),p=n("v-card-item"),b=n("v-card"),y=n("v-container");return k(),C(y,{class:"h-100 d-flex justify-space-between align-center flex-column"},{default:l(()=>[e[6]||(e[6]=o("div",null,null,-1)),a(b,{class:"w-md-75 bg-white",elevation:"0"},{default:l(()=>[e[5]||(e[5]=o("div",{class:"pa-4"},[o("h3",{class:""},"Bienvenido de nuevo"),o("p",{class:""},"Ingrese sus credenciales para acceder al sistema.")],-1)),a(p,null,{default:l(()=>[a(g,{onSubmit:I(_,["prevent"])},{default:l(()=>[a(x,null,{default:l(()=>[a(d,{cols:"12"},{default:l(()=>[a(m,{label:"Usuario",modelValue:t.value.email,"onUpdate:modelValue":e[0]||(e[0]=i=>t.value.email=i),"prepend-inner-icon":"mdi-email",type:"text",rules:c(f).email},null,8,["modelValue","rules"])]),_:1}),a(d,{cols:"12"},{default:l(()=>[a(m,{autocomplete:"off",modelValue:t.value.password,"onUpdate:modelValue":e[1]||(e[1]=i=>t.value.password=i),"prepend-inner-icon":"mdi-lock","append-inner-icon":s.value?"mdi-eye":"mdi-eye-off","onClick:appendInner":e[2]||(e[2]=()=>s.value=!s.value),label:"Contraseña",rules:c(f).password,type:s.value?"text":"password"},null,8,["modelValue","append-inner-icon","rules","type"])]),_:1}),a(d,{cols:"12"},{default:l(()=>[a(w,{type:"submit",color:"primary",block:"",loading:r.value},{default:l(()=>e[3]||(e[3]=[B(" Ingresar ")])),_:1},8,["loading"])]),_:1})]),_:1})]),_:1})]),_:1}),a(p,{class:"text-end"},{default:l(()=>e[4]||(e[4]=[o("a",{href:"",class:"text-primary"}," ¿Olvidaste tu contraseña? ",-1)])),_:1})]),_:1}),o("div",U,[o("small",null," Lnx © "+N(new Date().getFullYear()),1)])]),_:1})}}});export{A as default};
