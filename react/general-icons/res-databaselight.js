const React = require("react");
function GeneralIconsResDatabaselight({
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
  }, "Icon-Resource/General-Resource/Res_Database_48_Light") : title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("g", {
    id: "Icon-Resource/General-Resource/Res_Database_48",
    stroke: "none",
    strokeWidth: 1,
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M31.755,43.307 C30.506,43.519 29.176,43.677 27.801,43.777 C27.244,43.817 26.678,43.847 26.105,43.869 C24.954,43.908 23.754,43.908 22.608,43.869 C22.033,43.847 21.467,43.817 20.91,43.777 C19.535,43.677 18.205,43.519 16.956,43.307 C12.049,42.475 9,40.73 9,38.754 L9,10.765 C11.997,12.661 17.74,13.841 24.356,13.841 C30.966,13.841 36.636,12.68 39.645,10.803 L39.645,38.754 C39.645,40.767 36.695,42.469 31.755,43.307 M24.356,4 C32.896,4 38.476,6.184 39.47,8.432 C37.802,10.098 32.46,11.841 24.356,11.841 C16.26,11.841 10.828,10.061 9.207,8.408 L9.171,8.443 C10.155,6.191 15.765,4 24.356,4 M24.356,2 C14.137,2 7,4.938 7,9.145 L7,38.754 C7,40.581 8.25,43.86 16.622,45.28 C17.933,45.501 19.327,45.667 20.766,45.771 C21.346,45.813 21.936,45.845 22.536,45.867 C23.134,45.888 23.741,45.899 24.356,45.899 C24.97,45.899 25.576,45.888 26.176,45.867 C26.776,45.845 27.365,45.813 27.945,45.771 C29.384,45.667 30.778,45.501 32.089,45.28 C40.403,43.869 41.645,40.586 41.645,38.754 L41.645,9.145 C41.645,4.938 34.535,2 24.356,2",
    id: "Fill-9",
    fill: "#232F3D"
  })));
}
const ForwardRef = React.forwardRef(GeneralIconsResDatabaselight);
ForwardRef.aliasName = "Databaselight";
module.exports = ForwardRef;