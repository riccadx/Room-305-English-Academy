import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import TeacherDashboard from './components/TeacherDashboard';
import LearnerDashboard from './components/LearnerDashboard';
import LessonViewer from './components/LessonViewer';
import InteractiveQuiz from './components/InteractiveQuiz';
import ProgressReport from './components/ProgressReport';
import WeeklyScheduleView from './components/WeeklyScheduleView';
import AnimatedLogin from './components/AnimatedLogin';
import DatabaseInspectorModal from './components/DatabaseInspectorModal';
import { dbService } from './services/db';
import './App.css';

export default function App() {
  const [currentUser, setCurrentUser] = useState(dbService.getCurrentUser());
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState('pathway'); // 'pathway' | 'feed' | 'manage' | 'create' | 'progress'

  // Day / Night Theme Mode State ('night' | 'day')
  const [isDayMode, setIsDayMode] = useState(() => {
    return localStorage.getItem('lingua_theme_v1') === 'day';
  });

  const toggleDayNightMode = () => {
    setIsDayMode((prev) => {
      const nextMode = !prev;
      localStorage.setItem('lingua_theme_v1', nextMode ? 'day' : 'night');
      return nextMode;
    });
  };

  useEffect(() => {
    if (isDayMode) {
      document.body.classList.add('day-mode');
    } else {
      document.body.classList.remove('day-mode');
    }
  }, [isDayMode]);
  
  // Modal / View states
  const [selectedLesson, setSelectedLesson] = useState(null);
  const [activeQuiz, setActiveQuiz] = useState(null);
  const [showDbInspector, setShowDbInspector] = useState(false);

  const handleLoginSuccess = (user) => {
    setCurrentUser(user);
    setIsAuthenticated(true);
    if (user.role === 'teacher') {
      setActiveTab('manage');
    } else {
      setActiveTab('pathway');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  const handleUserChange = (newUser) => {
    setCurrentUser(newUser);
    if (newUser.role === 'teacher') {
      setActiveTab('manage');
    } else {
      setActiveTab('pathway');
    }
  };

  const handleOpenLesson = (lesson) => {
    setSelectedLesson(lesson);
  };

  const handleOpenQuiz = (lesson, quiz) => {
    setSelectedLesson(lesson);
    setActiveQuiz({ lesson, quiz });
  };

  const handleCloseModals = () => {
    setSelectedLesson(null);
    setActiveQuiz(null);
  };

  const isTeacher = currentUser?.role === 'teacher';

  // If not authenticated, render Animated Login Screen
  if (!isAuthenticated) {
    return (
      <AnimatedLogin 
        onLoginSuccess={handleLoginSuccess}
        isDayMode={isDayMode}
        onToggleTheme={toggleDayNightMode}
      />
    );
  }

  return (
    <div className="app-layout">
      {/* Top Navbar Header */}
      <Navbar
        currentUser={currentUser}
        onUserChange={handleUserChange}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onLogout={handleLogout}
        isDayMode={isDayMode}
        onToggleTheme={toggleDayNightMode}
      />


      {/* Main Body View Container */}
      <main className="main-content">
        {isTeacher ? (
          // TEACHER / EDUCATOR PORTAL VIEWS (Strictly Educator Dashboard)
          <TeacherDashboard
            activeTab={activeTab === 'pathway' ? 'manage' : activeTab}
            setActiveTab={setActiveTab}
            onLessonSelect={handleOpenLesson}
          />
        ) : (
          // LEARNER / STUDENT PORTAL VIEWS
          <>
            {activeTab === 'progress' ? (
              <ProgressReport
                currentUser={currentUser}
                onOpenLesson={handleOpenLesson}
              />
            ) : activeTab === 'feed' ? (
              <LearnerDashboard
                currentUser={currentUser}
                onOpenLesson={handleOpenLesson}
                onOpenQuiz={handleOpenQuiz}
                onNavigateTab={(tabName) => setActiveTab(tabName)}
              />
            ) : (
              <WeeklyScheduleView currentUser={currentUser} />
            )}
          </>
        )}
      </main>

      {/* MODAL: LESSON VIEWER */}
      {selectedLesson && !activeQuiz && (
        <LessonViewer
          lesson={selectedLesson}
          currentUser={currentUser}
          onClose={handleCloseModals}
          onOpenQuiz={(lesson, quiz) => {
            setActiveQuiz({ lesson, quiz });
          }}
        />
      )}

      {/* MODAL: INTERACTIVE QUIZ */}
      {activeQuiz && (
        <InteractiveQuiz
          lesson={activeQuiz.lesson}
          quiz={activeQuiz.quiz}
          currentUser={currentUser}
          onClose={handleCloseModals}
        />
      )}

      {/* Footer */}
      <footer className="app-footer">
        <div className="footer-container">
          <p>© 2026 Room-305-English-Academy • Interactive English Learning Platform</p>
          <div className="footer-links">
            <button className="footer-link-btn" onClick={() => setShowDbInspector(true)}>
              📊 View Registered Accounts & Database
            </button>
            <span className="mx-2">•</span>
            <button className="footer-link-btn" onClick={() => handleLogout()}>
              Switch Account / Sign Out
            </button>
            <span className="mx-2">•</span>
            <button className="footer-link-btn" onClick={() => dbService.resetToDefault()}>
              Reset Database Demo
            </button>
          </div>
        </div>
      </footer>

      {/* Database Inspector Modal */}
      {showDbInspector && (
        <DatabaseInspectorModal
          onClose={() => setShowDbInspector(false)}
        />
      )}
    </div>
  );
}
