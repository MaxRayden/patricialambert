/**
 * MELI — nav, prévia de áudio (UI) e WhatsApp
 */
(function () {
  'use strict';

  var WHATSAPP_MESSAGE = 'Oi Paty! Quero começar o MELI.';
  var phone =
    (window.SITE_CONFIG && window.SITE_CONFIG.whatsappPhone) || '5500000000000';

  var AUDIO_COPY = {
    1: 'Ciclo 1: Desconstruindo gatilhos subconscientes de ansiedade e comida.',
    2: 'Ciclo 2: Alinhamento e instalação de novos hábitos entre mente e corpo.',
    3: 'Ciclo 3: Maestria e consolidação da sua nova identidade alimentar.'
  };

  function whatsappUrl() {
    return (
      'https://wa.me/' +
      phone.replace(/\D/g, '') +
      '?text=' +
      encodeURIComponent(WHATSAPP_MESSAGE)
    );
  }

  document.querySelectorAll('[data-whatsapp-cta]').forEach(function (el) {
    el.setAttribute('href', whatsappUrl());
    el.setAttribute('target', '_blank');
    el.setAttribute('rel', 'noopener noreferrer');
  });

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

  var header = document.querySelector('.site-header');
  var toggle = document.querySelector('.nav-toggle');
  var mobileNav = document.querySelector('.mobile-nav');

  if (toggle && header) {
    toggle.addEventListener('click', function () {
      var expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      header.classList.toggle('nav-open');
    });

    if (mobileNav) {
      mobileNav.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
          if (link.hasAttribute('data-whatsapp-cta')) return;
          toggle.setAttribute('aria-expanded', 'false');
          header.classList.remove('nav-open');
        });
      });
    }

    document.addEventListener('click', function (e) {
      if (!header.contains(e.target) && header.classList.contains('nav-open')) {
        toggle.setAttribute('aria-expanded', 'false');
        header.classList.remove('nav-open');
      }
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && header.classList.contains('nav-open')) {
        toggle.setAttribute('aria-expanded', 'false');
        header.classList.remove('nav-open');
        toggle.focus();
      }
    });
  }
})();
