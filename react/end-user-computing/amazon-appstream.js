const React = require("react");
function EndUserComputingAmazonAppstream({
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
  }, "Icon-Architecture/48/Arch_Amazon-AppStream_48") : title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("g", {
    id: "Icon-Architecture/48/Arch_Amazon-AppStream_48",
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
    d: "M32.0000946,32 L32.0000946,50.586 L13.4141746,32 L32.0000946,32 Z M33.3830887,53.924 C33.7570871,53.769 34.000086,53.404 34.000086,53 L34.000086,31 C34.000086,30.448 33.5530879,30 33.0000903,30 L11.000185,30 C10.5961867,30 10.2301883,30.244 10.0761889,30.617 C9.9211896,30.991 10.0071892,31.421 10.293188,31.707 L32.2930934,53.707 C32.4840925,53.898 32.7400914,54 33.0000903,54 C33.1290898,54 33.2590892,53.975 33.3830887,53.924 L33.3830887,53.924 Z M53,54 C52.7400054,54 52.4840065,53.898 52.2930073,53.707 L36.2930762,37.707 L37.7070701,36.293 L52,50.586 L52,12 L13.4141746,12 L26.7071174,25.293 L25.2931235,26.707 L10.293188,11.707 C10.0071892,11.421 9.9211896,10.991 10.0761889,10.617 C10.2301883,10.244 10.5961867,10 11.000185,10 L53,10 C53.5530019,10 54,10.448 54,11 L54,53 C54,53.404 53.757001,53.769 53.3830027,53.924 C53.2590032,53.975 53.1290037,54 53,54 L53,54 Z",
    id: "Amazon-AppStream_Icon_48_Squid",
    fill: "#FFFFFF"
  })));
}
const ForwardRef = React.forwardRef(EndUserComputingAmazonAppstream);
module.exports = ForwardRef;