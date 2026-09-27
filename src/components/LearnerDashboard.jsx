import React, { useState } from 'react';
import { BookOpen, Search, Filter, Headphones, Video, FileText, CheckCircle, Sparkles, Flame, ChevronRight, Award, Star } from './Icons';
import { dbService } from '../services/db';

export default function LearnerDashboard({ currentUser, onOpenLesson, onOpenQuiz }) {
  const [lessons] = useState(dbService.getLessons().filter(l => l.published));
  const [quizzes] = useState(dbService.getQuizzes());
  const [progress, setProgress] = useState(dbService.getProgress(currentUser?.id || 'usr_learner_1'));
  
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedModule, setSelectedModule] = useState('All');
  const [selectedLevel, setSelectedLevel] = useState('All');

  // Filter lessons
  const filteredLessons = lessons.filter(l => {
    const matchesSearch = l.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          l.module.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesModule = selectedModule === 'All' || l.module === selectedModule;
    const matchesLevel = selectedLevel === 'All' || l.level === selectedLevel;
    return matchesSearch && matchesModule && matchesLevel;
  });

  // Calculate learner stats
  const completedCount = Object.keys(progress).filter(key => progress[key]?.completed).length;
  const totalLessonsCount = lessons.length;
  const progressPercent = totalLessonsCount > 0 ? Math.round((completedCount / totalLessonsCount) * 100) : 0;

  return (
    <div className="learner-dashboard">
      {/* Student Welcome & Progress Banner */}
      <div className="learner-banner">
        <div className="banner-content">
          <div className="welcome-row">
            <div>
              <h1 className="learner-title">Welcome back, {currentUser?.name}! 👋</h1>
              <p className="learner-subtitle">Keep up your daily English practice and master new skills.</p>
            </div>
            
            <div className="learner-badges-group">
              <div className="stat-pill streak-pill">
                <Flame className="w-5 h-5 text-amber" />
                <span>{currentUser?.streak || 5} Day Streak</span>
              </div>
              <div className="stat-pill xp-pill">
                <Star className="w-5 h-5 text-yellow" />
                <span>{currentUser?.xp || 420} XP</span>
              </div>
            </div>
          </div>

          {/* Progress Bar Container */}
          <div className="progress-bar-wrapper mt-4">
            <div className="progress-bar-info">
              <span className="progress-label">Course Completion Rate</span>
              <span className="progress-value">{completedCount} of {totalLessonsCount} Lessons Completed ({progressPercent}%)</span>
            </div>
            <div className="progress-track">
              <div className="progress-fill" style={{ width: `${progressPercent}%` }} />
            </div>
          </div>
        </div>
      </div>

      {/* Filter Controls */}
      <div className="filter-bar mt-6">
        <div className="search-input-wrapper">
          <Search className="w-4 h-4 search-icon" />
          <input
            type="text"
            placeholder="Search lessons by title or keyword..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
        </div>

        <div className="filter-group-right">
          <div className="filter-select-wrapper">
            <Filter className="w-4 h-4 filter-icon" />
            <select
              value={selectedModule}
              onChange={(e) => setSelectedModule(e.target.value)}
              className="filter-select"
            >
              <option value="All">All Modules</option>
              <option value="Grammar">Grammar</option>
              <option value="Business">Business English</option>
              <option value="Vocabulary">Vocabulary</option>
              <option value="Pronunciation">Pronunciation</option>
            </select>
          </div>

          <div className="filter-select-wrapper">
            <select
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)}
              className="filter-select"
            >
              <option value="All">All Levels</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
          </div>
        </div>
      </div>

      {/* Course Cards Grid */}
      <div className="cards-grid mt-6">
        {filteredLessons.length === 0 ? (
          <div className="empty-state full-width">
            <BookOpen className="w-12 h-12 text-muted" />
            <h3>No matching lessons found</h3>
            <p>Try searching for a different keyword or resetting your category filters.</p>
          </div>
        ) : (
          filteredLessons.map((lesson) => {
            const lessonProgress = progress[lesson.id];
            const isCompleted = lessonProgress?.completed;
            const quiz = quizzes.find(q => q.lessonId === lesson.id);

            return (
              <div key={lesson.id} className={`lesson-card ${isCompleted ? 'lesson-card-completed' : ''}`}>
                <div className="card-top">
                  <div className="card-badges">
                    <span className="badge badge-module">{lesson.module}</span>
                    <span className="badge badge-level">{lesson.level}</span>
                  </div>

                  {isCompleted && (
                    <span className="completion-badge">
                      <CheckCircle className="w-4 h-4" /> Completed
                    </span>
                  )}
                </div>

                <h3 className="card-title" onClick={() => onOpenLesson(lesson)}>
                  {lesson.title}
                </h3>

                <p className="card-meta">
                  <span>⏱️ {lesson.estimatedTime || '15 min'}</span>
                  <span>•</span>
                  <span>By {lesson.authorName}</span>
                </p>

                {/* Media Attachment Badges */}
                <div className="media-pills-row">
                  {lesson.audioUrl && (
                    <span className="media-pill" title="Audio Listening Clip">
                      <Headphones className="w-3.5 h-3.5 text-emerald" /> Audio
                    </span>
                  )}
                  {lesson.videoUrl && (
                    <span className="media-pill" title="Video Lesson">
                      <Video className="w-3.5 h-3.5 text-indigo" /> Video
                    </span>
                  )}
                  {lesson.pdfAttachment && (
                    <span className="media-pill" title="PDF Worksheet">
                      <FileText className="w-3.5 h-3.5 text-amber" /> PDF
                    </span>
                  )}
                </div>

                {/* Card Footer / Actions */}
                <div className="card-footer">
                  <button className="secondary-btn flex-1" onClick={() => onOpenLesson(lesson)}>
                    <BookOpen className="w-4 h-4" /> Read Material
                  </button>

                  {quiz ? (
                    <button
                      className={`primary-btn flex-1 ${isCompleted ? 'btn-completed-quiz' : ''}`}
                      onClick={() => onOpenQuiz(lesson, quiz)}
                    >
                      <Sparkles className="w-4 h-4" />
                      {isCompleted ? `Quiz (${lessonProgress.quizScore}/${lessonProgress.maxScore})` : 'Take Quiz'}
                    </button>
                  ) : (
                    <button className="secondary-btn flex-1" disabled>
                      No Quiz
                    </button>
                  )}
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
