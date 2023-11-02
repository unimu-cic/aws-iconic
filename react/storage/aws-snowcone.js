const React = require("react");
function StorageAwsSnowcone({
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
  }, "Icon-Architecture/48/Arch_AWS-Snowcone_48") : title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("g", {
    id: "Icon-Architecture/48/Arch_AWS-Snowcone_48",
    stroke: "none",
    strokeWidth: 1,
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("g", {
    id: "Icon-Architecture-BG/48/Storage",
    fill: "#7AA116"
  }, /*#__PURE__*/React.createElement("rect", {
    id: "Rectangle",
    x: 0,
    y: 0,
    width: 64,
    height: 64
  })), /*#__PURE__*/React.createElement("g", {
    id: "Icon-Service/48/AWS-Snowcone_48",
    transform: "translate(10.000000, 15.000000)",
    fill: "#FFFFFF"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M35,17 L35,28 C35,28.552 34.553,29 34,29 L10,29 C9.447,29 9,28.552 9,28 L9,17 C9,16.448 9.447,16 10,16 L16,16 L16,18 L11,18 L11,27 L33,27 L33,18 L28,18 L28,16 L34,16 C34.553,16 35,16.448 35,17 L35,17 Z M40,32 L40,14 C40,12.896 39.104,12 38,12 L6,12 C4.896,12 4,12.896 4,14 L4,32 L2,32 L2,12 C2,10.896 2.896,10 4,10 L10.072,10 L34.072,10 L39.999,10 C41.104,10 41.999,10.896 41.999,12 L42,32 L40,32 Z M6,31 L38,31 L38,14 L6,14 L6,31 Z M32.072,8 L12.072,8 L13.572,6 L30.572,6 L32.072,8 Z M9.928,2.684 C10.308,2.249 10.857,2 11.434,2 L32.711,2 C33.287,2 33.836,2.249 34.216,2.683 L38.868,8 L34.572,8 L31.872,4.4 C31.684,4.148 31.387,4 31.072,4 L13.072,4 C12.758,4 12.461,4.148 12.272,4.4 L9.572,8 L5.276,8 L9.928,2.684 Z M42.202,8.665 L35.722,1.366 C34.962,0.498 33.864,0 32.711,0 L11.433,0 C10.279,0 9.183,0.498 8.423,1.366 L2.319,8.341 L2.348,8.366 C0.966,8.996 0,10.382 0,12 L0,32 C0,33.104 0.896,34 2,34 L5.072,34 C5.625,34 6.072,33.552 6.072,33 L38.072,33 C38.072,33.552 38.52,34 39.072,34 L42,34 C43.104,34 44,33.104 44,32 L44,12 C44,10.605 43.284,9.38 42.202,8.665 L42.202,8.665 Z M20,20 L24,20 L24,18 L20,18 L20,20 Z M19,22 L25,22 C25.553,22 26,21.552 26,21 L26,17 C26,16.448 25.553,16 25,16 L19,16 C18.447,16 18,16.448 18,17 L18,21 C18,21.552 18.447,22 19,22 L19,22 Z",
    id: "AWS-Snowcone_48_Squid"
  }))));
}
const ForwardRef = React.forwardRef(StorageAwsSnowcone);
module.exports = ForwardRef;