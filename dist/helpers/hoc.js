"use strict";function _typeof(a){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},_typeof(a)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.withGlobalProps=exports.withThemeConsumer=exports.withForwardRef=void 0;var _react=_interopRequireWildcard(require("react")),_styledComponents=require("styled-components"),_utils=require("./utils"),_default=_interopRequireDefault(require("../themes/default"));function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _getRequireWildcardCache(){if("function"!=typeof WeakMap)return null;var a=new WeakMap;return _getRequireWildcardCache=function(){return a},a}function _interopRequireWildcard(a){if(a&&a.__esModule)return a;if(null===a||"object"!==_typeof(a)&&"function"!=typeof a)return{default:a};var b=_getRequireWildcardCache();if(b&&b.has(a))return b.get(a);var c={},d=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var e in a)if(Object.prototype.hasOwnProperty.call(a,e)){var f=d?Object.getOwnPropertyDescriptor(a,e):null;f&&(f.get||f.set)?Object.defineProperty(c,e,f):c[e]=a[e]}return c["default"]=a,b&&b.set(a,c),c}function _extends(){return _extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a},_extends.apply(this,arguments)}function _objectWithoutProperties(a,b){if(null==a)return{};var c,d,e=_objectWithoutPropertiesLoose(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],!(0<=b.indexOf(c))&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}function _objectWithoutPropertiesLoose(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],0<=b.indexOf(c)||(e[c]=a[c]);return e}var withForwardRef=function(a){var b=function(b){var c=b.forwardedRef,d=_objectWithoutProperties(b,["forwardedRef"]);return/*#__PURE__*/_react["default"].createElement(a,_extends({ref:c},d))};return(0,_react.forwardRef)(function(a,c){return/*#__PURE__*/_react["default"].createElement(b,_extends({},a,{forwardRef:c}))})};exports.withForwardRef=withForwardRef;var withThemeConsumer=function(a){return function(b){return/*#__PURE__*/_react["default"].createElement(_styledComponents.ThemeConsumer,null,function(c){var d=c?(0,_utils.deepMerge)(_default["default"],c):_default["default"];return/*#__PURE__*/_react["default"].createElement(a,_extends({},b,{theme:d}))})}};exports.withThemeConsumer=withThemeConsumer;var withGlobalProps=function(a){return function(b){var c=b.ariaLabel,d=b.ariaLabelledBy,e=b.dataCustom,f=_objectWithoutProperties(b,["ariaLabel","ariaLabelledBy","dataCustom"]);return/*#__PURE__*/_react["default"].createElement(a,_extends({},f,{"aria-label":c,"aria-labelledby":d,"data-custom":e}))}};exports.withGlobalProps=withGlobalProps;