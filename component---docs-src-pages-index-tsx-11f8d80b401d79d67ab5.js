/*! For license information please see component---docs-src-pages-index-tsx-11f8d80b401d79d67ab5.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"6okm":function(e,t,n){},"N/aF":function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),i=n("Wbzz");n("dasq");function o(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(n=e[Symbol.iterator]()).next.bind(n)}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var u=function(e){for(var t,n={},r="?",a=o(new URLSearchParams(e).entries());!(t=a()).done;){var i=t.value,c=i[0],u=i[1];n[c]=u,"tshost"===c&&(r+="tshost="+u+"&"),"origin"===c&&(r+="origin="+u+"&")}return r+="pageid",n.navprefix=r,n},s=function(e,t){var n=e,r=Object.keys(t);if(!e&&0===r.length)return n;return r.map((function(e){n=n.replace(new RegExp("{{"+e+"}}","g"),t[e]||"")})),n},l=(n("YyRi"),function(e){var t=Object(r.useState)(""),n=t[0],i=t[1];return Object(r.useEffect)((function(){var t=document.createElement("div");t.innerHTML=e.docContent;var n=t.querySelector("#toc");i(n?n.innerHTML:"")}),[e.docContent]),""!==n&&a.a.createElement("div",{className:"docmapLinks"},a.a.createElement("p",{className:"tocTitle"},"On this page"),a.a.createElement("div",{dangerouslySetInnerHTML:{__html:n}}))}),f=(n("vAwT"),function(e){return a.a.createElement("div",{className:"documentWrapper"},a.a.createElement("div",{id:e.docTitle,dangerouslySetInnerHTML:{__html:e.docContent}}))}),m=(n("esLb"),n("tDWS")),d=n.n(m),h=(n("l8sT"),function(e){return a.a.createElement("div",{className:"backButtonWrapper"},a.a.createElement("button",null,a.a.createElement("a",{href:e.spotDevHomeLink,target:"_parent"},a.a.createElement("img",{src:d.a,alt:"BackButton"}))),a.a.createElement("p",null,e.title))}),p=function(e){return a.a.createElement("aside",null,e.spotDevHomeLink&&a.a.createElement(h,{title:"SpotDev Home",spotDevHomeLink:e.spotDevHomeLink}),a.a.createElement("nav",null,a.a.createElement("h2",{className:"heading"},e.navTitle),a.a.createElement("div",{className:"navWrapper",dangerouslySetInnerHTML:{__html:e.navContent}})))};n("6okm"),t.default=function(e){var t,n=e.location,o=Object(r.useState)(((t={}).tshost="",t.origin="",t.pageid="",t.navprefix="",t)),c=o[0],m=o[1],d=Object(r.useState)(""),h=d[0],g=d[1],v=Object(r.useState)(""),y=v[0],S=v[1],b=Object(r.useState)(""),E=b[0],j=b[1],I=Object(r.useState)(""),M=I[0],O=I[1],_=Object(r.useState)(""),T=_[0],L=_[1];Object(r.useEffect)((function(){m(u(n.search))}),[]),Object(r.useEffect)((function(){var e=w.findIndex((function(e){return"nav"===e.node.pageAttributes.pageid}));if(j(w[e].node.pageAttributes.title),O(s(w[e].node.html,c)),L(c.origin),c.pageid){var t=w.findIndex((function(e){return e.node.pageAttributes.pageid===c.pageid}));t>-1?(g(w[t].node.document.title||w[t].node.pageAttributes.title),S(s(w[t].node.html,c))):Object(i.navigate)("/404")}}),[c]);var w=Object(i.useStaticQuery)("1706037407").allAsciidoc.edges;return a.a.createElement(a.a.Fragment,null,a.a.createElement("main",null,a.a.createElement(p,{navTitle:E,navContent:M,spotDevHomeLink:T}),a.a.createElement("div",{className:"documentBody"},a.a.createElement("div",{className:"introWrapper"},a.a.createElement(f,{docTitle:h,docContent:y}),a.a.createElement(l,{docContent:y})))))}},YyRi:function(e,t,n){},dasq:function(e,t,n){(function(e){!function(e){"use strict";var t,n=function(){try{if(e.URLSearchParams&&"bar"===new e.URLSearchParams("foo=bar").get("foo"))return e.URLSearchParams}catch(t){}return null}(),r=n&&"a=1"===new n({a:1}).toString(),a=n&&"+"===new n("s=%2B").get("s"),i=!n||((t=new n).append("s"," &"),"s=+%26"===t.toString()),o=l.prototype,c=!(!e.Symbol||!e.Symbol.iterator);if(!(n&&r&&a&&i)){o.append=function(e,t){p(this.__URLSearchParams__,e,t)},o.delete=function(e){delete this.__URLSearchParams__[e]},o.get=function(e){var t=this.__URLSearchParams__;return this.has(e)?t[e][0]:null},o.getAll=function(e){var t=this.__URLSearchParams__;return this.has(e)?t[e].slice(0):[]},o.has=function(e){return v(this.__URLSearchParams__,e)},o.set=function(e,t){this.__URLSearchParams__[e]=[""+t]},o.toString=function(){var e,t,n,r,a=this.__URLSearchParams__,i=[];for(t in a)for(n=f(t),e=0,r=a[t];e<r.length;e++)i.push(n+"="+f(r[e]));return i.join("&")};var u=!!a&&n&&!r&&e.Proxy;Object.defineProperty(e,"URLSearchParams",{value:u?new Proxy(n,{construct:function(e,t){return new e(new l(t[0]).toString())}}):l});var s=e.URLSearchParams.prototype;s.polyfill=!0,s.forEach=s.forEach||function(e,t){var n=h(this.toString());Object.getOwnPropertyNames(n).forEach((function(r){n[r].forEach((function(n){e.call(t,n,r,this)}),this)}),this)},s.sort=s.sort||function(){var e,t,n,r=h(this.toString()),a=[];for(e in r)a.push(e);for(a.sort(),t=0;t<a.length;t++)this.delete(a[t]);for(t=0;t<a.length;t++){var i=a[t],o=r[i];for(n=0;n<o.length;n++)this.append(i,o[n])}},s.keys=s.keys||function(){var e=[];return this.forEach((function(t,n){e.push(n)})),d(e)},s.values=s.values||function(){var e=[];return this.forEach((function(t){e.push(t)})),d(e)},s.entries=s.entries||function(){var e=[];return this.forEach((function(t,n){e.push([n,t])})),d(e)},c&&(s[e.Symbol.iterator]=s[e.Symbol.iterator]||s.entries)}function l(e){((e=e||"")instanceof URLSearchParams||e instanceof l)&&(e=e.toString()),this.__URLSearchParams__=h(e)}function f(e){var t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'\(\)~]|%20|%00/g,(function(e){return t[e]}))}function m(e){return e.replace(/[ +]/g,"%20").replace(/(%[a-f0-9]{2})+/gi,(function(e){return decodeURIComponent(e)}))}function d(t){var n={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return c&&(n[e.Symbol.iterator]=function(){return n}),n}function h(e){var t={};if("object"==typeof e)if(g(e))for(var n=0;n<e.length;n++){var r=e[n];if(!g(r)||2!==r.length)throw new TypeError("Failed to construct 'URLSearchParams': Sequence initializer must only contain pair elements");p(t,r[0],r[1])}else for(var a in e)e.hasOwnProperty(a)&&p(t,a,e[a]);else{0===e.indexOf("?")&&(e=e.slice(1));for(var i=e.split("&"),o=0;o<i.length;o++){var c=i[o],u=c.indexOf("=");-1<u?p(t,m(c.slice(0,u)),m(c.slice(u+1))):c&&p(t,m(c),"")}}return t}function p(e,t,n){var r="string"==typeof n?n:null!=n&&"function"==typeof n.toString?n.toString():JSON.stringify(n);v(e,t)?e[t].push(r):e[t]=[r]}function g(e){return!!e&&"[object Array]"===Object.prototype.toString.call(e)}function v(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(void 0!==e?e:"undefined"!=typeof window?window:this)}).call(this,n("yLpj"))},esLb:function(e,t,n){},l8sT:function(e,t,n){},tDWS:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxjaXJjbGUgY3g9IjE2IiBjeT0iMTYiIHI9IjE2IiBmaWxsPSIjRUFFREYyIi8+DQo8cGF0aCBkPSJNMjMuOTkyMiAxNi45OTI5VjE0Ljk5MjlIMTEuODI3N0wxNS4xMTM1IDExLjcwNzFMMTMuNjk5MyAxMC4yOTI5TDguOTk5MjggMTQuOTkyOUg4Ljk5MjJWMTVMNy45OTIxOSAxNkwxMy42OTkzIDIxLjcwNzFMMTUuMTEzNSAyMC4yOTI5TDExLjgxMzUgMTYuOTkyOUgyMy45OTIyWiIgZmlsbD0iIzFEMjMyRiIvPg0KPC9zdmc+DQo="},vAwT:function(e,t,n){}}]);
//# sourceMappingURL=component---docs-src-pages-index-tsx-11f8d80b401d79d67ab5.js.map