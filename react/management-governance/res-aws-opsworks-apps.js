const React = require("react");
function ManagementGovernanceResAwsOpsworksApps({
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
  }, "Icon-Resource/Management-Governance/Res_AWS-OpsWorks_Apps_48") : title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("g", {
    id: "Icon-Resource/Management-Governance/Res_AWS-OpsWorks_Apps_48",
    stroke: "none",
    strokeWidth: 1,
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M45.8967,3 C45.8967,2.447 45.4497,2 44.8967,2 L3.0007,2 C2.4477,2 2.0007,2.447 2.0007,3 L2.0007,14.348 L4.0007,14.348 L4.0007,4 L43.8967,4 L43.8967,14.348 L45.8967,14.348 L45.8967,3 Z M4.0007,43.896 L43.8967,43.896 L43.8967,17.965 L4.0007,17.965 L4.0007,43.896 Z M44.8967,45.896 L3.0007,45.896 C2.4477,45.896 2.0007,45.449 2.0007,44.896 L2.0007,16.966 C2.0007,16.413 2.4477,15.966 3.0007,15.966 L44.8967,15.966 C45.4497,15.966 45.8967,16.413 45.8967,16.966 L45.8967,44.896 C45.8967,45.449 45.4497,45.896 44.8967,45.896 L44.8967,45.896 Z",
    id: "AWS-OpsWorks-Apps_Resource-Icon_light-bg",
    fill: "#E7157B"
  })));
}
const ForwardRef = React.forwardRef(ManagementGovernanceResAwsOpsworksApps);
module.exports = ForwardRef;