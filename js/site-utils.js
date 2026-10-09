/**
 * Utilitários compartilhados — WhatsApp e nav das landings CLUBB
 */
(function (global) {
  'use strict';

  var DEFAULT_PHONE = '5500000000000';

  function getPhoneDigits() {
    var raw =
      (global.SITE_CONFIG && global.SITE_CONFIG.whatsappPhone) || DEFAULT_PHONE;
    return String(raw).replace(/\D/g, '');
  }

  function whatsappUrl(message) {
    return (
      'https://wa.me/' +
      getPhoneDigits() +
      '?text=' +
      encodeURIComponent(message)
    );
  }

  function bindWhatsappLinks(selector, message) {
    document.querySelectorAll(selector).forEach(function (el) {
      el.setAttribute('href', whatsappUrl(message));
      el.setAttribute('target', '_blank');
      el.setAttribute('rel', 'noopener noreferrer');
    });
  }

  function initLandingNav() {
    var header = document.querySelector('.site-header');
    var toggle = document.querySelector('.nav-toggle');
    var mobileNav = document.querySelector('.mobile-nav');

    if (!toggle || !header) return;

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

  global.SiteUtils = {
    getPhoneDigits: getPhoneDigits,
    whatsappUrl: whatsappUrl,
    bindWhatsappLinks: bindWhatsappLinks,
    initLandingNav: initLandingNav
  };
})(window);
