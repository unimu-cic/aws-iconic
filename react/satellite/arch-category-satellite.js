const React = require("react");
function SatelliteArchCategorySatellite({
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
  }, "Icon-Architecture-Category/48/Satellite_48") : title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("g", {
    id: "Icon-Architecture-Category/48/Satellite_48",
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
    id: "#879196-Border-Copy-22",
    stroke: "#879196",
    strokeWidth: 2,
    x: 1,
    y: 1,
    width: 72,
    height: 72
  }), /*#__PURE__*/React.createElement("g", {
    id: "Icon-Category/48/Satellite_48",
    transform: "translate(16.000000, 17.000000)",
    fill: "#FFFFFF"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M34.5450652,23.4018447 C32.2810652,24.7438447 29.5820652,26.0428447 26.5500652,27.2058447 C20.7740652,29.4228447 14.1410652,30.9428447 8.93906517,31.1068447 C11.4560652,34.8368447 15.7220652,37.2948447 20.5510652,37.2948447 C28.2340652,37.2948447 34.4860652,31.0718447 34.5450652,23.4018447 M5.61906517,28.9948447 C4.94606517,27.2378447 4.56106517,25.3408447 4.55406517,23.3518447 C3.00206517,24.6918447 2.07106517,25.9568447 2.00406517,26.8818447 C1.97606517,27.2668447 2.09906517,27.5688447 2.40206517,27.8618447 C2.98806517,28.4248447 4.10706517,28.8058447 5.61906517,28.9948447 M6.55106517,23.2948447 C6.55106517,25.3798447 7.02206517,27.3518447 7.84206517,29.1318447 C12.3480652,29.1648447 18.9330652,27.9868447 25.8330652,25.3388447 C29.3580652,23.9858447 32.1930652,22.5558447 34.3740652,21.1848447 C33.3520652,14.4648447 27.5520652,9.29484469 20.5510652,9.29484469 C12.8310652,9.29484469 6.55106517,15.5748447 6.55106517,23.2948447 M37.4770652,11.1528447 C37.4770652,10.6018447 37.0280652,10.1528447 36.4770652,10.1528447 C35.9250652,10.1528447 35.4770652,10.6018447 35.4770652,11.1528447 C35.4770652,11.7048447 35.9250652,12.1528447 36.4770652,12.1528447 C37.0280652,12.1528447 37.4770652,11.7048447 37.4770652,11.1528447 M40.7860652,13.1038447 C41.6770652,13.9678447 41.9960652,15.0128447 41.7580652,16.1708447 C41.3810652,18.0078447 39.4800652,20.1048447 36.4930652,22.1588447 C36.5200652,22.5358447 36.5510652,22.9108447 36.5510652,23.2948447 C36.5510652,32.1168447 29.3730652,39.2948447 20.5510652,39.2948447 C14.5600652,39.2948447 9.33406517,35.9798447 6.59306517,31.0918447 C4.11606517,30.9418447 2.14106517,30.3828447 1.01706517,29.3028447 C0.285065174,28.5998447 -0.0619348264,27.7118447 0.00906517363,26.7348447 C0.179065174,24.4288447 2.66906517,22.1538447 4.79406517,20.6158447 C6.07406517,13.0668447 12.6440652,7.29484469 20.5510652,7.29484469 C28.2250652,7.29484469 34.6490652,12.7268447 36.1920652,19.9458447 C38.3820652,18.3158447 39.5790652,16.8378447 39.7990652,15.7688447 C39.8990652,15.2858447 39.7870652,14.9198447 39.4400652,14.5808447 C39.0190652,14.2238447 38.4990652,13.9398447 37.9330652,13.7598447 C37.5000652,14.0028447 37.0080652,14.1528447 36.4770652,14.1528447 C34.8220652,14.1528447 33.4770652,12.8078447 33.4770652,11.1528447 C33.4770652,9.49884469 34.8220652,8.15284469 36.4770652,8.15284469 C38.1310652,8.15284469 39.4770652,9.49884469 39.4770652,11.1528447 C39.4770652,11.5038447 39.4040652,11.8358447 39.2940652,12.1498447 C39.8300652,12.3978447 40.3330652,12.7168447 40.7860652,13.1038447 M35.2950652,5.93584469 C36.2100652,5.62484469 37.1900652,5.69184469 38.0520652,6.11884469 C38.7590652,6.46784469 39.3400652,7.04884469 39.6890652,7.75484469 L41.4820652,6.86884469 C40.9400652,5.77184469 40.0360652,4.86784469 38.9390652,4.32584469 C37.5940652,3.66084469 36.0730652,3.56084469 34.6530652,4.04084469 C33.2340652,4.52184469 32.0870652,5.52584469 31.4230652,6.86884469 L33.2160652,7.75484469 C33.6430652,6.89084469 34.3820652,6.24484469 35.2950652,5.93584469 M43.8960652,4.61284469 L42.1050652,5.50384469 C41.4950652,4.27684469 40.4850652,3.26684469 39.2610652,2.65884469 C36.1420652,1.10884469 32.3480652,2.38784469 30.8000652,5.50284469 L29.0090652,4.61284469 C31.0470652,0.507844689 36.0450652,-1.17215531 40.1500652,0.867844689 C41.7630652,1.66884469 43.0930652,2.99884469 43.8960652,4.61284469",
    id: "Satellite_Category-Icon_48_Squid"
  }))));
}
const ForwardRef = React.forwardRef(SatelliteArchCategorySatellite);
module.exports = ForwardRef;