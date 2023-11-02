const React = require("react");
function StorageArchAwsSnowball({
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
  }, "Icon-Architecture/48/Arch_AWS-Snowball_48") : title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("g", {
    id: "Icon-Architecture/48/Arch_AWS-Snowball_48",
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
  })), /*#__PURE__*/React.createElement("path", {
    d: "M29,20 L35,20 L35,18 L29,18 L29,20 Z M22,37 L42,37 L42,28 L22,28 L22,37 Z M43,26 L21,26 C20.447,26 20,26.448 20,27 L20,38 C20,38.552 20.447,39 21,39 L43,39 C43.553,39 44,38.552 44,38 L44,27 C44,26.448 43.553,26 43,26 L43,26 Z M52,43.951 C52,45.632 50.729,47 49.168,47 L14.832,47 C13.271,47 12,45.632 12,43.951 L12,19.049 C12,17.368 13.271,16 14.832,16 L49.168,16 C50.729,16 52,17.368 52,19.049 L52,43.951 Z M49.168,14 L14.832,14 C12.168,14 10,16.265 10,19.049 L10,43.951 C10,46.735 12.168,49 14.832,49 L49.168,49 C51.832,49 54,46.735 54,43.951 L54,19.049 C54,16.265 51.832,14 49.168,14 L49.168,14 Z M48,42.121 C48,42.597 47.613,43 47.155,43 L16.845,43 C16.387,43 16,42.597 16,42.121 L16,20.879 C16,20.403 16.387,20 16.845,20 L24.279,20 L25.052,22.316 C25.188,22.725 25.569,23 26,23 L38,23 C38.431,23 38.813,22.725 38.948,22.316 L39.721,20 L47.155,20 C47.613,20 48,20.403 48,20.879 L48,42.121 Z M47.155,18 L39,18 C38.569,18 38.188,18.275 38.052,18.684 L37.279,21 L26.721,21 L25.948,18.684 C25.813,18.275 25.431,18 25,18 L16.845,18 C15.276,18 14,19.292 14,20.879 L14,42.121 C14,43.708 15.276,45 16.845,45 L47.155,45 C48.724,45 50,43.708 50,42.121 L50,20.879 C50,19.292 48.724,18 47.155,18 L47.155,18 Z",
    id: "Fill-3",
    fill: "#FFFFFF"
  })));
}
const ForwardRef = React.forwardRef(StorageArchAwsSnowball);
module.exports = ForwardRef;