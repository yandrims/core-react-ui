"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var _styledComponents=_interopRequireDefault(require("styled-components")),_style=require("../../helpers/style"),_colors=_interopRequireDefault(require("../../constants/colors"));function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}/** npm packages */ /** helpers */ /** constants */var mainStyle=function(a){var b=a.bgColor,c=void 0===b?"":b,d=a.textColor,e=void 0===d?"":d,f=a.isBordered,g=a.borderWidth,h=void 0===g?1:g,i=a.borderStyle,j=void 0===i?"solid":i,k=a.borderColor,l=void 0===k?_colors["default"].PALETTE.GREY:k,m=a.borderRadius,n=void 0===m?0:m;return"\n\t\t".concat(c&&"background: ".concat(c,";")||"","\n\t\t").concat(e&&"color: ".concat(e,";")||"","\n\t\tborder-radius: ").concat(n,"px;\n\t\t").concat(f&&"border: ".concat(h,"px ").concat(j," ").concat(l,";")||"","\n\t")},Styles=_styledComponents["default"].div.withConfig({displayName:"styles__Styles",componentId:"sc-1onteju-0"})([""," ",""],mainStyle,_style.commonStyles),_default=Styles;exports["default"]=_default;