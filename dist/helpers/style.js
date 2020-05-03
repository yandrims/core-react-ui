"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.appendStyle = appendStyle;
exports.customCSS = customCSS;
exports.spacing = spacing;
exports.alignment = alignment;
exports.display = display;
exports.commonStyles = commonStyles;

var _utils = require("./utils");

/** helpers */

/** append style */
function appendStyle(style) {
  return style && "&&& { ".concat(style, " }") || '';
}
/** custom css */


function customCSS(_ref) {
  var style = _ref.customCSS;
  return appendStyle(style);
}
/** spacing */


function spacing(_ref2) {
  var margin = _ref2.margin,
      marginY = _ref2.marginY,
      marginX = _ref2.marginX,
      marginTop = _ref2.marginTop,
      marginBottom = _ref2.marginBottom,
      marginLeft = _ref2.marginLeft,
      marginRight = _ref2.marginRight,
      padding = _ref2.padding,
      paddingY = _ref2.paddingY,
      paddingX = _ref2.paddingX,
      paddingTop = _ref2.paddingTop,
      paddingBottom = _ref2.paddingBottom,
      paddingLeft = _ref2.paddingLeft,
      paddingRight = _ref2.paddingRight;
  var styles = [];

  var check = function check(elm) {
    return typeof elm !== 'undefined';
  };

  var direction = function direction(elm, dir, value) {
    return "".concat(elm, "-").concat(dir, ": ").concat((0, _utils.rem)(value));
  };
  /** margins */


  if (check(margin)) {
    styles.push("margin: ".concat((0, _utils.rem)(margin)));
  }

  if (check(marginY)) {
    styles.push(direction('margin', 'top', marginY));
    styles.push(direction('margin', 'bottom', marginY));
  }

  if (check(marginX)) {
    styles.push(direction('margin', 'left', marginX));
    styles.push(direction('margin', 'right', marginX));
  }

  if (check(marginTop)) {
    styles.push(direction('margin', 'top', marginTop));
  }

  if (check(marginBottom)) {
    styles.push(direction('margin', 'bottom', marginBottom));
  }

  if (check(marginLeft)) {
    styles.push(direction('margin', 'left', marginLeft));
  }

  if (check(marginRight)) {
    styles.push(direction('margin', 'right', marginRight));
  }
  /** paddings */


  if (check(padding)) {
    styles.push("padding: ".concat((0, _utils.rem)(padding)));
  }

  if (check(paddingY)) {
    styles.push(direction('padding', 'top', paddingY));
    styles.push(direction('padding', 'bottom', paddingY));
  }

  if (check(paddingX)) {
    styles.push(direction('padding', 'left', paddingX));
    styles.push(direction('padding', 'right', paddingX));
  }

  if (check(paddingTop)) {
    styles.push(direction('padding', 'top', paddingTop));
  }

  if (check(paddingBottom)) {
    styles.push(direction('padding', 'bottom', paddingBottom));
  }

  if (check(paddingLeft)) {
    styles.push(direction('padding', 'left', paddingLeft));
  }

  if (check(paddingRight)) {
    styles.push(direction('padding', 'right', paddingRight));
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
  /** display */

  if (style) {
    styles.push("display: ".concat(style));
  }

  return appendStyle(styles && styles.length && styles.join(';') || '');
}
/** common styles */


function commonStyles(params) {
  return "\n\t\t".concat(spacing(params), "\n\t\t").concat(alignment(params), "\n\t\t").concat(display(params), "\n\t\t").concat(customCSS(params), "\n\t");
}