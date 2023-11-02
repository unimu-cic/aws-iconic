import * as React from "react";
function GeneralIconsFolderlight({
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
  }, "Icon-Resource/General-Resource/Res_Folder_48_Light") : title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("g", {
    id: "Icon-Resource/General-Resource/Res_Folder_48",
    stroke: "none",
    strokeWidth: 1,
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M4,42 L44,42 L44,16 L4,16 L4,42 Z M16.586,6 L20.294,9.708 C20.481,9.896 20.735,10.001 21.001,10.001 L44,10.001 L44,14 L4,14 L4,6 L16.586,6 Z M46,9.001 C46,8.449 45.553,8.001 45,8.001 L21.415,8.001 L17.707,4.293 C17.52,4.105 17.266,4 17,4 L3,4 C2.447,4 2,4.448 2,5 L2,15 L2,43 C2,43.552 2.447,44 3,44 L45,44 C45.553,44 46,43.552 46,43 L46,15 C46,14.996 45.998,14.993 45.998,14.989 L46,14.989 L46,9.001 Z",
    id: "Fill-1",
    fill: "#232F3D"
  })));
}
const ForwardRef = React.forwardRef(GeneralIconsFolderlight);
export default ForwardRef;