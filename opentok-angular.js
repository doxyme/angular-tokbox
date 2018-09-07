/**
 * @license
 * Lodash (Custom Build) lodash.com/license | Underscore.js 1.8.3 underscorejs.org/LICENSE
 * Build: `lodash include="groupBy,find,findLast,debounce,sortBy,indexOf" -p -o lodash-custom.min.js`
 */
;(function(){function t(){return le.Date.now()}function e(t,e,n){switch(n.length){case 0:return t.call(e);case 1:return t.call(e,n[0]);case 2:return t.call(e,n[0],n[1]);case 3:return t.call(e,n[0],n[1],n[2])}return t.apply(e,n)}function n(t,e,n,r){for(var o=-1,u=null==t?0:t.length;++o<u;){var c=t[o];e(r,c,n(c),t)}return r}function r(t,e){for(var n=-1,r=null==t?0:t.length;++n<r&&false!==e(t[n],n,t););}function o(t,e){for(var n=-1,r=null==t?0:t.length,o=0,u=[];++n<r;){var c=t[n];e(c,n,t)&&(u[o++]=c)}return u;
}function u(t,e){for(var n=-1,r=null==t?0:t.length,o=Array(r);++n<r;)o[n]=e(t[n],n,t);return o}function c(t,e){for(var n=-1,r=e.length,o=t.length;++n<r;)t[o+n]=e[n];return t}function i(t,e){for(var n=-1,r=null==t?0:t.length;++n<r;)if(e(t[n],n,t))return true;return false}function a(t,e,n,r){var o=t.length;for(n+=r?1:-1;r?n--:++n<o;)if(e(t[n],n,t))return n;return-1}function f(t){return t!==t}function l(t){return function(e){return null==e?Wt:e[t]}}function s(t,e){var n=t.length;for(t.sort(e);n--;)t[n]=t[n].c;
return t}function b(t){return function(e){return t(e)}}function h(t){var e=-1,n=Array(t.size);return t.forEach(function(t,r){n[++e]=[r,t]}),n}function p(t){var e=Object;return function(n){return t(e(n))}}function y(t){var e=-1,n=Array(t.size);return t.forEach(function(t){n[++e]=t}),n}function j(){}function v(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function _(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}
function g(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function d(t){var e=-1,n=null==t?0:t.length;for(this.__data__=new g;++e<n;)this.add(t[e])}function m(t){this.size=(this.__data__=new _(t)).size}function A(t,e){var n=_n(t),r=!n&&vn(t),o=!n&&!r&&gn(t),u=!n&&!r&&!o&&An(t);if(n=n||r||o||u){for(var r=t.length,c=String,i=-1,a=Array(r);++i<r;)a[i]=c(i);r=a}else r=[];var f,c=r.length;for(f in t)!e&&!Ae.call(t,f)||n&&("length"==f||o&&("offset"==f||"parent"==f)||u&&("buffer"==f||"byteLength"==f||"byteOffset"==f)||bt(f,c))||r.push(f);
return r}function w(t,e,n){var r=t[e];Ae.call(t,e)&&wt(r,n)&&(n!==Wt||e in t)||z(t,e,n)}function O(t,e){for(var n=t.length;n--;)if(wt(t[n][0],e))return n;return-1}function S(t,e,n,r){return on(t,function(t,o,u){e(r,t,n(t),u)}),r}function k(t,e){return t&&X(e,Dt(e),t)}function x(t,e){return t&&X(e,Tt(e),t)}function z(t,e,n){"__proto__"==e&&De?De(t,e,{configurable:true,enumerable:true,value:n,writable:true}):t[e]=n}function I(t,e,n,o,u,c){var i,a=1&e,f=2&e,l=4&e;if(n&&(i=u?n(t,o,u,c):n(t)),i!==Wt)return i;
if(!xt(t))return t;if(o=_n(t)){if(i=ft(t),!a)return Q(t,i)}else{var s=ln(t),b="[object Function]"==s||"[object GeneratorFunction]"==s;if(gn(t))return J(t,a);if("[object Object]"==s||"[object Arguments]"==s||b&&!u){if(i=f||b?{}:typeof t.constructor!="function"||yt(t)?{}:rn(Ee(t)),!a)return f?Z(t,x(i,t)):Y(t,k(i,t))}else{if(!ue[s])return u?t:{};i=lt(t,s,a)}}if(c||(c=new m),u=c.get(t))return u;if(c.set(t,i),mn(t))return t.forEach(function(r){i.add(I(r,e,n,r,t,c))}),i;if(dn(t))return t.forEach(function(r,o){
i.set(o,I(r,e,n,o,t,c))}),i;var f=l?f?ot:rt:f?Tt:Dt,h=o?Wt:f(t);return r(h||t,function(r,o){h&&(o=r,r=t[o]),w(i,o,I(r,e,n,o,t,c))}),i}function E(t,e,n,r,o){var u=-1,i=t.length;for(n||(n=st),o||(o=[]);++u<i;){var a=t[u];0<e&&n(a)?1<e?E(a,e-1,n,r,o):c(o,a):r||(o[o.length]=a)}return o}function F(t,e){e=H(e,t);for(var n=0,r=e.length;null!=t&&n<r;)t=t[_t(e[n++])];return n&&n==r?t:Wt}function M(t,e,n){return e=e(t),_n(t)?e:c(e,n(t))}function $(t){if(null==t)t=t===Wt?"[object Undefined]":"[object Null]";else if(Ue&&Ue in Object(t)){
var e=Ae.call(t,Ue),n=t[Ue];try{t[Ue]=Wt;var r=true}catch(t){}var o=Oe.call(t);r&&(e?t[Ue]=n:delete t[Ue]),t=o}else t=Oe.call(t);return t}function B(t){return zt(t)&&"[object Arguments]"==$(t)}function U(t,e,n,r,o){if(t===e)e=true;else if(null==t||null==e||!zt(t)&&!zt(e))e=t!==t&&e!==e;else t:{var u=_n(t),c=_n(e),i=u?"[object Array]":ln(t),a=c?"[object Array]":ln(e),i="[object Arguments]"==i?"[object Object]":i,a="[object Arguments]"==a?"[object Object]":a,f="[object Object]"==i,c="[object Object]"==a;
if((a=i==a)&&gn(t)){if(!gn(e)){e=false;break t}u=true,f=false}if(a&&!f)o||(o=new m),e=u||An(t)?et(t,e,n,r,U,o):nt(t,e,i,n,r,U,o);else{if(!(1&n)&&(u=f&&Ae.call(t,"__wrapped__"),i=c&&Ae.call(e,"__wrapped__"),u||i)){t=u?t.value():t,e=i?e.value():e,o||(o=new m),e=U(t,e,n,r,o);break t}if(a)e:if(o||(o=new m),u=1&n,i=rt(t),c=i.length,a=rt(e).length,c==a||u){for(f=c;f--;){var l=i[f];if(!(u?l in e:Ae.call(e,l))){e=false;break e}}if((a=o.get(t))&&o.get(e))e=a==e;else{a=true,o.set(t,e),o.set(e,t);for(var s=u;++f<c;){var l=i[f],b=t[l],h=e[l];
if(r)var p=u?r(h,b,l,e,t,o):r(b,h,l,t,e,o);if(p===Wt?b!==h&&!U(b,h,n,r,o):!p){a=false;break}s||(s="constructor"==l)}a&&!s&&(n=t.constructor,r=e.constructor,n!=r&&"constructor"in t&&"constructor"in e&&!(typeof n=="function"&&n instanceof n&&typeof r=="function"&&r instanceof r)&&(a=false)),o.delete(t),o.delete(e),e=a}}else e=false;else e=false}}return e}function D(t){return zt(t)&&"[object Map]"==ln(t)}function T(t,e){var n=e.length,r=n;if(null==t)return!r;for(t=Object(t);n--;){var o=e[n];if(o[2]?o[1]!==t[o[0]]:!(o[0]in t))return false;
}for(;++n<r;){var o=e[n],u=o[0],c=t[u],i=o[1];if(o[2]){if(c===Wt&&!(u in t))return false}else if(o=new m,void 0===Wt?!U(i,c,3,void 0,o):1)return false}return true}function L(t){return zt(t)&&"[object Set]"==ln(t)}function P(t){return zt(t)&&kt(t.length)&&!!oe[$(t)]}function N(t){return typeof t=="function"?t:null==t?Pt:typeof t=="object"?_n(t)?R(t[0],t[1]):V(t):Ct(t)}function C(t,e){var n=-1,r=Ot(t)?Array(t.length):[];return on(t,function(t,o,u){r[++n]=e(t,o,u)}),r}function V(t){var e=it(t);return 1==e.length&&e[0][2]?jt(e[0][0],e[0][1]):function(n){
return n===t||T(n,e)}}function R(t,e){return pt(t)&&e===e&&!xt(e)?jt(_t(t),e):function(n){var r=Bt(n,t);return r===Wt&&r===e?Ut(n,t):U(e,r,3)}}function W(t,e){var n=[],r=-1;return e=u(e.length?e:[Pt],b(ut())),s(C(t,function(t){return{a:u(e,function(e){return e(t)}),b:++r,c:t}}),function(t,e){var r;t:{r=-1;for(var o=t.a,u=e.a,c=o.length,i=n.length;++r<c;){var a;e:{a=o[r];var f=u[r];if(a!==f){var l=a!==Wt,s=null===a,b=a===a,h=It(a),p=f!==Wt,y=null===f,j=f===f,v=It(f);if(!y&&!v&&!h&&a>f||h&&p&&j&&!y&&!v||s&&p&&j||!l&&j||!b){
a=1;break e}if(!s&&!h&&!v&&a<f||v&&l&&b&&!s&&!h||y&&l&&b||!p&&b||!j){a=-1;break e}}a=0}if(a){r=r>=i?a:a*("desc"==n[r]?-1:1);break t}}r=t.b-e.b}return r})}function G(t){return function(e){return F(e,t)}}function q(t){if(typeof t=="string")return t;if(_n(t))return u(t,q)+"";if(It(t))return nn?nn.call(t):"";var e=t+"";return"0"==e&&1/t==-Gt?"-0":e}function H(t,e){return _n(t)?t:pt(t,e)?[t]:bn($t(t))}function J(t,e){if(e)return t.slice();var n=t.length,n=Ie?Ie(n):new t.constructor(n);return t.copy(n),
n}function K(t){var e=new t.constructor(t.byteLength);return new ze(e).set(new ze(t)),e}function Q(t,e){var n=-1,r=t.length;for(e||(e=Array(r));++n<r;)e[n]=t[n];return e}function X(t,e,n){var r=!n;n||(n={});for(var o=-1,u=e.length;++o<u;){var c=e[o],i=Wt;i===Wt&&(i=t[c]),r?z(n,c,i):w(n,c,i)}return n}function Y(t,e){return X(t,an(t),e)}function Z(t,e){return X(t,fn(t),e)}function tt(t){return function(e,n,r){var o=Object(e);if(!Ot(e)){var u=ut(n,3);e=Dt(e),n=function(t){return u(o[t],t,o)}}return n=t(e,n,r),
-1<n?o[u?e[n]:n]:Wt}}function et(t,e,n,r,o,u){var c=1&n,a=t.length,f=e.length;if(a!=f&&!(c&&f>a))return false;if((f=u.get(t))&&u.get(e))return f==e;var f=-1,l=true,s=2&n?new d:Wt;for(u.set(t,e),u.set(e,t);++f<a;){var b=t[f],h=e[f];if(r)var p=c?r(h,b,f,e,t,u):r(b,h,f,t,e,u);if(p!==Wt){if(p)continue;l=false;break}if(s){if(!i(e,function(t,e){if(!s.has(e)&&(b===t||o(b,t,n,r,u)))return s.push(e)})){l=false;break}}else if(b!==h&&!o(b,h,n,r,u)){l=false;break}}return u.delete(t),u.delete(e),l}function nt(t,e,n,r,o,u,c){
switch(n){case"[object DataView]":if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)break;t=t.buffer,e=e.buffer;case"[object ArrayBuffer]":if(t.byteLength!=e.byteLength||!u(new ze(t),new ze(e)))break;return true;case"[object Boolean]":case"[object Date]":case"[object Number]":return wt(+t,+e);case"[object Error]":return t.name==e.name&&t.message==e.message;case"[object RegExp]":case"[object String]":return t==e+"";case"[object Map]":var i=h;case"[object Set]":if(i||(i=y),t.size!=e.size&&!(1&r))break;
return(n=c.get(t))?n==e:(r|=2,c.set(t,e),e=et(i(t),i(e),r,o,u,c),c.delete(t),e);case"[object Symbol]":if(en)return en.call(t)==en.call(e)}return false}function rt(t){return M(t,Dt,an)}function ot(t){return M(t,Tt,fn)}function ut(){var t=j.iteratee||Nt,t=t===Nt?N:t;return arguments.length?t(arguments[0],arguments[1]):t}function ct(t,e){var n=t.__data__,r=typeof e;return("string"==r||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==e:null===e)?n[typeof e=="string"?"string":"hash"]:n.map}function it(t){
for(var e=Dt(t),n=e.length;n--;){var r=e[n],o=t[r];e[n]=[r,o,o===o&&!xt(o)]}return e}function at(t,e){var n=null==t?Wt:t[e];return(!xt(n)||we&&we in n?0:(St(n)?Se:ee).test(gt(n)))?n:Wt}function ft(t){var e=t.length,n=new t.constructor(e);return e&&"string"==typeof t[0]&&Ae.call(t,"index")&&(n.index=t.index,n.input=t.input),n}function lt(t,e,n){var r=t.constructor;switch(e){case"[object ArrayBuffer]":return K(t);case"[object Boolean]":case"[object Date]":return new r(+t);case"[object DataView]":return e=n?K(t.buffer):t.buffer,
new t.constructor(e,t.byteOffset,t.byteLength);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return e=n?K(t.buffer):t.buffer,new t.constructor(e,t.byteOffset,t.length);case"[object Map]":return new r;case"[object Number]":case"[object String]":return new r(t);case"[object RegExp]":return e=new t.constructor(t.source,Yt.exec(t)),
e.lastIndex=t.lastIndex,e;case"[object Set]":return new r;case"[object Symbol]":return en?Object(en.call(t)):{}}}function st(t){return _n(t)||vn(t)||!!(Be&&t&&t[Be])}function bt(t,e){var n=typeof t;return e=null==e?9007199254740991:e,!!e&&("number"==n||"symbol"!=n&&re.test(t))&&-1<t&&0==t%1&&t<e}function ht(t,e,n){if(!xt(n))return false;var r=typeof e;return!!("number"==r?Ot(n)&&bt(e,n.length):"string"==r&&e in n)&&wt(n[e],t)}function pt(t,e){if(_n(t))return false;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!It(t))||(Jt.test(t)||!Ht.test(t)||null!=e&&t in Object(e));
}function yt(t){var e=t&&t.constructor;return t===(typeof e=="function"&&e.prototype||ge)}function jt(t,e){return function(n){return null!=n&&(n[t]===e&&(e!==Wt||t in Object(n)))}}function vt(t,n,r){return n=Ne(n===Wt?t.length-1:n,0),function(){for(var o=arguments,u=-1,c=Ne(o.length-n,0),i=Array(c);++u<c;)i[u]=o[n+u];for(u=-1,c=Array(n+1);++u<n;)c[u]=o[u];return c[n]=r(i),e(t,this,c)}}function _t(t){if(typeof t=="string"||It(t))return t;var e=t+"";return"0"==e&&1/t==-Gt?"-0":e}function gt(t){if(null!=t){
try{return me.call(t)}catch(t){}return t+""}return""}function dt(t,e,n){var r=null==t?0:t.length;return r?(n=null==n?0:Ft(n),0>n&&(n=Ne(r+n,0)),a(t,ut(e,3),n)):-1}function mt(t,e,n){var r=null==t?0:t.length;if(!r)return-1;var o=r-1;return n!==Wt&&(o=Ft(n),o=0>n?Ne(r+o,0):Ce(o,r-1)),a(t,ut(e,3),o,true)}function At(t,e){function n(){var r=arguments,o=e?e.apply(this,r):r[0],u=n.cache;return u.has(o)?u.get(o):(r=t.apply(this,r),n.cache=u.set(o,r)||u,r)}if(typeof t!="function"||null!=e&&typeof e!="function")throw new TypeError("Expected a function");
return n.cache=new(At.Cache||g),n}function wt(t,e){return t===e||t!==t&&e!==e}function Ot(t){return null!=t&&kt(t.length)&&!St(t)}function St(t){return!!xt(t)&&(t=$(t),"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t)}function kt(t){return typeof t=="number"&&-1<t&&0==t%1&&9007199254740991>=t}function xt(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}function zt(t){return null!=t&&typeof t=="object"}function It(t){return typeof t=="symbol"||zt(t)&&"[object Symbol]"==$(t);
}function Et(t){return t?(t=Mt(t),t===Gt||t===-Gt?1.7976931348623157e308*(0>t?-1:1):t===t?t:0):0===t?t:0}function Ft(t){t=Et(t);var e=t%1;return t===t?e?t-e:t:0}function Mt(t){if(typeof t=="number")return t;if(It(t))return qt;if(xt(t)&&(t=typeof t.valueOf=="function"?t.valueOf():t,t=xt(t)?t+"":t),typeof t!="string")return 0===t?t:+t;t=t.replace(Qt,"");var e=te.test(t);return e||ne.test(t)?ie(t.slice(2),e?2:8):Zt.test(t)?qt:+t}function $t(t){return null==t?"":q(t)}function Bt(t,e,n){return t=null==t?Wt:F(t,e),
t===Wt?n:t}function Ut(t,e){var n;if(n=null!=t){n=t;var r;r=H(e,n);for(var o=-1,u=r.length,c=false;++o<u;){var i=_t(r[o]);if(!(c=null!=n&&null!=n&&i in Object(n)))break;n=n[i]}c||++o!=u?n=c:(u=null==n?0:n.length,n=!!u&&kt(u)&&bt(i,u)&&(_n(n)||vn(n)))}return n}function Dt(t){if(Ot(t))t=A(t);else if(yt(t)){var e,n=[];for(e in Object(t))Ae.call(t,e)&&"constructor"!=e&&n.push(e);t=n}else t=Pe(t);return t}function Tt(t){if(Ot(t))t=A(t,true);else if(xt(t)){var e,n=yt(t),r=[];for(e in t)("constructor"!=e||!n&&Ae.call(t,e))&&r.push(e);
t=r}else{if(e=[],null!=t)for(n in Object(t))e.push(n);t=e}return t}function Lt(t){return function(){return t}}function Pt(t){return t}function Nt(t){return N(typeof t=="function"?t:I(t,1))}function Ct(t){return pt(t)?l(_t(t)):G(t)}function Vt(){return[]}function Rt(){return false}var Wt,Gt=1/0,qt=NaN,Ht=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Jt=/^\w*$/,Kt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Qt=/^\s+|\s+$/g,Xt=/\\(\\)?/g,Yt=/\w*$/,Zt=/^[-+]0x[0-9a-f]+$/i,te=/^0b[01]+$/i,ee=/^\[object .+?Constructor\]$/,ne=/^0o[0-7]+$/i,re=/^(?:0|[1-9]\d*)$/,oe={};
oe["[object Float32Array]"]=oe["[object Float64Array]"]=oe["[object Int8Array]"]=oe["[object Int16Array]"]=oe["[object Int32Array]"]=oe["[object Uint8Array]"]=oe["[object Uint8ClampedArray]"]=oe["[object Uint16Array]"]=oe["[object Uint32Array]"]=true,oe["[object Arguments]"]=oe["[object Array]"]=oe["[object ArrayBuffer]"]=oe["[object Boolean]"]=oe["[object DataView]"]=oe["[object Date]"]=oe["[object Error]"]=oe["[object Function]"]=oe["[object Map]"]=oe["[object Number]"]=oe["[object Object]"]=oe["[object RegExp]"]=oe["[object Set]"]=oe["[object String]"]=oe["[object WeakMap]"]=false;
var ue={};ue["[object Arguments]"]=ue["[object Array]"]=ue["[object ArrayBuffer]"]=ue["[object DataView]"]=ue["[object Boolean]"]=ue["[object Date]"]=ue["[object Float32Array]"]=ue["[object Float64Array]"]=ue["[object Int8Array]"]=ue["[object Int16Array]"]=ue["[object Int32Array]"]=ue["[object Map]"]=ue["[object Number]"]=ue["[object Object]"]=ue["[object RegExp]"]=ue["[object Set]"]=ue["[object String]"]=ue["[object Symbol]"]=ue["[object Uint8Array]"]=ue["[object Uint8ClampedArray]"]=ue["[object Uint16Array]"]=ue["[object Uint32Array]"]=true,
ue["[object Error]"]=ue["[object Function]"]=ue["[object WeakMap]"]=false;var ce,ie=parseInt,ae=typeof global=="object"&&global&&global.Object===Object&&global,fe=typeof self=="object"&&self&&self.Object===Object&&window,le=window,se=typeof exports=="object"&&exports&&!exports.nodeType&&exports,be=se&&typeof module=="object"&&module&&!module.nodeType&&module,he=be&&be.exports===se,pe=he&&ae.process;t:{try{ce=pe&&pe.binding&&pe.binding("util");break t}catch(t){}ce=void 0}var ye=ce&&ce.isMap,je=ce&&ce.isSet,ve=ce&&ce.isTypedArray,_e=Array.prototype,ge=Object.prototype,de=le["__core-js_shared__"],me=Function.prototype.toString,Ae=ge.hasOwnProperty,we=function(){
var t=/[^.]+$/.exec(de&&de.keys&&de.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}(),Oe=ge.toString,Se=RegExp("^"+me.call(Ae).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),ke=he?le.Buffer:Wt,xe=le.Symbol,ze=le.Uint8Array,Ie=ke?ke.f:Wt,Ee=p(Object.getPrototypeOf),Fe=Object.create,Me=ge.propertyIsEnumerable,$e=_e.splice,Be=xe?xe.isConcatSpreadable:Wt,Ue=xe?xe.toStringTag:Wt,De=function(){try{var t=at(Object,"defineProperty");
return t({},"",{}),t}catch(t){}}(),Te=Object.getOwnPropertySymbols,Le=ke?ke.isBuffer:Wt,Pe=p(Object.keys),Ne=Math.max,Ce=Math.min,Ve=Date.now,Re=at(le,"DataView"),We=at(le,"Map"),Ge=at(le,"Promise"),qe=at(le,"Set"),He=at(le,"WeakMap"),Je=at(Object,"create"),Ke=gt(Re),Qe=gt(We),Xe=gt(Ge),Ye=gt(qe),Ze=gt(He),tn=xe?xe.prototype:Wt,en=tn?tn.valueOf:Wt,nn=tn?tn.toString:Wt,rn=function(){function t(){}return function(e){return xt(e)?Fe?Fe(e):(t.prototype=e,e=new t,t.prototype=Wt,e):{}}}();v.prototype.clear=function(){
this.__data__=Je?Je(null):{},this.size=0},v.prototype.delete=function(t){return t=this.has(t)&&delete this.__data__[t],this.size-=t?1:0,t},v.prototype.get=function(t){var e=this.__data__;return Je?(t=e[t],"__lodash_hash_undefined__"===t?Wt:t):Ae.call(e,t)?e[t]:Wt},v.prototype.has=function(t){var e=this.__data__;return Je?e[t]!==Wt:Ae.call(e,t)},v.prototype.set=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=Je&&e===Wt?"__lodash_hash_undefined__":e,this},_.prototype.clear=function(){
this.__data__=[],this.size=0},_.prototype.delete=function(t){var e=this.__data__;return t=O(e,t),!(0>t)&&(t==e.length-1?e.pop():$e.call(e,t,1),--this.size,true)},_.prototype.get=function(t){var e=this.__data__;return t=O(e,t),0>t?Wt:e[t][1]},_.prototype.has=function(t){return-1<O(this.__data__,t)},_.prototype.set=function(t,e){var n=this.__data__,r=O(n,t);return 0>r?(++this.size,n.push([t,e])):n[r][1]=e,this},g.prototype.clear=function(){this.size=0,this.__data__={hash:new v,map:new(We||_),string:new v
}},g.prototype.delete=function(t){return t=ct(this,t).delete(t),this.size-=t?1:0,t},g.prototype.get=function(t){return ct(this,t).get(t)},g.prototype.has=function(t){return ct(this,t).has(t)},g.prototype.set=function(t,e){var n=ct(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this},d.prototype.add=d.prototype.push=function(t){return this.__data__.set(t,"__lodash_hash_undefined__"),this},d.prototype.has=function(t){return this.__data__.has(t)},m.prototype.clear=function(){this.__data__=new _,
this.size=0},m.prototype.delete=function(t){var e=this.__data__;return t=e.delete(t),this.size=e.size,t},m.prototype.get=function(t){return this.__data__.get(t)},m.prototype.has=function(t){return this.__data__.has(t)},m.prototype.set=function(t,e){var n=this.__data__;if(n instanceof _){var r=n.__data__;if(!We||199>r.length)return r.push([t,e]),this.size=++n.size,this;n=this.__data__=new g(r)}return n.set(t,e),this.size=n.size,this};var on=function(t,e){return function(n,r){if(null==n)return n;if(!Ot(n))return t(n,r);
for(var o=n.length,u=e?o:-1,c=Object(n);(e?u--:++u<o)&&false!==r(c[u],u,c););return n}}(function(t,e){return t&&un(t,e,Dt)}),un=function(t){return function(e,n,r){var o=-1,u=Object(e);r=r(e);for(var c=r.length;c--;){var i=r[t?c:++o];if(false===n(u[i],i,u))break}return e}}(),cn=De?function(t,e){return De(t,"toString",{configurable:true,enumerable:false,value:Lt(e),writable:true})}:Pt,an=Te?function(t){return null==t?[]:(t=Object(t),o(Te(t),function(e){return Me.call(t,e)}))}:Vt,fn=Te?function(t){for(var e=[];t;)c(e,an(t)),
t=Ee(t);return e}:Vt,ln=$;(Re&&"[object DataView]"!=ln(new Re(new ArrayBuffer(1)))||We&&"[object Map]"!=ln(new We)||Ge&&"[object Promise]"!=ln(Ge.resolve())||qe&&"[object Set]"!=ln(new qe)||He&&"[object WeakMap]"!=ln(new He))&&(ln=function(t){var e=$(t);if(t=(t="[object Object]"==e?t.constructor:Wt)?gt(t):"")switch(t){case Ke:return"[object DataView]";case Qe:return"[object Map]";case Xe:return"[object Promise]";case Ye:return"[object Set]";case Ze:return"[object WeakMap]"}return e});var sn=function(t){
var e=0,n=0;return function(){var r=Ve(),o=16-(r-n);if(n=r,0<o){if(800<=++e)return arguments[0]}else e=0;return t.apply(Wt,arguments)}}(cn),bn=function(t){t=At(t,function(t){return 500===e.size&&e.clear(),t});var e=t.cache;return t}(function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(Kt,function(t,n,r,o){e.push(r?o.replace(Xt,"$1"):n||t)}),e}),hn=tt(dt),pn=tt(mt),yn=function(t,e){return function(r,o){var u=_n(r)?n:S,c=e?e():{};return u(r,t,ut(o,2),c)}}(function(t,e,n){Ae.call(t,n)?t[n].push(e):z(t,n,[e]);
}),jn=function(t,e){return sn(vt(t,e,Pt),t+"")}(function(t,e){if(null==t)return[];var n=e.length;return 1<n&&ht(t,e[0],e[1])?e=[]:2<n&&ht(e[0],e[1],e[2])&&(e=[e[0]]),W(t,E(e,1))});At.Cache=g;var vn=B(function(){return arguments}())?B:function(t){return zt(t)&&Ae.call(t,"callee")&&!Me.call(t,"callee")},_n=Array.isArray,gn=Le||Rt,dn=ye?b(ye):D,mn=je?b(je):L,An=ve?b(ve):P;j.constant=Lt,j.debounce=function(e,n,r){function o(t){var n=f,r=l;return f=l=Wt,y=t,b=e.apply(r,n)}function u(t){var e=t-p;return t-=y,
p===Wt||e>=n||0>e||v&&t>=s}function c(){var e=t();if(u(e))return i(e);var r,o=setTimeout;r=e-y,e=n-(e-p),r=v?Ce(e,s-r):e,h=o(c,r)}function i(t){return h=Wt,_&&f?o(t):(f=l=Wt,b)}function a(){var e=t(),r=u(e);if(f=arguments,l=this,p=e,r){if(h===Wt)return y=e=p,h=setTimeout(c,n),j?o(e):b;if(v)return h=setTimeout(c,n),o(p)}return h===Wt&&(h=setTimeout(c,n)),b}var f,l,s,b,h,p,y=0,j=false,v=false,_=true;if(typeof e!="function")throw new TypeError("Expected a function");return n=Mt(n)||0,xt(r)&&(j=!!r.leading,s=(v="maxWait"in r)?Ne(Mt(r.maxWait)||0,n):s,
_="trailing"in r?!!r.trailing:_),a.cancel=function(){h!==Wt&&clearTimeout(h),y=0,f=p=l=h=Wt},a.flush=function(){return h===Wt?b:i(t())},a},j.groupBy=yn,j.iteratee=Nt,j.keys=Dt,j.keysIn=Tt,j.memoize=At,j.property=Ct,j.sortBy=jn,j.eq=wt,j.find=hn,j.findIndex=dt,j.findLast=pn,j.findLastIndex=mt,j.get=Bt,j.hasIn=Ut,j.identity=Pt,j.indexOf=function(t,e,n){var r=null==t?0:t.length;if(!r)return-1;if(n=null==n?0:Ft(n),0>n&&(n=Ne(r+n,0)),e===e)t:{for(r=n-1,n=t.length;++r<n;)if(t[r]===e){t=r;break t}t=-1}else t=a(t,f,n);
return t},j.isArguments=vn,j.isArray=_n,j.isArrayLike=Ot,j.isBuffer=gn,j.isFunction=St,j.isLength=kt,j.isMap=dn,j.isObject=xt,j.isObjectLike=zt,j.isSet=mn,j.isSymbol=It,j.isTypedArray=An,j.stubArray=Vt,j.stubFalse=Rt,j.now=t,j.toFinite=Et,j.toInteger=Ft,j.toNumber=Mt,j.toString=$t,j.VERSION="4.17.5",typeof define=="function"&&typeof define.amd=="object"&&define.amd?(le._=j, define(function(){return j})):be?((be.exports=j)._=j,se._=j):le._=j}).call(this);

//To link lodash methods
var _ = this._
/*!
 *  opentok-angular (https://github.com/aullman/OpenTok-Angular)
 *
 *  Angular module for OpenTok
 *
 *  @Author: Adam Ullman (http://github.com/aullman)
 *  @Copyright (c) 2014 Adam Ullman
 *  @License: Released under the MIT license (http://opensource.org/licenses/MIT)
 **/

angular.module('opentok', [])
  .constant('TB', window.OT)
  .provider('OTConfig', function () {
    var _apiKey;
    return {
      setKey: function (value) {
        _apiKey = value;
      },
      $get: function () {
        return {
          apiKey: _apiKey
        };
      }
    };
  })
  .factory('OTSession', ['TB', '$rootScope', '$q', 'OTConfig', '$log', '$timeout',
    function (TB, $rootScope, $q, OTConfig, $log, $timeout) {
      if (!OTConfig.apiKey) throw new Error('You need to specify api key');
      //OT.setLogLevel(OT.DEBUG);
      var OTSession = {
        streams: [],
        uniqueStreams: {
          camera: [],
          screen: []
        },
        connections: [],
        subscribers: [],
        publisher: null,
        screensharePublisher: null,
        ui: {
          hasAudio: true,
          hasVideo: true
        },
        init: function (sessionId, token) {
          this.session = TB.initSession(OTConfig.apiKey, sessionId);

          OTSession.session.on({
            sessionConnected: function (event) {
              $log.debug('OTSession:sessionConnected', event);
              OTSession.publisher && OTSession.session.publish(OTSession.publisher);
            },
            streamCreated: function (event) {
              $log.debug('OTSession:streamCreated', event);
              OTSession.streams.push(event.stream);
              OTSession.uniqueStreams.screen = OTSession.getUniqueStreams('screen');
              OTSession.uniqueStreams.camera = OTSession.getUniqueStreams('camera');
              $rootScope.$digest();
            },
            streamDestroyed: function (event) {
              $log.debug('OTSession:streamDestroyed', event);
              OTSession.streams.splice(OTSession.streams.indexOf(event.stream), 1);
              OTSession.uniqueStreams.screen.splice(OTSession.uniqueStreams.screen.indexOf(event.stream), 1);
              OTSession.uniqueStreams.camera.splice(OTSession.uniqueStreams.camera.indexOf(event.stream), 1);
              OTSession.uniqueStreams.screen = OTSession.getUniqueStreams('screen');
              OTSession.uniqueStreams.camera = OTSession.getUniqueStreams('camera');
              $rootScope.$digest();
            },
            sessionDisconnected: function (event) {
              $log.debug('OTSession:sessionDisconnected', event);
              $rootScope.$apply(function () {
                OTSession.streams.splice(0, OTSession.streams.length);
                OTSession.uniqueStreams.screen.splice(0, OTSession.uniqueStreams.screen.length);
                OTSession.uniqueStreams.camera.splice(0, OTSession.uniqueStreams.camera.length);
                OTSession.connections.splice(0, OTSession.connections.length);
                OTSession.resetPublishers();
                OTSession.off();
                OTSession.session = null;
              });
            },
            connectionCreated: function (event) {
              $log.debug('OTSession:connectionCreated', event);
              OTSession.connections.push(event.connection);
              $rootScope.$digest();
            },
            connectionDestroyed: function (event) {
              $log.debug('OTSession:connectionDestroyed', event);
              OTSession.connections.splice(OTSession.connections.indexOf(event.connection), 1);
              $rootScope.$digest();
            }
          });
          OTSession.trigger('init');
          return $q(function (resolve, reject) {
            OTSession.session.connect(token, function (err) {
              if (err) return reject(err);
              resolve(OTSession.session);
            });
          });
        },
        initPublisher: function (element, properties, cb) {
          return TB.initPublisher(OTConfig.apiKey, element, properties, cb);
        },
        isSessionConnected: function () {
          return this.session && (this.session.connected ||
            (this.session.isConnected && this.session.isConnected()));
        },
        listen: function (listeners, targetSelf) {
          Object.keys(listeners).forEach(function (key) {
            OTSession.session.on(key, function (event) {
              listeners[key].call(targetSelf, event);
            });
          });
        },
        togglePublishersAudio: function (condition) {
          OTSession.ui.hasAudio = typeof condition === 'boolean' ? condition : !OTSession.ui.hasAudio;
          OTSession.publisher && OTSession.publisher.publishAudio(OTSession.ui.hasAudio);
        },
        togglePublishersVideo: function (condition) {
          OTSession.ui.hasVideo = typeof condition === 'boolean' ? condition : !OTSession.ui.hasVideo;
          OTSession.publisher && OTSession.publisher.publishVideo(OTSession.ui.hasVideo);
        },
        resetPublishers: function () {
          OTSession.togglePublishersAudio(true);
          OTSession.togglePublishersVideo(true);
        },
        getUniqueStreams: function (preferred) {
          var groups = _.groupBy(OTSession.streams, 'connection.id');
          return Object.keys(groups).map(function (key) {
            var streamGroup = groups[key];
            return _.find(streamGroup, {videoType: preferred});
          }).filter(function(stream) {
            return !!stream;
          });
        },
        disconnect: function () {
          if (!OTSession.isSessionConnected()) return;
          if (OTSession.publisher) OTSession.session.unpublish(OTSession.publisher);
          OTSession.session.disconnect();
        }
      };
      window.OTSession = OTSession;
      var helpers = window.OTHelpers || window.OT.$ || window.TB.$;
      if(helpers && helpers.eventing) helpers.eventing(OTSession);
      return OTSession;
    }
  ])
  .factory('OTDirectivesHelpers', [function () {
    return {
      volumeLevels: [
        {level: 0, name: 'volume-low'},
        {level: 0.3, name: 'volume-medium'},
        {level: 0.85, name: 'volume-high'}
      ],
      getVolumeLevelChanges: function () {
        var movingAvg = null;
        return function (event) {
          if (movingAvg === null || movingAvg <= event.audioLevel) {
            movingAvg = event.audioLevel;
          } else {
            movingAvg = 0.7 * movingAvg + 0.3 * event.audioLevel;
          }
          // 1.5 scaling to map the -30 - 0 dBm range to [0,1]
          var logLevel = (Math.log(movingAvg) / Math.LN10) / 1.5 + 1;
          return Math.min(Math.max(logLevel, 0), 1);
        }
      },
      setVolumeLevelChanges: function (element, callback) {
        var _this = this;
        var volumeNames = this.volumeLevels.map(function (level) {
          return level.name;
        }).join(' ');

        element.removeClass(volumeNames);
        var getVolumeMethod = this.getVolumeLevelChanges();

        var sum = 0;
        var count = 0;
        var previousLevel;
        return function (event) {
          sum += getVolumeMethod(event);
          count++;
          if (count !== 30) return;
          var average = sum / count;
          sum = count = 0;

          var volume = _.findLast(_this.volumeLevels, function (volumeLevel) {
            return average >= volumeLevel.level;
          });
          if (!volume) {
            console.log('!volume', {
              average: average,
              volumeLevels: _this.volumeLevels
            });
            return;
          }
          var currentLevel = volume.name;
          callback && callback(currentLevel);
          if (previousLevel === currentLevel) return;
          previousLevel = currentLevel;
          element.removeClass(volumeNames);
          element.addClass(currentLevel);
        };
      }
    }
  }])
  .directive('otLayout', ['$window', '$parse', 'TB', 'OTSession', function ($window, $parse, TB, OTSession) {
    return {
      restrict: 'E',
      link: function (scope, element, attrs) {
        var props = $parse(attrs.props)();
        var container = $window.initLayoutContainer(element[0], props);
        var layout = function () {
          container.layout();
          scope.$emit('otLayoutComplete');
        };
        scope.$watch(function () {
          return element.children().length;
        }, layout);
        $window.addEventListener('resize', layout);
        scope.$on('otLayout', layout);
        var listenForStreamChange = function listenForStreamChange() {
          OTSession.session.on('streamPropertyChanged', function (event) {
            if (event.changedProperty === 'videoDimensions') layout();
          });
        };
        if (OTSession.session) return listenForStreamChange();
        OTSession.on('init', listenForStreamChange);
      }
    };
  }])
  .directive('otPublisher', [
    '$rootScope', 'OTSession', 'OTDirectivesHelpers',
    function ($rootScope, OTSession, OTDirectivesHelpers) {
      function accessDialogEvents(publisher) {
        var previousEvent;
        [
          'accessAllowed',
          'accessDenied',
          'accessDialogClosed',
          'accessDialogOpened'
        ].forEach(function (event) {
            publisher.on(event, function () {
              if (previousEvent === 'accessDenied' && event === 'accessDialogOpened') return;
              previousEvent = event;
              $rootScope.$emit(event);
            });
          });
      }

      return {
        restrict: 'E',
        scope: {
          props: '&'
        },
        link: function (scope, element) {
          var props = scope.props() || {};
          props.width = props.width || element[0].offsetWidth;
          props.height = props.height || element[0].offsetHeight;
          var oldChildren = angular.element(element).children();
          scope.publisher = OTSession.initPublisher(element[0], props, function(err) {
            if (err) {
                $rootScope.$emit('otPublisherError', err, scope.publisher);
              }
          });
          // Make transcluding work manually by putting the children back in there
          angular.element(element).append(oldChildren);
          accessDialogEvents(scope.publisher);
          scope.publisher.on('loaded', function () {
            scope.publisher.on('audioLevelUpdated', OTDirectivesHelpers.setVolumeLevelChanges(element));
          });
          scope.$on('$destroy', function () {
            scope.publisher.destroy();
            //if (OTSession.session) {
            //  OTSession.session.unpublish(scope.publisher);
            //} else {
            //
            //}
            OTSession.publisher = scope.publisher = null;
          });
          if (OTSession.isSessionConnected()) {
            OTSession.session.publish(scope.publisher);
          } else {
            scope.publisher.on('streamDestroyed', function (event) {
              event.preventDefault();
            });
          }
          OTSession.publisher = scope.publisher;
        }
      };
    }])
  .directive('otScreenPublisher', [
    '$rootScope', 'OTSession', 'OTDirectivesHelpers', '$log',
    function ($rootScope, OTSession, OTDirectivesHelpers, $log) {
      return {
        restrict: 'E',
        scope: {
          props: '&'
        },
        link: function (scope, element) {
          var screensharePublisher;
          var props = angular.extend({
            //name: 'Screen',
            mirror: false,
            audioSource: null,
            videoSource: 'screen',
            maxResolution: {width: 1280, height: 720},
            width: element[0].offsetWidth,
            height: element[0].offsetHeight
          }, scope.props() || {});
          var oldChildren = angular.element(element).children();
          screensharePublisher = OTSession.initPublisher(element[0], props, function (err) {
            if (err) return $rootScope.$emit('otScreenPublisher:error', err);
          });
          angular.element(element).append(oldChildren);
          scope.$on('$destroy', function () {
            if (OTSession.session) {
              OTSession.session.unpublish(screensharePublisher);
            } else {
              screensharePublisher.destroy();
            }
            OTSession.screensharePublisher = screensharePublisher = null;
          });
          if (OTSession.publisher) {
            OTSession.publisher.on('audioLevelUpdated', OTDirectivesHelpers.setVolumeLevelChanges(element));
          }
          if (OTSession.isSessionConnected()) {
            OTSession.session.publish(screensharePublisher);
          }
          screensharePublisher.on('streamDestroyed', function (event) {
            $rootScope.$emit('TB:screenPublisher:streamDestroyed', event);
          });
          OTSession.screensharePublisher = screensharePublisher;
        }
      };
    }])
    .directive('otActiveCallerLayout', ['OTDirectivesHelpers', function (OTDirectivesHelpers) {
      return {
        restrict: 'EA',
        link: function (scope) {
          var ranking = [];
          var lastWinner;
          var selectWinner = _.debounce(function () {
            lastWinner && lastWinner.removeClass('ot-active');
            var winner = _.sortBy(ranking, 'score').pop();
            lastWinner = winner && winner.element.addClass('ot-active');
            ranking = [];
          }, 500);
          scope.$on('subscriber:volumeLevel', function ($event, targetElement, level) {
            var current = _.find(ranking, 'element', targetElement);
            if (!current) {
              current = {element: targetElement, score: 0};
              ranking.push(current);
            }
            var volumeLevels = OTDirectivesHelpers.volumeLevels;
            current.score += _.indexOf(volumeLevels, _.find(volumeLevels, 'name', level));
            selectWinner();
          });
        }
      };
    }])
  .directive('otSubscriber', [
    'OTSession', 'OTDirectivesHelpers',
    function (OTSession, OTDirectivesHelpers) {
      return {
        restrict: 'E',
        scope: {
          stream: '=',
          props: '&'
        },
        link: function (scope, element) {
          if (!scope.stream) debugger;
          element.addClass('ot-' + scope.stream.videoType);
          var props = scope.props() || {};
          props.width = props.width || element[0].offsetWidth;
          props.height = props.height || element[0].offsetHeight;
          var oldChildren = element.children();
          var subscriber = OTSession.session.subscribe(scope.stream, element[0], props, function (err) {
            if (err) scope.$emit('otSubscriberError', err, subscriber);
          });
          subscriber.on('loaded', function () {
            OTSession.subscribers.push(subscriber);
            scope.$emit(scope, 'otLayout');
            subscriber.on('audioLevelUpdated', function(event) {
              if(event.audioLevel < 0.1) return;
              scope.$emit('subscriber:audioLevelUpdated', event);
            });
            subscriber.on('audioLevelUpdated', OTDirectivesHelpers.setVolumeLevelChanges(element, function (level) {
              scope.$emit('subscriber:volumeLevel', element, level);
            }));
          });
          // Make transcluding work manually by putting the children back in there
          angular.element(element).append(oldChildren);
          scope.$on('$destroy', function () {
            OTSession.subscribers.splice(OTSession.subscribers.indexOf(subscriber), 1);
            OTSession.session && OTSession.session.unsubscribe(subscriber);
          });
        }
      };
    }]);
