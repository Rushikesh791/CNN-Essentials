(function(){'use strict';var m;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var fa=ca(this);function u(a,b){if(b)a:{var c=fa;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ba(c,a,{configurable:!0,writable:!0,value:b})}}
u("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}
function c(f,g){this.h=f;ba(this,"description",{configurable:!0,writable:!0,value:g})}
if(a)return a;c.prototype.toString=function(){return this.h};
var d="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",e=0;return b});
u("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=fa[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ia(aa(this))}})}return a});
function ia(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function ja(a){return a.raw=a}
function la(a,b){a.raw=b;return a}
function v(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];if(b)return b.call(a);if("number"==typeof a.length)return{next:aa(a)};throw Error(String(a)+" is not an iterable or ArrayLike");}
function ma(a){if(!(a instanceof Array)){a=v(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
function na(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var oa="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)na(d,e)&&(a[e]=d[e])}return a};
u("Object.assign",function(a){return a||oa});
var qa="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},ra=function(){function a(){function c(){}
new c;Reflect.construct(c,[],function(){});
return new c instanceof c}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){void 0===e&&(e=c);
e=qa(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}}(),sa;
if("function"==typeof Object.setPrototypeOf)sa=Object.setPrototypeOf;else{var ta;a:{var ua={a:!0},va={};try{va.__proto__=ua;ta=va.a;break a}catch(a){}ta=!1}sa=ta?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var wa=sa;
function w(a,b){a.prototype=qa(b.prototype);a.prototype.constructor=a;if(wa)wa(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.Aa=b.prototype}
function xa(){this.A=!1;this.m=null;this.i=void 0;this.h=1;this.v=this.l=0;this.R=this.j=null}
function ya(a){if(a.A)throw new TypeError("Generator is already running");a.A=!0}
xa.prototype.D=function(a){this.i=a};
function za(a,b){a.j={exception:b,nd:!0};a.h=a.l||a.v}
xa.prototype.return=function(a){this.j={return:a};this.h=this.v};
xa.prototype.yield=function(a,b){this.h=b;return{value:a}};
xa.prototype.B=function(a){this.h=a};
function Aa(a,b,c){a.l=b;void 0!=c&&(a.v=c)}
function Ba(a){a.l=0;var b=a.j.exception;a.j=null;return b}
function Da(a){var b=a.R.splice(0)[0];(b=a.j=a.j||b)?b.nd?a.h=a.l||a.v:void 0!=b.B&&a.v<b.B?(a.h=b.B,a.j=null):a.h=a.v:a.h=0}
function Ea(a){this.h=new xa;this.i=a}
function Fa(a,b){ya(a.h);var c=a.h.m;if(c)return Ha(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.h.return);
a.h.return(b);return Ia(a)}
function Ha(a,b,c,d){try{var e=b.call(a.h.m,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.h.A=!1,e;var f=e.value}catch(g){return a.h.m=null,za(a.h,g),Ia(a)}a.h.m=null;d.call(a.h,f);return Ia(a)}
function Ia(a){for(;a.h.h;)try{var b=a.i(a.h);if(b)return a.h.A=!1,{value:b.value,done:!1}}catch(c){a.h.i=void 0,za(a.h,c)}a.h.A=!1;if(a.h.j){b=a.h.j;a.h.j=null;if(b.nd)throw b.exception;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function Ja(a){this.next=function(b){ya(a.h);a.h.m?b=Ha(a,a.h.m.next,b,a.h.D):(a.h.D(b),b=Ia(a));return b};
this.throw=function(b){ya(a.h);a.h.m?b=Ha(a,a.h.m["throw"],b,a.h.D):(za(a.h,b),b=Ia(a));return b};
this.return=function(b){return Fa(a,b)};
this[Symbol.iterator]=function(){return this}}
function Ka(a){function b(d){return a.next(d)}
function c(d){return a.throw(d)}
return new Promise(function(d,e){function f(g){g.done?d(g.value):Promise.resolve(g.value).then(b,c).then(f,e)}
f(a.next())})}
function A(a){return Ka(new Ja(new Ea(a)))}
function B(){for(var a=Number(this),b=[],c=a;c<arguments.length;c++)b[c-a]=arguments[c];return b}
u("Reflect",function(a){return a?a:{}});
u("Reflect.construct",function(){return ra});
u("Reflect.setPrototypeOf",function(a){return a?a:wa?function(b,c){try{return wa(b,c),!0}catch(d){return!1}}:null});
u("Promise",function(a){function b(g){this.h=0;this.j=void 0;this.i=[];this.A=!1;var h=this.l();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.h=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.i=function(g){if(null==this.h){this.h=[];var h=this;this.j(function(){h.v()})}this.h.push(g)};
var e=fa.setTimeout;c.prototype.j=function(g){e(g,0)};
c.prototype.v=function(){for(;this.h&&this.h.length;){var g=this.h;this.h=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.l(l)}}}this.h=null};
c.prototype.l=function(g){this.j(function(){throw g;})};
b.prototype.l=function(){function g(l){return function(n){k||(k=!0,l.call(h,n))}}
var h=this,k=!1;return{resolve:g(this.ba),reject:g(this.v)}};
b.prototype.ba=function(g){if(g===this)this.v(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.ga(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.Y(g):this.m(g)}};
b.prototype.Y=function(g){var h=void 0;try{h=g.then}catch(k){this.v(k);return}"function"==typeof h?this.ta(h,g):this.m(g)};
b.prototype.v=function(g){this.D(2,g)};
b.prototype.m=function(g){this.D(1,g)};
b.prototype.D=function(g,h){if(0!=this.h)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.h);this.h=g;this.j=h;2===this.h&&this.ea();this.R()};
b.prototype.ea=function(){var g=this;e(function(){if(g.V()){var h=fa.console;"undefined"!==typeof h&&h.error(g.j)}},1)};
b.prototype.V=function(){if(this.A)return!1;var g=fa.CustomEvent,h=fa.Event,k=fa.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof g?g=new g("unhandledrejection",{cancelable:!0}):"function"===typeof h?g=new h("unhandledrejection",{cancelable:!0}):(g=fa.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.j;return k(g)};
b.prototype.R=function(){if(null!=this.i){for(var g=0;g<this.i.length;++g)f.i(this.i[g]);this.i=null}};
var f=new c;b.prototype.ga=function(g){var h=this.l();g.Wb(h.resolve,h.reject)};
b.prototype.ta=function(g,h){var k=this.l();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(r,t){return"function"==typeof r?function(y){try{l(r(y))}catch(z){n(z)}}:t}
var l,n,p=new b(function(r,t){l=r;n=t});
this.Wb(k(g,l),k(h,n));return p};
b.prototype.catch=function(g){return this.then(void 0,g)};
b.prototype.Wb=function(g,h){function k(){switch(l.h){case 1:g(l.j);break;case 2:h(l.j);break;default:throw Error("Unexpected state: "+l.h);}}
var l=this;null==this.i?f.i(k):this.i.push(k);this.A=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=v(g),n=l.next();!n.done;n=l.next())d(n.value).Wb(h,k)})};
b.all=function(g){var h=v(g),k=h.next();return k.done?d([]):new b(function(l,n){function p(y){return function(z){r[y]=z;t--;0==t&&l(r)}}
var r=[],t=0;do r.push(void 0),t++,d(k.value).Wb(p(r.length-1),n),k=h.next();while(!k.done)})};
return b});
u("Object.setPrototypeOf",function(a){return a||wa});
u("WeakMap",function(a){function b(k){this.h=(h+=Math.random()+1).toString();if(k){k=v(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return"object"===l&&null!==k||"function"===l}
function e(k){if(!na(k,g)){var l=new c;ba(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(n){if(n instanceof c)return n;Object.isExtensible(n)&&e(n);return l(n)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),n=new a([[k,2],[l,3]]);if(2!=n.get(k)||3!=n.get(l))return!1;n.delete(k);n.set(l,4);return!n.has(k)&&4==n.get(l)}catch(p){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!na(k,g))throw Error("WeakMap key fail: "+k);k[g][this.h]=l;return this};
b.prototype.get=function(k){return d(k)&&na(k,g)?k[g][this.h]:void 0};
b.prototype.has=function(k){return d(k)&&na(k,g)&&na(k[g],this.h)};
b.prototype.delete=function(k){return d(k)&&na(k,g)&&na(k[g],this.h)?delete k[g][this.h]:!1};
return b});
u("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h[1];return ia(function(){if(l){for(;l.head!=h[1];)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;"object"==l||"function"==l?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var n=h[0][l];if(n&&na(h[0],l))for(h=0;h<n.length;h++){var p=n[h];if(k!==k&&p.key!==p.key||k===p.key)return{id:l,list:n,index:h,entry:p}}return{id:l,list:n,index:-1,entry:void 0}}
function e(h){this[0]={};this[1]=b();this.size=0;if(h){h=v(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(v([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var l=k.entries(),n=l.next();if(n.done||n.value[0]!=h||"s"!=n.value[1])return!1;n=l.next();return n.done||4!=n.value[0].x||"t"!=n.value[1]||!l.next().done?!1:!0}catch(p){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var l=d(this,h);l.list||(l.list=this[0][l.id]=[]);l.entry?l.entry.value=k:(l.entry={next:this[1],previous:this[1].previous,head:this[1],key:h,value:k},l.list.push(l.entry),this[1].previous.next=l.entry,this[1].previous=l.entry,this.size++);return this};
e.prototype.delete=function(h){h=d(this,h);return h.entry&&h.list?(h.list.splice(h.index,1),h.list.length||delete this[0][h.id],h.entry.previous.next=h.entry.next,h.entry.next.previous=h.entry.previous,h.entry.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this[0]={};this[1]=this[1].previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).entry};
e.prototype.get=function(h){return(h=d(this,h).entry)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),n;!(n=l.next()).done;)n=n.value,h.call(k,n[1],n[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
function La(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
u("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=La(this,b,"endsWith");b+="";void 0===c&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;0<e&&0<c;)if(d[--c]!=b[--e])return!1;return 0>=e}});
u("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var e=d.length,f=0;f<e;f++){var g=d[f];if(b.call(c,g,f,d)){b=g;break a}}b=void 0}return b}});
function Ma(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
u("Array.prototype.entries",function(a){return a?a:function(){return Ma(this,function(b,c){return[b,c]})}});
u("Array.prototype.keys",function(a){return a?a:function(){return Ma(this,function(b){return b})}});
u("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=La(this,b,"startsWith");b+="";var e=d.length,f=b.length;c=Math.max(0,Math.min(c|0,d.length));for(var g=0;g<f&&c<e;)if(d[c++]!=b[g++])return!1;return g>=f}});
u("Number.isFinite",function(a){return a?a:function(b){return"number"!==typeof b?!1:!isNaN(b)&&Infinity!==b&&-Infinity!==b}});
u("Set",function(a){function b(c){this.h=new Map;if(c){c=v(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.h.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(v([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.h.set(c,c);this.size=this.h.size;return this};
b.prototype.delete=function(c){c=this.h.delete(c);this.size=this.h.size;return c};
b.prototype.clear=function(){this.h.clear();this.size=0};
b.prototype.has=function(c){return this.h.has(c)};
b.prototype.entries=function(){return this.h.entries()};
b.prototype.values=function(){return this.h.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.h.forEach(function(f){return c.call(d,f,f,e)})};
return b});
u("Array.prototype.values",function(a){return a?a:function(){return Ma(this,function(b,c){return c})}});
u("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)na(b,d)&&c.push(b[d]);return c}});
u("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
u("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(0>c&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
u("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==La(this,b,"includes").indexOf(b,c||0)}});
u("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});
u("Number.isInteger",function(a){return a?a:function(b){return Number.isFinite(b)?b===Math.floor(b):!1}});
u("Number.isSafeInteger",function(a){return a?a:function(b){return Number.isInteger(b)&&Math.abs(b)<=Number.MAX_SAFE_INTEGER}});
u("Math.trunc",function(a){return a?a:function(b){b=Number(b);if(isNaN(b)||Infinity===b||-Infinity===b||0===b)return b;var c=Math.floor(Math.abs(b));return 0>b?-c:c}});
u("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(h){return h};
var e=[],f="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof f){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
u("Number.isNaN",function(a){return a?a:function(b){return"number"===typeof b&&isNaN(b)}});
u("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)na(b,d)&&c.push([d,b[d]]);return c}});
u("globalThis",function(a){return a||fa});/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var Na=Na||{},C=this||self;function D(a,b,c){a=a.split(".");c=c||C;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function Oa(a){var b=E("CLOSURE_FLAGS");a=b&&b[a];return null!=a?a:!1}
function E(a,b){a=a.split(".");b=b||C;for(var c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function Pa(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}
function Qa(a){var b=Pa(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function Ra(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Sa(a){return Object.prototype.hasOwnProperty.call(a,Ta)&&a[Ta]||(a[Ta]=++Ua)}
var Ta="closure_uid_"+(1E9*Math.random()>>>0),Ua=0;function Va(a,b,c){return a.call.apply(a.bind,arguments)}
function Wa(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function Xa(a,b,c){Xa=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Va:Wa;return Xa.apply(null,arguments)}
function Ya(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
function Za(){return Date.now()}
function $a(a,b){function c(){}
c.prototype=b.prototype;a.Aa=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.base=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
function ab(a){return a}
;function bb(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,bb);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));void 0!==b&&(this.cause=b)}
$a(bb,Error);bb.prototype.name="CustomError";function cb(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.j=!b&&/[?&]ae=1(&|$)/.test(a);this.l=!b&&/[?&]ae=2(&|$)/.test(a);if((this.h=/[?&]adurl=([^&]*)/.exec(a))&&this.h[1]){try{var c=decodeURIComponent(this.h[1])}catch(d){c=null}this.i=c}}
;var db=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};var eb;function fb(){if(void 0===eb){var a=null,b=C.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:ab,createScript:ab,createScriptURL:ab})}catch(c){C.console&&C.console.error(c.message)}eb=a}else eb=a}return eb}
;function gb(a,b){this.h=a===hb&&b||""}
gb.prototype.toString=function(){return this.h};
function ib(a){return new gb(hb,a)}
var hb={};ib("");function jb(a){this.h=a}
jb.prototype.toString=function(){return this.h+""};
function kb(a){if(a instanceof jb&&a.constructor===jb)return a.h;Pa(a);return"type_error:TrustedResourceUrl"}
var lb={};function mb(a){var b=fb();a=b?b.createScriptURL(a):a;return new jb(a,lb)}
;/*

 SPDX-License-Identifier: Apache-2.0
*/
var nb=ja([""]),ob=la(["\x00"],["\\0"]),pb=la(["\n"],["\\n"]),qb=la(["\x00"],["\\u0000"]);function rb(a){return-1===a.toString().indexOf("`")}
rb(function(a){return a(nb)})||rb(function(a){return a(ob)})||rb(function(a){return a(pb)})||rb(function(a){return a(qb)});function sb(a){this.h=a}
sb.prototype.toString=function(){return this.h.toString()};
var tb={};var ub=new sb("about:invalid#zClosurez",tb);function vb(a){this.ue=a}
function wb(a){return new vb(function(b){return b.substr(0,a.length+1).toLowerCase()===a+":"})}
var xb=[wb("data"),wb("http"),wb("https"),wb("mailto"),wb("ftp"),new vb(function(a){return/^[^:]*([/?#]|$)/.test(a)})],yb=/^\s*(?!javascript:)(?:[a-z0-9+.-]+:|[^:\/?#]*(?:[\/?#]|$))/i;
function zb(a){a instanceof sb?a instanceof sb&&a.constructor===sb?a=a.h:(Pa(a),a="type_error:SafeUrl"):a=yb.test(a)?a:void 0;return a}
;function Ab(a,b){b=zb(b);void 0!==b&&(a.href=b)}
;var Bb={};function Cb(){}
function Db(a){this.h=a}
w(Db,Cb);Db.prototype.toString=function(){return this.h};var Eb=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},Fb=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Gb=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f="string"===typeof a?a.split(""):a,g=0;g<c;g++)if(g in f){var h=f[g];
b.call(void 0,h,g,a)&&(d[e++]=h)}return d},Hb=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e="string"===typeof a?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d},Ib=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
Fb(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function Jb(a,b){a:{for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return 0>b?null:"string"===typeof a?a.charAt(b):a[b]}
function Kb(a,b){b=Eb(a,b);var c;(c=0<=b)&&Array.prototype.splice.call(a,b,1);return c}
function Lb(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Qa(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function Mb(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function Nb(a){var b=Ob,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function Pb(a){for(var b in a)return!1;return!0}
function Qb(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function Rb(a){return null!==a&&"privembed"in a?a.privembed:!1}
function Sb(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function Tb(a){var b={},c;for(c in a)b[c]=a[c];return b}
function Ub(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();if("undefined"!==typeof Map&&a instanceof Map)return new Map(a);if("undefined"!==typeof Set&&a instanceof Set)return new Set(a);if(a instanceof Date)return new Date(a.getTime());var b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=Ub(a[c]);return b}
var Vb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Wb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<Vb.length;f++)c=Vb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var Xb=Oa(610401301),Yb=Oa(188588736);function Zb(){var a=C.navigator;return a&&(a=a.userAgent)?a:""}
var $b,ac=C.navigator;$b=ac?ac.userAgentData||null:null;function bc(a){return Xb?$b?$b.brands.some(function(b){return(b=b.brand)&&-1!=b.indexOf(a)}):!1:!1}
function F(a){return-1!=Zb().indexOf(a)}
;function cc(){return Xb?!!$b&&0<$b.brands.length:!1}
function dc(){return cc()?!1:F("Opera")}
function ec(){return cc()?!1:F("Trident")||F("MSIE")}
function fc(){return F("Firefox")||F("FxiOS")}
function hc(){return cc()?bc("Chromium"):(F("Chrome")||F("CriOS"))&&!(cc()?0:F("Edge"))||F("Silk")}
;function ic(a){this.h=a}
ic.prototype.toString=function(){return this.h.toString()};function jc(a){var b="true".toString(),c=[new Db(kc[0].toLowerCase(),Bb)];if(0===c.length)throw Error("");if(c.map(function(d){if(d instanceof Db)d=d.h;else throw Error("");return d}).every(function(d){return 0!=="data-loaded".indexOf(d)}))throw Error('Attribute "data-loaded" does not match any of the allowed prefixes.');
a.setAttribute("data-loaded",b)}
;function lc(){throw Error("unknown trace type");}
;var mc="alternate author bookmark canonical cite help icon license modulepreload next prefetch dns-prefetch prerender preconnect preload prev search subresource".split(" ");function nc(a,b){if(b instanceof jb)a.href=kb(b).toString();else{if(-1===mc.indexOf("stylesheet"))throw Error('TrustedResourceUrl href attribute required with rel="stylesheet"');b=zb(b);if(void 0===b)return;a.href=b}a.rel="stylesheet"}
;function oc(a){var b,c;return(a=null==(c=(b=a.document).querySelector)?void 0:c.call(b,"script[nonce]"))?a.nonce||a.getAttribute("nonce")||"":""}
;function pc(){}
pc.prototype.toString=function(){return this.ud.toString()};function qc(a){var b=oc(a.ownerDocument&&a.ownerDocument.defaultView||window);b&&a.setAttribute("nonce",b)}
function rc(a,b){if(b instanceof pc)b=b.ud;else throw Error("");a.textContent=b;qc(a)}
function sc(a,b){a.src=kb(b);qc(a)}
;function tc(a){var b=E("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||C.$googDebugFname||b}catch(g){e="Not available",c=!0}b=uc(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,vc[c])c=vc[c];else{c=String(c);if(!vc[c]){var f=/function\s+([^\(]+)/m.exec(c);vc[c]=f?f[1]:"[Anonymous]"}c=vc[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}return{message:a.message,
name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:b}}
function uc(a,b){b||(b={});b[wc(a)]=!0;var c=a.stack||"";(a=a.cause)&&!b[wc(a)]&&(c+="\nCaused by: ",a.stack&&0==a.stack.indexOf(a.toString())||(c+="string"===typeof a?a:a.message+"\n"),c+=uc(a,b));return c}
function wc(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var vc={};function xc(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var yc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function zc(a){return a?decodeURI(a):a}
function Ac(a,b){return b.match(yc)[a]||null}
function Bc(a){return zc(Ac(3,a))}
function Cc(a){var b=a.match(yc);a=b[5];var c=b[6];b=b[7];var d="";a&&(d+=a);c&&(d+="?"+c);b&&(d+="#"+b);return d}
function Dc(a){var b=a.indexOf("#");return 0>b?a:a.slice(0,b)}
function Ec(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)Ec(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function Fc(a){var b=[],c;for(c in a)Ec(c,a[c],b);return b.join("&")}
function Gc(a,b){b=Fc(b);if(b){var c=a.indexOf("#");0>c&&(c=a.length);var d=a.indexOf("?");if(0>d||d>c){d=c;var e=""}else e=a.substring(d+1,c);a=[a.slice(0,d),e,a.slice(c)];c=a[1];a[1]=b?c?c+"&"+b:b:c;b=a[0]+(a[1]?"?"+a[1]:"")+a[2]}else b=a;return b}
function Hc(a,b,c,d){for(var e=c.length;0<=(b=a.indexOf(c,b))&&b<d;){var f=a.charCodeAt(b-1);if(38==f||63==f)if(f=a.charCodeAt(b+e),!f||61==f||38==f||35==f)return b;b+=e+1}return-1}
var Ic=/#|$/,Jc=/[?&]($|#)/;function Kc(a,b){for(var c=a.search(Ic),d=0,e,f=[];0<=(e=Hc(a,d,b,c));)f.push(a.substring(d,e)),d=Math.min(a.indexOf("&",e)+1||c,c);f.push(a.slice(d));return f.join("").replace(Jc,"$1")}
;function Lc(a){this.h=a}
;function Mc(a,b,c){this.l=a;this.j=b;this.fields=c||[];this.h=new Map}
m=Mc.prototype;m.Qd=function(a){var b=B.apply(1,arguments),c=this.yc(b);c?c.push(new Lc(a)):this.Cd(a,b)};
m.Cd=function(a){var b=this.Vc(B.apply(1,arguments));this.h.set(b,[new Lc(a)])};
m.yc=function(){var a=this.Vc(B.apply(0,arguments));return this.h.has(a)?this.h.get(a):void 0};
m.je=function(){var a=this.yc(B.apply(0,arguments));return a&&a.length?a[0]:void 0};
m.clear=function(){this.h.clear()};
m.Vc=function(){var a=B.apply(0,arguments);return a?a.join(","):"key"};function Nc(a,b){Mc.call(this,a,3,b)}
w(Nc,Mc);Nc.prototype.i=function(a){var b=B.apply(1,arguments),c=0,d=this.je(b);d&&(c=d.h);this.Cd(c+a,b)};function Oc(a,b){Mc.call(this,a,2,b)}
w(Oc,Mc);Oc.prototype.record=function(a){this.Qd(a,B.apply(1,arguments))};function Pc(a){a&&"function"==typeof a.dispose&&a.dispose()}
;function Qc(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];Qa(d)?Qc.apply(null,d):Pc(d)}}
;function H(){this.ob=this.ob;this.v=this.v}
m=H.prototype;m.ob=!1;m.Z=function(){return this.ob};
m.dispose=function(){this.ob||(this.ob=!0,this.S())};
function Rc(a,b){a.addOnDisposeCallback(Ya(Pc,b))}
m.addOnDisposeCallback=function(a,b){this.ob?void 0!==b?a.call(b):a():(this.v||(this.v=[]),this.v.push(void 0!==b?Xa(a,b):a))};
m.S=function(){if(this.v)for(;this.v.length;)this.v.shift()()};function Sc(a,b){this.type=a;this.h=this.target=b;this.defaultPrevented=this.j=!1}
Sc.prototype.stopPropagation=function(){this.j=!0};
Sc.prototype.preventDefault=function(){this.defaultPrevented=!0};var Tc=function(){if(!C.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{var c=function(){};
C.addEventListener("test",c,b);C.removeEventListener("test",c,b)}catch(d){}return a}();function Uc(){return Xb?!!$b&&!!$b.platform:!1}
function Vc(){return F("iPhone")&&!F("iPod")&&!F("iPad")}
;function Wc(a){Wc[" "](a);return a}
Wc[" "]=function(){};var Xc=dc(),Yc=ec(),Zc=F("Edge"),$c=F("Gecko")&&!(-1!=Zb().toLowerCase().indexOf("webkit")&&!F("Edge"))&&!(F("Trident")||F("MSIE"))&&!F("Edge"),ad=-1!=Zb().toLowerCase().indexOf("webkit")&&!F("Edge");ad&&F("Mobile");Uc()||F("Macintosh");Uc()||F("Windows");(Uc()?"Linux"===$b.platform:F("Linux"))||Uc()||F("CrOS");var bd=Uc()?"Android"===$b.platform:F("Android");Vc();F("iPad");F("iPod");Vc()||F("iPad")||F("iPod");Zb().toLowerCase().indexOf("kaios");
function cd(){var a=C.document;return a?a.documentMode:void 0}
var dd;a:{var ed="",fd=function(){var a=Zb();if($c)return/rv:([^\);]+)(\)|;)/.exec(a);if(Zc)return/Edge\/([\d\.]+)/.exec(a);if(Yc)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(ad)return/WebKit\/(\S+)/.exec(a);if(Xc)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
fd&&(ed=fd?fd[1]:"");if(Yc){var gd=cd();if(null!=gd&&gd>parseFloat(ed)){dd=String(gd);break a}}dd=ed}var hd=dd,id;if(C.document&&Yc){var jd=cd();id=jd?jd:parseInt(hd,10)||void 0}else id=void 0;var kd=id;function ld(a,b){Sc.call(this,a?a.type:"");this.relatedTarget=this.h=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.i=null;a&&this.init(a,b)}
$a(ld,Sc);var md={2:"touch",3:"pen",4:"mouse"};
ld.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.h=b;if(b=a.relatedTarget){if($c){a:{try{Wc(b.nodeName);var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||
0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:md[a.pointerType]||"";this.state=a.state;
this.i=a;a.defaultPrevented&&ld.Aa.preventDefault.call(this)};
ld.prototype.stopPropagation=function(){ld.Aa.stopPropagation.call(this);this.i.stopPropagation?this.i.stopPropagation():this.i.cancelBubble=!0};
ld.prototype.preventDefault=function(){ld.Aa.preventDefault.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var nd="closure_listenable_"+(1E6*Math.random()|0);var od=0;function pd(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.cc=e;this.key=++od;this.Mb=this.Vb=!1}
function qd(a){a.Mb=!0;a.listener=null;a.proxy=null;a.src=null;a.cc=null}
;function rd(a){this.src=a;this.listeners={};this.h=0}
rd.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.h++);var g=sd(a,b,d,e);-1<g?(b=a[g],c||(b.Vb=!1)):(b=new pd(b,this.src,f,!!d,e),b.Vb=c,a.push(b));return b};
rd.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=sd(e,b,c,d);return-1<b?(qd(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.listeners[a],this.h--),!0):!1};
function td(a,b){var c=b.type;c in a.listeners&&Kb(a.listeners[c],b)&&(qd(b),0==a.listeners[c].length&&(delete a.listeners[c],a.h--))}
function sd(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.Mb&&f.listener==b&&f.capture==!!c&&f.cc==d)return e}return-1}
;var ud="closure_lm_"+(1E6*Math.random()|0),vd={},wd=0;function xd(a,b,c,d,e){if(d&&d.once)yd(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)xd(a,b[f],c,d,e);else c=zd(c),a&&a[nd]?a.listen(b,c,Ra(d)?!!d.capture:!!d,e):Ad(a,b,c,!1,d,e)}
function Ad(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=Ra(e)?!!e.capture:!!e,h=Bd(a);h||(a[ud]=h=new rd(a));c=h.add(b,c,d,g,f);if(!c.proxy){d=Cd();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)Tc||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(Dd(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");wd++}}
function Cd(){function a(c){return b.call(a.src,a.listener,c)}
var b=Ed;return a}
function yd(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)yd(a,b[f],c,d,e);else c=zd(c),a&&a[nd]?a.h.add(String(b),c,!0,Ra(d)?!!d.capture:!!d,e):Ad(a,b,c,!0,d,e)}
function Fd(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Fd(a,b[f],c,d,e);else(d=Ra(d)?!!d.capture:!!d,c=zd(c),a&&a[nd])?a.h.remove(String(b),c,d,e):a&&(a=Bd(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=sd(b,c,d,e)),(c=-1<a?b[a]:null)&&Gd(c))}
function Gd(a){if("number"!==typeof a&&a&&!a.Mb){var b=a.src;if(b&&b[nd])td(b.h,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(Dd(c),d):b.addListener&&b.removeListener&&b.removeListener(d);wd--;(c=Bd(b))?(td(c,a),0==c.h&&(c.src=null,b[ud]=null)):qd(a)}}}
function Dd(a){return a in vd?vd[a]:vd[a]="on"+a}
function Ed(a,b){if(a.Mb)a=!0;else{b=new ld(b,this);var c=a.listener,d=a.cc||a.src;a.Vb&&Gd(a);a=c.call(d,b)}return a}
function Bd(a){a=a[ud];return a instanceof rd?a:null}
var Hd="__closure_events_fn_"+(1E9*Math.random()>>>0);function zd(a){if("function"===typeof a)return a;a[Hd]||(a[Hd]=function(b){return a.handleEvent(b)});
return a[Hd]}
;function Id(){H.call(this);this.h=new rd(this);this.Za=this;this.ga=null}
$a(Id,H);Id.prototype[nd]=!0;m=Id.prototype;m.addEventListener=function(a,b,c,d){xd(this,a,b,c,d)};
m.removeEventListener=function(a,b,c,d){Fd(this,a,b,c,d)};
function Jd(a,b){var c=a.ga;if(c){var d=[];for(var e=1;c;c=c.ga)d.push(c),++e}a=a.Za;c=b.type||b;"string"===typeof b?b=new Sc(b,a):b instanceof Sc?b.target=b.target||a:(e=b,b=new Sc(c,a),Wb(b,e));e=!0;if(d)for(var f=d.length-1;!b.j&&0<=f;f--){var g=b.h=d[f];e=Kd(g,c,!0,b)&&e}b.j||(g=b.h=a,e=Kd(g,c,!0,b)&&e,b.j||(e=Kd(g,c,!1,b)&&e));if(d)for(f=0;!b.j&&f<d.length;f++)g=b.h=d[f],e=Kd(g,c,!1,b)&&e}
m.S=function(){Id.Aa.S.call(this);this.removeAllListeners();this.ga=null};
m.listen=function(a,b,c,d){return this.h.add(String(a),b,!1,c,d)};
m.removeAllListeners=function(a){if(this.h){var b=this.h;a=a&&a.toString();var c=0,d;for(d in b.listeners)if(!a||d==a){for(var e=b.listeners[d],f=0;f<e.length;f++)++c,qd(e[f]);delete b.listeners[d];b.h--}b=c}else b=0;return b};
function Kd(a,b,c,d){b=a.h.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.Mb&&g.capture==c){var h=g.listener,k=g.cc||g.src;g.Vb&&td(a.h,g);e=!1!==h.call(k,d)&&e}}return e&&!d.defaultPrevented}
;function Ld(a,b){this.j=a;this.l=b;this.i=0;this.h=null}
Ld.prototype.get=function(){if(0<this.i){this.i--;var a=this.h;this.h=a.next;a.next=null}else a=this.j();return a};
function Md(a,b){a.l(b);100>a.i&&(a.i++,b.next=a.h,a.h=b)}
;function Nd(){}
function Od(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;"ARTICLE SECTION NAV ASIDE H1 H2 H3 H4 H5 H6 HEADER FOOTER ADDRESS P HR PRE BLOCKQUOTE OL UL LH LI DL DT DD FIGURE FIGCAPTION MAIN DIV EM STRONG SMALL S CITE Q DFN ABBR RUBY RB RT RTC RP DATA TIME CODE VAR SAMP KBD SUB SUP I B U MARK BDI BDO SPAN BR WBR INS DEL PICTURE PARAM TRACK MAP TABLE CAPTION COLGROUP COL TBODY THEAD TFOOT TR TD TH SELECT DATALIST OPTGROUP OPTION OUTPUT PROGRESS METER FIELDSET LEGEND DETAILS SUMMARY MENU DIALOG SLOT CANVAS FONT CENTER ACRONYM BASEFONT BIG DIR HGROUP STRIKE TT".split(" ").concat(["BUTTON",
"INPUT"]);function Pd(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0}
m=Pd.prototype;m.clone=function(){return new Pd(this.x,this.y)};
m.equals=function(a){return a instanceof Pd&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
m.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
m.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
m.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};
m.scale=function(a,b){this.x*=a;this.y*="number"===typeof b?b:a;return this};function Qd(a,b){this.width=a;this.height=b}
m=Qd.prototype;m.clone=function(){return new Qd(this.width,this.height)};
m.aspectRatio=function(){return this.width/this.height};
m.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
m.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
m.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};
m.scale=function(a,b){this.width*=a;this.height*="number"===typeof b?b:a;return this};function Rd(a){var b=document;return"string"===typeof a?b.getElementById(a):a}
function Sd(a){var b=document;a=String(a);"application/xhtml+xml"===b.contentType&&(a=a.toLowerCase());return b.createElement(a)}
function Td(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;var Ud;function Vd(){var a=C.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!F("Presto")&&(a=function(){var e=Sd("IFRAME");e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=Xa(function(k){if(("*"==h||k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!ec()){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.bd;c.bd=null;e()}};
return function(e){d.next={bd:e};d=d.next;b.port2.postMessage(0)}}return function(e){C.setTimeout(e,0)}}
;function Wd(a){C.setTimeout(function(){throw a;},0)}
;function Xd(){this.i=this.h=null}
Xd.prototype.add=function(a,b){var c=Yd.get();c.set(a,b);this.i?this.i.next=c:this.h=c;this.i=c};
Xd.prototype.remove=function(){var a=null;this.h&&(a=this.h,this.h=this.h.next,this.h||(this.i=null),a.next=null);return a};
var Yd=new Ld(function(){return new Zd},function(a){return a.reset()});
function Zd(){this.next=this.scope=this.h=null}
Zd.prototype.set=function(a,b){this.h=a;this.scope=b;this.next=null};
Zd.prototype.reset=function(){this.next=this.scope=this.h=null};var $d,ae=!1,be=new Xd;function ce(a,b){$d||de();ae||($d(),ae=!0);be.add(a,b)}
function de(){if(C.Promise&&C.Promise.resolve){var a=C.Promise.resolve(void 0);$d=function(){a.then(ee)}}else $d=function(){var b=ee;
"function"!==typeof C.setImmediate||C.Window&&C.Window.prototype&&(cc()||!F("Edge"))&&C.Window.prototype.setImmediate==C.setImmediate?(Ud||(Ud=Vd()),Ud(b)):C.setImmediate(b)}}
function ee(){for(var a;a=be.remove();){try{a.h.call(a.scope)}catch(b){Wd(b)}Md(Yd,a)}ae=!1}
;function fe(a){this.h=0;this.A=void 0;this.l=this.i=this.j=null;this.v=this.m=!1;if(a!=Nd)try{var b=this;a.call(void 0,function(c){ge(b,2,c)},function(c){ge(b,3,c)})}catch(c){ge(this,3,c)}}
function he(){this.next=this.context=this.h=this.i=this.child=null;this.j=!1}
he.prototype.reset=function(){this.context=this.h=this.i=this.child=null;this.j=!1};
var ie=new Ld(function(){return new he},function(a){a.reset()});
function je(a,b,c){var d=ie.get();d.i=a;d.h=b;d.context=c;return d}
function ke(a){return new fe(function(b,c){c(a)})}
fe.prototype.then=function(a,b,c){return le(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};
fe.prototype.$goog_Thenable=!0;m=fe.prototype;m.oc=function(a,b){return le(this,null,a,b)};
m.catch=fe.prototype.oc;m.cancel=function(a){if(0==this.h){var b=new me(a);ce(function(){ne(this,b)},this)}};
function ne(a,b){if(0==a.h)if(a.j){var c=a.j;if(c.i){for(var d=0,e=null,f=null,g=c.i;g&&(g.j||(d++,g.child==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.h&&1==d?ne(c,b):(f?(d=f,d.next==c.l&&(c.l=d),d.next=d.next.next):oe(c),pe(c,e,3,b)))}a.j=null}else ge(a,3,b)}
function qe(a,b){a.i||2!=a.h&&3!=a.h||re(a);a.l?a.l.next=b:a.i=b;a.l=b}
function le(a,b,c,d){var e=je(null,null,null);e.child=new fe(function(f,g){e.i=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.h=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof me?g(h):f(k)}catch(l){g(l)}}:g});
e.child.j=a;qe(a,e);return e.child}
m.kf=function(a){this.h=0;ge(this,2,a)};
m.lf=function(a){this.h=0;ge(this,3,a)};
function ge(a,b,c){if(0==a.h){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.h=1;a:{var d=c,e=a.kf,f=a.lf;if(d instanceof fe){qe(d,je(e||Nd,f||null,a));var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(l){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(Ra(d))try{var k=d.then;if("function"===typeof k){se(d,k,e,f,a);g=!0;break a}}catch(l){f.call(a,l);g=!0;break a}g=!1}}}g||(a.A=c,a.h=b,a.j=null,re(a),3!=b||c instanceof me||te(a,c))}}
function se(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function re(a){a.m||(a.m=!0,ce(a.be,a))}
function oe(a){var b=null;a.i&&(b=a.i,a.i=b.next,b.next=null);a.i||(a.l=null);return b}
m.be=function(){for(var a;a=oe(this);)pe(this,a,this.h,this.A);this.m=!1};
function pe(a,b,c,d){if(3==c&&b.h&&!b.j)for(;a&&a.v;a=a.j)a.v=!1;if(b.child)b.child.j=null,ue(b,c,d);else try{b.j?b.i.call(b.context):ue(b,c,d)}catch(e){ve.call(null,e)}Md(ie,b)}
function ue(a,b,c){2==b?a.i.call(a.context,c):a.h&&a.h.call(a.context,c)}
function te(a,b){a.v=!0;ce(function(){a.v&&ve.call(null,b)})}
var ve=Wd;function me(a){bb.call(this,a)}
$a(me,bb);me.prototype.name="cancel";function we(a,b){Id.call(this);this.j=a||1;this.i=b||C;this.l=Xa(this.hf,this);this.m=Za()}
$a(we,Id);m=we.prototype;m.enabled=!1;m.Ea=null;m.setInterval=function(a){this.j=a;this.Ea&&this.enabled?(this.stop(),this.start()):this.Ea&&this.stop()};
m.hf=function(){if(this.enabled){var a=Za()-this.m;0<a&&a<.8*this.j?this.Ea=this.i.setTimeout(this.l,this.j-a):(this.Ea&&(this.i.clearTimeout(this.Ea),this.Ea=null),Jd(this,"tick"),this.enabled&&(this.stop(),this.start()))}};
m.start=function(){this.enabled=!0;this.Ea||(this.Ea=this.i.setTimeout(this.l,this.j),this.m=Za())};
m.stop=function(){this.enabled=!1;this.Ea&&(this.i.clearTimeout(this.Ea),this.Ea=null)};
m.S=function(){we.Aa.S.call(this);this.stop();delete this.i};
function xe(a,b,c){if("function"===typeof a)c&&(a=Xa(a,c));else if(a&&"function"==typeof a.handleEvent)a=Xa(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:C.setTimeout(a,b||0)}
;function ye(a){H.call(this);this.D=a;this.j=0;this.l=100;this.m=!1;this.i=new Map;this.A=new Set;this.flushInterval=3E4;this.h=new we(this.flushInterval);this.h.listen("tick",this.Oa,!1,this);Rc(this,this.h)}
w(ye,H);m=ye.prototype;m.sendIsolatedPayload=function(a){this.m=a;this.l=1};
function ze(a){a.h.enabled||a.h.start();a.j++;a.j>=a.l&&a.Oa()}
m.Oa=function(){var a=this.i.values();a=[].concat(ma(a)).filter(function(b){return b.h.size});
a.length&&this.D.flush(a,this.m);Ae(a);this.j=0;this.h.enabled&&this.h.stop()};
m.Rb=function(a){var b=B.apply(1,arguments);this.i.has(a)||this.i.set(a,new Nc(a,b))};
m.uc=function(a){var b=B.apply(1,arguments);this.i.has(a)||this.i.set(a,new Oc(a,b))};
function Be(a,b){return a.A.has(b)?void 0:a.i.get(b)}
m.pc=function(a){this.Od(a,1,B.apply(1,arguments))};
m.Od=function(a,b){var c=B.apply(2,arguments),d=Be(this,a);d&&d instanceof Nc&&(d.i(b,c),ze(this))};
m.record=function(a,b){var c=B.apply(2,arguments),d=Be(this,a);d&&d instanceof Oc&&(d.record(b,c),ze(this))};
function Ae(a){for(var b=0;b<a.length;b++)a[b].clear()}
;function Ce(a){this.h=a;this.h.Rb("/client_streamz/bg/fic",{na:3,ma:"ke"})}
function De(a){this.h=a;this.h.Rb("/client_streamz/bg/fiec",{na:3,ma:"rk"},{na:3,ma:"ke"},{na:2,ma:"ec"},{na:3,ma:"em"})}
function Ee(a){this.h=a;this.h.uc("/client_streamz/bg/fil",{na:3,ma:"rk"},{na:3,ma:"ke"})}
Ee.prototype.record=function(a,b,c){this.h.record("/client_streamz/bg/fil",a,b,c)};
function Fe(a){this.h=a;this.h.Rb("/client_streamz/bg/fcc",{na:2,ma:"ph"},{na:3,ma:"ke"})}
function Ge(a){this.h=a;this.h.uc("/client_streamz/bg/fcd",{na:2,ma:"ph"},{na:3,ma:"ke"})}
Ge.prototype.record=function(a,b,c){this.h.record("/client_streamz/bg/fcd",a,b,c)};
function He(a){this.h=a;this.h.Rb("/client_streamz/bg/fsc",{na:3,ma:"rk"},{na:3,ma:"ke"})}
function Ie(a){this.h=a;this.h.uc("/client_streamz/bg/fsl",{na:3,ma:"rk"},{na:3,ma:"ke"})}
Ie.prototype.record=function(a,b,c){this.h.record("/client_streamz/bg/fsl",a,b,c)};var Je={toString:function(a){var b=[],c=0;a-=-2147483648;b[c++]="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(a%52);for(a=Math.floor(a/52);0<a;)b[c++]="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".charAt(a%62),a=Math.floor(a/62);return b.join("")}};function Ke(a){function b(){c-=d;c-=e;c^=e>>>13;d-=e;d-=c;d^=c<<8;e-=c;e-=d;e^=d>>>13;c-=d;c-=e;c^=e>>>12;d-=e;d-=c;d^=c<<16;e-=c;e-=d;e^=d>>>5;c-=d;c-=e;c^=e>>>3;d-=e;d-=c;d^=c<<10;e-=c;e-=d;e^=d>>>15}
a=Le(a);for(var c=2654435769,d=2654435769,e=314159265,f=a.length,g=f,h=0;12<=g;g-=12,h+=12)c+=Me(a,h),d+=Me(a,h+4),e+=Me(a,h+8),b();e+=f;switch(g){case 11:e+=a[h+10]<<24;case 10:e+=a[h+9]<<16;case 9:e+=a[h+8]<<8;case 8:d+=a[h+7]<<24;case 7:d+=a[h+6]<<16;case 6:d+=a[h+5]<<8;case 5:d+=a[h+4];case 4:c+=a[h+3]<<24;case 3:c+=a[h+2]<<16;case 2:c+=a[h+1]<<8;case 1:c+=a[h+0]}b();return Je.toString(e)}
function Le(a){for(var b=[],c=0;c<a.length;c++)b.push(a.charCodeAt(c));return b}
function Me(a,b){return a[b+0]+(a[b+1]<<8)+(a[b+2]<<16)+(a[b+3]<<24)}
;fc();var Ne=Vc()||F("iPod"),Oe=F("iPad");!F("Android")||hc()||fc()||dc()||F("Silk");hc();var Pe=F("Safari")&&!(hc()||(cc()?0:F("Coast"))||dc()||(cc()?0:F("Edge"))||(cc()?bc("Microsoft Edge"):F("Edg/"))||(cc()?bc("Opera"):F("OPR"))||fc()||F("Silk")||F("Android"))&&!(Vc()||F("iPad")||F("iPod"));var Qe={},Re=null;function Se(a,b){Qa(a);void 0===b&&(b=0);Te();b=Qe[b];for(var c=Array(Math.floor(a.length/3)),d=b[64]||"",e=0,f=0;e<a.length-2;e+=3){var g=a[e],h=a[e+1],k=a[e+2],l=b[g>>2];g=b[(g&3)<<4|h>>4];h=b[(h&15)<<2|k>>6];k=b[k&63];c[f++]=""+l+g+h+k}l=0;k=d;switch(a.length-e){case 2:l=a[e+1],k=b[(l&15)<<2]||d;case 1:a=a[e],c[f]=""+b[a>>2]+b[(a&3)<<4|l>>4]+k+d}return c.join("")}
function Ue(a){var b=a.length,c=3*b/4;c%3?c=Math.floor(c):-1!="=.".indexOf(a[b-1])&&(c=-1!="=.".indexOf(a[b-2])?c-2:c-1);var d=new Uint8Array(c),e=0;Ve(a,function(f){d[e++]=f});
return e!==c?d.subarray(0,e):d}
function Ve(a,b){function c(k){for(;d<a.length;){var l=a.charAt(d++),n=Re[l];if(null!=n)return n;if(!/^[\s\xa0]*$/.test(l))throw Error("Unknown base64 encoding at char: "+l);}return k}
Te();for(var d=0;;){var e=c(-1),f=c(0),g=c(64),h=c(64);if(64===h&&-1===e)break;b(e<<2|f>>4);64!=g&&(b(f<<4&240|g>>2),64!=h&&b(g<<6&192|h))}}
function Te(){if(!Re){Re={};for(var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),b=["+/=","+/","-_=","-_.","-_"],c=0;5>c;c++){var d=a.concat(b[c].split(""));Qe[c]=d;for(var e=0;e<d.length;e++){var f=d[e];void 0===Re[f]&&(Re[f]=e)}}}}
;var We="undefined"!==typeof Uint8Array,Xe=!Yc&&"function"===typeof btoa;function Ye(a){if(!Xe)return Se(a);for(var b="",c=0,d=a.length-10240;c<d;)b+=String.fromCharCode.apply(null,a.subarray(c,c+=10240));b+=String.fromCharCode.apply(null,c?a.subarray(c):a);return btoa(b)}
var Ze=/[-_.]/g,$e={"-":"+",_:"/",".":"="};function af(a){return $e[a]||""}
function bf(a){return We&&null!=a&&a instanceof Uint8Array}
var cf={};var df;function ef(a){if(a!==cf)throw Error("illegal external caller");}
function ff(a,b){ef(b);this.h=a;if(null!=a&&0===a.length)throw Error("ByteString should be constructed with non-empty values");}
ff.prototype.sizeBytes=function(){ef(cf);var a=this.h;if(null!=a&&!bf(a))if("string"===typeof a)if(Xe){Ze.test(a)&&(a=a.replace(Ze,af));a=atob(a);for(var b=new Uint8Array(a.length),c=0;c<a.length;c++)b[c]=a.charCodeAt(c);a=b}else a=Ue(a);else Pa(a),a=null;return(a=null==a?a:this.h=a)?a.length:0};function gf(){return"function"===typeof BigInt}
;function hf(a){return Array.prototype.slice.call(a)}
;var jf;jf="function"===typeof Symbol&&"symbol"===typeof Symbol()?Symbol():void 0;Math.max.apply(Math,ma(Object.values({Nf:1,Lf:2,Kf:4,Qf:8,Pf:16,Of:32,Bf:64,Sf:128,Jf:256,If:512,Mf:1024,Gf:2048,Rf:4096,Hf:8192})));var kf=jf?function(a,b){a[jf]|=b}:function(a,b){void 0!==a.Sa?a.Sa|=b:Object.defineProperties(a,{Sa:{value:b,
configurable:!0,writable:!0,enumerable:!1}})};
function lf(a,b,c){return c?a|b:a&~b}
var mf=jf?function(a){return a[jf]|0}:function(a){return a.Sa|0},nf=jf?function(a){return a[jf]}:function(a){return a.Sa},of=jf?function(a,b){a[jf]=b;
return a}:function(a,b){void 0!==a.Sa?a.Sa=b:Object.defineProperties(a,{Sa:{value:b,
configurable:!0,writable:!0,enumerable:!1}});return a};
function pf(a,b){of(b,(a|0)&-14591)}
function qf(a,b){of(b,(a|34)&-14557)}
function rf(a){a=a>>14&1023;return 0===a?536870912:a}
;var sf={},tf={};function uf(a){return!(!a||"object"!==typeof a||a.h!==tf)}
function vf(a){return null!==a&&"object"===typeof a&&!Array.isArray(a)&&a.constructor===Object}
var wf;function xf(a,b,c){if(!Array.isArray(a)||a.length)return!1;var d=mf(a);if(d&1)return!0;if(!(b&&(Array.isArray(b)?b.includes(c):b.has(c))))return!1;of(a,d|1);return!0}
var yf,zf=[];of(zf,55);yf=Object.freeze(zf);function Af(a){if(a&2)throw Error();}
Object.freeze(new function(){});
Object.freeze(new function(){});var Bf=0,Cf=0;function Df(a){var b=0>a;a=Math.abs(a);var c=a>>>0;a=Math.floor((a-c)/4294967296);b&&(c=v(Ef(c,a)),b=c.next().value,a=c.next().value,c=b);Bf=c>>>0;Cf=a>>>0}
function Ff(a,b){b>>>=0;a>>>=0;if(2097151>=b)var c=""+(4294967296*b+a);else gf()?c=""+(BigInt(b)<<BigInt(32)|BigInt(a)):(c=(a>>>24|b<<8)&16777215,b=b>>16&65535,a=(a&16777215)+6777216*c+6710656*b,c+=8147497*b,b*=2,1E7<=a&&(c+=Math.floor(a/1E7),a%=1E7),1E7<=c&&(b+=Math.floor(c/1E7),c%=1E7),c=b+Gf(c)+Gf(a));return c}
function Gf(a){a=String(a);return"0000000".slice(a.length)+a}
function Hf(){var a=Bf,b=Cf;b&2147483648?gf()?a=""+(BigInt(b|0)<<BigInt(32)|BigInt(a>>>0)):(b=v(Ef(a,b)),a=b.next().value,b=b.next().value,a="-"+Ff(a,b)):a=Ff(a,b);return a}
function Ef(a,b){b=~b;a?a=~a+1:b+=1;return[a,b]}
;function If(a){a=Error(a);a.__closure__error__context__984382||(a.__closure__error__context__984382={});a.__closure__error__context__984382.severity="warning";return a}
;function Jf(a){return a.displayName||a.name||"unknown type name"}
function Kf(a){if(null!=a&&"boolean"!==typeof a)throw Error("Expected boolean but got "+Pa(a)+": "+a);return a}
var Lf=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;function Mf(a){var b=typeof a;return"number"===b?Number.isFinite(a):"string"!==b?!1:Lf.test(a)}
function Nf(a){if(null!=a){if("number"!==typeof a)throw If("int32");if(!Number.isFinite(a))throw If("int32");a|=0}return a}
function Of(a){if(null==a)return a;if("string"===typeof a){if(!a)return;a=+a}if("number"===typeof a)return Number.isFinite(a)?a|0:void 0}
function Pf(a){if(null!=a){var b=!!b;if(!Mf(a))throw If("int64");a="string"===typeof a?Qf(a):b?Rf(a):Sf(a)}return a}
function Tf(a){return"-"===a[0]?20>a.length?!0:20===a.length&&-922337<Number(a.substring(0,7)):19>a.length?!0:19===a.length&&922337>Number(a.substring(0,6))}
function Sf(a){Mf(a);a=Math.trunc(a);if(!Number.isSafeInteger(a)){Df(a);var b=Bf,c=Cf;if(a=c&2147483648)b=~b+1>>>0,c=~c>>>0,0==b&&(c=c+1>>>0);b=4294967296*c+(b>>>0);a=a?-b:b}return a}
function Rf(a){Mf(a);a=Math.trunc(a);if(Number.isSafeInteger(a))a=String(a);else{var b=String(a);Tf(b)?a=b:(Df(a),a=Hf())}return a}
function Qf(a){Mf(a);var b=Math.trunc(Number(a));if(Number.isSafeInteger(b))return String(b);b=a.indexOf(".");-1!==b&&(a=a.substring(0,b));a.indexOf(".");if(!Tf(a)){if(16>a.length)Df(Number(a));else if(gf())a=BigInt(a),Bf=Number(a&BigInt(4294967295))>>>0,Cf=Number(a>>BigInt(32)&BigInt(4294967295));else{b=+("-"===a[0]);Cf=Bf=0;for(var c=a.length,d=0+b,e=(c-b)%6+b;e<=c;d=e,e+=6)d=Number(a.slice(d,e)),Cf*=1E6,Bf=1E6*Bf+d,4294967296<=Bf&&(Cf+=Math.trunc(Bf/4294967296),Cf>>>=0,Bf>>>=0);b&&(b=v(Ef(Bf,Cf)),
a=b.next().value,b=b.next().value,Bf=a,Cf=b)}a=Hf()}return a}
function Uf(a){if(null!=a&&"string"!==typeof a)throw Error();return a}
function Vf(a,b){if(!(a instanceof b))throw Error("Expected instanceof "+Jf(b)+" but got "+(a&&Jf(a.constructor)));}
function Wf(a,b,c){if(null!=a&&"object"===typeof a&&a.Jc===sf)return a;if(Array.isArray(a)){var d=mf(a),e=d;0===e&&(e|=c&32);e|=c&2;e!==d&&of(a,e);return new b(a)}}
;var Xf;function Yf(a,b){mf(b);Xf=b;a=new a(b);Xf=void 0;return a}
function I(a,b,c){null==a&&(a=Xf);Xf=void 0;if(null==a){var d=96;c?(a=[c],d|=512):a=[];b&&(d=d&-16760833|(b&1023)<<14)}else{if(!Array.isArray(a))throw Error();d=mf(a);if(d&2048)throw Error();if(d&64)return a;d|=64;if(c&&(d|=512,c!==a[0]))throw Error();a:{c=a;var e=c.length;if(e){var f=e-1;if(vf(c[f])){d|=256;b=f-(+!!(d&512)-1);if(1024<=b)throw Error();d=d&-16760833|(b&1023)<<14;break a}}if(b){b=Math.max(b,e-(+!!(d&512)-1));if(1024<b)throw Error();d=d&-16760833|(b&1023)<<14}}}of(a,d);return a}
;function Zf(a,b){return $f(b)}
function $f(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "boolean":return a?1:0;case "object":if(a)if(Array.isArray(a)){if(xf(a,void 0,0))return}else{if(bf(a))return Ye(a);if(a instanceof ff){var b=a.h;return null==b?"":"string"===typeof b?b:a.h=Ye(b)}}}return a}
;function ag(a,b,c){a=hf(a);var d=a.length,e=b&256?a[d-1]:void 0;d+=e?-1:0;for(b=b&512?1:0;b<d;b++)a[b]=c(a[b]);if(e){b=a[b]={};for(var f in e)b[f]=c(e[f])}return a}
function bg(a,b,c,d,e){if(null!=a){if(Array.isArray(a))a=xf(a,void 0,0)?void 0:e&&mf(a)&2?a:cg(a,b,c,void 0!==d,e);else if(vf(a)){var f={},g;for(g in a)f[g]=bg(a[g],b,c,d,e);a=f}else a=b(a,d);return a}}
function cg(a,b,c,d,e){var f=d||c?mf(a):0;d=d?!!(f&32):void 0;a=hf(a);for(var g=0;g<a.length;g++)a[g]=bg(a[g],b,c,d,e);c&&c(f,a);return a}
function dg(a){return a.Jc===sf?a.toJSON():$f(a)}
;function eg(a,b,c){c=void 0===c?qf:c;if(null!=a){if(We&&a instanceof Uint8Array)return b?a:new Uint8Array(a);if(Array.isArray(a)){var d=mf(a);if(d&2)return a;b&&(b=0===d||!!(d&32)&&!(d&64||!(d&16)));return b?of(a,(d|34)&-12293):cg(a,eg,d&4?qf:c,!0,!0)}a.Jc===sf&&(c=a.F,d=nf(c),a=d&2?a:Yf(a.constructor,fg(c,d,!0)));return a}}
function fg(a,b,c){var d=c||b&2?qf:pf,e=!!(b&32);a=ag(a,b,function(f){return eg(f,e,d)});
kf(a,32|(c?2:0));return a}
function gg(a){var b=a.F,c=nf(b);return c&2?Yf(a.constructor,fg(b,c,!1)):a}
;function hg(a,b){a=a.F;return ig(a,nf(a),b)}
function ig(a,b,c,d){if(-1===c)return null;if(c>=rf(b)){if(b&256)return a[a.length-1][c]}else{var e=a.length;if(d&&b&256&&(d=a[e-1][c],null!=d))return d;b=c+(+!!(b&512)-1);if(b<e)return a[b]}}
function jg(a,b,c){var d=a.F,e=nf(d);Af(e);kg(d,e,b,c);return a}
function kg(a,b,c,d,e){vf(d);var f=rf(b);if(c>=f||e){var g=b;if(b&256)e=a[a.length-1];else{if(null==d)return g;e=a[f+(+!!(b&512)-1)]={};g|=256}e[c]=d;c<f&&(a[c+(+!!(b&512)-1)]=void 0);g!==b&&of(a,g);return g}a[c+(+!!(b&512)-1)]=d;b&256&&(a=a[a.length-1],c in a&&delete a[c]);return b}
function lg(a){return void 0!==mg(a,ng,11,!1)}
function og(a){return!!(2&a)&&!!(4&a)||!!(2048&a)}
function pg(a,b,c,d){a=a.F;var e=nf(a);Af(e);for(var f=e,g=0,h=0;h<c.length;h++){var k=c[h];null!=ig(a,f,k)&&(0!==g&&(f=kg(a,f,g)),g=k)}(c=g)&&c!==b&&null!=d&&(e=kg(a,e,c));kg(a,e,b,d)}
function mg(a,b,c,d){a=a.F;var e=nf(a),f=ig(a,e,c,d);b=Wf(f,b,e);b!==f&&null!=b&&kg(a,e,c,b,d);return b}
function qg(a,b,c,d){d=void 0===d?!1:d;b=mg(a,b,c,d);if(null==b)return b;a=a.F;var e=nf(a);if(!(e&2)){var f=gg(b);f!==b&&(b=f,kg(a,e,c,b,d))}return b}
function rg(a,b,c,d){null!=d?Vf(d,b):d=void 0;return jg(a,c,d)}
function sg(a,b,c,d){var e=a.F,f=nf(e);Af(f);if(null==d)return kg(e,f,c),a;if(!Array.isArray(d))throw If();for(var g=mf(d),h=g,k=!!(2&g)||!!(2048&g),l=k||Object.isFrozen(d),n=!l&&!1,p=!0,r=!0,t=0;t<d.length;t++){var y=d[t];Vf(y,b);k||(y=!!(mf(y.F)&2),p&&(p=!y),r&&(r=y))}k||(g=lf(g,5,!0),g=lf(g,8,p),g=lf(g,16,r));if(n||l&&g!==h)d=hf(d),h=0,g=tg(g,f,!0);g!==h&&of(d,g);kg(e,f,c,d);return a}
function tg(a,b,c){a=lf(a,2,!!(2&b));a=lf(a,32,!!(32&b)&&c);return a=lf(a,2048,!1)}
function ug(a,b){a=hg(a,b);var c;null==a?c=a:Mf(a)?"number"===typeof a?c=Sf(a):c=Qf(a):c=void 0;return c}
function vg(a){a=hg(a,1);var b=void 0===b?!1:b;b=null==a?a:Mf(a)?"string"===typeof a?Qf(a):b?Rf(a):Sf(a):void 0;return b}
function wg(a){a=hg(a,1);return null==a?a:Number.isFinite(a)?a|0:void 0}
function xg(a,b,c){return jg(a,b,Uf(c))}
function yg(a,b,c){if(null!=c){if(!Number.isFinite(c))throw If("enum");c|=0}return jg(a,b,c)}
;function K(a,b,c){this.F=I(a,b,c)}
m=K.prototype;m.toJSON=function(){if(wf)var a=zg(this,this.F,!1);else a=cg(this.F,dg,void 0,void 0,!1),a=zg(this,a,!0);return a};
m.serialize=function(){wf=!0;try{return JSON.stringify(this.toJSON(),Zf)}finally{wf=!1}};
function Ag(a,b){if(null==b||""==b)return new a;b=JSON.parse(b);if(!Array.isArray(b))throw Error(void 0);kf(b,32);return Yf(a,b)}
m.clone=function(){var a=this.F,b=nf(a);return Yf(this.constructor,fg(a,b,!1))};
m.Jc=sf;m.toString=function(){return zg(this,this.F,!1).toString()};
function zg(a,b,c){var d=Yb?void 0:a.constructor.Ua;var e=nf(c?a.F:b);a=b.length;if(!a)return b;var f;if(vf(c=b[a-1])){a:{var g=c;var h={},k=!1,l;for(l in g){var n=g[l];if(Array.isArray(n)){var p=n;if(xf(n,d,+l)||uf(n)&&0===n.size)n=null;n!=p&&(k=!0)}null!=n?h[l]=n:k=!0}if(k){for(var r in h){g=h;break a}g=null}}g!=c&&(f=!0);a--}for(l=+!!(e&512)-1;0<a;a--){r=a-1;c=b[r];r-=l;if(!(null==c||xf(c,d,r)||uf(c)&&0===c.size))break;var t=!0}if(!f&&!t)return b;b=Array.prototype.slice.call(b,0,a);g&&b.push(g);
return b}
;function Bg(a){this.F=I(a)}
w(Bg,K);var Cg=[1,2,3];function Dg(a){this.F=I(a)}
w(Dg,K);var Eg=[1,2,3];function Fg(a){this.F=I(a)}
w(Fg,K);Fg.Ua=[1];function Gg(a){this.F=I(a)}
w(Gg,K);Gg.Ua=[3,6,4];function Hg(a){this.F=I(a)}
w(Hg,K);Hg.Ua=[1];function Ig(a){if(!a)return"";if(/^about:(?:blank|srcdoc)$/.test(a))return window.origin||"";0===a.indexOf("blob:")&&(a=a.substring(5));a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if("http"!==c&&"https"!==c&&"chrome-extension"!==
c&&"moz-extension"!==c&&"file"!==c&&"android-app"!==c&&"chrome-search"!==c&&"chrome-untrusted"!==c&&"chrome"!==c&&"app"!==c&&"devtools"!==c)throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===c&&"80"!==e||"https"===c&&"443"!==e)a=":"+e}return c+"://"+b+a}
;function Jg(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;n=l=0}
function b(p){for(var r=g,t=0;64>t;t+=4)r[t/4]=p[t]<<24|p[t+1]<<16|p[t+2]<<8|p[t+3];for(t=16;80>t;t++)p=r[t-3]^r[t-8]^r[t-14]^r[t-16],r[t]=(p<<1|p>>>31)&4294967295;p=e[0];var y=e[1],z=e[2],x=e[3],J=e[4];for(t=0;80>t;t++){if(40>t)if(20>t){var G=x^y&(z^x);var R=1518500249}else G=y^z^x,R=1859775393;else 60>t?(G=y&z|x&(y|z),R=2400959708):(G=y^z^x,R=3395469782);G=((p<<5|p>>>27)&4294967295)+G+J+R+r[t]&4294967295;J=x;x=z;z=(y<<30|y>>>2)&4294967295;y=p;p=G}e[0]=e[0]+p&4294967295;e[1]=e[1]+y&4294967295;e[2]=
e[2]+z&4294967295;e[3]=e[3]+x&4294967295;e[4]=e[4]+J&4294967295}
function c(p,r){if("string"===typeof p){p=unescape(encodeURIComponent(p));for(var t=[],y=0,z=p.length;y<z;++y)t.push(p.charCodeAt(y));p=t}r||(r=p.length);t=0;if(0==l)for(;t+64<r;)b(p.slice(t,t+64)),t+=64,n+=64;for(;t<r;)if(f[l++]=p[t++],n++,64==l)for(l=0,b(f);t+64<r;)b(p.slice(t,t+64)),t+=64,n+=64}
function d(){var p=[],r=8*n;56>l?c(h,56-l):c(h,64-(l-56));for(var t=63;56<=t;t--)f[t]=r&255,r>>>=8;b(f);for(t=r=0;5>t;t++)for(var y=24;0<=y;y-=8)p[r++]=e[t]>>y&255;return p}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var l,n;a();return{reset:a,update:c,digest:d,Xd:function(){for(var p=d(),r="",t=0;t<p.length;t++)r+="0123456789ABCDEF".charAt(Math.floor(p[t]/16))+"0123456789ABCDEF".charAt(p[t]%16);return r}}}
;function Kg(a,b,c){var d=String(C.location.href);return d&&a&&b?[b,Lg(Ig(d),a,c||null)].join(" "):null}
function Lg(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],Fb(d,function(h){e.push(h)}),Mg(e.join(" "));
var f=[],g=[];Fb(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];Fb(d,function(h){e.push(h)});
a=Mg(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function Mg(a){var b=Jg();b.update(a);return b.Xd().toLowerCase()}
;var Ng={};function Og(a){this.h=a||{cookie:""}}
m=Og.prototype;m.isEnabled=function(){if(!C.navigator.cookieEnabled)return!1;if(this.h.cookie)return!0;this.set("TESTCOOKIESENABLED","1",{Kb:60});if("1"!==this.get("TESTCOOKIESENABLED"))return!1;this.remove("TESTCOOKIESENABLED");return!0};
m.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.Qe;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.Kb}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*h)).toUTCString();this.h.cookie=a+"="+b+c+g+h+d+(null!=e?";samesite="+
e:"")};
m.get=function(a,b){for(var c=a+"=",d=(this.h.cookie||"").split(";"),e=0,f;e<d.length;e++){f=db(d[e]);if(0==f.lastIndexOf(c,0))return f.slice(c.length);if(f==a)return""}return b};
m.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{Kb:0,path:b,domain:c});return d};
m.Bc=function(){return Pg(this).keys};
m.clear=function(){for(var a=Pg(this).keys,b=a.length-1;0<=b;b--)this.remove(a[b])};
function Pg(a){a=(a.h.cookie||"").split(";");for(var b=[],c=[],d,e,f=0;f<a.length;f++)e=db(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));return{keys:b,values:c}}
var Qg=new Og("undefined"==typeof document?null:document);function Tg(a){return!!Ng.FPA_SAMESITE_PHASE2_MOD||!(void 0===a||!a)}
function Ug(a){a=void 0===a?!1:a;var b=C.__SAPISID||C.__APISID||C.__3PSAPISID||C.__OVERRIDE_SID;Tg(a)&&(b=b||C.__1PSAPISID);if(b)return!0;if("undefined"!==typeof document){var c=new Og(document);b=c.get("SAPISID")||c.get("APISID")||c.get("__Secure-3PAPISID")||c.get("SID")||c.get("OSID");Tg(a)&&(b=b||c.get("__Secure-1PAPISID"))}return!!b}
function Vg(a,b,c,d){(a=C[a])||"undefined"===typeof document||(a=(new Og(document)).get(b));return a?Kg(a,c,d):null}
function Wg(a,b){b=void 0===b?!1:b;var c=Ig(String(C.location.href)),d=[];if(Ug(b)){c=0==c.indexOf("https:")||0==c.indexOf("chrome-extension:")||0==c.indexOf("moz-extension:");var e=c?C.__SAPISID:C.__APISID;e||"undefined"===typeof document||(e=new Og(document),e=e.get(c?"SAPISID":"APISID")||e.get("__Secure-3PAPISID"));(e=e?Kg(e,c?"SAPISIDHASH":"APISIDHASH",a):null)&&d.push(e);c&&Tg(b)&&((b=Vg("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&d.push(b),(a=Vg("__3PSAPISID","__Secure-3PAPISID",
"SAPISID3PHASH",a))&&d.push(a))}return 0==d.length?null:d.join(" ")}
;function Xg(a){this.F=I(a)}
w(Xg,K);Xg.Ua=[2];function Yg(a){Id.call(this);this.intervalMs=a;this.enabled=!1;this.i=function(){return Za()};
this.j=this.i()}
w(Yg,Id);Yg.prototype.setInterval=function(a){this.intervalMs=a;this.timer&&this.enabled?(this.stop(),this.start()):this.timer&&this.stop()};
Yg.prototype.start=function(){var a=this;this.enabled=!0;this.timer||(this.timer=setTimeout(function(){a.tick()},this.intervalMs),this.j=this.i())};
Yg.prototype.stop=function(){this.enabled=!1;this.timer&&(clearTimeout(this.timer),this.timer=void 0)};
Yg.prototype.tick=function(){var a=this;if(this.enabled){var b=Math.max(this.i()-this.j,0);b<.8*this.intervalMs?this.timer=setTimeout(function(){a.tick()},this.intervalMs-b):(this.timer&&(clearTimeout(this.timer),this.timer=void 0),Jd(this,"tick"),this.enabled&&(this.stop(),this.start()))}else this.timer=void 0};function Zg(a){this.F=I(a)}
w(Zg,K);function $g(a){this.F=I(a)}
w($g,K);function ah(a){this.h=this.i=this.j=a}
ah.prototype.reset=function(){this.h=this.i=this.j};
ah.prototype.getValue=function(){return this.i};function bh(a){this.F=I(a)}
w(bh,K);bh.prototype.ac=function(){return wg(this)};function ch(a){this.F=I(a)}
w(ch,K);function dh(a){this.F=I(a)}
w(dh,K);function eh(a,b){sg(a,ch,1,b)}
dh.Ua=[1];function ng(a){this.F=I(a)}
w(ng,K);var fh=["platform","platformVersion","architecture","model","uaFullVersion"],gh=new dh,hh=null;function ih(a,b){b=void 0===b?fh:b;if(!hh){var c;a=null==(c=a.navigator)?void 0:c.userAgentData;if(!a||"function"!==typeof a.getHighEntropyValues||a.brands&&"function"!==typeof a.brands.map)return Promise.reject(Error("UACH unavailable"));c=(a.brands||[]).map(function(e){var f=new ch;f=xg(f,1,e.brand);return xg(f,2,e.version)});
eh(jg(gh,2,Kf(a.mobile)),c);hh=a.getHighEntropyValues(b)}var d=new Set(b);return hh.then(function(e){var f=gh.clone();d.has("platform")&&xg(f,3,e.platform);d.has("platformVersion")&&xg(f,4,e.platformVersion);d.has("architecture")&&xg(f,5,e.architecture);d.has("model")&&xg(f,6,e.model);d.has("uaFullVersion")&&xg(f,7,e.uaFullVersion);return f}).catch(function(){return gh.clone()})}
;function jh(a){this.F=I(a)}
w(jh,K);function kh(a){this.F=I(a,4)}
w(kh,K);function lh(a){this.F=I(a,35)}
w(lh,K);lh.Ua=[3,20,27];function mh(a){this.F=I(a,19)}
w(mh,K);mh.prototype.Nb=function(a){return yg(this,2,a)};
mh.Ua=[3,5];function nh(a){this.F=I(a,8)}
w(nh,K);var oh=function(a){return function(b){return Ag(a,b)}}(nh);
nh.Ua=[5,6,7];function ph(a){this.F=I(a)}
w(ph,K);var qh=new function(a,b){this.h=a;this.ctor=b;this.isRepeated=0;this.i=qg;this.defaultValue=void 0}(175237375,ph);function rh(a){H.call(this);var b=this;this.componentId="";this.j=[];this.ba="";this.pageId=null;this.ea=this.Y=-1;this.experimentIds=null;this.V=this.m=0;this.ga=1;this.timeoutMillis=0;this.logSource=a.logSource;this.Gb=a.Gb||function(){};
this.i=new sh(a.logSource,a.eb);this.network=a.network;this.yb=a.yb||null;this.bufferSize=1E3;this.A=a.mf||null;this.sessionIndex=a.sessionIndex||null;this.Eb=a.Eb||!1;this.logger=null;this.withCredentials=!a.ed;this.eb=a.eb||!1;this.R="undefined"!==typeof URLSearchParams&&!!(new URL(th())).searchParams&&!!(new URL(th())).searchParams.set;var c=yg(new jh,1,1);uh(this.i,c);this.l=new ah(1E4);this.h=new Yg(this.l.getValue());a=vh(this,a.Xc);xd(this.h,"tick",a,!1,this);this.D=new Yg(6E5);xd(this.D,"tick",
a,!1,this);this.Eb||this.D.start();this.eb||(xd(document,"visibilitychange",function(){"hidden"===document.visibilityState&&b.wc()}),xd(document,"pagehide",this.wc,!1,this))}
w(rh,H);function vh(a,b){return a.R?b?function(){b().then(function(){a.flush()})}:function(){a.flush()}:function(){}}
m=rh.prototype;m.S=function(){this.wc();this.h.stop();this.D.stop();H.prototype.S.call(this)};
m.log=function(a){if(this.R){a=a.clone();var b=this.ga++;a=jg(a,21,Pf(b));this.componentId&&xg(a,26,this.componentId);if(!vg(a)){var c=Date.now();b=a;c=Number.isFinite(c)?c.toString():"0";jg(b,1,Pf(c))}null==ug(a,15)&&jg(a,15,Pf(60*(new Date).getTimezoneOffset()));this.experimentIds&&(b=a,c=this.experimentIds.clone(),rg(b,Xg,16,c));b=this.j.length-this.bufferSize+1;0<b&&(this.j.splice(0,b),this.m+=b);this.j.push(a);this.Eb||this.h.enabled||this.h.start()}};
m.flush=function(a,b){var c=this;if(0===this.j.length)a&&a();else{var d=Date.now();if(this.ea>d&&this.Y<d)b&&b("throttled");else{this.network&&("function"===typeof this.network.ac?wh(this.i,this.network.ac()):wh(this.i,0));var e=xh(this.i,this.j,this.m,this.V,this.yb);d={};var f=this.Gb();f&&(d.Authorization=f);this.A||(this.A=th());try{var g=(new URL(this.A)).toString()}catch(k){g=(new URL(this.A,window.location.origin)).toString()}g=new URL(g);this.sessionIndex&&(d["X-Goog-AuthUser"]=this.sessionIndex,
g.searchParams.set("authuser",this.sessionIndex));this.pageId&&(Object.defineProperty(d,"X-Goog-PageId",{value:this.pageId}),g.searchParams.set("pageId",this.pageId));if(f&&this.ba===f)b&&b("stale-auth-token");else{this.j=[];this.h.enabled&&this.h.stop();this.m=0;var h=e.serialize();d={url:g.toString(),body:h,Vf:1,yd:d,requestType:"POST",withCredentials:this.withCredentials,timeoutMillis:this.timeoutMillis};g=function(k){c.l.reset();c.h.setInterval(c.l.getValue());if(k){var l=null;try{var n=JSON.stringify(JSON.parse(k.replace(")]}'\n",
"")));l=oh(n)}catch(r){}if(l){k=Number;n="-1";n=void 0===n?"0":n;var p=vg(l);k=k(null!=p?p:n);0<k&&(c.Y=Date.now(),c.ea=c.Y+k);l=qh.ctor?qh.i(l,qh.ctor,qh.h,!0):qh.i(l,qh.h,null,!0);if(k=null===l?void 0:l)l=-1,l=void 0===l?0:l,k=Of(hg(k,1)),l=null!=k?k:l,-1!==l&&(c.l=new ah(1>l?1:l),c.h.setInterval(c.l.getValue()))}}a&&a();c.V=0};
h=function(k,l){var n=e.F;var p=nf(n),r=p,t=!(2&p),y=!!(2&r),z=y?1:2;p=1===z;z=2===z;t&&(t=!y);y=ig(n,r,3);y=Array.isArray(y)?y:yf;var x=mf(y),J=!!(4&x);if(!J){var G=x;0===G&&(G=tg(G,r,!1));G=lf(G,1,!0);x=y;var R=r,N=!!(2&G);N&&(R=lf(R,2,!0));for(var da=!N,Ca=!0,O=0,ea=0;O<x.length;O++){var ka=Wf(x[O],lh,R);if(ka instanceof lh){if(!N){var pa=!!(mf(ka.F)&2);da&&(da=!pa);Ca&&(Ca=pa)}x[ea++]=ka}}ea<O&&(x.length=ea);G=lf(G,4,!0);G=lf(G,16,Ca);G=lf(G,8,da);of(x,G);N&&Object.freeze(x);x=G}G=!!(8&x)||p&&
!y.length;if(t&&!G){og(x)&&(y=hf(y),x=tg(x,r,!1),r=kg(n,r,3,y));t=y;for(G=0;G<t.length;G++)R=t[G],N=gg(R),R!==N&&(t[G]=N);x=lf(x,8,!0);x=lf(x,16,!t.length);of(t,x)}og(x)||(t=x,p?x=lf(x,!y.length||16&x&&(!J||32&x)?2:2048,!0):x=lf(x,32,!1),x!==t&&of(y,x),p&&Object.freeze(y));z&&og(x)&&(y=hf(y),x=tg(x,r,!1),of(y,x),kg(n,r,3,y));n=y;r=ug(e,14);p=c.l;p.h=Math.min(3E5,2*p.h);p.i=Math.min(3E5,p.h+Math.round(.2*(Math.random()-.5)*p.h));c.h.setInterval(c.l.getValue());401===k&&f&&(c.ba=f);r&&(c.m+=r);void 0===
l&&(l=c.isRetryable(k));l&&(c.j=n.concat(c.j),c.Eb||c.h.enabled||c.h.start());b&&b("net-send-failed",k);++c.V};
c.network&&c.network.send(d,g,h)}}}};
m.wc=function(){yh(this.i,!0);this.flush();yh(this.i,!1)};
m.isRetryable=function(a){return 500<=a&&600>a||401===a||0===a};
function th(){return"https://play.google.com/log?format=json&hasfast=true"}
function sh(a,b){this.eb=b=void 0===b?!1:b;this.uach=this.locale=null;this.h=new mh;Number.isInteger(a)&&this.h.Nb(a);b||(this.locale=document.documentElement.getAttribute("lang"));uh(this,new jh)}
sh.prototype.Nb=function(a){this.h.Nb(a);return this};
function uh(a,b){rg(a.h,jh,1,b);wg(b)||yg(b,1,1);if(!a.eb){b=zh(a);var c=hg(b,5);(null==c||"string"===typeof c)&&c||xg(b,5,a.locale)}a.uach&&(b=zh(a),qg(b,dh,9)||rg(b,dh,9,a.uach))}
function wh(a,b){lg(Ah(a))&&(a=Bh(a),yg(a,1,b))}
function yh(a,b){lg(Ah(a))&&(a=Bh(a),jg(a,2,Kf(b)))}
function Ah(a){return qg(a.h,jh,1)}
function Ch(a){var b=void 0===b?fh:b;var c=a.eb?void 0:window;c?ih(c,b).then(function(d){a.uach=d;d=zh(a);rg(d,dh,9,a.uach);return!0}).catch(function(){return!1}):Promise.resolve(!1)}
function zh(a){a=Ah(a);var b=qg(a,ng,11);b||(b=new ng,rg(a,ng,11,b));return b}
function Bh(a){a=zh(a);var b=qg(a,bh,10);b||(b=new bh,jg(b,2,Kf(!1)),rg(a,bh,10,b));return b}
function xh(a,b,c,d,e){var f=0,g=0;c=void 0===c?0:c;f=void 0===f?0:f;g=void 0===g?0:g;d=void 0===d?0:d;if(lg(Ah(a))){var h=Bh(a);jg(h,3,Nf(d))}lg(Ah(a))&&(d=Bh(a),jg(d,4,Nf(f)));lg(Ah(a))&&(f=Bh(a),jg(f,5,Nf(g)));a=a.h.clone();g=Date.now().toString();a=jg(a,4,Pf(g));b=sg(a,lh,3,b);e&&(a=new Zg,e=jg(a,13,Nf(e)),a=new $g,e=rg(a,Zg,2,e),a=new kh,e=rg(a,$g,1,e),e=yg(e,2,9),rg(b,kh,18,e));c&&jg(b,14,Pf(c));return b}
;function Dh(){this.Pd="undefined"!==typeof AbortController}
Dh.prototype.send=function(a,b,c){var d=this,e,f,g,h,k,l,n,p,r,t,y,z;return A(function(x){switch(x.h){case 1:return f=(e=d.Pd?new AbortController:void 0)?setTimeout(function(){e.abort()},a.timeoutMillis):void 0,Aa(x,2,3),g=Object.assign({},{method:a.requestType,
headers:Object.assign({},a.yd)},a.body&&{body:a.body},a.withCredentials&&{credentials:"include"},{signal:a.timeoutMillis&&e?e.signal:null}),x.yield(fetch(a.url,g),5);case 5:h=x.i;if(200!==h.status){null==(k=c)||k(h.status);x.B(3);break}if(null==(l=b)){x.B(7);break}p=n=l;return x.yield(h.text(),8);case 8:p(x.i);case 7:case 3:x.R=[x.j];x.l=0;x.v=0;clearTimeout(f);Da(x);break;case 2:r=Ba(x);switch(null==(t=r)?void 0:t.name){case "AbortError":null==(y=c)||y(408);break;default:null==(z=c)||z(400)}x.B(3)}})};
Dh.prototype.ac=function(){return 4};function Eh(){}
Eh.prototype.serialize=function(a){var b=[];Fh(this,a,b);return b.join("")};
function Fh(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),Fh(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),Gh(d,c),c.push(":"),Fh(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":Gh(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var Hh={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\v":"\\u000b"},Ih=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function Gh(a,b){b.push('"',a.replace(Ih,function(c){var d=Hh[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).slice(1),Hh[c]=d);return d}),'"')}
;function Jh(){}
Jh.prototype.h=null;Jh.prototype.getOptions=function(){var a;(a=this.h)||(a={},Kh(this)&&(a[0]=!0,a[1]=!0),a=this.h=a);return a};var Lh;function Mh(){}
$a(Mh,Jh);function Nh(a){return(a=Kh(a))?new ActiveXObject(a):new XMLHttpRequest}
function Kh(a){if(!a.i&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new ActiveXObject(d),a.i=d}catch(e){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.i}
Lh=new Mh;function Oh(a){Id.call(this);this.headers=new Map;this.V=a||null;this.i=!1;this.R=this.J=null;this.l=this.ea="";this.j=this.ba=this.A=this.Y=!1;this.m=0;this.D=null;this.Pa="";this.ta=this.Ba=!1}
$a(Oh,Id);var Ph=/^https?$/i,Qh=["POST","PUT"],Rh=[];function Sh(a,b,c,d,e,f,g){var h=new Oh;Rh.push(h);b&&h.listen("complete",b);h.h.add("ready",h.Vd,!0,void 0,void 0);f&&(h.m=Math.max(0,f));g&&(h.Ba=g);h.send(a,c,d,e)}
m=Oh.prototype;m.Vd=function(){this.dispose();Kb(Rh,this)};
m.send=function(a,b,c,d){if(this.J)throw Error("[goog.net.XhrIo] Object is active with another request="+this.ea+"; newUri="+a);b=b?b.toUpperCase():"GET";this.ea=a;this.l="";this.Y=!1;this.i=!0;this.J=this.V?Nh(this.V):Nh(Lh);this.R=this.V?this.V.getOptions():Lh.getOptions();this.J.onreadystatechange=Xa(this.rd,this);try{this.getStatus(),this.ba=!0,this.J.open(b,String(a),!0),this.ba=!1}catch(g){this.getStatus();Th(this,g);return}a=c||"";c=new Map(this.headers);if(d)if(Object.getPrototypeOf(d)===
Object.prototype)for(var e in d)c.set(e,d[e]);else if("function"===typeof d.keys&&"function"===typeof d.get){e=v(d.keys());for(var f=e.next();!f.done;f=e.next())f=f.value,c.set(f,d.get(f))}else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(c.keys()).find(function(g){return"content-type"==g.toLowerCase()});
e=C.FormData&&a instanceof C.FormData;!(0<=Eb(Qh,b))||d||e||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");b=v(c);for(d=b.next();!d.done;d=b.next())c=v(d.value),d=c.next().value,c=c.next().value,this.J.setRequestHeader(d,c);this.Pa&&(this.J.responseType=this.Pa);"withCredentials"in this.J&&this.J.withCredentials!==this.Ba&&(this.J.withCredentials=this.Ba);try{Uh(this),0<this.m&&(this.ta=Vh(this.J),this.getStatus(),this.ta?(this.J.timeout=this.m,this.J.ontimeout=Xa(this.Hd,
this)):this.D=xe(this.Hd,this.m,this)),this.getStatus(),this.A=!0,this.J.send(a),this.A=!1}catch(g){this.getStatus(),Th(this,g)}};
function Vh(a){return Yc&&"number"===typeof a.timeout&&void 0!==a.ontimeout}
m.Hd=function(){"undefined"!=typeof Na&&this.J&&(this.l="Timed out after "+this.m+"ms, aborting",this.getStatus(),Jd(this,"timeout"),this.abort(8))};
function Th(a,b){a.i=!1;a.J&&(a.j=!0,a.J.abort(),a.j=!1);a.l=b;Wh(a);Xh(a)}
function Wh(a){a.Y||(a.Y=!0,Jd(a,"complete"),Jd(a,"error"))}
m.abort=function(){this.J&&this.i&&(this.getStatus(),this.i=!1,this.j=!0,this.J.abort(),this.j=!1,Jd(this,"complete"),Jd(this,"abort"),Xh(this))};
m.S=function(){this.J&&(this.i&&(this.i=!1,this.j=!0,this.J.abort(),this.j=!1),Xh(this,!0));Oh.Aa.S.call(this)};
m.rd=function(){this.Z()||(this.ba||this.A||this.j?Yh(this):this.Ee())};
m.Ee=function(){Yh(this)};
function Yh(a){if(a.i&&"undefined"!=typeof Na)if(a.R[1]&&4==Zh(a)&&2==a.getStatus())a.getStatus();else if(a.A&&4==Zh(a))xe(a.rd,0,a);else if(Jd(a,"readystatechange"),a.isComplete()){a.getStatus();a.i=!1;try{if($h(a))Jd(a,"complete"),Jd(a,"success");else{try{var b=2<Zh(a)?a.J.statusText:""}catch(c){b=""}a.l=b+" ["+a.getStatus()+"]";Wh(a)}}finally{Xh(a)}}}
function Xh(a,b){if(a.J){Uh(a);var c=a.J,d=a.R[0]?function(){}:null;
a.J=null;a.R=null;b||Jd(a,"ready");try{c.onreadystatechange=d}catch(e){}}}
function Uh(a){a.J&&a.ta&&(a.J.ontimeout=null);a.D&&(C.clearTimeout(a.D),a.D=null)}
m.isActive=function(){return!!this.J};
m.isComplete=function(){return 4==Zh(this)};
function $h(a){var b=a.getStatus();a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break a;default:c=!1}if(!c){if(b=0===b)a=Ac(1,String(a.ea)),!a&&C.self&&C.self.location&&(a=C.self.location.protocol.slice(0,-1)),b=!Ph.test(a?a.toLowerCase():"");c=b}return c}
function Zh(a){return a.J?a.J.readyState:0}
m.getStatus=function(){try{return 2<Zh(this)?this.J.status:-1}catch(a){return-1}};
m.getLastError=function(){return"string"===typeof this.l?this.l:String(this.l)};function ai(){}
ai.prototype.send=function(a,b,c){b=void 0===b?function(){}:b;
c=void 0===c?function(){}:c;
Sh(a.url,function(d){d=d.target;if($h(d)){try{var e=d.J?d.J.responseText:""}catch(f){e=""}b(e)}else c(d.getStatus())},a.requestType,a.body,a.yd,a.timeoutMillis,a.withCredentials)};
ai.prototype.ac=function(){return 1};function bi(a,b){H.call(this);this.logSource=a;this.sessionIndex=b;this.i="https://play.google.com/log?format=json&hasfast=true";this.h=null;this.j=!1;this.network=null;this.componentId="";this.pageId=this.yb=null}
w(bi,H);bi.prototype.ed=function(){this.l=!0;return this};function ci(a,b,c,d,e,f,g){a=void 0===a?-1:a;b=void 0===b?"":b;c=void 0===c?"":c;d=void 0===d?!1:d;e=void 0===e?"":e;H.call(this);this.logSource=a;this.componentId=b;f?a=f:(a=new bi(a,"0"),a.componentId=b,Rc(this,a),""!==c&&(a.i=c),d&&(a.j=!0),e&&(a.h=e),g&&(a.network=g),a.network||(a.network=.01>Math.random()?new Dh:new ai),b=new rh({logSource:a.logSource,Gb:a.Gb?a.Gb:Wg,sessionIndex:a.sessionIndex,mf:a.i,eb:a.j,Eb:!1,ed:a.l,Xc:a.Xc,network:a.network?a.network:void 0}),Rc(a,b),a.h&&(c=a.h,d=zh(b.i),
xg(d,7,c)),a.componentId&&(b.componentId=a.componentId),a.yb&&(b.yb=a.yb),a.pageId&&(b.pageId=a.pageId),Ch(b.i),a.network.Nb&&a.network.Nb(a.logSource),a.network.Ze&&a.network.Ze(b),a=b);this.h=a}
w(ci,H);
ci.prototype.flush=function(a){var b=a||[];if(b.length){a=new Hg;for(var c=[],d=0;d<b.length;d++){var e=b[d];var f=new Gg;f=xg(f,1,e.l);for(var g=[],h=0;h<e.fields.length;h++)g.push(e.fields[h].ma);h=f.F;var k=nf(h);Af(k);if(null==g)kg(h,k,3);else{if(!Array.isArray(g))throw If();var l=mf(g),n=l,p=!!(2&l)||Object.isFrozen(g),r=!p&&!1;var t=4&l?!1:!0;if(t)for(l=21,p&&(g=hf(g),n=0,l=tg(l,k,!0)),t=0;t<g.length;t++){p=g;var y=t,z=g[t];if("string"!==typeof z)throw Error();p[y]=z}r&&(g=hf(g),n=0,l=tg(l,
k,!0));l!==n&&of(g,l);kg(h,k,3,g)}g=[];h=[];k=v(e.h.keys());for(l=k.next();!l.done;l=k.next())h.push(l.value.split(","));for(k=0;k<h.length;k++){l=h[k];n=e.j;r=e.yc(l)||[];t=[];for(p=0;p<r.length;p++){z=(y=r[p])&&y.h;y=new Dg;switch(n){case 3:z=Number(z);Number.isFinite(z)&&pg(y,1,Eg,Pf(z));break;case 2:z=Number(z);if(null!=z&&"number"!==typeof z)throw Error("Value of float/double field must be a number, found "+typeof z+": "+z);pg(y,2,Eg,z)}t.push(y)}n=t;for(r=0;r<n.length;r++){t=n[r];p=new Fg;t=
rg(p,Dg,2,t);p=l;y=[];z=[];for(var x=0;x<e.fields.length;x++)z.push(e.fields[x].na);for(x=0;x<z.length;x++){var J=z[x],G=p[x],R=new Bg;switch(J){case 3:pg(R,1,Cg,Uf(String(G)));break;case 2:J=Number(G);Number.isFinite(J)&&pg(R,2,Cg,Nf(J));break;case 1:pg(R,3,Cg,Kf("true"===G))}y.push(R)}sg(t,Bg,1,y);g.push(t)}}sg(f,Fg,4,g);c.push(f);e.clear()}sg(a,Gg,1,c);b=this.h;b.R&&(a instanceof lh?b.log(a):(c=new lh,a=a.serialize(),a=xg(c,8,a),b.log(a)));this.h.flush()}};function di(a,b,c){this.logger=a;this.event=b;if(void 0===c||c)this.h=ei()}
di.prototype.start=function(){this.h=ei()};
di.prototype.done=function(){null!=this.h&&this.logger.od(this.event,ei()-this.h)};
function fi(){}
fi.prototype.Gc=function(){};
fi.prototype.od=function(){};
fi.prototype.fc=function(){};
fi.prototype.Oa=function(){};
function gi(a,b){this.i=b;this.l=new ci(1828,"","",!1,"",void 0,new ai);this.h=new ye(this.l);this.m=new Ee(this.h);this.A=new He(this.h);this.D=new Ie(this.h);this.v=new De(this.h);new Fe(this.h);new Ge(this.h);this.j=Ke(a);(new Ce(this.h)).h.pc("/client_streamz/bg/fic",this.i)}
gi.prototype.Gc=function(){this.A.h.pc("/client_streamz/bg/fsc",this.j,this.i)};
gi.prototype.od=function(a,b){0===a?this.m.record(b,this.j,this.i):1===a&&this.D.record(b,this.j,this.i)};
gi.prototype.fc=function(a,b){this.v.h.pc("/client_streamz/bg/fiec",this.j,this.i,a,b)};
gi.prototype.Oa=function(){this.h.Oa()};
function ei(){var a,b,c;return null!=(c=null==(a=globalThis.performance)?void 0:null==(b=a.now)?void 0:b.call(a))?c:Date.now()}
;function hi(){var a=this;this.promise=new Promise(function(b,c){a.resolve=b;a.reject=c})}
;function ii(a){function b(n,p,r){Promise.resolve().then(function(){k.done();h.resolve({Sd:n,cf:p,ig:r})})}
function c(){}
this.h=!1;var d=a.program;var e=a.le;if(!1!==a.Ke){var f,g;this.qa=null!=(g=a.qa)?g:new gi(e,null!=(f=a.Be)?f:"_")}else this.qa=new fi;var h=new hi;this.i=h.promise;var k=new di(this.qa,0,!1);C[e]?C[e].a||(this.qa.fc(2,""),this.qa.Oa()):(this.qa.fc(1,""),this.qa.Oa());try{var l=C[e].a;k.start();this.j=v(l(d,b,!0,a.rg,c)).next().value;this.bf=h.promise.then(function(){})}catch(n){throw this.qa.fc(4,n.message),this.qa.Oa(),n;
}}
ii.prototype.snapshot=function(a){var b=this;if(this.h)throw Error("Already disposed");this.qa.Gc();return this.i.then(function(c){var d=c.Sd;return new Promise(function(e){var f=new di(b.qa,1);d(function(g){f.done();e(g)},[a.dd,
a.df,a.pf,a.ef])})})};
ii.prototype.Ed=function(a){if(this.h)throw Error("Already disposed");this.qa.Gc();var b=new di(this.qa,1);a=this.j([a.dd,a.df,a.pf,a.ef]);b.done();return a};
ii.prototype.dispose=function(){this.qa.Oa();this.h=!0;this.i.then(function(a){(a=a.cf)&&a()})};
ii.prototype.Z=function(){return this.h};var ji=window;ib("csi.gstatic.com");ib("googleads.g.doubleclick.net");ib("partner.googleadservices.com");ib("pubads.g.doubleclick.net");ib("securepubads.g.doubleclick.net");ib("tpc.googlesyndication.com");function ki(a){var b=li;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a(b[c],c,b)}
function mi(){var a=[];ki(function(b){a.push(b)});
return a}
var li={qf:"allow-forms",rf:"allow-modals",sf:"allow-orientation-lock",tf:"allow-pointer-lock",uf:"allow-popups",vf:"allow-popups-to-escape-sandbox",wf:"allow-presentation",xf:"allow-same-origin",yf:"allow-scripts",zf:"allow-top-navigation",Af:"allow-top-navigation-by-user-activation"},ni=Od(function(){return mi()});
function oi(){var a=pi(),b={};Fb(ni(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
function pi(){var a=void 0===a?document:a;return a.createElement("iframe")}
;function qi(a){"number"==typeof a&&(a=Math.round(a)+"px");return a}
;var ri=(new Date).getTime();function si(a){Id.call(this);var b=this;this.A=this.j=0;this.Da=null!=a?a:{oa:function(e,f){return setTimeout(e,f)},
pa:function(e){clearTimeout(e)}};
var c,d;this.i=null!=(d=null==(c=window.navigator)?void 0:c.onLine)?d:!0;this.l=function(){return A(function(e){return e.yield(ti(b),0)})};
window.addEventListener("offline",this.l);window.addEventListener("online",this.l);this.A||ui(this)}
w(si,Id);function vi(){var a=wi;si.h||(si.h=new si(a));return si.h}
si.prototype.dispose=function(){window.removeEventListener("offline",this.l);window.removeEventListener("online",this.l);this.Da.pa(this.A);delete si.h};
si.prototype.wa=function(){return this.i};
function ui(a){a.A=a.Da.oa(function(){var b;return A(function(c){if(1==c.h)return a.i?(null==(b=window.navigator)?0:b.onLine)?c.B(3):c.yield(ti(a),3):c.yield(ti(a),3);ui(a);c.h=0})},3E4)}
function ti(a,b){return a.m?a.m:a.m=new Promise(function(c){var d,e,f,g;return A(function(h){switch(h.h){case 1:return d=window.AbortController?new window.AbortController:void 0,f=null==(e=d)?void 0:e.signal,g=!1,Aa(h,2,3),d&&(a.j=a.Da.oa(function(){d.abort()},b||2E4)),h.yield(fetch("/generate_204",{method:"HEAD",
signal:f}),5);case 5:g=!0;case 3:h.R=[h.j];h.l=0;h.v=0;a.m=void 0;a.j&&(a.Da.pa(a.j),a.j=0);g!==a.i&&(a.i=g,a.i?Jd(a,"networkstatus-online"):Jd(a,"networkstatus-offline"));c(g);Da(h);break;case 2:Ba(h),g=!1,h.B(3)}})})}
;function xi(){this.data=[];this.h=-1}
xi.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&Number.isInteger(a)&&this.data[a]!==b&&(this.data[a]=b,this.h=-1)};
xi.prototype.get=function(a){return!!this.data[a]};
function yi(a){-1===a.h&&(a.h=a.data.reduce(function(b,c,d){return b+(c?Math.pow(2,d):0)},0));
return a.h}
;function zi(a,b){this.h=a[C.Symbol.iterator]();this.i=b}
zi.prototype[Symbol.iterator]=function(){return this};
zi.prototype.next=function(){var a=this.h.next();return{value:a.done?void 0:this.i.call(void 0,a.value),done:a.done}};
function Ai(a,b){return new zi(a,b)}
;function Bi(){this.blockSize=-1}
;function Ci(){this.blockSize=-1;this.blockSize=64;this.h=[];this.v=[];this.m=[];this.j=[];this.j[0]=128;for(var a=1;a<this.blockSize;++a)this.j[a]=0;this.l=this.i=0;this.reset()}
$a(Ci,Bi);Ci.prototype.reset=function(){this.h[0]=1732584193;this.h[1]=4023233417;this.h[2]=2562383102;this.h[3]=271733878;this.h[4]=3285377520;this.l=this.i=0};
function Di(a,b,c){c||(c=0);var d=a.m;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.h[0];c=a.h[1];var g=a.h[2],h=a.h[3],k=a.h[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var l=1518500249}else f=c^g^h,l=1859775393;else 60>e?(f=c&g|h&(c|g),l=2400959708):
(f=c^g^h,l=3395469782);f=(b<<5|b>>>27)+f+k+l+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.h[0]=a.h[0]+b&4294967295;a.h[1]=a.h[1]+c&4294967295;a.h[2]=a.h[2]+g&4294967295;a.h[3]=a.h[3]+h&4294967295;a.h[4]=a.h[4]+k&4294967295}
Ci.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.blockSize,d=0,e=this.v,f=this.i;d<b;){if(0==f)for(;d<=c;)Di(this,a,d),d+=this.blockSize;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.blockSize){Di(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.blockSize){Di(this,e);f=0;break}}this.i=f;this.l+=b}};
Ci.prototype.digest=function(){var a=[],b=8*this.l;56>this.i?this.update(this.j,56-this.i):this.update(this.j,this.blockSize-(this.i-56));for(var c=this.blockSize-1;56<=c;c--)this.v[c]=b&255,b/=256;Di(this,this.v);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.h[c]>>d&255,++b;return a};function Ei(a){return"string"==typeof a.className?a.className:a.getAttribute&&a.getAttribute("class")||""}
function Fi(a,b){"string"==typeof a.className?a.className=b:a.setAttribute&&a.setAttribute("class",b)}
function Gi(a,b){a.classList?b=a.classList.contains(b):(a=a.classList?a.classList:Ei(a).match(/\S+/g)||[],b=0<=Eb(a,b));return b}
function Hi(){var a=document.body;a.classList?a.classList.remove("inverted-hdpi"):Gi(a,"inverted-hdpi")&&Fi(a,Array.prototype.filter.call(a.classList?a.classList:Ei(a).match(/\S+/g)||[],function(b){return"inverted-hdpi"!=b}).join(" "))}
;function Ii(){}
Ii.prototype.next=function(){return Ji};
var Ji={done:!0,value:void 0};function Ki(a){return{value:a,done:!1}}
Ii.prototype.Fa=function(){return this};function Li(a){if(a instanceof Mi||a instanceof Ni||a instanceof Oi)return a;if("function"==typeof a.next)return new Mi(function(){return a});
if("function"==typeof a[Symbol.iterator])return new Mi(function(){return a[Symbol.iterator]()});
if("function"==typeof a.Fa)return new Mi(function(){return a.Fa()});
throw Error("Not an iterator or iterable.");}
function Mi(a){this.i=a}
Mi.prototype.Fa=function(){return new Ni(this.i())};
Mi.prototype[Symbol.iterator]=function(){return new Oi(this.i())};
Mi.prototype.h=function(){return new Oi(this.i())};
function Ni(a){this.i=a}
w(Ni,Ii);Ni.prototype.next=function(){return this.i.next()};
Ni.prototype[Symbol.iterator]=function(){return new Oi(this.i)};
Ni.prototype.h=function(){return new Oi(this.i)};
function Oi(a){Mi.call(this,function(){return a});
this.j=a}
w(Oi,Mi);Oi.prototype.next=function(){return this.j.next()};function L(a){H.call(this);this.m=1;this.j=[];this.l=0;this.h=[];this.i={};this.A=!!a}
$a(L,H);m=L.prototype;m.subscribe=function(a,b,c){var d=this.i[a];d||(d=this.i[a]=[]);var e=this.m;this.h[e]=a;this.h[e+1]=b;this.h[e+2]=c;this.m=e+3;d.push(e);return e};
m.unsubscribe=function(a,b,c){if(a=this.i[a]){var d=this.h;if(a=a.find(function(e){return d[e+1]==b&&d[e+2]==c}))return this.Ab(a)}return!1};
m.Ab=function(a){var b=this.h[a];if(b){var c=this.i[b];0!=this.l?(this.j.push(a),this.h[a+1]=function(){}):(c&&Kb(c,a),delete this.h[a],delete this.h[a+1],delete this.h[a+2])}return!!b};
m.Ya=function(a,b){var c=this.i[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.A)for(e=0;e<c.length;e++){var g=c[e];Pi(this.h[g+1],this.h[g+2],d)}else{this.l++;try{for(e=0,f=c.length;e<f&&!this.Z();e++)g=c[e],this.h[g+1].apply(this.h[g+2],d)}finally{if(this.l--,0<this.j.length&&0==this.l)for(;c=this.j.pop();)this.Ab(c)}}return 0!=e}return!1};
function Pi(a,b,c){ce(function(){a.apply(b,c)})}
m.clear=function(a){if(a){var b=this.i[a];b&&(b.forEach(this.Ab,this),delete this.i[a])}else this.h.length=0,this.i={}};
m.S=function(){L.Aa.S.call(this);this.clear();this.j.length=0};function Qi(a){this.h=a}
Qi.prototype.set=function(a,b){void 0===b?this.h.remove(a):this.h.set(a,(new Eh).serialize(b))};
Qi.prototype.get=function(a){try{var b=this.h.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
Qi.prototype.remove=function(a){this.h.remove(a)};function Ri(a){this.h=a}
$a(Ri,Qi);function Si(a){this.data=a}
function Ti(a){return void 0===a||a instanceof Si?a:new Si(a)}
Ri.prototype.set=function(a,b){Ri.Aa.set.call(this,a,Ti(b))};
Ri.prototype.i=function(a){a=Ri.Aa.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
Ri.prototype.get=function(a){if(a=this.i(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function Ui(a){this.h=a}
$a(Ui,Ri);Ui.prototype.set=function(a,b,c){if(b=Ti(b)){if(c){if(c<Za()){Ui.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Za()}Ui.Aa.set.call(this,a,b)};
Ui.prototype.i=function(a){var b=Ui.Aa.i.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Za()||c&&c>Za())Ui.prototype.remove.call(this,a);else return b}};function Vi(){}
;function Wi(){}
$a(Wi,Vi);Wi.prototype[Symbol.iterator]=function(){return Li(this.Fa(!0)).h()};
Wi.prototype.clear=function(){var a=Array.from(this);a=v(a);for(var b=a.next();!b.done;b=a.next())this.remove(b.value)};function Xi(a){this.h=a;this.i=null}
$a(Xi,Wi);m=Xi.prototype;m.isAvailable=function(){var a=this.h;if(a)try{a.setItem("__sak","1");a.removeItem("__sak");var b=!0}catch(c){b=c instanceof DOMException&&("QuotaExceededError"===c.name||22===c.code||1014===c.code||"NS_ERROR_DOM_QUOTA_REACHED"===c.name)&&a&&0!==a.length}else b=!1;return this.i=b};
m.set=function(a,b){Yi(this);try{this.h.setItem(a,b)}catch(c){if(0==this.h.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
m.get=function(a){Yi(this);a=this.h.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
m.remove=function(a){Yi(this);this.h.removeItem(a)};
m.Fa=function(a){Yi(this);var b=0,c=this.h,d=new Ii;d.next=function(){if(b>=c.length)return Ji;var e=c.key(b++);if(a)return Ki(e);e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return Ki(e)};
return d};
m.clear=function(){Yi(this);this.h.clear()};
m.key=function(a){Yi(this);return this.h.key(a)};
function Yi(a){if(null==a.h)throw Error("Storage mechanism: Storage unavailable");var b;(null!=(b=a.i)?b:a.isAvailable())||Wd(Error("Storage mechanism: Storage unavailable"))}
;function Zi(){var a=null;try{a=C.localStorage||null}catch(b){}Xi.call(this,a)}
$a(Zi,Xi);function $i(a,b){this.i={};this.h=[];this.Wa=this.size=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof $i)for(c=a.Bc(),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
m=$i.prototype;m.Bc=function(){aj(this);return this.h.concat()};
m.has=function(a){return bj(this.i,a)};
m.equals=function(a,b){if(this===a)return!0;if(this.size!=a.size)return!1;b=b||cj;aj(this);for(var c,d=0;c=this.h[d];d++)if(!b(this.get(c),a.get(c)))return!1;return!0};
function cj(a,b){return a===b}
m.clear=function(){this.i={};this.Wa=this.size=this.h.length=0};
m.remove=function(a){return this.delete(a)};
m.delete=function(a){return bj(this.i,a)?(delete this.i[a],--this.size,this.Wa++,this.h.length>2*this.size&&aj(this),!0):!1};
function aj(a){if(a.size!=a.h.length){for(var b=0,c=0;b<a.h.length;){var d=a.h[b];bj(a.i,d)&&(a.h[c++]=d);b++}a.h.length=c}if(a.size!=a.h.length){var e={};for(c=b=0;b<a.h.length;)d=a.h[b],bj(e,d)||(a.h[c++]=d,e[d]=1),b++;a.h.length=c}}
m.get=function(a,b){return bj(this.i,a)?this.i[a]:b};
m.set=function(a,b){bj(this.i,a)||(this.size+=1,this.h.push(a),this.Wa++);this.i[a]=b};
m.forEach=function(a,b){for(var c=this.Bc(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
m.clone=function(){return new $i(this)};
m.keys=function(){return Li(this.Fa(!0)).h()};
m.values=function(){return Li(this.Fa(!1)).h()};
m.entries=function(){var a=this;return Ai(this.keys(),function(b){return[b,a.get(b)]})};
m.Fa=function(a){aj(this);var b=0,c=this.Wa,d=this,e=new Ii;e.next=function(){if(c!=d.Wa)throw Error("The map has changed since the iterator was created");if(b>=d.h.length)return Ji;var f=d.h[b++];return Ki(a?f:d.i[f])};
return e};
function bj(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
;function dj(a,b){this.i=a;this.h=null;var c;if(c=Yc)c=!(9<=Number(kd));if(c){ej||(ej=new $i);this.h=ej.get(a);this.h||(b?this.h=document.getElementById(b):(this.h=document.createElement("userdata"),this.h.addBehavior("#default#userData"),document.body.appendChild(this.h)),ej.set(a,this.h));try{this.h.load(this.i)}catch(d){this.h=null}}}
$a(dj,Wi);var fj={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},ej=null;function gj(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return fj[b]})}
m=dj.prototype;m.isAvailable=function(){return!!this.h};
m.set=function(a,b){this.h.setAttribute(gj(a),b);hj(this)};
m.get=function(a){a=this.h.getAttribute(gj(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
m.remove=function(a){this.h.removeAttribute(gj(a));hj(this)};
m.Fa=function(a){var b=0,c=this.h.XMLDocument.documentElement.attributes,d=new Ii;d.next=function(){if(b>=c.length)return Ji;var e=c[b++];if(a)return Ki(decodeURIComponent(e.nodeName.replace(/\./g,"%")).slice(1));e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return Ki(e)};
return d};
m.clear=function(){for(var a=this.h.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);hj(this)};
function hj(a){try{a.h.save(a.i)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function ij(a,b){this.i=a;this.h=b+"::"}
$a(ij,Wi);ij.prototype.set=function(a,b){this.i.set(this.h+a,b)};
ij.prototype.get=function(a){return this.i.get(this.h+a)};
ij.prototype.remove=function(a){this.i.remove(this.h+a)};
ij.prototype.Fa=function(a){var b=this.i[Symbol.iterator](),c=this,d=new Ii;d.next=function(){var e=b.next();if(e.done)return e;for(e=e.value;e.slice(0,c.h.length)!=c.h;){e=b.next();if(e.done)return e;e=e.value}return Ki(a?e.slice(c.h.length):c.i.get(e))};
return d};/*

 (The MIT License)

 Copyright (C) 2014 by Vitaly Puzrin

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.

 -----------------------------------------------------------------------------
 Ported from zlib, which is under the following license
 https://github.com/madler/zlib/blob/master/zlib.h

 zlib.h -- interface of the 'zlib' general purpose compression library
   version 1.2.8, April 28th, 2013
   Copyright (C) 1995-2013 Jean-loup Gailly and Mark Adler
   This software is provided 'as-is', without any express or implied
   warranty.  In no event will the authors be held liable for any damages
   arising from the use of this software.
   Permission is granted to anyone to use this software for any purpose,
   including commercial applications, and to alter it and redistribute it
   freely, subject to the following restrictions:
   1. The origin of this software must not be misrepresented; you must not
      claim that you wrote the original software. If you use this software
      in a product, an acknowledgment in the product documentation would be
      appreciated but is not required.
   2. Altered source versions must be plainly marked as such, and must not be
      misrepresented as being the original software.
   3. This notice may not be removed or altered from any source distribution.
   Jean-loup Gailly        Mark Adler
   jloup@gzip.org          madler@alumni.caltech.edu
   The data format used by the zlib library is described by RFCs (Request for
   Comments) 1950 to 1952 in the files http://tools.ietf.org/html/rfc1950
   (zlib format), rfc1951 (deflate format) and rfc1952 (gzip format).
*/
var M={},jj="undefined"!==typeof Uint8Array&&"undefined"!==typeof Uint16Array&&"undefined"!==typeof Int32Array;M.assign=function(a){for(var b=Array.prototype.slice.call(arguments,1);b.length;){var c=b.shift();if(c){if("object"!==typeof c)throw new TypeError(c+"must be non-object");for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}}return a};
M.Rc=function(a,b){if(a.length===b)return a;if(a.subarray)return a.subarray(0,b);a.length=b;return a};
var kj={mb:function(a,b,c,d,e){if(b.subarray&&a.subarray)a.set(b.subarray(c,c+d),e);else for(var f=0;f<d;f++)a[e+f]=b[c+f]},
hd:function(a){var b,c;var d=c=0;for(b=a.length;d<b;d++)c+=a[d].length;var e=new Uint8Array(c);d=c=0;for(b=a.length;d<b;d++){var f=a[d];e.set(f,c);c+=f.length}return e}},lj={mb:function(a,b,c,d,e){for(var f=0;f<d;f++)a[e+f]=b[c+f]},
hd:function(a){return[].concat.apply([],a)}};
M.af=function(){jj?(M.lb=Uint8Array,M.Ha=Uint16Array,M.Nd=Int32Array,M.assign(M,kj)):(M.lb=Array,M.Ha=Array,M.Nd=Array,M.assign(M,lj))};
M.af();var mj=!0;try{new Uint8Array(1)}catch(a){mj=!1}
function nj(a){var b,c,d=a.length,e=0;for(b=0;b<d;b++){var f=a.charCodeAt(b);if(55296===(f&64512)&&b+1<d){var g=a.charCodeAt(b+1);56320===(g&64512)&&(f=65536+(f-55296<<10)+(g-56320),b++)}e+=128>f?1:2048>f?2:65536>f?3:4}var h=new M.lb(e);for(b=c=0;c<e;b++)f=a.charCodeAt(b),55296===(f&64512)&&b+1<d&&(g=a.charCodeAt(b+1),56320===(g&64512)&&(f=65536+(f-55296<<10)+(g-56320),b++)),128>f?h[c++]=f:(2048>f?h[c++]=192|f>>>6:(65536>f?h[c++]=224|f>>>12:(h[c++]=240|f>>>18,h[c++]=128|f>>>12&63),h[c++]=128|f>>>
6&63),h[c++]=128|f&63);return h}
;var oj={};oj=function(a,b,c,d){var e=a&65535|0;a=a>>>16&65535|0;for(var f;0!==c;){f=2E3<c?2E3:c;c-=f;do e=e+b[d++]|0,a=a+e|0;while(--f);e%=65521;a%=65521}return e|a<<16|0};for(var pj={},qj,rj=[],sj=0;256>sj;sj++){qj=sj;for(var tj=0;8>tj;tj++)qj=qj&1?3988292384^qj>>>1:qj>>>1;rj[sj]=qj}pj=function(a,b,c,d){c=d+c;for(a^=-1;d<c;d++)a=a>>>8^rj[(a^b[d])&255];return a^-1};var uj={};uj={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"};function vj(a){for(var b=a.length;0<=--b;)a[b]=0}
var wj=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],xj=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],yj=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],zj=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],Aj=Array(576);vj(Aj);var Bj=Array(60);vj(Bj);var Cj=Array(512);vj(Cj);var Dj=Array(256);vj(Dj);var Ej=Array(29);vj(Ej);var Fj=Array(30);vj(Fj);function Gj(a,b,c,d,e){this.Fd=a;this.ee=b;this.de=c;this.Yd=d;this.Ae=e;this.ld=a&&a.length}
var Hj,Ij,Jj;function Kj(a,b){this.gd=a;this.vb=0;this.Va=b}
function Lj(a,b){a.W[a.pending++]=b&255;a.W[a.pending++]=b>>>8&255}
function Mj(a,b,c){a.fa>16-c?(a.la|=b<<a.fa&65535,Lj(a,a.la),a.la=b>>16-a.fa,a.fa+=c-16):(a.la|=b<<a.fa&65535,a.fa+=c)}
function Nj(a,b,c){Mj(a,c[2*b],c[2*b+1])}
function Oj(a,b){var c=0;do c|=a&1,a>>>=1,c<<=1;while(0<--b);return c>>>1}
function Pj(a,b,c){var d=Array(16),e=0,f;for(f=1;15>=f;f++)d[f]=e=e+c[f-1]<<1;for(c=0;c<=b;c++)e=a[2*c+1],0!==e&&(a[2*c]=Oj(d[e]++,e))}
function Qj(a){var b;for(b=0;286>b;b++)a.ra[2*b]=0;for(b=0;30>b;b++)a.bb[2*b]=0;for(b=0;19>b;b++)a.ha[2*b]=0;a.ra[512]=1;a.Na=a.zb=0;a.ya=a.matches=0}
function Rj(a){8<a.fa?Lj(a,a.la):0<a.fa&&(a.W[a.pending++]=a.la);a.la=0;a.fa=0}
function Sj(a,b,c){Rj(a);Lj(a,c);Lj(a,~c);M.mb(a.W,a.window,b,c,a.pending);a.pending+=c}
function Tj(a,b,c,d){var e=2*b,f=2*c;return a[e]<a[f]||a[e]===a[f]&&d[b]<=d[c]}
function Uj(a,b,c){for(var d=a.X[c],e=c<<1;e<=a.La;){e<a.La&&Tj(b,a.X[e+1],a.X[e],a.depth)&&e++;if(Tj(b,d,a.X[e],a.depth))break;a.X[c]=a.X[e];c=e;e<<=1}a.X[c]=d}
function Vj(a,b,c){var d=0;if(0!==a.ya){do{var e=a.W[a.Db+2*d]<<8|a.W[a.Db+2*d+1];var f=a.W[a.Fc+d];d++;if(0===e)Nj(a,f,b);else{var g=Dj[f];Nj(a,g+256+1,b);var h=wj[g];0!==h&&(f-=Ej[g],Mj(a,f,h));e--;g=256>e?Cj[e]:Cj[256+(e>>>7)];Nj(a,g,c);h=xj[g];0!==h&&(e-=Fj[g],Mj(a,e,h))}}while(d<a.ya)}Nj(a,256,b)}
function Wj(a,b){var c=b.gd,d=b.Va.Fd,e=b.Va.ld,f=b.Va.Yd,g,h=-1;a.La=0;a.qb=573;for(g=0;g<f;g++)0!==c[2*g]?(a.X[++a.La]=h=g,a.depth[g]=0):c[2*g+1]=0;for(;2>a.La;){var k=a.X[++a.La]=2>h?++h:0;c[2*k]=1;a.depth[k]=0;a.Na--;e&&(a.zb-=d[2*k+1])}b.vb=h;for(g=a.La>>1;1<=g;g--)Uj(a,c,g);k=f;do g=a.X[1],a.X[1]=a.X[a.La--],Uj(a,c,1),d=a.X[1],a.X[--a.qb]=g,a.X[--a.qb]=d,c[2*k]=c[2*g]+c[2*d],a.depth[k]=(a.depth[g]>=a.depth[d]?a.depth[g]:a.depth[d])+1,c[2*g+1]=c[2*d+1]=k,a.X[1]=k++,Uj(a,c,1);while(2<=a.La);a.X[--a.qb]=
a.X[1];g=b.gd;k=b.vb;d=b.Va.Fd;e=b.Va.ld;f=b.Va.ee;var l=b.Va.de,n=b.Va.Ae,p,r=0;for(p=0;15>=p;p++)a.Ia[p]=0;g[2*a.X[a.qb]+1]=0;for(b=a.qb+1;573>b;b++){var t=a.X[b];p=g[2*g[2*t+1]+1]+1;p>n&&(p=n,r++);g[2*t+1]=p;if(!(t>k)){a.Ia[p]++;var y=0;t>=l&&(y=f[t-l]);var z=g[2*t];a.Na+=z*(p+y);e&&(a.zb+=z*(d[2*t+1]+y))}}if(0!==r){do{for(p=n-1;0===a.Ia[p];)p--;a.Ia[p]--;a.Ia[p+1]+=2;a.Ia[n]--;r-=2}while(0<r);for(p=n;0!==p;p--)for(t=a.Ia[p];0!==t;)d=a.X[--b],d>k||(g[2*d+1]!==p&&(a.Na+=(p-g[2*d+1])*g[2*d],g[2*
d+1]=p),t--)}Pj(c,h,a.Ia)}
function Xj(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;0===f&&(h=138,k=3);b[2*(c+1)+1]=65535;for(d=0;d<=c;d++){var l=f;f=b[2*(d+1)+1];++g<h&&l===f||(g<k?a.ha[2*l]+=g:0!==l?(l!==e&&a.ha[2*l]++,a.ha[32]++):10>=g?a.ha[34]++:a.ha[36]++,g=0,e=l,0===f?(h=138,k=3):l===f?(h=6,k=3):(h=7,k=4))}}
function Yj(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;0===f&&(h=138,k=3);for(d=0;d<=c;d++){var l=f;f=b[2*(d+1)+1];if(!(++g<h&&l===f)){if(g<k){do Nj(a,l,a.ha);while(0!==--g)}else 0!==l?(l!==e&&(Nj(a,l,a.ha),g--),Nj(a,16,a.ha),Mj(a,g-3,2)):10>=g?(Nj(a,17,a.ha),Mj(a,g-3,3)):(Nj(a,18,a.ha),Mj(a,g-11,7));g=0;e=l;0===f?(h=138,k=3):l===f?(h=6,k=3):(h=7,k=4)}}}
function Zj(a){var b=4093624447,c;for(c=0;31>=c;c++,b>>>=1)if(b&1&&0!==a.ra[2*c])return 0;if(0!==a.ra[18]||0!==a.ra[20]||0!==a.ra[26])return 1;for(c=32;256>c;c++)if(0!==a.ra[2*c])return 1;return 0}
var ak=!1;function bk(a,b,c){a.W[a.Db+2*a.ya]=b>>>8&255;a.W[a.Db+2*a.ya+1]=b&255;a.W[a.Fc+a.ya]=c&255;a.ya++;0===b?a.ra[2*c]++:(a.matches++,b--,a.ra[2*(Dj[c]+256+1)]++,a.bb[2*(256>b?Cj[b]:Cj[256+(b>>>7)])]++);return a.ya===a.Ib-1}
;function ck(a,b){a.msg=uj[b];return b}
function dk(a){for(var b=a.length;0<=--b;)a[b]=0}
function ek(a){var b=a.state,c=b.pending;c>a.M&&(c=a.M);0!==c&&(M.mb(a.output,b.W,b.Lb,c,a.wb),a.wb+=c,b.Lb+=c,a.Sc+=c,a.M-=c,b.pending-=c,0===b.pending&&(b.Lb=0))}
function fk(a,b){var c=0<=a.va?a.va:-1,d=a.o-a.va,e=0;if(0<a.level){2===a.I.vc&&(a.I.vc=Zj(a));Wj(a,a.ec);Wj(a,a.Yb);Xj(a,a.ra,a.ec.vb);Xj(a,a.bb,a.Yb.vb);Wj(a,a.Yc);for(e=18;3<=e&&0===a.ha[2*zj[e]+1];e--);a.Na+=3*(e+1)+14;var f=a.Na+3+7>>>3;var g=a.zb+3+7>>>3;g<=f&&(f=g)}else f=g=d+5;if(d+4<=f&&-1!==c)Mj(a,b?1:0,3),Sj(a,c,d);else if(4===a.strategy||g===f)Mj(a,2+(b?1:0),3),Vj(a,Aj,Bj);else{Mj(a,4+(b?1:0),3);c=a.ec.vb+1;d=a.Yb.vb+1;e+=1;Mj(a,c-257,5);Mj(a,d-1,5);Mj(a,e-4,4);for(f=0;f<e;f++)Mj(a,a.ha[2*
zj[f]+1],3);Yj(a,a.ra,c-1);Yj(a,a.bb,d-1);Vj(a,a.ra,a.bb)}Qj(a);b&&Rj(a);a.va=a.o;ek(a.I)}
function P(a,b){a.W[a.pending++]=b}
function gk(a,b){a.W[a.pending++]=b>>>8&255;a.W[a.pending++]=b&255}
function hk(a,b){var c=a.pd,d=a.o,e=a.xa,f=a.qd,g=a.o>a.ja-262?a.o-(a.ja-262):0,h=a.window,k=a.Xa,l=a.Ga,n=a.o+258,p=h[d+e-1],r=h[d+e];a.xa>=a.kd&&(c>>=2);f>a.u&&(f=a.u);do{var t=b;if(h[t+e]===r&&h[t+e-1]===p&&h[t]===h[d]&&h[++t]===h[d+1]){d+=2;for(t++;h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&d<n;);t=258-(n-d);d=n-258;if(t>e){a.ub=b;e=t;if(t>=f)break;p=h[d+e-1];r=h[d+e]}}}while((b=l[b&k])>g&&0!==--c);return e<=
a.u?e:a.u}
function ik(a){var b=a.ja,c;do{var d=a.Ld-a.u-a.o;if(a.o>=b+(b-262)){M.mb(a.window,a.window,b,b,0);a.ub-=b;a.o-=b;a.va-=b;var e=c=a.dc;do{var f=a.head[--e];a.head[e]=f>=b?f-b:0}while(--c);e=c=b;do f=a.Ga[--e],a.Ga[e]=f>=b?f-b:0;while(--c);d+=b}if(0===a.I.ka)break;e=a.I;c=a.window;f=a.o+a.u;var g=e.ka;g>d&&(g=d);0===g?c=0:(e.ka-=g,M.mb(c,e.input,e.hb,g,f),1===e.state.wrap?e.H=oj(e.H,c,g,f):2===e.state.wrap&&(e.H=pj(e.H,c,g,f)),e.hb+=g,e.kb+=g,c=g);a.u+=c;if(3<=a.u+a.sa)for(d=a.o-a.sa,a.K=a.window[d],
a.K=(a.K<<a.Ka^a.window[d+1])&a.Ja;a.sa&&!(a.K=(a.K<<a.Ka^a.window[d+3-1])&a.Ja,a.Ga[d&a.Xa]=a.head[a.K],a.head[a.K]=d,d++,a.sa--,3>a.u+a.sa););}while(262>a.u&&0!==a.I.ka)}
function jk(a,b){for(var c;;){if(262>a.u){ik(a);if(262>a.u&&0===b)return 1;if(0===a.u)break}c=0;3<=a.u&&(a.K=(a.K<<a.Ka^a.window[a.o+3-1])&a.Ja,c=a.Ga[a.o&a.Xa]=a.head[a.K],a.head[a.K]=a.o);0!==c&&a.o-c<=a.ja-262&&(a.P=hk(a,c));if(3<=a.P)if(c=bk(a,a.o-a.ub,a.P-3),a.u-=a.P,a.P<=a.Hc&&3<=a.u){a.P--;do a.o++,a.K=(a.K<<a.Ka^a.window[a.o+3-1])&a.Ja,a.Ga[a.o&a.Xa]=a.head[a.K],a.head[a.K]=a.o;while(0!==--a.P);a.o++}else a.o+=a.P,a.P=0,a.K=a.window[a.o],a.K=(a.K<<a.Ka^a.window[a.o+1])&a.Ja;else c=bk(a,0,
a.window[a.o]),a.u--,a.o++;if(c&&(fk(a,!1),0===a.I.M))return 1}a.sa=2>a.o?a.o:2;return 4===b?(fk(a,!0),0===a.I.M?3:4):a.ya&&(fk(a,!1),0===a.I.M)?1:2}
function kk(a,b){for(var c,d;;){if(262>a.u){ik(a);if(262>a.u&&0===b)return 1;if(0===a.u)break}c=0;3<=a.u&&(a.K=(a.K<<a.Ka^a.window[a.o+3-1])&a.Ja,c=a.Ga[a.o&a.Xa]=a.head[a.K],a.head[a.K]=a.o);a.xa=a.P;a.td=a.ub;a.P=2;0!==c&&a.xa<a.Hc&&a.o-c<=a.ja-262&&(a.P=hk(a,c),5>=a.P&&(1===a.strategy||3===a.P&&4096<a.o-a.ub)&&(a.P=2));if(3<=a.xa&&a.P<=a.xa){d=a.o+a.u-3;c=bk(a,a.o-1-a.td,a.xa-3);a.u-=a.xa-1;a.xa-=2;do++a.o<=d&&(a.K=(a.K<<a.Ka^a.window[a.o+3-1])&a.Ja,a.Ga[a.o&a.Xa]=a.head[a.K],a.head[a.K]=a.o);
while(0!==--a.xa);a.fb=0;a.P=2;a.o++;if(c&&(fk(a,!1),0===a.I.M))return 1}else if(a.fb){if((c=bk(a,0,a.window[a.o-1]))&&fk(a,!1),a.o++,a.u--,0===a.I.M)return 1}else a.fb=1,a.o++,a.u--}a.fb&&(bk(a,0,a.window[a.o-1]),a.fb=0);a.sa=2>a.o?a.o:2;return 4===b?(fk(a,!0),0===a.I.M?3:4):a.ya&&(fk(a,!1),0===a.I.M)?1:2}
function lk(a,b){for(var c,d,e,f=a.window;;){if(258>=a.u){ik(a);if(258>=a.u&&0===b)return 1;if(0===a.u)break}a.P=0;if(3<=a.u&&0<a.o&&(d=a.o-1,c=f[d],c===f[++d]&&c===f[++d]&&c===f[++d])){for(e=a.o+258;c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&d<e;);a.P=258-(e-d);a.P>a.u&&(a.P=a.u)}3<=a.P?(c=bk(a,1,a.P-3),a.u-=a.P,a.o+=a.P,a.P=0):(c=bk(a,0,a.window[a.o]),a.u--,a.o++);if(c&&(fk(a,!1),0===a.I.M))return 1}a.sa=0;return 4===b?(fk(a,!0),0===a.I.M?3:4):
a.ya&&(fk(a,!1),0===a.I.M)?1:2}
function mk(a,b){for(var c;;){if(0===a.u&&(ik(a),0===a.u)){if(0===b)return 1;break}a.P=0;c=bk(a,0,a.window[a.o]);a.u--;a.o++;if(c&&(fk(a,!1),0===a.I.M))return 1}a.sa=0;return 4===b?(fk(a,!0),0===a.I.M?3:4):a.ya&&(fk(a,!1),0===a.I.M)?1:2}
function nk(a,b,c,d,e){this.me=a;this.ze=b;this.De=c;this.ye=d;this.he=e}
var ok;ok=[new nk(0,0,0,0,function(a,b){var c=65535;for(c>a.za-5&&(c=a.za-5);;){if(1>=a.u){ik(a);if(0===a.u&&0===b)return 1;if(0===a.u)break}a.o+=a.u;a.u=0;var d=a.va+c;if(0===a.o||a.o>=d)if(a.u=a.o-d,a.o=d,fk(a,!1),0===a.I.M)return 1;if(a.o-a.va>=a.ja-262&&(fk(a,!1),0===a.I.M))return 1}a.sa=0;if(4===b)return fk(a,!0),0===a.I.M?3:4;a.o>a.va&&fk(a,!1);return 1}),
new nk(4,4,8,4,jk),new nk(4,5,16,8,jk),new nk(4,6,32,32,jk),new nk(4,4,16,16,kk),new nk(8,16,32,32,kk),new nk(8,16,128,128,kk),new nk(8,32,128,256,kk),new nk(32,128,258,1024,kk),new nk(32,258,258,4096,kk)];
function pk(){this.I=null;this.status=0;this.W=null;this.wrap=this.pending=this.Lb=this.za=0;this.G=null;this.Ca=0;this.method=8;this.sb=-1;this.Xa=this.Uc=this.ja=0;this.window=null;this.Ld=0;this.head=this.Ga=null;this.qd=this.kd=this.strategy=this.level=this.Hc=this.pd=this.xa=this.u=this.ub=this.o=this.fb=this.td=this.P=this.va=this.Ka=this.Ja=this.Cc=this.dc=this.K=0;this.ra=new M.Ha(1146);this.bb=new M.Ha(122);this.ha=new M.Ha(78);dk(this.ra);dk(this.bb);dk(this.ha);this.Yc=this.Yb=this.ec=
null;this.Ia=new M.Ha(16);this.X=new M.Ha(573);dk(this.X);this.qb=this.La=0;this.depth=new M.Ha(573);dk(this.depth);this.fa=this.la=this.sa=this.matches=this.zb=this.Na=this.Db=this.ya=this.Ib=this.Fc=0}
function qk(a,b){if(!a||!a.state||5<b||0>b)return a?ck(a,-2):-2;var c=a.state;if(!a.output||!a.input&&0!==a.ka||666===c.status&&4!==b)return ck(a,0===a.M?-5:-2);c.I=a;var d=c.sb;c.sb=b;if(42===c.status)if(2===c.wrap)a.H=0,P(c,31),P(c,139),P(c,8),c.G?(P(c,(c.G.text?1:0)+(c.G.Ra?2:0)+(c.G.extra?4:0)+(c.G.name?8:0)+(c.G.comment?16:0)),P(c,c.G.time&255),P(c,c.G.time>>8&255),P(c,c.G.time>>16&255),P(c,c.G.time>>24&255),P(c,9===c.level?2:2<=c.strategy||2>c.level?4:0),P(c,c.G.os&255),c.G.extra&&c.G.extra.length&&
(P(c,c.G.extra.length&255),P(c,c.G.extra.length>>8&255)),c.G.Ra&&(a.H=pj(a.H,c.W,c.pending,0)),c.Ca=0,c.status=69):(P(c,0),P(c,0),P(c,0),P(c,0),P(c,0),P(c,9===c.level?2:2<=c.strategy||2>c.level?4:0),P(c,3),c.status=113);else{var e=8+(c.Uc-8<<4)<<8;e|=(2<=c.strategy||2>c.level?0:6>c.level?1:6===c.level?2:3)<<6;0!==c.o&&(e|=32);c.status=113;gk(c,e+(31-e%31));0!==c.o&&(gk(c,a.H>>>16),gk(c,a.H&65535));a.H=1}if(69===c.status)if(c.G.extra){for(e=c.pending;c.Ca<(c.G.extra.length&65535)&&(c.pending!==c.za||
(c.G.Ra&&c.pending>e&&(a.H=pj(a.H,c.W,c.pending-e,e)),ek(a),e=c.pending,c.pending!==c.za));)P(c,c.G.extra[c.Ca]&255),c.Ca++;c.G.Ra&&c.pending>e&&(a.H=pj(a.H,c.W,c.pending-e,e));c.Ca===c.G.extra.length&&(c.Ca=0,c.status=73)}else c.status=73;if(73===c.status)if(c.G.name){e=c.pending;do{if(c.pending===c.za&&(c.G.Ra&&c.pending>e&&(a.H=pj(a.H,c.W,c.pending-e,e)),ek(a),e=c.pending,c.pending===c.za)){var f=1;break}f=c.Ca<c.G.name.length?c.G.name.charCodeAt(c.Ca++)&255:0;P(c,f)}while(0!==f);c.G.Ra&&c.pending>
e&&(a.H=pj(a.H,c.W,c.pending-e,e));0===f&&(c.Ca=0,c.status=91)}else c.status=91;if(91===c.status)if(c.G.comment){e=c.pending;do{if(c.pending===c.za&&(c.G.Ra&&c.pending>e&&(a.H=pj(a.H,c.W,c.pending-e,e)),ek(a),e=c.pending,c.pending===c.za)){f=1;break}f=c.Ca<c.G.comment.length?c.G.comment.charCodeAt(c.Ca++)&255:0;P(c,f)}while(0!==f);c.G.Ra&&c.pending>e&&(a.H=pj(a.H,c.W,c.pending-e,e));0===f&&(c.status=103)}else c.status=103;103===c.status&&(c.G.Ra?(c.pending+2>c.za&&ek(a),c.pending+2<=c.za&&(P(c,a.H&
255),P(c,a.H>>8&255),a.H=0,c.status=113)):c.status=113);if(0!==c.pending){if(ek(a),0===a.M)return c.sb=-1,0}else if(0===a.ka&&(b<<1)-(4<b?9:0)<=(d<<1)-(4<d?9:0)&&4!==b)return ck(a,-5);if(666===c.status&&0!==a.ka)return ck(a,-5);if(0!==a.ka||0!==c.u||0!==b&&666!==c.status){d=2===c.strategy?mk(c,b):3===c.strategy?lk(c,b):ok[c.level].he(c,b);if(3===d||4===d)c.status=666;if(1===d||3===d)return 0===a.M&&(c.sb=-1),0;if(2===d&&(1===b?(Mj(c,2,3),Nj(c,256,Aj),16===c.fa?(Lj(c,c.la),c.la=0,c.fa=0):8<=c.fa&&
(c.W[c.pending++]=c.la&255,c.la>>=8,c.fa-=8)):5!==b&&(Mj(c,0,3),Sj(c,0,0),3===b&&(dk(c.head),0===c.u&&(c.o=0,c.va=0,c.sa=0))),ek(a),0===a.M))return c.sb=-1,0}if(4!==b)return 0;if(0>=c.wrap)return 1;2===c.wrap?(P(c,a.H&255),P(c,a.H>>8&255),P(c,a.H>>16&255),P(c,a.H>>24&255),P(c,a.kb&255),P(c,a.kb>>8&255),P(c,a.kb>>16&255),P(c,a.kb>>24&255)):(gk(c,a.H>>>16),gk(c,a.H&65535));ek(a);0<c.wrap&&(c.wrap=-c.wrap);return 0!==c.pending?0:1}
;var rk={};rk=function(){this.input=null;this.kb=this.ka=this.hb=0;this.output=null;this.Sc=this.M=this.wb=0;this.msg="";this.state=null;this.vc=2;this.H=0};var sk=Object.prototype.toString;
function tk(a){if(!(this instanceof tk))return new tk(a);a=this.options=M.assign({level:-1,method:8,chunkSize:16384,windowBits:15,memLevel:8,strategy:0,to:""},a||{});a.raw&&0<a.windowBits?a.windowBits=-a.windowBits:a.gzip&&0<a.windowBits&&16>a.windowBits&&(a.windowBits+=16);this.err=0;this.msg="";this.ended=!1;this.chunks=[];this.I=new rk;this.I.M=0;var b=this.I;var c=a.level,d=a.method,e=a.windowBits,f=a.memLevel,g=a.strategy;if(b){var h=1;-1===c&&(c=6);0>e?(h=0,e=-e):15<e&&(h=2,e-=16);if(1>f||9<
f||8!==d||8>e||15<e||0>c||9<c||0>g||4<g)b=ck(b,-2);else{8===e&&(e=9);var k=new pk;b.state=k;k.I=b;k.wrap=h;k.G=null;k.Uc=e;k.ja=1<<k.Uc;k.Xa=k.ja-1;k.Cc=f+7;k.dc=1<<k.Cc;k.Ja=k.dc-1;k.Ka=~~((k.Cc+3-1)/3);k.window=new M.lb(2*k.ja);k.head=new M.Ha(k.dc);k.Ga=new M.Ha(k.ja);k.Ib=1<<f+6;k.za=4*k.Ib;k.W=new M.lb(k.za);k.Db=1*k.Ib;k.Fc=3*k.Ib;k.level=c;k.strategy=g;k.method=d;if(b&&b.state){b.kb=b.Sc=0;b.vc=2;c=b.state;c.pending=0;c.Lb=0;0>c.wrap&&(c.wrap=-c.wrap);c.status=c.wrap?42:113;b.H=2===c.wrap?
0:1;c.sb=0;if(!ak){d=Array(16);for(f=g=0;28>f;f++)for(Ej[f]=g,e=0;e<1<<wj[f];e++)Dj[g++]=f;Dj[g-1]=f;for(f=g=0;16>f;f++)for(Fj[f]=g,e=0;e<1<<xj[f];e++)Cj[g++]=f;for(g>>=7;30>f;f++)for(Fj[f]=g<<7,e=0;e<1<<xj[f]-7;e++)Cj[256+g++]=f;for(e=0;15>=e;e++)d[e]=0;for(e=0;143>=e;)Aj[2*e+1]=8,e++,d[8]++;for(;255>=e;)Aj[2*e+1]=9,e++,d[9]++;for(;279>=e;)Aj[2*e+1]=7,e++,d[7]++;for(;287>=e;)Aj[2*e+1]=8,e++,d[8]++;Pj(Aj,287,d);for(e=0;30>e;e++)Bj[2*e+1]=5,Bj[2*e]=Oj(e,5);Hj=new Gj(Aj,wj,257,286,15);Ij=new Gj(Bj,
xj,0,30,15);Jj=new Gj([],yj,0,19,7);ak=!0}c.ec=new Kj(c.ra,Hj);c.Yb=new Kj(c.bb,Ij);c.Yc=new Kj(c.ha,Jj);c.la=0;c.fa=0;Qj(c);c=0}else c=ck(b,-2);0===c&&(b=b.state,b.Ld=2*b.ja,dk(b.head),b.Hc=ok[b.level].ze,b.kd=ok[b.level].me,b.qd=ok[b.level].De,b.pd=ok[b.level].ye,b.o=0,b.va=0,b.u=0,b.sa=0,b.P=b.xa=2,b.fb=0,b.K=0);b=c}}else b=-2;if(0!==b)throw Error(uj[b]);a.header&&(b=this.I)&&b.state&&2===b.state.wrap&&(b.state.G=a.header);if(a.dictionary){var l;"string"===typeof a.dictionary?l=nj(a.dictionary):
"[object ArrayBuffer]"===sk.call(a.dictionary)?l=new Uint8Array(a.dictionary):l=a.dictionary;a=this.I;f=l;g=f.length;if(a&&a.state)if(l=a.state,b=l.wrap,2===b||1===b&&42!==l.status||l.u)b=-2;else{1===b&&(a.H=oj(a.H,f,g,0));l.wrap=0;g>=l.ja&&(0===b&&(dk(l.head),l.o=0,l.va=0,l.sa=0),c=new M.lb(l.ja),M.mb(c,f,g-l.ja,l.ja,0),f=c,g=l.ja);c=a.ka;d=a.hb;e=a.input;a.ka=g;a.hb=0;a.input=f;for(ik(l);3<=l.u;){f=l.o;g=l.u-2;do l.K=(l.K<<l.Ka^l.window[f+3-1])&l.Ja,l.Ga[f&l.Xa]=l.head[l.K],l.head[l.K]=f,f++;while(--g);
l.o=f;l.u=2;ik(l)}l.o+=l.u;l.va=l.o;l.sa=l.u;l.u=0;l.P=l.xa=2;l.fb=0;a.hb=d;a.input=e;a.ka=c;l.wrap=b;b=0}else b=-2;if(0!==b)throw Error(uj[b]);this.Tf=!0}}
tk.prototype.push=function(a,b){var c=this.I,d=this.options.chunkSize;if(this.ended)return!1;var e=b===~~b?b:!0===b?4:0;"string"===typeof a?c.input=nj(a):"[object ArrayBuffer]"===sk.call(a)?c.input=new Uint8Array(a):c.input=a;c.hb=0;c.ka=c.input.length;do{0===c.M&&(c.output=new M.lb(d),c.wb=0,c.M=d);a=qk(c,e);if(1!==a&&0!==a)return uk(this,a),this.ended=!0,!1;if(0===c.M||0===c.ka&&(4===e||2===e))if("string"===this.options.to){var f=M.Rc(c.output,c.wb);b=f;f=f.length;if(65537>f&&(b.subarray&&mj||!b.subarray))b=
String.fromCharCode.apply(null,M.Rc(b,f));else{for(var g="",h=0;h<f;h++)g+=String.fromCharCode(b[h]);b=g}this.chunks.push(b)}else b=M.Rc(c.output,c.wb),this.chunks.push(b)}while((0<c.ka||0===c.M)&&1!==a);if(4===e)return(c=this.I)&&c.state?(d=c.state.status,42!==d&&69!==d&&73!==d&&91!==d&&103!==d&&113!==d&&666!==d?a=ck(c,-2):(c.state=null,a=113===d?ck(c,-3):0)):a=-2,uk(this,a),this.ended=!0,0===a;2===e&&(uk(this,0),c.M=0);return!0};
function uk(a,b){0===b&&(a.result="string"===a.options.to?a.chunks.join(""):M.hd(a.chunks));a.chunks=[];a.err=b;a.msg=a.I.msg}
function vk(a,b){b=b||{};b.gzip=!0;b=new tk(b);b.push(a,!0);if(b.err)throw b.msg||uj[b.err];return b.result}
;function wk(a){if(!a)return null;a=a.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue;var b;a?b=mb(a):b=null;return b}
;function xk(a){return mb(null===a?"null":void 0===a?"undefined":a)}
;function yk(a){this.name=a}
;var zk=new yk("rawColdConfigGroup");var Ak=new yk("rawHotConfigGroup");function Bk(a){this.F=I(a)}
w(Bk,K);var Ck=new yk("continuationCommand");var Dk=new yk("webCommandMetadata");var Ek=new yk("signalServiceEndpoint");var Fk={Ff:"EMBEDDED_PLAYER_MODE_UNKNOWN",Cf:"EMBEDDED_PLAYER_MODE_DEFAULT",Ef:"EMBEDDED_PLAYER_MODE_PFP",Df:"EMBEDDED_PLAYER_MODE_PFL"};var Gk=new yk("feedbackEndpoint");function Hk(a){this.F=I(a)}
w(Hk,K);Hk.prototype.setTrackingParams=function(a){if(null!=a)if("string"===typeof a)a=a?new ff(a,cf):df||(df=new ff(null,cf));else if(a.constructor!==ff)if(bf(a))a=a.length?new ff(new Uint8Array(a),cf):df||(df=new ff(null,cf));else throw Error();return jg(this,1,a)};var Ik=new yk("webPlayerShareEntityServiceEndpoint");var Jk=new yk("playlistEditEndpoint");var Kk=new yk("modifyChannelNotificationPreferenceEndpoint");var Lk=new yk("unsubscribeEndpoint");var Mk=new yk("subscribeEndpoint");function Nk(){var a=Ok;E("yt.ads.biscotti.getId_")||D("yt.ads.biscotti.getId_",a)}
function Pk(a){D("yt.ads.biscotti.lastId_",a)}
;function Qk(a,b){1<b.length?a[b[0]]=b[1]:1===b.length&&Object.assign(a,b[0])}
;var Rk=C.window,Sk,Tk,Uk=(null==Rk?void 0:null==(Sk=Rk.yt)?void 0:Sk.config_)||(null==Rk?void 0:null==(Tk=Rk.ytcfg)?void 0:Tk.data_)||{};D("yt.config_",Uk);function Vk(){Qk(Uk,arguments)}
function S(a,b){return a in Uk?Uk[a]:b}
function Wk(a){var b=Uk.EXPERIMENT_FLAGS;return b?b[a]:void 0}
;var Xk=[];function Yk(a){Xk.forEach(function(b){return b(a)})}
function Zk(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){$k(b)}}:a}
function $k(a){var b=E("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0,void 0,void 0):(b=S("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0,void 0,void 0]),Vk("ERRORS",b));Yk(a)}
function al(a,b,c,d,e){var f=E("yt.logging.errors.log");f?f(a,"WARNING",b,c,d,void 0,e):(f=S("ERRORS",[]),f.push([a,"WARNING",b,c,d,void 0,e]),Vk("ERRORS",f))}
;var bl=/^[\w.]*$/,cl={q:!0,search_query:!0};function dl(a,b){b=a.split(b);for(var c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(1===f.length&&f[0]||2===f.length)try{var g=el(f[0]||""),h=el(f[1]||"");if(g in c){var k=c[g];Array.isArray(k)?Lb(k,h):c[g]=[k,h]}else c[g]=h}catch(r){var l=r,n=f[0],p=String(dl);l.args=[{key:n,value:f[1],query:a,method:fl===p?"unchanged":p}];cl.hasOwnProperty(n)||al(l)}}return c}
var fl=String(dl);function gl(a){var b=[];Mb(a,function(c,d){var e=encodeURIComponent(String(d));c=Array.isArray(c)?c:[c];Fb(c,function(f){""==f?b.push(e):b.push(e+"="+encodeURIComponent(String(f)))})});
return b.join("&")}
function hl(a){"?"===a.charAt(0)&&(a=a.substring(1));return dl(a,"&")}
function il(a){return-1!==a.indexOf("?")?(a=(a||"").split("#")[0],a=a.split("?",2),hl(1<a.length?a[1]:a[0])):{}}
function jl(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=hl(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);return Gc(a,e)+d}
function kl(a){if(!b)var b=window.location.href;var c=Ac(1,a),d=Bc(a);c&&d?(a=a.match(yc),b=b.match(yc),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?Bc(b)===d&&(Number(Ac(4,b))||null)===(Number(Ac(4,a))||null):!0;return a}
function el(a){return a&&a.match(bl)?a:decodeURIComponent(a.replace(/\+/g," "))}
;function ll(a){var b=ml;a=void 0===a?E("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=ri;e.flash="0";a:{try{var f=b.h.top.location.href}catch(Ga){f=2;break a}f=f?f===b.i.location.href?0:1:2}e=(e.frm=f,e);try{e.u_tz=-(new Date).getTimezoneOffset();var g=void 0===g?ji:g;try{var h=g.history.length}catch(Ga){h=0}e.u_his=h;var k;e.u_h=null==(k=ji.screen)?void 0:k.height;var l;e.u_w=null==(l=ji.screen)?void 0:l.width;var n;e.u_ah=null==(n=ji.screen)?void 0:n.availHeight;var p;e.u_aw=
null==(p=ji.screen)?void 0:p.availWidth;var r;e.u_cd=null==(r=ji.screen)?void 0:r.colorDepth}catch(Ga){}h=b.h;try{var t=h.screenX;var y=h.screenY}catch(Ga){}try{var z=h.outerWidth;var x=h.outerHeight}catch(Ga){}try{var J=h.innerWidth;var G=h.innerHeight}catch(Ga){}try{var R=h.screenLeft;var N=h.screenTop}catch(Ga){}try{J=h.innerWidth,G=h.innerHeight}catch(Ga){}try{var da=h.screen.availWidth;var Ca=h.screen.availTop}catch(Ga){}t=[R,N,t,y,da,Ca,z,x,J,G];try{var O=(b.h.top||window).document,ea="CSS1Compat"==
O.compatMode?O.documentElement:O.body;var ka=(new Qd(ea.clientWidth,ea.clientHeight)).round()}catch(Ga){ka=new Qd(-12245933,-12245933)}O=ka;ka={};var pa=void 0===pa?C:pa;ea=new xi;"SVGElement"in pa&&"createElementNS"in pa.document&&ea.set(0);y=oi();y["allow-top-navigation-by-user-activation"]&&ea.set(1);y["allow-popups-to-escape-sandbox"]&&ea.set(2);pa.crypto&&pa.crypto.subtle&&ea.set(3);"TextDecoder"in pa&&"TextEncoder"in pa&&ea.set(4);pa=yi(ea);ka.bc=pa;ka.bih=O.height;ka.biw=O.width;ka.brdim=t.join();
b=b.i;b=(ka.vis=b.prerendering?3:{visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""]||0,ka.wgl=!!ji.WebGLRenderingContext,ka);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c}
var ml=new function(){var a=window.document;this.h=window;this.i=a};
D("yt.ads_.signals_.getAdSignalsString",function(a){return gl(ll(a))});Za();navigator.userAgent.indexOf(" (CrKey ");var nl="XMLHttpRequest"in C?function(){return new XMLHttpRequest}:null;
function ol(){if(!nl)return null;var a=nl();return"open"in a?a:null}
function pl(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;function ql(a,b){"function"===typeof a&&(a=Zk(a));return window.setTimeout(a,b)}
;var rl="client_dev_domain client_dev_expflag client_dev_regex_map client_dev_root_url client_rollout_override expflag forcedCapability jsfeat jsmode mods".split(" ");[].concat(ma(rl),["client_dev_set_cookie"]);function T(a){a=sl(a);return"string"===typeof a&&"false"===a?!1:!!a}
function U(a,b){a=sl(a);return void 0===a&&void 0!==b?b:Number(a||0)}
function sl(a){return S("EXPERIMENT_FLAGS",{})[a]}
function tl(){for(var a=[],b=S("EXPERIMENTS_FORCED_FLAGS",{}),c=v(Object.keys(b)),d=c.next();!d.done;d=c.next())d=d.value,a.push({key:d,value:String(b[d])});c=S("EXPERIMENT_FLAGS",{});d=v(Object.keys(c));for(var e=d.next();!e.done;e=d.next())e=e.value,e.startsWith("force_")&&void 0===b[e]&&a.push({key:e,value:String(c[e])});return a}
;var ul={Authorization:"AUTHORIZATION","X-Goog-EOM-Visitor-Id":"EOM_VISITOR_DATA","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Domain-Admin-State":"DOMAIN_ADMIN_STATE","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL",
"X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM","X-Goog-AuthUser":"SESSION_INDEX","X-Goog-PageId":"DELEGATED_SESSION_ID"},vl="app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ").concat(ma(rl)),wl=!1;
function xl(a,b,c,d,e,f,g,h){function k(){4===(l&&"readyState"in l?l.readyState:0)&&b&&Zk(b)(l)}
c=void 0===c?"GET":c;d=void 0===d?"":d;h=void 0===h?!1:h;var l=ol();if(!l)return null;"onloadend"in l?l.addEventListener("loadend",k,!1):l.onreadystatechange=k;T("debug_forward_web_query_parameters")&&(a=yl(a));l.open(c,a,!0);f&&(l.responseType=f);g&&(l.withCredentials=!0);c="POST"===c&&(void 0===window.FormData||!(d instanceof FormData));if(e=zl(a,e))for(var n in e)l.setRequestHeader(n,e[n]),"content-type"===n.toLowerCase()&&(c=!1);c&&l.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
if(h&&"setAttributionReporting"in XMLHttpRequest.prototype){a={eventSourceEligible:!0,triggerEligible:!1};try{l.setAttributionReporting(a)}catch(p){al(p)}}l.send(d);return l}
function zl(a,b){b=void 0===b?{}:b;var c=kl(a),d=T("web_ajax_ignore_global_headers_if_set"),e;for(e in ul){var f=S(ul[e]),g="X-Goog-AuthUser"===e||"X-Goog-PageId"===e;"X-Goog-Visitor-Id"!==e||f||(f=S("VISITOR_DATA"));!f||!c&&Bc(a)||d&&void 0!==b[e]||"TVHTML5_UNPLUGGED"===S("INNERTUBE_CLIENT_NAME")&&g||(b[e]=f)}"X-Goog-EOM-Visitor-Id"in b&&"X-Goog-Visitor-Id"in b&&delete b["X-Goog-Visitor-Id"];if(c||!Bc(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());if(c||!Bc(a)){try{var h=(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch(k){}h&&
(b["X-YouTube-Time-Zone"]=h)}document.location.hostname.endsWith("youtubeeducation.com")||!c&&Bc(a)||(b["X-YouTube-Ad-Signals"]=gl(ll()));return b}
function Al(a,b){b.method="POST";b.postParams||(b.postParams={});return Bl(a,b)}
function Bl(a,b){var c=b.format||"JSON";a=Cl(a,b);var d=Dl(a,b),e=!1,f=El(a,function(k){if(!e){e=!0;h&&window.clearTimeout(h);var l=pl(k),n=null,p=400<=k.status&&500>k.status,r=500<=k.status&&600>k.status;if(l||p||r)n=Fl(a,c,k,b.convertToSafeHtml);l&&(l=Gl(c,k,n));n=n||{};p=b.context||C;l?b.onSuccess&&b.onSuccess.call(p,k,n):b.onError&&b.onError.call(p,k,n);b.onFinish&&b.onFinish.call(p,k,n)}},b.method,d,b.headers,b.responseType,b.withCredentials);
d=b.timeout||0;if(b.onTimeout&&0<d){var g=b.onTimeout;var h=ql(function(){e||(e=!0,f.abort(),window.clearTimeout(h),g.call(b.context||C,f))},d)}return f}
function Cl(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=S("XSRF_FIELD_NAME");if(b=b.urlParams)b[c]&&delete b[c],a=jl(a,b||{},!0);return a}
function Dl(a,b){var c=S("XSRF_FIELD_NAME"),d=S("XSRF_TOKEN"),e=b.postBody||"",f=b.postParams,g=S("XSRF_FIELD_NAME"),h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||Bc(a)&&!b.withCredentials&&Bc(a)!==document.location.hostname||"POST"!==b.method||h&&"application/x-www-form-urlencoded"!==h||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);(T("ajax_parse_query_data_only_when_filled")&&f&&0<Object.keys(f).length||f)&&"string"===typeof e&&(e=hl(e),Wb(e,f),e=b.postBodyFormat&&"JSON"===b.postBodyFormat?
JSON.stringify(e):Fc(e));f=e||f&&!Pb(f);!wl&&f&&"POST"!==b.method&&(wl=!0,$k(Error("AJAX request with postData should use POST")));return e}
function Fl(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,al(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(")]}'\n"===f.substring(0,5)&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?Hl(a):null)e={},Fb(a.getElementsByTagName("*"),function(g){e[g.tagName]=Il(g)})}d&&Jl(e);
return e}
function Jl(a){if(Ra(a))for(var b in a){var c;(c="html_content"===b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=a[b],e=fb();d=e?e.createHTML(d):d;a[c]=new ic(d)}else Jl(a[b])}}
function Gl(a,b,c){if(b&&204===b.status)return!0;switch(a){case "JSON":return!!c;case "XML":return 0===Number(c&&c.return_code);case "RAW":return!0;default:return!!c}}
function Hl(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function Il(a){var b="";Fb(a.childNodes,function(c){b+=c.nodeValue});
return b}
function yl(a){var b=window.location.search,c=Bc(a);T("debug_handle_relative_url_for_query_forward_killswitch")||!c&&kl(a)&&(c=document.location.hostname);var d=zc(Ac(5,a));d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=hl(b),f={};Fb(vl,function(g){e[g]&&(f[g]=e[g])});
return jl(a,f||{},!1)}
var El=xl;var Kl=[{Ic:function(a){return"Cannot read property '"+a.key+"'"},
hc:{Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}],TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]},{regexp:/(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,groups:["value","base","key"]}]}},{Ic:function(a){return"Cannot call '"+a.key+"'"},
hc:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}},{Ic:function(a){return a.key+" is not defined"},
hc:{ReferenceError:[{regexp:/(.*) is not defined/,groups:["key"]},{regexp:/Can't find variable: (.*)/,groups:["key"]}]}}];var Ml={Ta:[],Qa:[{callback:Ll,weight:500}]};function Ll(a){if("JavaException"===a.name)return!0;a=a.stack;return a.includes("chrome://")||a.includes("chrome-extension://")||a.includes("moz-extension://")}
;function Nl(){this.Qa=[];this.Ta=[]}
var Ol;function Pl(){if(!Ol){var a=Ol=new Nl;a.Ta.length=0;a.Qa.length=0;Ml.Ta&&a.Ta.push.apply(a.Ta,Ml.Ta);Ml.Qa&&a.Qa.push.apply(a.Qa,Ml.Qa)}return Ol}
;var Ql=new L;function Rl(a){function b(){return a.charCodeAt(d++)}
var c=a.length,d=0;do{var e=Sl(b);if(Infinity===e)break;var f=e>>3;switch(e&7){case 0:e=Sl(b);if(2===f)return e;break;case 1:if(2===f)return;d+=8;break;case 2:e=Sl(b);if(2===f)return a.substr(d,e);d+=e;break;case 5:if(2===f)return;d+=4;break;default:return}}while(d<c)}
function Sl(a){var b=a(),c=b&127;if(128>b)return c;b=a();c|=(b&127)<<7;if(128>b)return c;b=a();c|=(b&127)<<14;if(128>b)return c;b=a();return 128>b?c|(b&127)<<21:Infinity}
;function Tl(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=Ul(d,a[d],b,c),500<e));d++);d=e}else if("object"===typeof a)for(e in a){if(a[e]){var f=e;var g=a[e],h=b,k=c;f="string"!==typeof g||"clickTrackingParams"!==f&&"trackingParams"!==f?0:(g=Rl(atob(g.replace(/-/g,"+").replace(/_/g,"/"))))?Ul(f+".ve",g,h,k):0;d+=f;d+=Ul(e,a[e],b,c);if(500<d)break}}else c[b]=Vl(a),d+=c[b].length;else c[b]=Vl(a),d+=c[b].length;return d}
function Ul(a,b,c,d){c+="."+a;a=Vl(b);d[c]=a;return c.length+a.length}
function Vl(a){try{return("string"===typeof a?a:String(JSON.stringify(a))).substr(0,500)}catch(b){return"unable to serialize "+typeof a+" ("+b.message+")"}}
;function Wl(){this.ff=!0}
function Xl(){Wl.h||(Wl.h=new Wl);return Wl.h}
function Yl(a,b){a={};var c=Wg([]);c&&(a.Authorization=c,c=b=null==b?void 0:b.sessionIndex,void 0===c&&(c=Number(S("SESSION_INDEX",0)),c=isNaN(c)?0:c),T("voice_search_auth_header_removal")||(a["X-Goog-AuthUser"]=c.toString()),"INNERTUBE_HOST_OVERRIDE"in Uk||(a["X-Origin"]=window.location.origin),void 0===b&&"DELEGATED_SESSION_ID"in Uk&&(a["X-Goog-PageId"]=S("DELEGATED_SESSION_ID")));return a}
;var Zl={identityType:"UNAUTHENTICATED_IDENTITY_TYPE_UNKNOWN"};function $l(a){var b=this;this.i=void 0;this.h=!1;a.addEventListener("beforeinstallprompt",function(c){c.preventDefault();b.i=c});
a.addEventListener("appinstalled",function(){b.h=!0},{once:!0})}
function am(){if(!C.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return C.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":C.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":C.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":C.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}}
;function bm(a,b,c,d,e){Qg.set(""+a,b,{Kb:c,path:"/",domain:void 0===d?"youtube.com":d,secure:void 0===e?!1:e})}
function cm(a){return Qg.get(""+a,void 0)}
function dm(a,b,c){Qg.remove(""+a,void 0===b?"/":b,void 0===c?"youtube.com":c)}
function em(){if(T("embeds_web_enable_cookie_detection_fix")){if(!C.navigator.cookieEnabled)return!1}else if(!Qg.isEnabled())return!1;if(Qg.h.cookie)return!0;T("embeds_web_enable_cookie_detection_fix")?Qg.set("TESTCOOKIESENABLED","1",{Kb:60,Qe:"none",secure:!0}):Qg.set("TESTCOOKIESENABLED","1",{Kb:60});if("1"!==Qg.get("TESTCOOKIESENABLED"))return!1;Qg.remove("TESTCOOKIESENABLED");return!0}
;var fm=E("ytglobal.prefsUserPrefsPrefs_")||{};D("ytglobal.prefsUserPrefsPrefs_",fm);function gm(){this.h=S("ALT_PREF_COOKIE_NAME","PREF");this.i=S("ALT_PREF_COOKIE_DOMAIN","youtube.com");var a=cm(this.h);a&&this.parse(a)}
var hm;function im(){hm||(hm=new gm);return hm}
m=gm.prototype;m.get=function(a,b){jm(a);km(a);a=void 0!==fm[a]?fm[a].toString():null;return null!=a?a:b?b:""};
m.set=function(a,b){jm(a);km(a);if(null==b)throw Error("ExpectedNotNull");fm[a]=b.toString()};
function lm(a){return!!((mm("f"+(Math.floor(a/31)+1))||0)&1<<a%31)}
m.remove=function(a){jm(a);km(a);delete fm[a]};
m.clear=function(){for(var a in fm)delete fm[a]};
function km(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function jm(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function mm(a){a=void 0!==fm[a]?fm[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
m.parse=function(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(fm[d]=c.toString())}};var nm={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},om={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};
function pm(){var a=C.navigator;return a?a.connection:void 0}
function qm(){var a=pm();if(a){var b=nm[a.type||"unknown"]||"CONN_UNKNOWN";a=nm[a.effectiveType||"unknown"]||"CONN_UNKNOWN";"CONN_CELLULAR_UNKNOWN"===b&&"CONN_UNKNOWN"!==a&&(b=a);if("CONN_UNKNOWN"!==b)return b;if("CONN_UNKNOWN"!==a)return a}}
function rm(){var a=pm();if(null!=a&&a.effectiveType)return om.hasOwnProperty(a.effectiveType)?om[a.effectiveType]:"EFFECTIVE_CONNECTION_TYPE_UNKNOWN"}
;function V(a){var b=B.apply(1,arguments);var c=Error.call(this,a);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.args=[].concat(ma(b))}
w(V,Error);function sm(){try{return tm(),!0}catch(a){return!1}}
function tm(a){if(void 0!==S("DATASYNC_ID"))return S("DATASYNC_ID");throw new V("Datasync ID not set",void 0===a?"unknown":a);}
;function um(){}
function wm(a,b){return wi.ab(a,0,b)}
um.prototype.oa=function(a,b){return this.ab(a,1,b)};
um.prototype.Bb=function(a){var b=E("yt.scheduler.instance.addImmediateJob");b?b(a):a()};var xm=U("web_emulated_idle_callback_delay",300),ym=1E3/60-3,zm=[8,5,4,3,2,1,0];
function Am(a){a=void 0===a?{}:a;H.call(this);this.i=[];this.j={};this.ba=this.h=0;this.Y=this.m=!1;this.R=[];this.V=this.ea=!1;for(var b=v(zm),c=b.next();!c.done;c=b.next())this.i[c.value]=[];this.l=0;this.sc=a.timeout||1;this.D=ym;this.A=0;this.ta=this.Fe.bind(this);this.qc=this.jf.bind(this);this.Pa=this.Rd.bind(this);this.Za=this.ne.bind(this);this.Qb=this.Ie.bind(this);this.Ba=!!window.requestIdleCallback&&!!window.cancelIdleCallback&&!T("disable_scheduler_requestIdleCallback");(this.ga=!1!==
a.useRaf&&!!window.requestAnimationFrame)&&document.addEventListener("visibilitychange",this.ta)}
w(Am,H);m=Am.prototype;m.Bb=function(a){var b=Za();Bm(this,a);a=Za()-b;this.m||(this.D-=a)};
m.ab=function(a,b,c){++this.ba;if(10===b)return this.Bb(a),this.ba;var d=this.ba;this.j[d]=a;this.m&&!c?this.R.push({id:d,priority:b}):(this.i[b].push(d),this.Y||this.m||(0!==this.h&&Cm(this)!==this.A&&this.stop(),this.start()));return d};
m.pa=function(a){delete this.j[a]};
function Dm(a){a.R.length=0;for(var b=5;0<=b;b--)a.i[b].length=0;a.i[8].length=0;a.j={};a.stop()}
m.isHidden=function(){return!!document.hidden||!1};
function Em(a){return!a.isHidden()&&a.ga}
function Cm(a){if(a.i[8].length){if(a.V)return 4;if(Em(a))return 3}for(var b=5;b>=a.l;b--)if(0<a.i[b].length)return 0<b?Em(a)?3:2:1;return 0}
m.Jb=function(a){var b=E("yt.logging.errors.log");b&&b(a)};
function Bm(a,b){try{b()}catch(c){a.Jb(c)}}
function Fm(a){for(var b=v(zm),c=b.next();!c.done;c=b.next())if(a.i[c.value].length)return!0;return!1}
m.ne=function(a){var b=void 0;a&&(b=a.timeRemaining());this.ea=!0;Gm(this,b);this.ea=!1};
m.jf=function(){Gm(this)};
m.Rd=function(){Hm(this)};
m.Ie=function(a){this.V=!0;var b=Cm(this);4===b&&b!==this.A&&(this.stop(),this.start());Gm(this,void 0,a);this.V=!1};
m.Fe=function(){this.isHidden()||Hm(this);this.h&&(this.stop(),this.start())};
function Hm(a){a.stop();a.m=!0;for(var b=Za(),c=a.i[8];c.length;){var d=c.shift(),e=a.j[d];delete a.j[d];e&&Bm(a,e)}Im(a);a.m=!1;Fm(a)&&a.start();b=Za()-b;a.D-=b}
function Im(a){for(var b=0,c=a.R.length;b<c;b++){var d=a.R[b];a.i[d.priority].push(d.id)}a.R.length=0}
function Gm(a,b,c){a.V&&4===a.A&&a.h||a.stop();a.m=!0;b=Za()+(b||a.D);for(var d=a.i[5];d.length;){var e=d.shift(),f=a.j[e];delete a.j[e];if(f){e=a;try{f(c)}catch(l){e.Jb(l)}}}for(d=a.i[4];d.length;)c=d.shift(),f=a.j[c],delete a.j[c],f&&Bm(a,f);d=a.ea?0:1;d=a.l>d?a.l:d;if(!(Za()>=b)){do{a:{c=a;f=d;for(e=3;e>=f;e--)for(var g=c.i[e];g.length;){var h=g.shift(),k=c.j[h];delete c.j[h];if(k){c=k;break a}}c=null}c&&Bm(a,c)}while(c&&Za()<b)}a.m=!1;Im(a);a.D=ym;Fm(a)&&a.start()}
m.start=function(){this.Y=!1;if(0===this.h)switch(this.A=Cm(this),this.A){case 1:var a=this.Za;this.h=this.Ba?window.requestIdleCallback(a,{timeout:3E3}):window.setTimeout(a,xm);break;case 2:this.h=window.setTimeout(this.qc,this.sc);break;case 3:this.h=window.requestAnimationFrame(this.Qb);break;case 4:this.h=window.setTimeout(this.Pa,0)}};
m.pause=function(){this.stop();this.Y=!0};
m.stop=function(){if(this.h){switch(this.A){case 1:var a=this.h;this.Ba?window.cancelIdleCallback(a):window.clearTimeout(a);break;case 2:case 4:window.clearTimeout(this.h);break;case 3:window.cancelAnimationFrame(this.h)}this.h=0}};
m.S=function(){Dm(this);this.stop();this.ga&&document.removeEventListener("visibilitychange",this.ta);H.prototype.S.call(this)};var Jm=E("yt.scheduler.instance.timerIdMap_")||{},Km=U("kevlar_tuner_scheduler_soft_state_timer_ms",800),Lm=0,Mm=0;function Nm(){var a=E("ytglobal.schedulerInstanceInstance_");if(!a||a.Z())a=new Am(S("scheduler")||{}),D("ytglobal.schedulerInstanceInstance_",a);return a}
function Om(){Pm();var a=E("ytglobal.schedulerInstanceInstance_");a&&(Pc(a),D("ytglobal.schedulerInstanceInstance_",null))}
function Pm(){Dm(Nm());for(var a in Jm)Jm.hasOwnProperty(a)&&delete Jm[Number(a)]}
function Qm(a,b,c){if(!c)return c=void 0===c,-Nm().ab(a,b,c);var d=window.setTimeout(function(){var e=Nm().ab(a,b);Jm[d]=e},c);
return d}
function Rm(a){Nm().Bb(a)}
function Sm(a){var b=Nm();if(0>a)b.pa(-a);else{var c=Jm[a];c?(b.pa(c),delete Jm[a]):window.clearTimeout(a)}}
function Tm(){Um()}
function Um(){window.clearTimeout(Lm);Nm().start()}
function Vm(){Nm().pause();window.clearTimeout(Lm);Lm=window.setTimeout(Tm,Km)}
function Wm(){window.clearTimeout(Mm);Mm=window.setTimeout(function(){Xm(0)},Km)}
function Xm(a){Wm();var b=Nm();b.l=a;b.start()}
function Ym(a){Wm();var b=Nm();b.l>a&&(b.l=a,b.start())}
function Zm(){window.clearTimeout(Mm);var a=Nm();a.l=0;a.start()}
function $m(){E("yt.scheduler.initialized")||(D("yt.scheduler.instance.dispose",Om),D("yt.scheduler.instance.addJob",Qm),D("yt.scheduler.instance.addImmediateJob",Rm),D("yt.scheduler.instance.cancelJob",Sm),D("yt.scheduler.instance.cancelAllJobs",Pm),D("yt.scheduler.instance.start",Um),D("yt.scheduler.instance.pause",Vm),D("yt.scheduler.instance.setPriorityThreshold",Xm),D("yt.scheduler.instance.enablePriorityThreshold",Ym),D("yt.scheduler.instance.clearPriorityThreshold",Zm),D("yt.scheduler.initialized",
!0))}
;function an(){um.apply(this,arguments)}
w(an,um);function bn(){an.h||(an.h=new an);return an.h}
an.prototype.ab=function(a,b,c){void 0!==c&&Number.isNaN(Number(c))&&(c=void 0);var d=E("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):ql(a,c||0)};
an.prototype.pa=function(a){if(void 0===a||!Number.isNaN(Number(a))){var b=E("yt.scheduler.instance.cancelJob");b?b(a):window.clearTimeout(a)}};
an.prototype.start=function(){var a=E("yt.scheduler.instance.start");a&&a()};
an.prototype.pause=function(){var a=E("yt.scheduler.instance.pause");a&&a()};
var wi=bn();T("web_scheduler_auto_init")&&$m();function cn(a){var b=new Zi;(b=b.isAvailable()?a?new ij(b,a):b:null)||(a=new dj(a||"UserDataSharedStore"),b=a.isAvailable()?a:null);this.h=(a=b)?new Ui(a):null;this.i=document.domain||window.location.hostname}
cn.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.h)try{this.h.set(a,b,Date.now()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape((new Eh).serialize(b))}catch(f){return}else e=escape(b);bm(a,e,c,this.i)};
cn.prototype.get=function(a,b){var c=void 0,d=!this.h;if(!d)try{c=this.h.get(a)}catch(e){d=!0}if(d&&(c=cm(a))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
cn.prototype.remove=function(a){this.h&&this.h.remove(a);dm(a,"/",this.i)};var dn=function(){var a;return function(){a||(a=new cn("ytidb"));return a}}();
function en(){var a;return null==(a=dn())?void 0:a.get("LAST_RESULT_ENTRY_KEY",!0)}
;var fn=[],gn,hn=!1;function jn(){var a={};for(gn=new kn(void 0===a.handleError?ln:a.handleError,void 0===a.logEvent?mn:a.logEvent);0<fn.length;)switch(a=fn.shift(),a.type){case "ERROR":gn.Jb(a.payload);break;case "EVENT":gn.logEvent(a.eventType,a.payload)}}
function nn(a){hn||(gn?gn.Jb(a):(fn.push({type:"ERROR",payload:a}),10<fn.length&&fn.shift()))}
function on(a,b){hn||(gn?gn.logEvent(a,b):(fn.push({type:"EVENT",eventType:a,payload:b}),10<fn.length&&fn.shift()))}
;function pn(a){if(0<=a.indexOf(":"))throw Error("Database name cannot contain ':'");}
function qn(a){return a.substr(0,a.indexOf(":"))||a}
;var rn=Ne||Oe;function sn(a){var b=Zb();return b?0<=b.toLowerCase().indexOf(a):!1}
;var tn={},un=(tn.AUTH_INVALID="No user identifier specified.",tn.EXPLICIT_ABORT="Transaction was explicitly aborted.",tn.IDB_NOT_SUPPORTED="IndexedDB is not supported.",tn.MISSING_INDEX="Index not created.",tn.MISSING_OBJECT_STORES="Object stores not created.",tn.DB_DELETED_BY_MISSING_OBJECT_STORES="Database is deleted because expected object stores were not created.",tn.DB_REOPENED_BY_MISSING_OBJECT_STORES="Database is reopened because expected object stores were not created.",tn.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",
tn.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",tn.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",tn.EXECUTE_TRANSACTION_ON_CLOSED_DB="Can't start a transaction on a closed database",tn.INCOMPATIBLE_DB_VERSION="The binary is incompatible with the database version",tn),vn={},wn=(vn.AUTH_INVALID="ERROR",vn.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",vn.EXPLICIT_ABORT="IGNORED",vn.IDB_NOT_SUPPORTED="ERROR",vn.MISSING_INDEX=
"WARNING",vn.MISSING_OBJECT_STORES="ERROR",vn.DB_DELETED_BY_MISSING_OBJECT_STORES="WARNING",vn.DB_REOPENED_BY_MISSING_OBJECT_STORES="WARNING",vn.QUOTA_EXCEEDED="WARNING",vn.QUOTA_MAYBE_EXCEEDED="WARNING",vn.UNKNOWN_ABORT="WARNING",vn.INCOMPATIBLE_DB_VERSION="WARNING",vn),xn={},yn=(xn.AUTH_INVALID=!1,xn.EXECUTE_TRANSACTION_ON_CLOSED_DB=!1,xn.EXPLICIT_ABORT=!1,xn.IDB_NOT_SUPPORTED=!1,xn.MISSING_INDEX=!1,xn.MISSING_OBJECT_STORES=!1,xn.DB_DELETED_BY_MISSING_OBJECT_STORES=!1,xn.DB_REOPENED_BY_MISSING_OBJECT_STORES=
!1,xn.QUOTA_EXCEEDED=!1,xn.QUOTA_MAYBE_EXCEEDED=!0,xn.UNKNOWN_ABORT=!0,xn.INCOMPATIBLE_DB_VERSION=!1,xn);function zn(a,b,c,d,e){b=void 0===b?{}:b;c=void 0===c?un[a]:c;d=void 0===d?wn[a]:d;e=void 0===e?yn[a]:e;V.call(this,c,Object.assign({},{name:"YtIdbKnownError",isSw:void 0===self.document,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.h=e;Object.setPrototypeOf(this,zn.prototype)}
w(zn,V);function An(a,b){zn.call(this,"MISSING_OBJECT_STORES",{expectedObjectStores:b,foundObjectStores:a},un.MISSING_OBJECT_STORES);Object.setPrototypeOf(this,An.prototype)}
w(An,zn);function Bn(a,b){var c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.index=a;this.objectStore=b;Object.setPrototypeOf(this,Bn.prototype)}
w(Bn,Error);var Cn=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function Dn(a,b,c,d){b=qn(b);var e=a instanceof Error?a:Error("Unexpected error: "+a);if(e instanceof zn)return e;a={objectStoreNames:c,dbName:b,dbVersion:d};if("QuotaExceededError"===e.name)return new zn("QUOTA_EXCEEDED",a);if(Pe&&"UnknownError"===e.name)return new zn("QUOTA_MAYBE_EXCEEDED",a);if(e instanceof Bn)return new zn("MISSING_INDEX",Object.assign({},a,{objectStore:e.objectStore,index:e.index}));if("InvalidStateError"===e.name&&Cn.some(function(f){return e.message.includes(f)}))return new zn("EXECUTE_TRANSACTION_ON_CLOSED_DB",
a);
if("AbortError"===e.name)return new zn("UNKNOWN_ABORT",a,e.message);e.args=[Object.assign({},a,{name:"IdbError",sd:e.name})];e.level="WARNING";return e}
function En(a,b,c){var d=en();return new zn("IDB_NOT_SUPPORTED",{context:{caller:a,publicName:b,version:c,hasSucceededOnce:null==d?void 0:d.hasSucceededOnce}})}
;function Fn(a){if(!a)throw Error();throw a;}
function Gn(a){return a}
function Hn(a){this.h=a}
function In(a){function b(e){if("PENDING"===d.state.status){d.state={status:"REJECTED",reason:e};e=v(d.i);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if("PENDING"===d.state.status){d.state={status:"FULFILLED",value:e};e=v(d.h);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.state={status:"PENDING"};this.h=[];this.i=[];a=a.h;try{a(c,b)}catch(e){b(e)}}
In.all=function(a){return new In(new Hn(function(b,c){var d=[],e=a.length;0===e&&b(d);for(var f={rb:0};f.rb<a.length;f={rb:f.rb},++f.rb)In.resolve(a[f.rb]).then(function(g){return function(h){d[g.rb]=h;e--;0===e&&b(d)}}(f)).catch(function(g){c(g)})}))};
In.resolve=function(a){return new In(new Hn(function(b,c){a instanceof In?a.then(b,c):b(a)}))};
In.reject=function(a){return new In(new Hn(function(b,c){c(a)}))};
In.prototype.then=function(a,b){var c=this,d=null!=a?a:Gn,e=null!=b?b:Fn;return new In(new Hn(function(f,g){"PENDING"===c.state.status?(c.h.push(function(){Jn(c,c,d,f,g)}),c.i.push(function(){Kn(c,c,e,f,g)})):"FULFILLED"===c.state.status?Jn(c,c,d,f,g):"REJECTED"===c.state.status&&Kn(c,c,e,f,g)}))};
In.prototype.catch=function(a){return this.then(void 0,a)};
function Jn(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof In?Ln(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Kn(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof In?Ln(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Ln(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof In?Ln(a,b,f,d,e):d(f)},function(f){e(f)})}
;function Mn(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function Nn(a){return new Promise(function(b,c){Mn(a,b,c)})}
function On(a){return new In(new Hn(function(b,c){Mn(a,b,c)}))}
;function Pn(a,b){return new In(new Hn(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()}))}
;var Qn=window,W=Qn.ytcsi&&Qn.ytcsi.now?Qn.ytcsi.now:Qn.performance&&Qn.performance.timing&&Qn.performance.now&&Qn.performance.timing.navigationStart?function(){return Qn.performance.timing.navigationStart+Qn.performance.now()}:function(){return(new Date).getTime()};function Rn(a,b){this.h=a;this.options=b;this.transactionCount=0;this.j=Math.round(W());this.i=!1}
m=Rn.prototype;m.add=function(a,b,c){return Sn(this,[a],{mode:"readwrite",ia:!0},function(d){return d.objectStore(a).add(b,c)})};
m.clear=function(a){return Sn(this,[a],{mode:"readwrite",ia:!0},function(b){return b.objectStore(a).clear()})};
m.close=function(){this.h.close();var a;(null==(a=this.options)?0:a.closed)&&this.options.closed()};
m.count=function(a,b){return Sn(this,[a],{mode:"readonly",ia:!0},function(c){return c.objectStore(a).count(b)})};
function Tn(a,b,c){a=a.h.createObjectStore(b,c);return new Un(a)}
m.delete=function(a,b){return Sn(this,[a],{mode:"readwrite",ia:!0},function(c){return c.objectStore(a).delete(b)})};
m.get=function(a,b){return Sn(this,[a],{mode:"readonly",ia:!0},function(c){return c.objectStore(a).get(b)})};
function Vn(a,b,c){return Sn(a,[b],{mode:"readwrite",ia:!0},function(d){d=d.objectStore(b);return On(d.h.put(c,void 0))})}
m.objectStoreNames=function(){return Array.from(this.h.objectStoreNames)};
function Sn(a,b,c,d){var e,f,g,h,k,l,n,p,r,t,y,z;return A(function(x){switch(x.h){case 1:var J={mode:"readonly",ia:!1,tag:"IDB_TRANSACTION_TAG_UNKNOWN"};"string"===typeof c?J.mode=c:Object.assign(J,c);e=J;a.transactionCount++;f=e.ia?3:1;g=0;case 2:if(h){x.B(4);break}g++;k=Math.round(W());Aa(x,5);l=a.h.transaction(b,e.mode);J=x.yield;var G=new Wn(l);G=Xn(G,d);return J.call(x,G,7);case 7:return n=x.i,p=Math.round(W()),Yn(a,k,p,g,void 0,b.join(),e),x.return(n);case 5:r=Ba(x);t=Math.round(W());y=Dn(r,
a.h.name,b.join(),a.h.version);if((z=y instanceof zn&&!y.h)||g>=f)Yn(a,k,t,g,y,b.join(),e),h=y;x.B(2);break;case 4:return x.return(Promise.reject(h))}})}
function Yn(a,b,c,d,e,f,g){b=c-b;e?(e instanceof zn&&("QUOTA_EXCEEDED"===e.type||"QUOTA_MAYBE_EXCEEDED"===e.type)&&on("QUOTA_EXCEEDED",{dbName:qn(a.h.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof zn&&"UNKNOWN_ABORT"===e.type&&(c-=a.j,0>c&&c>=Math.pow(2,31)&&(c=0),on("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c}),a.i=!0),Zn(a,!1,d,f,b,g.tag),nn(e)):Zn(a,!0,d,f,b,g.tag)}
function Zn(a,b,c,d,e,f){on("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.i,duration:e,isSuccessful:b,tryCount:c,tag:void 0===f?"IDB_TRANSACTION_TAG_UNKNOWN":f})}
m.getName=function(){return this.h.name};
function Un(a){this.h=a}
m=Un.prototype;m.add=function(a,b){return On(this.h.add(a,b))};
m.autoIncrement=function(){return this.h.autoIncrement};
m.clear=function(){return On(this.h.clear()).then(function(){})};
function $n(a,b,c){a.h.createIndex(b,c,{unique:!1})}
m.count=function(a){return On(this.h.count(a))};
function ao(a,b){return bo(a,{query:b},function(c){return c.delete().then(function(){return co(c)})}).then(function(){})}
m.delete=function(a){return a instanceof IDBKeyRange?ao(this,a):On(this.h.delete(a))};
m.get=function(a){return On(this.h.get(a))};
m.index=function(a){try{return new eo(this.h.index(a))}catch(b){if(b instanceof Error&&"NotFoundError"===b.name)throw new Bn(a,this.h.name);throw b;}};
m.getName=function(){return this.h.name};
m.keyPath=function(){return this.h.keyPath};
function bo(a,b,c){a=a.h.openCursor(b.query,b.direction);return fo(a).then(function(d){return Pn(d,c)})}
function Wn(a){var b=this;this.h=a;this.i=new Map;this.aborted=!1;this.done=new Promise(function(c,d){b.h.addEventListener("complete",function(){c()});
b.h.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.h.error)});
b.h.addEventListener("abort",function(){var e=b.h.error;if(e)d(e);else if(!b.aborted){e=zn;for(var f=b.h.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(null===k)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.h.db.name,mode:b.h.mode});d(e)}})})}
function Xn(a,b){var c=new Promise(function(d,e){try{b(a).then(function(f){d(f)}).catch(e)}catch(f){e(f),a.abort()}});
return Promise.all([c,a.done]).then(function(d){return v(d).next().value})}
Wn.prototype.abort=function(){this.h.abort();this.aborted=!0;throw new zn("EXPLICIT_ABORT");};
Wn.prototype.objectStore=function(a){a=this.h.objectStore(a);var b=this.i.get(a);b||(b=new Un(a),this.i.set(a,b));return b};
function eo(a){this.h=a}
m=eo.prototype;m.count=function(a){return On(this.h.count(a))};
m.delete=function(a){return go(this,{query:a},function(b){return b.delete().then(function(){return co(b)})})};
m.get=function(a){return On(this.h.get(a))};
m.keyPath=function(){return this.h.keyPath};
m.unique=function(){return this.h.unique};
function go(a,b,c){a=a.h.openCursor(void 0===b.query?null:b.query,void 0===b.direction?"next":b.direction);return fo(a).then(function(d){return Pn(d,c)})}
function ho(a,b){this.request=a;this.cursor=b}
function fo(a){return On(a).then(function(b){return b?new ho(a,b):null})}
function co(a){a.cursor.continue(void 0);return fo(a.request)}
ho.prototype.delete=function(){return On(this.cursor.delete()).then(function(){})};
ho.prototype.getValue=function(){return this.cursor.value};
ho.prototype.update=function(a){return On(this.cursor.update(a))};function io(a,b,c){return new Promise(function(d,e){function f(){r||(r=new Rn(g.result,{closed:p}));return r}
var g=void 0!==b?self.indexedDB.open(a,b):self.indexedDB.open(a);var h=c.Td,k=c.blocking,l=c.gf,n=c.upgrade,p=c.closed,r;g.addEventListener("upgradeneeded",function(t){try{if(null===t.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(null===g.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");t.dataLoss&&"none"!==t.dataLoss&&on("IDB_DATA_CORRUPTED",{reason:t.dataLossMessage||"unknown reason",dbName:qn(a)});var y=f(),z=new Wn(g.transaction);
n&&n(y,function(x){return t.oldVersion<x&&t.newVersion>=x},z);
z.done.catch(function(x){e(x)})}catch(x){e(x)}});
g.addEventListener("success",function(){var t=g.result;k&&t.addEventListener("versionchange",function(){k(f())});
t.addEventListener("close",function(){on("IDB_UNEXPECTEDLY_CLOSED",{dbName:qn(a),dbVersion:t.version});l&&l()});
d(f())});
g.addEventListener("error",function(){e(g.error)});
h&&g.addEventListener("blocked",function(){h()})})}
function jo(a,b,c){c=void 0===c?{}:c;return io(a,b,c)}
function ko(a,b){b=void 0===b?{}:b;var c,d,e,f;return A(function(g){if(1==g.h)return Aa(g,2),c=self.indexedDB.deleteDatabase(a),d=b,(e=d.Td)&&c.addEventListener("blocked",function(){e()}),g.yield(Nn(c),4);
if(2!=g.h)g.h=0,g.l=0;else throw f=Ba(g),Dn(f,a,"",-1);})}
;function lo(a,b){this.name=a;this.options=b;this.j=!0;this.v=this.l=0}
lo.prototype.i=function(a,b,c){c=void 0===c?{}:c;return jo(a,b,c)};
lo.prototype.delete=function(a){a=void 0===a?{}:a;return ko(this.name,a)};
function mo(a,b){return new zn("INCOMPATIBLE_DB_VERSION",{dbName:a.name,oldVersion:a.options.version,newVersion:b})}
function no(a,b){if(!b)throw En("openWithToken",qn(a.name));return a.open()}
lo.prototype.open=function(){function a(){var f,g,h,k,l,n,p,r,t,y;return A(function(z){switch(z.h){case 1:return g=null!=(f=Error().stack)?f:"",Aa(z,2),z.yield(c.i(c.name,c.options.version,e),4);case 4:for(var x=h=z.i,J=c.options,G=[],R=v(Object.keys(J.xb)),N=R.next();!N.done;N=R.next()){N=N.value;var da=J.xb[N],Ca=void 0===da.Le?Number.MAX_VALUE:da.Le;!(x.h.version>=da.Cb)||x.h.version>=Ca||x.h.objectStoreNames.contains(N)||G.push(N)}k=G;if(0===k.length){z.B(5);break}l=Object.keys(c.options.xb);
n=h.objectStoreNames();if(c.v<U("ytidb_reopen_db_retries",0))return c.v++,h.close(),nn(new zn("DB_REOPENED_BY_MISSING_OBJECT_STORES",{dbName:c.name,expectedObjectStores:l,foundObjectStores:n})),z.return(a());if(!(c.l<U("ytidb_remake_db_retries",1))){z.B(6);break}c.l++;return z.yield(c.delete(),7);case 7:return nn(new zn("DB_DELETED_BY_MISSING_OBJECT_STORES",{dbName:c.name,expectedObjectStores:l,foundObjectStores:n})),z.return(a());case 6:throw new An(n,l);case 5:return z.return(h);case 2:p=Ba(z);
if(p instanceof DOMException?"VersionError"!==p.name:"DOMError"in self&&p instanceof DOMError?"VersionError"!==p.name:!(p instanceof Object&&"message"in p)||"An attempt was made to open a database using a lower version than the existing version."!==p.message){z.B(8);break}return z.yield(c.i(c.name,void 0,Object.assign({},e,{upgrade:void 0})),9);case 9:r=z.i;t=r.h.version;if(void 0!==c.options.version&&t>c.options.version+1)throw r.close(),c.j=!1,mo(c,t);return z.return(r);case 8:throw b(),p instanceof
Error&&!T("ytidb_async_stack_killswitch")&&(p.stack=p.stack+"\n"+g.substring(g.indexOf("\n")+1)),Dn(p,c.name,"",null!=(y=c.options.version)?y:-1);}})}
function b(){c.h===d&&(c.h=void 0)}
var c=this;if(!this.j)throw mo(this);if(this.h)return this.h;var d,e={blocking:function(f){f.close()},
closed:b,gf:b,upgrade:this.options.upgrade};return this.h=d=a()};var oo=new lo("YtIdbMeta",{xb:{databases:{Cb:1}},upgrade:function(a,b){b(1)&&Tn(a,"databases",{keyPath:"actualName"})}});
function po(a,b){var c;return A(function(d){if(1==d.h)return d.yield(no(oo,b),2);c=d.i;return d.return(Sn(c,["databases"],{ia:!0,mode:"readwrite"},function(e){var f=e.objectStore("databases");return f.get(a.actualName).then(function(g){if(g?a.actualName!==g.actualName||a.publicName!==g.publicName||a.userIdentifier!==g.userIdentifier:1)return On(f.h.put(a,void 0)).then(function(){})})}))})}
function qo(a,b){var c;return A(function(d){if(1==d.h)return a?d.yield(no(oo,b),2):d.return();c=d.i;return d.return(c.delete("databases",a))})}
function ro(a,b){var c,d;return A(function(e){return 1==e.h?(c=[],e.yield(no(oo,b),2)):3!=e.h?(d=e.i,e.yield(Sn(d,["databases"],{ia:!0,mode:"readonly"},function(f){c.length=0;return bo(f.objectStore("databases"),{},function(g){a(g.getValue())&&c.push(g.getValue());return co(g)})}),3)):e.return(c)})}
function so(a){return ro(function(b){return"LogsDatabaseV2"===b.publicName&&void 0!==b.userIdentifier},a)}
function to(a,b,c){return ro(function(d){return c?void 0!==d.userIdentifier&&!a.includes(d.userIdentifier)&&c.includes(d.publicName):void 0!==d.userIdentifier&&!a.includes(d.userIdentifier)},b)}
function uo(a){var b,c;return A(function(d){if(1==d.h)return b=tm("YtIdbMeta hasAnyMeta other"),d.yield(ro(function(e){return void 0!==e.userIdentifier&&e.userIdentifier!==b},a),2);
c=d.i;return d.return(0<c.length)})}
;var vo,wo=new function(){}(new function(){});
function xo(){var a,b,c,d;return A(function(e){switch(e.h){case 1:a=en();if(null==(b=a)?0:b.hasSucceededOnce)return e.return(!0);var f;if(f=rn)f=/WebKit\/([0-9]+)/.exec(Zb()),f=!!(f&&600<=parseInt(f[1],10));f&&(f=/WebKit\/([0-9]+)/.exec(Zb()),f=!(f&&602<=parseInt(f[1],10)));if(f||Zc)return e.return(!1);try{if(c=self,!(c.indexedDB&&c.IDBIndex&&c.IDBKeyRange&&c.IDBObjectStore))return e.return(!1)}catch(g){return e.return(!1)}if(!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return e.return(!1);
Aa(e,2);d={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0};return e.yield(po(d,wo),4);case 4:return e.yield(qo("yt-idb-test-do-not-use",wo),5);case 5:return e.return(!0);case 2:return Ba(e),e.return(!1)}})}
function yo(){if(void 0!==vo)return vo;hn=!0;return vo=xo().then(function(a){hn=!1;var b;if(null!=(b=dn())&&b.h){var c;b={hasSucceededOnce:(null==(c=en())?void 0:c.hasSucceededOnce)||a};var d;null==(d=dn())||d.set("LAST_RESULT_ENTRY_KEY",b,2592E3,!0)}return a})}
function zo(){return E("ytglobal.idbToken_")||void 0}
function Ao(){var a=zo();return a?Promise.resolve(a):yo().then(function(b){(b=b?wo:void 0)&&D("ytglobal.idbToken_",b);return b})}
;var Bo=0;function Co(a,b){Bo||(Bo=wi.oa(function(){var c,d,e,f,g;return A(function(h){switch(h.h){case 1:return h.yield(Ao(),2);case 2:c=h.i;if(!c)return h.return();d=!0;Aa(h,3);return h.yield(to(a,c,b),5);case 5:e=h.i;if(!e.length){d=!1;h.B(6);break}f=e[0];return h.yield(ko(f.actualName),7);case 7:return h.yield(qo(f.actualName,c),6);case 6:h.h=4;h.l=0;break;case 3:g=Ba(h),nn(g),d=!1;case 4:wi.pa(Bo),Bo=0,d&&Co(a,b),h.h=0}})}))}
function Do(){var a;return A(function(b){return 1==b.h?b.yield(Ao(),2):(a=b.i)?b.return(uo(a)):b.return(!1)})}
new hi;function Eo(a){if(!sm())throw a=new zn("AUTH_INVALID",{dbName:a}),nn(a),a;var b=tm();return{actualName:a+":"+b,publicName:a,userIdentifier:b}}
function Fo(a,b,c,d){var e,f,g,h,k,l;return A(function(n){switch(n.h){case 1:return f=null!=(e=Error().stack)?e:"",n.yield(Ao(),2);case 2:g=n.i;if(!g)throw h=En("openDbImpl",a,b),T("ytidb_async_stack_killswitch")||(h.stack=h.stack+"\n"+f.substring(f.indexOf("\n")+1)),nn(h),h;pn(a);k=c?{actualName:a,publicName:a,userIdentifier:void 0}:Eo(a);Aa(n,3);return n.yield(po(k,g),5);case 5:return n.yield(jo(k.actualName,b,d),6);case 6:return n.return(n.i);case 3:return l=Ba(n),Aa(n,7),n.yield(qo(k.actualName,
g),9);case 9:n.h=8;n.l=0;break;case 7:Ba(n);case 8:throw l;}})}
function Go(a,b,c){c=void 0===c?{}:c;return Fo(a,b,!1,c)}
function Ho(a,b,c){c=void 0===c?{}:c;return Fo(a,b,!0,c)}
function Io(a,b){b=void 0===b?{}:b;var c,d;return A(function(e){if(1==e.h)return e.yield(Ao(),2);if(3!=e.h){c=e.i;if(!c)return e.return();pn(a);d=Eo(a);return e.yield(ko(d.actualName,b),3)}return e.yield(qo(d.actualName,c),0)})}
function Jo(a,b,c){a=a.map(function(d){return A(function(e){return 1==e.h?e.yield(ko(d.actualName,b),2):e.yield(qo(d.actualName,c),0)})});
return Promise.all(a).then(function(){})}
function Ko(){var a=void 0===a?{}:a;var b,c;return A(function(d){if(1==d.h)return d.yield(Ao(),2);if(3!=d.h){b=d.i;if(!b)return d.return();pn("LogsDatabaseV2");return d.yield(so(b),3)}c=d.i;return d.yield(Jo(c,a,b),0)})}
function Lo(a,b){b=void 0===b?{}:b;var c;return A(function(d){if(1==d.h)return d.yield(Ao(),2);if(3!=d.h){c=d.i;if(!c)return d.return();pn(a);return d.yield(ko(a,b),3)}return d.yield(qo(a,c),0)})}
;function Mo(a,b){lo.call(this,a,b);this.options=b;pn(a)}
w(Mo,lo);function No(a,b){var c;return function(){c||(c=new Mo(a,b));return c}}
Mo.prototype.i=function(a,b,c){c=void 0===c?{}:c;return(this.options.nc?Ho:Go)(a,b,Object.assign({},c))};
Mo.prototype.delete=function(a){a=void 0===a?{}:a;return(this.options.nc?Lo:Io)(this.name,a)};
function Oo(a,b){return No(a,b)}
;var Po={},Qo=Oo("ytGcfConfig",{xb:(Po.coldConfigStore={Cb:1},Po.hotConfigStore={Cb:1},Po),nc:!1,upgrade:function(a,b){b(1)&&($n(Tn(a,"hotConfigStore",{keyPath:"key",autoIncrement:!0}),"hotTimestampIndex","timestamp"),$n(Tn(a,"coldConfigStore",{keyPath:"key",autoIncrement:!0}),"coldTimestampIndex","timestamp"))},
version:1});function Ro(a){return no(Qo(),a)}
function So(a,b,c){var d,e,f;return A(function(g){switch(g.h){case 1:return d={config:a,hashData:b,timestamp:W()},g.yield(Ro(c),2);case 2:return e=g.i,g.yield(e.clear("hotConfigStore"),3);case 3:return g.yield(Vn(e,"hotConfigStore",d),4);case 4:return f=g.i,g.return(f)}})}
function To(a,b,c,d){var e,f,g;return A(function(h){switch(h.h){case 1:return e={config:a,hashData:b,configData:c,timestamp:W()},h.yield(Ro(d),2);case 2:return f=h.i,h.yield(f.clear("coldConfigStore"),3);case 3:return h.yield(Vn(f,"coldConfigStore",e),4);case 4:return g=h.i,h.return(g)}})}
function Uo(a){var b,c;return A(function(d){return 1==d.h?d.yield(Ro(a),2):3!=d.h?(b=d.i,c=void 0,d.yield(Sn(b,["coldConfigStore"],{mode:"readwrite",ia:!0},function(e){return go(e.objectStore("coldConfigStore").index("coldTimestampIndex"),{direction:"prev"},function(f){c=f.getValue()})}),3)):d.return(c)})}
function Vo(a){var b,c;return A(function(d){return 1==d.h?d.yield(Ro(a),2):3!=d.h?(b=d.i,c=void 0,d.yield(Sn(b,["hotConfigStore"],{mode:"readwrite",ia:!0},function(e){return go(e.objectStore("hotConfigStore").index("hotTimestampIndex"),{direction:"prev"},function(f){c=f.getValue()})}),3)):d.return(c)})}
;function Wo(){H.call(this);this.i=[];this.h=[];var a=E("yt.gcf.config.hotUpdateCallbacks");a?(this.i=[].concat(ma(a)),this.h=a):(this.h=[],D("yt.gcf.config.hotUpdateCallbacks",this.h))}
w(Wo,H);Wo.prototype.S=function(){for(var a=v(this.i),b=a.next();!b.done;b=a.next()){var c=this.h;b=c.indexOf(b.value);0<=b&&c.splice(b,1)}this.i.length=0;H.prototype.S.call(this)};function Xo(){this.h=0;this.i=new Wo}
function Yo(){var a;return null!=(a=E("yt.gcf.config.hotConfigGroup"))?a:S("RAW_HOT_CONFIG_GROUP")}
function Zo(a,b,c){var d,e,f;return A(function(g){switch(g.h){case 1:if(!T("start_client_gcf")){g.B(0);break}c&&(a.j=c,D("yt.gcf.config.hotConfigGroup",a.j||null));a.l(b);d=zo();if(!d){g.B(3);break}if(c){g.B(4);break}return g.yield(Vo(d),5);case 5:e=g.i,c=null==(f=e)?void 0:f.config;case 4:return g.yield(So(c,b,d),3);case 3:if(c)for(var h=c,k=v(a.i.h),l=k.next();!l.done;l=k.next())l=l.value,l(h);g.h=0}})}
function $o(a,b,c){var d,e,f,g;return A(function(h){if(1==h.h){if(!T("start_client_gcf"))return h.B(0);a.coldHashData=b;D("yt.gcf.config.coldHashData",a.coldHashData||null);return(d=zo())?c?h.B(4):h.yield(Uo(d),5):h.B(0)}4!=h.h&&(e=h.i,c=null==(f=e)?void 0:f.config);if(!c)return h.B(0);g=c.configData;return h.yield(To(c,b,g,d),0)})}
function ap(){if(!Xo.h){var a=new Xo;Xo.h=a}a=Xo.h;var b=W()-a.h;if(!(0!==a.h&&b<U("send_config_hash_timer"))){b=E("yt.gcf.config.coldConfigData");var c=E("yt.gcf.config.hotHashData"),d=E("yt.gcf.config.coldHashData");b&&c&&d&&(a.h=W());return{coldConfigData:b,hotHashData:c,coldHashData:d}}}
Xo.prototype.l=function(a){this.hotHashData=a;D("yt.gcf.config.hotHashData",this.hotHashData||null)};function bp(){return"INNERTUBE_API_KEY"in Uk&&"INNERTUBE_API_VERSION"in Uk}
function cp(){return{innertubeApiKey:S("INNERTUBE_API_KEY"),innertubeApiVersion:S("INNERTUBE_API_VERSION"),oe:S("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),md:S("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),cg:S("INNERTUBE_CONTEXT_CLIENT_NAME",1),innertubeContextClientVersion:S("INNERTUBE_CONTEXT_CLIENT_VERSION"),qe:S("INNERTUBE_CONTEXT_HL"),pe:S("INNERTUBE_CONTEXT_GL"),re:S("INNERTUBE_HOST_OVERRIDE")||"",te:!!S("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),se:!!S("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:S("SERIALIZED_CLIENT_CONFIG_DATA")}}
function dp(a){var b={client:{hl:a.qe,gl:a.pe,clientName:a.md,clientVersion:a.innertubeContextClientVersion,configInfo:a.oe}};navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=C.devicePixelRatio;c&&1!=c&&(b.client.screenDensityFloat=String(c));c=S("EXPERIMENTS_TOKEN","");""!==c&&(b.client.experimentsToken=c);c=tl();0<c.length&&(b.request={internalExperimentFlags:c});c=a.md;if(("WEB"===c||"MWEB"===c||1===c||2===c)&&b){var d;b.client.mainAppWebInfo=null!=(d=b.client.mainAppWebInfo)?
d:{};b.client.mainAppWebInfo.webDisplayMode=am()}(d=E("yt.embedded_player.embed_url"))&&b&&(b.thirdParty={embedUrl:d});var e;if(T("web_log_memory_total_kbytes")&&(null==(e=C.navigator)?0:e.deviceMemory)){var f;e=null==(f=C.navigator)?void 0:f.deviceMemory;b&&(b.client.memoryTotalKbytes=""+1E6*e)}a.appInstallData&&b&&(b.client.configInfo=b.client.configInfo||{},b.client.configInfo.appInstallData=a.appInstallData);(a=qm())&&b&&(b.client.connectionType=a);T("web_log_effective_connection_type")&&(a=rm())&&
b&&(b.client.effectiveConnectionType=a);T("start_client_gcf")&&(e=ap())&&(a=e.coldConfigData,f=e.coldHashData,e=e.hotHashData,a&&f&&e&&b&&(b.client.configInfo=b.client.configInfo||{},b.client.configInfo.coldConfigData=a,b.client.configInfo.coldHashData=f,b.client.configInfo.hotHashData=e));S("DELEGATED_SESSION_ID")&&!T("pageid_as_header_web")&&(b.user={onBehalfOfUser:S("DELEGATED_SESSION_ID")});!T("fill_delegate_context_in_gel_killswitch")&&(a=S("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT"))&&
(b.user=Object.assign({},b.user,{serializedDelegationContext:a}));a=Object;f=a.assign;e=b.client;d={};c=v(Object.entries(hl(S("DEVICE",""))));for(var g=c.next();!g.done;g=c.next()){var h=v(g.value);g=h.next().value;h=h.next().value;"cbrand"===g?d.deviceMake=h:"cmodel"===g?d.deviceModel=h:"cbr"===g?d.browserName=h:"cbrver"===g?d.browserVersion=h:"cos"===g?d.osName=h:"cosver"===g?d.osVersion=h:"cplatform"===g&&(d.platform=h)}b.client=f.call(a,e,d);return b}
function ep(a,b,c){c=void 0===c?{}:c;var d={};S("EOM_VISITOR_DATA")?d={"X-Goog-EOM-Visitor-Id":S("EOM_VISITOR_DATA")}:d={"X-Goog-Visitor-Id":c.visitorData||S("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;b=c.authorization||S("AUTHORIZATION");b||(a?b="Bearer "+E("gapi.auth.getToken")().Uf:(a=Yl(Xl()),T("pageid_as_header_web")||delete a["X-Goog-PageId"],d=Object.assign({},d,a)));b&&(d.Authorization=b);return d}
;var fp="undefined"!==typeof TextEncoder?new TextEncoder:null,gp=fp?function(a){return fp.encode(a)}:function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);
128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(55296==(e&64512)&&d+1<a.length&&56320==(a.charCodeAt(d+1)&64512)?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}a=new Uint8Array(b.length);for(c=0;c<a.length;c++)a[c]=b[c];return a};function hp(a,b){this.version=a;this.args=b}
hp.prototype.serialize=function(){return{version:this.version,args:this.args}};function ip(a,b){this.topic=a;this.h=b}
ip.prototype.toString=function(){return this.topic};var jp=E("ytPubsub2Pubsub2Instance")||new L;L.prototype.subscribe=L.prototype.subscribe;L.prototype.unsubscribeByKey=L.prototype.Ab;L.prototype.publish=L.prototype.Ya;L.prototype.clear=L.prototype.clear;D("ytPubsub2Pubsub2Instance",jp);var kp=E("ytPubsub2Pubsub2SubscribedKeys")||{};D("ytPubsub2Pubsub2SubscribedKeys",kp);var lp=E("ytPubsub2Pubsub2TopicToKeys")||{};D("ytPubsub2Pubsub2TopicToKeys",lp);var mp=E("ytPubsub2Pubsub2IsAsync")||{};D("ytPubsub2Pubsub2IsAsync",mp);
D("ytPubsub2Pubsub2SkipSubKey",null);function np(a,b){var c=op();c&&c.publish.call(c,a.toString(),a,b)}
function pp(a){var b=qp,c=op();if(!c)return 0;var d=c.subscribe(b.toString(),function(e,f){var g=E("ytPubsub2Pubsub2SkipSubKey");g&&g==d||(g=function(){if(kp[d])try{if(f&&b instanceof ip&&b!=e)try{var h=b.h,k=f;if(!k.args||!k.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!h.Wa){var l=new h;h.Wa=l.version}var n=h.Wa}catch(x){}if(!n||k.version!=n)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{n=Reflect;var p=n.construct;
var r=k.args,t=r.length;if(0<t){var y=Array(t);for(k=0;k<t;k++)y[k]=r[k];var z=y}else z=[];f=p.call(n,h,z)}catch(x){throw x.message="yt.pubsub2.Data.deserialize(): "+x.message,x;}}catch(x){throw x.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+b.toString()+": "+x.message,x;}a.call(window,f)}catch(x){$k(x)}},mp[b.toString()]?E("yt.scheduler.instance")?wi.oa(g):ql(g,0):g())});
kp[d]=!0;lp[b.toString()]||(lp[b.toString()]=[]);lp[b.toString()].push(d);return d}
function rp(){var a=sp,b=pp(function(c){a.apply(void 0,arguments);tp(b)});
return b}
function tp(a){var b=op();b&&("number"===typeof a&&(a=[a]),Fb(a,function(c){b.unsubscribeByKey(c);delete kp[c]}))}
function op(){return E("ytPubsub2Pubsub2Instance")}
;function up(a,b,c){c=void 0===c?{sampleRate:.1}:c;Math.random()<Math.min(.02,c.sampleRate/100)&&np("meta_logging_csi_event",{timerName:a,qg:b})}
;var vp=void 0,wp=void 0;function xp(){wp||(wp=wk(S("WORKER_SERIALIZATION_URL")));return wp||void 0}
function yp(){var a=xp();vp||void 0===a||(vp=new Worker(kb(a),void 0));return vp}
;var zp=U("max_body_size_to_compress",5E5),Ap=U("min_body_size_to_compress",500),Bp=!0,Cp=0,Dp=0,Ep=U("compression_performance_threshold_lr",250),Fp=U("slow_compressions_before_abandon_count",4),Gp=!1,Hp=new Map,Ip=1,Jp=!0;function Kp(){if("function"===typeof Worker&&xp()&&!Gp){var a=function(c){c=c.data;if("gzippedGelBatch"===c.op){var d=Hp.get(c.key);d&&(Lp(c.gzippedBatch,d.latencyPayload,d.url,d.options,d.sendFn),Hp.delete(c.key))}},b=yp();
b&&(b.addEventListener("message",a),b.onerror=function(){Hp.clear()},Gp=!0)}}
function Mp(a,b,c,d,e){e=void 0===e?!1:e;var f={startTime:W(),ticks:{},infos:{}};if(Bp)try{var g=Np(b);if(null!=g&&(g>zp||g<Ap))d(a,c);else{if(T("gzip_gel_with_worker")&&(T("initial_gzip_use_main_thread")&&!Jp||!T("initial_gzip_use_main_thread"))){Gp||Kp();var h=yp();if(h&&!e){Hp.set(Ip,{latencyPayload:f,url:a,options:c,sendFn:d});h.postMessage({op:"gelBatchToGzip",serializedBatch:b,key:Ip});Ip++;return}}var k=vk(gp(b));Lp(k,f,a,c,d)}}catch(l){al(l),d(a,c)}else d(a,c)}
function Lp(a,b,c,d,e){Jp=!1;var f=W();b.ticks.gelc=f;Dp++;T("disable_compression_due_to_performance_degredation")&&f-b.startTime>=Ep&&(Cp++,T("abandon_compression_after_N_slow_zips")?Dp===U("compression_disable_point")&&Cp>Fp&&(Bp=!1):Bp=!1);Op(b);d.headers||(d.headers={});d.headers["Content-Encoding"]="gzip";d.postBody=a;d.postParams=void 0;e(c,d)}
function Pp(a){var b=void 0===b?!1:b;var c=void 0===c?!1:c;var d=W(),e={startTime:d,ticks:{},infos:{}},f=b?E("yt.logging.gzipForFetch",!1):!0;if(Bp&&f){if(!a.body)return a;try{var g=c?a.body:"string"===typeof a.body?a.body:JSON.stringify(a.body);f=g;if(!c&&"string"===typeof g){var h=Np(g);if(null!=h&&(h>zp||h<Ap))return a;c=b?{level:1}:void 0;f=vk(gp(g),c);var k=W();e.ticks.gelc=k;if(b){Dp++;if((T("disable_compression_due_to_performance_degredation")||T("disable_compression_due_to_performance_degradation_lr"))&&
k-d>=Ep)if(Cp++,T("abandon_compression_after_N_slow_zips")||T("abandon_compression_after_N_slow_zips_lr")){b=Cp/Dp;var l=Fp/U("compression_disable_point");0<Dp&&0===Dp%U("compression_disable_point")&&b>=l&&(Bp=!1)}else Bp=!1;Op(e)}}a.headers=Object.assign({},{"Content-Encoding":"gzip"},a.headers||{});a.body=f;return a}catch(n){return al(n),a}}else return a}
function Np(a){try{return(new Blob(a.split(""))).size}catch(b){return al(b),null}}
function Op(a){T("gel_compression_csi_killswitch")||!T("log_gel_compression_latency")&&!T("log_gel_compression_latency_lr")||up("gel_compression",a,{sampleRate:.1})}
;function Qp(a){a=Object.assign({},a);delete a.Authorization;var b=Wg();if(b){var c=new Ci;c.update(S("INNERTUBE_API_KEY"));c.update(b);a.hash=Se(c.digest(),3)}return a}
;var Rp;function Sp(){Rp||(Rp=new cn("yt.innertube"));return Rp}
function Tp(a,b,c,d){if(d)return null;d=Sp().get("nextId",!0)||1;var e=Sp().get("requests",!0)||{};e[d]={method:a,request:b,authState:Qp(c),requestTime:Math.round(W())};Sp().set("nextId",d+1,86400,!0);Sp().set("requests",e,86400,!0);return d}
function Up(a){var b=Sp().get("requests",!0)||{};delete b[a];Sp().set("requests",b,86400,!0)}
function Vp(a){var b=Sp().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(W())-d.requestTime)){var e=d.authState,f=Qp(ep(!1));Sb(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(W())),Wp(a,d.method,e,{}));delete b[c]}}Sp().set("requests",b,86400,!0)}}
;function Xp(a){this.Ub=this.h=!1;this.potentialEsfErrorCounter=this.i=0;this.handleError=function(){};
this.pb=function(){};
this.now=Date.now;this.Fb=!1;var b;this.Gd=null!=(b=a.Gd)?b:100;var c;this.Ad=null!=(c=a.Ad)?c:1;var d;this.xd=null!=(d=a.xd)?d:2592E6;var e;this.vd=null!=(e=a.vd)?e:12E4;var f;this.zd=null!=(f=a.zd)?f:5E3;var g;this.T=null!=(g=a.T)?g:void 0;this.Zb=!!a.Zb;var h;this.Xb=null!=(h=a.Xb)?h:.1;var k;this.jc=null!=(k=a.jc)?k:10;a.handleError&&(this.handleError=a.handleError);a.pb&&(this.pb=a.pb);a.Fb&&(this.Fb=a.Fb);a.Ub&&(this.Ub=a.Ub);this.U=a.U;this.Da=a.Da;this.da=a.da;this.aa=a.aa;this.sendFn=a.sendFn;
this.Oc=a.Oc;this.Lc=a.Lc;Yp(this)&&(!this.U||this.U("networkless_logging"))&&Zp(this)}
function Zp(a){Yp(a)&&!a.Fb&&(a.h=!0,a.Zb&&Math.random()<=a.Xb&&a.da.Ud(a.T),$p(a),a.aa.wa()&&a.Pb(),a.aa.listen(a.Oc,a.Pb.bind(a)),a.aa.listen(a.Lc,a.Zc.bind(a)))}
m=Xp.prototype;m.writeThenSend=function(a,b){var c=this;b=void 0===b?{}:b;if(Yp(this)&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.da.set(d,this.T).then(function(e){d.id=e;c.aa.wa()&&aq(c,d)}).catch(function(e){aq(c,d);
bq(c,e)})}else this.sendFn(a,b)};
m.sendThenWrite=function(a,b,c){var d=this;b=void 0===b?{}:b;if(Yp(this)&&this.h){var e={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.U&&this.U("nwl_skip_retry")&&(e.skipRetry=c);if(this.aa.wa()||this.U&&this.U("nwl_aggressive_send_then_write")&&!e.skipRetry){if(!e.skipRetry){var f=b.onError?b.onError:function(){};
b.onError=function(g,h){return A(function(k){if(1==k.h)return k.yield(d.da.set(e,d.T).catch(function(l){bq(d,l)}),2);
f(g,h);k.h=0})}}this.sendFn(a,b,e.skipRetry)}else this.da.set(e,this.T).catch(function(g){d.sendFn(a,b,e.skipRetry);
bq(d,g)})}else this.sendFn(a,b,this.U&&this.U("nwl_skip_retry")&&c)};
m.sendAndWrite=function(a,b){var c=this;b=void 0===b?{}:b;if(Yp(this)&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0},e=!1,f=b.onSuccess?b.onSuccess:function(){};
d.options.onSuccess=function(g,h){void 0!==d.id?c.da.nb(d.id,c.T):e=!0;c.aa.gb&&c.U&&c.U("vss_network_hint")&&c.aa.gb(!0);f(g,h)};
this.sendFn(d.url,d.options,void 0,!0);this.da.set(d,this.T).then(function(g){d.id=g;e&&c.da.nb(d.id,c.T)}).catch(function(g){bq(c,g)})}else this.sendFn(a,b,void 0,!0)};
m.Pb=function(){var a=this;if(!Yp(this))throw Error("IndexedDB is not supported: throttleSend");this.i||(this.i=this.Da.oa(function(){var b;return A(function(c){if(1==c.h)return c.yield(a.da.jd("NEW",a.T),2);if(3!=c.h)return b=c.i,b?c.yield(aq(a,b),3):(a.Zc(),c.return());a.i&&(a.i=0,a.Pb());c.h=0})},this.Gd))};
m.Zc=function(){this.Da.pa(this.i);this.i=0};
function aq(a,b){var c;return A(function(d){switch(d.h){case 1:if(!Yp(a))throw Error("IndexedDB is not supported: immediateSend");if(void 0===b.id){d.B(2);break}return d.yield(a.da.xe(b.id,a.T),3);case 3:(c=d.i)||a.pb(Error("The request cannot be found in the database."));case 2:if(cq(a,b,a.xd)){d.B(4);break}a.pb(Error("Networkless Logging: Stored logs request expired age limit"));if(void 0===b.id){d.B(5);break}return d.yield(a.da.nb(b.id,a.T),5);case 5:return d.return();case 4:b.skipRetry||(b=dq(a,
b));if(!b){d.B(0);break}if(!b.skipRetry||void 0===b.id){d.B(8);break}return d.yield(a.da.nb(b.id,a.T),8);case 8:a.sendFn(b.url,b.options,!!b.skipRetry),d.h=0}})}
function dq(a,b){if(!Yp(a))throw Error("IndexedDB is not supported: updateRequestHandlers");var c=b.options.onError?b.options.onError:function(){};
b.options.onError=function(e,f){var g,h,k,l;return A(function(n){switch(n.h){case 1:g=eq(f);(h=fq(f))&&a.U&&a.U("web_enable_error_204")&&a.handleError(Error("Request failed due to compression"),b.url,f);if(!(a.U&&a.U("nwl_consider_error_code")&&g||a.U&&!a.U("nwl_consider_error_code")&&a.potentialEsfErrorCounter<=a.jc)){n.B(2);break}if(!a.aa.mc){n.B(3);break}return n.yield(a.aa.mc(),3);case 3:if(a.aa.wa()){n.B(2);break}c(e,f);if(!a.U||!a.U("nwl_consider_error_code")||void 0===(null==(k=b)?void 0:k.id)){n.B(6);
break}return n.yield(a.da.Pc(b.id,a.T,!1),6);case 6:return n.return();case 2:if(a.U&&a.U("nwl_consider_error_code")&&!g&&a.potentialEsfErrorCounter>a.jc)return n.return();a.potentialEsfErrorCounter++;if(void 0===(null==(l=b)?void 0:l.id)){n.B(8);break}return b.sendCount<a.Ad?n.yield(a.da.Pc(b.id,a.T,!0,h?!1:void 0),12):n.yield(a.da.nb(b.id,a.T),8);case 12:a.Da.oa(function(){a.aa.wa()&&a.Pb()},a.zd);
case 8:c(e,f),n.h=0}})};
var d=b.options.onSuccess?b.options.onSuccess:function(){};
b.options.onSuccess=function(e,f){var g;return A(function(h){if(1==h.h)return void 0===(null==(g=b)?void 0:g.id)?h.B(2):h.yield(a.da.nb(b.id,a.T),2);a.aa.gb&&a.U&&a.U("vss_network_hint")&&a.aa.gb(!0);d(e,f);h.h=0})};
return b}
function cq(a,b,c){b=b.timestamp;return a.now()-b>=c?!1:!0}
function $p(a){if(!Yp(a))throw Error("IndexedDB is not supported: retryQueuedRequests");a.da.jd("QUEUED",a.T).then(function(b){b&&!cq(a,b,a.vd)?a.Da.oa(function(){return A(function(c){if(1==c.h)return void 0===b.id?c.B(2):c.yield(a.da.Pc(b.id,a.T),2);$p(a);c.h=0})}):a.aa.wa()&&a.Pb()})}
function bq(a,b){a.Md&&!a.aa.wa()?a.Md(b):a.handleError(b)}
function Yp(a){return!!a.T||a.Ub}
function eq(a){var b;return(a=null==a?void 0:null==(b=a.error)?void 0:b.code)&&400<=a&&599>=a?!1:!0}
function fq(a){var b;a=null==a?void 0:null==(b=a.error)?void 0:b.code;return!(400!==a&&415!==a)}
;var gq;
function hq(){if(gq)return gq();var a={};gq=Oo("LogsDatabaseV2",{xb:(a.LogsRequestsStore={Cb:2},a),nc:!1,upgrade:function(b,c,d){c(2)&&Tn(b,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0});c(3);c(5)&&(d=d.objectStore("LogsRequestsStore"),d.h.indexNames.contains("newRequest")&&d.h.deleteIndex("newRequest"),$n(d,"newRequestV2",["status","interface","timestamp"]));c(7)&&b.h.objectStoreNames.contains("sapisid")&&b.h.deleteObjectStore("sapisid");c(9)&&b.h.objectStoreNames.contains("SWHealthLog")&&b.h.deleteObjectStore("SWHealthLog")},
version:9});return gq()}
;function iq(a){return no(hq(),a)}
function jq(a,b){var c,d,e,f;return A(function(g){if(1==g.h)return c={startTime:W(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_WRITE"},ticks:{}},g.yield(iq(b),2);if(3!=g.h)return d=g.i,e=Object.assign({},a,{options:JSON.parse(JSON.stringify(a.options)),interface:S("INNERTUBE_CONTEXT_CLIENT_NAME",0)}),g.yield(Vn(d,"LogsRequestsStore",e),3);f=g.i;c.ticks.tc=W();kq(c);return g.return(f)})}
function lq(a,b){var c,d,e,f,g,h,k,l;return A(function(n){if(1==n.h)return c={startTime:W(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_READ"},ticks:{}},n.yield(iq(b),2);if(3!=n.h)return d=n.i,e=S("INNERTUBE_CONTEXT_CLIENT_NAME",0),f=[a,e,0],g=[a,e,W()],h=IDBKeyRange.bound(f,g),k="prev",T("use_fifo_for_networkless")&&(k="next"),l=void 0,n.yield(Sn(d,["LogsRequestsStore"],{mode:"readwrite",ia:!0},function(p){return go(p.objectStore("LogsRequestsStore").index("newRequestV2"),{query:h,direction:k},
function(r){r.getValue()&&(l=r.getValue(),"NEW"===a&&(l.status="QUEUED",r.update(l)))})}),3);
c.ticks.tc=W();kq(c);return n.return(l)})}
function mq(a,b){var c;return A(function(d){if(1==d.h)return d.yield(iq(b),2);c=d.i;return d.return(Sn(c,["LogsRequestsStore"],{mode:"readwrite",ia:!0},function(e){var f=e.objectStore("LogsRequestsStore");return f.get(a).then(function(g){if(g)return g.status="QUEUED",On(f.h.put(g,void 0)).then(function(){return g})})}))})}
function nq(a,b,c,d){c=void 0===c?!0:c;var e;return A(function(f){if(1==f.h)return f.yield(iq(b),2);e=f.i;return f.return(Sn(e,["LogsRequestsStore"],{mode:"readwrite",ia:!0},function(g){var h=g.objectStore("LogsRequestsStore");return h.get(a).then(function(k){return k?(k.status="NEW",c&&(k.sendCount+=1),void 0!==d&&(k.options.compress=d),On(h.h.put(k,void 0)).then(function(){return k})):In.resolve(void 0)})}))})}
function oq(a,b){var c;return A(function(d){if(1==d.h)return d.yield(iq(b),2);c=d.i;return d.return(c.delete("LogsRequestsStore",a))})}
function pq(a){var b,c;return A(function(d){if(1==d.h)return d.yield(iq(a),2);b=d.i;c=W()-2592E6;return d.yield(Sn(b,["LogsRequestsStore"],{mode:"readwrite",ia:!0},function(e){return bo(e.objectStore("LogsRequestsStore"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return co(f)})})}),0)})}
function qq(){A(function(a){return a.yield(Ko(),0)})}
function kq(a){T("nwl_csi_killswitch")||up("networkless_performance",a,{sampleRate:1})}
;var rq={accountStateChangeSignedIn:23,accountStateChangeSignedOut:24,delayedEventMetricCaptured:11,latencyActionBaselined:6,latencyActionInfo:7,latencyActionTicked:5,offlineTransferStatusChanged:2,offlineImageDownload:335,playbackStartStateChanged:9,systemHealthCaptured:3,mangoOnboardingCompleted:10,mangoPushNotificationReceived:230,mangoUnforkDbMigrationError:121,mangoUnforkDbMigrationSummary:122,mangoUnforkDbMigrationPreunforkDbVersionNumber:133,mangoUnforkDbMigrationPhoneMetadata:134,mangoUnforkDbMigrationPhoneStorage:135,
mangoUnforkDbMigrationStep:142,mangoAsyncApiMigrationEvent:223,mangoDownloadVideoResult:224,mangoHomepageVideoCount:279,mangoHomeV3State:295,mangoImageClientCacheHitEvent:273,sdCardStatusChanged:98,framesDropped:12,thumbnailHovered:13,deviceRetentionInfoCaptured:14,thumbnailLoaded:15,backToAppEvent:318,streamingStatsCaptured:17,offlineVideoShared:19,appCrashed:20,youThere:21,offlineStateSnapshot:22,mdxSessionStarted:25,mdxSessionConnected:26,mdxSessionDisconnected:27,bedrockResourceConsumptionSnapshot:28,
nextGenWatchWatchSwiped:29,kidsAccountsSnapshot:30,zeroStepChannelCreated:31,tvhtml5SearchCompleted:32,offlineSharePairing:34,offlineShareUnlock:35,mdxRouteDistributionSnapshot:36,bedrockRepetitiveActionTimed:37,unpluggedDegradationInfo:229,uploadMp4HeaderMoved:38,uploadVideoTranscoded:39,uploadProcessorStarted:46,uploadProcessorEnded:47,uploadProcessorReady:94,uploadProcessorRequirementPending:95,uploadProcessorInterrupted:96,uploadFrontendEvent:241,assetPackDownloadStarted:41,assetPackDownloaded:42,
assetPackApplied:43,assetPackDeleted:44,appInstallAttributionEvent:459,playbackSessionStopped:45,adBlockerMessagingShown:48,distributionChannelCaptured:49,dataPlanCpidRequested:51,detailedNetworkTypeCaptured:52,sendStateUpdated:53,receiveStateUpdated:54,sendDebugStateUpdated:55,receiveDebugStateUpdated:56,kidsErrored:57,mdxMsnSessionStatsFinished:58,appSettingsCaptured:59,mdxWebSocketServerHttpError:60,mdxWebSocketServer:61,startupCrashesDetected:62,coldStartInfo:435,offlinePlaybackStarted:63,liveChatMessageSent:225,
liveChatUserPresent:434,liveChatBeingModerated:457,liveCreationCameraUpdated:64,liveCreationEncodingCaptured:65,liveCreationError:66,liveCreationHealthUpdated:67,liveCreationVideoEffectsCaptured:68,liveCreationStageOccured:75,liveCreationBroadcastScheduled:123,liveCreationArchiveReplacement:149,liveCreationCostreamingConnection:421,liveCreationStreamWebrtcStats:288,mdxSessionRecoveryStarted:69,mdxSessionRecoveryCompleted:70,mdxSessionRecoveryStopped:71,visualElementShown:72,visualElementHidden:73,
visualElementGestured:78,visualElementStateChanged:208,screenCreated:156,playbackAssociated:202,visualElementAttached:215,playbackContextEvent:214,cloudCastingPlaybackStarted:74,webPlayerApiCalled:76,tvhtml5AccountDialogOpened:79,foregroundHeartbeat:80,foregroundHeartbeatScreenAssociated:111,kidsOfflineSnapshot:81,mdxEncryptionSessionStatsFinished:82,playerRequestCompleted:83,liteSchedulerStatistics:84,mdxSignIn:85,spacecastMetadataLookupRequested:86,spacecastBatchLookupRequested:87,spacecastSummaryRequested:88,
spacecastPlayback:89,spacecastDiscovery:90,tvhtml5LaunchUrlComponentChanged:91,mdxBackgroundPlaybackRequestCompleted:92,mdxBrokenAdditionalDataDeviceDetected:93,tvhtml5LocalStorage:97,tvhtml5DeviceStorageStatus:147,autoCaptionsAvailable:99,playbackScrubbingEvent:339,flexyState:100,interfaceOrientationCaptured:101,mainAppBrowseFragmentCache:102,offlineCacheVerificationFailure:103,offlinePlaybackExceptionDigest:217,vrCopresenceStats:104,vrCopresenceSyncStats:130,vrCopresenceCommsStats:137,vrCopresencePartyStats:153,
vrCopresenceEmojiStats:213,vrCopresenceEvent:141,vrCopresenceFlowTransitEvent:160,vrCowatchPartyEvent:492,vrPlaybackEvent:345,kidsAgeGateTracking:105,offlineDelayAllowedTracking:106,mainAppAutoOfflineState:107,videoAsThumbnailDownload:108,videoAsThumbnailPlayback:109,liteShowMore:110,renderingError:118,kidsProfilePinGateTracking:119,abrTrajectory:124,scrollEvent:125,streamzIncremented:126,kidsProfileSwitcherTracking:127,kidsProfileCreationTracking:129,buyFlowStarted:136,mbsConnectionInitiated:138,
mbsPlaybackInitiated:139,mbsLoadChildren:140,liteProfileFetcher:144,mdxRemoteTransaction:146,reelPlaybackError:148,reachabilityDetectionEvent:150,mobilePlaybackEvent:151,courtsidePlayerStateChanged:152,musicPersistentCacheChecked:154,musicPersistentCacheCleared:155,playbackInterrupted:157,playbackInterruptionResolved:158,fixFopFlow:159,anrDetection:161,backstagePostCreationFlowEnded:162,clientError:163,gamingAccountLinkStatusChanged:164,liteHousewarming:165,buyFlowEvent:167,kidsParentalGateTracking:168,
kidsSignedOutSettingsStatus:437,kidsSignedOutPauseHistoryFixStatus:438,tvhtml5WatchdogViolation:444,ypcUpgradeFlow:169,yongleStudy:170,ypcUpdateFlowStarted:171,ypcUpdateFlowCancelled:172,ypcUpdateFlowSucceeded:173,ypcUpdateFlowFailed:174,liteGrowthkitPromo:175,paymentFlowStarted:341,transactionFlowShowPaymentDialog:405,transactionFlowStarted:176,transactionFlowSecondaryDeviceStarted:222,transactionFlowSecondaryDeviceSignedOutStarted:383,transactionFlowCancelled:177,transactionFlowPaymentCallBackReceived:387,
transactionFlowPaymentSubmitted:460,transactionFlowPaymentSucceeded:329,transactionFlowSucceeded:178,transactionFlowFailed:179,transactionFlowPlayBillingConnectionStartEvent:428,transactionFlowSecondaryDeviceSuccess:458,transactionFlowErrorEvent:411,liteVideoQualityChanged:180,watchBreakEnablementSettingEvent:181,watchBreakFrequencySettingEvent:182,videoEffectsCameraPerformanceMetrics:183,adNotify:184,startupTelemetry:185,playbackOfflineFallbackUsed:186,outOfMemory:187,ypcPauseFlowStarted:188,ypcPauseFlowCancelled:189,
ypcPauseFlowSucceeded:190,ypcPauseFlowFailed:191,uploadFileSelected:192,ypcResumeFlowStarted:193,ypcResumeFlowCancelled:194,ypcResumeFlowSucceeded:195,ypcResumeFlowFailed:196,adsClientStateChange:197,ypcCancelFlowStarted:198,ypcCancelFlowCancelled:199,ypcCancelFlowSucceeded:200,ypcCancelFlowFailed:201,ypcCancelFlowGoToPaymentProcessor:402,ypcDeactivateFlowStarted:320,ypcRedeemFlowStarted:203,ypcRedeemFlowCancelled:204,ypcRedeemFlowSucceeded:205,ypcRedeemFlowFailed:206,ypcFamilyCreateFlowStarted:258,
ypcFamilyCreateFlowCancelled:259,ypcFamilyCreateFlowSucceeded:260,ypcFamilyCreateFlowFailed:261,ypcFamilyManageFlowStarted:262,ypcFamilyManageFlowCancelled:263,ypcFamilyManageFlowSucceeded:264,ypcFamilyManageFlowFailed:265,restoreContextEvent:207,embedsAdEvent:327,autoplayTriggered:209,clientDataErrorEvent:210,experimentalVssValidation:211,tvhtml5TriggeredEvent:212,tvhtml5FrameworksFieldTrialResult:216,tvhtml5FrameworksFieldTrialStart:220,musicOfflinePreferences:218,watchTimeSegment:219,appWidthLayoutError:221,
accountRegistryChange:226,userMentionAutoCompleteBoxEvent:227,downloadRecommendationEnablementSettingEvent:228,musicPlaybackContentModeChangeEvent:231,offlineDbOpenCompleted:232,kidsFlowEvent:233,kidsFlowCorpusSelectedEvent:234,videoEffectsEvent:235,unpluggedOpsEogAnalyticsEvent:236,playbackAudioRouteEvent:237,interactionLoggingDebugModeError:238,offlineYtbRefreshed:239,kidsFlowError:240,musicAutoplayOnLaunchAttempted:242,deviceContextActivityEvent:243,deviceContextEvent:244,templateResolutionException:245,
musicSideloadedPlaylistServiceCalled:246,embedsStorageAccessNotChecked:247,embedsHasStorageAccessResult:248,embedsItpPlayedOnReload:249,embedsRequestStorageAccessResult:250,embedsShouldRequestStorageAccessResult:251,embedsRequestStorageAccessState:256,embedsRequestStorageAccessFailedState:257,embedsItpWatchLaterResult:266,searchSuggestDecodingPayloadFailure:252,siriShortcutActivated:253,tvhtml5KeyboardPerformance:254,latencyActionSpan:255,elementsLog:267,ytbFileOpened:268,tfliteModelError:269,apiTest:270,
yongleUsbSetup:271,touStrikeInterstitialEvent:272,liteStreamToSave:274,appBundleClientEvent:275,ytbFileCreationFailed:276,adNotifyFailure:278,ytbTransferFailed:280,blockingRequestFailed:281,liteAccountSelector:282,liteAccountUiCallbacks:283,dummyPayload:284,browseResponseValidationEvent:285,entitiesError:286,musicIosBackgroundFetch:287,mdxNotificationEvent:289,layersValidationError:290,musicPwaInstalled:291,liteAccountCleanup:292,html5PlayerHealthEvent:293,watchRestoreAttempt:294,liteAccountSignIn:296,
notaireEvent:298,kidsVoiceSearchEvent:299,adNotifyFilled:300,delayedEventDropped:301,analyticsSearchEvent:302,systemDarkThemeOptOutEvent:303,flowEvent:304,networkConnectivityBaselineEvent:305,ytbFileImported:306,downloadStreamUrlExpired:307,directSignInEvent:308,lyricImpressionEvent:309,accessibilityStateEvent:310,tokenRefreshEvent:311,genericAttestationExecution:312,tvhtml5VideoSeek:313,unpluggedAutoPause:314,scrubbingEvent:315,bedtimeReminderEvent:317,tvhtml5UnexpectedRestart:319,tvhtml5StabilityTraceEvent:478,
tvhtml5OperationHealth:467,tvhtml5WatchKeyEvent:321,voiceLanguageChanged:322,tvhtml5LiveChatStatus:323,parentToolsCorpusSelectedEvent:324,offerAdsEnrollmentInitiated:325,networkQualityIntervalEvent:326,deviceStartupMetrics:328,heartbeatActionPlayerTransitioned:330,tvhtml5Lifecycle:331,heartbeatActionPlayerHalted:332,adaptiveInlineMutedSettingEvent:333,mainAppLibraryLoadingState:334,thirdPartyLogMonitoringEvent:336,appShellAssetLoadReport:337,tvhtml5AndroidAttestation:338,tvhtml5StartupSoundEvent:340,
iosBackgroundRefreshTask:342,iosBackgroundProcessingTask:343,sliEventBatch:344,postImpressionEvent:346,musicSideloadedPlaylistExport:347,idbUnexpectedlyClosed:348,voiceSearchEvent:349,mdxSessionCastEvent:350,idbQuotaExceeded:351,idbTransactionEnded:352,idbTransactionAborted:353,tvhtml5KeyboardLogging:354,idbIsSupportedCompleted:355,creatorStudioMobileEvent:356,idbDataCorrupted:357,parentToolsAppChosenEvent:358,webViewBottomSheetResized:359,activeStateControllerScrollPerformanceSummary:360,navigatorValidation:361,
mdxSessionHeartbeat:362,clientHintsPolyfillDiagnostics:363,clientHintsPolyfillEvent:364,proofOfOriginTokenError:365,kidsAddedAccountSummary:366,musicWearableDevice:367,ypcRefundFlowEvent:368,tvhtml5PlaybackMeasurementEvent:369,tvhtml5WatermarkMeasurementEvent:370,clientExpGcfPropagationEvent:371,mainAppReferrerIntent:372,leaderLockEnded:373,leaderLockAcquired:374,googleHatsEvent:375,persistentLensLaunchEvent:376,parentToolsChildWelcomeChosenEvent:378,browseThumbnailPreloadEvent:379,finalPayload:380,
mdxDialAdditionalDataUpdateEvent:381,webOrchestrationTaskLifecycleRecord:382,startupSignalEvent:384,accountError:385,gmsDeviceCheckEvent:386,accountSelectorEvent:388,accountUiCallbacks:389,mdxDialAdditionalDataProbeEvent:390,downloadsSearchIcingApiStats:391,downloadsSearchIndexUpdatedEvent:397,downloadsSearchIndexSnapshot:398,dataPushClientEvent:392,kidsCategorySelectedEvent:393,mdxDeviceManagementSnapshotEvent:394,prefetchRequested:395,prefetchableCommandExecuted:396,gelDebuggingEvent:399,webLinkTtsPlayEnd:400,
clipViewInvalid:401,persistentStorageStateChecked:403,cacheWipeoutEvent:404,playerEvent:410,sfvEffectPipelineStartedEvent:412,sfvEffectPipelinePausedEvent:429,sfvEffectPipelineEndedEvent:413,sfvEffectChosenEvent:414,sfvEffectLoadedEvent:415,sfvEffectUserInteractionEvent:465,sfvEffectFirstFrameProcessedLatencyEvent:416,sfvEffectAggregatedFramesProcessedLatencyEvent:417,sfvEffectAggregatedFramesDroppedEvent:418,sfvEffectPipelineErrorEvent:430,sfvEffectGraphFrozenEvent:419,sfvEffectGlThreadBlockedEvent:420,
mdeVideoChangedEvent:442,mdePlayerPerformanceMetrics:472,genericClientExperimentEvent:423,homePreloadTaskScheduled:424,homePreloadTaskExecuted:425,homePreloadCacheHit:426,polymerPropertyChangedInObserver:427,applicationStarted:431,networkCronetRttBatch:432,networkCronetRttSummary:433,repeatChapterLoopEvent:436,seekCancellationEvent:462,lockModeTimeoutEvent:483,offlineTransferStarted:4,musicOfflineMixtapePreferencesChanged:16,mangoDailyNewVideosNotificationAttempt:40,mangoDailyNewVideosNotificationError:77,
dtwsPlaybackStarted:112,dtwsTileFetchStarted:113,dtwsTileFetchCompleted:114,dtwsTileFetchStatusChanged:145,dtwsKeyframeDecoderBufferSent:115,dtwsTileUnderflowedOnNonkeyframe:116,dtwsBackfillFetchStatusChanged:143,dtwsBackfillUnderflowed:117,dtwsAdaptiveLevelChanged:128,blockingVisitorIdTimeout:277,liteSocial:18,mobileJsInvocation:297,biscottiBasedDetection:439,coWatchStateChange:440,embedsVideoDataDidChange:441,shortsFirst:443,cruiseControlEvent:445,qoeClientLoggingContext:446,atvRecommendationJobExecuted:447,
tvhtml5UserFeedback:448,producerProjectCreated:449,producerProjectOpened:450,producerProjectDeleted:451,producerProjectElementAdded:453,producerProjectElementRemoved:454,tvhtml5ShowClockEvent:455,deviceCapabilityCheckMetrics:456,youtubeClearcutEvent:461,offlineBrowseFallbackEvent:463,getCtvTokenEvent:464,startupDroppedFramesSummary:466,screenshotEvent:468,miniAppPlayEvent:469,elementsDebugCounters:470,fontLoadEvent:471,webKillswitchReceived:473,webKillswitchExecuted:474,cameraOpenEvent:475,manualSmoothnessMeasurement:476,
tvhtml5AppQualityEvent:477,polymerPropertyAccessEvent:479,miniAppSdkUsage:480,cobaltTelemetryEvent:481,crossDevicePlayback:482,channelCreatedWithObakeImage:484,channelEditedWithObakeImage:485,offlineDeleteEvent:486,crossDeviceNotificationTransfer:487,androidIntentEvent:488,unpluggedAmbientInterludesCounterfactualEvent:489,keyPlaysPlayback:490,shortsCreationFallbackEvent:493,vssData:491,castMatch:494,miniAppPerformanceMetrics:495,userFeedbackEvent:496};var sq={},tq=Oo("ServiceWorkerLogsDatabase",{xb:(sq.SWHealthLog={Cb:1},sq),nc:!0,upgrade:function(a,b){b(1)&&$n(Tn(a,"SWHealthLog",{keyPath:"id",autoIncrement:!0}),"swHealthNewRequest",["interface","timestamp"])},
version:1});function uq(a){return no(tq(),a)}
function vq(a){var b,c;A(function(d){if(1==d.h)return d.yield(uq(a),2);b=d.i;c=W()-2592E6;return d.yield(Sn(b,["SWHealthLog"],{mode:"readwrite",ia:!0},function(e){return bo(e.objectStore("SWHealthLog"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return co(f)})})}),0)})}
function wq(a){var b;return A(function(c){if(1==c.h)return c.yield(uq(a),2);b=c.i;return c.yield(b.clear("SWHealthLog"),0)})}
;var xq={},yq=0;function zq(a){var b=new Image,c=""+yq++;xq[c]=b;b.onload=b.onerror=function(){delete xq[c]};
b.src=a}
;function Aq(){this.h=new Map;this.i=!1}
function Bq(){if(!Aq.h){var a=E("yt.networkRequestMonitor.instance")||new Aq;D("yt.networkRequestMonitor.instance",a);Aq.h=a}return Aq.h}
Aq.prototype.requestComplete=function(a,b){b&&(this.i=!0);a=this.removeParams(a);this.h.get(a)||this.h.set(a,b)};
Aq.prototype.isEndpointCFR=function(a){a=this.removeParams(a);return(a=this.h.get(a))?!1:!1===a&&this.i?!0:null};
Aq.prototype.removeParams=function(a){return a.split("?")[0]};
Aq.prototype.removeParams=Aq.prototype.removeParams;Aq.prototype.isEndpointCFR=Aq.prototype.isEndpointCFR;Aq.prototype.requestComplete=Aq.prototype.requestComplete;Aq.getInstance=Bq;var Cq;function Dq(){Cq||(Cq=new cn("yt.offline"));return Cq}
function Eq(a){if(T("offline_error_handling")){var b=Dq().get("errors",!0)||{};b[a.message]={name:a.name,stack:a.stack};a.level&&(b[a.message].level=a.level);Dq().set("errors",b,2592E3,!0)}}
;function Fq(){Id.call(this);var a=this;this.j=!1;this.i=vi();this.i.listen("networkstatus-online",function(){if(a.j&&T("offline_error_handling")){var b=Dq().get("errors",!0);if(b){for(var c in b)if(b[c]){var d=new V(c,"sent via offline_errors");d.name=b[c].name;d.stack=b[c].stack;d.level=b[c].level;$k(d)}Dq().set("errors",{},2592E3,!0)}}})}
w(Fq,Id);function Gq(){if(!Fq.h){var a=E("yt.networkStatusManager.instance")||new Fq;D("yt.networkStatusManager.instance",a);Fq.h=a}return Fq.h}
m=Fq.prototype;m.wa=function(){return this.i.wa()};
m.gb=function(a){this.i.i=a};
m.ke=function(){var a=window.navigator.onLine;return void 0===a?!0:a};
m.Zd=function(){this.j=!0};
m.listen=function(a,b){return this.i.listen(a,b)};
m.mc=function(a){a=ti(this.i,a);a.then(function(b){T("use_cfr_monitor")&&Bq().requestComplete("generate_204",b)});
return a};
Fq.prototype.sendNetworkCheckRequest=Fq.prototype.mc;Fq.prototype.listen=Fq.prototype.listen;Fq.prototype.enableErrorFlushing=Fq.prototype.Zd;Fq.prototype.getWindowStatus=Fq.prototype.ke;Fq.prototype.networkStatusHint=Fq.prototype.gb;Fq.prototype.isNetworkAvailable=Fq.prototype.wa;Fq.getInstance=Gq;function Hq(a){a=void 0===a?{}:a;Id.call(this);var b=this;this.i=this.m=0;this.j=Gq();var c=E("yt.networkStatusManager.instance.listen").bind(this.j);c&&(a.rateLimit?(this.rateLimit=a.rateLimit,c("networkstatus-online",function(){Iq(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){Iq(b,"publicytnetworkstatus-offline")})):(c("networkstatus-online",function(){Jd(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){Jd(b,"publicytnetworkstatus-offline")})))}
w(Hq,Id);Hq.prototype.wa=function(){var a=E("yt.networkStatusManager.instance.isNetworkAvailable");return a?a.bind(this.j)():!0};
Hq.prototype.gb=function(a){var b=E("yt.networkStatusManager.instance.networkStatusHint").bind(this.j);b&&b(a)};
Hq.prototype.mc=function(a){var b=this,c;return A(function(d){c=E("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(b.j);return T("skip_network_check_if_cfr")&&Bq().isEndpointCFR("generate_204")?d.return(new Promise(function(e){var f;b.gb((null==(f=window.navigator)?void 0:f.onLine)||!0);e(b.wa())})):c?d.return(c(a)):d.return(!0)})};
function Iq(a,b){a.rateLimit?a.i?(wi.pa(a.m),a.m=wi.oa(function(){a.l!==b&&(Jd(a,b),a.l=b,a.i=W())},a.rateLimit-(W()-a.i))):(Jd(a,b),a.l=b,a.i=W()):Jd(a,b)}
;var Jq;function Kq(){var a=Xp.call;Jq||(Jq=new Hq({gg:!0,Zf:!0}));a.call(Xp,this,{da:{Ud:pq,nb:oq,jd:lq,xe:mq,Pc:nq,set:jq},aa:Jq,handleError:function(b,c,d){var e,f=null==d?void 0:null==(e=d.error)?void 0:e.code;if(400===f||415===f){var g;al(new V(b.message,c,null==d?void 0:null==(g=d.error)?void 0:g.code),void 0,void 0,void 0,!0)}else $k(b)},
pb:al,sendFn:Lq,now:W,Md:Eq,Da:bn(),Oc:"publicytnetworkstatus-online",Lc:"publicytnetworkstatus-offline",Zb:!0,Xb:.1,jc:U("potential_esf_error_limit",10),U:T,Fb:!(sm()&&Mq())});this.j=new hi;T("networkless_immediately_drop_all_requests")&&qq();Lo("LogsDatabaseV2")}
w(Kq,Xp);function Nq(){var a=E("yt.networklessRequestController.instance");a||(a=new Kq,D("yt.networklessRequestController.instance",a),T("networkless_logging")&&Ao().then(function(b){a.T=b;Zp(a);a.j.resolve();a.Zb&&Math.random()<=a.Xb&&a.T&&vq(a.T);T("networkless_immediately_drop_sw_health_store")&&Oq(a)}));
return a}
Kq.prototype.writeThenSend=function(a,b){b||(b={});b=Pq(a,b);sm()||(this.h=!1);Xp.prototype.writeThenSend.call(this,a,b)};
Kq.prototype.sendThenWrite=function(a,b,c){b||(b={});b=Pq(a,b);sm()||(this.h=!1);Xp.prototype.sendThenWrite.call(this,a,b,c)};
Kq.prototype.sendAndWrite=function(a,b){b||(b={});b=Pq(a,b);sm()||(this.h=!1);Xp.prototype.sendAndWrite.call(this,a,b)};
Kq.prototype.awaitInitialization=function(){return this.j.promise};
function Oq(a){var b;A(function(c){if(!a.T)throw b=En("clearSWHealthLogsDb"),b;return c.return(wq(a.T).catch(function(d){a.handleError(d)}))})}
function Lq(a,b,c,d){d=void 0===d?!1:d;b=T("web_fp_via_jspb")?Object.assign({},b):b;T("use_cfr_monitor")&&Qq(a,b);if(T("use_request_time_ms_header"))b.headers&&kl(a)&&(b.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(W())));else{var e;if(null==(e=b.postParams)?0:e.requestTimeMs)b.postParams.requestTimeMs=Math.round(W())}if(c&&0===Object.keys(b).length){var f=void 0===f?"":f;var g=void 0===g?!1:g;var h=void 0===h?!1:h;if(a)if(f)xl(a,void 0,"POST",f,void 0);else if(S("USE_NET_AJAX_FOR_PING_TRANSPORT",
!1)||h)xl(a,void 0,"GET","",void 0,void 0,g,h);else{b:{try{var k=new cb({url:a});if(k.j&&k.i||k.l){var l=zc(Ac(5,a)),n;if(!(n=!l||!l.endsWith("/aclk"))){var p=a.search(Ic),r=Hc(a,0,"ri",p);if(0>r)var t=null;else{var y=a.indexOf("&",r);if(0>y||y>p)y=p;t=decodeURIComponent(a.slice(r+3,-1!==y?y:0).replace(/\+/g," "))}n="1"!==t}var z=!n;break b}}catch(J){}z=!1}if(z){b:{try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")){var x=!0;break b}}catch(J){}x=!1}c=x?!0:!1}else c=
!1;c||zq(a)}}else b.compress?b.postBody?("string"!==typeof b.postBody&&(b.postBody=JSON.stringify(b.postBody)),Mp(a,b.postBody,b,Bl,d)):Mp(a,JSON.stringify(b.postParams),b,Al,d):Bl(a,b)}
function Pq(a,b){T("use_event_time_ms_header")&&kl(a)&&(b.headers||(b.headers={}),b.headers["X-Goog-Event-Time"]=JSON.stringify(Math.round(W())));return b}
function Qq(a,b){var c=b.onError?b.onError:function(){};
b.onError=function(e,f){Bq().requestComplete(a,!1);c(e,f)};
var d=b.onSuccess?b.onSuccess:function(){};
b.onSuccess=function(e,f){Bq().requestComplete(a,!0);d(e,f)}}
function Mq(){return"www.youtube-nocookie.com"!==Bc(document.location.toString())}
;var Rq=!1,Sq=C.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:Rq};D("ytNetworklessLoggingInitializationOptions",Sq);function Tq(){var a;A(function(b){if(1==b.h)return b.yield(Ao(),2);a=b.i;if(!a||!sm()&&!T("nwl_init_require_datasync_id_killswitch")||!Mq())return b.B(0);Rq=!0;Sq.isNwlInitialized=Rq;return b.yield(Nq().awaitInitialization(),0)})}
;function Uq(a){var b=this;this.config_=null;a?this.config_=a:bp()&&(this.config_=cp());wm(function(){Vp(b)},5E3)}
Uq.prototype.isReady=function(){!this.config_&&bp()&&(this.config_=cp());return!!this.config_};
function Wp(a,b,c,d){function e(y){y=void 0===y?!1:y;var z;if(d.retry&&"www.youtube-nocookie.com"!=h&&(y||T("skip_ls_gel_retry")||"application/json"!==g.headers["Content-Type"]||(z=Tp(b,c,l,k)),z)){var x=g.onSuccess,J=g.onFetchSuccess;g.onSuccess=function(N,da){Up(z);x(N,da)};
c.onFetchSuccess=function(N,da){Up(z);J(N,da)}}try{if(y&&d.retry&&!d.networklessOptions.bypassNetworkless)g.method="POST",d.networklessOptions.writeThenSend?Nq().writeThenSend(t,g):Nq().sendAndWrite(t,g);
else if(d.compress){var G=!d.networklessOptions.writeThenSend;if(g.postBody){var R=g.postBody;"string"!==typeof R&&(R=JSON.stringify(g.postBody));Mp(t,R,g,Bl,G)}else Mp(t,JSON.stringify(g.postParams),g,Al,G)}else T("web_all_payloads_via_jspb")?Bl(t,g):Al(t,g)}catch(N){if("InvalidAccessError"===N.name)z&&(Up(z),z=0),al(Error("An extension is blocking network request."));else throw N;}z&&wm(function(){Vp(a)},5E3)}
!S("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&al(new V("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var f=new V("innertube xhrclient not ready",b,c,d);$k(f);throw f;}var g={headers:d.headers||{},method:"POST",postParams:c,postBody:d.postBody,postBodyFormat:d.postBodyFormat||"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(y,z){if(d.onSuccess)d.onSuccess(z)},
onFetchSuccess:function(y){if(d.onSuccess)d.onSuccess(y)},
onError:function(y,z){if(d.onError)d.onError(z)},
onFetchError:function(y){if(d.onError)d.onError(y)},
timeout:d.timeout,withCredentials:!0,compress:d.compress};g.headers["Content-Type"]||(g.headers["Content-Type"]="application/json");var h="";(f=a.config_.re)&&(h=f);var k=a.config_.te||!1,l=ep(k,h,d);Object.assign(g.headers,l);(f=g.headers.Authorization)&&!h&&k&&(g.headers["x-origin"]=window.location.origin);var n="/youtubei/"+a.config_.innertubeApiVersion+"/"+b,p={alt:"json"},r=a.config_.se&&f;r=r&&f.startsWith("Bearer");r||(p.key=a.config_.innertubeApiKey);var t=jl(""+h+n,p||{},!0);(E("ytNetworklessLoggingInitializationOptions")?
Sq.isNwlInitialized:Rq)?yo().then(function(y){e(y)}):e(!1)}
;var Vq=0,Wq=ad?"webkit":$c?"moz":Yc?"ms":Xc?"o":"";D("ytDomDomGetNextId",E("ytDomDomGetNextId")||function(){return++Vq});var Xq={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function Yq(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.rotation=this.clientY=this.clientX=0;this.scale=1;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in Xq||(this[b]=a[b]);this.scale=a.scale;this.rotation=a.rotation;var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;
if(d)try{d=d.nodeName?d:null}catch(e){d=null}else"mouseover"==this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.h=a.pageX;this.i=a.pageY}}catch(e){}}
function Zq(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.h=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.i=a.clientY+b}}
Yq.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
Yq.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
Yq.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var Ob=C.ytEventsEventsListeners||{};D("ytEventsEventsListeners",Ob);var $q=C.ytEventsEventsCounter||{count:0};D("ytEventsEventsCounter",$q);
function ar(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return Nb(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=Ra(e[4])&&Ra(d)&&Sb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
function br(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=ar(a,b,c,d);if(e)return e;e=++$q.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new Yq(h);if(!Td(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new Yq(h);
h.currentTarget=a;return c.call(a,h)};
g=Zk(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),cr()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);Ob[e]=[a,b,c,g,d];return e}
function dr(a){a&&("string"==typeof a&&(a=[a]),Fb(a,function(b){if(b in Ob){var c=Ob[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?cr()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete Ob[b]}}))}
var cr=Od(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});function er(a){this.D=a;this.h=null;this.l=0;this.A=null;this.m=0;this.i=[];for(a=0;4>a;a++)this.i.push(0);this.j=0;this.V=br(window,"mousemove",Xa(this.Y,this));a=Xa(this.R,this);"function"===typeof a&&(a=Zk(a));this.ba=window.setInterval(a,25)}
$a(er,H);er.prototype.Y=function(a){void 0===a.h&&Zq(a);var b=a.h;void 0===a.i&&Zq(a);this.h=new Pd(b,a.i)};
er.prototype.R=function(){if(this.h){var a=W();if(0!=this.l){var b=this.A,c=this.h,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.l);this.i[this.j]=.5<Math.abs((d-this.m)/this.m)?1:0;for(c=b=0;4>c;c++)b+=this.i[c]||0;3<=b&&this.D();this.m=d}this.l=a;this.A=this.h;this.j=(this.j+1)%4}};
er.prototype.S=function(){window.clearInterval(this.ba);dr(this.V)};var fr={};
function gr(a){var b=void 0===a?{}:a;a=void 0===b.He?!1:b.He;b=void 0===b.ae?!0:b.ae;if(null==E("_lact",window)){var c=parseInt(S("LACT"),10);c=isFinite(c)?Date.now()-Math.max(c,0):-1;D("_lact",c,window);D("_fact",c,window);-1==c&&hr();br(document,"keydown",hr);br(document,"keyup",hr);br(document,"mousedown",hr);br(document,"mouseup",hr);a?br(window,"touchmove",function(){ir("touchmove",200)},{passive:!0}):(br(window,"resize",function(){ir("resize",200)}),b&&br(window,"scroll",function(){ir("scroll",200)}));
new er(function(){ir("mouse",100)});
br(document,"touchstart",hr,{passive:!0});br(document,"touchend",hr,{passive:!0})}}
function ir(a,b){fr[a]||(fr[a]=!0,wi.oa(function(){hr();fr[a]=!1},b))}
function hr(){null==E("_lact",window)&&gr();var a=Date.now();D("_lact",a,window);-1==E("_fact",window)&&D("_fact",a,window);(a=E("ytglobal.ytUtilActivityCallback_"))&&a()}
function jr(){var a=E("_lact",window);return null==a?-1:Math.max(Date.now()-a,0)}
;var kr=C.ytPubsubPubsubInstance||new L,lr=C.ytPubsubPubsubSubscribedKeys||{},mr=C.ytPubsubPubsubTopicToKeys||{},nr=C.ytPubsubPubsubIsSynchronous||{};function or(a,b){var c=pr();if(c&&b){var d=c.subscribe(a,function(){function e(){lr[d]&&b.apply&&"function"==typeof b.apply&&b.apply(window,f)}
var f=arguments;try{nr[a]?e():ql(e,0)}catch(g){$k(g)}},void 0);
lr[d]=!0;mr[a]||(mr[a]=[]);mr[a].push(d);return d}return 0}
function qr(a){var b=pr();b&&("number"===typeof a?a=[a]:"string"===typeof a&&(a=[parseInt(a,10)]),Fb(a,function(c){b.unsubscribeByKey(c);delete lr[c]}))}
function ur(a,b){var c=pr();c&&c.publish.apply(c,arguments)}
function vr(a){var b=pr();if(b)if(b.clear(a),a)wr(a);else for(var c in mr)wr(c)}
function pr(){return C.ytPubsubPubsubInstance}
function wr(a){mr[a]&&(a=mr[a],Fb(a,function(b){lr[b]&&delete lr[b]}),a.length=0)}
L.prototype.subscribe=L.prototype.subscribe;L.prototype.unsubscribeByKey=L.prototype.Ab;L.prototype.publish=L.prototype.Ya;L.prototype.clear=L.prototype.clear;D("ytPubsubPubsubInstance",kr);D("ytPubsubPubsubTopicToKeys",mr);D("ytPubsubPubsubIsSynchronous",nr);D("ytPubsubPubsubSubscribedKeys",lr);var xr=Symbol("injectionDeps");function yr(a){this.name=a}
yr.prototype.toString=function(){return"InjectionToken("+this.name+")"};
function zr(a){this.key=a}
function Ar(){this.i=new Map;this.j=new Map;this.h=new Map}
function Br(a,b){a.i.set(b.lc,b);var c=a.j.get(b.lc);c&&c.mg(a.resolve(b.lc))}
Ar.prototype.resolve=function(a){return a instanceof zr?Cr(this,a.key,[],!0):Cr(this,a,[])};
function Cr(a,b,c,d){d=void 0===d?!1:d;if(-1<c.indexOf(b))throw Error("Deps cycle for: "+b);if(a.h.has(b))return a.h.get(b);if(!a.i.has(b)){if(d)return;throw Error("No provider for: "+b);}d=a.i.get(b);c.push(b);if(void 0!==d.Jd)var e=d.Jd;else if(d.nf)e=d[xr]?Dr(a,d[xr],c):[],e=d.nf.apply(d,ma(e));else if(d.Id){e=d.Id;var f=e[xr]?Dr(a,e[xr],c):[];e=new (Function.prototype.bind.apply(e,[null].concat(ma(f))))}else throw Error("Could not resolve providers for: "+b);c.pop();d.pg||a.h.set(b,e);return e}
function Dr(a,b,c){return b?b.map(function(d){return d instanceof zr?Cr(a,d.key,c,!0):Cr(a,d,c)}):[]}
;var Er;function Fr(){Er||(Er=new Ar);return Er}
;var Gr=window;function Hr(){var a,b;return"h5vcc"in Gr&&(null==(a=Gr.h5vcc.traceEvent)?0:a.traceBegin)&&(null==(b=Gr.h5vcc.traceEvent)?0:b.traceEnd)?1:"performance"in Gr&&Gr.performance.mark&&Gr.performance.measure?2:0}
function Ir(a){switch(Hr()){case 1:Gr.h5vcc.traceEvent.traceBegin("YTLR",a);break;case 2:Gr.performance.mark(a+"-start");break;case 0:break;default:lc()}}
function Jr(a){switch(Hr()){case 1:Gr.h5vcc.traceEvent.traceEnd("YTLR",a);break;case 2:var b=a+"-start",c=a+"-end";Gr.performance.mark(c);Gr.performance.measure(a,b,c);break;case 0:break;default:lc()}}
;var Kr=T("web_enable_lifecycle_monitoring")&&0!==Hr(),Lr=T("web_enable_lifecycle_monitoring");function Mr(a){var b=this;var c=void 0===c?0:c;var d=void 0===d?bn():d;this.j=c;this.scheduler=d;this.i=new hi;this.h=a;for(a={cb:0};a.cb<this.h.length;a={ic:void 0,cb:a.cb},a.cb++)a.ic=this.h[a.cb],c=function(e){return function(){e.ic.Ec();b.h[e.cb].kc=!0;b.h.every(function(f){return!0===f.kc})&&b.i.resolve()}}(a),d=this.getPriority(a.ic),d=this.scheduler.ab(c,d),this.h[a.cb]=Object.assign({},a.ic,{Ec:c,
jobId:d})}
function Nr(a){var b=Array.from(a.h.keys()).sort(function(d,e){return a.getPriority(a.h[e])-a.getPriority(a.h[d])});
b=v(b);for(var c=b.next();!c.done;c=b.next())c=a.h[c.value],void 0===c.jobId||c.kc||(a.scheduler.pa(c.jobId),a.scheduler.ab(c.Ec,10))}
Mr.prototype.cancel=function(){for(var a=v(this.h),b=a.next();!b.done;b=a.next())b=b.value,void 0===b.jobId||b.kc||this.scheduler.pa(b.jobId),b.kc=!0;this.i.resolve()};
Mr.prototype.getPriority=function(a){var b;return null!=(b=a.priority)?b:this.j};function Or(a){this.state=a;this.plugins=[];this.l=void 0;this.A={};Kr&&Ir(this.state)}
m=Or.prototype;m.install=function(a){this.plugins.push(a);return this};
m.uninstall=function(){var a=this;B.apply(0,arguments).forEach(function(b){b=a.plugins.indexOf(b);-1<b&&a.plugins.splice(b,1)})};
m.transition=function(a,b){var c=this;Kr&&Jr(this.state);var d=this.transitions.find(function(f){return Array.isArray(f.from)?f.from.find(function(g){return g===c.state&&f.to===a}):f.from===c.state&&f.to===a});
if(d){this.j&&(Nr(this.j),this.j=void 0);Pr(this,a,b);this.state=a;Kr&&Ir(this.state);d=d.action.bind(this);var e=this.plugins.filter(function(f){return f[a]}).map(function(f){return f[a]});
d(Qr(this,e),b)}else throw Error("no transition specified from "+this.state+" to "+a);};
function Qr(a,b){var c=b.filter(function(e){return 10===Rr(a,e)}),d=b.filter(function(e){return 10!==Rr(a,e)});
return a.A.og?function(){var e=B.apply(0,arguments);return A(function(f){if(1==f.h)return f.yield(a.Oe.apply(a,[c].concat(ma(e))),2);a.Dd.apply(a,[d].concat(ma(e)));f.h=0})}:function(){var e=B.apply(0,arguments);
a.Pe.apply(a,[c].concat(ma(e)));a.Dd.apply(a,[d].concat(ma(e)))}}
m.Pe=function(a){for(var b=B.apply(1,arguments),c=bn(),d=v(a),e=d.next(),f={};!e.done;f={Hb:void 0},e=d.next())f.Hb=e.value,c.Bb(function(g){return function(){Sr(g.Hb.name);g.Hb.callback.apply(g.Hb,ma(b));Tr(g.Hb.name)}}(f))};
m.Oe=function(a){var b=B.apply(1,arguments),c,d,e,f,g;return A(function(h){1==h.h&&(c=bn(),d=v(a),e=d.next(),f={});if(3!=h.h){if(e.done)return h.B(0);f.tb=e.value;f.Sb=void 0;g=function(k){return function(){Sr(k.tb.name);var l=k.tb.callback.apply(k.tb,ma(b));"function"===typeof(null==l?void 0:l.then)?k.Sb=l.then(function(){Tr(k.tb.name)}):Tr(k.tb.name)}}(f);
c.Bb(g);return f.Sb?h.yield(f.Sb,3):h.B(3)}f={tb:void 0,Sb:void 0};e=d.next();return h.B(2)})};
m.Dd=function(a){var b=B.apply(1,arguments),c=this,d=a.map(function(e){return{Ec:function(){Sr(e.name);e.callback.apply(e,ma(b));Tr(e.name)},
priority:Rr(c,e)}});
d.length&&(this.j=new Mr(d))};
function Rr(a,b){var c,d;return null!=(d=null!=(c=a.l)?c:b.priority)?d:0}
function Sr(a){Kr&&a&&Ir(a)}
function Tr(a){Kr&&a&&Jr(a)}
function Pr(a,b,c){Lr&&console.groupCollapsed&&console.groupEnd&&(console.groupCollapsed("["+a.constructor.name+"] '"+a.state+"' to '"+b+"'"),console.log("with message: ",c),console.groupEnd())}
fa.Object.defineProperties(Or.prototype,{currentState:{configurable:!0,enumerable:!0,get:function(){return this.state}}});function Ur(a){Or.call(this,void 0===a?"none":a);this.h=null;this.l=10;this.transitions=[{from:"none",to:"application_navigating",action:this.i},{from:"application_navigating",to:"none",action:this.v},{from:"application_navigating",to:"application_navigating",action:function(){}},
{from:"none",to:"none",action:function(){}}]}
var Vr;w(Ur,Or);Ur.prototype.i=function(a,b){var c=this;this.h=wm(function(){"application_navigating"===c.currentState&&c.transition("none")},5E3);
a(null==b?void 0:b.event)};
Ur.prototype.v=function(a,b){this.h&&(wi.pa(this.h),this.h=null);a(null==b?void 0:b.event)};
function Wr(){Vr||(Vr=new Ur);return Vr}
;var Xr=[];D("yt.logging.transport.getScrapedGelPayloads",function(){return Xr});function Yr(){this.store={};this.h={}}
Yr.prototype.storePayload=function(a,b){a=Zr(a);this.store[a]?this.store[a].push(b):(this.h={},this.store[a]=[b]);return a};
Yr.prototype.smartExtractMatchingEntries=function(a){if(!a.keys.length)return[];for(var b=$r(this,a.keys.splice(0,1)[0]),c=[],d=0;d<b.length;d++)this.store[b[d]]&&a.sizeLimit&&(this.store[b[d]].length<=a.sizeLimit?(c.push.apply(c,ma(this.store[b[d]])),delete this.store[b[d]]):c.push.apply(c,ma(this.store[b[d]].splice(0,a.sizeLimit))));(null==a?0:a.sizeLimit)&&c.length<(null==a?void 0:a.sizeLimit)&&(a.sizeLimit-=c.length,c.push.apply(c,ma(this.smartExtractMatchingEntries(a))));return c};
Yr.prototype.extractMatchingEntries=function(a){a=$r(this,a);for(var b=[],c=0;c<a.length;c++)this.store[a[c]]&&(b.push.apply(b,ma(this.store[a[c]])),delete this.store[a[c]]);return b};
Yr.prototype.getSequenceCount=function(a){a=$r(this,a);for(var b=0,c=0;c<a.length;c++){var d=void 0;b+=(null==(d=this.store[a[c]])?void 0:d.length)||0}return b};
function $r(a,b){var c=Zr(b);if(a.h[c])return a.h[c];var d=Object.keys(a.store)||[];if(1>=d.length&&Zr(b)===d[0])return d;for(var e=[],f=0;f<d.length;f++){var g=d[f].split("/");if(as(b.auth,g[0])){var h=b.isJspb;as(void 0===h?"undefined":h?"true":"false",g[1])&&as(b.cttAuthInfo,g[2])&&(h=b.tier,h=void 0===h?"undefined":JSON.stringify(h),as(h,g[3])&&e.push(d[f]))}}return a.h[c]=e}
function as(a,b){return void 0===a||"undefined"===a?!0:a===b}
Yr.prototype.getSequenceCount=Yr.prototype.getSequenceCount;Yr.prototype.extractMatchingEntries=Yr.prototype.extractMatchingEntries;Yr.prototype.smartExtractMatchingEntries=Yr.prototype.smartExtractMatchingEntries;Yr.prototype.storePayload=Yr.prototype.storePayload;function Zr(a){return[void 0===a.auth?"undefined":a.auth,void 0===a.isJspb?"undefined":a.isJspb,void 0===a.cttAuthInfo?"undefined":a.cttAuthInfo,void 0===a.tier?"undefined":a.tier].join("/")}
;function bs(a,b){if(a)return a[b.name]}
;var cs=U("initial_gel_batch_timeout",2E3),ds=U("gel_queue_timeout_max_ms",6E4),es=Math.pow(2,16)-1,gs=U("gel_min_batch_size",5),hs=void 0;function is(){this.l=this.h=this.i=0;this.j=!1}
var js=new is,ks=new is,ls=new is,ms=new is,ns,ps=!0,qs=C.ytLoggingTransportTokensToCttTargetIds_||{};D("ytLoggingTransportTokensToCttTargetIds_",qs);var rs={};function ss(){var a=E("yt.logging.ims");a||(a=new Yr,D("yt.logging.ims",a));return a}
function ts(a,b){if("log_event"===a.endpoint){us();var c=vs(a),d=ws(a.payload)||"";a:{if(T("enable_web_tiered_gel")){var e=rq[d||""];var f,g,h,k=null==Fr().resolve(new zr(Xo))?void 0:null==(f=Yo())?void 0:null==(g=f.loggingHotConfig)?void 0:null==(h=g.eventLoggingConfig)?void 0:h.payloadPolicies;if(k)for(f=0;f<k.length;f++)if(k[f].payloadNumber===e){e=k[f];break a}}e=void 0}k=200;if(e){if(!1===e.enabled&&!T("web_payload_policy_disabled_killswitch"))return;k=xs(e.tier);if(400===k){ys(a,b);return}}rs[c]=
!0;e={cttAuthInfo:c,isJspb:!1,tier:k};ss().storePayload(e,a.payload);zs(b,c,e,"gelDebuggingEvent"===d)}}
function zs(a,b,c,d){function e(){As({writeThenSend:!0},T("flush_only_full_queue")?b:void 0,f,c.tier)}
var f=!1;f=void 0===f?!1:f;d=void 0===d?!1:d;a&&(hs=new a);a=U("tvhtml5_logging_max_batch_ads_fork")||U("web_logging_max_batch")||100;var g=W(),h=Bs(f,c.tier),k=h.l;d&&(h.j=!0);d=0;c&&(d=ss().getSequenceCount(c));1E3<=d?e():d>=a?ns||(ns=Cs(function(){e();ns=void 0},0)):10<=g-k&&(Ds(f,c.tier),h.l=g)}
function ys(a,b){if("log_event"===a.endpoint){us();var c=vs(a),d=new Map;d.set(c,[a.payload]);var e=ws(a.payload)||"";b&&(hs=new b);return new fe(function(f,g){hs&&hs.isReady()?Es(d,hs,f,g,{bypassNetworkless:!0},!0,"gelDebuggingEvent"===e):f()})}}
function vs(a){var b="";if(a.dangerousLogToVisitorSession)b="visitorOnlyApprovedKey";else if(a.cttAuthInfo){b=a.cttAuthInfo;var c={};b.videoId?c.videoId=b.videoId:b.playlistId&&(c.playlistId=b.playlistId);qs[a.cttAuthInfo.token]=c;b=a.cttAuthInfo.token}return b}
function As(a,b,c,d){a=void 0===a?{}:a;c=void 0===c?!1:c;new fe(function(e,f){var g=Bs(c,d),h=g.j;g.j=!1;Fs(g.i);Fs(g.h);g.h=0;hs&&hs.isReady()?void 0===d&&T("enable_web_tiered_gel")?Gs(e,f,a,b,c,300,h):Gs(e,f,a,b,c,d,h):(Ds(c,d),e())})}
function Gs(a,b,c,d,e,f,g){var h=hs;c=void 0===c?{}:c;e=void 0===e?!1:e;f=void 0===f?200:f;g=void 0===g?!1:g;var k=new Map,l={isJspb:e,cttAuthInfo:d,tier:f};e={isJspb:e,cttAuthInfo:d};if(void 0!==d)f=T("enable_web_tiered_gel")?ss().smartExtractMatchingEntries({keys:[l,e],sizeLimit:1E3}):ss().extractMatchingEntries(e),k.set(d,f);else for(d=v(Object.keys(rs)),l=d.next();!l.done;l=d.next())l=l.value,e=T("enable_web_tiered_gel")?ss().smartExtractMatchingEntries({keys:[{isJspb:!1,cttAuthInfo:l,tier:f},
{isJspb:!1,cttAuthInfo:l}],sizeLimit:1E3}):ss().extractMatchingEntries({isJspb:!1,cttAuthInfo:l}),0<e.length&&k.set(l,e),(T("web_fp_via_jspb_and_json")&&c.writeThenSend||!T("web_fp_via_jspb_and_json"))&&delete rs[l];Es(k,h,a,b,c,!1,g)}
function Ds(a,b){function c(){As({writeThenSend:!0},void 0,a,b)}
a=void 0===a?!1:a;b=void 0===b?200:b;var d=Bs(a,b),e=d===ms||d===ls?5E3:ds;T("web_gel_timeout_cap")&&!d.h&&(e=Cs(function(){c()},e),d.h=e);
Fs(d.i);e=S("LOGGING_BATCH_TIMEOUT",U("web_gel_debounce_ms",1E4));T("shorten_initial_gel_batch_timeout")&&ps&&(e=cs);e=Cs(function(){0<U("gel_min_batch_size")?ss().getSequenceCount({cttAuthInfo:void 0,isJspb:a,tier:b})>=gs&&c():c()},e);
d.i=e}
function Es(a,b,c,d,e,f,g){e=void 0===e?{}:e;var h=Math.round(W()),k=a.size,l=(void 0===g?0:g)&&T("vss_through_gel_video_stats")?"video_stats":"log_event";a=v(a);var n=a.next();for(g={};!n.done;g={Kc:void 0,batchRequest:void 0,dangerousLogToVisitorSession:void 0,Nc:void 0,Mc:void 0},n=a.next()){var p=v(n.value);n=p.next().value;p=p.next().value;g.batchRequest=Ub({context:dp(b.config_||cp())});if(!Qa(p)&&!T("throw_err_when_logevent_malformed_killswitch")){d();break}g.batchRequest.events=p;(p=qs[n])&&
Hs(g.batchRequest,n,p);delete qs[n];g.dangerousLogToVisitorSession="visitorOnlyApprovedKey"===n;Is(g.batchRequest,h,g.dangerousLogToVisitorSession);T("always_send_and_write")&&(e.writeThenSend=!1);g.Nc=function(r){T("start_client_gcf")&&wi.oa(function(){return A(function(t){return t.yield(Js(r),0)})});
k--;k||c()};
g.Kc=0;g.Mc=function(r){return function(){r.Kc++;if(e.bypassNetworkless&&1===r.Kc)try{Wp(b,l,r.batchRequest,Ks({writeThenSend:!0},r.dangerousLogToVisitorSession,r.Nc,r.Mc,f)),ps=!1}catch(t){$k(t),d()}k--;k||c()}}(g);
try{Wp(b,l,g.batchRequest,Ks(e,g.dangerousLogToVisitorSession,g.Nc,g.Mc,f)),ps=!1}catch(r){$k(r),d()}}}
function Ks(a,b,c,d,e){a={retry:!0,onSuccess:c,onError:d,networklessOptions:a,dangerousLogToVisitorSession:b,Wf:!!e,headers:{},postBodyFormat:"",postBody:"",compress:T("compress_gel")||T("compress_gel_lr")};Ls()&&(a.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(W())));return a}
function Is(a,b,c){Ls()||(a.requestTimeMs=String(b));T("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=S("EVENT_ID"))&&((c=S("BATCH_CLIENT_COUNTER")||0)||(c=Math.floor(Math.random()*es/2)),c++,c>es&&(c=1),Vk("BATCH_CLIENT_COUNTER",c),a.serializedClientEventId={serializedEventId:b,clientCounter:String(c)})}
function Hs(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function us(){var a;(a=E("yt.logging.transport.enableScrapingForTest"))||(a=sl("il_payload_scraping"),a="enable_il_payload_scraping"!==(void 0!==a?String(a):""));a||(Xr=[],D("yt.logging.transport.enableScrapingForTest",!0),D("yt.logging.transport.scrapedPayloadsForTesting",Xr),D("yt.logging.transport.payloadToScrape","visualElementShown visualElementHidden visualElementAttached screenCreated visualElementGestured visualElementStateChanged".split(" ")),D("yt.logging.transport.getScrapedPayloadFromClientEventsFunction"),
D("yt.logging.transport.scrapeClientEvent",!0))}
function Ls(){return T("use_request_time_ms_header")||T("lr_use_request_time_ms_header")}
function Cs(a,b){return!1===T("embeds_transport_use_scheduler")?ql(a,b):T("logging_avoid_blocking_during_navigation")||T("lr_logging_avoid_blocking_during_navigation")?wm(function(){if("none"===Wr().currentState)a();else{var c={};Wr().install((c.none={callback:a},c))}},b):wm(a,b)}
function Fs(a){T("transport_use_scheduler")?wi.pa(a):window.clearTimeout(a)}
function Js(a){var b,c,d,e,f,g,h,k,l,n;return A(function(p){return 1==p.h?(d=null==(b=a)?void 0:null==(c=b.responseContext)?void 0:c.globalConfigGroup,e=bs(d,Ak),g=null==(f=d)?void 0:f.hotHashData,h=bs(d,zk),l=null==(k=d)?void 0:k.coldHashData,(n=Fr().resolve(new zr(Xo)))?g?e?p.yield(Zo(n,g,e),2):p.yield(Zo(n,g),2):p.B(2):p.return()):l?h?p.yield($o(n,l,h),0):p.yield($o(n,l),0):p.B(0)})}
function Bs(a,b){b=void 0===b?200:b;return a?300===b?ms:ks:300===b?ls:js}
function ws(a){a=Object.keys(a);a=v(a);for(var b=a.next();!b.done;b=a.next())if(b=b.value,rq[b])return b}
function xs(a){switch(a){case "DELAYED_EVENT_TIER_UNSPECIFIED":return 0;case "DELAYED_EVENT_TIER_DEFAULT":return 100;case "DELAYED_EVENT_TIER_DISPATCH_TO_EMPTY":return 200;case "DELAYED_EVENT_TIER_FAST":return 300;case "DELAYED_EVENT_TIER_IMMEDIATE":return 400;default:return 200}}
;var Ms=C.ytLoggingGelSequenceIdObj_||{};D("ytLoggingGelSequenceIdObj_",Ms);
function Ns(a,b,c,d){d=void 0===d?{}:d;var e={},f=Math.round(d.timestamp||W());e.eventTimeMs=f<Number.MAX_SAFE_INTEGER?f:0;e[a]=b;a=jr();e.context={lastActivityMs:String(d.timestamp||!isFinite(a)?-1:a)};d.sequenceGroup&&!T("web_gel_sequence_info_killswitch")&&(a=e.context,b=d.sequenceGroup,Ms[b]=b in Ms?Ms[b]+1:0,a.sequence={index:Ms[b],groupKey:b},d.endOfSequence&&delete Ms[d.sequenceGroup]);(d.sendIsolatedPayload?ys:ts)({endpoint:"log_event",payload:e,cttAuthInfo:d.cttAuthInfo,dangerousLogToVisitorSession:d.dangerousLogToVisitorSession},
c)}
;function mn(a,b,c){c=void 0===c?{}:c;var d=Uq;S("ytLoggingEventsDefaultDisabled",!1)&&Uq===Uq&&(d=null);T("web_all_payloads_via_jspb")&&!c.timestamp&&(c.lact=jr(),c.timestamp=W());Ns(a,b,d,c)}
;D("ytLoggingGelSequenceIdObj_",C.ytLoggingGelSequenceIdObj_||{});var Os=new Set,Ps=0,Qs=0,Rs=0,Ss=[],Ts=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function ln(a){Us(a)}
function Vs(a){Us(a,"WARNING")}
function Ws(a){a instanceof Error?Us(a):(a=Ra(a)?JSON.stringify(a):String(a),a=new V(a),a.name="RejectedPromiseError",Vs(a))}
function Us(a,b,c,d,e,f,g,h){f=void 0===f?{}:f;f.name=c||S("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||S("INNERTUBE_CONTEXT_CLIENT_VERSION");c=f;b=void 0===b?"ERROR":b;g=void 0===g?!1:g;b=void 0===b?"ERROR":b;g=void 0===g?!1:g;if(a&&(a.hasOwnProperty("level")&&a.level&&(b=a.level),T("console_log_js_exceptions")&&(d=[],d.push("Name: "+a.name),d.push("Message: "+a.message),a.hasOwnProperty("params")&&d.push("Error Params: "+JSON.stringify(a.params)),a.hasOwnProperty("args")&&d.push("Error args: "+
JSON.stringify(a.args)),d.push("File name: "+a.fileName),d.push("Stacktrace: "+a.stack),d=d.join("\n"),window.console.log(d,a)),!(5<=Ps))){d=Ss;var k=tc(a);e=k.message||"Unknown Error";f=k.name||"UnknownError";var l=k.stack||a.i||"Not available";if(l.startsWith(f+": "+e)){var n=l.split("\n");n.shift();l=n.join("\n")}n=k.lineNumber||"Not available";k=k.fileName||"Not available";var p=0;if(a.hasOwnProperty("args")&&a.args&&a.args.length)for(var r=0;r<a.args.length&&!(p=Tl(a.args[r],"params."+r,c,p),
500<=p);r++);else if(a.hasOwnProperty("params")&&a.params){var t=a.params;if("object"===typeof a.params)for(r in t){if(t[r]){var y="params."+r,z=Vl(t[r]);c[y]=z;p+=y.length+z.length;if(500<p)break}}else c.params=Vl(t)}if(d.length)for(r=0;r<d.length&&!(p=Tl(d[r],"params.context."+r,c,p),500<=p);r++);navigator.vendor&&!c.hasOwnProperty("vendor")&&(c["device.vendor"]=navigator.vendor);r={message:e,name:f,lineNumber:n,fileName:k,stack:l,params:c,sampleWeight:1};c=Number(a.columnNumber);isNaN(c)||(r.lineNumber=
r.lineNumber+":"+c);if("IGNORED"===a.level)a=0;else a:{a=Pl();c=v(a.Ta);for(d=c.next();!d.done;d=c.next())if(d=d.value,r.message&&r.message.match(d.hg)){a=d.weight;break a}a=v(a.Qa);for(c=a.next();!c.done;c=a.next())if(c=c.value,c.callback(r)){a=c.weight;break a}a=1}r.sampleWeight=a;a=v(Kl);for(c=a.next();!c.done;c=a.next())if(c=c.value,c.hc[r.name])for(e=v(c.hc[r.name]),d=e.next();!d.done;d=e.next())if(f=d.value,d=r.message.match(f.regexp)){r.params["params.error.original"]=d[0];e=f.groups;f={};
for(n=0;n<e.length;n++)f[e[n]]=d[n+1],r.params["params.error."+e[n]]=d[n+1];r.message=c.Ic(f);break}r.params||(r.params={});a=Pl();r.params["params.errorServiceSignature"]="msg="+a.Ta.length+"&cb="+a.Qa.length;r.params["params.serviceWorker"]="false";C.document&&C.document.querySelectorAll&&(r.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length));ib("sample").constructor!==gb&&(r.params["params.fconst"]="true");window.yterr&&"function"===typeof window.yterr&&window.yterr(r);
if(0!==r.sampleWeight&&!Os.has(r.message)){if(g&&T("web_enable_error_204"))Xs(void 0===b?"ERROR":b,r);else{b=void 0===b?"ERROR":b;"ERROR"===b?(Ql.Ya("handleError",r),T("record_app_crashed_web")&&0===Rs&&1===r.sampleWeight&&(Rs++,g={appCrashType:"APP_CRASH_TYPE_BREAKPAD"},T("report_client_error_with_app_crash_ks")||(g.systemHealth={crashData:{clientError:{logMessage:{message:r.message}}}}),mn("appCrashed",g)),Qs++):"WARNING"===b&&Ql.Ya("handleWarning",r);if(T("kevlar_gel_error_routing")){g=b;h=void 0===
h?{}:h;b:{a=v(Ts);for(c=a.next();!c.done;c=a.next())if(sn(c.value.toLowerCase())){a=!0;break b}a=!1}if(a)h=void 0;else{c={stackTrace:r.stack};r.fileName&&(c.filename=r.fileName);a=r.lineNumber&&r.lineNumber.split?r.lineNumber.split(":"):[];0!==a.length&&(1!==a.length||isNaN(Number(a[0]))?2!==a.length||isNaN(Number(a[0]))||isNaN(Number(a[1]))||(c.lineNumber=Number(a[0]),c.columnNumber=Number(a[1])):c.lineNumber=Number(a[0]));a={level:"ERROR_LEVEL_UNKNOWN",message:r.message,errorClassName:r.name,sampleWeight:r.sampleWeight};
"ERROR"===g?a.level="ERROR_LEVEL_ERROR":"WARNING"===g&&(a.level="ERROR_LEVEL_WARNNING");c={isObfuscated:!0,browserStackInfo:c};h.pageUrl=window.location.href;h.kvPairs=[];S("FEXP_EXPERIMENTS")&&(h.experimentIds=S("FEXP_EXPERIMENTS"));d=S("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS");if(!Wk("web_disable_gel_stp_ecatcher_killswitch")&&d)for(e=v(Object.keys(d)),f=e.next();!f.done;f=e.next())f=f.value,h.kvPairs.push({key:f,value:String(d[f])});if(d=r.params)for(e=v(Object.keys(d)),f=e.next();!f.done;f=e.next())f=
f.value,h.kvPairs.push({key:"client."+f,value:String(d[f])});d=S("SERVER_NAME");e=S("SERVER_VERSION");d&&e&&(h.kvPairs.push({key:"server.name",value:d}),h.kvPairs.push({key:"server.version",value:e}));h={errorMetadata:h,stackTrace:c,logMessage:a}}h&&(mn("clientError",h),("ERROR"===g||T("errors_flush_gel_always_killswitch"))&&As(void 0,void 0,!1))}T("suppress_error_204_logging")||Xs(b,r)}try{Os.add(r.message)}catch(x){}Ps++}}}
function Xs(a,b){var c=b.params||{};a={urlParams:{a:"logerror",t:"jserror",type:b.name,msg:b.message.substr(0,250),line:b.lineNumber,level:a,"client.name":c.name},postParams:{url:S("PAGE_NAME",window.location.href),file:b.fileName},method:"POST"};c.version&&(a["client.version"]=c.version);if(a.postParams){b.stack&&(a.postParams.stack=b.stack);b=v(Object.keys(c));for(var d=b.next();!d.done;d=b.next())d=d.value,a.postParams["client."+d]=c[d];if(c=S("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS"))for(b=v(Object.keys(c)),
d=b.next();!d.done;d=b.next())d=d.value,a.postParams[d]=c[d];c=S("SERVER_NAME");b=S("SERVER_VERSION");c&&b&&(a.postParams["server.name"]=c,a.postParams["server.version"]=b)}Bl(S("ECATCHER_REPORT_HOST","")+"/error_204",a)}
;function Ys(){this.register=new Map}
function Zs(a){a=v(a.register.values());for(var b=a.next();!b.done;b=a.next())b.value.kg("ABORTED")}
Ys.prototype.clear=function(){Zs(this);this.register.clear()};
var $s=new Ys;var at=Date.now().toString();
function bt(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;16>a;a++){b=Date.now();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(256*Math.random())}if(at)for(a=1,b=0;b<at.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^at.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&63));
return a.join("")}
;var ct,dt=C.ytLoggingDocDocumentNonce_;dt||(dt=bt(),D("ytLoggingDocDocumentNonce_",dt));ct=dt;function et(a){this.h=a}
m=et.prototype;m.getAsJson=function(){var a={};void 0!==this.h.trackingParams?a.trackingParams=this.h.trackingParams:(a.veType=this.h.veType,void 0!==this.h.veCounter&&(a.veCounter=this.h.veCounter),void 0!==this.h.elementIndex&&(a.elementIndex=this.h.elementIndex));void 0!==this.h.dataElement&&(a.dataElement=this.h.dataElement.getAsJson());void 0!==this.h.youtubeData&&(a.youtubeData=this.h.youtubeData);this.h.isCounterfactual&&(a.isCounterfactual=!0);return a};
m.getAsJspb=function(){var a=new Hk;void 0!==this.h.trackingParams?a.setTrackingParams(this.h.trackingParams):(void 0!==this.h.veType&&jg(a,2,Nf(this.h.veType)),void 0!==this.h.veCounter&&jg(a,6,Nf(this.h.veCounter)),void 0!==this.h.elementIndex&&jg(a,3,Nf(this.h.elementIndex)),this.h.isCounterfactual&&jg(a,5,Kf(!0)));if(void 0!==this.h.dataElement){var b=this.h.dataElement.getAsJspb();rg(a,Hk,7,b)}void 0!==this.h.youtubeData&&rg(a,Bk,8,this.h.jspbYoutubeData);return a};
m.toString=function(){return JSON.stringify(this.getAsJson())};
m.isClientVe=function(){return!this.h.trackingParams&&!!this.h.veType};
m.getLoggingDirectives=function(){return this.h.loggingDirectives};function ft(a){return S("client-screen-nonce-store",{})[void 0===a?0:a]}
function gt(a,b){b=void 0===b?0:b;var c=S("client-screen-nonce-store");c||(c={},Vk("client-screen-nonce-store",c));c[b]=a}
function ht(a){a=void 0===a?0:a;return 0===a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
function jt(a){return S(ht(void 0===a?0:a))}
D("yt_logging_screen.getRootVeType",jt);function kt(){var a=S("csn-to-ctt-auth-info");a||(a={},Vk("csn-to-ctt-auth-info",a));return a}
function lt(){return Object.values(S("client-screen-nonce-store",{})).filter(function(a){return void 0!==a})}
function mt(a){a=ft(void 0===a?0:a);if(!a&&!S("USE_CSN_FALLBACK",!0))return null;a||(a="UNDEFINED_CSN");return a?a:null}
D("yt_logging_screen.getCurrentCsn",mt);function nt(a,b,c){var d=kt();(c=mt(c))&&delete d[c];b&&(d[a]=b)}
function ot(a){return kt()[a]}
D("yt_logging_screen.getCttAuthInfo",ot);D("yt_logging_screen.setCurrentScreen",function(a,b,c,d){c=void 0===c?0:c;if(a!==ft(c)||b!==S(ht(c)))if(nt(a,d,c),gt(a,c),Vk(ht(c),b),b=function(){setTimeout(function(){a&&mn("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:ct,clientScreenNonce:a})},0)},"requestAnimationFrame"in window)try{window.requestAnimationFrame(b)}catch(e){b()}else b()});function pt(){var a=Tb(qt),b;return(new fe(function(c,d){a.onSuccess=function(e){pl(e)?c(new rt(e)):d(new st("Request failed, status="+(e&&"status"in e?e.status:-1),"net.badstatus",e))};
a.onError=function(e){d(new st("Unknown request error","net.unknown",e))};
a.onTimeout=function(e){d(new st("Request timed out","net.timeout",e))};
b=Bl("//googleads.g.doubleclick.net/pagead/id",a)})).oc(function(c){if(c instanceof me){var d;
null==(d=b)||d.abort()}return ke(c)})}
function st(a,b,c){bb.call(this,a+", errorCode="+b);this.errorCode=b;this.xhr=c;this.name="PromiseAjaxError"}
w(st,bb);function rt(a){this.xhr=a}
;function tt(){this.h=0;this.i=null}
tt.prototype.then=function(a,b,c){return 1===this.h&&a?(a=a.call(c,this.i))&&"function"===typeof a.then?a:ut(a):2===this.h&&b?(a=b.call(c,this.i))&&"function"===typeof a.then?a:vt(a):this};
tt.prototype.getValue=function(){return this.i};
tt.prototype.isRejected=function(){return 2==this.h};
tt.prototype.$goog_Thenable=!0;function vt(a){var b=new tt;a=void 0===a?null:a;b.h=2;b.i=void 0===a?null:a;return b}
function ut(a){var b=new tt;a=void 0===a?null:a;b.h=1;b.i=void 0===a?null:a;return b}
;function wt(a,b){var c=void 0===c?{}:c;a={method:void 0===b?"POST":b,mode:kl(a)?"same-origin":"cors",credentials:kl(a)?"same-origin":"include"};b={};for(var d=v(Object.keys(c)),e=d.next();!e.done;e=d.next())e=e.value,c[e]&&(b[e]=c[e]);0<Object.keys(b).length&&(a.headers=b);return a}
;function xt(){return Ug()||(Ne||Oe)&&sn("applewebkit")&&!sn("version")&&(!sn("safari")||sn("gsa/"))||bd&&sn("version/")?!0:S("EOM_VISITOR_DATA")?!1:!0}
;function zt(a){a:{var b="EMBEDDED_PLAYER_MODE_UNKNOWN";window.location.hostname.includes("youtubeeducation.com")&&(b="EMBEDDED_PLAYER_MODE_PFL");var c=a.raw_embedded_player_response;if(!c&&(a=a.embedded_player_response))try{c=JSON.parse(a)}catch(e){break a}if(c)b:for(var d in Fk)if(Fk[d]==c.embeddedPlayerMode){b=Fk[d];break b}}return"EMBEDDED_PLAYER_MODE_PFL"===b}
;function At(a){bb.call(this,a.message||a.description||a.name);this.isMissing=a instanceof Bt;this.isTimeout=a instanceof st&&"net.timeout"==a.errorCode;this.isCanceled=a instanceof me}
w(At,bb);At.prototype.name="BiscottiError";function Bt(){bb.call(this,"Biscotti ID is missing from server")}
w(Bt,bb);Bt.prototype.name="BiscottiMissingError";var qt={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},Ct=null;function Dt(){if(T("disable_biscotti_fetch_entirely_for_all_web_clients"))return Error("Biscotti id fetching has been disabled entirely.");if(!xt())return Error("User has not consented - not fetching biscotti id.");var a=S("PLAYER_VARS",{});if("1"==Rb(a))return Error("Biscotti ID is not available in private embed mode");if(zt(a))return Error("Biscotti id fetching has been disabled for pfl.")}
function Ok(){var a=Dt();if(void 0!==a)return ke(a);Ct||(Ct=pt().then(Et).oc(function(b){return Ft(2,b)}));
return Ct}
function Et(a){a=a.xhr.responseText;if(0!=a.lastIndexOf(")]}'",0))throw new Bt;a=JSON.parse(a.substr(4));if(1<(a.type||1))throw new Bt;a=a.id;Pk(a);Ct=ut(a);Gt(18E5,2);return a}
function Ft(a,b){b=new At(b);Pk("");Ct=vt(b);0<a&&Gt(12E4,a-1);throw b;}
function Gt(a,b){ql(function(){pt().then(Et,function(c){return Ft(b,c)}).oc(Nd)},a)}
function Ht(){try{var a=E("yt.ads.biscotti.getId_");return a?a():Ok()}catch(b){return ke(b)}}
;var kc=ja(["data-"]);function It(a){a&&(a.dataset?a.dataset[Jt()]="true":jc(a))}
function Kt(a){return a?a.dataset?a.dataset[Jt()]:a.getAttribute("data-loaded"):null}
var Lt={};function Jt(){return Lt.loaded||(Lt.loaded="loaded".replace(/\-([a-z])/g,function(a,b){return b.toUpperCase()}))}
;function Mt(a,b,c){H.call(this);var d=this;c=c||S("POST_MESSAGE_ORIGIN")||window.document.location.protocol+"//"+window.document.location.hostname;this.i=b||null;this.targetOrigin="*";this.j=c;this.sessionId=null;this.channel="widget";this.D=!!a;this.A=function(e){a:if(!("*"!=d.j&&e.origin!=d.j||d.i&&e.source!=d.i||"string"!==typeof e.data)){try{var f=JSON.parse(e.data)}catch(g){break a}if(!(null==f||d.D&&(d.sessionId&&d.sessionId!=f.id||d.channel&&d.channel!=f.channel))&&f)switch(f.event){case "listening":"null"!=
e.origin&&(d.j=d.targetOrigin=e.origin);d.i=e.source;d.sessionId=f.id;d.h&&(d.h(),d.h=null);break;case "command":d.l&&(!d.m||0<=Eb(d.m,f.func))&&d.l(f.func,f.args,e.origin)}}};
this.m=this.h=this.l=null;window.addEventListener("message",this.A)}
w(Mt,H);Mt.prototype.sendMessage=function(a,b){if(b=b||this.i){this.sessionId&&(a.id=this.sessionId);this.channel&&(a.channel=this.channel);try{var c=JSON.stringify(a);b.postMessage(c,this.targetOrigin)}catch(d){al(d)}}};
Mt.prototype.S=function(){window.removeEventListener("message",this.A);H.prototype.S.call(this)};function Nt(a){a=a||{};var b={},c={};this.url=a.url||"";this.args=a.args||Tb(b);this.assets=a.assets||{};this.attrs=a.attrs||Tb(c);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
Nt.prototype.clone=function(){var a=new Nt,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];"object"==Pa(c)?a[b]=Tb(c):a[b]=c}return a};var Ot=["share/get_web_player_share_panel"],Pt=["feedback"],Qt=["notification/modify_channel_preference"],Rt=["browse/edit_playlist"],St=["subscription/subscribe"],Tt=["subscription/unsubscribe"];var Ut=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};D("yt.msgs_",Ut);function Vt(a){Qk(Ut,arguments)}
;var Wt=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,Xt=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;function Yt(a,b,c){c=void 0===c?null:c;if(T("web_simple_scriptloader"))Zt(a,b,c);else if(window.spf&&spf.script){c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(Wt,""),c=c.replace(Xt,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else Zt(a,b,c)}
function Zt(a,b,c){c=void 0===c?null:c;var d=$t(a),e=document.getElementById(d),f=e&&Kt(e),g=e&&!f;f?b&&b():(b&&(f=or(d,b),b=""+Sa(b),au[b]=f),g||(e=bu(a,d,function(){Kt(e)||(It(e),ur(d),ql(function(){vr(d)},0))},c)))}
function bu(a,b,c,d){d=void 0===d?null:d;var e=Sd("SCRIPT");e.id=b;e.onload=function(){c&&setTimeout(c,0)};
e.onreadystatechange=function(){switch(e.readyState){case "loaded":case "complete":e.onload()}};
d&&e.setAttribute("nonce",d);sc(e,xk(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(e,a.firstChild);return e}
function cu(a){a=$t(a);var b=document.getElementById(a);b&&(vr(a),b.parentNode.removeChild(b))}
function du(a,b){a&&b&&(a=""+Sa(b),(a=au[a])&&qr(a))}
function $t(a){var b=document.createElement("a");Ab(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+xc(a)}
var au={};var eu=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;function fu(a){a=a||"";if(T("web_simple_styleloader"))gu(a);else if(window.spf){var b=a.match(eu);spf.style.load(a,b?b[1]:"",void 0)}else gu(a)}
function gu(a){var b=hu(a),c=document.getElementById(b),d=c&&Kt(c);d||c&&!d||(c=iu(a,b,function(){if(!Kt(c)){It(c);ur(b);var e=Ya(vr,b);ql(e,0)}}))}
function iu(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=xk(a);nc(d,a);(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function hu(a){var b=Sd("A");Ab(b,new sb(a,tb));a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+xc(a)}
;function ju(a){var b=B.apply(1,arguments);if(!ku(a)||b.some(function(d){return!ku(d)}))throw Error("Only objects may be merged.");
b=v(b);for(var c=b.next();!c.done;c=b.next())lu(a,c.value)}
function lu(a,b){for(var c in b)if(ku(b[c])){if(c in a&&!ku(a[c]))throw Error("Cannot merge an object into a non-object.");c in a||(a[c]={});lu(a[c],b[c])}else if(mu(b[c])){if(c in a&&!mu(a[c]))throw Error("Cannot merge an array into a non-array.");c in a||(a[c]=[]);nu(a[c],b[c])}else a[c]=b[c];return a}
function nu(a,b){b=v(b);for(var c=b.next();!c.done;c=b.next())c=c.value,ku(c)?a.push(lu({},c)):mu(c)?a.push(nu([],c)):a.push(c);return a}
function ku(a){return"object"===typeof a&&!Array.isArray(a)}
function mu(a){return"object"===typeof a&&Array.isArray(a)}
;function ou(a){a=void 0===a?!1:a;H.call(this);this.h=new L(a);Rc(this,this.h)}
$a(ou,H);ou.prototype.subscribe=function(a,b,c){return this.Z()?0:this.h.subscribe(a,b,c)};
ou.prototype.unsubscribe=function(a,b,c){return this.Z()?!1:this.h.unsubscribe(a,b,c)};
ou.prototype.l=function(a,b){this.Z()||this.h.Ya.apply(this.h,arguments)};var pu="absolute_experiments app conditional_experiments debugcss debugjs expflag forced_experiments pbj pbjreload sbb spf spfreload sr_bns_address sttick".split(" ");
function qu(a,b){var c=void 0===c?!0:c;var d=S("VALID_SESSION_TEMPDATA_DOMAINS",[]),e=Bc(window.location.href);e&&d.push(e);e=Bc(a);if(0<=Eb(d,e)||!e&&0==a.lastIndexOf("/",0))if(d=document.createElement("a"),Ab(d,a),a=d.href)if(a=Cc(a),a=Dc(a))if(c&&!b.csn&&(b.itct||b.ved)&&(b=Object.assign({csn:mt()},b)),f){var f=parseInt(f,10);isFinite(f)&&0<f&&ru(a,b,f)}else ru(a,b)}
function ru(a,b,c){a=su(a);b=b?Fc(b):"";c=c||5;xt()&&bm(a,b,c)}
function su(a){for(var b=v(pu),c=b.next();!c.done;c=b.next())a=Kc(a,c.value);return"ST-"+xc(a).toString(36)}
;function tu(a){hp.call(this,1,arguments);this.csn=a}
w(tu,hp);var qp=new ip("screen-created",tu),uu=[],vu=0,wu=new Map,xu=new Map,yu=new Map;
function zu(a,b,c,d,e){e=void 0===e?!1:e;if(!T("do_not_send_empty_attach_payloads")||d&&!(1>d.length)){for(var f=Au({cttAuthInfo:ot(b)||void 0},b),g=v(d),h=g.next();!h.done;h=g.next()){h=h.value;var k=h.getAsJson();(Pb(k)||!k.trackingParams&&!k.veType)&&Vs(Error("Child VE logged with no data"));if(T("no_client_ve_attach_unless_shown")){var l=Bu(h,b);if(k.veType&&!xu.has(l)&&!yu.has(l)&&!e){if(!T("il_attach_cache_limit")||1E3>wu.size){wu.set(l,[a,b,c,h]);return}T("il_attach_cache_limit")&&1E3<wu.size&&
Vs(new V("IL Attach cache exceeded limit"))}h=Bu(c,b);wu.has(h)?Cu(c,b):yu.set(h,!0)}}d=d.filter(function(n){n.csn!==b?(n.csn=b,n=!0):n=!1;return n});
c={csn:b,parentVe:c.getAsJson(),childVes:Hb(d,function(n){return n.getAsJson()})};
"UNDEFINED_CSN"===b?Du("visualElementAttached",f,c):a?Ns("visualElementAttached",c,a,f):mn("visualElementAttached",c,f)}}
function Du(a,b,c){uu.push({Ge:a,payload:c,dg:void 0,options:b});vu||(vu=rp())}
function sp(a){if(uu){for(var b=v(uu),c=b.next();!c.done;c=b.next())c=c.value,c.payload&&(c.payload.csn=a.csn,mn(c.Ge,c.payload,c.options));uu.length=0}vu=0}
function Bu(a,b){return""+a.getAsJson().veType+a.getAsJson().veCounter+b}
function Cu(a,b){a=Bu(a,b);wu.has(a)&&(b=wu.get(a)||[],zu(b[0],b[1],b[2],[b[3]],!0),wu.delete(a))}
function Au(a,b){T("log_sequence_info_on_gel_web")&&(a.sequenceGroup=b);return a}
;function Eu(){try{return!!self.localStorage}catch(a){return!1}}
;function Fu(a){a=a.match(/(.*)::.*::.*/);if(null!==a)return a[1]}
function Gu(a){if(Eu()){var b=Object.keys(window.localStorage);b=v(b);for(var c=b.next();!c.done;c=b.next()){c=c.value;var d=Fu(c);void 0===d||a.includes(d)||self.localStorage.removeItem(c)}}}
function Hu(){if(!Eu())return!1;var a=tm(),b=Object.keys(window.localStorage);b=v(b);for(var c=b.next();!c.done;c=b.next())if(c=Fu(c.value),void 0!==c&&c!==a)return!0;return!1}
;function Iu(){var a=!1;try{a=!!window.sessionStorage.getItem("session_logininfo")}catch(b){a=!0}return T("copy_login_info_to_st_cookie")&&("WEB"===S("INNERTUBE_CLIENT_NAME")||"WEB_CREATOR"===S("INNERTUBE_CLIENT_NAME"))&&a}
function Ju(a){if(S("LOGGED_IN",!0)&&Iu()){var b=S("VALID_SESSION_TEMPDATA_DOMAINS",[]);var c=Bc(window.location.href);c&&b.push(c);c=Bc(a);0<=Eb(b,c)||!c&&0==a.lastIndexOf("/",0)?(b=Cc(a),(b=Dc(b))?(b=su(b),b=(b=cm(b)||null)?hl(b):{}):b=null):b=null;null==b&&(b={});c=b;var d=void 0;Iu()?(d||(d=S("LOGIN_INFO")),d?(c.session_logininfo=d,c=!0):c=!1):c=!1;c&&qu(a,b)}}
;function Ku(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=S("EVENT_ID");d&&(b.ei||(b.ei=d));b&&qu(a,b);if(c)return!1;Ju(a);var e=void 0===e?{}:e;var f=void 0===f?"":f;var g=void 0===g?window:g;a=Gc(a,e);Ju(a);f=a+f;var h=void 0===h?xb:h;a:if(h=void 0===h?xb:h,f instanceof sb)h=f;else{for(a=0;a<h.length;++a)if(b=h[a],b instanceof vb&&b.ue(f)){h=new sb(f,tb);break a}h=void 0}g=g.location;h=zb(h||ub);void 0!==h&&(g.href=h);return!0}
;function Lu(a){if("1"!=Rb(S("PLAYER_VARS",{}))){a&&Nk();try{Ht().then(function(){},function(){}),ql(Lu,18E5)}catch(b){$k(b)}}}
;var Mu=new Map([["dark","USER_INTERFACE_THEME_DARK"],["light","USER_INTERFACE_THEME_LIGHT"]]);function Nu(){var a=void 0===a?window.location.href:a;if(T("kevlar_disable_theme_param"))return null;zc(Ac(5,a));try{var b=il(a).theme;return Mu.get(b)||null}catch(c){}return null}
;function Ou(){this.h={};if(this.i=em()){var a=cm("CONSISTENCY");a&&Pu(this,{encryptedTokenJarContents:a})}}
Ou.prototype.handleResponse=function(a,b){if(!b)throw Error("request needs to be passed into ConsistencyService");var c,d;b=(null==(c=b.Ma.context)?void 0:null==(d=c.request)?void 0:d.consistencyTokenJars)||[];var e;if(a=null==(e=a.responseContext)?void 0:e.consistencyTokenJar){e=v(b);for(c=e.next();!c.done;c=e.next())delete this.h[c.value.encryptedTokenJarContents];Pu(this,a)}};
function Pu(a,b){if(b.encryptedTokenJarContents&&(a.h[b.encryptedTokenJarContents]=b,"string"===typeof b.expirationSeconds)){var c=Number(b.expirationSeconds);setTimeout(function(){delete a.h[b.encryptedTokenJarContents]},1E3*c);
a.i&&bm("CONSISTENCY",b.encryptedTokenJarContents,c,void 0,!0)}}
;var Qu=window.location.hostname.split(".").slice(-2).join(".");function Ru(){var a=S("LOCATION_PLAYABILITY_TOKEN");"TVHTML5"===S("INNERTUBE_CLIENT_NAME")&&(this.h=Su(this))&&(a=this.h.get("yt-location-playability-token"));a&&(this.locationPlayabilityToken=a,this.i=void 0)}
var Tu;function Uu(){Tu=E("yt.clientLocationService.instance");Tu||(Tu=new Ru,D("yt.clientLocationService.instance",Tu));return Tu}
m=Ru.prototype;m.setLocationOnInnerTubeContext=function(a){a.client||(a.client={});this.i?(a.client.locationInfo||(a.client.locationInfo={}),a.client.locationInfo.latitudeE7=Math.floor(1E7*this.i.coords.latitude),a.client.locationInfo.longitudeE7=Math.floor(1E7*this.i.coords.longitude),a.client.locationInfo.horizontalAccuracyMeters=Math.round(this.i.coords.accuracy),a.client.locationInfo.forceLocationPlayabilityTokenRefresh=!0):this.locationPlayabilityToken&&(a.client.locationPlayabilityToken=this.locationPlayabilityToken)};
m.handleResponse=function(a){var b;a=null==(b=a.responseContext)?void 0:b.locationPlayabilityToken;void 0!==a&&(this.locationPlayabilityToken=a,this.i=void 0,"TVHTML5"===S("INNERTUBE_CLIENT_NAME")?(this.h=Su(this))&&this.h.set("yt-location-playability-token",a,15552E3):bm("YT_CL",JSON.stringify({loctok:a}),15552E3,Qu,!0))};
function Su(a){return void 0===a.h?new cn("yt-client-location"):a.h}
m.clearLocationPlayabilityToken=function(a){"TVHTML5"===a?(this.h=Su(this))&&this.h.remove("yt-location-playability-token"):dm("YT_CL")};
m.getCurrentPositionFromGeolocation=function(){var a=this;if(!(navigator&&navigator.geolocation&&navigator.geolocation.getCurrentPosition))return Promise.reject(Error("Geolocation unsupported"));var b=!1,c=1E4;"MWEB"===S("INNERTUBE_CLIENT_NAME")&&(b=!0,c=15E3);return new Promise(function(d,e){navigator.geolocation.getCurrentPosition(function(f){a.i=f;d(f)},function(f){e(f)},{enableHighAccuracy:b,
maximumAge:0,timeout:c})})};
m.createUnpluggedLocationInfo=function(a){var b={};a=a.coords;if(null==a?0:a.latitude)b.latitudeE7=Math.floor(1E7*a.latitude);if(null==a?0:a.longitude)b.longitudeE7=Math.floor(1E7*a.longitude);if(null==a?0:a.accuracy)b.locationRadiusMeters=Math.round(a.accuracy);return b};
m.createLocationInfo=function(a){var b={};a=a.coords;if(null==a?0:a.latitude)b.latitudeE7=Math.floor(1E7*a.latitude);if(null==a?0:a.longitude)b.longitudeE7=Math.floor(1E7*a.longitude);return b};function Vu(a,b){var c,d=null==(c=bs(a,Ek))?void 0:c.signal;if(d&&b.Ob&&(c=b.Ob[d]))return c();var e;if((c=null==(e=bs(a,Ck))?void 0:e.request)&&b.Wd&&(e=b.Wd[c]))return e();for(var f in a)if(b.cd[f]&&(a=b.cd[f]))return a()}
function Wu(a){var b={"Content-Type":"application/json"};S("EOM_VISITOR_DATA")?b["X-Goog-EOM-Visitor-Id"]=S("EOM_VISITOR_DATA"):S("VISITOR_DATA")&&(b["X-Goog-Visitor-Id"]=S("VISITOR_DATA"));b["X-Youtube-Bootstrap-Logged-In"]=S("LOGGED_IN",!1);S("DEBUG_SETTINGS_METADATA")&&(b["X-Debug-Settings-Metadata"]=S("DEBUG_SETTINGS_METADATA"));"cors"!==a&&((a=S("INNERTUBE_CONTEXT_CLIENT_NAME"))&&(b["X-Youtube-Client-Name"]=a),(a=S("INNERTUBE_CONTEXT_CLIENT_VERSION"))&&(b["X-Youtube-Client-Version"]=a),(a=S("CHROME_CONNECTED_HEADER"))&&
(b["X-Youtube-Chrome-Connected"]=a),(a=S("DOMAIN_ADMIN_STATE"))&&(b["X-Youtube-Domain-Admin-State"]=a));return b}
;function Xu(a){return function(){return new a}}
;var Yu={},Zu=(Yu.WEB_UNPLUGGED="^unplugged/",Yu.WEB_UNPLUGGED_ONBOARDING="^unplugged/",Yu.WEB_UNPLUGGED_OPS="^unplugged/",Yu.WEB_UNPLUGGED_PUBLIC="^unplugged/",Yu.WEB_CREATOR="^creator/",Yu.WEB_KIDS="^kids/",Yu.WEB_EXPERIMENTS="^experiments/",Yu.WEB_MUSIC="^music/",Yu.WEB_REMIX="^music/",Yu.WEB_MUSIC_EMBEDDED_PLAYER="^music/",Yu.WEB_MUSIC_EMBEDDED_PLAYER="^main_app/|^sfv/",Yu);
function $u(a){var b=void 0===b?"UNKNOWN_INTERFACE":b;if(1===a.length)return a[0];var c=Zu[b];if(c){c=new RegExp(c);for(var d=v(a),e=d.next();!e.done;e=d.next())if(e=e.value,c.exec(e))return e}var f=[];Object.entries(Zu).forEach(function(g){var h=v(g);g=h.next().value;h=h.next().value;b!==g&&f.push(h)});
c=new RegExp(f.join("|"));a.sort(function(g,h){return g.length-h.length});
d=v(a);for(e=d.next();!e.done;e=d.next())if(e=e.value,!c.exec(e))return e;return a[0]}
;function av(){}
av.prototype.v=function(a,b,c){b=void 0===b?{}:b;c=void 0===c?Zl:c;var d=a.clickTrackingParams,e=this.l,f=!1;f=void 0===f?!1:f;e=void 0===e?!1:e;var g=S("INNERTUBE_CONTEXT");if(g){g=Ub(g);T("web_no_tracking_params_in_shell_killswitch")||delete g.clickTracking;g.client||(g.client={});var h=g.client;"MWEB"===h.clientName&&"AUTOMOTIVE_FORM_FACTOR"!==h.clientFormFactor&&(h.clientFormFactor=S("IS_TABLET")?"LARGE_FORM_FACTOR":"SMALL_FORM_FACTOR");h.screenWidthPoints=window.innerWidth;h.screenHeightPoints=
window.innerHeight;h.screenPixelDensity=Math.round(window.devicePixelRatio||1);h.screenDensityFloat=window.devicePixelRatio||1;h.utcOffsetMinutes=-Math.floor((new Date).getTimezoneOffset());var k=void 0===k?!1:k;im();var l="USER_INTERFACE_THEME_LIGHT";lm(165)?l="USER_INTERFACE_THEME_DARK":lm(174)?l="USER_INTERFACE_THEME_LIGHT":!T("kevlar_legacy_browsers")&&window.matchMedia&&window.matchMedia("(prefers-color-scheme)").matches&&window.matchMedia("(prefers-color-scheme: dark)").matches&&(l="USER_INTERFACE_THEME_DARK");
k=k?l:Nu()||l;h.userInterfaceTheme=k;if(!f){if(k=qm())h.connectionType=k;T("web_log_effective_connection_type")&&(k=rm())&&(g.client.effectiveConnectionType=k)}var n;if(T("web_log_memory_total_kbytes")&&(null==(n=C.navigator)?0:n.deviceMemory)){var p;n=null==(p=C.navigator)?void 0:p.deviceMemory;g.client.memoryTotalKbytes=""+1E6*n}T("web_gcf_hashes_innertube")&&(k=ap())&&(p=k.coldConfigData,n=k.coldHashData,k=k.hotHashData,g.client.configInfo=g.client.configInfo||{},g.client.configInfo.coldConfigData=
p,g.client.configInfo.coldHashData=n,g.client.configInfo.hotHashData=k);p=il(C.location.href);!T("web_populate_internal_geo_killswitch")&&p.internalcountrycode&&(h.internalGeo=p.internalcountrycode);"MWEB"===h.clientName||"WEB"===h.clientName?(h.mainAppWebInfo={graftUrl:C.location.href},T("kevlar_woffle")&&$l.h&&(p=$l.h,h.mainAppWebInfo.pwaInstallabilityStatus=!p.h&&p.i?"PWA_INSTALLABILITY_STATUS_CAN_BE_INSTALLED":"PWA_INSTALLABILITY_STATUS_UNKNOWN"),h.mainAppWebInfo.webDisplayMode=am(),h.mainAppWebInfo.isWebNativeShareAvailable=
navigator&&void 0!==navigator.share):"TVHTML5"===h.clientName&&(!T("web_lr_app_quality_killswitch")&&(p=S("LIVING_ROOM_APP_QUALITY"))&&(h.tvAppInfo=Object.assign(h.tvAppInfo||{},{appQuality:p})),p=S("LIVING_ROOM_CERTIFICATION_SCOPE"))&&(h.tvAppInfo=Object.assign(h.tvAppInfo||{},{certificationScope:p}));if(!T("web_populate_time_zone_itc_killswitch")){b:{if("undefined"!==typeof Intl)try{var r=(new Intl.DateTimeFormat).resolvedOptions().timeZone;break b}catch(ea){}r=void 0}r&&(h.timeZone=r)}(r=S("EXPERIMENTS_TOKEN",
""))?h.experimentsToken=r:delete h.experimentsToken;r=tl();Ou.h||(Ou.h=new Ou);h=Ou.h.h;p=[];n=0;for(var t in h)p[n++]=h[t];g.request=Object.assign({},g.request,{internalExperimentFlags:r,consistencyTokenJars:p});!T("web_prequest_context_killswitch")&&(t=S("INNERTUBE_CONTEXT_PREQUEST_CONTEXT"))&&(g.request.externalPrequestContext=t);r=im();t=lm(58);r=r.get("gsml","");g.user=Object.assign({},g.user);t&&(g.user.enableSafetyMode=t);r&&(g.user.lockedSafetyMode=!0);T("warm_op_csn_cleanup")?e&&(f=mt())&&
(g.clientScreenNonce=f):!f&&(f=mt())&&(g.clientScreenNonce=f);d&&(g.clickTracking={clickTrackingParams:d});if(d=E("yt.mdx.remote.remoteClient_"))g.remoteClient=d;Uu().setLocationOnInnerTubeContext(g);try{var y=ll(),z=y.bid;delete y.bid;g.adSignalsInfo={params:[],bid:z};var x=v(Object.entries(y));for(var J=x.next();!J.done;J=x.next()){var G=v(J.value),R=G.next().value,N=G.next().value;y=R;z=N;d=void 0;null==(d=g.adSignalsInfo.params)||d.push({key:y,value:""+z})}var da;if(T("add_ifa_to_tvh5_requests")&&
"TVHTML5"===(null==(da=g.client)?void 0:da.clientName)){var Ca=S("INNERTUBE_CONTEXT");Ca.adSignalsInfo&&(g.adSignalsInfo.advertisingId=Ca.adSignalsInfo.advertisingId,g.adSignalsInfo.limitAdTracking=Ca.adSignalsInfo.limitAdTracking)}}catch(ea){Us(ea)}x=g}else Us(Error("Error: No InnerTubeContext shell provided in ytconfig.")),x={};x={context:x};if(J=this.i(a)){this.h(x,J,b);var O;b="/youtubei/v1/"+$u(this.j());(J=null==(O=bs(a.commandMetadata,Dk))?void 0:O.apiUrl)&&(b=J);O=b;(b=S("INNERTUBE_HOST_OVERRIDE"))&&
(O=String(b)+String(Cc(O)));b={};T("web_api_key_killswitch")&&(b.key=S("INNERTUBE_API_KEY"));T("json_condensed_response")&&(b.prettyPrint="false");O=jl(O,b||{},!1);a=Object.assign({},{command:a},void 0);a={input:O,ib:wt(O),Ma:x,config:a};a.config.Tb?a.config.Tb.identity=c:a.config.Tb={identity:c};return a}Us(new V("Error: Failed to create Request from Command.",a))};
fa.Object.defineProperties(av.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!1}}});
function bv(){}
w(bv,av);function cv(){}
w(cv,bv);cv.prototype.v=function(){return{input:"/getDatasyncIdsEndpoint",ib:wt("/getDatasyncIdsEndpoint","GET"),Ma:{}}};
cv.prototype.j=function(){return[]};
cv.prototype.i=function(){};
cv.prototype.h=function(){};var dv={},ev=(dv.GET_DATASYNC_IDS=Xu(cv),dv);function fv(a){var b;(b=E("ytcsi."+(a||"")+"data_"))||(b={tick:{},info:{}},D("ytcsi."+(a||"")+"data_",b));return b}
function gv(){var a=fv();a.info||(a.info={});return a.info}
function hv(a){a=fv(a);a.metadata||(a.metadata={});return a.metadata}
function iv(a){a=fv(a);a.tick||(a.tick={});return a.tick}
function jv(a){a=fv(a);if(a.gel){var b=a.gel;b.gelInfos||(b.gelInfos={});b.gelTicks||(b.gelTicks={})}else a.gel={gelTicks:{},gelInfos:{}};return a.gel}
function kv(a){a=jv(a);a.gelInfos||(a.gelInfos={});return a.gelInfos}
function lv(a){var b=fv(a).nonce;b||(b=bt(),fv(a).nonce=b);return b}
;function mv(){var a=E("ytcsi.debug");a||(a=[],D("ytcsi.debug",a),D("ytcsi.reference",{}));return a}
function nv(a){a=a||"";var b=E("ytcsi.reference");b||(mv(),b=E("ytcsi.reference"));if(b[a])return b[a];var c=mv(),d={timerName:a,info:{},tick:{},span:{},jspbInfo:[]};c.push(d);return b[a]=d}
;var X={},ov=(X.auto_search="LATENCY_ACTION_AUTO_SEARCH",X.ad_to_ad="LATENCY_ACTION_AD_TO_AD",X.ad_to_video="LATENCY_ACTION_AD_TO_VIDEO",X["analytics.explore"]="LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE",X.app_startup="LATENCY_ACTION_APP_STARTUP",X["artist.analytics"]="LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS",X["artist.events"]="LATENCY_ACTION_CREATOR_ARTIST_CONCERTS",X["artist.presskit"]="LATENCY_ACTION_CREATOR_ARTIST_PROFILE",X["asset.claimed_videos"]="LATENCY_ACTION_CREATOR_CMS_ASSET_CLAIMED_VIDEOS",
X["asset.composition"]="LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION",X["asset.composition_ownership"]="LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION_OWNERSHIP",X["asset.composition_policy"]="LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION_POLICY",X["asset.embeds"]="LATENCY_ACTION_CREATOR_CMS_ASSET_EMBEDS",X["asset.history"]="LATENCY_ACTION_CREATOR_CMS_ASSET_HISTORY",X["asset.issues"]="LATENCY_ACTION_CREATOR_CMS_ASSET_ISSUES",X["asset.licenses"]="LATENCY_ACTION_CREATOR_CMS_ASSET_LICENSES",X["asset.metadata"]=
"LATENCY_ACTION_CREATOR_CMS_ASSET_METADATA",X["asset.ownership"]="LATENCY_ACTION_CREATOR_CMS_ASSET_OWNERSHIP",X["asset.policy"]="LATENCY_ACTION_CREATOR_CMS_ASSET_POLICY",X["asset.references"]="LATENCY_ACTION_CREATOR_CMS_ASSET_REFERENCES",X["asset.shares"]="LATENCY_ACTION_CREATOR_CMS_ASSET_SHARES",X["asset.sound_recordings"]="LATENCY_ACTION_CREATOR_CMS_ASSET_SOUND_RECORDINGS",X["asset_group.assets"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_ASSETS",X["asset_group.campaigns"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_CAMPAIGNS",
X["asset_group.claimed_videos"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_CLAIMED_VIDEOS",X["asset_group.metadata"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_METADATA",X["song.analytics"]="LATENCY_ACTION_CREATOR_SONG_ANALYTICS",X.browse="LATENCY_ACTION_BROWSE",X.cast_splash="LATENCY_ACTION_CAST_SPLASH",X.channels="LATENCY_ACTION_CHANNELS",X.creator_channel_dashboard="LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD",X["channel.analytics"]="LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS",X["channel.comments"]="LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS",
X["channel.content"]="LATENCY_ACTION_CREATOR_POST_LIST",X["channel.content.promotions"]="LATENCY_ACTION_CREATOR_PROMOTION_LIST",X["channel.copyright"]="LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT",X["channel.editing"]="LATENCY_ACTION_CREATOR_CHANNEL_EDITING",X["channel.monetization"]="LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION",X["channel.music"]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC",X["channel.music_storefront"]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC_STOREFRONT",X["channel.playlists"]="LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS",
X["channel.translations"]="LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS",X["channel.videos"]="LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS",X["channel.live_streaming"]="LATENCY_ACTION_CREATOR_LIVE_STREAMING",X.chips="LATENCY_ACTION_CHIPS",X.commerce_transaction="LATENCY_ACTION_COMMERCE_TRANSACTION",X["dialog.copyright_strikes"]="LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES",X["dialog.video_copyright"]="LATENCY_ACTION_CREATOR_DIALOG_VIDEO_COPYRIGHT",X["dialog.uploads"]="LATENCY_ACTION_CREATOR_DIALOG_UPLOADS",
X.direct_playback="LATENCY_ACTION_DIRECT_PLAYBACK",X.embed="LATENCY_ACTION_EMBED",X.entity_key_serialization_perf="LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF",X.entity_key_deserialization_perf="LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF",X.explore="LATENCY_ACTION_EXPLORE",X.favorites="LATENCY_ACTION_FAVORITES",X.home="LATENCY_ACTION_HOME",X.inboarding="LATENCY_ACTION_INBOARDING",X.library="LATENCY_ACTION_LIBRARY",X.live="LATENCY_ACTION_LIVE",X.live_pagination="LATENCY_ACTION_LIVE_PAGINATION",
X.mini_app="LATENCY_ACTION_MINI_APP_PLAY",X.onboarding="LATENCY_ACTION_ONBOARDING",X.owner="LATENCY_ACTION_CREATOR_CMS_DASHBOARD",X["owner.allowlist"]="LATENCY_ACTION_CREATOR_CMS_ALLOWLIST",X["owner.analytics"]="LATENCY_ACTION_CREATOR_CMS_ANALYTICS",X["owner.art_tracks"]="LATENCY_ACTION_CREATOR_CMS_ART_TRACKS",X["owner.assets"]="LATENCY_ACTION_CREATOR_CMS_ASSETS",X["owner.asset_groups"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUPS",X["owner.bulk"]="LATENCY_ACTION_CREATOR_CMS_BULK_HISTORY",X["owner.campaigns"]=
"LATENCY_ACTION_CREATOR_CMS_CAMPAIGNS",X["owner.channel_invites"]="LATENCY_ACTION_CREATOR_CMS_CHANNEL_INVITES",X["owner.channels"]="LATENCY_ACTION_CREATOR_CMS_CHANNELS",X["owner.claimed_videos"]="LATENCY_ACTION_CREATOR_CMS_CLAIMED_VIDEOS",X["owner.claims"]="LATENCY_ACTION_CREATOR_CMS_MANUAL_CLAIMING",X["owner.claims.manual"]="LATENCY_ACTION_CREATOR_CMS_MANUAL_CLAIMING",X["owner.delivery"]="LATENCY_ACTION_CREATOR_CMS_CONTENT_DELIVERY",X["owner.delivery_templates"]="LATENCY_ACTION_CREATOR_CMS_DELIVERY_TEMPLATES",
X["owner.issues"]="LATENCY_ACTION_CREATOR_CMS_ISSUES",X["owner.licenses"]="LATENCY_ACTION_CREATOR_CMS_LICENSES",X["owner.pitch_music"]="LATENCY_ACTION_CREATOR_CMS_PITCH_MUSIC",X["owner.policies"]="LATENCY_ACTION_CREATOR_CMS_POLICIES",X["owner.releases"]="LATENCY_ACTION_CREATOR_CMS_RELEASES",X["owner.reports"]="LATENCY_ACTION_CREATOR_CMS_REPORTS",X["owner.videos"]="LATENCY_ACTION_CREATOR_CMS_VIDEOS",X.parent_profile_settings="LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS",X.parent_tools_collection="LATENCY_ACTION_PARENT_TOOLS_COLLECTION",
X.parent_tools_dashboard="LATENCY_ACTION_PARENT_TOOLS_DASHBOARD",X.player_att="LATENCY_ACTION_PLAYER_ATTESTATION",X["playlist.videos"]="LATENCY_ACTION_CREATOR_PLAYLIST_VIDEO_LIST",X["post.comments"]="LATENCY_ACTION_CREATOR_POST_COMMENTS",X["post.edit"]="LATENCY_ACTION_CREATOR_POST_EDIT",X.prebuffer="LATENCY_ACTION_PREBUFFER",X.prefetch="LATENCY_ACTION_PREFETCH",X.profile_settings="LATENCY_ACTION_KIDS_PROFILE_SETTINGS",X.profile_switcher="LATENCY_ACTION_LOGIN",X.reel_watch="LATENCY_ACTION_REEL_WATCH",
X.results="LATENCY_ACTION_RESULTS",X["promotion.edit"]="LATENCY_ACTION_CREATOR_PROMOTION_EDIT",X.red="LATENCY_ACTION_PREMIUM_PAGE_GET_BROWSE",X.premium="LATENCY_ACTION_PREMIUM_PAGE_GET_BROWSE",X.search_overview_answer="LATENCY_ACTION_SEARCH_OVERVIEW_ANSWER",X.search_ui="LATENCY_ACTION_SEARCH_UI",X.search_suggest="LATENCY_ACTION_SUGGEST",X.search_zero_state="LATENCY_ACTION_SEARCH_ZERO_STATE",X.secret_code="LATENCY_ACTION_KIDS_SECRET_CODE",X.seek="LATENCY_ACTION_PLAYER_SEEK",X.settings="LATENCY_ACTION_SETTINGS",
X.store="LATENCY_ACTION_STORE",X.tenx="LATENCY_ACTION_TENX",X.video_to_ad="LATENCY_ACTION_VIDEO_TO_AD",X.watch="LATENCY_ACTION_WATCH",X.watch_it_again="LATENCY_ACTION_KIDS_WATCH_IT_AGAIN",X["watch,watch7"]="LATENCY_ACTION_WATCH",X["watch,watch7_html5"]="LATENCY_ACTION_WATCH",X["watch,watch7ad"]="LATENCY_ACTION_WATCH",X["watch,watch7ad_html5"]="LATENCY_ACTION_WATCH",X.wn_comments="LATENCY_ACTION_LOAD_COMMENTS",X.ww_rqs="LATENCY_ACTION_WHO_IS_WATCHING",X["video.analytics"]="LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS",
X["video.claims"]="LATENCY_ACTION_CREATOR_VIDEO_CLAIMS",X["video.comments"]="LATENCY_ACTION_CREATOR_VIDEO_COMMENTS",X["video.copyright"]="LATENCY_ACTION_CREATOR_VIDEO_COPYRIGHT",X["video.edit"]="LATENCY_ACTION_CREATOR_VIDEO_EDIT",X["video.editor"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR",X["video.editor_async"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC",X["video.live_settings"]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS",X["video.live_streaming"]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING",
X["video.monetization"]="LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION",X["video.policy"]="LATENCY_ACTION_CREATOR_VIDEO_POLICY",X["video.rights_management"]="LATENCY_ACTION_CREATOR_VIDEO_RIGHTS_MANAGEMENT",X["video.translations"]="LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS",X.voice_assistant="LATENCY_ACTION_VOICE_ASSISTANT",X.cast_load_by_entity_to_watch="LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH",X.networkless_performance="LATENCY_ACTION_NETWORKLESS_PERFORMANCE",X.gel_compression="LATENCY_ACTION_GEL_COMPRESSION",
X.gel_jspb_serialize="LATENCY_ACTION_GEL_JSPB_SERIALIZE",X);function pv(a,b){hp.call(this,1,arguments);this.timer=b}
w(pv,hp);var qv=new ip("aft-recorded",pv);var rv=C.ytLoggingLatencyUsageStats_||{};D("ytLoggingLatencyUsageStats_",rv);function sv(){this.h=0}
function tv(){sv.h||(sv.h=new sv);return sv.h}
sv.prototype.tick=function(a,b,c,d){uv(this,"tick_"+a+"_"+b)||mn("latencyActionTicked",{tickName:a,clientActionNonce:b},{timestamp:c,cttAuthInfo:d})};
sv.prototype.info=function(a,b,c){var d=Object.keys(a).join("");uv(this,"info_"+d+"_"+b)||(a=Object.assign({},a),a.clientActionNonce=b,mn("latencyActionInfo",a,{cttAuthInfo:c}))};
sv.prototype.jspbInfo=function(){};
sv.prototype.span=function(a,b,c){var d=Object.keys(a).join("");uv(this,"span_"+d+"_"+b)||(a.clientActionNonce=b,mn("latencyActionSpan",a,{cttAuthInfo:c}))};
function uv(a,b){rv[b]=rv[b]||{count:0};var c=rv[b];c.count++;c.time=W();a.h||(a.h=wm(function(){var d=W(),e;for(e in rv)rv[e]&&6E4<d-rv[e].time&&delete rv[e];a&&(a.h=0)},5E3));
return 5<c.count?(6===c.count&&1>1E5*Math.random()&&(c=new V("CSI data exceeded logging limit with key",b.split("_")),0<=b.indexOf("plev")||Vs(c)),!0):!1}
;var vv=window;function wv(){this.timing={};this.clearResourceTimings=function(){};
this.webkitClearResourceTimings=function(){};
this.mozClearResourceTimings=function(){};
this.msClearResourceTimings=function(){};
this.oClearResourceTimings=function(){}}
function xv(){var a;if(T("csi_use_performance_navigation_timing")||T("csi_use_performance_navigation_timing_tvhtml5")){var b,c,d,e=null==Y?void 0:null==(a=Y.getEntriesByType)?void 0:null==(b=a.call(Y,"navigation"))?void 0:null==(c=b[0])?void 0:null==(d=c.toJSON)?void 0:d.call(c);e?(e.requestStart=yv(e.requestStart),e.responseEnd=yv(e.responseEnd),e.redirectStart=yv(e.redirectStart),e.redirectEnd=yv(e.redirectEnd),e.domainLookupEnd=yv(e.domainLookupEnd),e.connectStart=yv(e.connectStart),e.connectEnd=
yv(e.connectEnd),e.responseStart=yv(e.responseStart),e.secureConnectionStart=yv(e.secureConnectionStart),e.domainLookupStart=yv(e.domainLookupStart),e.isPerformanceNavigationTiming=!0,a=e):a=Y.timing}else a=Y.timing;return a}
function yv(a){return Math.round(zv()+a)}
function zv(){return(T("csi_use_time_origin")||T("csi_use_time_origin_tvhtml5"))&&Y.timeOrigin?Math.floor(Y.timeOrigin):Y.timing.navigationStart}
var Y=vv.performance||vv.mozPerformance||vv.msPerformance||vv.webkitPerformance||new wv;var Av=!1,Bv=!1,Cv={'script[name="scheduler/scheduler"]':"sj",'script[name="player/base"]':"pj",'link[rel="preload"][name="player/embed"]':"pej",'link[rel="stylesheet"][name="www-player"]':"pc",'link[rel="stylesheet"][name="player/www-player"]':"pc",'script[name="desktop_polymer/desktop_polymer"]':"dpj",'link[rel="import"][name="desktop_polymer"]':"dph",'script[name="mobile-c3"]':"mcj",'link[rel="stylesheet"][name="mobile-c3"]':"mcc",'script[name="player-plasma-ias-phone/base"]':"mcppj",'script[name="player-plasma-ias-tablet/base"]':"mcptj",
'link[rel="stylesheet"][name="mobile-polymer-player-ias"]':"mcpc",'link[rel="stylesheet"][name="mobile-polymer-player-svg-ias"]':"mcpsc",'script[name="mobile_blazer_core_mod"]':"mbcj",'link[rel="stylesheet"][name="mobile_blazer_css"]':"mbc",'script[name="mobile_blazer_logged_in_users_mod"]':"mbliuj",'script[name="mobile_blazer_logged_out_users_mod"]':"mblouj",'script[name="mobile_blazer_noncore_mod"]':"mbnj","#player_css":"mbpc",'script[name="mobile_blazer_desktopplayer_mod"]':"mbpj",'link[rel="stylesheet"][name="mobile_blazer_tablet_css"]':"mbtc",
'script[name="mobile_blazer_watch_mod"]':"mbwj"};Xa(Y.clearResourceTimings||Y.webkitClearResourceTimings||Y.mozClearResourceTimings||Y.msClearResourceTimings||Y.oClearResourceTimings||Nd,Y);function Dv(a,b){if(!T("web_csi_action_sampling_enabled")||!fv(b).actionDisabled){var c=nv(b||"");ju(c.info,a);a.loadType&&(c=a.loadType,hv(b).loadType=c);ju(kv(b),a);c=lv(b);b=fv(b).cttAuthInfo;tv().info(a,c,b)}}
function Ev(){var a,b,c,d;return(null!=(d=null==Fr().resolve(new zr(Xo))?void 0:null==(a=Yo())?void 0:null==(b=a.loggingHotConfig)?void 0:null==(c=b.csiConfig)?void 0:c.debugTicks)?d:[]).map(function(e){return Object.values(e)[0]})}
function Z(a,b,c){if(!T("web_csi_action_sampling_enabled")||!fv(c).actionDisabled){var d=lv(c),e;if(e=T("web_csi_debug_sample_enabled")&&d){(null==Fr().resolve(new zr(Xo))?0:Yo())&&!Bv&&(Bv=!0,Z("gcfl",W(),c));var f,g,h;e=(null==Fr().resolve(new zr(Xo))?void 0:null==(f=Yo())?void 0:null==(g=f.loggingHotConfig)?void 0:null==(h=g.csiConfig)?void 0:h.debugSampleWeight)||0;if(f=0!==e)b:{f=Ev();if(0<f.length)for(g=0;g<f.length;g++)if(a===f[g]){f=!0;break b}f=!1}if(f){for(g=f=0;g<d.length;g++)f=31*f+d.charCodeAt(g),
g<d.length-1&&(f%=Math.pow(2,47));e=0!==f%1E5%e;fv(c).debugTicksExcludedLogged||(f={},f.debugTicksExcluded=e,Dv(f,c));fv(c).debugTicksExcludedLogged=!0}else e=!1}if(!e){b||"_"===a[0]||(e=a,Y.mark&&(e.startsWith("mark_")||(e="mark_"+e),c&&(e+=" ("+c+")"),Y.mark(e)));e=nv(c||"");e.tick[a]=b||W();if(e.callback&&e.callback[a])for(e=v(e.callback[a]),f=e.next();!f.done;f=e.next())f=f.value,f();e=jv(c);e.gelTicks&&(e.gelTicks[a]=!0);f=iv(c);e=b||W();T("log_repeated_ytcsi_ticks")?a in f||(f[a]=e):f[a]=e;
f=fv(c).cttAuthInfo;"_start"===a?(a=tv(),uv(a,"baseline_"+d)||mn("latencyActionBaselined",{clientActionNonce:d},{timestamp:b,cttAuthInfo:f})):tv().tick(a,d,b,f);Fv(c);return e}}}
function Gv(){var a=document;if("visibilityState"in a)a=a.visibilityState;else{var b=Wq+"VisibilityState";a=b in a?a[b]:void 0}switch(a){case "hidden":return 0;case "visible":return 1;case "prerender":return 2;case "unloaded":return 3;default:return-1}}
function Hv(){function a(f,g,h){g=g.match("_rid")?g.split("_rid")[0]:g;"number"===typeof h&&(h=JSON.stringify(h));f.requestIds?f.requestIds.push({endpoint:g,id:h}):f.requestIds=[{endpoint:g,id:h}]}
for(var b={},c=v(Object.entries(S("TIMING_INFO",{}))),d=c.next();!d.done;d=c.next()){var e=v(d.value);d=e.next().value;e=e.next().value;switch(d){case "GetBrowse_rid":a(b,d,e);break;case "GetGuide_rid":a(b,d,e);break;case "GetHome_rid":a(b,d,e);break;case "GetPlayer_rid":a(b,d,e);break;case "GetSearch_rid":a(b,d,e);break;case "GetSettings_rid":a(b,d,e);break;case "GetTrending_rid":a(b,d,e);break;case "GetWatchNext_rid":a(b,d,e);break;case "yt_red":b.isRedSubscriber=!!e;break;case "yt_ad":b.isMonetized=
!!e}}return b}
function Iv(a,b){a=document.querySelector(a);if(!a)return!1;var c="",d=a.nodeName;"SCRIPT"===d?(c=a.src,c||(c=a.getAttribute("data-timing-href"))&&(c=window.location.protocol+c)):"LINK"===d&&(c=a.href);oc(window)&&a.setAttribute("nonce",oc(window));return c?(a=Y.getEntriesByName(c))&&a[0]&&(a=a[0],c=zv(),Z("rsf_"+b,c+Math.round(a.fetchStart)),Z("rse_"+b,c+Math.round(a.responseEnd)),void 0!==a.transferSize&&0===a.transferSize)?!0:!1:!1}
function Jv(){var a=window.location.protocol,b=Y.getEntriesByType("resource");b=Gb(b,function(c){return 0===c.name.indexOf(a+"//fonts.gstatic.com/s/")});
(b=Ib(b,function(c,d){return d.duration>c.duration?d:c},{duration:0}))&&0<b.startTime&&0<b.responseEnd&&(Z("wffs",yv(b.startTime)),Z("wffe",yv(b.responseEnd)))}
function Kv(a){var b=Lv("aft",a);if(b)return b;b=S((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=b.length,d=0;d<c;d++){var e=Lv(b[d],a);if(e)return e}return NaN}
function Lv(a,b){if(a=iv(b)[a])return"number"===typeof a?a:a[a.length-1]}
function Fv(a){var b=Lv("_start",a),c=Kv(a);b&&c&&!Av&&(np(qv,new pv(Math.round(c-b),a)),Av=!0)}
function Mv(){if(Y.getEntriesByType){var a=Y.getEntriesByType("paint");if(a=Jb(a,function(b){return"first-paint"===b.name}))return yv(a.startTime)}a=Y.timing;
return a.Ce?Math.max(0,a.Ce):0}
;function Nv(a,b){Zk(function(){nv("").info.actionType=a;b&&Vk("TIMING_AFT_KEYS",b);Vk("TIMING_ACTION",a);var c=Hv();0<Object.keys(c).length&&Dv(c);c={isNavigation:!0,actionType:ov[S("TIMING_ACTION")]||"LATENCY_ACTION_UNKNOWN"};var d=S("PREVIOUS_ACTION");d&&(c.previousAction=ov[d]||"LATENCY_ACTION_UNKNOWN");if(d=S("CLIENT_PROTOCOL"))c.httpProtocol=d;if(d=S("CLIENT_TRANSPORT"))c.transportProtocol=d;(d=mt())&&"UNDEFINED_CSN"!==d&&(c.clientScreenNonce=d);d=Gv();if(1===d||-1===d)c.isVisible=!0;hv();gv();
c.loadType="cold";d=gv();var e=xv(),f=zv(),g=S("CSI_START_TIMESTAMP_MILLIS",0);0<g&&!T("embeds_web_enable_csi_start_override_killswitch")&&(f=g);f&&(Z("srt",e.responseStart),1!==d.prerender&&Z("_start",f,void 0));d=Mv();0<d&&Z("fpt",d);d=xv();d.isPerformanceNavigationTiming&&Dv({performanceNavigationTiming:!0},void 0);Z("nreqs",d.requestStart,void 0);Z("nress",d.responseStart,void 0);Z("nrese",d.responseEnd,void 0);0<d.redirectEnd-d.redirectStart&&(Z("nrs",d.redirectStart,void 0),Z("nre",d.redirectEnd,
void 0));0<d.domainLookupEnd-d.domainLookupStart&&(Z("ndnss",d.domainLookupStart,void 0),Z("ndnse",d.domainLookupEnd,void 0));0<d.connectEnd-d.connectStart&&(Z("ntcps",d.connectStart,void 0),Z("ntcpe",d.connectEnd,void 0));d.secureConnectionStart>=zv()&&0<d.connectEnd-d.secureConnectionStart&&(Z("nstcps",d.secureConnectionStart,void 0),Z("ntcpe",d.connectEnd,void 0));Y&&"getEntriesByType"in Y&&Jv();d=[];if(document.querySelector&&Y&&Y.getEntriesByName)for(var h in Cv)Cv.hasOwnProperty(h)&&(e=Cv[h],
Iv(h,e)&&d.push(e));if(0<d.length)for(c.resourceInfo=[],h=v(d),d=h.next();!d.done;d=h.next())c.resourceInfo.push({resourceCache:d.value});Dv(c);c=jv();c.preLoggedGelInfos||(c.preLoggedGelInfos=[]);h=c.preLoggedGelInfos;c=kv();d=void 0;for(e=0;e<h.length;e++)if(f=h[e],f.loadType){d=f.loadType;break}if("cold"===hv().loadType&&("cold"===c.loadType||"cold"===d)){d=iv();e=jv();e=e.gelTicks?e.gelTicks:e.gelTicks={};for(var k in d)if(!(k in e))if("number"===typeof d[k])Z(k,Lv(k));else if(T("log_repeated_ytcsi_ticks"))for(f=
v(d[k]),g=f.next();!g.done;g=f.next())g=g.value,Z(k.slice(1),g);k={};d=!1;h=v(h);for(e=h.next();!e.done;e=h.next())d=e.value,ju(c,d),ju(k,d),d=!0;d&&Dv(k)}D("ytglobal.timingready_",!0);k=S("TIMING_ACTION");E("ytglobal.timingready_")&&k&&Ov()&&Kv()&&Fv()})()}
function Pv(a,b,c){Zk(Dv)(a,b,void 0===c?!1:c)}
function Qv(a,b,c){return Zk(Z)(a,b,c)}
function Ov(){return Zk(function(){return"_start"in iv()})()}
function Rv(){Zk(function(){var a=lv();requestAnimationFrame(function(){setTimeout(function(){a===lv()&&Qv("ol",void 0,void 0)},0)})})()}
var Sv=window;Sv.ytcsi&&(Sv.ytcsi.infoGel=Pv,Sv.ytcsi.tick=Qv);var Tv="tokens consistency mss client_location entities adblock_detection response_received_commands store PLAYER_PRELOAD".split(" "),Uv=["type.googleapis.com/youtube.api.pfiinnertube.YoutubeApiInnertube.BrowseResponse","type.googleapis.com/youtube.api.pfiinnertube.YoutubeApiInnertube.PlayerResponse"];function Vv(a,b,c,d){this.v=a;this.aa=b;this.l=c;this.j=d;this.i=void 0;this.h=new Map;a.Ob||(a.Ob={});a.Ob=Object.assign({},ev,a.Ob)}
function Wv(a,b,c,d){if(void 0!==Vv.h){if(d=Vv.h,a=[a!==d.v,b!==d.aa,c!==d.l,!1,!1,!1,void 0!==d.i],a.some(function(e){return e}))throw new V("InnerTubeTransportService is already initialized",a);
}else Vv.h=new Vv(a,b,c,d)}
function Xv(a){var b={signalServiceEndpoint:{signal:"GET_DATASYNC_IDS"}};var c=void 0===c?Zl:c;var d=Vu(b,a.v);if(!d)return ke(new V("Error: No request builder found for command.",b));var e=d.v(b,void 0,c);return e?(Ju(e.input),new fe(function(f){var g,h,k;return A(function(l){if(1==l.h){h="cors"===(null==(g=e.ib)?void 0:g.mode)?"cors":void 0;if(a.l.ff){var n=e.config,p;n=null==n?void 0:null==(p=n.Tb)?void 0:p.sessionIndex;p=Yl(0,{sessionIndex:n});k=Object.assign({},Wu(h),p);return l.B(2)}return l.yield(Yv(e.config,
h),3)}2!=l.h&&(k=l.i);f(Zv(a,e,k));l.h=0})})):ke(new V("Error: Failed to build request for command.",b))}
function $v(a,b,c){var d;if(b&&!(null==b?0:null==(d=b.sequenceMetaData)?0:d.skipProcessing)&&a.j){d=v(Tv);for(var e=d.next();!e.done;e=d.next())e=e.value,a.j[e]&&a.j[e].handleResponse(b,c)}}
function Zv(a,b,c){var d=void 0===d?function(){}:d;
var e,f,g,h,k,l,n,p,r,t,y,z,x,J,G,R,N,da,Ca,O,ea,ka,pa,Ga,Rg,Sg,rr,sr,tr;return A(function(ha){switch(ha.h){case 1:ha.B(2);break;case 3:if((e=ha.i)&&!e.isExpired())return ha.return(Promise.resolve(e.h()));case 2:if(!(null==(f=b)?0:null==(g=f.Ma)?0:g.context)){ha.B(4);break}h=b.Ma.context;ha.B(5);break;case 5:k=v([]),l=k.next();case 7:if(l.done){ha.B(4);break}n=l.value;return ha.yield(n.jg(h),8);case 8:l=k.next();ha.B(7);break;case 4:if(null==(p=a.i)||!p.ng(b.input,b.Ma)){ha.B(11);break}return ha.yield(a.i.fg(b.input,
b.Ma),12);case 12:return r=ha.i,T("kevlar_process_local_innertube_responses_killswitch")||$v(a,r,b),ha.return(r);case 11:return(z=null==(y=b.config)?void 0:y.lg)&&a.h.has(z)?t=a.h.get(z):(x=JSON.stringify(b.Ma),R=null!=(G=null==(J=b.ib)?void 0:J.headers)?G:{},b.ib=Object.assign({},b.ib,{headers:Object.assign({},R,c)}),N=Object.assign({},b.ib),"POST"===b.ib.method&&(N=Object.assign({},N,{body:x})),(null==(da=b.config)?0:da.Me)&&Qv(b.config.Me),Ca=function(){return a.aa.fetch(b.input,N,b.config)},t=
Ca(),z&&a.h.set(z,t)),ha.yield(t,13);
case 13:if((O=ha.i)&&"error"in O&&(null==(ea=O)?0:null==(ka=ea.error)?0:ka.details))for(pa=O.error.details,Ga=v(pa),Rg=Ga.next();!Rg.done;Rg=Ga.next())Sg=Rg.value,(rr=Sg["@type"])&&-1<Uv.indexOf(rr)&&(delete Sg["@type"],O=Sg);z&&a.h.has(z)&&a.h.delete(z);(null==(sr=b.config)?0:sr.Ne)&&Qv(b.config.Ne);if(O||null==(tr=a.i)||!tr.Xf(b.input,b.Ma)){ha.B(14);break}return ha.yield(a.i.eg(b.input,b.Ma),15);case 15:O=ha.i;case 14:return $v(a,O,b),d(),ha.return(O||void 0)}})}
function Yv(a,b){var c,d,e,f;return A(function(g){if(1==g.h){e=null==(c=a)?void 0:null==(d=c.Tb)?void 0:d.sessionIndex;var h=g.yield;var k=Yl(0,{sessionIndex:e});if(!(k instanceof fe)){var l=new fe(Nd);ge(l,2,k);k=l}return h.call(g,k,2)}f=g.i;return g.return(Promise.resolve(Object.assign({},Wu(b),f)))})}
;var aw=new yr("INNERTUBE_TRANSPORT_TOKEN");function bw(){}
w(bw,bv);bw.prototype.j=function(){return St};
bw.prototype.i=function(a){return bs(a,Mk)||void 0};
bw.prototype.h=function(a,b,c){c=void 0===c?{}:c;b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params);c.botguardResponse&&(a.botguardResponse=c.botguardResponse);c.feature&&(a.clientFeature=c.feature)};
fa.Object.defineProperties(bw.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!0}}});function cw(){}
w(cw,bv);cw.prototype.j=function(){return Tt};
cw.prototype.i=function(a){return bs(a,Lk)||void 0};
cw.prototype.h=function(a,b){b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params)};
fa.Object.defineProperties(cw.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!0}}});function dw(){}
w(dw,bv);dw.prototype.j=function(){return Pt};
dw.prototype.i=function(a){return bs(a,Gk)||void 0};
dw.prototype.h=function(a,b,c){a.feedbackTokens=[];b.feedbackToken&&a.feedbackTokens.push(b.feedbackToken);if(b=b.cpn||c.cpn)a.feedbackContext={cpn:b};a.isFeedbackTokenUnencrypted=!!c.is_feedback_token_unencrypted;a.shouldMerge=!1;c.extra_feedback_tokens&&(a.shouldMerge=!0,a.feedbackTokens=a.feedbackTokens.concat(c.extra_feedback_tokens))};
fa.Object.defineProperties(dw.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!0}}});function ew(){}
w(ew,bv);ew.prototype.j=function(){return Qt};
ew.prototype.i=function(a){return bs(a,Kk)||void 0};
ew.prototype.h=function(a,b){b.params&&(a.params=b.params);b.secondaryParams&&(a.secondaryParams=b.secondaryParams)};function fw(){}
w(fw,bv);fw.prototype.j=function(){return Rt};
fw.prototype.i=function(a){return bs(a,Jk)||void 0};
fw.prototype.h=function(a,b){b.actions&&(a.actions=b.actions);b.params&&(a.params=b.params);b.playlistId&&(a.playlistId=b.playlistId)};function gw(){}
w(gw,bv);gw.prototype.j=function(){return Ot};
gw.prototype.i=function(a){return bs(a,Ik)};
gw.prototype.h=function(a,b,c){c=void 0===c?{}:c;b.serializedShareEntity&&(a.serializedSharedEntity=b.serializedShareEntity);c.includeListId&&(a.includeListId=!0)};function hw(a,b){var c=B.apply(2,arguments);a=void 0===a?0:a;V.call(this,b,c);this.errorType=a;Object.setPrototypeOf(this,this.constructor.prototype)}
w(hw,V);var iw=new yr("NETWORK_SLI_TOKEN");function jw(a){this.h=a}
jw.prototype.fetch=function(a,b,c){var d=this,e;return A(function(f){e=kw(d,a,b);return f.return(fetch(e).then(function(g){return d.handleResponse(g,c)}).catch(function(g){Vs(g);
if((null==c?0:c.ce)&&g instanceof hw&&1===g.errorType)return Promise.reject(g)}))})};
function kw(a,b,c){if(a.h){var d=zc(Ac(5,Kc(b,"key")))||"/UNKNOWN_PATH";a.h.start(d)}a=c;T("wug_networking_gzip_request")&&(a=Pp(c));return new window.Request(b,a)}
jw.prototype.handleResponse=function(a,b){var c=a.text().then(function(d){if((null==b?0:b.we)&&a.ok)return Ag(b.we,d);d=d.replace(")]}'","");if((null==b?0:b.ce)&&d)try{var e=JSON.parse(d)}catch(g){throw new hw(1,"JSON parsing failed after fetch");}var f;return null!=(f=e)?f:JSON.parse(d)});
a.redirected||a.ok?this.h&&this.h.success():(this.h&&this.h.ag(),c=c.then(function(d){Vs(new V("Error: API fetch failed",a.status,a.url,d));return Object.assign({},d,{errorMetadata:{status:a.status}})}));
return c};
jw[xr]=[new zr(iw)];var lw=new yr("NETWORK_MANAGER_TOKEN");var mw;function nw(){var a,b,c;return A(function(d){if(1==d.h)return a=Fr().resolve(aw),a?d.yield(Xv(a),2):(Vs(Error("InnertubeTransportService unavailable in fetchDatasyncIds")),d.return(void 0));if(b=d.i){if(b.errorMetadata)return Vs(Error("Datasync IDs fetch responded with "+b.errorMetadata.status+": "+b.error)),d.return(void 0);c=b.Yf;return d.return(c)}Vs(Error("Network request to get Datasync IDs failed."));return d.return(void 0)})}
;var ow=C.caches,pw;function qw(a){var b=a.indexOf(":");return-1===b?{sd:a}:{sd:a.substring(0,b),datasyncId:a.substring(b+1)}}
function rw(){return A(function(a){if(void 0!==pw)return a.return(pw);pw=new Promise(function(b){var c;return A(function(d){switch(d.h){case 1:return Aa(d,2),d.yield(ow.open("test-only"),4);case 4:return d.yield(ow.delete("test-only"),5);case 5:d.h=3;d.l=0;break;case 2:if(c=Ba(d),c instanceof Error&&"SecurityError"===c.name)return b(!1),d.return();case 3:b("caches"in window),d.h=0}})});
return a.return(pw)})}
function sw(a){var b,c,d,e,f,g,h;A(function(k){if(1==k.h)return k.yield(rw(),2);if(3!=k.h){if(!k.i)return k.return(!1);b=[];return k.yield(ow.keys(),3)}c=k.i;d=v(c);for(e=d.next();!e.done;e=d.next())f=e.value,g=qw(f),h=g.datasyncId,!h||a.includes(h)||b.push(ow.delete(f));return k.return(Promise.all(b).then(function(l){return l.some(function(n){return n})}))})}
function tw(){var a,b,c,d,e,f,g;return A(function(h){if(1==h.h)return h.yield(rw(),2);if(3!=h.h){if(!h.i)return h.return(!1);a=tm("cache contains other");return h.yield(ow.keys(),3)}b=h.i;c=v(b);for(d=c.next();!d.done;d=c.next())if(e=d.value,f=qw(e),(g=f.datasyncId)&&g!==a)return h.return(!0);return h.return(!1)})}
;function uw(){nw().then(function(a){a&&(Co(a),sw(a),Gu(a))})}
function vw(){var a=new Hq;wi.oa(function(){var b,c,d,e;return A(function(f){switch(f.h){case 1:if(T("ytidb_clear_optimizations_killswitch")){f.B(2);break}b=tm("clear");if(b.startsWith("V")&&b.endsWith("||")){var g=[b];Co(g);sw(g);Gu(g);return f.return()}c=Hu();return f.yield(tw(),3);case 3:return d=f.i,f.yield(Do(),4);case 4:if(e=f.i,!c&&!d&&!e)return f.return();case 2:a.wa()?uw():a.h.add("publicytnetworkstatus-online",uw,!0,void 0,void 0),f.h=0}})})}
;function ww(){this.state=1;this.h=null}
m=ww.prototype;m.initialize=function(a,b,c){if(a.program){var d,e=null!=(d=a.interpreterUrl)?d:null;if(a.interpreterSafeScript){var f=a.interpreterSafeScript;f?((f=f.privateDoNotAccessOrElseSafeScriptWrappedValue)?(f=(d=fb())?d.createScript(f):f,d=new pc,d.ud=f,f=d):f=null,d=f):d=null}else d=null!=(f=a.interpreterScript)?f:null;a.interpreterSafeUrl&&(e=wk(a.interpreterSafeUrl).toString());xw(this,d,e,a.program,b,c)}else Vs(Error("Cannot initialize botguard without program"))};
function xw(a,b,c,d,e,f){var g=void 0===g?"trayride":g;c?(a.state=2,Yt(c,function(){window[g]?yw(a,d,g,e):(a.state=3,cu(c),Vs(new V("Unable to load Botguard","from "+c)))},f)):b?(f=Sd("SCRIPT"),b instanceof pc?rc(f,b):f.textContent=b,f.nonce=oc(window),document.head.appendChild(f),document.head.removeChild(f),window[g]?yw(a,d,g,e):(a.state=4,Vs(new V("Unable to load Botguard from JS")))):Vs(new V("Unable to load VM; no url or JS provided"))}
m.isLoading=function(){return 2===this.state};
function yw(a,b,c,d){a.state=5;try{var e=new ii({program:b,le:c,Ke:T("att_web_record_metrics"),Be:"aGIf"});e.bf.then(function(){a.state=6;d&&d(b)});
a.Qc(e)}catch(f){a.state=7,f instanceof Error&&Vs(f)}}
m.invoke=function(a){a=void 0===a?{}:a;return this.Tc()?this.Kd({dd:a}):null};
m.dispose=function(){this.Qc(null);this.state=8};
m.Tc=function(){return!!this.h};
m.Kd=function(a){return this.h.Ed(a)};
m.Qc=function(a){Pc(this.h);this.h=a};var zw=[],Aw=!1;function Bw(){if(!T("disable_biscotti_fetch_for_ad_blocker_detection")&&!T("disable_biscotti_fetch_entirely_for_all_web_clients")&&xt()){var a=S("PLAYER_VARS",{});if("1"!=Rb(a)&&!zt(a)){var b=function(){Aw=!0;"google_ad_status"in window?Vk("DCLKSTAT",1):Vk("DCLKSTAT",2)};
try{Yt("//static.doubleclick.net/instream/ad_status.js",b)}catch(c){}zw.push(wi.oa(function(){if(!(Aw||"google_ad_status"in window)){try{du("//static.doubleclick.net/instream/ad_status.js",b)}catch(c){}Aw=!0;Vk("DCLKSTAT",3)}},5E3))}}}
function Cw(){var a=Number(S("DCLKSTAT",0));return isNaN(a)?0:a}
;function Dw(){var a=E("yt.abuse.playerAttLoader");return a&&["bgvma","bgvmb","bgvmc"].every(function(b){return b in a})?a:null}
;function Ew(){ww.apply(this,arguments)}
w(Ew,ww);Ew.prototype.Qc=function(a){var b;null==(b=Dw())||b.bgvma();a?(b={bgvma:a.dispose.bind(a),bgvmb:a.snapshot.bind(a),bgvmc:a.Ed.bind(a)},D("yt.abuse.playerAttLoader",b),D("yt.abuse.playerAttLoaderRun",function(c){return a.snapshot(c)})):(D("yt.abuse.playerAttLoader",null),D("yt.abuse.playerAttLoaderRun",null))};
Ew.prototype.Tc=function(){return!!Dw()};
Ew.prototype.Kd=function(a){return Dw().bgvmc(a)};function Fw(a){Or.call(this,void 0===a?"document_active":a);var b=this;this.l=10;this.h=new Map;this.transitions=[{from:"document_active",to:"document_disposed_preventable",action:this.D},{from:"document_active",to:"document_disposed",action:this.v},{from:"document_disposed_preventable",to:"document_disposed",action:this.v},{from:"document_disposed_preventable",to:"flush_logs",action:this.m},{from:"document_disposed_preventable",to:"document_active",action:this.i},{from:"document_disposed",to:"flush_logs",
action:this.m},{from:"document_disposed",to:"document_active",action:this.i},{from:"document_disposed",to:"document_disposed",action:function(){}},
{from:"flush_logs",to:"document_active",action:this.i}];window.addEventListener("pagehide",function(c){b.transition("document_disposed",{event:c})});
window.addEventListener("beforeunload",function(c){b.transition("document_disposed_preventable",{event:c})})}
w(Fw,Or);Fw.prototype.D=function(a,b){if(!this.h.get("document_disposed_preventable")){a(null==b?void 0:b.event);var c,d;if((null==b?0:null==(c=b.event)?0:c.defaultPrevented)||(null==b?0:null==(d=b.event)?0:d.returnValue)){b.event.returnValue||(b.event.returnValue=!0);b.event.defaultPrevented||b.event.preventDefault();this.h=new Map;this.transition("document_active");return}}this.h.set("document_disposed_preventable",!0);this.h.get("document_disposed")?this.transition("flush_logs"):this.transition("document_disposed")};
Fw.prototype.v=function(a,b){this.h.get("document_disposed")?this.transition("document_active"):(a(null==b?void 0:b.event),this.h.set("document_disposed",!0),this.transition("flush_logs"))};
Fw.prototype.m=function(a,b){a(null==b?void 0:b.event);this.transition("document_active")};
Fw.prototype.i=function(){this.h=new Map};function Gw(a){Or.call(this,void 0===a?"document_visibility_unknown":a);var b=this;this.transitions=[{from:"document_visibility_unknown",to:"document_visible",action:this.i},{from:"document_visibility_unknown",to:"document_hidden",action:this.h},{from:"document_visibility_unknown",to:"document_foregrounded",action:this.m},{from:"document_visibility_unknown",to:"document_backgrounded",action:this.v},{from:"document_visible",to:"document_hidden",action:this.h},{from:"document_visible",to:"document_foregrounded",
action:this.m},{from:"document_visible",to:"document_visible",action:this.i},{from:"document_foregrounded",to:"document_visible",action:this.i},{from:"document_foregrounded",to:"document_hidden",action:this.h},{from:"document_foregrounded",to:"document_foregrounded",action:this.m},{from:"document_hidden",to:"document_visible",action:this.i},{from:"document_hidden",to:"document_backgrounded",action:this.v},{from:"document_hidden",to:"document_hidden",action:this.h},{from:"document_backgrounded",to:"document_hidden",
action:this.h},{from:"document_backgrounded",to:"document_backgrounded",action:this.v},{from:"document_backgrounded",to:"document_visible",action:this.i}];document.addEventListener("visibilitychange",function(c){"visible"===document.visibilityState?b.transition("document_visible",{event:c}):b.transition("document_hidden",{event:c})});
T("visibility_lifecycles_dynamic_backgrounding")&&(window.addEventListener("blur",function(c){b.transition("document_backgrounded",{event:c})}),window.addEventListener("focus",function(c){b.transition("document_foregrounded",{event:c})}))}
w(Gw,Or);Gw.prototype.i=function(a,b){a(null==b?void 0:b.event);T("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_foregrounded")};
Gw.prototype.h=function(a,b){a(null==b?void 0:b.event);T("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_backgrounded")};
Gw.prototype.v=function(a,b){a(null==b?void 0:b.event)};
Gw.prototype.m=function(a,b){a(null==b?void 0:b.event)};function Hw(){this.l=new Fw;this.v=new Gw}
Hw.prototype.install=function(){var a=B.apply(0,arguments),b=this;a.forEach(function(c){b.l.install(c)});
a.forEach(function(c){b.v.install(c)})};function Iw(){this.l=[];this.i=new Map;this.h=new Map;this.j=new Set}
Iw.prototype.clickCommand=function(a,b,c){var d=a.clickTrackingParams;c=void 0===c?0:c;if(d)if(c=mt(void 0===c?0:c)){a=this.client;d=new et({trackingParams:d});var e=void 0;if(T("no_client_ve_attach_unless_shown")){var f=Bu(d,c);xu.set(f,!0);Cu(d,c)}e=e||"INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK";f=Au({cttAuthInfo:ot(c)||void 0},c);d={csn:c,ve:d.getAsJson(),gestureType:e};b&&(d.clientData=b);"UNDEFINED_CSN"===c?Du("visualElementGestured",f,d):a?Ns("visualElementGestured",d,a,f):mn("visualElementGestured",
d,f);b=!0}else b=!1;else b=!1;return b};
Iw.prototype.stateChanged=function(a,b,c){this.visualElementStateChanged(new et({trackingParams:a}),b,void 0===c?0:c)};
Iw.prototype.visualElementStateChanged=function(a,b,c){c=void 0===c?0:c;if(0===c&&this.j.has(c))this.l.push([a,b]);else{var d=c;d=void 0===d?0:d;c=mt(d);a||(a=(a=jt(void 0===d?0:d))?new et({veType:a,youtubeData:void 0,jspbYoutubeData:void 0}):null);var e=a;c&&e&&(a=this.client,d=Au({cttAuthInfo:ot(c)||void 0},c),b={csn:c,ve:e.getAsJson(),clientData:b},"UNDEFINED_CSN"===c?Du("visualElementStateChanged",d,b):a?Ns("visualElementStateChanged",b,a,d):mn("visualElementStateChanged",b,d))}};
function Jw(a,b){if(void 0===b)for(var c=lt(),d=0;d<c.length;d++)void 0!==c[d]&&Jw(a,c[d]);else a.i.forEach(function(e,f){(f=a.h.get(f))&&zu(a.client,b,f,e)}),a.i.clear(),a.h.clear()}
;function Kw(){Hw.call(this);var a={};this.install((a.document_disposed={callback:this.h},a));T("combine_ve_grafts")&&(a={},this.install((a.document_disposed={callback:this.i},a)));a={};this.install((a.flush_logs={callback:this.j},a))}
w(Kw,Hw);Kw.prototype.j=function(){mn("finalPayload",{csn:mt()})};
Kw.prototype.h=function(){Zs($s)};
Kw.prototype.i=function(){var a=Jw;Iw.h||(Iw.h=new Iw);a(Iw.h)};function Lw(){}
function Mw(){var a=E("ytglobal.storage_");a||(a=new Lw,D("ytglobal.storage_",a));return a}
Lw.prototype.estimate=function(){var a,b,c;return A(function(d){a=navigator;return(null==(b=a.storage)?0:b.estimate)?d.return(a.storage.estimate()):(null==(c=a.webkitTemporaryStorage)?0:c.queryUsageAndQuota)?d.return(Nw()):d.return()})};
function Nw(){var a=navigator;return new Promise(function(b,c){var d;null!=(d=a.webkitTemporaryStorage)&&d.queryUsageAndQuota?a.webkitTemporaryStorage.queryUsageAndQuota(function(e,f){b({usage:e,quota:f})},function(e){c(e)}):c(Error("webkitTemporaryStorage is not supported."))})}
D("ytglobal.storageClass_",Lw);function kn(a,b){var c=this;this.handleError=a;this.h=b;this.i=!1;void 0===self.document||self.addEventListener("beforeunload",function(){c.i=!0});
this.j=Math.random()<=U("ytidb_transaction_ended_event_rate_limit_session",.2)}
kn.prototype.Jb=function(a){this.handleError(a)};
kn.prototype.logEvent=function(a,b){switch(a){case "IDB_DATA_CORRUPTED":T("idb_data_corrupted_killswitch")||this.h("idbDataCorrupted",b);break;case "IDB_UNEXPECTEDLY_CLOSED":this.h("idbUnexpectedlyClosed",b);break;case "IS_SUPPORTED_COMPLETED":T("idb_is_supported_completed_killswitch")||this.h("idbIsSupportedCompleted",b);break;case "QUOTA_EXCEEDED":Ow(this,b);break;case "TRANSACTION_ENDED":this.j&&Math.random()<=U("ytidb_transaction_ended_event_rate_limit_transaction",.1)&&this.h("idbTransactionEnded",
b);break;case "TRANSACTION_UNEXPECTEDLY_ABORTED":a=Object.assign({},b,{hasWindowUnloaded:this.i}),this.h("idbTransactionAborted",a)}};
function Ow(a,b){Mw().estimate().then(function(c){c=Object.assign({},b,{isSw:void 0===self.document,isIframe:self!==self.top,deviceStorageUsageMbytes:Pw(null==c?void 0:c.usage),deviceStorageQuotaMbytes:Pw(null==c?void 0:c.quota)});a.h("idbQuotaExceeded",c)})}
function Pw(a){return"undefined"===typeof a?"-1":String(Math.ceil(a/1048576))}
;function Qw(){this.i=[];this.isReady=!1;this.j={};var a=this.h=new Mt(!!S("WIDGET_ID_ENFORCE")),b=this.Je.bind(this);a.l=b;a.m=null;this.h.channel="widget";if(a=S("WIDGET_ID"))this.h.sessionId=a}
m=Qw.prototype;m.Je=function(a,b,c){"addEventListener"===a&&b?this.Dc(b[0],c):this.Wc(a,b,c)};
m.Wc=function(){};
m.xc=function(a){var b=this;return function(c){return b.sendMessage(a,c)}};
m.Dc=function(a,b){this.j[a]||"onReady"===a||(this.addEventListener(a,this.xc(a,b)),this.j[a]=!0)};
m.addEventListener=function(){};
m.ge=function(){this.isReady=!0;this.sendMessage("initialDelivery",this.Ac());this.sendMessage("onReady");Fb(this.i,this.Bd,this);this.i=[]};
m.Ac=function(){return null};
function Rw(a,b){a.sendMessage("infoDelivery",b)}
m.Bd=function(a){this.isReady?this.h.sendMessage(a):this.i.push(a)};
m.sendMessage=function(a,b){this.Bd({event:a,info:void 0===b?null:b})};
m.dispose=function(){this.h=null};var Sw={},Tw=(Sw["api.invalidparam"]=2,Sw.auth=150,Sw["drm.auth"]=150,Sw["heartbeat.net"]=150,Sw["heartbeat.servererror"]=150,Sw["heartbeat.stop"]=150,Sw["html5.unsupportedads"]=5,Sw["fmt.noneavailable"]=5,Sw["fmt.decode"]=5,Sw["fmt.unplayable"]=5,Sw["html5.missingapi"]=5,Sw["html5.unsupportedlive"]=5,Sw["drm.unavailable"]=5,Sw["mrm.blocked"]=151,Sw);var Uw=new Set("endSeconds startSeconds mediaContentUrl suggestedQuality videoId rct rctn".split(" "));function Vw(a){return(0===a.search("cue")||0===a.search("load"))&&"loadModule"!==a}
function Ww(a,b,c){if("string"===typeof a)return{videoId:a,startSeconds:b,suggestedQuality:c};b={};c=v(Uw);for(var d=c.next();!d.done;d=c.next())d=d.value,a[d]&&(b[d]=a[d]);return b}
function Xw(a,b,c,d){if(Ra(a)&&!Array.isArray(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};"string"===typeof a&&16===a.length?b.list="PL"+a:b.playlist=a;return b}
;function Yw(a){Qw.call(this);this.listeners=[];this.l=!1;this.api=a;this.addEventListener("onReady",this.onReady.bind(this));this.addEventListener("onVideoProgress",this.We.bind(this));this.addEventListener("onVolumeChange",this.Xe.bind(this));this.addEventListener("onApiChange",this.Re.bind(this));this.addEventListener("onPlaybackQualityChange",this.Te.bind(this));this.addEventListener("onPlaybackRateChange",this.Ue.bind(this));this.addEventListener("onStateChange",this.Ve.bind(this));this.addEventListener("onWebglSettingsChanged",
this.Ye.bind(this))}
w(Yw,Qw);m=Yw.prototype;
m.Wc=function(a,b,c){if(this.api.isExternalMethodAvailable(a,c)){b=b||[];if(0<b.length&&Vw(a)){var d=b;if(Ra(d[0])&&!Array.isArray(d[0]))var e=d[0];else switch(e={},a){case "loadVideoById":case "cueVideoById":e=Ww(d[0],void 0!==d[1]?Number(d[1]):void 0,d[2]);break;case "loadVideoByUrl":case "cueVideoByUrl":e=d[0];"string"===typeof e&&(e={mediaContentUrl:e,startSeconds:void 0!==d[1]?Number(d[1]):void 0,suggestedQuality:d[2]});b:{if((d=e.mediaContentUrl)&&(d=/\/([ve]|embed)\/([^#?]+)/.exec(d))&&d[2]){d=
d[2];break b}d=null}e.videoId=d;e=Ww(e);break;case "loadPlaylist":case "cuePlaylist":e=Xw(d[0],d[1],d[2],d[3])}b.length=1;b[0]=e}this.api.handleExternalCall(a,b,c);Vw(a)&&Rw(this,this.Ac())}};
m.Dc=function(a,b){"onReady"===a?this.api.logApiCall(a+" invocation",b):"onError"===a&&this.l&&(this.api.logApiCall(a+" invocation",b,this.errorCode),this.errorCode=void 0);this.api.logApiCall(a+" registration",b);Qw.prototype.Dc.call(this,a,b)};
m.xc=function(a,b){var c=this,d=Qw.prototype.xc.call(this,a,b);return function(e){"onError"===a?c.api.logApiCall(a+" invocation",b,e):c.api.logApiCall(a+" invocation",b);d(e)}};
m.onReady=function(){var a=this.h,b=this.ge.bind(this);a.h=b;a=this.api.getVideoData();if(!a.isPlayable){this.l=!0;a=a.errorCode;var c=void 0===c?5:c;this.errorCode=a?Tw[a]||c:c;this.sendMessage("onError",this.errorCode.toString())}};
m.addEventListener=function(a,b){this.listeners.push({eventType:a,listener:b});this.api.addEventListener(a,b)};
m.Ac=function(){if(!this.api)return null;var a=this.api.getApiInterface();Kb(a,"getVideoData");for(var b={apiInterface:a},c=0,d=a.length;c<d;c++){var e=a[c];if(0===e.search("get")||0===e.search("is")){var f=0;0===e.search("get")?f=3:0===e.search("is")&&(f=2);f=e.charAt(f).toLowerCase()+e.substr(f+1);try{var g=this.api[e]();b[f]=g}catch(h){}}}b.videoData=this.api.getVideoData();b.currentTimeLastUpdated_=Date.now()/1E3;return b};
m.Ve=function(a){a={playerState:a,currentTime:this.api.getCurrentTime(),duration:this.api.getDuration(),videoData:this.api.getVideoData(),videoStartBytes:0,videoBytesTotal:this.api.getVideoBytesTotal(),videoLoadedFraction:this.api.getVideoLoadedFraction(),playbackQuality:this.api.getPlaybackQuality(),availableQualityLevels:this.api.getAvailableQualityLevels(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getVideoUrl&&
(a.videoUrl=this.api.getVideoUrl());this.api.getVideoContentRect&&(a.videoContentRect=this.api.getVideoContentRect());this.api.getProgressState&&(a.progressState=this.api.getProgressState());this.api.getPlaylist&&(a.playlist=this.api.getPlaylist());this.api.getPlaylistIndex&&(a.playlistIndex=this.api.getPlaylistIndex());this.api.getStoryboardFormat&&(a.storyboardFormat=this.api.getStoryboardFormat());Rw(this,a)};
m.Te=function(a){Rw(this,{playbackQuality:a})};
m.Ue=function(a){Rw(this,{playbackRate:a})};
m.Re=function(){for(var a=this.api.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.api.getOptions(e);a.join(", ");b[e]={options:f};for(var g=0,h=f.length;g<h;g++){var k=f[g],l=this.api.getOption(e,k);b[e][k]=l}}this.sendMessage("apiInfoDelivery",b)};
m.Xe=function(){Rw(this,{muted:this.api.isMuted(),volume:this.api.getVolume()})};
m.We=function(a){a={currentTime:a,videoBytesLoaded:this.api.getVideoBytesLoaded(),videoLoadedFraction:this.api.getVideoLoadedFraction(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getProgressState&&(a.progressState=this.api.getProgressState());Rw(this,a)};
m.Ye=function(){var a={sphericalProperties:this.api.getSphericalProperties()};Rw(this,a)};
m.dispose=function(){Qw.prototype.dispose.call(this);for(var a=0;a<this.listeners.length;a++){var b=this.listeners[a];this.api.removeEventListener(b.eventType,b.listener)}this.listeners=[]};function Zw(a){H.call(this);this.h={};this.started=!1;this.connection=a;this.connection.subscribe("command",this.wd,this)}
w(Zw,H);m=Zw.prototype;m.start=function(){this.started||this.Z()||(this.started=!0,this.connection.jb("RECEIVING"))};
m.jb=function(a,b){this.started&&!this.Z()&&this.connection.jb(a,b)};
m.wd=function(a,b,c){if(this.started&&!this.Z()){var d=b||{};switch(a){case "addEventListener":"string"===typeof d.event&&this.addListener(d.event);break;case "removeEventListener":"string"===typeof d.event&&this.removeListener(d.event);break;default:this.api.isReady()&&this.api.isExternalMethodAvailable(a,c||null)&&(b=$w(a,b||{}),c=this.api.handleExternalCall(a,b,c||null),(c=ax(a,c))&&this.jb(a,c))}}};
m.addListener=function(a){if(!(a in this.h)){var b=this.Se.bind(this,a);this.h[a]=b;this.addEventListener(a,b)}};
m.Se=function(a,b){this.started&&!this.Z()&&this.connection.jb(a,this.zc(a,b))};
m.zc=function(a,b){if(null!=b)return{value:b}};
m.removeListener=function(a){a in this.h&&(this.removeEventListener(a,this.h[a]),delete this.h[a])};
m.S=function(){this.connection.unsubscribe("command",this.wd,this);this.connection=null;for(var a in this.h)this.h.hasOwnProperty(a)&&this.removeListener(a);H.prototype.S.call(this)};function bx(a,b){Zw.call(this,b);this.api=a;this.start()}
w(bx,Zw);bx.prototype.addEventListener=function(a,b){this.api.addEventListener(a,b)};
bx.prototype.removeEventListener=function(a,b){this.api.removeEventListener(a,b)};
function $w(a,b){switch(a){case "loadVideoById":return a=Ww(b),[a];case "cueVideoById":return a=Ww(b),[a];case "loadVideoByPlayerVars":return[b];case "cueVideoByPlayerVars":return[b];case "loadPlaylist":return a=Xw(b),[a];case "cuePlaylist":return a=Xw(b),[a];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];case "setLoop":return[b.loopPlaylists];
case "setShuffle":return[b.shufflePlaylist];case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey,b.ctrlKey,b.altKey,b.metaKey,b.key,b.code]}return[]}
function ax(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
bx.prototype.zc=function(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}return Zw.prototype.zc.call(this,a,b)};
bx.prototype.S=function(){Zw.prototype.S.call(this);delete this.api};function cx(a,b,c){ou.call(this);this.j=a;this.i=b;this.id=c}
w(cx,ou);cx.prototype.jb=function(a,b){this.Z()||this.j.jb(this.i,this.id,a,b)};
cx.prototype.S=function(){this.i=this.j=null;ou.prototype.S.call(this)};function dx(a,b,c){H.call(this);this.h=a;this.origin=c;this.i=br(window,"message",this.j.bind(this));this.connection=new cx(this,a,b);Rc(this,this.connection)}
w(dx,H);dx.prototype.jb=function(a,b,c,d){this.Z()||a!==this.h||(a={id:b,command:c},d&&(a.data=d),this.h.postMessage(JSON.stringify(a),this.origin))};
dx.prototype.j=function(a){if(!this.Z()&&a.origin===this.origin){var b=a.data;if("string"===typeof b){try{b=JSON.parse(b)}catch(d){return}if(b.command){var c=this.connection;c.Z()||c.l("command",b.command,b.data,a.origin)}}}};
dx.prototype.S=function(){dr(this.i);this.h=null;H.prototype.S.call(this)};var ex=new Ew;function fx(){return ex.Tc()}
function gx(a){a=void 0===a?{}:a;return ex.invoke(a)}
;function hx(a,b,c,d,e){H.call(this);var f=this;this.A=b;this.webPlayerContextConfig=d;this.qc=e;this.Pa=!1;this.api={};this.ga=this.m=null;this.V=new L;this.h={};this.ba=this.ta=this.elementId=this.Za=this.config=null;this.Y=!1;this.j=this.D=null;this.Ba={};this.sc=["onReady"];this.lastError=null;this.Qb=NaN;this.R={};this.ea=0;this.i=this.l=a;Rc(this,this.V);ix(this);c?this.ea=setTimeout(function(){f.loadNewVideoConfig(c)},0):d&&(jx(this),kx(this))}
w(hx,H);m=hx.prototype;m.getId=function(){return this.A};
m.loadNewVideoConfig=function(a){if(!this.Z()){this.ea&&(clearTimeout(this.ea),this.ea=0);var b=a||{};b instanceof Nt||(b=new Nt(b));this.config=b;this.setConfig(a);kx(this);this.isReady()&&lx(this)}};
function jx(a){var b;a.webPlayerContextConfig?b=a.webPlayerContextConfig.rootElementId:b=a.config.attrs.id;a.elementId=b||a.elementId;"video-player"===a.elementId&&(a.elementId=a.A,a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.A:a.config.attrs.id=a.A);var c;(null==(c=a.i)?void 0:c.id)===a.elementId&&(a.elementId+="-player",a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.elementId:a.config.attrs.id=a.elementId)}
m.setConfig=function(a){this.Za=a;this.config=mx(a);jx(this);if(!this.ta){var b;this.ta=nx(this,(null==(b=this.config.args)?void 0:b.jsapicallback)||"onYouTubePlayerReady")}this.config.args?this.config.args.jsapicallback=null:this.config.args={jsapicallback:null};var c;if(null==(c=this.config)?0:c.attrs)a=this.config.attrs,(b=a.width)&&this.i&&(this.i.style.width=qi(Number(b)||b)),(a=a.height)&&this.i&&(this.i.style.height=qi(Number(a)||a))};
function lx(a){if(a.config&&!0!==a.config.loaded)if(a.config.loaded=!0,!a.config.args||"0"!==a.config.args.autoplay&&0!==a.config.args.autoplay&&!1!==a.config.args.autoplay){var b;a.api.loadVideoByPlayerVars(null!=(b=a.config.args)?b:null)}else a.api.cueVideoByPlayerVars(a.config.args)}
function ox(a){var b=!0,c=px(a);c&&a.config&&(b=c.dataset.version===qx(a));return b&&!!E("yt.player.Application.create")}
function kx(a){if(!a.Z()&&!a.Y){var b=ox(a);if(b&&"html5"===(px(a)?"html5":null))a.ba="html5",a.isReady()||rx(a);else if(sx(a),a.ba="html5",b&&a.j&&a.l)a.l.appendChild(a.j),rx(a);else{a.config&&(a.config.loaded=!0);var c=!1;a.D=function(){c=!0;var d=tx(a,"player_bootstrap_method")?E("yt.player.Application.createAlternate")||E("yt.player.Application.create"):E("yt.player.Application.create");var e=a.config?mx(a.config):void 0;d&&d(a.l,e,a.webPlayerContextConfig,a.qc);rx(a)};
a.Y=!0;b?a.D():(Yt(qx(a),a.D),(b=ux(a))&&fu(b),vx(a)&&!c&&D("yt.player.Application.create",null))}}}
function px(a){var b=Rd(a.elementId);!b&&a.i&&a.i.querySelector&&(b=a.i.querySelector("#"+a.elementId));return b}
function rx(a){if(!a.Z()){var b=px(a),c=!1;b&&b.getApiInterface&&b.getApiInterface()&&(c=!0);if(c){a.Y=!1;if(!tx(a,"html5_remove_not_servable_check_killswitch")){var d;if((null==b?0:b.isNotServable)&&a.config&&(null==b?0:b.isNotServable(null==(d=a.config.args)?void 0:d.video_id)))return}wx(a)}else a.Qb=setTimeout(function(){rx(a)},50)}}
function wx(a){ix(a);a.Pa=!0;var b=px(a);if(b){a.m=xx(a,b,"addEventListener");a.ga=xx(a,b,"removeEventListener");var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=a.api,e=0;e<c.length;e++){var f=c[e];d[f]||(d[f]=xx(a,b,f))}}for(var g in a.h)a.h.hasOwnProperty(g)&&a.m&&a.m(g,a.h[g]);lx(a);a.ta&&a.ta(a.api);a.V.Ya("onReady",a.api)}
function xx(a,b,c){var d=b[c];return function(){var e=B.apply(0,arguments);try{return a.lastError=null,d.apply(b,e)}catch(f){if("sendAbandonmentPing"!==c)throw f.params=c,a.lastError=f,e=new V("PlayerProxy error in method call",{error:f,method:c,playerId:a.A}),e.level="WARNING",e;}}}
function ix(a){a.Pa=!1;if(a.ga)for(var b in a.h)a.h.hasOwnProperty(b)&&a.ga(b,a.h[b]);for(var c in a.R)a.R.hasOwnProperty(c)&&clearTimeout(Number(c));a.R={};a.m=null;a.ga=null;b=a.api;for(var d in b)b.hasOwnProperty(d)&&(b[d]=null);b.addEventListener=function(e,f){a.addEventListener(e,f)};
b.removeEventListener=function(e,f){a.removeEventListener(e,f)};
b.destroy=function(){a.dispose()};
b.getLastError=function(){return a.getLastError()};
b.getPlayerType=function(){return a.getPlayerType()};
b.getCurrentVideoConfig=function(){return a.Za};
b.loadNewVideoConfig=function(e){a.loadNewVideoConfig(e)};
b.isReady=function(){return a.isReady()}}
m.isReady=function(){return this.Pa};
m.addEventListener=function(a,b){var c=this,d=nx(this,b);d&&(0<=Eb(this.sc,a)||this.h[a]||(b=yx(this,a),this.m&&this.m(a,b)),this.V.subscribe(a,d),"onReady"===a&&this.isReady()&&setTimeout(function(){d(c.api)},0))};
m.removeEventListener=function(a,b){this.Z()||(b=nx(this,b))&&this.V.unsubscribe(a,b)};
function nx(a,b){var c=b;if("string"===typeof b){if(a.Ba[b])return a.Ba[b];c=function(){var d=B.apply(0,arguments),e=E(b);if(e)try{e.apply(C,d)}catch(f){throw d=new V("PlayerProxy error when executing callback",{error:f}),d.level="ERROR",d;}};
a.Ba[b]=c}return c?c:null}
function yx(a,b){function c(d){var e=setTimeout(function(){if(!a.Z()){try{a.V.Ya(b,null!=d?d:void 0)}catch(h){var f=new V("PlayerProxy error when creating global callback",{error:h.message,event:b,playerId:a.A,data:d,originalStack:h.stack});f.level="WARNING";throw f;}f=a.R;var g=String(e);g in f&&delete f[g]}},0);
Qb(a.R,String(e))}
return a.h[b]=c}
m.getPlayerType=function(){return this.ba||(px(this)?"html5":null)};
m.getLastError=function(){return this.lastError};
function sx(a){a.cancel();ix(a);a.ba=null;a.config&&(a.config.loaded=!1);var b=px(a);b&&(ox(a)||!vx(a)?a.j=b:(b&&b.destroy&&b.destroy(),a.j=null));if(a.l)for(a=a.l;b=a.firstChild;)a.removeChild(b)}
m.cancel=function(){this.D&&du(qx(this),this.D);clearTimeout(this.Qb);this.Y=!1};
m.S=function(){sx(this);if(this.j&&this.config&&this.j.destroy)try{this.j.destroy()}catch(b){var a=new V("PlayerProxy error during disposal",{error:b});a.level="ERROR";throw a;}this.Ba=null;for(a in this.h)this.h.hasOwnProperty(a)&&delete this.h[a];this.Za=this.config=this.api=null;delete this.l;delete this.i;H.prototype.S.call(this)};
function vx(a){var b,c;a=null==(b=a.config)?void 0:null==(c=b.args)?void 0:c.fflags;return!!a&&-1!==a.indexOf("player_destroy_old_version=true")}
function qx(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.jsUrl:(a=a.config.assets)?a.js:""}
function ux(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.cssUrl:(a=a.config.assets)?a.css:""}
function tx(a,b){if(a.webPlayerContextConfig)var c=a.webPlayerContextConfig.serializedExperimentFlags;else{var d;if(null==(d=a.config)?0:d.args)c=a.config.args.fflags}return(c||"").split("&").includes(b+"=true")}
function mx(a){for(var b={},c=v(Object.keys(a)),d=c.next();!d.done;d=c.next()){d=d.value;var e=a[d];b[d]="object"===typeof e?Tb(e):e}return b}
;var zx={},Ax="player_uid_"+(1E9*Math.random()>>>0);function Bx(a,b){var c="player",d=!1;d=void 0===d?!0:d;c="string"===typeof c?Rd(c):c;var e=Ax+"_"+Sa(c),f=zx[e];if(f&&d)return Cx(a,b)?f.api.loadVideoByPlayerVars(a.args||null):f.loadNewVideoConfig(a),f.api;f=new hx(c,e,a,b,void 0);zx[e]=f;f.addOnDisposeCallback(function(){delete zx[f.getId()]});
return f.api}
function Cx(a,b){return b&&b.serializedExperimentFlags?b.serializedExperimentFlags.includes("web_player_remove_playerproxy=true"):a&&a.args&&a.args.fflags?a.args.fflags.includes("web_player_remove_playerproxy=true"):!1}
;var Dx=null,Ex=null,Fx=null;
function Gx(){Rv();var a=im(),b=lm(119),c=1<window.devicePixelRatio;if(document.body&&Gi(document.body,"exp-invert-logo"))if(c&&!Gi(document.body,"inverted-hdpi")){var d=document.body;if(d.classList)d.classList.add("inverted-hdpi");else if(!Gi(d,"inverted-hdpi")){var e=Ei(d);Fi(d,e+(0<e.length?" inverted-hdpi":"inverted-hdpi"))}}else!c&&Gi(document.body,"inverted-hdpi")&&Hi();if(b!=c){b="f"+(Math.floor(119/31)+1);d=mm(b)||0;d=c?d|67108864:d&-67108865;0===d?delete fm[b]:(c=d.toString(16),fm[b]=c.toString());
c=!0;T("web_secure_pref_cookie_killswitch")&&(c=!1);b=a.h;d=[];for(f in fm)fm.hasOwnProperty(f)&&d.push(f+"="+encodeURIComponent(String(fm[f])));var f=d.join("&");bm(b,f,63072E3,a.i,c)}}
function Hx(){Ix()}
function Jx(){Qv("ep_init_pr");Ix()}
function Ix(){var a=Dx.getVideoData(1);a=a.title?a.title+" - YouTube":"YouTube";document.title!==a&&(document.title=a)}
function Kx(){Dx&&Dx.sendAbandonmentPing&&Dx.sendAbandonmentPing();S("PL_ATT")&&ex.dispose();for(var a=wi,b=0,c=zw.length;b<c;b++)a.pa(zw[b]);zw.length=0;cu("//static.doubleclick.net/instream/ad_status.js");Aw=!1;Vk("DCLKSTAT",0);Qc(Fx,Ex);Dx&&(Dx.removeEventListener("onVideoDataChange",Hx),Dx.destroy())}
;D("yt.setConfig",Vk);D("yt.config.set",Vk);D("yt.setMsg",Vt);D("yt.msgs.set",Vt);D("yt.logging.errors.log",Us);
D("writeEmbed",function(){var a=S("PLAYER_CONFIG");if(!a){var b=S("PLAYER_VARS");b&&(a={args:b})}Lu(!0);"gvn"===a.args.ps&&(document.body.style.backgroundColor="transparent");a.attrs||(a.attrs={width:"100%",height:"100%",id:"video-player"});var c=document.referrer;b=S("POST_MESSAGE_ORIGIN");window!==window.top&&c&&c!==document.URL&&(a.args.loaderUrl=c);Nv("embed",["ol"]);c=S("WEB_PLAYER_CONTEXT_CONFIGS").WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER;if(!c.serializedForcedExperimentIds){var d=il(window.location.href);
d.forced_experiments&&(c.serializedForcedExperimentIds=d.forced_experiments)}var e;(null==(e=a.args)?0:e.autoplay)&&Nv("watch",["pbs","pbu","pbp"]);Dx=Bx(a,c);Dx.addEventListener("onVideoDataChange",Hx);Dx.addEventListener("onReady",Jx);a=S("POST_MESSAGE_ID","player");S("ENABLE_JS_API")?Fx=new Yw(Dx):S("ENABLE_POST_API")&&"string"===typeof a&&"string"===typeof b&&(Ex=new dx(window.parent,a,b),Fx=new bx(Dx,Ex.connection));Bw();T("ytidb_create_logger_embed_killswitch")||jn();a={};Kw.h||(Kw.h=new Kw);
Kw.h.install((a.flush_logs={callback:function(){As()}},a));
Tq();T("ytidb_clear_embedded_player")&&wi.oa(function(){var f,g;if(!mw){var h=Fr();Br(h,{lc:lw,Id:jw});var k={cd:{feedbackEndpoint:Xu(dw),modifyChannelNotificationPreferenceEndpoint:Xu(ew),playlistEditEndpoint:Xu(fw),subscribeEndpoint:Xu(bw),unsubscribeEndpoint:Xu(cw),webPlayerShareEntityServiceEndpoint:Xu(gw)}},l=Uu(),n={};l&&(n.client_location=l);void 0===f&&(f=Xl());void 0===g&&(g=h.resolve(lw));Wv(k,g,f,n);Br(h,{lc:aw,Jd:Vv.h});mw=h.resolve(aw)}vw()})});
D("yt.abuse.player.botguardInitialized",E("yt.abuse.player.botguardInitialized")||fx);D("yt.abuse.player.invokeBotguard",E("yt.abuse.player.invokeBotguard")||gx);D("yt.abuse.dclkstatus.checkDclkStatus",E("yt.abuse.dclkstatus.checkDclkStatus")||Cw);D("yt.player.exports.navigate",E("yt.player.exports.navigate")||Ku);D("yt.util.activity.init",E("yt.util.activity.init")||gr);D("yt.util.activity.getTimeSinceActive",E("yt.util.activity.getTimeSinceActive")||jr);
D("yt.util.activity.setTimestamp",E("yt.util.activity.setTimestamp")||hr);window.addEventListener("load",Zk(function(){Gx()}));
window.addEventListener("pageshow",Zk(function(a){a.persisted||Gx()}));
window.addEventListener("pagehide",Zk(function(a){T("embeds_web_enable_dispose_player_if_page_not_cached_killswitch")?Kx():a.persisted||Kx()}));
window.onerror=function(a,b,c,d,e){b=void 0===b?"Unknown file":b;c=void 0===c?0:c;var f=!1,g=Wk("log_window_onerror_fraction");if(g&&Math.random()<g)f=!0;else{g=document.getElementsByTagName("script");for(var h=0,k=g.length;h<k;h++)if(0<g[h].src.indexOf("/debug-")){f=!0;break}}f&&(f=!1,e?f=!0:("string"===typeof a?g=a:ErrorEvent&&a instanceof ErrorEvent?(f=!0,g=a.message,b=a.filename,c=a.lineno,d=a.colno):(g="Unknown error",b="Unknown file",c=0),e=new V(g),e.name="UnhandledWindowError",e.message=g,
e.fileName=b,e.lineNumber=c,isNaN(d)?delete e.columnNumber:e.columnNumber=d),f?Us(e):Vs(e))};
ve=Ws;window.addEventListener("unhandledrejection",function(a){Ws(a.reason)});
Fb(S("ERRORS")||[],function(a){Us.apply(null,a)});
Vk("ERRORS",[]);T("embeds_web_enable_scheduler_to_player_binary")&&$m();}).call(this);
