const React = require("react");
function ComputeAmazonEc2Instance({
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
  }, "Icon-Resource/Compute/Res_Amazon-EC2_Instance_48") : title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("g", {
    id: "Icon-Resource/Compute/Res_Amazon-EC2_Instance_48",
    stroke: "none",
    strokeWidth: 1,
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M9,39 L39,39 L39,9 L9,9 L9,39 Z M46,13 L46,11 L41,11 L41,8 C41,7.448 40.552,7 40,7 L37,7 L37,2 L35,2 L35,7 L31,7 L31,2 L29,2 L29,7 L25,7 L25,2 L23,2 L23,7 L19,7 L19,2 L17,2 L17,7 L13,7 L13,2 L11,2 L11,7 L8,7 C7.447,7 7,7.448 7,8 L7,11 L2,11 L2,13 L7,13 L7,17 L2,17 L2,19 L7,19 L7,23 L2,23 L2,25 L7,25 L7,29 L2,29 L2,31 L7,31 L7,35 L2,35 L2,37 L7,37 L7,40 C7,40.553 7.447,41 8,41 L11,41 L11,46 L13,46 L13,41 L17,41 L17,46 L19,46 L19,41 L23,41 L23,46 L25,46 L25,41 L29,41 L29,46 L31,46 L31,41 L35,41 L35,46 L37,46 L37,41 L40,41 C40.552,41 41,40.553 41,40 L41,37 L46,37 L46,35 L41,35 L41,31 L46,31 L46,29 L41,29 L41,25 L46,25 L46,23 L41,23 L41,19 L46,19 L46,17 L41,17 L41,13 L46,13 Z",
    id: "Amazon-EC2-Instance_Resource-Icon_light-bg",
    fill: "#ED7100"
  })));
}
const ForwardRef = React.forwardRef(ComputeAmazonEc2Instance);
module.exports = ForwardRef;