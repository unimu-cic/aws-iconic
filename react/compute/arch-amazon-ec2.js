const React = require("react");
function ComputeArchAmazonEc2({
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
  }, "Icon-Architecture/48/Arch_Amazon-EC2_48") : title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("g", {
    id: "Icon-Architecture/48/Arch_Amazon-EC2_48",
    stroke: "none",
    strokeWidth: 1,
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("g", {
    id: "Icon-Architecture-BG/48/Compute",
    fill: "#ED7100"
  }, /*#__PURE__*/React.createElement("rect", {
    id: "Rectangle",
    x: 0,
    y: 0,
    width: 64,
    height: 64
  })), /*#__PURE__*/React.createElement("path", {
    d: "M22,41 L41,41 L41,23 L22,23 L22,41 Z M43,23 L46,23 L46,25 L43,25 L43,27 L46,27 L46,29 L43,29 L43,31 L46,31 L46,33 L43,33 L43,36 L46,36 L46,38 L43,38 L43,40 L46,40 L46,42 L42.863,42 C42.608,42.587 42.023,43 41.344,43 L41,43 L41,46 L39,46 L39,43 L37,43 L37,46 L35,46 L35,43 L33,43 L33,46 L31,46 L31,43 L29,43 L29,46 L27,46 L27,43 L24,43 L24,46 L22,46 L22,43 L21.656,43 C20.977,43 20.392,42.587 20.137,42 L18,42 L18,40 L20,40 L20,38 L18,38 L18,36 L20,36 L20,33 L18,33 L18,31 L20,31 L20,29 L18,29 L18,27 L20,27 L20,25 L18,25 L18,23 L20,23 L20,22.656 C20,21.743 20.743,21 21.656,21 L22,21 L22,18 L24,18 L24,21 L27,21 L27,18 L29,18 L29,21 L31,21 L31,18 L33,18 L33,21 L35,21 L35,18 L37,18 L37,21 L39,21 L39,18 L41,18 L41,21 L41.344,21 C42.257,21 43,21.743 43,22.656 L43,23 Z M32,52 L12,52 L12,32 L16,32 L16,30 L11.843,30 C10.826,30 10,30.827 10,31.843 L10,52.157 C10,53.173 10.826,54 11.843,54 L32.157,54 C33.174,54 34,53.173 34,52.157 L34,48 L32,48 L32,52 Z M54,11.843 L54,32.157 C54,33.173 53.174,34 52.157,34 L48,34 L48,32 L52,32 L52,12 L32,12 L32,16 L30,16 L30,11.843 C30,10.827 30.826,10 31.843,10 L52.157,10 C53.174,10 54,10.827 54,11.843 L54,11.843 Z",
    id: "Amazon-EC2_Icon_48_Squid",
    fill: "#FFFFFF"
  })));
}
const ForwardRef = React.forwardRef(ComputeArchAmazonEc2);
module.exports = ForwardRef;