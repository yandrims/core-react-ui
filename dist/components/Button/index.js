"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/** npm packages */
// import { compose } from 'recompose';

/** helpers */

/* import {
	withForwardRef,
	withThemeConsumer,
	withGlobalProps,
} from '../../helpers/hoc'; */
function Button(_ref) {
  var children = _ref.children;

  var Styles = _styledComponents["default"].button.withConfig({
    displayName: "Button__Styles",
    componentId: "y97ibk-0"
  })(["background:green;color:white;"]);

  return /*#__PURE__*/_react["default"].createElement(Styles, {
    style: {
      padding: 30
    },
    type: "button"
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
var _default = Button;
exports["default"] = _default;