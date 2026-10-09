/**
 * CLUBB UPP — CTAs WhatsApp
 */
(function () {
  'use strict';

  var utils = window.SiteUtils;
  if (utils) {
    utils.bindWhatsappLinks('[data-whatsapp-cta]', 'Oi Paty! Quero participar do CLUBB UPP.');
    utils.initLandingNav();
  }
})();
