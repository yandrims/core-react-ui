"use strict";var e,t=(e=require("react"))&&"object"==typeof e&&"default"in e?e.default:e;!function(e){if(e&&"undefined"!=typeof window){var t=document.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e,document.head.appendChild(t)}}(".test-component {\n  background-color: white;\n  border: 1px solid black;\n  padding: 16px;\n  width: 360px;\n  text-align: center;\n}\n.test-component .heading {\n  font-size: 64px;\n}\n.test-component.test-component-secondary {\n  background-color: black;\n  color: white;\n}");module.exports=function(e){var n=e.theme;return t.createElement("div",{className:"test-component test-component-"+n},t.createElement("h1",{className:"heading"},"I'm the test component"),t.createElement("h2",null,"Made with love by Harvey"))};
