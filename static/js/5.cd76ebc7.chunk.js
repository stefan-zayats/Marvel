(this.webpackJsonpmarvel=this.webpackJsonpmarvel||[]).push([[5],{41:function(t,e,n){"use strict";var r=n.p+"static/media/error.42292aa1.gif",c=n(2);e.a=function(){return Object(c.jsx)("img",{style:{display:"block",width:"250px",height:"250px",objectFit:"contain",margin:"0 auto"},src:r,alt:"Error"})}},43:function(t,e,n){"use strict";var r=n(4),c=n.n(r),a=n(7),s=n(5),i=n(0);e.a=function(){var t=function(){var t=Object(i.useState)(!1),e=Object(s.a)(t,2),n=e[0],r=e[1],o=Object(i.useState)(null),u=Object(s.a)(o,2),l=u[0],p=u[1];return{loading:n,request:Object(i.useCallback)(function(){var t=Object(a.a)(c.a.mark((function t(e){var n,a,s,i,o,u=arguments;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=u.length>1&&void 0!==u[1]?u[1]:"GET",a=u.length>2&&void 0!==u[2]?u[2]:null,s=u.length>3&&void 0!==u[3]?u[3]:{"Content-Type":"application/json"},r(!0),t.prev=4,t.next=7,fetch(e,{method:n,body:a,headers:s});case 7:if((i=t.sent).ok){t.next=10;break}throw new Error("Could not fetch ".concat(e,", status: ").concat(i.status));case 10:return t.next=12,i.json();case 12:return o=t.sent,r(!1),t.abrupt("return",o);case 17:throw t.prev=17,t.t0=t.catch(4),r(!1),p(t.t0.message),t.t0;case 22:case"end":return t.stop()}}),t,null,[[4,17]])})));return function(e){return t.apply(this,arguments)}}(),[]),error:l,clearError:Object(i.useCallback)((function(){return p(null)}),[])}}(),e=t.loading,n=t.request,r=t.error,o=t.clearError,u="https://gateway.marvel.com:443/v1/public/",l="apikey=25c8163b746d2306e7d7474905acc656",p=function(){var t=Object(a.a)(c.a.mark((function t(){var e,r,a=arguments;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=a.length>0&&void 0!==a[0]?a[0]:210,t.next=3,n("".concat(u,"characters?limit=9&offset=").concat(e,"&").concat(l));case 3:return r=t.sent,t.abrupt("return",r.data.results.map(f));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),b=function(){var t=Object(a.a)(c.a.mark((function t(e){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n("".concat(u,"characters?name=").concat(e,"&").concat(l));case 2:return r=t.sent,t.abrupt("return",r.data.results.map(f));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),m=function(){var t=Object(a.a)(c.a.mark((function t(e){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n("".concat(u,"characters/").concat(e,"?").concat(l));case 2:return r=t.sent,t.abrupt("return",f(r.data.results[0]));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),d=function(){var t=Object(a.a)(c.a.mark((function t(){var e,r,a=arguments;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=a.length>0&&void 0!==a[0]?a[0]:0,t.next=3,n("".concat(u,"comics?orderBy=issueNumber&limit=8&offset=").concat(e,"&").concat(l));case 3:return r=t.sent,t.abrupt("return",r.data.results.map(h));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),j=function(){var t=Object(a.a)(c.a.mark((function t(e){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n("".concat(u,"comics/").concat(e,"?").concat(l));case 2:return r=t.sent,t.abrupt("return",h(r.data.results[0]));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(t){return{id:t.id,name:t.name,description:t.description?"".concat(t.description.slice(0,210),"..."):"There is no description for this character",thumbnail:t.thumbnail.path+"."+t.thumbnail.extension,homepage:t.urls[0].url,wiki:t.urls[1].url,comics:t.comics.items}},h=function(t){var e;return{id:t.id,title:t.title,description:t.description||"There is no description",pageCount:t.pageCount?"".concat(t.pageCount," pages"):"No information about the number of pages",thumbnail:t.thumbnail.path+"."+t.thumbnail.extension,language:(null===(e=t.textObjects[0])||void 0===e?void 0:e.language)||"en-us",price:t.prices[0].price?"".concat(t.prices[0].price,"$"):"not available"}};return{loading:e,error:r,getAllCharacters:p,getCharacterByName:b,getCharacter:m,clearError:o,getComic:j,getAllComics:d}}},46:function(t,e,n){},47:function(t,e,n){"use strict";n(46);var r=n.p+"static/media/Avengers.4065c8f9.png",c=n.p+"static/media/Avengers_logo.9eaf2193.png",a=n(2);e.a=function(){return Object(a.jsxs)("div",{className:"app__banner",children:[Object(a.jsx)("img",{src:r,alt:"Avengers"}),Object(a.jsxs)("div",{className:"app__banner-text",children:["New comics every week!",Object(a.jsx)("br",{}),"Stay tuned!"]}),Object(a.jsx)("div",{className:"app__banner-text-row",children:"New comics every week! Stay tuned!"}),Object(a.jsx)("img",{className:"app__banner-logo",src:c,alt:"Avengers logo"})]})}},64:function(t,e,n){},74:function(t,e,n){"use strict";n.r(e);var r=n(47),c=n(8),a=n(5),s=n(0),i=n(12),o=n(23),u=n(41),l=n(43),p=(n(64),n(2)),b=function(){var t=Object(s.useState)([]),e=Object(a.a)(t,2),n=e[0],r=e[1],b=Object(s.useState)(!1),m=Object(a.a)(b,2),d=m[0],j=m[1],f=Object(s.useState)(0),h=Object(a.a)(f,2),v=h[0],g=h[1],O=Object(s.useState)(!1),x=Object(a.a)(O,2),w=x[0],_=x[1],y=Object(l.a)(),k=y.loading,N=y.error,C=y.getAllComics;Object(s.useEffect)((function(){S(v,!0)}),[]);var S=function(t,e){j(!e),C(t).then(A)},A=function(t){var e=!1;t.length<8&&(e=!0),r([].concat(Object(c.a)(n),Object(c.a)(t))),j(!1),g((function(t){return t+8})),_((function(t){return e}))};var E=function(t){var e=t.map((function(t,e){return Object(p.jsx)("li",{className:"comics__item",children:Object(p.jsxs)(i.b,{to:"/comics/".concat(t.id),children:[Object(p.jsx)("img",{src:t.thumbnail,alt:t.title,className:"comics__item-img"}),Object(p.jsx)("div",{className:"comics__item-name",children:t.title}),Object(p.jsx)("div",{className:"comics__item-price",children:t.price})]})},e)}));return Object(p.jsx)("ul",{className:"comics__grid",children:e})}(n),T=N?Object(p.jsx)(u.a,{}):null,q=k&&!d?Object(p.jsx)(o.a,{}):null;return Object(p.jsxs)("div",{className:"comics__list",children:[T,q,E,Object(p.jsx)("button",{disabled:d,style:{display:w?"none":"block"},className:"button button__main button__long",onClick:function(){return S(v)},children:Object(p.jsx)("div",{className:"inner",children:"load more"})})]})};e.default=function(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(r.a,{}),Object(p.jsx)(b,{})]})}}}]);
//# sourceMappingURL=5.cd76ebc7.chunk.js.map