// Initialisierung der globalen Variablen und Funktionen
var init = (ids) => {
  window._hjSettings = { hjid: ids.hjId, hjsv: 6 };
  window.dataLayer = window.dataLayer || [];
  window.gtag = function() {
    window.dataLayer.push(arguments);
  };

  // Standardmäßige Ablehnung aller Einwilligungen
  gtag('consent', 'default', {
    'ad_storage': 'denied',
    'ad_user_data': 'denied',
    'ad_personalization': 'denied',
    'analytics_storage': 'denied'
  });
};
// Funktion zum Akzeptieren von Google Analytics
var acceptGa = function () {
  gtag('consent', 'update', {
    'analytics_storage': 'granted',
    'ad_storage': 'granted',
    'ad_personalization': 'granted',
    'ad_user_data': 'granted'
  });

  window.dataLayer.push({
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
