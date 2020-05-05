"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _recompose = require("recompose");

var _Styles = _interopRequireDefault(require("./Styles"));

var _globalProps = _interopRequireDefault(require("../../helpers/globalProps"));

var _hoc = require("../../helpers/hoc");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Col(_ref) {
  var forwardRef = _ref.forwardRef,
      children = _ref.children,
      rest = _objectWithoutProperties(_ref, ["forwardRef", "children"]);

  return /*#__PURE__*/_react["default"].createElement(_Styles["default"], _extends({
    ref: forwardRef
  }, rest), children);
}

Col.propTypes = _objectSpread(_objectSpread({}, _globalProps["default"]), {}, {
  /** Specifies the alignment for the selected item inside the flexible container. */
  alignSelf: _propTypes["default"].oneOf(['auto', 'flex-start', 'flex-end', 'center', 'baseline', 'stretch']),

  /** Should be a number between 1 - 12 */
  col: _propTypes["default"].number,

  /** Size the column based on the natural width of its content */
  isAutoWidth: _propTypes["default"].bool,

  /** Specifies the order of a flexible item relative to the rest of the flexible items inside the same container */
  order: _propTypes["default"].number,

  /** Specifies how much the item will grow relative to the rest of the flexible items inside the same container */
  flexGrow: _propTypes["default"].number,

  /** Specifies how the item will shrink relative to the rest of the flexible items inside the same container */
  flexShrink: _propTypes["default"].number,

  /** Specifies the initial length of a flexible item. */
  flexBasis: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number])
});
Col.defaultProps = {};

var _default = (0, _recompose.compose)(_hoc.withForwardRef, _hoc.withThemeConsumer, _hoc.withGlobalProps)(Col);

exports["default"] = _default;