const React = require("react");
function GroupAutoScalingGroup({
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
  }, "Icon-Architecture-Group/32/Auto-Scaling-group_32") : title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("g", {
    id: "Icon-Architecture-Group/32/Auto-Scaling-group_32",
    stroke: "none",
    strokeWidth: 1,
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("rect", {
    id: "Rectangle",
    fill: "#ED7100",
    x: 0,
    y: 0,
    width: 40,
    height: 40
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18.021,19.4952538 C18.021,19.3402538 17.95,19.1982538 17.833,19.1042538 L14.879,16.1512538 L14.172,16.8582538 L16.31,18.9952538 L7,18.9952538 L7,19.9952538 L16.314,19.9952538 L14.172,22.1372538 L14.879,22.8442538 L17.848,19.8752538 C17.956,19.7812538 18.021,19.6432538 18.021,19.4952538 L18.021,19.4952538 Z M33.986,18.9952538 L24.675,18.9952538 L26.813,16.8582538 L26.106,16.1512538 L23.137,19.1202538 C23.03,19.2132538 22.964,19.3512538 22.964,19.4992538 C22.964,19.6542538 23.036,19.7972538 23.153,19.8902538 L26.106,22.8442538 L26.813,22.1372538 L24.671,19.9952538 L33.986,19.9952538 L33.986,18.9952538 Z M20.996,31.3242538 L20.996,22.0102538 L19.996,22.0102538 L19.996,31.3202538 L17.858,29.1832538 L17.151,29.8902538 L20.12,32.8572538 C20.213,32.9662538 20.352,33.0322538 20.5,33.0322538 C20.656,33.0322538 20.8,32.9592538 20.893,32.8412538 L23.844,29.8902538 L23.137,29.1832538 L20.996,31.3242538 Z M17.858,9.83725376 L17.151,9.13025376 L20.103,6.17925376 C20.285,5.94725376 20.683,5.93925376 20.877,6.16225376 L23.844,9.13025376 L23.137,9.83725376 L20.996,7.69625376 L20.996,17.0102538 L19.996,17.0102538 L19.996,7.70025376 L17.858,9.83725376 Z",
    id: "Fill-1",
    fill: "#FFFFFF"
  })));
}
const ForwardRef = React.forwardRef(GroupAutoScalingGroup);
ForwardRef.aliasName = "Auto Scaling Group";
module.exports = ForwardRef;