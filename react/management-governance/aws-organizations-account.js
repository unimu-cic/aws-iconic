const React = require("react");
function ManagementGovernanceAwsOrganizationsAccount({
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
  }, "Icon-Resource/Management-Governance/Res_AWS-Organizations_Account_48") : title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("g", {
    id: "Icon-Resource/Management-Governance/Res_AWS-Organizations_Account_48",
    stroke: "none",
    strokeWidth: 1,
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M32,28 C35.309,28 38,30.691 38,34 C38,37.309 35.309,40 32,40 C28.691,40 26,37.309 26,34 C26,30.691 28.691,28 32,28 L32,28 Z M32,42 C36.411,42 40,38.411 40,34 C40,29.589 36.411,26 32,26 C27.589,26 24,29.589 24,34 C24,38.411 27.589,42 32,42 L32,42 Z M34,9.236 L38.882,19 L29.118,19 L34,9.236 Z M27.5,21 L40.5,21 C40.847,21 41.168,20.82 41.351,20.526 C41.533,20.231 41.55,19.863 41.395,19.553 L34.895,6.553 C34.555,5.875 33.445,5.875 33.105,6.553 L26.605,19.553 C26.45,19.863 26.467,20.231 26.649,20.526 C26.832,20.82 27.153,21 27.5,21 L27.5,21 Z M9,29 L20,29 L20,18 L9,18 L9,29 Z M8,31 L21,31 C21.553,31 22,30.552 22,30 L22,17 C22,16.448 21.553,16 21,16 L8,16 C7.447,16 7,16.448 7,17 L7,30 C7,30.552 7.447,31 8,31 L8,31 Z M4,44 L44,44 L44,4 L4,4 L4,44 Z M45,2 L3,2 C2.447,2 2,2.448 2,3 L2,45 C2,45.552 2.447,46 3,46 L45,46 C45.553,46 46,45.552 46,45 L46,3 C46,2.448 45.553,2 45,2 L45,2 Z",
    id: "Fill-1",
    fill: "#E7157B"
  })));
}
const ForwardRef = React.forwardRef(ManagementGovernanceAwsOrganizationsAccount);
module.exports = ForwardRef;