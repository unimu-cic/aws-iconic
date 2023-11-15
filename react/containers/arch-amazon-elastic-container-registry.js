const React = require("react");
function ContainersArchAmazonElasticContainerRegistry({
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
  }, "Icon-Architecture/48/Arch_Amazon-Elastic-Container-Registry_48") : title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("g", {
    id: "Icon-Architecture/48/Arch_Amazon-Elastic-Container-Registry_48",
    stroke: "none",
    strokeWidth: 1,
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("g", {
    id: "Icon-Architecture-BG/48/Compute",
    fill: "#ED7100"
  }, /*#__PURE__*/React.createElement("rect", {
    id: "Rectangle",
    x: 0,
    y: 0,
    width: 64,
    height: 64
  })), /*#__PURE__*/React.createElement("path", {
    d: "M30.726,29.9221953 C30.279,30.1827125 30,30.6666734 30,31.1847019 L30,51.5341041 L15,42.8578781 L15,23.0114745 L32.172,13.0777519 L47.088,20.4574036 L30.726,29.9221953 Z M49.704,20.42033 C49.704,19.9023015 49.426,19.4203446 48.921,19.1317717 L32.879,11.1960158 C32.433,10.9354986 31.876,10.9344966 31.428,11.1940118 L13.729,21.4333413 C13.28,21.6928565 13,22.1768174 13,22.6968499 L13,43.1725028 C13,43.6905313 13.279,44.1744922 13.728,44.4350094 L29.816,53.7414867 C30.04,53.8717454 30.292,53.9368747 30.545,53.9368747 C30.796,53.9368747 31.047,53.8727473 31.272,53.7424887 C31.721,53.4829735 32,52.9990126 32,52.4789801 L32,31.4993265 L48.978,21.6778267 C49.426,21.4193134 49.704,20.9373565 49.704,20.42033 L49.704,20.42033 Z M50,42.9410432 L37.004,51.5331022 L37.004,44.4099597 L43.603,39.4160446 C43.853,39.2266686 44,38.9300798 44,38.6164571 L44,30.4803034 L50,27.0064062 L50,42.9410432 Z M51.273,24.7990236 C50.825,24.5385063 50.267,24.5375044 49.817,24.7990236 L42.879,28.812993 C42.639,28.9422497 42,29.287936 42,30.0304101 L42,38.1174664 L35.663,42.9129875 C35.255,43.1805187 35.004,43.6414338 35.004,44.1344126 L35.004,52.5461134 C35.004,53.0661459 35.284,53.5501068 35.733,53.809622 C35.951,53.9348707 36.195,54 36.445,54 C36.709,54 36.982,53.9278568 37.239,53.7775584 L51.275,44.4971327 C51.722,44.2376175 52,43.7536566 52,43.2356281 L52,26.0625322 C52,25.5424997 51.721,25.0585388 51.273,24.7990236 L51.273,24.7990236 Z",
    id: "Amazon-Elastic-Container-Registry_Icon_48_Squid",
    fill: "#FFFFFF"
  })));
}
const ForwardRef = React.forwardRef(ContainersArchAmazonElasticContainerRegistry);
ForwardRef.aliasName = "Amazon Elastic Container Registry";
module.exports = ForwardRef;