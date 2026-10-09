/**
 * MELI-I — WhatsApp
 */
(function () {
  'use strict';

  var utils = window.SiteUtils;
  if (utils) {
    utils.bindWhatsappLinks('[data-whatsapp-cta]', 'Oi Paty! Quero a mentoria MELI-I.');
    utils.initLandingNav();
  }
})();
