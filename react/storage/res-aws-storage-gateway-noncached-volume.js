const React = require("react");
function StorageResAwsStorageGatewayNoncachedVolume({
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
  }, "Icon-Resource/Storage/Res_AWS-Storage-Gateway_Noncached-Volume_48") : title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("g", {
    id: "Icon-Resource/Storage/Res_AWS-Storage-Gateway_Noncached-Volume_48",
    stroke: "none",
    strokeWidth: 1,
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M39.2429,43.9912 L30.7449,43.9912 L30.7449,38.8672 C30.7449,38.3142 30.2979,37.8672 29.7449,37.8672 L17.4979,37.8672 C16.9449,37.8672 16.4979,38.3142 16.4979,38.8672 L16.4979,43.9912 L7.9999,43.9912 L7.9999,4.0002 L39.2429,4.0002 L39.2429,43.9912 Z M40.2429,2.0002 L6.9999,2.0002 C6.4469,2.0002 5.9999,2.4472 5.9999,3.0002 L5.9999,44.9912 C5.9999,45.5442 6.4469,45.9912 6.9999,45.9912 L17.4979,45.9912 C18.0509,45.9912 18.4979,45.5442 18.4979,44.9912 L18.4979,39.8672 L28.7449,39.8672 L28.7449,44.9912 C28.7449,45.5442 29.1919,45.9912 29.7449,45.9912 L40.2429,45.9912 C40.7959,45.9912 41.2429,45.5442 41.2429,44.9912 L41.2429,3.0002 C41.2429,2.4472 40.7959,2.0002 40.2429,2.0002 L40.2429,2.0002 Z",
    id: "AWS-Storage-Gateway_Noncached-volume_Resource-Icon_dark-bg",
    fill: "#7AA116"
  })));
}
const ForwardRef = React.forwardRef(StorageResAwsStorageGatewayNoncachedVolume);
ForwardRef.aliasName = "Aws Storage Gateway Noncached Volume";
module.exports = ForwardRef;