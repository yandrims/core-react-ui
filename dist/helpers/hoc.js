"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withGlobalProps = exports.withThemeConsumer = exports.withForwardRef = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = require("styled-components");

var _utils = require("./utils");

var _default = _interopRequireDefault(require("../themes/default"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var withForwardRef = function withForwardRef(Component) {
  var Wrapper = function Wrapper(_ref) {
    var forwardedRef = _ref.forwardedRef,
        rest = _objectWithoutProperties(_ref, ["forwardedRef"]);

    return /*#__PURE__*/_react["default"].createElement(Component, _extends({
      ref: forwardedRef
    }, rest));
  };

  return _react["default"].forwardRef(function (props, ref) {
    return /*#__PURE__*/_react["default"].createElement(Wrapper, _extends({}, props, {
      forwardRef: ref
    }));
  });
};

exports.withForwardRef = withForwardRef;

var withThemeConsumer = function withThemeConsumer(Component) {
  return function (props) {
    return /*#__PURE__*/_react["default"].createElement(_styledComponents.ThemeConsumer, null, function (theme) {
      var mergedTheme = theme ? (0, _utils.deepMerge)(_default["default"], theme) : _default["default"];
      return /*#__PURE__*/_react["default"].createElement(Component, _extends({}, props, {
        theme: mergedTheme
      }));
    });
  };
};

exports.withThemeConsumer = withThemeConsumer;

var withGlobalProps = function withGlobalProps(Component) {
  return function (_ref2) {
    var ariaLabel = _ref2.ariaLabel,
        ariaLabelledBy = _ref2.ariaLabelledBy,
        dataCustom = _ref2.dataCustom,
        rest = _objectWithoutProperties(_ref2, ["ariaLabel", "ariaLabelledBy", "dataCustom"]);

    return /*#__PURE__*/_react["default"].createElement(Component, _extends({}, rest, {
      "aria-label": ariaLabel,
      "aria-labelledby": ariaLabelledBy,
      "data-custom": dataCustom
    }));
  };
};

exports.withGlobalProps = withGlobalProps;