!function(e){var n={};function t(i){if(n[i])return n[i].exports;var r=n[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=e,t.c=n,t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:i})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(t.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(i,r,function(n){return e[n]}.bind(null,r));return i},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){"use strict";t.r(n);var i=t(1);t(3),t(12),t(13),t(14),t(15),t(16),t(17),t(18),t(19),t(20),t(21),t(22),t(23),t(24),t(25),t(26),t(27),t(28),t(29),t(30),t(31),t(32);let r=[],o=["#cacacc","cyan","#201EE1","#821EE1","#1E7DE1"];const a=document.getElementsByTagName("canvas")[0],s=a.getContext("2d");class c{constructor(e,n,t,i,r,o){this.x=e,this.y=n,this.dx=t,this.dy=i,this.radius=r,this.color=o}draw(){s.beginPath(),s.arc(this.x,this.y,this.radius,0,2*Math.PI,!1),s.strokeStyle=this.color,s.stroke()}update(){(this.x+this.radius>a.width||this.x-this.radius<0)&&(this.dx=-this.dx),(this.y+this.radius>a.height||this.y-this.radius<0)&&(this.dy=-this.dy),this.x+=this.dx,this.y+=this.dy,this.draw()}}Object(i.listenForEvents)((function(){r=[],a.width=window.innerWidth,a.height=window.innerHeight,s.fillRect(0,0,a.width,a.height),function(){let e=(window.innerWidth+window.innerHeight)/4.25;for(let n=0;n<10;n++){let t=Math.random()*(a.width-2*e)+e,i=Math.random()*(a.height-2*e)+e,s=1*(Math.random()+.5),d=1*(Math.random()+.5),l="black";n<5&&(l=o[n]),r.push(new c(t,i,s,d,e,l))}}()}),(function e(){requestAnimationFrame(e);for(let e=0;e<r.length;e++)for(let n=0;n<2;n++)r[e].update()}))},function(e,n,t){"use strict";t.r(n),t.d(n,"listenForEvents",(function(){return a}));var i=t(2);function r({modal:e,id:n,isIOS:t}){e.style.cssText=`\n              display: flex;\n\n              opacity: 1;\n              animation-name: fadeInOpacity;\n              animation-iteration-count: 1;\n              animation-timing-function: ease-in;\n              animation-duration: 0.3s;\n              ${t?"pointer-events: all;":"pointer-events: none;"}\n        `,e.innerHTML=Object(i.selectContent)(n)}function o({modal:e}){e.innerHTML="",e.style.cssText="\n              display: none;\n          "}function a(e,n){let t=/iPad|iPhone|iPod/.test(navigator.platform)||"MacIntel"===navigator.platform&&navigator.maxTouchPoints>1;window.addEventListener("load",(function(){const i=document.getElementsByTagName("html")[0],a=document.getElementsByClassName("feature-modal")[0];document.getElementsByTagName("html")[0].style.cssText="\n                visibility: visible;\n                height: unset;\n                overflow: auto",document.getElementsByClassName("spinner-container")[0].style.cssText="\n          display:none";const s=document.getElementsByTagName("button");if(t)for(let e of s)e.onclick=()=>r({modal:a,html:i,id:e.id,isIOS:t}),a.onclick=()=>o({modal:a,html:i});else for(let e of s)e.onmouseover=()=>r({modal:a,html:i,id:e.id,isIOS:t}),e.onmouseleave=()=>o({modal:a,html:i});e(),n()})),window.addEventListener("resize",()=>{e()})}},function(e,n,t){"use strict";function i(e){const n=window.innerHeight/100*90;let t="";const i=e.split("-");var r;switch(i[1]&&(t+=(r=i[0],`<div class="feature-video-container">\n                  <video width="auto" height=${n} autoplay loop muted playsinline\n                    preload="metadata">\n                    <source src="./videos/${r}.webm" type="video/webm">\n                    <source src="./videos/${r}.mp4" type="video/mp4">\n                </video>\n            </div>`)),!0){case"states"===i[0]:t+="<p>\n      Chat messages have three states: pending, accepted and rejected.\n\n      When a message is first sent, a message with a pending state is added to the chat without waiting for a server response.\n      If the message reaches the server and the server confirms the message an accepted state is added to the message on the client.\n      If the message does not reach the server, or the server rejects the message, a rejected state is added to the message.\n      Rejected messages get an option to be resent.\n      </p>";break;case"bug"===i[0]:t+="<p>\n    Some of the biggest performance improvements were made by using uncontrolled components where possible and recording state when a component unmounts.\n    Others include using debounce, throttle, memoizing functions.  \n      </p>";break;case"api"===i[0]:t+="<p>\n      Youtube and Reddit both provide an API, so developers could query their servers for data.\n      StartGG asks for a large number of top posts, processes them and stores them in cache. The posts are routinely updated.\n      This allows StartGG to server most popular posts for Youtube and Reddit in just a moment, when it takes Youtube and Reddit\n      to build those posts and other data far longer.\n      </p>";break;case"reformats"===i[0]:t+="<p>\n      A request to Reddit API for 25 of the most popular posts returns about 100 kiB of data.\n      StartGG server processes the data to remove all the unnecessary information, the response from StartGG server for the most popular 25 Reddit posts is about 10 kiB, 10 times less!\n      </p>";break;case"caches"===i[0]:t+="<p>\n      When data is received from Reddit and Youtube API's it is cached on the StartGG server.\n      The server uses node-cache library to save information returned from Reddit and Youtube in server memory.\n      Because the content is saved in memory, it does not have to be built when a request to serve it is received.\n      Instead, content is requested from Youtube and Reddit API regularly to ensure a balance between speed and latest content.\n      This allows for near instantaneous server responses. \n      </p>";break;case"scheduled"===i[0]:t+="<p>\n      StartGG server uses node-cron library to schedule fetching content from Reddit and Youtube automatically.\n      </p>";break;case"reusable"===i[0]:t+="<p>\n      Both Reddit and Youtube components are wrapped in a preview component, which adds pagination, a button to expand the views, sets their height and gives them a shadow.\n      </p>";break;case"extendable"===i[0]:t+="<p>\n      StartGG uses TypeScript on the front-end, together with reusable components that allows the project to be easily extendable in order to add more social media sites or more features for the existing ones.\n      </p>";break;case"progressive"===i[0]:t+=`<div class="feature-video-container">\n      <img height=${n} src="./assets/img/pwa.jpg" alt="icon on a mobile phone home screen">\n      </div>\n      `}return t}t.r(n),t.d(n,"selectContent",(function(){return i}))},function(e,n,t){var i=t(4),r=t(5);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var o={insert:"head",singleton:!1};i(r,o);e.exports=r.locals||{}},function(e,n,t){"use strict";var i,r=function(){return void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i},o=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),a=[];function s(e){for(var n=-1,t=0;t<a.length;t++)if(a[t].identifier===e){n=t;break}return n}function c(e,n){for(var t={},i=[],r=0;r<e.length;r++){var o=e[r],c=n.base?o[0]+n.base:o[0],d=t[c]||0,l="".concat(c," ").concat(d);t[c]=d+1;var u=s(l),f={css:o[1],media:o[2],sourceMap:o[3]};-1!==u?(a[u].references++,a[u].updater(f)):a.push({identifier:l,updater:g(f,n),references:1}),i.push(l)}return i}function d(e){var n=document.createElement("style"),i=e.attributes||{};if(void 0===i.nonce){var r=t.nc;r&&(i.nonce=r)}if(Object.keys(i).forEach((function(e){n.setAttribute(e,i[e])})),"function"==typeof e.insert)e.insert(n);else{var a=o(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}return n}var l,u=(l=[],function(e,n){return l[e]=n,l.filter(Boolean).join("\n")});function f(e,n,t,i){var r=t?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;if(e.styleSheet)e.styleSheet.cssText=u(n,r);else{var o=document.createTextNode(r),a=e.childNodes;a[n]&&e.removeChild(a[n]),a.length?e.insertBefore(o,a[n]):e.appendChild(o)}}function m(e,n,t){var i=t.css,r=t.media,o=t.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),o&&btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}var p=null,h=0;function g(e,n){var t,i,r;if(n.singleton){var o=h++;t=p||(p=d(n)),i=f.bind(null,t,o,!1),r=f.bind(null,t,o,!0)}else t=d(n),i=m.bind(null,t,n),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return i(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;i(e=n)}else r()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=r());var t=c(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var i=0;i<t.length;i++){var r=s(t[i]);a[r].references--}for(var o=c(e,n),d=0;d<t.length;d++){var l=s(t[d]);0===a[l].references&&(a[l].updater(),a.splice(l,1))}t=o}}}},function(e,n,t){var i=t(6),r=t(7),o=t(8),a=t(9),s=t(10),c=t(11);n=i(!1);var d=r(o),l=r(a),u=r(s),f=r(c);n.push([e.i,'@-webkit-keyframes fadeInOpacity {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n@keyframes fadeInOpacity {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n.landing {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh; }\n\n.title-container {\n  margin: 0 3rem; }\n\nh1 {\n  word-spacing: 1rem;\n  letter-spacing: 5px;\n  font-weight: 400;\n  text-align: left;\n  font-family: oneday;\n  color: #e8ecee;\n  font-size: 3rem;\n  margin: 0;\n  margin-bottom: 1rem; }\n\nh2 {\n  font-weight: 400;\n  text-align: left;\n  font-family: oneday;\n  color: #e8ecee;\n  font-size: calc(2rem);\n  margin: 1rem 0; }\n\n.projects-title {\n  margin-left: 10vw; }\n\n.projects {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding-bottom: 1rem;\n  border-width: 0;\n  border-width: 1rem 0;\n  border-style: solid;\n  -o-border-image: linear-gradient(to right, #e8ecee, #828794, #1b223a);\n     border-image: linear-gradient(to right, #e8ecee, #828794, #1b223a);\n  border-image-slice: 1; }\n\n.popitalk,\n.startgg {\n  display: flex;\n  flex-direction: column;\n  align-items: center; }\n  .popitalk > video,\n  .startgg > video {\n    max-width: 90vw; }\n\n.startgg-img-and-text {\n  display: flex;\n  flex-direction: column;\n  align-items: center; }\n  .startgg-img-and-text > img {\n    max-width: 90vw; }\n\n.popitalk-icon-and-title,\n.startgg-icon-and-title {\n  display: flex;\n  width: 90%;\n  justify-content: flex-start;\n  align-items: flex-end;\n  margin: 1rem;\n  margin-left: 10vw;\n  text-decoration: none; }\n  .popitalk-icon-and-title > h3,\n  .startgg-icon-and-title > h3 {\n    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;\n    color: #e8ecee;\n    font-size: calc(3rem / 2);\n    margin: 0;\n    margin-left: 0.5rem; }\n\n.popitalk-features,\n.startgg-features {\n  margin: 1rem; }\n  .popitalk-features > button,\n  .startgg-features > button {\n    background-color: #1b223a;\n    border: none;\n    border-radius: 16px;\n    padding: 0.6rem;\n    margin: 0.2rem;\n    font-weight: 600;\n    font-size: 0.9rem;\n    color: #e8ecee;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none; }\n\np {\n  max-width: 100%;\n  font-family: roboto;\n  color: #e8ecee;\n  font-size: 1.2rem;\n  margin: 1rem;\n  white-space: pre-wrap;\n  line-height: 1.4rem;\n  text-align: left; }\n\n.visit {\n  text-decoration: none;\n  text-align: center; }\n  .visit > h4 {\n    margin: 0rem 1rem;\n    padding: 0.5rem;\n    font-family: oneday;\n    font-size: calc(3rem - 1rem);\n    color: #e8ecee;\n    border-width: 0.5rem;\n    border-style: solid;\n    -o-border-image: linear-gradient(to right, #e8ecee, #828794, #1b223a);\n       border-image: linear-gradient(to right, #e8ecee, #828794, #1b223a);\n    border-image-slice: 1; }\n\n.contact {\n  visibility: visible;\n  height: unset;\n  display: flex;\n  flex-direction: column;\n  margin: 1rem 1rem; }\n  .contact > a {\n    font-family: oneday;\n    color: #e8ecee;\n    margin: 0.5rem 0; }\n\n.feature-modal {\n  display: none;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  overflow: hidden;\n  background-color: rgba(27, 34, 58, 0.9);\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  pointer-events: none;\n  opacity: 0.1; }\n  .feature-modal > p {\n    text-align: center; }\n\n.feature-video-container {\n  width: 100%;\n  display: flex;\n  justify-content: center; }\n\n@media screen and (max-width: 300px) {\n  h1,\n  h2 {\n    font-size: 2rem !important; }\n  h2 {\n    margin: 0; } }\n\n@media screen and (min-width: 400px) and (min-height: 600px) {\n  .feature-modal > p {\n    width: 70%;\n    line-height: 1.8rem; } }\n\n@media screen and (min-width: 600px) and (min-height: 400px) {\n  .popitalk-text,\n  .startgg-text {\n    display: flex;\n    justify-content: center; }\n  .popitalk-text {\n    margin-top: 2rem; }\n  .startgg-img-and-text {\n    display: flex;\n    flex-direction: row-reverse;\n    align-items: flex-start;\n    margin-right: 1rem; }\n    .startgg-img-and-text > img {\n      max-width: 40vw; }\n  .startgg-text {\n    flex-direction: column; }\n  p {\n    line-height: 1.8rem; }\n  button {\n    padding: 1rem !important;\n    font-size: 1rem !important; } }\n\n@media screen and (min-width: 900px) {\n  button {\n    padding: 2rem !important;\n    font-size: 1.3rem !important; }\n  .startgg-img-and-text > img {\n    margin: auto auto;\n    max-height: 70vh; }\n  p {\n    font-size: 1.5rem; } }\n\n@media screen and (min-width: 1200px) {\n  .title-container > h1,\n  .title-container h2 {\n    font-size: 4rem; }\n  .projects-title {\n    font-size: 4rem; }\n  .popitalk > video {\n    max-width: 80vw; }\n  .startgg-img-and-text {\n    display: flex; }\n    .startgg-img-and-text > div {\n      flex-basis: 50%; }\n  .projects,\n  .contact {\n    padding: 5vh 10vw; } }\n\n@media screen and (min-width: 1500px) {\n  .projects,\n  .contact {\n    padding: 5vh 10vw; } }\n\n@font-face {\n  font-family: "roboto";\n  src: url('+d+') format("woff2"), url('+l+') format("woff");\n  font-weight: normal;\n  font-style: normal; }\n\n@font-face {\n  font-family: "oneday";\n  src: url('+u+') format("woff2"), url('+f+') format("woff");\n  font-weight: normal;\n  font-style: normal; }\n\nhtml,\nbody {\n  margin: 0;\n  width: 100%; }\n\n.landing {\n  height: 100vh; }\n\n.glass {\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  z-index: -1; }\n\ncanvas {\n  position: fixed;\n  top: 0;\n  z-index: -2;\n  filter: blur(5vmax) saturate(200%) !important; }\n\nhr {\n  height: 10px;\n  width: 100%;\n  background-image: linear-gradient(to right, #e8ecee, #828794, #1b223a);\n  border: none; }\n\n::-webkit-scrollbar {\n  width: 6px;\n  height: 6px; }\n\n/* Track */\n::-webkit-scrollbar-track {\n  background: #1b223a;\n  border-radius: 16px; }\n\n/* Handle */\n::-webkit-scrollbar-thumb {\n  border-radius: 16px;\n  background: #e8ecee; }\n\n/* Handle on hover */\n::-webkit-scrollbar-thumb:hover {\n  background: #5b717c; }\n\nhtml {\n  scrollbar-color: #e8ecee #1b223a; }\n\nhtml {\n  scrollbar-width: thin !important; }\n',""]),e.exports=n},function(e,n,t){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=function(e,n){var t=e[1]||"",i=e[3];if(!i)return t;if(n&&"function"==typeof btoa){var r=(a=i,s=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(c," */")),o=i.sources.map((function(e){return"/*# sourceURL=".concat(i.sourceRoot||"").concat(e," */")}));return[t].concat(o).concat([r]).join("\n")}var a,s,c;return[t].join("\n")}(n,e);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,i){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(i)for(var o=0;o<this.length;o++){var a=this[o][0];null!=a&&(r[a]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s]);i&&r[c[0]]||(t&&(c[2]?c[2]="".concat(t," and ").concat(c[2]):c[2]=t),n.push(c))}},n}},function(e,n,t){"use strict";e.exports=function(e,n){return n||(n={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/fonts/roboto-medium-webfont.woff2"},function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/fonts/roboto-medium-webfont.woff"},function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/fonts/ONEDAY.woff2"},function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/fonts/ONEDAY.woff"},function(e,n,t){"use strict";t.r(n),n.default=t.p+"videos/drafts.mp4"},function(e,n,t){"use strict";t.r(n),n.default=t.p+"videos/drafts.webm"},function(e,n,t){"use strict";t.r(n),n.default=t.p+"videos/emojis.mp4"},function(e,n,t){"use strict";t.r(n),n.default=t.p+"videos/emojis.webm"},function(e,n,t){"use strict";t.r(n),n.default=t.p+"videos/gif.mp4"},function(e,n,t){"use strict";t.r(n),n.default=t.p+"videos/gif.webm"},function(e,n,t){"use strict";t.r(n),n.default=t.p+"videos/live.mp4"},function(e,n,t){"use strict";t.r(n),n.default=t.p+"videos/live.webm"},function(e,n,t){"use strict";t.r(n),n.default=t.p+"videos/notifications.mp4"},function(e,n,t){"use strict";t.r(n),n.default=t.p+"videos/notifications.webm"},function(e,n,t){"use strict";t.r(n),n.default=t.p+"videos/popitalk.mp4"},function(e,n,t){"use strict";t.r(n),n.default=t.p+"videos/popitalk.webm"},function(e,n,t){"use strict";t.r(n),n.default=t.p+"videos/scroll.mp4"},function(e,n,t){"use strict";t.r(n),n.default=t.p+"videos/scroll.webm"},function(e,n,t){"use strict";t.r(n),n.default=t.p+"videos/sticky.mp4"},function(e,n,t){"use strict";t.r(n),n.default=t.p+"videos/sticky.webm"},function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/img/popitalk.jpg"},function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/img/pwa.jpg"},function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/img/startgg-icon.png"},function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/img/startgg.jpg"},function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/a_resume_for_Simonas_Karalius.pdf"}]);