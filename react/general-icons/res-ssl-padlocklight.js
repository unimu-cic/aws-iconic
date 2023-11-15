const React = require("react");
function GeneralIconsResSslPadlocklight({
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
  }, "Icon-Resource/General-Resource/Res_SSL-padlock_48_Light") : title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("g", {
    id: "Icon-Resource/General-Resource/Res_SSL-padlock_48",
    stroke: "none",
    strokeWidth: 1,
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M24.111,24.356 C24.806,24.356 25.372,24.921 25.372,25.617 C25.372,26.312 24.806,26.877 24.111,26.877 C23.416,26.877 22.85,26.312 22.85,25.617 C22.85,24.921 23.416,24.356 24.111,24.356 L24.111,24.356 Z M23.111,28.704 L23.111,32.096 L25.111,32.096 L25.111,28.704 C26.418,28.279 27.372,27.063 27.372,25.617 C27.372,23.819 25.909,22.356 24.111,22.356 C22.313,22.356 20.85,23.819 20.85,25.617 C20.85,27.063 21.804,28.279 23.111,28.704 L23.111,28.704 Z M31.954,33.507 L16.261,33.5 L16.266,20.861 L31.96,20.869 L31.954,33.507 Z M20.066,15.811 C20.073,13.633 21.899,11.866 24.139,11.866 L24.153,11.866 C25.24,11.869 26.258,12.289 27.021,13.048 C27.779,13.801 28.193,14.799 28.1900162,15.86 L28.1900162,18.867 L20.051,18.863 L20.066,15.811 Z M32.96,18.869 L30.19,18.868 L30.19,15.863 C30.195,14.267 29.571,12.764 28.432,11.63 C27.295,10.498 25.776,9.871 24.159,9.866 L24.139,9.866 C20.799,9.866 18.077,12.526 18.066,15.803 L18.051,18.862 L15.266,18.861 C15.002,18.861 14.747,18.966 14.559,19.154 C14.372,19.341 14.266,19.595 14.266,19.861 L14.261,34.5 C14.261,35.051 14.709,35.5 15.261,35.5 L32.954,35.507 C33.218,35.507 33.473,35.402 33.661,35.214 C33.848,35.027 33.954,34.773 33.954,34.507 L33.96,19.869 C33.96,19.317 33.512,18.869 32.96,18.869 L32.96,18.869 Z M34.232,39.659 C29.54,40.502 25.584,42.975 24.111,43.991 C22.637,42.975 18.681,40.502 13.989,39.659 C11.645,39.238 4,37.369 4,30.978 C4,28.309 5.009,26.57 6.079,24.728 C7.082,23 8.119,21.213 8.119,18.769 C8.119,15.083 6.078,12.435 4.943,11.247 C6.103,9.835 8.664,6.711 10.065,4.919 C12.198,6.866 14.66,7.924 17.098,7.924 C19.813,7.924 22.067,6.852 24.111,4.569 C26.154,6.852 28.408,7.924 31.124,7.924 C33.562,7.924 36.024,6.866 38.157,4.919 C39.557,6.712 42.118,9.835 43.278,11.247 C42.143,12.435 40.102,15.083 40.102,18.769 C40.102,21.213 41.139,23 42.142,24.728 C43.212,26.57 44.221,28.309 44.221,30.978 C44.221,37.37 36.576,39.238 34.232,39.659 L34.232,39.659 Z M43.872,23.724 C42.923,22.087 42.102,20.674 42.102,18.769 C42.102,14.746 45.242,12.131 45.271,12.107 C45.478,11.94 45.61,11.696 45.637,11.43 C45.664,11.165 45.584,10.899 45.414,10.693 C45.362,10.63 40.24,4.425 39.07,2.821 C38.895,2.58 38.621,2.429 38.323,2.412 C38.045,2.4 37.735,2.509 37.532,2.727 C35.603,4.789 33.328,5.924 31.124,5.924 C28.693,5.924 26.775,4.835 24.905,2.392 C24.715,2.145 24.423,2 24.111,2 C23.799,2 23.507,2.144 23.317,2.392 C21.447,4.835 19.529,5.924 17.098,5.924 C14.894,5.924 12.619,4.789 10.69,2.727 C10.486,2.508 10.198,2.387 9.899,2.412 C9.601,2.429 9.328,2.58 9.152,2.82 C7.981,4.425 2.859,10.63 2.807,10.693 C2.638,10.898 2.559,11.164 2.585,11.428 C2.611,11.693 2.742,11.937 2.948,12.106 C2.979,12.131 6.119,14.746 6.119,18.769 C6.119,20.674 5.299,22.087 4.349,23.724 C3.248,25.621 2,27.771 2,30.978 C2,36.338 6.349,40.32 13.635,41.627 C18.98,42.587 23.458,45.981 23.503,46.015 C23.681,46.153 23.896,46.222 24.111,46.222 C24.326,46.222 24.541,46.153 24.719,46.015 C24.764,45.981 29.241,42.587 34.586,41.627 C41.872,40.32 46.221,36.338 46.221,30.978 C46.221,27.771 44.973,25.621 43.872,23.724 L43.872,23.724 Z",
    id: "Fill-16",
    fill: "#232F3D"
  })));
}
const ForwardRef = React.forwardRef(GeneralIconsResSslPadlocklight);
ForwardRef.aliasName = "Ssl Padlocklight";
module.exports = ForwardRef;