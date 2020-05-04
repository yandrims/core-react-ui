"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _style = require("../../config/style");

/** base style */

/** breakpoints */
var breakpoints = {
  xxs: 320,
  // in px
  xs: 386,
  // in px
  sm: 576,
  // in px
  md: 768,
  // in px
  lg: 992,
  // in px
  xl: 1200,
  // in px
  xxl: 1500 // in px

};
/** spacing */

var spacing = {
  multiplierFactor: 3
};
/** container */

var container = {
  padding: _style.FONT_SIZE || 15,
  // in px
  maxWidth: 1366 // in px

};
var _default = {
  breakpoints: breakpoints,
  spacing: spacing,
  container: container
};
exports["default"] = _default;