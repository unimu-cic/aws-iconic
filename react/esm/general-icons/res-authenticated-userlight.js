import * as React from "react";
function GeneralIconsResAuthenticatedUserlight({
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
  }, "Icon-Resource/General-Resource/Res_Authenticated-User_48_Light") : title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("g", {
    id: "Icon-Resource/General-Resource/Res_Authenticated-User_48",
    stroke: "none",
    strokeWidth: 1,
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M22.001,23.7568 C27.408,23.7568 31.808,19.3248 31.808,13.8788 C31.808,8.4318 27.408,3.9998 22.001,3.9998 C16.593,3.9998 12.192,8.4318 12.192,13.8788 C12.192,19.3248 16.593,23.7568 22.001,23.7568 L22.001,23.7568 Z M4.025,43.9998 L28,43.9998 L28,45.9998 L3,45.9998 C2.447,45.9998 2,45.5518 2,44.9998 C2,35.1998 8.545,26.9808 17.318,24.7778 C13.13,22.9498 10.192,18.7548 10.192,13.8788 C10.192,7.3288 15.489,1.9998 22.001,1.9998 C28.511,1.9998 33.808,7.3288 33.808,13.8788 C33.808,18.7528 30.871,22.9478 26.687,24.7758 C27.6,25.0048 28.503,25.2788 29.382,25.6428 C29.56,25.7158 29.734,25.7908 29.908,25.8688 L29.088,27.6938 C28.932,27.6228 28.774,27.5558 28.616,27.4898 C26.512,26.6198 24.285,26.1778 22,26.1778 C12.396,26.1778 4.524,34.0848 4.025,43.9998 L4.025,43.9998 Z M44,36.4998 C44,32.3638 40.636,28.9998 36.5,28.9998 C32.364,28.9998 29,32.3638 29,36.4998 C29,40.6358 32.364,43.9998 36.5,43.9998 C40.636,43.9998 44,40.6358 44,36.4998 L44,36.4998 Z M46,36.4998 C46,41.7378 41.738,45.9998 36.5,45.9998 C31.262,45.9998 27,41.7378 27,36.4998 C27,31.2618 31.262,26.9998 36.5,26.9998 C41.738,26.9998 46,31.2618 46,36.4998 L46,36.4998 Z M40.293,32.8758 L41.707,34.2898 L35.707,40.2898 C35.512,40.4858 35.256,40.5828 35,40.5828 C34.744,40.5828 34.488,40.4858 34.293,40.2898 L31.293,37.2898 L32.707,35.8758 L35,38.1688 L40.293,32.8758 Z",
    id: "Fill-1",
    fill: "#232F3D"
  })));
}
const ForwardRef = React.forwardRef(GeneralIconsResAuthenticatedUserlight);
export default ForwardRef;