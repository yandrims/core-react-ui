"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var globalProps = {
  /** Tab Index */
  tabIndex: _propTypes["default"].number,

  /** Render element in different HTML tags. */
  as: _propTypes["default"].oneOf(['div', 'span', 'p', 'small', 'strong', 'b', 'i', 'em', 'label', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6']),

  /** Custom CSS */
  css: _propTypes["default"].string,

  /** Data Custom */
  dataCustom: _propTypes["default"].string,

  /** Margin */
  m: _propTypes["default"].number,

  /** Margin Top-Bottom */
  my: _propTypes["default"].number,

  /** Margin Left-Right */
  mx: _propTypes["default"].number,

  /** Margin Top */
  mt: _propTypes["default"].number,

  /** Margin Bottom */
  mb: _propTypes["default"].number,

  /** Margin Left */
  ml: _propTypes["default"].number,

  /** Margin Right */
  mr: _propTypes["default"].number,

  /** Padding */
  p: _propTypes["default"].number,

  /** Padding Top-Bottom */
  py: _propTypes["default"].number,

  /** Padding Left-Right */
  px: _propTypes["default"].number,

  /** Padding Top */
  pt: _propTypes["default"].number,

  /** Padding Bottom */
  pb: _propTypes["default"].number,

  /** Padding Left */
  pl: _propTypes["default"].number,

  /** Padding Right */
  pr: _propTypes["default"].number,

  /** Text Align */
  textAlign: _propTypes["default"].string,

  /** Vertical Align */
  verticalAlign: _propTypes["default"].string,

  /** Position */
  position: _propTypes["default"].string,

  /** Display */
  display: _propTypes["default"].string,

  /** Responsive */
  responsive: _propTypes["default"].object
};
var _default = globalProps;
exports["default"] = _default;