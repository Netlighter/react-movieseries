(this.webpackJsonpmovies=this.webpackJsonpmovies||[]).push([[0],{10:function(e,t,c){},12:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),s=c(4),i=c.n(s),r=(c(10),c(0));function j(){return Object(r.jsx)("footer",{className:"page-footer pink darken-3",children:Object(r.jsx)("div",{className:"footer-copyright",children:Object(r.jsxs)("div",{className:"container",children:["\xa9 ",(new Date).getFullYear()," Copyright Netlighter (with materialize UI)",Object(r.jsx)("a",{className:"grey-text text-lighten-4 right",href:"#!",children:"Github"})]})})})}function o(){return Object(r.jsx)("nav",{className:"pink darken-3",children:Object(r.jsxs)("div",{className:"nav-wrapper",children:[Object(r.jsx)("a",{href:"#",className:"brand-logo center",children:"MovieSeries"}),Object(r.jsx)("ul",{id:"nav-mobile",className:"left hide-on-med-and-down",children:Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:"https://github.com/Netlighter",children:"Github"})})})]})})}var l=c(2),d=c(5);function h(e){var t=e.Title,c=e.Year,n=e.imdbID,a=e.Type,s=e.Poster;return Object(r.jsxs)("div",{id:n,className:"card movie",children:[Object(r.jsx)("div",{className:"card-image",children:"N/A"!==s?Object(r.jsx)("img",{src:s}):Object(r.jsx)("img",{src:"https://dummyimage.com/450x600/fff/5ab099/&text=".concat(t)})}),Object(r.jsxs)("div",{className:"card-content",children:[Object(r.jsx)("span",{className:"card-title cardstyle",children:t}),Object(r.jsxs)("p",{children:[c," ",Object(r.jsx)("span",{className:"right",children:a})]})]})]})}function b(e){var t=e.movies,c=void 0===t?[]:t;return Object(r.jsx)("div",{className:"movies",children:c.length?c.map((function(e){return Object(r.jsx)(h,Object(d.a)({},e),e.imdbID)})):Object(r.jsx)("h5",{style:{color:"gray"},children:"Nothing found"})})}function u(){return Object(r.jsx)("div",{className:"progress",children:Object(r.jsx)("div",{className:"indeterminate"})})}var m=function(e){var t=e.searchMovies,c=void 0===t?Function.prototype:t,a=Object(n.useState)(""),s=Object(l.a)(a,2),i=s[0],j=s[1],o=Object(n.useState)("all"),d=Object(l.a)(o,2),h=d[0],b=d[1],u=function(e){b(e.target.dataset.type),c(i,e.target.dataset.type)};return Object(r.jsxs)("div",{className:"row",children:[Object(r.jsxs)("div",{className:"input-field col s12",children:[Object(r.jsx)("input",{placeholder:"Search...",type:"search",className:"validate",value:i,onChange:function(e){return j(e.target.value)},onKeyPress:function(e){return function(e){"Enter"===e.key&&c(i,h)}(e)}}),Object(r.jsx)("button",{class:"btn-flat search-btn",onClick:function(e){c(i,h)},children:"FIND"})]}),Object(r.jsxs)("label",{children:[Object(r.jsx)("input",{name:"type",type:"radio","data-type":"all",onChange:u,checked:"all"===h}),Object(r.jsx)("span",{children:"All Types"})]}),Object(r.jsxs)("label",{children:[Object(r.jsx)("input",{name:"type",type:"radio","data-type":"movie",onChange:u,checked:"movie"===h}),Object(r.jsx)("span",{children:"Movies"})]}),Object(r.jsxs)("label",{children:[Object(r.jsx)("input",{name:"type",type:"radio","data-type":"series",onChange:u,checked:"series"===h}),Object(r.jsx)("span",{children:"Series"})]}),Object(r.jsxs)("label",{children:[Object(r.jsx)("input",{name:"type",type:"radio","data-type":"game",onChange:u,checked:"game"===h}),Object(r.jsx)("span",{children:"Games"})]})]})},O="a9b2a1d6";function p(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(!0),i=Object(l.a)(s,2),j=i[0],o=i[1];return Object(n.useEffect)((function(){fetch("https://www.omdbapi.com/?apikey=".concat(O,"&s=matrix")).then((function(e){return e.json()})).then((function(e){a(e.Search),o(!1)})).catch((function(e){console.error(e),o(!1)}))}),[]),Object(r.jsxs)("main",{className:"container content",children:[Object(r.jsx)(m,{searchMovies:function(e,t){o(!0),fetch("https://www.omdbapi.com/?apikey=".concat(O,"&s=").concat(e).concat("all"!==t?"&type=".concat(t):"")).then((function(e){return e.json()})).then((function(e){a(e.Search),o(!1)})).catch((function(e){console.error(e),o(!1)}))}}),j?Object(r.jsx)(u,{}):Object(r.jsx)(b,{movies:c})]})}var x=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(o,{}),Object(r.jsx)(p,{}),Object(r.jsx)(j,{})]})};i.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(x,{})}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.504c2071.chunk.js.map