import * as React from "react";
function GeneralIconsResSdklight({
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
  }, "Icon-Resource/General-Resource/Res_SDK_48_Light") : title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("g", {
    id: "Icon-Resource/General-Resource/Res_SDK_48",
    stroke: "none",
    strokeWidth: 1,
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M25.225,43.35575 L25.225,35.17475 L33.837,30.20375 C34.147,30.02475 34.337,29.69475 34.337,29.33675 L34.337,19.22275 L41.45,15.11775 L41.45,33.98775 L25.225,43.35575 Z M7,15.11775 L14.113,19.22275 L14.113,29.33675 C14.113,29.69475 14.303,30.02475 14.613,30.20375 L23.225,35.17475 L23.225,43.35575 L7,33.98775 L7,15.11775 Z M25.225,24.58375 L32.337,20.47775 L32.337,28.75975 L25.225,32.86675 L25.225,24.58375 Z M16.113,20.47675 L23.225,24.58375 L23.225,32.86675 L16.113,28.75975 L16.113,20.47675 Z M24.225,22.75175 L17.259,18.72975 L24.225,14.70875 L31.191,18.72975 L24.225,22.75175 Z M24.225,4.15375 L40.331,13.45275 L33.191,17.57575 L24.725,12.68775 C24.416,12.50975 24.034,12.50975 23.725,12.68775 L15.259,17.57575 L8.119,13.45275 L24.225,4.15375 Z M42.95,12.65475 L24.725,2.13275 C24.416,1.95575 24.034,1.95575 23.725,2.13275 L5.5,12.65475 C5.191,12.83375 5,13.16375 5,13.52075 L5,34.56475 C5,34.92175 5.191,35.25175 5.5,35.43075 L23.725,45.95375 C23.879,46.04275 24.052,46.08675 24.225,46.08675 C24.398,46.08675 24.571,46.04275 24.725,45.95375 L42.95,35.43075 C43.259,35.25175 43.45,34.92175 43.45,34.56475 L43.45,13.52075 C43.45,13.16375 43.259,12.83375 42.95,12.65475 L42.95,12.65475 Z",
    id: "Fill-1",
    fill: "#232F3D"
  })));
}
const ForwardRef = React.forwardRef(GeneralIconsResSdklight);
export default ForwardRef;