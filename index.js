// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty,t=Object.prototype,n=t.toString,o=t.__defineGetter__,i=t.__defineSetter__,u=t.__lookupGetter__,a=t.__lookupSetter__,l=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,l){var f,c,p,y;if("object"!=typeof e||null===e||"[object Array]"===n.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof l||null===l||"[object Array]"===n.call(l))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+l+"`.");if((c="value"in l)&&(u.call(e,r)||a.call(e,r)?(f=e.__proto__,e.__proto__=t,delete e[r],e[r]=l.value,e.__proto__=f):e[r]=l.value),p="get"in l,y="set"in l,c&&(p||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&o&&o.call(e,r,l.get),y&&i&&i.call(e,r,l.set),e};function f(e,r,t){l(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function c(e){return"number"==typeof e}var p="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function y(){return p&&"symbol"==typeof Symbol.toStringTag}var b=Object.prototype.toString,s=Object.prototype.hasOwnProperty,m="function"==typeof Symbol?Symbol.toStringTag:"",v=y()?function(e){var r,t,n,o,i;if(null==e)return b.call(e);t=e[m],i=m,r=null!=(o=e)&&s.call(o,i);try{e[m]=void 0}catch(r){return b.call(e)}return n=b.call(e),r?e[m]=t:delete e[m],n}:function(e){return b.call(e)},d=Number,g=d.prototype.toString,_=y();function h(e){return"object"==typeof e&&(e instanceof d||(_?function(e){try{return g.call(e),!0}catch(e){return!1}}(e):"[object Number]"===v(e)))}function w(e){return c(e)||h(e)}f(w,"isPrimitive",c),f(w,"isObject",h);var j=Number.POSITIVE_INFINITY,N=d.NEGATIVE_INFINITY,T=Math.floor;function O(e){return e<j&&e>N&&T(r=e)===r;var r}function S(e){return c(e)&&O(e)}function E(e){return h(e)&&O(e.valueOf())}function F(e){return S(e)||E(e)}function A(e){return S(e)&&e>0}function I(e){return E(e)&&e.valueOf()>0}function P(e){return A(e)||I(e)}function V(e){return e!=e}f(F,"isPrimitive",S),f(F,"isObject",E),f(P,"isPrimitive",A),f(P,"isObject",I);var k=Math.sqrt,x="function"==typeof Float64Array,G="function"==typeof Float64Array?Float64Array:null,K="function"==typeof Float64Array?Float64Array:void 0,C=function(){var e,r,t;if("function"!=typeof G)return!1;try{r=new G([1,3.14,-3.14,NaN]),t=r,e=(x&&t instanceof Float64Array||"[object Float64Array]"===v(t))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){e=!1}return e}()?K:function(){throw new Error("not implemented")};function M(e,r,t){var n,o,i,u,a,l,f,p,y,b,s,m,v,d,g,_,h,w;if(!A(e))throw new TypeError("invalid argument. First argument must be a positive integer. Value: `"+e+"`.");if(n=new C(2*e),h=e-1,l=0,f=0,g=0,d=-1,_=0,arguments.length>1){if(!c(r))throw new TypeError("invalid argument. Second argument must be a number primitive. Value: `"+r+"`.");if(!c(t))throw new TypeError("invalid argument. Third argument must be a number primitive. Value: `"+t+"`.");return p=r,y=t,N}return p=0,y=0,j;function j(r,t){var c,j,N,T,O;if(0===arguments.length)return 0===_?null:1===_?0:_<e?g/(_-1)/(b*s):g/h/(b*s);if(w=2*(d=(d+1)%e),V(r)||V(t))_=e,g=NaN;else{if(_<e)return n[w]=r,n[w+1]=t,l+=(m=r-p)*(r-(p+=m/(_+=1))),f+=(v=t-y)*(a=t-(y+=v/_)),g+=m*a,1===_?0:(b=k(l/(N=_-1)),s=k(f/N),g/N/(b*s));if(1===_)return 0;if(V(n[w])||V(n[w+1])){for(_=1,p=r,y=t,l=0,f=0,g=0,T=0;T<e;T++)if((O=2*T)!==w){if(c=n[O],j=n[O+1],V(c)||V(j)){_=e,g=NaN;break}l+=(m=c-p)*(c-(p+=m/(_+=1))),f+=(v=j-y)*(a=j-(y+=v/_)),g+=m*a}}else!1===V(g)&&(o=n[w]-p,u=n[w+1]-y,l+=(m=(i=r-p)-o)*(o+(r-(p+=m/e))),f+=(v=(a=t-y)-u)*(u+(t-(y+=v/e))),g+=i*a-o*u-m*v/e)}return n[w]=r,n[w+1]=t,b=k(l/h),s=k(f/h),g/h/(b*s)}function N(r,t){var c,h;if(0===arguments.length)return 0===_?null:_<e?g/_/(b*s):g/e/(b*s);if(w=2*(d=(d+1)%e),V(r)||V(t))_=e,g=NaN;else{if(_<e)return n[w]=r,n[w+1]=t,f+=(v=t-y)*v,g+=(m=r-p)*v,b=k((l+=m*m)/(_+=1)),s=k(f/_),g/_/(b*s);if(V(n[w])||V(n[w+1])){for(l=0,f=0,g=0,c=0;c<e;c++)if((h=2*c)!==w){if(V(n[h])||V(n[h+1])){_=e,g=NaN;break}m=n[h]-p,l+=m*m,v=n[h+1]-y,f+=v*v,g+=m*v}}else!1===V(g)&&(o=n[w]-p,i=r-p,u=n[w+1]-y,l+=(i-o)*(i+o),f+=((a=t-y)-u)*(a+u),g+=i*a-o*u)}return n[w]=r,n[w+1]=t,b=k(l/e),s=k(f/e),g/e/(b*s)}}function Y(){var e,r=arguments,t=r[0],n="https://stdlib.io/e/"+t+"?";for(e=1;e<r.length;e++)n+="&arg[]="+encodeURIComponent(r[e]);return n}return function(e,r,t){var n;if(!A(e))throw new TypeError(Y("0eK4o",e));if(arguments.length>1){if(!c(r))throw new TypeError(Y("0eK4N",r));if(!c(t))throw new TypeError(Y("0eK4O",t));n=M(e,r,t)}else n=M(e);return o;function o(e,r){var t;return 0===arguments.length?null===(t=n())?t:t*t:(t=n(e,r))*t}}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).incrmpcorr2=r();
//# sourceMappingURL=index.js.map
