/**
 * MELI — prévia de áudio (UI) e WhatsApp
 */
(function () {
  'use strict';

  var utils = window.SiteUtils;
  if (utils) {
    utils.bindWhatsappLinks('[data-whatsapp-cta]', 'Oi Paty! Quero começar o MELI.');
    utils.initLandingNav();
  }

  var AUDIO_COPY = {
    1: 'Ciclo 1: Desconstruindo gatilhos subconscientes de ansiedade e comida.',
    2: 'Ciclo 2: Alinhamento e instalação de novos hábitos entre mente e corpo.',
    3: 'Ciclo 3: Maestria e consolidação da sua nova identidade alimentar.'
  };

  var previewText = document.getElementById('audio-preview-text');
  var tabs = document.querySelectorAll('[data-audio-tab]');

  tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      var id = tab.getAttribute('data-audio-tab');
      tabs.forEach(function (t) {
        t.classList.remove('is-active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('is-active');
      tab.setAttribute('aria-selected', 'true');
      if (previewText && AUDIO_COPY[id]) {
        previewText.textContent = AUDIO_COPY[id];
      }
    });
  });
})();
