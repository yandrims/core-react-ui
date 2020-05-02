"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _utils = require("./utils");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var spacing = function spacing(_ref) {
  var margin = _ref.margin,
      marginLeft = _ref.marginLeft,
      marginRight = _ref.marginRight,
      marginTop = _ref.marginTop,
      marginBottom = _ref.marginBottom,
      marginX = _ref.marginX,
      marginY = _ref.marginY,
      padding = _ref.padding,
      paddingLeft = _ref.paddingLeft,
      paddingRight = _ref.paddingRight,
      paddingTop = _ref.paddingTop,
      paddingBottom = _ref.paddingBottom,
      paddingX = _ref.paddingX,
      paddingY = _ref.paddingY,
      theme = _ref.theme;
  var factor = theme.multiplierFactor || 1;
  var spaces = {};

  for (var i = 0; i <= 50; i++) {
    spaces[i] = (0, _utils.rem)(i * factor);
  }

  return [].concat(_toConsumableArray(typeof margin !== 'undefined' ? ["margin: ".concat(spaces[margin])] : []), _toConsumableArray(typeof marginLeft !== 'undefined' ? ["margin-left: ".concat(spaces[marginLeft])] : []), _toConsumableArray(typeof marginRight !== 'undefined' ? ["margin-right: ".concat(spaces[marginRight])] : []), _toConsumableArray(typeof marginTop !== 'undefined' ? ["margin-top: ".concat(spaces[marginTop])] : []), _toConsumableArray(typeof marginBottom !== 'undefined' ? ["margin-bottom: ".concat(spaces[marginBottom])] : []), _toConsumableArray(typeof marginX !== 'undefined' ? ["margin-left: ".concat(spaces[marginX]), "margin-right: ".concat(spaces[marginX])] : []), _toConsumableArray(typeof marginY !== 'undefined' ? ["margin-top: ".concat(spaces[marginY]), "margin-bottom: ".concat(spaces[marginY])] : []), _toConsumableArray(typeof padding !== 'undefined' ? ["padding: ".concat(spaces[padding])] : []), _toConsumableArray(typeof paddingLeft !== 'undefined' ? ["padding-left: ".concat(spaces[paddingLeft])] : []), _toConsumableArray(typeof paddingRight !== 'undefined' ? ["padding-right: ".concat(spaces[paddingRight])] : []), _toConsumableArray(typeof paddingTop !== 'undefined' ? ["padding-top: ".concat(spaces[paddingTop])] : []), _toConsumableArray(typeof paddingBottom !== 'undefined' ? ["padding-bottom: ".concat(spaces[paddingBottom])] : []), _toConsumableArray(typeof paddingX !== 'undefined' ? ["padding-left: ".concat(spaces[paddingX]), "padding-right: ".concat(spaces[paddingX])] : []), _toConsumableArray(typeof paddingY !== 'undefined' ? ["padding-top: ".concat(spaces[paddingY]), "padding-bottom: ".concat(spaces[paddingY])] : [])).join(';');
};

var _default = spacing;
exports["default"] = _default;