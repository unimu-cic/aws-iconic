const React = require("react");
function GeneralIconsResDisklight({
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
  }, "Icon-Resource/General-Resource/Res_Disk_48_Light") : title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("g", {
    id: "Icon-Resource/General-Resource/Res_Disk_48",
    stroke: "none",
    strokeWidth: 1,
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M24.014,44.028 C12.979,44.028 4,35.049 4,24.013 C4,12.978 12.979,4 24.014,4 C35.049,4 44.028,12.978 44.028,24.013 C44.028,35.049 35.049,44.028 24.014,44.028 M24.014,2 C11.875,2 2,11.875 2,24.013 C2,36.152 11.875,46.028 24.014,46.028 C36.153,46.028 46.028,36.152 46.028,24.013 C46.028,11.875 36.153,2 24.014,2 M24.014,31.749 C19.748,31.749 16.279,28.279 16.279,24.013 C16.279,19.748 19.748,16.278 24.014,16.278 C28.28,16.278 31.749,19.748 31.749,24.013 C31.749,28.279 28.28,31.749 24.014,31.749 M24.014,14.278 C18.646,14.278 14.279,18.645 14.279,24.013 C14.279,29.382 18.646,33.749 24.014,33.749 C29.382,33.749 33.749,29.382 33.749,24.013 C33.749,18.645 29.382,14.278 24.014,14.278 M24.014,27.503 C22.09,27.503 20.525,25.937 20.525,24.013 C20.525,22.09 22.09,20.524 24.014,20.524 C25.938,20.524 27.503,22.09 27.503,24.013 C27.503,25.937 25.938,27.503 24.014,27.503 M24.014,18.524 C20.988,18.524 18.525,20.987 18.525,24.013 C18.525,27.04 20.988,29.503 24.014,29.503 C27.04,29.503 29.503,27.04 29.503,24.013 C29.503,20.987 27.04,18.524 24.014,18.524",
    id: "Fill-5",
    fill: "#232F3D"
  })));
}
const ForwardRef = React.forwardRef(GeneralIconsResDisklight);
ForwardRef.aliasName = "Disklight";
module.exports = ForwardRef;