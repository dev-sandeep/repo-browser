(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[5],{43:function(n,e,t){"use strict";var a=t(12),r=t(0),c=t.n(r);function i(){var n=Object(a.a)(["\n    background: #eeeeee;    \n    padding: 10px;\n    padding-left: 3px;\n    font-size: 3em;\n    font-weight: 300;\n    text-transform: capitalize;\n    margin {\n    bottom: 20px;\n    }\n"]);return i=function(){return n},n}var u=t(11).a.div(i());e.a=function(n){return c.a.createElement(u,{className:"main-heading"},n.children)}},44:function(n,e,t){"use strict";t.d(e,"c",(function(){return l})),t.d(e,"a",(function(){return s})),t.d(e,"b",(function(){return m}));var a=t(45),r=t.n(a),c=t(47),i="https://api.github.com/",u=Object(c.setupCache)({maxAge:9e4}),o=r.a.create({adapter:u.adapter}),l=function(n){var e="".concat(i,"users/").concat(n);return new Promise((function(n,t){f(e).then((function(e){var t=e.data;n(t)}),(function(n){t(n)}))}))},m=function(n){var e="".concat(i,"users/").concat(n,"/repos");return new Promise((function(n,t){f(e).then((function(e){var t=e.data;n(t)}),(function(n){t(n)}))}))},s=function(n,e){var t="".concat(i,"repos/").concat(n,"/").concat(e);return new Promise((function(n,e){f(t).then((function(e){var t=e.data;n(t)}),(function(n){e(n)}))}))};function f(n){if(n)return new Promise((function(e,t){o.get(n).then((function(n){e(n)}),(function(n){t(n)}))}));console.error("URL is a mandatory field to make an API call")}},48:function(n,e,t){"use strict";var a=t(12),r=t(0),c=t.n(r),i=t(11);function u(){var n=Object(a.a)(["\n    font-size: 3em;\n    font-weight: 200;\n"]);return u=function(){return n},n}function o(){var n=Object(a.a)(["\n    grid-template-columns: 1fr 1fr;\n    width:400px;\n    display: grid;\n    justify-content: center;\n    padding: 10px;\n    margin-top: 17px;\n\n    & > div{\n        margin: 0 auto;\n        margin-top:15px;\n        margin-bottom: 15px;\n        text-align: center\n    }\n"]);return o=function(){return n},n}var l=i.a.div(o()),m=i.a.div(u());e.a=function(n){var e=n.data;return 0==Object.keys(e).length?null:c.a.createElement("div",{className:"stats"},c.a.createElement(l,null,Object.keys(e).map((function(n){return c.a.createElement("div",null,c.a.createElement(m,null,e[n]||0),c.a.createElement("small",null,n))}))))}},49:function(n,e,t){"use strict";var a=t(12),r=t(0),c=t.n(r);function i(){var n=Object(a.a)(["\n    font-weight: 200;\n    font-size: 1.5em;\n    margin-bottom: 15px;\n"]);return i=function(){return n},n}var u=t(11).a.div(i());e.a=function(n){var e=n.name,t=n.fullName;return t&&0!==t.length?c.a.createElement("div",null,c.a.createElement("div",{className:"title"},e),c.a.createElement(u,null,t)):null}},82:function(n,e,t){"use strict";t.r(e);var a=t(46),r=t(12),c=t(0),i=t.n(c),u=t(44),o=t(48),l=t(49),m=t(43),s=t(79),f=t.n(s);function d(){var n=Object(r.a)(["\n    justify-content: center;\n    display: grid;\n    margin-top: 5%;\n"]);return d=function(){return n},n}var p=t(11).a.div(d());e.default=function(n){var e=n.match.params.repo,t=n.match.params.user,r=i.a.useState({}),s=Object(a.a)(r,2),d=s[0],v=s[1],h=i.a.useState([]),g=Object(a.a)(h,2),E=g[0],b=g[1];return Object(c.useEffect)((function(){Object(u.a)(t,e).then((function(n){v(n),b({Stars:n.stargazers_count,Watch:n.watchers_count,Forks:n.forks,"Open Issues":n.open_issues_count})}))}),[]),i.a.createElement("section",{id:"repo-detail"},i.a.createElement(m.a,null,d.name),i.a.createElement("hr",null),i.a.createElement(p,null,i.a.createElement("div",null),i.a.createElement("div",{className:"details"},i.a.createElement(l.a,{name:"Name",fullName:d.full_name}),i.a.createElement(l.a,{name:"Description",fullName:d.description}),i.a.createElement(l.a,{name:"Github Link",fullName:d.html_url}),i.a.createElement(l.a,{name:"Created On",fullName:i.a.createElement(f.a,{fromNow:!0},d.created_at)}),i.a.createElement(l.a,{name:"Last Update",fullName:i.a.createElement(f.a,{fromNow:!0},d.updated_at)}),i.a.createElement(o.a,{data:E}))))}}}]);
//# sourceMappingURL=5.a104f879.chunk.js.map