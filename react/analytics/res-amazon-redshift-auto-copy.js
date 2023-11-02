const React = require("react");
function AnalyticsResAmazonRedshiftAutoCopy({
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
  }, "Icon-Resource/Analytics/Res_Amazon-Redshift_Auto-copy_48") : title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("g", {
    id: "Icon-Resource/Analytics/Res_Amazon-Redshift_Auto-copy_48",
    stroke: "none",
    strokeWidth: 1,
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12.6875,43.9719 C7.3635,43.9719 6.8025,42.9969 6.7975,42.9799 L4.4695,29.5589 C6.9195,30.4829 10.5175,30.5889 12.0005,30.5889 C13.2375,30.5889 17.7915,30.5059 20.6375,29.4009 L19.6145,36.5579 C17.5965,35.8909 15.2855,34.9309 13.9845,34.3499 C13.9085,33.5939 13.2755,32.9999 12.5005,32.9999 C11.6725,32.9999 11.0005,33.6729 11.0005,34.4999 C11.0005,35.3269 11.6725,35.9999 12.5005,35.9999 C12.5795,35.9999 12.6555,35.9889 12.7315,35.9769 C14.0265,36.5759 16.8895,37.7889 19.3265,38.5679 L18.6965,42.9779 C18.6915,42.9879 18.0605,43.9719 12.6875,43.9719 M12.0005,25.3499 C17.1815,25.3499 20.4145,26.3489 20.9585,26.9699 C20.4145,27.5899 17.1815,28.5889 12.0005,28.5889 C6.2805,28.5889 4.1055,27.3799 3.9995,26.9759 C4.1055,26.5589 6.2805,25.3499 12.0005,25.3499 M23.0785,39.3749 C23.7725,39.3749 24.1305,39.1809 24.3845,38.8829 C24.6535,38.5679 24.7575,38.1699 24.6785,37.7629 C24.5255,36.9709 23.7385,36.2849 21.8185,35.2679 L22.9905,27.0829 L22.9805,27.0819 C22.9835,27.0429 23.0005,27.0099 23.0005,26.9699 C23.0005,23.5239 13.8365,23.3499 12.0005,23.3499 C9.6545,23.3499 1.9995,23.6109 1.9995,26.9699 C1.9995,27.1119 2.0325,27.2399 2.0585,27.3709 L4.8255,43.3099 C5.1175,45.1259 7.6155,45.9719 12.6875,45.9719 C17.8395,45.9719 20.3745,45.1259 20.6695,43.2929 L21.2685,39.1119 C22.0505,39.2949 22.6335,39.3749 23.0785,39.3749 M41.4115,10.5629 C40.7835,9.6219 39.7135,8.9999 38.4995,8.9999 C36.7705,8.9999 35.3395,10.2639 35.0595,11.9149 C34.0805,11.9939 33.0635,12.0439 31.9995,12.0439 C24.2235,12.0439 18.9995,9.9639 18.9995,8.0219 C18.9995,6.0799 24.1705,3.9999 31.8685,3.9999 C39.4615,3.9999 43.9995,6.0449 43.9995,8.0219 C43.9995,9.2309 42.5115,10.0909 41.4115,10.5629 M38.4995,13.9999 C37.6725,13.9999 36.9995,13.3269 36.9995,12.4999 C36.9995,11.6729 37.6725,10.9999 38.4995,10.9999 C39.3275,10.9999 39.9995,11.6729 39.9995,12.4999 C39.9995,13.3269 39.3275,13.9999 38.4995,13.9999 M34.4995,23.9999 C33.6725,23.9999 32.9995,23.3269 32.9995,22.4999 C32.9995,21.6729 33.6725,20.9999 34.4995,20.9999 C35.3275,20.9999 35.9995,21.6729 35.9995,22.4999 C35.9995,23.3269 35.3275,23.9999 34.4995,23.9999 M24.5005,21.9999 C23.6725,21.9999 23.0005,21.3269 23.0005,20.4999 C23.0005,19.6729 23.6725,18.9999 24.5005,18.9999 C25.3275,18.9999 26.0005,19.6729 26.0005,20.4999 C26.0005,21.3269 25.3275,21.9999 24.5005,21.9999 M31.8685,1.9999 C24.4675,1.9999 16.9995,3.8619 16.9995,8.0219 L16.9995,21.9999 L18.9995,21.9999 L18.9995,11.2329 C21.7755,13.1469 27.0175,14.0439 31.9995,14.0439 C33.1455,14.0439 34.2435,13.9889 35.2985,13.9019 C35.5795,14.5409 36.0465,15.0759 36.6305,15.4479 L35.2075,19.0719 C34.9795,19.0249 34.7425,18.9999 34.4995,18.9999 C32.9695,18.9999 31.6795,19.9939 31.2055,21.3649 L27.9865,20.6299 C27.9885,20.5859 28.0005,20.5449 28.0005,20.4999 C28.0005,18.5699 26.4295,16.9999 24.5005,16.9999 C22.5705,16.9999 21.0005,18.5699 21.0005,20.4999 C21.0005,22.4299 22.5705,23.9999 24.5005,23.9999 C25.6695,23.9999 26.7015,23.4179 27.3375,22.5329 L31.1325,23.3999 C31.5325,24.8919 32.8835,25.9999 34.4995,25.9999 C36.4295,25.9999 37.9995,24.4299 37.9995,22.4999 C37.9995,21.5379 37.6095,20.6659 36.9785,20.0329 L38.5635,15.9939 C40.4635,15.9589 41.9995,14.4079 41.9995,12.4999 C41.9995,12.4939 41.9985,12.4889 41.9985,12.4829 C42.8145,12.1499 43.4735,11.7879 43.9995,11.4119 L43.9995,39.9779 C43.9995,41.9269 39.7975,43.9979 32.0095,43.9999 C28.7625,43.9989 25.6695,43.6199 23.2985,42.9319 L22.7425,44.8529 C25.3225,45.6019 28.5235,45.9979 31.9995,45.9999 L31.9995,45.9999 C32.0035,45.9999 32.0065,45.9999 32.0095,45.9999 C32.0135,45.9999 32.0165,45.9999 32.0205,45.9999 L32.0205,45.9999 C40.5135,45.9959 46.0005,43.6329 46.0005,39.9779 L46.0005,8.0219 C46.0005,4.3639 40.4535,1.9999 31.8685,1.9999",
    id: "Fill-1",
    fill: "#8C4FFF"
  })));
}
const ForwardRef = React.forwardRef(AnalyticsResAmazonRedshiftAutoCopy);
module.exports = ForwardRef;