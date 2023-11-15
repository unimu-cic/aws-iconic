const React = require("react");
function StorageArchAwsBackup({
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
  }, "Icon-Architecture/48/Arch_AWS-Backup_48") : title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("g", {
    id: "Icon-Architecture/48/Arch_AWS-Backup_48",
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
  })), /*#__PURE__*/React.createElement("path", {
    d: "M32.67,42.724 C30.767,42.724 28.849,42.135 27.209,40.913 C24.818,39.131 23.544,36.743 23.524,34.007 L25.524,33.993 C25.539,36.108 26.509,37.896 28.404,39.309 C31.569,41.667 36.062,41.011 38.419,37.849 C40.776,34.685 40.121,30.192 36.958,27.834 C34.076,25.688 29.823,26.256 27.301,28.997 L28.999,28.995 L29.001,30.995 L25.001,31 L25,31 C24.735,31 24.481,30.895 24.293,30.707 C24.106,30.52 24,30.266 24,30 L24,26 L26,26 L26,27.475 C29.22,24.154 34.522,23.523 38.153,26.231 C42.201,29.248 43.039,34.995 40.023,39.044 C38.228,41.452 35.465,42.724 32.67,42.724 M43,52 C41.673,52 41,51.327 41,50 C41,48.617 41.617,48 43,48 C44.327,48 45,48.673 45,50 C45,51.327 44.327,52 43,52 M39.103,49 L24.902,49 C24.725,48.053 24.277,47.313 23.613,46.801 L25.707,44.707 L24.293,43.293 L21.544,46.042 C21.365,46.025 21.191,46 21,46 C20.782,46 20.583,46.026 20.381,46.048 L15.782,30.679 C16.227,30.501 16.617,30.259 16.936,29.942 L20.525,31.88 L21.475,30.12 L17.859,28.169 C17.942,27.806 18,27.423 18,27 C18,26.281 17.856,25.653 17.61,25.108 L29.139,17.205 C29.635,17.655 30.262,17.969 31,18.115 L31,22 L33,22 L33,18.115 C33.738,17.969 34.365,17.655 34.861,17.205 L46.39,25.108 C46.145,25.653 46,26.281 46,27 C46,27.401 46.049,27.765 46.12,28.11 L42.512,30.127 L43.488,31.873 L47.009,29.905 C47.436,30.349 48,30.652 48.674,30.826 L42.892,46.009 C42.741,46.012 42.601,46.029 42.457,46.043 L39.707,43.293 L38.293,44.707 L40.4,46.814 C39.736,47.329 39.285,48.067 39.103,49 M21,52 C19.636,52 19,51.364 19,50 C19,48.617 19.617,48 21,48 C22.402,48 23,48.598 23,50 C23,51.383 22.383,52 21,52 M12,27 C12,25.617 12.617,25 14,25 C15.383,25 16,25.617 16,27 C16,28.402 15.402,29 14,29 C12.579,29 12,28.42 12,27 M32,12 C33.401,12 34.111,12.71 34.111,14.111 C34.111,15.509 33.401,16.218 32,16.218 C30.619,16.218 29.889,15.489 29.889,14.111 C29.889,12.71 30.599,12 32,12 M52,27 C52,28.383 51.383,29 50,29 C48.579,29 48,28.42 48,27 C48,25.636 48.636,25 50,25 C51.383,25 52,25.617 52,27 M54,27 C54,24.533 52.468,23 50,23 C49.101,23 48.329,23.208 47.707,23.587 L35.904,15.495 C36.029,15.07 36.111,14.614 36.111,14.111 C36.111,11.614 34.497,10 32,10 C29.503,10 27.889,11.614 27.889,14.111 C27.889,14.614 27.971,15.07 28.096,15.495 L16.293,23.587 C15.671,23.208 14.899,23 14,23 C11.532,23 10,24.533 10,27 C10,29.43 11.415,30.896 13.785,30.983 L18.494,46.716 C17.539,47.39 17,48.511 17,50 C17,52.467 18.532,54 21,54 C23.149,54 24.547,52.893 24.902,51 L39.107,51 C39.486,52.848 40.925,54 43,54 C45.43,54 47,52.43 47,50 C47,48.281 46.203,47.007 44.883,46.4 L50.771,30.938 C52.779,30.645 54,29.197 54,27",
    id: "AWS-Backup_Icon_48_Squid",
    fill: "#FFFFFF"
  })));
}
const ForwardRef = React.forwardRef(StorageArchAwsBackup);
ForwardRef.aliasName = "Aws Backup";
module.exports = ForwardRef;