import * as React from "react";
function StorageAmazonElasticBlockStoreVolume({
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
  }, "Icon-Resource/Storage/Res_Amazon-Elastic-Block-Store_Volume_48") : title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("g", {
    id: "Icon-Resource/Storage/Res_Amazon-Elastic-Block-Store_Volume_48",
    stroke: "none",
    strokeWidth: 1,
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M13.4185,4 L33.8805,4 L38.2965,9.873 L9.0035,9.873 L13.4185,4 Z M7.0005,11.873 L40.2995,11.873 C40.6785,11.873 41.0245,11.659 41.1935,11.319 C41.3635,10.98 41.3265,10.575 41.0985,10.272 L35.1785,2.399 C34.9895,2.147 34.6935,2 34.3795,2 L12.9195,2 C12.6055,2 12.3095,2.147 12.1205,2.399 L6.2015,10.272 C5.9735,10.575 5.9365,10.98 6.1065,11.319 C6.2745,11.659 6.6215,11.873 7.0005,11.873 L7.0005,11.873 Z M8.0605,43.985 L39.2995,43.985 L39.2995,15.371 L8.0605,15.371 L8.0605,43.985 Z M40.2995,13.371 L7.0605,13.371 C6.5075,13.371 6.0605,13.818 6.0605,14.371 L6.0605,44.985 C6.0605,45.538 6.5075,45.985 7.0605,45.985 L40.2995,45.985 C40.8525,45.985 41.2995,45.538 41.2995,44.985 L41.2995,14.371 C41.2995,13.818 40.8525,13.371 40.2995,13.371 L40.2995,13.371 Z",
    id: "AWS-Amazon-Elastic-Block-Store_Volume_Resource-Icon_light-bg",
    fill: "#7AA116"
  })));
}
const ForwardRef = React.forwardRef(StorageAmazonElasticBlockStoreVolume);
export default ForwardRef;