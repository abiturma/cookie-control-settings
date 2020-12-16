//todo: Change GTM-ID to productive one
var gaId = 'GTM-W8CQGFM'
var hjId = '2158427'

//Initialize Hotjar
//window._hjSettings = { hjid: hjId, hjsv: 6 };

var acceptGa = function(){

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    'gtm.start': new Date().getTime(),
    event: 'gtm.js'
  });

}

var acceptHj = function(){
  window.hj = window.hj ||
    function() {
      (window.hj.q = window.hj.q || []).push(arguments);
    };
}

exports.gaId = gaId
exports.hjId = hjId
exports.acceptGa = acceptGa
exports.acceptHj = acceptHj


