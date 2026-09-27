import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import TeacherDashboard from './components/TeacherDashboard';
import LearnerDashboard from './components/LearnerDashboard';
import LessonViewer from './components/LessonViewer';
import InteractiveQuiz from './components/InteractiveQuiz';
import ProgressReport from './components/ProgressReport';
import { dbService } from './services/db';
import './App.css';

export default function App() {
  const [currentUser, setCurrentUser] = useState(dbService.getCurrentUser());
  const [activeTab, setActiveTab] = useState('feed'); // 'feed' | 'manage' | 'create' | 'progress'
  
  // Modal / View states
  const [selectedLesson, setSelectedLesson] = useState(null);
  const [activeQuiz, setActiveQuiz] = useState(null);

  // Sync activeTab when user switches roles
  const handleUserChange = (newUser) => {
    setCurrentUser(newUser);
    if (newUser.role === 'teacher') {
      setActiveTab('manage');
    } else {
      setActiveTab('feed');
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

  return (
    <div className="app-layout">
      {/* Top Navbar Header */}
      <Navbar
        currentUser={currentUser}
        onUserChange={handleUserChange}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* Main Body View Container */}
      <main className="main-content">
        {/* Protected Routing Guard */}
        {isTeacher ? (
          // TEACHER PORTAL VIEWS
          <TeacherDashboard
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            onLessonSelect={handleOpenLesson}
          />
        ) : (
          // LEARNER PORTAL VIEWS
          <>
            {activeTab === 'progress' ? (
              <ProgressReport
                currentUser={currentUser}
                onOpenLesson={handleOpenLesson}
              />
            ) : (
              <LearnerDashboard
                currentUser={currentUser}
                onOpenLesson={handleOpenLesson}
                onOpenQuiz={handleOpenQuiz}
              />
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
          <p>© 2026 Room 305 English Academy • Interactive English Learning Platform</p>
          <div className="footer-links">
            <button className="footer-link-btn" onClick={() => dbService.resetToDefault()}>
              Reset Database Demo
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
