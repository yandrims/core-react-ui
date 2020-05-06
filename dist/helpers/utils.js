"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deepMerge = deepMerge;
exports.rem = rem;

var _deepmerge = _interopRequireDefault(require("deepmerge"));

var _default = _interopRequireDefault(require("../themes/default"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/** npm packages */

/** theme */

/** deep merge object */
function deepMerge(originalObj, overriderObj) {
  (0, _deepmerge["default"])(originalObj, overriderObj);
}
/** convert to rem */


function rem(value) {
  var baseStyle = _default["default"].baseStyle;
  return value && "".concat((value / (baseStyle.fontSize || 15)).toFixed(3), "rem") || 0;
}