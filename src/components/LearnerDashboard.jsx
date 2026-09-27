import React, { useState } from 'react';
import { BookOpen, Search, Filter, Headphones, Video, FileText, CheckCircle, Sparkles, Flame, ChevronRight, Award, Star, Edit } from './Icons';
import { dbService } from '../services/db';

export default function LearnerDashboard({ currentUser, onOpenLesson, onOpenQuiz, onNavigateTab }) {
  const [lessons] = useState(dbService.getLessons().filter(l => l.published));
  const [quizzes] = useState(dbService.getQuizzes());
  const [progress] = useState(dbService.getProgress(currentUser?.id || 'usr_learner_1'));
  
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedModule, setSelectedModule] = useState('All');
  const [selectedLevel, setSelectedLevel] = useState('All');
  const [activeSkillFilter, setActiveSkillFilter] = useState('All'); // 'All' | 'listening' | 'writing' | 'reading' | 'speaking'

  // Filter lessons
  const filteredLessons = lessons.filter(l => {
    const matchesSearch = l.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          l.module.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesModule = selectedModule === 'All' || l.module === selectedModule;
    const matchesLevel = selectedLevel === 'All' || l.level === selectedLevel;
    
    let matchesSkill = true;
    if (activeSkillFilter === 'listening') matchesSkill = !!l.audioUrl;
    if (activeSkillFilter === 'writing') matchesSkill = l.module === 'Grammar' || l.module === 'Business';
    if (activeSkillFilter === 'reading') matchesSkill = true;
    if (activeSkillFilter === 'speaking') matchesSkill = !!l.videoUrl || l.module === 'Vocabulary';

    return matchesSearch && matchesModule && matchesLevel && matchesSkill;
  });

  // Calculate learner stats
  const completedCount = Object.keys(progress).filter(key => progress[key]?.completed).length;
  const totalLessonsCount = lessons.length;
  const progressPercent = totalLessonsCount > 0 ? Math.round((completedCount / totalLessonsCount) * 100) : 0;

  return (
    <div className="learner-dashboard">
      {/* Student Welcome Banner */}
      <div className="learner-banner">
        <div className="banner-content">
          <div className="welcome-row">
            <div>
              <h1 className="learner-title">Welcome to Room-305-English-Academy! 👋</h1>
              <p className="learner-subtitle">Weekly Self-Study (Mon–Wed) + 30-Minute Online Speaking Class (Thu)</p>
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

          <div className="progress-bar-wrapper mt-4">
            <div className="progress-bar-info">
              <span className="progress-label">Course Progress</span>
              <span className="progress-value">{completedCount} of {totalLessonsCount} Completed ({progressPercent}%)</span>
            </div>
            <div className="progress-track">
              <div className="progress-fill" style={{ width: `${progressPercent}%` }} />
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 1: WEEKLY CLASS SCHEDULE (MONDAY - THURSDAY + VOCABULARY) */}
      <div className="dashboard-section mt-8">
        <div className="section-title-row">
          <div>
            <h2 className="section-heading">📅 Section 1: Weekly Class Schedule</h2>
            <p className="section-subtext">Click on any day to open the self-study lessons or Thursday's live class.</p>
          </div>
          <button className="primary-btn text-sm" onClick={() => onNavigateTab('pathway')}>
            Open 30-Week Pathway →
          </button>
        </div>

        <div className="weekly-schedule-grid mt-4">
          <div className="day-card card-monday" onClick={() => onNavigateTab('pathway')}>
            <div className="day-badge">MONDAY</div>
            <div className="day-icon"><Headphones className="w-7 h-7 text-emerald" /></div>
            <h3 className="day-title">Listening Class</h3>
            <p className="day-desc">Listen to practical conversations, main idea & details with Japanese Help.</p>
            <span className="day-action">Start Listening →</span>
          </div>

          <div className="day-card card-tuesday" onClick={() => onNavigateTab('pathway')}>
            <div className="day-badge">TUESDAY</div>
            <div className="day-icon"><Edit className="w-7 h-7 text-indigo" /></div>
            <h3 className="day-title">Writing Class</h3>
            <p className="day-desc">Learn grammar structures, complete scaffolded sentences & short responses.</p>
            <span className="day-action">Start Writing →</span>
          </div>

          <div className="day-card card-wednesday" onClick={() => onNavigateTab('pathway')}>
            <div className="day-badge">WEDNESDAY</div>
            <div className="day-icon"><FileText className="w-7 h-7 text-amber" /></div>
            <h3 className="day-title">Reading & Prep</h3>
            <p className="day-desc">Read context stories, assign role-play script for Thursday class.</p>
            <span className="day-action">Prepare Script →</span>
          </div>

          <div className="day-card card-thursday" onClick={() => onNavigateTab('pathway')}>
            <div className="day-badge badge-thursday">THURSDAY</div>
            <div className="day-icon"><Video className="w-7 h-7 text-rose" /></div>
            <h3 className="day-title">Speaking Class</h3>
            <p className="day-desc">30-Minute Live Online Class with Teacher feedback & script discussion.</p>
            <span className="day-action">Join Live Class →</span>
          </div>

          <div className="day-card card-vocab" onClick={() => onNavigateTab('pathway')}>
            <div className="day-badge badge-vocab">VOCABULARY</div>
            <div className="day-icon"><Sparkles className="w-7 h-7 text-yellow" /></div>
            <h3 className="day-title">Vocabulary Hub</h3>
            <p className="day-desc">8–12 target words per week with Japanese tap-to-reveal help cards.</p>
            <span className="day-action">Study Vocab →</span>
          </div>
        </div>
      </div>

      {/* SECTION 2: SKILL PRACTICE HUBS (LISTENING, WRITING, READING, SPEAKING) */}
      <div className="dashboard-section mt-8">
        <div className="section-title-row">
          <div>
            <h2 className="section-heading">🎯 Section 2: Core Skill Study Hubs</h2>
            <p className="section-subtext">Filter your learning materials directly by core skill section.</p>
          </div>
        </div>

        <div className="skill-hubs-grid mt-4">
          <button
            className={`skill-hub-btn ${activeSkillFilter === 'listening' ? 'active' : ''}`}
            onClick={() => setActiveSkillFilter(activeSkillFilter === 'listening' ? 'All' : 'listening')}
          >
            <Headphones className="w-5 h-5 text-emerald" />
            <span>Listening Section</span>
          </button>

          <button
            className={`skill-hub-btn ${activeSkillFilter === 'writing' ? 'active' : ''}`}
            onClick={() => setActiveSkillFilter(activeSkillFilter === 'writing' ? 'All' : 'writing')}
          >
            <Edit className="w-5 h-5 text-indigo" />
            <span>Writing Section</span>
          </button>

          <button
            className={`skill-hub-btn ${activeSkillFilter === 'reading' ? 'active' : ''}`}
            onClick={() => setActiveSkillFilter(activeSkillFilter === 'reading' ? 'All' : 'reading')}
          >
            <FileText className="w-5 h-5 text-amber" />
            <span>Reading Section</span>
          </button>

          <button
            className={`skill-hub-btn ${activeSkillFilter === 'speaking' ? 'active' : ''}`}
            onClick={() => setActiveSkillFilter(activeSkillFilter === 'speaking' ? 'All' : 'speaking')}
          >
            <Video className="w-5 h-5 text-rose" />
            <span>Speaking Section</span>
          </button>
        </div>
      </div>

      {/* SECTION 3: COURSE FEED & LESSON MATERIAL GRID */}
      <div className="dashboard-section mt-8">
        <div className="section-title-row">
          <div>
            <h2 className="section-heading">📚 Course Materials & Practice Quizzes</h2>
            <p className="section-subtext">Explore available study materials and check your progress.</p>
          </div>
        </div>

        {/* Filter Controls */}
        <div className="filter-bar mt-4">
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

                  <div className="media-pills-row">
                    {lesson.audioUrl && (
                      <span className="media-pill" title="Audio Listening Clip">
                        <Headphones className="w-3.5 h-3.5 text-emerald" /> Listening
                      </span>
                    )}
                    {lesson.videoUrl && (
                      <span className="media-pill" title="Video Lesson">
                        <Video className="w-3.5 h-3.5 text-indigo" /> Speaking/Video
                      </span>
                    )}
                    {lesson.pdfAttachment && (
                      <span className="media-pill" title="PDF Worksheet">
                        <FileText className="w-3.5 h-3.5 text-amber" /> Reading/PDF
                      </span>
                    )}
                  </div>

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
    </div>
  );
}
