/**
 * Gera js/config.js no build (Vercel: variável WHATSAPP_PHONE).
 * Localmente, npm run build é opcional — você pode editar js/config.js direto.
 */
const fs = require('fs');
const path = require('path');

const raw = process.env.WHATSAPP_PHONE || '5500000000000';
const phone = String(raw).replace(/\D/g, '') || '5500000000000';

const outPath = path.join(__dirname, '..', 'js', 'config.js');
const content = `/**
 * Configuração global do site (único lugar para alterar WhatsApp, etc.)
 * Vercel: defina WHATSAPP_PHONE (DDI + DDD + número). Local: edite aqui ou rode npm run build.
 */
window.SITE_CONFIG = window.SITE_CONFIG || {
  whatsappPhone: '${phone}'
};
`;

fs.writeFileSync(outPath, content, 'utf8');
console.log('[build] js/config.js atualizado.');
