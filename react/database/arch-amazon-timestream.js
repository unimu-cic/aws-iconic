const React = require("react");
function DatabaseArchAmazonTimestream({
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
  }, "Icon-Architecture/48/Arch_Amazon-Timestream_48") : title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("g", {
    id: "Icon-Architecture/48/Arch_Amazon-Timestream_48",
    stroke: "none",
    strokeWidth: 1,
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("g", {
    id: "Icon-Architecture-BG/48/Database",
    fill: "#C925D1"
  }, /*#__PURE__*/React.createElement("rect", {
    id: "Rectangle",
    x: 0,
    y: 0,
    width: 64,
    height: 64
  })), /*#__PURE__*/React.createElement("path", {
    d: "M34.7689146,44 L47.6323641,44 L46.9327904,43.293 L48.2122089,42 L44.2542244,42 L43.1796316,40.914 L40.9770132,43.14 L34.7689146,37.298 L34.7689146,44 Z M14.9789922,17.5 C14.9789922,19.624 20.2688385,22 27.3476937,22 C34.4265489,22 39.7163952,19.624 39.7163952,17.5 C39.7163952,15.376 34.4265489,13 27.3476937,13 C20.2688385,13 14.9789922,15.376 14.9789922,17.5 L14.9789922,17.5 Z M49.0315116,44 L51.5903486,44 L51.5903486,46 L41.6953874,46 L41.6953874,47 C41.6953874,50.729 34.9915512,54 27.3476937,54 C19.7038362,54 13,50.729 13,47 L13,17.5 C13,13.794 19.1675293,11 27.3476937,11 C35.5278581,11 41.6953874,13.794 41.6953874,17.5 L41.6953874,27 L39.7163952,27 L39.7163952,20.877 C37.2673923,22.775 32.7543005,24 27.3476937,24 C21.9410869,24 17.4279951,22.775 14.9789922,20.877 L14.9789922,28.107 C15.7112194,30.006 20.6824479,32 27.1270361,32 L30.8109301,32 L30.8109301,34 L27.1270361,34 C21.9658243,34 17.4705435,32.828 14.9789922,31.014 L14.9789922,38.33 C15.5766479,40.148 20.2223322,42 27.1270361,42 L30.8109301,42 L30.8109301,44 L27.1270361,44 C22.5100472,44 17.6476633,43.134 14.9789922,41.264 L14.9789922,47 C14.9789922,49.013 20.1728574,52 27.3476937,52 C34.5225301,52 39.7163952,49.013 39.7163952,47 L39.7163952,46 L33.7794185,46 C33.2322271,46 32.7899224,45.552 32.7899224,45 L32.7899224,27 L34.7689146,27 L34.7689146,28 L39.8786726,28 L40.9532653,29.086 L42.0278581,28 L44.4422286,28 L46.1966053,29.164 L45.1101385,30.836 L43.8514995,30 L42.8471609,30 L40.9532653,31.914 L39.0593698,30 L34.7689146,30 L34.7689146,34.564 L40.9295174,40.36 L43.1796316,38.086 L45.0735272,40 L48.2122089,40 L46.9327904,38.707 L48.3319379,37.293 L52,41 L49.0315116,44 Z M48.4496879,28 L46.642868,28 L46.642868,26 L51.5903486,26 L51.5903486,31 L49.6113564,31 L49.6113564,29.703 L47.3810321,32.333 L51.3004262,36.293 L49.9012787,37.707 L46.0897397,33.855 L45.119044,35 L40.7058913,35 L39.518496,36.6 L37.9353022,35.4 L39.7163952,33 L44.2087076,33 L48.4496879,28 Z",
    id: "Amazon-Timestream_Icon_48_Squid",
    fill: "#FFFFFF"
  })));
}
const ForwardRef = React.forwardRef(DatabaseArchAmazonTimestream);
module.exports = ForwardRef;