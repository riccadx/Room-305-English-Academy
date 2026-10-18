import React, { useState } from 'react';
import { GraduationCap, Menu, Sparkles, Smartphone } from './Icons';
import AvatarDesignerModal, { RenderAvatar } from './AvatarDesignerModal';
import { dbService } from '../services/db';

export default function Navbar({ 
  currentUser,
  onUserChange,
  setActiveTab, 
  onToggleSidebar,
  sidebarOpen,
  onOpenInstallPrompt
}) {
  const isTeacher = currentUser?.role === 'teacher';
  const [showAvatarDesigner, setShowAvatarDesigner] = useState(false);

  const handleSaveAvatar = (avatarConfig) => {
    if (currentUser && onUserChange) {
      const updatedUser = dbService.updateUserAvatar(currentUser.id, avatarConfig);
      onUserChange(updatedUser || currentUser);
      setShowAvatarDesigner(false);
    }
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* Left Side: Sidebar Hamburger Toggle + Logo */}
        <div className="navbar-brand-group">
          {onToggleSidebar && (
            <button 
              type="button" 
              className={`sidebar-hamburger-btn ${sidebarOpen ? 'active' : ''}`}
              onClick={onToggleSidebar}
              title={sidebarOpen ? "Close Sidebar Navigation" : "Open Sidebar Navigation Menu ☰"}
            >
              <Menu className="w-5 h-5 text-white" />
            </button>
          )}

          {/* Logo */}
          <div className="navbar-brand" onClick={() => setActiveTab && setActiveTab('pathway')}>
            <div className="brand-icon">
              <GraduationCap className="w-6 h-6 text-indigo" />
            </div>
            <div className="brand-text">
              <span className="brand-title">Room-305-English-Academy</span>
              <span className="brand-subtitle">English Learning Portal</span>
            </div>
          </div>
        </div>

        {/* Right Side: Portal Role Badge & User Profile Pill */}
        <div className="navbar-actions">
          {/* Quick Install Mobile App Button */}
          {onOpenInstallPrompt && (
            <button
              type="button"
              className="navbar-install-app-btn"
              onClick={onOpenInstallPrompt}
              title="Install Room-305 Mobile App on Phone or PC"
            >
              <Smartphone className="w-4 h-4 text-emerald" />
              <span className="navbar-install-text">Install App</span>
            </button>
          )}

          {/* Active Portal Badge */}
          <span className={`role-badge ${isTeacher ? 'teacher-badge' : 'learner-badge'}`}>
            {isTeacher ? 'Educator Portal' : 'Learner Portal'}
          </span>

          {/* User Profile Pill - Clickable to open Avatar Designer */}
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
    </header>
  );
}
