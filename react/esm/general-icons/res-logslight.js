import * as React from "react";
function GeneralIconsResLogslight({
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
  }, "Icon-Resource/General-Resource/Res_Logs_48_Light") : title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("g", {
    id: "Icon-Resource/General-Resource/Res_Logs_48",
    stroke: "none",
    strokeWidth: 1,
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M28,41 L35,41 L35,39 L28,39 L28,41 Z M13,41 L26,41 L26,39 L13,39 L13,41 Z M22,36 L35,36 L35,34 L22,34 L22,36 Z M13,36 L20,36 L20,34 L13,34 L13,36 Z M22.948,30.317 L21.052,29.685 L25.052,17.685 L26.948,18.317 L22.948,30.317 Z M34.625,23.22 C34.862,23.41 35,23.697 35,24.001 C35,24.305 34.862,24.592 34.625,24.782 L29.625,28.782 L28.375,27.22 L32.399,24.001 L28.375,20.782 L29.625,19.22 L34.625,23.22 Z M13.375,24.782 C13.138,24.592 13,24.305 13,24.001 C13,23.697 13.138,23.41 13.375,23.22 L18.375,19.22 L19.625,20.782 L15.601,24.001 L19.625,27.22 L18.375,28.782 L13.375,24.782 Z M10,44 L10.007,4 L28,4 L28,13 C28,13.552 28.447,14 29,14 L38,14 L38,44 L10,44 Z M30,5.414 L36.586,12 L30,12 L30,5.414 Z M39.707,12.293 L29.707,2.293 C29.52,2.105 29.266,2 29,2 L10,2 C8.822,2 8,2.822 8,4 L8,44 C8,45.14 8.859,46 10,46 L38,46 C39.141,46 40,45.14 40,44 L40,13 C40,12.735 39.895,12.48 39.707,12.293 L39.707,12.293 Z",
    id: "Fill-1",
    fill: "#232F3D"
  })));
}
const ForwardRef = React.forwardRef(GeneralIconsResLogslight);
ForwardRef.aliasName = "Logslight";
export default ForwardRef;