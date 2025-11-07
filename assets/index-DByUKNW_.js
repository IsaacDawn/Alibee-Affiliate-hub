import{r as e,a as t,g as r}from"./vendor-Z2Iecplj.js";import{r as n,R as o,d as s,S as i,X as a,C as c,T as l,Z as d,a as u,b as p,F as g,c as h,P as f,e as m}from"./ui-qqSTK27j.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if("childList"===r.type)for(const e of r.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)}).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?t.credentials="include":"anonymous"===e.crossOrigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();var x,y,b={exports:{}},w={};var v,j=(y||(y=1,b.exports=function(){if(x)return w;x=1;var t=e(),r=Symbol.for("react.element"),n=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,s=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function a(e,t,n){var a,c={},l=null,d=null;for(a in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(d=t.ref),t)o.call(t,a)&&!i.hasOwnProperty(a)&&(c[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===c[a]&&(c[a]=t[a]);return{$$typeof:r,type:e,key:l,ref:d,props:c,_owner:s.current}}return w.Fragment=n,w.jsx=a,w.jsxs=a,w}()),b.exports),S={};const _=r(function(){if(v)return S;v=1;var e=t();return S.createRoot=e.createRoot,S.hydrateRoot=e.hydrateRoot,S}());function E(e,t){return function(){return e.apply(t,arguments)}}const{toString:C}=Object.prototype,{getPrototypeOf:k}=Object,{iterator:N,toStringTag:P}=Symbol,R=(e=>t=>{const r=C.call(t);return e[r]||(e[r]=r.slice(8,-1).toLowerCase())})(Object.create(null)),O=e=>(e=e.toLowerCase(),t=>R(t)===e),T=e=>t=>typeof t===e,{isArray:L}=Array,A=T("undefined");function D(e){return null!==e&&!A(e)&&null!==e.constructor&&!A(e.constructor)&&I(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const U=O("ArrayBuffer");const F=T("string"),I=T("function"),B=T("number"),$=e=>null!==e&&"object"==typeof e,z=e=>{if("object"!==R(e))return!1;const t=k(e);return!(null!==t&&t!==Object.prototype&&null!==Object.getPrototypeOf(t)||P in e||N in e)},q=O("Date"),M=O("File"),H=O("Blob"),V=O("FileList"),K=O("URLSearchParams"),[W,G,J,Y]=["ReadableStream","Request","Response","Headers"].map(O);function Q(e,t,{allOwnKeys:r=!1}={}){if(null==e)return;let n,o;if("object"!=typeof e&&(e=[e]),L(e))for(n=0,o=e.length;n<o;n++)t.call(null,e[n],n,e);else{if(D(e))return;const o=r?Object.getOwnPropertyNames(e):Object.keys(e),s=o.length;let i;for(n=0;n<s;n++)i=o[n],t.call(null,e[i],i,e)}}function X(e,t){if(D(e))return null;t=t.toLowerCase();const r=Object.keys(e);let n,o=r.length;for(;o-- >0;)if(n=r[o],t===n.toLowerCase())return n;return null}const Z="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:global,ee=e=>!A(e)&&e!==Z;const te=(e=>t=>e&&t instanceof e)("undefined"!=typeof Uint8Array&&k(Uint8Array)),re=O("HTMLFormElement"),ne=(({hasOwnProperty:e})=>(t,r)=>e.call(t,r))(Object.prototype),oe=O("RegExp"),se=(e,t)=>{const r=Object.getOwnPropertyDescriptors(e),n={};Q(r,(r,o)=>{let s;!1!==(s=t(r,o,e))&&(n[o]=s||r)}),Object.defineProperties(e,n)};const ie=O("AsyncFunction"),ae=(ce="function"==typeof setImmediate,le=I(Z.postMessage),ce?setImmediate:le?(de=`axios@${Math.random()}`,ue=[],Z.addEventListener("message",({source:e,data:t})=>{e===Z&&t===de&&ue.length&&ue.shift()()},!1),e=>{ue.push(e),Z.postMessage(de,"*")}):e=>setTimeout(e));var ce,le,de,ue;const pe="undefined"!=typeof queueMicrotask?queueMicrotask.bind(Z):"undefined"!=typeof process&&process.nextTick||ae,ge={isArray:L,isArrayBuffer:U,isBuffer:D,isFormData:e=>{let t;return e&&("function"==typeof FormData&&e instanceof FormData||I(e.append)&&("formdata"===(t=R(e))||"object"===t&&I(e.toString)&&"[object FormData]"===e.toString()))},isArrayBufferView:function(e){let t;return t="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&U(e.buffer),t},isString:F,isNumber:B,isBoolean:e=>!0===e||!1===e,isObject:$,isPlainObject:z,isEmptyObject:e=>{if(!$(e)||D(e))return!1;try{return 0===Object.keys(e).length&&Object.getPrototypeOf(e)===Object.prototype}catch(t){return!1}},isReadableStream:W,isRequest:G,isResponse:J,isHeaders:Y,isUndefined:A,isDate:q,isFile:M,isBlob:H,isRegExp:oe,isFunction:I,isStream:e=>$(e)&&I(e.pipe),isURLSearchParams:K,isTypedArray:te,isFileList:V,forEach:Q,merge:function e(){const{caseless:t,skipUndefined:r}=ee(this)&&this||{},n={},o=(o,s)=>{const i=t&&X(n,s)||s;z(n[i])&&z(o)?n[i]=e(n[i],o):z(o)?n[i]=e({},o):L(o)?n[i]=o.slice():r&&A(o)||(n[i]=o)};for(let s=0,i=arguments.length;s<i;s++)arguments[s]&&Q(arguments[s],o);return n},extend:(e,t,r,{allOwnKeys:n}={})=>(Q(t,(t,n)=>{r&&I(t)?e[n]=E(t,r):e[n]=t},{allOwnKeys:n}),e),trim:e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:e=>(65279===e.charCodeAt(0)&&(e=e.slice(1)),e),inherits:(e,t,r,n)=>{e.prototype=Object.create(t.prototype,n),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),r&&Object.assign(e.prototype,r)},toFlatObject:(e,t,r,n)=>{let o,s,i;const a={};if(t=t||{},null==e)return t;do{for(o=Object.getOwnPropertyNames(e),s=o.length;s-- >0;)i=o[s],n&&!n(i,e,t)||a[i]||(t[i]=e[i],a[i]=!0);e=!1!==r&&k(e)}while(e&&(!r||r(e,t))&&e!==Object.prototype);return t},kindOf:R,kindOfTest:O,endsWith:(e,t,r)=>{e=String(e),(void 0===r||r>e.length)&&(r=e.length),r-=t.length;const n=e.indexOf(t,r);return-1!==n&&n===r},toArray:e=>{if(!e)return null;if(L(e))return e;let t=e.length;if(!B(t))return null;const r=new Array(t);for(;t-- >0;)r[t]=e[t];return r},forEachEntry:(e,t)=>{const r=(e&&e[N]).call(e);let n;for(;(n=r.next())&&!n.done;){const r=n.value;t.call(e,r[0],r[1])}},matchAll:(e,t)=>{let r;const n=[];for(;null!==(r=e.exec(t));)n.push(r);return n},isHTMLForm:re,hasOwnProperty:ne,hasOwnProp:ne,reduceDescriptors:se,freezeMethods:e=>{se(e,(t,r)=>{if(I(e)&&-1!==["arguments","caller","callee"].indexOf(r))return!1;const n=e[r];I(n)&&(t.enumerable=!1,"writable"in t?t.writable=!1:t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+r+"'")}))})},toObjectSet:(e,t)=>{const r={},n=e=>{e.forEach(e=>{r[e]=!0})};return L(e)?n(e):n(String(e).split(t)),r},toCamelCase:e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(e,t,r){return t.toUpperCase()+r}),noop:()=>{},toFiniteNumber:(e,t)=>null!=e&&Number.isFinite(e=+e)?e:t,findKey:X,global:Z,isContextDefined:ee,isSpecCompliantForm:function(e){return!!(e&&I(e.append)&&"FormData"===e[P]&&e[N])},toJSONObject:e=>{const t=new Array(10),r=(e,n)=>{if($(e)){if(t.indexOf(e)>=0)return;if(D(e))return e;if(!("toJSON"in e)){t[n]=e;const o=L(e)?[]:{};return Q(e,(e,t)=>{const s=r(e,n+1);!A(s)&&(o[t]=s)}),t[n]=void 0,o}}return e};return r(e,0)},isAsyncFn:ie,isThenable:e=>e&&($(e)||I(e))&&I(e.then)&&I(e.catch),setImmediate:ae,asap:pe,isIterable:e=>null!=e&&I(e[N])};function he(e,t,r,n,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=e,this.name="AxiosError",t&&(this.code=t),r&&(this.config=r),n&&(this.request=n),o&&(this.response=o,this.status=o.status?o.status:null)}ge.inherits(he,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:ge.toJSONObject(this.config),code:this.code,status:this.status}}});const fe=he.prototype,me={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{me[e]={value:e}}),Object.defineProperties(he,me),Object.defineProperty(fe,"isAxiosError",{value:!0}),he.from=(e,t,r,n,o,s)=>{const i=Object.create(fe);ge.toFlatObject(e,i,function(e){return e!==Error.prototype},e=>"isAxiosError"!==e);const a=e&&e.message?e.message:"Error",c=null==t&&e?e.code:t;return he.call(i,a,c,r,n,o),e&&null==i.cause&&Object.defineProperty(i,"cause",{value:e,configurable:!0}),i.name=e&&e.name||"Error",s&&Object.assign(i,s),i};function xe(e){return ge.isPlainObject(e)||ge.isArray(e)}function ye(e){return ge.endsWith(e,"[]")?e.slice(0,-2):e}function be(e,t,r){return e?e.concat(t).map(function(e,t){return e=ye(e),!r&&t?"["+e+"]":e}).join(r?".":""):t}const we=ge.toFlatObject(ge,{},null,function(e){return/^is[A-Z]/.test(e)});function ve(e,t,r){if(!ge.isObject(e))throw new TypeError("target must be an object");t=t||new FormData;const n=(r=ge.toFlatObject(r,{metaTokens:!0,dots:!1,indexes:!1},!1,function(e,t){return!ge.isUndefined(t[e])})).metaTokens,o=r.visitor||l,s=r.dots,i=r.indexes,a=(r.Blob||"undefined"!=typeof Blob&&Blob)&&ge.isSpecCompliantForm(t);if(!ge.isFunction(o))throw new TypeError("visitor must be a function");function c(e){if(null===e)return"";if(ge.isDate(e))return e.toISOString();if(ge.isBoolean(e))return e.toString();if(!a&&ge.isBlob(e))throw new he("Blob is not supported. Use a Buffer instead.");return ge.isArrayBuffer(e)||ge.isTypedArray(e)?a&&"function"==typeof Blob?new Blob([e]):Buffer.from(e):e}function l(e,r,o){let a=e;if(e&&!o&&"object"==typeof e)if(ge.endsWith(r,"{}"))r=n?r:r.slice(0,-2),e=JSON.stringify(e);else if(ge.isArray(e)&&function(e){return ge.isArray(e)&&!e.some(xe)}(e)||(ge.isFileList(e)||ge.endsWith(r,"[]"))&&(a=ge.toArray(e)))return r=ye(r),a.forEach(function(e,n){!ge.isUndefined(e)&&null!==e&&t.append(!0===i?be([r],n,s):null===i?r:r+"[]",c(e))}),!1;return!!xe(e)||(t.append(be(o,r,s),c(e)),!1)}const d=[],u=Object.assign(we,{defaultVisitor:l,convertValue:c,isVisitable:xe});if(!ge.isObject(e))throw new TypeError("data must be an object");return function e(r,n){if(!ge.isUndefined(r)){if(-1!==d.indexOf(r))throw Error("Circular reference detected in "+n.join("."));d.push(r),ge.forEach(r,function(r,s){!0===(!(ge.isUndefined(r)||null===r)&&o.call(t,r,ge.isString(s)?s.trim():s,n,u))&&e(r,n?n.concat(s):[s])}),d.pop()}}(e),t}function je(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(e){return t[e]})}function Se(e,t){this._pairs=[],e&&ve(e,this,t)}const _e=Se.prototype;function Ee(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function Ce(e,t,r){if(!t)return e;const n=r&&r.encode||Ee;ge.isFunction(r)&&(r={serialize:r});const o=r&&r.serialize;let s;if(s=o?o(t,r):ge.isURLSearchParams(t)?t.toString():new Se(t,r).toString(n),s){const t=e.indexOf("#");-1!==t&&(e=e.slice(0,t)),e+=(-1===e.indexOf("?")?"?":"&")+s}return e}_e.append=function(e,t){this._pairs.push([e,t])},_e.toString=function(e){const t=e?function(t){return e.call(this,t,je)}:je;return this._pairs.map(function(e){return t(e[0])+"="+t(e[1])},"").join("&")};class ke{constructor(){this.handlers=[]}use(e,t,r){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!r&&r.synchronous,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){ge.forEach(this.handlers,function(t){null!==t&&e(t)})}}const Ne={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Pe={isBrowser:!0,classes:{URLSearchParams:"undefined"!=typeof URLSearchParams?URLSearchParams:Se,FormData:"undefined"!=typeof FormData?FormData:null,Blob:"undefined"!=typeof Blob?Blob:null},protocols:["http","https","file","blob","url","data"]},Re="undefined"!=typeof window&&"undefined"!=typeof document,Oe="object"==typeof navigator&&navigator||void 0,Te=Re&&(!Oe||["ReactNative","NativeScript","NS"].indexOf(Oe.product)<0),Le="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts,Ae=Re&&window.location.href||"http://localhost",De={...Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Re,hasStandardBrowserEnv:Te,hasStandardBrowserWebWorkerEnv:Le,navigator:Oe,origin:Ae},Symbol.toStringTag,{value:"Module"})),...Pe};function Ue(e){function t(e,r,n,o){let s=e[o++];if("__proto__"===s)return!0;const i=Number.isFinite(+s),a=o>=e.length;if(s=!s&&ge.isArray(n)?n.length:s,a)return ge.hasOwnProp(n,s)?n[s]=[n[s],r]:n[s]=r,!i;n[s]&&ge.isObject(n[s])||(n[s]=[]);return t(e,r,n[s],o)&&ge.isArray(n[s])&&(n[s]=function(e){const t={},r=Object.keys(e);let n;const o=r.length;let s;for(n=0;n<o;n++)s=r[n],t[s]=e[s];return t}(n[s])),!i}if(ge.isFormData(e)&&ge.isFunction(e.entries)){const r={};return ge.forEachEntry(e,(e,n)=>{t(function(e){return ge.matchAll(/\w+|\[(\w*)]/g,e).map(e=>"[]"===e[0]?"":e[1]||e[0])}(e),n,r,0)}),r}return null}const Fe={transitional:Ne,adapter:["xhr","http","fetch"],transformRequest:[function(e,t){const r=t.getContentType()||"",n=r.indexOf("application/json")>-1,o=ge.isObject(e);o&&ge.isHTMLForm(e)&&(e=new FormData(e));if(ge.isFormData(e))return n?JSON.stringify(Ue(e)):e;if(ge.isArrayBuffer(e)||ge.isBuffer(e)||ge.isStream(e)||ge.isFile(e)||ge.isBlob(e)||ge.isReadableStream(e))return e;if(ge.isArrayBufferView(e))return e.buffer;if(ge.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let s;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return function(e,t){return ve(e,new De.classes.URLSearchParams,{visitor:function(e,t,r,n){return De.isNode&&ge.isBuffer(e)?(this.append(t,e.toString("base64")),!1):n.defaultVisitor.apply(this,arguments)},...t})}(e,this.formSerializer).toString();if((s=ge.isFileList(e))||r.indexOf("multipart/form-data")>-1){const t=this.env&&this.env.FormData;return ve(s?{"files[]":e}:e,t&&new t,this.formSerializer)}}return o||n?(t.setContentType("application/json",!1),function(e,t,r){if(ge.isString(e))try{return(t||JSON.parse)(e),ge.trim(e)}catch(n){if("SyntaxError"!==n.name)throw n}return(r||JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){const t=this.transitional||Fe.transitional,r=t&&t.forcedJSONParsing,n="json"===this.responseType;if(ge.isResponse(e)||ge.isReadableStream(e))return e;if(e&&ge.isString(e)&&(r&&!this.responseType||n)){const r=!(t&&t.silentJSONParsing)&&n;try{return JSON.parse(e,this.parseReviver)}catch(o){if(r){if("SyntaxError"===o.name)throw he.from(o,he.ERR_BAD_RESPONSE,this,null,this.response);throw o}}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:De.classes.FormData,Blob:De.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};ge.forEach(["delete","get","head","post","put","patch"],e=>{Fe.headers[e]={}});const Ie=ge.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Be=Symbol("internals");function $e(e){return e&&String(e).trim().toLowerCase()}function ze(e){return!1===e||null==e?e:ge.isArray(e)?e.map(ze):String(e)}function qe(e,t,r,n,o){return ge.isFunction(n)?n.call(this,t,r):(o&&(t=r),ge.isString(t)?ge.isString(n)?-1!==t.indexOf(n):ge.isRegExp(n)?n.test(t):void 0:void 0)}let Me=class{constructor(e){e&&this.set(e)}set(e,t,r){const n=this;function o(e,t,r){const o=$e(t);if(!o)throw new Error("header name must be a non-empty string");const s=ge.findKey(n,o);(!s||void 0===n[s]||!0===r||void 0===r&&!1!==n[s])&&(n[s||t]=ze(e))}const s=(e,t)=>ge.forEach(e,(e,r)=>o(e,r,t));if(ge.isPlainObject(e)||e instanceof this.constructor)s(e,t);else if(ge.isString(e)&&(e=e.trim())&&!/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim()))s((e=>{const t={};let r,n,o;return e&&e.split("\n").forEach(function(e){o=e.indexOf(":"),r=e.substring(0,o).trim().toLowerCase(),n=e.substring(o+1).trim(),!r||t[r]&&Ie[r]||("set-cookie"===r?t[r]?t[r].push(n):t[r]=[n]:t[r]=t[r]?t[r]+", "+n:n)}),t})(e),t);else if(ge.isObject(e)&&ge.isIterable(e)){let r,n,o={};for(const t of e){if(!ge.isArray(t))throw TypeError("Object iterator must return a key-value pair");o[n=t[0]]=(r=o[n])?ge.isArray(r)?[...r,t[1]]:[r,t[1]]:t[1]}s(o,t)}else null!=e&&o(t,e,r);return this}get(e,t){if(e=$e(e)){const r=ge.findKey(this,e);if(r){const e=this[r];if(!t)return e;if(!0===t)return function(e){const t=Object.create(null),r=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let n;for(;n=r.exec(e);)t[n[1]]=n[2];return t}(e);if(ge.isFunction(t))return t.call(this,e,r);if(ge.isRegExp(t))return t.exec(e);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=$e(e)){const r=ge.findKey(this,e);return!(!r||void 0===this[r]||t&&!qe(0,this[r],r,t))}return!1}delete(e,t){const r=this;let n=!1;function o(e){if(e=$e(e)){const o=ge.findKey(r,e);!o||t&&!qe(0,r[o],o,t)||(delete r[o],n=!0)}}return ge.isArray(e)?e.forEach(o):o(e),n}clear(e){const t=Object.keys(this);let r=t.length,n=!1;for(;r--;){const o=t[r];e&&!qe(0,this[o],o,e,!0)||(delete this[o],n=!0)}return n}normalize(e){const t=this,r={};return ge.forEach(this,(n,o)=>{const s=ge.findKey(r,o);if(s)return t[s]=ze(n),void delete t[o];const i=e?function(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,t,r)=>t.toUpperCase()+r)}(o):String(o).trim();i!==o&&delete t[o],t[i]=ze(n),r[i]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return ge.forEach(this,(r,n)=>{null!=r&&!1!==r&&(t[n]=e&&ge.isArray(r)?r.join(", "):r)}),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,t])=>e+": "+t).join("\n")}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const r=new this(e);return t.forEach(e=>r.set(e)),r}static accessor(e){const t=(this[Be]=this[Be]={accessors:{}}).accessors,r=this.prototype;function n(e){const n=$e(e);t[n]||(!function(e,t){const r=ge.toCamelCase(" "+t);["get","set","has"].forEach(n=>{Object.defineProperty(e,n+r,{value:function(e,r,o){return this[n].call(this,t,e,r,o)},configurable:!0})})}(r,e),t[n]=!0)}return ge.isArray(e)?e.forEach(n):n(e),this}};function He(e,t){const r=this||Fe,n=t||r,o=Me.from(n.headers);let s=n.data;return ge.forEach(e,function(e){s=e.call(r,s,o.normalize(),t?t.status:void 0)}),o.normalize(),s}function Ve(e){return!(!e||!e.__CANCEL__)}function Ke(e,t,r){he.call(this,null==e?"canceled":e,he.ERR_CANCELED,t,r),this.name="CanceledError"}function We(e,t,r){const n=r.config.validateStatus;r.status&&n&&!n(r.status)?t(new he("Request failed with status code "+r.status,[he.ERR_BAD_REQUEST,he.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r)):e(r)}Me.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),ge.reduceDescriptors(Me.prototype,({value:e},t)=>{let r=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(e){this[r]=e}}}),ge.freezeMethods(Me),ge.inherits(Ke,he,{__CANCEL__:!0});const Ge=(e,t,r=3)=>{let n=0;const o=function(e,t){e=e||10;const r=new Array(e),n=new Array(e);let o,s=0,i=0;return t=void 0!==t?t:1e3,function(a){const c=Date.now(),l=n[i];o||(o=c),r[s]=a,n[s]=c;let d=i,u=0;for(;d!==s;)u+=r[d++],d%=e;if(s=(s+1)%e,s===i&&(i=(i+1)%e),c-o<t)return;const p=l&&c-l;return p?Math.round(1e3*u/p):void 0}}(50,250);return function(e,t){let r,n,o=0,s=1e3/t;const i=(t,s=Date.now())=>{o=s,r=null,n&&(clearTimeout(n),n=null),e(...t)};return[(...e)=>{const t=Date.now(),a=t-o;a>=s?i(e,t):(r=e,n||(n=setTimeout(()=>{n=null,i(r)},s-a)))},()=>r&&i(r)]}(r=>{const s=r.loaded,i=r.lengthComputable?r.total:void 0,a=s-n,c=o(a);n=s;e({loaded:s,total:i,progress:i?s/i:void 0,bytes:a,rate:c||void 0,estimated:c&&i&&s<=i?(i-s)/c:void 0,event:r,lengthComputable:null!=i,[t?"download":"upload"]:!0})},r)},Je=(e,t)=>{const r=null!=e;return[n=>t[0]({lengthComputable:r,total:e,loaded:n}),t[1]]},Ye=e=>(...t)=>ge.asap(()=>e(...t)),Qe=De.hasStandardBrowserEnv?((e,t)=>r=>(r=new URL(r,De.origin),e.protocol===r.protocol&&e.host===r.host&&(t||e.port===r.port)))(new URL(De.origin),De.navigator&&/(msie|trident)/i.test(De.navigator.userAgent)):()=>!0,Xe=De.hasStandardBrowserEnv?{write(e,t,r,n,o,s){const i=[e+"="+encodeURIComponent(t)];ge.isNumber(r)&&i.push("expires="+new Date(r).toGMTString()),ge.isString(n)&&i.push("path="+n),ge.isString(o)&&i.push("domain="+o),!0===s&&i.push("secure"),document.cookie=i.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read:()=>null,remove(){}};function Ze(e,t,r){let n=!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);return e&&(n||0==r)?function(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}(e,t):t}const et=e=>e instanceof Me?{...e}:e;function tt(e,t){t=t||{};const r={};function n(e,t,r,n){return ge.isPlainObject(e)&&ge.isPlainObject(t)?ge.merge.call({caseless:n},e,t):ge.isPlainObject(t)?ge.merge({},t):ge.isArray(t)?t.slice():t}function o(e,t,r,o){return ge.isUndefined(t)?ge.isUndefined(e)?void 0:n(void 0,e,0,o):n(e,t,0,o)}function s(e,t){if(!ge.isUndefined(t))return n(void 0,t)}function i(e,t){return ge.isUndefined(t)?ge.isUndefined(e)?void 0:n(void 0,e):n(void 0,t)}function a(r,o,s){return s in t?n(r,o):s in e?n(void 0,r):void 0}const c={url:s,method:s,data:s,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,withXSRFToken:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:a,headers:(e,t,r)=>o(et(e),et(t),0,!0)};return ge.forEach(Object.keys({...e,...t}),function(n){const s=c[n]||o,i=s(e[n],t[n],n);ge.isUndefined(i)&&s!==a||(r[n]=i)}),r}const rt=e=>{const t=tt({},e);let{data:r,withXSRFToken:n,xsrfHeaderName:o,xsrfCookieName:s,headers:i,auth:a}=t;if(t.headers=i=Me.from(i),t.url=Ce(Ze(t.baseURL,t.url,t.allowAbsoluteUrls),e.params,e.paramsSerializer),a&&i.set("Authorization","Basic "+btoa((a.username||"")+":"+(a.password?unescape(encodeURIComponent(a.password)):""))),ge.isFormData(r))if(De.hasStandardBrowserEnv||De.hasStandardBrowserWebWorkerEnv)i.setContentType(void 0);else if(ge.isFunction(r.getHeaders)){const e=r.getHeaders(),t=["content-type","content-length"];Object.entries(e).forEach(([e,r])=>{t.includes(e.toLowerCase())&&i.set(e,r)})}if(De.hasStandardBrowserEnv&&(n&&ge.isFunction(n)&&(n=n(t)),n||!1!==n&&Qe(t.url))){const e=o&&s&&Xe.read(s);e&&i.set(o,e)}return t},nt="undefined"!=typeof XMLHttpRequest&&function(e){return new Promise(function(t,r){const n=rt(e);let o=n.data;const s=Me.from(n.headers).normalize();let i,a,c,l,d,{responseType:u,onUploadProgress:p,onDownloadProgress:g}=n;function h(){l&&l(),d&&d(),n.cancelToken&&n.cancelToken.unsubscribe(i),n.signal&&n.signal.removeEventListener("abort",i)}let f=new XMLHttpRequest;function m(){if(!f)return;const n=Me.from("getAllResponseHeaders"in f&&f.getAllResponseHeaders());We(function(e){t(e),h()},function(e){r(e),h()},{data:u&&"text"!==u&&"json"!==u?f.response:f.responseText,status:f.status,statusText:f.statusText,headers:n,config:e,request:f}),f=null}f.open(n.method.toUpperCase(),n.url,!0),f.timeout=n.timeout,"onloadend"in f?f.onloadend=m:f.onreadystatechange=function(){f&&4===f.readyState&&(0!==f.status||f.responseURL&&0===f.responseURL.indexOf("file:"))&&setTimeout(m)},f.onabort=function(){f&&(r(new he("Request aborted",he.ECONNABORTED,e,f)),f=null)},f.onerror=function(t){const n=new he(t&&t.message?t.message:"Network Error",he.ERR_NETWORK,e,f);n.event=t||null,r(n),f=null},f.ontimeout=function(){let t=n.timeout?"timeout of "+n.timeout+"ms exceeded":"timeout exceeded";const o=n.transitional||Ne;n.timeoutErrorMessage&&(t=n.timeoutErrorMessage),r(new he(t,o.clarifyTimeoutError?he.ETIMEDOUT:he.ECONNABORTED,e,f)),f=null},void 0===o&&s.setContentType(null),"setRequestHeader"in f&&ge.forEach(s.toJSON(),function(e,t){f.setRequestHeader(t,e)}),ge.isUndefined(n.withCredentials)||(f.withCredentials=!!n.withCredentials),u&&"json"!==u&&(f.responseType=n.responseType),g&&([c,d]=Ge(g,!0),f.addEventListener("progress",c)),p&&f.upload&&([a,l]=Ge(p),f.upload.addEventListener("progress",a),f.upload.addEventListener("loadend",l)),(n.cancelToken||n.signal)&&(i=t=>{f&&(r(!t||t.type?new Ke(null,e,f):t),f.abort(),f=null)},n.cancelToken&&n.cancelToken.subscribe(i),n.signal&&(n.signal.aborted?i():n.signal.addEventListener("abort",i)));const x=function(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}(n.url);x&&-1===De.protocols.indexOf(x)?r(new he("Unsupported protocol "+x+":",he.ERR_BAD_REQUEST,e)):f.send(o||null)})},ot=(e,t)=>{const{length:r}=e=e?e.filter(Boolean):[];if(t||r){let r,n=new AbortController;const o=function(e){if(!r){r=!0,i();const t=e instanceof Error?e:this.reason;n.abort(t instanceof he?t:new Ke(t instanceof Error?t.message:t))}};let s=t&&setTimeout(()=>{s=null,o(new he(`timeout ${t} of ms exceeded`,he.ETIMEDOUT))},t);const i=()=>{e&&(s&&clearTimeout(s),s=null,e.forEach(e=>{e.unsubscribe?e.unsubscribe(o):e.removeEventListener("abort",o)}),e=null)};e.forEach(e=>e.addEventListener("abort",o));const{signal:a}=n;return a.unsubscribe=()=>ge.asap(i),a}},st=function*(e,t){let r=e.byteLength;if(r<t)return void(yield e);let n,o=0;for(;o<r;)n=o+t,yield e.slice(o,n),o=n},it=async function*(e){if(e[Symbol.asyncIterator])return void(yield*e);const t=e.getReader();try{for(;;){const{done:e,value:r}=await t.read();if(e)break;yield r}}finally{await t.cancel()}},at=(e,t,r,n)=>{const o=async function*(e,t){for await(const r of it(e))yield*st(r,t)}(e,t);let s,i=0,a=e=>{s||(s=!0,n&&n(e))};return new ReadableStream({async pull(e){try{const{done:t,value:n}=await o.next();if(t)return a(),void e.close();let s=n.byteLength;if(r){let e=i+=s;r(e)}e.enqueue(new Uint8Array(n))}catch(t){throw a(t),t}},cancel:e=>(a(e),o.return())},{highWaterMark:2})},{isFunction:ct}=ge,lt=(({Request:e,Response:t})=>({Request:e,Response:t}))(ge.global),{ReadableStream:dt,TextEncoder:ut}=ge.global,pt=(e,...t)=>{try{return!!e(...t)}catch(r){return!1}},gt=e=>{e=ge.merge.call({skipUndefined:!0},lt,e);const{fetch:t,Request:r,Response:n}=e,o=t?ct(t):"function"==typeof fetch,s=ct(r),i=ct(n);if(!o)return!1;const a=o&&ct(dt),c=o&&("function"==typeof ut?(e=>t=>e.encode(t))(new ut):async e=>new Uint8Array(await new r(e).arrayBuffer())),l=s&&a&&pt(()=>{let e=!1;const t=new r(De.origin,{body:new dt,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t}),d=i&&a&&pt(()=>ge.isReadableStream(new n("").body)),u={stream:d&&(e=>e.body)};o&&["text","arrayBuffer","blob","formData","stream"].forEach(e=>{!u[e]&&(u[e]=(t,r)=>{let n=t&&t[e];if(n)return n.call(t);throw new he(`Response type '${e}' is not supported`,he.ERR_NOT_SUPPORT,r)})});const p=async(e,t)=>{const n=ge.toFiniteNumber(e.getContentLength());return null==n?(async e=>{if(null==e)return 0;if(ge.isBlob(e))return e.size;if(ge.isSpecCompliantForm(e)){const t=new r(De.origin,{method:"POST",body:e});return(await t.arrayBuffer()).byteLength}return ge.isArrayBufferView(e)||ge.isArrayBuffer(e)?e.byteLength:(ge.isURLSearchParams(e)&&(e+=""),ge.isString(e)?(await c(e)).byteLength:void 0)})(t):n};return async e=>{let{url:o,method:i,data:a,signal:c,cancelToken:g,timeout:h,onDownloadProgress:f,onUploadProgress:m,responseType:x,headers:y,withCredentials:b="same-origin",fetchOptions:w}=rt(e),v=t||fetch;x=x?(x+"").toLowerCase():"text";let j=ot([c,g&&g.toAbortSignal()],h),S=null;const _=j&&j.unsubscribe&&(()=>{j.unsubscribe()});let E;try{if(m&&l&&"get"!==i&&"head"!==i&&0!==(E=await p(y,a))){let e,t=new r(o,{method:"POST",body:a,duplex:"half"});if(ge.isFormData(a)&&(e=t.headers.get("content-type"))&&y.setContentType(e),t.body){const[e,r]=Je(E,Ge(Ye(m)));a=at(t.body,65536,e,r)}}ge.isString(b)||(b=b?"include":"omit");const t=s&&"credentials"in r.prototype,c={...w,signal:j,method:i.toUpperCase(),headers:y.normalize().toJSON(),body:a,duplex:"half",credentials:t?b:void 0};S=s&&new r(o,c);let g=await(s?v(S,w):v(o,c));const h=d&&("stream"===x||"response"===x);if(d&&(f||h&&_)){const e={};["status","statusText","headers"].forEach(t=>{e[t]=g[t]});const t=ge.toFiniteNumber(g.headers.get("content-length")),[r,o]=f&&Je(t,Ge(Ye(f),!0))||[];g=new n(at(g.body,65536,r,()=>{o&&o(),_&&_()}),e)}x=x||"text";let C=await u[ge.findKey(u,x)||"text"](g,e);return!h&&_&&_(),await new Promise((t,r)=>{We(t,r,{data:C,headers:Me.from(g.headers),status:g.status,statusText:g.statusText,config:e,request:S})})}catch(C){if(_&&_(),C&&"TypeError"===C.name&&/Load failed|fetch/i.test(C.message))throw Object.assign(new he("Network Error",he.ERR_NETWORK,e,S),{cause:C.cause||C});throw he.from(C,C&&C.code,e,S)}}},ht=new Map,ft=e=>{let t=e?e.env:{};const{fetch:r,Request:n,Response:o}=t,s=[n,o,r];let i,a,c=s.length,l=ht;for(;c--;)i=s[c],a=l.get(i),void 0===a&&l.set(i,a=c?new Map:gt(t)),l=a;return a};ft();const mt={http:null,xhr:nt,fetch:{get:ft}};ge.forEach(mt,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch(r){}Object.defineProperty(e,"adapterName",{value:t})}});const xt=e=>`- ${e}`,yt=e=>ge.isFunction(e)||null===e||!1===e,bt=(e,t)=>{e=ge.isArray(e)?e:[e];const{length:r}=e;let n,o;const s={};for(let i=0;i<r;i++){let r;if(n=e[i],o=n,!yt(n)&&(o=mt[(r=String(n)).toLowerCase()],void 0===o))throw new he(`Unknown adapter '${r}'`);if(o&&(ge.isFunction(o)||(o=o.get(t))))break;s[r||"#"+i]=o}if(!o){const e=Object.entries(s).map(([e,t])=>`adapter ${e} `+(!1===t?"is not supported by the environment":"is not available in the build"));throw new he("There is no suitable adapter to dispatch the request "+(r?e.length>1?"since :\n"+e.map(xt).join("\n"):" "+xt(e[0]):"as no adapter specified"),"ERR_NOT_SUPPORT")}return o};function wt(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Ke(null,e)}function vt(e){wt(e),e.headers=Me.from(e.headers),e.data=He.call(e,e.transformRequest),-1!==["post","put","patch"].indexOf(e.method)&&e.headers.setContentType("application/x-www-form-urlencoded",!1);return bt(e.adapter||Fe.adapter,e)(e).then(function(t){return wt(e),t.data=He.call(e,e.transformResponse,t),t.headers=Me.from(t.headers),t},function(t){return Ve(t)||(wt(e),t&&t.response&&(t.response.data=He.call(e,e.transformResponse,t.response),t.response.headers=Me.from(t.response.headers))),Promise.reject(t)})}const jt="1.12.2",St={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{St[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const _t={};St.transitional=function(e,t,r){function n(e,t){return"[Axios v"+jt+"] Transitional option '"+e+"'"+t+(r?". "+r:"")}return(r,o,s)=>{if(!1===e)throw new he(n(o," has been removed"+(t?" in "+t:"")),he.ERR_DEPRECATED);return t&&!_t[o]&&(_t[o]=!0,console.warn(n(o," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(r,o,s)}},St.spelling=function(e){return(t,r)=>(console.warn(`${r} is likely a misspelling of ${e}`),!0)};const Et={assertOptions:function(e,t,r){if("object"!=typeof e)throw new he("options must be an object",he.ERR_BAD_OPTION_VALUE);const n=Object.keys(e);let o=n.length;for(;o-- >0;){const s=n[o],i=t[s];if(i){const t=e[s],r=void 0===t||i(t,s,e);if(!0!==r)throw new he("option "+s+" must be "+r,he.ERR_BAD_OPTION_VALUE);continue}if(!0!==r)throw new he("Unknown option "+s,he.ERR_BAD_OPTION)}},validators:St},Ct=Et.validators;let kt=class{constructor(e){this.defaults=e||{},this.interceptors={request:new ke,response:new ke}}async request(e,t){try{return await this._request(e,t)}catch(r){if(r instanceof Error){let e={};Error.captureStackTrace?Error.captureStackTrace(e):e=new Error;const t=e.stack?e.stack.replace(/^.+\n/,""):"";try{r.stack?t&&!String(r.stack).endsWith(t.replace(/^.+\n.+\n/,""))&&(r.stack+="\n"+t):r.stack=t}catch(n){}}throw r}}_request(e,t){"string"==typeof e?(t=t||{}).url=e:t=e||{},t=tt(this.defaults,t);const{transitional:r,paramsSerializer:n,headers:o}=t;void 0!==r&&Et.assertOptions(r,{silentJSONParsing:Ct.transitional(Ct.boolean),forcedJSONParsing:Ct.transitional(Ct.boolean),clarifyTimeoutError:Ct.transitional(Ct.boolean)},!1),null!=n&&(ge.isFunction(n)?t.paramsSerializer={serialize:n}:Et.assertOptions(n,{encode:Ct.function,serialize:Ct.function},!0)),void 0!==t.allowAbsoluteUrls||(void 0!==this.defaults.allowAbsoluteUrls?t.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:t.allowAbsoluteUrls=!0),Et.assertOptions(t,{baseUrl:Ct.spelling("baseURL"),withXsrfToken:Ct.spelling("withXSRFToken")},!0),t.method=(t.method||this.defaults.method||"get").toLowerCase();let s=o&&ge.merge(o.common,o[t.method]);o&&ge.forEach(["delete","get","head","post","put","patch","common"],e=>{delete o[e]}),t.headers=Me.concat(s,o);const i=[];let a=!0;this.interceptors.request.forEach(function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(a=a&&e.synchronous,i.unshift(e.fulfilled,e.rejected))});const c=[];let l;this.interceptors.response.forEach(function(e){c.push(e.fulfilled,e.rejected)});let d,u=0;if(!a){const e=[vt.bind(this),void 0];for(e.unshift(...i),e.push(...c),d=e.length,l=Promise.resolve(t);u<d;)l=l.then(e[u++],e[u++]);return l}d=i.length;let p=t;for(;u<d;){const e=i[u++],t=i[u++];try{p=e(p)}catch(g){t.call(this,g);break}}try{l=vt.call(this,p)}catch(g){return Promise.reject(g)}for(u=0,d=c.length;u<d;)l=l.then(c[u++],c[u++]);return l}getUri(e){return Ce(Ze((e=tt(this.defaults,e)).baseURL,e.url,e.allowAbsoluteUrls),e.params,e.paramsSerializer)}};ge.forEach(["delete","get","head","options"],function(e){kt.prototype[e]=function(t,r){return this.request(tt(r||{},{method:e,url:t,data:(r||{}).data}))}}),ge.forEach(["post","put","patch"],function(e){function t(t){return function(r,n,o){return this.request(tt(o||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:r,data:n}))}}kt.prototype[e]=t(),kt.prototype[e+"Form"]=t(!0)});const Nt={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Nt).forEach(([e,t])=>{Nt[t]=e});const Pt=function e(t){const r=new kt(t),n=E(kt.prototype.request,r);return ge.extend(n,kt.prototype,r,{allOwnKeys:!0}),ge.extend(n,r,null,{allOwnKeys:!0}),n.create=function(r){return e(tt(t,r))},n}(Fe);Pt.Axios=kt,Pt.CanceledError=Ke,Pt.CancelToken=class e{constructor(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");let t;this.promise=new Promise(function(e){t=e});const r=this;this.promise.then(e=>{if(!r._listeners)return;let t=r._listeners.length;for(;t-- >0;)r._listeners[t](e);r._listeners=null}),this.promise.then=e=>{let t;const n=new Promise(e=>{r.subscribe(e),t=e}).then(e);return n.cancel=function(){r.unsubscribe(t)},n},e(function(e,n,o){r.reason||(r.reason=new Ke(e,n,o),t(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}toAbortSignal(){const e=new AbortController,t=t=>{e.abort(t)};return this.subscribe(t),e.signal.unsubscribe=()=>this.unsubscribe(t),e.signal}static source(){let t;return{token:new e(function(e){t=e}),cancel:t}}},Pt.isCancel=Ve,Pt.VERSION=jt,Pt.toFormData=ve,Pt.AxiosError=he,Pt.Cancel=Pt.CanceledError,Pt.all=function(e){return Promise.all(e)},Pt.spread=function(e){return function(t){return e.apply(null,t)}},Pt.isAxiosError=function(e){return ge.isObject(e)&&!0===e.isAxiosError},Pt.mergeConfig=tt,Pt.AxiosHeaders=Me,Pt.formToJSON=e=>Ue(ge.isHTMLForm(e)?new FormData(e):e),Pt.getAdapter=bt,Pt.HttpStatusCode=Nt,Pt.default=Pt;const{Axios:Rt,AxiosError:Ot,CanceledError:Tt,isCancel:Lt,CancelToken:At,VERSION:Dt,all:Ut,Cancel:Ft,isAxiosError:It,spread:Bt,toFormData:$t,AxiosHeaders:zt,HttpStatusCode:qt,formToJSON:Mt,getAdapter:Ht,mergeConfig:Vt}=Pt,Kt="http://127.0.0.1:8080";console.log(`🌐 [API CONFIG] API_BASE_URL: ${Kt}`),console.log("🌐 [API CONFIG] VITE_API_BASE_URL from env: http://127.0.0.1:8080");const Wt=Pt.create({baseURL:Kt,timeout:3e4,headers:{"Content-Type":"application/json"},transformResponse:[e=>{if("string"==typeof e)try{return JSON.parse(e)}catch(t){return console.error("Error parsing JSON response:",t),e}return e}]});Wt.interceptors.request.use(e=>e,e=>Promise.reject(e)),Wt.interceptors.response.use(e=>{const t=(e.config.baseURL||"")+(e.config.url||"");if(console.log(`API Response: ${e.status} ${t}`),e.config.url&&e.config.url.includes("/api/search/comprehensive")&&e.data&&e.data.items){const t=e.data.items;if(t.length>0){const r=t[0],n="is_saved_in_db"in r,o=e.request?.responseText||"",s=o.includes("is_saved_in_db");console.log("🔍 [API INTERCEPTOR] First product in response:",{product_id:r.product_id,has_is_saved_in_db:n,is_saved_in_db:r.is_saved_in_db,product_category:r.product_category,custom_title:r.custom_title,all_keys:Object.keys(r).slice(0,20),has_is_saved_in_db_in_raw_response:s,raw_response_sample:o.substring(0,500)}),s&&!n&&console.warn("⚠️ [API INTERCEPTOR] is_saved_in_db exists in raw response but not in parsed data!")}}return e},e=>(console.error("API Response Error:",e),Promise.reject(e)));const Gt=async e=>(await Wt.post("/api/like",e)).data,Jt=[{name:"Dark",value:"dark",icon:"🌙"},{name:"Light",value:"light",icon:"☀️"},{name:"Auto",value:"auto",icon:"🔄"}];const Yt=new class{logs=[];maxLogs=100;storageKey="currency-debug-logs";log(e,t,r,n){const o={timestamp:(new Date).toISOString(),level:e,component:t,message:r,data:n};this.logs.unshift(o),this.logs.length>this.maxLogs&&(this.logs=this.logs.slice(0,this.maxLogs)),this.saveToStorage();console["ERROR"===e?"error":"WARN"===e?"warn":"DEBUG"===e?"log":"info"](`[${e}] ${t}: ${r}`,n||"")}info(e,t,r){this.log("INFO",e,t,r)}warn(e,t,r){this.log("WARN",e,t,r)}error(e,t,r){this.log("ERROR",e,t,r)}debug(e,t,r){this.log("DEBUG",e,t,r)}getLogs(){return[...this.logs]}getLogsAsString(){return this.logs.map(e=>`[${e.timestamp}] ${e.level} ${e.component}: ${e.message}${e.data?" | Data: "+JSON.stringify(e.data,null,2):""}`).join("\n")}clearLogs(){this.logs=[],this.saveToStorage()}saveToStorage(){try{localStorage.setItem(this.storageKey,JSON.stringify(this.logs))}catch(e){console.warn("Failed to save logs to localStorage:",e)}}loadFromStorage(){try{const e=localStorage.getItem(this.storageKey);e&&(this.logs=JSON.parse(e))}catch(e){console.warn("Failed to load logs from localStorage:",e),this.logs=[]}}initialize(){this.loadFromStorage()}async copyLogsToClipboard(){try{const e=this.getLogsAsString();return await navigator.clipboard.writeText(e),this.info("CurrencyLogger","Logs copied to clipboard successfully"),!0}catch(e){return this.error("CurrencyLogger","Failed to copy logs to clipboard",e),!1}}};window.currencyLogger=Yt;const Qt=()=>{const e=localStorage.getItem("preferred-currency");Yt.info("CurrencyState","Current currency from localStorage",{currentCurrency:e});const t={localStorage:e,timestamp:(new Date).toISOString(),userAgent:navigator.userAgent,url:window.location.href};Yt.info("CurrencyState","Complete currency state",t)},Xt=async(e,t,r)=>{Yt.info("CurrencyTest",`Testing conversion: ${e} ${t} -> ${r}`);try{const n=await fetch("/api/currency/convert",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({price:e,from_currency:t,to_currency:r})});if(!n.ok)throw new Error(`HTTP ${n.status}: ${n.statusText}`);const o=await n.json();return Yt.info("CurrencyTest","Conversion successful",o),o}catch(n){throw Yt.error("CurrencyTest","Conversion failed",n),n}},Zt=()=>{const e=Yt.getLogs();return`\n=== CURRENCY CONVERSION DEBUG LOGS ===\nGenerated: ${(new Date).toISOString()}\nURL: ${window.location.href}\nUser Agent: ${navigator.userAgent}\nCurrent Currency: ${localStorage.getItem("preferred-currency")||"Not set"}\n\n=== LOGS ===\n`+e.map(e=>`[${e.timestamp}] ${e.level} ${e.component}: ${e.message}${e.data?"\nData: "+JSON.stringify(e.data,null,2):""}`).join("\n\n")+"\n\n=== END OF LOGS ==="};window.logCurrentCurrencyState=Qt,window.testCurrencyConversion=Xt,window.getCurrencyLogsForCopy=Zt;const er=[{code:"USD",name:"US Dollar",symbol:"$",flag:"🇺🇸"},{code:"EUR",name:"Euro",symbol:"€",flag:"🇪🇺"},{code:"ILS",name:"Israeli Shekel",symbol:"₪",flag:"🇮🇱"}],tr=()=>{const[e,t]=n.useState("USD");n.useEffect(()=>{const e=localStorage.getItem("preferred-currency");Yt.info("useCurrency","Loading currency from localStorage",{savedCurrency:e,isValidCurrency:e&&er.some(t=>t.code===e)}),e&&er.some(t=>t.code===e)?(t(e),Yt.info("useCurrency","Currency loaded from localStorage",{loadedCurrency:e})):Yt.info("useCurrency","Using default currency USD",{reason:e?"Invalid saved currency":"No saved currency"})},[]);return{currentCurrency:er.find(t=>t.code===e)||er[0],changeCurrency:r=>{Yt.info("useCurrency","Currency change requested",{from:e,to:r}),t(r),localStorage.setItem("preferred-currency",r),Yt.info("useCurrency","Currency changed and saved to localStorage",{newCurrency:r,localStorageValue:localStorage.getItem("preferred-currency")})},formatPrice:(t,r)=>{const n=r||e;try{return new Intl.NumberFormat("en-US",{style:"currency",currency:n}).format(t)}catch(o){const e=er.find(e=>e.code===n);return`${e?.symbol||n} ${t.toFixed(2)}`}},currencies:er}},rr="alibee_search_params",nr={query:"general",page:1,limit:150,hasVideo:void 0,minPrice:0,maxPrice:15e4,sortBy:"price_acs",sortOrder:"desc",category:void 0,target_currency:"USD"},or=()=>{const[e,t]=n.useState(nr);n.useEffect(()=>{try{const e=localStorage.getItem(rr);if(e){const r=JSON.parse(e),n={...nr,...r};t(n)}}catch(e){console.error("Error loading search params from localStorage:",e)}},[]);return{searchParams:e,setSearchParams:n.useCallback(e=>{t(t=>{const r="function"==typeof e?e(t):e;try{localStorage.setItem(rr,JSON.stringify(r))}catch(n){console.error("Error saving search params to localStorage:",n)}return r})},[]),clearSearchParams:n.useCallback(()=>{t(nr);try{localStorage.removeItem(rr)}catch(e){console.error("Error clearing search params from localStorage:",e)}},[])}},sr=()=>{const[e,t]=n.useState(new Set),[r,o]=n.useState(!1);return{likedProducts:e,isLoading:r,checkLikeStatus:n.useCallback(async e=>{try{o(!0);const r=await(async e=>(await Wt.get(`/api/like/${e}/status`)).data)(e);if(r.success){const n=r.is_liked;return t(t=>{const r=new Set(t);return n?r.add(e):r.delete(e),r}),n}return!1}catch(r){return console.error("Error checking like status:",r),!1}finally{o(!1)}},[]),checkBatchLikeStatus:n.useCallback(async e=>{if(0!==e.length)try{o(!0);const r=await(async e=>(await Wt.post("/api/likes/batch-status",e)).data)(e);if(r.success&&r.liked_products){const n=new Set;Object.entries(r.liked_products).forEach(([e,t])=>{t&&n.add(e)}),t(t=>{const r=new Set(t);return e.forEach(e=>{n.has(e)?r.add(e):r.delete(e)}),r})}}catch(r){console.error("Error checking batch like status:",r)}finally{o(!1)}},[]),updateLikeStatus:n.useCallback((e,r)=>{t(t=>{const n=new Set(t);return r?n.add(e):n.delete(e),n})},[])}},ir=e=>{const t=new Set;return e.filter(e=>!t.has(e.id)&&(t.add(e.id),!0))},ar=e=>{let t=[];e.product_small_image_urls?Array.isArray(e.product_small_image_urls)?t=e.product_small_image_urls:e.product_small_image_urls.string&&Array.isArray(e.product_small_image_urls.string)&&(t=e.product_small_image_urls.string):e.images_link?Array.isArray(e.images_link)?t=e.images_link:e.images_link.string&&Array.isArray(e.images_link.string)&&(t=e.images_link.string):e.images&&Array.isArray(e.images)&&(t=e.images);const r={id:e.product_id?.toString()||"",title:e.custom_title||e.product_title||"",price:e.sale_price||0,originalPrice:e.original_price||void 0,currency:e.sale_price_currency||e.original_currency||"USD",originalCurrency:e.original_currency||e.sale_price_currency||"USD",originalPriceCurrency:e.original_price_currency||e.original_price_currency,priceTarget:e.sale_price_target||void 0,originalPriceTarget:e.original_price_target||void 0,currencyTarget:e.sale_price_currency_target||void 0,originalCurrencyTarget:e.original_price_currency_target||void 0,image:e.product_main_image_url||"",images:Array.isArray(t)?t.filter(e=>e&&""!==e.trim()):[],video:e.video_link||e.video||void 0,rating:e.product_score_stars||e.rating_weighted||0,reviewCount:e.review_count||e.latest_volume||0,url:e.promotion_link||e.product_detail_url||"",category:e.product_category||e.first_level_category_name||"",discount:e.discount_percentage||0,commissionRate:e.commission_rate||0,salesVolume:e.latest_volume||0,volume:e.latest_volume||0,productId:e.product_id?.toString()||"",productDetailUrl:e.product_detail_url||"",discountPercentage:e.discount_percentage||0,productScoreStars:e.product_score_stars||0,scoreStars:e.product_score_stars||0,firstLevelCategoryName:e.first_level_category_name||"",secondLevelCategoryName:e.second_level_category_name||"",productCategory:e.product_category||"",customTitle:e.custom_title||(null===e.custom_title?null:void 0),savedProductCategory:(!0===e.is_saved_in_db||"true"===e.is_saved_in_db)&&e.product_category||void 0,isSavedInDb:!0===e.is_saved_in_db||"true"===e.is_saved_in_db||!1};return"1005010266546145"===r.id&&(console.log(`🔍 [MAPPED PRODUCT] Product ${r.id}:`,{raw_is_saved_in_db:e.is_saved_in_db,raw_product_category:e.product_category,productCategory:r.productCategory,savedProductCategory:r.savedProductCategory,customTitle:r.customTitle,all_apiProduct_keys:Object.keys(e).filter(e=>e.includes("category")||e.includes("saved")||e.includes("custom")),apiProduct_sample:JSON.stringify(e).substring(0,500)}),e.custom_title&&"jewelery"!==e.product_category&&"other"!==e.product_category&&"fashion"!==e.product_category&&"shoes"!==e.product_category&&"car accessories"!==e.product_category&&"cellphone"!==e.product_category&&console.warn(`⚠️ [MAPPED PRODUCT] Product ${r.id} has custom_title but product_category is "${e.product_category}" (expected one of: jewelery, other, fashion, shoes, car accessories, cellphone)`)),r},cr=e=>{const[t,r]=n.useState([]),[o,s]=n.useState(!0),[i,a]=n.useState(!1),[c,l]=n.useState(null),[d,u]=n.useState(!0),[p,g]=n.useState(1),[h,f]=n.useState([]),[m,x]=n.useState([]),[y,b]=n.useState(0),w=n.useRef(!1),v=e=>{if(!e||""===e.trim())return!1;const t=e.trim();return/^\d{10,20}$/.test(t)},j=n.useCallback(async()=>{C(),s(!0),l(null);try{console.log(`🔍 [fetchProducts] Sending request with query: "${e.query}"`);const n=await Wt.get("/api/search/comprehensive",{params:{q:e.query,page:1,pageSize:200,target_currency:e.target_currency||"USD",min_price:e.minPrice||0,max_price:e.maxPrice||15e4,sort_by:e.sortBy||"price_acs",only_with_video:e.hasVideo?1:0,category:e.category||void 0}});console.log(`🔍 [fetchProducts] Received response with query: "${n.data.query}"`);const o=n.request?.responseText||"";if(o)try{const e=JSON.parse(o);if(console.log("🔍 [RAW RESPONSE CHECK] Raw response has is_saved_in_db:",o.includes("is_saved_in_db")),e.items&&e.items.length>0){const t=e.items[0];console.log("🔍 [RAW RESPONSE CHECK] First product in raw response:",{product_id:t.product_id,has_is_saved_in_db:"is_saved_in_db"in t,is_saved_in_db:t.is_saved_in_db,product_category:t.product_category}),"is_saved_in_db"in t&&!("is_saved_in_db"in n.data.items[0])&&(console.warn("⚠️ [RAW RESPONSE CHECK] Using raw response because parsed response is missing is_saved_in_db!"),n.data=e)}}catch(t){console.error("🔍 [RAW RESPONSE CHECK] Error parsing raw response:",t)}console.log("🔍 [FULL RESPONSE] response.data:",{success:n.data.success,items_count:n.data.items?.length||0,query:n.data.query,query_type:n.data.query_type});const s=(n.data.items||[]).map(ar),i=ir(s);f(i);const a=i.slice(0,5);x(a),b(a.length),r(a);const c=i.length>5;u(c),g(1)}catch(n){l(n.response?.data?.message||n.message||"Failed to fetch products")}finally{s(!1)}},[e]),S=n.useCallback(async t=>{C(),s(!0),l(null);try{console.log("🌐 [API REQUEST] GET /api/search/comprehensive?q="+t);const o=await Wt.get("/api/search/comprehensive",{params:{q:t,page:1,pageSize:150,target_currency:e.target_currency||"USD",min_price:0,max_price:15e4,only_with_video:e.hasVideo?1:0,use_api:"true"}}),s=o.request?.responseText||"";if(s)try{const e=JSON.parse(s);if(console.log("🔍 [RAW RESPONSE CHECK - fetchProductById] Raw response has is_saved_in_db:",s.includes("is_saved_in_db")),e.items&&e.items.length>0){const t=e.items[0];console.log("🔍 [RAW RESPONSE CHECK - fetchProductById] First product in raw response:",{product_id:t.product_id,has_is_saved_in_db:"is_saved_in_db"in t,is_saved_in_db:t.is_saved_in_db,product_category:t.product_category}),o.data.items&&o.data.items.length>0&&"is_saved_in_db"in t&&!("is_saved_in_db"in o.data.items[0])&&(console.warn("⚠️ [RAW RESPONSE CHECK - fetchProductById] Using raw response because parsed response is missing is_saved_in_db!"),o.data=e)}}catch(n){console.error("🔍 [RAW RESPONSE CHECK - fetchProductById] Error parsing raw response:",n)}if(o.data.success&&o.data.items&&o.data.items.length>0){const e=o.data.items.map(ar),t=ir(e);f(t),x(t),b(t.length),r(t),u(!1),g(1)}else f([]),x([]),b(0),r([]),u(!1),l(`Product with ID ${t} not found`),g(1)}catch(o){l(o.response?.data?.message||o.message||"Failed to fetch product")}finally{s(!1)}},[e]),_=n.useCallback(async()=>{try{const t=p+1;console.log("🌐 [API REQUEST] GET /api/search/comprehensive (page "+t+")",{q:e.query,page:t,pageSize:200,target_currency:e.target_currency||"USD",min_price:e.minPrice||0,max_price:e.maxPrice||15e4,sort_by:e.sortBy||"volume_desc",only_with_video:e.hasVideo?1:0,category:e.category||void 0});const n=await Wt.get("/api/search/comprehensive",{params:{q:e.query,page:t,pageSize:200,target_currency:e.target_currency||"USD",min_price:e.minPrice||0,max_price:e.maxPrice||15e4,sort_by:e.sortBy||"price_acs",only_with_video:e.hasVideo?1:0,category:e.category||void 0}});console.log("📊 [TOTAL PRODUCTS] Total products in JSON response (page",t,"):",n.data.total||n.data.items?.length||0);const o=(n.data.items||[]).map(ar),s=ir(o);f(e=>ir([...e,...s]));m.length;const i=s.slice(0,5);x(e=>ir([...e,...i])),b(e=>e+i.length),r(e=>ir([...e,...i]));const a=s.length>0;u(a),g(t)}catch(t){console.error("❌ [LOAD MORE ERROR]",t),l(t.response?.data?.message||"Failed to fetch more products")}},[p,e,t.length]);n.useEffect(()=>{j()},[]),n.useEffect(()=>{console.log(`🔍 [useEffect] searchParams.query: "${e.query}", isProductId: ${v(e.query||"")}`),e.query&&v(e.query)?(console.log(`🔍 [useEffect] Calling fetchProductById with: ${e.query}`),S(e.query)):(console.log(`🔍 [useEffect] Calling fetchProducts with query: "${e.query}"`),j())},[e.query,e.target_currency,e.minPrice,e.maxPrice,e.sortBy,e.sortOrder,e.hasVideo,e.category,j,S]);const E=n.useCallback(async()=>{if(!i&&!w.current){w.current=!0,a(!0);try{const e=t.length,n=h.length;if(console.log("🔄 [LOAD MORE] Current displayed:",e,"Total available:",n,"HasMore:",d),e<n){const t=h.slice(e,e+5);x(e=>[...e,...t]),b(e=>e+t.length),r(e=>[...e,...t]),e+5>=n&&(d&&n<200?await _():u(!1))}else d&&n<200?await _():u(!1)}catch(e){l(e.response?.data?.message||e.message||"Failed to load more products")}finally{a(!1),w.current=!1}}},[i,m.length,h.length,d,_]),C=n.useCallback(()=>{r([]),f([]),x([]),b(0),u(!1),g(1),s(!0),a(!1),l(null),w.current=!1},[]);return{products:t,loading:o,loadingMore:i,error:c,hasMore:d,loadMoreProducts:E,clearProducts:C,fetchProducts:j,setProducts:r}},lr={EN:{category:"Category",id:"ID",price:"Price",originalPrice:"Original Price",currencyType:"Currency Type",discount:"Discount",commission:"Commission",salesVolume:"Sales Volume",rating:"Rating",refreshing:"Refreshing",loadingProducts:"Loading Products",search:"Search",advancedSearch:"Advanced Search",searchProducts:"Search Products",productName:"Product Name",productId:"Product ID",priceRange:"Price Range",minPrice:"Min Price",maxPrice:"Max Price",sortBy:"Sort By",sortOrder:"Sort Order",ascending:"Ascending",descending:"Descending",priceAsc:"Price (Low to High)",priceDesc:"Price (High to Low)",discountAsc:"Discount (Low to High)",discountDesc:"Discount (High to Low)",volumeAsc:"Sales Volume (Low to High)",volumeDesc:"Sales Volume (High to Low)",ratingAsc:"Rating (Low to High)",ratingDesc:"Rating (High to Low)",onlyWithVideo:"Only with Video",categoryFilter:"Category Filter",allCategories:"All Categories",electronics:"Electronics",luggage:"Luggage, Baggage and Shoes",sport:"Sport and Entertainment",furniture:"Furniture",homeGarden:"Home and Garden",jewelry:"Jewelry, Watches, Accessories",babyMaternity:"Baby and Maternity",searchButton:"Search",clearFilters:"Clear Filters",reset:"Reset",apply:"Apply",cancel:"Cancel",like:"Like",unlike:"Unlike",share:"Share",buy:"Buy",edit:"Edit",save:"Save",delete:"Delete",close:"Close",back:"Back",next:"Next",previous:"Previous",loading:"Loading...",error:"Error",success:"Success",noResults:"No Results Found",tryAgain:"Try Again",connectionError:"Connection Error",home:"Home",products:"Products",favorites:"Favorites",settings:"Settings",help:"Help",about:"About"},HE:{category:"קטגוריה",id:"מזהה",price:"מחיר",originalPrice:"מחיר מקורי",currencyType:"סוג מטבע",discount:"הנחה",commission:"עמלה",salesVolume:"נפח מכירות",rating:"דירוג",refreshing:"מרענן",loadingProducts:"טוען מוצרים",search:"חיפוש",advancedSearch:"חיפוש מתקדם",searchProducts:"חיפוש מוצרים",productName:"שם מוצר",productId:"מזהה מוצר",priceRange:"טווח מחירים",minPrice:"מחיר מינימלי",maxPrice:"מחיר מקסימלי",sortBy:"מיון לפי",sortOrder:"סדר מיון",ascending:"עולה",descending:"יורד",priceAsc:"מחיר (נמוך לגבוה)",priceDesc:"מחיר (גבוה לנמוך)",discountAsc:"הנחה (נמוך לגבוה)",discountDesc:"הנחה (גבוה לנמוך)",volumeAsc:"נפח מכירות (נמוך לגבוה)",volumeDesc:"נפח מכירות (גבוה לנמוך)",ratingAsc:"דירוג (נמוך לגבוה)",ratingDesc:"דירוג (גבוה לנמוך)",onlyWithVideo:"רק עם וידאו",categoryFilter:"מסנן קטגוריות",allCategories:"כל הקטגוריות",electronics:"אלקטרוניקה",luggage:"מזוודות, תיקים ונעליים",sport:"ספורט ובידור",furniture:"רהיטים",homeGarden:"בית וגינה",jewelry:"תכשיטים, שעונים ואביזרים",babyMaternity:"תינוקות ואמהות",searchButton:"חיפוש",clearFilters:"נקה מסננים",reset:"איפוס",apply:"החל",cancel:"ביטול",like:"אהבתי",unlike:"לא אהבתי",share:"שתף",buy:"קנה",edit:"ערוך",save:"שמור",delete:"מחק",close:"סגור",back:"חזור",next:"הבא",previous:"הקודם",loading:"טוען...",error:"שגיאה",success:"הצלחה",noResults:"לא נמצאו תוצאות",tryAgain:"נסה שוב",connectionError:"שגיאת חיבור",home:"בית",products:"מוצרים",favorites:"מועדפים",settings:"הגדרות",help:"עזרה",about:"אודות"},AR:{category:"الفئة",id:"المعرف",price:"السعر",originalPrice:"السعر الأصلي",currencyType:"نوع العملة",discount:"الخصم",commission:"العمولة",salesVolume:"حجم المبيعات",rating:"التقييم",refreshing:"تحديث",loadingProducts:"تحميل المنتجات",search:"بحث",advancedSearch:"البحث المتقدم",searchProducts:"البحث عن المنتجات",productName:"اسم المنتج",productId:"معرف المنتج",priceRange:"نطاق السعر",minPrice:"الحد الأدنى للسعر",maxPrice:"الحد الأقصى للسعر",sortBy:"ترتيب حسب",sortOrder:"ترتيب",ascending:"تصاعدي",descending:"تنازلي",priceAsc:"السعر (من الأقل للأعلى)",priceDesc:"السعر (من الأعلى للأقل)",discountAsc:"الخصم (من الأقل للأعلى)",discountDesc:"الخصم (من الأعلى للأقل)",volumeAsc:"حجم المبيعات (من الأقل للأعلى)",volumeDesc:"حجم المبيعات (من الأعلى للأقل)",ratingAsc:"التقييم (من الأقل للأعلى)",ratingDesc:"التقييم (من الأعلى للأقل)",onlyWithVideo:"فقط مع فيديو",categoryFilter:"مرشح الفئة",allCategories:"جميع الفئات",electronics:"الإلكترونيات",luggage:"الأمتعة والحقائب والأحذية",sport:"الرياضة والترفيه",furniture:"الأثاث",homeGarden:"المنزل والحديقة",jewelry:"المجوهرات والساعات والإكسسوارات",babyMaternity:"الأطفال والأمومة",searchButton:"بحث",clearFilters:"مسح المرشحات",reset:"إعادة تعيين",apply:"تطبيق",cancel:"إلغاء",like:"أعجبني",unlike:"لم يعجبني",share:"مشاركة",buy:"شراء",edit:"تعديل",save:"حفظ",delete:"حذف",close:"إغلاق",back:"رجوع",next:"التالي",previous:"السابق",loading:"جاري التحميل...",error:"خطأ",success:"نجح",noResults:"لم يتم العثور على نتائج",tryAgain:"حاول مرة أخرى",connectionError:"خطأ في الاتصال",home:"الرئيسية",products:"المنتجات",favorites:"المفضلة",settings:"الإعدادات",help:"المساعدة",about:"حول"}};class dr{static currentLanguage="EN";static setLanguage(e){this.currentLanguage=e,localStorage.setItem("alibee-language",e)}static getCurrentLanguage(){const e=localStorage.getItem("alibee-language");return e&&["EN","HE","AR"].includes(e)&&(this.currentLanguage=e),this.currentLanguage}static getTranslation(e){return lr[this.currentLanguage][e]}static getAllTranslations(){return lr[this.currentLanguage]}static isRTL(){return["HE","AR"].includes(this.currentLanguage)}static getTextDirection(){return this.isRTL()?"rtl":"ltr"}}const ur=o.createContext(null),pr=({children:e})=>{const[t,r]=o.useState(dr.getCurrentLanguage()),n=dr.isRTL(),s=dr.getTextDirection(),i={currentLanguage:t,changeLanguage:e=>{dr.setLanguage(e),r(e)},t:e=>lr[t][e],isRTL:n,textDirection:s,languages:[{code:"EN",name:"English"},{code:"HE",name:"עברית"},{code:"AR",name:"عربي"}]};return o.createElement(ur.Provider,{value:i},e)},gr=()=>{const e=o.useContext(ur);if(!e)throw new Error("useTranslation must be used within a LanguageProvider");return e},hr=s.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  height: 60px;
`,fr=s.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  direction: ltr; /* Force LTR direction */
`,mr=s.div`
  display: flex;
  align-items: center;
  gap: 12px;
  direction: ltr; /* Force LTR direction */
`,xr=s.img`
  width: 32px;
  height: 32px;
  border-radius: 8px;
`,yr=s.h1`
  color: #ffffff;
  font-weight: bold;
  font-size: 14px;
  margin: 0;
  text-align: center;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
`,br=s.button`
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  padding: 8px;
  color: white;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;

  &:hover {
    background: rgba(255, 255, 255, 0.15);
    border-color: rgba(255, 255, 255, 0.3);
  }
`,wr=s.div`
  display: flex;
  align-items: center;
  gap: 12px;
  direction: ltr; /* Force LTR direction */
`,vr=s.button`
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  padding: 8px;
  color: white;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  gap: 4px;
  font-size: 10px;

  &:hover {
    background: rgba(255, 255, 255, 0.15);
    border-color: rgba(255, 255, 255, 0.3);
  }
`,jr=s.div`
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 4px;
  background: rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(20px);
  border-radius: 12px;
  padding: 8px;
  min-width: 160px;
  z-index: 50;
  border: 1px solid rgba(255, 255, 255, 0.1);
`,Sr=s.button`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 12px;
  border-radius: 8px;
  color: white;
  cursor: pointer;
  transition: all 0.2s ease;
  background: ${e=>e.$active?"rgba(34, 197, 94, 0.2)":"transparent"};
  border: none;

  &:hover {
    background: ${e=>e.$active?"rgba(34, 197, 94, 0.3)":"rgba(255, 255, 255, 0.1)"};
  }
`,_r=s.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`,Er=s.span`
  font-weight: 500;
  font-size: 14px;
`,Cr=s.span`
  font-size: 12px;
  opacity: 0.75;
`,kr=s.div`
  position: fixed;
  inset: 0;
  z-index: 40;
`,Nr=({onSearchClick:e,onCurrencyChange:t,onLanguageChange:r})=>{const{currentCurrency:o,changeCurrency:s,currencies:a}=tr(),{currentLanguage:c,changeLanguage:l,languages:d}=gr(),[u,p]=n.useState(!1),[g,h]=n.useState(!1),f=o;return j.jsxs(hr,{children:[j.jsxs(fr,{children:[j.jsxs(mr,{children:[j.jsx(xr,{src:"/Logo.png",alt:"Alibee Logo",onError:e=>{e.currentTarget.src="https://via.placeholder.com/32x32?text=A"}}),j.jsx(yr,{children:"Alibee Affiliate Hub"})]}),j.jsx(br,{onClick:e,children:j.jsx(i,{size:16})}),j.jsxs(wr,{children:[j.jsxs("div",{style:{position:"relative"},children:[j.jsx(vr,{onClick:()=>h(!g),title:`Language: ${c}`,children:j.jsx("span",{children:c})}),g&&j.jsx(jr,{children:d.map(e=>j.jsxs(Sr,{onClick:()=>{l(e.code),h(!1),r&&r(e.code)},className:c===e.code?"active":"",children:[j.jsx("span",{children:e.code}),j.jsx("span",{children:e.name})]},e.code))})]}),j.jsxs("div",{style:{position:"relative"},children:[j.jsxs(vr,{onClick:()=>p(!u),title:`${f?.name} (${f?.code})`,children:[j.jsx("span",{children:f?.symbol}),j.jsx("span",{children:f?.code})]}),u&&j.jsx(jr,{children:a.map(e=>j.jsxs(Sr,{$active:o.code===e.code,onClick:()=>{Yt.info("HeaderBar","Currency selection clicked",{selectedCurrency:e.code,currentCurrency:o.code}),s(e.code),p(!1),t&&t(e.code),Yt.info("HeaderBar","Currency changed and search triggered",{newCurrency:e.code})},children:[j.jsx("span",{children:e.flag}),j.jsxs(_r,{children:[j.jsx(Er,{children:e.name}),j.jsxs(Cr,{children:[e.code," ",e.symbol]})]})]},e.code))})]})]})]}),u&&j.jsx(kr,{onClick:()=>{p(!1)}})]})},Pr=({isOpen:e,onClose:t,onSearch:r,searchCategories:s,currentSearchQuery:l="",currentHasVideo:d=!1,currentCategory:u="",currentMinPrice:p=0,currentMaxPrice:g=1e6,currentSortBy:h="",currentSortOrder:f="desc"})=>{const[m,x]=n.useState(l),[y,b]=n.useState(d),[w,v]=n.useState(u),[S,_]=n.useState(p),[E,C]=n.useState(g),[k,N]=n.useState(h),[P,R]=n.useState(f);o.useEffect(()=>{x(l)},[l]),o.useEffect(()=>{b(d)},[d]),o.useEffect(()=>{v(u)},[u]),o.useEffect(()=>{_(p)},[p]),o.useEffect(()=>{C(g)},[g]),o.useEffect(()=>{N(h)},[h]),o.useEffect(()=>{R(f)},[f]);return e?j.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm z-50 flex items-center justify-center",children:j.jsxs("div",{className:"bg-gradient-to-br from-purple-900/40 via-pink-900/40 to-indigo-900/40 backdrop-blur-xl rounded-2xl p-6 max-w-3xl w-full mx-4 border border-purple-400/30 shadow-2xl",children:[j.jsxs("div",{className:"flex justify-between items-center mb-4",children:[j.jsx("h2",{className:"text-xl font-bold text-white bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent",children:"Advanced Search"}),j.jsx("button",{onClick:t,className:"text-white hover:text-pink-300 transition-colors p-1 rounded-full hover:bg-pink-500/20",children:j.jsx(a,{className:"w-5 h-5"})})]}),j.jsxs("form",{onSubmit:e=>{e.preventDefault(),r({productQuery:m.trim(),categoryQuery:w.trim(),hasVideo:y,minPrice:S||0,maxPrice:E||1e6,sortBy:k||void 0,sortOrder:P}),t()},className:"space-y-4",children:[j.jsxs("div",{className:"space-y-2",children:[j.jsx("h3",{className:"text-sm font-semibold text-purple-300",children:"Search by Product Name or ID"}),j.jsxs("div",{className:"relative",children:[j.jsx("input",{type:"text",value:m,onChange:e=>x(e.target.value),placeholder:"Product name or ID (e.g., 1005009716975587)",className:"w-full bg-gradient-to-r from-purple-800/30 to-pink-800/30 backdrop-blur-lg text-white placeholder-purple-200 px-3 py-2 pl-10 rounded-full border border-purple-400/40 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-60 focus:border-purple-400 transition-all duration-300 text-sm shadow-lg"}),j.jsx(i,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-purple-300"})]}),j.jsxs("div",{children:[j.jsx("h4",{className:"text-xs font-medium text-cyan-300 mb-2",children:"Quick Categories:"}),j.jsx("div",{className:"grid grid-cols-2 gap-2",children:[{key:"all",text:"All"},{key:"electronic",text:"Electronic"},{key:"luggage",text:"Luggage"},{key:"sport",text:"Sport"},{key:"furniture",text:"Furniture"},{key:"homeGarden",text:"Home & Garden"},{key:"jewelry",text:"Jewelry"},{key:"baby",text:"Baby"}].map(e=>j.jsx("button",{type:"button",onClick:()=>(e=>{x(e)})(e.text),className:"px-2 py-1 rounded-lg border transition-all duration-300 hover:scale-105 text-xs shadow-md "+(m===e.text?"bg-gradient-to-r from-cyan-500 to-blue-500 text-white border-cyan-400 shadow-cyan-500/25":"bg-gradient-to-r from-cyan-800/30 to-blue-800/30 hover:from-cyan-700/40 hover:to-blue-700/40 text-cyan-200 border-cyan-400/40 hover:border-cyan-400/60"),children:e.text},e.key))})]})]}),j.jsxs("div",{className:"space-y-2",children:[j.jsx("h3",{className:"text-sm font-semibold text-yellow-300",children:"Price Range"}),j.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[j.jsxs("div",{children:[j.jsx("label",{className:"block text-xs text-yellow-200 mb-1",children:"Min Price"}),j.jsx("input",{type:"number",value:S,onChange:e=>_(Number(e.target.value)||0),placeholder:"0",min:"0",className:"w-full bg-gradient-to-r from-yellow-800/30 to-orange-800/30 backdrop-blur-lg text-white placeholder-yellow-200 px-3 py-2 rounded-full border border-yellow-400/40 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-60 focus:border-yellow-400 transition-all duration-300 text-sm shadow-lg"})]}),j.jsxs("div",{children:[j.jsx("label",{className:"block text-xs text-yellow-200 mb-1",children:"Max Price"}),j.jsx("input",{type:"number",value:E,onChange:e=>C(Number(e.target.value)||1e6),placeholder:"1000000",min:"0",className:"w-full bg-gradient-to-r from-yellow-800/30 to-orange-800/30 backdrop-blur-lg text-white placeholder-yellow-200 px-3 py-2 rounded-full border border-yellow-400/40 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-60 focus:border-yellow-400 transition-all duration-300 text-sm shadow-lg"})]})]})]}),j.jsxs("div",{className:"space-y-2",children:[j.jsx("h3",{className:"text-sm font-semibold text-indigo-300",children:"Sort Options"}),j.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[j.jsxs("div",{children:[j.jsx("label",{className:"block text-xs text-indigo-200 mb-1",children:"Sort By"}),j.jsxs("select",{value:k,onChange:e=>N(e.target.value),className:"w-full bg-gradient-to-r from-indigo-800/30 to-purple-800/30 backdrop-blur-lg text-white px-3 py-2 rounded-full border border-indigo-400/40 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-60 focus:border-indigo-400 transition-all duration-300 text-sm shadow-lg",children:[j.jsx("option",{value:"",children:"Default (Volume)"}),j.jsx("option",{value:"price",children:"Price"}),j.jsx("option",{value:"rating",children:"Rating"}),j.jsx("option",{value:"discount",children:"Discount"}),j.jsx("option",{value:"newest",children:"Newest"})]})]}),j.jsxs("div",{children:[j.jsx("label",{className:"block text-xs text-indigo-200 mb-1",children:"Order"}),j.jsxs("select",{value:P,onChange:e=>R(e.target.value),className:"w-full bg-gradient-to-r from-indigo-800/30 to-purple-800/30 backdrop-blur-lg text-white px-3 py-2 rounded-full border border-indigo-400/40 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-60 focus:border-indigo-400 transition-all duration-300 text-sm shadow-lg",children:[j.jsx("option",{value:"desc",children:"Descending"}),j.jsx("option",{value:"asc",children:"Ascending"})]})]})]})]}),j.jsxs("div",{className:"space-y-2",children:[j.jsx("h3",{className:"text-sm font-semibold text-emerald-300",children:"Video Filter"}),j.jsxs("div",{className:"flex items-center space-x-3",children:[j.jsx("button",{type:"button",onClick:()=>b(!y),className:"relative w-10 h-5 rounded-full transition-all duration-300 shadow-lg "+(y?"bg-gradient-to-r from-emerald-500 to-green-500":"bg-gradient-to-r from-gray-600 to-gray-500"),children:j.jsx("div",{className:"absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full transition-transform duration-300 shadow-md "+(y?"transform translate-x-5":"")})}),j.jsx("span",{className:"text-emerald-200 font-medium text-sm",children:"Only products with video"}),y&&j.jsx(c,{className:"w-4 h-4 text-emerald-400"})]})]}),j.jsxs("div",{className:"flex justify-between items-center pt-4 border-t border-purple-400/30",children:[j.jsx("button",{type:"button",onClick:()=>{x(""),v(""),b(!1),_(0),C(1e6),N(""),R("desc")},className:"px-4 py-2 bg-gradient-to-r from-orange-800/40 to-red-800/40 hover:from-orange-700/50 hover:to-red-700/50 text-orange-200 rounded-full border border-orange-400/40 hover:border-orange-400/60 transition-all duration-300 text-sm shadow-lg",children:"Clear All"}),j.jsxs("div",{className:"flex space-x-2",children:[j.jsx("button",{type:"button",onClick:t,className:"px-4 py-2 bg-gradient-to-r from-gray-700/40 to-gray-600/40 hover:from-gray-600/50 hover:to-gray-500/50 text-gray-200 rounded-full border border-gray-400/40 hover:border-gray-400/60 transition-all duration-300 text-sm shadow-lg",children:"Cancel"}),j.jsx("button",{type:"submit",className:"px-6 py-2 bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 hover:from-purple-600 hover:via-pink-600 hover:to-rose-600 text-white rounded-full font-semibold transition-all duration-300 transform hover:scale-105 text-sm shadow-lg shadow-purple-500/25",children:"Search"})]})]})]})]})}):null},Rr=s.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, #6B46C1 0%, #4C1D95 100%);
  z-index: 1000;
  overflow-y: auto;
  max-height: 100vh;
  display: flex;
  flex-direction: column;
`,Or=s.div`
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding: 12px 16px;
  position: sticky;
  top: 0;
  z-index: 10;
  flex-shrink: 0;
`,Tr=s.div`
  max-width: 100%;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 0 16px;
`,Lr=s.h1`
  color: white;
  font-size: 20px;
  font-weight: bold;
  margin: 0;
  background: linear-gradient(45deg, #fbbf24, #f59e0b);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  
  @media (max-width: 768px) {
    font-size: 18px;
  }
`,Ar=s.button`
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  padding: 12px;
  color: white;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: rgba(255, 255, 255, 0.15);
    border-color: rgba(255, 255, 255, 0.3);
  }
`,Dr=s.div`
  max-width: 100%;
  width: 100%;
  margin: 0 auto;
  padding: 16px;
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`,Ur=s.form`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  border-radius: 16px;
  padding: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  margin-bottom: 16px;
  flex: 1;
  display: flex;
  flex-direction: column;
  max-height: 100%;
  overflow-y: auto;
  
  @media (max-width: 768px) {
    padding: 12px;
    border-radius: 12px;
  }
`,Fr=s.div`
  margin-bottom: 16px;
  flex-shrink: 0;

  &:last-child {
    margin-bottom: 0;
  }
  
  @media (max-width: 768px) {
    margin-bottom: 12px;
  }
`,Ir=s.h3`
  color: white;
  font-size: 14px;
  font-weight: 600;
  margin: 0 0 8px 0;
  display: flex;
  align-items: center;
  gap: 6px;
  
  @media (max-width: 768px) {
    font-size: 13px;
    margin-bottom: 6px;
  }
`,Br=s.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  
  @media (max-width: 768px) {
    gap: 4px;
  }
`,$r=s.label`
  color: rgba(255, 255, 255, 0.8);
  font-size: 12px;
  font-weight: 500;
  
  @media (max-width: 768px) {
    font-size: 11px;
  }
`,zr=s.input`
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  padding: 10px 12px;
  color: white;
  font-size: 14px;
  transition: all 0.2s ease;
  width: 100%;
  box-sizing: border-box;

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }

  &:focus {
    outline: none;
    border-color: #fbbf24;
    box-shadow: 0 0 0 3px rgba(251, 191, 36, 0.1);
  }
  
  @media (max-width: 768px) {
    padding: 8px 10px;
    font-size: 13px;
    border-radius: 8px;
  }
`,qr=s.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  
  @media (max-width: 768px) {
    gap: 8px;
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 8px;
  }
`,Mr=s.select`
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  padding: 10px 12px;
  color: white;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s ease;
  width: 100%;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: #fbbf24;
    box-shadow: 0 0 0 3px rgba(251, 191, 36, 0.1);
  }

  option {
    background: #1f2937;
    color: white;
  }
  
  @media (max-width: 768px) {
    padding: 8px 10px;
    font-size: 13px;
    border-radius: 8px;
  }
`,Hr=s.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  
  @media (max-width: 768px) {
    padding: 10px;
    gap: 8px;
  }
`,Vr=s.button`
  position: relative;
  width: 40px;
  height: 20px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  background: ${e=>e.$active?"#10b981":"rgba(255, 255, 255, 0.2)"};
  flex-shrink: 0;

  &::after {
    content: '';
    position: absolute;
    top: 2px;
    left: ${e=>e.$active?"22px":"2px"};
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: white;
    transition: all 0.3s ease;
  }
  
  @media (max-width: 768px) {
    width: 36px;
    height: 18px;
    
    &::after {
      width: 14px;
      height: 14px;
      left: ${e=>e.$active?"20px":"2px"};
    }
  }
`,Kr=s.span`
  color: white;
  font-size: 12px;
  font-weight: 500;
  
  @media (max-width: 768px) {
    font-size: 11px;
  }
`,Wr=s.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  
  @media (max-width: 768px) {
    gap: 8px;
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 8px;
  }
`,Gr=s.div`
  display: flex;
  gap: 8px;
  justify-content: flex-end;
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  flex-shrink: 0;
  
  @media (max-width: 768px) {
    gap: 6px;
    margin-top: 12px;
    padding-top: 12px;
    flex-wrap: wrap;
  }
`,Jr=s.button`
  padding: 10px 16px;
  border-radius: 10px;
  border: none;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 6px;
  flex-shrink: 0;

  ${e=>"primary"===e.$variant?"\n    background: linear-gradient(45deg, #ffffff, #f0f0f0);\n    color: #1f2937;\n    text-shadow: none;\n    \n    &:hover {\n      background: linear-gradient(45deg, #f0f0f0, #e0e0e0);\n      transform: translateY(-1px);\n      box-shadow: 0 4px 15px rgba(255, 255, 255, 0.3);\n    }\n  ":"\n    background: rgba(255, 255, 255, 0.1);\n    color: white;\n    border: 1px solid rgba(255, 255, 255, 0.2);\n    \n    &:hover {\n      background: rgba(255, 255, 255, 0.15);\n      border-color: rgba(255, 255, 255, 0.3);\n    }\n  "}
  
  @media (max-width: 768px) {
    padding: 8px 12px;
    font-size: 12px;
    border-radius: 8px;
    gap: 4px;
  }
`,Yr=({isOpen:e,onClose:t,onSearch:r})=>{const{searchParams:o}=or(),{currentCurrency:s}=tr(),{t:c}=gr(),[m,x]=n.useState(""),[y,b]=n.useState(0),[w,v]=n.useState(2e3),[S,_]=n.useState("price"),[E,C]=n.useState("asc"),[k,N]=n.useState(!1),P=[{value:"price",label:c("price"),icon:j.jsx(l,{size:16})},{value:"discount",label:c("discount"),icon:j.jsx(d,{size:16})},{value:"volume",label:c("salesVolume"),icon:j.jsx(l,{size:16})},{value:"rating",label:c("rating"),icon:j.jsx(u,{size:16})}],R=[{value:"asc",label:c("ascending"),icon:j.jsx(l,{size:16})},{value:"desc",label:c("descending"),icon:j.jsx(p,{size:16})}];n.useEffect(()=>{if(e&&""===m&&0===y&&2e3===w&&"price"===S&&"asc"===E&&!k){const e="all"===o.query?"":o.query||"";x(e),b(o.minPrice||0),v(o.maxPrice||2e3);const t=o.sortBy||"price_asc",[r,n]=t.split("_");_(r||"price"),C(n||"asc"),N(o.hasVideo||!1)}},[e]);return e?j.jsxs(Rr,{children:[j.jsx(Or,{children:j.jsxs(Tr,{children:[j.jsx(Lr,{children:c("advancedSearch")}),j.jsx(Ar,{onClick:t,children:j.jsx(a,{size:20})})]})}),j.jsx(Dr,{children:j.jsxs(Ur,{onSubmit:e=>{e.preventDefault();const n={query:m.trim()||"all",minPrice:y,maxPrice:w,sortBy:`${S}_${E}`,onlyWithVideo:k,targetCurrency:s?.code||"USD"};console.log("🔍 [SEARCH FORM] Submitting search for:",n.query),r(n),t()},children:[j.jsxs(Fr,{children:[j.jsxs(Ir,{children:[j.jsx(i,{size:20}),c("productName")," or ",c("productId")]}),j.jsxs(Br,{children:[j.jsx($r,{children:c("searchProducts")}),j.jsx(zr,{type:"text",value:m,onChange:e=>x(e.target.value),placeholder:"e.g., shoe, 1005009716975587",autoFocus:!0})]})]}),j.jsxs(Fr,{children:[j.jsxs(Ir,{children:[j.jsx(g,{size:20}),c("priceRange")]}),j.jsxs(qr,{children:[j.jsxs(Br,{children:[j.jsx($r,{children:c("minPrice")}),j.jsx(zr,{type:"number",value:y,onChange:e=>b(Number(e.target.value)||0),placeholder:"0",min:"0"})]}),j.jsxs(Br,{children:[j.jsx($r,{children:c("maxPrice")}),j.jsx(zr,{type:"number",value:w,onChange:e=>v(Number(e.target.value)||2e3),placeholder:"2000",min:"0"})]})]})]}),j.jsxs(Fr,{children:[j.jsxs(Ir,{children:[j.jsx(h,{size:20}),c("sortBy")]}),j.jsxs(Wr,{children:[j.jsxs(Br,{children:[j.jsx($r,{children:c("sortBy")}),j.jsx(Mr,{value:S,onChange:e=>_(e.target.value),children:P.map(e=>j.jsx("option",{value:e.value,children:e.label},e.value))})]}),j.jsxs(Br,{children:[j.jsx($r,{children:c("sortOrder")}),j.jsx(Mr,{value:E,onChange:e=>C(e.target.value),children:R.map(e=>j.jsx("option",{value:e.value,children:e.label},e.value))})]})]})]}),j.jsxs(Fr,{children:[j.jsxs(Ir,{children:[j.jsx(f,{size:20}),c("onlyWithVideo")]}),j.jsxs(Hr,{children:[j.jsx(Vr,{$active:k,onClick:()=>N(!k),type:"button"}),j.jsx(Kr,{children:c("onlyWithVideo")})]})]}),j.jsxs(Gr,{children:[j.jsx(Jr,{type:"button",onClick:()=>{x(""),b(0),v(2e3),_("price"),C("asc"),N(!1)},children:c("clearFilters")}),j.jsx(Jr,{type:"button",onClick:t,children:c("cancel")}),j.jsxs(Jr,{type:"submit",$variant:"primary",children:[j.jsx(i,{size:16}),c("search")]})]})]})})]}):null};var Qr={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Xr=o.createContext&&o.createContext(Qr),Zr=function(){return Zr=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},Zr.apply(this,arguments)};function en(e){return e&&e.map(function(e,t){return o.createElement(e.tag,Zr({key:t},e.attr),en(e.child))})}function tn(e){return function(t){return o.createElement(rn,Zr({attr:Zr({},e.attr)},t),en(e.child))}}function rn(e){var t=function(t){var r,n=e.attr,s=e.size,i=e.title,a=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r}(e,["attr","size","title"]),c=s||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),o.createElement("svg",Zr({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,n,a,{className:r,style:Zr(Zr({color:e.color||t.color},t.style),e.style),height:c,width:c,xmlns:"http://www.w3.org/2000/svg"}),i&&o.createElement("title",null,i),e.children)};return void 0!==Xr?o.createElement(Xr.Consumer,null,function(e){return t(e)}):t(Qr)}function nn(e){return tn({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"}}]})(e)}function on(e){return tn({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"}}]})(e)}function sn(e){return tn({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"9",cy:"21",r:"1"}},{tag:"circle",attr:{cx:"20",cy:"21",r:"1"}},{tag:"path",attr:{d:"M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"}}]})(e)}const an=({product:e,isVisible:t=!1})=>{const[r,o]=n.useState(!1);return t?j.jsxs("div",{className:"fixed bottom-4 left-4 z-50 bg-black/90 text-white p-3 rounded-lg max-w-sm max-h-64 overflow-hidden border border-yellow-400/30",children:[j.jsxs("div",{className:"flex items-center justify-between mb-2",children:[j.jsx("h4",{className:"text-xs font-bold text-yellow-300",children:"Product Data Debug"}),j.jsx("button",{onClick:()=>o(!r),className:"text-xs bg-yellow-500 px-2 py-1 rounded hover:bg-yellow-600",children:r?"Collapse":"Expand"})]}),j.jsxs("div",{className:"text-xs space-y-1",children:[j.jsxs("div",{children:["ID: ",j.jsx("span",{className:"text-cyan-400",children:e.id})]}),j.jsxs("div",{children:["Title: ",j.jsx("span",{className:"text-green-400 truncate block",children:e.title})]}),j.jsxs("div",{children:["Price: ",j.jsx("span",{className:"text-blue-400",children:e.price})]}),j.jsxs("div",{children:["Price Target: ",j.jsx("span",{className:"text-purple-400",children:e.priceTarget||"N/A"})]}),j.jsxs("div",{children:["Currency: ",j.jsx("span",{className:"text-orange-400",children:e.currency})]}),j.jsxs("div",{children:["Currency Target: ",j.jsx("span",{className:"text-pink-400",children:e.currencyTarget||"N/A"})]}),j.jsxs("div",{children:["Original Price: ",j.jsx("span",{className:"text-red-400",children:e.originalPrice||"N/A"})]}),j.jsxs("div",{children:["Original Price Target: ",j.jsx("span",{className:"text-indigo-400",children:e.originalPriceTarget||"N/A"})]}),j.jsxs("div",{children:["Discount: ",j.jsx("span",{className:"text-yellow-400",children:e.discount||e.discountPercentage||"N/A"})]}),j.jsxs("div",{children:["Rating: ",j.jsx("span",{className:"text-emerald-400",children:e.rating||e.productScoreStars||e.scoreStars||"N/A"})]}),j.jsxs("div",{children:["Product Score Stars: ",j.jsx("span",{className:"text-emerald-300",children:e.productScoreStars||"N/A"})]}),j.jsxs("div",{children:["Volume: ",j.jsx("span",{className:"text-teal-400",children:e.volume||e.salesVolume||"N/A"})]}),j.jsxs("div",{children:["Latest Volume: ",j.jsx("span",{className:"text-teal-300",children:e.volume||"N/A"})]}),j.jsxs("div",{children:["Commission: ",j.jsx("span",{className:"text-rose-400",children:e.commissionRate||"N/A"})]}),j.jsxs("div",{children:["Category: ",j.jsx("span",{className:"text-lime-400 truncate block",children:e.category||e.firstLevelCategoryName||"N/A"})]})]}),r&&j.jsx("div",{className:"mt-2 max-h-32 overflow-y-auto",children:j.jsx("div",{className:"text-xs text-gray-300",children:j.jsx("pre",{className:"whitespace-pre-wrap",children:JSON.stringify(e,null,2)})})})]}):null},cn=new Map,ln=({value:e,onChange:t,style:r})=>{const[o,s]=n.useState(!1),[i,a]=n.useState(e),c=n.useRef(null);n.useEffect(()=>{a(e)},[e]),n.useEffect(()=>{o&&c.current&&(c.current.focus(),c.current.select())},[o]);const l=()=>{i.trim()&&t(i.trim()),s(!1)},d=t=>{"Enter"===t.key?l():"Escape"===t.key&&(a(e),s(!1))};return o?j.jsx("div",{style:{position:"relative",width:"100%"},children:j.jsx("input",{ref:c,type:"text",value:i,onChange:e=>a(e.target.value),onBlur:l,onKeyDown:d,style:{...r,background:"rgba(0, 0, 0, 0.6)",border:"2px solid rgba(255, 255, 255, 0.4)",borderRadius:"8px",padding:"8px 12px",color:"#fff",fontSize:"18px",fontWeight:"bold",textAlign:"center",width:"100%",outline:"none",boxSizing:"border-box"}})}):j.jsxs("div",{style:{...r,cursor:"pointer",position:"relative",display:"flex",alignItems:"center",justifyContent:"center",gap:"8px"},onClick:()=>s(!0),title:"Click to edit title",children:[j.jsx("span",{children:e}),j.jsx(nn,{size:14,style:{opacity:.6,transition:"opacity 0.2s ease"}})]})},dn=s.div`
  background: transparent;
  border-radius: 20px;
  overflow: hidden;
  transition: all 0.3s ease;
  position: relative;
  width: 100%;
  max-width: 400px;
  height: 100%;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-4px);
  }

  @media (max-width: 768px) {
    max-width: 90%;
    margin: 0 20px;
  }

  @media (max-width: 480px) {
    max-width: 95%;
    margin: 0 10px;
  }
`,un=s.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1;
  overflow: hidden;
  background: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0 0 20px 20px;
`,pn=s.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease, opacity 0.5s ease;

  ${dn}:hover & {
    transform: scale(1.05);
  }
`;s.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.7);
  border-radius: 50%;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 24px;
  cursor: pointer;
  transition: all 0.2s ease;
  z-index: 2;

  &:hover {
    background: rgba(0, 0, 0, 0.9);
    transform: translate(-50%, -50%) scale(1.1);
  }
`;const gn=s.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
`,hn=s.div`
  width: 40px;
  height: 40px;
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-top: 3px solid #fff;
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`,fn=s.div`
  position: absolute;
  bottom: 8px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 6px;
  z-index: 10;
`,mn=s.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${e=>e.$active?"#ff0000":"rgba(255, 255, 255, 0.5)"};
  border: 1px solid #000;
  transition: background-color 0.3s ease;
  cursor: pointer;
`,xn=s.button`
  position: absolute;
  top: 50%;
  ${e=>e.$position}: 8px;
  transform: translateY(-50%);
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.8);
  border: 2px solid rgba(255, 255, 255, 0.3);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 20;
  opacity: 0.9;
  font-size: 18px;
  font-weight: bold;
  transition: all 0.2s ease;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  
  &:hover {
    background: rgba(0, 0, 0, 0.9);
    border-color: rgba(255, 255, 255, 0.6);
    opacity: 1;
    transform: translateY(-50%) scale(1.1);
  }
  
  &:active {
    transform: translateY(-50%) scale(0.95);
  }
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  &:hover {
    opacity: 1;
    background: rgba(0, 0, 0, 0.7);
  }
`,yn=s.div`
  position: absolute;
  top: 12px;
  left: 12px;
  background: linear-gradient(45deg, #ff6b6b, #ff8e8e);
  color: white;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: bold;
  z-index: 2;
`,bn=s.button`
  position: absolute;
  top: 12px;
  right: 12px;
  background: rgba(0, 0, 0, 0.6);
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
  transition: all 0.2s ease;
  z-index: 2;

  /* Normal state - unliked */
  &:hover {
    background: rgba(0, 0, 0, 0.8);
    transform: scale(1.1);
  }

  /* Liked state */
  &.liked {
    background: #ff6b6b;
    color: white;
    
    &:hover {
      background: #ff5252;
      transform: scale(1.1);
    }
  }
`,wn=s.div`
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  flex: 1;
  justify-content: space-between;
`;s.div`
  font-size: 12px;
  font-weight: bold;
  color: #ffffff;
  margin-bottom: 4px;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
`,s.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 6px;
`,s.div`
  font-size: 14px;
  font-weight: bold;
  color: #ffffff;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
  background: rgba(0, 0, 0, 0.4);
  padding: 4px 8px;
  border-radius: 6px;
  backdrop-filter: blur(5px);
`,s.div`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 6px;
`;const vn=s.div`
  display: flex;
  gap: 1px;
`,jn=s.span`
  color: ${e=>e.$filled?"#fbbf24":"#d1d5db"};
  font-size: 16px;
`,Sn=s.div`
  background: rgba(0, 0, 0, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 8px 12px;
  border-radius: 6px;
  backdrop-filter: blur(5px);
  text-align: center;
  color: #ffffff;
  min-height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 12px;
  
  /* Show only the current language */
  .lang-en { display: ${e=>"EN"===e.$currentLang?"inline":"none"}; }
  .lang-he { display: ${e=>"HE"===e.$currentLang?"inline":"none"}; }
  .lang-ar { display: ${e=>"AR"===e.$currentLang?"inline":"none"}; }
`;s.div`
  background: rgba(0, 0, 0, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 8px 12px;
  border-radius: 6px;
  backdrop-filter: blur(5px);
  text-align: center;
  font-size: ${e=>e.$textLength>15?"10px":e.$textLength>12?"11px":"12px"};
  color: #ffffff;
  min-height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,s.span`
  font-size: 11px;
  color: #ffffff;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
  background: rgba(0, 0, 0, 0.4);
  padding: 3px 6px;
  border-radius: 4px;
  backdrop-filter: blur(5px);
  font-weight: 500;
`,s.div`
  color: #ffffff;
  padding: 3px 8px;
  font-size: 10px;
  font-weight: 500;
  margin-bottom: 4px;
  display: inline-block;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
`,s.div`
  font-size: 12px;
  color: #ffffff;
  margin-bottom: 16px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
  background: rgba(0, 0, 0, 0.4);
  padding: 4px 8px;
  border-radius: 6px;
  backdrop-filter: blur(5px);
  font-weight: 500;
`;const _n=s.button`
  position: absolute;
  top: 60px;
  right: 12px;
  background: #ef4444;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 12px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #dc2626;
    transform: scale(1.05);
  }
`,En=s.div`
  font-size: 11px;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 6px;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
`,Cn=s.select`
  background: rgba(0, 0, 0, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 6px;
  padding: 6px 10px;
  color: white;
  font-size: 11px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  backdrop-filter: blur(5px);
  outline: none;
  width: 100%;

  &:hover {
    background: rgba(0, 0, 0, 0.7);
    border-color: rgba(255, 255, 255, 0.3);
  }

  &:focus {
    border-color: rgba(255, 255, 255, 0.4);
    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.1);
  }

  option {
    background: #1a1a1a;
    color: white;
    padding: 6px;
  }
`,kn=s.div`
  margin-top: 8px;
`,Nn=({product:e,onLike:t,onShare:r,onBuy:o,onCategoryChange:s,isLiked:i=!1,selectedCategory:a="other",showDebug:c=!1,cardIndex:l=0,totalCards:d=0})=>{const{t:u,currentLanguage:p}=gr(),[g,h]=n.useState(e.customTitle||e.title||"Product Title"),f=[{value:"other",label:"Other"},{value:"fashion",label:"Fashion"},{value:"shoes",label:"Shoes"},{value:"jewelery",label:"Jewelery"},{value:"car accessories",label:"Car Accessories"},{value:"cellphone",label:"Cellphone"}],m=e=>{if(!e)return"other";const t=e.toLowerCase().trim();return f.map(e=>e.value).includes(t)?t:t.includes("fashion")||t.includes("clothing")||t.includes("apparel")?"fashion":t.includes("shoe")||t.includes("footwear")?"shoes":t.includes("jewel")||t.includes("jewelry")?"jewelery":t.includes("car")||t.includes("automotive")||t.includes("vehicle")?"car accessories":t.includes("phone")||t.includes("mobile")||t.includes("cell")||t.includes("smartphone")?"cellphone":"other"},[x,y]=n.useState(e.savedProductCategory?e.savedProductCategory:e.productCategory?m(e.productCategory):a||"other"),b=n.useRef(!1);n.useEffect(()=>{if(b.current)return;let t="other";if(a&&"other"!==a)t=a;else if(e.savedProductCategory)t=e.savedProductCategory;else if(e.productCategory){t=m(e.productCategory)}y(t)},[a,e.savedProductCategory,e.productCategory,e.id]),n.useEffect(()=>{b.current=!1},[e.id]),n.useEffect(()=>{h(e.customTitle||e.title||"Product Title")},[e.customTitle,e.title]);const w=[e.image,...Array.isArray(e.images)?e.images:[]].filter(Boolean).filter((e,t,r)=>r.indexOf(e)===t),v=e.video&&""!==e.video.trim(),S=v?e.video:null,[_,E]=n.useState(!1),[C,k]=n.useState(0),[N,P]=n.useState(null),[R,O]=n.useState(null),[T,L]=n.useState(new Set),[A,D]=n.useState(!1),[U,F]=n.useState(!1),[I,B]=n.useState(v),[$,z]=n.useState(!1),[q,M]=n.useState(!1),H=n.useRef(null),V=n.useRef(null),K=e=>new Promise((t,r)=>{if(cn.has(e))return void t();const n=new Image;n.onload=()=>{cn.set(e,n),L(t=>new Set([...t,e])),t()},n.onerror=r,n.src=e});n.useEffect(()=>{if(0!==w.length&&A){const e=w[0];e&&!T.has(e)&&K(e).catch(()=>{})}},[w,A,T]),n.useEffect(()=>{U&&!q&&w.length>1&&(M(!0),setTimeout(()=>{w.slice(1).forEach((e,t)=>{T.has(e)||setTimeout(()=>{K(e).catch(()=>{})},300*(t+1))})},200))},[U,q,w,T]),n.useEffect(()=>{if(U&&l>=0&&l<d-1){const e=document.querySelector(`[data-product-index="${l+2}"]`);if(e){const t=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&t.disconnect()})},{threshold:.1,rootMargin:"300px"});return t.observe(e),()=>t.disconnect()}}},[U,l,d]);const W=async()=>{if(v&&I){B(!1);const t=w.length-1,r=w[t];if(!T.has(r)){z(!0);try{await K(r)}catch(e){}finally{z(!1)}}k(t)}else if(C>0){const t=C-1,r=w[t];if(!T.has(r)){z(!0);try{await K(r)}catch(e){}finally{z(!1)}}k(t)}else if(v)B(!0);else if(w.length>1){const t=w.length-1,r=w[t];if(!T.has(r)){z(!0);try{await K(r)}catch(e){}finally{z(!1)}}k(t)}},G=async()=>{if(v&&!I&&C===w.length-1)B(!0);else if(C<w.length-1){const t=C+1,r=w[t];if(!T.has(r)){z(!0);try{await K(r)}catch(e){}finally{z(!1)}}k(t)}else if(v&&I){B(!1);const t=0,r=w[t];if(!T.has(r)){z(!0);try{await K(r)}catch(e){}finally{z(!1)}}k(t)}else if(w.length>1){const t=0,r=w[t];if(!T.has(r)){z(!0);try{await K(r)}catch(e){}finally{z(!1)}}k(t)}};n.useEffect(()=>{const e=w[C];e&&(T.has(e)?E(!0):E(!1))},[C,T,w]),n.useEffect(()=>{if(!H.current)return;const e=new IntersectionObserver(e=>{e.forEach(e=>{const t=e.isIntersecting,r=e.intersectionRatio;D(t);F(t&&r>=.5),v&&V.current&&I&&(t?V.current.play().catch(console.error):V.current.pause())})},{threshold:[0,.3,.5,.7,1],rootMargin:"0px 0px 0px 0px"});return e.observe(H.current),()=>{e.disconnect()}},[v,I]),n.useEffect(()=>{if(w.length<=1||v)return;const e=setInterval(async()=>{if(_&&!$){const t=(C+1)%w.length,r=w[t];if(T.has(r))k(t);else{z(!0);try{await K(r),k(t)}catch(e){k(t)}finally{z(!1)}}}},3e3);return()=>clearInterval(e)},[w.length,_,C,v,T,$]);const J=(e,t)=>`${{USD:"$",EUR:"€",ILS:"₪"}[t]||"$"}${parseFloat(e.toString()).toFixed(2)}`,Y=e.discount||e.discountPercentage?Math.round(e.discount||e.discountPercentage||0):null;return j.jsxs(dn,{className:"fade-in",children:[j.jsxs(un,{ref:H,onTouchStart:e=>{O(null),P(e.targetTouches[0].clientX)},onTouchMove:e=>{O(e.targetTouches[0].clientX)},onTouchEnd:()=>{if(!N||!R)return;const e=N-R,t=e<-50;e>50?G():t&&W()},onKeyDown:e=>{"ArrowLeft"===e.key?W():"ArrowRight"===e.key&&G()},tabIndex:0,children:[v&&I?j.jsx("video",{ref:V,src:S,muted:!0,loop:!0,playsInline:!0,controls:!0,controlsList:"nodownload nofullscreen noremoteplayback",style:{width:"100%",height:"100%",objectFit:"cover"}}):e.image&&j.jsxs(j.Fragment,{children:[j.jsx(pn,{src:w[C],alt:e.title,onLoad:()=>E(!0),style:{opacity:_?1:0}}),!_&&j.jsx(gn,{children:j.jsx(hn,{})})]}),(v||w.length>1)&&j.jsxs(j.Fragment,{children:[j.jsx(xn,{$position:"left",onClick:W,"aria-label":"Previous",style:{opacity:.9,cursor:"pointer"},children:"‹"}),j.jsx(xn,{$position:"right",onClick:G,"aria-label":"Next",style:{opacity:.9,cursor:"pointer"},children:"›"})]}),Y&&j.jsxs(yn,{children:["-",Y,"%"]}),j.jsx(bn,{className:i?"liked":"",onClick:r=>{r.stopPropagation(),t&&t(e.id,x)},children:j.jsx(on,{fill:i?"currentColor":"none"})}),j.jsx(_n,{onClick:()=>{o&&o(e)},children:j.jsx(sn,{})}),(w.length>1||v)&&j.jsxs(fn,{children:[v&&j.jsx(mn,{$active:!!I,onClick:()=>{B(!0)},style:{backgroundColor:I?"#3b82f6":"#6b7280"}}),w.map((e,t)=>j.jsx(mn,{$active:t===C&&!I,onClick:()=>{k(t),B(!1)}},t))]})]}),j.jsxs(wn,{children:[j.jsx(ln,{value:g,onChange:t=>{h(t),e.onTitleChange&&e.onTitleChange(e.id,t)},style:{fontSize:"18px",fontWeight:"bold",marginBottom:"10px",color:"#fff",background:"transparent",border:"none",outline:"none",textAlign:"center",width:"100%",padding:"8px",borderRadius:"6px",transition:"all 0.2s ease"}}),j.jsxs(kn,{children:[j.jsx(En,{children:"Custom Category"}),j.jsx(Cn,{value:x,onChange:t=>{t.stopPropagation();const r=t.target.value;y(r),b.current=!0,s&&s(e.id,r)},onClick:e=>e.stopPropagation(),children:f.map(e=>j.jsx("option",{value:e.value,children:e.label},e.value))})]}),j.jsx("div",{style:{display:"flex",justifyContent:"center",marginBottom:"8px"},children:j.jsxs(Sn,{$currentLang:p,style:{background:"rgba(0, 0, 0, 0.3)",border:"1px solid rgba(255, 255, 255, 0.2)",borderRadius:"6px",padding:"4px 12px",fontSize:"11px",textAlign:"center",color:"#ffffff"},children:[j.jsxs("span",{className:"lang-en",children:["Category: ",e.firstLevelCategoryName||e.category||"General"]}),j.jsxs("span",{className:"lang-he",children:["קטגוריה: ",e.firstLevelCategoryName||e.category||"General"]}),j.jsxs("span",{className:"lang-ar",children:["الفئة: ",e.firstLevelCategoryName||e.category||"General"]})]})}),j.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"8px",marginBottom:"8px"},children:[j.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[j.jsxs(Sn,{$currentLang:p,style:{color:"#fbbf24"},children:[j.jsxs("span",{className:"lang-en",children:["ID: ",e.id]}),j.jsxs("span",{className:"lang-he",children:["מזהה: ",e.id]}),j.jsxs("span",{className:"lang-ar",children:["المعرف: ",e.id]})]}),j.jsxs(Sn,{$currentLang:p,style:{color:"#ffffff"},children:[j.jsxs("span",{className:"lang-en",children:["Price: ",J(e.priceTarget||e.price||0,e.currencyTarget||e.currency)]}),j.jsxs("span",{className:"lang-he",children:["מחיר: ",J(e.priceTarget||e.price||0,e.currencyTarget||e.currency)]}),j.jsxs("span",{className:"lang-ar",children:["السعر: ",J(e.priceTarget||e.price||0,e.currencyTarget||e.currency)]})]}),(e.originalPriceTarget||e.originalPrice)&&j.jsxs(Sn,{$currentLang:p,style:{color:"#ff6b6b",textDecoration:"line-through"},children:[j.jsxs("span",{className:"lang-en",children:["Original Price: ",J(e.originalPriceTarget||e.originalPrice||0,e.currencyTarget||e.currency)]}),j.jsxs("span",{className:"lang-he",children:["מחיר מקורי: ",J(e.originalPriceTarget||e.originalPrice||0,e.currencyTarget||e.currency)]}),j.jsxs("span",{className:"lang-ar",children:["السعر الأصلي: ",J(e.originalPriceTarget||e.originalPrice||0,e.currencyTarget||e.currency)]})]}),j.jsxs(Sn,{$currentLang:p,style:{color:"#60a5fa"},children:[j.jsxs("span",{className:"lang-en",children:["Currency Type: ",e.currencyTarget||e.currency]}),j.jsxs("span",{className:"lang-he",children:["סוג מטבע: ",e.currencyTarget||e.currency]}),j.jsxs("span",{className:"lang-ar",children:["نوع العملة: ",e.currencyTarget||e.currency]})]})]}),j.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[j.jsxs(Sn,{$currentLang:p,style:{color:"#fbbf24"},children:[j.jsxs("span",{className:"lang-en",children:["Discount: ",(e.discount||e.discountPercentage||0).toFixed(1),"%"]}),j.jsxs("span",{className:"lang-he",children:["הנחה: ",(e.discount||e.discountPercentage||0).toFixed(1),"%"]}),j.jsxs("span",{className:"lang-ar",children:["الخصم: ",(e.discount||e.discountPercentage||0).toFixed(1),"%"]})]}),j.jsxs(Sn,{$currentLang:p,style:{color:"#fb7185"},children:[j.jsxs("span",{className:"lang-en",children:["Commission: ",e.commissionRate||0,"%"]}),j.jsxs("span",{className:"lang-he",children:["עמלה: ",e.commissionRate||0,"%"]}),j.jsxs("span",{className:"lang-ar",children:["العمولة: ",e.commissionRate||0,"%"]})]}),j.jsxs(Sn,{$currentLang:p,style:{color:"#34d399"},children:[j.jsxs("span",{className:"lang-en",children:["Sales Volume: ",(e.volume||e.salesVolume||0).toLocaleString()]}),j.jsxs("span",{className:"lang-he",children:["נפח מכירות: ",(e.volume||e.salesVolume||0).toLocaleString()]}),j.jsxs("span",{className:"lang-ar",children:["حجم المبيعات: ",(e.volume||e.salesVolume||0).toLocaleString()]})]}),j.jsxs(Sn,{$currentLang:p,style:{color:"#a78bfa",gap:"6px",flexDirection:"row",alignItems:"center"},children:[j.jsx("span",{className:"lang-en",children:"Rating:"}),j.jsx("span",{className:"lang-he",children:"דירוג:"}),j.jsx("span",{className:"lang-ar",children:"التقييم:"}),j.jsx(vn,{children:(e=>{const t=[],r=Math.floor(e),n=e%1!=0;for(let o=0;o<5;o++)o<r||o===r&&n?t.push(j.jsx(jn,{$filled:!0,children:"★"},o)):t.push(j.jsx(jn,{children:"☆"},o));return t})(e.productScoreStars||e.scoreStars||e.rating||0)})]})]})]})]}),c&&j.jsx(an,{product:e,isVisible:c})]})},Pn=s.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 0;
  gap: 0;
  width: 100%;
`,Rn=s.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  font-size: 18px;
  padding: 20px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
  font-weight: 500;
`,On=s.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ff6b6b;
  font-size: 18px;
  text-align: center;
  padding: 20px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
  font-weight: 500;
`,Tn=s.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  color: #ffffff;
  text-align: center;
  padding: 40px;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 16px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
`,Ln=s.h2`
  font-size: 24px;
  margin-bottom: 16px;
  color: #fff;
`,An=s.p`
  font-size: 16px;
  line-height: 1.5;
  max-width: 400px;
`,Dn=s.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  scroll-snap-align: start;
  scroll-snap-stop: always;
  padding: 60px 0 60px 0;
  box-sizing: border-box;
`,Un=({products:e,loading:t,loadingMore:r,hasMore:o,onLoadMore:s,onLike:i,onShare:a,onBuy:c,onTitleChange:l,onCategoryChange:d,isLiked:u,productCategories:p=new Map,error:g,showDebug:h=!1})=>{const{t:f}=gr(),m=n.useRef(null);return n.useEffect(()=>{if(!o||r||0===e.length)return;const t=document.querySelector("[data-scroll-container]");m.current=new IntersectionObserver(e=>{const[t]=e;t.isIntersecting&&s()},{root:t,rootMargin:"200px",threshold:.1});const n=()=>{const e=document.querySelectorAll("[data-product-index]");if(e.length>=2){Array.from(e).slice(-2).forEach(e=>{m.current&&m.current.observe(e)})}};return n(),setTimeout(n,100),()=>{m.current&&m.current.disconnect()}},[o,r,s,e.length]),t||0===e.length&&!g?j.jsxs(Rn,{children:[j.jsx("div",{className:"loading",children:"⏳"}),j.jsx("span",{style:{marginLeft:"10px"},children:f("loadingProducts")})]}):g&&0===e.length?j.jsx(On,{children:j.jsxs("div",{children:[j.jsx("h3",{children:"Error loading products"}),j.jsx("p",{children:g})]})}):0!==e.length||t||g?j.jsxs(Pn,{children:[e.map((t,r)=>j.jsx(Dn,{"data-product-index":r+1,"data-product-id":t.id,onMouseEnter:()=>{},className:"fade-in",children:j.jsx(Nn,{product:{...t,onTitleChange:l},onLike:i,onShare:a,onBuy:c,onCategoryChange:d,isLiked:u?.(t.id),selectedCategory:p.get(t.id)||t.savedProductCategory||"other",showDebug:h,cardIndex:r,totalCards:e.length})},`${t.id}-${r}`)),r&&j.jsxs(Rn,{children:[j.jsx("div",{className:"loading",children:"⏳"}),j.jsx("span",{style:{marginLeft:"10px"},children:f("loading")})]})]}):j.jsxs(Tn,{children:[j.jsx(Ln,{children:"No products found"}),j.jsx(An,{children:"Try changing filters or searching for new products to discover more"})]})},Fn=({onLike:e,onShare:t,onBuy:r,onTitleChange:o,onCategoryChange:s,isLiked:i,likedProducts:a=new Set,productCategories:c=new Map,showDebug:l=!1,searchParams:d})=>{tr();const[u,p]=n.useState(!1),[g,h]=n.useState(0),[f,m]=n.useState(1),x=n.useRef(null),y=n.useRef(0),b=n.useRef(!1),{products:w,loading:v,loadingMore:S,error:_,hasMore:E,loadMoreProducts:C,clearProducts:k,fetchProducts:N}=cr(d);return n.useEffect(()=>{if(0===w.length)return;const e=document.querySelectorAll("[data-product-index]"),t=new IntersectionObserver(e=>{e.forEach(e=>{if(e.isIntersecting){const t=parseInt(e.target.getAttribute("data-product-index")||"1");e.target.getAttribute("data-product-id"),m(t)}})},{threshold:.5,rootMargin:"-20% 0px -20% 0px"});return e.forEach(e=>{t.observe(e)}),()=>{t.disconnect()}},[w]),n.useEffect(()=>{const e=e=>{1===f&&(y.current=e.touches[0].clientY,b.current=!0,console.log("🔄 [PULL TO REFRESH] Touch started on Product 1"))},t=e=>{if(!b.current||1!==f)return;const t=e.touches[0].clientY-y.current;t>0&&(e.preventDefault(),h(Math.min(t,100)),console.log("🔄 [PULL TO REFRESH] Pulling distance:",t))},r=async()=>{if(b.current&&1===f)if(b.current=!1,console.log("🔄 [PULL TO REFRESH] Touch end - pullDistance:",g),g>50){p(!0),console.log("🔄 [PULL TO REFRESH] Refreshing from Product 1..."),k();try{await N()}catch(e){console.error("Error refreshing products:",e)}setTimeout(()=>{p(!1),h(0)},500)}else h(0)},n=x.current;if(n)return n.addEventListener("touchstart",e,{passive:!0}),n.addEventListener("touchmove",t,{passive:!1}),n.addEventListener("touchend",r,{passive:!0}),()=>{n.removeEventListener("touchstart",e),n.removeEventListener("touchmove",t),n.removeEventListener("touchend",r)}},[f,g,k,N]),_?j.jsx("div",{className:"flex items-center justify-center min-h-[400px]",children:j.jsxs("div",{className:"text-center bg-black bg-opacity-40 backdrop-blur-lg border border-white border-opacity-20 rounded-xl p-8 shadow-lg",children:[j.jsx("div",{className:"text-red-400 text-6xl mb-4",children:"⚠️"}),j.jsx("h3",{className:"text-lg font-semibold text-white mb-2 drop-shadow-lg",children:"Error loading products"}),j.jsx("p",{className:"text-white text-opacity-80 drop-shadow-lg",children:_})]})}):j.jsxs("div",{ref:x,className:"w-full relative",style:{transform:`translateY(${g}px)`,transition:u?"none":"transform 0.3s ease-out"},children:[1===f&&g>0&&j.jsx("div",{className:"absolute top-0 left-0 right-0 flex items-center justify-center bg-blue-50 text-blue-600 py-4 z-10",style:{height:`${Math.min(g,100)}px`,transform:`translateY(-${Math.min(g,100)}px)`},children:g>50?j.jsxs("div",{className:"flex items-center gap-2",children:[j.jsx("div",{className:"animate-spin w-5 h-5 border-2 border-blue-600 border-t-transparent rounded-full"}),j.jsx("span",{className:"text-sm font-medium",children:"Release to refresh"})]}):j.jsxs("div",{className:"flex items-center gap-2",children:[j.jsx("div",{className:"w-5 h-5 border-2 border-blue-600 border-t-transparent rounded-full"}),j.jsx("span",{className:"text-sm",children:"Pull to refresh"})]})}),u&&j.jsx("div",{className:"absolute top-0 left-0 right-0 flex items-center justify-center bg-blue-50 text-blue-600 py-4 z-10",children:j.jsxs("div",{className:"flex items-center gap-2",children:[j.jsx("div",{className:"animate-spin w-5 h-5 border-2 border-blue-600 border-t-transparent rounded-full"}),j.jsx("span",{className:"text-sm font-medium",children:"Refreshing..."})]})}),j.jsx(Un,{products:w,loading:v,loadingMore:S,hasMore:E,onLoadMore:C,onLike:e,onShare:t,onBuy:r,onTitleChange:o,onCategoryChange:s,isLiked:i,productCategories:c,showDebug:l})]})},In=({isVisible:e=!1})=>{const[t,r]=n.useState([]),[o,s]=n.useState(!1),{currentCurrency:i}=tr();n.useEffect(()=>{if(e){const e=setInterval(()=>{r(Yt.getLogs())},1e3);return()=>clearInterval(e)}},[e]);return e?j.jsxs("div",{className:"fixed bottom-4 right-4 z-50 bg-black/80 text-white p-4 rounded-lg max-w-lg max-h-96 overflow-hidden",children:[j.jsxs("div",{className:"flex items-center justify-between mb-2",children:[j.jsx("h3",{className:"text-sm font-bold",children:"Currency Debug Panel"}),j.jsx("button",{onClick:()=>s(!o),className:"text-xs bg-blue-500 px-2 py-1 rounded",children:o?"Collapse":"Expand"})]}),j.jsxs("div",{className:"text-xs space-y-1",children:[j.jsxs("div",{children:["Current Currency: ",j.jsx("span",{className:"text-green-400",children:i?.code})]}),j.jsxs("div",{children:["LocalStorage: ",j.jsx("span",{className:"text-yellow-400",children:localStorage.getItem("preferred-currency")||"Not set"})]}),j.jsxs("div",{children:["Logs Count: ",j.jsx("span",{className:"text-blue-400",children:t.length})]})]}),j.jsxs("div",{className:"space-y-2 mt-2",children:[j.jsxs("div",{className:"flex flex-wrap gap-1",children:[j.jsx("button",{onClick:async()=>{const e=Zt();try{await navigator.clipboard.writeText(e),alert("Logs copied to clipboard!")}catch(t){console.error("Failed to copy logs:",t),alert("Failed to copy logs. Check console for details.")}},className:"text-xs bg-green-500 px-2 py-1 rounded hover:bg-green-600",children:"Copy Logs"}),j.jsx("button",{onClick:Qt,className:"text-xs bg-blue-500 px-2 py-1 rounded hover:bg-blue-600",children:"Log State"}),j.jsx("button",{onClick:async()=>{try{const e=await Xt(100,"USD","EUR");console.log("Test conversion result:",e)}catch(e){console.error("Test conversion failed:",e)}},className:"text-xs bg-purple-500 px-2 py-1 rounded hover:bg-purple-600",children:"Test API"}),j.jsx("button",{onClick:()=>window.location.reload(),className:"text-xs bg-red-500 px-2 py-1 rounded hover:bg-red-600",children:"Refresh Page"})]}),j.jsxs("div",{className:"flex flex-wrap gap-1",children:[j.jsx("button",{onClick:()=>{Yt.clearLogs(),r([])},className:"text-xs bg-orange-500 px-2 py-1 rounded hover:bg-orange-600",children:"Clear Logs"}),j.jsx("button",{onClick:()=>{window.testAppCurrencyConversion?window.testAppCurrencyConversion():console.log("testAppCurrencyConversion function not available")},className:"text-xs bg-indigo-500 px-2 py-1 rounded hover:bg-indigo-600",children:"Test App Conversion"}),j.jsx("button",{onClick:()=>{window.forceUIUpdate?window.forceUIUpdate():console.log("forceUIUpdate function not available")},className:"text-xs bg-teal-500 px-2 py-1 rounded hover:bg-teal-600",children:"Force UI Update"})]}),j.jsxs("div",{className:"flex flex-wrap gap-1",children:[j.jsx("button",{onClick:()=>{window.testDirectAPI?window.testDirectAPI():console.log("testDirectAPI function not available")},className:"text-xs bg-cyan-500 px-2 py-1 rounded hover:bg-cyan-600",children:"Test Direct API"}),j.jsx("button",{onClick:()=>{window.testPriceDisplay?window.testPriceDisplay():console.log("testPriceDisplay function not available")},className:"text-xs bg-orange-500 px-2 py-1 rounded hover:bg-orange-600",children:"Test Price Display"})]})]}),o&&j.jsx("div",{className:"mt-2 max-h-48 overflow-y-auto",children:j.jsx("div",{className:"text-xs space-y-1",children:t.slice(0,10).map((e,t)=>j.jsxs("div",{className:"border-b border-gray-600 pb-1",children:[j.jsxs("div",{className:"text-gray-400",children:["[",e.timestamp,"] ",e.level," ",e.component]}),j.jsx("div",{className:"text-white",children:e.message}),e.data&&j.jsx("div",{className:"text-gray-300 text-xs",children:JSON.stringify(e.data,null,2)})]},t))})})]}):null};window.showCurrencyDebug=(e=!0)=>{const t=new CustomEvent("toggleCurrencyDebug",{detail:{show:e}});window.dispatchEvent(t)};const Bn=({isVisible:e=!1})=>{const[t,r]=n.useState([]),[o,s]=n.useState(!1),{currentCurrency:i}=tr(),{searchParams:a}=or(),c=(e,t,n)=>{r(r=>[{id:Date.now(),test:e,result:t,error:n,timestamp:(new Date).toISOString()},...r.slice(0,9)])};return e?j.jsxs("div",{className:"fixed top-4 right-4 z-50 bg-black/90 text-white p-4 rounded-lg max-w-md max-h-96 overflow-hidden border border-purple-400/30",children:[j.jsxs("div",{className:"flex items-center justify-between mb-3",children:[j.jsx("h3",{className:"text-sm font-bold text-purple-300",children:"API Test Panel"}),j.jsx("button",{onClick:()=>{r([])},className:"text-xs bg-red-500 px-2 py-1 rounded hover:bg-red-600",children:"Clear"})]}),j.jsxs("div",{className:"space-y-2 mb-3",children:[j.jsx("button",{onClick:async()=>{s(!0);try{const e=await Wt.get("/api/search/comprehensive",{params:{q:"shoes",page:1,pageSize:10,target_currency:i?.code||"USD",min_price:10,max_price:100,sort_by:"volume_desc",only_with_video:0,category:"Electronics"}});c("Comprehensive Search",{success:e.data.success,itemsCount:e.data.items?.length||0,queryType:e.data.query_type,hasMore:e.data.hasMore,currencyConversion:e.data.currency_conversion})}catch(e){c("Comprehensive Search",null,e)}finally{s(!1)}},disabled:o,className:"w-full text-xs bg-blue-500 px-2 py-1 rounded hover:bg-blue-600 disabled:opacity-50",children:o?"Testing...":"Test Comprehensive Search"}),j.jsx("button",{onClick:async()=>{s(!0);try{const e=await Wt.post("/api/currency/convert",{price:100,from_currency:"USD",to_currency:i?.code||"EUR"});c("Currency Conversion",e.data)}catch(e){c("Currency Conversion",null,e)}finally{s(!1)}},disabled:o,className:"w-full text-xs bg-green-500 px-2 py-1 rounded hover:bg-green-600 disabled:opacity-50",children:o?"Testing...":"Test Currency Conversion"}),j.jsx("button",{onClick:()=>{c("Current Search Params",{searchParams:a,currentCurrency:i?.code,timestamp:(new Date).toISOString()})},className:"w-full text-xs bg-purple-500 px-2 py-1 rounded hover:bg-purple-600",children:"Show Current Params"})]}),j.jsx("div",{className:"max-h-48 overflow-y-auto space-y-2",children:t.map(e=>j.jsxs("div",{className:"border-b border-gray-600 pb-2 text-xs",children:[j.jsx("div",{className:"font-semibold text-cyan-300",children:e.test}),j.jsx("div",{className:"text-gray-400 text-xs",children:e.timestamp}),e.error?j.jsxs("div",{className:"text-red-400",children:["Error: ",e.error.message||JSON.stringify(e.error)]}):j.jsx("div",{className:"text-gray-300",children:j.jsx("pre",{className:"whitespace-pre-wrap text-xs",children:JSON.stringify(e.result,null,2)})})]},e.id))})]}):null};window.showApiTest=(e=!0)=>{const t=new CustomEvent("toggleApiTest",{detail:{show:e}});window.dispatchEvent(t)};const $n=({isVisible:e=!1})=>{const t=e=>{const t=[],r=Math.floor(e),n=e%1!=0;for(let o=0;o<5;o++)o<r||o===r&&n?t.push(j.jsx("span",{className:"text-yellow-400",children:"★"},o)):t.push(j.jsx("span",{className:"text-gray-400",children:"☆"},o));return t};return e?j.jsxs("div",{className:"fixed top-20 right-4 z-50 bg-black/90 text-white p-4 rounded-lg max-w-sm border border-yellow-400/30",children:[j.jsx("h4",{className:"text-sm font-bold text-yellow-300 mb-3",children:"Star Rating Test"}),j.jsx("div",{className:"space-y-2",children:[0,1,2,2.5,3,3.7,4,4.5,5].map(e=>j.jsxs("div",{className:"flex items-center gap-2",children:[j.jsx("div",{className:"flex items-center gap-1",children:t(e)}),j.jsxs("span",{className:"text-xs text-gray-300",children:["(",e,")"]})]},e))}),j.jsxs("div",{className:"mt-3 text-xs text-gray-400",children:[j.jsx("div",{children:"★ = Filled star"}),j.jsx("div",{children:"☆ = Empty star"})]})]}):null},zn=s.div`
  position: fixed !important;
  bottom: 16px !important;
  right: 20px !important;
  z-index: 100 !important;
  opacity: ${e=>e.$visible?1:0};
  visibility: ${e=>e.$visible?"visible":"hidden"};
  transition: all 0.3s ease;
  pointer-events: auto !important;
  transform: translateZ(0);
  will-change: transform;
`,qn=s.button`
  width: 32px !important;
  height: 32px !important;
  border-radius: 50% !important;
  background: linear-gradient(45deg, #FF4081, #9333EA) !important;
  border: 1px solid rgba(255, 255, 255, 0.3) !important;
  color: white !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  cursor: pointer !important;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3) !important;
  transition: all 0.3s ease !important;
  font-size: 14px !important;
  position: relative !important;
  z-index: 999999 !important;
  pointer-events: auto !important;
  
  &:hover {
    transform: translateY(-2px) scale(1.05) !important;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.5) !important;
    border-color: rgba(255, 255, 255, 0.6) !important;
  }
  
  &:active {
    transform: translateY(-1px) scale(1.02) !important;
  }
`,Mn=()=>{const[e,t]=n.useState(!1);n.useEffect(()=>{const r=()=>{const e=window.scrollY||document.documentElement.scrollTop,r=document.querySelector("[data-scroll-container]"),n=r?r.scrollTop:0,o=Math.max(e,n);t(!!(o>100))};window.debugBackToTop=()=>{console.log("🔼 [DEBUG] Manual debug triggered"),console.log("🔼 [DEBUG] Current scroll:",window.scrollY),console.log("🔼 [DEBUG] isVisible state:",e),t(!0),console.log("🔼 [DEBUG] Forced visibility to true")},window.addEventListener("scroll",r);const n=document.querySelector("[data-scroll-container]");return n&&n.addEventListener("scroll",r),()=>{window.removeEventListener("scroll",r);const e=document.querySelector("[data-scroll-container]");e&&e.removeEventListener("scroll",r),delete window.debugBackToTop}},[e]);return j.jsx(zn,{$visible:e,"data-back-to-top":!0,children:j.jsx(qn,{onClick:()=>{window.scrollTo({top:0,behavior:"smooth"});const e=document.querySelector("[data-scroll-container]");e&&e.scrollTo({top:0,behavior:"smooth"})},title:"Back to top",children:j.jsx(m,{size:22})})})},Hn=s.div`
  height: 100vh;
  width: 100vw;
  background: linear-gradient(to right, #FF4081, #9333EA);
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  direction: ${e=>e.$isRTL?"rtl":"ltr"};
`,Vn=s.div`
  height: 100vh;
  overflow-y: auto;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
`,Kn=s.div`
  position: fixed;
  bottom: 16px;
  left: 16px;
  z-index: 40;
  font-size: 12px;
  color: #ffffff;
  font-family: 'Courier New', monospace;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
`;function Wn(){const[e,t]=n.useState(!1),[r,o]=n.useState(!1),[s,i]=n.useState(!1),[a,c]=n.useState(!1),[l,d]=n.useState(!1),[u,p]=n.useState(!1),[g]=n.useState(["Electronics","Fashion","Home & Garden","Sports","Beauty","Automotive"]);(()=>{const[e,t]=n.useState(null),[r,o]=n.useState(!1),[s,i]=n.useState(null)})(),(()=>{const[e,t]=n.useState("dark");n.useEffect(()=>{const e=localStorage.getItem("preferred-theme");e&&Jt.some(t=>t.value===e)&&t(e)},[]),n.useEffect(()=>{const t=document.documentElement;"dark"===e?(t.classList.add("dark"),t.classList.remove("light")):"light"===e?(t.classList.add("light"),t.classList.remove("dark")):window.matchMedia("(prefers-color-scheme: dark)").matches?(t.classList.add("dark"),t.classList.remove("light")):(t.classList.add("light"),t.classList.remove("dark"))},[e])})();const{currentCurrency:h}=tr(),{searchParams:f,setSearchParams:m}=or(),{updateLikeStatus:x}=sr(),{products:y,setProducts:b}=cr(f),{t:w,isRTL:v,textDirection:S}=gr(),[_,E]=n.useState(new Set),[C,k]=n.useState(new Map),N=n.useRef(0),P=n.useRef(new Set);n.useEffect(()=>{const e=new Set(y.map(e=>e.id)),t=y.length!==N.current,r=e.size!==P.current.size||Array.from(e).some(e=>!P.current.has(e));if(t||r){const t=new Set,r=new Map;y.forEach(e=>{(!0===e.isSavedInDb||null!=e.customTitle&&null!==e.customTitle&&""!==e.customTitle.trim())&&t.add(e.id),e.savedProductCategory&&r.set(e.id,e.savedProductCategory)}),E(t),k(e=>{const t=new Map(e);return r.forEach((e,r)=>{t.set(r,e)}),t}),N.current=y.length,P.current=e}},[y]);const R=async e=>{try{console.log("🌐 [API REQUEST] DELETE /api/like/"+e);const t=await(async e=>(await Wt.delete(`/api/like/${e}`)).data)(e);t&&t.success?(b(t=>t.map(t=>t.id===e?{...t,customTitle:null}:t)),E(t=>{const r=new Set(t);return r.delete(e),r}),console.log("✅ [UNLIKE] Product unliked successfully:",e)):console.error("❌ [UNLIKE] Failed to remove product:",t?.message||"Unknown error")}catch(t){console.error("❌ [UNLIKE] Error removing product:",t)}};return n.useEffect(()=>{const e=e=>{e.ctrlKey&&e.shiftKey&&"D"===e.key&&(e.preventDefault(),i(e=>!e)),e.ctrlKey&&e.shiftKey&&"T"===e.key&&(e.preventDefault(),c(e=>!e)),e.ctrlKey&&e.shiftKey&&"P"===e.key&&(e.preventDefault(),d(e=>!e)),e.ctrlKey&&e.shiftKey&&"S"===e.key&&(e.preventDefault(),p(e=>!e))};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[]),n.useEffect(()=>{const e=e=>{i(e.detail.show)},t=e=>{c(e.detail.show)};return window.addEventListener("toggleCurrencyDebug",e),window.addEventListener("toggleApiTest",t),()=>{window.removeEventListener("toggleCurrencyDebug",e),window.removeEventListener("toggleApiTest",t)}},[]),j.jsxs(Hn,{$isRTL:v,children:[j.jsx(Nr,{onSearchClick:()=>o(!0),onCurrencyChange:e=>{m(t=>({...t,target_currency:e,page:1}))},onLanguageChange:e=>{}}),j.jsx(Vn,{"data-scroll-container":!0,children:j.jsx(Fn,{onLike:async(e,t)=>{try{if(_.has(e))await R(e),E(t=>{const r=new Set(t);return r.delete(e),r}),k(t=>{const r=new Map(t);return r.delete(e),r}),x(e,!1);else{const r=y.find(t=>t.id===e),n=r?.customTitle||r?.title||"Liked Product",o=t||C.get(e)||"other";await(async(e,t,r="other")=>{try{let o=y.find(t=>t.id===e);if(!o){console.warn("⚠️ [LIKE] Product not found in current list, fetching from API:",e);try{const t=await Wt.get("/api/search/comprehensive",{params:{q:e,page:1,pageSize:1}});if(t.data.success&&t.data.items&&t.data.items.length>0){const r=t.data.items[0];o={id:r.product_id?.toString()||e,title:r.product_title||"",price:r.sale_price||0,currency:r.sale_price_currency||"USD",image:r.product_main_image_url||"",rating:r.product_score_stars||0,reviewCount:r.lastest_volume||0,productDetailUrl:r.product_detail_url||r.promotion_link||"",url:r.promotion_link||r.product_detail_url||"",video:r.video_link||r.product_video_url||void 0}}}catch(n){console.error("❌ [LIKE] Failed to fetch product from API:",n)}}if(!o){console.error("❌ [LIKE] Product not found and could not fetch from API:",e);const n={product_id:e,product_title:t||"Product",promotion_link:"",product_category:r||"other",custom_title:t||void 0,has_video:!1},o=await Gt(n);return void(o&&o.success&&(E(t=>new Set(t).add(e)),k(t=>new Map(t).set(e,r||"other")),console.log("✅ [LIKE] Product liked successfully with minimal data:",e)))}const s={product_id:o.id,product_title:o.title||t||"Product",promotion_link:o.productDetailUrl||o.url||"",product_category:r||"other",custom_title:t||void 0,has_video:!!o.video};console.log("🌐 [API REQUEST] POST /api/like",s);const i=await Gt(s);i&&i.success?(b(r=>r.map(r=>r.id===e?{...r,customTitle:t}:r)),E(t=>new Set(t).add(e)),console.log("✅ [LIKE] Product liked successfully:",e)):console.error("❌ [LIKE] Failed to save product:",i?.message||"Unknown error")}catch(o){console.error("❌ [LIKE] Error saving product:",o)}})(e,n,o),E(t=>new Set(t).add(e)),k(t=>new Map(t).set(e,o)),x(e,!0)}}catch(r){console.error("Error toggling like status:",r)}},onShare:e=>{navigator.share?navigator.share({title:e.title,text:`Check out this product: ${e.title}`,url:e.url}):navigator.clipboard.writeText(e.url)},onBuy:e=>{window.open(e.url,"_blank")},onTitleChange:async(e,t)=>{try{b(r=>r.map(r=>r.id===e?{...r,customTitle:t}:r))}catch(r){console.error("Error updating product title:",r)}},onCategoryChange:async(e,t)=>{try{k(r=>new Map(r).set(e,t));const n=y.find(t=>t.id===e);if(!0===n?.isSavedInDb||_.has(e)){let o;if(console.log(`🔄 [CATEGORY CHANGE] Updating category for product ${e} in database: ${t}`),n)o={product_id:n.id,product_title:n.title||"",promotion_link:n.productDetailUrl||n.url||"",product_category:t,custom_title:n.customTitle||null,has_video:!!n.video};else try{const r=await Wt.get("/api/search/comprehensive",{params:{q:e,page:1,pageSize:1}});if(r.data.success&&r.data.items&&r.data.items.length>0){const n=r.data.items[0];o={product_id:e,product_title:n.product_title||"",promotion_link:n.product_detail_url||n.promotion_link||"",product_category:t,custom_title:n.custom_title||null,has_video:!(!n.video_link&&!n.product_video_url)}}}catch(r){console.error("❌ [CATEGORY CHANGE] Failed to fetch product from API:",r),o={product_id:e,product_title:"Product",promotion_link:"",product_category:t,custom_title:null,has_video:!1}}if(o){const t=await Gt(o);t&&t.success?console.log(`✅ [CATEGORY CHANGE] Category updated successfully for product ${e}`):console.error("❌ [CATEGORY CHANGE] Failed to update category:",t?.message||"Unknown error")}}else console.log(`ℹ️ [CATEGORY CHANGE] Product ${e} not in database, category saved in state only`)}catch(n){console.error("❌ [CATEGORY CHANGE] Error updating category:",n)}},isLiked:e=>_.has(e),likedProducts:_,productCategories:C,showDebug:l,searchParams:f})}),j.jsx(Yr,{isOpen:r,onClose:()=>o(!1),onSearch:e=>{const[t,r]=e.sortBy.split("_"),n="desc"===r?"desc":"asc",s={query:e.query||"all",hasVideo:e.onlyWithVideo||void 0,minPrice:e.minPrice,maxPrice:e.maxPrice,sortBy:e.sortBy,sortOrder:n,page:1,target_currency:h?.code||e.targetCurrency};m(s),o(!1)}}),j.jsx(Pr,{isOpen:e,onClose:()=>t(!1),onSearch:e=>{const r=[e.productQuery,e.categoryQuery].filter(Boolean).join(" "),n=(e,t)=>{if(!e)return"volume_desc";const r="asc"===t?"asc":"desc";switch(e){case"price":return`price_${r}`;case"rating":return`rating_${r}`;case"discount":return`discount_${r}`;case"newest":return`newest_${r}`;default:return"volume_desc"}};m(t=>({...t,query:r,category:e.categoryQuery||void 0,hasVideo:e.hasVideo||void 0,minPrice:e.minPrice||0,maxPrice:e.maxPrice||1e6,sortBy:n(e.sortBy,e.sortOrder),sortOrder:e.sortOrder||"desc",page:1,target_currency:h?.code||"USD"})),t(!1)},searchCategories:g,currentSearchQuery:f.query,currentHasVideo:f.hasVideo,currentCategory:f.category,currentMinPrice:f.minPrice,currentMaxPrice:f.maxPrice,currentSortBy:f.sortBy,currentSortOrder:f.sortOrder}),s&&j.jsx(In,{isVisible:s}),a&&j.jsx(Bn,{isVisible:a}),u&&j.jsx($n,{isVisible:u}),j.jsx(Kn,{children:j.jsx("span",{children:"V2025.0.1.9.3"})}),j.jsx(Mn,{})]})}function Gn(){return j.jsx(pr,{children:j.jsx(Wn,{})})}_.createRoot(document.getElementById("root")).render(j.jsx(Gn,{}));
