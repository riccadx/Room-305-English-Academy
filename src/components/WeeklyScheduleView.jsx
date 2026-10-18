import React, { useState } from 'react';
import { CURRICULUM_LEVELS, WEEKLY_CURRICULUM } from '../data/curriculumData';
import HelpButton from './HelpButton';
import { BookOpen, Headphones, Edit, FileText, Video, Play, Pause, CheckCircle, Sparkles, ChevronRight, Award, Star, Flame, RefreshCw, MessageSquare } from './Icons';
import { dbService } from '../services/db';
import SelfStudyCard from './SelfStudyCard';
import SpeakingCard from './SpeakingCard';

export default function WeeklyScheduleView({ currentUser }) {
  const [selectedLevelId, setSelectedLevelId] = useState('beginner');
  const [selectedWeekNum, setSelectedWeekNum] = useState(1);
  const [activeDayTab, setActiveDayTab] = useState('monday'); // monday, tuesday, wednesday, thursday, vocabulary
  
  // Student interactive & daily quiz states
  const [userScriptText, setUserScriptText] = useState('');
  const [reflectionText, setReflectionText] = useState('');
  const [savedScriptToast, setSavedScriptToast] = useState(false);
  const [thursdayReflection, setThursdayReflection] = useState('');
  const [flashcardIndex, setFlashcardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  // Daily Quiz Answers & Submission states
  const [mondayQuizAnswers, setMondayQuizAnswers] = useState({});
  const [mondayQuizSubmitted, setMondayQuizSubmitted] = useState(false);

  const [tuesdayQuizAnswers, setTuesdayQuizAnswers] = useState({});
  const [tuesdayQuizSubmitted, setTuesdayQuizSubmitted] = useState(false);

  const [wednesdayQuizAnswers, setWednesdayQuizAnswers] = useState({});
  const [wednesdayQuizSubmitted, setWednesdayQuizSubmitted] = useState(false);

  const [thursdayQuizAnswers, setThursdayQuizAnswers] = useState({});
  const [thursdayQuizSubmitted, setThursdayQuizSubmitted] = useState(false);

  // Filter weeks by level
  const currentLevelWeeks = WEEKLY_CURRICULUM.filter(w => w.level === selectedLevelId);
  const currentWeekData = WEEKLY_CURRICULUM.find(w => w.weekNumber === selectedWeekNum) || WEEKLY_CURRICULUM[0];

  const handleLevelChange = (levelId) => {
    setSelectedLevelId(levelId);
    const firstWeekOfLevel = WEEKLY_CURRICULUM.find(w => w.level === levelId);
    if (firstWeekOfLevel) {
      setSelectedWeekNum(firstWeekOfLevel.weekNumber);
    }
  };

  const handleSaveScript = () => {
    setSavedScriptToast(true);
    setTimeout(() => setSavedScriptToast(false), 3000);
  };

  const handleQuizSelect = (day, qIdx, optIdx) => {
    if (day === 'monday') setMondayQuizAnswers(prev => ({ ...prev, [qIdx]: optIdx }));
    if (day === 'tuesday') setTuesdayQuizAnswers(prev => ({ ...prev, [qIdx]: optIdx }));
    if (day === 'wednesday') setWednesdayQuizAnswers(prev => ({ ...prev, [qIdx]: optIdx }));
    if (day === 'thursday') setThursdayQuizAnswers(prev => ({ ...prev, [qIdx]: optIdx }));
  };

  const handleQuizRetake = (day) => {
    if (day === 'monday') { setMondayQuizAnswers({}); setMondayQuizSubmitted(false); }
    if (day === 'tuesday') { setTuesdayQuizAnswers({}); setTuesdayQuizSubmitted(false); }
    if (day === 'wednesday') { setWednesdayQuizAnswers({}); setWednesdayQuizSubmitted(false); }
    if (day === 'thursday') { setThursdayQuizAnswers({}); setThursdayQuizSubmitted(false); }
  };

  const daySchedule = currentWeekData.schedule || {};
  const currentVocabList = currentWeekData.vocabulary || [];

  // Helper component to render multi-choice daily quiz cards
  const renderDailyQuizCard = (dayKey, title, questions, answers, submitted, onSelect, onSubmit, onRetake) => {
    if (!questions || questions.length === 0) return null;

    let score = 0;
    questions.forEach((q, idx) => {
      if (answers[idx] === q.correct) score++;
    });
    const percentage = Math.round((score / questions.length) * 100);

    return (
      <div className="comprehension-quiz-box mt-6 p-5 bg-gradient-to-r from-indigo-950/40 to-slate-900/60 border border-indigo-500/30 rounded-2xl shadow-xl">
        <div className="flex-between mb-4 pb-3 border-b border-white/10">
          <div>
            <h4 className="text-base font-extrabold text-white flex items-center gap-2">
              <span>📝</span> {title}
            </h4>
            <p className="text-xs text-muted mt-0.5">Study the learning materials above, then select your answer for each multiple-choice question.</p>
          </div>
          {submitted && (
            <span className={`role-badge ${score === questions.length ? 'teacher-badge' : 'learner-badge'}`}>
              Score: {score} / {questions.length} ({percentage}%)
            </span>
          )}
        </div>

        {questions.map((item, qIdx) => {
          const userAns = answers[qIdx];
          const isCorrect = userAns === item.correct;

          return (
            <div key={qIdx} className={`quiz-question-item mb-5 p-4 rounded-xl border ${submitted ? (isCorrect ? 'border-emerald-500/40 bg-emerald-950/20' : 'border-rose-500/40 bg-rose-950/20') : 'border-white/10 bg-black/30'}`}>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-6 h-6 rounded-full bg-indigo-500/20 text-indigo-300 font-bold text-xs flex items-center justify-center border border-indigo-500/40">
                  Q{qIdx + 1}
                </span>
                <p className="font-semibold text-sm text-white">{item.q}</p>
              </div>

              {/* Multiple Choice Options A, B, C, D */}
              <div className="options-grid grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {item.options.map((opt, optIdx) => {
                  const letter = String.fromCharCode(65 + optIdx);
                  const isThisSelected = userAns === optIdx;
                  const isThisCorrect = item.correct === optIdx;

                  let optionStyle = 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10';
                  if (submitted) {
                    if (isThisCorrect) optionStyle = 'bg-emerald-500/20 border-emerald-500 text-emerald-200 font-semibold';
                    else if (isThisSelected) optionStyle = 'bg-rose-500/20 border-rose-500 text-rose-200 font-semibold';
                  } else if (isThisSelected) {
                    optionStyle = 'bg-indigo-600/30 border-indigo-400 text-white font-semibold shadow-md';
                  }

                  return (
                    <button
                      key={optIdx}
                      disabled={submitted}
                      className={`quiz-option-btn text-left p-3 rounded-lg border transition-all flex items-center gap-2.5 ${optionStyle}`}
                      onClick={() => onSelect(qIdx, optIdx)}
                    >
                      <span className={`w-6 h-6 rounded-md text-xs font-bold flex items-center justify-center ${isThisSelected ? 'bg-indigo-500 text-white' : 'bg-white/10 text-gray-400'}`}>
                        {letter}
                      </span>
                      <span className="text-sm flex-1">{opt}</span>
                    </button>
                  );
                })}
              </div>

              {/* Detailed Feedback Breakdown */}
              {submitted && (
                <div className="mt-3 pt-3 border-t border-white/10 text-xs">
                  {isCorrect ? (
                    <span className="text-emerald-400 font-semibold">✅ Correct Answer! Great job applying today's learning material.</span>
                  ) : (
                    <span className="text-rose-400 font-semibold">❌ Correct Choice: {String.fromCharCode(65 + item.correct)}. {item.options[item.correct]}</span>
                  )}
                </div>
              )}
            </div>
          );
        })}

        {/* Action Buttons */}
        <div className="flex items-center gap-3 mt-4 pt-3 border-t border-white/10">
          {!submitted ? (
            <button className="primary-btn text-xs py-2.5 px-5" onClick={onSubmit}>
              <CheckCircle className="w-4 h-4" /> Submit Quiz Answers
            </button>
          ) : (
            <button className="secondary-btn text-xs py-2 px-4" onClick={onRetake}>
              <RefreshCw className="w-4 h-4" /> Retake Daily Quiz
            </button>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="weekly-schedule-container">
      {/* 5-STEP PROGRESSIVE LEARNING PRINCIPLE BAR */}
      <div className="progressive-steps-banner mb-5">
        <div className="steps-header-row">
          <span className="step-tagline font-bold text-xs uppercase tracking-wider text-amber">
            💡 5-Step Progressive Learning Principle
          </span>
          <span className="step-philosophy text-xs text-muted">
            "Try English First, Use Japanese When Needed"
          </span>
        </div>
        <div className="steps-flow-grid mt-2">
          <div className="step-pill active">
            <span className="step-num">Step 1</span>
            <span className="step-name">Try 🎯</span>
          </div>
          <div className="step-arrow">→</div>
          <div className="step-pill">
            <span className="step-num">Step 2</span>
            <span className="step-name">Help 🇯🇵</span>
          </div>
          <div className="step-arrow">→</div>
          <div className="step-pill">
            <span className="step-num">Step 3</span>
            <span className="step-name">Understand 💡</span>
          </div>
          <div className="step-arrow">→</div>
          <div className="step-pill">
            <span className="step-num">Step 4</span>
            <span className="step-name">Practice ✍️</span>
          </div>
          <div className="step-arrow">→</div>
          <div className="step-pill">
            <span className="step-num">Step 5</span>
            <span className="step-name">Check ✅</span>
          </div>
        </div>
      </div>

      {/* LEVEL SELECTION PATHWAY HEADER (30 WEEKS) */}
      <div className="curriculum-pathway-header">
        <div className="pathway-title-row">
          <div>
            <h2>30-Week English Learning Pathway</h2>
            <p className="subtitle">Learning Materials & Multiple-Choice Quizzes on Every Day (2+2 Hybrid Model)</p>
          </div>
          <div className="japanese-support-badge">
            🇯🇵 日本語サポート (Help Button Ready)
          </div>
        </div>

        {/* 3 Level Selector Tabs */}
        <div className="level-cards-grid mt-4">
          {CURRICULUM_LEVELS.map((lvl) => (
            <button
              key={lvl.id}
              className={`level-selector-card ${selectedLevelId === lvl.id ? 'active ' + lvl.color : ''}`}
              onClick={() => handleLevelChange(lvl.id)}
            >
              <div className="level-card-name">{lvl.name}</div>
              <div className="level-card-weeks">{lvl.weeks}</div>
              <div className="level-card-desc">{lvl.desc}</div>
            </button>
          ))}
        </div>

        {/* Week Selector Pills Horizontal Scroll */}
        <div className="week-selector-scroll mt-4">
          <span className="scroll-label">Select Week:</span>
          {currentLevelWeeks.map((w) => (
            <button
              key={w.weekNumber}
              className={`week-pill ${selectedWeekNum === w.weekNumber ? 'active' : ''}`}
              onClick={() => setSelectedWeekNum(w.weekNumber)}
            >
              Week {w.weekNumber}
            </button>
          ))}
        </div>
      </div>

      {/* WEEK TITLE & GOAL CARD */}
      <div className="week-goal-banner mt-6">
        <div className="week-badge-row">
          <span className="badge badge-module">Week {currentWeekData.weekNumber}</span>
          <span className="badge badge-level">{currentWeekData.level.toUpperCase()}</span>
          <span className="badge badge-hybrid">2+2 Hybrid Model</span>
        </div>
        <h1 className="week-main-title">{currentWeekData.title}</h1>
        <div className="week-goal-text mt-2">
          🎯 <strong>Learning Goal:</strong> {currentWeekData.goal}
        </div>
      </div>

      {/* 2+2 HYBRID FLOW DAY TABS */}
      <div className="day-tabs-container mt-6">
        <div className="day-tabs-header">
          <button
            className={`day-tab-btn ${activeDayTab === 'monday' ? 'active' : ''}`}
            onClick={() => setActiveDayTab('monday')}
          >
            🎧 Monday (Knowledge & Quiz)
          </button>
          <button
            className={`day-tab-btn ${activeDayTab === 'tuesday' ? 'active speaking-tab' : ''}`}
            onClick={() => setActiveDayTab('tuesday')}
          >
            🗣️ Tuesday (Online Class & Quiz)
          </button>
          <button
            className={`day-tab-btn ${activeDayTab === 'wednesday' ? 'active' : ''}`}
            onClick={() => setActiveDayTab('wednesday')}
          >
            ✍️ Wednesday (Writing & Quiz)
          </button>
          <button
            className={`day-tab-btn ${activeDayTab === 'thursday' ? 'active speaking-tab' : ''}`}
            onClick={() => setActiveDayTab('thursday')}
          >
            🎭 Thursday (Role-Play & Master Quiz)
          </button>
          <button
            className={`day-tab-btn ${activeDayTab === 'vocabulary' ? 'active' : ''}`}
            onClick={() => setActiveDayTab('vocabulary')}
          >
            🎴 Vocabulary Hub ({currentVocabList.length})
          </button>
        </div>

        {/* TAB BODY CONTENT */}
        <div className="day-tab-body">

          {/* MONDAY: SELF-STUDY (KNOWLEDGE & MULTI-CHOICE QUIZ) */}
          {activeDayTab === 'monday' && (
            <div className="tab-pane">
              {/* Duolingo 3-Pillar Self-Study & Speaking Prep Card */}
              <div className="mb-6">
                <SelfStudyCard 
                  lesson={daySchedule.monday}
                  dayType="monday"
                  weekNumber={selectedWeekNum}
                  onNavigateSpeaking={() => setActiveDayTab('tuesday')}
                />
              </div>

              <div className="pane-header-box">
                <span className="format-pill">Detailed Breakdown • Monday Knowledge</span>
                <h3>{daySchedule.monday?.title || 'Monday Self-Study: Knowledge & Comprehension'}</h3>
                <p className="text-muted">Focus: Learn 8–12 target vocabulary words with audio, listen to conversations, read context passages, and take the multiple-choice quiz.</p>
              </div>

              {/* Learning Material: Audio Conversation */}
              <div className="audio-player-card my-4">
                <h4 className="text-sm font-bold text-indigo mb-2">🎧 1. Listening Learning Material (Audio & Transcript)</h4>
                <audio controls src={daySchedule.monday?.audioUrl} className="w-full mb-3" />
                
                <div className="transcript-box">
                  <div className="flex-between mb-2">
                    <span className="font-semibold text-xs text-muted uppercase">English Conversation Transcript</span>
                    {daySchedule.monday?.transcriptJapanese && (
                      <HelpButton
                        japaneseText={daySchedule.monday.transcriptJapanese}
                        explanation="Try listening in English first. Tap Help to reveal Japanese translation."
                      />
                    )}
                  </div>
                  <pre className="transcript-text">{daySchedule.monday?.transcript}</pre>
                </div>
              </div>

              {/* Learning Material: Reading Context Passage */}
              {daySchedule.monday?.readingPassage && (
                <div className="reading-passage-card my-4">
                  <div className="flex-between mb-2">
                    <h4 className="text-sm font-bold text-indigo">📖 2. Reading Learning Material</h4>
                    {daySchedule.monday.readingPassageJapanese && (
                      <HelpButton
                        japaneseText={daySchedule.monday.readingPassageJapanese}
                        explanation="Read in English first. Tap Help to see Japanese breakdown."
                      />
                    )}
                  </div>
                  <p className="passage-body">{daySchedule.monday.readingPassage}</p>
                </div>
              )}

              {/* MONDAY MULTIPLE-CHOICE QUIZ */}
              {renderDailyQuizCard(
                'monday',
                daySchedule.monday?.quizTitle || 'Monday Vocabulary & Comprehension Multiple-Choice Quiz',
                daySchedule.monday?.comprehensionQuestions,
                mondayQuizAnswers,
                mondayQuizSubmitted,
                (qIdx, optIdx) => handleQuizSelect('monday', qIdx, optIdx),
                () => setMondayQuizSubmitted(true),
                () => handleQuizRetake('monday')
              )}
            </div>
          )}

          {/* TUESDAY: ONLINE CLASS (30M PRACTICE & MULTI-CHOICE QUIZ) */}
          {activeDayTab === 'tuesday' && (
            <div className="tab-pane speaking-pane">
              {/* Speaking Card Based on Monday Prep */}
              <div className="mb-6">
                <SpeakingCard 
                  lesson={daySchedule.tuesday}
                  dayType="tuesday"
                  weekNumber={selectedWeekNum}
                  onNavigateToSelfStudy={() => setActiveDayTab('monday')}
                />
              </div>

              <div className="speaking-hero-banner">
                <div>
                  <span className="badge badge-warning">Live Class (30 Min)</span>
                  <h3>Tuesday Live Practice & Interactive Q&A</h3>
                  <p className="text-sm text-muted">Time: {daySchedule.tuesday?.classTime || 'Tuesday 19:00 - 19:30 (JST)'}</p>
                </div>
                <a
                  href={daySchedule.tuesday?.meetingLink || '#'}
                  target="_blank"
                  rel="noreferrer"
                  className="primary-btn btn-zoom"
                >
                  <Video className="w-5 h-5" /> Join Live Class Room (Zoom)
                </a>
              </div>

              {/* Learning Material: Class Activities Outline */}
              <div className="prompts-card mt-6">
                <h4>🎯 Tuesday Learning Material & Live Class Agenda:</h4>
                <ul>
                  {daySchedule.tuesday?.liveActivities?.map((act, idx) => (
                    <li key={idx}>{act}</li>
                  ))}
                </ul>
              </div>

              {/* TUESDAY MULTIPLE-CHOICE QUIZ */}
              {renderDailyQuizCard(
                'tuesday',
                daySchedule.tuesday?.quizTitle || 'Tuesday Live Expression & Conversation Multiple-Choice Quiz',
                daySchedule.tuesday?.questions,
                tuesdayQuizAnswers,
                tuesdayQuizSubmitted,
                (qIdx, optIdx) => handleQuizSelect('tuesday', qIdx, optIdx),
                () => setTuesdayQuizSubmitted(true),
                () => handleQuizRetake('tuesday')
              )}

              {/* Output & Instructor Feedback Log */}
              <div className="feedback-log-card mt-6 p-4 bg-indigo/10 border border-indigo/20 rounded-xl">
                <h4 className="text-sm font-bold text-indigo mb-2">📋 Live Participation Output & Instructor Notes</h4>
                <p className="text-xs text-muted mb-3">After Tuesday's 30-minute class, record teacher pronunciation feedback or vocabulary notes below:</p>
                <textarea
                  rows={3}
                  className="form-textarea"
                  placeholder="e.g. Instructor corrected my pronunciation of 'recommend' and advised using rising intonation in questions..."
                />
              </div>
            </div>
          )}

          {/* WEDNESDAY: SELF-STUDY (WRITING & MULTI-CHOICE QUIZ) */}
          {activeDayTab === 'wednesday' && (
            <div className="tab-pane">
              {/* Duolingo 3-Pillar Self-Study & Speaking Prep Card */}
              <div className="mb-6">
                <SelfStudyCard 
                  lesson={daySchedule.wednesday}
                  dayType="wednesday"
                  weekNumber={selectedWeekNum}
                  onNavigateSpeaking={() => setActiveDayTab('thursday')}
                />
              </div>

              <div className="pane-header-box">
                <span className="format-pill">Detailed Breakdown • Writing & Script Prep</span>
                <h3>{daySchedule.wednesday?.title || 'Wednesday Self-Study: Writing & Speaking Prep'}</h3>
                <p className="text-muted">Focus: Review target grammar learning materials, draft your Thursday script, and take the Wednesday Grammar Quiz.</p>
              </div>

              {/* Learning Material: Target Grammar Callout */}
              <div className="callout callout-info my-4">
                <strong>📖 Target Grammar Learning Material:</strong> {daySchedule.wednesday?.grammarPoint}
                <p className="mt-1">{daySchedule.wednesday?.grammarExplanation}</p>
                {daySchedule.wednesday?.grammarJapaneseHelp && (
                  <div className="mt-2">
                    <HelpButton
                      japaneseText={daySchedule.wednesday.grammarJapaneseHelp}
                      label="Grammar Help / 文法解説"
                    />
                  </div>
                )}
              </div>

              {/* Learning Material: Writing Scaffold Exercise */}
              <div className="writing-practice-card my-4">
                <h4 className="font-bold text-indigo">✍️ 1. Sentence Scaffold Learning Task</h4>
                <p className="scaffold-text my-2 text-sm">{daySchedule.wednesday?.scaffoldedSentence}</p>
              </div>

              {/* WEDNESDAY MULTIPLE-CHOICE QUIZ */}
              {renderDailyQuizCard(
                'wednesday',
                daySchedule.wednesday?.quizTitle || 'Wednesday Grammar & Sentence Structure Multiple-Choice Quiz',
                daySchedule.wednesday?.questions,
                wednesdayQuizAnswers,
                wednesdayQuizSubmitted,
                (qIdx, optIdx) => handleQuizSelect('wednesday', qIdx, optIdx),
                () => setWednesdayQuizSubmitted(true),
                () => handleQuizRetake('wednesday')
              )}

              {/* Thursday Role Assignment & Prepared Script Submitter */}
              <div className="role-prep-box mt-6">
                <h4 className="text-emerald font-bold">🎭 Thursday Live Role-Play & Discussion Script Draft</h4>
                <p className="text-xs text-muted mb-3">{daySchedule.wednesday?.thursdayTaskAssignment || 'Prepare a 2-minute dialogue script for Thursday class.'}</p>

                <div className="form-group">
                  <label className="form-label font-semibold text-sm">Write & Submit Your Prepared Script / Speaking Outline:</label>
                  <textarea
                    rows={4}
                    value={userScriptText}
                    onChange={(e) => setUserScriptText(e.target.value)}
                    placeholder="Draft your conversation lines, presentation bullet points, or role-play response here..."
                    className="form-textarea"
                  />
                  <button className="primary-btn mt-3 text-xs py-2 px-4" onClick={handleSaveScript}>
                    <CheckCircle className="w-4 h-4" /> Save & Submit Prepared Script
                  </button>
                  {savedScriptToast && <span className="text-emerald text-sm ml-3 font-semibold">✅ Script saved for Thursday Class!</span>}
                </div>
              </div>
            </div>
          )}

          {/* THURSDAY: ONLINE CLASS (30M ROLE-PLAY & THURSDAY MASTER QUIZ) */}
          {activeDayTab === 'thursday' && (
            <div className="tab-pane speaking-pane">
              {/* Speaking Card Based on Wednesday Prep */}
              <div className="mb-6">
                <SpeakingCard 
                  lesson={daySchedule.thursday}
                  dayType="thursday"
                  weekNumber={selectedWeekNum}
                  onNavigateToSelfStudy={() => setActiveDayTab('wednesday')}
                />
              </div>

              <div className="speaking-hero-banner">
                <div>
                  <span className="badge badge-warning">Live Class (30 Min)</span>
                  <h3>Thursday Live Role-Play & Master Synthesis</h3>
                  <p className="text-sm text-muted">Time: {daySchedule.thursday?.classTime || 'Thursday 19:00 - 19:30 (JST)'}</p>
                </div>
                <a
                  href={daySchedule.thursday?.meetingLink || '#'}
                  target="_blank"
                  rel="noreferrer"
                  className="primary-btn btn-zoom"
                >
                  <Video className="w-5 h-5" /> Join Live Class Room (Zoom)
                </a>
              </div>

              {/* Learning Material: Display Wednesday's Prepared Script */}
              <div className="prepared-script-preview mt-6">
                <h4 className="text-sm font-bold text-amber">📜 Learning Material: Your Wednesday Prepared Script (For Class Reference):</h4>
                <div className="script-display-box mt-2 p-3 bg-black/30 border border-amber/30 rounded-lg text-sm">
                  {userScriptText || 'No script drafted yet. Switch to Wednesday tab to prepare your script!'}
                </div>
              </div>

              {/* THURSDAY MULTIPLE-CHOICE MASTER QUIZ */}
              {renderDailyQuizCard(
                'thursday',
                daySchedule.thursday?.quizTitle || 'Thursday Weekly Master Synthesis Multiple-Choice Quiz',
                daySchedule.thursday?.questions,
                thursdayQuizAnswers,
                thursdayQuizSubmitted,
                (qIdx, optIdx) => handleQuizSelect('thursday', qIdx, optIdx),
                () => setThursdayQuizSubmitted(true),
                () => handleQuizRetake('thursday')
              )}

              {/* Thursday Post-Class Reflection & Teacher Evaluation Log */}
              <div className="form-group mt-6 p-4 bg-black/30 border border-white/10 rounded-xl">
                <h4 className="text-sm font-bold text-gray-200 mb-2">📋 Weekly Teacher Evaluation & Self-Reflection</h4>
                <textarea
                  rows={3}
                  value={thursdayReflection}
                  onChange={(e) => setThursdayReflection(e.target.value)}
                  placeholder="Record instructor evaluation notes and one area to improve next week..."
                  className="form-textarea"
                />
              </div>
            </div>
          )}

          {/* VOCABULARY HUB (8-12 TARGET WORDS & FLASHCARDS) */}
          {activeDayTab === 'vocabulary' && (
            <div className="tab-pane">
              <div className="flex-between mb-4">
                <div>
                  <h3>Target Vocabulary Hub (Week {currentWeekData.weekNumber})</h3>
                  <p className="text-muted text-xs">8–12 target words with audio, Japanese translation, English definition, and interactive flashcards.</p>
                </div>
              </div>

              {/* Digital Flashcard Interactive Widget */}
              {currentVocabList.length > 0 && (
                <div className="flashcard-widget-container mb-6 p-6 bg-gradient-to-r from-indigo-900/30 to-purple-900/30 border border-indigo-500/30 rounded-2xl text-center">
                  <span className="text-xs font-bold text-amber uppercase tracking-wider block mb-2">
                    🎴 Digital Flashcard ({flashcardIndex + 1} of {currentVocabList.length})
                  </span>
                  
                  <div 
                    className="flashcard-box cursor-pointer p-8 bg-black/40 border border-white/10 rounded-xl min-h-[160px] flex flex-col justify-center items-center transition-all hover:border-indigo-400"
                    onClick={() => setIsFlipped(!isFlipped)}
                  >
                    {!isFlipped ? (
                      <div>
                        <h2 className="text-2xl font-extrabold text-white">{currentVocabList[flashcardIndex]?.word}</h2>
                        <span className="text-xs text-muted italic block mt-1">({currentVocabList[flashcardIndex]?.partOfSpeech})</span>
                        <span className="text-xs text-indigo-300 mt-4 block">Tap card to reveal Japanese meaning 🔄</span>
                      </div>
                    ) : (
                      <div>
                        <h3 className="text-xl font-bold text-emerald-400">{currentVocabList[flashcardIndex]?.japanese}</h3>
                        <p className="text-sm text-gray-200 mt-2">{currentVocabList[flashcardIndex]?.meaning}</p>
                        <p className="text-xs text-muted italic mt-3">"{currentVocabList[flashcardIndex]?.example}"</p>
                      </div>
                    )}
                  </div>

                  <div className="flex justify-center gap-3 mt-4">
                    <button 
                      className="action-btn text-xs py-1.5 px-4"
                      onClick={() => {
                        setIsFlipped(false);
                        setFlashcardIndex(prev => (prev > 0 ? prev - 1 : currentVocabList.length - 1));
                      }}
                    >
                      ← Previous
                    </button>
                    <button 
                      className="action-btn text-xs py-1.5 px-4"
                      onClick={() => setIsFlipped(!isFlipped)}
                    >
                      Flip Card 🔄
                    </button>
                    <button 
                      className="action-btn text-xs py-1.5 px-4"
                      onClick={() => {
                        setIsFlipped(false);
                        setFlashcardIndex(prev => (prev < currentVocabList.length - 1 ? prev + 1 : 0));
                      }}
                    >
                      Next →
                    </button>
                  </div>
                </div>
              )}

              {/* Full Vocabulary List Grid */}
              <div className="vocab-cards-grid">
                {currentVocabList.map((v, idx) => (
                  <div key={idx} className="vocab-item-card">
                    <div className="flex-between">
                      <span className="vocab-word">{v.word}</span>
                      <span className="vocab-pos">{v.partOfSpeech}</span>
                    </div>
                    <div className="vocab-meaning mt-1">{v.meaning}</div>

                    {/* Japanese Help Button */}
                    <div className="mt-3">
                      <HelpButton
                        japaneseText={v.japanese}
                        explanation={v.helpExplanation}
                        label="Reveal Japanese Translation"
                      />
                    </div>

                    <div className="vocab-example mt-3">
                      <strong>Example:</strong> "{v.example}"
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
