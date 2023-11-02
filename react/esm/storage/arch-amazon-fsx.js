import * as React from "react";
function StorageArchAmazonFsx({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    width: "64px",
    height: "64px",
    viewBox: "0 0 64 64",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title === undefined ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, "Icon-Architecture/48/Arch_Amazon-FSx_48") : title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("g", {
    id: "Icon-Architecture/48/Arch_Amazon-FSx_48",
    stroke: "none",
    strokeWidth: 1,
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("g", {
    id: "Icon-Architecture-BG/48/Storage",
    fill: "#7AA116"
  }, /*#__PURE__*/React.createElement("rect", {
    id: "Rectangle",
    x: 0,
    y: 0,
    width: 64,
    height: 64
  })), /*#__PURE__*/React.createElement("g", {
    id: "Icon-Service/48/Amazon-FSx_48",
    transform: "translate(10.000000, 21.700000)",
    fill: "#FFFFFF"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M33.844,14.562 L28.269,22.286 L30.783,22.286 L34.977,16.161 L33.844,14.562 Z M41.35,22.286 L44,22.286 L37.409,12.911 L43.411,4.543 L40.932,4.543 L36.188,11.315 L34.919,13.074 L41.35,22.286 Z M35.135,9.813 L31.444,4.543 L28.826,4.543 L33.814,11.572 L35.135,9.813 Z M18.143,11.241 C16.539,10.617 15.364,9.873 14.615,9.009 C13.865,8.145 13.49,7.078 13.49,5.808 C13.49,4.081 14.11,2.681 15.348,1.608 C16.586,0.536 18.216,-3.55271368e-15 20.236,-3.55271368e-15 C21.151,-3.55271368e-15 22.114,0.109 23.123,0.328 C24.133,0.546 25.085,0.854 25.981,1.249 L25.981,2.842 C23.858,2.092 21.973,1.717 20.328,1.717 C18.726,1.717 17.497,2.066 16.644,2.764 C15.79,3.461 15.364,4.455 15.364,5.746 C15.364,6.475 15.493,7.062 15.754,7.51 C16.014,7.958 16.442,8.364 17.034,8.728 C17.628,9.092 18.476,9.482 19.579,9.898 L22.92,11.179 C24.419,11.762 25.512,12.475 26.199,13.318 C26.886,14.161 27.23,15.218 27.23,16.487 C27.23,18.34 26.548,19.839 25.185,20.984 C23.821,22.129 22.026,22.701 19.798,22.701 C17.488,22.701 15.426,22.264 13.615,21.39 L13.615,19.797 C15.801,20.588 17.81,20.984 19.642,20.984 C21.369,20.984 22.749,20.578 23.78,19.766 C24.81,18.954 25.324,17.851 25.324,16.456 C25.324,15.603 25.044,14.874 24.482,14.27 C23.92,13.666 23.014,13.125 21.765,12.646 L18.143,11.241 Z M0,22.17 L0,0.531 L12.147,0.531 L12.147,2.186 L1.842,2.186 L1.842,10.46 L10.555,10.46 L10.555,12.116 L1.842,12.116 L1.842,22.17 L0,22.17 Z",
    id: "Amazon-FSx_48_Squid"
  }))));
}
const ForwardRef = React.forwardRef(StorageArchAmazonFsx);
export default ForwardRef;