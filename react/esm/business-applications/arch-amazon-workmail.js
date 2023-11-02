import * as React from "react";
function BusinessApplicationsArchAmazonWorkmail({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    width: "64px",
    height: "64px",
    viewBox: "0 0 64 64",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title === undefined ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, "Icon-Architecture/48/Arch_Amazon-WorkMail_48") : title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("g", {
    id: "Icon-Architecture/48/Arch_Amazon-WorkMail_48",
    stroke: "none",
    strokeWidth: 1,
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("g", {
    id: "Icon-Architecture-BG/48/Business-Applications",
    fill: "#DD344C"
  }, /*#__PURE__*/React.createElement("rect", {
    id: "Rectangle",
    x: 0,
    y: 0,
    width: 64,
    height: 64
  })), /*#__PURE__*/React.createElement("path", {
    d: "M12,52 L12,13.414 L31.293,32.707 C31.488,32.902 31.744,33 32,33 C32.256,33 32.512,32.902 32.707,32.707 L52,13.414 L52,52 L12,52 Z M50.586,12 L32,30.586 L13.414,12 L50.586,12 Z M53,10 L11,10 C10.447,10 10,10.448 10,11 L10,53 C10,53.552 10.447,54 11,54 L53,54 C53.553,54 54,53.552 54,53 L54,11 C54,10.448 53.553,10 53,10 L53,10 Z",
    id: "Amazon-WorkMail_Icon_48_Squid",
    fill: "#FFFFFF"
  })));
}
const ForwardRef = React.forwardRef(BusinessApplicationsArchAmazonWorkmail);
export default ForwardRef;