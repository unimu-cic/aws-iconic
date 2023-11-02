const React = require("react");
function InternetOfThingsResAwsIotGreengrassRecipe({
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
  }, "Icon-Resource/IoT/Res_AWS-IoT-Greengrass_Recipe_48") : title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("g", {
    id: "Icon-Resource/IoT/Res_AWS-IoT-Greengrass_Recipe_48",
    stroke: "none",
    strokeWidth: 1,
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M38,13.106 L37.895,13 L28,13 C27.447,13 27,12.552 27,12 L27,4 L11.075,4 C11.034,4 11,4.034 11,4.075 L11,43.925 C11,43.966 11.034,44 11.075,44 L37.925,44 C37.966,44 38,43.966 38,43.925 L38,13.106 Z M29,4.082 L29,11 L35.899,11 L29,4.082 Z M40,12.692 L40,43.925 C40,45.069 39.069,46 37.925,46 L11.075,46 C9.931,46 9,45.069 9,43.925 L9,4.075 C9,2.931 9.931,2 11.075,2 L29.333,2 C29.599,2 29.854,2.106 30.041,2.294 L39.708,11.986 C39.895,12.174 40,12.428 40,12.692 L40,12.692 Z M23,37 L34,37 L34,35 L23,35 L23,37 Z M23,29 L34,29 L34,27 L23,27 L23,29 Z M15,37 L19,37 L19,35 L15,35 L15,37 Z M15,29 L19,29 L19,27 L15,27 L15,29 Z M15,21 L19,21 L19,19 L15,19 L15,21 Z M23,21 L34,21 L34,19 L23,19 L23,21 Z",
    id: "Fill-1",
    fill: "#7AA116"
  })));
}
const ForwardRef = React.forwardRef(InternetOfThingsResAwsIotGreengrassRecipe);
module.exports = ForwardRef;