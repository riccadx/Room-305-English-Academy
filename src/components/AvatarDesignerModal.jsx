import React, { useState } from 'react';
import { Sparkles, Check, X, GraduationCap, Headphones, Award, Star } from './Icons';

export const CHARACTERS = [
  { id: 'owl', name: 'Eddie Owl 🦉', color: '#6366f1' },
  { id: 'fox', name: 'Oliver Fox 🦊', color: '#f97316' },
  { id: 'cat', name: 'Mia Cat 🐱', color: '#a855f7' },
  { id: 'panda', name: 'Leo Panda 🐼', color: '#0f172a' },
  { id: 'robot', name: 'Robo-Byte 🤖', color: '#06b6d4' }
];

export const ACCESSORIES = [
  { id: 'cap', name: 'Graduation Cap 🎓', icon: '🎓' },
  { id: 'headphones', name: 'Headphones 🎧', icon: '🎧' },
  { id: 'glasses', name: 'Smart Glasses 👓', icon: '👓' },
  { id: 'crown', name: 'Royal Crown 👑', icon: '👑' },
  { id: 'star', name: 'Star Badge 🌟', icon: '🌟' }
];

export const BG_COLORS = [
  { id: 'indigo', name: 'Indigo', grad: 'linear-gradient(135deg, #6366f1, #4338ca)' },
  { id: 'emerald', name: 'Emerald', grad: 'linear-gradient(135deg, #10b981, #047857)' },
  { id: 'amber', name: 'Amber', grad: 'linear-gradient(135deg, #f59e0b, #b45309)' },
  { id: 'rose', name: 'Rose', grad: 'linear-gradient(135deg, #ec4899, #be185d)' },
  { id: 'sky', name: 'Sky Blue', grad: 'linear-gradient(135deg, #0ea5e9, #0369a1)' }
];

export function RenderAvatar({ config, size = 100, className = "" }) {
  const { character = 'owl', accessory = 'cap', bgGlow = 'indigo' } = config || {};
  const currentBg = BG_COLORS.find(b => b.id === bgGlow)?.grad || BG_COLORS[0].grad;

  return (
    <div 
      className={`avatar-render-box relative flex items-center justify-center rounded-full overflow-hidden shadow-lg ${className}`}
      style={{ width: `${size}px`, height: `${size}px`, background: currentBg }}
    >
      <svg width={size} height={size} viewBox="0 0 120 120">
        {/* CHARACTER BASE */}
        {character === 'owl' && (
          <g transform="translate(0, 5)">
            <ellipse cx="60" cy="65" rx="36" ry="38" fill="#4f46e5" stroke="#818cf8" strokeWidth="2" />
            <ellipse cx="60" cy="70" rx="22" ry="24" fill="#ffffff" />
            <circle cx="45" cy="48" r="14" fill="#ffffff" />
            <circle cx="75" cy="48" r="14" fill="#ffffff" />
            <circle cx="45" cy="48" r="6" fill="#0f172a" />
            <circle cx="75" cy="48" r="6" fill="#0f172a" />
            <polygon points="55,56 65,56 60,66" fill="#fbbf24" />
          </g>
        )}

        {character === 'fox' && (
          <g transform="translate(0, 5)">
            <ellipse cx="60" cy="68" rx="34" ry="36" fill="#f97316" />
            <ellipse cx="60" cy="72" rx="20" ry="22" fill="#ffffff" />
            <polygon points="28,40 38,15 46,36" fill="#ea580c" />
            <polygon points="92,40 82,15 74,36" fill="#ea580c" />
            <circle cx="46" cy="52" r="5" fill="#0f172a" />
            <circle cx="74" cy="52" r="5" fill="#0f172a" />
            <circle cx="60" cy="64" r="4" fill="#1e293b" />
          </g>
        )}

        {character === 'cat' && (
          <g transform="translate(0, 5)">
            <polygon points="28,40 36,18 48,36" fill="#9333ea" />
            <polygon points="92,40 84,18 72,36" fill="#9333ea" />
            <circle cx="60" cy="60" r="34" fill="#a855f7" />
            <path d="M 44 56 Q 50 50 52 56" fill="none" stroke="#0f172a" strokeWidth="2.5" />
            <path d="M 68 56 Q 70 50 76 56" fill="none" stroke="#0f172a" strokeWidth="2.5" />
            <polygon points="57,62 63,62 60,66" fill="#f472b6" />
          </g>
        )}

        {character === 'panda' && (
          <g transform="translate(0, 5)">
            <circle cx="60" cy="60" r="34" fill="#ffffff" stroke="#1e293b" strokeWidth="2" />
            <circle cx="34" cy="35" r="11" fill="#0f172a" />
            <circle cx="86" cy="35" r="11" fill="#0f172a" />
            <ellipse cx="46" cy="56" rx="9" ry="11" fill="#0f172a" transform="rotate(-15 46 56)" />
            <ellipse cx="74" cy="56" rx="9" ry="11" fill="#0f172a" transform="rotate(15 74 56)" />
            <circle cx="48" cy="54" r="3.5" fill="#ffffff" />
            <circle cx="72" cy="54" r="3.5" fill="#ffffff" />
            <ellipse cx="60" cy="66" rx="4" ry="3" fill="#0f172a" />
          </g>
        )}

        {character === 'robot' && (
          <g transform="translate(0, 5)">
            <line x1="60" y1="18" x2="60" y2="34" stroke="#06b6d4" strokeWidth="3" />
            <circle cx="60" cy="15" r="5" fill="#f59e0b" />
            <rect x="30" y="34" width="60" height="46" rx="10" fill="#0891b2" stroke="#22d3ee" strokeWidth="2" />
            <rect x="38" y="42" width="44" height="28" rx="6" fill="#0f172a" />
            <circle cx="48" cy="56" r="5" fill="#22d3ee" />
            <circle cx="72" cy="56" r="5" fill="#22d3ee" />
          </g>
        )}

        {/* ACCESSORY OVERLAYS */}
        {accessory === 'cap' && (
          <g transform="translate(0, -5)">
            <polygon points="60,12 96,24 60,36 24,24" fill="#1e1b4b" stroke="#fbbf24" strokeWidth="2" />
            <rect x="48" y="24" width="24" height="10" fill="#312e81" rx="2" />
            <path d="M 60 24 L 92 30 L 94 44" stroke="#fbbf24" strokeWidth="2" fill="none" />
          </g>
        )}

        {accessory === 'headphones' && (
          <g>
            <path d="M 24 54 A 36 36 0 0 1 96 54" fill="none" stroke="#ec4899" strokeWidth="6" strokeLinecap="round" />
            <rect x="18" y="46" width="12" height="22" rx="5" fill="#f43f5e" />
            <rect x="90" y="46" width="12" height="22" rx="5" fill="#f43f5e" />
          </g>
        )}

        {accessory === 'glasses' && (
          <g transform="translate(0, 2)">
            <rect x="32" y="42" width="24" height="18" rx="5" fill="none" stroke="#fbbf24" strokeWidth="3" />
            <rect x="64" y="42" width="24" height="18" rx="5" fill="none" stroke="#fbbf24" strokeWidth="3" />
            <line x1="56" y1="51" x2="64" y2="51" stroke="#fbbf24" strokeWidth="3" />
          </g>
        )}

        {accessory === 'crown' && (
          <g transform="translate(0, -6)">
            <polygon points="35,32 45,15 60,28 75,15 85,32" fill="#f59e0b" stroke="#b45309" strokeWidth="1.5" />
            <circle cx="45" cy="15" r="3" fill="#ef4444" />
            <circle cx="60" cy="28" r="3" fill="#3b82f6" />
            <circle cx="75" cy="15" r="3" fill="#ef4444" />
          </g>
        )}

        {accessory === 'star' && (
          <g transform="translate(70, 70)">
            <polygon points="12,0 15,8 24,9 17,15 19,24 12,19 5,24 7,15 0,9 9,8" fill="#fbbf24" stroke="#d97706" strokeWidth="1" />
          </g>
        )}
      </svg>
    </div>
  );
}

export default function AvatarDesignerModal({ user, onSave, onClose }) {
  const [character, setCharacter] = useState(user?.avatarConfig?.character || 'owl');
  const [accessory, setAccessory] = useState(user?.avatarConfig?.accessory || 'cap');
  const [bgGlow, setBgGlow] = useState(user?.avatarConfig?.bgGlow || 'indigo');
  const [motto, setMotto] = useState(user?.avatarConfig?.motto || 'Ready to learn English! 🚀');

  const avatarConfig = { character, accessory, bgGlow, motto };

  const handleSave = () => {
    onSave(avatarConfig);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fadeIn">
      <div className="avatar-designer-card max-w-lg w-full bg-slate-900 border border-slate-700/60 rounded-3xl p-6 shadow-2xl relative overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between mb-4 border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-amber" />
            <h2 className="text-xl font-extrabold text-white">Design Your Cartoon Avatar!</h2>
          </div>
          {onClose && (
            <button 
              onClick={onClose} 
              className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Live Preview Display */}
        <div className="flex flex-col items-center justify-center my-4 py-4 bg-slate-950/60 rounded-2xl border border-slate-800/80">
          <RenderAvatar config={avatarConfig} size={110} />
          <h3 className="mt-3 text-lg font-bold text-white">{user?.name || 'Student'}</h3>
          <p className="text-xs font-semibold text-indigo-400 mt-1 italic">"{motto}"</p>
        </div>

        {/* Controls Sections */}
        <div className="space-y-4 max-h-[320px] overflow-y-auto pr-1 custom-scrollbar">
          {/* 1. Select Cartoon Character */}
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
              1. Choose Character Base
            </label>
            <div className="grid grid-cols-5 gap-2">
              {CHARACTERS.map(c => (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => setCharacter(c.id)}
                  className={`flex flex-col items-center justify-center p-2 rounded-xl border text-xs font-bold transition ${
                    character === c.id 
                      ? 'bg-indigo-600/30 border-indigo-500 text-white shadow-md' 
                      : 'bg-slate-800/50 border-slate-700/50 text-slate-400 hover:bg-slate-800 hover:text-white'
                  }`}
                >
                  <span className="text-lg mb-1">{c.name.split(' ').pop()}</span>
                  <span className="text-[10px] truncate">{c.name.split(' ')[0]}</span>
                </button>
              ))}
            </div>
          </div>

          {/* 2. Select Accessory / Hat */}
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
              2. Choose Hat or Accessory
            </label>
            <div className="grid grid-cols-5 gap-2">
              {ACCESSORIES.map(a => (
                <button
                  key={a.id}
                  type="button"
                  onClick={() => setAccessory(a.id)}
                  className={`flex flex-col items-center justify-center p-2 rounded-xl border text-xs font-bold transition ${
                    accessory === a.id 
                      ? 'bg-amber-600/30 border-amber-500 text-white shadow-md' 
                      : 'bg-slate-800/50 border-slate-700/50 text-slate-400 hover:bg-slate-800 hover:text-white'
                  }`}
                >
                  <span className="text-lg mb-1">{a.icon}</span>
                  <span className="text-[10px] truncate">{a.name.split(' ')[0]}</span>
                </button>
              ))}
            </div>
          </div>

          {/* 3. Background Color */}
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
              3. Choose Background Aura
            </label>
            <div className="flex gap-2">
              {BG_COLORS.map(bg => (
                <button
                  key={bg.id}
                  type="button"
                  onClick={() => setBgGlow(bg.id)}
                  className={`flex-1 py-2 rounded-xl border text-xs font-bold transition flex items-center justify-center gap-1 ${
                    bgGlow === bg.id 
                      ? 'border-white text-white shadow-lg scale-105' 
                      : 'border-transparent text-slate-300 opacity-70 hover:opacity-100'
                  }`}
                  style={{ background: bg.grad }}
                >
                  {bgGlow === bg.id && <Check className="w-3.5 h-3.5" />}
                  {bg.name}
                </button>
              ))}
            </div>
          </div>

          {/* 4. Custom Motto */}
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
              4. Learning Motto / Bio
            </label>
            <input
              type="text"
              value={motto}
              onChange={(e) => setMotto(e.target.value)}
              className="w-full bg-slate-950 border border-slate-700 text-white rounded-xl px-3 py-2 text-sm focus:border-indigo-500 outline-none"
              placeholder="e.g. Practicing English 15 mins daily!"
              maxLength={60}
            />
          </div>
        </div>

        {/* Action Button */}
        <button
          type="button"
          onClick={handleSave}
          className="w-full mt-5 py-3 rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-amber-500 hover:brightness-110 text-white font-extrabold text-base flex items-center justify-center gap-2 shadow-lg shadow-indigo-500/25 transition active:scale-[0.98]"
        >
          <Sparkles className="w-5 h-5" /> Save Avatar & Enter Portal
        </button>
      </div>
    </div>
  );
}
