var ae=Object.defineProperty;var E=Object.getOwnPropertySymbols;var te=Object.prototype.hasOwnProperty,se=Object.prototype.propertyIsEnumerable;var H=(e,n,s)=>n in e?ae(e,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[n]=s,l=(e,n)=>{for(var s in n||(n={}))te.call(n,s)&&H(e,s,n[s]);if(E)for(var s of E(n))se.call(n,s)&&H(e,s,n[s]);return e};import{_ as q}from"./plugin-vue_export-helper.5a098b48.js";import{m as R,n as D,p as M,q as ne,s as $,t as le,v as oe,x as W,y as L,z as re,a as t,A as z,B as ie,C as c,R as ce,D as de,E as ue,F as me,G as ve,H as ge,I as ye,J as _e,K as he,L as fe,M as ke,N as be,O as pe,P as Se,Q as Ce,S as xe,T as Ve,U as Ae,o as r,c as Be,w as N,W as d,X as k,Y as u,Z as i,_ as b,$ as p,a0 as S,e as Ie,a1 as Pe,a2 as Te,h as we}from"./vendor.6db20a0b.js";const F=R({name:"VAvatar",props:l(l(l(l({color:String,left:Boolean,right:Boolean,icon:String,image:String},D()),M()),ne()),$()),setup(e,n){let{slots:s}=n;const{backgroundColorClasses:a,backgroundColorStyles:m}=le(oe(e,"color")),{densityClasses:v}=W(e,"v-avatar"),{roundedClasses:g}=L(e,"v-avatar"),{sizeClasses:y,sizeStyles:_}=re(e,"v-avatar");return()=>{var o;return t(e.tag,{class:["v-avatar",{"v-avatar--left":e.left,"v-avatar--right":e.right},a.value,v.value,g.value,y.value],style:[m.value,_.value]},{default:()=>[e.image&&t(z,{src:e.image,alt:""},null,8,["src"]),e.icon&&!e.image&&t(ie,{icon:e.icon},null,8,["icon"]),(o=s.default)==null?void 0:o.call(s)],_:1},8,["class","style"])}}}),Ee=c("v-card-actions"),j=c("v-card-avatar"),He=c("v-card-header"),qe=c("v-card-header-text"),Re=c("v-card-img"),De=c("v-card-subtitle"),Me=c("v-card-text"),$e=c("v-card-title"),We=R({name:"VCard",directives:{Ripple:ce},props:l(l(l(l(l(l(l(l(l(l({appendAvatar:String,appendIcon:String,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:Boolean,prependAvatar:String,prependIcon:String,ripple:Boolean,subtitle:String,text:String,title:String},de()),ue()),D()),me()),ve()),ge()),M()),ye()),$()),_e({variant:"contained"})),setup(e,n){let{attrs:s,slots:a}=n;const{themeClasses:m}=he(e),{borderClasses:v}=fe(e,"v-card"),{colorClasses:g,colorStyles:y,variantClasses:_}=ke(e,"v-card"),{densityClasses:o}=W(e,"v-card"),{dimensionStyles:G}=be(e),{elevationClasses:O}=pe(e),{positionClasses:Q,positionStyles:J}=Se(e,"v-card"),{roundedClasses:K}=L(e,"v-card"),h=Ce(e,s);return()=>{var V,A,B;const U=h.isLink.value?"a":e.tag,I=!!(a.title||e.title),X=!!(a.subtitle||e.subtitle),P=I||X,T=!!(a.append||e.appendAvatar||e.appendIcon),w=!!(a.prepend||e.prependAvatar||e.prependIcon),Y=!!(a.image||e.image),Z=P||w||T,ee=!!(a.text||e.text),f=!e.disabled&&(h.isClickable.value||e.link);return xe(t(U,{class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":f},m.value,v.value,g.value,o.value,O.value,Q.value,K.value,_.value],style:[y.value,G.value,J.value],href:h.href.value,onClick:f&&h.navigate},{default:()=>[Ae(f,"v-card"),Y&&t(Re,null,{default:()=>[a.image?(V=a.image)==null?void 0:V.call(a,{src:e.image}):t(z,{src:e.image,cover:!0,alt:""},null,8,["src","cover"])]}),(A=a.media)==null?void 0:A.call(a),Z&&t(He,null,{default:()=>[w&&t(j,null,{default:()=>[a.prepend?a.prepend():t(F,{density:e.density,icon:e.prependIcon,image:e.prependAvatar},null,8,["density","icon","image"])]}),P&&t(qe,null,{default:()=>[I&&t($e,null,{default:()=>[a.title?a.title():e.title]}),t(De,null,{default:()=>[a.subtitle?a.subtitle():e.subtitle]})],_:1}),T&&t(j,null,{default:()=>[a.append?a.append():t(F,{density:e.density,icon:e.appendIcon,image:e.appendAvatar},null,8,["density","icon","image"])]})],_:1}),ee&&t(Me,null,{default:()=>[a.text?a.text():e.text]}),(B=a.default)==null?void 0:B.call(a),a.actions&&t(Ee,null,{default:a.actions})],_:1},8,["class","style","href","onClick"]),[[Ve("ripple"),f]])}}}),C=e=>(Pe("data-v-07522557"),e=e(),Te(),e),Le={key:0,class:"questions"},ze=C(()=>d("h3",null,"Questions",-1)),Ne={key:1,class:"vocabulary"},Fe=C(()=>d("h3",null,"Vocabulary",-1)),je={class:"vocab-list"},Ge={key:2,class:"people"},Oe=C(()=>d("h3",null,"People",-1)),Qe={class:"link"},Je=we("Learn More"),Ke={props:{title:{type:String,required:!0},questions:{type:Array,required:!0},vocabulary:{type:Array,required:!0},people:{type:Array,required:!0},link:{type:String,required:!0}},setup(e){const n=e,{title:s,questions:a,vocabulary:m,people:v,link:g}=n;return(y,_)=>(r(),Be(We,{color:"#ccd7ff",class:"card","text-color":"black"},{default:N(()=>[d("h2",null,k(u(s)),1),u(a).length>0?(r(),i("div",Le,[ze,d("ul",null,[(r(!0),i(b,null,p(u(a),o=>(r(),i("li",{key:o},k(o),1))),128))])])):S("",!0),u(m).length>0?(r(),i("div",Ne,[Fe,d("ul",je,[(r(!0),i(b,null,p(u(m),o=>(r(),i("li",{key:o},k(o),1))),128))])])):S("",!0),u(v).length>0?(r(),i("div",Ge,[Oe,d("ul",null,[(r(!0),i(b,null,p(u(v),o=>(r(),i("li",{key:o},k(o),1))),128))])])):S("",!0),d("div",Qe,[t(Ie,{class:"cta",to:u(g),color:"secondary"},{default:N(()=>[Je]),_:1},8,["to"])])]),_:1}))}};var x=q(Ke,[["__scopeId","data-v-07522557"]]);const Ue={class:"container"},Xe={setup(e){return(n,s)=>(r(),i("div",Ue,[t(x,{title:"Introduction",vocabulary:["Recall","Recognition","Relearning ","Encoding","Storage","Retrieval","Parallel processing","Sensory memory","Short term memory","Long term memory","Working memory","Automatic processing","Memory"],questions:["How do explicit and implicit memories differ?","What information do we process automatically?","How does sensory memory work?"],people:["Ebbinghaus","Atkinson and Shiffrin","Baddedly"],link:"/introduction"}),t(x,{title:"Processing Memories",vocabulary:["Encoding","Sensory memory","Long term memory","Working memory","Effortful processing","Automatic processing","Iconic memory","Echoic memory","Memory"],questions:["What is memory, and how is it measured?","How do psychologists describe the human memory system?"],people:[],link:"/processing"}),t(x,{title:"Memory Storage",vocabulary:["Recall","Encoding","Storage","Short term memory","Working memory","Effortful processing","Mnemonics ","Spacing effect","Testing effect","Shallow processing","Deep processing","Memory"],questions:["What is our short-term and working memory capacity?","What are some effortful processing strategies that can help us remember new information?"],people:["Ebbinghaus","Baddedly","George Miller"],link:"/storage"})]))}};var aa=q(Xe,[["__scopeId","data-v-380f78fb"]]);export{aa as default};