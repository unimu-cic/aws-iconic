import * as React from "react";
function GeneralIconsResCameralight({
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
  }, "Icon-Resource/General-Resource/Res_Camera_48_Light") : title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("g", {
    id: "Icon-Resource/General-Resource/Res_Camera_48",
    stroke: "none",
    strokeWidth: 1,
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8,20 L8,18 L11,18 L11.001,20 L8,20 Z M11,16 L8,16 C6.897,16 6,16.897 6,18 L6,20 C6,21.103 6.897,22 8,22 L11,22 C12.103,22 13,21.103 13,20 L13,18 C13,16.897 12.103,16 11,16 L11,16 Z M25.5,32 C22.468,32 20,29.533 20,26.5 C20,23.467 22.468,21 25.5,21 C28.532,21 31,23.467 31,26.5 C31,29.533 28.532,32 25.5,32 L25.5,32 Z M25.5,19 C21.364,19 18,22.364 18,26.5 C18,30.636 21.364,34 25.5,34 C29.636,34 33,30.636 33,26.5 C33,22.364 29.636,19 25.5,19 L25.5,19 Z M25.5,36 C20.262,36 16,31.738 16,26.5 C16,21.262 20.262,17 25.5,17 C30.738,17 35,21.262 35,26.5 C35,31.738 30.738,36 25.5,36 L25.5,36 Z M25.5,15 C19.159,15 14,20.159 14,26.5 C14,32.841 19.159,38 25.5,38 C31.841,38 37,32.841 37,26.5 C37,20.159 31.841,15 25.5,15 L25.5,15 Z M44,38.424 C44,39.293 43.293,40 42.424,40 L5.576,40 C4.707,40 4,39.293 4,38.424 L4,15.576 C4,14.707 4.707,14 5.576,14 L17.987,14 C18.461,14 18.869,13.668 18.966,13.205 L19.71,9.646 C19.789,9.271 20.123,9 20.505,9 L30.753,9 C31.135,9 31.469,9.271 31.548,9.646 L32.293,13.205 C32.39,13.668 32.798,14 33.271,14 L42.424,14 C43.293,14 44,14.707 44,15.576 L44,38.424 Z M10,12 L13.001,12 L13.001,11 L10,11 L10,12 Z M42.424,12 L34.084,12 L33.505,9.236 C33.233,7.94 32.076,7 30.753,7 L20.505,7 C19.182,7 18.024,7.94 17.753,9.236 L17.175,12 L15.001,12 L15.001,11 C15.001,9.897 14.104,9 13.001,9 L10,9 C8.897,9 8,9.897 8,11 L8,12 L5.576,12 C3.604,12 2,13.604 2,15.576 L2,38.424 C2,40.396 3.604,42 5.576,42 L42.424,42 C44.396,42 46,40.396 46,38.424 L46,15.576 C46,13.604 44.396,12 42.424,12 L42.424,12 Z",
    id: "Fill-1",
    fill: "#232F3D"
  })));
}
const ForwardRef = React.forwardRef(GeneralIconsResCameralight);
export default ForwardRef;