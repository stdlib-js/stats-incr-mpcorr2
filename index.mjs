// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as r}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@v0.2.2-esm/index.mjs";import{isPrimitive as t}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number@v0.2.2-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-incr-mpcorr@v0.2.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.2-esm/index.mjs";function i(i,n,o){var m;if(!r(i))throw new TypeError(s("1Ir4b",i));if(arguments.length>1){if(!t(n))throw new TypeError(s("1Ir4A",n));if(!t(o))throw new TypeError(s("1Ir4B",o));m=e(i,n,o)}else m=e(i);return function(r,t){var e;if(0===arguments.length)return null===(e=m())?e:e*e;return(e=m(r,t))*e}}export{i as default};
//# sourceMappingURL=index.mjs.map
