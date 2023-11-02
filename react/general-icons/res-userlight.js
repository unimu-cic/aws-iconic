const React = require("react");
function GeneralIconsResUserlight({
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
  }, "Icon-Resource/General-Resource/Res_User_48_Light") : title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("g", {
    id: "Icon-Resource/General-Resource/Res_User_48",
    stroke: "none",
    strokeWidth: 1,
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6.025,44 C6.524,34.085 14.395,26.178 24,26.178 C27.248,26.178 30.43,27.092 33.205,28.822 C38.354,32.033 41.653,37.783 41.974,44 L6.025,44 Z M14.192,13.878 C14.192,8.432 18.592,4 24.001,4 C29.408,4 33.807,8.432 33.807,13.878 C33.807,19.325 29.408,23.757 24.001,23.757 C18.592,23.757 14.192,19.325 14.192,13.878 L14.192,13.878 Z M34.263,27.125 C32.53,26.044 30.65,25.26 28.698,24.771 C32.877,22.939 35.807,18.749 35.807,13.878 C35.807,7.329 30.51,2 24.001,2 C17.489,2 12.192,7.329 12.192,13.878 C12.192,18.755 15.13,22.95 19.317,24.778 C10.545,26.981 4,35.2 4,45 C4,45.552 4.447,46 5,46 L43,46 C43.552,46 44,45.552 44,45 C44,37.719 40.269,30.87 34.263,27.125 L34.263,27.125 Z",
    id: "Fill-1",
    fill: "#242F3E"
  })));
}
const ForwardRef = React.forwardRef(GeneralIconsResUserlight);
module.exports = ForwardRef;