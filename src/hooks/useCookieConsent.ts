import { useState, useEffect, useCallback } from 'react';
import { initGA } from '@/lib/analytics';

const CONSENT_KEY = 'lfcom_cookie_consent';
const CONSENT_EXPIRY_DAYS = 365;

export type ConsentStatus = 'pending' | 'accepted' | 'rejected';

interface ConsentData {
  status: ConsentStatus;
  timestamp: number;
}

export const useCookieConsent = () => {
  const [consentStatus, setConsentStatus] = useState<ConsentStatus>('pending');
  const [isLoaded, setIsLoaded] = useState(false);

  // Check if consent has expired (365 days)
  const isConsentExpired = (timestamp: number): boolean => {
    const expiryMs = CONSENT_EXPIRY_DAYS * 24 * 60 * 60 * 1000;
    return Date.now() - timestamp > expiryMs;
  };

  // Load consent from localStorage on mount
  useEffect(() => {
    const storedConsent = localStorage.getItem(CONSENT_KEY);
    
    if (storedConsent) {
      try {
        const data: ConsentData = JSON.parse(storedConsent);
        
        if (!isConsentExpired(data.timestamp)) {
          setConsentStatus(data.status);
          
          // If previously accepted, initialize GA
          if (data.status === 'accepted') {
            initGA();
          }
        } else {
          // Consent expired, reset to pending
          localStorage.removeItem(CONSENT_KEY);
          setConsentStatus('pending');
        }
      } catch {
        localStorage.removeItem(CONSENT_KEY);
        setConsentStatus('pending');
      }
    }
    
    setIsLoaded(true);
  }, []);

  // Save consent choice
  const saveConsent = useCallback((status: ConsentStatus) => {
    const data: ConsentData = {
      status,
      timestamp: Date.now(),
    };
    
    localStorage.setItem(CONSENT_KEY, JSON.stringify(data));
    setConsentStatus(status);
    
    // Initialize GA if accepted
    if (status === 'accepted') {
      initGA();
    }
  }, []);

  // Accept all cookies
  const acceptCookies = useCallback(() => {
    saveConsent('accepted');
  }, [saveConsent]);

  // Reject non-essential cookies
  const rejectCookies = useCallback(() => {
    saveConsent('rejected');
  }, [saveConsent]);

  // Reset consent (for testing or privacy settings page)
  const resetConsent = useCallback(() => {
    localStorage.removeItem(CONSENT_KEY);
    setConsentStatus('pending');
  }, []);

  return {
    consentStatus,
    isLoaded,
    showBanner: isLoaded && consentStatus === 'pending',
    acceptCookies,
    rejectCookies,
    resetConsent,
  };
};
