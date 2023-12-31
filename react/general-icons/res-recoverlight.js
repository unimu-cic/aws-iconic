const React = require("react");
function GeneralIconsResRecoverlight({
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
  }, "Icon-Resource/General-Resource/Res_Recover_48_Light") : title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("g", {
    id: "Icon-Resource/General-Resource/Res_Recover_48",
    stroke: "none",
    strokeWidth: 1,
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M45,24 C45,35.58 35.58,45 24,45 C12.42,45 3,35.58 3,24 C3,16.674 6.9,9.783 13.181,6 L5,6 L5,4 L16,4 C16.552,4 17,4.448 17,5 L17,16 L15,16 L15,7.279 C14.75,7.414 14.496,7.541 14.253,7.687 C8.546,11.104 5,17.355 5,24 C5,34.477 13.523,43 24,43 C34.477,43 43,34.477 43,24 C43,13.523 34.477,5 24,5 L24,3 C35.58,3 45,12.42 45,24",
    id: "Fill-1",
    fill: "#232F3D"
  })));
}
const ForwardRef = React.forwardRef(GeneralIconsResRecoverlight);
ForwardRef.aliasName = "Recoverlight";
module.exports = ForwardRef;