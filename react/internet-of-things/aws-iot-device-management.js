const React = require("react");
function InternetOfThingsAwsIotDeviceManagement({
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
  }, "Icon-Architecture/48/Arch_AWS-IoT-Device-Management_48") : title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("g", {
    id: "Icon-Architecture/48/Arch_AWS-IoT-Device-Management_48",
    stroke: "none",
    strokeWidth: 1,
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("g", {
    id: "Icon-Architecture-BG/48/Internet-of-Things",
    fill: "#7AA116"
  }, /*#__PURE__*/React.createElement("rect", {
    id: "Rectangle",
    x: 0,
    y: 0,
    width: 64,
    height: 64
  })), /*#__PURE__*/React.createElement("path", {
    d: "M50,42.3962128 L32.013,51.8630392 L15,42.4112126 L15,21.5885945 L32.013,12.1367679 L50,21.6035942 L50,42.3962128 Z M51.466,20.1156215 L32.466,10.1158049 C32.168,9.95780784 31.81,9.96180776 31.515,10.1258048 L13.515,20.1256213 C13.197,20.3026181 13,20.636612 13,21.0006053 L13,43.0002018 C13,43.3631951 13.197,43.697189 13.515,43.8741857 L31.515,53.8740023 C31.665,53.9580008 31.833,54 32,54 C32.16,54 32.32,53.9610007 32.466,53.8840021 L51.466,43.8841855 C51.794,43.7111887 52,43.371195 52,43.0002018 L52,21.0006053 C52,20.6286121 51.794,20.2886183 51.466,20.1156215 L51.466,20.1156215 Z M32.504,19.000642 C35.932,19.000642 38.942,21.5855946 39.771,24.9305332 C38.384,24.504541 36.904,24.3925431 35.443,24.6215389 C34.82,23.6495567 33.737,23.0005686 32.5,23.0005686 C31.28,23.0005686 30.207,23.6295571 29.58,24.5795396 C28.097,24.3855432 26.601,24.5405404 25.21,25.0135317 C26.013,21.6235939 29.047,19.000642 32.504,19.000642 L32.504,19.000642 Z M44.564,34.1153647 C44.564,38.3892863 41.101,42.0002201 37,42.0002201 C36.256,42.0002201 35.434,41.7932239 34.527,41.408231 C35.898,40.1772535 37.137,38.4232857 37.781,36.7493164 C39.077,36.2363258 40,34.9763489 40,33.500376 C40,33.229381 39.963,32.9693858 39.904,32.7173904 C40.934,31.4424138 41.604,29.9324415 41.867,28.320471 C43.55,29.7564447 44.564,31.8684059 44.564,34.1153647 L44.564,34.1153647 Z M21,34.1153647 C21,31.8604061 21.778,29.9144418 23.166,28.5484668 C23.454,30.068439 24.117,31.4924128 25.098,32.7093905 C25.039,32.9643858 25,33.227381 25,33.500376 C25,34.9793489 25.926,36.2403258 27.226,36.7513164 C27.865,38.3352873 29.22,40.1282544 30.699,41.4032311 C29.836,41.7452248 28.872,42.0002201 28,42.0002201 C24.01,42.0002201 21,38.6102823 21,34.1153647 L21,34.1153647 Z M32.5,28.0004769 C31.673,28.0004769 31,27.3274892 31,26.5005044 C31,25.6725196 31.673,25.0005319 32.5,25.0005319 C33.327,25.0005319 34,25.6725196 34,26.5005044 C34,27.3274892 33.327,28.0004769 32.5,28.0004769 L32.5,28.0004769 Z M36.5,35.0003485 C35.673,35.0003485 35,34.3273608 35,33.500376 C35,32.6723912 35.673,32.0004035 36.5,32.0004035 C37.327,32.0004035 38,32.6723912 38,33.500376 C38,34.3273608 37.327,35.0003485 36.5,35.0003485 L36.5,35.0003485 Z M28.5,32.0004035 C29.327,32.0004035 30,32.6723912 30,33.500376 C30,34.3273608 29.327,35.0003485 28.5,35.0003485 C27.673,35.0003485 27,34.3273608 27,33.500376 C27,32.6723912 27.673,32.0004035 28.5,32.0004035 L28.5,32.0004035 Z M30.838,29.5604483 C31.334,29.8324433 31.896,30.0004402 32.5,30.0004402 C33.178,30.0004402 33.807,29.7974439 34.344,29.4614501 C34.568,29.7534447 34.779,30.0554392 34.959,30.3734334 C33.804,30.9454229 33,32.1254012 33,33.500376 C33,33.8123703 33.055,34.1083649 33.131,34.3963596 C32.713,34.4233591 32.291,34.4233591 31.873,34.3813599 C31.948,34.098365 32,33.8063704 32,33.500376 C32,32.2083997 31.289,31.0914202 30.246,30.4854313 C30.421,30.1644372 30.617,29.8554429 30.838,29.5604483 L30.838,29.5604483 Z M32.627,40.3812498 C31.445,39.5392652 30.221,38.1452908 29.482,36.8423147 C29.928,36.7103171 30.332,36.497321 30.684,36.2123263 C31.314,36.3483238 31.967,36.4253224 32.634,36.4253224 C33.227,36.4253224 33.803,36.3563236 34.361,36.2503256 C34.711,36.5223206 35.109,36.7263168 35.546,36.8513145 C34.843,38.2082897 33.727,39.5722646 32.627,40.3812498 L32.627,40.3812498 Z M39.983,27.1314928 C39.922,28.4764682 39.508,29.7604446 38.783,30.8684243 C38.295,30.4444321 37.694,30.1554374 37.026,30.0534392 C36.674,29.2984531 36.221,28.5894661 35.68,27.942478 C35.874,27.5174858 35.986,27.0494943 35.994,26.5555034 C37.365,26.3845065 38.742,26.5915027 39.983,27.1314928 L39.983,27.1314928 Z M29.004,26.5335038 C29.009,27.1144931 29.168,27.6544832 29.425,28.1344744 C28.959,28.7214637 28.564,29.355452 28.249,30.0254397 C27.476,30.0814387 26.775,30.3854331 26.223,30.8644244 C25.516,29.7854442 25.103,28.5434669 25.021,27.2484907 C26.249,26.6585015 27.624,26.4105061 29.004,26.5335038 L29.004,26.5335038 Z M23.035,26.1015117 C20.506,27.7994806 19,30.7404266 19,34.1153647 C19,39.6582631 22.953,44.0001834 28,44.0001834 C29.868,44.0001834 31.695,43.2001981 32.641,42.712207 C34.235,43.5621915 35.672,44.0001834 37,44.0001834 C42.185,44.0001834 46.564,39.4732665 46.564,34.1153647 C46.564,30.772426 44.799,27.6604831 41.954,25.9165151 C41.52,20.9406064 37.42,17.0006787 32.504,17.0006787 C27.528,17.0006787 23.391,21.0316047 23.035,26.1015117 L23.035,26.1015117 Z",
    id: "AWS-IoT-Device-Management_Icon_48_Squid",
    fill: "#FFFFFF"
  })));
}
const ForwardRef = React.forwardRef(InternetOfThingsAwsIotDeviceManagement);
module.exports = ForwardRef;