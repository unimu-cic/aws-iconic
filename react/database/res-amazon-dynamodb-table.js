const React = require("react");
function DatabaseResAmazonDynamodbTable({
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
  }, "Icon-Resource/Database/Res_Amazon-DynamoDB_Table_48") : title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("g", {
    id: "Icon-Resource/Database/Res_Amazon-DynamoDB_Table_48",
    stroke: "none",
    strokeWidth: 1,
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M13.355,11.862 L45.928,11.862 L45.928,2 L13.355,2 L13.355,11.862 Z M15.355,9.862 L43.927,9.862 L43.927,4.001 L15.355,4.001 L15.355,9.862 Z M2,11.862 L11.861,11.862 L11.861,2 L2,2 L2,11.862 Z M4,9.862 L9.862,9.862 L9.862,4.001 L4,4.001 L4,9.862 Z M13.355,23.217 L45.928,23.217 L45.928,13.356 L13.355,13.356 L13.355,23.217 Z M15.355,21.217 L43.927,21.217 L43.927,15.356 L15.355,15.356 L15.355,21.217 Z M2,23.217 L11.861,23.217 L11.861,13.356 L2,13.356 L2,23.217 Z M4,21.217 L9.862,21.217 L9.862,15.356 L4,15.356 L4,21.217 Z M13.355,34.572 L45.928,34.572 L45.928,24.711 L13.355,24.711 L13.355,34.572 Z M15.355,32.572 L43.927,32.572 L43.927,26.71 L15.355,26.71 L15.355,32.572 Z M2,34.572 L11.861,34.572 L11.861,24.711 L2,24.711 L2,34.572 Z M4,32.572 L9.862,32.572 L9.862,26.71 L4,26.71 L4,32.572 Z M13.355,45.927 L45.928,45.927 L45.928,36.066 L13.355,36.066 L13.355,45.927 Z M15.355,43.928 L43.927,43.928 L43.927,38.066 L15.355,38.066 L15.355,43.928 Z M2,45.927 L11.861,45.927 L11.861,36.066 L2,36.066 L2,45.927 Z M4,43.928 L9.862,43.928 L9.862,38.066 L4,38.066 L4,43.928 Z",
    id: "Amazon-DATABASE_Amazon-DynamoDB_Table_Resource-Icon_light-bg",
    fill: "#C925D1"
  })));
}
const ForwardRef = React.forwardRef(DatabaseResAmazonDynamodbTable);
module.exports = ForwardRef;