const React = require("react");
function GeneralIconsResProgrammingLanguagelight({
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
  }, "Icon-Resource/General-Resource/Res_Generic-Programming-Language_48_Light") : title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("g", {
    id: "Icon-Resource/General-Resource/Res_Generic-Programming-Language_48",
    stroke: "none",
    strokeWidth: 1,
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18.0586,38 L19.9416,38.673 L29.9416,10.673 L28.0586,10 L18.0586,38 Z M45.6316,23.539 L34.6316,14.562 L33.3686,16.111 L43.4206,24.316 L33.3666,32.563 L34.6336,34.109 L45.6336,25.087 C45.8666,24.897 45.9996,24.613 45.9996,24.313 C45.9996,24.013 45.8646,23.729 45.6316,23.539 L45.6316,23.539 Z M4.5796,24.316 L14.6336,32.563 L13.3666,34.109 L2.3666,25.087 C2.1336,24.897 1.9996,24.613 1.9996,24.313 C1.9996,24.013 2.1356,23.729 2.3686,23.539 L13.3686,14.562 L14.6316,16.111 L4.5796,24.316 Z",
    id: "Fill-1",
    fill: "#232F3D"
  })));
}
const ForwardRef = React.forwardRef(GeneralIconsResProgrammingLanguagelight);
ForwardRef.aliasName = "Programming Languagelight";
module.exports = ForwardRef;