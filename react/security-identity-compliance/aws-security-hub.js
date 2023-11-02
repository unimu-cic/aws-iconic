const React = require("react");
function SecurityIdentityComplianceAwsSecurityHub({
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
  }, "Icon-Architecture/48/Arch_AWS-Security-Hub_48") : title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("g", {
    id: "Icon-Architecture/48/Arch_AWS-Security-Hub_48",
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
  })), /*#__PURE__*/React.createElement("path", {
    d: "M32.759,36.156 L32.759,28.92 L34.759,29.92 L34.76,33.325 C34.755,33.43 34.62,35.577 32.759,36.156 M28.759,33.364 L28.759,29.92 L30.759,28.92 L30.759,36.156 C28.958,35.598 28.774,33.58 28.759,33.364 M36.206,28.407 L32.206,26.407 C31.925,26.266 31.593,26.266 31.312,26.407 L27.312,28.407 C26.973,28.576 26.759,28.923 26.759,29.302 L26.76,33.413 C26.844,35.104 27.996,38.302 31.759,38.302 C35.521,38.302 36.674,35.112 36.759,33.375 L36.759,29.302 C36.759,28.923 36.545,28.576 36.206,28.407 M46.184,43.281 C44.95,43.281 43.947,42.278 43.947,41.045 C43.947,39.811 44.95,38.808 46.184,38.808 C47.417,38.808 48.42,39.811 48.42,41.045 C48.42,42.278 47.417,43.281 46.184,43.281 M31.759,40.045 C27.693,40.045 24.385,36.703 24.385,32.596 C24.385,28.489 27.693,25.148 31.759,25.148 C35.906,25.148 39.281,28.489 39.281,32.596 C39.281,36.703 35.906,40.045 31.759,40.045 M33.995,49.366 C33.995,50.599 32.992,51.603 31.759,51.603 C30.526,51.603 29.523,50.599 29.523,49.366 C29.523,48.133 30.526,47.13 31.759,47.13 C32.992,47.13 33.995,48.133 33.995,49.366 M29.523,15.237 C29.523,14.004 30.526,13 31.759,13 C32.992,13 33.995,14.004 33.995,15.237 C33.995,16.47 32.992,17.473 31.759,17.473 C30.526,17.473 29.523,16.47 29.523,15.237 M17.237,42.347 C16.003,42.347 15,41.344 15,40.111 C15,38.878 16.003,37.875 17.237,37.875 C18.47,37.875 19.473,38.878 19.473,40.111 C19.473,41.344 18.47,42.347 17.237,42.347 M18.077,26.186 C16.844,26.186 15.841,25.182 15.841,23.949 C15.841,22.717 16.844,21.713 18.077,21.713 C19.311,21.713 20.314,22.717 20.314,23.949 C20.314,25.182 19.311,26.186 18.077,26.186 M46.281,21.106 C47.515,21.106 48.518,22.109 48.518,23.342 C48.518,24.575 47.515,25.578 46.281,25.578 C45.048,25.578 44.045,24.575 44.045,23.342 C44.045,22.109 45.048,21.106 46.281,21.106 M46.184,36.808 C45.081,36.808 44.085,37.241 43.331,37.934 L40.589,36.117 C41.031,35.028 41.281,33.841 41.281,32.596 C41.281,30.961 40.86,29.423 40.12,28.08 L43.229,26.265 C44,27.071 45.08,27.578 46.281,27.578 C48.617,27.578 50.518,25.678 50.518,23.342 C50.518,21.006 48.617,19.106 46.281,19.106 C43.946,19.106 42.045,21.006 42.045,23.342 C42.045,23.757 42.124,24.15 42.236,24.53 L38.965,26.438 C37.423,24.664 35.234,23.459 32.759,23.201 L32.759,19.342 C34.612,18.889 35.995,17.227 35.995,15.237 C35.995,12.901 34.095,11 31.759,11 C29.423,11 27.523,12.901 27.523,15.237 C27.523,17.227 28.906,18.889 30.759,19.342 L30.759,23.204 C28.161,23.483 25.884,24.84 24.361,26.816 L22.067,25.32 C22.216,24.887 22.314,24.431 22.314,23.949 C22.314,21.614 20.413,19.713 18.077,19.713 C15.741,19.713 13.841,21.614 13.841,23.949 C13.841,26.285 15.741,28.186 18.077,28.186 C19.209,28.186 20.234,27.733 20.994,27.008 L23.315,28.521 C22.725,29.757 22.385,31.135 22.385,32.596 C22.385,33.695 22.581,34.746 22.925,35.728 L20.312,37.215 C19.538,36.394 18.45,35.875 17.237,35.875 C14.901,35.875 13,37.775 13,40.111 C13,42.447 14.901,44.347 17.237,44.347 C19.572,44.347 21.473,42.447 21.473,40.111 C21.473,39.708 21.399,39.326 21.293,38.957 L23.785,37.539 C25.272,39.967 27.809,41.672 30.759,41.989 L30.759,45.261 C28.906,45.714 27.523,47.376 27.523,49.366 C27.523,51.702 29.423,53.603 31.759,53.603 C34.095,53.603 35.995,51.702 35.995,49.366 C35.995,47.376 34.612,45.714 32.759,45.261 L32.759,41.991 C35.618,41.694 38.105,40.136 39.643,37.889 L42.219,39.596 C42.052,40.05 41.947,40.534 41.947,41.045 C41.947,43.381 43.848,45.281 46.184,45.281 C48.52,45.281 50.42,43.381 50.42,41.045 C50.42,38.708 48.52,36.808 46.184,36.808",
    id: "AWS-Security-Hub_Icon_48_Squid",
    fill: "#FFFFFF"
  })));
}
const ForwardRef = React.forwardRef(SecurityIdentityComplianceAwsSecurityHub);
module.exports = ForwardRef;