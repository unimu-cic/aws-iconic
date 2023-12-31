import * as React from "react";
function GeneralIconsResGitRepositorylight({
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
  }, "Icon-Resource/General-Resource/Res_Git-Repository_48_Light") : title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("g", {
    id: "Icon-Resource/General-Resource/Res_Git-Repository_48",
    stroke: "none",
    strokeWidth: 1,
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M36.002,44 C34.348,44 33.002,42.654 33.002,41 C33.002,39.346 34.348,38 36.002,38 C37.656,38 39.002,39.346 39.002,41 C39.002,42.654 37.656,44 36.002,44 M12,10 C10.346,10 9,8.654 9,7 C9,5.346 10.346,4 12,4 C13.654,4 15,5.346 15,7 C15,8.654 13.654,10 12,10 M36.002,21.001 C37.656,21.001 39.002,22.347 39.002,24.001 C39.002,25.655 37.656,27.001 36.002,27.001 C34.348,27.001 33.002,25.655 33.002,24.001 C33.002,22.347 34.348,21.001 36.002,21.001 M36.002,36 C33.587,36 31.567,37.721 31.103,40.001 L26.001,40.001 C25.338,40.001 25.001,39.685 25.001,39.062 L25.001,25.001 L31.103,25.001 C31.568,27.28 33.588,29.001 36.002,29.001 C38.759,29.001 41.002,26.758 41.002,24.001 C41.002,21.244 38.759,19.001 36.002,19.001 C33.588,19.001 31.568,20.722 31.103,23.001 L25.001,23.001 L25.001,8.938 C25.001,7.208 23.768,5.999 22.001,5.999 L16.899,5.999 C16.434,3.72 14.414,2 12,2 C9.243,2 7,4.243 7,7 C7,9.757 9.243,12 12,12 C14.415,12 16.435,10.279 16.899,7.999 L22.001,7.999 C22.674,7.999 23.001,8.306 23.001,8.938 L23.001,39.062 C23.001,40.792 24.234,42.001 26.001,42.001 L31.103,42.001 C31.568,44.28 33.588,46 36.002,46 C38.759,46 41.002,43.757 41.002,41 C41.002,38.243 38.759,36 36.002,36",
    id: "Fill-1",
    fill: "#232F3D"
  })));
}
const ForwardRef = React.forwardRef(GeneralIconsResGitRepositorylight);
ForwardRef.aliasName = "Git Repositorylight";
export default ForwardRef;