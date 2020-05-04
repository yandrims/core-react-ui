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
  var theme = _ref.theme,
      isFluid = _ref.isFluid;
  return "\n\t".concat(!isFluid && "max-width:".concat(theme.container.maxWidth, "px;"), "\n\tpadding-right: ").concat((0, _utils.rem)(theme.container.padding), ";\n\tpadding-left: ").concat((0, _utils.rem)(theme.container.padding), ";\n\tmargin-right: auto;\n\tmargin-left: auto;\n");
};

var Styles = _styledComponents["default"].div.withConfig({
  displayName: "Styles",
  componentId: "ji00d6-0"
})(["", " ", ""], mainStyle, _style.commonStyles);

var _default = Styles;
exports["default"] = _default;