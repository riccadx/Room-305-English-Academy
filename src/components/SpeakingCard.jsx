// src/components/SpeakingCard.jsx
import React, { useState, useEffect } from 'react';
import { dbService } from '../services/db';
import { Video, CheckCircle, MessageSquare, Award, Star, FileText } from './Icons';

/**
 * SpeakingCard
 * Displays the Tuesday & Thursday interactive Speaking session
 * using the prepared roles, vocabulary, and reading materials from Monday/Wednesday.
 */
export default function SpeakingCard({ 
  lesson, 
  dayType = "tuesday", // 'tuesday' | 'thursday'
  weekNumber = 1,
  onNavigateToSelfStudy 
}) {
  const currentUser = dbService.getCurrentUser();
  const userId = currentUser?.id || 'usr_learner_1';

  const [savedNotes, setSavedNotes] = useState('');
  const [reflection, setReflection] = useState('');
  const [isCompleted, setIsCompleted] = useState(false);
  const [savedToast, setSavedToast] = useState(false);

  useEffect(() => {
    // Retrieve Monday's or Wednesday's prepared notes
    const sourceDay = dayType === 'tuesday' ? 'monday' : 'wednesday';
    const notes = localStorage.getItem(`speaking_prep_${userId}_w${weekNumber}_${sourceDay}`) || '';
    setSavedNotes(notes);
  }, [userId, weekNumber, dayType]);

  const handleCompleteSpeaking = () => {
    setIsCompleted(true);
    setSavedToast(true);
    setTimeout(() => setSavedToast(false), 3000);
  };

  const title = lesson?.title || (dayType === 'thursday' 
    ? 'Thursday Live Speaking & Synthesis Role-Play' 
    : 'Tuesday Interactive Dialogue & Discussion');
  
  const classTime = lesson?.classTime || (dayType === 'thursday' ? 'Thursday 19:00 - 19:30 (JST)' : 'Tuesday 19:00 - 19:30 (JST)');
  const meetingLink = lesson?.meetingLink || 'https://zoom.us';

  return (
    <div className="speaking-card glassmorphic-card">
      {/* HEADER */}
      <div className="card-header-badge-row">
        <div className="day-tag-group">
          <span className={`day-pill ${dayType === 'thursday' ? 'day-pill-thu' : 'day-pill-tue'}`}>
            {dayType === 'thursday' ? 'THURSDAY' : 'TUESDAY'} LIVE CLASS (30 MIN)
          </span>
          <span className="badge badge-warning">Interactive Speaking</span>
        </div>
        <div className="text-xs text-muted font-medium">Schedule: {classTime}</div>
      </div>

      <div className="card-title-section mt-3">
        <h2 className="card-main-title">{title}</h2>
        <p className="card-sub-description">
          Take the roles and reading topics you practiced on {dayType === 'tuesday' ? 'Monday' : 'Wednesday'} and engage in dynamic, spoken communication with your teacher and peers.
        </p>
      </div>

      {/* ZOOM LAUNCH BAR */}
      <div className="zoom-banner my-4 p-4 bg-gradient-to-r from-rose-950/40 to-slate-900 border border-rose-500/30 rounded-xl flex items-center justify-between">
        <div>
          <h4 className="font-bold text-white text-sm">🎥 Live Class Room Portal</h4>
          <p className="text-xs text-slate-300 mt-1">Connect with teacher & classmates for your 30-minute speaking session.</p>
        </div>
        <a 
          href={meetingLink} 
          target="_blank" 
          rel="noreferrer" 
          className="primary-btn btn-zoom text-xs py-2 px-4 flex items-center gap-2"
        >
          <Video className="w-4 h-4" /> Join Online Class
        </a>
      </div>

      {/* SCRIPT / NOTES IMPORTED FROM PREVIOUS SELF-STUDY */}
      <div className="imported-prep-box my-4 p-4 bg-slate-900/50 border border-indigo-500/30 rounded-xl">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-bold uppercase tracking-wider text-amber flex items-center gap-1">
            <FileText className="w-4 h-4" /> Your Prepared Speaking Notes ({dayType === 'tuesday' ? 'From Monday' : 'From Wednesday'}):
          </span>
          {onNavigateToSelfStudy && (
            <button 
              className="text-xs text-indigo-400 hover:text-indigo-200 underline"
              onClick={onNavigateToSelfStudy}
            >
              Edit in Self-Study →
            </button>
          )}
        </div>
        
        {savedNotes ? (
          <div className="notes-preview-content p-3 bg-slate-800/60 rounded-lg text-sm text-slate-200 whitespace-pre-wrap border border-slate-700">
            {savedNotes}
          </div>
        ) : (
          <div className="notes-empty-prompt p-3 bg-slate-800/40 rounded-lg text-xs text-muted border border-slate-700/60">
            No speaking notes saved yet. Complete your {dayType === 'tuesday' ? 'Monday' : 'Wednesday'} self-study card to auto-import your speaking role script here!
          </div>
        )}
      </div>

      {/* SPEAKING REFLECTION & TEACHER NOTES */}
      <div className="reflection-section mt-4 p-4 bg-slate-900/40 border border-slate-700 rounded-xl">
        <label className="font-semibold text-xs uppercase tracking-wide text-indigo-300 block mb-2">
          📝 Post-Speaking Reflection & Instructor Feedback:
        </label>
        <textarea
          rows={3}
          value={reflection}
          onChange={(e) => setReflection(e.target.value)}
          placeholder="Record notes on pronunciation advice, new expressions used, or topics discussed with your partner..."
          className="form-textarea"
        />

        <div className="flex items-center justify-between mt-3">
          <button 
            className={`complete-pillar-btn ${isCompleted ? 'btn-completed' : 'btn-active'}`}
            onClick={handleCompleteSpeaking}
          >
            {isCompleted ? '✓ Speaking Session Completed' : 'Mark Speaking Session Complete'}
          </button>
          {savedToast && (
            <span className="text-emerald text-xs font-semibold">
              ✅ Session marked complete & logged!
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
