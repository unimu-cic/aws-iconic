const React = require("react");
function ComputeAwsBatch({
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
  }, "Icon-Architecture/48/Arch_AWS-Batch_48") : title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("g", {
    id: "Icon-Architecture/48/Arch_AWS-Batch_48",
    stroke: "none",
    strokeWidth: 1,
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("g", {
    id: "Icon-Architecture-BG/48/Compute",
    fill: "#ED7100"
  }, /*#__PURE__*/React.createElement("rect", {
    id: "Rectangle",
    x: 0,
    y: 0,
    width: 64,
    height: 64
  })), /*#__PURE__*/React.createElement("path", {
    d: "M32.981,46.202 C33.918,46.202 34.677,46.961 34.677,47.898 C34.677,48.835 33.918,49.595 32.981,49.595 C32.044,49.595 31.285,48.835 31.285,47.898 C31.285,46.961 32.044,46.202 32.981,46.202 M18.679,33 C18.679,33.937 17.92,34.696 16.983,34.696 C16.046,34.696 15.287,33.937 15.287,33 C15.287,32.063 16.046,31.304 16.983,31.304 C17.92,31.304 18.679,32.063 18.679,33 M48.966,51 C47.192,51 46,49.794 46,48 C46,46.217 47.192,45.019 48.966,45.019 C50.781,45.019 52,46.217 52,48 C52,49.794 50.781,51 48.966,51 M46,33 C46,31.205 47.206,30 49,30 C50.793,30 52,31.205 52,33 C52,34.794 50.793,36 49,36 C47.206,36 46,34.794 46,33 M32.981,36 C31.198,36 30,34.794 30,33 C30,31.205 31.198,30 32.981,30 C34.787,30 36,31.205 36,33 C36,34.794 34.787,36 32.981,36 M37,48 C37,50.467 35.46,52 32.981,52 C30.562,52 29,50.43 29,48 C29,45.57 30.57,44 33,44 C35.429,44 37,45.57 37,48 M28,17 C28,13.564 30.582,12 32.981,12 C35.479,12 38,13.546 38,17 C38,20.454 35.479,22 32.981,22 C30.582,22 28,20.435 28,17 M17,37 C14.57,37 13,35.43 13,33 C13,30.57 14.562,29 16.979,29 C19.459,29 21,30.533 21,33 C21,35.43 19.429,37 17,37 M20,48 C20,49.794 18.783,51 16.971,51 C15.194,51 14,49.794 14,48 C14,46.201 15.194,44.993 16.971,44.993 C18.754,44.993 20,46.229 20,48 M50,43.113 L50,37.908 C52.368,37.482 54,35.551 54,33 C54,30.103 51.897,28 49,28 C46.448,28 44.517,29.632 44.091,32 L37.908,32 C37.538,29.952 36.037,28.458 33.981,28.091 L33.981,23.927 C37.112,23.512 40,21.155 40,17 C40,12.404 36.468,10 32.981,10 C29.511,10 26,12.404 26,17 C26,21.153 28.868,23.509 31.981,23.926 L31.981,28.092 C29.944,28.461 28.458,29.954 28.091,32 L22.923,32 C22.5,29.012 20.177,27 16.979,27 C13.459,27 11,29.467 11,33 C11,36.187 13.012,38.501 16,38.924 L16,43.082 C13.633,43.501 12,45.437 12,48 C12,50.897 14.09,53 16.971,53 C19.885,53 22,50.897 22,48 C22,45.453 20.369,43.521 18,43.086 L18,38.924 C20.664,38.547 22.546,36.664 22.923,34 L28.091,34 C28.459,36.051 29.953,37.546 32,37.91 L32,42.076 C29.012,42.499 27,44.812 27,48 C27,51.533 29.46,54 32.981,54 C36.525,54 39,51.533 39,48 C39,44.812 36.987,42.499 34,42.076 L34,37.907 C36.046,37.534 37.539,36.042 37.908,34 L44.091,34 C44.46,36.046 45.953,37.54 48,37.908 L48,43.108 C45.634,43.523 44,45.449 44,48 C44,50.897 46.088,53 48.966,53 C51.882,53 54,50.897 54,48 C54,45.468 52.369,43.546 50,43.113",
    id: "AWS-Batch_Icon_48_Squid",
    fill: "#FFFFFF"
  })));
}
const ForwardRef = React.forwardRef(ComputeAwsBatch);
module.exports = ForwardRef;