/**
 * @license
 * lodash 3.10.1 (Custom Build) lodash.com/license | Underscore.js  underscorejs.org/LICENSE
 * Build: `lodash exports="global" iife="%output%" include="groupBy,find,findLast,debounce,sortBy,indexOf" -p -o ./.tmp/lodash-custom.min.js`
 */
;function baseCompareAscending(r,e){if(r!==e){var t=null===r,n=void 0===r,a=r===r,o=null===e,i=void 0===e,s=e===e;if(r>e&&!o||!a||t&&!i&&s||n&&s)return 1;if(r<e&&!t||!s||o&&!n&&a||i&&a)return-1}return 0}function baseFindIndex(r,e,t){for(var n=r.length,a=t?n:-1;t?a--:++a<n;)if(e(r[a],a,r))return a;return-1}function baseIndexOf(r,e,t){if(e!==e)return indexOfNaN(r,t);t-=1;for(var n=r.length;++t<n;)if(r[t]===e)return t;return-1}function baseToString(r){return null==r?"":r+""}function compareAscending(r,e){
return baseCompareAscending(r.a,e.a)||r.b-e.b}function indexOfNaN(r,e,t){var n=r.length;for(e+=t?0:-1;t?e--:++e<n;){var a=r[e];if(a!==a)return e}return-1}function isObjectLike(r){return!!r&&typeof r=="object"}function lodash(){}function arrayCopy(r,e){var t=-1,n=r.length;for(e||(e=Array(n));++t<n;)e[t]=r[t];return e}function arrayEach(r,e){for(var t=-1,n=r.length;++t<n&&false!==e(r[t],t,r););return r}function arraySome(r,e){for(var t=-1,n=r.length;++t<n;)if(e(r[t],t,r))return true;return false}function baseAssign(r,e){
return null==e?r:baseCopy(e,keys(e),r)}function baseCopy(r,e,t){t||(t={});for(var n=-1,a=e.length;++n<a;){var o=e[n];t[o]=r[o]}return t}function baseCallback(r,e,t){var n=typeof r;return"function"==n?void 0===e?r:bindCallback(r,e,t):null==r?identity:"object"==n?baseMatches(r):void 0===e?property(r):baseMatchesProperty(r,e)}function baseClone(r,e,t,n,a,o,i){var s;if(t&&(s=a?t(r,n,a):t(r)),void 0!==s)return s;if(!isObject(r))return r;if(n=isArray(r)){if(s=initCloneArray(r),!e)return arrayCopy(r,s)}else{
var c=objToString.call(r),u=c==funcTag;if(c!=objectTag&&c!=argsTag&&(!u||a))return cloneableTags[c]?initCloneByTag(r,c,e):a?r:{};if(isHostObject(r))return a?r:{};if(s=initCloneObject(u?{}:r),!e)return baseAssign(s,r)}for(o||(o=[]),i||(i=[]),a=o.length;a--;)if(o[a]==r)return i[a];return o.push(r),i.push(s),(n?arrayEach:baseForOwn)(r,function(n,a){s[a]=baseClone(n,e,t,a,r,o,i)}),s}function baseFind(r,e,t,n){var a;return t(r,function(r,t,o){return e(r,t,o)?(a=n?t:r,false):undefined}),a}function baseForOwn(r,e){
return baseFor(r,e,keys)}function baseForOwnRight(r,e){return baseForRight(r,e,keys)}function baseGet(r,e,t){if(null!=r){r=toObject(r),void 0!==t&&t in r&&(e=[t]),t=0;for(var n=e.length;null!=r&&t<n;)r=toObject(r)[e[t++]];return t&&t==n?r:void 0}}function baseIsEqual(r,e,t,n,a,o){return r===e?true:null==r||null==e||!isObject(r)&&!isObjectLike(e)?r!==r&&e!==e:baseIsEqualDeep(r,e,baseIsEqual,t,n,a,o)}function baseIsEqualDeep(r,e,t,n,a,o,i){var s=isArray(r),c=isArray(e),u=arrayTag,l=arrayTag;s||(u=objToString.call(r),
u==argsTag?u=objectTag:u!=objectTag&&(s=isTypedArray(r))),c||(l=objToString.call(e),l==argsTag?l=objectTag:l!=objectTag&&isTypedArray(e));var g=u==objectTag&&!isHostObject(r),c=l==objectTag&&!isHostObject(e);if((l=u==l)&&!s&&!g)return equalByTag(r,e,u);if(!a&&(u=g&&hasOwnProperty.call(r,"__wrapped__"),c=c&&hasOwnProperty.call(e,"__wrapped__"),u||c))return t(u?r.value():r,c?e.value():e,n,a,o,i);if(!l)return false;for(o||(o=[]),i||(i=[]),u=o.length;u--;)if(o[u]==r)return i[u]==e;return o.push(r),i.push(e),
r=(s?equalArrays:equalObjects)(r,e,t,n,a,o,i),o.pop(),i.pop(),r}function baseIsMatch(r,e,t){var n=e.length,a=n,o=!t;if(null==r)return!a;for(r=toObject(r);n--;){var i=e[n];if(o&&i[2]?i[1]!==r[i[0]]:!(i[0]in r))return false}for(;++n<a;){var i=e[n],s=i[0],c=r[s],u=i[1];if(o&&i[2]){if(void 0===c&&!(s in r))return false}else if(i=t?t(c,u,s):void 0,void 0===i?!baseIsEqual(u,c,t,true):!i)return false}return true}function baseMap(r,e){var t=-1,n=isArrayLike(r)?Array(r.length):[];return baseEach(r,function(r,a,o){n[++t]=e(r,a,o);
}),n}function baseMatches(r){var e=getMatchData(r);if(1==e.length&&e[0][2]){var t=e[0][0],n=e[0][1];return function(r){return null==r?false:(r=toObject(r),r[t]===n&&(void 0!==n||t in r))}}return function(r){return baseIsMatch(r,e)}}function baseMatchesProperty(r,e){var t=isArray(r),n=isKey(r)&&isStrictComparable(e),a=r+"";return r=toPath(r),function(o){if(null==o)return false;var i=a;if(o=toObject(o),!(!t&&n||i in o)){if(o=1==r.length?o:baseGet(o,baseSlice(r,0,-1)),null==o)return false;i=last(r),o=toObject(o);
}return o[i]===e?void 0!==e||i in o:baseIsEqual(e,o[i],void 0,true)}}function baseProperty(r){return function(e){return null==e?void 0:toObject(e)[r]}}function basePropertyDeep(r){var e=r+"";return r=toPath(r),function(t){return baseGet(t,r,e)}}function baseSlice(r,e,t){var n=-1,a=r.length;for(e=null==e?0:+e||0,0>e&&(e=-e>a?0:a+e),t=void 0===t||t>a?a:+t||0,0>t&&(t+=a),a=e>t?0:t-e>>>0,e>>>=0,t=Array(a);++n<a;)t[n]=r[n+e];return t}function baseSortBy(r,e){var t=r.length;for(r.sort(e);t--;)r[t]=r[t].c;
return r}function binaryIndex(r,e,t){var n=0,a=r?r.length:n;if(typeof e=="number"&&e===e&&a<=HALF_MAX_ARRAY_LENGTH){for(;n<a;){var o=n+a>>>1,i=r[o];(t?i<=e:i<e)&&null!==i?n=o+1:a=o}return a}return binaryIndexBy(r,e,identity,t)}function binaryIndexBy(r,e,t,n){e=t(e);for(var a=0,o=r?r.length:0,i=e!==e,s=null===e,c=void 0===e;a<o;){var u=nativeFloor((a+o)/2),l=t(r[u]),g=void 0!==l,f=l===l;(i?f||n:s?f&&g&&(n||null!=l):c?f&&(n||g):null==l?0:n?l<=e:l<e)?a=u+1:o=u}return nativeMin(o,MAX_ARRAY_INDEX)}function bindCallback(r,e,t){
if(typeof r!="function")return identity;if(void 0===e)return r;switch(t){case 1:return function(t){return r.call(e,t)};case 3:return function(t,n,a){return r.call(e,t,n,a)};case 4:return function(t,n,a,o){return r.call(e,t,n,a,o)};case 5:return function(t,n,a,o,i){return r.call(e,t,n,a,o,i)}}return function(){return r.apply(e,arguments)}}function bufferClone(r){var e=new ArrayBuffer(r.byteLength);return new Uint8Array(e).set(new Uint8Array(r)),e}function createAggregator(r,e){return function(t,n,a){
var o=e?e():{};if(n=getCallback(n,a,3),isArray(t)){a=-1;for(var i=t.length;++a<i;){var s=t[a];r(o,s,n(s,a,t),t)}}else baseEach(t,function(e,t,a){r(o,e,n(e,t,a),a)});return o}}function createBaseEach(r,e){return function(t,n){var a=t?getLength(t):0;if(!isLength(a))return r(t,n);for(var o=e?a:-1,i=toObject(t);(e?o--:++o<a)&&false!==n(i[o],o,i););return t}}function createBaseFor(r){return function(e,t,n){var a=toObject(e);n=n(e);for(var o=n.length,i=r?o:-1;r?i--:++i<o;){var s=n[i];if(false===t(a[s],s,a))break;
}return e}}function createFind(r,e){return function(t,n,a){return n=getCallback(n,a,3),isArray(t)?(n=baseFindIndex(t,n,e),-1<n?t[n]:void 0):baseFind(t,n,r)}}function equalArrays(r,e,t,n,a,o,i){var s=-1,c=r.length,u=e.length;if(c!=u&&(!a||u<=c))return false;for(;++s<c;){var l=r[s],u=e[s],g=n?n(a?u:l,a?l:u,s):void 0;if(void 0!==g){if(g)continue;return false}if(a){if(!arraySome(e,function(r){return l===r||t(l,r,n,a,o,i)}))return false}else if(l!==u&&!t(l,u,n,a,o,i))return false}return true}function equalByTag(r,e,t){switch(t){
case boolTag:case dateTag:return+r==+e;case errorTag:return r.name==e.name&&r.message==e.message;case numberTag:return r!=+r?e!=+e:r==+e;case regexpTag:case stringTag:return r==e+""}return false}function equalObjects(r,e,t,n,a,o,i){var s=keys(r),c=s.length,u=keys(e).length;if(c!=u&&!a)return false;for(u=c;u--;){var l=s[u];if(!(a?l in e:hasOwnProperty.call(e,l)))return false}for(var g=a;++u<c;){var l=s[u],f=r[l],y=e[l],b=n?n(a?y:f,a?f:y,l):void 0;if(void 0===b?!t(f,y,n,a,o,i):!b)return false;g||(g="constructor"==l);
}return g||(t=r.constructor,n=e.constructor,!(t!=n&&"constructor"in r&&"constructor"in e)||typeof t=="function"&&t instanceof t&&typeof n=="function"&&n instanceof n)?true:false}function getCallback(r,e,t){var n=lodash.callback||callback,n=n===callback?baseCallback:n;return t?n(r,e,t):n}function getMatchData(r){r=pairs(r);for(var e=r.length;e--;)r[e][2]=isStrictComparable(r[e][1]);return r}function getNative(r,e){var t=null==r?void 0:r[e];return isNative(t)?t:void 0}function initCloneArray(r){var e=r.length,t=new r.constructor(e);
return e&&"string"==typeof r[0]&&hasOwnProperty.call(r,"index")&&(t.index=r.index,t.input=r.input),t}function initCloneObject(r){return r=r.constructor,typeof r=="function"&&r instanceof r||(r=Object),new r}function initCloneByTag(r,e,t){var n=r.constructor;switch(e){case arrayBufferTag:return bufferClone(r);case boolTag:case dateTag:return new n(+r);case float32Tag:case float64Tag:case int8Tag:case int16Tag:case int32Tag:case uint8Tag:case uint8ClampedTag:case uint16Tag:case uint32Tag:return n instanceof n&&(n=ctorByTag[e]),
e=r.buffer,new n(t?bufferClone(e):e,r.byteOffset,r.length);case numberTag:case stringTag:return new n(r);case regexpTag:var a=new n(r.source,reFlags.exec(r));a.lastIndex=r.lastIndex}return a}function isArrayLike(r){return null!=r&&isLength(getLength(r))}function isIndex(r,e){return r=typeof r=="number"||reIsUint.test(r)?+r:-1,e=null==e?MAX_SAFE_INTEGER:e,-1<r&&0==r%1&&r<e}function isIterateeCall(r,e,t){if(!isObject(t))return false;var n=typeof e;return("number"==n?isArrayLike(t)&&isIndex(e,t.length):"string"==n&&e in t)?(e=t[e],
r===r?r===e:e!==e):false}function isKey(r,e){var t=typeof r;return"string"==t&&reIsPlainProp.test(r)||"number"==t?true:isArray(r)?false:!reIsDeepProp.test(r)||null!=e&&r in toObject(e)}function isLength(r){return typeof r=="number"&&-1<r&&0==r%1&&r<=MAX_SAFE_INTEGER}function isStrictComparable(r){return r===r&&!isObject(r)}function shimKeys(r){for(var e=keysIn(r),t=e.length,n=t&&r.length,a=!!n&&isLength(n)&&(isArray(r)||isArguments(r)||isString(r)),o=-1,i=[];++o<t;){var s=e[o];(a&&isIndex(s,n)||hasOwnProperty.call(r,s))&&i.push(s);
}return i}function toObject(r){if(lodash.support.unindexedChars&&isString(r)){for(var e=-1,t=r.length,n=Object(r);++e<t;)n[e]=r.charAt(e);return n}return isObject(r)?r:Object(r)}function toPath(r){if(isArray(r))return r;var e=[];return baseToString(r).replace(rePropName,function(r,t,n,a){e.push(n?a.replace(reEscapeChar,"$1"):t||r)}),e}function indexOf(r,e,t){var n=r?r.length:0;if(!n)return-1;if(typeof t=="number")t=0>t?nativeMax(n+t,0):t;else if(t)return t=binaryIndex(r,e),t<n&&(e===e?e===r[t]:r[t]!==r[t])?t:-1;
return baseIndexOf(r,e,t||0)}function last(r){var e=r?r.length:0;return e?r[e-1]:void 0}function sortBy(r,e,t){if(null==r)return[];t&&isIterateeCall(r,e,t)&&(e=void 0);var n=-1;return e=getCallback(e,t,3),r=baseMap(r,function(r,t,a){return{a:e(r,t,a),b:++n,c:r}}),baseSortBy(r,compareAscending)}function debounce(r,e,t){function n(e,t){t&&clearTimeout(t),c=f=y=void 0,e&&(b=now(),u=r.apply(g,s),f||c||(s=g=void 0))}function a(){var r=e-(now()-l);0>=r||r>e?n(y,c):f=setTimeout(a,r)}function o(){n(T,f)}
function i(){if(s=arguments,l=now(),g=this,y=T&&(f||!d),false===p)var t=d&&!f;else{c||d||(b=l);var n=p-(l-b),i=0>=n||n>p;i?(c&&(c=clearTimeout(c)),b=l,u=r.apply(g,s)):c||(c=setTimeout(o,n))}return i&&f?f=clearTimeout(f):f||e===p||(f=setTimeout(a,e)),t&&(i=true,u=r.apply(g,s)),!i||f||c||(s=g=void 0),u}var s,c,u,l,g,f,y,b=0,p=false,T=true;if(typeof r!="function")throw new TypeError(FUNC_ERROR_TEXT);if(e=0>e?0:+e||0,true===t)var d=true,T=false;else isObject(t)&&(d=!!t.leading,p="maxWait"in t&&nativeMax(+t.maxWait||0,e),
T="trailing"in t?!!t.trailing:T);return i.cancel=function(){f&&clearTimeout(f),c&&clearTimeout(c),b=0,c=f=y=void 0},i}function isArguments(r){return isObjectLike(r)&&isArrayLike(r)&&hasOwnProperty.call(r,"callee")&&!propertyIsEnumerable.call(r,"callee")}function isFunction(r){return isObject(r)&&objToString.call(r)==funcTag}function isObject(r){var e=typeof r;return!!r&&("object"==e||"function"==e)}function isNative(r){return null==r?false:isFunction(r)?reIsNative.test(fnToString.call(r)):isObjectLike(r)&&(isHostObject(r)?reIsNative:reIsHostCtor).test(r);
}function isString(r){return typeof r=="string"||isObjectLike(r)&&objToString.call(r)==stringTag}function isTypedArray(r){return isObjectLike(r)&&isLength(r.length)&&!!typedArrayTags[objToString.call(r)]}function keysIn(r){if(null==r)return[];isObject(r)||(r=Object(r));for(var e=r.length,t=lodash.support,e=e&&isLength(e)&&(isArray(r)||isArguments(r)||isString(r))&&e||0,n=r.constructor,a=-1,n=isFunction(n)&&n.prototype||objectProto,o=n===r,i=Array(e),s=0<e,c=t.enumErrorProps&&(r===errorProto||r instanceof Error),u=t.enumPrototypes&&isFunction(r);++a<e;)i[a]=a+"";
for(var l in r)u&&"prototype"==l||c&&("message"==l||"name"==l)||s&&isIndex(l,e)||"constructor"==l&&(o||!hasOwnProperty.call(r,l))||i.push(l);if(t.nonEnumShadows&&r!==objectProto)for(e=r===stringProto?stringTag:r===errorProto?errorTag:objToString.call(r),t=nonEnumProps[e]||nonEnumProps[objectTag],e==objectTag&&(n=objectProto),e=shadowProps.length;e--;)l=shadowProps[e],a=t[l],o&&a||(a?!hasOwnProperty.call(r,l):r[l]===n[l])||i.push(l);return i}function pairs(r){r=toObject(r);for(var e=-1,t=keys(r),n=t.length,a=Array(n);++e<n;){
var o=t[e];a[e]=[o,r[o]]}return a}function callback(r,e,t){return t&&isIterateeCall(r,e,t)&&(e=void 0),isObjectLike(r)?matches(r):baseCallback(r,e)}function identity(r){return r}function matches(r){return baseMatches(baseClone(r,true))}function property(r){return isKey(r)?baseProperty(r):basePropertyDeep(r)}var undefined,VERSION="3.10.1",FUNC_ERROR_TEXT="Expected a function",argsTag="[object Arguments]",arrayTag="[object Array]",boolTag="[object Boolean]",dateTag="[object Date]",errorTag="[object Error]",funcTag="[object Function]",mapTag="[object Map]",numberTag="[object Number]",objectTag="[object Object]",regexpTag="[object RegExp]",setTag="[object Set]",stringTag="[object String]",weakMapTag="[object WeakMap]",arrayBufferTag="[object ArrayBuffer]",float32Tag="[object Float32Array]",float64Tag="[object Float64Array]",int8Tag="[object Int8Array]",int16Tag="[object Int16Array]",int32Tag="[object Int32Array]",uint8Tag="[object Uint8Array]",uint8ClampedTag="[object Uint8ClampedArray]",uint16Tag="[object Uint16Array]",uint32Tag="[object Uint32Array]",reIsDeepProp=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\n\\]|\\.)*?\1)\]/,reIsPlainProp=/^\w*$/,rePropName=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\n\\]|\\.)*?)\2)\]/g,reEscapeChar=/\\(\\)?/g,reFlags=/\w*$/,reIsHostCtor=/^\[object .+?Constructor\]$/,reIsUint=/^\d+$/,shadowProps="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),typedArrayTags={};
typedArrayTags[float32Tag]=typedArrayTags[float64Tag]=typedArrayTags[int8Tag]=typedArrayTags[int16Tag]=typedArrayTags[int32Tag]=typedArrayTags[uint8Tag]=typedArrayTags[uint8ClampedTag]=typedArrayTags[uint16Tag]=typedArrayTags[uint32Tag]=true,typedArrayTags[argsTag]=typedArrayTags[arrayTag]=typedArrayTags[arrayBufferTag]=typedArrayTags[boolTag]=typedArrayTags[dateTag]=typedArrayTags[errorTag]=typedArrayTags[funcTag]=typedArrayTags[mapTag]=typedArrayTags[numberTag]=typedArrayTags[objectTag]=typedArrayTags[regexpTag]=typedArrayTags[setTag]=typedArrayTags[stringTag]=typedArrayTags[weakMapTag]=false;
var cloneableTags={};cloneableTags[argsTag]=cloneableTags[arrayTag]=cloneableTags[arrayBufferTag]=cloneableTags[boolTag]=cloneableTags[dateTag]=cloneableTags[float32Tag]=cloneableTags[float64Tag]=cloneableTags[int8Tag]=cloneableTags[int16Tag]=cloneableTags[int32Tag]=cloneableTags[numberTag]=cloneableTags[objectTag]=cloneableTags[regexpTag]=cloneableTags[stringTag]=cloneableTags[uint8Tag]=cloneableTags[uint8ClampedTag]=cloneableTags[uint16Tag]=cloneableTags[uint32Tag]=true,cloneableTags[errorTag]=cloneableTags[funcTag]=cloneableTags[mapTag]=cloneableTags[setTag]=cloneableTags[weakMapTag]=false;
var objectTypes={"function":true,object:true},freeExports=objectTypes[typeof exports]&&exports&&!exports.nodeType&&exports,freeModule=objectTypes[typeof module]&&module&&!module.nodeType&&module,freeGlobal=freeExports&&freeModule&&typeof global=="object"&&global&&global.Object&&global,freeSelf=objectTypes[typeof self]&&self&&self.Object&&self,freeWindow=objectTypes[typeof window]&&window&&window.Object&&window,root=freeGlobal||freeWindow!==(this&&this.window)&&freeWindow||freeSelf||this,isHostObject=function(){
try{Object({toString:0}+"")}catch(r){return function(){return false}}return function(r){return typeof r.toString!="function"&&typeof(r+"")=="string"}}(),arrayProto=Array.prototype,errorProto=Error.prototype,objectProto=Object.prototype,stringProto=String.prototype,fnToString=Function.prototype.toString,hasOwnProperty=objectProto.hasOwnProperty,objToString=objectProto.toString,reIsNative=RegExp("^"+fnToString.call(hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),ArrayBuffer=root.ArrayBuffer,propertyIsEnumerable=objectProto.propertyIsEnumerable,splice=arrayProto.splice,Uint8Array=root.Uint8Array,nativeFloor=Math.floor,nativeIsArray=getNative(Array,"isArray"),nativeKeys=getNative(Object,"keys"),nativeMax=Math.max,nativeMin=Math.min,nativeNow=getNative(Date,"now"),MAX_ARRAY_LENGTH=4294967295,MAX_ARRAY_INDEX=MAX_ARRAY_LENGTH-1,HALF_MAX_ARRAY_LENGTH=MAX_ARRAY_LENGTH>>>1,MAX_SAFE_INTEGER=9007199254740991,ctorByTag={};
ctorByTag[float32Tag]=root.Float32Array,ctorByTag[float64Tag]=root.Float64Array,ctorByTag[int8Tag]=root.Int8Array,ctorByTag[int16Tag]=root.Int16Array,ctorByTag[int32Tag]=root.Int32Array,ctorByTag[uint8Tag]=Uint8Array,ctorByTag[uint8ClampedTag]=root.Uint8ClampedArray,ctorByTag[uint16Tag]=root.Uint16Array,ctorByTag[uint32Tag]=root.Uint32Array;var nonEnumProps={};nonEnumProps[arrayTag]=nonEnumProps[dateTag]=nonEnumProps[numberTag]={constructor:true,toLocaleString:true,toString:true,valueOf:true},nonEnumProps[boolTag]=nonEnumProps[stringTag]={
constructor:true,toString:true,valueOf:true},nonEnumProps[errorTag]=nonEnumProps[funcTag]=nonEnumProps[regexpTag]={constructor:true,toString:true},nonEnumProps[objectTag]={constructor:true},arrayEach(shadowProps,function(r){for(var e in nonEnumProps)if(hasOwnProperty.call(nonEnumProps,e)){var t=nonEnumProps[e];t[r]=hasOwnProperty.call(t,r)}});var support=lodash.support={};!function(r){var e=function(){this.x=r},t={0:r,length:r},n=[];e.prototype={valueOf:r,y:r};for(var a in new e)n.push(a);support.enumErrorProps=propertyIsEnumerable.call(errorProto,"message")||propertyIsEnumerable.call(errorProto,"name"),
support.enumPrototypes=propertyIsEnumerable.call(e,"prototype"),support.nonEnumShadows=!/valueOf/.test(n),support.spliceObjects=(splice.call(t,0,1),!t[0]),support.unindexedChars="xx"!="x"[0]+Object("x")[0]}(1,0);var baseEach=createBaseEach(baseForOwn),baseEachRight=createBaseEach(baseForOwnRight,true),baseFor=createBaseFor(),baseForRight=createBaseFor(true),getLength=baseProperty("length"),find=createFind(baseEach),findLast=createFind(baseEachRight,true),groupBy=createAggregator(function(r,e,t){hasOwnProperty.call(r,t)?r[t].push(e):r[t]=[e];
}),now=nativeNow||function(){return(new Date).getTime()},isArray=nativeIsArray||function(r){return isObjectLike(r)&&isLength(r.length)&&objToString.call(r)==arrayTag},keys=nativeKeys?function(r){var e=null==r?void 0:r.constructor;return typeof e=="function"&&e.prototype===r||(typeof r=="function"?lodash.support.enumPrototypes:isArrayLike(r))?shimKeys(r):isObject(r)?nativeKeys(r):[]}:shimKeys;lodash.callback=callback,lodash.debounce=debounce,lodash.groupBy=groupBy,lodash.keys=keys,lodash.keysIn=keysIn,
lodash.matches=matches,lodash.pairs=pairs,lodash.property=property,lodash.sortBy=sortBy,lodash.iteratee=callback,lodash.find=find,lodash.findLast=findLast,lodash.identity=identity,lodash.indexOf=indexOf,lodash.isArguments=isArguments,lodash.isArray=isArray,lodash.isFunction=isFunction,lodash.isNative=isNative,lodash.isObject=isObject,lodash.isString=isString,lodash.isTypedArray=isTypedArray,lodash.last=last,lodash.now=now,lodash.detect=find,lodash.VERSION=VERSION,root._=lodash;
; var _ = lodash; /*!
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