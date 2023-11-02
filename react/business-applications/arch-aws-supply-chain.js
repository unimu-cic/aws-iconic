const React = require("react");
function BusinessApplicationsArchAwsSupplyChain({
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
  }, "Icon-Architecture/48/Arch_AWS-Supply-Chain_48") : title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("g", {
    id: "Icon-Architecture/48/Arch_AWS-Supply-Chain_48",
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
  })), /*#__PURE__*/React.createElement("path", {
    d: "M46,29 L46,40 C46,40.351 45.815,40.677 45.515,40.857 L36,46.566 L36,44.234 L44,39.434 L44,30.766 L36,35.566 L36,33.234 L44.485,28.143 C44.795,27.956 45.179,27.952 45.493,28.13 C45.807,28.307 46,28.64 46,29 L46,29 Z M20,39.434 L28,44.234 L28,46.566 L18.485,40.857 C18.185,40.677 18,40.351 18,40 L18,29 C18,28.64 18.193,28.307 18.507,28.13 C18.82,27.952 19.205,27.956 19.515,28.143 L28,33.234 L28,35.566 L20,30.766 L20,39.434 Z M40,38.699 L32.485,42.874 C32.335,42.958 32.167,43 32,43 C31.833,43 31.665,42.958 31.515,42.874 L24,38.699 L24,36.412 L32,40.856 L40,36.412 L40,38.699 Z M32.999,51.218 L32.999,47 L30.999,47 L30.999,51.216 L15,41.439 L15,22.699 L31,31.588 L31,35 L33,35 L33,31.588 L49,22.699 L49,41.439 L32.999,51.218 Z M32,12.144 L47.941,21 L32,29.856 L16.059,21 L32,12.144 Z M50.485,20.126 L32.485,10.126 C32.185,9.958 31.815,9.958 31.515,10.126 L13.515,20.126 C13.197,20.302 13,20.637 13,21 L13,42 C13,42.348 13.182,42.671 13.479,42.854 L31.479,53.854 C31.639,53.951 31.819,54 32,54 C32.181,54 32.361,53.951 32.521,53.854 L50.521,42.854 C50.818,42.671 51,42.348 51,42 L51,21 C51,20.637 50.803,20.302 50.485,20.126 L50.485,20.126 Z",
    id: "Fill-1",
    fill: "#FFFFFF"
  })));
}
const ForwardRef = React.forwardRef(BusinessApplicationsArchAwsSupplyChain);
module.exports = ForwardRef;