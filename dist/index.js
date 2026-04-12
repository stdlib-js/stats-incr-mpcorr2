"use strict";var l=function(i,r){return function(){return r||i((r={exports:{}}).exports,r),r.exports}};var m=l(function(w,o){
var f=require('@stdlib/assert-is-positive-integer/dist').isPrimitive,a=require('@stdlib/assert-is-number/dist').isPrimitive,s=require('@stdlib/stats-incr-mpcorr/dist'),n=require('@stdlib/error-tools-fmtprodmsg/dist');function p(i,r,u){var t;if(!f(i))throw new TypeError(n('1Ir4b',i));if(arguments.length>1){if(!a(r))throw new TypeError(n('1Ir4A',r));if(!a(u))throw new TypeError(n('1Ir4B',u));t=s(i,r,u)}else t=s(i);return c;function c(v,g){var e;return arguments.length===0?(e=t(),e===null?e:e*e):(e=t(v,g),e*e)}}o.exports=p
});var b=m();module.exports=b;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
