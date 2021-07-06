"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var _styledComponents=_interopRequireDefault(require("styled-components")),_style=require("../../helpers/style"),_utils=require("../../helpers/utils");function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}/* eslint-disable no-prototype-builtins */ /* eslint-disable no-restricted-syntax */ /** npm packages */ /** helpers */var propsAlignSelfStyle=function(a){var b={auto:"auto","flex-start":"flex-start","flex-end":"flex-end",center:"center",baseline:"baseline",stretch:"stretch"};return b[a]&&"align-self: ".concat(b[a])||""},getRange=function(a){return 100/(12/a)},responsiveCol=function(a){var b=1<arguments.length&&arguments[1]!==void 0?arguments[1]:{},c=[];if(a){var d=b.breakpoints;if(d)for(var h in d)if(d.hasOwnProperty(h)){var e=a[h],f=d[h],g=e.col;e&&g&&c.push("@media (min-width: ".concat(f,"px) {\n\t\t\t\t\t\t\tflex: 0 0 ").concat(getRange(g),"%;max-width: ").concat(getRange(g),"%;\n\t\t\t\t\t\t}"))}}return(0,_style.appendStyle)(c&&c.length&&c.join(";")||"")},mainStyle=function(a){var b=a.space,c=a.col,d=a.alignSelf,e=a.isAutoWidth,f=a.order,g=a.flexGrow,h=a.flexShrink,i=a.flexBasis,j=a.responsive,k=a.theme,l=k.baseStyle.fontSize,m=k.spacing.multiplierFactor,n=void 0===m?1:m,o=b*n;return"\n\t\tposition: relative;\n\t\tbox-sizing: border-box;\n\t\t".concat(b&&"\n\t\t\t\tpadding-left: ".concat((0,_utils.rem)(o,l),";\n\t\t\t\tpadding-right: ").concat((0,_utils.rem)(o,l),";\n\t\t\t\t")||"","\n\t\tflex-basis: ").concat(i||0,";\n\t\tflex-grow: ").concat(g||1,";\n\t\t").concat(h&&"flex-shrink: ".concat(h,";")||"","\n\t\t").concat(d&&propsAlignSelfStyle(d)||"","\n\t\t").concat(f&&"order: ".concat(f,";")||"","\n\t\t").concat(c&&"flex: 0 0 ".concat(getRange(c),"%;max-width: ").concat(getRange(c),"%;")||"","\n\t\t").concat(e&&"flex: 0 0 auto;width: auto;max-width: none;"||"width: 100%;max-width: 100%;","\n\t\t").concat(responsiveCol(j,k),"\n\t")},Styles=_styledComponents["default"].div.withConfig({displayName:"styles__Styles",componentId:"sc-1egl2og-0"})([""," ",""],mainStyle,_style.commonStyles),_default=Styles;exports["default"]=_default;