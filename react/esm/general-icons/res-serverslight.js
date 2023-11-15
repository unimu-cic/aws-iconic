import * as React from "react";
function GeneralIconsResServerslight({
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
  }, "Icon-Resource/General-Resource/Res_Servers_48_Light") : title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("g", {
    id: "Icon-Resource/General-Resource/Res_Servers_48",
    stroke: "none",
    strokeWidth: 1,
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8.999,40 L10.999,40 L10.999,38 L8.999,38 L8.999,40 Z M8.999,24.999 L10.999,24.999 L10.999,22.999 L8.999,22.999 L8.999,24.999 Z M8.999,10 L10.999,10 L10.999,8 L8.999,8 L8.999,10 Z M10.999,17.999 L37,17.999 L37,16 L10.999,16 L10.999,17.999 Z M4,29 L44,29 L44,19.999 L4,19.999 L4,29 Z M10.999,33 L37.001,33 L37.001,31 L10.999,31 L10.999,33 Z M4,43.999 L44,43.999 L44,35 L4,35 L4,43.999 Z M4,14 L44,14 L44,5 L4,5 L4,14 Z M45,16 C45.553,16 46,15.552 46,15 L46,4 C46,3.448 45.553,3 45,3 L3,3 C2.447,3 2,3.448 2,4 L2,15 C2,15.552 2.447,16 3,16 L8.999,16 L8.999,17.999 L3,17.999 C2.447,17.999 2,18.447 2,18.999 L2,30 C2,30.552 2.447,31 3,31 L8.999,31 L8.999,33 L3,33 C2.447,33 2,33.448 2,34 L2,44.999 C2,45.551 2.447,45.999 3,45.999 L45,45.999 C45.553,45.999 46,45.551 46,44.999 L46,34 C46,33.448 45.553,33 45,33 L39.001,33 L39.001,31 L45,31 C45.553,31 46,30.552 46,30 L46,18.999 C46,18.447 45.553,17.999 45,17.999 L39,17.999 L39,16 L45,16 Z",
    id: "Fill-1",
    fill: "#232F3D"
  })));
}
const ForwardRef = React.forwardRef(GeneralIconsResServerslight);
ForwardRef.aliasName = "Serverslight";
export default ForwardRef;