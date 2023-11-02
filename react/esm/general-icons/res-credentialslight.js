import * as React from "react";
function GeneralIconsResCredentialslight({
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
  }, "Icon-Resource/General-Resource/Res_Credentials_48_Light") : title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("g", {
    id: "Icon-Resource/General-Resource/Res_Credentials_48",
    stroke: "none",
    strokeWidth: 1,
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M13,18 L24,18 L24,16 L13,16 L13,18 Z M13,11 L35,11 L35,9 L13,9 L13,11 Z M30.083,37.532 C29.276,37.829 28.409,38 27.5,38 C26.654,38 25.843,37.852 25.083,37.593 L25.083,42.84 L27.104,41.126 C27.489,40.798 28.06,40.811 28.433,41.158 L30.083,42.699 L30.083,37.532 Z M27.5,36 C30.532,36 33,33.533 33,30.5 C33,27.467 30.532,25 27.5,25 C24.468,25 22,27.467 22,30.5 C22,33.533 24.468,36 27.5,36 L27.5,36 Z M32.083,36.424 L32.083,45 C32.083,45.398 31.847,45.758 31.481,45.917 C31.354,45.972 31.218,46 31.083,46 C30.835,46 30.59,45.907 30.4,45.731 L27.719,43.227 L24.729,45.763 C24.433,46.015 24.015,46.071 23.663,45.907 C23.31,45.743 23.083,45.389 23.083,45 L23.083,36.548 C21.218,35.182 20,32.983 20,30.5 C20,26.364 23.364,23 27.5,23 C31.636,23 35,26.364 35,30.5 C35,32.909 33.854,35.05 32.083,36.424 L32.083,36.424 Z M40,3 L40,40 C40,40.552 39.553,41 39,41 L34,41 L34,39 L38,39 L38,4 L10,4 L10,39 L21,39 L21,41 L9,41 C8.447,41 8,40.552 8,40 L8,3 C8,2.448 8.447,2 9,2 L39,2 C39.553,2 40,2.448 40,3 L40,3 Z",
    id: "Fill-1",
    fill: "#232F3D"
  })));
}
const ForwardRef = React.forwardRef(GeneralIconsResCredentialslight);
export default ForwardRef;