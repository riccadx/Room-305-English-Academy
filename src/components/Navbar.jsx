import React, { useState } from 'react';
import { GraduationCap, User, RefreshCw, Sparkles, BookOpen, ShieldCheck, Sun, Moon } from './Icons';
import { dbService } from '../services/db';
import AvatarDesignerModal, { RenderAvatar } from './AvatarDesignerModal';
import DatabaseInspectorModal from './DatabaseInspectorModal';

export default function Navbar({ currentUser, onUserChange, activeTab, setActiveTab, onLogout, isDayMode, onToggleTheme }) {
  const isTeacher = currentUser?.role === 'teacher';
  const [showAvatarDesigner, setShowAvatarDesigner] = useState(false);
  const [showDbInspector, setShowDbInspector] = useState(false);

  const handleToggleRole = () => {
    const nextRole = isTeacher ? 'learner' : 'teacher';
    const newUser = dbService.switchRole(nextRole);
    onUserChange(newUser);
  };

  const handleSaveAvatar = (avatarConfig) => {
    if (currentUser) {
      const updatedUser = dbService.updateUserAvatar(currentUser.id, avatarConfig);
      onUserChange(updatedUser || currentUser);
      setShowAvatarDesigner(false);
    }
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-brand" onClick={() => setActiveTab('feed')}>
          <div className="brand-icon">
            <GraduationCap className="w-6 h-6 text-indigo" />
          </div>
          <div className="brand-text">
            <span className="brand-title">Room-305-English-Academy</span>
            <span className="brand-subtitle">English Learning Portal</span>
          </div>
        </div>

        {/* Navigation links depending on role */}
        <nav className="navbar-nav">
          {isTeacher ? (
            <>
              <button
                className={`nav-link ${activeTab === 'pathway' ? 'active' : ''}`}
                onClick={() => setActiveTab('pathway')}
              >
                <Sparkles className="w-4 h-4 text-amber" />
                30-Week Pathway
              </button>
              <button
                className={`nav-link ${activeTab === 'manage' ? 'active' : ''}`}
                onClick={() => setActiveTab('manage')}
              >
                <BookOpen className="w-4 h-4" />
                Lesson Management
              </button>
              <button
                className={`nav-link ${activeTab === 'create' ? 'active' : ''}`}
                onClick={() => setActiveTab('create')}
              >
                <Sparkles className="w-4 h-4" />
                Create Lesson & Quiz
              </button>
            </>
          ) : (
            <>
              <button
                className={`nav-link ${activeTab === 'pathway' ? 'active' : ''}`}
                onClick={() => setActiveTab('pathway')}
              >
                <Sparkles className="w-4 h-4 text-amber" />
                30-Week Pathway
              </button>
              <button
                className={`nav-link ${activeTab === 'feed' ? 'active' : ''}`}
                onClick={() => setActiveTab('feed')}
              >
                <BookOpen className="w-4 h-4" />
                Explore Courses
              </button>
              <button
                className={`nav-link ${activeTab === 'progress' ? 'active' : ''}`}
                onClick={() => setActiveTab('progress')}
              >
                <ShieldCheck className="w-4 h-4" />
                My Learning Progress
              </button>
            </>
          )}
        </nav>

        {/* Right Action Tools & Profile */}
        <div className="navbar-actions">
          {/* Day / Night Theme Toggle Button */}
          {onToggleTheme && (
            <button
              className="theme-toggle-btn"
              onClick={onToggleTheme}
              title={isDayMode ? "Switch to Night Mode 🌙" : "Switch to Day Mode ☀️"}
            >
              {isDayMode ? <Moon className="w-4 h-4 text-indigo" /> : <Sun className="w-4 h-4 text-amber" />}
              <span className="theme-toggle-label">{isDayMode ? 'Night Mode' : 'Day Mode'}</span>
            </button>
          )}

          {/* Active Portal Badge (Non-clickable) */}
          <span className={`role-badge ${isTeacher ? 'teacher-badge' : 'learner-badge'}`}>
            {isTeacher ? 'Educator Portal' : 'Learner Portal'}
          </span>

          {/* User Profile - Clickable to redesign avatar */}
          <div 
            className="user-profile-pill cursor-pointer hover:opacity-90 transition"
            onClick={() => setShowAvatarDesigner(true)}
            title="Click to customize your cartoon profile avatar!"
          >
            {currentUser?.avatarConfig ? (
              <RenderAvatar config={currentUser.avatarConfig} size={36} className="user-avatar" />
            ) : (
              <img src={currentUser?.avatar} alt={currentUser?.name} className="user-avatar" />
            )}
            <div className="user-info">
              <span className="user-name flex items-center gap-1">
                {currentUser?.name}
                <Sparkles className="w-3 h-3 text-amber inline" />
              </span>
              <span className="user-role">{isTeacher ? 'Teacher / Admin' : 'Student'}</span>
            </div>
          </div>

          {/* Logout / Sign Out Button */}
          {onLogout && (
            <button className="primary-btn text-xs py-1.5 px-3" onClick={onLogout} title="Log out to Login / Register screen">
              Sign Out
            </button>
          )}

          {/* Database Inspector & Reset Demo Buttons - STRICTLY TEACHER / EDUCATOR PORTAL ONLY */}
          {isTeacher && (
            <>
              <button 
                className="teacher-db-inspector-btn" 
                onClick={() => setShowDbInspector(true)} 
                title="📊 Open Database & Registered Accounts Inspector (Educator Only)"
              >
                <span className="teacher-db-icon">📊</span>
                <span className="teacher-db-text">DB Studio</span>
              </button>

              <button className="icon-btn" onClick={() => dbService.resetToDefault()} title="Reset demo database">
                <RefreshCw className="w-4 h-4" />
              </button>
            </>
          )}
        </div>
      </div>

      {/* Avatar Redesign Modal */}
      {showAvatarDesigner && (
        <AvatarDesignerModal
          user={currentUser}
          onSave={handleSaveAvatar}
          onClose={() => setShowAvatarDesigner(false)}
        />
      )}

      {/* Database Inspector Modal */}
      {showDbInspector && (
        <DatabaseInspectorModal
          onClose={() => setShowDbInspector(false)}
        />
      )}
    </header>
  );
}


