import * as React from "react";
function GeneralIconsResMobileClientlight({
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
  }, "Icon-Resource/General-Resource/Res_Mobile-client_48_Light") : title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("g", {
    id: "Icon-Resource/General-Resource/Res_Mobile-client_48",
    stroke: "none",
    strokeWidth: 1,
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M19.603,6.109 C19.773,6.109 19.911,6.247 19.911,6.417 C19.911,6.586 19.773,6.724 19.603,6.724 C19.433,6.724 19.295,6.586 19.295,6.417 C19.295,6.247 19.433,6.109 19.603,6.109 L19.603,6.109 Z M19.603,8.224 C20.6,8.224 21.411,7.413 21.411,6.417 C21.411,5.42 20.6,4.609 19.603,4.609 C18.606,4.609 17.795,5.42 17.795,6.417 C17.795,7.413 18.606,8.224 19.603,8.224 L19.603,8.224 Z M23.012,7.401 L28.374,7.401 L28.374,5.401 L23.012,5.401 L23.012,7.401 Z M32.173,43.826 L15.812,43.826 C14.813,43.826 14,43.029 14,42.05 L14,40.641 L33.986,40.641 L33.986,42.05 C33.986,43.029 33.172,43.826 32.173,43.826 L32.173,43.826 Z M14,10.802 L33.986,10.802 L33.986,38.641 L14,38.641 L14,28.943 L14,10.802 Z M16.646,4 L31.339,4 C32.798,4 33.986,5.167 33.986,6.6 L33.986,8.802 L14,8.802 L14,6.6 C14,5.167 15.187,4 16.646,4 L16.646,4 Z M31.354,2 L31.339,2 L16.646,2 C14.084,2 12,4.064 12,6.6 L12,42.05 C12,44.132 13.71,45.826 15.812,45.826 L32.173,45.826 C34.276,45.826 35.986,44.132 35.986,42.05 L35.986,6.6 L35.986,6.597 C35.986,4.067 33.91,2.008 31.354,2 L31.354,2 Z",
    id: "Fill-1",
    fill: "#232F3D"
  })));
}
const ForwardRef = React.forwardRef(GeneralIconsResMobileClientlight);
export default ForwardRef;