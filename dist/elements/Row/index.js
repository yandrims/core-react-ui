"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _recompose = require("recompose");

var _Styles = _interopRequireDefault(require("./Styles"));

var _globalProps = _interopRequireDefault(require("../../helpers/globalProps"));

var _hoc = require("../../helpers/hoc");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Row(_ref) {
  var forwardRef = _ref.forwardRef,
      children = _ref.children,
      space = _ref.space,
      rest = _objectWithoutProperties(_ref, ["forwardRef", "children", "space"]);

  return /*#__PURE__*/_react["default"].createElement(_Styles["default"], _extends({
    ref: forwardRef,
    space: space
  }, rest), children && _typeof(children) === 'object' && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, _react.Children && _react.Children.map(children, function (child) {
    return child ? (0, _react.cloneElement)(child, {
      space: space
    }) : null;
  }) || '') || children);
}

Row.propTypes = _objectSpread(_objectSpread({}, _globalProps["default"]), {}, {
  /** Space between columns */
  space: _propTypes["default"].number,

  /** Specifies the default alignment for items inside the flexible container. */
  alignItems: _propTypes["default"].oneOf(['flex-start', 'flex-end', 'center', 'stretch', 'baseline']),

  /** Modifies the behavior of the flex-wrap property */
  alignContent: _propTypes["default"].oneOf(['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'stretch']),

  /** Aligns the flexible container's items when the items do not use all available space on the main-axis (horizontally). */
  justifyContent: _propTypes["default"].oneOf(['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly']),

  /** Specifies whether the flex item should wrap or not. */
  flexWrap: _propTypes["default"].oneOf(['nowrap', 'wrap', 'wrap-reverse']),

  /** Specifies the direction of the flex item. */
  flexDirection: _propTypes["default"].oneOf(['row', 'row-reverse', 'column', 'column-reverse'])
});
Row.defaultProps = {
  flexWrap: 'wrap'
};

var _default = (0, _recompose.compose)(_hoc.withForwardRef, _hoc.withThemeConsumer, _hoc.withGlobalProps)(Row);

exports["default"] = _default;