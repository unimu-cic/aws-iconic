import * as React from "react";
function AnalyticsResAwsGlueDataCatalog({
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
  }, "Icon-Resource/Analytics/Res_AWS-Glue_Data-Catalog_48") : title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("g", {
    id: "Icon-Resource/Analytics/Res_AWS-Glue_Data-Catalog_48",
    stroke: "none",
    strokeWidth: 1,
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M21.306,18.375 C23.678,18.932 26.68,19 28,19 C29.321,19 32.323,18.932 34.695,18.375 L29,29.764 L29,33 L27,33 L27,29.764 L21.306,18.375 Z M28,15 C31.95,15 34.573,15.561 35.617,16 C34.573,16.441 31.95,17 28,17 C24.051,17 21.429,16.441 20.384,16 C21.429,15.561 24.051,15 28,15 L28,15 Z M31,35 L31,30.236 L37.642,16.952 C37.868,16.674 38,16.359 38,16 C38,13.217 30.346,13 28,13 C25.655,13 18,13.217 18,16 C18,16.359 18.131,16.674 18.358,16.952 L25,30.236 L25,35 L31,35 Z M4,2 L9,2 L9,4 L6,4 L6,44 L9,44 L9,46 L4,46 L4,2 Z M16,42 L40,42 L40,40 L16,40 L16,42 Z M16,38 L40,38 L40,36 L16,36 L16,38 Z M16,12 L40,12 L40,10 L16,10 L16,12 Z M16,8 L40,8 L40,6 L16,6 L16,8 Z M13,44 L42,44 L42,4 L13,4 L13,44 Z M11,46 L44,46 L44,2 L11,2 L11,46 Z",
    id: "Icon-Resource/48/AWS-Glue_Data-Catalog",
    fill: "#8C4FFF"
  })));
}
const ForwardRef = React.forwardRef(AnalyticsResAwsGlueDataCatalog);
ForwardRef.aliasName = "Aws Glue Data Catalog";
export default ForwardRef;