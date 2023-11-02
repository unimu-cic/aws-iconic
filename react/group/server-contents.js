const React = require("react");
function GroupServerContents({
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
  }, "Icon-Architecture-Group/32/Server-contents_32") : title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("g", {
    id: "Icon-Architecture-Group/32/Server-contents_32",
    stroke: "none",
    strokeWidth: 1,
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("rect", {
    id: "Rectangle",
    fill: "#7D8998",
    x: 0,
    y: 0,
    width: 40,
    height: 40
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12,34 L28,34 L28,6 L12,6 L12,34 Z M13,33 L27,33 L27,7 L13,7 L13,33 Z M15,11 L25,11 L25,10 L15,10 L15,11 Z M15,15 L25,15 L25,14 L15,14 L15,15 Z M15,19 L25,19 L25,18 L15,18 L15,19 Z",
    id: "Fill-1",
    fill: "#FFFFFF"
  })));
}
const ForwardRef = React.forwardRef(GroupServerContents);
module.exports = ForwardRef;