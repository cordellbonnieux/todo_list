!function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var i=(a=o,c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),d="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(d," */")),r=o.sources.map((function(e){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(e," */")}));return[n].concat(r).concat([i]).join("\n")}var a,c,d;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,o){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(o)for(var r=0;r<this.length;r++){var a=this[r][0];null!=a&&(i[a]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);o&&i[d[0]]||(n&&(d[2]?d[2]="".concat(n," and ").concat(d[2]):d[2]=n),t.push(d))}},t}},function(e,t,n){var o=n(2),i=n(3);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var r={insert:"head",singleton:!1};o(i,r);e.exports=i.locals||{}},function(e,t,n){"use strict";var o,i=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},r=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a=[];function c(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function d(e,t){for(var n={},o=[],i=0;i<e.length;i++){var r=e[i],d=t.base?r[0]+t.base:r[0],l=n[d]||0,s="".concat(d," ").concat(l);n[d]=l+1;var p=c(s),u={css:r[1],media:r[2],sourceMap:r[3]};-1!==p?(a[p].references++,a[p].updater(u)):a.push({identifier:s,updater:h(u,t),references:1}),o.push(s)}return o}function l(e){var t=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var i=n.nc;i&&(o.nonce=i)}if(Object.keys(o).forEach((function(e){t.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(t);else{var a=r(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var s,p=(s=[],function(e,t){return s[e]=t,s.filter(Boolean).join("\n")});function u(e,t,n,o){var i=n?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=p(t,i);else{var r=document.createTextNode(i),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(r,a[t]):e.appendChild(r)}}function m(e,t,n){var o=n.css,i=n.media,r=n.sourceMap;if(i?e.setAttribute("media",i):e.removeAttribute("media"),r&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var f=null,y=0;function h(e,t){var n,o,i;if(t.singleton){var r=y++;n=f||(f=l(t)),o=u.bind(null,n,r,!1),i=u.bind(null,n,r,!0)}else n=l(t),o=m.bind(null,n,t),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else i()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=i());var n=d(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<n.length;o++){var i=c(n[o]);a[i].references--}for(var r=d(e,t),l=0;l<n.length;l++){var s=c(n[l]);0===a[s].references&&(a[s].updater(),a.splice(s,1))}n=r}}}},function(e,t,n){"use strict";n.r(t);var o=n(0),i=n.n(o)()(!1);i.push([e.i,"body{\n    text-transform: lowercase;\n    background-color:#F6F5F4;\n    color:#06080E;\n}\na{\n    transition:0.2s;\n}\na:hover{\n    text-decoration:underline;\n    color:#DB2B39;\n}\n#overlayWrapper{\n    display:none;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(000, 000, 000, 0.5);\n}\n    #overlayInner{\n        display:block;\n        max-width:330px;\n        border:1px solid #000;\n        margin:100px auto;\n        background:#fff;\n        text-align:right;\n    }\n        #cancel{\n            display:inline-block;\n            margin:4px 8px;\n        }\n/* projects area */\n#projectTitleWrapper{\n\n}\n    #projectsTitleWrapper div{\n        display:inline-block;\n        margin-right:10px;\n    }\n#projects{\n    padding:0 16px;\n}\n    #projects #projectsArea{\n        display:flex;\n        flex-wrap:wrap;\n    }\n\n            #projects #projectArea .projectTab span{\n                margin:0 3px;\n            }",""]),t.default=i},function(e,t,n){"use strict";function o(e){const t=document.getElementById("tasksWrapper");t.innerHTML="";const n=document.createElement("div");t.appendChild(n),n.setAttribute("id","flexBox"),n.style.cssText="display:flex; flex-wrap:wrap;";const r=document.createElement("span");t.prepend(r),r.setAttribute("id","newTaskBtn"),r.textContent="add task",r.addEventListener("click",(function(){!function(e){const t=document.getElementById("overlayWrapper");t.style.display="block";const n=document.getElementById("overlayBox"),i=document.createElement("div");i.setAttribute("id","newTaskWrapper"),n.appendChild(i);const r=document.createElement("h3");r.textContent="create a new task",i.appendChild(r);const a=document.createElement("label");a.for="taskTitle",a.textContent="task name",i.appendChild(a);const c=document.createElement("input");c.type="text",c.setAttribute("id","taskTitle"),i.appendChild(c);const d=document.createElement("label");d.for="taskDescription",d.textContent="description of task",i.appendChild(d);const l=document.createElement("input");l.type="textarea",l.setAttribute("id","taskDescription"),i.appendChild(l);const s=document.createElement("label");s.for="taskDueDate",s.textContent="task due date",i.appendChild(s);const p=document.createElement("input");p.setAttribute("id","taskDueDate"),p.type="date",i.appendChild(p);const u=document.createElement("p");u.textContent="task priority",i.appendChild(u);const m=document.createElement("input");m.type="radio",m.setAttribute("id","taskPriorityLow"),m.value="low",m.name="priority",i.appendChild(m);const f=document.createElement("input");f.type="radio",f.setAttribute("id","taskPriorityMedium"),f.value="medium",f.name="priority",i.appendChild(f);const y=document.createElement("input");y.type="radio",y.setAttribute("id","taskPriorityHigh"),y.value="high",y.name="priority",i.appendChild(y);const h=document.createElement("input");h.type="submit",i.appendChild(h),h.addEventListener("click",(function(){let i="";m.checked?i="low":f.checked?i="medium":y.checked?i="high":console.log("no priority selected!");let r=(a=c.value,d=l.value,s=p.value,{title:a,description:d,dueDate:s,priority:i});var a,d,s;e.tasks.push(r),o(e),n.innerHTML="",t.style.display="none"}))}(e)})),s(r);const a=document.createElement("h3");if(t.prepend(a),a.textContent=e.name+"'s tasks",a.style.display="inline-block",e.tasks)for(let t=0;t<e.tasks.length;t++){const r=document.createElement("div");r.setAttribute("class","task"),n.appendChild(r);let a=document.createElement("h4");a.textContent=e.tasks[t].title,r.appendChild(a);let c=document.createElement("p");c.textContent=e.tasks[t].description,r.appendChild(c);let d=document.createElement("span");d.textContent=e.tasks[t].dueDate,r.appendChild(d);let l=document.createElement("span");l.textContent=e.tasks[t].priority,r.appendChild(l);let p=document.createElement("span");p.textContent="edit",p.addEventListener("click",(function(){i(e.tasks[t],e),o(e)})),s(p),r.appendChild(p);let u=document.createElement("span");u.textContent="delete",u.addEventListener("click",(function(){e.tasks.splice([t],1),o(e)})),s(u),r.appendChild(u)}}function i(e,t){const n=document.getElementById("overlayWrapper");n.style.display="block";const i=document.getElementById("overlayBox"),r=document.createElement("div");r.setAttribute("id","newTaskWrapper"),i.appendChild(r);const a=document.createElement("h3");a.textContent="edit "+e.title,r.appendChild(a);const c=document.createElement("label");c.for="taskTitle",c.textContent="task name",r.appendChild(c);const d=document.createElement("input");d.type="text",d.setAttribute("id","taskTitle"),r.appendChild(d);const l=document.createElement("label");l.for="taskDescription",l.textContent="description of task",r.appendChild(l);const s=document.createElement("input");s.type="textarea",s.setAttribute("id","taskDescription"),r.appendChild(s);const p=document.createElement("label");p.for="taskDueDate",p.textContent="task due date",r.appendChild(p);const u=document.createElement("input");u.setAttribute("id","taskDueDate"),u.type="date",r.appendChild(u);const m=document.createElement("p");m.textContent="task priority",r.appendChild(m);const f=document.createElement("input");f.type="radio",f.setAttribute("id","taskPriorityLow"),f.value="low",f.name="priority",r.appendChild(f);const y=document.createElement("input");y.type="radio",y.setAttribute("id","taskPriorityMedium"),y.value="medium",y.name="priority",r.appendChild(y);const h=document.createElement("input");h.type="radio",h.setAttribute("id","taskPriorityHigh"),h.value="high",h.name="priority",r.appendChild(h);const v=document.createElement("input");v.type="submit",r.appendChild(v),v.addEventListener("click",(function(){let r="";f.checked?r="low":y.checked?r="medium":h.checked?r="high":console.log("no priority selected!"),e.title=d.value,e.description=s.value,e.dueDate=u.value,e.priority=r,o(t),i.innerHTML="",n.style.display="none"}))}n.r(t);const r=[],a=document.getElementById("projectsAdd"),c=document.getElementById("overlayWrapper"),d=document.getElementById("overlayBox"),l=document.getElementById("projectsArea");function s(e){e.addEventListener("mouseenter",(function(){e.style.textDecoration="underline",e.style.cursor="pointer",e.style.color="#DB2B39"})),e.addEventListener("mouseleave",(function(){e.style.textDecoration="none",e.style.color="#06080E"}))}function p(){l.innerHTML="";for(let e=0;e<r.length;e++){const t=document.createElement("div");l.appendChild(t),t.setAttribute("class","projectTab"),t.style.cssText="padding:10px; background-color:#fff; box-shadow:4px 4px; margin:10px;";let n=document.createElement("div");t.appendChild(n),n.setAttribute("class","projectTitleWrapper"),n.style.cssText="display:inline-block; margin-right:20px";let i=document.createElement("h3");n.appendChild(i),i.textContent=r[e].name,i.style.cssText="margin:0 0 0 4px; font-size:16px;",i.addEventListener("click",(function(){o(r[e])})),s(i);let a=document.createElement("div");t.appendChild(a),a.setAttribute("class","editDeleteProjectWrapper"),a.style.cssText="display:inline-block; font-size:10px;";const d=document.createElement("span");a.appendChild(d),d.setAttribute("class","editProject"),d.textContent="edit",d.style.margin="0 3px",d.addEventListener("click",(function(){c.style.display="block",u(r[e])})),s(d);const m=document.createElement("span");a.appendChild(m),m.setAttribute("class","deleteProject"),m.textContent="delete",m.style.margin="0 3px",m.addEventListener("click",(function(){r.splice([e],1),p()})),s(m)}}function u(e){const t=document.createElement("div");t.setAttribute("id","editProjectWrapper"),d.appendChild(t);const n=document.createElement("h3");n.textContent="enter a new project name",t.appendChild(n);const o=document.createElement("input");o.type="text",o.setAttribute("class","textField"),t.appendChild(o);const i=document.createElement("input");i.type="submit",i.setAttribute("class","button"),t.appendChild(i),i.addEventListener("click",(function(){e.name=o.value,d.innerHTML="",c.style.display="none",p()}))}const m=document.getElementById("cancel"),f=document.getElementById("overlayWrapper"),y=document.getElementById("overlayBox");document.getElementById("newTaskWrapper"),document.getElementById("newProjectWrapper"),document.getElementById("editProjectWrapper");n(1);!function(){const e=document.getElementById("titleBar"),t=document.createElement("h1");t.textContent="Todo List",e.appendChild(t);const n=document.getElementById("projectsTitle"),o=document.createElement("h2");o.textContent="Projects",n.appendChild(o);const i=document.getElementById("projectsAdd"),r=document.createElement("span");r.textContent="Add",i.appendChild(r),s(r)}(),a.addEventListener("click",(function(){c.style.display="block",function(){const e=document.createElement("div");e.setAttribute("id","newProjectWrapper"),e.style.cssText="text-align:left;";const t=document.createElement("h3");t.textContent="Add A New Project Name",e.appendChild(t);const n=document.createElement("input");n.type="text",n.setAttribute("class","textField"),e.appendChild(n);const o=document.createElement("input");o.type="submit",o.value="Add New",o.setAttribute("class","button"),e.appendChild(o),d.appendChild(e),o.addEventListener("click",(function(){let e={name:n.value,tasks:[]};r.push(e),p(),d.innerHTML="",c.style.display="none"}))}()})),s(a),m.addEventListener("click",(function(){y.innerHTML="",f.style.display="none"})),s(m)}]);