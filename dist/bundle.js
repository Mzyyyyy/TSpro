!function(){"use strict";var e,n,t,r,o,i,a,u,c,s,f,d,l,p,v={485:function(e,n,t){t.d(n,{Z:function(){return i}});var r=t(645),o=t.n(r)()((function(e){return e[1]}));o.push([e.id,"body {\n  color: red;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n",""]);const i=o},645:function(e){e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var u=0;u<e.length;u++){var c=[].concat(e[u]);r&&o[c[0]]||(t&&(c[2]?c[2]="".concat(t," and ").concat(c[2]):c[2]=t),n.push(c))}},n}},379:function(e){var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var i={},a=[],u=0;u<e.length;u++){var c=e[u],s=r.base?c[0]+r.base:c[0],f=i[s]||0,d="".concat(s," ").concat(f);i[s]=f+1;var l=t(d),p={css:c[1],media:c[2],sourceMap:c[3]};-1!==l?(n[l].references++,n[l].updater(p)):n.push({identifier:d,updater:o(p,r),references:1}),a.push(d)}return a}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var u=t(i[a]);n[u].references--}for(var c=r(e,o),s=0;s<i.length;s++){var f=t(i[s]);0===n[f].references&&(n[f].updater(),n.splice(f,1))}i=c}}},569:function(e){var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:function(e){e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n),n}},565:function(e,n,t){e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:function(e){e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r=t.css,o=t.media,i=t.sourceMap;o?e.setAttribute("media",o):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(r,e)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:function(e){e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},m={};function h(e){var n=m[e];if(void 0!==n)return n.exports;var t=m[e]={id:e,exports:{}};return v[e](t,t.exports,h),t.exports}h.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return h.d(n,{a:n}),n},h.d=function(e,n){for(var t in n)h.o(n,t)&&!h.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},h.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},e=h(379),n=h.n(e),t=h(795),r=h.n(t),o=h(569),i=h.n(o),a=h(565),u=h.n(a),c=h(216),s=h.n(c),f=h(589),d=h.n(f),l=h(485),(p={}).styleTagTransform=d(),p.setAttributes=u(),p.insert=i().bind(null,"head"),p.domAPI=r(),p.insertStyleElement=s(),n()(l.Z,p),l.Z&&l.Z.locals&&l.Z.locals}();