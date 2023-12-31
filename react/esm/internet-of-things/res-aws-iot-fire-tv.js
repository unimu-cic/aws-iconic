import * as React from "react";
function InternetOfThingsResAwsIotFireTv({
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
  }, "Icon-Resource/IoT/Res_AWS-IoT_Fire_TV_48") : title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("g", {
    id: "Icon-Resource/IoT/Res_AWS-IoT_Fire_TV_48",
    stroke: "none",
    strokeWidth: 1,
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M40.3984,18.7762 C40.7964,19.2682 40.2934,22.6832 38.3464,24.3122 C38.0464,24.5622 37.7614,24.4292 37.8944,24.0982 C38.3324,23.0042 39.3134,20.5542 38.8484,19.9592 C38.3844,19.3642 35.7794,19.6772 34.6094,19.8172 C34.2544,19.8602 34.1994,19.5502 34.5194,19.3252 C36.5974,17.8662 40.0024,18.2872 40.3984,18.7762 Z M7.8824,19.0432 C12.5524,21.7612 18.3284,23.3972 24.2924,23.3972 C28.3174,23.3972 32.7404,22.5612 36.8104,20.8352 C37.4234,20.5752 37.9384,21.2392 37.3374,21.6832 C33.7074,24.3632 28.4444,25.7882 23.9124,25.7882 C17.5594,25.7882 11.8384,23.4392 7.5104,19.5312 C7.1704,19.2232 7.4734,18.8042 7.8824,19.0432 Z M3.9994,32.5622 L43.8884,32.5622 L43.8884,11.0002 L3.9994,11.0002 L3.9994,32.5622 Z M2.9994,9.0002 C2.4474,9.0002 1.9994,9.4472 1.9994,10.0002 L1.9994,33.5622 C1.9994,34.1152 2.4474,34.5622 2.9994,34.5622 L22.9444,34.5622 L22.9444,37.7992 L17.8354,37.7992 L17.8354,39.7992 L30.0524,39.7992 L30.0524,37.7992 L24.9444,37.7992 L24.9444,34.5622 L44.8884,34.5622 C45.4414,34.5622 45.8884,34.1152 45.8884,33.5622 L45.8884,10.0002 C45.8884,9.4472 45.4414,9.0002 44.8884,9.0002 L2.9994,9.0002 Z",
    id: "Amazon-IOT-RESOURCES-Fire-TV_Resource-Icon_light-bg",
    fill: "#7AA116"
  })));
}
const ForwardRef = React.forwardRef(InternetOfThingsResAwsIotFireTv);
ForwardRef.aliasName = "Aws Iot Fire_tv";
export default ForwardRef;