import{r as e,a as t,g as r}from"./vendor-Z2Iecplj.js";import{R as n,r as o,S as s,X as a,C as i,T as c,Z as l,a as d,b as u,F as p,c as h,P as f,d as g}from"./ui-CokpRFLL.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if("childList"===r.type)for(const e of r.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)}).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?t.credentials="include":"anonymous"===e.crossOrigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();var m,x,y={exports:{}},b={};var v,w=(x||(x=1,y.exports=function(){if(m)return b;m=1;var t=e(),r=Symbol.for("react.element"),n=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,s=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function i(e,t,n){var i,c={},l=null,d=null;for(i in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(d=t.ref),t)o.call(t,i)&&!a.hasOwnProperty(i)&&(c[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps)void 0===c[i]&&(c[i]=t[i]);return{$$typeof:r,type:e,key:l,ref:d,props:c,_owner:s.current}}return b.Fragment=n,b.jsx=i,b.jsxs=i,b}()),y.exports),S={};const j=r(function(){if(v)return S;v=1;var e=t();return S.createRoot=e.createRoot,S.hydrateRoot=e.hydrateRoot,S}());var E=function(){return E=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},E.apply(this,arguments)};function C(e,t,r){if(r||2===arguments.length)for(var n,o=0,s=t.length;o<s;o++)!n&&o in t||(n||(n=Array.prototype.slice.call(t,0,o)),n[o]=t[o]);return e.concat(n||Array.prototype.slice.call(t))}"function"==typeof SuppressedError&&SuppressedError;var k="-ms-",N="-moz-",P="-webkit-",R="comm",T="rule",O="decl",A="@keyframes",_=Math.abs,L=String.fromCharCode,D=Object.assign;function I(e){return e.trim()}function $(e,t){return(e=t.exec(e))?e[0]:e}function F(e,t,r){return e.replace(t,r)}function U(e,t,r){return e.indexOf(t,r)}function B(e,t){return 0|e.charCodeAt(t)}function z(e,t,r){return e.slice(t,r)}function M(e){return e.length}function q(e){return e.length}function V(e,t){return t.push(e),e}function H(e,t){return e.filter(function(e){return!$(e,t)})}var G=1,W=1,J=0,K=0,Y=0,Q="";function X(e,t,r,n,o,s,a,i){return{value:e,root:t,parent:r,type:n,props:o,children:s,line:G,column:W,length:a,return:"",siblings:i}}function Z(e,t){return D(X("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function ee(e){for(;e.root;)e=Z(e.root,{children:[e]});V(e,e.siblings)}function te(){return Y=K>0?B(Q,--K):0,W--,10===Y&&(W=1,G--),Y}function re(){return Y=K<J?B(Q,K++):0,W++,10===Y&&(W=1,G++),Y}function ne(){return B(Q,K)}function oe(){return K}function se(e,t){return z(Q,e,t)}function ae(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function ie(e){return I(se(K-1,de(91===e?e+2:40===e?e+1:e)))}function ce(e){for(;(Y=ne())&&Y<33;)re();return ae(e)>2||ae(Y)>3?"":" "}function le(e,t){for(;--t&&re()&&!(Y<48||Y>102||Y>57&&Y<65||Y>70&&Y<97););return se(e,oe()+(t<6&&32==ne()&&32==re()))}function de(e){for(;re();)switch(Y){case e:return K;case 34:case 39:34!==e&&39!==e&&de(Y);break;case 40:41===e&&de(e);break;case 92:re()}return K}function ue(e,t){for(;re()&&e+Y!==57&&(e+Y!==84||47!==ne()););return"/*"+se(t,K-1)+"*"+L(47===e?e:re())}function pe(e){for(;!ae(ne());)re();return se(e,K)}function he(e){return function(e){return Q="",e}(fe("",null,null,null,[""],e=function(e){return G=W=1,J=M(Q=e),K=0,[]}(e),0,[0],e))}function fe(e,t,r,n,o,s,a,i,c){for(var l=0,d=0,u=a,p=0,h=0,f=0,g=1,m=1,x=1,y=0,b="",v=o,w=s,S=n,j=b;m;)switch(f=y,y=re()){case 40:if(108!=f&&58==B(j,u-1)){-1!=U(j+=F(ie(y),"&","&\f"),"&\f",_(l?i[l-1]:0))&&(x=-1);break}case 34:case 39:case 91:j+=ie(y);break;case 9:case 10:case 13:case 32:j+=ce(f);break;case 92:j+=le(oe()-1,7);continue;case 47:switch(ne()){case 42:case 47:V(me(ue(re(),oe()),t,r,c),c);break;default:j+="/"}break;case 123*g:i[l++]=M(j)*x;case 125*g:case 59:case 0:switch(y){case 0:case 125:m=0;case 59+d:-1==x&&(j=F(j,/\f/g,"")),h>0&&M(j)-u&&V(h>32?xe(j+";",n,r,u-1,c):xe(F(j," ","")+";",n,r,u-2,c),c);break;case 59:j+=";";default:if(V(S=ge(j,t,r,l,d,o,i,b,v=[],w=[],u,s),s),123===y)if(0===d)fe(j,t,S,S,v,s,u,i,w);else switch(99===p&&110===B(j,3)?100:p){case 100:case 108:case 109:case 115:fe(e,S,S,n&&V(ge(e,S,S,0,0,o,i,b,o,v=[],u,w),w),o,w,u,i,n?v:w);break;default:fe(j,S,S,S,[""],w,0,i,w)}}l=d=h=0,g=x=1,b=j="",u=a;break;case 58:u=1+M(j),h=f;default:if(g<1)if(123==y)--g;else if(125==y&&0==g++&&125==te())continue;switch(j+=L(y),y*g){case 38:x=d>0?1:(j+="\f",-1);break;case 44:i[l++]=(M(j)-1)*x,x=1;break;case 64:45===ne()&&(j+=ie(re())),p=ne(),d=u=M(b=j+=pe(oe())),y++;break;case 45:45===f&&2==M(j)&&(g=0)}}return s}function ge(e,t,r,n,o,s,a,i,c,l,d,u){for(var p=o-1,h=0===o?s:[""],f=q(h),g=0,m=0,x=0;g<n;++g)for(var y=0,b=z(e,p+1,p=_(m=a[g])),v=e;y<f;++y)(v=I(m>0?h[y]+" "+b:F(b,/&\f/g,h[y])))&&(c[x++]=v);return X(e,t,r,0===o?T:i,c,l,d,u)}function me(e,t,r,n){return X(e,t,r,R,L(Y),z(e,2,-2),0,n)}function xe(e,t,r,n,o){return X(e,t,r,O,z(e,0,n),z(e,n+1,-1),n,o)}function ye(e,t,r){switch(function(e,t){return 45^B(e,0)?(((t<<2^B(e,0))<<2^B(e,1))<<2^B(e,2))<<2^B(e,3):0}(e,t)){case 5103:return P+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return P+e+e;case 4789:return N+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return P+e+N+e+k+e+e;case 5936:switch(B(e,t+11)){case 114:return P+e+k+F(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return P+e+k+F(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return P+e+k+F(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return P+e+k+e+e;case 6165:return P+e+k+"flex-"+e+e;case 5187:return P+e+F(e,/(\w+).+(:[^]+)/,P+"box-$1$2"+k+"flex-$1$2")+e;case 5443:return P+e+k+"flex-item-"+F(e,/flex-|-self/g,"")+($(e,/flex-|baseline/)?"":k+"grid-row-"+F(e,/flex-|-self/g,""))+e;case 4675:return P+e+k+"flex-line-pack"+F(e,/align-content|flex-|-self/g,"")+e;case 5548:return P+e+k+F(e,"shrink","negative")+e;case 5292:return P+e+k+F(e,"basis","preferred-size")+e;case 6060:return P+"box-"+F(e,"-grow","")+P+e+k+F(e,"grow","positive")+e;case 4554:return P+F(e,/([^-])(transform)/g,"$1"+P+"$2")+e;case 6187:return F(F(F(e,/(zoom-|grab)/,P+"$1"),/(image-set)/,P+"$1"),e,"")+e;case 5495:case 3959:return F(e,/(image-set\([^]*)/,P+"$1$`$1");case 4968:return F(F(e,/(.+:)(flex-)?(.*)/,P+"box-pack:$3"+k+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+P+e+e;case 4200:if(!$(e,/flex-|baseline/))return k+"grid-column-align"+z(e,t)+e;break;case 2592:case 3360:return k+F(e,"template-","")+e;case 4384:case 3616:return r&&r.some(function(e,r){return t=r,$(e.props,/grid-\w+-end/)})?~U(e+(r=r[t].value),"span",0)?e:k+F(e,"-start","")+e+k+"grid-row-span:"+(~U(r,"span",0)?$(r,/\d+/):+$(r,/\d+/)-+$(e,/\d+/))+";":k+F(e,"-start","")+e;case 4896:case 4128:return r&&r.some(function(e){return $(e.props,/grid-\w+-start/)})?e:k+F(F(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return F(e,/(.+)-inline(.+)/,P+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(M(e)-1-t>6)switch(B(e,t+1)){case 109:if(45!==B(e,t+4))break;case 102:return F(e,/(.+:)(.+)-([^]+)/,"$1"+P+"$2-$3$1"+N+(108==B(e,t+3)?"$3":"$2-$3"))+e;case 115:return~U(e,"stretch",0)?ye(F(e,"stretch","fill-available"),t,r)+e:e}break;case 5152:case 5920:return F(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(t,r,n,o,s,a,i){return k+r+":"+n+i+(o?k+r+"-span:"+(s?a:+a-+n)+i:"")+e});case 4949:if(121===B(e,t+6))return F(e,":",":"+P)+e;break;case 6444:switch(B(e,45===B(e,14)?18:11)){case 120:return F(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+P+(45===B(e,14)?"inline-":"")+"box$3$1"+P+"$2$3$1"+k+"$2box$3")+e;case 100:return F(e,":",":"+k)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return F(e,"scroll-","scroll-snap-")+e}return e}function be(e,t){for(var r="",n=0;n<e.length;n++)r+=t(e[n],n,e,t)||"";return r}function ve(e,t,r,n){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case O:return e.return=e.return||e.value;case R:return"";case A:return e.return=e.value+"{"+be(e.children,n)+"}";case T:if(!M(e.value=e.props.join(",")))return""}return M(r=be(e.children,n))?e.return=e.value+"{"+r+"}":""}function we(e,t,r,n){if(e.length>-1&&!e.return)switch(e.type){case O:return void(e.return=ye(e.value,e.length,r));case A:return be([Z(e,{value:F(e.value,"@","@"+P)})],n);case T:if(e.length)return function(e,t){return e.map(t).join("")}(r=e.props,function(t){switch($(t,n=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":ee(Z(e,{props:[F(t,/:(read-\w+)/,":-moz-$1")]})),ee(Z(e,{props:[t]})),D(e,{props:H(r,n)});break;case"::placeholder":ee(Z(e,{props:[F(t,/:(plac\w+)/,":"+P+"input-$1")]})),ee(Z(e,{props:[F(t,/:(plac\w+)/,":-moz-$1")]})),ee(Z(e,{props:[F(t,/:(plac\w+)/,k+"input-$1")]})),ee(Z(e,{props:[t]})),D(e,{props:H(r,n)})}return""})}}var Se={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},je={},Ee="undefined"!=typeof process&&void 0!==je&&(je.REACT_APP_SC_ATTR||je.SC_ATTR)||"data-styled",Ce="active",ke="data-styled-version",Ne="6.1.19",Pe="/*!sc*/\n",Re="undefined"!=typeof window&&"undefined"!=typeof document,Te=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!==je&&void 0!==je.REACT_APP_SC_DISABLE_SPEEDY&&""!==je.REACT_APP_SC_DISABLE_SPEEDY?"false"!==je.REACT_APP_SC_DISABLE_SPEEDY&&je.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!==je&&void 0!==je.SC_DISABLE_SPEEDY&&""!==je.SC_DISABLE_SPEEDY&&("false"!==je.SC_DISABLE_SPEEDY&&je.SC_DISABLE_SPEEDY)),Oe=Object.freeze([]),Ae=Object.freeze({});var _e=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Le=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,De=/(^-|-$)/g;function Ie(e){return e.replace(Le,"-").replace(De,"")}var $e=/(a)(d)/gi,Fe=function(e){return String.fromCharCode(e+(e>25?39:97))};function Ue(e){var t,r="";for(t=Math.abs(e);t>52;t=t/52|0)r=Fe(t%52)+r;return(Fe(t%52)+r).replace($e,"$1-$2")}var Be,ze=function(e,t){for(var r=t.length;r;)e=33*e^t.charCodeAt(--r);return e},Me=function(e){return ze(5381,e)};function qe(e){return"string"==typeof e&&!0}var Ve="function"==typeof Symbol&&Symbol.for,He=Ve?Symbol.for("react.memo"):60115,Ge=Ve?Symbol.for("react.forward_ref"):60112,We={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Je={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Ke={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Ye=((Be={})[Ge]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Be[He]=Ke,Be);function Qe(e){return("type"in(t=e)&&t.type.$$typeof)===He?Ke:"$$typeof"in e?Ye[e.$$typeof]:We;var t}var Xe=Object.defineProperty,Ze=Object.getOwnPropertyNames,et=Object.getOwnPropertySymbols,tt=Object.getOwnPropertyDescriptor,rt=Object.getPrototypeOf,nt=Object.prototype;function ot(e,t,r){if("string"!=typeof t){if(nt){var n=rt(t);n&&n!==nt&&ot(e,n,r)}var o=Ze(t);et&&(o=o.concat(et(t)));for(var s=Qe(e),a=Qe(t),i=0;i<o.length;++i){var c=o[i];if(!(c in Je||r&&r[c]||a&&c in a||s&&c in s)){var l=tt(t,c);try{Xe(e,c,l)}catch(d){}}}}return e}function st(e){return"function"==typeof e}function at(e){return"object"==typeof e&&"styledComponentId"in e}function it(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function ct(e,t){if(0===e.length)return"";for(var r=e[0],n=1;n<e.length;n++)r+=e[n];return r}function lt(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function dt(e,t,r){if(void 0===r&&(r=!1),!r&&!lt(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var n=0;n<t.length;n++)e[n]=dt(e[n],t[n]);else if(lt(t))for(var n in t)e[n]=dt(e[n],t[n]);return e}function ut(e,t){Object.defineProperty(e,"toString",{value:t})}function pt(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var ht=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return e.prototype.indexOfGroup=function(e){for(var t=0,r=0;r<e;r++)t+=this.groupSizes[r];return t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var r=this.groupSizes,n=r.length,o=n;e>=o;)if((o<<=1)<0)throw pt(16,"".concat(e));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var s=n;s<o;s++)this.groupSizes[s]=0}for(var a=this.indexOfGroup(e+1),i=(s=0,t.length);s<i;s++)this.tag.insertRule(a,t[s])&&(this.groupSizes[e]++,a++)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],r=this.indexOfGroup(e),n=r+t;this.groupSizes[e]=0;for(var o=r;o<n;o++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var r=this.groupSizes[e],n=this.indexOfGroup(e),o=n+r,s=n;s<o;s++)t+="".concat(this.tag.getRule(s)).concat(Pe);return t},e}(),ft=new Map,gt=new Map,mt=1,xt=function(e){if(ft.has(e))return ft.get(e);for(;gt.has(mt);)mt++;var t=mt++;return ft.set(e,t),gt.set(t,e),t},yt=function(e,t){mt=t+1,ft.set(e,t),gt.set(t,e)},bt="style[".concat(Ee,"][").concat(ke,'="').concat(Ne,'"]'),vt=new RegExp("^".concat(Ee,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),wt=function(e,t,r){for(var n,o=r.split(","),s=0,a=o.length;s<a;s++)(n=o[s])&&e.registerName(t,n)},St=function(e,t){for(var r,n=(null!==(r=t.textContent)&&void 0!==r?r:"").split(Pe),o=[],s=0,a=n.length;s<a;s++){var i=n[s].trim();if(i){var c=i.match(vt);if(c){var l=0|parseInt(c[1],10),d=c[2];0!==l&&(yt(d,l),wt(e,d,c[3]),e.getTag().insertRules(l,o)),o.length=0}else o.push(i)}}},jt=function(e){for(var t=document.querySelectorAll(bt),r=0,n=t.length;r<n;r++){var o=t[r];o&&o.getAttribute(Ee)!==Ce&&(St(e,o),o.parentNode&&o.parentNode.removeChild(o))}};var Et=function(e){var t,r,n=document.head,o=e||n,s=document.createElement("style"),a=(t=o,(r=Array.from(t.querySelectorAll("style[".concat(Ee,"]"))))[r.length-1]),i=void 0!==a?a.nextSibling:null;s.setAttribute(Ee,Ce),s.setAttribute(ke,Ne);var c="undefined"!=typeof __webpack_nonce__?__webpack_nonce__:null;return c&&s.setAttribute("nonce",c),o.insertBefore(s,i),s},Ct=function(){function e(e){this.element=Et(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,r=0,n=t.length;r<n;r++){var o=t[r];if(o.ownerNode===e)return o}throw pt(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(r){return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),kt=function(){function e(e){this.element=Et(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var r=document.createTextNode(t);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),Nt=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),Pt=Re,Rt={isServer:!Re,useCSSOMInjection:!Te},Tt=function(){function e(e,t,r){void 0===e&&(e=Ae),void 0===t&&(t={});var n=this;this.options=E(E({},Rt),e),this.gs=t,this.names=new Map(r),this.server=!!e.isServer,!this.server&&Re&&Pt&&(Pt=!1,jt(this)),ut(this,function(){return function(e){for(var t=e.getTag(),r=t.length,n="",o=function(r){var o,s=(o=r,gt.get(o));if(void 0===s)return"continue";var a=e.names.get(s),i=t.getGroup(r);if(void 0===a||!a.size||0===i.length)return"continue";var c="".concat(Ee,".g").concat(r,'[id="').concat(s,'"]'),l="";void 0!==a&&a.forEach(function(e){e.length>0&&(l+="".concat(e,","))}),n+="".concat(i).concat(c,'{content:"').concat(l,'"}').concat(Pe)},s=0;s<r;s++)o(s);return n}(n)})}return e.registerId=function(e){return xt(e)},e.prototype.rehydrate=function(){!this.server&&Re&&jt(this)},e.prototype.reconstructWithOptions=function(t,r){return void 0===r&&(r=!0),new e(E(E({},this.options),t),this.gs,r&&this.names||void 0)},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(e=this.options,t=e.useCSSOMInjection,r=e.target,n=e.isServer?new Nt(r):t?new Ct(r):new kt(r),new ht(n)));var e,t,r,n},e.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},e.prototype.registerName=function(e,t){if(xt(e),this.names.has(e))this.names.get(e).add(t);else{var r=new Set;r.add(t),this.names.set(e,r)}},e.prototype.insertRules=function(e,t,r){this.registerName(e,t),this.getTag().insertRules(xt(e),r)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(xt(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Ot=/&/g,At=/^\s*\/\/.*$/gm;function _t(e,t){return e.map(function(e){return"rule"===e.type&&(e.value="".concat(t," ").concat(e.value),e.value=e.value.replaceAll(",",",".concat(t," ")),e.props=e.props.map(function(e){return"".concat(t," ").concat(e)})),Array.isArray(e.children)&&"@keyframes"!==e.type&&(e.children=_t(e.children,t)),e})}var Lt=new Tt,Dt=function(){var e,t,r,n=Ae,o=n.options,s=void 0===o?Ae:o,a=n.plugins,i=void 0===a?Oe:a,c=function(r,n,o){return o.startsWith(t)&&o.endsWith(t)&&o.replaceAll(t,"").length>0?".".concat(e):r},l=i.slice();l.push(function(e){e.type===T&&e.value.includes("&")&&(e.props[0]=e.props[0].replace(Ot,t).replace(r,c))}),s.prefix&&l.push(we),l.push(ve);var d=function(n,o,a,i){void 0===o&&(o=""),void 0===a&&(a=""),void 0===i&&(i="&"),e=i,t=o,r=new RegExp("\\".concat(t,"\\b"),"g");var c=n.replace(At,""),d=he(a||o?"".concat(a," ").concat(o," { ").concat(c," }"):c);s.namespace&&(d=_t(d,s.namespace));var u,p,h,f=[];return be(d,(u=l.concat((h=function(e){return f.push(e)},function(e){e.root||(e=e.return)&&h(e)})),p=q(u),function(e,t,r,n){for(var o="",s=0;s<p;s++)o+=u[s](e,t,r,n)||"";return o})),f};return d.hash=i.length?i.reduce(function(e,t){return t.name||pt(15),ze(e,t.name)},5381).toString():"",d}(),It=n.createContext({shouldForwardProp:void 0,styleSheet:Lt,stylis:Dt});function $t(){return o.useContext(It)}It.Consumer,n.createContext(void 0);var Ft=function(){function e(e,t){var r=this;this.inject=function(e,t){void 0===t&&(t=Dt);var n=r.name+t.hash;e.hasNameForId(r.id,n)||e.insertRules(r.id,n,t(r.rules,n,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,ut(this,function(){throw pt(12,String(r.name))})}return e.prototype.getName=function(e){return void 0===e&&(e=Dt),this.name+e.hash},e}(),Ut=function(e){return e>="A"&&e<="Z"};function Bt(e){for(var t="",r=0;r<e.length;r++){var n=e[r];if(1===r&&"-"===n&&"-"===e[0])return e;Ut(n)?t+="-"+n.toLowerCase():t+=n}return t.startsWith("ms-")?"-"+t:t}var zt=function(e){return null==e||!1===e||""===e},Mt=function(e){var t,r,n=[];for(var o in e){var s=e[o];e.hasOwnProperty(o)&&!zt(s)&&(Array.isArray(s)&&s.isCss||st(s)?n.push("".concat(Bt(o),":"),s,";"):lt(s)?n.push.apply(n,C(C(["".concat(o," {")],Mt(s),!1),["}"],!1)):n.push("".concat(Bt(o),": ").concat((t=o,null==(r=s)||"boolean"==typeof r||""===r?"":"number"!=typeof r||0===r||t in Se||t.startsWith("--")?String(r).trim():"".concat(r,"px")),";")))}return n};function qt(e,t,r,n){return zt(e)?[]:at(e)?[".".concat(e.styledComponentId)]:st(e)?!st(o=e)||o.prototype&&o.prototype.isReactComponent||!t?[e]:qt(e(t),t,r,n):e instanceof Ft?r?(e.inject(r,n),[e.getName(n)]):[e]:lt(e)?Mt(e):Array.isArray(e)?Array.prototype.concat.apply(Oe,e.map(function(e){return qt(e,t,r,n)})):[e.toString()];var o}var Vt=Me(Ne),Ht=function(){function e(e,t,r){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===r||r.isStatic)&&function(e){for(var t=0;t<e.length;t+=1){var r=e[t];if(st(r)&&!at(r))return!1}return!0}(e),this.componentId=t,this.baseHash=ze(Vt,t),this.baseStyle=r,Tt.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,r){var n=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))n=it(n,this.staticRulesId);else{var o=ct(qt(this.rules,e,t,r)),s=Ue(ze(this.baseHash,o)>>>0);if(!t.hasNameForId(this.componentId,s)){var a=r(o,".".concat(s),void 0,this.componentId);t.insertRules(this.componentId,s,a)}n=it(n,s),this.staticRulesId=s}else{for(var i=ze(this.baseHash,r.hash),c="",l=0;l<this.rules.length;l++){var d=this.rules[l];if("string"==typeof d)c+=d;else if(d){var u=ct(qt(d,e,t,r));i=ze(i,u+l),c+=u}}if(c){var p=Ue(i>>>0);t.hasNameForId(this.componentId,p)||t.insertRules(this.componentId,p,r(c,".".concat(p),void 0,this.componentId)),n=it(n,p)}}return n},e}(),Gt=n.createContext(void 0);Gt.Consumer;var Wt={};function Jt(e,t,r){var s,a=at(e),i=e,c=!qe(e),l=t.attrs,d=void 0===l?Oe:l,u=t.componentId,p=void 0===u?function(e,t){var r="string"!=typeof e?"sc":Ie(e);Wt[r]=(Wt[r]||0)+1;var n="".concat(r,"-").concat(function(e){return Ue(Me(e)>>>0)}(Ne+r+Wt[r]));return t?"".concat(t,"-").concat(n):n}(t.displayName,t.parentComponentId):u,h=t.displayName,f=void 0===h?qe(s=e)?"styled.".concat(s):"Styled(".concat(function(e){return e.displayName||e.name||"Component"}(s),")"):h,g=t.displayName&&t.componentId?"".concat(Ie(t.displayName),"-").concat(t.componentId):t.componentId||p,m=a&&i.attrs?i.attrs.concat(d).filter(Boolean):d,x=t.shouldForwardProp;if(a&&i.shouldForwardProp){var y=i.shouldForwardProp;if(t.shouldForwardProp){var b=t.shouldForwardProp;x=function(e,t){return y(e,t)&&b(e,t)}}else x=y}var v=new Ht(r,g,a?i.componentStyle:void 0);function w(e,t){return function(e,t,r){var s=e.attrs,a=e.componentStyle,i=e.defaultProps,c=e.foldedComponentIds,l=e.styledComponentId,d=e.target,u=n.useContext(Gt),p=$t(),h=e.shouldForwardProp||p.shouldForwardProp,f=function(e,t,r){return void 0===r&&(r=Ae),e.theme!==r.theme&&e.theme||t||r.theme}(t,u,i)||Ae,g=function(e,t,r){for(var n,o=E(E({},t),{className:void 0,theme:r}),s=0;s<e.length;s+=1){var a=st(n=e[s])?n(o):n;for(var i in a)o[i]="className"===i?it(o[i],a[i]):"style"===i?E(E({},o[i]),a[i]):a[i]}return t.className&&(o.className=it(o.className,t.className)),o}(s,t,f),m=g.as||d,x={};for(var y in g)void 0===g[y]||"$"===y[0]||"as"===y||"theme"===y&&g.theme===f||("forwardedAs"===y?x.as=g.forwardedAs:h&&!h(y,m)||(x[y]=g[y]));var b,v,w,S=(b=a,v=g,w=$t(),b.generateAndInjectStyles(v,w.styleSheet,w.stylis)),j=it(c,l);return S&&(j+=" "+S),g.className&&(j+=" "+g.className),x[qe(m)&&!_e.has(m)?"class":"className"]=j,r&&(x.ref=r),o.createElement(m,x)}(S,e,t)}w.displayName=f;var S=n.forwardRef(w);return S.attrs=m,S.componentStyle=v,S.displayName=f,S.shouldForwardProp=x,S.foldedComponentIds=a?it(i.foldedComponentIds,i.styledComponentId):"",S.styledComponentId=g,S.target=a?i.target:e,Object.defineProperty(S,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=a?function(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];for(var n=0,o=t;n<o.length;n++)dt(e,o[n],!0);return e}({},i.defaultProps,e):e}}),ut(S,function(){return".".concat(S.styledComponentId)}),c&&ot(S,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),S}function Kt(e,t){for(var r=[e[0]],n=0,o=t.length;n<o;n+=1)r.push(t[n],e[n+1]);return r}var Yt=function(e){return Object.assign(e,{isCss:!0})};function Qt(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];if(st(e)||lt(e))return Yt(qt(Kt(Oe,C([e],t,!0))));var n=e;return 0===t.length&&1===n.length&&"string"==typeof n[0]?qt(n):Yt(qt(Kt(n,t)))}function Xt(e,t,r){if(void 0===r&&(r=Ae),!t)throw pt(1,t);var n=function(n){for(var o=[],s=1;s<arguments.length;s++)o[s-1]=arguments[s];return e(t,r,Qt.apply(void 0,C([n],o,!1)))};return n.attrs=function(n){return Xt(e,t,E(E({},r),{attrs:Array.prototype.concat(r.attrs,n).filter(Boolean)}))},n.withConfig=function(n){return Xt(e,t,E(E({},r),n))},n}var Zt=function(e){return Xt(Jt,e)},er=Zt;function tr(e,t){return function(){return e.apply(t,arguments)}}_e.forEach(function(e){er[e]=Zt(e)});const{toString:rr}=Object.prototype,{getPrototypeOf:nr}=Object,{iterator:or,toStringTag:sr}=Symbol,ar=(e=>t=>{const r=rr.call(t);return e[r]||(e[r]=r.slice(8,-1).toLowerCase())})(Object.create(null)),ir=e=>(e=e.toLowerCase(),t=>ar(t)===e),cr=e=>t=>typeof t===e,{isArray:lr}=Array,dr=cr("undefined");function ur(e){return null!==e&&!dr(e)&&null!==e.constructor&&!dr(e.constructor)&&fr(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const pr=ir("ArrayBuffer");const hr=cr("string"),fr=cr("function"),gr=cr("number"),mr=e=>null!==e&&"object"==typeof e,xr=e=>{if("object"!==ar(e))return!1;const t=nr(e);return!(null!==t&&t!==Object.prototype&&null!==Object.getPrototypeOf(t)||sr in e||or in e)},yr=ir("Date"),br=ir("File"),vr=ir("Blob"),wr=ir("FileList"),Sr=ir("URLSearchParams"),[jr,Er,Cr,kr]=["ReadableStream","Request","Response","Headers"].map(ir);function Nr(e,t,{allOwnKeys:r=!1}={}){if(null==e)return;let n,o;if("object"!=typeof e&&(e=[e]),lr(e))for(n=0,o=e.length;n<o;n++)t.call(null,e[n],n,e);else{if(ur(e))return;const o=r?Object.getOwnPropertyNames(e):Object.keys(e),s=o.length;let a;for(n=0;n<s;n++)a=o[n],t.call(null,e[a],a,e)}}function Pr(e,t){if(ur(e))return null;t=t.toLowerCase();const r=Object.keys(e);let n,o=r.length;for(;o-- >0;)if(n=r[o],t===n.toLowerCase())return n;return null}const Rr="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:global,Tr=e=>!dr(e)&&e!==Rr;const Or=(e=>t=>e&&t instanceof e)("undefined"!=typeof Uint8Array&&nr(Uint8Array)),Ar=ir("HTMLFormElement"),_r=(({hasOwnProperty:e})=>(t,r)=>e.call(t,r))(Object.prototype),Lr=ir("RegExp"),Dr=(e,t)=>{const r=Object.getOwnPropertyDescriptors(e),n={};Nr(r,(r,o)=>{let s;!1!==(s=t(r,o,e))&&(n[o]=s||r)}),Object.defineProperties(e,n)};const Ir=ir("AsyncFunction"),$r=(Fr="function"==typeof setImmediate,Ur=fr(Rr.postMessage),Fr?setImmediate:Ur?(Br=`axios@${Math.random()}`,zr=[],Rr.addEventListener("message",({source:e,data:t})=>{e===Rr&&t===Br&&zr.length&&zr.shift()()},!1),e=>{zr.push(e),Rr.postMessage(Br,"*")}):e=>setTimeout(e));var Fr,Ur,Br,zr;const Mr="undefined"!=typeof queueMicrotask?queueMicrotask.bind(Rr):"undefined"!=typeof process&&process.nextTick||$r,qr={isArray:lr,isArrayBuffer:pr,isBuffer:ur,isFormData:e=>{let t;return e&&("function"==typeof FormData&&e instanceof FormData||fr(e.append)&&("formdata"===(t=ar(e))||"object"===t&&fr(e.toString)&&"[object FormData]"===e.toString()))},isArrayBufferView:function(e){let t;return t="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&pr(e.buffer),t},isString:hr,isNumber:gr,isBoolean:e=>!0===e||!1===e,isObject:mr,isPlainObject:xr,isEmptyObject:e=>{if(!mr(e)||ur(e))return!1;try{return 0===Object.keys(e).length&&Object.getPrototypeOf(e)===Object.prototype}catch(t){return!1}},isReadableStream:jr,isRequest:Er,isResponse:Cr,isHeaders:kr,isUndefined:dr,isDate:yr,isFile:br,isBlob:vr,isRegExp:Lr,isFunction:fr,isStream:e=>mr(e)&&fr(e.pipe),isURLSearchParams:Sr,isTypedArray:Or,isFileList:wr,forEach:Nr,merge:function e(){const{caseless:t,skipUndefined:r}=Tr(this)&&this||{},n={},o=(o,s)=>{const a=t&&Pr(n,s)||s;xr(n[a])&&xr(o)?n[a]=e(n[a],o):xr(o)?n[a]=e({},o):lr(o)?n[a]=o.slice():r&&dr(o)||(n[a]=o)};for(let s=0,a=arguments.length;s<a;s++)arguments[s]&&Nr(arguments[s],o);return n},extend:(e,t,r,{allOwnKeys:n}={})=>(Nr(t,(t,n)=>{r&&fr(t)?e[n]=tr(t,r):e[n]=t},{allOwnKeys:n}),e),trim:e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:e=>(65279===e.charCodeAt(0)&&(e=e.slice(1)),e),inherits:(e,t,r,n)=>{e.prototype=Object.create(t.prototype,n),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),r&&Object.assign(e.prototype,r)},toFlatObject:(e,t,r,n)=>{let o,s,a;const i={};if(t=t||{},null==e)return t;do{for(o=Object.getOwnPropertyNames(e),s=o.length;s-- >0;)a=o[s],n&&!n(a,e,t)||i[a]||(t[a]=e[a],i[a]=!0);e=!1!==r&&nr(e)}while(e&&(!r||r(e,t))&&e!==Object.prototype);return t},kindOf:ar,kindOfTest:ir,endsWith:(e,t,r)=>{e=String(e),(void 0===r||r>e.length)&&(r=e.length),r-=t.length;const n=e.indexOf(t,r);return-1!==n&&n===r},toArray:e=>{if(!e)return null;if(lr(e))return e;let t=e.length;if(!gr(t))return null;const r=new Array(t);for(;t-- >0;)r[t]=e[t];return r},forEachEntry:(e,t)=>{const r=(e&&e[or]).call(e);let n;for(;(n=r.next())&&!n.done;){const r=n.value;t.call(e,r[0],r[1])}},matchAll:(e,t)=>{let r;const n=[];for(;null!==(r=e.exec(t));)n.push(r);return n},isHTMLForm:Ar,hasOwnProperty:_r,hasOwnProp:_r,reduceDescriptors:Dr,freezeMethods:e=>{Dr(e,(t,r)=>{if(fr(e)&&-1!==["arguments","caller","callee"].indexOf(r))return!1;const n=e[r];fr(n)&&(t.enumerable=!1,"writable"in t?t.writable=!1:t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+r+"'")}))})},toObjectSet:(e,t)=>{const r={},n=e=>{e.forEach(e=>{r[e]=!0})};return lr(e)?n(e):n(String(e).split(t)),r},toCamelCase:e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(e,t,r){return t.toUpperCase()+r}),noop:()=>{},toFiniteNumber:(e,t)=>null!=e&&Number.isFinite(e=+e)?e:t,findKey:Pr,global:Rr,isContextDefined:Tr,isSpecCompliantForm:function(e){return!!(e&&fr(e.append)&&"FormData"===e[sr]&&e[or])},toJSONObject:e=>{const t=new Array(10),r=(e,n)=>{if(mr(e)){if(t.indexOf(e)>=0)return;if(ur(e))return e;if(!("toJSON"in e)){t[n]=e;const o=lr(e)?[]:{};return Nr(e,(e,t)=>{const s=r(e,n+1);!dr(s)&&(o[t]=s)}),t[n]=void 0,o}}return e};return r(e,0)},isAsyncFn:Ir,isThenable:e=>e&&(mr(e)||fr(e))&&fr(e.then)&&fr(e.catch),setImmediate:$r,asap:Mr,isIterable:e=>null!=e&&fr(e[or])};function Vr(e,t,r,n,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=e,this.name="AxiosError",t&&(this.code=t),r&&(this.config=r),n&&(this.request=n),o&&(this.response=o,this.status=o.status?o.status:null)}qr.inherits(Vr,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:qr.toJSONObject(this.config),code:this.code,status:this.status}}});const Hr=Vr.prototype,Gr={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Gr[e]={value:e}}),Object.defineProperties(Vr,Gr),Object.defineProperty(Hr,"isAxiosError",{value:!0}),Vr.from=(e,t,r,n,o,s)=>{const a=Object.create(Hr);qr.toFlatObject(e,a,function(e){return e!==Error.prototype},e=>"isAxiosError"!==e);const i=e&&e.message?e.message:"Error",c=null==t&&e?e.code:t;return Vr.call(a,i,c,r,n,o),e&&null==a.cause&&Object.defineProperty(a,"cause",{value:e,configurable:!0}),a.name=e&&e.name||"Error",s&&Object.assign(a,s),a};function Wr(e){return qr.isPlainObject(e)||qr.isArray(e)}function Jr(e){return qr.endsWith(e,"[]")?e.slice(0,-2):e}function Kr(e,t,r){return e?e.concat(t).map(function(e,t){return e=Jr(e),!r&&t?"["+e+"]":e}).join(r?".":""):t}const Yr=qr.toFlatObject(qr,{},null,function(e){return/^is[A-Z]/.test(e)});function Qr(e,t,r){if(!qr.isObject(e))throw new TypeError("target must be an object");t=t||new FormData;const n=(r=qr.toFlatObject(r,{metaTokens:!0,dots:!1,indexes:!1},!1,function(e,t){return!qr.isUndefined(t[e])})).metaTokens,o=r.visitor||l,s=r.dots,a=r.indexes,i=(r.Blob||"undefined"!=typeof Blob&&Blob)&&qr.isSpecCompliantForm(t);if(!qr.isFunction(o))throw new TypeError("visitor must be a function");function c(e){if(null===e)return"";if(qr.isDate(e))return e.toISOString();if(qr.isBoolean(e))return e.toString();if(!i&&qr.isBlob(e))throw new Vr("Blob is not supported. Use a Buffer instead.");return qr.isArrayBuffer(e)||qr.isTypedArray(e)?i&&"function"==typeof Blob?new Blob([e]):Buffer.from(e):e}function l(e,r,o){let i=e;if(e&&!o&&"object"==typeof e)if(qr.endsWith(r,"{}"))r=n?r:r.slice(0,-2),e=JSON.stringify(e);else if(qr.isArray(e)&&function(e){return qr.isArray(e)&&!e.some(Wr)}(e)||(qr.isFileList(e)||qr.endsWith(r,"[]"))&&(i=qr.toArray(e)))return r=Jr(r),i.forEach(function(e,n){!qr.isUndefined(e)&&null!==e&&t.append(!0===a?Kr([r],n,s):null===a?r:r+"[]",c(e))}),!1;return!!Wr(e)||(t.append(Kr(o,r,s),c(e)),!1)}const d=[],u=Object.assign(Yr,{defaultVisitor:l,convertValue:c,isVisitable:Wr});if(!qr.isObject(e))throw new TypeError("data must be an object");return function e(r,n){if(!qr.isUndefined(r)){if(-1!==d.indexOf(r))throw Error("Circular reference detected in "+n.join("."));d.push(r),qr.forEach(r,function(r,s){!0===(!(qr.isUndefined(r)||null===r)&&o.call(t,r,qr.isString(s)?s.trim():s,n,u))&&e(r,n?n.concat(s):[s])}),d.pop()}}(e),t}function Xr(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(e){return t[e]})}function Zr(e,t){this._pairs=[],e&&Qr(e,this,t)}const en=Zr.prototype;function tn(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function rn(e,t,r){if(!t)return e;const n=r&&r.encode||tn;qr.isFunction(r)&&(r={serialize:r});const o=r&&r.serialize;let s;if(s=o?o(t,r):qr.isURLSearchParams(t)?t.toString():new Zr(t,r).toString(n),s){const t=e.indexOf("#");-1!==t&&(e=e.slice(0,t)),e+=(-1===e.indexOf("?")?"?":"&")+s}return e}en.append=function(e,t){this._pairs.push([e,t])},en.toString=function(e){const t=e?function(t){return e.call(this,t,Xr)}:Xr;return this._pairs.map(function(e){return t(e[0])+"="+t(e[1])},"").join("&")};class nn{constructor(){this.handlers=[]}use(e,t,r){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!r&&r.synchronous,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){qr.forEach(this.handlers,function(t){null!==t&&e(t)})}}const on={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},sn={isBrowser:!0,classes:{URLSearchParams:"undefined"!=typeof URLSearchParams?URLSearchParams:Zr,FormData:"undefined"!=typeof FormData?FormData:null,Blob:"undefined"!=typeof Blob?Blob:null},protocols:["http","https","file","blob","url","data"]},an="undefined"!=typeof window&&"undefined"!=typeof document,cn="object"==typeof navigator&&navigator||void 0,ln=an&&(!cn||["ReactNative","NativeScript","NS"].indexOf(cn.product)<0),dn="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts,un=an&&window.location.href||"http://localhost",pn={...Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:an,hasStandardBrowserEnv:ln,hasStandardBrowserWebWorkerEnv:dn,navigator:cn,origin:un},Symbol.toStringTag,{value:"Module"})),...sn};function hn(e){function t(e,r,n,o){let s=e[o++];if("__proto__"===s)return!0;const a=Number.isFinite(+s),i=o>=e.length;if(s=!s&&qr.isArray(n)?n.length:s,i)return qr.hasOwnProp(n,s)?n[s]=[n[s],r]:n[s]=r,!a;n[s]&&qr.isObject(n[s])||(n[s]=[]);return t(e,r,n[s],o)&&qr.isArray(n[s])&&(n[s]=function(e){const t={},r=Object.keys(e);let n;const o=r.length;let s;for(n=0;n<o;n++)s=r[n],t[s]=e[s];return t}(n[s])),!a}if(qr.isFormData(e)&&qr.isFunction(e.entries)){const r={};return qr.forEachEntry(e,(e,n)=>{t(function(e){return qr.matchAll(/\w+|\[(\w*)]/g,e).map(e=>"[]"===e[0]?"":e[1]||e[0])}(e),n,r,0)}),r}return null}const fn={transitional:on,adapter:["xhr","http","fetch"],transformRequest:[function(e,t){const r=t.getContentType()||"",n=r.indexOf("application/json")>-1,o=qr.isObject(e);o&&qr.isHTMLForm(e)&&(e=new FormData(e));if(qr.isFormData(e))return n?JSON.stringify(hn(e)):e;if(qr.isArrayBuffer(e)||qr.isBuffer(e)||qr.isStream(e)||qr.isFile(e)||qr.isBlob(e)||qr.isReadableStream(e))return e;if(qr.isArrayBufferView(e))return e.buffer;if(qr.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let s;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return function(e,t){return Qr(e,new pn.classes.URLSearchParams,{visitor:function(e,t,r,n){return pn.isNode&&qr.isBuffer(e)?(this.append(t,e.toString("base64")),!1):n.defaultVisitor.apply(this,arguments)},...t})}(e,this.formSerializer).toString();if((s=qr.isFileList(e))||r.indexOf("multipart/form-data")>-1){const t=this.env&&this.env.FormData;return Qr(s?{"files[]":e}:e,t&&new t,this.formSerializer)}}return o||n?(t.setContentType("application/json",!1),function(e,t,r){if(qr.isString(e))try{return(t||JSON.parse)(e),qr.trim(e)}catch(n){if("SyntaxError"!==n.name)throw n}return(r||JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){const t=this.transitional||fn.transitional,r=t&&t.forcedJSONParsing,n="json"===this.responseType;if(qr.isResponse(e)||qr.isReadableStream(e))return e;if(e&&qr.isString(e)&&(r&&!this.responseType||n)){const r=!(t&&t.silentJSONParsing)&&n;try{return JSON.parse(e,this.parseReviver)}catch(o){if(r){if("SyntaxError"===o.name)throw Vr.from(o,Vr.ERR_BAD_RESPONSE,this,null,this.response);throw o}}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:pn.classes.FormData,Blob:pn.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};qr.forEach(["delete","get","head","post","put","patch"],e=>{fn.headers[e]={}});const gn=qr.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),mn=Symbol("internals");function xn(e){return e&&String(e).trim().toLowerCase()}function yn(e){return!1===e||null==e?e:qr.isArray(e)?e.map(yn):String(e)}function bn(e,t,r,n,o){return qr.isFunction(n)?n.call(this,t,r):(o&&(t=r),qr.isString(t)?qr.isString(n)?-1!==t.indexOf(n):qr.isRegExp(n)?n.test(t):void 0:void 0)}let vn=class{constructor(e){e&&this.set(e)}set(e,t,r){const n=this;function o(e,t,r){const o=xn(t);if(!o)throw new Error("header name must be a non-empty string");const s=qr.findKey(n,o);(!s||void 0===n[s]||!0===r||void 0===r&&!1!==n[s])&&(n[s||t]=yn(e))}const s=(e,t)=>qr.forEach(e,(e,r)=>o(e,r,t));if(qr.isPlainObject(e)||e instanceof this.constructor)s(e,t);else if(qr.isString(e)&&(e=e.trim())&&!/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim()))s((e=>{const t={};let r,n,o;return e&&e.split("\n").forEach(function(e){o=e.indexOf(":"),r=e.substring(0,o).trim().toLowerCase(),n=e.substring(o+1).trim(),!r||t[r]&&gn[r]||("set-cookie"===r?t[r]?t[r].push(n):t[r]=[n]:t[r]=t[r]?t[r]+", "+n:n)}),t})(e),t);else if(qr.isObject(e)&&qr.isIterable(e)){let r,n,o={};for(const t of e){if(!qr.isArray(t))throw TypeError("Object iterator must return a key-value pair");o[n=t[0]]=(r=o[n])?qr.isArray(r)?[...r,t[1]]:[r,t[1]]:t[1]}s(o,t)}else null!=e&&o(t,e,r);return this}get(e,t){if(e=xn(e)){const r=qr.findKey(this,e);if(r){const e=this[r];if(!t)return e;if(!0===t)return function(e){const t=Object.create(null),r=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let n;for(;n=r.exec(e);)t[n[1]]=n[2];return t}(e);if(qr.isFunction(t))return t.call(this,e,r);if(qr.isRegExp(t))return t.exec(e);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=xn(e)){const r=qr.findKey(this,e);return!(!r||void 0===this[r]||t&&!bn(0,this[r],r,t))}return!1}delete(e,t){const r=this;let n=!1;function o(e){if(e=xn(e)){const o=qr.findKey(r,e);!o||t&&!bn(0,r[o],o,t)||(delete r[o],n=!0)}}return qr.isArray(e)?e.forEach(o):o(e),n}clear(e){const t=Object.keys(this);let r=t.length,n=!1;for(;r--;){const o=t[r];e&&!bn(0,this[o],o,e,!0)||(delete this[o],n=!0)}return n}normalize(e){const t=this,r={};return qr.forEach(this,(n,o)=>{const s=qr.findKey(r,o);if(s)return t[s]=yn(n),void delete t[o];const a=e?function(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,t,r)=>t.toUpperCase()+r)}(o):String(o).trim();a!==o&&delete t[o],t[a]=yn(n),r[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return qr.forEach(this,(r,n)=>{null!=r&&!1!==r&&(t[n]=e&&qr.isArray(r)?r.join(", "):r)}),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,t])=>e+": "+t).join("\n")}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const r=new this(e);return t.forEach(e=>r.set(e)),r}static accessor(e){const t=(this[mn]=this[mn]={accessors:{}}).accessors,r=this.prototype;function n(e){const n=xn(e);t[n]||(!function(e,t){const r=qr.toCamelCase(" "+t);["get","set","has"].forEach(n=>{Object.defineProperty(e,n+r,{value:function(e,r,o){return this[n].call(this,t,e,r,o)},configurable:!0})})}(r,e),t[n]=!0)}return qr.isArray(e)?e.forEach(n):n(e),this}};function wn(e,t){const r=this||fn,n=t||r,o=vn.from(n.headers);let s=n.data;return qr.forEach(e,function(e){s=e.call(r,s,o.normalize(),t?t.status:void 0)}),o.normalize(),s}function Sn(e){return!(!e||!e.__CANCEL__)}function jn(e,t,r){Vr.call(this,null==e?"canceled":e,Vr.ERR_CANCELED,t,r),this.name="CanceledError"}function En(e,t,r){const n=r.config.validateStatus;r.status&&n&&!n(r.status)?t(new Vr("Request failed with status code "+r.status,[Vr.ERR_BAD_REQUEST,Vr.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r)):e(r)}vn.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),qr.reduceDescriptors(vn.prototype,({value:e},t)=>{let r=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(e){this[r]=e}}}),qr.freezeMethods(vn),qr.inherits(jn,Vr,{__CANCEL__:!0});const Cn=(e,t,r=3)=>{let n=0;const o=function(e,t){e=e||10;const r=new Array(e),n=new Array(e);let o,s=0,a=0;return t=void 0!==t?t:1e3,function(i){const c=Date.now(),l=n[a];o||(o=c),r[s]=i,n[s]=c;let d=a,u=0;for(;d!==s;)u+=r[d++],d%=e;if(s=(s+1)%e,s===a&&(a=(a+1)%e),c-o<t)return;const p=l&&c-l;return p?Math.round(1e3*u/p):void 0}}(50,250);return function(e,t){let r,n,o=0,s=1e3/t;const a=(t,s=Date.now())=>{o=s,r=null,n&&(clearTimeout(n),n=null),e(...t)};return[(...e)=>{const t=Date.now(),i=t-o;i>=s?a(e,t):(r=e,n||(n=setTimeout(()=>{n=null,a(r)},s-i)))},()=>r&&a(r)]}(r=>{const s=r.loaded,a=r.lengthComputable?r.total:void 0,i=s-n,c=o(i);n=s;e({loaded:s,total:a,progress:a?s/a:void 0,bytes:i,rate:c||void 0,estimated:c&&a&&s<=a?(a-s)/c:void 0,event:r,lengthComputable:null!=a,[t?"download":"upload"]:!0})},r)},kn=(e,t)=>{const r=null!=e;return[n=>t[0]({lengthComputable:r,total:e,loaded:n}),t[1]]},Nn=e=>(...t)=>qr.asap(()=>e(...t)),Pn=pn.hasStandardBrowserEnv?((e,t)=>r=>(r=new URL(r,pn.origin),e.protocol===r.protocol&&e.host===r.host&&(t||e.port===r.port)))(new URL(pn.origin),pn.navigator&&/(msie|trident)/i.test(pn.navigator.userAgent)):()=>!0,Rn=pn.hasStandardBrowserEnv?{write(e,t,r,n,o,s){const a=[e+"="+encodeURIComponent(t)];qr.isNumber(r)&&a.push("expires="+new Date(r).toGMTString()),qr.isString(n)&&a.push("path="+n),qr.isString(o)&&a.push("domain="+o),!0===s&&a.push("secure"),document.cookie=a.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read:()=>null,remove(){}};function Tn(e,t,r){let n=!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);return e&&(n||0==r)?function(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}(e,t):t}const On=e=>e instanceof vn?{...e}:e;function An(e,t){t=t||{};const r={};function n(e,t,r,n){return qr.isPlainObject(e)&&qr.isPlainObject(t)?qr.merge.call({caseless:n},e,t):qr.isPlainObject(t)?qr.merge({},t):qr.isArray(t)?t.slice():t}function o(e,t,r,o){return qr.isUndefined(t)?qr.isUndefined(e)?void 0:n(void 0,e,0,o):n(e,t,0,o)}function s(e,t){if(!qr.isUndefined(t))return n(void 0,t)}function a(e,t){return qr.isUndefined(t)?qr.isUndefined(e)?void 0:n(void 0,e):n(void 0,t)}function i(r,o,s){return s in t?n(r,o):s in e?n(void 0,r):void 0}const c={url:s,method:s,data:s,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,withXSRFToken:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:i,headers:(e,t,r)=>o(On(e),On(t),0,!0)};return qr.forEach(Object.keys({...e,...t}),function(n){const s=c[n]||o,a=s(e[n],t[n],n);qr.isUndefined(a)&&s!==i||(r[n]=a)}),r}const _n=e=>{const t=An({},e);let{data:r,withXSRFToken:n,xsrfHeaderName:o,xsrfCookieName:s,headers:a,auth:i}=t;if(t.headers=a=vn.from(a),t.url=rn(Tn(t.baseURL,t.url,t.allowAbsoluteUrls),e.params,e.paramsSerializer),i&&a.set("Authorization","Basic "+btoa((i.username||"")+":"+(i.password?unescape(encodeURIComponent(i.password)):""))),qr.isFormData(r))if(pn.hasStandardBrowserEnv||pn.hasStandardBrowserWebWorkerEnv)a.setContentType(void 0);else if(qr.isFunction(r.getHeaders)){const e=r.getHeaders(),t=["content-type","content-length"];Object.entries(e).forEach(([e,r])=>{t.includes(e.toLowerCase())&&a.set(e,r)})}if(pn.hasStandardBrowserEnv&&(n&&qr.isFunction(n)&&(n=n(t)),n||!1!==n&&Pn(t.url))){const e=o&&s&&Rn.read(s);e&&a.set(o,e)}return t},Ln="undefined"!=typeof XMLHttpRequest&&function(e){return new Promise(function(t,r){const n=_n(e);let o=n.data;const s=vn.from(n.headers).normalize();let a,i,c,l,d,{responseType:u,onUploadProgress:p,onDownloadProgress:h}=n;function f(){l&&l(),d&&d(),n.cancelToken&&n.cancelToken.unsubscribe(a),n.signal&&n.signal.removeEventListener("abort",a)}let g=new XMLHttpRequest;function m(){if(!g)return;const n=vn.from("getAllResponseHeaders"in g&&g.getAllResponseHeaders());En(function(e){t(e),f()},function(e){r(e),f()},{data:u&&"text"!==u&&"json"!==u?g.response:g.responseText,status:g.status,statusText:g.statusText,headers:n,config:e,request:g}),g=null}g.open(n.method.toUpperCase(),n.url,!0),g.timeout=n.timeout,"onloadend"in g?g.onloadend=m:g.onreadystatechange=function(){g&&4===g.readyState&&(0!==g.status||g.responseURL&&0===g.responseURL.indexOf("file:"))&&setTimeout(m)},g.onabort=function(){g&&(r(new Vr("Request aborted",Vr.ECONNABORTED,e,g)),g=null)},g.onerror=function(t){const n=new Vr(t&&t.message?t.message:"Network Error",Vr.ERR_NETWORK,e,g);n.event=t||null,r(n),g=null},g.ontimeout=function(){let t=n.timeout?"timeout of "+n.timeout+"ms exceeded":"timeout exceeded";const o=n.transitional||on;n.timeoutErrorMessage&&(t=n.timeoutErrorMessage),r(new Vr(t,o.clarifyTimeoutError?Vr.ETIMEDOUT:Vr.ECONNABORTED,e,g)),g=null},void 0===o&&s.setContentType(null),"setRequestHeader"in g&&qr.forEach(s.toJSON(),function(e,t){g.setRequestHeader(t,e)}),qr.isUndefined(n.withCredentials)||(g.withCredentials=!!n.withCredentials),u&&"json"!==u&&(g.responseType=n.responseType),h&&([c,d]=Cn(h,!0),g.addEventListener("progress",c)),p&&g.upload&&([i,l]=Cn(p),g.upload.addEventListener("progress",i),g.upload.addEventListener("loadend",l)),(n.cancelToken||n.signal)&&(a=t=>{g&&(r(!t||t.type?new jn(null,e,g):t),g.abort(),g=null)},n.cancelToken&&n.cancelToken.subscribe(a),n.signal&&(n.signal.aborted?a():n.signal.addEventListener("abort",a)));const x=function(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}(n.url);x&&-1===pn.protocols.indexOf(x)?r(new Vr("Unsupported protocol "+x+":",Vr.ERR_BAD_REQUEST,e)):g.send(o||null)})},Dn=(e,t)=>{const{length:r}=e=e?e.filter(Boolean):[];if(t||r){let r,n=new AbortController;const o=function(e){if(!r){r=!0,a();const t=e instanceof Error?e:this.reason;n.abort(t instanceof Vr?t:new jn(t instanceof Error?t.message:t))}};let s=t&&setTimeout(()=>{s=null,o(new Vr(`timeout ${t} of ms exceeded`,Vr.ETIMEDOUT))},t);const a=()=>{e&&(s&&clearTimeout(s),s=null,e.forEach(e=>{e.unsubscribe?e.unsubscribe(o):e.removeEventListener("abort",o)}),e=null)};e.forEach(e=>e.addEventListener("abort",o));const{signal:i}=n;return i.unsubscribe=()=>qr.asap(a),i}},In=function*(e,t){let r=e.byteLength;if(r<t)return void(yield e);let n,o=0;for(;o<r;)n=o+t,yield e.slice(o,n),o=n},$n=async function*(e){if(e[Symbol.asyncIterator])return void(yield*e);const t=e.getReader();try{for(;;){const{done:e,value:r}=await t.read();if(e)break;yield r}}finally{await t.cancel()}},Fn=(e,t,r,n)=>{const o=async function*(e,t){for await(const r of $n(e))yield*In(r,t)}(e,t);let s,a=0,i=e=>{s||(s=!0,n&&n(e))};return new ReadableStream({async pull(e){try{const{done:t,value:n}=await o.next();if(t)return i(),void e.close();let s=n.byteLength;if(r){let e=a+=s;r(e)}e.enqueue(new Uint8Array(n))}catch(t){throw i(t),t}},cancel:e=>(i(e),o.return())},{highWaterMark:2})},{isFunction:Un}=qr,Bn=(({Request:e,Response:t})=>({Request:e,Response:t}))(qr.global),{ReadableStream:zn,TextEncoder:Mn}=qr.global,qn=(e,...t)=>{try{return!!e(...t)}catch(r){return!1}},Vn=e=>{e=qr.merge.call({skipUndefined:!0},Bn,e);const{fetch:t,Request:r,Response:n}=e,o=t?Un(t):"function"==typeof fetch,s=Un(r),a=Un(n);if(!o)return!1;const i=o&&Un(zn),c=o&&("function"==typeof Mn?(e=>t=>e.encode(t))(new Mn):async e=>new Uint8Array(await new r(e).arrayBuffer())),l=s&&i&&qn(()=>{let e=!1;const t=new r(pn.origin,{body:new zn,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t}),d=a&&i&&qn(()=>qr.isReadableStream(new n("").body)),u={stream:d&&(e=>e.body)};o&&["text","arrayBuffer","blob","formData","stream"].forEach(e=>{!u[e]&&(u[e]=(t,r)=>{let n=t&&t[e];if(n)return n.call(t);throw new Vr(`Response type '${e}' is not supported`,Vr.ERR_NOT_SUPPORT,r)})});const p=async(e,t)=>{const n=qr.toFiniteNumber(e.getContentLength());return null==n?(async e=>{if(null==e)return 0;if(qr.isBlob(e))return e.size;if(qr.isSpecCompliantForm(e)){const t=new r(pn.origin,{method:"POST",body:e});return(await t.arrayBuffer()).byteLength}return qr.isArrayBufferView(e)||qr.isArrayBuffer(e)?e.byteLength:(qr.isURLSearchParams(e)&&(e+=""),qr.isString(e)?(await c(e)).byteLength:void 0)})(t):n};return async e=>{let{url:o,method:a,data:i,signal:c,cancelToken:h,timeout:f,onDownloadProgress:g,onUploadProgress:m,responseType:x,headers:y,withCredentials:b="same-origin",fetchOptions:v}=_n(e),w=t||fetch;x=x?(x+"").toLowerCase():"text";let S=Dn([c,h&&h.toAbortSignal()],f),j=null;const E=S&&S.unsubscribe&&(()=>{S.unsubscribe()});let C;try{if(m&&l&&"get"!==a&&"head"!==a&&0!==(C=await p(y,i))){let e,t=new r(o,{method:"POST",body:i,duplex:"half"});if(qr.isFormData(i)&&(e=t.headers.get("content-type"))&&y.setContentType(e),t.body){const[e,r]=kn(C,Cn(Nn(m)));i=Fn(t.body,65536,e,r)}}qr.isString(b)||(b=b?"include":"omit");const t=s&&"credentials"in r.prototype,c={...v,signal:S,method:a.toUpperCase(),headers:y.normalize().toJSON(),body:i,duplex:"half",credentials:t?b:void 0};j=s&&new r(o,c);let h=await(s?w(j,v):w(o,c));const f=d&&("stream"===x||"response"===x);if(d&&(g||f&&E)){const e={};["status","statusText","headers"].forEach(t=>{e[t]=h[t]});const t=qr.toFiniteNumber(h.headers.get("content-length")),[r,o]=g&&kn(t,Cn(Nn(g),!0))||[];h=new n(Fn(h.body,65536,r,()=>{o&&o(),E&&E()}),e)}x=x||"text";let k=await u[qr.findKey(u,x)||"text"](h,e);return!f&&E&&E(),await new Promise((t,r)=>{En(t,r,{data:k,headers:vn.from(h.headers),status:h.status,statusText:h.statusText,config:e,request:j})})}catch(k){if(E&&E(),k&&"TypeError"===k.name&&/Load failed|fetch/i.test(k.message))throw Object.assign(new Vr("Network Error",Vr.ERR_NETWORK,e,j),{cause:k.cause||k});throw Vr.from(k,k&&k.code,e,j)}}},Hn=new Map,Gn=e=>{let t=e?e.env:{};const{fetch:r,Request:n,Response:o}=t,s=[n,o,r];let a,i,c=s.length,l=Hn;for(;c--;)a=s[c],i=l.get(a),void 0===i&&l.set(a,i=c?new Map:Vn(t)),l=i;return i};Gn();const Wn={http:null,xhr:Ln,fetch:{get:Gn}};qr.forEach(Wn,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch(r){}Object.defineProperty(e,"adapterName",{value:t})}});const Jn=e=>`- ${e}`,Kn=e=>qr.isFunction(e)||null===e||!1===e,Yn=(e,t)=>{e=qr.isArray(e)?e:[e];const{length:r}=e;let n,o;const s={};for(let a=0;a<r;a++){let r;if(n=e[a],o=n,!Kn(n)&&(o=Wn[(r=String(n)).toLowerCase()],void 0===o))throw new Vr(`Unknown adapter '${r}'`);if(o&&(qr.isFunction(o)||(o=o.get(t))))break;s[r||"#"+a]=o}if(!o){const e=Object.entries(s).map(([e,t])=>`adapter ${e} `+(!1===t?"is not supported by the environment":"is not available in the build"));throw new Vr("There is no suitable adapter to dispatch the request "+(r?e.length>1?"since :\n"+e.map(Jn).join("\n"):" "+Jn(e[0]):"as no adapter specified"),"ERR_NOT_SUPPORT")}return o};function Qn(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new jn(null,e)}function Xn(e){Qn(e),e.headers=vn.from(e.headers),e.data=wn.call(e,e.transformRequest),-1!==["post","put","patch"].indexOf(e.method)&&e.headers.setContentType("application/x-www-form-urlencoded",!1);return Yn(e.adapter||fn.adapter,e)(e).then(function(t){return Qn(e),t.data=wn.call(e,e.transformResponse,t),t.headers=vn.from(t.headers),t},function(t){return Sn(t)||(Qn(e),t&&t.response&&(t.response.data=wn.call(e,e.transformResponse,t.response),t.response.headers=vn.from(t.response.headers))),Promise.reject(t)})}const Zn="1.12.2",eo={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{eo[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const to={};eo.transitional=function(e,t,r){function n(e,t){return"[Axios v"+Zn+"] Transitional option '"+e+"'"+t+(r?". "+r:"")}return(r,o,s)=>{if(!1===e)throw new Vr(n(o," has been removed"+(t?" in "+t:"")),Vr.ERR_DEPRECATED);return t&&!to[o]&&(to[o]=!0,console.warn(n(o," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(r,o,s)}},eo.spelling=function(e){return(t,r)=>(console.warn(`${r} is likely a misspelling of ${e}`),!0)};const ro={assertOptions:function(e,t,r){if("object"!=typeof e)throw new Vr("options must be an object",Vr.ERR_BAD_OPTION_VALUE);const n=Object.keys(e);let o=n.length;for(;o-- >0;){const s=n[o],a=t[s];if(a){const t=e[s],r=void 0===t||a(t,s,e);if(!0!==r)throw new Vr("option "+s+" must be "+r,Vr.ERR_BAD_OPTION_VALUE);continue}if(!0!==r)throw new Vr("Unknown option "+s,Vr.ERR_BAD_OPTION)}},validators:eo},no=ro.validators;let oo=class{constructor(e){this.defaults=e||{},this.interceptors={request:new nn,response:new nn}}async request(e,t){try{return await this._request(e,t)}catch(r){if(r instanceof Error){let e={};Error.captureStackTrace?Error.captureStackTrace(e):e=new Error;const t=e.stack?e.stack.replace(/^.+\n/,""):"";try{r.stack?t&&!String(r.stack).endsWith(t.replace(/^.+\n.+\n/,""))&&(r.stack+="\n"+t):r.stack=t}catch(n){}}throw r}}_request(e,t){"string"==typeof e?(t=t||{}).url=e:t=e||{},t=An(this.defaults,t);const{transitional:r,paramsSerializer:n,headers:o}=t;void 0!==r&&ro.assertOptions(r,{silentJSONParsing:no.transitional(no.boolean),forcedJSONParsing:no.transitional(no.boolean),clarifyTimeoutError:no.transitional(no.boolean)},!1),null!=n&&(qr.isFunction(n)?t.paramsSerializer={serialize:n}:ro.assertOptions(n,{encode:no.function,serialize:no.function},!0)),void 0!==t.allowAbsoluteUrls||(void 0!==this.defaults.allowAbsoluteUrls?t.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:t.allowAbsoluteUrls=!0),ro.assertOptions(t,{baseUrl:no.spelling("baseURL"),withXsrfToken:no.spelling("withXSRFToken")},!0),t.method=(t.method||this.defaults.method||"get").toLowerCase();let s=o&&qr.merge(o.common,o[t.method]);o&&qr.forEach(["delete","get","head","post","put","patch","common"],e=>{delete o[e]}),t.headers=vn.concat(s,o);const a=[];let i=!0;this.interceptors.request.forEach(function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(i=i&&e.synchronous,a.unshift(e.fulfilled,e.rejected))});const c=[];let l;this.interceptors.response.forEach(function(e){c.push(e.fulfilled,e.rejected)});let d,u=0;if(!i){const e=[Xn.bind(this),void 0];for(e.unshift(...a),e.push(...c),d=e.length,l=Promise.resolve(t);u<d;)l=l.then(e[u++],e[u++]);return l}d=a.length;let p=t;for(;u<d;){const e=a[u++],t=a[u++];try{p=e(p)}catch(h){t.call(this,h);break}}try{l=Xn.call(this,p)}catch(h){return Promise.reject(h)}for(u=0,d=c.length;u<d;)l=l.then(c[u++],c[u++]);return l}getUri(e){return rn(Tn((e=An(this.defaults,e)).baseURL,e.url,e.allowAbsoluteUrls),e.params,e.paramsSerializer)}};qr.forEach(["delete","get","head","options"],function(e){oo.prototype[e]=function(t,r){return this.request(An(r||{},{method:e,url:t,data:(r||{}).data}))}}),qr.forEach(["post","put","patch"],function(e){function t(t){return function(r,n,o){return this.request(An(o||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:r,data:n}))}}oo.prototype[e]=t(),oo.prototype[e+"Form"]=t(!0)});const so={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(so).forEach(([e,t])=>{so[t]=e});const ao=function e(t){const r=new oo(t),n=tr(oo.prototype.request,r);return qr.extend(n,oo.prototype,r,{allOwnKeys:!0}),qr.extend(n,r,null,{allOwnKeys:!0}),n.create=function(r){return e(An(t,r))},n}(fn);ao.Axios=oo,ao.CanceledError=jn,ao.CancelToken=class e{constructor(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");let t;this.promise=new Promise(function(e){t=e});const r=this;this.promise.then(e=>{if(!r._listeners)return;let t=r._listeners.length;for(;t-- >0;)r._listeners[t](e);r._listeners=null}),this.promise.then=e=>{let t;const n=new Promise(e=>{r.subscribe(e),t=e}).then(e);return n.cancel=function(){r.unsubscribe(t)},n},e(function(e,n,o){r.reason||(r.reason=new jn(e,n,o),t(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}toAbortSignal(){const e=new AbortController,t=t=>{e.abort(t)};return this.subscribe(t),e.signal.unsubscribe=()=>this.unsubscribe(t),e.signal}static source(){let t;return{token:new e(function(e){t=e}),cancel:t}}},ao.isCancel=Sn,ao.VERSION=Zn,ao.toFormData=Qr,ao.AxiosError=Vr,ao.Cancel=ao.CanceledError,ao.all=function(e){return Promise.all(e)},ao.spread=function(e){return function(t){return e.apply(null,t)}},ao.isAxiosError=function(e){return qr.isObject(e)&&!0===e.isAxiosError},ao.mergeConfig=An,ao.AxiosHeaders=vn,ao.formToJSON=e=>hn(qr.isHTMLForm(e)?new FormData(e):e),ao.getAdapter=Yn,ao.HttpStatusCode=so,ao.default=ao;const{Axios:io,AxiosError:co,CanceledError:lo,isCancel:uo,CancelToken:po,VERSION:ho,all:fo,Cancel:go,isAxiosError:mo,spread:xo,toFormData:yo,AxiosHeaders:bo,HttpStatusCode:vo,formToJSON:wo,getAdapter:So,mergeConfig:jo}=ao,Eo=ao.create({baseURL:"https://alibee-affiliate-api.onrender.com",timeout:3e4,headers:{"Content-Type":"application/json"}});Eo.interceptors.request.use(e=>(console.log(`API Request: ${e.method?.toUpperCase()} ${e.url}`),e),e=>(console.error("API Request Error:",e),Promise.reject(e))),Eo.interceptors.response.use(e=>(console.log(`API Response: ${e.status} ${e.config.url}`),e),e=>(console.error("API Response Error:",e),Promise.reject(e)));const Co=[{name:"Dark",value:"dark",icon:"🌙"},{name:"Light",value:"light",icon:"☀️"},{name:"Auto",value:"auto",icon:"🔄"}];const ko=new class{logs=[];maxLogs=100;storageKey="currency-debug-logs";log(e,t,r,n){const o={timestamp:(new Date).toISOString(),level:e,component:t,message:r,data:n};this.logs.unshift(o),this.logs.length>this.maxLogs&&(this.logs=this.logs.slice(0,this.maxLogs)),this.saveToStorage();console["ERROR"===e?"error":"WARN"===e?"warn":"DEBUG"===e?"log":"info"](`[${e}] ${t}: ${r}`,n||"")}info(e,t,r){this.log("INFO",e,t,r)}warn(e,t,r){this.log("WARN",e,t,r)}error(e,t,r){this.log("ERROR",e,t,r)}debug(e,t,r){this.log("DEBUG",e,t,r)}getLogs(){return[...this.logs]}getLogsAsString(){return this.logs.map(e=>`[${e.timestamp}] ${e.level} ${e.component}: ${e.message}${e.data?" | Data: "+JSON.stringify(e.data,null,2):""}`).join("\n")}clearLogs(){this.logs=[],this.saveToStorage()}saveToStorage(){try{localStorage.setItem(this.storageKey,JSON.stringify(this.logs))}catch(e){console.warn("Failed to save logs to localStorage:",e)}}loadFromStorage(){try{const e=localStorage.getItem(this.storageKey);e&&(this.logs=JSON.parse(e))}catch(e){console.warn("Failed to load logs from localStorage:",e),this.logs=[]}}initialize(){this.loadFromStorage()}async copyLogsToClipboard(){try{const e=this.getLogsAsString();return await navigator.clipboard.writeText(e),this.info("CurrencyLogger","Logs copied to clipboard successfully"),!0}catch(e){return this.error("CurrencyLogger","Failed to copy logs to clipboard",e),!1}}};window.currencyLogger=ko;const No=()=>{const e=localStorage.getItem("preferred-currency");ko.info("CurrencyState","Current currency from localStorage",{currentCurrency:e});const t={localStorage:e,timestamp:(new Date).toISOString(),userAgent:navigator.userAgent,url:window.location.href};ko.info("CurrencyState","Complete currency state",t)},Po=async(e,t,r)=>{ko.info("CurrencyTest",`Testing conversion: ${e} ${t} -> ${r}`);try{const n=await fetch("/api/currency/convert",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({price:e,from_currency:t,to_currency:r})});if(!n.ok)throw new Error(`HTTP ${n.status}: ${n.statusText}`);const o=await n.json();return ko.info("CurrencyTest","Conversion successful",o),o}catch(n){throw ko.error("CurrencyTest","Conversion failed",n),n}},Ro=()=>{const e=ko.getLogs();return`\n=== CURRENCY CONVERSION DEBUG LOGS ===\nGenerated: ${(new Date).toISOString()}\nURL: ${window.location.href}\nUser Agent: ${navigator.userAgent}\nCurrent Currency: ${localStorage.getItem("preferred-currency")||"Not set"}\n\n=== LOGS ===\n`+e.map(e=>`[${e.timestamp}] ${e.level} ${e.component}: ${e.message}${e.data?"\nData: "+JSON.stringify(e.data,null,2):""}`).join("\n\n")+"\n\n=== END OF LOGS ==="};window.logCurrentCurrencyState=No,window.testCurrencyConversion=Po,window.getCurrencyLogsForCopy=Ro;const To=[{code:"USD",name:"US Dollar",symbol:"$",flag:"🇺🇸"},{code:"EUR",name:"Euro",symbol:"€",flag:"🇪🇺"},{code:"ILS",name:"Israeli Shekel",symbol:"₪",flag:"🇮🇱"}],Oo=()=>{const[e,t]=o.useState("USD");o.useEffect(()=>{const e=localStorage.getItem("preferred-currency");ko.info("useCurrency","Loading currency from localStorage",{savedCurrency:e,isValidCurrency:e&&To.some(t=>t.code===e)}),e&&To.some(t=>t.code===e)?(t(e),ko.info("useCurrency","Currency loaded from localStorage",{loadedCurrency:e})):ko.info("useCurrency","Using default currency USD",{reason:e?"Invalid saved currency":"No saved currency"})},[]);return{currentCurrency:To.find(t=>t.code===e)||To[0],changeCurrency:r=>{ko.info("useCurrency","Currency change requested",{from:e,to:r}),t(r),localStorage.setItem("preferred-currency",r),ko.info("useCurrency","Currency changed and saved to localStorage",{newCurrency:r,localStorageValue:localStorage.getItem("preferred-currency")})},formatPrice:(t,r)=>{const n=r||e;try{return new Intl.NumberFormat("en-US",{style:"currency",currency:n}).format(t)}catch(o){const e=To.find(e=>e.code===n);return`${e?.symbol||n} ${t.toFixed(2)}`}},currencies:To}},Ao="alibee_search_params",_o={query:"",page:1,limit:150,hasVideo:void 0,minPrice:0,maxPrice:1e6,sortBy:void 0,sortOrder:"desc",category:void 0,target_currency:"USD"},Lo=()=>{const[e,t]=o.useState(_o);o.useEffect(()=>{try{const e=localStorage.getItem(Ao);if(e){const r=JSON.parse(e),n={..._o,...r};t(n),console.log("📱 [SEARCH PARAMS] Loaded from localStorage:",n)}}catch(e){console.error("Error loading search params from localStorage:",e)}},[]);return{searchParams:e,setSearchParams:o.useCallback(e=>{t(t=>{const r="function"==typeof e?e(t):e;try{localStorage.setItem(Ao,JSON.stringify(r))}catch(n){console.error("Error saving search params to localStorage:",n)}return r})},[]),clearSearchParams:o.useCallback(()=>{t(_o);try{localStorage.removeItem(Ao),console.log("🗑️ [SEARCH PARAMS] Cleared from localStorage")}catch(e){console.error("Error clearing search params from localStorage:",e)}},[])}},Do=()=>{const[e,t]=o.useState(new Set),[r,n]=o.useState(!1);return{likedProducts:e,isLoading:r,checkLikeStatus:o.useCallback(async e=>{try{n(!0);const r=await(async e=>(await Eo.get(`/api/like/${e}/status`)).data)(e);if(r.success){const n=r.is_liked;return t(t=>{const r=new Set(t);return n?r.add(e):r.delete(e),r}),n}return!1}catch(r){return console.error("Error checking like status:",r),!1}finally{n(!1)}},[]),checkBatchLikeStatus:o.useCallback(async e=>{if(0!==e.length)try{n(!0);const r=await(async e=>(await Eo.post("/api/likes/batch-status",e)).data)(e);if(r.success&&r.liked_products){const n=new Set;Object.entries(r.liked_products).forEach(([e,t])=>{t&&n.add(e)}),t(t=>{const r=new Set(t);return e.forEach(e=>{n.has(e)?r.add(e):r.delete(e)}),r})}}catch(r){console.error("Error checking batch like status:",r)}finally{n(!1)}},[]),updateLikeStatus:o.useCallback((e,r)=>{t(t=>{const n=new Set(t);return r?n.add(e):n.delete(e),n})},[])}},Io=e=>{const t=new Set;return e.filter(e=>!t.has(e.id)&&(t.add(e.id),!0))},$o=e=>{let t=[];e.product_small_image_urls?Array.isArray(e.product_small_image_urls)?t=e.product_small_image_urls:e.product_small_image_urls.string&&Array.isArray(e.product_small_image_urls.string)&&(t=e.product_small_image_urls.string):e.images_link?Array.isArray(e.images_link)?t=e.images_link:e.images_link.string&&Array.isArray(e.images_link.string)&&(t=e.images_link.string):e.images&&Array.isArray(e.images)&&(t=e.images);return{id:e.product_id?.toString()||"",title:e.product_title||"",price:e.sale_price||0,originalPrice:e.original_price||void 0,currency:e.sale_price_currency||e.original_currency||"USD",originalCurrency:e.original_currency||e.sale_price_currency||"USD",originalPriceCurrency:e.original_price_currency||e.original_price_currency,priceTarget:e.sale_price_target||void 0,originalPriceTarget:e.original_price_target||void 0,currencyTarget:e.sale_price_currency_target||void 0,originalCurrencyTarget:e.original_price_currency_target||void 0,image:e.product_main_image_url||"",images:Array.isArray(t)?t.filter(e=>e&&""!==e.trim()):[],video:e.video_link||e.video||void 0,rating:e.product_score_stars||e.rating_weighted||0,reviewCount:e.review_count||e.latest_volume||0,url:e.promotion_link||e.product_detail_url||"",category:e.product_category||e.first_level_category_name||"",discount:e.discount_percentage||0,commissionRate:e.commission_rate||0,salesVolume:e.latest_volume||0,volume:e.latest_volume||0,productId:e.product_id?.toString()||"",productDetailUrl:e.product_detail_url||"",discountPercentage:e.discount_percentage||0,productScoreStars:e.product_score_stars||0,scoreStars:e.product_score_stars||0,firstLevelCategoryName:e.first_level_category_name||"",secondLevelCategoryName:e.second_level_category_name||"",productCategory:e.product_category||"",customTitle:e.custom_title||void 0}},Fo=e=>{const[t,r]=o.useState([]),[n,s]=o.useState(!1),[a,i]=o.useState(!1),[c,l]=o.useState(null),[d,u]=o.useState(!0),[p,h]=o.useState(1),[f,g]=o.useState([]),[m,x]=o.useState([]),[y,b]=o.useState(0),v=o.useRef(!1),w=o.useCallback(async()=>{C(),s(!0),l(null);try{console.log("🌐 [API REQUEST] GET /api/search/comprehensive",{q:e.query,page:1,pageSize:200,target_currency:e.target_currency||"USD",min_price:e.minPrice||0,max_price:e.maxPrice||1e5,sort_by:e.sortBy||"volume_desc",only_with_video:e.hasVideo?1:0,category:e.category||void 0});const t=await Eo.get("/api/search/comprehensive",{params:{q:e.query,page:1,pageSize:200,target_currency:e.target_currency||"USD",min_price:e.minPrice||0,max_price:e.maxPrice||1e5,sort_by:e.sortBy||"volume_desc",only_with_video:e.hasVideo?1:0,category:e.category||void 0}});console.log("📊 [TOTAL PRODUCTS] Total products in JSON response:",t.data.total||t.data.items?.length||0);const n=(t.data.items||[]).map($o),o=Io(n);console.log("📊 [LOADING INFO] AllProducts length:",o.length,"Displayed:",10,"HasMore:",o.length>0),g(o),x(o.slice(0,10)),b(10),r(o.slice(0,10));const s=o.length>0;u(s),h(1)}catch(t){l(t.response?.data?.message||t.message||"Failed to fetch products")}finally{s(!1)}},[e]),S=o.useCallback(async e=>{C(),s(!0),l(null);try{console.log("🌐 [API REQUEST] GET /api/product/"+e);const t=await Eo.get(`/api/product/${e}`),n=(t.data.items||[]).map($o),o=Io(n);g(o),x(o),b(o.length),r(o);const s=o.length>0;u(s),h(1)}catch(t){l(t.response?.data?.message||t.message||"Failed to fetch product")}finally{s(!1)}},[e]),j=o.useCallback(async()=>{try{const t=p+1;console.log("🌐 [API REQUEST] GET /api/search/comprehensive (page "+t+")",{q:e.query,page:t,pageSize:200,target_currency:e.target_currency||"USD",min_price:e.minPrice||0,max_price:e.maxPrice||1e5,sort_by:e.sortBy||"volume_desc",only_with_video:e.hasVideo?1:0,category:e.category||void 0});const n=await Eo.get("/api/search/comprehensive",{params:{q:e.query,page:t,pageSize:200,target_currency:e.target_currency||"USD",min_price:e.minPrice||0,max_price:e.maxPrice||1e5,sort_by:e.sortBy||"volume_desc",only_with_video:e.hasVideo?1:0,category:e.category||void 0}});console.log("📊 [TOTAL PRODUCTS] Total products in JSON response (page",t,"):",n.data.total||n.data.items?.length||0);const o=(n.data.items||[]).map($o),s=Io(o);g(e=>Io([...e,...s]));m.length;const a=s.slice(0,5);x(e=>Io([...e,...a])),b(e=>e+a.length),r(e=>Io([...e,...a]));const i=s.length>0;u(i),h(t)}catch(t){console.error("❌ [LOAD MORE ERROR]",t),l(t.response?.data?.message||"Failed to fetch more products")}},[p,e,t.length]);o.useEffect(()=>{e.query&&(e=>{if(!e||""===e.trim())return!1;const t=e.trim();return/^\d{10,20}$/.test(t)})(e.query)?S(e.query):w()},[e.query,e.target_currency,e.minPrice,e.maxPrice,e.sortBy,e.sortOrder,e.hasVideo,e.category,w,S]);const E=o.useCallback(async()=>{if(!a&&!v.current){v.current=!0,i(!0);try{const e=m.length,t=f.length;if(console.log("🔄 [LOAD MORE] Current displayed:",e,"Total available:",t,"HasMore:",d),e<t){const n=f.slice(e,e+5);x(e=>[...e,...n]),b(e=>e+n.length),r(e=>[...e,...n]),e+5>=t&&(d?await j():u(!1))}else d&&await j()}catch(e){l(e.response?.data?.message||e.message||"Failed to load more products")}finally{i(!1),v.current=!1}}},[a,m.length,f.length,d,j]),C=o.useCallback(()=>{r([]),g([]),x([]),b(0),u(!1),h(1),s(!1),i(!1),l(null),v.current=!1},[]);return{products:t,loading:n,loadingMore:a,error:c,hasMore:d,loadMoreProducts:E,clearProducts:C,fetchProducts:w,setProducts:r}},Uo={EN:{category:"Category",id:"ID",price:"Price",originalPrice:"Original Price",currencyType:"Currency Type",discount:"Discount",commission:"Commission",salesVolume:"Sales Volume",rating:"Rating",refreshing:"Refreshing",loadingProducts:"Loading Products",search:"Search",advancedSearch:"Advanced Search",searchProducts:"Search Products",productName:"Product Name",productId:"Product ID",priceRange:"Price Range",minPrice:"Min Price",maxPrice:"Max Price",sortBy:"Sort By",sortOrder:"Sort Order",ascending:"Ascending",descending:"Descending",priceAsc:"Price (Low to High)",priceDesc:"Price (High to Low)",discountAsc:"Discount (Low to High)",discountDesc:"Discount (High to Low)",volumeAsc:"Sales Volume (Low to High)",volumeDesc:"Sales Volume (High to Low)",ratingAsc:"Rating (Low to High)",ratingDesc:"Rating (High to Low)",onlyWithVideo:"Only with Video",categoryFilter:"Category Filter",allCategories:"All Categories",electronics:"Electronics",luggage:"Luggage, Baggage and Shoes",sport:"Sport and Entertainment",furniture:"Furniture",homeGarden:"Home and Garden",jewelry:"Jewelry, Watches, Accessories",babyMaternity:"Baby and Maternity",searchButton:"Search",clearFilters:"Clear Filters",reset:"Reset",apply:"Apply",cancel:"Cancel",like:"Like",unlike:"Unlike",share:"Share",buy:"Buy",edit:"Edit",save:"Save",delete:"Delete",close:"Close",back:"Back",next:"Next",previous:"Previous",loading:"Loading...",error:"Error",success:"Success",noResults:"No Results Found",tryAgain:"Try Again",connectionError:"Connection Error",home:"Home",products:"Products",favorites:"Favorites",settings:"Settings",help:"Help",about:"About"},HE:{category:"קטגוריה",id:"מזהה",price:"מחיר",originalPrice:"מחיר מקורי",currencyType:"סוג מטבע",discount:"הנחה",commission:"עמלה",salesVolume:"נפח מכירות",rating:"דירוג",refreshing:"מרענן",loadingProducts:"טוען מוצרים",search:"חיפוש",advancedSearch:"חיפוש מתקדם",searchProducts:"חיפוש מוצרים",productName:"שם מוצר",productId:"מזהה מוצר",priceRange:"טווח מחירים",minPrice:"מחיר מינימלי",maxPrice:"מחיר מקסימלי",sortBy:"מיון לפי",sortOrder:"סדר מיון",ascending:"עולה",descending:"יורד",priceAsc:"מחיר (נמוך לגבוה)",priceDesc:"מחיר (גבוה לנמוך)",discountAsc:"הנחה (נמוך לגבוה)",discountDesc:"הנחה (גבוה לנמוך)",volumeAsc:"נפח מכירות (נמוך לגבוה)",volumeDesc:"נפח מכירות (גבוה לנמוך)",ratingAsc:"דירוג (נמוך לגבוה)",ratingDesc:"דירוג (גבוה לנמוך)",onlyWithVideo:"רק עם וידאו",categoryFilter:"מסנן קטגוריות",allCategories:"כל הקטגוריות",electronics:"אלקטרוניקה",luggage:"מזוודות, תיקים ונעליים",sport:"ספורט ובידור",furniture:"רהיטים",homeGarden:"בית וגינה",jewelry:"תכשיטים, שעונים ואביזרים",babyMaternity:"תינוקות ואמהות",searchButton:"חיפוש",clearFilters:"נקה מסננים",reset:"איפוס",apply:"החל",cancel:"ביטול",like:"אהבתי",unlike:"לא אהבתי",share:"שתף",buy:"קנה",edit:"ערוך",save:"שמור",delete:"מחק",close:"סגור",back:"חזור",next:"הבא",previous:"הקודם",loading:"טוען...",error:"שגיאה",success:"הצלחה",noResults:"לא נמצאו תוצאות",tryAgain:"נסה שוב",connectionError:"שגיאת חיבור",home:"בית",products:"מוצרים",favorites:"מועדפים",settings:"הגדרות",help:"עזרה",about:"אודות"},AR:{category:"الفئة",id:"المعرف",price:"السعر",originalPrice:"السعر الأصلي",currencyType:"نوع العملة",discount:"الخصم",commission:"العمولة",salesVolume:"حجم المبيعات",rating:"التقييم",refreshing:"تحديث",loadingProducts:"تحميل المنتجات",search:"بحث",advancedSearch:"البحث المتقدم",searchProducts:"البحث عن المنتجات",productName:"اسم المنتج",productId:"معرف المنتج",priceRange:"نطاق السعر",minPrice:"الحد الأدنى للسعر",maxPrice:"الحد الأقصى للسعر",sortBy:"ترتيب حسب",sortOrder:"ترتيب",ascending:"تصاعدي",descending:"تنازلي",priceAsc:"السعر (من الأقل للأعلى)",priceDesc:"السعر (من الأعلى للأقل)",discountAsc:"الخصم (من الأقل للأعلى)",discountDesc:"الخصم (من الأعلى للأقل)",volumeAsc:"حجم المبيعات (من الأقل للأعلى)",volumeDesc:"حجم المبيعات (من الأعلى للأقل)",ratingAsc:"التقييم (من الأقل للأعلى)",ratingDesc:"التقييم (من الأعلى للأقل)",onlyWithVideo:"فقط مع فيديو",categoryFilter:"مرشح الفئة",allCategories:"جميع الفئات",electronics:"الإلكترونيات",luggage:"الأمتعة والحقائب والأحذية",sport:"الرياضة والترفيه",furniture:"الأثاث",homeGarden:"المنزل والحديقة",jewelry:"المجوهرات والساعات والإكسسوارات",babyMaternity:"الأطفال والأمومة",searchButton:"بحث",clearFilters:"مسح المرشحات",reset:"إعادة تعيين",apply:"تطبيق",cancel:"إلغاء",like:"أعجبني",unlike:"لم يعجبني",share:"مشاركة",buy:"شراء",edit:"تعديل",save:"حفظ",delete:"حذف",close:"إغلاق",back:"رجوع",next:"التالي",previous:"السابق",loading:"جاري التحميل...",error:"خطأ",success:"نجح",noResults:"لم يتم العثور على نتائج",tryAgain:"حاول مرة أخرى",connectionError:"خطأ في الاتصال",home:"الرئيسية",products:"المنتجات",favorites:"المفضلة",settings:"الإعدادات",help:"المساعدة",about:"حول"}};class Bo{static currentLanguage="EN";static setLanguage(e){this.currentLanguage=e,localStorage.setItem("alibee-language",e)}static getCurrentLanguage(){const e=localStorage.getItem("alibee-language");return e&&["EN","HE","AR"].includes(e)&&(this.currentLanguage=e),this.currentLanguage}static getTranslation(e){return Uo[this.currentLanguage][e]}static getAllTranslations(){return Uo[this.currentLanguage]}static isRTL(){return["HE","AR"].includes(this.currentLanguage)}static getTextDirection(){return this.isRTL()?"rtl":"ltr"}}const zo=n.createContext(null),Mo=({children:e})=>{const[t,r]=n.useState(Bo.getCurrentLanguage()),o=Bo.isRTL(),s=Bo.getTextDirection(),a={currentLanguage:t,changeLanguage:e=>{Bo.setLanguage(e),r(e)},t:e=>Uo[t][e],isRTL:o,textDirection:s,languages:[{code:"EN",name:"English"},{code:"HE",name:"עברית"},{code:"AR",name:"عربي"}]};return n.createElement(zo.Provider,{value:a},e)},qo=()=>{const e=n.useContext(zo);if(!e)throw new Error("useTranslation must be used within a LanguageProvider");return e},Vo=er.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  height: 60px;
`,Ho=er.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  direction: ltr; /* Force LTR direction */
`,Go=er.div`
  display: flex;
  align-items: center;
  gap: 12px;
  direction: ltr; /* Force LTR direction */
`,Wo=er.img`
  width: 32px;
  height: 32px;
  border-radius: 8px;
`,Jo=er.h1`
  color: #ffffff;
  font-weight: bold;
  font-size: 14px;
  margin: 0;
  text-align: center;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
`,Ko=er.button`
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
`,Yo=er.div`
  display: flex;
  align-items: center;
  gap: 12px;
  direction: ltr; /* Force LTR direction */
`,Qo=er.button`
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
`,Xo=er.div`
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
`,Zo=er.button`
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
`,es=er.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`,ts=er.span`
  font-weight: 500;
  font-size: 14px;
`,rs=er.span`
  font-size: 12px;
  opacity: 0.75;
`,ns=er.div`
  position: fixed;
  inset: 0;
  z-index: 40;
`,os=({onSearchClick:e,onCurrencyChange:t,onLanguageChange:r})=>{const{currentCurrency:n,changeCurrency:a,currencies:i}=Oo(),{currentLanguage:c,changeLanguage:l,languages:d}=qo(),[u,p]=o.useState(!1),[h,f]=o.useState(!1),g=n;return w.jsxs(Vo,{children:[w.jsxs(Ho,{children:[w.jsxs(Go,{children:[w.jsx(Wo,{src:"/Logo.png",alt:"Alibee Logo",onError:e=>{e.currentTarget.src="https://via.placeholder.com/32x32?text=A"}}),w.jsx(Jo,{children:"Alibee Affiliate Hub"})]}),w.jsx(Ko,{onClick:e,children:w.jsx(s,{size:16})}),w.jsxs(Yo,{children:[w.jsxs("div",{style:{position:"relative"},children:[w.jsx(Qo,{onClick:()=>f(!h),title:`Language: ${c}`,children:w.jsx("span",{children:c})}),h&&w.jsx(Xo,{children:d.map(e=>w.jsxs(Zo,{onClick:()=>{l(e.code),f(!1),r&&r(e.code)},className:c===e.code?"active":"",children:[w.jsx("span",{children:e.code}),w.jsx("span",{children:e.name})]},e.code))})]}),w.jsxs("div",{style:{position:"relative"},children:[w.jsxs(Qo,{onClick:()=>p(!u),title:`${g?.name} (${g?.code})`,children:[w.jsx("span",{children:g?.symbol}),w.jsx("span",{children:g?.code})]}),u&&w.jsx(Xo,{children:i.map(e=>w.jsxs(Zo,{$active:n.code===e.code,onClick:()=>{ko.info("HeaderBar","Currency selection clicked",{selectedCurrency:e.code,currentCurrency:n.code}),a(e.code),p(!1),t&&t(e.code),ko.info("HeaderBar","Currency changed and search triggered",{newCurrency:e.code})},children:[w.jsx("span",{children:e.flag}),w.jsxs(es,{children:[w.jsx(ts,{children:e.name}),w.jsxs(rs,{children:[e.code," ",e.symbol]})]})]},e.code))})]})]})]}),u&&w.jsx(ns,{onClick:()=>{p(!1)}})]})},ss=({isOpen:e,onClose:t,onSearch:r,searchCategories:c,currentSearchQuery:l="",currentHasVideo:d=!1,currentCategory:u="",currentMinPrice:p=0,currentMaxPrice:h=1e6,currentSortBy:f="",currentSortOrder:g="desc"})=>{const[m,x]=o.useState(l),[y,b]=o.useState(d),[v,S]=o.useState(u),[j,E]=o.useState(p),[C,k]=o.useState(h),[N,P]=o.useState(f),[R,T]=o.useState(g);n.useEffect(()=>{x(l)},[l]),n.useEffect(()=>{b(d)},[d]),n.useEffect(()=>{S(u)},[u]),n.useEffect(()=>{E(p)},[p]),n.useEffect(()=>{k(h)},[h]),n.useEffect(()=>{P(f)},[f]),n.useEffect(()=>{T(g)},[g]);return e?w.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm z-50 flex items-center justify-center",children:w.jsxs("div",{className:"bg-gradient-to-br from-purple-900/40 via-pink-900/40 to-indigo-900/40 backdrop-blur-xl rounded-2xl p-6 max-w-3xl w-full mx-4 border border-purple-400/30 shadow-2xl",children:[w.jsxs("div",{className:"flex justify-between items-center mb-4",children:[w.jsx("h2",{className:"text-xl font-bold text-white bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent",children:"Advanced Search"}),w.jsx("button",{onClick:t,className:"text-white hover:text-pink-300 transition-colors p-1 rounded-full hover:bg-pink-500/20",children:w.jsx(a,{className:"w-5 h-5"})})]}),w.jsxs("form",{onSubmit:e=>{e.preventDefault(),r({productQuery:m.trim(),categoryQuery:v.trim(),hasVideo:y,minPrice:j||0,maxPrice:C||1e6,sortBy:N||void 0,sortOrder:R}),t()},className:"space-y-4",children:[w.jsxs("div",{className:"space-y-2",children:[w.jsx("h3",{className:"text-sm font-semibold text-purple-300",children:"Search by Product Name or ID"}),w.jsxs("div",{className:"relative",children:[w.jsx("input",{type:"text",value:m,onChange:e=>x(e.target.value),placeholder:"Product name or ID (e.g., 1005009716975587)",className:"w-full bg-gradient-to-r from-purple-800/30 to-pink-800/30 backdrop-blur-lg text-white placeholder-purple-200 px-3 py-2 pl-10 rounded-full border border-purple-400/40 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-60 focus:border-purple-400 transition-all duration-300 text-sm shadow-lg"}),w.jsx(s,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-purple-300"})]}),w.jsxs("div",{children:[w.jsx("h4",{className:"text-xs font-medium text-cyan-300 mb-2",children:"Quick Categories:"}),w.jsx("div",{className:"grid grid-cols-2 gap-2",children:[{key:"all",text:"All"},{key:"electronic",text:"Electronic"},{key:"luggage",text:"Luggage"},{key:"sport",text:"Sport"},{key:"furniture",text:"Furniture"},{key:"homeGarden",text:"Home & Garden"},{key:"jewelry",text:"Jewelry"},{key:"baby",text:"Baby"}].map(e=>w.jsx("button",{type:"button",onClick:()=>(e=>{x(e)})(e.text),className:"px-2 py-1 rounded-lg border transition-all duration-300 hover:scale-105 text-xs shadow-md "+(m===e.text?"bg-gradient-to-r from-cyan-500 to-blue-500 text-white border-cyan-400 shadow-cyan-500/25":"bg-gradient-to-r from-cyan-800/30 to-blue-800/30 hover:from-cyan-700/40 hover:to-blue-700/40 text-cyan-200 border-cyan-400/40 hover:border-cyan-400/60"),children:e.text},e.key))})]})]}),w.jsxs("div",{className:"space-y-2",children:[w.jsx("h3",{className:"text-sm font-semibold text-yellow-300",children:"Price Range"}),w.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[w.jsxs("div",{children:[w.jsx("label",{className:"block text-xs text-yellow-200 mb-1",children:"Min Price"}),w.jsx("input",{type:"number",value:j,onChange:e=>E(Number(e.target.value)||0),placeholder:"0",min:"0",className:"w-full bg-gradient-to-r from-yellow-800/30 to-orange-800/30 backdrop-blur-lg text-white placeholder-yellow-200 px-3 py-2 rounded-full border border-yellow-400/40 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-60 focus:border-yellow-400 transition-all duration-300 text-sm shadow-lg"})]}),w.jsxs("div",{children:[w.jsx("label",{className:"block text-xs text-yellow-200 mb-1",children:"Max Price"}),w.jsx("input",{type:"number",value:C,onChange:e=>k(Number(e.target.value)||1e6),placeholder:"1000000",min:"0",className:"w-full bg-gradient-to-r from-yellow-800/30 to-orange-800/30 backdrop-blur-lg text-white placeholder-yellow-200 px-3 py-2 rounded-full border border-yellow-400/40 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-60 focus:border-yellow-400 transition-all duration-300 text-sm shadow-lg"})]})]})]}),w.jsxs("div",{className:"space-y-2",children:[w.jsx("h3",{className:"text-sm font-semibold text-indigo-300",children:"Sort Options"}),w.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[w.jsxs("div",{children:[w.jsx("label",{className:"block text-xs text-indigo-200 mb-1",children:"Sort By"}),w.jsxs("select",{value:N,onChange:e=>P(e.target.value),className:"w-full bg-gradient-to-r from-indigo-800/30 to-purple-800/30 backdrop-blur-lg text-white px-3 py-2 rounded-full border border-indigo-400/40 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-60 focus:border-indigo-400 transition-all duration-300 text-sm shadow-lg",children:[w.jsx("option",{value:"",children:"Default (Volume)"}),w.jsx("option",{value:"price",children:"Price"}),w.jsx("option",{value:"rating",children:"Rating"}),w.jsx("option",{value:"discount",children:"Discount"}),w.jsx("option",{value:"newest",children:"Newest"})]})]}),w.jsxs("div",{children:[w.jsx("label",{className:"block text-xs text-indigo-200 mb-1",children:"Order"}),w.jsxs("select",{value:R,onChange:e=>T(e.target.value),className:"w-full bg-gradient-to-r from-indigo-800/30 to-purple-800/30 backdrop-blur-lg text-white px-3 py-2 rounded-full border border-indigo-400/40 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-60 focus:border-indigo-400 transition-all duration-300 text-sm shadow-lg",children:[w.jsx("option",{value:"desc",children:"Descending"}),w.jsx("option",{value:"asc",children:"Ascending"})]})]})]})]}),w.jsxs("div",{className:"space-y-2",children:[w.jsx("h3",{className:"text-sm font-semibold text-emerald-300",children:"Video Filter"}),w.jsxs("div",{className:"flex items-center space-x-3",children:[w.jsx("button",{type:"button",onClick:()=>b(!y),className:"relative w-10 h-5 rounded-full transition-all duration-300 shadow-lg "+(y?"bg-gradient-to-r from-emerald-500 to-green-500":"bg-gradient-to-r from-gray-600 to-gray-500"),children:w.jsx("div",{className:"absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full transition-transform duration-300 shadow-md "+(y?"transform translate-x-5":"")})}),w.jsx("span",{className:"text-emerald-200 font-medium text-sm",children:"Only products with video"}),y&&w.jsx(i,{className:"w-4 h-4 text-emerald-400"})]})]}),w.jsxs("div",{className:"flex justify-between items-center pt-4 border-t border-purple-400/30",children:[w.jsx("button",{type:"button",onClick:()=>{x(""),S(""),b(!1),E(0),k(1e6),P(""),T("desc")},className:"px-4 py-2 bg-gradient-to-r from-orange-800/40 to-red-800/40 hover:from-orange-700/50 hover:to-red-700/50 text-orange-200 rounded-full border border-orange-400/40 hover:border-orange-400/60 transition-all duration-300 text-sm shadow-lg",children:"Clear All"}),w.jsxs("div",{className:"flex space-x-2",children:[w.jsx("button",{type:"button",onClick:t,className:"px-4 py-2 bg-gradient-to-r from-gray-700/40 to-gray-600/40 hover:from-gray-600/50 hover:to-gray-500/50 text-gray-200 rounded-full border border-gray-400/40 hover:border-gray-400/60 transition-all duration-300 text-sm shadow-lg",children:"Cancel"}),w.jsx("button",{type:"submit",className:"px-6 py-2 bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 hover:from-purple-600 hover:via-pink-600 hover:to-rose-600 text-white rounded-full font-semibold transition-all duration-300 transform hover:scale-105 text-sm shadow-lg shadow-purple-500/25",children:"Search"})]})]})]})]})}):null},as=er.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, #6B46C1 0%, #4C1D95 100%);
  z-index: 100;
  overflow-y: auto;
  max-height: 100vh;
  display: flex;
  flex-direction: column;
`,is=er.div`
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding: 12px 16px;
  position: sticky;
  top: 0;
  z-index: 10;
  flex-shrink: 0;
`,cs=er.div`
  max-width: 100%;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 0 16px;
`,ls=er.h1`
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
`,ds=er.button`
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
`,us=er.div`
  max-width: 100%;
  width: 100%;
  margin: 0 auto;
  padding: 16px;
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`,ps=er.form`
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
`,hs=er.div`
  margin-bottom: 16px;
  flex-shrink: 0;

  &:last-child {
    margin-bottom: 0;
  }
  
  @media (max-width: 768px) {
    margin-bottom: 12px;
  }
`,fs=er.h3`
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
`,gs=er.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  
  @media (max-width: 768px) {
    gap: 4px;
  }
`,ms=er.label`
  color: rgba(255, 255, 255, 0.8);
  font-size: 12px;
  font-weight: 500;
  
  @media (max-width: 768px) {
    font-size: 11px;
  }
`,xs=er.input`
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
`,ys=er.div`
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
`,bs=er.select`
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
`,vs=er.div`
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
`,ws=er.button`
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
`,Ss=er.span`
  color: white;
  font-size: 12px;
  font-weight: 500;
  
  @media (max-width: 768px) {
    font-size: 11px;
  }
`,js=er.div`
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
`,Es=er.div`
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
`,Cs=er.button`
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
`,ks=({isOpen:e,onClose:t,onSearch:r})=>{const{searchParams:n}=Lo(),{currentCurrency:i}=Oo(),{t:g}=qo(),[m,x]=o.useState(""),[y,b]=o.useState(0),[v,S]=o.useState(2e3),[j,E]=o.useState("price"),[C,k]=o.useState("asc"),[N,P]=o.useState(!1),R=[{value:"price",label:g("price"),icon:w.jsx(c,{size:16})},{value:"discount",label:g("discount"),icon:w.jsx(l,{size:16})},{value:"volume",label:g("salesVolume"),icon:w.jsx(c,{size:16})},{value:"rating",label:g("rating"),icon:w.jsx(d,{size:16})}],T=[{value:"asc",label:g("ascending"),icon:w.jsx(c,{size:16})},{value:"desc",label:g("descending"),icon:w.jsx(u,{size:16})}];o.useEffect(()=>{if(e&&""===m&&0===y&&2e3===v&&"price"===j&&"asc"===C&&!N){const e="all"===n.query?"":n.query||"";x(e),b(n.minPrice||0),S(n.maxPrice||2e3);const t=n.sortBy||"price_asc",[r,o]=t.split("_");E(r||"price"),k(o||"asc"),P(n.hasVideo||!1)}},[e]);return e?w.jsxs(as,{children:[w.jsx(is,{children:w.jsxs(cs,{children:[w.jsx(ls,{children:g("advancedSearch")}),w.jsx(ds,{onClick:t,children:w.jsx(a,{size:20})})]})}),w.jsx(us,{children:w.jsxs(ps,{onSubmit:e=>{e.preventDefault();const n={query:m.trim()||"all",minPrice:y,maxPrice:v,sortBy:`${j}_${C}`,onlyWithVideo:N,targetCurrency:i?.code||"USD"};console.log("🔍 [SEARCH FORM] Submitting search for:",n.query),r(n),t()},children:[w.jsxs(hs,{children:[w.jsxs(fs,{children:[w.jsx(s,{size:20}),g("productName")," or ",g("productId")]}),w.jsxs(gs,{children:[w.jsx(ms,{children:g("searchProducts")}),w.jsx(xs,{type:"text",value:m,onChange:e=>x(e.target.value),placeholder:"e.g., shoe, 1005009716975587",autoFocus:!0})]})]}),w.jsxs(hs,{children:[w.jsxs(fs,{children:[w.jsx(p,{size:20}),g("priceRange")]}),w.jsxs(ys,{children:[w.jsxs(gs,{children:[w.jsx(ms,{children:g("minPrice")}),w.jsx(xs,{type:"number",value:y,onChange:e=>b(Number(e.target.value)||0),placeholder:"0",min:"0"})]}),w.jsxs(gs,{children:[w.jsx(ms,{children:g("maxPrice")}),w.jsx(xs,{type:"number",value:v,onChange:e=>S(Number(e.target.value)||2e3),placeholder:"2000",min:"0"})]})]})]}),w.jsxs(hs,{children:[w.jsxs(fs,{children:[w.jsx(h,{size:20}),g("sortBy")]}),w.jsxs(js,{children:[w.jsxs(gs,{children:[w.jsx(ms,{children:g("sortBy")}),w.jsx(bs,{value:j,onChange:e=>E(e.target.value),children:R.map(e=>w.jsx("option",{value:e.value,children:e.label},e.value))})]}),w.jsxs(gs,{children:[w.jsx(ms,{children:g("sortOrder")}),w.jsx(bs,{value:C,onChange:e=>k(e.target.value),children:T.map(e=>w.jsx("option",{value:e.value,children:e.label},e.value))})]})]})]}),w.jsxs(hs,{children:[w.jsxs(fs,{children:[w.jsx(f,{size:20}),g("onlyWithVideo")]}),w.jsxs(vs,{children:[w.jsx(ws,{$active:N,onClick:()=>P(!N),type:"button"}),w.jsx(Ss,{children:g("onlyWithVideo")})]})]}),w.jsxs(Es,{children:[w.jsx(Cs,{type:"button",onClick:()=>{x(""),b(0),S(2e3),E("price"),k("asc"),P(!1)},children:g("clearFilters")}),w.jsx(Cs,{type:"button",onClick:t,children:g("cancel")}),w.jsxs(Cs,{type:"submit",$variant:"primary",children:[w.jsx(s,{size:16}),g("search")]})]})]})})]}):null};var Ns={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Ps=n.createContext&&n.createContext(Ns),Rs=function(){return Rs=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},Rs.apply(this,arguments)};function Ts(e){return e&&e.map(function(e,t){return n.createElement(e.tag,Rs({key:t},e.attr),Ts(e.child))})}function Os(e){return function(t){return n.createElement(As,Rs({attr:Rs({},e.attr)},t),Ts(e.child))}}function As(e){var t=function(t){var r,o=e.attr,s=e.size,a=e.title,i=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r}(e,["attr","size","title"]),c=s||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",Rs({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,i,{className:r,style:Rs(Rs({color:e.color||t.color},t.style),e.style),height:c,width:c,xmlns:"http://www.w3.org/2000/svg"}),a&&n.createElement("title",null,a),e.children)};return void 0!==Ps?n.createElement(Ps.Consumer,null,function(e){return t(e)}):t(Ns)}function _s(e){return Os({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"}}]})(e)}function Ls(e){return Os({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"}}]})(e)}function Ds(e){return Os({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"9",cy:"21",r:"1"}},{tag:"circle",attr:{cx:"20",cy:"21",r:"1"}},{tag:"path",attr:{d:"M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"}}]})(e)}const Is=({product:e,isVisible:t=!1})=>{const[r,n]=o.useState(!1);return t?w.jsxs("div",{className:"fixed bottom-4 left-4 z-50 bg-black/90 text-white p-3 rounded-lg max-w-sm max-h-64 overflow-hidden border border-yellow-400/30",children:[w.jsxs("div",{className:"flex items-center justify-between mb-2",children:[w.jsx("h4",{className:"text-xs font-bold text-yellow-300",children:"Product Data Debug"}),w.jsx("button",{onClick:()=>n(!r),className:"text-xs bg-yellow-500 px-2 py-1 rounded hover:bg-yellow-600",children:r?"Collapse":"Expand"})]}),w.jsxs("div",{className:"text-xs space-y-1",children:[w.jsxs("div",{children:["ID: ",w.jsx("span",{className:"text-cyan-400",children:e.id})]}),w.jsxs("div",{children:["Title: ",w.jsx("span",{className:"text-green-400 truncate block",children:e.title})]}),w.jsxs("div",{children:["Price: ",w.jsx("span",{className:"text-blue-400",children:e.price})]}),w.jsxs("div",{children:["Price Target: ",w.jsx("span",{className:"text-purple-400",children:e.priceTarget||"N/A"})]}),w.jsxs("div",{children:["Currency: ",w.jsx("span",{className:"text-orange-400",children:e.currency})]}),w.jsxs("div",{children:["Currency Target: ",w.jsx("span",{className:"text-pink-400",children:e.currencyTarget||"N/A"})]}),w.jsxs("div",{children:["Original Price: ",w.jsx("span",{className:"text-red-400",children:e.originalPrice||"N/A"})]}),w.jsxs("div",{children:["Original Price Target: ",w.jsx("span",{className:"text-indigo-400",children:e.originalPriceTarget||"N/A"})]}),w.jsxs("div",{children:["Discount: ",w.jsx("span",{className:"text-yellow-400",children:e.discount||e.discountPercentage||"N/A"})]}),w.jsxs("div",{children:["Rating: ",w.jsx("span",{className:"text-emerald-400",children:e.rating||e.productScoreStars||e.scoreStars||"N/A"})]}),w.jsxs("div",{children:["Product Score Stars: ",w.jsx("span",{className:"text-emerald-300",children:e.productScoreStars||"N/A"})]}),w.jsxs("div",{children:["Volume: ",w.jsx("span",{className:"text-teal-400",children:e.volume||e.salesVolume||"N/A"})]}),w.jsxs("div",{children:["Latest Volume: ",w.jsx("span",{className:"text-teal-300",children:e.volume||"N/A"})]}),w.jsxs("div",{children:["Commission: ",w.jsx("span",{className:"text-rose-400",children:e.commissionRate||"N/A"})]}),w.jsxs("div",{children:["Category: ",w.jsx("span",{className:"text-lime-400 truncate block",children:e.category||e.firstLevelCategoryName||"N/A"})]})]}),r&&w.jsx("div",{className:"mt-2 max-h-32 overflow-y-auto",children:w.jsx("div",{className:"text-xs text-gray-300",children:w.jsx("pre",{className:"whitespace-pre-wrap",children:JSON.stringify(e,null,2)})})})]}):null},$s=new Map,Fs=({value:e,onChange:t,style:r})=>{const[n,s]=o.useState(!1),[a,i]=o.useState(e),c=o.useRef(null);o.useEffect(()=>{i(e)},[e]),o.useEffect(()=>{n&&c.current&&(c.current.focus(),c.current.select())},[n]);const l=()=>{a.trim()&&t(a.trim()),s(!1)},d=t=>{"Enter"===t.key?l():"Escape"===t.key&&(i(e),s(!1))};return n?w.jsx("div",{style:{position:"relative",width:"100%"},children:w.jsx("input",{ref:c,type:"text",value:a,onChange:e=>i(e.target.value),onBlur:l,onKeyDown:d,style:{...r,background:"rgba(0, 0, 0, 0.6)",border:"2px solid rgba(255, 255, 255, 0.4)",borderRadius:"8px",padding:"8px 12px",color:"#fff",fontSize:"18px",fontWeight:"bold",textAlign:"center",width:"100%",outline:"none",boxSizing:"border-box"}})}):w.jsxs("div",{style:{...r,cursor:"pointer",position:"relative",display:"flex",alignItems:"center",justifyContent:"center",gap:"8px"},onClick:()=>s(!0),title:"Click to edit title",children:[w.jsx("span",{children:e}),w.jsx(_s,{size:14,style:{opacity:.6,transition:"opacity 0.2s ease"}})]})},Us=er.div`
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
`,Bs=er.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1;
  overflow: hidden;
  background: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0 0 20px 20px;
`,zs=er.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease, opacity 0.5s ease;

  ${Us}:hover & {
    transform: scale(1.05);
  }
`;er.div`
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
`;const Ms=er.div`
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
`,qs=er.div`
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
`,Vs=er.div`
  position: absolute;
  bottom: 8px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 6px;
  z-index: 10;
`,Hs=er.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${e=>e.$active?"#ff0000":"rgba(255, 255, 255, 0.5)"};
  border: 1px solid #000;
  transition: background-color 0.3s ease;
  cursor: pointer;
`,Gs=er.button`
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
`,Ws=er.div`
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
`,Js=er.button`
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

  /* حالت عادی - آنلایک */
  &:hover {
    background: rgba(0, 0, 0, 0.8);
    transform: scale(1.1);
  }

  /* حالت لایک شده */
  &.liked {
    background: #ff6b6b;
    color: white;
    
    &:hover {
      background: #ff5252;
      transform: scale(1.1);
    }
  }
`,Ks=er.div`
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  flex: 1;
  justify-content: space-between;
`;er.div`
  font-size: 12px;
  font-weight: bold;
  color: #ffffff;
  margin-bottom: 4px;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
`,er.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 6px;
`,er.div`
  font-size: 14px;
  font-weight: bold;
  color: #ffffff;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
  background: rgba(0, 0, 0, 0.4);
  padding: 4px 8px;
  border-radius: 6px;
  backdrop-filter: blur(5px);
`,er.div`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 6px;
`;const Ys=er.div`
  display: flex;
  gap: 1px;
`,Qs=er.span`
  color: ${e=>e.$filled?"#fbbf24":"#d1d5db"};
  font-size: 16px;
`,Xs=er.div`
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
`;er.div`
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
`,er.span`
  font-size: 11px;
  color: #ffffff;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
  background: rgba(0, 0, 0, 0.4);
  padding: 3px 6px;
  border-radius: 4px;
  backdrop-filter: blur(5px);
  font-weight: 500;
`,er.div`
  color: #ffffff;
  padding: 3px 8px;
  font-size: 10px;
  font-weight: 500;
  margin-bottom: 4px;
  display: inline-block;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
`,er.div`
  font-size: 12px;
  color: #ffffff;
  margin-bottom: 16px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
  background: rgba(0, 0, 0, 0.4);
  padding: 4px 8px;
  border-radius: 6px;
  backdrop-filter: blur(5px);
  font-weight: 500;
`;const Zs=er.button`
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
`,ea=({product:e,onLike:t,onShare:r,onBuy:n,isLiked:s=!1,showDebug:a=!1})=>{const{t:i,currentLanguage:c}=qo(),[l,d]=o.useState(e.customTitle||e.title||"Product Title");o.useEffect(()=>{d(e.customTitle||e.title||"Product Title")},[e.customTitle,e.title]);const u=[e.image,...Array.isArray(e.images)?e.images:[]].filter(Boolean).filter((e,t,r)=>r.indexOf(e)===t),p=e.video&&""!==e.video.trim(),h=p?e.video:null,[f,g]=o.useState(!1),[m,x]=o.useState(0),[y,b]=o.useState(null),[v,S]=o.useState(null),[j,E]=o.useState(new Set),[C,k]=o.useState(!1),[N,P]=o.useState(p),R=o.useRef(null),T=o.useRef(null),O=e=>new Promise((t,r)=>{if($s.has(e))return void t();const n=new Image;n.onload=()=>{$s.set(e,n),E(t=>new Set([...t,e])),t()},n.onerror=r,n.src=e});o.useEffect(()=>{u.length>0&&(async()=>{if(u[m])try{await O(u[m])}catch(t){console.warn("Failed to preload current image:",t)}const e=u.map(e=>O(e));try{await Promise.all(e)}catch(t){console.warn("Some images failed to preload:",t)}})()},[u.join(","),m]);const A=()=>{p&&N?(P(!1),x(u.length-1)):m>0?x(m-1):p?P(!0):u.length>1&&x(u.length-1)},_=()=>{p&&!N&&m===u.length-1?P(!0):m<u.length-1?x(m+1):p&&N?(P(!1),x(0)):u.length>1&&x(0)};o.useEffect(()=>{const e=u[m];e&&(j.has(e)?g(!0):g(!1))},[m,j,u]),o.useEffect(()=>{if(!p||!R.current)return;const e=new IntersectionObserver(e=>{e.forEach(e=>{const t=e.isIntersecting;k(t),T.current&&N&&(t?T.current.play().catch(console.error):T.current.pause())})},{threshold:.3,rootMargin:"0px 0px 0px 0px"});return e.observe(R.current),()=>{e.disconnect()}},[p,N]),o.useEffect(()=>{if(u.length<=1||p)return;const e=setInterval(()=>{if(f){const e=(m+1)%u.length;x(e)}},3e3);return()=>clearInterval(e)},[u.length,f,m,p]);const L=(e,t)=>`${{USD:"$",EUR:"€",ILS:"₪"}[t]||"$"}${parseFloat(e.toString()).toFixed(2)}`,D=e.discount||e.discountPercentage?Math.round(e.discount||e.discountPercentage||0):null;return w.jsxs(Us,{className:"fade-in",children:[w.jsxs(Bs,{ref:R,onTouchStart:e=>{S(null),b(e.targetTouches[0].clientX)},onTouchMove:e=>{S(e.targetTouches[0].clientX)},onTouchEnd:()=>{if(!y||!v)return;const e=y-v,t=e<-50;e>50?_():t&&A()},onKeyDown:e=>{"ArrowLeft"===e.key?A():"ArrowRight"===e.key&&_()},tabIndex:0,children:[p&&N?w.jsx("video",{ref:T,src:h,muted:!0,loop:!0,playsInline:!0,controls:!0,controlsList:"nodownload nofullscreen noremoteplayback",style:{width:"100%",height:"100%",objectFit:"cover"}}):e.image&&w.jsxs(w.Fragment,{children:[w.jsx(zs,{src:u[m],alt:e.title,onLoad:()=>g(!0),style:{opacity:f?1:0}}),!f&&w.jsx(Ms,{children:w.jsx(qs,{})})]}),(p||u.length>1)&&w.jsxs(w.Fragment,{children:[w.jsx(Gs,{$position:"left",onClick:A,"aria-label":"Previous",style:{opacity:.9,cursor:"pointer"},children:"‹"}),w.jsx(Gs,{$position:"right",onClick:_,"aria-label":"Next",style:{opacity:.9,cursor:"pointer"},children:"›"})]}),D&&w.jsxs(Ws,{children:["-",D,"%"]}),w.jsx(Js,{className:s?"liked":"",onClick:r=>{r.stopPropagation(),t&&t(e.id)},children:w.jsx(Ls,{fill:s?"currentColor":"none"})}),w.jsx(Zs,{onClick:()=>{n&&n(e)},children:w.jsx(Ds,{})}),(u.length>1||p)&&w.jsxs(Vs,{children:[p&&w.jsx(Hs,{$active:!!N,onClick:()=>{P(!0)},style:{backgroundColor:N?"#3b82f6":"#6b7280"}}),u.map((e,t)=>w.jsx(Hs,{$active:t===m&&!N,onClick:()=>{x(t),P(!1)}},t))]})]}),w.jsxs(Ks,{children:[w.jsx(Fs,{value:l,onChange:t=>{d(t),e.onTitleChange&&e.onTitleChange(e.id,t)},style:{fontSize:"18px",fontWeight:"bold",marginBottom:"10px",color:"#fff",background:"transparent",border:"none",outline:"none",textAlign:"center",width:"100%",padding:"8px",borderRadius:"6px",transition:"all 0.2s ease"}}),w.jsx("div",{style:{display:"flex",justifyContent:"center",marginBottom:"8px"},children:w.jsxs(Xs,{$currentLang:c,style:{background:"rgba(0, 0, 0, 0.3)",border:"1px solid rgba(255, 255, 255, 0.2)",borderRadius:"6px",padding:"4px 12px",fontSize:"11px",textAlign:"center",color:"#ffffff"},children:[w.jsxs("span",{className:"lang-en",children:["Category: ",e.firstLevelCategoryName||e.category||"General"]}),w.jsxs("span",{className:"lang-he",children:["קטגוריה: ",e.firstLevelCategoryName||e.category||"General"]}),w.jsxs("span",{className:"lang-ar",children:["الفئة: ",e.firstLevelCategoryName||e.category||"General"]})]})}),w.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"8px",marginBottom:"8px"},children:[w.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[w.jsxs(Xs,{$currentLang:c,style:{color:"#fbbf24"},children:[w.jsxs("span",{className:"lang-en",children:["ID: ",e.id]}),w.jsxs("span",{className:"lang-he",children:["מזהה: ",e.id]}),w.jsxs("span",{className:"lang-ar",children:["المعرف: ",e.id]})]}),w.jsxs(Xs,{$currentLang:c,style:{color:"#ffffff"},children:[w.jsxs("span",{className:"lang-en",children:["Price: ",L(e.priceTarget||e.price||0,e.currencyTarget||e.currency)]}),w.jsxs("span",{className:"lang-he",children:["מחיר: ",L(e.priceTarget||e.price||0,e.currencyTarget||e.currency)]}),w.jsxs("span",{className:"lang-ar",children:["السعر: ",L(e.priceTarget||e.price||0,e.currencyTarget||e.currency)]})]}),(e.originalPriceTarget||e.originalPrice)&&w.jsxs(Xs,{$currentLang:c,style:{color:"#ff6b6b",textDecoration:"line-through"},children:[w.jsxs("span",{className:"lang-en",children:["Original Price: ",L(e.originalPriceTarget||e.originalPrice||0,e.currencyTarget||e.currency)]}),w.jsxs("span",{className:"lang-he",children:["מחיר מקורי: ",L(e.originalPriceTarget||e.originalPrice||0,e.currencyTarget||e.currency)]}),w.jsxs("span",{className:"lang-ar",children:["السعر الأصلي: ",L(e.originalPriceTarget||e.originalPrice||0,e.currencyTarget||e.currency)]})]}),w.jsxs(Xs,{$currentLang:c,style:{color:"#60a5fa"},children:[w.jsxs("span",{className:"lang-en",children:["Currency Type: ",e.currencyTarget||e.currency]}),w.jsxs("span",{className:"lang-he",children:["סוג מטבע: ",e.currencyTarget||e.currency]}),w.jsxs("span",{className:"lang-ar",children:["نوع العملة: ",e.currencyTarget||e.currency]})]})]}),w.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[w.jsxs(Xs,{$currentLang:c,style:{color:"#fbbf24"},children:[w.jsxs("span",{className:"lang-en",children:["Discount: ",(e.discount||e.discountPercentage||0).toFixed(1),"%"]}),w.jsxs("span",{className:"lang-he",children:["הנחה: ",(e.discount||e.discountPercentage||0).toFixed(1),"%"]}),w.jsxs("span",{className:"lang-ar",children:["الخصم: ",(e.discount||e.discountPercentage||0).toFixed(1),"%"]})]}),w.jsxs(Xs,{$currentLang:c,style:{color:"#fb7185"},children:[w.jsxs("span",{className:"lang-en",children:["Commission: ",e.commissionRate||0,"%"]}),w.jsxs("span",{className:"lang-he",children:["עמלה: ",e.commissionRate||0,"%"]}),w.jsxs("span",{className:"lang-ar",children:["العمولة: ",e.commissionRate||0,"%"]})]}),w.jsxs(Xs,{$currentLang:c,style:{color:"#34d399"},children:[w.jsxs("span",{className:"lang-en",children:["Sales Volume: ",(e.volume||e.salesVolume||0).toLocaleString()]}),w.jsxs("span",{className:"lang-he",children:["נפח מכירות: ",(e.volume||e.salesVolume||0).toLocaleString()]}),w.jsxs("span",{className:"lang-ar",children:["حجم المبيعات: ",(e.volume||e.salesVolume||0).toLocaleString()]})]}),w.jsxs(Xs,{$currentLang:c,style:{color:"#a78bfa",gap:"6px",flexDirection:"row",alignItems:"center"},children:[w.jsx("span",{className:"lang-en",children:"Rating:"}),w.jsx("span",{className:"lang-he",children:"דירוג:"}),w.jsx("span",{className:"lang-ar",children:"التقييم:"}),w.jsx(Ys,{children:(e=>{const t=[],r=Math.floor(e),n=e%1!=0;for(let o=0;o<5;o++)o<r||o===r&&n?t.push(w.jsx(Qs,{$filled:!0,children:"★"},o)):t.push(w.jsx(Qs,{children:"☆"},o));return t})(e.productScoreStars||e.scoreStars||e.rating||0)})]})]})]})]}),a&&w.jsx(Is,{product:e,isVisible:a})]})},ta=er.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 0;
  gap: 0;
  width: 100%;
`,ra=er.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  font-size: 18px;
  padding: 20px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
  font-weight: 500;
`,na=er.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ff6b6b;
  font-size: 18px;
  text-align: center;
  padding: 20px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
  font-weight: 500;
`,oa=er.div`
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
`,sa=er.h2`
  font-size: 24px;
  margin-bottom: 16px;
  color: #fff;
`,aa=er.p`
  font-size: 16px;
  line-height: 1.5;
  max-width: 400px;
`,ia=er.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  scroll-snap-align: start;
  scroll-snap-stop: always;
  padding: 60px 0 60px 0;
  box-sizing: border-box;
`,ca=({products:e,loading:t,loadingMore:r,hasMore:n,onLoadMore:s,onLike:a,onShare:i,onBuy:c,onTitleChange:l,isLiked:d,error:u,showDebug:p=!1})=>{const{t:h}=qo(),f=o.useRef(null);return o.useEffect(()=>{if(!n||r||0===e.length)return;const t=document.querySelector("[data-scroll-container]");f.current=new IntersectionObserver(e=>{const[t]=e;t.isIntersecting&&s()},{root:t,rootMargin:"200px",threshold:.1});const o=()=>{const e=document.querySelectorAll("[data-product-index]");if(e.length>=2){Array.from(e).slice(-2).forEach(e=>{f.current&&f.current.observe(e)})}};return o(),setTimeout(o,100),()=>{f.current&&f.current.disconnect()}},[n,r,s,e.length]),t&&0===e.length?w.jsxs(ra,{children:[w.jsx("div",{className:"loading",children:"⏳"}),w.jsx("span",{style:{marginLeft:"10px"},children:h("loadingProducts")})]}):u&&0===e.length?w.jsx(na,{children:w.jsxs("div",{children:[w.jsx("h3",{children:"Error loading products"}),w.jsx("p",{children:u})]})}):0!==e.length||t?w.jsxs(ta,{children:[e.map((e,t)=>w.jsx(ia,{"data-product-index":t+1,"data-product-id":e.id,onMouseEnter:()=>{},className:"fade-in",children:w.jsx(ea,{product:{...e,onTitleChange:l},onLike:a,onShare:i,onBuy:c,isLiked:d?.(e.id),showDebug:p})},`${e.id}-${t}`)),r&&w.jsxs(ra,{children:[w.jsx("div",{className:"loading",children:"⏳"}),w.jsx("span",{style:{marginLeft:"10px"},children:h("loading")})]})]}):w.jsxs(oa,{children:[w.jsx(sa,{children:"No products found"}),w.jsx(aa,{children:"Try changing filters or searching for new products to discover more"})]})},la=({onLike:e,onShare:t,onBuy:r,onTitleChange:n,isLiked:s,likedProducts:a=new Set,showDebug:i=!1,searchParams:c})=>{Oo();const[l,d]=o.useState(!1),[u,p]=o.useState(0),[h,f]=o.useState(1),g=o.useRef(null),m=o.useRef(0),x=o.useRef(!1),{products:y,loading:b,loadingMore:v,error:S,hasMore:j,loadMoreProducts:E,clearProducts:C,fetchProducts:k}=Fo(c);return o.useEffect(()=>{if(0===y.length)return;const e=document.querySelectorAll("[data-product-index]"),t=new IntersectionObserver(e=>{e.forEach(e=>{if(e.isIntersecting){const t=parseInt(e.target.getAttribute("data-product-index")||"1"),r=e.target.getAttribute("data-product-id");f(t),console.log(`👀 [SCROLL TO PRODUCT] Product ${t}: ID ${r}`)}})},{threshold:.5,rootMargin:"-20% 0px -20% 0px"});return e.forEach(e=>{t.observe(e)}),()=>{t.disconnect()}},[y]),o.useEffect(()=>{const e=e=>{1===h&&(m.current=e.touches[0].clientY,x.current=!0,console.log("🔄 [PULL TO REFRESH] Touch started on Product 1"))},t=e=>{if(!x.current||1!==h)return;const t=e.touches[0].clientY-m.current;t>0&&(e.preventDefault(),p(Math.min(t,100)),console.log("🔄 [PULL TO REFRESH] Pulling distance:",t))},r=async()=>{if(x.current&&1===h)if(x.current=!1,console.log("🔄 [PULL TO REFRESH] Touch end - pullDistance:",u),u>50){d(!0),console.log("🔄 [PULL TO REFRESH] Refreshing from Product 1..."),C();try{await k()}catch(e){console.error("Error refreshing products:",e)}setTimeout(()=>{d(!1),p(0)},500)}else p(0)},n=g.current;if(n)return n.addEventListener("touchstart",e,{passive:!0}),n.addEventListener("touchmove",t,{passive:!1}),n.addEventListener("touchend",r,{passive:!0}),()=>{n.removeEventListener("touchstart",e),n.removeEventListener("touchmove",t),n.removeEventListener("touchend",r)}},[h,u,C,k]),S?w.jsx("div",{className:"flex items-center justify-center min-h-[400px]",children:w.jsxs("div",{className:"text-center bg-black bg-opacity-40 backdrop-blur-lg border border-white border-opacity-20 rounded-xl p-8 shadow-lg",children:[w.jsx("div",{className:"text-red-400 text-6xl mb-4",children:"⚠️"}),w.jsx("h3",{className:"text-lg font-semibold text-white mb-2 drop-shadow-lg",children:"Error loading products"}),w.jsx("p",{className:"text-white text-opacity-80 drop-shadow-lg",children:S})]})}):w.jsxs("div",{ref:g,className:"w-full relative",style:{transform:`translateY(${u}px)`,transition:l?"none":"transform 0.3s ease-out"},children:[1===h&&u>0&&w.jsx("div",{className:"absolute top-0 left-0 right-0 flex items-center justify-center bg-blue-50 text-blue-600 py-4 z-10",style:{height:`${Math.min(u,100)}px`,transform:`translateY(-${Math.min(u,100)}px)`},children:u>50?w.jsxs("div",{className:"flex items-center gap-2",children:[w.jsx("div",{className:"animate-spin w-5 h-5 border-2 border-blue-600 border-t-transparent rounded-full"}),w.jsx("span",{className:"text-sm font-medium",children:"Release to refresh"})]}):w.jsxs("div",{className:"flex items-center gap-2",children:[w.jsx("div",{className:"w-5 h-5 border-2 border-blue-600 border-t-transparent rounded-full"}),w.jsx("span",{className:"text-sm",children:"Pull to refresh"})]})}),l&&w.jsx("div",{className:"absolute top-0 left-0 right-0 flex items-center justify-center bg-blue-50 text-blue-600 py-4 z-10",children:w.jsxs("div",{className:"flex items-center gap-2",children:[w.jsx("div",{className:"animate-spin w-5 h-5 border-2 border-blue-600 border-t-transparent rounded-full"}),w.jsx("span",{className:"text-sm font-medium",children:"Refreshing..."})]})}),w.jsx(ca,{products:y,loading:b,loadingMore:v,hasMore:j,onLoadMore:E,onLike:e,onShare:t,onBuy:r,onTitleChange:n,isLiked:s,showDebug:i})]})},da=({isVisible:e=!1})=>{const[t,r]=o.useState([]),[n,s]=o.useState(!1),{currentCurrency:a}=Oo();o.useEffect(()=>{if(e){const e=setInterval(()=>{r(ko.getLogs())},1e3);return()=>clearInterval(e)}},[e]);return e?w.jsxs("div",{className:"fixed bottom-4 right-4 z-50 bg-black/80 text-white p-4 rounded-lg max-w-lg max-h-96 overflow-hidden",children:[w.jsxs("div",{className:"flex items-center justify-between mb-2",children:[w.jsx("h3",{className:"text-sm font-bold",children:"Currency Debug Panel"}),w.jsx("button",{onClick:()=>s(!n),className:"text-xs bg-blue-500 px-2 py-1 rounded",children:n?"Collapse":"Expand"})]}),w.jsxs("div",{className:"text-xs space-y-1",children:[w.jsxs("div",{children:["Current Currency: ",w.jsx("span",{className:"text-green-400",children:a?.code})]}),w.jsxs("div",{children:["LocalStorage: ",w.jsx("span",{className:"text-yellow-400",children:localStorage.getItem("preferred-currency")||"Not set"})]}),w.jsxs("div",{children:["Logs Count: ",w.jsx("span",{className:"text-blue-400",children:t.length})]})]}),w.jsxs("div",{className:"space-y-2 mt-2",children:[w.jsxs("div",{className:"flex flex-wrap gap-1",children:[w.jsx("button",{onClick:async()=>{const e=Ro();try{await navigator.clipboard.writeText(e),alert("Logs copied to clipboard!")}catch(t){console.error("Failed to copy logs:",t),alert("Failed to copy logs. Check console for details.")}},className:"text-xs bg-green-500 px-2 py-1 rounded hover:bg-green-600",children:"Copy Logs"}),w.jsx("button",{onClick:No,className:"text-xs bg-blue-500 px-2 py-1 rounded hover:bg-blue-600",children:"Log State"}),w.jsx("button",{onClick:async()=>{try{const e=await Po(100,"USD","EUR");console.log("Test conversion result:",e)}catch(e){console.error("Test conversion failed:",e)}},className:"text-xs bg-purple-500 px-2 py-1 rounded hover:bg-purple-600",children:"Test API"}),w.jsx("button",{onClick:()=>window.location.reload(),className:"text-xs bg-red-500 px-2 py-1 rounded hover:bg-red-600",children:"Refresh Page"})]}),w.jsxs("div",{className:"flex flex-wrap gap-1",children:[w.jsx("button",{onClick:()=>{ko.clearLogs(),r([])},className:"text-xs bg-orange-500 px-2 py-1 rounded hover:bg-orange-600",children:"Clear Logs"}),w.jsx("button",{onClick:()=>{window.testAppCurrencyConversion?window.testAppCurrencyConversion():console.log("testAppCurrencyConversion function not available")},className:"text-xs bg-indigo-500 px-2 py-1 rounded hover:bg-indigo-600",children:"Test App Conversion"}),w.jsx("button",{onClick:()=>{window.forceUIUpdate?window.forceUIUpdate():console.log("forceUIUpdate function not available")},className:"text-xs bg-teal-500 px-2 py-1 rounded hover:bg-teal-600",children:"Force UI Update"})]}),w.jsxs("div",{className:"flex flex-wrap gap-1",children:[w.jsx("button",{onClick:()=>{window.testDirectAPI?window.testDirectAPI():console.log("testDirectAPI function not available")},className:"text-xs bg-cyan-500 px-2 py-1 rounded hover:bg-cyan-600",children:"Test Direct API"}),w.jsx("button",{onClick:()=>{window.testPriceDisplay?window.testPriceDisplay():console.log("testPriceDisplay function not available")},className:"text-xs bg-orange-500 px-2 py-1 rounded hover:bg-orange-600",children:"Test Price Display"})]})]}),n&&w.jsx("div",{className:"mt-2 max-h-48 overflow-y-auto",children:w.jsx("div",{className:"text-xs space-y-1",children:t.slice(0,10).map((e,t)=>w.jsxs("div",{className:"border-b border-gray-600 pb-1",children:[w.jsxs("div",{className:"text-gray-400",children:["[",e.timestamp,"] ",e.level," ",e.component]}),w.jsx("div",{className:"text-white",children:e.message}),e.data&&w.jsx("div",{className:"text-gray-300 text-xs",children:JSON.stringify(e.data,null,2)})]},t))})})]}):null};window.showCurrencyDebug=(e=!0)=>{const t=new CustomEvent("toggleCurrencyDebug",{detail:{show:e}});window.dispatchEvent(t)};const ua=({isVisible:e=!1})=>{const[t,r]=o.useState([]),[n,s]=o.useState(!1),{currentCurrency:a}=Oo(),{searchParams:i}=Lo(),c=(e,t,n)=>{r(r=>[{id:Date.now(),test:e,result:t,error:n,timestamp:(new Date).toISOString()},...r.slice(0,9)])};return e?w.jsxs("div",{className:"fixed top-4 right-4 z-50 bg-black/90 text-white p-4 rounded-lg max-w-md max-h-96 overflow-hidden border border-purple-400/30",children:[w.jsxs("div",{className:"flex items-center justify-between mb-3",children:[w.jsx("h3",{className:"text-sm font-bold text-purple-300",children:"API Test Panel"}),w.jsx("button",{onClick:()=>{r([])},className:"text-xs bg-red-500 px-2 py-1 rounded hover:bg-red-600",children:"Clear"})]}),w.jsxs("div",{className:"space-y-2 mb-3",children:[w.jsx("button",{onClick:async()=>{s(!0);try{const e=await Eo.get("/api/search/comprehensive",{params:{q:"shoes",page:1,pageSize:10,target_currency:a?.code||"USD",min_price:10,max_price:100,sort_by:"volume_desc",only_with_video:0,category:"Electronics"}});c("Comprehensive Search",{success:e.data.success,itemsCount:e.data.items?.length||0,queryType:e.data.query_type,hasMore:e.data.hasMore,currencyConversion:e.data.currency_conversion})}catch(e){c("Comprehensive Search",null,e)}finally{s(!1)}},disabled:n,className:"w-full text-xs bg-blue-500 px-2 py-1 rounded hover:bg-blue-600 disabled:opacity-50",children:n?"Testing...":"Test Comprehensive Search"}),w.jsx("button",{onClick:async()=>{s(!0);try{const e=await Eo.post("/api/currency/convert",{price:100,from_currency:"USD",to_currency:a?.code||"EUR"});c("Currency Conversion",e.data)}catch(e){c("Currency Conversion",null,e)}finally{s(!1)}},disabled:n,className:"w-full text-xs bg-green-500 px-2 py-1 rounded hover:bg-green-600 disabled:opacity-50",children:n?"Testing...":"Test Currency Conversion"}),w.jsx("button",{onClick:()=>{c("Current Search Params",{searchParams:i,currentCurrency:a?.code,timestamp:(new Date).toISOString()})},className:"w-full text-xs bg-purple-500 px-2 py-1 rounded hover:bg-purple-600",children:"Show Current Params"})]}),w.jsx("div",{className:"max-h-48 overflow-y-auto space-y-2",children:t.map(e=>w.jsxs("div",{className:"border-b border-gray-600 pb-2 text-xs",children:[w.jsx("div",{className:"font-semibold text-cyan-300",children:e.test}),w.jsx("div",{className:"text-gray-400 text-xs",children:e.timestamp}),e.error?w.jsxs("div",{className:"text-red-400",children:["Error: ",e.error.message||JSON.stringify(e.error)]}):w.jsx("div",{className:"text-gray-300",children:w.jsx("pre",{className:"whitespace-pre-wrap text-xs",children:JSON.stringify(e.result,null,2)})})]},e.id))})]}):null};window.showApiTest=(e=!0)=>{const t=new CustomEvent("toggleApiTest",{detail:{show:e}});window.dispatchEvent(t)};const pa=({isVisible:e=!1})=>{const t=e=>{const t=[],r=Math.floor(e),n=e%1!=0;for(let o=0;o<5;o++)o<r||o===r&&n?t.push(w.jsx("span",{className:"text-yellow-400",children:"★"},o)):t.push(w.jsx("span",{className:"text-gray-400",children:"☆"},o));return t};return e?w.jsxs("div",{className:"fixed top-20 right-4 z-50 bg-black/90 text-white p-4 rounded-lg max-w-sm border border-yellow-400/30",children:[w.jsx("h4",{className:"text-sm font-bold text-yellow-300 mb-3",children:"Star Rating Test"}),w.jsx("div",{className:"space-y-2",children:[0,1,2,2.5,3,3.7,4,4.5,5].map(e=>w.jsxs("div",{className:"flex items-center gap-2",children:[w.jsx("div",{className:"flex items-center gap-1",children:t(e)}),w.jsxs("span",{className:"text-xs text-gray-300",children:["(",e,")"]})]},e))}),w.jsxs("div",{className:"mt-3 text-xs text-gray-400",children:[w.jsx("div",{children:"★ = Filled star"}),w.jsx("div",{children:"☆ = Empty star"})]})]}):null},ha=er.div`
  position: fixed !important;
  bottom: 80px !important;
  right: 20px !important;
  z-index: 999999 !important;
  opacity: ${e=>e.$visible?1:0};
  visibility: ${e=>e.$visible?"visible":"hidden"};
  transition: all 0.3s ease;
  pointer-events: auto !important;
  transform: translateZ(0);
  will-change: transform;
`,fa=er.button`
  width: 50px !important;
  height: 50px !important;
  border-radius: 50% !important;
  background: linear-gradient(45deg, #FF4081, #9333EA) !important;
  border: 2px solid rgba(255, 255, 255, 0.3) !important;
  color: white !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  cursor: pointer !important;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.4) !important;
  transition: all 0.3s ease !important;
  font-size: 20px !important;
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
`,ga=()=>{const[e,t]=o.useState(!1);o.useEffect(()=>{const r=()=>{const e=window.scrollY||document.documentElement.scrollTop,r=document.querySelector("[data-scroll-container]"),n=r?r.scrollTop:0,o=Math.max(e,n);t(!!(o>100))};window.debugBackToTop=()=>{console.log("🔼 [DEBUG] Manual debug triggered"),console.log("🔼 [DEBUG] Current scroll:",window.scrollY),console.log("🔼 [DEBUG] isVisible state:",e),t(!0),console.log("🔼 [DEBUG] Forced visibility to true")},window.addEventListener("scroll",r);const n=document.querySelector("[data-scroll-container]");return n&&n.addEventListener("scroll",r),()=>{window.removeEventListener("scroll",r);const e=document.querySelector("[data-scroll-container]");e&&e.removeEventListener("scroll",r),delete window.debugBackToTop}},[e]);return w.jsx(ha,{$visible:e,"data-back-to-top":!0,children:w.jsx(fa,{onClick:()=>{window.scrollTo({top:0,behavior:"smooth"});const e=document.querySelector("[data-scroll-container]");e&&e.scrollTo({top:0,behavior:"smooth"})},title:"Back to top",children:w.jsx(g,{size:22})})})},ma=er.div`
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
`,xa=er.div`
  height: 100vh;
  overflow-y: auto;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
`,ya=er.div`
  position: fixed;
  bottom: 16px;
  left: 16px;
  z-index: 40;
  font-size: 12px;
  color: #ffffff;
  font-family: 'Courier New', monospace;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
`;function ba(){const[e,t]=o.useState(!1),[r,n]=o.useState(!1),[s,a]=o.useState(!1),[i,c]=o.useState(!1),[l,d]=o.useState(!1),[u,p]=o.useState(!1),[h]=o.useState(["Electronics","Fashion","Home & Garden","Sports","Beauty","Automotive"]);(()=>{const[e,t]=o.useState(null),[r,n]=o.useState(!1),[s,a]=o.useState(null)})(),(()=>{const[e,t]=o.useState("dark");o.useEffect(()=>{const e=localStorage.getItem("preferred-theme");e&&Co.some(t=>t.value===e)&&t(e)},[]),o.useEffect(()=>{const t=document.documentElement;"dark"===e?(t.classList.add("dark"),t.classList.remove("light")):"light"===e?(t.classList.add("light"),t.classList.remove("dark")):window.matchMedia("(prefers-color-scheme: dark)").matches?(t.classList.add("dark"),t.classList.remove("light")):(t.classList.add("light"),t.classList.remove("dark"))},[e])})();const{currentCurrency:f}=Oo(),{searchParams:g,setSearchParams:m}=Lo(),{updateLikeStatus:x}=Do(),{products:y,setProducts:b}=Fo(g),{t:v,isRTL:S,textDirection:j}=qo(),[E,C]=o.useState(new Set);o.useEffect(()=>{const e=new Set;y.forEach(t=>{null!=t.customTitle&&null!==t.customTitle&&""!==t.customTitle.trim()&&e.add(t.id)}),C(e)},[y]);return o.useEffect(()=>{const e=e=>{e.ctrlKey&&e.shiftKey&&"D"===e.key&&(e.preventDefault(),a(e=>!e)),e.ctrlKey&&e.shiftKey&&"T"===e.key&&(e.preventDefault(),c(e=>!e)),e.ctrlKey&&e.shiftKey&&"P"===e.key&&(e.preventDefault(),d(e=>!e)),e.ctrlKey&&e.shiftKey&&"S"===e.key&&(e.preventDefault(),p(e=>!e))};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[]),o.useEffect(()=>{const e=e=>{a(e.detail.show)},t=e=>{c(e.detail.show)};return window.addEventListener("toggleCurrencyDebug",e),window.addEventListener("toggleApiTest",t),()=>{window.removeEventListener("toggleCurrencyDebug",e),window.removeEventListener("toggleApiTest",t)}},[]),w.jsxs(ma,{$isRTL:S,children:[w.jsx(os,{onSearchClick:()=>n(!0),onCurrencyChange:e=>{m(t=>({...t,target_currency:e,page:1}))},onLanguageChange:e=>{}}),w.jsx(xa,{"data-scroll-container":!0,children:w.jsx(la,{onLike:async e=>{try{if(E.has(e))await(async e=>{try{console.log("🌐 [API REQUEST] DELETE /api/save/"+e);const t=await fetch(`https://alibee-affiliate-api.onrender.com/api/save/${e}`,{method:"DELETE"});t.ok?(b(t=>t.map(t=>t.id===e?{...t,customTitle:null}:t)),C(t=>{const r=new Set(t);return r.delete(e),r})):console.error("❌ [UNLIKE] Failed to remove product:",t.statusText)}catch(t){console.error("❌ [UNLIKE] Error removing product:",t)}})(e),C(t=>{const r=new Set(t);return r.delete(e),r}),x(e,!1);else{const t=y.find(t=>t.id===e),r=t?.customTitle||t?.title||"Liked Product";await(async(e,t)=>{try{const r=y.find(t=>t.id===e);if(!r)return void console.error("❌ [LIKE] Product not found:",e);const n={product_id:r.id,product_title:r.title,promotion_link:r.productDetailUrl||r.url,product_category:r.firstLevelCategoryName||r.category||"General",custom_title:t,has_video:!!r.video};console.log("🌐 [API REQUEST] POST /api/save",n);const o=await fetch("https://alibee-affiliate-api.onrender.com/api/save",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});o.ok?(b(r=>r.map(r=>r.id===e?{...r,customTitle:t}:r)),C(t=>new Set(t).add(e))):console.error("❌ [LIKE] Failed to save product:",o.statusText)}catch(r){console.error("❌ [LIKE] Error saving product:",r)}})(e,r),C(t=>new Set(t).add(e)),x(e,!0)}}catch(t){console.error("Error toggling like status:",t)}},onShare:e=>{navigator.share?navigator.share({title:e.title,text:`Check out this product: ${e.title}`,url:e.url}):navigator.clipboard.writeText(e.url)},onBuy:e=>{window.open(e.url,"_blank")},onTitleChange:async(e,t)=>{try{b(r=>r.map(r=>r.id===e?{...r,customTitle:t}:r));if(E.has(e)){console.log("🌐 [API REQUEST] PUT /api/save/"+e+"/title",{title:t});const r=await fetch(`https://alibee-affiliate-api.onrender.com/api/save/${e}/title`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:t})});r.ok||console.error("❌ [TITLE CHANGE] Failed to update product title in database:",r.statusText)}}catch(r){console.error("Error updating product title:",r)}},isLiked:e=>E.has(e),likedProducts:E,showDebug:l,searchParams:g})}),w.jsx(ks,{isOpen:r,onClose:()=>n(!1),onSearch:e=>{const[t,r]=e.sortBy.split("_"),o="desc"===r?"desc":"asc",s={query:e.query||"all",hasVideo:e.onlyWithVideo||void 0,minPrice:e.minPrice,maxPrice:e.maxPrice,sortBy:e.sortBy,sortOrder:o,page:1,target_currency:f?.code||e.targetCurrency};m(s),n(!1)}}),w.jsx(ss,{isOpen:e,onClose:()=>t(!1),onSearch:e=>{const r=[e.productQuery,e.categoryQuery].filter(Boolean).join(" "),n=(e,t)=>{if(!e)return"volume_desc";const r="asc"===t?"asc":"desc";switch(e){case"price":return`price_${r}`;case"rating":return`rating_${r}`;case"discount":return`discount_${r}`;case"newest":return`newest_${r}`;default:return"volume_desc"}};m(t=>({...t,query:r,category:e.categoryQuery||void 0,hasVideo:e.hasVideo||void 0,minPrice:e.minPrice||0,maxPrice:e.maxPrice||1e6,sortBy:n(e.sortBy,e.sortOrder),sortOrder:e.sortOrder||"desc",page:1,target_currency:f?.code||"USD"})),t(!1)},searchCategories:h,currentSearchQuery:g.query,currentHasVideo:g.hasVideo,currentCategory:g.category,currentMinPrice:g.minPrice,currentMaxPrice:g.maxPrice,currentSortBy:g.sortBy,currentSortOrder:g.sortOrder}),s&&w.jsx(da,{isVisible:s}),i&&w.jsx(ua,{isVisible:i}),u&&w.jsx(pa,{isVisible:u}),w.jsx(ga,{}),w.jsx(ya,{children:w.jsx("span",{children:"V2025.0.1.8"})})]})}function va(){return w.jsx(Mo,{children:w.jsx(ba,{})})}j.createRoot(document.getElementById("root")).render(w.jsx(va,{}));
