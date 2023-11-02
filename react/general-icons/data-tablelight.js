const React = require("react");
function GeneralIconsDataTablelight({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    width: "48px",
    height: "48px",
    viewBox: "0 0 48 48",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title === undefined ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, "Icon-Resource/General-Resource/Res_Data-Table_48_Light") : title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("g", {
    id: "Icon-Resource/General-Resource/Res_Data-Table_48",
    stroke: "none",
    strokeWidth: 1,
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M13,15 L44,15 L44,10 L13,10 L13,15 Z M35,21 L44,21 L44,17 L35,17 L35,21 Z M35,27 L44,27 L44,23 L35,23 L35,27 Z M35,33 L44,33 L44,29 L35,29 L35,33 Z M35,39 L44,39 L44,35 L35,35 L35,39 Z M13,21 L22,21 L22,17 L13,17 L13,21 Z M24,21 L33,21 L33,17 L24,17 L24,21 Z M24,27 L33,27 L33,23 L24,23 L24,27 Z M24,33 L33,33 L33,29 L24,29 L24,33 Z M24,39 L33,39 L33,35 L24,35 L24,39 Z M13,39 L22,39 L22,35 L13,35 L13,39 Z M13,27 L22,27 L22,23 L13,23 L13,27 Z M13,33 L22,33 L22,29 L13,29 L13,33 Z M4,39 L11,39 L11,17 L4,17 L4,39 Z M4,15 L11,15 L11,10 L4,10 L4,15 Z M45,8 L3,8 C2.447,8 2,8.448 2,9 L2,40 C2,40.552 2.447,41 3,41 L45,41 C45.553,41 46,40.552 46,40 L46,9 C46,8.448 45.553,8 45,8 L45,8 Z",
    id: "Fill-1",
    fill: "#232F3D"
  })));
}
const ForwardRef = React.forwardRef(GeneralIconsDataTablelight);
module.exports = ForwardRef;