import * as React from "react";
function MediaServicesAwsElementalLink({
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
  }, "Icon-Architecture/48/Arch_AWS-Elemental-Link_48") : title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("g", {
    id: "Icon-Architecture/48/Arch_AWS-Elemental-Link_48",
    stroke: "none",
    strokeWidth: 1,
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("g", {
    id: "Icon-Architecture-BG/48/Media-Services",
    fill: "#ED7100"
  }, /*#__PURE__*/React.createElement("rect", {
    id: "Rectangle",
    x: 0,
    y: 0,
    width: 64,
    height: 64
  })), /*#__PURE__*/React.createElement("g", {
    id: "Icon-Service/48/AWS-Elemental-Link_48",
    transform: "translate(12.999500, 10.000050)",
    fill: "#FFFFFF"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M14.729,4.62125 L13.729,2.88925 L18.5,0.13425 C18.809,-0.04475 19.192,-0.04475 19.5,0.13425 L24.273,2.88925 L23.273,4.62125 L19,2.15525 L14.729,4.62125 Z M23,35.37425 L19,37.68425 L15,35.37425 L15,30.75525 L19,28.44625 L23,30.75525 L23,35.37425 Z M25,30.17825 C25,29.82125 24.81,29.49125 24.5,29.31225 L19.5,26.42525 C19.192,26.24625 18.809,26.24625 18.5,26.42525 L13.5,29.31225 C13.191,29.49125 13,29.82125 13,30.17825 L13,31.50025 L0,31.50025 L0,33.50025 L13,33.50025 L13,35.95225 C13,36.30925 13.191,36.63925 13.5,36.81825 L18,39.41625 L18,43.50025 L20,43.50025 L20,39.41625 L24.5,36.81825 C24.81,36.63925 25,36.30925 25,35.95225 L25,33.50025 L38,33.50025 L38,31.50025 L25,31.50025 L25,30.17825 Z M29,19.50025 L34,19.50025 L34,17.50025 L29,17.50025 L29,19.50025 Z M29,14.50025 L34,14.50025 L34,12.50025 L29,12.50025 L29,14.50025 Z M5,13.50025 L18,13.50025 L18,11.50025 L5,11.50025 L5,13.50025 Z M2,22.50025 L37,22.50025 L37,9.50025 L2,9.50025 L2,22.50025 Z M38,7.50025 L1,7.50025 C0.448,7.50025 0,7.94825 0,8.50025 L0,23.50025 C0,24.05225 0.448,24.50025 1,24.50025 L38,24.50025 C38.553,24.50025 39,24.05225 39,23.50025 L39,8.50025 C39,7.94825 38.553,7.50025 38,7.50025 L38,7.50025 Z",
    id: "AWS-Elemental-Link_Icon_48_Squid"
  }))));
}
const ForwardRef = React.forwardRef(MediaServicesAwsElementalLink);
export default ForwardRef;