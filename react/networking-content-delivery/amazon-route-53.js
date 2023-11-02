const React = require("react");
function NetworkingContentDeliveryAmazonRoute53({
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
  }, "Icon-Architecture/48/Arch_Amazon-Route-53_48") : title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("g", {
    id: "Icon-Architecture/48/Arch_Amazon-Route-53_48",
    stroke: "none",
    strokeWidth: 1,
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("g", {
    id: "Icon-Architecture-BG/48/Networking-Content-Delivery",
    fill: "#8C4FFF"
  }, /*#__PURE__*/React.createElement("rect", {
    id: "Rectangle",
    x: 0,
    y: 0,
    width: 64,
    height: 64
  })), /*#__PURE__*/React.createElement("path", {
    d: "M38.761,32.5265073 C39.336,33.0577669 39.623,33.7701149 39.623,34.6635515 C39.623,35.6370272 39.274,36.4134066 38.574,36.9936901 C37.875,37.5749741 36.935,37.8651159 35.754,37.8651159 C34.822,37.8651159 33.899,37.6660186 32.986,37.269825 L32.986,36.0782428 C34.067,36.4354173 34.99,36.6135043 35.754,36.6135043 C36.508,36.6135043 37.088,36.4454222 37.495,36.1082574 C37.903,35.7710927 38.106,35.2888571 38.106,34.6635515 C38.106,33.4629649 37.347,32.861671 35.828,32.861671 C35.352,32.861671 34.881,32.8866833 34.414,32.9357072 L34.414,31.9532271 L37.54,28.5435611 L33.134,28.5435611 L33.134,27.3219641 L39.193,27.3219641 L39.193,28.4985391 L36.126,31.7451255 C36.176,31.7351206 36.225,31.7301181 36.275,31.7301181 L36.424,31.7301181 C37.407,31.7301181 38.185,31.9962482 38.761,32.5265073 M30.114,32.2663802 C30.718,32.8326569 31.021,33.6110372 31.021,34.6035222 C31.021,35.5769979 30.668,36.3633821 29.964,36.9646759 C29.259,37.5649692 28.331,37.8651159 27.181,37.8651159 C26.169,37.8651159 25.221,37.6660186 24.338,37.269825 L24.338,36.0782428 C25.44,36.4354173 26.382,36.6135043 27.166,36.6135043 C27.92,36.6135043 28.498,36.4434212 28.9,36.101254 C29.302,35.7580863 29.502,35.2648453 29.502,34.6185295 C29.502,33.9141853 29.315,33.4029355 28.937,33.0847801 C28.56,32.7676251 27.945,32.6085474 27.091,32.6085474 C26.476,32.6085474 25.707,32.6585718 24.784,32.7576202 L24.784,31.7751401 L25.068,27.3219641 L30.5,27.3219641 L30.5,28.5435611 L26.318,28.5435611 L26.123,31.5670384 C26.669,31.4669896 27.16,31.4169651 27.597,31.4169651 C28.669,31.4169651 29.508,31.7001035 30.114,32.2663802 M41.261,42.9636072 C37.516,43.6359357 34.233,45.1456735 32,46.3952841 C29.768,45.1456735 26.485,43.6359357 22.74,42.9636072 C21.708,42.7785168 16.566,41.7079937 16.566,38.8245847 C16.566,37.4629194 17.063,36.5424696 18.017,34.8996669 C19.133,32.9737258 20.663,30.3364371 20.663,26.6736474 C20.663,24.1103949 20.004,21.6511932 18.703,19.3530703 C18.792,19.244017 18.882,19.1329627 18.972,19.0229089 C20.927,19.9723729 22.959,20.4526075 25.025,20.4526075 C27.571,20.4526075 29.914,19.7962868 32,18.5016542 C34.086,19.7962868 36.43,20.4526075 38.976,20.4526075 C41.041,20.4526075 43.073,19.9723729 45.029,19.0229089 C45.118,19.1329627 45.208,19.244017 45.297,19.3530703 C43.996,21.6511932 43.337,24.1103949 43.337,26.6736474 C43.337,30.3364371 44.867,32.9737258 45.984,34.8996669 C46.938,36.5424696 47.435,37.4629194 47.435,38.8245847 C47.435,41.7079937 42.292,42.7785168 41.261,42.9636072 M45.337,26.6736474 C45.337,24.2594677 46.019,21.9443364 47.362,19.7922849 C47.589,19.4291074 47.559,18.9608786 47.288,18.6297168 C46.893,18.1454802 46.479,17.6362313 46.07,17.129984 C45.766,16.7527997 45.234,16.6497493 44.809,16.8838637 C42.926,17.9243721 40.963,18.4516298 38.976,18.4516298 C36.576,18.4516298 34.482,17.8083154 32.57,16.4826677 C32.228,16.2445513 31.773,16.2445513 31.431,16.4826677 C29.519,17.8083154 27.424,18.4516298 25.025,18.4516298 C23.037,18.4516298 21.074,17.9243721 19.192,16.8838637 C18.766,16.6497493 18.236,16.7527997 17.931,17.129984 C17.522,17.6362313 17.108,18.1454802 16.712,18.6297168 C16.442,18.9608786 16.411,19.4291074 16.639,19.7922849 C17.982,21.9443364 18.663,24.2594677 18.663,26.6736474 C18.663,29.7981741 17.401,31.9742374 16.286,33.8951761 C15.22,35.7340746 14.566,36.9556715 14.566,38.8245847 C14.566,43.1877167 20.551,44.6034085 22.386,44.9325693 C26.136,45.6068988 29.41,47.1976761 31.497,48.4122696 C31.653,48.5023136 31.826,48.5483361 32,48.5483361 C32.174,48.5483361 32.348,48.5023136 32.503,48.4122696 C34.59,47.1976761 37.865,45.6068988 41.615,44.9325693 C43.449,44.6034085 49.435,43.1877167 49.435,38.8245847 C49.435,36.9556715 48.781,35.7340746 47.714,33.8951761 C46.6,31.9742374 45.337,29.7981741 45.337,26.6736474 M42.068,47.4588037 C37.402,48.2972134 33.468,50.7554146 32,51.7679093 C30.532,50.7554146 26.599,48.2972134 21.933,47.4588037 C19.603,47.0395989 12,45.1786896 12,38.8245847 C12,36.1702878 13.004,34.4384415 14.068,32.6055459 C15.066,30.8857055 16.098,29.1068363 16.098,26.6736474 C16.098,23.0068556 14.071,20.3715679 12.941,19.1869891 C14.095,17.7823027 16.636,14.6807872 18.029,12.8969155 C20.151,14.831861 22.6,15.8853758 25.025,15.8853758 C27.726,15.8853758 29.967,14.8198552 32,12.5487454 C34.033,14.8198552 36.275,15.8853758 38.976,15.8853758 C41.401,15.8853758 43.85,14.831861 45.972,12.8969155 C47.365,14.6807872 49.906,17.7823027 51.06,19.1869891 C49.93,20.3715679 47.903,23.0068556 47.903,26.6736474 C47.903,29.1068363 48.935,30.8857055 49.933,32.6055459 C50.996,34.4384415 52,36.1702878 52,38.8245847 C52,45.1786896 44.398,47.0395989 42.068,47.4588037 M51.662,31.6010551 C50.718,29.9742601 49.903,28.5675728 49.903,26.6736474 C49.903,22.6716918 53.024,20.0714213 53.053,20.0474095 C53.26,19.8793274 53.392,19.6362086 53.419,19.3700786 C53.446,19.1039485 53.365,18.838819 53.196,18.6327183 C53.144,18.5706879 48.049,12.3936696 46.885,10.7978899 C46.709,10.5567721 46.436,10.4066987 46.138,10.3886899 C45.845,10.3696806 45.55,10.4867378 45.347,10.7038439 C43.43,12.7548461 41.167,13.8843981 38.976,13.8843981 C36.56,13.8843981 34.654,12.8008686 32.794,10.3706811 C32.415,9.87643962 31.585,9.87643962 31.206,10.3706811 C29.347,12.8008686 27.441,13.8843981 25.025,13.8843981 C22.833,13.8843981 20.571,12.7548461 18.654,10.7038439 C18.45,10.4857373 18.154,10.3646782 17.863,10.3886899 C17.565,10.4066987 17.291,10.5567721 17.115,10.7978899 C15.951,12.3936696 10.857,18.5706879 10.805,18.6327183 C10.635,18.838819 10.555,19.1039485 10.581,19.3700786 C10.609,19.6362086 10.74,19.8793274 10.948,20.0474095 C10.98,20.0734222 14.098,22.6416772 14.098,26.6736474 C14.098,28.5675728 13.282,29.9742601 12.338,31.6010551 C11.242,33.4899781 10,35.6310243 10,38.8245847 C10,44.1611924 14.328,48.1251293 21.579,49.4287663 C26.895,50.3832327 31.347,53.7598827 31.392,53.7938993 C31.572,53.9319668 31.785,54 32,54 C32.215,54 32.43,53.9309663 32.61,53.7928988 C32.654,53.7588822 37.088,50.3872347 42.421,49.4287663 C49.672,48.1251293 54,44.1611924 54,38.8245847 C54,35.6310243 52.758,33.4899781 51.662,31.6010551",
    id: "Amazon-Route-53-Icon_48_Squid",
    fill: "#FFFFFF"
  })));
}
const ForwardRef = React.forwardRef(NetworkingContentDeliveryAmazonRoute53);
module.exports = ForwardRef;