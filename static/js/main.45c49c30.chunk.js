(this["webpackJsonpflightspace-news"]=this["webpackJsonpflightspace-news"]||[]).push([[0],{17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t),n.d(t,"api",(function(){return m}));var c=n(10),s=n.n(c),a=n(6),i=n(2),r=n(0);var l=function(){return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsxs)("nav",{className:"top",children:[Object(r.jsx)(a.b,{title:"Flights App",className:"brand",to:"/",children:Object(r.jsx)("i",{className:"fas fa-space-shuttle"})}),Object(r.jsxs)("div",{className:"links",children:[Object(r.jsx)(a.c,{title:"articles",style:{textDecoration:"none"},className:function(e){return e.isActive?"current":""},to:"/articles",children:Object(r.jsx)("i",{className:"fas fa-newspaper"})}),Object(r.jsx)(a.c,{title:"blogs",style:{textDecoration:"none"},className:function(e){return e.isActive?"current":""},to:"/blogs",children:Object(r.jsx)("i",{className:"fab fa-blogger"})})]})]}),Object(r.jsx)(i.a,{})]})},j=n(5),o=n.n(j),u=n(7),b=n(3),d=n(1),h=function(){var e,t=Object(i.h)().id,n=Object(d.useState)(),c=Object(b.a)(n,2),s=c[0],a=c[1];function l(){return(l=Object(u.a)(o.a.mark((function e(){var n,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(m,"/articles/").concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:c=e.sent,console.log(c),a(c);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(d.useEffect)((function(){!function(){l.apply(this,arguments)}()}),[]),Object(r.jsxs)("div",{className:"container",children:[Object(r.jsxs)("h2",{children:["Article ",null===s||void 0===s?void 0:s.title]}),Object(r.jsxs)("p",{children:["From ",null===s||void 0===s?void 0:s.newsSite]}),Object(r.jsx)("img",{style:{width:"80vw"},src:null===s||void 0===s?void 0:s.imageUrl,alt:""}),Object(r.jsx)("p",{children:null===s||void 0===s?void 0:s.summary}),Object(r.jsx)("a",{href:null===s||void 0===s?void 0:s.url,target:"_blank",rel:"noreferrer",children:"Ver en el la fuente"}),Object(r.jsx)("p",{children:(e=null===s||void 0===s?void 0:s.publishedAt,e?new Date(e).toLocaleDateString():(new Date).toLocaleDateString())})]})},p=function(e){var t=e.item,n=t.title,c=t.id,s=t.imageUrl;return Object(r.jsxs)("div",{className:"new",children:[Object(r.jsx)(a.b,{title:"Ver mas",to:"/blogs/".concat(c),children:Object(r.jsx)("i",{className:"fas fa-expand-alt"})}),Object(r.jsx)("img",{style:{width:"300px"},src:s,alt:""}),Object(r.jsx)("h4",{children:n})]})},x=function(){var e=Object(d.useState)([]),t=Object(b.a)(e,2),n=t[0],c=t[1];function s(){return(s=Object(u.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(m+"/articles");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,console.log(n),c(n);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(d.useEffect)((function(){!function(){s.apply(this,arguments)}()}),[]),Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)("h2",{children:"Articles"}),Object(r.jsx)("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))",gap:"1rem"},children:n.map((function(e){return Object(r.jsx)(p,{item:e},e.id)}))})]})},O=function(){var e=Object(d.useState)(),t=Object(b.a)(e,2),n=t[0],c=t[1],s=Object(i.h)().id;function a(){return(a=Object(u.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(m,"/blogs/").concat(s));case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,c(n);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(d.useEffect)((function(){!function(){a.apply(this,arguments)}()}),[]),Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)("h2",{children:null===n||void 0===n?void 0:n.title}),Object(r.jsxs)("span",{children:["From ",null===n||void 0===n?void 0:n.newsSite]}),Object(r.jsx)("br",{}),Object(r.jsx)("a",{href:null===n||void 0===n?void 0:n.url,children:"ir a la fuente"}),Object(r.jsx)("img",{style:{width:"80vw"},src:null===n||void 0===n?void 0:n.imageUrl,alt:null===n||void 0===n?void 0:n.title}),Object(r.jsx)("p",{children:null===n||void 0===n?void 0:n.summary})]})},f=function(){Object(d.useEffect)((function(){!function(){s.apply(this,arguments)}()}),[]);var e=Object(d.useState)([]),t=Object(b.a)(e,2),n=t[0],c=t[1];function s(){return(s=Object(u.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(m,"/blogs"));case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,c(n);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)("h2",{children:"Blogs"}),Object(r.jsx)("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))",gap:"1rem"},children:n.map((function(e){return Object(r.jsx)(p,{item:e},e.id)}))})]})},m=(n(17),"https://api.spaceflightnewsapi.net/v3");s.a.render(Object(r.jsx)(a.a,{children:Object(r.jsxs)(i.d,{children:[Object(r.jsxs)(i.b,{path:"/",element:Object(r.jsx)(l,{}),children:[Object(r.jsx)(i.b,{index:!0,element:Object(r.jsx)(x,{})}),Object(r.jsx)(i.b,{path:"articles",element:Object(r.jsx)(x,{})}),Object(r.jsx)(i.b,{path:"articles/:id",element:Object(r.jsx)(h,{})}),Object(r.jsx)(i.b,{path:"blogs",element:Object(r.jsx)(f,{})}),Object(r.jsx)(i.b,{path:"blogs/:id",element:Object(r.jsx)(O,{})})]}),Object(r.jsx)(i.b,{path:"*",element:Object(r.jsx)("main",{className:"container",children:Object(r.jsx)("h2",{children:"Ruta no implementada"})})})]})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.45c49c30.chunk.js.map