// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=Object.defineProperty,e=Object.prototype,n=e.toString,o=e.__defineGetter__,i=e.__defineSetter__,u=e.__lookupGetter__,a=e.__lookupSetter__;var l=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,t,l){var f,c,y,p;if("object"!=typeof r||null===r||"[object Array]"===n.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof l||null===l||"[object Array]"===n.call(l))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+l+"`.");if((c="value"in l)&&(u.call(r,t)||a.call(r,t)?(f=r.__proto__,r.__proto__=e,delete r[t],r[t]=l.value,r.__proto__=f):r[t]=l.value),y="get"in l,p="set"in l,c&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&o&&o.call(r,t,l.get),p&&i&&i.call(r,t,l.set),r};function f(r,t,e){l(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}function c(r){return"number"==typeof r}var y="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function p(){return y&&"symbol"==typeof Symbol.toStringTag}var b=Object.prototype.toString;var v=Object.prototype.hasOwnProperty;var m="function"==typeof Symbol?Symbol.toStringTag:"";var s=p()?function(r){var t,e,n,o,i;if(null==r)return b.call(r);e=r[m],i=m,t=null!=(o=r)&&v.call(o,i);try{r[m]=void 0}catch(t){return b.call(r)}return n=b.call(r),t?r[m]=e:delete r[m],n}:function(r){return b.call(r)},_=Number,g=_.prototype.toString;var h=p();function w(r){return"object"==typeof r&&(r instanceof _||(h?function(r){try{return g.call(r),!0}catch(r){return!1}}(r):"[object Number]"===s(r)))}function d(r){return c(r)||w(r)}f(d,"isPrimitive",c),f(d,"isObject",w);var j=Number.POSITIVE_INFINITY,N=_.NEGATIVE_INFINITY,T=Math.floor;function S(r){return r<j&&r>N&&T(t=r)===t;var t}function E(r){return c(r)&&S(r)}function I(r){return w(r)&&S(r.valueOf())}function O(r){return E(r)||I(r)}function A(r){return E(r)&&r>0}function F(r){return I(r)&&r.valueOf()>0}function P(r){return A(r)||F(r)}function V(r){return r!=r}f(O,"isPrimitive",E),f(O,"isObject",I),f(P,"isPrimitive",A),f(P,"isObject",F);var k=Math.sqrt,G="function"==typeof Float64Array;var H="function"==typeof Float64Array?Float64Array:null;var x="function"==typeof Float64Array?Float64Array:void 0;var C=function(){var r,t,e;if("function"!=typeof H)return!1;try{t=new H([1,3.14,-3.14,NaN]),e=t,r=(G&&e instanceof Float64Array||"[object Float64Array]"===s(e))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?x:function(){throw new Error("not implemented")};function M(r,t,e){var n,o,i,u,a,l,f,y,p,b,v,m,s,_,g,h,w,d;if(!A(r))throw new TypeError("invalid argument. First argument must be a positive integer. Value: `"+r+"`.");if(n=new C(2*r),w=r-1,l=0,f=0,g=0,_=-1,h=0,arguments.length>1){if(!c(t))throw new TypeError("invalid argument. Second argument must be a number primitive. Value: `"+t+"`.");if(!c(e))throw new TypeError("invalid argument. Third argument must be a number primitive. Value: `"+e+"`.");return y=t,p=e,N}return y=0,p=0,j;function j(t,e){var c,j,N,T,S;if(0===arguments.length)return 0===h?null:1===h?0:h<r?g/(h-1)/(b*v):g/w/(b*v);if(d=2*(_=(_+1)%r),V(t)||V(e))h=r,g=NaN;else{if(h<r)return n[d]=t,n[d+1]=e,l+=(m=t-y)*(t-(y+=m/(h+=1))),f+=(s=e-p)*(a=e-(p+=s/h)),g+=m*a,1===h?0:(b=k(l/(N=h-1)),v=k(f/N),g/N/(b*v));if(1===h)return 0;if(V(n[d])||V(n[d+1])){for(h=1,y=t,p=e,l=0,f=0,g=0,T=0;T<r;T++)if((S=2*T)!==d){if(c=n[S],j=n[S+1],V(c)||V(j)){h=r,g=NaN;break}l+=(m=c-y)*(c-(y+=m/(h+=1))),f+=(s=j-p)*(a=j-(p+=s/h)),g+=m*a}}else!1===V(g)&&(o=n[d]-y,u=n[d+1]-p,l+=(m=(i=t-y)-o)*(o+(t-(y+=m/r))),f+=(s=(a=e-p)-u)*(u+(e-(p+=s/r))),g+=i*a-o*u-m*s/r)}return n[d]=t,n[d+1]=e,b=k(l/w),v=k(f/w),g/w/(b*v)}function N(t,e){var c,w;if(0===arguments.length)return 0===h?null:h<r?g/h/(b*v):g/r/(b*v);if(d=2*(_=(_+1)%r),V(t)||V(e))h=r,g=NaN;else{if(h<r)return n[d]=t,n[d+1]=e,f+=(s=e-p)*s,g+=(m=t-y)*s,b=k((l+=m*m)/(h+=1)),v=k(f/h),g/h/(b*v);if(V(n[d])||V(n[d+1])){for(l=0,f=0,g=0,c=0;c<r;c++)if((w=2*c)!==d){if(V(n[w])||V(n[w+1])){h=r,g=NaN;break}m=n[w]-y,l+=m*m,s=n[w+1]-p,f+=s*s,g+=m*s}}else!1===V(g)&&(o=n[d]-y,i=t-y,u=n[d+1]-p,l+=(i-o)*(i+o),f+=((a=e-p)-u)*(a+u),g+=i*a-o*u)}return n[d]=t,n[d+1]=e,b=k(l/r),v=k(f/r),g/r/(b*v)}}function Y(){var r,t=arguments,e=t[0],n="https://stdlib.io/e/"+e+"?";for(r=1;r<t.length;r++)n+="&arg[]="+encodeURIComponent(t[r]);return n}function q(r,t,e){var n;if(!A(r))throw new TypeError(Y("1Ir4b,Ht",r));if(arguments.length>1){if(!c(t))throw new TypeError(Y("1Ir4A,Hr",t));if(!c(e))throw new TypeError(Y("1Ir4B,Hu",e));n=M(r,t,e)}else n=M(r);return o;function o(r,t){var e;return 0===arguments.length?null===(e=n())?e:e*e:(e=n(r,t))*e}}export{q as default};
//# sourceMappingURL=mod.js.map
