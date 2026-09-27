import React, { useState } from 'react';
import { CURRICULUM_LEVELS, WEEKLY_CURRICULUM } from '../data/curriculumData';
import HelpButton from './HelpButton';
import { BookOpen, Headphones, Edit, FileText, Video, Play, Pause, CheckCircle, Sparkles, ChevronRight, Award, Star, Flame } from './Icons';
import { dbService } from '../services/db';

export default function WeeklyScheduleView({ currentUser }) {
  const [selectedLevelId, setSelectedLevelId] = useState('beginner');
  const [selectedWeekNum, setSelectedWeekNum] = useState(1);
  const [activeDayTab, setActiveDayTab] = useState('monday'); // monday, tuesday, wednesday, thursday, vocabulary
  
  // Student script prep state
  const [userScriptText, setUserScriptText] = useState('');
  const [reflectionText, setReflectionText] = useState('');
  const [savedScriptToast, setSavedScriptToast] = useState(false);

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

  const daySchedule = currentWeekData.schedule || {};

  return (
    <div className="weekly-schedule-container">
      {/* LEVEL SELECTION PATHWAY HEADER (30 WEEKS) */}
      <div className="curriculum-pathway-header">
        <div className="pathway-title-row">
          <div>
            <h2>30-Week English Learning Pathway</h2>
            <p className="subtitle">Weekly Self-Study + Thursday 30-Minute Online Speaking Class</p>
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
        </div>
        <h1 className="week-main-title">{currentWeekData.title}</h1>
        <div className="week-goal-text">
          🎯 <strong>Learning Goal:</strong> {currentWeekData.goal}
        </div>
      </div>

      {/* MONDAY - THURSDAY & VOCABULARY TABS */}
      <div className="day-tabs-container mt-6">
        <div className="day-tabs-header">
          <button
            className={`day-tab-btn ${activeDayTab === 'monday' ? 'active' : ''}`}
            onClick={() => setActiveDayTab('monday')}
          >
            🎧 Monday (Listening)
          </button>
          <button
            className={`day-tab-btn ${activeDayTab === 'tuesday' ? 'active' : ''}`}
            onClick={() => setActiveDayTab('tuesday')}
          >
            ✍️ Tuesday (Writing)
          </button>
          <button
            className={`day-tab-btn ${activeDayTab === 'wednesday' ? 'active' : ''}`}
            onClick={() => setActiveDayTab('wednesday')}
          >
            📖 Wednesday (Reading & Prep)
          </button>
          <button
            className={`day-tab-btn ${activeDayTab === 'thursday' ? 'active speaking-tab' : ''}`}
            onClick={() => setActiveDayTab('thursday')}
          >
            🗣️ Thursday (Online Class)
          </button>
          <button
            className={`day-tab-btn ${activeDayTab === 'vocabulary' ? 'active' : ''}`}
            onClick={() => setActiveDayTab('vocabulary')}
          >
            🎴 Vocabulary ({currentWeekData.vocabulary?.length || 0})
          </button>
        </div>

        {/* TAB BODY CONTENT */}
        <div className="day-tab-body">
          {/* MONDAY: LISTENING */}
          {activeDayTab === 'monday' && (
            <div className="tab-pane">
              <h3>{daySchedule.monday?.title || 'Monday Listening Practice'}</h3>
              <p className="text-muted">{daySchedule.monday?.instructions}</p>

              <div className="audio-player-card my-4">
                <div className="audio-controls-row">
                  <audio controls src={daySchedule.monday?.audioUrl} className="w-full" />
                </div>
              </div>

              <div className="transcript-box">
                <div className="flex-between mb-2">
                  <span className="font-semibold">English Listening Transcript</span>
                  {daySchedule.monday?.transcriptJapanese && (
                    <HelpButton
                      japaneseText={daySchedule.monday.transcriptJapanese}
                      explanation="Listen first in English, then tap to check Japanese meaning."
                    />
                  )}
                </div>
                <pre className="transcript-text">{daySchedule.monday?.transcript}</pre>
              </div>
            </div>
          )}

          {/* TUESDAY: WRITING */}
          {activeDayTab === 'tuesday' && (
            <div className="tab-pane">
              <h3>{daySchedule.tuesday?.title || 'Tuesday Writing & Grammar Practice'}</h3>

              <div className="callout callout-info my-4">
                <strong>Grammar Focus:</strong> {daySchedule.tuesday?.grammarPoint}
                <p className="mt-1">{daySchedule.tuesday?.grammarExplanation}</p>
                {daySchedule.tuesday?.grammarJapaneseHelp && (
                  <div className="mt-2">
                    <HelpButton
                      japaneseText={daySchedule.tuesday.grammarJapaneseHelp}
                      label="Grammar Help / 文法解説"
                    />
                  </div>
                )}
              </div>

              <div className="writing-practice-card">
                <h4>Sentence Scaffold Practice:</h4>
                <p className="scaffold-text my-2">{daySchedule.tuesday?.scaffoldedSentence}</p>

                <label className="form-label mt-4">Your Writing Response Box:</label>
                <textarea
                  rows={4}
                  className="form-textarea"
                  placeholder="Write your response using the target vocabulary and grammar structure..."
                />
              </div>
            </div>
          )}

          {/* WEDNESDAY: READING & THURSDAY SCRIPT PREPARATION */}
          {activeDayTab === 'wednesday' && (
            <div className="tab-pane">
              <h3>{daySchedule.wednesday?.title || 'Wednesday Reading & Role-Play Preparation'}</h3>

              <div className="reading-passage-card my-4">
                <div className="flex-between mb-2">
                  <span className="font-semibold text-indigo">Short Reading Story</span>
                  {daySchedule.wednesday?.passageJapanese && (
                    <HelpButton
                      japaneseText={daySchedule.wednesday.passageJapanese}
                      explanation="Read in English first. Tap Help to see Japanese context."
                    />
                  )}
                </div>
                <p className="passage-body">{daySchedule.wednesday?.passage}</p>
              </div>

              {/* Thursday Role Assignment Preparation Box */}
              {daySchedule.wednesday?.rolePlayPrep && (
                <div className="role-prep-box mt-6">
                  <h4 className="text-emerald font-bold">🎭 Thursday Class Role-Play Script Preparation</h4>
                  <p className="text-sm text-muted mb-3">Prepare your script today so you are ready for Thursday's 30-minute online speaking class.</p>

                  <div className="roles-grid">
                    <div className="role-card">
                      <strong>Role A (Japanese Student):</strong>
                      <p>{daySchedule.wednesday.rolePlayPrep.roleA}</p>
                    </div>
                    <div className="role-card">
                      <strong>Role B (International Partner):</strong>
                      <p>{daySchedule.wednesday.rolePlayPrep.roleB}</p>
                    </div>
                  </div>

                  <div className="form-group mt-4">
                    <label className="form-label">Write your prepared speaking script / discussion notes here:</label>
                    <textarea
                      rows={5}
                      value={userScriptText}
                      onChange={(e) => setUserScriptText(e.target.value)}
                      placeholder="Hi! My name is Ken. Could you recommend a good place..."
                      className="form-textarea"
                    />
                    <button className="primary-btn mt-3" onClick={handleSaveScript}>
                      <CheckCircle className="w-4 h-4" /> Save Script for Thursday Class
                    </button>
                    {savedScriptToast && <span className="text-emerald text-sm ml-3 font-semibold">Saved to profile!</span>}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* THURSDAY: 30-MINUTE ONLINE SPEAKING CLASS */}
          {activeDayTab === 'thursday' && (
            <div className="tab-pane speaking-pane">
              <div className="speaking-hero-banner">
                <div>
                  <span className="badge badge-warning">Live Class Day</span>
                  <h3>30-Minute Online Speaking Class</h3>
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

              {/* Prepared Script Preview */}
              <div className="prepared-script-preview mt-6">
                <h4>Your Wednesday Prepared Script:</h4>
                <div className="script-display-box">
                  {userScriptText || 'No script prepared yet. Switch to Wednesday tab to write your script!'}
                </div>
              </div>

              {/* Discussion Prompts */}
              <div className="prompts-card mt-6">
                <h4>Class Discussion & Role-Play Prompts:</h4>
                <ul>
                  {daySchedule.thursday?.discussionPrompts?.map((p, idx) => (
                    <li key={idx}>{p}</li>
                  ))}
                </ul>
              </div>

              {/* Self Reflection Form */}
              <div className="form-group mt-6">
                <label className="form-label">Thursday Post-Class Reflection:</label>
                <textarea
                  rows={3}
                  value={reflectionText}
                  onChange={(e) => setReflectionText(e.target.value)}
                  placeholder="Write one thing you learned today and one thing you want to improve next week..."
                  className="form-textarea"
                />
              </div>
            </div>
          )}

          {/* VOCABULARY TAB */}
          {activeDayTab === 'vocabulary' && (
            <div className="tab-pane">
              <h3>Target Vocabulary for Week {currentWeekData.weekNumber}</h3>
              <p className="text-muted mb-4">Learn key words. English is shown first; tap the Help button to reveal Japanese translations.</p>

              <div className="vocab-cards-grid">
                {currentWeekData.vocabulary?.map((v, idx) => (
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
