const React = require("react");
function GroupRegion({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    width: "40px",
    height: "40px",
    viewBox: "0 0 40 40",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title === undefined ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, "Icon-Architecture-Group/32/Region_32") : title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("g", {
    id: "Icon-Architecture-Group/32/Region_32",
    stroke: "none",
    strokeWidth: 1,
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("rect", {
    id: "Rectangle",
    fill: "#00A4A6",
    x: 0,
    y: 0,
    width: 40,
    height: 40
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14,20.026 L14,11.026 L29.293,11.026 L25.146,15.172 C24.951,15.368 24.951,15.684 25.146,15.88 L29.293,20.026 L14,20.026 Z M26.207,15.526 L30.854,10.88 C30.996,10.736 31.039,10.522 30.962,10.335 C30.885,10.148 30.702,10.026 30.5,10.026 L14,10.026 L14,8.97 C14.596,8.76 15.026,8.198 15.026,7.531 C15.026,6.687 14.34,6 13.495,6 C12.65,6 11.963,6.687 11.963,7.531 C11.963,8.201 12.398,8.766 13,8.973 L13,33.026 L10,33.026 L10,34.026 L17,34.026 L17,33.026 L14,33.026 L14,21.026 L30.5,21.026 C30.702,21.026 30.885,20.904 30.962,20.717 C31.039,20.53 30.996,20.316 30.854,20.172 L26.207,15.526 Z",
    id: "Fill-1",
    fill: "#FFFFFF"
  })));
}
const ForwardRef = React.forwardRef(GroupRegion);
ForwardRef.aliasName = "Region";
module.exports = ForwardRef;