import React, { useState } from 'react';
import { ShieldCheck, Award, CheckCircle, Flame, Star, BookOpen, Download, Sparkles } from './Icons';
import { dbService } from '../services/db';

export default function ProgressReport({ currentUser, onOpenLesson }) {
  const [lessons] = useState(dbService.getLessons());
  const [progress] = useState(dbService.getProgress(currentUser?.id || 'usr_learner_1'));

  const completedLessonIds = Object.keys(progress).filter(id => progress[id]?.completed);
  const completedCount = completedLessonIds.length;
  const totalCount = lessons.length;
  const overallPercent = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

  // Calculate average quiz score
  let totalQuizScore = 0;
  let totalMaxScore = 0;

  Object.values(progress).forEach(item => {
    if (item.maxScore > 0) {
      totalQuizScore += item.quizScore || 0;
      totalMaxScore += item.maxScore;
    }
  });

  const quizAccuracyPercent = totalMaxScore > 0 ? Math.round((totalQuizScore / totalMaxScore) * 100) : 0;

  return (
    <div className="progress-report-container">
      {/* Overview Analytics Banner */}
      <div className="progress-hero-banner">
        <div className="hero-text">
          <h2>Learning Progress & Mastery Record</h2>
          <p>Track your completed lessons, quiz scores, and earned badges.</p>
        </div>

        <div className="hero-stats-grid">
          <div className="hero-stat-card">
            <BookOpen className="w-6 h-6 text-indigo" />
            <div>
              <div className="stat-val">{completedCount} / {totalCount}</div>
              <div className="stat-lbl">Lessons Finished</div>
            </div>
          </div>

          <div className="hero-stat-card">
            <Award className="w-6 h-6 text-emerald" />
            <div>
              <div className="stat-val">{quizAccuracyPercent}%</div>
              <div className="stat-lbl">Quiz Mastery Rate</div>
            </div>
          </div>

          <div className="hero-stat-card">
            <Flame className="w-6 h-6 text-amber" />
            <div>
              <div className="stat-val">{currentUser?.streak || 5} Days</div>
              <div className="stat-lbl">Active Learning Streak</div>
            </div>
          </div>
        </div>
      </div>

      {/* Completed Lessons Ledger */}
      <div className="ledger-card mt-6">
        <h3 className="ledger-title">
          <CheckCircle className="w-5 h-5 text-emerald inline mr-2" />
          Completed Modules & Quiz Scores
        </h3>

        {completedLessonIds.length === 0 ? (
          <div className="empty-state p-6">
            <BookOpen className="w-10 h-10 text-muted" />
            <p>You haven't completed any lessons yet. Start exploring courses on the Learner Dashboard!</p>
          </div>
        ) : (
          <div className="ledger-list mt-4">
            {completedLessonIds.map((lessonId) => {
              const lesson = lessons.find(l => l.id === lessonId);
              const p = progress[lessonId];
              if (!lesson) return null;

              return (
                <div key={lessonId} className="ledger-item">
                  <div className="ledger-item-left">
                    <CheckCircle className="w-5 h-5 text-emerald" />
                    <div>
                      <h4 className="ledger-item-title" onClick={() => onOpenLesson(lesson)}>
                        {lesson.title}
                      </h4>
                      <div className="ledger-item-meta">
                        <span className="badge badge-module">{lesson.module}</span>
                        <span>Completed on: {new Date(p.completedAt).toLocaleDateString()}</span>
                      </div>
                    </div>
                  </div>

                  <div className="ledger-item-right">
                    {p.maxScore > 0 ? (
                      <span className="quiz-score-badge">
                        Quiz Score: {p.quizScore}/{p.maxScore} ({Math.round((p.quizScore / p.maxScore) * 100)}%)
                      </span>
                    ) : (
                      <span className="badge badge-secondary">Lesson Read</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* OFFICIAL CERTIFICATE OF ACCOMPLISHMENT PREVIEW */}
      <div className="certificate-card mt-6">
        <div className="certificate-header">
          <Award className="w-8 h-8 text-yellow" />
          <div>
            <h3>Certificate of English Proficiency</h3>
            <p className="text-sm text-muted">Issued by Room 305 English Academy for module completion</p>
          </div>
        </div>

        <div className="certificate-preview">
          <div className="cert-border">
            <div className="cert-title">CERTIFICATE OF ACCOMPLISHMENT</div>
            <div className="cert-subtitle">This certifies that</div>
            <div className="cert-name">{currentUser?.name || 'Alex Rivera'}</div>
            <div className="cert-body">
              has successfully demonstrated proficiency in <strong>English Communication, Grammar & Business Pitching</strong> with a overall mastery score of <strong>{quizAccuracyPercent}%</strong>.
            </div>
            <div className="cert-footer">
              <div>Date: {new Date().toLocaleDateString()}</div>
              <div className="cert-seal">verified by Room-305-English-Academy</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
