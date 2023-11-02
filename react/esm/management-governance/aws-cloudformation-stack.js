import * as React from "react";
function ManagementGovernanceAwsCloudformationStack({
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
  }, "Icon-Resource/Management-Governance/Res_AWS-CloudFormation_Stack_48") : title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("g", {
    id: "Icon-Resource/Management-Governance/Res_AWS-CloudFormation_Stack_48",
    stroke: "none",
    strokeWidth: 1,
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2,15.353 L45.92,15.353 L45.92,2 L2,2 L2,15.353 Z M4,13.354 L43.92,13.354 L43.92,4 L4,4 L4,13.354 Z M24.706,30.201 L45.92,30.201 L45.92,16.847 L24.706,16.847 L24.706,30.201 Z M26.706,28.2 L43.92,28.2 L43.92,18.847 L26.706,18.847 L26.706,28.2 Z M2,30.201 L23.213,30.201 L23.213,16.847 L2,16.847 L2,30.201 Z M4,28.2 L21.213,28.2 L21.213,18.847 L4,18.847 L4,28.2 Z M32.567,45.047 L45.92,45.047 L45.92,31.694 L32.567,31.694 L32.567,45.047 Z M34.566,43.047 L43.92,43.047 L43.92,33.693 L34.566,33.693 L34.566,43.047 Z M16.847,45.047 L31.073,45.047 L31.073,31.694 L16.847,31.694 L16.847,45.047 Z M18.847,43.047 L29.074,43.047 L29.074,33.693 L18.847,33.693 L18.847,43.047 Z M2,45.047 L15.352,45.047 L15.352,31.694 L2,31.694 L2,45.047 Z M4,43.047 L13.353,43.047 L13.353,33.693 L4,33.693 L4,43.047 Z",
    id: "AWS-CloudFormation_stack_Resource-Icon_light-bg",
    fill: "#E7157B"
  })));
}
const ForwardRef = React.forwardRef(ManagementGovernanceAwsCloudformationStack);
export default ForwardRef;