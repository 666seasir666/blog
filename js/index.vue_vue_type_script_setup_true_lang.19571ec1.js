import{d as l,L as i,A as g,y as s,h as m,O as d,P as f,o as x,e as p,_ as v}from"./index.591fe32d.js";const N=l({__name:"index",props:{current:{type:Number,default:1},total:{type:Number,default:0}},emits:["update:current"],setup(t,{emit:c}){const r=t,e=i({get:()=>r.current,set:n=>{c("update:current",n)}});return(n,a)=>{const o=v,u=f;return x(),g(u,{class:"pagination",page:m(e),"onUpdate:page":a[0]||(a[0]=_=>d(e)?e.value=_:null),"page-count":t.total,"page-slot":5},{prev:s(()=>[p(o,{"icon-class":"angle-left"})]),next:s(()=>[p(o,{"icon-class":"angle-right"})]),_:1},8,["page","page-count"])}}});export{N as _};
