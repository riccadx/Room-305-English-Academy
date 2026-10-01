import React, { useState } from 'react';
import { Sparkles, X, Check, AlertTriangle, RefreshCw, Search, ShieldCheck, BookOpen, FileText, User, Trash } from './Icons';
import { dbService } from '../services/db';
import { RenderAvatar } from './AvatarDesignerModal';

export default function DatabaseInspectorModal({ onClose }) {
  const [users, setUsers] = useState(() => dbService.getUsers());
  const [lessons, setLessons] = useState(() => dbService.getLessons());
  const [quizzes, setQuizzes] = useState(() => dbService.getQuizzes());
  const [activeTab, setActiveTab] = useState('users'); // 'users' | 'lessons' | 'quizzes' | 'backup'
  
  // Search & Filter state for Users
  const [userSearchQuery, setUserSearchQuery] = useState('');
  const [userRoleFilter, setUserRoleFilter] = useState('all'); // 'all' | 'teacher' | 'learner'
  const [selectedUserIds, setSelectedUserIds] = useState([]);

  const [editingUserId, setEditingUserId] = useState(null);
  const [editName, setEditName] = useState('');
  const [editPassword, setEditPassword] = useState('');
  const [statusMsg, setStatusMsg] = useState('');

  const refreshData = () => {
    const freshUsers = dbService.getUsers();
    setUsers(freshUsers);
    setLessons(dbService.getLessons());
    setQuizzes(dbService.getQuizzes());
    setSelectedUserIds([]);
  };

  // UNRESTRICTED PROFILE DELETION - Delete ANY user profile
  const handleDeleteUser = (userId, userName) => {
    if (window.confirm(`Are you sure you want to delete profile "${userName || 'this user'}"? This action will permanently remove this account.`)) {
      const updated = dbService.deleteUser(userId);
      setUsers(updated);
      setSelectedUserIds(prev => prev.filter(id => id !== userId));
      setStatusMsg(`✅ Profile "${userName || userId}" deleted successfully.`);
      setTimeout(() => setStatusMsg(''), 3000);
    }
  };

  // Batch delete selected user profiles
  const handleDeleteSelected = () => {
    if (selectedUserIds.length === 0) return;
    if (window.confirm(`Are you sure you want to delete all ${selectedUserIds.length} selected profiles?`)) {
      const updated = dbService.deleteMultipleUsers(selectedUserIds);
      setUsers(updated);
      setSelectedUserIds([]);
      setStatusMsg(`✅ Successfully deleted ${selectedUserIds.length} profiles.`);
      setTimeout(() => setStatusMsg(''), 3000);
    }
  };

  const handleSelectAllUsers = (e) => {
    if (e.target.checked) {
      setSelectedUserIds(filteredUsers.map(u => u.id));
    } else {
      setSelectedUserIds([]);
    }
  };

  const handleToggleSelectUser = (userId) => {
    setSelectedUserIds(prev => 
      prev.includes(userId) ? prev.filter(id => id !== userId) : [...prev, userId]
    );
  };

  const startEditUser = (user) => {
    setEditingUserId(user.id);
    setEditName(user.name);
    setEditPassword(user.password || '');
  };

  const saveEditUser = (userId) => {
    const updated = users.map(u => {
      if (u.id === userId) {
        return { ...u, name: editName, password: editPassword };
      }
      return u;
    });
    localStorage.setItem('lingua_users_v1', JSON.stringify(updated));
    setUsers(updated);
    setEditingUserId(null);
    setStatusMsg('✅ User profile updated successfully.');
    setTimeout(() => setStatusMsg(''), 3000);
  };

  const exportBackupJSON = () => {
    const data = {
      users: dbService.getUsers(),
      lessons: dbService.getLessons(),
      quizzes: dbService.getQuizzes(),
      progress: JSON.parse(localStorage.getItem('lingua_progress_v1') || '{}'),
      exportedAt: new Date().toISOString()
    };
    const jsonStr = JSON.stringify(data, null, 2);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `room305_database_backup_${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);
    setStatusMsg('📥 Full Database exported as JSON file successfully!');
    setTimeout(() => setStatusMsg(''), 3000);
  };

  const importBackupJSON = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const parsed = JSON.parse(event.target.result);
        if (parsed.users) localStorage.setItem('lingua_users_v1', JSON.stringify(parsed.users));
        if (parsed.lessons) localStorage.setItem('lingua_lessons_v1', JSON.stringify(parsed.lessons));
        if (parsed.quizzes) localStorage.setItem('lingua_quizzes_v1', JSON.stringify(parsed.quizzes));
        if (parsed.progress) localStorage.setItem('lingua_progress_v1', JSON.stringify(parsed.progress));
        refreshData();
        setStatusMsg('📤 Database restored successfully from JSON backup file!');
        setTimeout(() => setStatusMsg(''), 3000);
      } catch (err) {
        alert('Invalid JSON backup file format.');
      }
    };
    reader.readAsText(file);
  };

  // Filtered Users
  const filteredUsers = users.filter(u => {
    const matchesSearch = (u.name || '').toLowerCase().includes(userSearchQuery.toLowerCase()) || 
                          (u.email || '').toLowerCase().includes(userSearchQuery.toLowerCase());
    const matchesRole = userRoleFilter === 'all' || u.role === userRoleFilter;
    return matchesSearch && matchesRole;
  });

  const teacherCount = users.filter(u => u.role === 'teacher').length;
  const learnerCount = users.filter(u => u.role === 'learner').length;
  const allSelected = filteredUsers.length > 0 && filteredUsers.every(u => selectedUserIds.includes(u.id));

  return (
    <div 
      className="db-inspector-overlay animate-fadeIn"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100vw',
        height: '100vh',
        maxWidth: '100vw',
        maxHeight: '100vh',
        zIndex: 999999,
        backgroundColor: '#0b0f19',
        display: 'flex',
        flexDirection: 'column',
        padding: 0,
        margin: 0,
        overflow: 'hidden'
      }}
    >
      <div 
        className="db-inspector-card-fullscreen"
        style={{
          width: '100vw',
          height: '100vh',
          maxWidth: '100vw',
          maxHeight: '100vh',
          minWidth: '100vw',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          borderRadius: 0,
          background: 'linear-gradient(145deg, #111827 0%, #0b0f19 100%)',
          border: 'none',
          boxShadow: 'none',
          margin: 0,
          padding: 0
        }}
      >
        {/* Full Screen Top Header Bar */}
        <div className="avatar-modal-header" style={{ padding: '1rem 2rem', background: 'rgba(255, 255, 255, 0.03)', borderBottom: '1px solid rgba(255, 255, 255, 0.08)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div className="avatar-title-group" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ padding: '0.75rem', borderRadius: '16px', background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.35), rgba(99, 102, 241, 0.35))', border: '1px solid rgba(139, 92, 246, 0.5)', boxShadow: '0 0 20px rgba(139, 92, 246, 0.3)' }}>
              <Sparkles className="w-7 h-7 text-amber" />
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <h2 style={{ fontSize: '1.4rem', fontWeight: 800, margin: 0, color: '#ffffff', letterSpacing: '-0.01em' }}>
                  📊 Database Studio & Accounts Management (Full Screen)
                </h2>
                <span style={{ padding: '0.25rem 0.75rem', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 700, background: 'rgba(139, 92, 246, 0.25)', color: '#c4b5fd', border: '1px solid rgba(139, 92, 246, 0.5)' }}>
                  Teacher Portal Exclusive
                </span>
              </div>
              <p style={{ fontSize: '0.82rem', color: '#94a3b8', margin: '0.25rem 0 0', fontWeight: 500 }}>
                Manage & delete registered user profiles, view stored course lessons, inspect student quizzes & export database JSON.
              </p>
            </div>
          </div>
          <button 
            type="button" 
            onClick={onClose} 
            className="avatar-close-btn" 
            title="Close Full Screen Studio"
            style={{ padding: '0.6rem 1.25rem', borderRadius: '12px', background: 'rgba(239, 68, 68, 0.2)', color: '#f87171', border: '1px solid rgba(239, 68, 68, 0.4)', fontWeight: 700, fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}
          >
            <X className="w-5 h-5" /> Close Studio
          </button>
        </div>

        {/* Quick Stats Banner Bar */}
        <div style={{ padding: '0.85rem 2rem', background: 'rgba(0, 0, 0, 0.3)', borderBottom: '1px solid rgba(255, 255, 255, 0.06)', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}>
          <div style={{ background: 'rgba(255, 255, 255, 0.04)', padding: '0.6rem 1rem', borderRadius: '14px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
            <span style={{ fontSize: '0.72rem', color: '#94a3b8', display: 'block', fontWeight: 700, letterSpacing: '0.05em' }}>TOTAL REGISTERED PROFILES</span>
            <span style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff' }}>{users.length} Profiles</span>
          </div>
          <div style={{ background: 'rgba(139, 92, 246, 0.1)', padding: '0.6rem 1rem', borderRadius: '14px', border: '1px solid rgba(139, 92, 246, 0.25)' }}>
            <span style={{ fontSize: '0.72rem', color: '#c4b5fd', display: 'block', fontWeight: 700, letterSpacing: '0.05em' }}>TEACHER / EDUCATOR PROFILES</span>
            <span style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ddd6fe' }}>👩‍🏫 {teacherCount}</span>
          </div>
          <div style={{ background: 'rgba(16, 185, 129, 0.1)', padding: '0.6rem 1rem', borderRadius: '14px', border: '1px solid rgba(16, 185, 129, 0.25)' }}>
            <span style={{ fontSize: '0.72rem', color: '#6ee7b7', display: 'block', fontWeight: 700, letterSpacing: '0.05em' }}>LEARNER / STUDENT PROFILES</span>
            <span style={{ fontSize: '1.25rem', fontWeight: 800, color: '#a7f3d0' }}>🧑‍🎓 {learnerCount}</span>
          </div>
          <div style={{ background: 'rgba(59, 130, 246, 0.1)', padding: '0.6rem 1rem', borderRadius: '14px', border: '1px solid rgba(59, 130, 246, 0.25)' }}>
            <span style={{ fontSize: '0.72rem', color: '#93c5fd', display: 'block', fontWeight: 700, letterSpacing: '0.05em' }}>LESSONS & QUIZZES</span>
            <span style={{ fontSize: '1.25rem', fontWeight: 800, color: '#bfdbfe' }}>📚 {lessons.length} / 📝 {quizzes.length}</span>
          </div>
        </div>

        {/* Status Alert Message */}
        {statusMsg && (
          <div style={{ padding: '0.75rem 2rem', background: 'rgba(16, 185, 129, 0.25)', color: '#6ee7b7', fontSize: '0.9rem', fontWeight: 700, borderBottom: '1px solid rgba(16, 185, 129, 0.35)', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <Check className="w-5 h-5 text-emerald" />
            {statusMsg}
          </div>
        )}

        {/* Studio Workspace Tabs */}
        <div className="avatar-studio-tabs" style={{ padding: '0.6rem 2rem 0', background: 'transparent' }}>
          <button
            type="button"
            className={`studio-tab-btn ${activeTab === 'users' ? 'active' : ''}`}
            onClick={() => setActiveTab('users')}
            style={{ fontSize: '0.92rem', padding: '0.65rem 1.25rem' }}
          >
            <span>👥 Registered User Profiles</span>
            <span className="studio-tab-count">{users.length}</span>
          </button>
          <button
            type="button"
            className={`studio-tab-btn ${activeTab === 'lessons' ? 'active' : ''}`}
            onClick={() => setActiveTab('lessons')}
            style={{ fontSize: '0.92rem', padding: '0.65rem 1.25rem' }}
          >
            <span>📚 Stored Lessons</span>
            <span className="studio-tab-count">{lessons.length}</span>
          </button>
          <button
            type="button"
            className={`studio-tab-btn ${activeTab === 'quizzes' ? 'active' : ''}`}
            onClick={() => setActiveTab('quizzes')}
            style={{ fontSize: '0.92rem', padding: '0.65rem 1.25rem' }}
          >
            <span>📝 Quizzes</span>
            <span className="studio-tab-count">{quizzes.length}</span>
          </button>
          <button
            type="button"
            className={`studio-tab-btn ${activeTab === 'backup' ? 'active' : ''}`}
            onClick={() => setActiveTab('backup')}
            style={{ fontSize: '0.92rem', padding: '0.65rem 1.25rem' }}
          >
            <span>💾 Backup & JSON Database</span>
          </button>
        </div>

        {/* Main Fullscreen Scroll Container */}
        <div className="avatar-modal-scroll" style={{ padding: '1.5rem 2rem', flex: 1, overflowY: 'auto' }}>
          {/* TAB 1: REGISTERED PROFILES & DELETION */}
          {activeTab === 'users' && (
            <div>
              {/* Search, Batch Selection & Actions Bar */}
              <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.25rem', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', gap: '0.75rem', flex: 1, minWidth: '280px' }}>
                  <div style={{ position: 'relative', flex: 1 }}>
                    <Search className="w-5 h-5" style={{ position: 'absolute', left: '0.85rem', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
                    <input
                      type="text"
                      placeholder="Search profiles by name or email address..."
                      value={userSearchQuery}
                      onChange={(e) => setUserSearchQuery(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '0.55rem 1rem 0.55rem 2.5rem',
                        borderRadius: '12px',
                        background: 'rgba(0, 0, 0, 0.45)',
                        border: '1px solid rgba(255, 255, 255, 0.15)',
                        color: '#ffffff',
                        fontSize: '0.88rem',
                        outline: 'none'
                      }}
                    />
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
                  {/* Role Filters */}
                  <button
                    onClick={() => setUserRoleFilter('all')}
                    style={{
                      padding: '0.45rem 0.85rem',
                      borderRadius: '10px',
                      fontSize: '0.8rem',
                      fontWeight: 700,
                      background: userRoleFilter === 'all' ? 'rgba(139, 92, 246, 0.35)' : 'rgba(255,255,255,0.06)',
                      color: userRoleFilter === 'all' ? '#c4b5fd' : '#94a3b8',
                      border: userRoleFilter === 'all' ? '1px solid rgba(139, 92, 246, 0.6)' : '1px solid transparent',
                      cursor: 'pointer'
                    }}
                  >
                    All ({users.length})
                  </button>
                  <button
                    onClick={() => setUserRoleFilter('teacher')}
                    style={{
                      padding: '0.45rem 0.85rem',
                      borderRadius: '10px',
                      fontSize: '0.8rem',
                      fontWeight: 700,
                      background: userRoleFilter === 'teacher' ? 'rgba(139, 92, 246, 0.35)' : 'rgba(255,255,255,0.06)',
                      color: userRoleFilter === 'teacher' ? '#c4b5fd' : '#94a3b8',
                      border: userRoleFilter === 'teacher' ? '1px solid rgba(139, 92, 246, 0.6)' : '1px solid transparent',
                      cursor: 'pointer'
                    }}
                  >
                    Teachers ({teacherCount})
                  </button>
                  <button
                    onClick={() => setUserRoleFilter('learner')}
                    style={{
                      padding: '0.45rem 0.85rem',
                      borderRadius: '10px',
                      fontSize: '0.8rem',
                      fontWeight: 700,
                      background: userRoleFilter === 'learner' ? 'rgba(16, 185, 129, 0.35)' : 'rgba(255,255,255,0.06)',
                      color: userRoleFilter === 'learner' ? '#6ee7b7' : '#94a3b8',
                      border: userRoleFilter === 'learner' ? '1px solid rgba(16, 185, 129, 0.6)' : '1px solid transparent',
                      cursor: 'pointer'
                    }}
                  >
                    Learners ({learnerCount})
                  </button>

                  {/* Batch Delete Selected Profiles Button */}
                  {selectedUserIds.length > 0 && (
                    <button
                      onClick={handleDeleteSelected}
                      style={{
                        padding: '0.45rem 0.95rem',
                        borderRadius: '10px',
                        background: 'rgba(239, 68, 68, 0.3)',
                        color: '#f87171',
                        border: '1px solid rgba(239, 68, 68, 0.6)',
                        fontSize: '0.8rem',
                        fontWeight: 800,
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        boxShadow: '0 0 15px rgba(239, 68, 68, 0.3)'
                      }}
                    >
                      <Trash className="w-4 h-4" /> Delete Selected ({selectedUserIds.length})
                    </button>
                  )}

                  <button
                    onClick={refreshData}
                    style={{ padding: '0.45rem 0.85rem', borderRadius: '10px', background: 'rgba(255,255,255,0.08)', color: '#fff', fontSize: '0.8rem', fontWeight: 600, border: '1px solid rgba(255,255,255,0.15)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.35rem' }}
                    title="Reload data from LocalStorage"
                  >
                    <RefreshCw className="w-4 h-4" /> Refresh
                  </button>
                </div>
              </div>

              {/* Profiles Table with Unrestricted Deletion */}
              <div style={{ overflowX: 'auto', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(0,0,0,0.3)', boxShadow: '0 10px 30px rgba(0,0,0,0.4)' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.88rem', textAlign: 'left' }}>
                  <thead>
                    <tr style={{ background: 'rgba(255,255,255,0.06)', color: '#94a3b8', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                      <th style={{ padding: '0.85rem 1rem', width: '40px' }}>
                        <input
                          type="checkbox"
                          checked={allSelected}
                          onChange={handleSelectAllUsers}
                          style={{ cursor: 'pointer', width: '16px', height: '16px' }}
                          title="Select all profiles"
                        />
                      </th>
                      <th style={{ padding: '0.85rem 1rem' }}>Avatar</th>
                      <th style={{ padding: '0.85rem 1rem' }}>Full Name</th>
                      <th style={{ padding: '0.85rem 1rem' }}>Email Address</th>
                      <th style={{ padding: '0.85rem 1rem' }}>Role</th>
                      <th style={{ padding: '0.85rem 1rem' }}>Password</th>
                      <th style={{ padding: '0.85rem 1rem', textAlign: 'right' }}>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredUsers.length === 0 ? (
                      <tr>
                        <td colSpan={7} style={{ padding: '3rem', textAlign: 'center', color: '#94a3b8', fontSize: '0.95rem' }}>
                          No profiles found matching your search filter.
                        </td>
                      </tr>
                    ) : (
                      filteredUsers.map((u) => {
                        const isSelected = selectedUserIds.includes(u.id);
                        return (
                          <tr 
                            key={u.id} 
                            style={{ 
                              borderBottom: '1px solid rgba(255,255,255,0.05)', 
                              background: isSelected ? 'rgba(139, 92, 246, 0.12)' : 'transparent',
                              transition: 'background 0.2s ease' 
                            }} 
                            className="hover:bg-white/5"
                          >
                            <td style={{ padding: '0.75rem 1rem' }}>
                              <input
                                type="checkbox"
                                checked={isSelected}
                                onChange={() => handleToggleSelectUser(u.id)}
                                style={{ cursor: 'pointer', width: '16px', height: '16px' }}
                              />
                            </td>
                            <td style={{ padding: '0.75rem 1rem' }}>
                              {u.avatarConfig ? (
                                <RenderAvatar config={u.avatarConfig} size={38} />
                              ) : (
                                <img src={u.avatar} alt={u.name} style={{ width: '38px', height: '38px', borderRadius: '50%', objectFit: 'cover', border: '1px solid rgba(255,255,255,0.2)' }} />
                              )}
                            </td>
                            <td style={{ padding: '0.75rem 1rem', fontWeight: 700, color: '#ffffff', fontSize: '0.92rem' }}>
                              {editingUserId === u.id ? (
                                <input 
                                  type="text" 
                                  value={editName} 
                                  onChange={(e) => setEditName(e.target.value)} 
                                  style={{ padding: '0.35rem 0.6rem', borderRadius: '8px', background: 'rgba(0,0,0,0.6)', color: '#fff', border: '1px solid #818cf8', fontSize: '0.85rem', width: '160px' }}
                                />
                              ) : (
                                u.name
                              )}
                            </td>
                            <td style={{ padding: '0.75rem 1rem', color: '#a5b4fc', fontFamily: 'monospace', fontSize: '0.83rem' }}>{u.email}</td>
                            <td style={{ padding: '0.75rem 1rem' }}>
                              <span style={{ padding: '0.3rem 0.75rem', borderRadius: '14px', fontSize: '0.75rem', fontWeight: 700, background: u.role === 'teacher' ? 'rgba(139, 92, 246, 0.25)' : 'rgba(16, 185, 129, 0.25)', color: u.role === 'teacher' ? '#c4b5fd' : '#6ee7b7', border: u.role === 'teacher' ? '1px solid rgba(139, 92, 246, 0.4)' : '1px solid rgba(16, 185, 129, 0.4)' }}>
                                {u.role === 'teacher' ? '👩‍🏫 Teacher' : '🧑‍🎓 Learner'}
                              </span>
                            </td>
                            <td style={{ padding: '0.75rem 1rem', color: '#cbd5e1', fontFamily: 'monospace', fontSize: '0.83rem' }}>
                              {editingUserId === u.id ? (
                                <input 
                                  type="text" 
                                  value={editPassword} 
                                  onChange={(e) => setEditPassword(e.target.value)} 
                                  style={{ padding: '0.35rem 0.6rem', borderRadius: '8px', background: 'rgba(0,0,0,0.6)', color: '#fff', border: '1px solid #818cf8', fontSize: '0.85rem', width: '130px' }}
                                />
                              ) : (
                                u.password || '••••••••'
                              )}
                            </td>
                            <td style={{ padding: '0.75rem 1rem', textAlign: 'right' }}>
                              {editingUserId === u.id ? (
                                <button
                                  onClick={() => saveEditUser(u.id)}
                                  style={{ padding: '0.35rem 0.75rem', borderRadius: '8px', background: '#10b981', color: '#fff', border: 'none', cursor: 'pointer', fontSize: '0.78rem', fontWeight: 700, marginRight: '0.4rem' }}
                                >
                                  Save
                                </button>
                              ) : (
                                <button
                                  onClick={() => startEditUser(u)}
                                  style={{ padding: '0.35rem 0.75rem', borderRadius: '8px', background: 'rgba(255,255,255,0.1)', color: '#a5b4fc', border: 'none', cursor: 'pointer', fontSize: '0.78rem', marginRight: '0.4rem', fontWeight: 600 }}
                                >
                                  Edit
                                </button>
                              )}
                              
                              {/* UNRESTRICTED DELETE PROFILE BUTTON */}
                              <button
                                onClick={() => handleDeleteUser(u.id, u.name)}
                                style={{ padding: '0.35rem 0.75rem', borderRadius: '8px', background: 'rgba(239,68,68,0.25)', color: '#f87171', border: '1px solid rgba(239,68,68,0.4)', cursor: 'pointer', fontSize: '0.78rem', fontWeight: 700 }}
                                title={`Delete profile "${u.name}"`}
                              >
                                Delete Profile
                              </button>
                            </td>
                          </tr>
                        );
                      })
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 2: LESSONS */}
          {activeTab === 'lessons' && (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <span style={{ fontSize: '0.95rem', color: '#a5b4fc', fontWeight: 700 }}>
                  Stored Course Lessons in Local Storage Database ({lessons.length})
                </span>
                <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>
                  Key: `lingua_lessons_v1`
                </span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {lessons.map(l => (
                  <div key={l.id} style={{ padding: '1rem 1.35rem', borderRadius: '16px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                        <h4 style={{ margin: 0, fontSize: '1rem', color: '#ffffff', fontWeight: 700 }}>{l.title}</h4>
                        <span style={{ padding: '0.2rem 0.6rem', borderRadius: '8px', fontSize: '0.72rem', fontWeight: 700, background: 'rgba(99, 102, 241, 0.25)', color: '#a5b4fc' }}>
                          {l.module}
                        </span>
                      </div>
                      <p style={{ margin: '0.35rem 0 0', fontSize: '0.82rem', color: '#94a3b8' }}>
                        Level: <strong style={{ color: '#cbd5e1' }}>{l.level}</strong> • Est. Time: {l.estimatedTime || '15 min'} • Author: {l.authorName}
                      </p>
                    </div>
                    <span style={{ padding: '0.3rem 0.85rem', borderRadius: '14px', fontSize: '0.78rem', fontWeight: 700, background: l.published ? 'rgba(16,185,129,0.2)' : 'rgba(255,255,255,0.08)', color: l.published ? '#6ee7b7' : '#94a3b8', border: l.published ? '1px solid rgba(16,185,129,0.4)' : '1px solid transparent' }}>
                      {l.published ? '✓ Published' : 'Draft'}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: QUIZZES */}
          {activeTab === 'quizzes' && (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <span style={{ fontSize: '0.95rem', color: '#a5b4fc', fontWeight: 700 }}>
                  Interactive Quizzes ({quizzes.length})
                </span>
                <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>
                  Key: `lingua_quizzes_v1`
                </span>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '1rem' }}>
                {quizzes.map(q => (
                  <div key={q.id} style={{ padding: '1.15rem', borderRadius: '16px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                      <h4 style={{ margin: '0 0 0.5rem', fontSize: '1rem', color: '#ffffff', fontWeight: 700 }}>{q.title}</h4>
                      <p style={{ margin: 0, fontSize: '0.82rem', color: '#94a3b8' }}>
                        Lesson ID: <code style={{ color: '#c4b5fd', background: 'rgba(0,0,0,0.4)', padding: '0.15rem 0.5rem', borderRadius: '6px' }}>{q.lessonId}</code>
                      </p>
                    </div>
                    <div style={{ marginTop: '1rem', paddingTop: '0.75rem', borderTop: '1px solid rgba(255,255,255,0.06)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: '0.8rem', color: '#6ee7b7', fontWeight: 700 }}>
                        {q.questions ? q.questions.length : 0} Questions
                      </span>
                      <span style={{ fontSize: '0.75rem', color: '#cbd5e1', background: 'rgba(255,255,255,0.08)', padding: '0.25rem 0.6rem', borderRadius: '8px' }}>
                        Active Quiz
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: BACKUP & JSON */}
          {activeTab === 'backup' && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '1.5rem' }}>
              <div style={{ padding: '1.5rem', borderRadius: '20px', background: 'rgba(99, 102, 241, 0.1)', border: '1px solid rgba(99, 102, 241, 0.35)' }}>
                <h3 style={{ margin: '0 0 0.6rem', fontSize: '1.15rem', color: '#ffffff', fontWeight: 800 }}>📥 Export Full Database (JSON)</h3>
                <p style={{ fontSize: '0.85rem', color: '#c7d2fe', margin: '0 0 1.25rem', lineHeight: 1.6 }}>
                  Download a complete `.json` backup file containing all registered user profiles, avatar configurations, lessons, quizzes, and student scores.
                </p>
                <button
                  onClick={exportBackupJSON}
                  style={{ padding: '0.8rem 1.4rem', borderRadius: '14px', background: 'linear-gradient(135deg, #6366f1, #8b5cf6)', color: '#ffffff', fontWeight: 800, border: 'none', cursor: 'pointer', fontSize: '0.9rem', boxShadow: '0 4px 15px rgba(99, 102, 241, 0.35)' }}
                >
                  📥 Export Database (.json)
                </button>
              </div>

              <div style={{ padding: '1.5rem', borderRadius: '20px', background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.35)' }}>
                <h3 style={{ margin: '0 0 0.6rem', fontSize: '1.15rem', color: '#ffffff', fontWeight: 800 }}>📤 Restore Database (JSON)</h3>
                <p style={{ fontSize: '0.85rem', color: '#a7f3d0', margin: '0 0 1.25rem', lineHeight: 1.6 }}>
                  Select a previously exported `.json` database file from your computer to restore user profiles and course data.
                </p>
                <input
                  type="file"
                  accept=".json"
                  onChange={importBackupJSON}
                  style={{ fontSize: '0.88rem', color: '#ffffff' }}
                />
              </div>

              <div style={{ padding: '1.5rem', borderRadius: '20px', background: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.35)', gridColumn: '1 / -1' }}>
                <h3 style={{ margin: '0 0 0.6rem', fontSize: '1.15rem', color: '#f87171', fontWeight: 800 }}>⚠️ Reset Database Memory</h3>
                <p style={{ fontSize: '0.85rem', color: '#fca5a5', margin: '0 0 1.25rem', lineHeight: 1.6 }}>
                  Reset all browser local storage data back to default clean demo seeds.
                </p>
                <button
                  onClick={() => {
                    if (window.confirm('Are you sure you want to reset all local storage database memory to default clean seeds?')) {
                      dbService.resetToDefault();
                    }
                  }}
                  style={{ padding: '0.75rem 1.25rem', borderRadius: '12px', background: 'rgba(239, 68, 68, 0.3)', color: '#f87171', border: '1px solid rgba(239, 68, 68, 0.6)', fontWeight: 800, cursor: 'pointer', fontSize: '0.88rem' }}
                >
                  <RefreshCw className="w-4 h-4 inline mr-1.5" /> Reset Local Storage Data
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Full Screen Footer Bar */}
        <div className="avatar-modal-footer" style={{ padding: '1rem 2rem', background: 'rgba(0,0,0,0.4)', borderTop: '1px solid rgba(255,255,255,0.08)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '0.82rem', color: '#94a3b8' }}>
            Room-305 English Academy • Educator Database Studio Mode
          </span>
          <button
            type="button"
            onClick={onClose}
            className="avatar-cancel-btn"
            style={{ borderRadius: '12px', padding: '0.6rem 1.5rem', fontWeight: 700, fontSize: '0.88rem' }}
          >
            Exit Studio View
          </button>
        </div>
      </div>
    </div>
  );
}
