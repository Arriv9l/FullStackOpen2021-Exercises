(this.webpackJsonppart1=this.webpackJsonppart1||[]).push([[0],{38:function(e,n,t){"use strict";t.r(n);var r=t(2),c=t(14),u=t.n(c),a=t(4),o=t(0),i=function(e){var n=e.value,t=e.onChange;return Object(o.jsxs)("div",{children:["filter shown with",Object(o.jsx)("input",{value:n,onChange:t})]})},s=function(e){var n=e.onSubmit,t=e.nameValue,r=e.onNameChange,c=e.numberValue,u=e.onNumberChange;return Object(o.jsxs)("form",{onSubmit:n,children:[Object(o.jsxs)("div",{children:["name:",Object(o.jsx)("input",{value:t,onChange:r})]}),Object(o.jsxs)("div",{children:["number:",Object(o.jsx)("input",{value:c,onChange:u})]}),Object(o.jsx)("div",{children:Object(o.jsx)("button",{type:"submit",children:"add"})})]})},d=function(e){var n=e.persons,t=e.deletePersonOf;return Object(o.jsx)("div",{children:n.map((function(e){var n=e.id,r=e.name,c=e.number;return Object(o.jsxs)("div",{children:[r," ",c,Object(o.jsx)("button",{onClick:function(){return t(n)},children:"delete"})]},n)}))})},j=t(3),b=t.n(j),l="http://localhost:3001/persons",h={getAll:function(){return b.a.get(l).then((function(e){return e.data}))},create:function(e){return b.a.post(l,e).then((function(e){return e.data}))},_delete:function(e){return b.a.delete("".concat(l,"/").concat(e)).then((function(e){return e.data}))},update:function(e,n){return b.a.put("".concat(l,"/").concat(e),n).then((function(e){return e.data}))}},f=function(){var e=Object(r.useState)([]),n=Object(a.a)(e,2),t=n[0],c=n[1],u=Object(r.useState)(""),j=Object(a.a)(u,2),b=j[0],l=j[1],f=Object(r.useState)(""),m=Object(a.a)(f,2),O=m[0],v=m[1],p=Object(r.useState)(""),x=Object(a.a)(p,2),g=x[0],w=x[1];Object(r.useEffect)((function(){h.getAll().then((function(e){return c(e)}))}),[]);var C=""===g?t:t.filter((function(e){return e.name.toLowerCase().includes(g)}));return Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{children:"Phonebook"}),Object(o.jsx)(i,{value:g,onChange:function(e){return w(e.target.value)}}),Object(o.jsx)("h3",{children:"add a new"}),Object(o.jsx)(s,{onSubmit:function(e){e.preventDefault();var n={name:b,number:O},r=t.find((function(e){return e.name===b}));r?window.confirm("".concat(b," is already added to phonebook, replace the old number with a new one?"))&&h.update(r.id,n).then((function(e){c(t.map((function(n){return n.name===b?e:n})))})):h.create(n).then((function(e){c(t.concat(e))})),l(""),v("")},nameValue:b,onNameChange:function(e){return l(e.target.value)},numberValue:O,onNumberChange:function(e){return v(e.target.value)}}),Object(o.jsx)("h3",{children:"Numbers"}),Object(o.jsx)(d,{persons:C,deletePersonOf:function(e){var n=t.find((function(n){return n.id===e}));window.confirm("Delete ".concat(n.name,"?"))&&h._delete(e).then((function(n){c(t.filter((function(n){return n.id!==e})))}))}})]})};u.a.render(Object(o.jsx)(f,{}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.1867dab6.chunk.js.map