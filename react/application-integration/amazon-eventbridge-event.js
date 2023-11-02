const React = require("react");
function ApplicationIntegrationAmazonEventbridgeEvent({
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
  }, "Icon-Resource/Application-Integration/Res_Amazon-EventBridge-Event_48") : title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("g", {
    id: "Icon-Resource/Application-Integration/Res_Amazon-EventBridge-Event_48",
    stroke: "none",
    strokeWidth: 1,
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M30.58,10.58 L28.74,9.795 L31.538,3.237 L33.378,4.022 L30.58,10.58 Z M36.295,15.605 L35.094,14.006 L40.831,9.698 L42.032,11.298 L36.295,15.605 Z M38.447,20.802 L45.587,19.898 L45.839,21.883 L38.699,22.786 L38.447,20.802 Z M37.907,28.354 L44.538,31.098 L43.773,32.945 L37.143,30.202 L37.907,28.354 Z M33.625,34.644 L37.968,40.3 L36.382,41.518 L32.039,35.863 L33.625,34.644 Z M26.743,37.995 L27.635,45.046 L25.65,45.296 L24.759,38.245 L26.743,37.995 Z M17.259,36.716 L19.099,37.501 L16.301,44.059 L14.461,43.274 L17.259,36.716 Z M11.544,31.69 L12.745,33.29 L7.008,37.598 L5.807,35.998 L11.544,31.69 Z M9.392,26.494 L2.252,27.398 L2,25.414 L9.14,24.51 L9.392,26.494 Z M9.932,18.941 L3.302,16.198 L4.065,14.351 L10.696,17.094 L9.932,18.941 Z M14.214,12.651 L9.871,6.997 L11.457,5.778 L15.8,11.433 L14.214,12.651 Z M21.096,9.301 L20.204,2.25 L22.188,2 L23.08,9.051 L21.096,9.301 Z M28.039,30.999 L19.379,30.999 L15.048,23.499 L19.379,15.999 L28.039,15.999 L32.369,23.499 L28.039,30.999 Z M34.39,22.999 L29.482,14.499 C29.304,14.189 28.974,13.999 28.616,13.999 L18.802,13.999 C18.444,13.999 18.114,14.189 17.935,14.499 L13.027,22.999 C12.849,23.309 12.849,23.689 13.027,23.999 L17.935,32.499 C18.114,32.809 18.444,32.999 18.802,32.999 L28.616,32.999 C28.974,32.999 29.304,32.809 29.482,32.499 L34.39,23.999 C34.568,23.689 34.568,23.309 34.39,22.999 L34.39,22.999 Z",
    id: "Icon-Resource/48/Amazon-EventBridge-Event",
    fill: "#E7157B"
  })));
}
const ForwardRef = React.forwardRef(ApplicationIntegrationAmazonEventbridgeEvent);
module.exports = ForwardRef;