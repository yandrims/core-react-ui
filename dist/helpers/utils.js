"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hexToRgba = exports.range = exports.getIntrinsicRatio = exports.isElementInViewport = exports.getRandomString = exports.rem = exports.deepMerge = exports.isInArray = void 0;

var _deepmerge = _interopRequireDefault(require("deepmerge"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* eslint-disable no-bitwise */
var isInArray = function isInArray(value, array) {
  return array.indexOf(value) > -1;
};

exports.isInArray = isInArray;

var deepMerge = function deepMerge(originalObj, overriderObj) {
  return (0, _deepmerge["default"])(originalObj, overriderObj);
};

exports.deepMerge = deepMerge;

var rem = function rem(value) {
  return "".concat(value / 16, "rem");
};

exports.rem = rem;

var getRandomString = function getRandomString() {
  return Math.random().toString(36).substring(7);
};

exports.getRandomString = getRandomString;

var isElementInViewport = function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return rect.bottom > 0 && rect.right > 0 && rect.left < (window.innerWidth || document.documentElement.clientWidth) && rect.top < (window.innerHeight || document.documentElement.clientHeight);
};

exports.isElementInViewport = isElementInViewport;

var getIntrinsicRatio = function getIntrinsicRatio(width, height) {
  return height / width * 100;
};

exports.getIntrinsicRatio = getIntrinsicRatio;

var range = function range(from, to) {
  var step = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  var i = from;
  var result = [];

  while (i <= to) {
    result.push(i);
    i += step;
  }

  return result;
};

exports.range = range;

var hexToRgba = function hexToRgba(hex, alpha) {
  var c;

  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    c = hex.substring(1).split('');

    if (c.length === 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]];
    }

    c = "0x".concat(c.join(''));
    return "rgba(".concat([c >> 16 & 255, c >> 8 & 255, c & 255].join(','), ",").concat(alpha, ")");
  }

  throw new Error('Bad Hex');
};

exports.hexToRgba = hexToRgba;