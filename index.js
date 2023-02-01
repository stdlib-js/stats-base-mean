// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty,t=Object.prototype,n=t.toString,o=t.__defineGetter__,u=t.__defineSetter__,i=t.__lookupGetter__,a=t.__lookupSetter__,f=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,f){var l,c,_,d;if("object"!=typeof r||null===r||"[object Array]"===n.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof f||null===f||"[object Array]"===n.call(f))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+f+"`.");if((c="value"in f)&&(i.call(r,e)||a.call(r,e)?(l=r.__proto__,r.__proto__=t,delete r[e],r[e]=f.value,r.__proto__=l):r[e]=f.value),_="get"in f,d="set"in f,c&&(_||d))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return _&&o&&o.call(r,e,f.get),d&&u&&u.call(r,e,f.set),r};function l(r,e,t){f(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}var c=Math.floor;function _(r,e,t,n){var o,u,i,a,f,l,d,p,y,b,s,v,m;if(r<=0)return 0;if(1===r||0===t)return e[n];if(o=n,r<8){for(s=0,m=0;m<r;m++)s+=e[o],o+=t;return s}if(r<=128){for(u=e[o],i=e[o+t],a=e[o+2*t],f=e[o+3*t],l=e[o+4*t],d=e[o+5*t],p=e[o+6*t],y=e[o+7*t],o+=8*t,b=r%8,m=8;m<r-b;m+=8)u+=e[o],i+=e[o+t],a+=e[o+2*t],f+=e[o+3*t],l+=e[o+4*t],d+=e[o+5*t],p+=e[o+6*t],y+=e[o+7*t],o+=8*t;for(s=u+i+(a+f)+(l+d+(p+y));m<r;m++)s+=e[o],o+=t;return s}return v=c(r/2),_(v-=v%8,e,t,o)+_(r-v,e,t,o+v*t)}function d(r,e,t){var n,o,u;if(r<=0)return 0;if(1===r||0===t)return e[0];if(n=t<0?(1-r)*t:0,r<8){for(o=0,u=0;u<r;u++)o+=e[n],n+=t;return o}return _(r,e,t,n)}function p(r,e,t,n,o){var u,i,a,f,l,_,d,y,b,s,v,m,j;if(r<=0)return 0;if(1===r||0===n)return e+t[o];if(u=o,r<8){for(v=0,j=0;j<r;j++)v+=e+t[u],u+=n;return v}if(r<=128){for(i=e+t[u],a=e+t[u+n],f=e+t[u+2*n],l=e+t[u+3*n],_=e+t[u+4*n],d=e+t[u+5*n],y=e+t[u+6*n],b=e+t[u+7*n],u+=8*n,s=r%8,j=8;j<r-s;j+=8)i+=e+t[u],a+=e+t[u+n],f+=e+t[u+2*n],l+=e+t[u+3*n],_+=e+t[u+4*n],d+=e+t[u+5*n],y+=e+t[u+6*n],b+=e+t[u+7*n],u+=8*n;for(v=i+a+(f+l)+(_+d+(y+b));j<r;j++)v+=e+t[u],u+=n;return v}return m=c(r/2),p(m-=m%8,e,t,n,u)+p(r-m,e,t,n,u+m*n)}function y(r,e,t,n){var o,u,i;if(r<=0)return 0;if(1===r||0===n)return e+t[0];if(o=n<0?(1-r)*n:0,r<8){for(u=0,i=0;i<r;i++)u+=e+t[o],o+=n;return u}return p(r,e,t,n,o)}function b(r,e,t){var n;return r<=0?NaN:1===r||0===t?e[0]:(n=d(r,e,t)/r)+y(r,-n,e,t)/r}l(d,"ndarray",_),l(y,"ndarray",p),l(b,"ndarray",(function(r,e,t,n){var o;return r<=0?NaN:1===r||0===t?e[n]:(o=_(r,e,t,n)/r)+p(r,-o,e,t,n)/r}));const{ndarray:s}=b;function v(r,e,t){return b(r,e,t)}return l(v,"ndarray",(function(r,e,t,n){return s(r,e,t,n)})),v},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).mean=e();
//# sourceMappingURL=index.js.map
