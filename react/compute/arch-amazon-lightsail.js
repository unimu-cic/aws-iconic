const React = require("react");
function ComputeArchAmazonLightsail({
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
  }, "Icon-Architecture/48/Arch_Amazon-Lightsail_48") : title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("g", {
    id: "Icon-Architecture/48/Arch_Amazon-Lightsail_48",
    stroke: "none",
    strokeWidth: 1,
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("g", {
    id: "Icon-Architecture-BG/48/Compute",
    fill: "#ED7100"
  }, /*#__PURE__*/React.createElement("rect", {
    id: "Rectangle",
    x: 0,
    y: 0,
    width: 64,
    height: 64
  })), /*#__PURE__*/React.createElement("path", {
    d: "M26,33 L28,33 L28,31 L26,31 L26,33 Z M21,33 L23,33 L23,31 L21,31 L21,33 Z M16,33 L18,33 L18,31 L16,31 L16,33 Z M11,33 L13,33 L13,31 L11,31 L11,33 Z M47.987,37.921 L49.556,37.398 L47.987,36.875 L47.464,35.307 L46.941,36.875 L45.373,37.398 L46.941,37.921 L47.464,39.489 L47.987,37.921 Z M29.617,40.66 L29.095,42.229 L27.526,42.751 L29.095,43.274 L29.617,44.843 L30.141,43.274 L31.709,42.751 L30.141,42.229 L29.617,40.66 Z M29.617,20.434 L29.095,22.003 L27.526,22.525 L29.095,23.048 L29.617,24.617 L30.141,23.048 L31.709,22.525 L30.141,22.003 L29.617,20.434 Z M32.946,31.945 C35.767,33.914 37.773,37.547 38.666,42.317 C40.316,40.08 42.684,36.14 42.684,31.945 C42.684,27.74 40.563,24.016 38.675,21.533 C37.785,26.323 35.775,29.971 32.946,31.945 L32.946,31.945 Z M30.509,32.864 C30.142,32.706 29.903,32.345 29.903,31.945 C29.903,31.545 30.142,31.183 30.509,31.026 C33.997,29.53 36.367,25.168 37.013,19.058 C37.054,18.666 37.322,18.334 37.697,18.212 C38.072,18.09 38.483,18.199 38.749,18.493 C40.965,20.946 44.684,25.956 44.684,31.945 C44.684,38.307 40.141,43.844 38.749,45.39 C38.556,45.604 38.284,45.721 38.006,45.721 C37.902,45.721 37.799,45.705 37.697,45.672 C37.321,45.55 37.053,45.218 37.012,44.826 C36.365,38.719 33.995,34.359 30.509,32.864 L30.509,32.864 Z M54,32 C54,42.477 45.477,51 35,51 C25.682,51 17.802,44.341 16.263,35.166 L18.235,34.834 C19.611,43.042 26.662,49 35,49 C44.374,49 52,41.374 52,32 C52,22.626 44.374,15 35,15 C26.662,15 19.611,20.958 18.235,29.166 L16.263,28.834 C17.802,19.659 25.682,13 35,13 C45.477,13 54,21.523 54,32 L54,32 Z",
    id: "Amazon-Lightsail-Icon_48_Squid",
    fill: "#FFFFFF"
  })));
}
const ForwardRef = React.forwardRef(ComputeArchAmazonLightsail);
module.exports = ForwardRef;