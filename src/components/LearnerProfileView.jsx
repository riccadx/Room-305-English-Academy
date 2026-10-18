import React, { useState } from 'react';
import { RenderAvatar, CHARACTERS, ACCESSORIES, BG_COLORS } from './AvatarDesignerModal';
import { Flame, Star, BookOpen, Award, Sparkles, Edit, Check, Sun, Moon, Smartphone, ShieldCheck, RefreshCw } from './Icons';
import { dbService } from '../services/db';

const ENCOURAGING_PHRASES = [
  "Practice makes progress! Ready to learn today? 🚀",
  "Your English learning streak is on fire! 🔥",
  "Speak with confidence in Thursday's live class! 🎤",
  "Mistakes are proof that you are trying and improving! 💡",
  "Small daily steps lead to huge English fluency! 🌟",
  "Keep up the great work, superstar! ⭐",
  "Listening to native pronunciation trains your ear! 🎧",
  "You are 100% capable of speaking fluent English! 🎯"
];

const BADGES = [
  { id: 'b1', name: 'Curriculum Pioneer', icon: '🎓', desc: 'Enrolled in 30-Week Speaking Pathway', unlocked: true },
  { id: 'b2', name: 'Wise Mascot', icon: '🦉', desc: 'Customized your personalized learning mascot', unlocked: true },
  { id: 'b3', name: 'Streak Warrior', icon: '🔥', desc: 'Achieved 5+ consecutive study days', unlocked: true },
  { id: 'b4', name: 'Audio Sleuth', icon: '🎧', desc: 'Practiced listening with native audio clips', unlocked: true },
  { id: 'b5', name: 'Live Speaker', icon: '🎤', desc: 'Attended Thursday 30-min speaking session', unlocked: true },
  { id: 'b6', name: 'Quiz Master', icon: '⭐', desc: 'Completed daily quiz with high accuracy', unlocked: true },
];

export default function LearnerProfileView({
  currentUser,
  onUserChange,
  onOpenAvatar,
  onNavigateTab,
  isDayMode,
  onToggleTheme,
  onLogout,
  onOpenInstallPrompt
}) {
  const [speechIndex, setSpeechIndex] = useState(0);
  const [isEditingGoal, setIsEditingGoal] = useState(false);
  const [userGoal, setUserGoal] = useState(() => {
    return localStorage.getItem(`lingua_goal_${currentUser?.id}`) || "Speak English confidently in 30 weeks! 🚀";
  });

  const avatarConfig = currentUser?.avatarConfig || {
    character: 'owl',
    accessory: 'cap',
    bgGlow: 'indigo'
  };

  const currentCharacter = CHARACTERS.find(c => c.id === avatarConfig.character) || CHARACTERS[0];
  const currentAccessory = ACCESSORIES.find(a => a.id === avatarConfig.accessory) || ACCESSORIES[0];

  const handleNextSpeech = () => {
    setSpeechIndex((prev) => (prev + 1) % ENCOURAGING_PHRASES.length);
  };

  // Quick 1-tap animal mascot switcher directly on the profile page
  const handleQuickSelectAnimal = (charId) => {
    const newConfig = { ...avatarConfig, character: charId };
    const updated = dbService.updateUserAvatar(currentUser.id, newConfig);
    if (onUserChange) onUserChange(updated || currentUser);
  };

  // Quick 1-tap accessory switcher
  const handleQuickSelectAccessory = (accId) => {
    const newConfig = { ...avatarConfig, accessory: accId };
    const updated = dbService.updateUserAvatar(currentUser.id, newConfig);
    if (onUserChange) onUserChange(updated || currentUser);
  };

  const handleSaveGoal = () => {
    localStorage.setItem(`lingua_goal_${currentUser?.id}`, userGoal);
    setIsEditingGoal(false);
  };

  // Progress metrics
  const progress = dbService.getProgress(currentUser?.id || 'usr_learner_1');
  const completedLessonsCount = Object.keys(progress).filter(k => progress[k]?.completed).length;
  const currentXP = currentUser?.xp || 420;
  const nextLevelXP = 600;
  const xpPercent = Math.min(100, Math.round((currentXP / nextLevelXP) * 100));

  return (
    <div className="learner-profile-container animate-fadeIn">
      {/* Profile Header */}
      <div className="profile-header-card">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="role-badge learner-badge">🧑‍🎓 Student Profile</span>
            <span className="text-xs text-muted">Room-305 English Academy</span>
          </div>
          <div className="flex items-center gap-2">
            {onToggleTheme && (
              <button 
                type="button"
                className="profile-theme-toggle-btn"
                onClick={onToggleTheme}
                title={isDayMode ? "Switch to Night Mode" : "Switch to Day Mode"}
              >
                {isDayMode ? <Moon className="w-4 h-4 text-indigo" /> : <Sun className="w-4 h-4 text-amber" />}
              </button>
            )}
          </div>
        </div>

        {/* Mascot Cartoon Avatar Spotlight */}
        <div className="mascot-spotlight-section">
          {/* Cartoon Character Render Box with Pulse Ring */}
          <div className="mascot-avatar-wrapper" onClick={handleNextSpeech} title="Tap your mascot to hear them talk!">
            <div className="mascot-pulse-ring" />
            <RenderAvatar config={avatarConfig} size={135} className="profile-main-mascot" />
            <button 
              type="button" 
              className="mascot-edit-badge-btn"
              onClick={(e) => {
                e.stopPropagation();
                if (onOpenAvatar) onOpenAvatar();
              }}
              title="Open full Mascot Studio designer"
            >
              <Edit className="w-3.5 h-3.5 text-white" />
            </button>
          </div>

          {/* Interactive Talking Speech Bubble */}
          <div className="mascot-speech-bubble" onClick={handleNextSpeech}>
            <div className="speech-character-tag flex items-center gap-1">
              <span>{currentCharacter.name}</span>
              <span className="text-xs">says:</span>
              <Sparkles className="w-3 h-3 text-amber ml-auto" />
            </div>
            <p className="speech-text">
              "{ENCOURAGING_PHRASES[speechIndex]}"
            </p>
            <span className="speech-hint">💬 Tap mascot for new quote</span>
          </div>
        </div>

        {/* Student Name & Goal */}
        <div className="student-info-block text-center mt-3">
          <h2 className="student-profile-name">{currentUser?.name || 'Student Learner'}</h2>
          <div className="student-level-pill">
            <Star className="w-4 h-4 text-amber" />
            <span>Level 3: Rising English Scholar</span>
          </div>

          {/* XP Progress Bar */}
          <div className="xp-bar-container mt-3">
            <div className="xp-bar-header flex justify-between text-xs text-muted font-semibold mb-1">
              <span>Current Progress</span>
              <span>{currentXP} / {nextLevelXP} XP</span>
            </div>
            <div className="xp-track">
              <div className="xp-fill" style={{ width: `${xpPercent}%` }} />
            </div>
            <span className="text-xs text-muted block mt-1">
              {nextLevelXP - currentXP} XP until Level 4!
            </span>
          </div>

          {/* Goal Editor */}
          <div className="student-goal-box mt-3">
            {isEditingGoal ? (
              <div className="goal-input-group flex items-center gap-2">
                <input
                  type="text"
                  value={userGoal}
                  onChange={(e) => setUserGoal(e.target.value)}
                  placeholder="Set your English goal..."
                  className="goal-input flex-1"
                  maxLength={60}
                />
                <button type="button" className="goal-save-btn" onClick={handleSaveGoal}>
                  <Check className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <div className="goal-display flex items-center justify-center gap-1.5 cursor-pointer" onClick={() => setIsEditingGoal(true)}>
                <span className="goal-quote">“{userGoal}”</span>
                <Edit className="w-3.5 h-3.5 text-muted hover:text-white" />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Quick Cartoon Mascot Switcher (Horizontal Carousel) */}
      <div className="profile-card-section mt-4">
        <div className="section-title-row flex items-center justify-between mb-2">
          <div className="flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-purple" />
            <h3 className="section-title">Quick Mascot Switcher</h3>
          </div>
          <button 
            type="button" 
            className="text-xs text-indigo-light font-semibold hover:underline"
            onClick={onOpenAvatar}
          >
            Full Studio 🎨
          </button>
        </div>
        <p className="text-xs text-muted mb-3">Tap any cartoon animal to change your mascot instantly:</p>
        
        {/* Animal Mascots Strip */}
        <div className="mascot-carousel-strip">
          {CHARACTERS.map((char) => {
            const isSelected = avatarConfig.character === char.id;
            return (
              <button
                key={char.id}
                type="button"
                className={`mascot-chip ${isSelected ? 'selected' : ''}`}
                onClick={() => handleQuickSelectAnimal(char.id)}
              >
                <span className="mascot-chip-emoji">{char.icon}</span>
                <span className="mascot-chip-name">{char.name.split(' ')[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Accessories Strip */}
        <div className="accessory-carousel-strip mt-3">
          {ACCESSORIES.map((acc) => {
            const isSelected = avatarConfig.accessory === acc.id;
            return (
              <button
                key={acc.id}
                type="button"
                className={`accessory-chip ${isSelected ? 'selected' : ''}`}
                onClick={() => handleQuickSelectAccessory(acc.id)}
              >
                <span>{acc.icon}</span>
                <span>{acc.name.split(' ')[0]}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Gamified Learning Stats Grid */}
      <div className="profile-card-section mt-4">
        <h3 className="section-title mb-3 flex items-center gap-1.5">
          <Award className="w-4 h-4 text-emerald" />
          <span>Learning Milestones</span>
        </h3>

        <div className="profile-stats-grid">
          <div className="profile-stat-box streak-stat">
            <Flame className="w-6 h-6 text-amber mb-1" />
            <div className="stat-number">{currentUser?.streak || 5} Days</div>
            <div className="stat-label">Active Streak</div>
          </div>

          <div className="profile-stat-box xp-stat">
            <Star className="w-6 h-6 text-yellow mb-1" />
            <div className="stat-number">{currentXP} XP</div>
            <div className="stat-label">Total Experience</div>
          </div>

          <div className="profile-stat-box lesson-stat">
            <BookOpen className="w-6 h-6 text-indigo mb-1" />
            <div className="stat-number">{completedLessonsCount} Lessons</div>
            <div className="stat-label">Completed Units</div>
          </div>

          <div className="profile-stat-box speaking-stat">
            <span className="text-2xl mb-1">🎤</span>
            <div className="stat-number">30 Min</div>
            <div className="stat-label">Weekly Speaking</div>
          </div>
        </div>
      </div>

      {/* Unlocked Cartoon Badges */}
      <div className="profile-card-section mt-4">
        <h3 className="section-title mb-3 flex items-center gap-1.5">
          <span>🏆</span>
          <span>Earned Mascot Badges</span>
        </h3>

        <div className="badges-grid">
          {BADGES.map((b) => (
            <div key={b.id} className="badge-item-card">
              <div className="badge-icon-bubble">{b.icon}</div>
              <div className="badge-details">
                <div className="badge-title font-bold text-sm text-white flex items-center gap-1">
                  <span>{b.name}</span>
                  <Check className="w-3.5 h-3.5 text-emerald inline" />
                </div>
                <div className="badge-desc text-xs text-muted">{b.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Action Navigation Buttons */}
      <div className="profile-actions-section mt-4">
        <button 
          type="button" 
          className="profile-nav-action-btn primary"
          onClick={() => onNavigateTab && onNavigateTab('pathway')}
        >
          <span>🗺️ Continue 30-Week Pathway</span>
        </button>

        <button 
          type="button" 
          className="profile-nav-action-btn secondary"
          onClick={() => onNavigateTab && onNavigateTab('progress')}
        >
          <span>📜 View Certificate & Report</span>
        </button>

        {onOpenInstallPrompt && (
          <button 
            type="button" 
            className="profile-nav-action-btn pwa"
            onClick={onOpenInstallPrompt}
          >
            <Smartphone className="w-4 h-4 text-emerald" />
            <span>📲 Install App to Home Screen</span>
          </button>
        )}

        <button 
          type="button" 
          className="profile-nav-action-btn logout"
          onClick={onLogout}
        >
          <span>Sign Out / Switch Account</span>
        </button>
      </div>
    </div>
  );
}
