const React = require("react");
function GeneralIconsClientlight({
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
  }, "Icon-Resource/General-Resource/Res_Client_48_Light") : title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("g", {
    id: "Icon-Resource/General-Resource/Res_Client_48",
    stroke: "none",
    strokeWidth: 1,
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M42.299,38.773 L42.299,40.696 C42.299,41.134 41.945,41.49 41.506,41.49 L30.762,41.49 C30.323,41.49 29.968,41.134 29.968,40.696 L29.968,38.773 C29.968,38.335 30.323,37.98 30.762,37.98 L41.506,37.98 C41.945,37.98 42.299,38.335 42.299,38.773 L42.299,38.773 Z M43.797,42.399 C43.797,42.754 43.508,43.044 43.153,43.044 L4.645,43.044 C4.289,43.044 4,42.754 4,42.399 L4,37.011 C4,36.656 4.289,36.367 4.645,36.367 L43.153,36.367 C43.508,36.367 43.797,36.656 43.797,37.011 L43.797,42.399 Z M43.153,34.367 L4.645,34.367 C3.187,34.367 2,35.553 2,37.011 L2,42.399 C2,43.857 3.187,45.044 4.645,45.044 L43.153,45.044 C44.611,45.044 45.797,43.857 45.797,42.399 L45.797,37.011 C45.797,35.553 44.611,34.367 43.153,34.367 L43.153,34.367 Z M7.501,27.21 L40.264,27.21 L40.264,7.502 L7.501,7.502 L7.501,27.21 Z M40.842,5.502 L6.924,5.502 C6.14,5.502 5.501,6.139 5.501,6.923 L5.501,27.788 C5.501,28.572 6.14,29.21 6.924,29.21 L40.842,29.21 C41.626,29.21 42.264,28.572 42.264,27.788 L42.264,6.923 C42.264,6.139 41.626,5.502 40.842,5.502 L40.842,5.502 Z M43.797,30.067 C43.797,30.422 43.508,30.711 43.153,30.711 L4.645,30.711 C4.289,30.711 4,30.422 4,30.067 L4,4.644 C4,4.289 4.289,4 4.645,4 L43.153,4 C43.508,4 43.797,4.289 43.797,4.644 L43.797,30.067 Z M43.153,2 L4.645,2 C3.187,2 2,3.186 2,4.644 L2,30.067 C2,31.525 3.187,32.711 4.645,32.711 L43.153,32.711 C44.611,32.711 45.797,31.525 45.797,30.067 L45.797,4.644 C45.797,3.186 44.611,2 43.153,2 L43.153,2 Z",
    id: "Fill-3",
    fill: "#232F3D"
  })));
}
const ForwardRef = React.forwardRef(GeneralIconsClientlight);
module.exports = ForwardRef;