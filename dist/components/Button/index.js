"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _recompose = require("recompose");

var _hoc = require("../../helpers/hoc");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/** npm packages */

/** helpers */
function Button(_ref) {
  var children = _ref.children,
      borderRadius = _ref.borderRadius,
      bgcolor = _ref.bgcolor,
      color = _ref.color,
      padding = _ref.padding,
      fontSize = _ref.fontSize;
  return /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    style: {
      cursor: 'pointer',
      borderRadius: borderRadius,
      boxShadow: '1px 3px 2px rgba(0,0,0,0.5)',
      backgroundColor: bgcolor,
      color: color,
      padding: padding,
      fontSize: fontSize
    }
  }, children);
}

Button.propTypes = {
  /** Make the Link act as other elements. */
  as: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].func, _propTypes["default"].elementType]),

  /** Disable the Link for being clicked. */
  type: _propTypes["default"].bool
};
Button.defaultProps = {
  bgcolor: '#05224e',
  color: '#fff',
  padding: '20px',
  fontSize: '1.1rem',
  borderRadius: '5px'
};

var _default = (0, _recompose.compose)(_hoc.withForwardRef, _hoc.withThemeConsumer, _hoc.withGlobalProps)(Button);

exports["default"] = _default;