const React = require("react");
function ComputeArchAwsLambda({
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
  }, "Icon-Architecture/48/Arch_AWS-Lambda_48") : title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("g", {
    id: "Icon-Architecture/48/Arch_AWS-Lambda_48",
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
    d: "M22.6794094,52 L13.5740701,52 L23.8376189,30.41 L28.3997494,39.861 L22.6794094,52 Z M24.7269406,27.667 C24.5606285,27.321 24.2120702,27.103 23.8306478,27.103 L23.8276601,27.103 C23.4452418,27.104 23.0966835,27.325 22.9323632,27.672 L11.0973143,52.569 C10.9499239,52.879 10.9708374,53.243 11.1540795,53.534 C11.3353298,53.824 11.6540117,54 11.9955989,54 L23.309802,54 C23.695208,54 24.0447622,53.777 24.2100784,53.428 L30.4044577,40.284 C30.5329264,40.01 30.5319305,39.692 30.3994783,39.42 L24.7269406,27.667 Z M51.0082382,52 L41.985557,52 L26.9547262,19.578 C26.7914017,19.226 26.4388599,19 26.0524581,19 L20.1279625,19 L20.1349337,12 L31.8146251,12 L46.7747483,44.42 C46.9380728,44.774 47.2906147,45 47.6790082,45 L51.0082382,45 L51.0082382,52 Z M52.0041191,43 L48.3143803,43 L33.354257,10.58 C33.1909326,10.226 32.8383907,10 32.450993,10 L19.1400486,10 C18.5913182,10 18.1451636,10.447 18.1441677,10.999 L18.1362006,19.999 C18.1362006,20.265 18.2407681,20.519 18.4269979,20.707 C18.6142235,20.895 18.8671772,21 19.1310857,21 L25.4170861,21 L40.4479168,53.422 C40.6112413,53.774 40.9627873,54 41.350185,54 L52.0041191,54 C52.5548412,54 53,53.552 53,53 L53,44 C53,43.448 52.5548412,43 52.0041191,43 L52.0041191,43 Z",
    id: "AWS-Lambda_Icon_48_Squid",
    fill: "#FFFFFF"
  })));
}
const ForwardRef = React.forwardRef(ComputeArchAwsLambda);
module.exports = ForwardRef;