const React = require("react");
function MachineLearningArchTorchserve({
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
  }, "Icon-Architecture/48/Arch_TorchServe_48") : title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("g", {
    id: "Icon-Architecture/48/Arch_TorchServe_48",
    stroke: "none",
    strokeWidth: 1,
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("g", {
    id: "Icon-Architecture-BG/48/Machine-Learning",
    fill: "#01A88D"
  }, /*#__PURE__*/React.createElement("rect", {
    id: "Rectangle",
    x: 0,
    y: 0,
    width: 64,
    height: 64
  })), /*#__PURE__*/React.createElement("g", {
    id: "Icon-Service/48/TorchServe_48",
    transform: "translate(13.000000, 10.000000)",
    fill: "#FFFFFF"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M23.954,7.237 C23.954,8.112 24.666,8.825 25.542,8.825 C26.418,8.825 27.13,8.112 27.13,7.237 C27.13,6.362 26.418,5.649 25.542,5.649 C24.666,5.649 23.954,6.362 23.954,7.237 M21.954,7.237 C21.954,5.258 23.563,3.649 25.542,3.649 C27.52,3.649 29.13,5.258 29.13,7.237 C29.13,9.216 27.52,10.825 25.542,10.825 C23.563,10.825 21.954,9.216 21.954,7.237 M37.072,24.952 C37.072,35.173 28.757,43.488 18.536,43.488 C8.315,43.488 0,35.173 0,24.952 C0,19.877 2.011,15.14 5.663,11.615 L17.8,0 L19.183,1.445 L7.049,13.057 C3.794,16.199 2,20.424 2,24.952 C2,34.07 9.418,41.488 18.536,41.488 C27.654,41.488 35.072,34.07 35.072,24.952 C35.072,20.378 33.247,16.122 29.932,12.969 L31.31,11.52 C35.026,15.054 37.072,19.824 37.072,24.952",
    id: "TorchServe-Icon_48_Squid"
  }))));
}
const ForwardRef = React.forwardRef(MachineLearningArchTorchserve);
ForwardRef.aliasName = "Torchserve";
module.exports = ForwardRef;