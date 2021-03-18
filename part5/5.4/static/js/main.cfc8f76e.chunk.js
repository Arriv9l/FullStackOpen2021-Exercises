(this["webpackJsonpbloglist-frontend"]=this["webpackJsonpbloglist-frontend"]||[]).push([[0],{41:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n(16),c=n.n(a),u=n(3),s=n.n(u),o=n(5),i=n(4),l=n(0),j=function(e){var t=e.blog;return Object(l.jsxs)("div",{children:[t.title," ",t.author]})},b=function(e){var t=e.username,n=e.handleLogout;return Object(l.jsxs)("div",{children:[t," logged in",Object(l.jsx)("button",{onClick:n,children:"logout"})]})},p=function(e){var t=e.message,n=t.content,r=t.type;return n?Object(l.jsx)("div",{className:r,children:n}):null},d=n(6),f=n.n(d),v="/api/blogs",O=null,h=function(){return{headers:{Authorization:O}}},g={getAll:function(){var e=Object(o.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get(v,h());case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),create:function(){var e=Object(o.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.post(v,t,h());case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),setToken:function(e){O="bearer ".concat(e)}},x=function(){var e=Object(o.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.post("/api/login",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(r.useState)([]),t=Object(i.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(""),u=Object(i.a)(c,2),d=u[0],f=u[1],v=Object(r.useState)(""),O=Object(i.a)(v,2),h=O[0],m=O[1],w=Object(r.useState)(null),k=Object(i.a)(w,2),S=k[0],y=k[1],C=Object(r.useState)(""),T=Object(i.a)(C,2),B=T[0],I=T[1],J=Object(r.useState)(""),A=Object(i.a)(J,2),E=A[0],N=A[1],U=Object(r.useState)(""),D=Object(i.a)(U,2),L=D[0],z=D[1],q=Object(r.useState)({}),F=Object(i.a)(q,2),G=F[0],H=F[1];Object(r.useEffect)((function(){var e=window.localStorage.getItem("loggedBlogappUser");if(e){var t=JSON.parse(e);y(t),g.setToken(t.token)}}),[]),Object(r.useEffect)((function(){g.getAll().then((function(e){return a(e)}))}),[S]);var K=function(){var e=Object(o.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,x.login({username:d,password:h});case 4:n=e.sent,window.localStorage.setItem("loggedBlogappUser",JSON.stringify(n)),g.setToken(n.token),y(n),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),H({content:e.t0.response.data.error,type:"error"});case 13:f(""),m(""),setTimeout((function(){return H({})}),5e3);case 16:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}(),M=function(){var e=Object(o.a)(s.a.mark((function e(t){var r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,g.create({title:B,author:E,url:L});case 4:r=e.sent,a(n.concat(r)),H({content:"a new blog ".concat(B," by ").concat(S.username," added"),type:"info"}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),H({content:e.t0.response.data.error,type:"error"});case 12:I(""),N(""),z(""),setTimeout((function(){return H({})}),5e3);case 16:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}();return null===S?Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{children:"log in to application"}),Object(l.jsx)(p,{message:G}),Object(l.jsxs)("form",{onSubmit:K,children:[Object(l.jsxs)("div",{children:["username:",Object(l.jsx)("input",{value:d,onChange:function(e){var t=e.target;return f(t.value)}})]}),Object(l.jsxs)("div",{children:["password:",Object(l.jsx)("input",{value:h,onChange:function(e){var t=e.target;return m(t.value)}})]}),Object(l.jsx)("button",{type:"submit",children:"login"})]})]}):Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{children:"blogs"}),Object(l.jsx)(p,{message:G}),Object(l.jsx)(b,{username:S.username,handleLogout:function(){I(""),N(""),z(""),y(null),g.setToken(""),window.localStorage.removeItem("loggedBlogappUser")}}),Object(l.jsx)("br",{}),Object(l.jsx)("h2",{children:"create new"}),Object(l.jsxs)("form",{onSubmit:M,children:[Object(l.jsxs)("div",{children:["title:",Object(l.jsx)("input",{value:B,onChange:function(e){var t=e.target;return I(t.value)}})]}),Object(l.jsxs)("div",{children:["author:",Object(l.jsx)("input",{value:E,onChange:function(e){var t=e.target;return N(t.value)}})]}),Object(l.jsxs)("div",{children:["url:",Object(l.jsx)("input",{value:L,onChange:function(e){var t=e.target;return z(t.value)}})]}),Object(l.jsx)("button",{type:"submit",children:"create"})]}),n.map((function(e){return Object(l.jsx)(j,{blog:e},e.id)}))]})};n(41);c.a.render(Object(l.jsx)(m,{}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.cfc8f76e.chunk.js.map