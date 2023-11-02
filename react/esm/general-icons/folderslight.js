import * as React from "react";
function GeneralIconsFolderslight({
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
  }, "Icon-Resource/General-Resource/Res_Folders_48_Light") : title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("g", {
    id: "Icon-Resource/General-Resource/Res_Folders_48",
    stroke: "none",
    strokeWidth: 1,
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M46,14 L46,43 C46,43.552 45.553,44 45,44 L10,44 C9.447,44 9,43.552 9,43 L9,40.002 L11,40.002 L11,42 L44,42 L44,15 L42.004,15 L42.004,13 L45,13 C45.553,13 46,13.448 46,14 L46,14 Z M4,36 L38.001,36 L38.001,14 L4,14 L4,36 Z M14.586,6 L17.294,8.708 C17.481,8.896 17.735,9.001 18.001,9.001 L38.001,9.001 L38.001,12 L4,12 L4,6 L14.586,6 Z M40.001,8.001 C40.001,7.449 39.554,7.001 39.001,7.001 L18.415,7.001 L15.707,4.293 C15.52,4.105 15.266,4 15,4 L3,4 C2.447,4 2,4.448 2,5 L2,37 C2,37.552 2.447,38 3,38 L39.001,38 C39.554,38 40.001,37.552 40.001,37 L40.001,8.001 Z",
    id: "Fill-1",
    fill: "#232F3D"
  })));
}
const ForwardRef = React.forwardRef(GeneralIconsFolderslight);
export default ForwardRef;