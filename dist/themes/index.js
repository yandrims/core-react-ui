"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;/** base style */var baseStyle={fontFamily:"\"Lato\",-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif",fontSize:15,// in px
colorText:"#000000",colorPrimary:"#219191",colorPrimaryText:"#ffffff",colorDisabled:"#AAAAAA",colorDisabledText:"#EEEEEE",colorDark:"#1e3c3c",colorLight:"#caf7f7",colorLink:"#219191"},breakpoints={xxs:320,// in px
xs:386,// in px
sm:576,// in px
md:768,// in px
lg:992,// in px
xl:1200,// in px
xxl:1500// in px
},container={padding:baseStyle.fontSize||15,// in px
maxWidth:1366// in px
},spacing={multiplierFactor:3},formConfig={borderWidth:1,// in px
borderRadius:2,fontWeight:400,fontSize:{default:5,xxs:2,xs:3,sm:4,md:5,lg:6,xl:7,xxl:8},px:{default:5,xxs:2,xs:3,sm:4,md:5,lg:6,xl:7,xxl:8},py:{default:2.5,xxs:1,xs:1.5,sm:2,md:2.5,lg:3,xl:3.5,xxl:4}},_default={baseStyle:baseStyle,breakpoints:breakpoints,container:container,spacing:spacing,formConfig:formConfig};/** breakpoints */exports["default"]=_default;