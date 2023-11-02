import * as React from "react";
function GeneralIconsServerlight({
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
  }, "Icon-Resource/General-Resource/Res_Traditional-server_48_Light") : title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("g", {
    id: "Icon-Resource/General-Resource/Res_Traditional-server_48",
    stroke: "none",
    strokeWidth: 1,
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M15.437,21.52 L32.064,21.52 L32.064,19.52 L15.437,19.52 L15.437,21.52 Z M15.437,17.196 L32.064,17.196 L32.064,15.196 L15.437,15.196 L15.437,17.196 Z M15.437,12.762 L32.064,12.762 L32.064,10.762 L15.437,10.762 L15.437,12.762 Z M15.437,8.494 L32.064,8.494 L32.064,6.494 L15.437,6.494 L15.437,8.494 Z M13,44.013 L34.499,44.013 L34.499,4 L13,4 L13,44.013 Z M35.032,2 L12.468,2 C11.659,2 11,2.659 11,3.469 L11,44.545 C11,45.355 11.659,46.013 12.468,46.013 L35.032,46.013 C35.841,46.013 36.499,45.355 36.499,44.545 L36.499,3.469 C36.499,2.659 35.841,2 35.032,2 L35.032,2 Z",
    id: "Fill-18",
    fill: "#232F3D"
  })));
}
const ForwardRef = React.forwardRef(GeneralIconsServerlight);
export default ForwardRef;