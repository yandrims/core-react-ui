"use strict";var _themes=_interopRequireDefault(require("../themes"));Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}/** theme */var baseStyle=_themes["default"].baseStyle,colorPrimary=baseStyle.colorPrimary,colorPrimaryText=baseStyle.colorPrimaryText,colorDisabled=baseStyle.colorDisabled,colorDisabledText=baseStyle.colorDisabledText,PALETTE={BLACK:"#000000",BLUE:"#0000FF",BLUE_DARK:"#0000AF",BLUE_LIGHT:"#8BBBFF",BROWN:"#523809",CYAN:"#00FFFF",GOLD:"#CBBC29",GREEN:"#52AE4C",GREEN_DARK:"#007300",GREEN_LIGHT:"#00D400",GREY:"#AAAAAA",GREY_DARK:"#888888",GREY_LIGHT:"#EEEEEE",LIME:"#00FF00",MAGENTA:"#FF00FF",MAROON:"#800000",NAVY:"#000080",OLIVE:"#808000",ORANGE:"#F4792C",PURPLE:"#800080",RED:"#FF0000",RED_DARK:"#890000",RED_LIGHT:"#FFB8C3",SILVER:"#C0C0C0",TEAL:"#008080",TRANSPARENT:" transparent",TURQUOISE:"#12B9D2",WHITE:"#FFFFFF",YELLOW:"#ffeb00"},BLACK=PALETTE.BLACK,BLUE=PALETTE.BLUE,GREEN=PALETTE.GREEN,GREY=PALETTE.GREY,GREY_LIGHT=PALETTE.GREY_LIGHT,RED=PALETTE.RED,TURQUOISE=PALETTE.TURQUOISE,YELLOW=PALETTE.YELLOW,WHITE=PALETTE.WHITE,COLOR={PRIMARY:colorPrimary||TURQUOISE,PRIMARY_TEXT:colorPrimaryText||WHITE,DISABLED:colorDisabled||GREY,DISABLED_TEXT:colorDisabledText||GREY_LIGHT},STATUS={SUCCESS:GREEN,SUCCESS_TEXT:WHITE,INFO:BLUE,INFO_TEXT:WHITE,WARNING:YELLOW,WARNING_TEXT:BLACK,DANGER:RED,DANGER_TEXT:WHITE},_default={PALETTE:PALETTE,COLOR:COLOR,STATUS:STATUS};exports["default"]=_default;