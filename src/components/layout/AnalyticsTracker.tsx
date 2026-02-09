import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageView } from '@/lib/analytics';

const CONSENT_KEY = 'lfcom_cookie_consent';

export const AnalyticsTracker = () => {
  const location = useLocation();

  useEffect(() => {
    try {
      const stored = localStorage.getItem(CONSENT_KEY);
      if (stored) {
        const data = JSON.parse(stored);
        if (data.status === 'accepted') {
          trackPageView(location.pathname);
        }
      }
    } catch {
      // silently ignore
    }
  }, [location.pathname]);

  return null;
};
