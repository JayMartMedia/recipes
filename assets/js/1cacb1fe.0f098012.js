"use strict";(self.webpackChunkjaymartmedia=self.webpackChunkjaymartmedia||[]).push([[675],{1954:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var i=n(5893),r=n(1151),s=n(1417);const a={},o="Taco Dip",c={id:"meals/taco-dip",title:"Taco Dip",description:"<Recipe",source:"@site/docs/meals/taco-dip.mdx",sourceDirName:"meals",slug:"/meals/taco-dip",permalink:"/recipes/meals/taco-dip",draft:!1,unlisted:!1,editUrl:"https://github.com/jaymartmedia/jaymartmedia.github.io/tree/main/docs/meals/taco-dip.mdx",tags:[],version:"current",frontMatter:{},sidebar:"recipesSidebar",previous:{title:"Meals",permalink:"/recipes/category/meals"}},d={},l=[];function u(e){const t={h1:"h1",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"taco-dip",children:"Taco Dip"}),"\n",(0,i.jsx)(s.p,{ingredients:{beef:{value:1,unit:"lb",title:"ground beef"},seasoning:{value:1,unit:"ct",title:"taco seasoning packet"},creamCheese:{value:16,unit:"oz",title:"cream cheese"},cheese:{value:1,unit:"cup",title:"shredded cheddar cheese"}},instructions:["Brown :beef: and drain grease","Add :seasoning: and water according to directions on seasoning pack","Simmer 15 minutes or according to directions on seasoning pack","Add :creamCheese: and stir until completely melted","Pour into casserole dish","Top with :cheese:","Bake at 350\xb0F for 20 to 30 minutes (until cheese on top is crispy)"]})]})}function p(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},1417:(e,t,n)=>{n.d(t,{p:()=>s});var i=n(7294);var r=n(5893);function s(e){const[t,n]=(0,i.useState)(1),s=Object.entries(e.ingredients).map((e=>{let[t,n]=e;return{field:t,...n}})),a=e.instructions;return(0,r.jsxs)("div",{children:[(0,r.jsx)("h2",{children:"Servings"}),(0,r.jsx)("input",{type:"number",value:t,onChange:function(e){const t=Number(e.target.value)>=0?e.target.value:0;n(Number(t))}}),(0,r.jsx)("button",{onClick:()=>n((e=>e>1?e-1:0)),children:"-"}),(0,r.jsx)("button",{onClick:()=>n((e=>e+1)),children:"+"}),(0,r.jsx)("h2",{children:"Ingredients"}),(0,r.jsx)("ul",{children:s.map((e=>(0,r.jsxs)("li",{children:[e.value*t," ",e.unit," ",e.title," ",e.description&&`(${e.description})`]})))}),(0,r.jsx)("h2",{children:"Instructions"}),(0,r.jsx)("ol",{children:a.map((n=>{const i=function(e,t,n){const i={transformer:e=>e.toString(),tokenSeparator:":",...n};return e.split(i.tokenSeparator).map((e=>t[e]?i.transformer(t[e]):e)).join("")}(n,e.ingredients,{transformer:e=>`${e.title} (${e.value*t} ${e.unit})`});return(0,r.jsx)("li",{children:i})}))})]})}},1151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>a});var i=n(7294);const r={},s=i.createContext(r);function a(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);