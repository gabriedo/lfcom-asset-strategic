// Google Analytics 4 - ID de medição
const GA_MEASUREMENT_ID = 'G-D3FVS4848G';

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
  
  // Check if already initialized
  if (window.gtag) return;

  // Create script element for gtag.js
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  // Initialize dataLayer and gtag function
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer.push(args);
  };

  window.gtag('js', new Date());
  window.gtag('config', GA_MEASUREMENT_ID, {
    anonymize_ip: true, // LGPD compliance
  });
};

// Track page views
export const trackPageView = (path: string): void => {
  if (typeof window === 'undefined' || !window.gtag) return;
  
  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: path,
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
