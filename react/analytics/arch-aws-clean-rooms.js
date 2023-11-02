const React = require("react");
function AnalyticsArchAwsCleanRooms({
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
  }, "Icon-Architecture/48/Arch_AWS-Clean-Rooms_48") : title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("g", {
    id: "Icon-Architecture/48/Arch_AWS-Clean-Rooms_48",
    stroke: "none",
    strokeWidth: 1,
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("g", {
    id: "Icon-Architecture-BG/48/Analytics",
    fill: "#8C4FFF"
  }, /*#__PURE__*/React.createElement("rect", {
    id: "Rectangle",
    x: 0,
    y: 0,
    width: 64,
    height: 64
  })), /*#__PURE__*/React.createElement("path", {
    d: "M32,33 C32.552,33 33,33.449 33,34 C33,34.551 32.552,35 32,35 C31.448,35 31,34.551 31,34 C31,33.449 31.448,33 32,33 L32,33 Z M31,36.816 L31,39 L33,39 L33,36.816 C34.161,36.402 35,35.302 35,34 C35,32.346 33.654,31 32,31 C30.346,31 29,32.346 29,34 C29,35.302 29.839,36.402 31,36.816 L31,36.816 Z M15.414,47.414 C14.658,48.17 13.342,48.17 12.586,47.414 C12.208,47.036 12,46.534 12,46 C12,45.466 12.208,44.964 12.586,44.586 C12.964,44.208 13.466,44 14,44 C14.534,44 15.036,44.208 15.414,44.586 C15.792,44.964 16,45.466 16,46 C16,46.534 15.792,47.036 15.414,47.414 L15.414,47.414 Z M19.293,39.293 L16.021,42.565 C15.413,42.206 14.725,42 14,42 C12.932,42 11.927,42.417 11.172,43.172 C10.416,43.927 10,44.932 10,46 C10,47.068 10.416,48.073 11.172,48.828 C11.927,49.583 12.932,50 14,50 C15.068,50 16.073,49.583 16.828,48.828 C17.584,48.073 18,47.068 18,46 C18,45.275 17.794,44.587 17.435,43.979 L20.707,40.707 L19.293,39.293 Z M51.414,47.414 C50.658,48.17 49.342,48.17 48.586,47.414 C48.208,47.036 48,46.534 48,46 C48,45.466 48.208,44.964 48.586,44.586 C48.964,44.208 49.466,44 50,44 C50.534,44 51.036,44.208 51.414,44.586 C51.792,44.964 52,45.466 52,46 C52,46.534 51.792,47.036 51.414,47.414 L51.414,47.414 Z M50,42 C49.275,42 48.587,42.206 47.979,42.565 L44.707,39.293 L43.293,40.707 L46.565,43.979 C46.206,44.587 46,45.275 46,46 C46,47.068 46.416,48.073 47.172,48.828 C47.927,49.583 48.932,50 50,50 C51.068,50 52.073,49.583 52.828,48.828 C53.584,48.073 54,47.068 54,46 C54,44.932 53.584,43.927 52.828,43.172 C52.073,42.417 51.068,42 50,42 L50,42 Z M12.586,19.414 C12.208,19.036 12,18.534 12,18 C12,17.466 12.208,16.964 12.586,16.586 C12.964,16.208 13.466,16 14,16 C14.534,16 15.036,16.208 15.414,16.586 C15.792,16.964 16,17.466 16,18 C16,18.534 15.792,19.036 15.414,19.414 C14.658,20.17 13.342,20.17 12.586,19.414 L12.586,19.414 Z M18,18 C18,16.932 17.584,15.927 16.828,15.172 C16.073,14.417 15.068,14 14,14 C12.932,14 11.927,14.417 11.172,15.172 C10.416,15.927 10,16.932 10,18 C10,19.068 10.416,20.073 11.172,20.828 C11.927,21.583 12.932,22 14,22 C14.725,22 15.413,21.794 16.021,21.435 L19.293,24.707 L20.707,23.293 L17.435,20.021 C17.794,19.413 18,18.725 18,18 L18,18 Z M48.586,16.586 C48.964,16.208 49.466,16 50,16 C50.534,16 51.036,16.208 51.414,16.586 C51.792,16.964 52,17.466 52,18 C52,18.534 51.792,19.036 51.414,19.414 C50.658,20.17 49.342,20.17 48.586,19.414 C48.208,19.036 48,18.534 48,18 C48,17.466 48.208,16.964 48.586,16.586 L48.586,16.586 Z M44.707,24.707 L47.979,21.435 C48.587,21.794 49.275,22 50,22 C51.068,22 52.073,21.583 52.828,20.828 C53.584,20.073 54,19.068 54,18 C54,16.932 53.584,15.927 52.828,15.172 C52.073,14.417 51.068,14 50,14 C48.932,14 47.927,14.417 47.172,15.172 C46.416,15.927 46,16.932 46,18 C46,18.725 46.206,19.413 46.565,20.021 L43.293,23.293 L44.707,24.707 Z M24,41 L40,41 L40,30 L24,30 L24,41 Z M28,25.07 C28,23.929 28.939,23 30.095,23 L33.905,23 C35.061,23 36,23.929 36,25.07 L36,28 L28,28 L28,25.07 Z M34,50 C34,51.103 33.103,52 32,52 C30.897,52 30,51.103 30,50 C30,48.897 30.897,48 32,48 C33.103,48 34,48.897 34,50 L34,50 Z M30,14 C30,12.897 30.897,12 32,12 C33.103,12 34,12.897 34,14 C34,15.103 33.103,16 32,16 C30.897,16 30,15.103 30,14 L30,14 Z M40.419,28 L38,28 L38,25.07 C38,22.826 36.163,21 33.905,21 L33,21 L33,17.858 C34.721,17.411 36,15.858 36,14 C36,11.794 34.206,10 32,10 C29.794,10 28,11.794 28,14 C28,15.858 29.279,17.411 31,17.858 L31,21 L30.095,21 C27.837,21 26,22.826 26,25.07 L26,28 L23.581,28 C22.709,28 22,28.694 22,29.548 L22,41.452 C22,42.306 22.709,43 23.581,43 L31,43 L31,46.142 C29.279,46.589 28,48.142 28,50 C28,52.206 29.794,54 32,54 C34.206,54 36,52.206 36,50 C36,48.142 34.721,46.589 33,46.142 L33,43 L41,43 C41.553,43 42,42.552 42,42 L42,29.548 C42,28.694 41.291,28 40.419,28 L40.419,28 Z",
    id: "Fill-1",
    fill: "#FFFFFF"
  })));
}
const ForwardRef = React.forwardRef(AnalyticsArchAwsCleanRooms);
module.exports = ForwardRef;