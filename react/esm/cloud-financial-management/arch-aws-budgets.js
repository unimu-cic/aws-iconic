import * as React from "react";
function CloudFinancialManagementArchAwsBudgets({
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
  }, "Icon-Architecture/48/Arch_AWS-Budgets_48") : title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("g", {
    id: "Icon-Architecture/48/Arch_AWS-Budgets_48",
    stroke: "none",
    strokeWidth: 1,
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("g", {
    id: "Icon-Architecture-BG/48/AWS-Cost-Management",
    fill: "#7AA116"
  }, /*#__PURE__*/React.createElement("rect", {
    id: "Rectangle",
    x: 0,
    y: 0,
    width: 64,
    height: 64
  })), /*#__PURE__*/React.createElement("path", {
    d: "M37,24 L37,21.414 L32.707,25.707 C32.346,26.068 31.772,26.099 31.375,25.781 L28.741,23.673 L24.707,27.707 L23.293,26.293 L27.96,21.626 C28.321,21.265 28.895,21.235 29.292,21.553 L31.926,23.66 L35.586,20 L33,20 L33,18 L38,18 C38.553,18 39,18.448 39,19 L39,24 L37,24 Z M22,34 L20,34 L20,11 C20,10.448 20.447,10 21,10 L43,10 C43.553,10 44,10.448 44,11 L44,34 L42,34 L42,12 L22,12 L22,34 Z M13,50.443 L13,34.074 L22.179,40.499 L13,50.443 Z M32,47.125 C32.226,47.125 32.451,47.057 32.646,46.922 L40.168,41.656 L49.717,52 L14.283,52 L23.832,41.656 L31.354,46.922 C31.549,47.057 31.774,47.125 32,47.125 L32,47.125 Z M41.821,40.499 L51,34.074 L51,50.443 L41.821,40.499 Z M52.641,31.232 L46.641,26.232 L45.359,27.768 L50.255,31.848 L32,44.627 L13.745,31.848 L18.641,27.768 L17.359,26.232 L11.359,31.232 C11.132,31.422 11,31.703 11,32 L11,53 C11,53.552 11.447,54 12,54 L52,54 C52.553,54 53,53.552 53,53 L53,32 C53,31.703 52.868,31.422 52.641,31.232 L52.641,31.232 Z",
    id: "AWS-Budgets_Icon_48_Squid",
    fill: "#FFFFFF"
  })));
}
const ForwardRef = React.forwardRef(CloudFinancialManagementArchAwsBudgets);
ForwardRef.aliasName = "Aws Budgets";
export default ForwardRef;