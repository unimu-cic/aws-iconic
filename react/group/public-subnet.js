const React = require("react");
function GroupPublicSubnet({
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
  }, "Icon-Architecture-Group/32/Public-subnet_32") : title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("g", {
    id: "Icon-Architecture-Group/32/Public-subnet_32",
    stroke: "none",
    strokeWidth: 1,
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("rect", {
    id: "Rectangle",
    fill: "#7AA116",
    x: 0,
    y: 0,
    width: 40,
    height: 40
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19.536,22.049 C20.642,22.049 21.542,22.948 21.542,24.054 C21.542,25.16 20.642,26.06 19.536,26.06 C18.43,26.06 17.53,25.16 17.53,24.054 C17.53,22.948 18.43,22.049 19.536,22.049 L19.536,22.049 Z M19.012,27.007 L19.012,30.501 L20.012,30.501 L20.012,27.012 C21.442,26.782 22.542,25.549 22.542,24.054 C22.542,22.397 21.193,21.049 19.536,21.049 C17.879,21.049 16.53,22.397 16.53,24.054 C16.53,25.532 17.604,26.757 19.012,27.007 L19.012,27.007 Z M10,33.014 L29.012,33.014 L29.012,18 L10,18 L10,33.014 Z M14.046,12.484 C14.046,9.46 16.506,7 19.529,7 C22.553,7 25.012,9.46 25.012,12.484 L25.012,17 L14.046,17 L14.046,12.484 Z M29.512,17 L26.012,17 L26.012,12.484 C26.012,8.908 23.103,6 19.529,6 C15.954,6 13.046,8.908 13.046,12.484 L13.046,17 L9.5,17 C9.223,17 9,17.224 9,17.5 L9,33.514 C9,33.79 9.223,34.014 9.5,34.014 L29.512,34.014 C29.788,34.014 30.012,33.79 30.012,33.514 L30.012,17.5 C30.012,17.224 29.788,17 29.512,17 L29.512,17 Z",
    id: "Fill-1",
    fill: "#FFFFFF"
  })));
}
const ForwardRef = React.forwardRef(GroupPublicSubnet);
ForwardRef.aliasName = "Public Subnet";
module.exports = ForwardRef;