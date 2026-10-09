# Patrícia Lambert — site estático

Site profissional da Paty Lambert (nutrição, reprogramação mental e CLUBB UPP). HTML, CSS e JavaScript vanilla, sem build step.

## Estrutura

```
patricia/
├── index.html              # Home (hero, ações, sobre, CLUBB teaser, quiz embutido)
├── css/site.css            # Estilos da home
├── js/
│   ├── config.js           # SITE_CONFIG (WhatsApp, etc.)
│   ├── site-utils.js       # WhatsApp + nav mobile das landings
│   ├── site.js             # Home (reveal, menu)
│   └── quiz-embed.js       # Teste dos sabotadores na home
├── assets/                 # Imagens, ícones, redirect legado do teste
├── clubb-upp/              # Landing CLUBB UPP
├── consulta-consultoria/   # Consulta e consultoria nutricional
├── meli/                   # MELI — método em grupo (90 dias)
├── meli-i/                 # MELI-I — mentoria individual (120 dias)
└── teste-sabotadores/      # Quiz standalone
```

Cada landing segue o mesmo padrão: `index.html`, `css/styles.css`, `js/main.js`.

## Configuração

Edite apenas [`js/config.js`](js/config.js):

```javascript
window.SITE_CONFIG = {
  whatsappPhone: '55DDDNÚMERO' // DDI + DDD + número, só dígitos ou com máscara
};
```

Todas as páginas carregam `../js/config.js` (ou `js/config.js` na raiz) antes dos scripts da página.

## Desenvolvimento local

Abra `index.html` no navegador ou sirva a pasta com qualquer servidor estático:

```bash
npm run dev
```

## Deploy na Vercel

Site estático na raiz do repositório — **sem framework**, build mínimo só para o WhatsApp.

1. Conecte o repositório em [vercel.com/new](https://vercel.com/new).
2. **Framework Preset:** Other (ou detectar automaticamente).
3. **Build Command:** `npm run build` (já é o padrão se existir `package.json`).
4. **Output Directory:** deixe em branco ou `.` (a raiz do projeto é o site).
5. **Install Command:** pode deixar vazio; não há dependências npm.
6. Em **Settings → Environment Variables**, adicione:
   - `WHATSAPP_PHONE` = `55` + DDD + número (só dígitos, ex.: `5511999998888`)

Cada deploy roda `scripts/generate-config.js` e grava `js/config.js` com o número da variável.

Deploy pela CLI (opcional):

```bash
npx vercel
npx vercel --prod
```

Arquivos de deploy: [`vercel.json`](vercel.json) (trailing slash, cache de assets, redirect `/teste` → quiz), [`404.html`](404.html).

## Paleta e tipografia

Tokens em [`css/site.css`](css/site.css) (`:root`): cream `#faf6f3`, mocha `#4a3b35`, dusty rose `#dba39a`, espresso `#2d2420`. Fontes: **Playfair Display** + **DM Sans** (Google Fonts).

Landings replicam a mesma paleta em seus `css/styles.css`.
