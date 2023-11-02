const React = require("react");
function InternetOfThingsAwsIotTopic({
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
  }, "Icon-Resource/IoT/Res_AWS-IoT_Topic_48") : title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("g", {
    id: "Icon-Resource/IoT/Res_AWS-IoT_Topic_48",
    stroke: "none",
    strokeWidth: 1,
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M11,39.954 L11,14.329 C13.77,15.995 19.001,16.648 23.998,16.648 C28.807,16.648 34.168,15.972 36.996,14.241 L36.996,39.954 C36.996,41.568 31.933,43.914 23.998,43.914 C16.063,43.914 11,41.568 11,39.954 Z M38.97,11.32 C38.958,11.169 38.951,11.015 38.916,10.876 C38.578,9.473 37.218,8.279 34.871,7.331 L34.121,9.185 C35.738,9.839 36.804,10.645 36.974,11.351 C36.977,11.367 36.977,11.384 36.979,11.4 C36.813,12.696 32.598,14.477 25.06,14.633 L22.922,14.633 C15.231,14.483 11.104,12.756 11.01,11.466 C11.014,11.426 11.015,11.386 11.025,11.343 C11.192,10.645 12.258,9.839 13.875,9.185 L13.125,7.331 C10.778,8.279 9.418,9.473 9.083,10.867 C9.038,11.045 9.022,11.234 9.015,11.42 L9,11.42 C9,11.44 9.007,11.458 9.008,11.477 C9.007,11.498 9,11.518 9,11.538 L9,39.954 C9,43.825 16.727,45.914 23.998,45.914 C31.269,45.914 38.996,43.825 38.996,39.954 L38.996,11.538 C38.996,11.5 38.984,11.464 38.982,11.425 C38.984,11.39 38.996,11.356 38.996,11.32 L38.97,11.32 Z M23.998,9.001 L18.656,4 L29.34,4 L23.998,9.001 Z M17.124,5.307 L23.314,11.101 C23.507,11.28 23.753,11.37 23.998,11.37 C24.243,11.37 24.489,11.28 24.682,11.101 L30.872,5.307 L30.872,12.536 L32.872,12.536 L32.872,3 C32.872,2.447 32.425,2 31.872,2 L16.124,2 C15.571,2 15.124,2.447 15.124,3 L15.124,12.536 L17.124,12.536 L17.124,5.307 Z",
    id: "Amazon-IOT-RESOURCES-IoT-topic_Resource-Icon_light-bg",
    fill: "#7AA116"
  })));
}
const ForwardRef = React.forwardRef(InternetOfThingsAwsIotTopic);
module.exports = ForwardRef;