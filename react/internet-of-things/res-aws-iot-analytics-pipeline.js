const React = require("react");
function InternetOfThingsResAwsIotAnalyticsPipeline({
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
  }, "Icon-Resource/IoT/Res_AWS-IoT-Analytics_Pipeline_48") : title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("g", {
    id: "Icon-Resource/IoT/Res_AWS-IoT-Analytics_Pipeline_48",
    stroke: "none",
    strokeWidth: 1,
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M23,21 L29,21 L29,19 L23,19 L23,21 Z M31,21 L33,21 L33,19 L31,19 L31,21 Z M44,34 L37,34 L37,32 L37,16 L37,14 L44,14 L44,34 Z M13,31 L35,31 L35,17 L13,17 L13,31 Z M11,34 L4,34 L4,14 L11,14 L11,16 L11,32 L11,34 Z M36,12 C35.447,12 35,12.447 35,13 L35,15 L13,15 L13,13 C13,12.447 12.553,12 12,12 L3,12 C2.447,12 2,12.447 2,13 L2,35 C2,35.553 2.447,36 3,36 L12,36 C12.553,36 13,35.553 13,35 L13,33 L35,33 L35,35 C35,35.553 35.447,36 36,36 L45,36 C45.553,36 46,35.553 46,35 L46,13 C46,12.447 45.553,12 45,12 L36,12 Z",
    id: "Amazon-IOT-RESOURCES-IoT-Pipeline_Resource-Icon_light-bg",
    fill: "#7AA116"
  })));
}
const ForwardRef = React.forwardRef(InternetOfThingsResAwsIotAnalyticsPipeline);
module.exports = ForwardRef;