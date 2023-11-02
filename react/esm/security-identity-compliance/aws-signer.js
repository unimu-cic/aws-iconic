import * as React from "react";
function SecurityIdentityComplianceAwsSigner({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    width: "64px",
    height: "64px",
    viewBox: "0 0 64 64",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title === undefined ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, "Icon-Architecture/48/Arch_AWS-Signer_48") : title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("g", {
    id: "Icon-Architecture/48/Arch_AWS-Signer_48",
    stroke: "none",
    strokeWidth: 1,
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("g", {
    id: "Icon-Architecture-BG/48/Security-Identity-Compliance",
    fill: "#DD344C"
  }, /*#__PURE__*/React.createElement("rect", {
    id: "Rectangle",
    x: 0,
    y: 0,
    width: 64,
    height: 64
  })), /*#__PURE__*/React.createElement("g", {
    id: "Icon-Service/48/AWS-Signer_48",
    transform: "translate(10.000000, 10.000000)",
    fill: "#FFFFFF"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M26.626,31.697 C27.143,32.037 27.837,31.893 28.177,31.379 C28.517,30.864 28.374,30.168 27.858,29.828 C27.669,29.703 27.455,29.644 27.244,29.644 C26.88,29.644 26.522,29.821 26.308,30.147 C25.968,30.662 26.11,31.357 26.626,31.697 L26.626,31.697 Z M36.969,26.015 L28.133,20.188 L20,26.441 L20,39.738 L24.782,32.659 C23.994,31.633 23.887,30.185 24.638,29.046 C25.586,27.61 27.522,27.212 28.959,28.158 C30.396,29.106 30.793,31.045 29.847,32.48 C29.247,33.388 28.252,33.881 27.237,33.881 C26.972,33.881 26.705,33.842 26.443,33.773 L21.695,40.802 L34.074,35.66 L36.969,26.015 Z M39.038,26.079 L35.854,36.689 C35.767,36.976 35.557,37.21 35.279,37.325 L19.384,43.928 C19.302,43.962 19.215,43.968 19.129,43.979 L18.129,44.005 L0,44.005 L0,42.005 L18,42.005 L18,25.948 C18,25.637 18.145,25.344 18.391,25.155 L27.29,18.313 L31.929,9.344 L33.706,10.263 L29.385,18.618 L37.937,24.258 L42.439,18.656 L43.997,19.909 L39.038,26.079 Z M38.538,0.919 L36.761,0 L32.805,7.651 L34.582,8.57 L38.538,0.919 Z M10.061,16.435 L10.062,16.435 C10.335,16.435 10.597,16.322 10.785,16.124 L17.4,9.171 L15.951,7.792 L10.06,13.985 L7.473,11.272 L6.025,12.652 L9.337,16.125 C9.525,16.323 9.787,16.435 10.061,16.435 L10.061,16.435 Z M2,12.005 C2,12.735 2.52,13.369 3.234,13.512 C3.605,13.586 3.902,13.862 4.003,14.226 C4.187,14.89 4.45,15.525 4.786,16.113 C4.968,16.43 4.961,16.821 4.771,17.133 C4.616,17.383 4.538,17.651 4.538,17.927 C4.538,18.776 5.229,19.466 6.077,19.466 C6.355,19.466 6.623,19.388 6.872,19.235 C7.032,19.136 7.214,19.087 7.396,19.087 C7.566,19.087 7.737,19.131 7.892,19.219 C8.48,19.555 9.114,19.818 9.778,20.001 C10.142,20.102 10.418,20.399 10.492,20.769 C10.636,21.485 11.27,22.005 12,22.005 C12.73,22.005 13.364,21.485 13.508,20.769 C13.582,20.399 13.858,20.102 14.222,20.001 C14.886,19.818 15.521,19.555 16.108,19.219 C16.426,19.037 16.816,19.043 17.128,19.235 C17.377,19.388 17.645,19.466 17.923,19.466 C18.772,19.466 19.462,18.776 19.462,17.927 C19.462,17.651 19.384,17.383 19.23,17.133 C19.039,16.821 19.032,16.43 19.214,16.113 C19.55,15.525 19.814,14.89 19.997,14.226 C20.098,13.862 20.396,13.586 20.766,13.512 C21.48,13.369 22,12.735 22,12.005 C22,11.274 21.48,10.64 20.766,10.497 C20.396,10.424 20.098,10.148 19.997,9.783 C19.814,9.119 19.55,8.484 19.214,7.896 C19.032,7.579 19.039,7.188 19.23,6.877 C19.384,6.626 19.462,6.359 19.462,6.082 C19.462,5.234 18.772,4.543 17.923,4.543 C17.645,4.543 17.377,4.621 17.128,4.774 C16.816,4.965 16.426,4.971 16.108,4.79 C15.521,4.454 14.886,4.191 14.222,4.008 C13.858,3.907 13.582,3.611 13.508,3.24 C13.364,2.524 12.73,2.005 12,2.005 C11.27,2.005 10.636,2.524 10.492,3.24 C10.418,3.611 10.142,3.907 9.778,4.008 C9.114,4.191 8.48,4.454 7.892,4.79 C7.572,4.971 7.183,4.965 6.872,4.774 C6.623,4.621 6.355,4.543 6.077,4.543 C5.229,4.543 4.538,5.234 4.538,6.082 C4.538,6.359 4.616,6.626 4.771,6.877 C4.961,7.188 4.968,7.579 4.786,7.896 C4.45,8.484 4.187,9.119 4.003,9.783 C3.902,10.148 3.605,10.424 3.234,10.497 C2.52,10.64 2,11.274 2,12.005 L2,12.005 Z M0,12.005 C0,10.537 0.911,9.239 2.239,8.714 C2.394,8.256 2.578,7.811 2.793,7.383 C2.625,6.967 2.538,6.526 2.538,6.082 C2.538,4.131 4.126,2.543 6.077,2.543 C6.522,2.543 6.963,2.63 7.378,2.797 C7.807,2.583 8.252,2.398 8.709,2.244 C9.234,0.916 10.532,0.005 12,0.005 C13.468,0.005 14.766,0.916 15.291,2.244 C15.748,2.398 16.193,2.583 16.622,2.797 C17.037,2.63 17.479,2.543 17.923,2.543 C19.874,2.543 21.462,4.131 21.462,6.082 C21.462,6.526 21.375,6.967 21.207,7.383 C21.422,7.811 21.606,8.256 21.761,8.714 C23.089,9.239 24,10.537 24,12.005 C24,13.472 23.089,14.771 21.761,15.295 C21.606,15.753 21.422,16.198 21.207,16.626 C21.375,17.042 21.462,17.483 21.462,17.927 C21.462,19.879 19.874,21.466 17.923,21.466 C17.479,21.466 17.037,21.379 16.622,21.212 C16.193,21.426 15.748,21.612 15.291,21.765 C14.766,23.093 13.468,24.005 12,24.005 C10.532,24.005 9.234,23.093 8.709,21.765 C8.252,21.612 7.807,21.426 7.378,21.212 C6.963,21.379 6.522,21.466 6.077,21.466 C4.126,21.466 2.538,19.879 2.538,17.927 C2.538,17.483 2.625,17.042 2.793,16.626 C2.578,16.198 2.394,15.753 2.239,15.295 C0.911,14.771 0,13.472 0,12.005 L0,12.005 Z M8,23.005 L8,31.429 L11.293,28.136 C11.684,27.746 12.316,27.746 12.707,28.136 L16.54,31.964 L15.126,33.379 L12.001,30.257 L7.707,34.551 C7.516,34.742 7.26,34.843 7,34.843 C6.871,34.843 6.741,34.819 6.617,34.767 C6.243,34.613 6,34.248 6,33.843 L6,23.005 L8,23.005 Z",
    id: "Fill-3"
  }))));
}
const ForwardRef = React.forwardRef(SecurityIdentityComplianceAwsSigner);
export default ForwardRef;