!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var r=(c=o,a=btoa(unescape(encodeURIComponent(JSON.stringify(c)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),"/*# ".concat(l," */")),i=o.sources.map((function(e){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(e," */")}));return[n].concat(i).concat([r]).join("\n")}var c,a,l;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,o){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(o)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(r[c]=!0)}for(var a=0;a<e.length;a++){var l=[].concat(e[a]);o&&r[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),t.push(l))}},t}},function(e,t,n){var o=n(2),r=n(3);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var i={insert:"head",singleton:!1};o(r,i);e.exports=r.locals||{}},function(e,t,n){"use strict";var o,r=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},i=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),c=[];function a(e){for(var t=-1,n=0;n<c.length;n++)if(c[n].identifier===e){t=n;break}return t}function l(e,t){for(var n={},o=[],r=0;r<e.length;r++){var i=e[r],l=t.base?i[0]+t.base:i[0],s=n[l]||0,d="".concat(l," ").concat(s);n[l]=s+1;var u=a(d),p={css:i[1],media:i[2],sourceMap:i[3]};-1!==u?(c[u].references++,c[u].updater(p)):c.push({identifier:d,updater:v(p,t),references:1}),o.push(d)}return o}function s(e){var t=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var r=n.nc;r&&(o.nonce=r)}if(Object.keys(o).forEach((function(e){t.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(t);else{var c=i(e.insert||"head");if(!c)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");c.appendChild(t)}return t}var d,u=(d=[],function(e,t){return d[e]=t,d.filter(Boolean).join("\n")});function p(e,t,n,o){var r=n?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=u(t,r);else{var i=document.createTextNode(r),c=e.childNodes;c[t]&&e.removeChild(c[t]),c.length?e.insertBefore(i,c[t]):e.appendChild(i)}}function f(e,t,n){var o=n.css,r=n.media,i=n.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),i&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var m=null,y=0;function v(e,t){var n,o,r;if(t.singleton){var i=y++;n=m||(m=s(t)),o=p.bind(null,n,i,!1),r=p.bind(null,n,i,!0)}else n=s(t),o=f.bind(null,n,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=r());var n=l(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<n.length;o++){var r=a(n[o]);c[r].references--}for(var i=l(e,t),s=0;s<n.length;s++){var d=a(n[s]);0===c[d].references&&(c[d].updater(),c.splice(d,1))}n=i}}}},function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o)()(!1);r.push([e.i,"body{\n    text-transform: lowercase;\n}\na:hover{\n    text-decoration:underline;\n}\n#overlayWrapper{\n    display:none;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(000, 000, 000, 0.5);\n}\n    #overlayBox{\n        display:block;\n        width:300px;\n        height:300px;\n        border:1px solid #000;\n        margin:100px auto;\n        background:#fff;\n        text-align:right;\n    }\n        #cancel{\n            display:inline-block;\n            margin:4px 8px;\n        }\n\n",""]),t.default=r},function(e,t,n){"use strict";function o(e){const t=document.getElementById("tasksWrapper");t.innerHTML="";const n=document.createElement("div");t.appendChild(n),n.setAttribute("id","flexBox"),n.style.display="flex";const i=document.createElement("span");if(t.prepend(i),i.setAttribute("id","newTaskBtn"),i.textContent="add task",i.addEventListener("click",(function(){!function(e){r.forEach(e=>e.tasks=[]);document.getElementById("overlayWrapper").style.display="block"}()})),f(i),e.tasks)for(let t=0;t<=e.tasks.length;t++){const r=document.createElement("div");r.setAttribute("class","task"),n.appendChild(r);let i=document.createElement("span");i.textContent="x",i.addEventListener("click",(function(){e.tasks.splice([t],1),o(e)})),f(i);let c=document.createElement("h4");c.textContent=e.tasks[t].title,r.appendChild(c);let a=document.createElement("p");a.textContent=e.tasks[t].description,r.appendChild(a);let l=document.createElement("span");l.textContent=e.tasks[t].dueDate,r.appendChild(l);let s=document.createElement("span");s.textContent=e.tasks[t].priority,r.appendChild(s)}}n.r(t);let r=[];const i=document.getElementById("projectsAdd"),c=document.getElementById("overlayWrapper"),a=document.getElementById("overlayBox"),l=document.getElementById("projectsArea"),s=document.createElement("div");s.setAttribute("id","newProjectWrapper"),s.style.cssText="text-align:left;";const d=document.createElement("h3");d.textContent="Add A New Project Name",s.appendChild(d);const u=document.createElement("input");u.type="text",u.setAttribute("class","textField"),s.appendChild(u);const p=document.createElement("input");function f(e){e.addEventListener("mouseenter",(function(){e.style.textDecoration="underline",e.style.cursor="pointer"})),e.addEventListener("mouseleave",(function(){e.style.textDecoration="none"}))}function m(){l.innerHTML="";for(let e=0;e<=r.length;e++){const t=document.createElement("div");t.setAttribute("class","projectTab"),t.textContent=r[e].name,t.addEventListener("click",(function(){o(r[e])}));const n=document.createElement("span");n.setAttribute("class","editProject"),n.textContent="edit",n.addEventListener("click",(function(){c.style.display="block",y(r[e])})),f(n),t.appendChild(n);const i=document.createElement("span");return i.setAttribute("class","deleteProject"),i.textContent="delete",i.addEventListener("click",(function(){r.splice([e],1),m()})),f(i),t.appendChild(i),void l.appendChild(t)}}function y(e){const t=document.createElement("div");a.appendChild(t);const n=document.createElement("h3");n.textContent="enter a new project name",t.appendChild(n);const o=document.createElement("input");o.type="text",o.setAttribute("class","textField"),t.appendChild(o);const r=document.createElement("input");r.type="submit",r.setAttribute("class","button"),t.appendChild(r),r.addEventListener("click",(function(){e.name=o.value,t.style.display="none",c.style.display="none",m()}))}p.type="submit",p.value="Add New",p.setAttribute("class","button"),s.appendChild(p),a.appendChild(s),s.style.display="none",p.addEventListener("click",(function(){s.style.display="none",c.style.display="none",r.push({name:u.value}),m()}));n(1);!function(){const e=document.getElementById("titleBar"),t=document.createElement("h1");t.textContent="Todo List",e.appendChild(t);const n=document.getElementById("projectsTitle"),o=document.createElement("h2");o.textContent="Projects",n.appendChild(o);const r=document.getElementById("projectsAdd"),i=document.createElement("span");i.textContent="Add",r.appendChild(i)}(),i.addEventListener("click",(function(){c.style.display="block",s.style.display="block",u.value=""})),f(i),function(){const e=document.getElementById("cancel"),t=document.getElementById("overlayWrapper");e.addEventListener("click",(function(){t.style.display="none"})),f(e)}()}]);