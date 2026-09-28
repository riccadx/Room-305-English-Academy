import React from 'react';

export default function BackgroundCartoons() {
  return (
    <div className="background-cartoons-layer pointer-events-none">
      {/* Cartoon 1: Oliver the Study Fox (Top Left) */}
      <div className="bg-cartoon-wrapper cartoon-fox float-anim-1" title="Oliver the Study Fox">
        <div className="cartoon-speech-tag">Reading & Grammar! 📖</div>
        <svg width="100" height="100" viewBox="0 0 120 120" className="cartoon-svg drop-shadow-md">
          {/* Cloud Base */}
          <path d="M 20 85 Q 10 70 30 65 Q 40 50 65 55 Q 80 45 95 60 Q 110 70 100 85 Z" fill="rgba(255,255,255,0.15)" />
          {/* Fox Body */}
          <ellipse cx="60" cy="65" rx="22" ry="24" fill="#f97316" />
          <ellipse cx="60" cy="68" rx="14" ry="16" fill="#ffffff" />
          {/* Head & Ears */}
          <polygon points="38,35 48,15 54,32" fill="#ea580c" />
          <polygon points="42,32 48,20 50,30" fill="#ffedd5" />
          <polygon points="82,35 72,15 66,32" fill="#ea580c" />
          <polygon points="78,32 72,20 70,30" fill="#ffedd5" />
          <polygon points="35,40 85,40 60,68" fill="#f97316" />
          <polygon points="42,42 78,42 60,64" fill="#ffffff" />
          {/* Eyes with Glasses */}
          <circle cx="50" cy="46" r="7" fill="none" stroke="#1e1b4b" strokeWidth="2" />
          <circle cx="70" cy="46" r="7" fill="none" stroke="#1e1b4b" strokeWidth="2" />
          <line x1="57" y1="46" x2="63" y2="46" stroke="#1e1b4b" strokeWidth="2" />
          <circle cx="50" cy="46" r="3" fill="#0f172a" />
          <circle cx="70" cy="46" r="3" fill="#0f172a" />
          {/* Nose */}
          <circle cx="60" cy="58" r="3.5" fill="#1e293b" />
          {/* Book */}
          <rect x="44" y="68" width="32" height="20" rx="3" fill="#3b82f6" stroke="#1d4ed8" strokeWidth="1.5" />
          <line x1="60" y1="68" x2="60" y2="88" stroke="#ffffff" strokeWidth="2" />
        </svg>
      </div>

      {/* Cartoon 2: Mia the Audio Cat (Top Right) */}
      <div className="bg-cartoon-wrapper cartoon-cat float-anim-2" title="Mia the Audio Cat">
        <div className="cartoon-speech-tag">Listening Practice! 🎧</div>
        <svg width="100" height="100" viewBox="0 0 120 120" className="cartoon-svg drop-shadow-md">
          {/* Floating Notes */}
          <text x="15" y="30" fill="#ec4899" fontSize="14" className="note-float-1">🎵</text>
          <text x="85" y="25" fill="#8b5cf6" fontSize="16" className="note-float-2">🎶</text>
          {/* Cat Body */}
          <ellipse cx="60" cy="70" rx="24" ry="22" fill="#a855f7" />
          <ellipse cx="60" cy="73" rx="15" ry="14" fill="#f3e8ff" />
          {/* Head & Ears */}
          <polygon points="36,45 42,20 54,40" fill="#9333ea" />
          <polygon points="40,42 43,26 50,38" fill="#f472b6" />
          <polygon points="84,45 78,20 66,40" fill="#9333ea" />
          <polygon points="80,42 77,26 70,38" fill="#f472b6" />
          <circle cx="60" cy="52" r="22" fill="#a855f7" />
          {/* Cute Eyes & Whisker */}
          <path d="M 46 50 Q 52 44 54 50" fill="none" stroke="#1e1b4b" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M 66 50 Q 68 44 74 50" fill="none" stroke="#1e1b4b" strokeWidth="2.5" strokeLinecap="round" />
          <polygon points="57,56 63,56 60,60" fill="#f472b6" />
          {/* Big Pink Headphones */}
          <path d="M 34 50 A 28 28 0 0 1 86 50" fill="none" stroke="#ec4899" strokeWidth="6" strokeLinecap="round" />
          <rect x="28" y="42" width="10" height="18" rx="4" fill="#f43f5e" />
          <rect x="82" y="42" width="10" height="18" rx="4" fill="#f43f5e" />
        </svg>
      </div>

      {/* Cartoon 3: Leo the Speaking Panda (Bottom Left) */}
      <div className="bg-cartoon-wrapper cartoon-panda float-anim-3" title="Leo the Speaking Panda">
        <div className="cartoon-speech-tag">Thursday Live Class! 🎙️</div>
        <svg width="100" height="100" viewBox="0 0 120 120" className="cartoon-svg drop-shadow-md">
          {/* Panda Head */}
          <circle cx="60" cy="55" r="25" fill="#ffffff" stroke="#1e293b" strokeWidth="2" />
          {/* Ears */}
          <circle cx="38" cy="36" r="10" fill="#0f172a" />
          <circle cx="82" cy="36" r="10" fill="#0f172a" />
          {/* Black Eye Patches */}
          <ellipse cx="48" cy="52" rx="8" ry="10" fill="#0f172a" transform="rotate(-15 48 52)" />
          <ellipse cx="72" cy="52" rx="8" ry="10" fill="#0f172a" transform="rotate(15 72 52)" />
          <circle cx="50" cy="50" r="3" fill="#ffffff" />
          <circle cx="70" cy="50" r="3" fill="#ffffff" />
          {/* Nose & Smile */}
          <ellipse cx="60" cy="60" rx="4" ry="3" fill="#0f172a" />
          <path d="M 54 65 Q 60 70 66 65" fill="none" stroke="#0f172a" strokeWidth="2" strokeLinecap="round" />
          {/* Body & Graduation Cap */}
          <ellipse cx="60" cy="88" rx="22" ry="18" fill="#0f172a" />
          <polygon points="60,18 90,28 60,38 30,28" fill="#1e1b4b" stroke="#fbbf24" strokeWidth="1.5" />
          <rect x="52" y="28" width="16" height="8" fill="#312e81" />
          {/* Microphone */}
          <rect x="76" y="65" width="6" height="20" rx="2" fill="#64748b" />
          <circle cx="79" cy="62" r="7" fill="#fbbf24" stroke="#d97706" strokeWidth="1" />
        </svg>
      </div>

      {/* Cartoon 4: Robo-Byte Japanese Help Assistant (Bottom Right) */}
      <div className="bg-cartoon-wrapper cartoon-robot float-anim-4" title="Robo Assistant">
        <div className="cartoon-speech-tag">💡 ヒント Help Active!</div>
        <svg width="100" height="100" viewBox="0 0 120 120" className="cartoon-svg drop-shadow-md">
          {/* Antenna */}
          <line x1="60" y1="15" x2="60" y2="30" stroke="#06b6d4" strokeWidth="3" />
          <circle cx="60" cy="12" r="5" fill="#f59e0b" className="pulse-glow-dot" />
          {/* Robot Head */}
          <rect x="36" y="30" width="48" height="34" rx="8" fill="#0891b2" stroke="#22d3ee" strokeWidth="2" />
          {/* Digital Screen Face */}
          <rect x="42" y="36" width="36" height="22" rx="5" fill="#0f172a" />
          {/* Glowing Digital Eyes */}
          <circle cx="50" cy="47" r="4" fill="#22d3ee" />
          <circle cx="70" cy="47" r="4" fill="#22d3ee" />
          <path d="M 54 52 L 66 52" stroke="#22d3ee" strokeWidth="2" strokeLinecap="round" />
          {/* Body */}
          <rect x="40" y="68" width="40" height="28" rx="6" fill="#06b6d4" stroke="#22d3ee" strokeWidth="2" />
          <circle cx="60" cy="82" r="7" fill="#fbbf24" />
          {/* Holding Japanese Flag */}
          <line x1="84" y1="70" x2="105" y2="50" stroke="#94a3b8" strokeWidth="2.5" />
          <rect x="94" y="44" width="18" height="12" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1" />
          <circle cx="103" cy="50" r="4" fill="#ef4444" />
        </svg>
      </div>
    </div>
  );
}
