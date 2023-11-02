const React = require("react");
function ComputeArchElasticFabricAdapter({
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
  }, "Icon-Architecture/48/Arch_Elastic-Fabric-Adapter_48") : title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("g", {
    id: "Icon-Architecture/48/Arch_Elastic-Fabric-Adapter_48",
    stroke: "none",
    strokeWidth: 1,
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("g", {
    id: "Icon-Architecture-BG/48/Compute",
    transform: "translate(-0.000000, 0.000000)",
    fill: "#ED7100"
  }, /*#__PURE__*/React.createElement("rect", {
    id: "Rectangle",
    x: 0,
    y: 0,
    width: 64,
    height: 64
  })), /*#__PURE__*/React.createElement("g", {
    id: "Icon-Service/48/Elastic-Fabric-Adapter_48",
    transform: "translate(10.000000, 14.000000)",
    fill: "#FFFFFF"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6.961,12.035 L5.102,11.298 C7.781,4.54 14.572,0 22,0 C29.428,0 36.219,4.54 38.898,11.298 L37.039,12.035 C34.659,6.033 28.615,2 22,2 C15.385,2 9.341,6.033 6.961,12.035 L6.961,12.035 Z M37.036,23.749 L38.901,24.473 C36.223,31.368 29.431,36 22,36 C14.569,36 7.777,31.368 5.099,24.473 L6.964,23.749 C9.346,29.88 15.388,34 22,34 C28.612,34 34.654,29.88 37.036,23.749 L37.036,23.749 Z M42,20.842 C42,20.926 41.926,21 41.842,21 L36.158,21 C36.074,21 36,20.926 36,20.842 L36,15.158 C36,15.074 36.074,15 36.158,15 L41.842,15 C41.926,15 42,15.074 42,15.158 L42,20.842 Z M41.842,13 L36.158,13 C34.968,13 34,13.968 34,15.158 L34,20.842 C34,22.032 34.968,23 36.158,23 L41.842,23 C43.032,23 44,22.032 44,20.842 L44,15.158 C44,13.968 43.032,13 41.842,13 L41.842,13 Z M2,20.842 L2,15.158 C2,15.074 2.074,15 2.158,15 L7.842,15 C7.926,15 8,15.074 8,15.158 L8,20.842 C8,20.926 7.926,21 7.842,21 L2.158,21 C2.074,21 2,20.926 2,20.842 L2,20.842 Z M10,20.842 L10,15.158 C10,13.968 9.032,13 7.842,13 L2.158,13 C0.968,13 0,13.968 0,15.158 L0,20.842 C0,22.032 0.968,23 2.158,23 L7.842,23 C9.032,23 10,22.032 10,20.842 L10,20.842 Z M23,19 L27,19 L27,16 L23,16 L23,19 Z M17,19 L21,19 L21,16 L17,16 L17,19 Z M15,21 L29,21 L29,14 L15,14 L15,21 Z M21,22 L21,24 L14,24 L14,22 L13,22 L13,13 L31,13 L31,22 L28,22 L28,24 L26,24 L26,22 L21,22 Z M30,26 L30,24 L33,24 L33,11 L11,11 L11,24 L12,24 L12,26 L23,26 L23,24 L24,24 L24,26 L30,26 Z",
    id: "Fill-4"
  }))));
}
const ForwardRef = React.forwardRef(ComputeArchElasticFabricAdapter);
module.exports = ForwardRef;