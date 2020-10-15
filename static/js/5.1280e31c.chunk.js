(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[5],{43:function(n,e,t){"use strict";t.d(e,"a",(function(){return o}));var a=t(10),r=t(0),i=t.n(r);function c(){var n=Object(a.a)(["\n    background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);\n    background-size: 400% 400%;\n    height: 80vh;\n    color: #fff;\n    font-size: 3em;\n    font-weight: 200;\n    text-align: center;\n    animation: gradient 15s ease infinite;\n    margin-top:10px;\n    & div{\n        text-align: center;\n        font-weight: 200;\n        position: relative;\n        top: 34%;\n        margin-top: 10px;\n    }\n\n    @keyframes gradient {\n    0% {\n        background-position: 0% 50%;\n    }\n    50% {\n        background-position: 100% 50%;\n    }\n    100% {\n        background-position: 0% 50%;\n    }\n\n    display: ",";\n"]);return c=function(){return n},n}var o=t(11).a.div(c(),(function(n){return n.visible?"block":"none"}));e.b=function(n){return n.isLoading?i.a.createElement(o,{visible:n.isLoading},i.a.createElement("div",null,"Loading...")):i.a.createElement(i.a.Fragment,null,n.children)}},44:function(n,e,t){"use strict";var a=t(10),r=t(0),i=t.n(r);function c(){var n=Object(a.a)(["\n    padding: 10px;\n    padding-left: 3px;\n    font-size: 3em;\n    font-weight: 300;\n    text-transform: capitalize;\n    color: #ffff;\n    font-weight: 700;\n    font-size: 4em;\n    margin {\n    bottom: 20px;\n    }\n"]);return c=function(){return n},n}var o=t(11).a.div(c());e.a=function(n){return i.a.createElement(o,{className:"main-heading"},n.children)}},45:function(n,e,t){"use strict";t.d(e,"c",(function(){return l})),t.d(e,"a",(function(){return m})),t.d(e,"b",(function(){return f}));var a=t(46),r=t.n(a),i=t(48),c="https://api.github.com/",o=Object(i.setupCache)({maxAge:9e4}),u=r.a.create({adapter:o.adapter}),l=function(n){var e="".concat(c,"users/").concat(n);return new Promise((function(n,t){s(e).then((function(e){var t=e.data;n(t)}),(function(n){t(n)}))}))},f=function(n){var e="".concat(c,"users/").concat(n,"/repos");return new Promise((function(n,t){s(e).then((function(e){var t=e.data;n(t)}),(function(n){t(n)}))}))},m=function(n,e){var t="".concat(c,"repos/").concat(n,"/").concat(e);return new Promise((function(n,e){s(t).then((function(e){var t=e.data;n(t)}),(function(n){e(n)}))}))};function s(n){if(n)return new Promise((function(e,t){u.get(n).then((function(n){e(n)}),(function(n){t(n)}))}));console.error("URL is a mandatory field to make an API call")}},49:function(n,e,t){"use strict";var a=t(10),r=t(0),i=t.n(r),c=t(11);function o(){var n=Object(a.a)(["\n    font-size: 3em;\n    font-weight: 200;\n"]);return o=function(){return n},n}function u(){var n=Object(a.a)(["\n    grid-template-columns: 1fr 1fr;\n    width:400px;\n    display: grid;\n    justify-content: center;\n    padding: 10px;\n    margin-top: 17px;\n\n    & > div{\n        margin: 0 auto;\n        margin-top:15px;\n        margin-bottom: 15px;\n        text-align: center\n    }\n"]);return u=function(){return n},n}var l=c.a.div(u()),f=c.a.div(o());e.a=function(n){var e=n.data;return 0===Object.keys(e).length?null:i.a.createElement("div",{className:"stats"},i.a.createElement(l,null,Object.keys(e).map((function(n){return i.a.createElement("div",null,i.a.createElement(f,null,e[n]||0),i.a.createElement("small",null,n))}))))}},50:function(n,e,t){"use strict";var a=t(10),r=t(0),i=t.n(r),c=t(11);function o(){var n=Object(a.a)(["\n    font-size: ",";\n    line-height: ",";\n    color: #ffc22e;\n    font-weight: 500;\n    margin-bottom: 15px;\n\n    font-size: 1.5em;\n    line-height: 1em;\n\n    & a{\n        text-decoration: none;\n        color: #ffc22e;\n    }\n"]);return o=function(){return n},n}function u(){var n=Object(a.a)(["\n    color: #fff;\n"]);return u=function(){return n},n}var l=c.a.div(u()),f=c.a.div(o(),(function(n){return n.isDetailed?"1.5em":"2.5em !important"}),(function(n){return n.isDetailed?"1em":"40px"}));e.a=function(n){var e=n.link,t=n.name,a=n.fullName,r=n.fromDetail;return a&&0!==a.length?i.a.createElement("div",null,i.a.createElement(l,{className:"title"},t),i.a.createElement(f,{isDetailed:r||!1},e?i.a.createElement("a",{href:e},a):i.a.createElement(i.a.Fragment,null,a))):null}},83:function(n,e,t){"use strict";t.r(e);var a=t(47),r=t(10),i=t(0),c=t.n(i),o=t(45),u=t(49),l=t(43),f=t(50),m=t(44),s=t(80),d=t.n(s);function p(){var n=Object(r.a)(["\n    justify-content: center;\n    display: grid;\n    margin-top: 5%;\n"]);return p=function(){return n},n}var g=t(11).a.div(p());e.default=function(n){var e=n.match.params.repo,t=n.match.params.user,r=c.a.useState({}),s=Object(a.a)(r,2),p=s[0],v=s[1],h=c.a.useState(!1),b=Object(a.a)(h,2),E=b[0],x=b[1],j=c.a.useState([]),k=Object(a.a)(j,2),O=k[0],w=k[1];return Object(i.useEffect)((function(){x(!0),Object(o.a)(t,e).then((function(n){v(n),w({Stars:n.stargazers_count,Watch:n.watchers_count,Forks:n.forks,"Open Issues":n.open_issues_count}),x(!1)}),(function(n){console.error(n),x(!1)}))}),[t,e]),c.a.createElement("section",{id:"repo-detail"},c.a.createElement(m.a,null,p.name),c.a.createElement("hr",null),c.a.createElement(l.b,{isLoading:E},c.a.createElement(g,null,c.a.createElement("div",null),c.a.createElement("div",{className:"details"},c.a.createElement(f.a,{fromDetail:!0,name:"Name",fullName:p.full_name}),c.a.createElement(f.a,{fromDetail:!0,name:"Github Link",link:p.html_url,fullName:p.html_url}),c.a.createElement(f.a,{fromDetail:!0,name:"Created On",fullName:c.a.createElement(d.a,{fromNow:!0},p.created_at)}),c.a.createElement(f.a,{fromDetail:!0,name:"Last Update",fullName:c.a.createElement(d.a,{fromNow:!0},p.updated_at)}),c.a.createElement(u.a,{data:O})))))}}}]);
//# sourceMappingURL=5.1280e31c.chunk.js.map