//todo: Change GTM-ID to productive one
var gaId = "GTM-W8CQGFM";
var hjId = "2158427";

//Initialize Hotjar
//window._hjSettings = { hjid: hjId, hjsv: 6 };

var init = () => {
  window._hjSettings = { hjid: hjId, hjsv: 6 };
  window.dataLayer = window.dataLayer || [];
  window.hj = window.hj || function () {
    (window.hj.q = window.hj.q || []).push(arguments);
  };
  window.gtag = () => {
    window.dataLayer.push(arguments)
  }

};

var acceptGa = function () {
  gtag({
    "gtm.start": new Date().getTime(),
    event: "gtm.js",
  });
};

var acceptHj = function () {};

exports.gaId = gaId;
exports.hjId = hjId;
exports.acceptGa = acceptGa;
exports.acceptHj = acceptHj;
exports.init = init;
