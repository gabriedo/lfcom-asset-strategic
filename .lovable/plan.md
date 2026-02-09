

# Corrigir Google Analytics 4 - 3 Problemas Encontrados

## Diagnostico

Analisando o codigo e os screenshots do GA, identifiquei **3 problemas** que impedem o funcionamento:

### Problema 1: ID de medicao errado
- O codigo usa `G-D3FVS4848G` (stream do `www.lfcom.xyz`)
- Mas o dominio principal `lfcom.xyz` usa `G-FNDVLMF0J2`
- Solucao: configurar **ambos** os IDs para cobrir os dois dominios

### Problema 2: Bug no dataLayer (erro critico)
- A funcao `gtag` esta fazendo `window.dataLayer.push(args)` -- isso empurra um **array**
- O Google Analytics espera receber o objeto `arguments`, nao um array
- Resultado: **nenhum dado chega ao GA**, mesmo com o script carregado

### Problema 3: Nao rastreia navegacao entre paginas
- A funcao `trackPageView` existe mas **nunca e chamada**
- Em um SPA (Single Page Application), o GA so registra a primeira pagina automaticamente
- Cada troca de rota precisa disparar `trackPageView` manualmente

---

## O Que Sera Feito

### 1. Corrigir `src/lib/analytics.ts`
- Adicionar ambos os IDs: `G-FNDVLMF0J2` (lfcom.xyz) e `G-D3FVS4848G` (www.lfcom.xyz)
- Corrigir o bug do dataLayer: usar a sintaxe correta `window.dataLayer.push(arguments)`
- Configurar ambos os streams com `gtag('config', ...)`

### 2. Criar componente `AnalyticsTracker`
- Novo componente que escuta mudancas de rota via `useLocation()`
- Chama `trackPageView` a cada navegacao
- Respeita o consentimento de cookies (so rastreia se aceito)

### 3. Integrar no `App.tsx`
- Adicionar o `AnalyticsTracker` dentro do `BrowserRouter`

---

## Detalhes Tecnicos

Arquivo `src/lib/analytics.ts` -- correcoes:

```text
// Dois IDs para cobrir ambos os dominios
const GA_IDS = ['G-FNDVLMF0J2', 'G-D3FVS4848G'];

// Correcao critica: usar function() em vez de arrow function
// para ter acesso ao objeto "arguments" nativo
window.gtag = function() {
  window.dataLayer.push(arguments);
};

// Configurar ambos os streams
GA_IDS.forEach(id => {
  window.gtag('config', id, { anonymize_ip: true });
});
```

Novo componente `src/components/layout/AnalyticsTracker.tsx`:
- Usa `useLocation()` do React Router
- Usa `useEffect` para chamar `trackPageView` a cada mudanca de pathname
- Verifica se o consentimento foi dado antes de disparar

Apos aprovar, sera necessario **publicar o site** (botao Publish) para que as alteracoes cheguem ao dominio `lfcom.xyz` e o GA comece a receber dados. Pode levar ate 24-48h para os dados aparecerem no painel do Google Analytics.

