// Google Analytics 4 - Dois IDs para cobrir ambos os domínios
const GA_IDS = ['G-FNDVLMF0J2', 'G-D3FVS4848G'];

// Declare gtag on window
declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

// Initialize Google Analytics
export const initGA = (): void => {
  if (typeof window === 'undefined') return;
  if (window.gtag) return;

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_IDS[0]}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  // Correção crítica: usar function() para acessar o objeto arguments nativo
  window.gtag = function () {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer.push(arguments);
  };

  window.gtag('js', new Date());

  // Configurar ambos os streams
  GA_IDS.forEach(id => {
    window.gtag('config', id, {
      anonymize_ip: true,
    });
  });
};

// Track page views
export const trackPageView = (path: string): void => {
  if (typeof window === 'undefined' || !window.gtag) return;

  GA_IDS.forEach(id => {
    window.gtag('config', id, {
      page_path: path,
    });
  });
};

// Track custom events
export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number
): void => {
  if (typeof window === 'undefined' || !window.gtag) return;

  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

// Track CTA clicks
export const trackCTAClick = (ctaName: string, location: string): void => {
  trackEvent('cta_click', 'engagement', `${ctaName} - ${location}`);
};

// Track form submissions
export const trackFormSubmit = (formName: string): void => {
  trackEvent('form_submit', 'conversion', formName);
};
