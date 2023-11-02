import * as React from "react";
function ComputeArchAwsAppRunner({
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
  }, "Icon-Architecture/48/Arch_AWS-App-Runner_48") : title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("g", {
    id: "Icon-Architecture/48/Arch_AWS-App-Runner_48",
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
  })), /*#__PURE__*/React.createElement("g", {
    id: "Icon-Service/48/AWS-Fusion_48",
    transform: "translate(10.000000, 10.000000)",
    fill: "#FFFFFF"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12.707,32.707 L11.293,31.293 L2,40.586 L2,36 L0,36 L0,43 C0,43.552 0.447,44 1,44 L8,44 L8,42 L3.414,42 L12.707,32.707 Z M43,0 L36,0 L36,2 L40.586,2 L31.793,10.793 L33.207,12.207 L42,3.414 L42,8 L44,8 L44,1 C44,0.448 43.553,0 43,0 L43,0 Z M25,37 L37,37 L37,25 L25,25 L25,37 Z M39,24 L39,38 C39,38.552 38.553,39 38,39 L24,39 C23.447,39 23,38.552 23,38 L23,24 C23,23.448 23.447,23 24,23 L38,23 C38.553,23 39,23.448 39,24 L39,24 Z M7,19 L19,19 L19,7 L7,7 L7,19 Z M21,6 L21,20 C21,20.552 20.553,21 20,21 L6,21 C5.447,21 5,20.552 5,20 L5,6 C5,5.448 5.447,5 6,5 L20,5 C20.553,5 21,5.448 21,6 L21,6 Z M20,23 L6,23 C5.447,23 5,23.448 5,24 L5,34.758 L7,32.758 L7,25 L19,25 L19,37 L11.242,37 L9.242,39 L20,39 C20.553,39 21,38.552 21,38 L21,24 C21,23.448 20.553,23 20,23 L20,23 Z M37,11.242 L39,9.242 L39,20 C39,20.552 38.553,21 38,21 L24,21 C23.447,21 23,20.552 23,20 L23,6 C23,5.448 23.447,5 24,5 L34.758,5 L32.758,7 L25,7 L25,19 L37,19 L37,11.242 Z",
    id: "Fill-4"
  }))));
}
const ForwardRef = React.forwardRef(ComputeArchAwsAppRunner);
export default ForwardRef;