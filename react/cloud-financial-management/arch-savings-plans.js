const React = require("react");
function CloudFinancialManagementArchSavingsPlans({
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
  }, "Icon-Architecture/48/Arch_Savings-Plans_48") : title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("g", {
    id: "Icon-Architecture/48/Arch_Savings-Plans_48",
    stroke: "none",
    strokeWidth: 1,
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("g", {
    id: "Icon-Architecture-BG/48/AWS-Cost-Management",
    fill: "#7AA116"
  }, /*#__PURE__*/React.createElement("rect", {
    id: "Rectangle",
    x: 0,
    y: 0,
    width: 64,
    height: 64
  })), /*#__PURE__*/React.createElement("g", {
    id: "Icon-Service/48/AWS-Savings-Plans_48",
    transform: "translate(12.000000, 10.000000)",
    fill: "#FFFFFF"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M42,26.388 L36.967,28.905 C36.837,28.97 36.699,29 36.564,29 C36.233,29 35.914,28.817 35.756,28.501 L33.24,23.467 L34.854,22.66 L36.241,25.437 C36.802,23.665 37.097,21.822 37.097,19.931 C37.097,10.047 29.226,2.006 19.551,2.006 C9.876,2.006 2.005,10.047 2.005,19.931 C2.005,22.354 2.471,24.703 3.387,26.914 L1.534,27.683 C0.516,25.227 0,22.619 0,19.931 C0,8.941 8.771,0 19.551,0 C30.331,0 39.102,8.941 39.102,19.931 C39.102,22.138 38.732,24.287 38.044,26.348 L41.193,24.773 L42,26.388 Z M19,42 C12.076,42 7.775,38.249 7.775,32.212 C7.775,25.849 12.745,22.261 14.378,21.082 C14.417,21.054 14.455,21.026 14.49,21 L23.51,21 C23.545,21.026 23.583,21.054 23.622,21.082 C25.255,22.261 30.225,25.849 30.225,32.212 C30.225,38.249 25.924,42 19,42 L19,42 Z M24.793,19.46 C24.65,19.357 24.538,19.277 24.463,19.218 C24.286,19.077 24.067,19 23.841,19 L14.159,19 C13.933,19 13.714,19.077 13.537,19.218 C13.462,19.277 13.35,19.357 13.207,19.46 C8.275,23.021 5.775,27.311 5.775,32.212 C5.775,39.373 10.967,44 19,44 C27.033,44 32.225,39.373 32.225,32.212 C32.225,27.311 29.725,23.021 24.793,19.46 L24.793,19.46 Z M31,15 L33,15 C33,16.488 31.977,17.769 30.511,18.115 C30.271,18.172 30.032,18.2 29.799,18.2 C28.674,18.2 27.662,17.559 27.105,16.448 C27.077,16.391 27.053,16.352 27.034,16.326 C26.736,16.424 26.116,17.005 25.712,17.576 C25.524,17.841 25.219,18 24.895,18 L13,18 L13,16 L24.399,16 C24.969,15.303 26.04,14.223 27.232,14.318 C27.638,14.348 28.393,14.549 28.895,15.553 C29.223,16.21 29.701,16.25 30.052,16.169 C30.508,16.061 31,15.649 31,15 L31,15 Z M21.245,34.855 C21.245,35.721 20.732,36.464 20,36.803 L20,33.041 C20.686,33.388 21.245,33.974 21.245,34.855 L21.245,34.855 Z M17,28.564 C17,27.799 17.401,27.131 18,26.751 L18,30.25 C17.425,29.892 17,29.346 17,28.564 L17,28.564 Z M21.245,28.564 L23.245,28.564 C23.245,26.582 21.852,24.924 20,24.518 L20,23 L18,23 L18,24.595 C16.274,25.09 15,26.673 15,28.564 C15,30.342 16.175,31.81 18,32.445 L18,36.668 C17.401,36.288 17,35.62 17,34.855 L15,34.855 C15,36.746 16.274,38.329 18,38.825 L18,41 L20,41 L20,38.901 C21.852,38.495 23.245,36.837 23.245,34.855 C23.245,32.997 21.965,31.48 20,30.896 L20,26.616 C20.732,26.954 21.245,27.698 21.245,28.564 L21.245,28.564 Z M15.676,11.517 C15.927,11.604 16.201,11.587 16.44,11.47 C16.574,11.404 16.646,11.368 19.005,9.321 L21.35,11.331 C21.618,11.561 21.99,11.635 22.324,11.517 L24.792,10.672 L23.441,13 L14.574,13 L13.218,10.675 L15.676,11.517 Z M14,15 L24.018,15 C24.374,15 24.704,14.81 24.883,14.502 L27.865,9.359 C28.074,8.998 28.037,8.545 27.772,8.222 C27.508,7.9 27.071,7.775 26.676,7.911 L22.217,9.44 L19.65,7.241 C19.274,6.917 18.718,6.92 18.344,7.246 C17.396,8.07 16.351,8.974 15.796,9.445 L11.324,7.911 C10.929,7.775 10.491,7.9 10.227,8.223 C9.962,8.547 9.926,9 10.136,9.361 L13.136,14.504 C13.315,14.811 13.645,15 14,15 L14,15 Z",
    id: "AWS-Savings-Plans_48_Squid"
  }))));
}
const ForwardRef = React.forwardRef(CloudFinancialManagementArchSavingsPlans);
module.exports = ForwardRef;