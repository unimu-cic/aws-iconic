const React = require("react");
function MachineLearningArchAwsPanorama({
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
  }, "Icon-Architecture/48/Arch_AWS-Panorama_48") : title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("g", {
    id: "Icon-Architecture/48/Arch_AWS-Panorama_48",
    stroke: "none",
    strokeWidth: 1,
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("g", {
    id: "Icon-Architecture-BG/48/Machine-Learning",
    fill: "#01A88D"
  }, /*#__PURE__*/React.createElement("rect", {
    id: "Rectangle",
    x: 0,
    y: 0,
    width: 64,
    height: 64
  })), /*#__PURE__*/React.createElement("g", {
    id: "Icon-Service/48/AWS-Panorama_48",
    transform: "translate(10.000000, 10.000000)",
    fill: "#FFFFFF"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M10,10 C11.103,10 12,9.103 12,8 C12,6.897 11.103,6 10,6 C8.897,6 8,6.897 8,8 C8,9.103 8.897,10 10,10 L10,10 Z M18,20 L18,38 L16,38 L16,20.754 L9.726,18.961 C9.296,18.839 9,18.446 9,18 L9,11.858 C7.279,11.411 6,9.858 6,8 C6,5.794 7.794,4 10,4 C12.206,4 14,5.794 14,8 C14,9.858 12.721,11.411 11,11.858 L11,17.246 L17.274,19.039 C17.704,19.161 18,19.554 18,20 L18,20 Z M24,4 C24,2.897 23.103,2 22,2 C20.897,2 20,2.897 20,4 C20,5.103 20.897,6 22,6 C23.103,6 24,5.103 24,4 L24,4 Z M23,7.858 L23,34 L21,34 L21,7.858 C19.279,7.411 18,5.858 18,4 C18,1.794 19.794,0 22,0 C24.206,0 26,1.794 26,4 C26,5.858 24.721,7.411 23,7.858 L23,7.858 Z M37,16 C37,14.897 36.103,14 35,14 C33.897,14 33,14.897 33,16 C33,17.103 33.897,18 35,18 C36.103,18 37,17.103 37,16 L37,16 Z M39,16 C39,18.206 37.206,20 35,20 C33.124,20 31.557,18.697 31.127,16.952 L28,16.952 L28,38 L26,38 L26,15.952 C26,15.4 26.447,15 27,15 L31,15 C31.464,13.305 33.159,12 35,12 C37.206,12 39,13.794 39,16 L39,16 Z M33,38.977 L36,38.977 L36,37.023 L33,37.023 L33,38.977 Z M37,38.977 L40,38.977 L40,37.023 L37,37.023 L37,38.977 Z M39.215,44 L4.785,44 C2.143,44 0,41.857 0,39.215 L0,37.785 C0,35.143 2.143,33 4.785,33 L14,33 L14,35 L4.465,35 C3.104,35 2,36.104 2,37.465 L2,39.535 C2,40.896 3.104,42 4.465,42 L39.535,42 C40.896,42 42,40.896 42,39.535 L42,37.465 C42,36.104 40.896,35 39.535,35 L30,35 L30,33 L39.215,33 C41.857,33 44,35.143 44,37.785 L44,39.215 C44,41.857 41.857,44 39.215,44 L39.215,44 Z",
    id: "Fill-1"
  }))));
}
const ForwardRef = React.forwardRef(MachineLearningArchAwsPanorama);
module.exports = ForwardRef;