"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.appendStyle = appendStyle;
exports.customCSS = customCSS;
exports.spacing = spacing;
exports.alignment = alignment;
exports.display = display;
exports.responsive = responsive;
exports.commonStyles = commonStyles;

var _utils = require("./utils");

/* eslint-disable no-prototype-builtins */

/* eslint-disable no-restricted-syntax */

/** helpers */

/** append style */
function appendStyle(style) {
  return style && "&&& { ".concat(style, " }") || '';
}
/** custom css */


function customCSS(_ref) {
  var styles = _ref.css;
  return appendStyle(styles);
}
/** spacing */


function spacing(_ref2) {
  var m = _ref2.m,
      my = _ref2.my,
      mx = _ref2.mx,
      mt = _ref2.mt,
      mb = _ref2.mb,
      ml = _ref2.ml,
      mr = _ref2.mr,
      p = _ref2.p,
      py = _ref2.py,
      px = _ref2.px,
      pt = _ref2.pt,
      pb = _ref2.pb,
      pl = _ref2.pl,
      pr = _ref2.pr,
      _ref2$theme = _ref2.theme,
      theme = _ref2$theme === void 0 ? {} : _ref2$theme;
  var factor = theme && theme.spacing && theme.spacing.multiplierFactor || 1;
  var styles = [];

  var check = function check(elm) {
    return typeof elm !== 'undefined';
  };

  var space = function space(elm, pos, value) {
    return "".concat(elm, "-").concat(pos, ": ").concat((0, _utils.rem)(value * factor));
  };
  /** margins */


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
  /** paddings */


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

  return appendStyle(styles && styles.length && styles.join(';') || '');
}
/** alignment */


function alignment(_ref3) {
  var textAlign = _ref3.textAlign,
      verticalAlign = _ref3.verticalAlign;
  var styles = [];
  /** textAlign */

  if (textAlign) {
    styles.push("text-align: ".concat(textAlign));
  }
  /** verticalAlign */


  if (verticalAlign) {
    styles.push("vertical-align: ".concat(verticalAlign));
  }

  return appendStyle(styles && styles.length && styles.join(';') || '');
}
/** display */


function display(_ref4) {
  var style = _ref4.display;
  var styles = [];

  if (style) {
    styles.push("display: ".concat(style));
  }

  return appendStyle(styles && styles.length && styles.join(';') || '');
}
/** responsive */


function responsive(_ref5) {
  var style = _ref5.responsive,
      _ref5$theme = _ref5.theme,
      theme = _ref5$theme === void 0 ? {} : _ref5$theme;
  var styles = [];

  if (style) {
    var breakpoints = theme.breakpoints;

    if (breakpoints) {
      for (var key in breakpoints) {
        if (breakpoints.hasOwnProperty(key)) {
          var breakpoint = style[key];
          var value = breakpoints[key];

          if (breakpoint) {
            styles.push("@media (min-width: ".concat(value, "px) {\n\t\t\t\t\t\t\t").concat(spacing(breakpoint), "\n\t\t\t\t\t\t\t").concat(display(breakpoint), "\n\t\t\t\t\t\t}"));
          }
        }
      }
    }
  }

  return appendStyle(styles && styles.length && styles.join(';') || '');
}
/** common styles */


function commonStyles(params) {
  return "\n\t\t".concat(spacing(params), "\n\t\t").concat(alignment(params), "\n\t\t").concat(display(params), "\n\t\t").concat(responsive(params), "\n\t\t").concat(customCSS(params), "\n\t");
}