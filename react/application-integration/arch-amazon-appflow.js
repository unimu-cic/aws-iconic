const React = require("react");
function ApplicationIntegrationArchAmazonAppflow({
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
  }, "Icon-Architecture/48/Arch_Amazon-AppFlow_48") : title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("g", {
    id: "Icon-Architecture/48/Arch_Amazon-AppFlow_48",
    stroke: "none",
    strokeWidth: 1,
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("g", {
    id: "Icon-Architecture-BG/48/Application-Integration",
    fill: "#E7157B"
  }, /*#__PURE__*/React.createElement("rect", {
    id: "Rectangle",
    x: 0,
    y: 0,
    width: 64,
    height: 64
  })), /*#__PURE__*/React.createElement("g", {
    id: "Icon-Service/48/Amazon-AppFlow_48",
    transform: "translate(10.000000, 15.000000)",
    fill: "#FFFFFF"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M37.219,0 L23.376,0 L11.249,20.387 L10.644,18.128 L8.712,18.646 L10.297,24.559 L16.21,22.975 L15.693,21.043 L12.711,21.842 L24.513,2 L36.065,2 L41.839,12 L36.065,22 L30.144,22 L30.144,24 L37.219,24 L44.148,12 L37.219,0 Z M32.254,13.671 L20.787,34 L6.928,34 L0,22 L6.928,10 L13.144,10 L13.144,12 L8.082,12 L2.309,22 L8.082,32 L19.619,32 L30.818,12.147 L27.795,12.957 L27.278,11.025 L33.192,9.441 L34.776,15.354 L32.844,15.872 L32.254,13.671 Z",
    id: "Amazon-AppFlow_48"
  }))));
}
const ForwardRef = React.forwardRef(ApplicationIntegrationArchAmazonAppflow);
module.exports = ForwardRef;