const React = require("react");
function StorageArchAmazonS3OnOutposts({
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
  }, "Icon-Architecture/48/Arch_Amazon-S3-on-Outposts_48") : title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("g", {
    id: "Icon-Architecture/48/Arch_Amazon-S3-on-Outposts_48",
    stroke: "none",
    strokeWidth: 1,
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("g", {
    id: "Icon-Architecture-BG/48/Storage",
    fill: "#7AA116"
  }, /*#__PURE__*/React.createElement("rect", {
    id: "Rectangle",
    x: 0,
    y: 0,
    width: 64,
    height: 64
  })), /*#__PURE__*/React.createElement("g", {
    id: "Icon-Service/48/Amazon-S3-On-Outposts_48",
    transform: "translate(10.000000, 10.000000)",
    fill: "#FFFFFF"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M40.416,20.305 C40.206,19.444 35.853,17.487 29.461,17.487 C23.069,17.487 18.717,19.444 18.507,20.305 L18.515,20.363 C18.858,21.228 23.154,22.754 29.461,22.754 C35.704,22.754 39.971,21.259 40.391,20.39 L40.397,20.338 L40.411,20.34 L40.416,20.305 Z M40.037,23.015 C37.16,24.343 32.353,24.754 29.461,24.754 C26.562,24.754 21.745,24.341 18.871,23.008 L19.901,30.656 C20.672,30.939 21.395,31.396 22.03,32.024 C22.396,32.386 22.717,32.799 22.989,33.26 C23.601,32.988 24.292,32.935 24.959,33.131 C26.064,33.459 26.84,34.371 27.114,35.631 C27.562,35.778 28.006,35.986 28.4,36.236 C29.768,37.101 30.461,38.234 30.461,39.604 C30.461,40.529 30.25,41.323 29.853,41.991 C31.695,41.965 33.516,41.771 35.015,41.425 C35.631,41.283 36.174,41.12 36.631,40.939 C37.336,40.66 37.631,40.413 37.709,40.313 C37.71,40.294 37.713,40.275 37.715,40.256 L38.785,32.305 C35.887,31.384 32.217,29.726 30.24,28.797 C30.021,28.923 29.77,29 29.5,29 C28.673,29 28,28.327 28,27.5 C28,26.673 28.673,26 29.5,26 C30.104,26 30.624,26.362 30.861,26.879 C32.43,27.619 36.141,29.324 39.057,30.29 L40.037,23.015 Z M28.461,39.604 C28.461,39.128 28.326,38.556 27.33,37.925 C26.938,37.677 26.457,37.487 26.042,37.417 C25.536,37.331 25.184,36.88 25.21,36.379 C25.143,35.676 24.84,35.181 24.391,35.049 C24.029,34.943 23.655,35.08 23.411,35.407 C23.189,35.701 22.821,35.846 22.462,35.795 C22.099,35.741 21.794,35.491 21.67,35.144 C21.425,34.461 21.073,33.889 20.625,33.447 C20.222,33.049 19.301,32.314 17.996,32.314 C17.537,32.314 17.031,32.405 16.483,32.633 C15.305,33.124 14.346,34.598 14.346,35.919 C14.346,36.071 14.354,36.22 14.373,36.366 C14.436,36.867 14.114,37.337 13.624,37.46 C12.82,37.662 11.862,38.211 11.862,39.681 C11.862,40.878 12.523,41.534 13.078,41.875 C13.212,41.957 13.368,42 13.531,42 L26.122,42.013 L26.127,42.013 C26.518,42.011 28.461,41.879 28.461,39.604 L28.461,39.604 Z M12.348,35.786 C12.406,33.702 13.834,31.571 15.714,30.787 C16.418,30.494 17.134,30.355 17.84,30.334 L16.543,20.709 L16.544,20.709 C16.543,20.708 16.543,20.707 16.543,20.705 L16.511,20.459 C16.505,20.416 16.502,20.373 16.502,20.329 C16.502,18.954 17.933,17.825 20.074,17 L20,17 L20,3 C20,2.449 19.552,2 19,2 L3,2 C2.448,2 2,2.449 2,3 L2,38 C2,38.552 2.448,39 3,39 L9.909,39 C10.111,37.523 10.98,36.38 12.348,35.786 L12.348,35.786 Z M13.529,44 C12.996,43.999 12.479,43.854 12.032,43.579 C11.401,43.192 10.444,42.389 10.049,41 L6,41 L6,44 L4,44 L4,41 L3,41 C1.346,41 3.55271368e-15,39.655 3.55271368e-15,38 L3.55271368e-15,3 C3.55271368e-15,1.346 1.346,0 3,0 L19,0 C20.654,0 22,1.346 22,3 L22,16.389 C24.234,15.807 26.887,15.487 29.461,15.487 C35.693,15.487 42.421,17.339 42.421,20.329 C42.421,20.373 42.418,20.416 42.412,20.459 L42.38,20.705 C42.375,20.747 42.367,20.788 42.356,20.829 C42.354,20.838 42.349,20.845 42.347,20.853 L41.312,28.529 C43.008,29.518 43.819,30.314 43.974,31.137 C44.058,31.586 43.941,32.025 43.648,32.374 C43.308,32.78 42.796,32.981 42.048,32.981 C41.674,32.981 41.233,32.925 40.733,32.825 L39.704,40.469 C39.663,41.418 38.877,42.202 37.366,42.799 C36.816,43.017 36.176,43.21 35.464,43.373 C33.716,43.778 31.584,44 29.461,44 L26.131,44 L13.529,44 Z M6,17 L17,17 L17,15 L6,15 L6,17 Z M6,22 L14,22 L14,20 L6,20 L6,22 Z M6,12 L17,12 L17,10 L6,10 L6,12 Z",
    id: "Fill-4"
  }))));
}
const ForwardRef = React.forwardRef(StorageArchAmazonS3OnOutposts);
ForwardRef.aliasName = "Amazon S3 On Outposts";
module.exports = ForwardRef;