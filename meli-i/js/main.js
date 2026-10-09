/**
 * MELI-I — nav e WhatsApp
 */
(function () {
  'use strict';

  var WHATSAPP_MESSAGE = 'Oi Paty! Quero a mentoria MELI-I.';
  var phone =
    (window.SITE_CONFIG && window.SITE_CONFIG.whatsappPhone) || '5500000000000';

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
