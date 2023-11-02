const React = require("react");
function AnalyticsArchAwsDataPipeline({
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
  }, "Icon-Architecture/48/Arch_AWS-Data-Pipeline_48") : title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("g", {
    id: "Icon-Architecture/48/Arch_AWS-Data-Pipeline_48",
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
    d: "M48,49 L51,49 L51,47 L48,47 L48,49 Z M18,47 L46,47 L46,45 L18,45 L18,47 Z M13,49 L16,49 L16,47 L13,47 L13,49 Z M13,29 L16,29 L16,27 L13,27 L13,29 Z M29.999,29 L34,29 L46,29 L46,31 L18,31 L18,29 L29.999,29 Z M31,24 L33.001,24 L33,27 L30.999,27 L31,24 Z M27,22 C26.558,22 26.184,22.286 26.051,22.682 C25.884,22.801 25.463,23 25,23 C23.579,23 23,22.42 23,21 C23,19.561 23.56,19 25,19 C25.459,19 25.889,19.213 26.058,19.339 C26.198,19.725 26.566,20 27,20 L37,20 C37.429,20 37.797,19.729 37.938,19.347 C38.108,19.218 38.542,19 39,19 C40.431,19 41.015,19.58 41.015,21 C41.015,22.458 40.469,23 39,23 C38.528,23 38.118,22.814 37.954,22.699 C37.826,22.293 37.447,22 37,22 L27,22 Z M32,16 C32.663,16 33,16.673 33,18 L31,18 C31,16.673 31.337,16 32,16 L32,16 Z M48,45 L51,45 L51,31 L48,31 L48,45 Z M18,43 L46,43 L46,33 L18,33 L18,43 Z M13,45 L16,45 L16,31 L13,31 L13,45 Z M48,29 L51,29 L51,27 L48,27 L48,29 Z M51,25 L48,25 C46.242,25 46,25.961 46,27 L35,27 L35.001,24 L36.422,24 C36.988,24.618 38.031,25 39,25 C41.551,25 43.015,23.542 43.015,21 C43.015,18.458 41.551,17 39,17 C38.157,17 37.05,17.37 36.444,18 L35,18 C35,15.495 33.879,14 32,14 C30.121,14 29,15.495 29,18 L27.555,18 C26.949,17.37 25.842,17 25,17 C22.458,17 21,18.458 21,21 C21,23.542 22.458,25 25,25 C25.867,25 26.971,24.635 27.568,24 L29,24 L28.999,27 L18,27 C18,26.032 17.845,25 16,25 L13,25 C11.154,25 11,26.032 11,27 L11,49 C11,50.297 11.318,51 13,51 L16,51 C17.845,51 18,49.968 18,49 L46,49 C46,49.968 46.154,51 48,51 L51,51 C52.845,51 53,49.968 53,49 L53,27 C53,25.961 52.757,25 51,25 L51,25 Z",
    id: "AWS-Data-Pipeline_Icon_48_Squid",
    fill: "#FFFFFF"
  })));
}
const ForwardRef = React.forwardRef(AnalyticsArchAwsDataPipeline);
module.exports = ForwardRef;