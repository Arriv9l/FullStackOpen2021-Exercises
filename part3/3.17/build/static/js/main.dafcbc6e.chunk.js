(this.webpackJsonppart1=this.webpackJsonppart1||[]).push([[0],{38:function(e,n,t){},39:function(e,n,t){"use strict";t.r(n);var c=t(1),r=t(14),u=t.n(r),a=t(3),o=t(0),i=function(e){var n=e.value,t=e.onChange;return Object(o.jsxs)("div",{children:["filter shown with",Object(o.jsx)("input",{value:n,onChange:t})]})},s=function(e){var n=e.onSubmit,t=e.nameValue,c=e.onNameChange,r=e.numberValue,u=e.onNumberChange;return Object(o.jsxs)("form",{onSubmit:n,children:[Object(o.jsxs)("div",{children:["name:",Object(o.jsx)("input",{value:t,onChange:c})]}),Object(o.jsxs)("div",{children:["number:",Object(o.jsx)("input",{value:r,onChange:u})]}),Object(o.jsx)("div",{children:Object(o.jsx)("button",{type:"submit",children:"add"})})]})},d=function(e){var n=e.persons,t=e.deletePersonOf;return Object(o.jsx)("div",{children:n.map((function(e){var n=e.id,c=e.name,r=e.number;return Object(o.jsxs)("div",{children:[c," ",r,Object(o.jsx)("button",{onClick:function(){return t(n)},children:"delete"})]},n)}))})},j=function(e){var n=e.message,t=n.content,c=n.type;return t?Object(o.jsx)("div",{className:c,children:t}):null},b=t(4),f=t.n(b),l="/api/persons",h=function(){return f.a.get(l).then((function(e){return e.data}))},m=function(e){return f.a.post(l,e).then((function(e){return e.data}))},O=function(e){return f.a.delete("".concat(l,"/").concat(e)).then((function(e){return e.data}))},v=function(e,n){return f.a.put("".concat(l,"/").concat(e),n).then((function(e){return e.data}))},p=function(){var e=Object(c.useState)([]),n=Object(a.a)(e,2),t=n[0],r=n[1],u=Object(c.useState)(""),b=Object(a.a)(u,2),f=b[0],l=b[1],p=Object(c.useState)(""),x=Object(a.a)(p,2),g=x[0],w=x[1],C=Object(c.useState)(""),y=Object(a.a)(C,2),S=y[0],N=y[1],k=Object(c.useState)({}),V=Object(a.a)(k,2),P=V[0],D=V[1];Object(c.useEffect)((function(){h().then((function(e){return r(e)}))}),[]);var E=""===S?t:t.filter((function(e){return e.name.toLowerCase().includes(S)}));return Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{children:"Phonebook"}),Object(o.jsx)(j,{message:P}),Object(o.jsx)(i,{value:S,onChange:function(e){return N(e.target.value)}}),Object(o.jsx)("h3",{children:"add a new"}),Object(o.jsx)(s,{onSubmit:function(e){e.preventDefault();var n={name:f,number:g},c=t.find((function(e){return e.name===f}));c?window.confirm("".concat(f," is already added to phonebook, replace the old number with a new one?"))&&v(c.id,n).then((function(e){r(t.map((function(n){return n.name===f?e:n}))),D({content:"Updated ".concat(f),type:"success"}),setTimeout((function(){D({})}),5e3)})).catch((function(e){D({content:"Note ".concat(f," was already removed from server"),type:"error"})})):m(n).then((function(e){r(t.concat(e)),D({content:"Added ".concat(f),type:"success"}),setTimeout((function(){D({})}),5e3)})),l(""),w("")},nameValue:f,onNameChange:function(e){return l(e.target.value)},numberValue:g,onNumberChange:function(e){return w(e.target.value)}}),Object(o.jsx)("h3",{children:"Numbers"}),Object(o.jsx)(d,{persons:E,deletePersonOf:function(e){var n=t.find((function(n){return n.id===e}));window.confirm("Delete ".concat(n.name,"?"))&&O(e).then((function(n){r(t.filter((function(n){return n.id!==e})))}))}})]})};t(38);u.a.render(Object(o.jsx)(p,{}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.dafcbc6e.chunk.js.map