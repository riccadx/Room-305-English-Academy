import React, { useState, useEffect } from 'react';

const MASCOT_QUOTES = [
  "Hello! Ready to practice English today? 🎙️",
  "Tip: 15 minutes of daily listening builds confidence! 🎧",
  "Don't worry about mistakes—they help you learn! 🌟",
  "Thursday 30-min live online speaking session awaits! 🗓️",
  "Try English first, use Japanese help whenever needed! 💡",
  "You've got this! がんばってください! 🚀",
  "Reading aloud boosts your pronunciation speed! 📖",
  "Click me anytime to get daily English inspiration! 🦉"
];

export default function EnglishMascot({ isFocusedOnPassword, isFocusedOnEmail, role = 'learner' }) {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [showSpeech, setShowSpeech] = useState(true);
  const [isJumping, setIsJumping] = useState(false);
  const [blink, setBlink] = useState(false);

  // Periodic automatic blinking
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setBlink(true);
      setTimeout(() => setBlink(false), 200);
    }, 3500);
    return () => clearInterval(blinkInterval);
  }, []);

  // Periodic auto quote change if not clicked recently
  useEffect(() => {
    const quoteInterval = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % MASCOT_QUOTES.length);
    }, 8000);
    return () => clearInterval(quoteInterval);
  }, []);

  const handleMascotClick = () => {
    setIsJumping(true);
    setShowSpeech(true);
    setQuoteIndex((prev) => (prev + 1) % MASCOT_QUOTES.length);
    setTimeout(() => setIsJumping(false), 600);
  };

  return (
    <div className="english-mascot-wrapper relative flex flex-col items-center">
      {/* Floating Animated Speech Bubble */}
      {showSpeech && (
        <div className={`mascot-speech-bubble ${isJumping ? 'bounce-pop' : 'fade-in-up'}`}>
          <span className="quote-icon">💬</span>
          <span className="quote-text">{MASCOT_QUOTES[quoteIndex]}</span>
          <button 
            type="button" 
            className="speech-close-btn"
            onClick={(e) => { e.stopPropagation(); setShowSpeech(false); }}
          >
            ×
          </button>
        </div>
      )}

      {/* Interactive Animated Mascot Character Container */}
      <div 
        className={`mascot-character-container cursor-pointer select-none transition-transform duration-300 ${
          isJumping ? 'mascot-jump-anim' : 'mascot-hover-idle'
        }`}
        onClick={handleMascotClick}
        title="Click Eddie the English Owl to talk & play!"
      >
        {/* Floating Ambient Sparkles & ABC Letters */}
        <div className="floating-letters-box">
          <span className="float-abc float-a">A</span>
          <span className="float-abc float-b">B</span>
          <span className="float-abc float-c">C</span>
          <span className="float-abc float-note">🎵</span>
          <span className="float-abc float-sparkle">✨</span>
        </div>

        {/* SVG Mascot Character: Eddie the English Owl */}
        <svg width="140" height="140" viewBox="0 0 160 160" className="mascot-svg shadow-glow">
          <defs>
            <linearGradient id="owlBodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6366f1" />
              <stop offset="100%" stopColor="#4338ca" />
            </linearGradient>
            <linearGradient id="owlBellyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#e0e7ff" />
            </linearGradient>
            <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fbbf24" />
              <stop offset="100%" stopColor="#d97706" />
            </linearGradient>
            <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Shadow underneath */}
          <ellipse cx="80" cy="148" rx="42" ry="8" fill="rgba(0,0,0,0.25)" className="mascot-shadow-ellipse" />

          {/* Main Body */}
          <ellipse cx="80" cy="90" rx="46" ry="50" fill="url(#owlBodyGrad)" stroke="#818cf8" strokeWidth="2" />

          {/* Cute Ears / Feathers */}
          <polygon points="42,48 55,20 68,42" fill="#4f46e5" />
          <polygon points="118,48 105,20 92,42" fill="#4f46e5" />

          {/* White Belly */}
          <ellipse cx="80" cy="98" rx="30" ry="34" fill="url(#owlBellyGrad)" />
          {/* Belly Feather Pattern */}
          <path d="M 70 82 Q 80 88 90 82 M 66 94 Q 80 102 94 94 M 70 108 Q 80 114 90 108" 
                stroke="#818cf8" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.6" />

          {/* Big Expressive Eye Sockets */}
          <circle cx="58" cy="65" r="19" fill="#ffffff" stroke="#c7d2fe" strokeWidth="2" />
          <circle cx="102" cy="65" r="19" fill="#ffffff" stroke="#c7d2fe" strokeWidth="2" />

          {/* EYE PUPILS - Interactive Eye Movements */}
          {isFocusedOnPassword ? (
            /* Shy / Covered Eyes when password is focused! */
            <g className="shy-eyes">
              {/* Cool sunglasses or blushing covered hands */}
              <rect x="36" y="52" width="88" height="24" rx="12" fill="#1e1b4b" stroke="#818cf8" strokeWidth="2" />
              <line x1="36" y1="64" x2="124" y2="64" stroke="#fbbf24" strokeWidth="2" />
              <text x="80" y="69" textAnchor="middle" fill="#fbbf24" fontSize="12" fontWeight="bold">🙈 SHY</text>
            </g>
          ) : (
            <g className="normal-eyes">
              {/* Left Pupil */}
              <circle 
                cx={isFocusedOnEmail ? "58" : "59"} 
                cy={isFocusedOnEmail ? "69" : (blink ? "65" : "64")} 
                r={blink ? "1" : "8.5"} 
                fill="#0f172a" 
                className="transition-all duration-200"
              />
              {!blink && <circle cx={isFocusedOnEmail ? "60" : "61"} cy="61" r="3" fill="#ffffff" />}

              {/* Right Pupil */}
              <circle 
                cx={isFocusedOnEmail ? "102" : "101"} 
                cy={isFocusedOnEmail ? "69" : (blink ? "65" : "64")} 
                r={blink ? "1" : "8.5"} 
                fill="#0f172a" 
                className="transition-all duration-200"
              />
              {!blink && <circle cx={isFocusedOnEmail ? "104" : "103"} cy="61" r="3" fill="#ffffff" />}
            </g>
          )}

          {/* Beak */}
          <polygon points="74,74 86,74 80,88" fill="url(#goldGrad)" stroke="#b45309" strokeWidth="1" />

          {/* Graduation Cap / Educator Hat */}
          <g transform="translate(0, -5)">
            <polygon points="80,10 120,24 80,38 40,24" fill="#1e1b4b" stroke="#fbbf24" strokeWidth="2" />
            <rect x="68" y="24" width="24" height="12" fill="#312e81" rx="2" />
            {/* Tassel */}
            <path d="M 80 24 L 115 32 L 118 48" stroke="#fbbf24" strokeWidth="2.5" fill="none" strokeLinecap="round" />
            <circle cx="118" cy="50" r="3" fill="#fbbf24" />
          </g>

          {/* Cute Headphones (English Listening Theme) */}
          <path d="M 36 65 A 46 46 0 0 1 124 65" fill="none" stroke="#ec4899" strokeWidth="5" strokeLinecap="round" />
          <rect x="28" y="55" width="12" height="22" rx="6" fill="#f43f5e" stroke="#ffffff" strokeWidth="1.5" />
          <rect x="120" y="55" width="12" height="22" rx="6" fill="#f43f5e" stroke="#ffffff" strokeWidth="1.5" />

          {/* Wings Holding Objects */}
          {role === 'learner' ? (
            /* Holding English Book for Learner */
            <g transform="translate(48, 100)">
              <rect x="0" y="0" width="34" height="22" rx="3" fill="#10b981" stroke="#047857" strokeWidth="1.5" />
              <line x1="17" y1="0" x2="17" y2="22" stroke="#ffffff" strokeWidth="2" />
              <text x="8" y="15" fill="#ffffff" fontSize="9" fontWeight="bold">ABC</text>
            </g>
          ) : (
            /* Holding Teacher Badge & Pointer for Educator */
            <g transform="translate(48, 98)">
              <rect x="0" y="0" width="34" height="22" rx="3" fill="#f59e0b" stroke="#b45309" strokeWidth="1.5" />
              <text x="5" y="15" fill="#ffffff" fontSize="9" fontWeight="bold">TEACH</text>
            </g>
          )}

          {/* Feet */}
          <path d="M 64 138 L 68 146 M 68 138 L 68 146 M 72 138 L 68 146" stroke="#f59e0b" strokeWidth="3" strokeLinecap="round" />
          <path d="M 88 138 L 92 146 M 92 138 L 92 146 M 96 138 L 92 146" stroke="#f59e0b" strokeWidth="3" strokeLinecap="round" />
        </svg>

        {/* Action Prompt */}
        <div className="mascot-click-hint">
          <span className="pulse-dot"></span> Click to play with Eddie!
        </div>
      </div>
    </div>
  );
}
