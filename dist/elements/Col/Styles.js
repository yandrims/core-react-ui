"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _style = require("../../helpers/style");

var _utils = require("../../helpers/utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* eslint-disable no-prototype-builtins */

/* eslint-disable no-restricted-syntax */

/** npm packages */

/** helpers */
var propsAlignSelfStyle = function propsAlignSelfStyle(alignSelf) {
  var alignConfig = {
    auto: 'auto',
    'flex-start': 'flex-start',
    'flex-end': 'flex-end',
    center: 'center',
    baseline: 'baseline',
    stretch: 'stretch'
  };
  return alignConfig[alignSelf] && "align-self: ".concat(alignConfig[alignSelf]);
};

var getRange = function getRange(range) {
  return 100 / (12 / range);
};

var responsiveCol = function responsiveCol(responsive) {
  var theme = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var styles = [];

  if (responsive) {
    var breakpoints = theme.breakpoints;

    if (breakpoints) {
      for (var key in breakpoints) {
        if (breakpoints.hasOwnProperty(key)) {
          var breakpoint = responsive[key];
          var value = breakpoints[key];
          var col = breakpoint.col;

          if (breakpoint && col) {
            styles.push("@media (min-width: ".concat(value, "px) {\n\t\t\t\t\t\t\tflex: 0 0 ").concat(getRange(col), "%;max-width: ").concat(getRange(col), "%;\n\t\t\t\t\t\t}"));
          }
        }
      }
    }
  }

  return (0, _style.appendStyle)(styles && styles.length && styles.join(';') || '');
};

var mainStyle = function mainStyle(_ref) {
  var space = _ref.space,
      col = _ref.col,
      alignSelf = _ref.alignSelf,
      isAutoWidth = _ref.isAutoWidth,
      order = _ref.order,
      flexGrow = _ref.flexGrow,
      flexShrink = _ref.flexShrink,
      flexBasis = _ref.flexBasis,
      responsive = _ref.responsive,
      theme = _ref.theme;
  var _theme$spacing = theme.spacing,
      spacing = _theme$spacing === void 0 ? {} : _theme$spacing;
  var factor = spacing && spacing.multiplierFactor || 1;
  var val = space * factor;
  return "\n\t\tposition: relative;\n\t\tbox-sizing: border-box;\n\t\t".concat(space && "padding-left: ".concat((0, _utils.rem)(val), ";padding-right: ").concat((0, _utils.rem)(val), ";") || '', "\n\t\tflex-basis: ").concat(flexBasis || 0, ";\n\t\tflex-grow: ").concat(flexGrow || 1, ";\n\t\t").concat(flexShrink && "flex-shrink: ".concat(flexShrink, ";") || '', "\n\t\t").concat(alignSelf && propsAlignSelfStyle(alignSelf) || '', "\n\t\t").concat(order && "order: ".concat(order, ";") || '', "\n\t\t").concat(col && "flex: 0 0 ".concat(getRange(col), "%;max-width: ").concat(getRange(col), "%;") || '', "\n\t\t").concat(isAutoWidth && "flex: 0 0 auto;width: auto;max-width: none;" || 'width: 100%;max-width: 100%;', "\n\t\t").concat(responsiveCol(responsive, theme), "\n\t");
};

var Styles = _styledComponents["default"].div.withConfig({
  displayName: "Styles",
  componentId: "sc-4yfvac-0"
})(["", " ", ""], mainStyle, _style.commonStyles);

var _default = Styles;
exports["default"] = _default;