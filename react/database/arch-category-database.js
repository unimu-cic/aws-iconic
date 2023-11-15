const React = require("react");
function DatabaseArchCategoryDatabase({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    width: "74px",
    height: "74px",
    viewBox: "0 0 74 74",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title === undefined ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, "Icon-Architecture-Category/48/Database_48") : title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("g", {
    id: "Icon-Architecture-Category/48/Database_48",
    stroke: "none",
    strokeWidth: 1,
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("rect", {
    id: "Rectangle",
    fill: "#C925D1",
    x: 5,
    y: 5,
    width: 64,
    height: 64
  }), /*#__PURE__*/React.createElement("rect", {
    id: "#879196-Border-Copy-9",
    stroke: "#879196",
    strokeWidth: 2,
    x: 1,
    y: 1,
    width: 72,
    height: 72
  }), /*#__PURE__*/React.createElement("g", {
    id: "Icon-Category/48/Database_48",
    transform: "translate(22.000000, 15.000000)",
    fill: "#FFFFFF"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M15,21.764 C7.56,21.764 2,19.419 2,17.323 L2,9.777 C4.768,11.811 9.991,12.882 15,12.882 C20.009,12.882 25.232,11.811 28,9.777 L28,17.323 C28,19.419 22.44,21.764 15,21.764 M15,32.455 C7.56,32.455 2,30.11 2,28.014 L2,20.659 C4.768,22.693 9.991,23.764 15,23.764 C20.009,23.764 25.232,22.693 28,20.659 L28,28.014 C28,30.11 22.44,32.455 15,32.455 M15,42 C7.56,42 2,39.656 2,37.559 L2,31.35 C4.768,33.384 9.991,34.455 15,34.455 C20.009,34.455 25.232,33.384 28,31.35 L28,37.559 C28,39.656 22.44,42 15,42 M15,2 C22.44,2 28,4.345 28,6.441 C28,8.537 22.44,10.882 15,10.882 C7.56,10.882 2,8.537 2,6.441 C2,4.345 7.56,2 15,2 M15,0 C7.729,0 0,2.258 0,6.441 L0,37.559 C0,41.743 7.729,44 15,44 C22.271,44 30,41.743 30,37.559 L30,6.441 C30,2.258 22.271,0 15,0",
    id: "Database_Category-Icon_48_Squid--"
  }))));
}
const ForwardRef = React.forwardRef(DatabaseArchCategoryDatabase);
ForwardRef.aliasName = "Category Database";
module.exports = ForwardRef;