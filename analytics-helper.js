var init = (ids) => {
  window._hjSettings = { hjid: ids.hjId, hjsv: 6 };
  window.dataLayer = window.dataLayer || [];
  window.gtag = function() {
    window.dataLayer.push(arguments)
  }
};

var acceptGa = function () {
  dataLayer.push({
    'gtm.start': new Date().getTime(),
    event: 'gtm.js'
  });
};

var acceptHj = function () {
  window.hj = window.hj ||
    function() {
      (window.hj.q = window.hj.q || []).push(arguments);
    };
};

exports.acceptGa = acceptGa;
exports.acceptHj = acceptHj;
exports.init = init;
