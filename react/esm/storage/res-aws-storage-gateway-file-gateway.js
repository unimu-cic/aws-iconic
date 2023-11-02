import * as React from "react";
function StorageResAwsStorageGatewayFileGateway({
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
  }, "Icon-Resource/Storage/Res_AWS-Storage-Gateway_File-Gateway_48") : title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("g", {
    id: "Icon-Resource/Storage/Res_AWS-Storage-Gateway_File-Gateway_48",
    stroke: "none",
    strokeWidth: 1,
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M19.8711,4 C14.1281,4 10.5851,5.666 7.0001,7.736 L7.0001,46 L5.0001,46 L5.0001,7.161 C5.0001,6.806 5.1881,6.478 5.4941,6.298 C9.3611,4.033 13.3701,2 19.8711,2 C25.9131,2 30.3391,4.281 33.8951,6.115 L34.2001,6.272 C34.5331,6.443 34.7421,6.786 34.7421,7.161 L34.7421,24.5 L32.7421,24.5 L32.7421,7.771 C29.2611,5.978 25.3041,4 19.8711,4 L19.8711,4 Z M41.7991,44.1 L16.2941,44.1 L16.2941,26.521 L22.6191,26.521 L23.4751,28.294 C23.6421,28.639 23.9921,28.858 24.3761,28.858 L41.7991,28.858 L41.7991,44.1 Z M42.7991,26.858 L25.0031,26.858 L24.1461,25.086 C23.9791,24.741 23.6301,24.521 23.2461,24.521 L15.2941,24.521 C14.7411,24.521 14.2941,24.969 14.2941,25.521 L14.2941,45.1 C14.2941,45.652 14.7411,46.1 15.2941,46.1 L42.7991,46.1 C43.3511,46.1 43.7991,45.652 43.7991,45.1 L43.7991,27.858 C43.7991,27.306 43.3511,26.858 42.7991,26.858 L42.7991,26.858 Z",
    id: "AWS-Storage-Gateway_File-Gateway_Resource-Icon_light-bg",
    fill: "#7AA116"
  })));
}
const ForwardRef = React.forwardRef(StorageResAwsStorageGatewayFileGateway);
export default ForwardRef;