"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function Button(_ref) {
  var children = _ref.children,
      borderRadius = _ref.borderRadius,
      bgcolor = _ref.bgcolor,
      color = _ref.color,
      padding = _ref.padding,
      fontSize = _ref.fontSize;
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("button", {
    className: "custombutton",
    style: {
      cursor: 'pointer',
      borderRadius: borderRadius,
      boxShadow: '1px 3px 2px rgba(0,0,0,0.5)',
      backgroundColor: bgcolor,
      color: color,
      padding: padding,
      fontSize: fontSize
    }
  }, children));
}

Button.propTypes = {
  /**
   * Background Color
   */
  backgroundColor: _propTypes["default"].string,

  /**
   * Id of button need to pass to link
   */
  id: _propTypes["default"].string
};
Button.defaultProps = {
  bgcolor: '#05224e',
  color: '#fff',
  padding: '20px',
  fontSize: '1.1rem',
  borderRadius: '5px'
};
var _default = Button;
exports["default"] = _default;