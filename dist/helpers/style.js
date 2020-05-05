"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.appendStyle = appendStyle;
exports.customCSS = customCSS;
exports.combineGlobalStyles = combineGlobalStyles;
exports.responsive = responsive;
exports.commonStyles = commonStyles;

var _utils = require("./utils");

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/** append style */
function appendStyle(style) {
  return style && "&&& { ".concat(style, " }") || '';
}
/** custom css */


function customCSS(_ref) {
  var styles = _ref.css;
  return appendStyle(styles);
}
/** combine global style props */


function combineGlobalStyles(_ref2) {
  var _ref2$theme = _ref2.theme,
      theme = _ref2$theme === void 0 ? {} : _ref2$theme,
      rest = _objectWithoutProperties(_ref2, ["theme"]);

  var styles = [];
  /** spacing */

  var _theme$spacing = theme.spacing,
      spacing = _theme$spacing === void 0 ? {} : _theme$spacing;
  var factor = spacing && spacing.multiplierFactor || 1;

  var check = function check(elm) {
    return typeof elm !== 'undefined';
  };

  var space = function space(elm, pos, val) {
    return "".concat(elm, "-").concat(pos, ": ").concat((0, _utils.rem)(val * factor));
  };
  /** margin */


  var m = rest.m,
      my = rest.my,
      mx = rest.mx,
      mt = rest.mt,
      mb = rest.mb,
      ml = rest.ml,
      mr = rest.mr;

  if (check(m)) {
    styles.push("margin: ".concat((0, _utils.rem)(m * factor)));
  }

  if (check(my)) {
    styles.push(space('margin', 'top', my));
    styles.push(space('margin', 'bottom', my));
  }

  if (check(mx)) {
    styles.push(space('margin', 'left', mx));
    styles.push(space('margin', 'right', mx));
  }

  if (check(mt)) {
    styles.push(space('margin', 'top', mt));
  }

  if (check(mb)) {
    styles.push(space('margin', 'bottom', mb));
  }

  if (check(ml)) {
    styles.push(space('margin', 'left', ml));
  }

  if (check(mr)) {
    styles.push(space('margin', 'right', mr));
  }
  /** padding */


  var p = rest.p,
      py = rest.py,
      px = rest.px,
      pt = rest.pt,
      pb = rest.pb,
      pl = rest.pl,
      pr = rest.pr;

  if (check(p)) {
    styles.push("padding: ".concat((0, _utils.rem)(p * factor)));
  }

  if (check(py)) {
    styles.push(space('padding', 'top', py));
    styles.push(space('padding', 'bottom', py));
  }

  if (check(px)) {
    styles.push(space('padding', 'left', px));
    styles.push(space('padding', 'right', px));
  }

  if (check(pt)) {
    styles.push(space('padding', 'top', pt));
  }

  if (check(pb)) {
    styles.push(space('padding', 'bottom', pb));
  }

  if (check(pl)) {
    styles.push(space('padding', 'left', pl));
  }

  if (check(pr)) {
    styles.push(space('padding', 'right', pr));
  }
  /** textAlign */


  var textAlign = rest.textAlign;

  if (textAlign) {
    styles.push("text-align: ".concat(textAlign));
  }
  /** verticalAlign */


  var verticalAlign = rest.verticalAlign;

  if (verticalAlign) {
    styles.push("vertical-align: ".concat(verticalAlign));
  }
  /** display */


  var display = rest.display;

  if (display) {
    styles.push("display: ".concat(display));
  }
  /** position */


  var position = rest.position;

  if (position) {
    styles.push("position: ".concat(position));
  }

  return appendStyle(styles && styles.length && styles.join(';') || '');
}
/** responsive */


function responsive(_ref3) {
  var style = _ref3.responsive,
      _ref3$theme = _ref3.theme,
      theme = _ref3$theme === void 0 ? {} : _ref3$theme;
  var styles = [];

  if (style) {
    var breakpoints = theme.breakpoints;

    if (breakpoints) {
      for (var key in breakpoints) {
        if (breakpoints.hasOwnProperty(key)) {
          var breakpoint = style[key];
          var value = breakpoints[key];

          if (breakpoint) {
            styles.push("@media (min-width: ".concat(value, "px) {\n\t\t\t\t\t\t\t").concat(combineGlobalStyles(breakpoint), "\n\t\t\t\t\t\t}"));
          }
        }
      }
    }
  }

  return appendStyle(styles && styles.length && styles.join(';') || '');
}
/** common styles */


function commonStyles(params) {
  return "\n\t\t".concat(combineGlobalStyles(params), "\n\t\t").concat(responsive(params), "\n\t\t").concat(customCSS(params), "\n\t");
}