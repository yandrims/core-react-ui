"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _style = require("../../helpers/style");

var _utils = require("../../helpers/utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/** npm packages */

/** helpers */
var mainStyle = function mainStyle(_ref) {
  var space = _ref.space,
      alignItems = _ref.alignItems,
      alignContent = _ref.alignContent,
      justifyContent = _ref.justifyContent,
      flexDirection = _ref.flexDirection,
      flexWrap = _ref.flexWrap,
      theme = _ref.theme;
  var _theme$spacing = theme.spacing,
      spacing = _theme$spacing === void 0 ? {} : _theme$spacing;
  var factor = spacing && spacing.multiplierFactor || 1;
  var val = space * factor;
  return "\n\t\tdisplay: flex;\n\t\t".concat(alignItems && "align-items: ".concat(alignItems, ";") || '', "\n\t\t").concat(alignContent && "align-content: ".concat(alignContent, ";") || '', "\n\t\t").concat(justifyContent && "justify-content: ".concat(justifyContent, ";") || '', "\n\t\t").concat(flexWrap && "flex-wrap: ".concat(flexWrap, ";") || '', "\n\t\t").concat(flexDirection && "flex-direction: ".concat(flexDirection, ";") || '', "\n\t\t").concat(space && "margin-left: -".concat((0, _utils.rem)(val), ";margin-right: -").concat((0, _utils.rem)(val), ";") || '', "\n\t");
};

var Styles = _styledComponents["default"].div.withConfig({
  displayName: "Styles",
  componentId: "sc-77gpfz-0"
})(["", " ", ""], mainStyle, _style.commonStyles);

var _default = Styles;
exports["default"] = _default;