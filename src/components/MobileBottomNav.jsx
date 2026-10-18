import React from 'react';
import { Compass, BookOpen, Calendar, Award, User, Plus, Edit } from './Icons';
import { RenderAvatar } from './AvatarDesignerModal';

export default function MobileBottomNav({ 
  currentUser, 
  activeTab, 
  setActiveTab,
  onOpenAvatar 
}) {
  const isTeacher = currentUser?.role === 'teacher';

  const navItems = isTeacher
    ? [
        { id: 'pathway', label: 'Pathway', icon: <Compass className="w-5 h-5" /> },
        { id: 'manage', label: 'Lessons', icon: <BookOpen className="w-5 h-5" /> },
        { id: 'create', label: 'Create', icon: <Plus className="w-5 h-5" />, highlight: true },
        { id: 'schedule', label: 'Schedule', icon: <Calendar className="w-5 h-5" /> },
      ]
    : [
        { id: 'pathway', label: 'Pathway', icon: <Compass className="w-5 h-5" /> },
        { id: 'feed', label: 'Library', icon: <BookOpen className="w-5 h-5" /> },
        { id: 'schedule', label: 'Schedule', icon: <Calendar className="w-5 h-5" /> },
        { id: 'progress', label: 'Progress', icon: <Award className="w-5 h-5" /> },
      ];

  return (
    <nav className="mobile-bottom-nav" aria-label="Mobile Bottom Navigation">
      <div className="mobile-bottom-nav-inner">
        {navItems.map((item) => {
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              type="button"
              className={`mobile-nav-btn ${isActive ? 'active' : ''} ${item.highlight ? 'highlight-btn' : ''}`}
              onClick={() => setActiveTab(item.id)}
            >
              <div className="nav-icon-container">
                {item.icon}
                {isActive && <span className="active-dot" />}
              </div>
              <span className="mobile-nav-label">{item.label}</span>
            </button>
          );
        })}

        {/* Avatar / Profile shortcut button */}
        <button
          type="button"
          className="mobile-nav-btn profile-nav-btn"
          onClick={onOpenAvatar}
          title="Open Avatar / Profile"
        >
          <div className="nav-icon-container">
            {currentUser?.avatarConfig ? (
              <RenderAvatar config={currentUser.avatarConfig} size={22} className="avatar-mobile-thumb" />
            ) : (
              <div className="avatar-mobile-thumb-fallback">
                <User className="w-4 h-4 text-white" />
              </div>
            )}
          </div>
          <span className="mobile-nav-label">Profile</span>
        </button>
      </div>
    </nav>
  );
}
