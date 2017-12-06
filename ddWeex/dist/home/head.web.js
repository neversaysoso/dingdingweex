// { "framework": "Vue"} 

!function(e){function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}var t={};n.m=e,n.c=t,n.i=function(e){return e},n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="",n(n.s=58)}({0:function(e,n){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],n=0;n<this.length;n++){var t=this[n];t[2]?e.push("@media "+t[2]+"{"+t[1]+"}"):e.push(t[1])}return e.join("")},e.i=function(n,t){"string"==typeof n&&(n=[[null,n,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(r[o]=!0)}for(i=0;i<n.length;i++){var a=n[i];"number"==typeof a[0]&&r[a[0]]||(t&&!a[2]?a[2]=t:t&&(a[2]="("+a[2]+") and ("+t+")"),e.push(a))}},e}},1:function(e,n){e.exports=function(e,n,t,r){var i,o=e=e||{},a=typeof e.default;"object"!==a&&"function"!==a||(i=e,o=e.default);var u="function"==typeof o?o.options:o;if(n&&(u.render=n.render,u.staticRenderFns=n.staticRenderFns),t&&(u._scopeId=t),r){var l=u.computed||(u.computed={});Object.keys(r).forEach(function(e){var n=r[e];l[e]=function(){return n}})}return{esModule:i,exports:o,options:u}}},13:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(4),i=function(e){return e&&e.__esModule?e:{default:e}}(r),o=t(5);n.default={props:["newTimer","dayCount","monthCount"],data:function(){return{time:"2017-12-02"}},created:function(){},methods:{ddTimeBox:function(){var e=this;i.default.ready(function(){i.default.apis.biz.util.datepicker({format:"yyyy-MM-dd",value:e.newTimer,onSuccess:function(n){e.newTimer=n.value,e.$emit("ddTimeSet",{time:e.newTimer,page:1})},onFail:function(e){}})})},gotoLink:function(e){(0,o.openLink)(e)}}}},2:function(e,n,t){function r(e){for(var n=0;n<e.length;n++){var t=e[n],r=c[t.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](t.parts[i]);for(;i<t.parts.length;i++)r.parts.push(o(t.parts[i]));r.parts.length>t.parts.length&&(r.parts.length=t.parts.length)}else{for(var a=[],i=0;i<t.parts.length;i++)a.push(o(t.parts[i]));c[t.id]={id:t.id,refs:1,parts:a}}}}function i(){var e=document.createElement("style");return e.type="text/css",d.appendChild(e),e}function o(e){var n,t,r=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(r){if(v)return g;r.parentNode.removeChild(r)}if(h){var o=p++;r=f||(f=i()),n=a.bind(null,r,o,!1),t=a.bind(null,r,o,!0)}else r=i(),n=u.bind(null,r),t=function(){r.parentNode.removeChild(r)};return n(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;n(e=r)}else t()}}function a(e,n,t,r){var i=t?"":r.css;if(e.styleSheet)e.styleSheet.cssText=m(n,i);else{var o=document.createTextNode(i),a=e.childNodes;a[n]&&e.removeChild(a[n]),a.length?e.insertBefore(o,a[n]):e.appendChild(o)}}function u(e,n){var t=n.css,r=n.media,i=n.sourceMap;if(r&&e.setAttribute("media",r),i&&(t+="\n/*# sourceURL="+i.sources[0]+" */",t+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}var l="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!l)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var s=t(3),c={},d=l&&(document.head||document.getElementsByTagName("head")[0]),f=null,p=0,v=!1,g=function(){},h="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,n,t){v=t;var i=s(e,n);return r(i),function(n){for(var t=[],o=0;o<i.length;o++){var a=i[o],u=c[a.id];u.refs--,t.push(u)}n?(i=s(e,n),r(i)):i=[];for(var o=0;o<t.length;o++){var u=t[o];if(0===u.refs){for(var l=0;l<u.parts.length;l++)u.parts[l]();delete c[u.id]}}}};var m=function(){var e=[];return function(n,t){return e[n]=t,e.filter(Boolean).join("\n")}}()},22:function(e,n,t){n=e.exports=t(0)(),n.push([e.i,"\n.header[data-v-d36732b6]{\n  border-top-width: 1px;\n  border-top-style: solid;\n  border-top-color: #D8D8D8;\n  background-color: #fff;\n  padding-bottom: 20px;\n}\n.nav[data-v-d36732b6]{\n  padding-top: 16px;\n  padding-left: 16px;\n  padding-bottom: 12px;\n  padding-right: 12px;\n  height: 60px;\n  flex-direction: row;\n  align-content: center;\n  justify-content: space-between;\n}\n.time[data-v-d36732b6]{\n  padding-left: 14px;\n  height: 30px;\n  line-height: 30px;\n  align-content: center;\n  align-items: center;\n  justify-content:flex-start;\n  flex-direction: row;\n  border-width: 1px;\n  border-style: solid;\n  border-color: rgba(23,24,26,0.12);\n  border-bottom-left-radius :15px;\n  border-bottom-right-radius :15px;\n  border-top-left-radius :15px;\n  border-top-right-radius :15px;\n}\n.time-text[data-v-d36732b6]{\n  line-height: 30px;\n  color: #17181A;\n  font-size: 16px;\n}\n.time-icon[data-v-d36732b6]{\n  width: 12px;\n  height: 6px;\n  padding-right: 14px;\n  padding-left: 14px;\n  align-items: center;\n}\n.link[data-v-d36732b6]{\n  align-items: center;\n  flex-direction: row;\n}\n.link-text[data-v-d36732b6]{\n  color: #1571E5;\n  line-height: 30px;\n  align-items: center;\n  font-size: 14px;\n}\n.link-icon[data-v-d36732b6]{\n  margin-right: 3px;\n  width: 8px;\n  height: 8px;\n  border-top-width: 1px;\n  border-right-width: 1px;\n  border-style: solid;\n  border-color: #1571E5;\n  transform: rotate(45deg)\n}\n.sign[data-v-d36732b6]{\n  flex-direction: row;\n  justify-content: flex-start;\n  height: 14px;\n  padding-left: 16px;\n}\n.text[data-v-d36732b6]{\n  font-size: 12px;\n  color: #A1A9B3;\n  line-height: 14px;\n  margin-right: 20px;\n}\n",""])},28:function(e,n,t){e.exports={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"header"},[t("div",{staticClass:"nav"},[t("div",{staticClass:"time",on:{click:e.ddTimeBox}},[t("text",{staticClass:"time-text"},[e._v(e._s(e.newTimer))]),e._v(" "),t("div",{staticClass:"time-icon"},[t("image",{staticStyle:{width:"12px",height:"6px"},attrs:{src:"http://s.kcimg.cn/dingtalk/image/time.png"}})])]),e._v(" "),t("div",{staticClass:"link",on:{click:function(n){e.gotoLink("dealer/index")}}},[t("text",{staticClass:"link-text"},[e._v("经销商拜访记录")]),e._v(" "),t("div",{staticClass:"link-icon"})])]),e._v(" "),t("div",{staticClass:"sign"},[t("text",{staticClass:"text"},[e._v("本月签到"+e._s(e.dayCount)+"次")]),e._v(" "),t("text",{staticClass:"text"},[e._v("本日签到"+e._s(e.monthCount)+"次")])])])},staticRenderFns:[]},e.exports.render._withStripped=!0},3:function(e,n){e.exports=function(e,n){for(var t=[],r={},i=0;i<n.length;i++){var o=n[i],a=o[0],u=o[1],l=o[2],s=o[3],c={id:e+":"+i,css:u,media:l,sourceMap:s};r[a]?r[a].parts.push(c):t.push(r[a]={id:a,parts:[c]})}return t}},34:function(e,n,t){var r=t(22);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);t(2)("d2b276be",r,!1)},4:function(e,n,t){"use strict";function r(e,n){var t=n.body,r=n.onSuccess,i=n.onFail,o=n.context;e&&"function"==typeof e?e(t,function(e){if(void 0!==e&&e.__status__){var n=e.__status__,t=e.__message__;N===n?r&&r.call(o,t):O===n&&i&&i.call(o,t)}else i&&i.call("-1","")}):i&&i.call("-1","")}function i(e,n){var t=n.body,r=n.onSuccess,i=n.onFail,o=n.context;e&&"function"==typeof e?e(t,function(e){void 0!==e?"0"===e.errorCode?r&&r.call(o,e.result):i&&i.call(o,e.result):i&&i.call("-1","")}):i&&i.call("-1","")}function o(e,n,t){var r=Object.create(null);if("string"!=typeof e||0===e.length)return r;n=n||"&",t=t||"=";for(var i=e.split(n),o=0,a=i.length;o<a;o++){var u=i[o].split(t),l=u[0].trim(),s="";u.length>=3?function(){u.splice(0,1);var e=u.length-1;u.forEach(function(n,r){n=n.trim(),s+=r===e?n:n+t})}():s=u[1].trim();var c=r[l];if(c)if(Array.isArray(c))c.push(decodeURIComponent(s));else{var d=c;r[l]=new Array,r[l].push(d),r[l].push(decodeURIComponent(s))}else r[l]=decodeURIComponent(s)}return r}function a(e,n,t){if(n=n||"&",t=t||"=",null!==e&&"object"===(void 0===e?"undefined":R(e))){for(var r=Object.keys(e),i=r.length,o=i-1,a="",u=0;u<i;u++){var l=r[u],s=e[l],c=l+t;if(Array.isArray(s)){for(var d=s.length,f=d-1,p=0;p<d;++p)a+=c+decodeURIComponent(s[p]),p<f&&(a+=n);d&&u<o&&(a+=n)}else a+=c+decodeURIComponent(s),u<o&&(a+=n)}return a}return""}function u(e,n){return e+"?"+W.stringify(n)}function l(e,n){var t={hash:null,search:null};if(!e)return{};var r=e.indexOf("?");if(-1===r)return{};var i=e.indexOf("#");i>-1?(t.hash=e.slice(i),t.search=e.slice(r,i)):t.search=e.slice(r);var o=t.search.slice(1),a=W.parse(o);return"string"==typeof n&&n.length>0?a[n]:a}function s(e){if(K){if("Vue"===Z)return weex.requireModule(e);var n="@weex-module/"+e;return __weex_require__(n)}if("Vue"===Z)return weex.requireModule(e)}function c(e){var n="00"+e;return n.substring(n.length-2)}function d(e){var n=window._WebViewJavascriptBridge;if(!n)throw"runtime and bridge are not ready";var t=e.body,r=e.onSuccess,i=e.onFail,o=e.context;n.callHandler("exec",t,function(e){void 0!==e&&("0"===e.errorCode?"function"==typeof r&&r.call(o,e.result):"function"==typeof i&&i.call(o,e.result)),"function"==typeof i&&i.call("-1","")})}function f(e){var n=e.body,t=e.onSuccess,r=e.onFail,i=e.context,o=n.plugin,a=n.action,u=n.args;(0,window.WebViewJavascriptBridgeAndroid)(o,a,u,t,r,i)}function p(){window.WebViewJavascriptBridgeAndroid=window.nuva.require()}function v(e){if(ae)window._WebViewJavascriptBridge?d(e):document.addEventListener("_WebViewJavascriptBridgeReady",function(){d(e)},!1);else if(oe){var n=window;n.nuva&&(void 0===n.nuva.isReady||n.nuva.isReady)?(ue||p(),f(e)):document.addEventListener("runtimeready",function(){ue||p(),f(e)},!1)}}function g(e){var n=se||function(){};ce?i(n,e):de?r(n,e):v(e)}function h(e,n){for(var t=n||0,r=e.length-t,i=new Array(r);r--;)i[r]=e[r+t];return i}function m(e,n){return function(t){t||(t={});var r=t.onSuccess,i=t.onFail;delete t.onSuccess,delete t.onFail,delete t.onCancel,g({body:{plugin:e,action:n,args:t},onSuccess:r,onFail:i})}}function y(e,n){var t=Object.create(null);return n.forEach(function(n){t[n]=m(e,n)}),t}function b(e){var n=Object.create(null);for(var t in e)for(var r=t.split("."),i=e[t],o=null,a=0,u=r.length;;)if(o){if(u-1===a){o[r[a]]=y(t,i);break}if(o[r[a]])a++;else if(o[r[a]]={},o=o[r[a]],++a>u)break}else{if(1===u){var l=!1,s=n[r[a]],c=y(t,i);for(var d in s)if(s.hasOwnProperty(d)){l=!0;break}if(l)for(var f in c)s[f]=c[f];else n[r[a]]=y(t,i);break}if(n[r[a]]){o=n[r[a]],a++;continue}n[r[a]]={},o=n[r[a]],a++}return n}function x(e){return function(n){g({body:{plugin:"runtime",action:e,args:{}},onSuccess:function(e){"function"==typeof n&&n(e)},onFail:function(){},context:null})}}function w(e){x("getModules")(e)}function _(e,n,t){if(!n)return void ge.ready(function(){e(null)});ge.ready(function(){var r=ge.apis.runtime.permission,i=n||{},o=t||null;i.onSuccess=function(n){e(null,n)},i.onFail=function(n){"function"==typeof o?o(n):e(n,null)},r.requestJsApis(i)})}function C(){me&&me.length>0&&(me.forEach(function(e){e()}),me.length=0)}function k(){var e={apis:{},config:function(e){if(!e)return void re(["config is undefined,you must configure Dingtalk parameters"],ie.WARNING);he=e},init:function(){me=[],ge.init(),ge.ready(function(){be=ge.isReady,e.apis=ge.apis?ge.apis:{},C()})},ready:function(e){if(!e||"function"!=typeof e)return void re(["callback is undefined"],ie.WARNING);be?_(e,he,ye):me&&me.push(function(e){return function(){_(e,he,ye)}}(e))},error:function(e){"function"==typeof e&&(ye=e)},EventEmitter:ge.EventEmitter};return e}function A(e){e.on=function(e,n,t){document.addEventListener(e,n,t)},e.off=function(e,n,t){document.removeEventListener(e,n,t)}}function S(e){e.on=ge.on,e.off=ge.off}var N="1",O="2",R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},U=function(e){if(Array.isArray(e)){for(var n=0,t=Array(e.length);n<e.length;n++)t[n]=e[n];return t}return Array.from(e)},W={stringify:a,parse:o},T={format:u,parse:l},E=function(){var e={};if("undefined"!=typeof weex){var n=weex.config,t=n.env;if(e.platform=t.platform,e.bundleFrameworkType="Vue","Web"!==e.platform)e.dingtalk={bundleUrl:n.bundleUrl,originalUrl:n.originalUrl},e.appVersion=t.appVersion,e.appName=t.appName;else{var r=location.href,i=T.parse(r,"dd_wx_tpl"),o=T.parse(r,"_wx_tpl");e.dingtalk={bundleUrl:i||o||"",originalUrl:r}}}else{if("function"==typeof callNative)e.platform=navigator.platform,e.appName=navigator.appName,e.appVersion=navigator.appVersion,e.dingtalk={bundleUrl:__weex_options__.bundleUrl,originalUrl:__weex_options__.originalUrl};else{e.platform="Web";var a=location.href,u=T.parse(a,"dd_wx_tpl"),l=T.parse(a,"_wx_tpl");e.dingtalk={bundleUrl:u||l||"",originalUrl:a}}e.bundleFrameworkType="Rax"}return e}(),M="Web"===E.platform,L="iOS"===E.platform,j="android"===E.platform,F=L||j,I=E.dingtalk,B=E.bundleFrameworkType,V=I.bundleUrl,D=I.originalUrl,G=void 0;M&&(G=window.navigator.userAgent.toLowerCase());var q=function(){return F?"DingTalk"===E.appName||"com.alibaba.android.rimet"===E.appName:G&&G.indexOf("dingtalk")>-1}(),J=function(){return M?G&&/iphone|ipad|ipod|ios/.test(G):null}(),P=function(){return M?G&&G.indexOf("android")>-1:null}(),z=function(){if(M){var e=G.match(/aliapp\(\w+\/([a-zA-Z0-9.-]+)\)/);return null===e&&(e=G.match(/dingtalk\/([a-zA-Z0-9.-]+)/)),e&&e[1]}return E.appVersion}(),H={isDingtalk:q,isWeb:M,isWebiOS:J,isWebAndroid:P,isWeex:F,isWeexiOS:L,isWeexAndroid:j,bundleFrameworkType:B,bundleUrl:V,originalUrl:D,version:z,platform:function(){var e=void 0;return q?P?e="web.android":J?e="web.ios":j?e="weex.android":L&&(e="weex.ios"):e="not.dingtalk",e}()},Z=H.bundleFrameworkType,K=H.isWeex,$=(s("timer"),{LOG:"LOG",INFO:"INFO",WARNING:"WARNING",ERROR:"ERROR"}),Q=function(e){var n,t,r,i,o=c(e.time.getHours())+":"+c(e.time.getMinutes())+":"+c(e.time.getSeconds());switch(e.type){case $.LOG:(n=console).log.apply(n,["time:"+o+" | log: "].concat(U(e.logArr)));break;case $.INFO:(t=console).info.apply(t,["time:"+o+" | info: "].concat(U(e.logArr)));break;case $.ERROR:(r=console).error.apply(r,["time:"+o+" | error: "].concat(U(e.logArr)));break;case $.WARNING:(i=console).warn.apply(i,["time:"+o+" | warning: "].concat(U(e.logArr)))}},X=function(e){Q=e},Y=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:$.LOG;Q({type:n,logArr:e,time:new Date})},ee={log:Y,setLog:X,LogType:$},ne=H,te=s,re=ee.log,ie=ee.LogType,oe=null,ae=null,ue=!1;if(ne.isWeb){var le=window.navigator.userAgent.toLowerCase();oe=le&&le.indexOf("android")>-1,ae=le&&/iphone|ipad|ipod|ios/.test(le)}var se=null,ce=ne.isWeexiOS,de=ne.isWeexAndroid;ne.isWeex&&(se=te("nuvajs-exec").exec);var fe={},pe={on:function(e,n){var t=fe[e];t?t.push(n):fe[e]=[],t||fe[e].push(n)},off:function(e,n){var t=fe[e];if(!t)return!1;if(!e&&!n)return fe={},!0;if(e&&!n)return fe[e]=null,!0;for(var r=void 0,i=t.length;i--;)if((r=t[i])===n||r.fun===n){t.splice(i,1);break}return!0},once:function(e,n){function t(){pe.off(e,t),n.apply(this,arguments)}t.fun=n,pe.on(e,t)},emit:function(e){if("string"==typeof e){var n=fe[e],t=h(arguments,1);if(n)for(var r=0,i=n.length;r<i;r++){var o=n[r];o.apply(this,t)}}}},ve={};ne.isWeex&&(ve=te("globalEvent"));var ge={getModules:null,isReady:!1,runtime:{info:x("info"),_interceptBackButton:x("interceptBackButton"),_interceptNavTitle:x("interceptNavTitle"),_recoverNavTitle:x("recoverNavTitle"),_getModules:x("getModules")},init:function(){w(function(e){e&&(ge.isReady=!0,ge.apis=b(e),pe.emit("__ship_ready__"))})},ready:function(e){ge.isReady?"function"==typeof e&&e():"function"==typeof e&&pe.once("__ship_ready__",function(){e()})},on:function(e,n){ve.addEventListener(e,function(e){var t={preventDefault:function(){re(["does not support preventDefault"],ie.WARNING)},detail:e};n.call(this,t)})},off:ve.removeEventListener,EventEmitter:pe},he=null,me=null,ye=null,be=!1,xe=!0,we={},_e=ne.isDingtalk,Ce=ne.isWeex,ke=ne.isWeb;re(["current environment: "+ne.platform]),_e?xe&&(xe=!1,Ce?we=function(){var e=k();return S(e),e}():ke&&(we=function(){var e=k();return A(e),e}()),we.init()):re(["can only open the page be Dingtalk Container"],ie.WARNING);var Ae=we;e.exports=Ae},5:function(e,n,t){"use strict";function r(){var e=Date.parse(new Date).toString();return e=e.substr(0,10)}function i(e){var n=e,t=r();return N+n+"?Action="+n+"&AppId="+O+"&SecretKey="+R+"&TimeStamp="+t}function o(e){return encodeURIComponent(d(R,encodeURIComponent(e).toLowerCase()))}function a(e){var n=i("dd/getpackage"),t=o(n);A.fetch({method:"POST",body:JSON.stringify({Body:{Url:n}}),url:n+"&Signature="+t},e)}function u(e,n){var t=i("dd/getuserinfo"),r=o(t);A.fetch({method:"POST",body:JSON.stringify({Body:{Code:e}}),url:t+"&Signature="+r},n)}function l(e,n){var t=i("checkin/getlist"),r=o(t);A.fetch({method:"POST",body:e,url:t+"&Signature="+r},n)}function s(e){C.default.ready(function(){C.default.apis.biz.util.openLink({url:U+e+".js?dd_wx_tpl="+U+e+".js",onSuccess:function(e){},onFail:function(e){}})})}function c(e,n){!n&&(n=20),S.toast({message:e,duration:n})}function d(e,n){return p(f(v(e),v(n)))}function f(e,n){var t=g(e);t.length>16&&(t=m(t,8*e.length));for(var r=Array(16),i=Array(16),o=0;o<16;o++)r[o]=909522486^t[o],i[o]=1549556828^t[o];var a=m(r.concat(g(n)),512+8*n.length);return h(m(i.concat(a),672))}function p(e){for(var n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",t="",r=e.length,i=0;i<r;i+=3)for(var o=e.charCodeAt(i)<<16|(i+1<r?e.charCodeAt(i+1)<<8:0)|(i+2<r?e.charCodeAt(i+2):0),a=0;a<4;a++)8*i+6*a>8*e.length?t+=W:t+=n.charAt(o>>>6*(3-a)&63);return t}function v(e){for(var n,t,r="",i=-1;++i<e.length;)n=e.charCodeAt(i),t=i+1<e.length?e.charCodeAt(i+1):0,55296<=n&&n<=56319&&56320<=t&&t<=57343&&(n=65536+((1023&n)<<10)+(1023&t),i++),n<=127?r+=String.fromCharCode(n):n<=2047?r+=String.fromCharCode(192|n>>>6&31,128|63&n):n<=65535?r+=String.fromCharCode(224|n>>>12&15,128|n>>>6&63,128|63&n):n<=2097151&&(r+=String.fromCharCode(240|n>>>18&7,128|n>>>12&63,128|n>>>6&63,128|63&n));return r}function g(e){for(var n=Array(e.length>>2),t=0;t<n.length;t++)n[t]=0;for(var t=0;t<8*e.length;t+=8)n[t>>5]|=(255&e.charCodeAt(t/8))<<24-t%32;return n}function h(e){for(var n="",t=0;t<32*e.length;t+=8)n+=String.fromCharCode(e[t>>5]>>>24-t%32&255);return n}function m(e,n){e[n>>5]|=128<<24-n%32,e[15+(n+64>>9<<4)]=n;for(var t=Array(80),r=1732584193,i=-271733879,o=-1732584194,a=271733878,u=-1009589776,l=0;l<e.length;l+=16){for(var s=r,c=i,d=o,f=a,p=u,v=0;v<80;v++){t[v]=v<16?e[l+v]:w(t[v-3]^t[v-8]^t[v-14]^t[v-16],1);var g=x(x(w(r,5),y(v,i,o,a)),x(x(u,t[v]),b(v)));u=a,a=o,o=w(i,30),i=r,r=g}r=x(r,s),i=x(i,c),o=x(o,d),a=x(a,f),u=x(u,p)}return Array(r,i,o,a,u)}function y(e,n,t,r){return e<20?n&t|~n&r:e<40?n^t^r:e<60?n&t|n&r|t&r:n^t^r}function b(e){return e<20?1518500249:e<40?1859775393:e<60?-1894007588:-899497514}function x(e,n){var t=(65535&e)+(65535&n);return(e>>16)+(n>>16)+(t>>16)<<16|65535&t}function w(e,n){return e<<n|e>>>32-n}Object.defineProperty(n,"__esModule",{value:!0}),n.jsapifun=a,n.getUserId=u,n.getVisitList=l,n.openLink=s,n.toast=c;var _=t(4),C=function(e){return e&&e.__esModule?e:{default:e}}(_),k=weex.requireModule("meta"),A=weex.requireModule("stream"),S=weex.requireModule("modal"),N="http://192.168.2.11:8003/",O="bs_q44d44gaooqpawi1p9q0",R="84e0bbaf769da44510a92505e5cea5c0",U="http://192.168.250.187:8088/dist/";k&&k.setViewport({width:400});var W="="},58:function(e,n,t){"use strict";var r=t(8);r.el="#root",new Vue(r)},8:function(e,n,t){t(34);var r=t(1)(t(13),t(28),"data-v-d36732b6",null);r.options.__file="/Users/houyaohui/wwwroot/test/ddweex/src/home/head.vue",r.esModule&&Object.keys(r.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] head.vue: functional components are not supported with templates, they should use render functions."),e.exports=r.exports}});