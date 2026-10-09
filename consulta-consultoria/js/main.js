/**
 * Consulta & Consultoria — modal de agendamento e WhatsApp
 */
(function () {
  'use strict';

  var utils = window.SiteUtils;

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

  function openWhatsapp(text) {
    var url = utils
      ? utils.whatsappUrl(text)
      : 'https://wa.me/5500000000000?text=' + encodeURIComponent(text);
    window.open(url, '_blank', 'noopener,noreferrer');
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
      openWhatsapp(buildMessage(service, name, goal));
      closeModal();
    });
  }

  if (utils) {
    utils.initLandingNav();
  }
})();
