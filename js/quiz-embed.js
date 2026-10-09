/**
 * Teste dos Sabotadores — CLUBB UPP
 * Resultado enviado via WhatsApp ao final
 */

(function () {
  'use strict';

  const WHATSAPP_PHONE =
    (window.SITE_CONFIG && window.SITE_CONFIG.whatsappPhone) || '5500000000000';

  const SABOTEURS_DATA = [
    { id: 'juiz', name: 'JUIZ', comida: "Culpa após qualquer deslize, mentalidade 'tudo ou nada' ('já estraguei, então como o resto da semana').", autoimagem: 'Vê defeitos no espelho, compara o corpo com o de outras mulheres.', sabio: 'Um deslize não apaga meu progresso.' },
    { id: 'controlador', name: 'CONTROLADOR', comida: 'Rigidez total, pesa cada grama, pânico ao comer fora de casa.', autoimagem: 'Precisa controlar o corpo para se sentir segura; qualquer variação = fracasso.', sabio: 'Flexibilidade também é cuidado.' },
    { id: 'esforcado', name: 'ESFORÇADO', comida: "Adia o prazer ('só mereço comer quando atingir a meta').", autoimagem: 'Valor próprio preso ao número da balança.', sabio: 'Meu valor não depende do meu peso.' },
    { id: 'agradador', name: 'AGRADADOR', comida: 'Come para não desagradar (o bolo da mãe, o churrasco da família).', autoimagem: 'Usa o corpo como ferramenta de aprovação.', sabio: 'Dizer não é um ato de amor próprio.' },
    { id: 'hipervigilante', name: 'HIPERVIGILANTE', comida: 'Ansiedade constante, medo de engordar, monitora cada retenção de líquido.', autoimagem: 'Vive em alerta, nunca relaxa com o próprio corpo.', sabio: 'Eu confio no meu processo.' },
    { id: 'esquivo', name: 'ESQUIVO', comida: "Racionaliza a fome emocional ('não é emoção, é falta de disciplina').", autoimagem: 'Trata o corpo como máquina, desconectada do que sente.', sabio: 'Sentir é humano; a comida não é minha única válvula.' },
    { id: 'vitima', name: 'VÍTIMA', comida: "'Nada funciona comigo', desiste antes de começar.", autoimagem: 'O corpo como sentença, o metabolismo como inimigo.', sabio: 'Eu sou capaz de mudar minha história.' },
    { id: 'hiperativo', name: 'HIPERATIVO', comida: 'Come correndo, belisca, não mastiga, refeição como tarefa.', autoimagem: 'Nunca presente com o próprio corpo.', sabio: 'Comer devagar é um ato de presença.' },
    { id: 'teimoso', name: 'TEIMOSO', comida: "Perfeccionismo ('se não for 100% limpo, não como nada').", autoimagem: 'O corpo nunca está bom o suficiente.', sabio: 'Progresso vale mais que perfeição.' },
    { id: 'ardiloso', name: 'ARDILOSO', comida: "Adia ('começo segunda que vem'), evita o desconforto.", autoimagem: 'Foge do espelho, da balança, das fotos.', sabio: 'O desconforto de hoje é a liberdade de amanhã.' },
  ];

  const QUESTIONS = [
    '1. Quando como algo fora do planejado, fico me culpando e me chamando de fraca mentalmente.',
    '2. Fico extremamente irritada e desestabilizada quando um evento social foge do meu controle alimentar.',
    '3. Sinto que só terei real valor e beleza quando atingir o peso que determinei como meta ideal.',
    '4. Como mais do que gostaria em encontros familiares apenas para não criar clima chato ou parecer desfeita.',
    '5. Tenho uma ansiedade constante de que todo o esforço que fiz até agora será perdido a qualquer instante.',
    '6. Tento ignorar o que sinto quando como em excesso, tratando tudo como mera matemática sem emoção.',
    '7. Sinto que meu processo de emagrecimento é muito mais sofrido e injusto do que o de outras mulheres.',
    '8. Minha mente está sempre tão acelerada que almoço trabalhando, conferindo o celular ou sem sentir o sabor.',
    '9. Se não puder fazer o treino completo ou a refeição perfeita, considero que aquele dia foi totalmente perdido.',
    '10. Deixo para cuidar da minha alimentação no dia seguinte sempre que o preparo exige sair da minha zona de conforto.',
    '11. Olho no espelho e meu primeiro impulso automático é apontar os defeitos e a gordura que me incomodam.',
    '12. Sinto necessidade de ditar as escolhas dos pratos até das pessoas que almoçam comigo para me sentir segura.',
    '13. Vinculo a minha felicidade pessoal e autoconfiança exclusivamente aos números que leio na balança.',
    '14. Tenho muita dificuldade em dizer "não" quando me oferecem comida, mesmo já estando completamente saciada.',
    '15. Fico monitorando meu corpo o todo tempo, com medo antecipado de reter líquidos ou inchar.',
    '16. Acredito que falar sobre as emoções por trás da comida é bobagem; para mim, o foco deve ser puramente técnico.',
    '17. Costumo me colocar no papel de quem nunca terá sorte com o próprio corpo, sentindo pena de mim mesma.',
    '18. Fico entediada facilmente com rotinas alimentares calmas e preciso sempre de estímulos rápidos e práticos.',
    '19. Tenho regras alimentares tão rígidas que qualquer pequena variação no cardápio me causa extrema frustração.',
    '20. Evito pensar no que estou comendo no momento do impulso; prefiro fingir que aquele excesso não aconteceu.',
    '21. Comparo meu corpo e meu prato com os de outras mulheres, julgando a mim e a elas o tempo todo.',
    '22. Entro em desespero quando viajo ou saio de casa sem conseguir controlar com exatidão o que vou comer.',
    '23. Escondo meu cansaço e minhas dores emocionais focando em metas corporais cada vez mais exigentes.',
    '24. Sinto uma culpa enorme ao estabelecer limites para proteger meu plano alimentar diante da vontade alheia.',
    '25. Espero sempre pelo pior resultado nos exames ou nas avaliações físicas, vivendo em constante sobressalto.',
    '26. Racionalizo exageros alimentares com teorias complexas para não ter de admitir minha carência emocional.',
    '27. Acredito que ninguém compreende a profundidade do meu sofrimento e da minha batalha com a balança.',
    '28. Tenho o hábito de beliscar por pura inquietação mental, apenas para ocupar o tempo ou aliviar a pressa.',
    '29. Acredito que se uma dieta não for cem por cento impecável, não compensa mantê-la ao longo da semana.',
    '30. Adio decisões importantes de saúde e compras de roupas para quando eu estiver "mais magra", fugindo do agora.',
  ];

  let currentQuestionIndex = 0;
  const userAnswers = new Array(30).fill(null);
  let lastSortedResults = null;

  const screenWelcome = document.getElementById('screen-welcome');
  const screenLead = document.getElementById('screen-lead');
  const screenQuiz = document.getElementById('screen-quiz');
  const screenResult = document.getElementById('screen-result');
  if (!screenWelcome || !screenLead || !screenQuiz || !screenResult) return;

  const btnStartQuiz = document.getElementById('btn-start-quiz');
  const btnContinueLead = document.getElementById('btn-continue-lead');
  const btnBackWelcome = document.getElementById('btn-back-welcome');
  const btnPrevQuestion = document.getElementById('btn-prev-question');
  const btnPrintPdf = document.getElementById('btn-print-pdf');
  const btnRestartQuiz = document.getElementById('btn-restart-quiz');
  const btnSendWhatsapp = document.getElementById('btn-send-whatsapp');
  const leadFormError = document.getElementById('lead-form-error');

  const inputParticipantName = document.getElementById('participant-name');
  const inputParticipantEmail = document.getElementById('participant-email');
  const inputParticipantBirth = document.getElementById('participant-birth');
  const inputParticipantSex = document.getElementById('participant-sex');

  const progressText = document.getElementById('progress-text');
  const progressFill = document.getElementById('progress-fill');
  const questionText = document.getElementById('question-text');
  const optionsContainer = document.getElementById('options-container');
  const topSaboteursContainer = document.getElementById('top-saboteurs-container');
  const allSaboteursBars = document.getElementById('all-saboteurs-bars');

  btnStartQuiz.addEventListener('click', showLeadScreen);
  btnContinueLead.addEventListener('click', startQuiz);
  if (btnBackWelcome) btnBackWelcome.addEventListener('click', showWelcomeScreen);
  btnPrevQuestion.addEventListener('click', prevQuestion);
  if (btnPrintPdf) btnPrintPdf.addEventListener('click', () => window.print());
  btnRestartQuiz.addEventListener('click', restartQuiz);
  if (btnSendWhatsapp) btnSendWhatsapp.addEventListener('click', sendResultsToWhatsApp);

  optionsContainer.querySelectorAll('.option-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      selectOption(parseInt(btn.getAttribute('data-val'), 10));
    });
  });

  function getLeadData() {
    return {
      name: inputParticipantName?.value.trim() || '',
      email: inputParticipantEmail?.value.trim() || '',
      birth: inputParticipantBirth?.value || '',
      sex: inputParticipantSex?.value || '',
    };
  }

  function formatBirthDate(isoDate) {
    if (!isoDate) return '';
    const [y, m, d] = isoDate.split('-');
    if (!y || !m || !d) return isoDate;
    return `${d}/${m}/${y}`;
  }

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function validateLeadForm() {
    const lead = getLeadData();
    const fields = [inputParticipantName, inputParticipantEmail, inputParticipantBirth, inputParticipantSex];
    fields.forEach((el) => el?.removeAttribute('aria-invalid'));

    if (!lead.name || !lead.email || !lead.birth || !lead.sex || !isValidEmail(lead.email)) {
      fields.forEach((el) => {
        if (!el) return;
        const empty =
          (el === inputParticipantName && !lead.name) ||
          (el === inputParticipantEmail && (!lead.email || !isValidEmail(lead.email))) ||
          (el === inputParticipantBirth && !lead.birth) ||
          (el === inputParticipantSex && !lead.sex);
        if (empty) el.setAttribute('aria-invalid', 'true');
      });
      if (leadFormError) leadFormError.hidden = false;
      const firstInvalid = fields.find((el) => el?.getAttribute('aria-invalid') === 'true');
      firstInvalid?.focus();
      return false;
    }

    if (leadFormError) leadFormError.hidden = true;
    return true;
  }

  function showWelcomeScreen() {
    screenWelcome.hidden = false;
    screenLead.hidden = true;
    screenQuiz.hidden = true;
    screenResult.hidden = true;
  }

  function showLeadScreen() {
    screenWelcome.hidden = true;
    screenLead.hidden = false;
    screenQuiz.hidden = true;
    screenResult.hidden = true;
    screenLead.scrollIntoView({ behavior: 'smooth', block: 'start' });
    inputParticipantName?.focus();
  }

  function startQuiz() {
    if (!validateLeadForm()) return;

    screenWelcome.hidden = true;
    screenLead.hidden = true;
    screenQuiz.hidden = false;
    screenResult.hidden = true;
    currentQuestionIndex = 0;
    userAnswers.fill(null);
    renderQuestion();
    screenQuiz.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function renderQuestion() {
    const qNum = currentQuestionIndex + 1;
    progressText.textContent = `Pergunta ${qNum} de 30`;
    progressFill.style.width = `${(qNum / 30) * 100}%`;
    questionText.textContent = QUESTIONS[currentQuestionIndex];

    btnPrevQuestion.disabled = currentQuestionIndex === 0;

    const currentSelectedVal = userAnswers[currentQuestionIndex];
    optionsContainer.querySelectorAll('.option-btn').forEach((btn) => {
      const val = parseInt(btn.getAttribute('data-val'), 10);
      btn.classList.toggle('selected', currentSelectedVal !== null && currentSelectedVal === val);
    });
  }

  function selectOption(value) {
    userAnswers[currentQuestionIndex] = value;
    optionsContainer.querySelectorAll('.option-btn').forEach((btn) => {
      const val = parseInt(btn.getAttribute('data-val'), 10);
      btn.classList.toggle('selected', val === value);
    });

    setTimeout(() => {
      if (currentQuestionIndex < 29) {
        currentQuestionIndex++;
        renderQuestion();
      } else {
        calculateAndShowResults();
      }
    }, 180);
  }

  function prevQuestion() {
    if (currentQuestionIndex > 0) {
      currentQuestionIndex--;
      renderQuestion();
    }
  }

  function restartQuiz() {
    screenResult.hidden = true;
    screenQuiz.hidden = true;
    screenLead.hidden = true;
    screenWelcome.hidden = false;
    lastSortedResults = null;
    document.getElementById('teste')?.scrollIntoView({ behavior: 'smooth' });
  }

  function calculateAndShowResults() {
    const scores = new Array(10).fill(0);
    userAnswers.forEach((answerVal, qIndex) => {
      scores[qIndex % 10] += answerVal || 0;
    });

    const results = SABOTEURS_DATA.map((sab, idx) => ({ ...sab, score: scores[idx] }));
    results.sort((a, b) => b.score - a.score);
    lastSortedResults = results;

    renderTopSaboteurs(results);
    renderSaboteurBars(results);

    screenQuiz.hidden = true;
    screenResult.hidden = false;
    screenResult.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function renderTopSaboteurs(sortedResults) {
    const top1 = sortedResults[0];
    const top2 = sortedResults[1];
    let html = '';
    const tiesForFirst = sortedResults.filter((r) => r.score === top1.score);

    if (tiesForFirst.length > 1) {
      tiesForFirst.forEach((sab) => {
        html += createSaboteurCardMarkup(sab, 'Empate em 1º Lugar — Sabotador Principal', 'rank-1', true);
      });
      const nextScore = sortedResults.find((r) => r.score < top1.score);
      if (nextScore) {
        html += createSaboteurCardMarkup(nextScore, '2º Sabotador Secundário', 'rank-2', false);
      }
    } else {
      html += createSaboteurCardMarkup(top1, '1º Sabotador Principal (Dominante)', 'rank-1', true);
      html += createSaboteurCardMarkup(top2, '2º Sabotador Secundário', 'rank-2', false);
    }

    topSaboteursContainer.innerHTML = html;
  }

  function createSaboteurCardMarkup(sab, badgeLabel, badgeClass, isPrimary) {
    return `
      <article class="saboteur-card ${isPrimary ? 'primary-saboteur' : ''}">
        <span class="saboteur-score-pill">${sab.score} / 9 pts</span>
        <span class="saboteur-badge ${badgeClass}">${badgeLabel}</span>
        <h3 class="saboteur-card__title">${sab.name}</h3>
        <div class="info-block">
          <div class="info-label">Na Comida</div>
          <p class="info-text">${sab.comida}</p>
        </div>
        <div class="info-block">
          <div class="info-label">Na Autoimagem</div>
          <p class="info-text">${sab.autoimagem}</p>
        </div>
        <div class="wise-quote">
          <div class="wise-quote-title">Resposta do Sábio</div>
          <p class="wise-quote-body">"${sab.sabio}"</p>
        </div>
      </article>
    `;
  }

  function renderSaboteurBars(sortedResults) {
    allSaboteursBars.innerHTML = sortedResults
      .map((sab) => {
        const pct = Math.round((sab.score / 9) * 100);
        return `
          <div class="saboteur-bar-row">
            <div class="saboteur-bar-label" title="${sab.name}">${sab.name}</div>
            <div class="saboteur-bar-track">
              <div class="saboteur-bar-val" style="width: ${pct}%;"></div>
            </div>
            <div class="saboteur-bar-num">${sab.score}/9</div>
          </div>
        `;
      })
      .join('');
  }

  function buildWhatsAppMessage() {
    if (!lastSortedResults) return '';

    const lead = getLeadData();
    const top = lastSortedResults.slice(0, 2);
    const lines = [
      `Oi Patrícia! Acabei de fazer o Teste dos Sabotadores do CLUBB UPP 🤍`,
      '',
      `Nome: ${lead.name}`,
      `E-mail: ${lead.email}`,
      `Data de nascimento: ${formatBirthDate(lead.birth)}`,
      `Sexo: ${lead.sex}`,
      '',
      '*Meus principais sabotadores:*',
      ...top.map((s, i) => `${i + 1}. ${s.name} — ${s.score}/9 pts`),
      '',
      '*Panorama completo:*',
      ...lastSortedResults.map((s) => `• ${s.name}: ${s.score}/9`),
      '',
      'Gostaria de conversar sobre meu resultado e os próximos passos.',
    ];
    return lines.join('\n');
  }

  function sendResultsToWhatsApp() {
    if (!lastSortedResults) return;
    const text = encodeURIComponent(buildWhatsAppMessage());
    const url = `https://wa.me/${WHATSAPP_PHONE.replace(/\D/g, '')}?text=${text}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  window.ClubbUppQuiz = { buildWhatsAppMessage, get lastResults() { return lastSortedResults; } };
})();
