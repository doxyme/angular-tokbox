/**
 * @license
 * lodash 3.10.1 (Custom Build) lodash.com/license | Underscore.js 1.8.3 underscorejs.org/LICENSE
 * Build: `lodash exports="none" iife="var _;(function(){%output%; _ " include="groupBy,find,findLast,debounce,sortBy,indexOf" -p -o ./.tmp/lodash-custom.min.js`
 */
;var _;
(function(){function Ua(a,b){var c;a:{c=a.a;var d=b.a;if(c!==d){var e=null===c,f=c===r,g=c===c,h=null===d,k=d===r,m=d===d;if(c>d&&!h||!g||e&&!k&&m||f&&m){c=1;break a}if(c<d&&!e||!m||h&&!f&&g||k&&g){c=-1;break a}}c=0}return c||a.b-b.b}function B(a){return!!a&&typeof a=="object"}function n(){}function Va(a,b){var c=-1,d=a.length;for(b||(b=Array(d));++c<d;)b[c]=a[c];return b}function ra(a,b){for(var c=-1,d=a.length;++c<d&&false!==b(a[c],c,a););return a}function Wa(a,b){for(var c=-1,d=a.length;++c<d;)if(b(a[c],
c,a))return true;return false}function Xa(a,b){var c;if(null==b)c=a;else{c=C(b);var d=a;d||(d={});for(var e=-1,f=c.length;++e<f;){var g=c[e];d[g]=b[g]}c=d}return c}function sa(a,b,c){var d=typeof a;return"function"==d?b===r?a:Ya(a,b,c):null==a?P:"object"==d?ta(a):b===r?ua(a):Za(a,b)}function va(a,b,c,d,e,f,g){var h;c&&(h=e?c(a,d,e):c(a));if(h!==r)return h;if(!w(a))return a;if(d=v(a)){if(h=$a(a),!b)return Va(a,h)}else{var k=A.call(a),m=k==H;if(k==t||k==I||m&&!e){if(Q(a))return e?a:{};h=ab(m?{}:a);if(!b)return Xa(h,
a)}else return p[k]?bb(a,k,b):e?a:{}}f||(f=[]);g||(g=[]);for(e=f.length;e--;)if(f[e]==a)return g[e];f.push(a);g.push(h);(d?ra:wa)(a,function(d,e){h[e]=va(d,b,c,e,a,f,g)});return h}function cb(a,b,c,d){var e;c(a,function(a,c,h){if(b(a,c,h))return e=d?c:a,false});return e}function wa(a,b){return db(a,b,C)}function xa(a,b,c){if(null!=a){a=x(a);c!==r&&c in a&&(b=[c]);c=0;for(var d=b.length;null!=a&&c<d;)a=x(a)[b[c++]];return c&&c==d?a:r}}function ha(a,b,c,d,e,f){if(a===b)return true;if(null==a||null==b||!w(a)&&
!B(b))return a!==a&&b!==b;a:{var g=ha,h=v(a),k=v(b),m=E,l=E;h||(m=A.call(a),m==I?m=t:m!=t&&(h=ia(a)));k||(l=A.call(b),l==I?l=t:l!=t&&ia(b));var r=m==t&&!Q(a),k=l==t&&!Q(b),l=m==l;if(!l||h||r){if(!d&&(m=r&&u.call(a,"__wrapped__"),k=k&&u.call(b,"__wrapped__"),m||k)){a=g(m?a.value():a,k?b.value():b,c,d,e,f);break a}if(l){e||(e=[]);f||(f=[]);for(m=e.length;m--;)if(e[m]==a){a=f[m]==b;break a}e.push(a);f.push(b);a=(h?eb:fb)(a,b,g,c,d,e,f);e.pop();f.pop()}else a=false}else a=gb(a,b,m)}return a}function hb(a,
b,c){var d=b.length,e=d,f=!c;if(null==a)return!e;for(a=x(a);d--;){var g=b[d];if(f&&g[2]?g[1]!==a[g[0]]:!(g[0]in a))return false}for(;++d<e;){var g=b[d],h=g[0],k=a[h],m=g[1];if(f&&g[2]){if(k===r&&!(h in a))return false}else if(g=c?c(k,m,h):r,g===r?!ha(m,k,c,true):!g)return false}return true}function ib(a,b){var c=-1,d=R(a)?Array(a.length):[];ja(a,function(a,f,g){d[++c]=b(a,f,g)});return d}function ta(a){var b=jb(a);if(1==b.length&&b[0][2]){var c=b[0][0],d=b[0][1];return function(a){if(null==a)return false;a=x(a);return a[c]===
d&&(d!==r||c in a)}}return function(a){return hb(a,b)}}function Za(a,b){var c=v(a),d=ya(a)&&b===b&&!w(b),e=a+"";a=za(a);return function(f){if(null==f)return false;var g=e;f=x(f);if(!(!c&&d||g in f)){if(1!=a.length){var g=a,h=0,k=-1,m=-1,l=g.length,h=null==h?0:+h||0;0>h&&(h=-h>l?0:l+h);k=k===r||k>l?l:+k||0;0>k&&(k+=l);l=h>k?0:k-h>>>0;h>>>=0;for(k=Array(l);++m<l;)k[m]=g[m+h];f=xa(f,k)}if(null==f)return false;g=Aa(a);f=x(f)}return f[g]===b?b!==r||g in f:ha(b,f[g],r,true)}}function Ba(a){return function(b){return null==
b?r:x(b)[a]}}function kb(a){var b=a+"";a=za(a);return function(c){return xa(c,a,b)}}function lb(a,b){var c=a.length;for(a.sort(b);c--;)a[c]=a[c].c;return a}function Ya(a,b,c){if(typeof a!="function")return P;if(b===r)return a;switch(c){case 1:return function(c){return a.call(b,c)};case 3:return function(c,e,f){return a.call(b,c,e,f)};case 4:return function(c,e,f,g){return a.call(b,c,e,f,g)};case 5:return function(c,e,f,g,h){return a.call(b,c,e,f,g,h)}}return function(){return a.apply(b,arguments)}}
function Ca(a){var b=new mb(a.byteLength);(new ka(b)).set(new ka(a));return b}function Da(a,b){return function(c,d){var e=c?Ea(c):0;if(!F(e))return a(c,d);for(var f=b?e:-1,g=x(c);(b?f--:++f<e)&&false!==d(g[f],f,g););return c}}function Fa(a){return function(b,c,d){var e=x(b);d=d(b);for(var f=d.length,g=a?f:-1;a?g--:++g<f;){var h=d[g];if(false===c(e[h],h,e))break}return b}}function Ga(a,b){return function(c,d,e){d=la(d,e,3);if(v(c)){a:{e=c.length;for(var f=b?e:-1;b?f--:++f<e;)if(d(c[f],f,c)){d=f;break a}d=
-1}return-1<d?c[d]:r}return cb(c,d,a)}}function eb(a,b,c,d,e,f,g){var h=-1,k=a.length,m=b.length;if(k!=m&&!(e&&m>k))return false;for(;++h<k;){var l=a[h],m=b[h],n=d?d(e?m:l,e?l:m,h):r;if(n!==r){if(n)continue;return false}if(e){if(!Wa(b,function(a){return l===a||c(l,a,d,e,f,g)}))return false}else if(l!==m&&!c(l,m,d,e,f,g))return false}return true}function gb(a,b,c){switch(c){case J:case K:return+a==+b;case L:return a.name==b.name&&a.message==b.message;case M:return a!=+a?b!=+b:a==+b;case N:case D:return a==b+""}return false}
function fb(a,b,c,d,e,f,g){var h=C(a),k=h.length,m=C(b).length;if(k!=m&&!e)return false;for(m=k;m--;){var l=h[m];if(!(e?l in b:u.call(b,l)))return false}for(var n=e;++m<k;){var l=h[m],p=a[l],q=b[l],s=d?d(e?q:p,e?p:q,l):r;if(s===r?!c(p,q,d,e,f,g):!s)return false;n||(n="constructor"==l)}return n||(c=a.constructor,d=b.constructor,!(c!=d&&"constructor"in a&&"constructor"in b)||typeof c=="function"&&c instanceof c&&typeof d=="function"&&d instanceof d)?true:false}function la(a,b,c){var d=n.callback||S,d=d===S?sa:d;return c?
d(a,b,c):d}function jb(a){a=Ha(a);for(var b=a.length;b--;){var c=a[b],d;d=a[b][1];d=d===d&&!w(d);c[2]=d}return a}function ma(a,b){var c=null==a?r:a[b];return Ia(c)?c:r}function $a(a){var b=a.length,c=new a.constructor(b);b&&"string"==typeof a[0]&&u.call(a,"index")&&(c.index=a.index,c.input=a.input);return c}function ab(a){a=a.constructor;typeof a=="function"&&a instanceof a||(a=Object);return new a}function bb(a,b,c){var d=a.constructor;switch(b){case na:return Ca(a);case J:case K:return new d(+a);
case T:case U:case V:case W:case X:case Y:case Z:case $:case aa:return d instanceof d&&(d=y[b]),b=a.buffer,new d(c?Ca(b):b,a.byteOffset,a.length);case M:case D:return new d(a);case N:var e=new d(a.source,nb.exec(a));e.lastIndex=a.lastIndex}return e}function R(a){return null!=a&&F(Ea(a))}function oa(a,b){a=typeof a=="number"||ob.test(a)?+a:-1;b=null==b?Ja:b;return-1<a&&0==a%1&&a<b}function Ka(a,b,c){if(!w(c))return false;var d=typeof b;return("number"==d?R(c)&&oa(b,c.length):"string"==d&&b in c)?(b=c[b],
a===a?a===b:b!==b):false}function ya(a,b){var c=typeof a;return"string"==c&&pb.test(a)||"number"==c?true:v(a)?false:!qb.test(a)||null!=b&&a in x(b)}function F(a){return typeof a=="number"&&-1<a&&0==a%1&&a<=Ja}function La(a){for(var b=Ma(a),c=b.length,d=c&&a.length,e=!!d&&F(d)&&(v(a)||pa(a)||ba(a)),f=-1,g=[];++f<c;){var h=b[f];(e&&oa(h,d)||u.call(a,h))&&g.push(h)}return g}function x(a){if(n.support.unindexedChars&&ba(a)){for(var b=-1,c=a.length,d=Object(a);++b<c;)d[b]=a.charAt(b);return d}return w(a)?a:Object(a)}
function za(a){if(v(a))return a;var b=[];(null==a?"":a+"").replace(rb,function(a,d,e,f){b.push(e?f.replace(sb,"$1"):d||a)});return b}function Aa(a){var b=a?a.length:0;return b?a[b-1]:r}function pa(a){return B(a)&&R(a)&&u.call(a,"callee")&&!ca.call(a,"callee")}function da(a){return w(a)&&A.call(a)==H}function w(a){var b=typeof a;return!!a&&("object"==b||"function"==b)}function Ia(a){return null==a?false:da(a)?Na.test(Oa.call(a)):B(a)&&(Q(a)?Na:tb).test(a)}function ba(a){return typeof a=="string"||B(a)&&
A.call(a)==D}function ia(a){return B(a)&&F(a.length)&&!!q[A.call(a)]}function Ma(a){if(null==a)return[];w(a)||(a=Object(a));for(var b=a.length,c=n.support,b=b&&F(b)&&(v(a)||pa(a)||ba(a))&&b||0,d=a.constructor,e=-1,d=da(d)&&d.prototype||G,f=d===a,g=Array(b),h=0<b,k=c.enumErrorProps&&(a===ea||a instanceof Error),m=c.enumPrototypes&&da(a);++e<b;)g[e]=e+"";for(var l in a)m&&"prototype"==l||k&&("message"==l||"name"==l)||h&&oa(l,b)||"constructor"==l&&(f||!u.call(a,l))||g.push(l);if(c.nonEnumShadows&&a!==
G)for(b=a===ub?D:a===ea?L:A.call(a),c=s[b]||s[t],b==t&&(d=G),b=qa.length;b--;)l=qa[b],e=c[l],f&&e||(e?!u.call(a,l):a[l]===d[l])||g.push(l);return g}function Ha(a){a=x(a);for(var b=-1,c=C(a),d=c.length,e=Array(d);++b<d;){var f=c[b];e[b]=[f,a[f]]}return e}function S(a,b,c){c&&Ka(a,b,c)&&(b=r);return B(a)?Pa(a):sa(a,b)}function P(a){return a}function Pa(a){return ta(va(a,true))}function ua(a){return ya(a)?Ba(a):kb(a)}var r,I="[object Arguments]",E="[object Array]",J="[object Boolean]",K="[object Date]",
L="[object Error]",H="[object Function]",M="[object Number]",t="[object Object]",N="[object RegExp]",D="[object String]",na="[object ArrayBuffer]",T="[object Float32Array]",U="[object Float64Array]",V="[object Int8Array]",W="[object Int16Array]",X="[object Int32Array]",Y="[object Uint8Array]",Z="[object Uint8ClampedArray]",$="[object Uint16Array]",aa="[object Uint32Array]",qb=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\n\\]|\\.)*?\1)\]/,pb=/^\w*$/,rb=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\n\\]|\\.)*?)\2)\]/g,
sb=/\\(\\)?/g,nb=/\w*$/,tb=/^\[object .+?Constructor\]$/,ob=/^\d+$/,qa="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),q={};q[T]=q[U]=q[V]=q[W]=q[X]=q[Y]=q[Z]=q[$]=q[aa]=true;q[I]=q[E]=q[na]=q[J]=q[K]=q[L]=q[H]=q["[object Map]"]=q[M]=q[t]=q[N]=q["[object Set]"]=q[D]=q["[object WeakMap]"]=false;var p={};p[I]=p[E]=p[na]=p[J]=p[K]=p[T]=p[U]=p[V]=p[W]=p[X]=p[M]=p[t]=p[N]=p[D]=p[Y]=p[Z]=p[$]=p[aa]=true;p[L]=p[H]=p["[object Map]"]=p["[object Set]"]=p["[object WeakMap]"]=
!1;var fa={"function":true,object:true},vb=fa[typeof module]&&module&&!module.nodeType&&module,wb=fa[typeof self]&&self&&self.Object&&self,Qa=fa[typeof window]&&window&&window.Object&&window,z=fa[typeof exports]&&exports&&!exports.nodeType&&exports&&vb&&typeof global=="object"&&global&&global.Object&&global||Qa!==(this&&this.window)&&Qa||wb||this,Q=function(){try{Object({toString:0}+"")}catch(a){return function(){return false}}return function(a){return typeof a.toString!="function"&&typeof(a+"")=="string"}}(),
xb=Array.prototype,ea=Error.prototype,G=Object.prototype,ub=String.prototype,Oa=Function.prototype.toString,u=G.hasOwnProperty,A=G.toString,Na=RegExp("^"+Oa.call(u).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),mb=z.ArrayBuffer,ca=G.propertyIsEnumerable,yb=xb.splice,ka=z.Uint8Array,zb=Math.floor,Ab=ma(Array,"isArray"),Ra=ma(Object,"keys"),Sa=Math.max,Bb=Math.min,Cb=ma(Date,"now"),Ja=9007199254740991,y={};y[T]=z.Float32Array;y[U]=
z.Float64Array;y[V]=z.Int8Array;y[W]=z.Int16Array;y[X]=z.Int32Array;y[Y]=ka;y[Z]=z.Uint8ClampedArray;y[$]=z.Uint16Array;y[aa]=z.Uint32Array;var s={};s[E]=s[K]=s[M]={constructor:true,toLocaleString:true,toString:true,valueOf:true};s[J]=s[D]={constructor:true,toString:true,valueOf:true};s[L]=s[H]=s[N]={constructor:true,toString:true};s[t]={constructor:true};ra(qa,function(a){for(var b in s)if(u.call(s,b)){var c=s[b];c[a]=u.call(c,a)}});var O=n.support={};(function(a){var b=function(){this.x=a},c={0:a,length:a},d=[];b.prototype=
{valueOf:a,y:a};for(var e in new b)d.push(e);O.enumErrorProps=ca.call(ea,"message")||ca.call(ea,"name");O.enumPrototypes=ca.call(b,"prototype");O.nonEnumShadows=!/valueOf/.test(d);O.spliceObjects=(yb.call(c,0,1),!c[0]);O.unindexedChars="xx"!="x"[0]+Object("x")[0]})(1,0);var ja=Da(wa),Eb=Da(function(a,b){return Db(a,b,C)},true),db=Fa(),Db=Fa(true),Ea=Ba("length"),Ta=Ga(ja),Fb=Ga(Eb,true),Gb=function(a,b){return function(c,d,e){var f=b?b():{};d=la(d,e,3);if(v(c)){e=-1;for(var g=c.length;++e<g;){var h=c[e];
a(f,h,d(h,e,c),c)}}else ja(c,function(b,c,e){a(f,b,d(b,c,e),e)});return f}}(function(a,b,c){u.call(a,c)?a[c].push(b):a[c]=[b]}),ga=Cb||function(){return(new Date).getTime()},v=Ab||function(a){return B(a)&&F(a.length)&&A.call(a)==E},C=Ra?function(a){var b=null==a?r:a.constructor;return typeof b=="function"&&b.prototype===a||(typeof a=="function"?n.support.enumPrototypes:R(a))?La(a):w(a)?Ra(a):[]}:La;n.callback=S;n.debounce=function(a,b,c){function d(b,c){c&&clearTimeout(c);k=p=q=r;b&&(s=ga(),m=a.apply(n,
h),p||k||(h=n=r))}function e(){var a=b-(ga()-l);0>=a||a>b?d(q,k):p=setTimeout(e,a)}function f(){d(u,p)}function g(){h=arguments;l=ga();n=this;q=u&&(p||!v);if(false===t)var c=v&&!p;else{k||v||(s=l);var d=t-(l-s),g=0>=d||d>t;g?(k&&(k=clearTimeout(k)),s=l,m=a.apply(n,h)):k||(k=setTimeout(f,d))}g&&p?p=clearTimeout(p):p||b===t||(p=setTimeout(e,b));c&&(g=true,m=a.apply(n,h));!g||p||k||(h=n=r);return m}var h,k,m,l,n,p,q,s=0,t=false,u=true;if(typeof a!="function")throw new TypeError("Expected a function");b=0>b?0:
+b||0;if(true===c)var v=true,u=false;else w(c)&&(v=!!c.leading,t="maxWait"in c&&Sa(+c.maxWait||0,b),u="trailing"in c?!!c.trailing:u);g.cancel=function(){p&&clearTimeout(p);k&&clearTimeout(k);s=0;k=p=q=r};return g};n.groupBy=Gb;n.keys=C;n.keysIn=Ma;n.matches=Pa;n.pairs=Ha;n.property=ua;n.sortBy=function(a,b,c){if(null==a)return[];c&&Ka(a,b,c)&&(b=r);var d=-1;b=la(b,c,3);a=ib(a,function(a,c,g){return{a:b(a,c,g),b:++d,c:a}});return lb(a,Ua)};n.iteratee=S;n.find=Ta;n.findLast=Fb;n.identity=P;n.indexOf=function(a,
b,c){var d=a?a.length:0;if(!d)return-1;if(typeof c=="number")c=0>c?Sa(d+c,0):c;else if(c){c=0;var e=a?a.length:c;if(typeof b=="number"&&b===b&&2147483647>=e){for(;c<e;){var f=c+e>>>1,g=a[f];g<b&&null!==g?c=f+1:e=f}c=e}else{e=P;c=e(b);for(var f=0,g=a?a.length:0,h=c!==c,k=null===c,m=c===r;f<g;){var l=zb((f+g)/2),n=e(a[l]),p=n!==r,q=n===n;(h?q:k?q&&p&&null!=n:m?q&&p:null==n?0:n<c)?f=l+1:g=l}c=Bb(g,4294967294)}return c<d&&(b===b?b===a[c]:a[c]!==a[c])?c:-1}a:if(d=c||0,b!==b)b:{b=a.length;for(d+=-1;++d<
b;)if(c=a[d],c!==c){a=d;break b}a=-1}else{d-=1;for(c=a.length;++d<c;)if(a[d]===b){a=d;break a}a=-1}return a};n.isArguments=pa;n.isArray=v;n.isFunction=da;n.isNative=Ia;n.isObject=w;n.isString=ba;n.isTypedArray=ia;n.last=Aa;n.now=ga;n.detect=Ta;n.VERSION="3.10.1";_=n})();
/*!
 *  opentok-angular (https://github.com/aullman/OpenTok-Angular)
 *
 *  Angular module for OpenTok
 *
 *  @Author: Adam Ullman (http://github.com/aullman)
 *  @Copyright (c) 2014 Adam Ullman
 *  @License: Released under the MIT license (http://opensource.org/licenses/MIT)
 **/
//lodash should be injected
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
    '$rootScope', 'OTSession', 'OTDirectivesHelpers',
    function ($rootScope, OTSession, OTDirectivesHelpers) {
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

            $rootScope.$emit('otSubscriberCreated', subscriber);

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