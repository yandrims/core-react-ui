"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default2 = _interopRequireDefault(require("../themes/default"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/** theme */
var baseStyle = _default2["default"].baseStyle;
var colorPrimary = baseStyle.colorPrimary,
    colorPrimaryText = baseStyle.colorPrimaryText;
/** palette */

var PALETTE = {
  TRANSPARENT: ' transparent',
  BLACK: '#000000',
  WHITE: '#FFFFFF',
  RED: '#FF0000',
  RED_LIGHT: '#FFB8C3',
  RED_DARK: '#890000',
  GREY: '#AAAAAA',
  GREY_LIGHT: '#EEEEEE',
  GREY_DARK: '#888888',
  GREEN: '#52AE4C',
  GREEN_LIGHT: '#00D400',
  GREEN_DARK: '#007300',
  BLUE: '#0000FF',
  BLUE_LIGHT: '#8BBBFF',
  BLUE_DARK: '#0000AF',
  YELLOW: '#FFFF00',
  ORANGE: '#F4792C',
  LIME: '#00FF00',
  CYAN: '#00FFFF',
  MAGENTA: '#FF00FF',
  SILVER: '#C0C0C0',
  MAROON: '#800000',
  OLIVE: '#808000',
  PURPLE: '#800080',
  TEAL: '#008080',
  NAVY: '#000080',
  TURQUOISE: '#12B9D2',
  GOLD: '#CBBC29',
  BROWN: '#523809'
};
var BLACK = PALETTE.BLACK,
    WHITE = PALETTE.WHITE,
    RED_DARK = PALETTE.RED_DARK,
    GREY_LIGHT = PALETTE.GREY_LIGHT,
    GREY_DARK = PALETTE.GREY_DARK,
    GREEN = PALETTE.GREEN,
    BLUE = PALETTE.BLUE,
    YELLOW = PALETTE.YELLOW,
    TURQUOISE = PALETTE.TURQUOISE;
var COLOR = {
  PRIMARY: colorPrimary || TURQUOISE,
  PRIMARY_TEXT: colorPrimaryText || WHITE,
  DISABLED: GREY_DARK,
  DISABLED_TEXT: GREY_LIGHT
};
var STATUS = {
  SUCCESS: GREEN,
  SUCCESS_TEXT: WHITE,
  INFO: BLUE,
  INFO_TEXT: WHITE,
  WARNING: YELLOW,
  WARNING_TEXT: BLACK,
  DANGER: RED_DARK,
  DANGER_TEXT: WHITE
};
var _default = {
  PALETTE: PALETTE,
  COLOR: COLOR,
  STATUS: STATUS
};
exports["default"] = _default;