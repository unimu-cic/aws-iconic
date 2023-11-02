const React = require("react");
function GeneralIconsSamlTokenlight({
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
  }, "Icon-Resource/General-Resource/Res_SAML-token_48_Light") : title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("g", {
    id: "Icon-Resource/General-Resource/Res_SAML-token_48",
    stroke: "none",
    strokeWidth: 1,
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M23.8855005,24.5730696 C23.5735005,24.8850696 23.5025005,25.3630696 23.7105005,25.7520696 C24.7785005,27.7470696 24.4385005,30.1430696 22.8655005,31.7160696 C20.8915005,33.6890696 17.6815005,33.6870696 15.7065005,31.7160696 C14.7505005,30.7600696 14.2245005,29.4880696 14.2245005,28.1360696 C14.2245005,26.7840696 14.7505005,25.5130696 15.7065005,24.5570696 C16.6685005,23.5950696 17.9385005,23.0950696 19.2365005,23.0950696 C20.0605005,23.0950696 20.8965005,23.2980696 21.6715005,23.7120696 C22.0595005,23.9180696 22.5375005,23.8480696 22.8505005,23.5370696 L24.1725005,22.2140696 C24.3685005,22.0170696 24.4745005,21.7490696 24.4645005,21.4720696 L24.4225005,20.2270696 L25.6685005,20.2690696 C25.9405005,20.2920696 26.2145005,20.1740696 26.4095005,19.9770696 L27.1555005,19.2320696 C27.3515005,19.0360696 27.4565005,18.7670696 27.4475005,18.4910696 L27.4045005,17.2450696 L28.6505005,17.2880696 C28.9105005,17.2980696 29.1955005,17.1910696 29.3915005,16.9960696 L30.2565005,16.1310696 L31.5675005,16.0030696 L31.6065005,16.8520696 L23.8855005,24.5730696 Z M33.1725005,14.1480696 C32.9655005,13.9690696 32.6935005,13.8850696 32.4205005,13.9090696 L29.7045005,14.1760696 C29.4745005,14.1980696 29.2595005,14.3000696 29.0955005,14.4640696 L28.2845005,15.2740696 L26.4025005,15.2100696 C26.1475005,15.1780696 25.8565005,15.3050696 25.6605005,15.5020696 C25.4645005,15.6980696 25.3595005,15.9670696 25.3685005,16.2430696 L25.4335005,18.1260696 L25.3025005,18.2560696 L23.4205005,18.1920696 C23.1295005,18.1730696 22.8755005,18.2880696 22.6795005,18.4840696 C22.4835005,18.6800696 22.3775005,18.9480696 22.3875005,19.2250696 L22.4505005,21.1070696 L21.9325005,21.6270696 C19.3045005,20.5510696 16.3165005,21.1200696 14.2925005,23.1430696 C12.9585005,24.4760696 12.2245005,26.2500696 12.2245005,28.1360696 C12.2245005,30.0220696 12.9585005,31.7960696 14.2925005,33.1300696 C15.6695005,34.5070696 17.4785005,35.1950696 19.2865005,35.1950696 C21.0945005,35.1950696 22.9035005,34.5070696 24.2805005,33.1300696 C26.3025005,31.1070696 26.8705005,28.1180696 25.7955005,25.4910696 L33.3315005,17.9550696 C33.5315005,17.7570696 33.6365005,17.4830696 33.6235005,17.2030696 L33.5175005,14.8590696 C33.5045005,14.5850696 33.3805005,14.3280696 33.1725005,14.1480696 L33.1725005,14.1480696 Z M18.5785005,30.0390696 C18.2495005,30.3680696 17.7145005,30.3700696 17.3855005,30.0390696 C17.0555005,29.7090696 17.0545005,29.1730696 17.3845005,28.8440696 C17.5495005,28.6790696 17.7655005,28.5960696 17.9815005,28.5960696 C18.1985005,28.5960696 18.4135005,28.6790696 18.5785005,28.8440696 C18.9075005,29.1730696 18.9075005,29.7090696 18.5785005,30.0390696 L18.5785005,30.0390696 Z M15.9705005,27.4280696 C14.8615005,28.5370696 14.8615005,30.3420696 15.9705005,31.4530696 C16.5255005,32.0080696 17.2535005,32.2850696 17.9825005,32.2850696 C18.7095005,32.2850696 19.4385005,32.0080696 19.9925005,31.4530696 L19.9935005,31.4530696 C21.1015005,30.3430696 21.1015005,28.5380696 19.9925005,27.4290696 C18.9175005,26.3540696 17.0435005,26.3570696 15.9705005,27.4280696 L15.9705005,27.4280696 Z M38.5405005,11.8250696 C37.8495005,12.5160696 36.7235005,12.5170696 36.0305005,11.8240696 C36.0305005,11.8230696 36.0305005,11.8230696 36.0295005,11.8230696 C35.6965005,11.4900696 35.5135005,11.0440696 35.5135005,10.5680696 C35.5145005,10.0920696 35.6985005,9.64506957 36.0315005,9.31306957 C36.3645005,8.98006957 36.8105005,8.79806957 37.2855005,8.79806957 L37.2875005,8.79806957 C37.7635005,8.79806957 38.2095005,8.98106957 38.5415005,9.31406957 C38.8745005,9.64806957 39.0585005,10.0940696 39.0575045,10.5710696 C39.0575045,11.0470696 38.8735005,11.4930696 38.5405005,11.8250696 L38.5405005,11.8250696 Z M34.6185005,7.89706957 C33.9065005,8.60806957 33.5145005,9.55506957 33.5134986,10.5660696 C33.5125005,11.5770696 33.9045005,12.5250696 34.6145005,13.2360696 C35.3505005,13.9730696 36.3175005,14.3430696 37.2845005,14.3430696 C38.2505005,14.3430696 39.2165005,13.9750696 39.9525005,13.2410696 C41.4265005,11.7700696 41.4285005,9.37506957 39.9575005,7.90206957 C38.4875005,6.42906957 36.0915005,6.42706957 34.6185005,7.89706957 L34.6185005,7.89706957 Z M20.2545005,43.5740696 L4.41350048,27.7060696 L28.1385005,4.02006957 L43.2725005,4.75306957 L43.9805005,19.8860696 L20.2545005,43.5740696 Z M45.2275005,3.75106957 C45.2025005,3.23606957 44.7915005,2.82406957 44.2775005,2.79906957 L27.7935005,2.00106957 C27.4885005,1.98806957 27.2385005,2.09406957 27.0385005,2.29206957 L2.29350048,26.9970696 C1.90250048,27.3870696 1.90250048,28.0200696 2.29150048,28.4110696 L19.5455005,45.6940696 C19.7335005,45.8830696 19.9885005,45.9880696 20.2525005,45.9880696 L20.2535005,45.9880696 C20.5185005,45.9880696 20.7735005,45.8830696 20.9595005,45.6960696 L45.7055005,20.9900696 C45.9065005,20.7910696 46.0115005,20.5160696 45.9985005,20.2350696 L45.2275005,3.75106957 Z",
    id: "Fill-15",
    fill: "#232F3D"
  })));
}
const ForwardRef = React.forwardRef(GeneralIconsSamlTokenlight);
module.exports = ForwardRef;