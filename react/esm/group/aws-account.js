import * as React from "react";
function GroupAwsAccount({
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
  }, "Icon-Architecture-Group/32/AWS-Account_32") : title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("g", {
    id: "Icon-Architecture-Group/32/AWS-Account_32",
    stroke: "none",
    strokeWidth: 1,
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("rect", {
    id: "Rectangle",
    fill: "#E7157B",
    x: 0,
    y: 0,
    width: 40,
    height: 40
  }), /*#__PURE__*/React.createElement("path", {
    d: "M24.5,22 C26.43,22 28,23.57 28,25.5 C28,27.43 26.43,29 24.5,29 C22.57,29 21,27.43 21,25.5 C21,23.57 22.57,22 24.5,22 L24.5,22 Z M24.5,30 C26.981,30 29,27.981 29,25.5 C29,23.019 26.981,21 24.5,21 C22.019,21 20,23.019 20,25.5 C20,27.981 22.019,30 24.5,30 L24.5,30 Z M26.023,10.88 L29.084,17 L22.963,17 L26.023,10.88 Z M22.154,18 L29.893,18 C30.065,18 30.227,17.91 30.318,17.763 C30.409,17.615 30.417,17.432 30.34,17.276 L26.471,9.538 C26.301,9.2 25.746,9.2 25.576,9.538 L21.707,17.276 C21.63,17.432 21.638,17.615 21.729,17.763 C21.82,17.91 21.981,18 22.154,18 L22.154,18 Z M11,23 L18,23 L18,16 L11,16 L11,23 Z M10.5,24 L18.5,24 C18.776,24 19,23.776 19,23.5 L19,15.5 C19,15.224 18.776,15 18.5,15 L10.5,15 C10.224,15 10,15.224 10,15.5 L10,23.5 C10,23.776 10.224,24 10.5,24 L10.5,24 Z M8,32 L32,32 L32,8 L8,8 L8,32 Z M32.5,7 L7.5,7 C7.224,7 7,7.224 7,7.5 L7,32.5 C7,32.776 7.224,33 7.5,33 L32.5,33 C32.776,33 33,32.776 33,32.5 L33,7.5 C33,7.224 32.776,7 32.5,7 L32.5,7 Z",
    id: "Fill-1",
    fill: "#FFFFFF"
  })));
}
const ForwardRef = React.forwardRef(GroupAwsAccount);
ForwardRef.aliasName = "Aws Account";
export default ForwardRef;