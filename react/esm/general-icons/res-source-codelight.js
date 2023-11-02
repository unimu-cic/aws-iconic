import * as React from "react";
function GeneralIconsResSourceCodelight({
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
  }, "Icon-Resource/General-Resource/Res_Source-Code_48_Light") : title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("g", {
    id: "Icon-Resource/General-Resource/Res_Source-Code_48",
    stroke: "none",
    strokeWidth: 1,
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M25.0518,19.684 L26.9478,20.317 L22.9478,32.317 L21.0518,31.684 L25.0518,19.684 Z M34.6248,25.22 C34.8628,25.409 34.9998,25.697 34.9998,26 C34.9998,26.304 34.8628,26.592 34.6248,26.781 L29.6248,30.781 L28.3748,29.22 L32.3998,26 L28.3748,22.781 L29.6248,21.22 L34.6248,25.22 Z M19.6248,22.781 L15.6008,26 L19.6248,29.22 L18.3748,30.781 L13.3748,26.781 C13.1378,26.592 12.9998,26.304 12.9998,26 C12.9998,25.697 13.1378,25.409 13.3748,25.22 L18.3748,21.22 L19.6248,22.781 Z M9.9998,44 L10.0068,4 L27.9998,4 L27.9998,13 C27.9998,13.552 28.4478,14 28.9998,14 L37.9998,14 L37.9998,44 L9.9998,44 Z M29.9998,5.414 L36.5858,12 L29.9998,12 L29.9998,5.414 Z M39.7068,12.293 L29.7068,2.293 C29.5198,2.105 29.2658,2 28.9998,2 L9.9998,2 C8.8228,2 7.9998,2.822 7.9998,4 L7.9998,44 C7.9998,45.14 8.8598,46 9.9998,46 L37.9998,46 C39.1408,46 39.9998,45.14 39.9998,44 L39.9998,13 C39.9998,12.734 39.8948,12.48 39.7068,12.293 L39.7068,12.293 Z",
    id: "Fill-1",
    fill: "#232F3D"
  })));
}
const ForwardRef = React.forwardRef(GeneralIconsResSourceCodelight);
export default ForwardRef;