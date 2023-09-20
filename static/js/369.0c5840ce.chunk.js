"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[369],{3380:function(e,t,n){n.d(t,{Q:function(){return i}});var r=n(5861),a=n(4687),s=n.n(a),c=n(1243),u=n(7596),o=c.Z.create({baseURL:"https://api.themoviedb.org/3",headers:{"Content-Type":"application/json"},params:{api_key:"0eb5e646e9395809eb15661d4afcde1d",language:"en-US"}});function i(e){return p.apply(this,arguments)}function p(){return p=(0,r.Z)(s().mark((function e(t){var n,r,a,c,i,p=arguments;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=p.length>1&&void 0!==p[1]?p[1]:"",r=p.length>2&&void 0!==p[2]?p[2]:0,a=p.length>3&&void 0!==p[3]?p[3]:1,e.prev=3,e.t0=t,e.next="trendingIO"===e.t0?7:"searchIO"===e.t0?11:"detailsIO"===e.t0?15:"castIO"===e.t0?19:"reviewsIO"===e.t0?23:27;break;case 7:return e.next=9,o.get("/trending/movie/day");case 9:return c=e.sent,e.abrupt("break",28);case 11:return e.next=13,o.get("/search/movie",{params:{query:n,include_adult:!1,page:a}});case 13:return c=e.sent,e.abrupt("break",28);case 15:return e.next=17,o.get("/movie/".concat(r));case 17:return c=e.sent,e.abrupt("break",28);case 19:return e.next=21,o.get("/movie/".concat(r,"/credits"));case 21:return c=e.sent,e.abrupt("break",28);case 23:return e.next=25,o.get("/movie/".concat(r,"/reviews"),{params:{page:a}});case 25:return c=e.sent,e.abrupt("break",28);case 27:throw new Error("Invalid operation");case 28:if(200===c.status){e.next=30;break}throw new Error("Request failed with status ".concat(c.status));case 30:return e.abrupt("return",c.data);case 33:e.prev=33,e.t1=e.catch(3),e.t2=e.t1.response?e.t1.response.status:null,e.next=400===e.t2?38:401===e.t2?40:404===e.t2?42:44;break;case 38:return i="Oops! Check/correct your input",e.abrupt("break",45);case 40:return i="Oops! Something went wrong with the API key. Contact the developer.",e.abrupt("break",45);case 42:return i="Oops! Page is not found!",e.abrupt("break",45);case 44:i="Oops! Something went wrong. Please try again later!";case 45:throw u.Am.error(i),e.t1;case 47:case"end":return e.stop()}}),e,null,[[3,33]])}))),p.apply(this,arguments)}},6369:function(e,t,n){n.r(t),n.d(t,{default:function(){return x}});var r,a,s=n(5861),c=n(9439),u=n(4687),o=n.n(u),i=n(2791),p=n(7596),l=n(7689),f=n(168),h=n(82),d=h.ZP.ul(r||(r=(0,f.Z)(["\n  display: flex;\n  gap: 20px;\n  font-size: 26px;\n  align-items: center;\n  flex-wrap: wrap;\n\n  justify-content: flex-start;\n  list-style-type: none;\n"]))),b=h.ZP.blockquote(a||(a=(0,f.Z)(["\n  background: #f9f9f9;\n  border-left: 10px solid #ccc;\n  margin: 1.5em 10px;\n  padding: 0.5em 10px;\n  &::before {\n    font-size: 24px;\n    content: '\"';\n    color: rgba(0, 0, 0, 0.3);\n  }\n  & p {\n    font-size: 24px;\n    font-style: italic;\n  }\n"]))),v=n(3380),g=n(184),x=function(){var e=(0,l.UO)().id,t=(0,i.useState)([]),n=(0,c.Z)(t,2),r=n[0],a=n[1],u=(0,i.useRef)(!0);return(0,i.useEffect)((function(){var t=function(){var t=(0,s.Z)(o().mark((function t(){var n;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,u.current){t.next=3;break}return t.abrupt("return");case 3:return t.next=5,(0,v.Q)("reviewsIO","",e);case 5:n=t.sent,a(n.results),u.current=!1,t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),p.Am.error(t.t0.message);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(){return t.apply(this,arguments)}}();t()}),[e]),(0,g.jsx)(d,{children:r.length?r.map((function(e,t){return(0,g.jsxs)("li",{children:[(0,g.jsx)("h4",{children:e.author}),(0,g.jsx)(b,{children:(0,g.jsx)("p",{children:e.content})})]},"".concat(e.author,"_").concat(t))})):(0,g.jsx)("p",{children:"We have no reviews available."})})}}}]);
//# sourceMappingURL=369.0c5840ce.chunk.js.map