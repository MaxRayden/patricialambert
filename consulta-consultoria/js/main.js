/**
 * Consulta & Consultoria — nav, modal e WhatsApp
 */
(function () {
  'use strict';

  var phone =
    (window.SITE_CONFIG && window.SITE_CONFIG.whatsappPhone) || '5500000000000';

  var SERVICE_LABELS = {
    consulta: 'Consulta Nutricional Individual (online)',
    consultoria: 'Consultoria Nutricional Esportiva (questionário)'
  };

  function buildMessage(service, name, goal) {
    var label = SERVICE_LABELS[service] || SERVICE_LABELS.consulta;
    var lines = [
      'Oi Paty! Gostaria de agendar: ' + label + '.',
      'Nome: ' + name
    ];
    if (goal && goal.trim()) {
      lines.push('Objetivo: ' + goal.trim());
    }
    return lines.join('\n');
  }

  function whatsappUrl(text) {
    return (
      'https://wa.me/' +
      phone.replace(/\D/g, '') +
      '?text=' +
      encodeURIComponent(text)
    );
  }

  var overlay = document.getElementById('booking-modal');
  var modal = overlay && overlay.querySelector('.modal');
  var form = document.getElementById('booking-form');
  var serviceSelect = document.getElementById('service-select');
  var nameInput = document.getElementById('client-name');
  var lastFocus = null;

  function openModal(service) {
    if (!overlay || !modal) return;
    lastFocus = document.activeElement;
    if (service && serviceSelect) {
      serviceSelect.value = service;
    }
    overlay.hidden = false;
    overlay.classList.add('is-open');
    document.body.style.overflow = 'hidden';
    modal.focus();
  }

  function closeModal() {
    if (!overlay) return;
    overlay.classList.remove('is-open');
    overlay.hidden = true;
    document.body.style.overflow = '';
    if (lastFocus && typeof lastFocus.focus === 'function') {
      lastFocus.focus();
    }
  }

  document.querySelectorAll('.js-open-modal').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var service = btn.getAttribute('data-service') || 'consulta';
      openModal(service);
    });
  });

  document.querySelectorAll('.js-close-modal').forEach(function (btn) {
    btn.addEventListener('click', closeModal);
  });

  if (overlay) {
    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) closeModal();
    });
  }

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && overlay && overlay.classList.contains('is-open')) {
      closeModal();
    }
  });

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var service = serviceSelect ? serviceSelect.value : 'consulta';
      var name = nameInput ? nameInput.value.trim() : '';
      if (!name) {
        if (nameInput) nameInput.focus();
        return;
      }
      var goalEl = document.getElementById('client-goal');
      var goal = goalEl ? goalEl.value : '';
      window.open(whatsappUrl(buildMessage(service, name, goal)), '_blank', 'noopener,noreferrer');
      closeModal();
    });
  }

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
  }
})();
