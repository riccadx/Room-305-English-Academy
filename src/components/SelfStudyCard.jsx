// src/components/SelfStudyCard.jsx
import React, { useState, useEffect } from 'react';
import { dbService, skillService } from '../services/db';
import { Headphones, FileText, Edit, Video, CheckCircle, Sparkles, Star, Flame, Award, ChevronRight } from './Icons';
import HelpButton from './HelpButton';

/**
 * SelfStudyCard
 * Comprehensive Duolingo-style learning card for Monday/Wednesday Self-Study
 * and Tuesday/Thursday Speaking preparation with interactive skill XP and role assignments.
 */
export default function SelfStudyCard({ 
  lesson, 
  dayType = "monday", // 'monday' | 'wednesday' | 'tuesday' | 'thursday'
  weekNumber = 1,
  onNavigateSpeaking 
}) {
  const currentUser = dbService.getCurrentUser();
  const userId = currentUser?.id || 'usr_learner_1';

  // Completion states for the 3 core pillars
  const [completed, setCompleted] = useState({
    listening: false,
    reading: false,
    writing: false
  });

  const [skillScores, setSkillScores] = useState({
    listening: 0,
    reading: 0,
    writing: 0
  });

  const [speakingPrepNotes, setSpeakingPrepNotes] = useState('');
  const [isSavedNotes, setIsSavedNotes] = useState(false);
  const [selectedRole, setSelectedRole] = useState('Role A');
  const [activeTab, setActiveTab] = useState('listening'); // 'listening' | 'reading' | 'writing' | 'roles'
  const [vocabList, setVocabList] = useState([]);
  const [showVocabDrawer, setShowVocabDrawer] = useState(false);
  const [xpToast, setXpToast] = useState(null);

  // Load initial skill scores & vocabulary
  useEffect(() => {
    if (userId) {
      const scores = skillService.getSkillScores(userId);
      setSkillScores(scores);
    }

    // Load vocabulary for current week
    const cachedVocab = dbService.getVocabularyForWeek(weekNumber);
    if (cachedVocab && cachedVocab.length > 0) {
      setVocabList(cachedVocab);
    } else {
      dbService.loadVocabularyCache().then(res => {
        if (res && res[weekNumber]) {
          setVocabList(res[weekNumber]);
        }
      });
    }

    // Load saved speaking notes if any
    const saved = localStorage.getItem(`speaking_prep_${userId}_w${weekNumber}_${dayType}`);
    if (saved) setSpeakingPrepNotes(saved);
  }, [userId, weekNumber, dayType]);

  const handleCompletePillar = (pillar) => {
    if (!userId || completed[pillar]) return;
    const XP_REWARD = 15;
    const newScore = skillService.updateSkillScore(userId, pillar, XP_REWARD);
    setSkillScores(prev => ({ ...prev, [pillar]: newScore }));
    setCompleted(prev => ({ ...prev, [pillar]: true }));

    // Show celebratory XP toast
    setXpToast(`+${XP_REWARD} ${pillar.toUpperCase()} XP Earned! 🚀`);
    setTimeout(() => setXpToast(null), 2500);

    // Persist lesson progress if available
    if (lesson?.id) {
      dbService.saveLearnerProgress(userId, lesson.id, 10, 10);
    }
  };

  const handleSaveNotes = () => {
    if (!userId) return;
    localStorage.setItem(`speaking_prep_${userId}_w${weekNumber}_${dayType}`, speakingPrepNotes);
    setIsSavedNotes(true);
    setTimeout(() => setIsSavedNotes(false), 2500);
  };

  const allCompleted = completed.listening && completed.reading && completed.writing;

  // Fallback defaults if lesson object is missing fields
  const title = lesson?.title || (dayType === 'wednesday' 
    ? 'Wednesday Self-Study: Deep Comprehension & Role Prep' 
    : 'Monday Self-Study: Core Listening, Reading & Writing');
  
  const listeningAudio = lesson?.audioUrl || 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3';
  const listeningTranscript = lesson?.transcript || 'Student A: "Hello! Welcome to Room 305 English Academy."\nStudent B: "Nice to meet you! What is our primary learning goal this semester?"\nStudent A: "We practice listening and reading on Monday and Wednesday, and prepare our speaking roles for Tuesday and Thursday!"';
  const listeningJapanese = lesson?.transcriptJapanese || '生徒A：「こんにちは！ルーム305英語アカデミーへようこそ。」\n生徒B：「はじめまして！今学期の主な目標は何ですか？」\n生徒A：「月曜と水曜にリスニングとリーディングを自習し、火曜と木曜の会話ロールを準備します！」';
  
  const readingPassage = lesson?.readingPassage || 'Active communication begins with attentive listening. When learners analyze context passages on Monday, they gain rich vocabulary and structural patterns. These sentences become the foundation for interactive speaking dialogues on Tuesday.';
  const readingJapanese = lesson?.readingPassageJapanese || '積極的なコミュニケーションは、集中したリスニングから始まります。月曜日にコンテクストの文章を読み解くことで、語彙や文構造が自然と身につきます。これらが火曜日の実践スピーキングの基盤となります。';
  
  const writingPrompt = lesson?.writingPrompt || 'Write 3 complete sentences describing your study objective for this week using at least one target vocabulary word.';

  const roleAssignment = lesson?.roleAssignment || {
    roleA: "Role A (Interviewer / Goal Presenter): Inquire about your partner's weekly schedule and share 2 learning milestones.",
    roleB: "Role B (Peer Advisor / Active Responder): Ask follow-up clarification questions and suggest collaboration ideas."
  };

  return (
    <div className="self-study-card glassmorphic-card">
      {/* CARD HEADER */}
      <div className="card-header-badge-row">
        <div className="day-tag-group">
          <span className={`day-pill ${dayType === 'wednesday' ? 'day-pill-wed' : 'day-pill-mon'}`}>
            {dayType === 'wednesday' ? 'WEDNESDAY' : 'MONDAY'} SELF-STUDY
          </span>
          <span className="method-pill">Duolingo 3-Pillar Method</span>
        </div>
        
        {/* SKILL XP BADGES */}
        <div className="skill-xp-badges">
          <div className="xp-badge listening-xp">
            <Headphones className="w-4 h-4 text-emerald" />
            <span>{skillScores.listening} L-XP</span>
          </div>
          <div className="xp-badge reading-xp">
            <FileText className="w-4 h-4 text-amber" />
            <span>{skillScores.reading} R-XP</span>
          </div>
          <div className="xp-badge writing-xp">
            <Edit className="w-4 h-4 text-indigo" />
            <span>{skillScores.writing} W-XP</span>
          </div>
        </div>
      </div>

      <div className="card-title-section mt-3">
        <h2 className="card-main-title">{title}</h2>
        <p className="card-sub-description">
          Complete all 3 core pillars (Listening, Reading, Writing) to unlock your Speaking Role & Notes for {dayType === 'wednesday' ? 'Thursday' : 'Tuesday'} Speaking Class!
        </p>
      </div>

      {/* FLOATING XP CELEBRATION TOAST */}
      {xpToast && (
        <div className="xp-float-toast animate-bounce">
          <Sparkles className="w-5 h-5 text-yellow" />
          <span>{xpToast}</span>
        </div>
      )}

      {/* PILLAR NAVIGATION TABS */}
      <div className="pillar-tabs-bar mt-4">
        <button 
          className={`pillar-tab-btn ${activeTab === 'listening' ? 'active' : ''} ${completed.listening ? 'is-done' : ''}`}
          onClick={() => setActiveTab('listening')}
        >
          <Headphones className="w-4 h-4" />
          <span>1. Listening</span>
          {completed.listening && <CheckCircle className="w-4 h-4 text-emerald ml-1" />}
        </button>

        <button 
          className={`pillar-tab-btn ${activeTab === 'reading' ? 'active' : ''} ${completed.reading ? 'is-done' : ''}`}
          onClick={() => setActiveTab('reading')}
        >
          <FileText className="w-4 h-4" />
          <span>2. Reading</span>
          {completed.reading && <CheckCircle className="w-4 h-4 text-emerald ml-1" />}
        </button>

        <button 
          className={`pillar-tab-btn ${activeTab === 'writing' ? 'active' : ''} ${completed.writing ? 'is-done' : ''}`}
          onClick={() => setActiveTab('writing')}
        >
          <Edit className="w-4 h-4" />
          <span>3. Writing</span>
          {completed.writing && <CheckCircle className="w-4 h-4 text-emerald ml-1" />}
        </button>

        <button 
          className={`pillar-tab-btn role-tab-btn ${activeTab === 'roles' ? 'active' : ''}`}
          onClick={() => setActiveTab('roles')}
        >
          <Video className="w-4 h-4 text-rose" />
          <span>🎭 Speaking Roles</span>
        </button>
      </div>

      {/* PILLAR CONTENT PANES */}
      <div className="pillar-body-container mt-4">
        {/* --- PILLAR 1: LISTENING --- */}
        {activeTab === 'listening' && (
          <div className="pillar-pane listening-pane">
            <div className="pane-headline">
              <div className="flex items-center gap-2">
                <span className="step-circle">1</span>
                <h3 className="font-bold text-lg">Active Audio Listening</h3>
              </div>
              <HelpButton japaneseText={listeningJapanese} label="Japanese Audio Script Help" />
            </div>

            <p className="text-sm text-muted my-2">
              Listen to the native conversation. Internalize sentence rhythm, contractions, and natural intonation.
            </p>

            <div className="audio-player-box my-3">
              <audio controls src={listeningAudio} className="w-full" />
            </div>

            <div className="transcript-preview-box">
              <span className="font-semibold text-xs uppercase tracking-wider text-muted">Conversation Transcript:</span>
              <pre className="transcript-box-text mt-1">{listeningTranscript}</pre>
            </div>

            <div className="action-row mt-4">
              <button
                className={`complete-pillar-btn ${completed.listening ? 'btn-completed' : 'btn-active'}`}
                disabled={completed.listening}
                onClick={() => handleCompletePillar('listening')}
              >
                {completed.listening ? '✓ Listening Completed (+15 XP)' : 'Mark Listening Complete & Claim +15 XP'}
              </button>
              <button className="secondary-text-btn" onClick={() => setActiveTab('reading')}>
                Next: Reading Pillar →
              </button>
            </div>
          </div>
        )}

        {/* --- PILLAR 2: READING --- */}
        {activeTab === 'reading' && (
          <div className="pillar-pane reading-pane">
            <div className="pane-headline">
              <div className="flex items-center gap-2">
                <span className="step-circle">2</span>
                <h3 className="font-bold text-lg">Context Reading & Pattern Recognition</h3>
              </div>
              <HelpButton japaneseText={readingJapanese} label="Japanese Reading Help" />
            </div>

            <p className="text-sm text-muted my-2">
              Duolingo implicit grammar: notice how target words are structured in context before rules are analyzed.
            </p>

            <div className="reading-content-card my-3 p-4 bg-slate-900/40 border border-slate-700/50 rounded-xl">
              <p className="reading-body-text leading-relaxed text-base">{readingPassage}</p>
            </div>

            {/* Quick Vocabulary Preview */}
            {vocabList.length > 0 && (
              <div className="vocab-chips-preview my-3">
                <span className="text-xs font-semibold text-amber uppercase">Target Vocabulary In This Passage:</span>
                <div className="flex flex-wrap gap-2 mt-2">
                  {vocabList.slice(0, 4).map((v, i) => (
                    <span key={i} className="vocab-chip">
                      <strong>{v.word || v[3]}</strong>: {v.definition || v[6] || v[2]}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="action-row mt-4">
              <button
                className={`complete-pillar-btn ${completed.reading ? 'btn-completed' : 'btn-active'}`}
                disabled={completed.reading}
                onClick={() => handleCompletePillar('reading')}
              >
                {completed.reading ? '✓ Reading Completed (+15 XP)' : 'Mark Reading Complete & Claim +15 XP'}
              </button>
              <button className="secondary-text-btn" onClick={() => setActiveTab('writing')}>
                Next: Writing Pillar →
              </button>
            </div>
          </div>
        )}

        {/* --- PILLAR 3: WRITING --- */}
        {activeTab === 'writing' && (
          <div className="pillar-pane writing-pane">
            <div className="pane-headline">
              <div className="flex items-center gap-2">
                <span className="step-circle">3</span>
                <h3 className="font-bold text-lg">Scaffolded Writing Exercise</h3>
              </div>
            </div>

            <p className="text-sm text-muted my-2">
              Transform input into output. Formulate complete written answers that you will adapt into speaking statements.
            </p>

            <div className="writing-prompt-box my-3 p-4 bg-indigo-950/30 border border-indigo-500/30 rounded-xl">
              <p className="font-semibold text-sm text-indigo-300">Prompt: {writingPrompt}</p>
              <textarea 
                rows={3} 
                className="form-textarea mt-3"
                placeholder="Type your response here using the target grammar patterns..."
              />
            </div>

            <div className="action-row mt-4">
              <button
                className={`complete-pillar-btn ${completed.writing ? 'btn-completed' : 'btn-active'}`}
                disabled={completed.writing}
                onClick={() => handleCompletePillar('writing')}
              >
                {completed.writing ? '✓ Writing Completed (+15 XP)' : 'Submit Writing & Claim +15 XP'}
              </button>
              <button className="secondary-text-btn" onClick={() => setActiveTab('roles')}>
                Unlock Speaking Roles →
              </button>
            </div>
          </div>
        )}

        {/* --- ROLES & SPEAKING PREPARATION --- */}
        {activeTab === 'roles' && (
          <div className="pillar-pane roles-pane">
            <div className="pane-headline">
              <div className="flex items-center gap-2">
                <span className="step-circle role-circle">🎭</span>
                <h3 className="font-bold text-lg">
                  {dayType === 'wednesday' ? 'Thursday' : 'Tuesday'} Speaking Preparation & Role Assignment
                </h3>
              </div>
              <span className="badge badge-warning">Preparation for Live Dialogue</span>
            </div>

            <p className="text-sm text-muted my-2">
              At the end of self-study, each learner gets their speaking role. Formulate your speaking notes below so you are fully prepared to talk with your partner!
            </p>

            {/* Role Selection */}
            <div className="role-cards-grid mt-3">
              <div 
                className={`role-select-box ${selectedRole === 'Role A' ? 'role-selected' : ''}`}
                onClick={() => setSelectedRole('Role A')}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-sm text-emerald">Role A</span>
                  {selectedRole === 'Role A' && <CheckCircle className="w-4 h-4 text-emerald" />}
                </div>
                <p className="text-xs leading-relaxed text-slate-300">{roleAssignment.roleA}</p>
              </div>

              <div 
                className={`role-select-box ${selectedRole === 'Role B' ? 'role-selected' : ''}`}
                onClick={() => setSelectedRole('Role B')}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-sm text-indigo">Role B</span>
                  {selectedRole === 'Role B' && <CheckCircle className="w-4 h-4 text-indigo" />}
                </div>
                <p className="text-xs leading-relaxed text-slate-300">{roleAssignment.roleB}</p>
              </div>
            </div>

            {/* Speaking Prep Notepad */}
            <div className="speaking-notepad-box mt-4 p-4 bg-slate-900/60 border border-slate-700 rounded-xl">
              <label className="font-semibold text-xs uppercase tracking-wide text-amber block mb-2">
                ✍️ My Prepared Speaking Notes & Script ({selectedRole}):
              </label>
              <textarea
                rows={4}
                value={speakingPrepNotes}
                onChange={(e) => setSpeakingPrepNotes(e.target.value)}
                placeholder="Draft bullet points, key questions, or sentences you plan to speak during class..."
                className="form-textarea"
              />
              <div className="flex items-center justify-between mt-3">
                <button className="primary-btn text-xs py-2 px-4" onClick={handleSaveNotes}>
                  <CheckCircle className="w-4 h-4" /> Save Speaking Notes
                </button>
                {isSavedNotes && (
                  <span className="text-emerald text-xs font-semibold animate-pulse">
                    ✅ Speaking notes saved to your profile!
                  </span>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* FOOTER SUMMARY & TOGGLE VOCABULARY */}
      <div className="card-footer-bar mt-5 pt-4 border-t border-slate-700/50 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {allCompleted ? (
            <span className="text-emerald text-sm font-bold flex items-center gap-1">
              <Award className="w-4 h-4" /> All 3 Pillars Complete! Ready for Speaking Class.
            </span>
          ) : (
            <span className="text-xs text-muted">
              Pillars Done: {[completed.listening, completed.reading, completed.writing].filter(Boolean).length} of 3
            </span>
          )}
        </div>

        <button 
          className="text-xs text-indigo-400 hover:text-indigo-200 underline font-medium"
          onClick={() => setShowVocabDrawer(!showVocabDrawer)}
        >
          {showVocabDrawer ? 'Hide 30-Week Vocab' : '📖 View Week Vocab List'}
        </button>
      </div>

      {/* EXPANDABLE 30-WEEK VOCABULARY DRAWER */}
      {showVocabDrawer && vocabList.length > 0 && (
        <div className="vocab-drawer mt-3 p-4 bg-slate-900/80 border border-indigo-500/20 rounded-xl">
          <h4 className="font-bold text-xs uppercase tracking-wider text-indigo-300 mb-2">
            Week {weekNumber} Curriculum Target Vocabulary:
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {vocabList.map((item, idx) => (
              <div key={idx} className="p-2 bg-slate-800/60 rounded border border-slate-700 text-xs">
                <div className="font-bold text-white flex justify-between">
                  <span>{item.word || item[3]}</span>
                  <span className="text-muted font-normal">{item.partOfSpeech || item[4]}</span>
                </div>
                <div className="text-slate-300 mt-1">{item.definition || item[6]}</div>
                {item.translation && (
                  <div className="text-amber-300/90 text-xs mt-1">🇯🇵 {item.translation || item[8]}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
