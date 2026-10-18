import React, { useState, useEffect } from 'react';
import { Smartphone, Download, Share2, Plus, X, Sparkles, CheckCircle } from './Icons';

export default function PwaInstallPrompt({ isOpen, onClose }) {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isStandalone, setIsStandalone] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [installSuccess, setInstallSuccess] = useState(false);

  useEffect(() => {
    // Check if running in standalone mode (already installed as PWA)
    const checkStandalone = () => {
      const isStandaloneMode = 
        window.matchMedia('(display-mode: standalone)').matches || 
        window.navigator.standalone === true;
      setIsStandalone(isStandaloneMode);
    };

    checkStandalone();

    // Check if on iOS
    const ua = window.navigator.userAgent.toLowerCase();
    const isIosDevice = /iphone|ipad|ipod/.test(ua);
    setIsIOS(isIosDevice);

    // Listen for beforeinstallprompt event (Android / Chromium)
    const handleBeforeInstall = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      // If user hasn't dismissed it previously, we can notify
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstall);

    // Listen for appinstalled event
    const handleAppInstalled = () => {
      setInstallSuccess(true);
      setDeferredPrompt(null);
      setTimeout(() => {
        setIsStandalone(true);
        if (onClose) onClose();
      }, 2500);
    };

    window.addEventListener('appinstalled', handleAppInstalled);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstall);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, [onClose]);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const choice = await deferredPrompt.userChoice;
    if (choice.outcome === 'accepted') {
      setInstallSuccess(true);
    }
    setDeferredPrompt(null);
  };

  // If already installed and not manually opened by the user, hide
  if (isStandalone && !isOpen) return null;

  // If manual modal is open OR show floating prompt if available
  const showPrompt = isOpen || (!isDismissed && !isStandalone && (deferredPrompt || isIOS));

  if (!showPrompt) return null;

  return (
    <div className="pwa-install-overlay animate-fadeIn">
      <div className="pwa-install-modal">
        <div className="pwa-install-header">
          <div className="pwa-app-icon-badge">
            <img 
              src="/pwa-icon-192.png" 
              alt="Room-305 Logo" 
              className="pwa-badge-img"
              onError={(e) => {
                e.target.style.display = 'none';
              }} 
            />
            <div className="pwa-badge-fallback">
              <Smartphone className="w-6 h-6 text-indigo" />
            </div>
          </div>
          
          <div className="pwa-header-info">
            <div className="pwa-modal-title flex items-center gap-1.5">
              <span>Install Room-305 App</span>
              <Sparkles className="w-4 h-4 text-amber" />
            </div>
            <p className="pwa-modal-sub">Learn & play English directly on your mobile phone</p>
          </div>

          <button 
            type="button" 
            className="pwa-close-btn" 
            onClick={() => {
              setIsDismissed(true);
              if (onClose) onClose();
            }}
            title="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {installSuccess ? (
          <div className="pwa-success-content text-center py-6">
            <CheckCircle className="w-12 h-12 text-emerald mx-auto mb-2 animate-bounce" />
            <h3 className="text-lg font-bold text-white">App Installed Successfully! 🎉</h3>
            <p className="text-sm text-muted mt-1">You can now open Room-305 anytime right from your home screen.</p>
          </div>
        ) : (
          <div className="pwa-install-body">
            <div className="pwa-features-grid">
              <div className="pwa-feature-pill">
                <span className="pwa-feature-icon">⚡</span>
                <span className="pwa-feature-text">Instant full-screen mode</span>
              </div>
              <div className="pwa-feature-pill">
                <span className="pwa-feature-icon">📱</span>
                <span className="pwa-feature-text">Home screen 1-tap launch</span>
              </div>
              <div className="pwa-feature-pill">
                <span className="pwa-feature-icon">🎧</span>
                <span className="pwa-feature-text">Audio speed & quiz player</span>
              </div>
              <div className="pwa-feature-pill">
                <span className="pwa-feature-icon">💾</span>
                <span className="pwa-feature-text">Fast offline-ready cache</span>
              </div>
            </div>

            {/* Android / Desktop Chrome 1-Click Install */}
            {deferredPrompt && (
              <div className="pwa-action-section mt-4">
                <button 
                  type="button" 
                  className="pwa-install-cta-btn" 
                  onClick={handleInstallClick}
                >
                  <Download className="w-5 h-5" />
                  <span>Add to Home Screen (Install App)</span>
                </button>
              </div>
            )}

            {/* iOS Safari Instructions */}
            {isIOS && !deferredPrompt && (
              <div className="pwa-ios-instructions mt-4">
                <div className="ios-instructions-title font-semibold text-sm mb-2 text-indigo-light">
                  How to install on iPhone / iPad (Safari):
                </div>
                <ol className="ios-steps-list">
                  <li className="ios-step-item">
                    <span className="step-num">1</span>
                    <span>Tap the <strong>Share button</strong> <Share2 className="w-4 h-4 inline text-indigo mx-1" /> at the bottom of Safari.</span>
                  </li>
                  <li className="ios-step-item">
                    <span className="step-num">2</span>
                    <span>Scroll down and select <strong>"Add to Home Screen"</strong> <Plus className="w-4 h-4 inline text-emerald mx-1" />.</span>
                  </li>
                  <li className="ios-step-item">
                    <span className="step-num">3</span>
                    <span>Tap <strong>"Add"</strong> in the top right corner. Done!</span>
                  </li>
                </ol>
              </div>
            )}

            {/* Fallback for other browsers (like desktop Firefox/Edge) */}
            {!deferredPrompt && !isIOS && (
              <div className="pwa-generic-instructions mt-4">
                <p className="text-sm text-muted">
                  To install, open this URL on your phone browser (Chrome, Edge, or Safari) and select <strong>"Add to Home Screen"</strong> or <strong>"Install App"</strong> in the browser menu.
                </p>
              </div>
            )}
          </div>
        )}

        <div className="pwa-modal-footer">
          <button 
            type="button" 
            className="pwa-dismiss-link" 
            onClick={() => {
              setIsDismissed(true);
              if (onClose) onClose();
            }}
          >
            Maybe later
          </button>
        </div>
      </div>
    </div>
  );
}
