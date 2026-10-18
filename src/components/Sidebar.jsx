import React from 'react';
import { GraduationCap, Sparkles, BookOpen, ShieldCheck, Sun, Moon, X, User, RefreshCw, Smartphone } from './Icons';
import { dbService } from '../services/db';
import { RenderAvatar } from './AvatarDesignerModal';

export default function Sidebar({ 
  currentUser, 
  activeTab, 
  setActiveTab, 
  isOpen, 
  onClose,
  onLogout, 
  isDayMode, 
  onToggleTheme,
  onOpenAvatar,
  onOpenDbInspector,
  onOpenInstallPrompt
}) {
  const isTeacher = currentUser?.role === 'teacher';

  const handleNavClick = (tabName) => {
    setActiveTab(tabName);
    if (onClose) onClose();
  };

  return (
    <>
      {/* Backdrop overlay for mobile drawer view */}
      {isOpen && (
        <div 
          className="sidebar-mobile-backdrop animate-fadeIn" 
          onClick={onClose}
        />
      )}

      {/* Main Sidebar Container */}
      <aside className={`app-sidebar ${isOpen ? 'sidebar-open' : ''}`}>
        <div className="sidebar-inner flex flex-col justify-between h-full">
          <div>
            {/* Sidebar Top Header */}
            <div className="sidebar-header">
              <div className="sidebar-brand" onClick={() => handleNavClick('pathway')}>
                <div className="brand-icon">
                  <GraduationCap className="w-6 h-6 text-indigo" />
                </div>
                <div className="brand-text">
                  <span className="brand-title">Room-305</span>
                  <span className="brand-subtitle">English Academy</span>
                </div>
              </div>
              <button 
                type="button" 
                className="sidebar-close-btn" 
                onClick={onClose}
                title="Close Sidebar"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Role Badge Indicator */}
            <div className="sidebar-role-badge-wrapper mt-3">
              <span className={`role-badge w-full text-center block ${isTeacher ? 'teacher-badge' : 'learner-badge'}`}>
                {isTeacher ? '👩‍🏫 Educator Portal' : '🧑‍🎓 Learner Portal'}
              </span>
            </div>

            {/* Sidebar Main Navigation List */}
            <nav className="sidebar-nav mt-4">
              <span className="sidebar-section-title">Navigation Menu</span>
              
              {isTeacher ? (
                <>
                  <button
                    className={`sidebar-nav-item ${activeTab === 'pathway' ? 'active' : ''}`}
                    onClick={() => handleNavClick('pathway')}
                  >
                    <Sparkles className="w-5 h-5 text-amber" />
                    <span>30-Week Pathway</span>
                  </button>
                  <button
                    className={`sidebar-nav-item ${activeTab === 'manage' ? 'active' : ''}`}
                    onClick={() => handleNavClick('manage')}
                  >
                    <BookOpen className="w-5 h-5 text-indigo" />
                    <span>Lesson Management</span>
                  </button>
                  <button
                    className={`sidebar-nav-item ${activeTab === 'create' ? 'active' : ''}`}
                    onClick={() => handleNavClick('create')}
                  >
                    <Sparkles className="w-5 h-5 text-purple" />
                    <span>Create Lesson & Quiz</span>
                  </button>
                </>
              ) : (
                <>
                  <button
                    className={`sidebar-nav-item ${activeTab === 'pathway' ? 'active' : ''}`}
                    onClick={() => handleNavClick('pathway')}
                  >
                    <Sparkles className="w-5 h-5 text-amber" />
                    <span>30-Week Pathway</span>
                  </button>
                  <button
                    className={`sidebar-nav-item ${activeTab === 'feed' ? 'active' : ''}`}
                    onClick={() => handleNavClick('feed')}
                  >
                    <BookOpen className="w-5 h-5 text-indigo" />
                    <span>Explore Courses</span>
                  </button>
                  <button
                    className={`sidebar-nav-item ${activeTab === 'progress' ? 'active' : ''}`}
                    onClick={() => handleNavClick('progress')}
                  >
                    <ShieldCheck className="w-5 h-5 text-emerald" />
                    <span>My Learning Progress</span>
                  </button>
                  <button
                    className={`sidebar-nav-item ${activeTab === 'profile' ? 'active' : ''}`}
                    onClick={() => handleNavClick('profile')}
                  >
                    <User className="w-5 h-5 text-purple" />
                    <span>Cartoon Profile & Mascot</span>
                  </button>
                </>
              )}
            </nav>

            {/* Quick Educator Tools */}
            {isTeacher && (
              <div className="sidebar-tools mt-5">
                <span className="sidebar-section-title">Educator Tools</span>
                <button 
                  className="sidebar-tool-btn teacher-studio-btn" 
                  onClick={() => {
                    if (onOpenDbInspector) onOpenDbInspector();
                    if (onClose) onClose();
                  }}
                >
                  <span className="text-base">📊</span>
                  <span>Database Inspector Studio</span>
                </button>
                <button 
                  className="sidebar-tool-btn" 
                  onClick={() => dbService.resetToDefault()}
                >
                  <RefreshCw className="w-4 h-4 text-amber" />
                  <span>Reset Database Seeds</span>
                </button>
              </div>
            )}

            {/* Install Mobile App Section for all users */}
            <div className="sidebar-tools mt-4">
              <span className="sidebar-section-title">Mobile App</span>
              <button 
                type="button"
                className="sidebar-tool-btn pwa-sidebar-btn" 
                onClick={() => {
                  if (onOpenInstallPrompt) onOpenInstallPrompt();
                  if (onClose) onClose();
                }}
              >
                <Smartphone className="w-4 h-4 text-emerald" />
                <span className="font-semibold text-emerald-light">📲 Install Phone App</span>
              </button>
            </div>
          </div>

          {/* Sidebar Footer: Profile & Logout Controls */}
          <div className="sidebar-footer pt-4 mt-6 border-t border-white/10">
            {/* User Profile Card */}
            <div 
              className="sidebar-profile-pill cursor-pointer"
              onClick={() => {
                if (onOpenAvatar) onOpenAvatar();
                if (onClose) onClose();
              }}
              title="Click to customize cartoon profile avatar"
            >
              {currentUser?.avatarConfig ? (
                <RenderAvatar config={currentUser.avatarConfig} size={40} className="user-avatar" />
              ) : (
                <img src={currentUser?.avatar} alt={currentUser?.name} className="user-avatar" />
              )}
              <div className="user-info flex-1">
                <span className="user-name flex items-center gap-1 font-bold text-white text-sm">
                  {currentUser?.name}
                  <Sparkles className="w-3.5 h-3.5 text-amber inline" />
                </span>
                <span className="user-role text-xs text-muted">{isTeacher ? 'Teacher / Admin' : 'Student'}</span>
              </div>
            </div>

            {/* Action Buttons: Theme Toggler & Logout */}
            <div className="sidebar-footer-actions mt-3 flex items-center gap-2">
              {onToggleTheme && (
                <button
                  className="sidebar-action-btn flex-1"
                  onClick={onToggleTheme}
                  title={isDayMode ? "Switch to Night Mode 🌙" : "Switch to Day Mode ☀️"}
                >
                  {isDayMode ? <Moon className="w-4 h-4 text-indigo inline mr-1" /> : <Sun className="w-4 h-4 text-amber inline mr-1" />}
                  <span>{isDayMode ? 'Night Mode' : 'Day Mode'}</span>
                </button>
              )}

              {onLogout && (
                <button 
                  className="sidebar-action-btn logout-btn" 
                  onClick={() => {
                    onLogout();
                    if (onClose) onClose();
                  }} 
                  title="Sign Out"
                >
                  Sign Out
                </button>
              )}
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
