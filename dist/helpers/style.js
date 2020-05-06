"use strict";var _utils=require("./utils");Object.defineProperty(exports,"__esModule",{value:!0}),exports.appendStyle=appendStyle,exports.customCSS=customCSS,exports.combineGlobalStyles=combineGlobalStyles,exports.responsive=responsive,exports.commonStyles=commonStyles;function _objectWithoutProperties(a,b){if(null==a)return{};var c,d,e=_objectWithoutPropertiesLoose(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],!(0<=b.indexOf(c))&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}function _objectWithoutPropertiesLoose(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],0<=b.indexOf(c)||(e[c]=a[c]);return e}/** append style */function appendStyle(a){return a&&"&&& { ".concat(a," }")||""}/** custom css */function customCSS(a){var b=a.css;return appendStyle(b)}/** combine global style props */function combineGlobalStyles(a){var b=a.theme,c=void 0===b?{}:b,d=_objectWithoutProperties(a,["theme"]),e=[],f=c.spacing,g=void 0===f?{}:f,h=g&&g.multiplierFactor||1,i=function(a){return"undefined"!=typeof a},j=function(a,b,c){return"".concat(a,"-").concat(b,": ").concat((0,_utils.rem)(c*h))},k=d.m,l=d.my,m=d.mx,n=d.mt,o=d.mb,q=d.ml,r=d.mr;i(k)&&e.push("margin: ".concat((0,_utils.rem)(k*h))),i(l)&&(e.push(j("margin","top",l)),e.push(j("margin","bottom",l))),i(m)&&(e.push(j("margin","left",m)),e.push(j("margin","right",m))),i(n)&&e.push(j("margin","top",n)),i(o)&&e.push(j("margin","bottom",o)),i(q)&&e.push(j("margin","left",q)),i(r)&&e.push(j("margin","right",r));/** padding */var s=d.p,p=d.py,t=d.px,u=d.pt,v=d.pb,w=d.pl,x=d.pr;i(s)&&e.push("padding: ".concat((0,_utils.rem)(s*h))),i(p)&&(e.push(j("padding","top",p)),e.push(j("padding","bottom",p))),i(t)&&(e.push(j("padding","left",t)),e.push(j("padding","right",t))),i(u)&&e.push(j("padding","top",u)),i(v)&&e.push(j("padding","bottom",v)),i(w)&&e.push(j("padding","left",w)),i(x)&&e.push(j("padding","right",x));/** textAlign */var y=d.textAlign;y&&e.push("text-align: ".concat(y));/** verticalAlign */var z=d.verticalAlign;z&&e.push("vertical-align: ".concat(z));/** display */var A=d.display;A&&e.push("display: ".concat(A));/** position */var B=d.position;return B&&e.push("position: ".concat(B)),appendStyle(e&&e.length&&e.join(";")||"")}/** responsive */function responsive(a){var b=a.responsive,c=a.theme,d=void 0===c?{}:c,e=[];if(b){var f=d.breakpoints;if(f)for(var i in f)if(f.hasOwnProperty(i)){var g=b[i],h=f[i];g&&e.push("@media (min-width: ".concat(h,"px) {\n\t\t\t\t\t\t\t").concat(combineGlobalStyles(g),"\n\t\t\t\t\t\t}"))}}return appendStyle(e&&e.length&&e.join(";")||"")}/** common styles */function commonStyles(a){return"\n\t\t".concat(combineGlobalStyles(a),"\n\t\t").concat(responsive(a),"\n\t\t").concat(customCSS(a),"\n\t")}