const React = require("react");
function AnalyticsArchAwsDataExchange({
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
  }, "Icon-Architecture/48/Arch_AWS-Data-Exchange_48") : title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("g", {
    id: "Icon-Architecture/48/Arch_AWS-Data-Exchange_48",
    stroke: "none",
    strokeWidth: 1,
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("g", {
    id: "Icon-Architecture-BG/48/Analytics",
    fill: "#8C4FFF"
  }, /*#__PURE__*/React.createElement("rect", {
    id: "Rectangle",
    x: 0,
    y: 0,
    width: 64,
    height: 64
  })), /*#__PURE__*/React.createElement("path", {
    d: "M24.763,43.3 L21.717,40.253 L24.763,37.207 L23.349,35.793 L19.596,39.546 C19.205,39.937 19.205,40.57 19.596,40.96 L23.349,44.714 L24.763,43.3 Z M42.136,25.246 C42.324,25.058 42.429,24.804 42.429,24.539 C42.429,24.274 42.324,24.019 42.136,23.832 L38.382,20.078 L36.968,21.492 L40.015,24.539 L36.968,27.586 L38.382,29 L42.136,25.246 Z M36,43.103 L46,43.103 L46,41.103 L36,41.103 L36,43.103 Z M30,47.103 L54,47.103 L54,45.103 L30,45.103 L30,47.103 Z M13,25.103 L24,25.103 L24,23.103 L13,23.103 L13,25.103 Z M10,19.103 L34,19.103 L34,17.103 L10,17.103 L10,19.103 Z M50.835,25.133 C50.835,18.443 45.392,13 38.701,13 C36.64,13 34.604,13.526 32.813,14.522 L33.785,16.27 C35.28,15.439 36.98,15 38.701,15 C44.289,15 48.835,19.546 48.835,25.133 C48.835,30.721 44.289,35.267 38.701,35.267 C37.776,35.267 36.859,35.142 35.977,34.897 L35.44,36.823 C36.496,37.117 37.594,37.267 38.701,37.267 C45.392,37.267 50.835,31.824 50.835,25.133 L50.835,25.133 Z M28.916,27.778 C28.685,26.918 28.568,26.029 28.568,25.133 C28.568,23.791 28.826,22.487 29.336,21.257 L27.489,20.491 C26.877,21.965 26.568,23.527 26.568,25.133 C26.568,26.204 26.708,27.269 26.985,28.298 L28.916,27.778 Z M33,51.103 L14,51.103 C13.448,51.103 13,50.655 13,50.103 L13,31.103 C13,30.55 13.448,30.103 14,30.103 L33,30.103 C33.553,30.103 34,30.55 34,31.103 L34,43.103 L32,43.103 L32,32.103 L15,32.103 L15,49.103 L34,49.103 L34,50.103 C34,50.655 33.553,51.103 33,51.103 L33,51.103 Z",
    id: "AWS-Data-Exchange_Icon_48_Squid",
    fill: "#FFFFFF"
  })));
}
const ForwardRef = React.forwardRef(AnalyticsArchAwsDataExchange);
module.exports = ForwardRef;