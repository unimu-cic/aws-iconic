import * as React from "react";
function StorageResAmazonSimpleStorageServiceObject({
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
  }, "Icon-Resource/Storage/Res_Amazon-Simple-Storage-Service_Object_48") : title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("g", {
    id: "Icon-Resource/Storage/Res_Amazon-Simple-Storage-Service_Object_48",
    stroke: "none",
    strokeWidth: 1,
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M23.971,43.9414 C12.959,43.9414 4,34.9824 4,23.9704 C4,12.9594 12.959,4.0004 23.971,4.0004 C34.983,4.0004 43.942,12.9594 43.942,23.9704 C43.942,34.9824 34.983,43.9414 23.971,43.9414 M23.971,2.0004 C11.857,2.0004 2,11.8564 2,23.9704 C2,36.0854 11.857,45.9414 23.971,45.9414 C36.085,45.9414 45.942,36.0854 45.942,23.9704 C45.942,11.8564 36.085,2.0004 23.971,2.0004",
    id: "AWS-Amazon-Simple-Storage_Object_Resource-Icon_dark-bg",
    fill: "#7AA116"
  })));
}
const ForwardRef = React.forwardRef(StorageResAmazonSimpleStorageServiceObject);
export default ForwardRef;