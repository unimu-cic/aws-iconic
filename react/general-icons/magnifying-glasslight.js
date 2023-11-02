const React = require("react");
function GeneralIconsMagnifyingGlasslight({
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
  }, "Icon-Resource/General-Resource/Res_Magnifying-Glass_48_Light") : title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("g", {
    id: "Icon-Resource/General-Resource/Res_Magnifying-Glass_48",
    stroke: "none",
    strokeWidth: 1,
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M43.2676,43.268 C42.3246,44.212 40.6756,44.212 39.7326,43.268 L29.9606,33.496 C31.3016,32.491 32.4916,31.302 33.4966,29.96 L43.2676,39.732 C44.2426,40.707 44.2426,42.293 43.2676,43.268 M3.9996,19.5 C3.9996,10.953 10.9536,4 19.4996,4 C28.0466,4 34.9996,10.953 34.9996,19.5 C34.9996,28.047 28.0466,35 19.4996,35 C10.9536,35 3.9996,28.047 3.9996,19.5 M44.6816,38.318 L34.6256,28.261 C36.1256,25.681 36.9996,22.694 36.9996,19.5 C36.9996,9.851 29.1496,2 19.4996,2 C9.8506,2 1.9996,9.851 1.9996,19.5 C1.9996,29.149 9.8506,37 19.4996,37 C22.6936,37 25.6816,36.126 28.2616,34.625 L38.3186,44.682 C39.1676,45.532 40.2976,46 41.4996,46 C42.7026,46 43.8316,45.532 44.6816,44.682 C46.4366,42.928 46.4366,40.072 44.6816,38.318 M19.4996,30.5 C13.4346,30.5 8.4996,25.565 8.4996,19.5 C8.4996,13.435 13.4346,8.5 19.4996,8.5 C25.5656,8.5 30.4996,13.435 30.4996,19.5 C30.4996,25.565 25.5656,30.5 19.4996,30.5 M19.4996,6.5 C12.3316,6.5 6.4996,12.331 6.4996,19.5 C6.4996,26.668 12.3316,32.5 19.4996,32.5 C26.6676,32.5 32.4996,26.668 32.4996,19.5 C32.4996,12.331 26.6676,6.5 19.4996,6.5",
    id: "Fill-1",
    fill: "#232F3D"
  })));
}
const ForwardRef = React.forwardRef(GeneralIconsMagnifyingGlasslight);
module.exports = ForwardRef;