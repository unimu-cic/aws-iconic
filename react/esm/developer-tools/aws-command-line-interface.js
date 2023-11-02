import * as React from "react";
function DeveloperToolsAwsCommandLineInterface({
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
  }, "Icon-Architecture/48/Arch_AWS-Command-Line-Interface_48") : title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("g", {
    id: "Icon-Architecture/48/Arch_AWS-Command-Line-Interface_48",
    stroke: "none",
    strokeWidth: 1,
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("g", {
    id: "Icon-Architecture-BG/48/Developer-Tools",
    fill: "#C925D1"
  }, /*#__PURE__*/React.createElement("rect", {
    id: "Rectangle",
    x: 0,
    y: 0,
    width: 64,
    height: 64
  })), /*#__PURE__*/React.createElement("path", {
    d: "M10,11 L10,53 L36,53 L36,51.001 L12,51.001 L12,21 L52,21 L52,51.001 L46,51.001 L46,53 L54,53 L54,11 L10,11 Z M12,19 L52.001,19 L52.001,13.001 L12,13.001 L12,19 Z M22,17 L24.001,17 L24.001,15 L22,15 L22,17 Z M18,17 L20,17 L20,15 L18,15 L18,17 Z M14,17 L16.001,17 L16.001,15 L14,15 L14,17 Z M17.886,26.827 L25.569,34.511 L17.886,42.194 L19.3,43.608 L28.398,34.511 L19.3,25.413 L17.886,26.827 Z M29,40.001 L43,40.001 L43,38 L29,38 L29,40.001 Z",
    id: "AWS-Command-Line-Interface_Icon_48_Squid",
    fill: "#FFFFFF"
  })));
}
const ForwardRef = React.forwardRef(DeveloperToolsAwsCommandLineInterface);
export default ForwardRef;