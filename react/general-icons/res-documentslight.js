const React = require("react");
function GeneralIconsResDocumentslight({
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
  }, "Icon-Resource/General-Resource/Res_Documents_48_Light") : title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("g", {
    id: "Icon-Resource/General-Resource/Res_Documents_48",
    stroke: "none",
    strokeWidth: 1,
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M40.708,17.292 L37.834,14.418 L36.42,15.832 L39.001,18.413 L39.001,44 L15.001,44 L15.001,42 L13.001,42 L13.001,45 C13.001,45.552 13.448,46 14.001,46 L40.001,46 C40.554,46 41.001,45.552 41.001,45 L41.001,17.999 C41.001,17.734 40.895,17.479 40.708,17.292 L40.708,17.292 Z M33,38 L33,12.999 L25.001,12.999 C24.448,12.999 24.001,12.551 24.001,11.999 L24.001,4 L9,4 L9,38 L33,38 Z M26.001,10.999 L31.586,10.999 L26.001,5.414 L26.001,10.999 Z M34,40 L8,40 C7.447,40 7,39.552 7,39 L7,3 C7,2.448 7.447,2 8,2 L25.001,2 C25.267,2 25.52,2.105 25.708,2.293 L34.707,11.292 C34.895,11.48 35,11.734 35,11.999 L35,39 C35,39.552 34.553,40 34,40 L34,40 Z M13.001,18 L23,18 L23,16 L13.001,16 L13.001,18 Z M13.001,30 L23,30 L23,28 L13.001,28 L13.001,30 Z M13.001,23.999 L27,23.999 L27,21.999 L13.001,21.999 L13.001,23.999 Z",
    id: "Fill-1",
    fill: "#232F3D"
  })));
}
const ForwardRef = React.forwardRef(GeneralIconsResDocumentslight);
module.exports = ForwardRef;