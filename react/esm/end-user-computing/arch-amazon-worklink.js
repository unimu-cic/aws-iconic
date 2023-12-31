import * as React from "react";
function EndUserComputingArchAmazonWorklink({
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
  }, "Icon-Architecture/48/Arch_Amazon-WorkLink_48") : title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("g", {
    id: "Icon-Architecture/48/Arch_Amazon-WorkLink_48",
    stroke: "none",
    strokeWidth: 1,
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("g", {
    id: "Icon-Architecture-BG/48/End-User-Computing",
    fill: "#01A88D"
  }, /*#__PURE__*/React.createElement("rect", {
    id: "Rectangle",
    x: 0,
    y: 0,
    width: 64,
    height: 64
  })), /*#__PURE__*/React.createElement("path", {
    d: "M25,39 L38.989,39 L38.989,24.969 L25,24.969 L25,39 Z M24.149,41 C23.516,41 23,40.485 23,39.852 L23,24.117 C23,23.484 23.516,22.969 24.149,22.969 L39.841,22.969 C40.474,22.969 40.989,23.484 40.989,24.117 L40.989,39.852 C40.989,40.485 40.474,41 39.841,41 L24.149,41 Z M52.901,24 L44,24 L44,26 L52,26 L52,52 L26,52 L26,44 L24,44 L24,52.901 C24,53.507 24.493,54 25.099,54 L52.901,54 C53.507,54 54,53.507 54,52.901 L54,25.099 C54,24.493 53.507,24 52.901,24 L52.901,24 Z M12,38 L20,38 L20,40 L11.107,40 C10.496,40 10,39.503 10,38.894 L10,11.106 C10,10.497 10.496,10 11.107,10 L38.894,10 C39.504,10 40,10.497 40,11.106 L40,20 L38,20 L38,12 L12,12 L12,38 Z",
    id: "Amazon-WorkLink_Icon_48_Squid",
    fill: "#FFFFFF"
  })));
}
const ForwardRef = React.forwardRef(EndUserComputingArchAmazonWorklink);
ForwardRef.aliasName = "Amazon Worklink";
export default ForwardRef;