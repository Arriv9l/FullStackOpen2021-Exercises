(this.webpackJsonppart1=this.webpackJsonppart1||[]).push([[0],{38:function(e,t,n){"use strict";n.r(t);var c=n(2),r=n(13),s=n.n(r),i=n(3),a=n(14),j=n.n(a),u=n(0),o=function(e){var t=e.country,n=t.name,c=t.capital,r=t.population,s=t.languages,i=t.flag;return Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:n}),Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{children:["capital ",c]}),Object(u.jsxs)("div",{children:["population ",r]})]}),Object(u.jsx)("h3",{children:"languages"}),Object(u.jsx)("ul",{children:s.map((function(e,t){var n=e.name;return Object(u.jsx)("li",{children:n},t)}))}),Object(u.jsx)("img",{src:i,alt:""})]})},l=function(e){var t=e.country,n=e.showCountry;return Object(u.jsxs)("div",{children:[t.name,Object(u.jsx)("button",{onClick:n,children:"show"})]})},d=function(e){var t=e.countries,n=e.selected,c=e.setSelected;return t.length>10?Object(u.jsx)("div",{children:"Too many matches, specify another filter"}):t.length>1?Object(u.jsxs)("div",{children:[t.map((function(e,n){return Object(u.jsx)(l,{country:e,showCountry:function(){return function(e){var n=t.find((function(t){return t.name===e}));c(Object(u.jsx)(o,{country:n}))}(e.name)}},n)})),n]}):1===t.length?Object(u.jsx)(o,{country:t[0]}):Object(u.jsx)("div",{children:"No result"})},b=function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(""),a=Object(i.a)(s,2),o=a[0],l=a[1],b=Object(c.useState)(""),h=Object(i.a)(b,2),O=h[0],x=h[1];return Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{children:"find countries"}),Object(u.jsx)("input",{value:o,onChange:function(e){var t=e.target.value;l(t),x(""),t?j.a.get("https://restcountries.eu/rest/v2/name/".concat(t)).then((function(e){return r(e.data)})):r([])}}),Object(u.jsx)(d,{countries:n,selected:O,setSelected:x})]})};s.a.render(Object(u.jsx)(b,{}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.bf02ed1d.chunk.js.map