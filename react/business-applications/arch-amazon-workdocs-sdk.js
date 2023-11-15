const React = require("react");
function BusinessApplicationsArchAmazonWorkdocsSdk({
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
  }, "Icon-Architecture/48/Arch_Amazon-WorkDocs-SDK_48") : title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("g", {
    id: "Icon-Architecture/48/Arch_Amazon-WorkDocs-SDK_48",
    stroke: "none",
    strokeWidth: 1,
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("g", {
    id: "Icon-Architecture-BG/48/Business-Applications",
    fill: "#DD344C"
  }, /*#__PURE__*/React.createElement("rect", {
    id: "Rectangle",
    x: 0,
    y: 0,
    width: 64,
    height: 64
  })), /*#__PURE__*/React.createElement("g", {
    id: "Icon-Service/48/Amazon-WorkDocs",
    transform: "translate(10.000000, 10.000000)",
    fill: "#FFFFFF"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M21,35 L23,35 L23,31 L21,31 L21,35 Z M21,29 L23,29 L23,25 L21,25 L21,29 Z M21,41 L23,41 L23,37 L21,37 L21,41 Z M7,23 L11,23 L11,21 L7,21 L7,23 Z M13,23 L17,23 L17,21 L13,21 L13,23 Z M2,42 L2,23 L5,23 L5,21 L2,21 L2,2 L21,2 L21,21 L19,21 L19,23 L22,23 L23,23 L42,23 L42,42 L2,42 Z M23,3.414 L40.586,21 L23,21 L23,3.414 Z M44,22 C44,21.74 43.898,21.484 43.707,21.293 L22.707,0.293 C22.515,0.102 22.26,0 22,0 L1,0 C0.447,0 0,0.448 0,1 L0,43 C0,43.552 0.447,44 1,44 L43,44 C43.552,44 44,43.552 44,43 L44,22 Z",
    id: "Amazon-WorkDocs_Icon_48_Squid"
  }))));
}
const ForwardRef = React.forwardRef(BusinessApplicationsArchAmazonWorkdocsSdk);
ForwardRef.aliasName = "Amazon Workdocs Sdk";
module.exports = ForwardRef;