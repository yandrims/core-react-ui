"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deepMerge = deepMerge;
exports.rem = rem;

var _deepmerge = _interopRequireDefault(require("deepmerge"));

var _style = require("../../config/style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/** npm packages */

/** base style */

/** deep merge object */
function deepMerge(originalObj, overriderObj) {
  (0, _deepmerge["default"])(originalObj, overriderObj);
}
/** convert to rem */


function rem(value) {
  return value && "".concat(value / (_style.FONT_SIZE || 16), "rem") || 0;
}