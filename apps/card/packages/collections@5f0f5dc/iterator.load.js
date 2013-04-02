montageDefine("5f0f5dc","iterator",{dependencies:["./shim-object","./generic-collection"],factory:function(e,t,n){"use strict";function s(e){if(!(this instanceof s))return new s(e);if(Array.isArray(e)||typeof e=="string")return s.iterate(e);e=r(e);if(e instanceof s)return e;if(e.next)this.next=function(){return e.next()};else if(e.iterate){var t=e.iterate();this.next=function(){return t.next()}}else{if(r.prototype.toString.call(e)!=="[object Function]")throw new TypeError("Can't iterate "+e);this.next=e}}n.exports=s;var r=e("./shim-object"),i=e("./generic-collection");s.prototype.forEach=i.prototype.forEach,s.prototype.map=i.prototype.map,s.prototype.filter=i.prototype.filter,s.prototype.every=i.prototype.every,s.prototype.some=i.prototype.some,s.prototype.any=i.prototype.any,s.prototype.all=i.prototype.all,s.prototype.min=i.prototype.min,s.prototype.max=i.prototype.max,s.prototype.sum=i.prototype.sum,s.prototype.average=i.prototype.average,s.prototype.flatten=i.prototype.flatten,s.prototype.zip=i.prototype.zip,s.prototype.enumerate=i.prototype.enumerate,s.prototype.sorted=i.prototype.sorted,s.prototype.group=i.prototype.group,s.prototype.reversed=i.prototype.reversed,s.prototype.toArray=i.prototype.toArray,s.prototype.toObject=i.prototype.toObject,s.prototype.iterator=i.prototype.iterator,s.prototype.constructClone=function(e){var t=[];return t.addEach(e),t},s.prototype.mapIterator=function(e){var t=s(this),n=arguments[1],i=0;if(r.prototype.toString.call(e)!="[object Function]")throw new TypeError;return new t.constructor(function(){return e.call(n,t.next(),i++,t)})},s.prototype.filterIterator=function(e){var t=s(this),n=arguments[1],i=0;if(r.prototype.toString.call(e)!="[object Function]")throw new TypeError;return new t.constructor(function(){var r;for(;;){r=t.next();if(e.call(n,r,i++,t))return r}})},s.prototype.reduce=function(e){var t=s(this),n=arguments[1],i=arguments[2],o=0,u;if(r.prototype.toString.call(e)!="[object Function]")throw new TypeError;try{u=t.next(),arguments.length>1?n=e.call(i,n,u,o,t):n=u,o++}catch(a){if(isStopIteration(a)){if(arguments.length>1)return arguments[1];throw TypeError("cannot reduce a value from an empty iterator with no initial value")}throw a}try{for(;;)u=t.next(),n=e.call(i,n,u,o,t),o++}catch(a){if(isStopIteration(a))return n;throw a}},s.prototype.concat=function(){return s.concat(Array.prototype.concat.apply(this,arguments))},s.prototype.dropWhile=function(e){var t=s(this),n=arguments[1],i=!1,o;if(r.prototype.toString.call(e)!="[object Function]")throw new TypeError;return t.forEach(function(r,s){if(!e.call(n,r,s,t))throw i=!0,o=r,StopIteration}),i?t.constructor([o]).concat(t):t.constructor([])},s.prototype.takeWhile=function(e){var t=s(this),n=arguments[1];if(r.prototype.toString.call(e)!="[object Function]")throw new TypeError;return t.mapIterator(function(r,i){if(!e.call(n,r,i,t))throw StopIteration;return r})},s.prototype.zipIterator=function(){return s.unzip(Array.prototype.concat.apply(this,arguments))},s.prototype.enumerateIterator=function(e){return s.count(e).zipIterator(this)},s.iterate=function(e){var t;return t=0,new s(function(){if(typeof e=="object")while(!(t in e)){if(t>=e.length)throw StopIteration;t+=1}else if(t>=e.length)throw StopIteration;var n=e[t];return t+=1,n})},s.cycle=function(e,t){arguments.length<2&&(t=Infinity);var n=function(){throw StopIteration};return new s(function(){var r;try{return n()}catch(i){if(isStopIteration(i)){if(t<=0)throw i;return t--,r=s.iterate(e),n=r.next.bind(r),n()}throw i}})},s.concat=function(e){e=s(e);var t=function(){throw StopIteration};return new s(function(){var n;try{return t()}catch(r){if(isStopIteration(r))return n=s(e.next()),t=n.next.bind(n),t();throw r}})},s.unzip=function(e){return e=s(e).map(s),e.length===0?new s([]):new s(function(){var t,n=e.map(function(e){try{return e.next()}catch(n){if(!isStopIteration(n))throw n;t=!0}});if(t)throw StopIteration;return n})},s.zip=function(){return s.unzip(Array.prototype.slice.call(arguments))},s.chain=function(){return s.concat(Array.prototype.slice.call(arguments))},s.range=function(e,t,n){return arguments.length<3&&(n=1),arguments.length<2&&(t=e,e=0),e=e||0,n=n||1,new s(function(){if(e>=t)throw StopIteration;var r=e;return e+=n,r})},s.count=function(e,t){return s.range(e,Infinity,t)},s.repeat=function(e,t){return(new s.range(t)).mapIterator(function(){return e})},typeof isStopIteration=="undefined"&&(global.isStopIteration=function(e){return r.prototype.toString.call(e)==="[object StopIteration]"}),typeof StopIteration=="undefined"&&(global.StopIteration={},r.prototype.toString=function(e){return function(){return this===global.StopIteration||this instanceof global.ReturnValue?"[object StopIteration]":e.call(this,arguments)}}(r.prototype.toString)),typeof ReturnValue=="undefined"&&(global.ReturnValue=function o(e){this.message="Iteration stopped with "+e,Error.captureStackTrace&&Error.captureStackTrace(this,o);if(!(this instanceof global.ReturnValue))return new global.ReturnValue(e);this.value=e},ReturnValue.prototype=Error.prototype)}})