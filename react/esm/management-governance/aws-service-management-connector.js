import * as React from "react";
function ManagementGovernanceAwsServiceManagementConnector({
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
  }, "Icon-Architecture/48/Arch_AWS-Service-Management-Connector_48") : title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("g", {
    id: "Icon-Architecture/48/Arch_AWS-Service-Management-Connector_48",
    stroke: "none",
    strokeWidth: 1,
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("g", {
    id: "Icon-Architecture-BG/48/Management-Governance",
    fill: "#E7157B"
  }, /*#__PURE__*/React.createElement("rect", {
    id: "Rectangle",
    x: 0,
    y: 0,
    width: 64,
    height: 64
  })), /*#__PURE__*/React.createElement("path", {
    d: "M37,32 L37,35 L27,35 L27,32 C27,28.542 28.542,27 32,27 C35.458,27 37,28.542 37,32 M40.381,11.653 L39.619,13.502 C47.14,16.604 52,23.864 52,32 C52,43.028 43.028,52 32,52 C20.972,52 12,43.028 12,32 C12,21.307 20.435,12.547 31,12.025 L31,25.07 C27.085,25.414 25,27.775 25,32 L25,36 C25,36.552 25.447,37 26,37 L28,37 L28,42 L30,42 L30,37 L34,37 L34,42 L36,42 L36,37 L38,37 C38.553,37 39,36.552 39,36 L39,32 C39,27.775 36.915,25.414 33,25.07 L33,11 C33,10.448 32.553,10 32,10 C19.869,10 10,19.869 10,32 C10,44.131 19.869,54 32,54 C44.131,54 54,44.131 54,32 C54,23.051 48.654,15.064 40.381,11.653",
    id: "Fill-1",
    fill: "#FFFFFF"
  })));
}
const ForwardRef = React.forwardRef(ManagementGovernanceAwsServiceManagementConnector);
export default ForwardRef;