import React, { useState } from 'react';
import { Sparkles, X, Check, RefreshCw, Search, Trash } from './Icons';
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
    <div className="db-inspector-overlay animate-fadeIn">
      <div className="db-inspector-card-fullscreen">
        {/* Full Screen Top Header Bar */}
        <div className="db-studio-header">
          <div className="avatar-title-group" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ padding: '0.75rem', borderRadius: '16px', background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.35), rgba(99, 102, 241, 0.35))', border: '1px solid rgba(139, 92, 246, 0.5)', boxShadow: '0 0 20px rgba(139, 92, 246, 0.3)' }}>
              <Sparkles className="w-7 h-7 text-amber" />
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <h2 className="db-studio-title">
                  📊 Database Studio & Accounts Management (Full Screen)
                </h2>
                <span className="db-role-badge-teacher">
                  Teacher Portal Exclusive
                </span>
              </div>
              <p className="db-studio-subtitle">
                Manage & delete registered user profiles, view stored course lessons, inspect student quizzes & export database JSON.
              </p>
            </div>
          </div>
          <button 
            type="button" 
            onClick={onClose} 
            className="avatar-close-btn" 
            title="Close Full Screen Studio"
            style={{ padding: '0.6rem 1.25rem', borderRadius: '12px', background: '#fee2e2', color: '#dc2626', border: '1px solid #fca5a5', fontWeight: 800, fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}
          >
            <X className="w-5 h-5" /> Close Studio
          </button>
        </div>

        {/* Quick Stats Banner Bar */}
        <div className="db-stats-bar">
          <div className="db-stat-card db-stat-card-total">
            <span className="db-stat-label">TOTAL REGISTERED PROFILES</span>
            <span className="db-stat-value">{users.length} Profiles</span>
          </div>
          <div className="db-stat-card db-stat-card-teacher">
            <span className="db-stat-label">TEACHER / EDUCATOR PROFILES</span>
            <span className="db-stat-value">👩‍🏫 {teacherCount}</span>
          </div>
          <div className="db-stat-card db-stat-card-learner">
            <span className="db-stat-label">LEARNER / STUDENT PROFILES</span>
            <span className="db-stat-value">🧑‍🎓 {learnerCount}</span>
          </div>
          <div className="db-stat-card db-stat-card-items">
            <span className="db-stat-label">LESSONS & QUIZZES</span>
            <span className="db-stat-value">📚 {lessons.length} / 📝 {quizzes.length}</span>
          </div>
        </div>

        {/* Status Alert Message */}
        {statusMsg && (
          <div style={{ padding: '0.75rem 2rem', background: 'rgba(16, 185, 129, 0.25)', color: '#047857', fontSize: '0.9rem', fontWeight: 800, borderBottom: '1px solid rgba(16, 185, 129, 0.35)', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <Check className="w-5 h-5" />
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
                    <Search className="w-5 h-5" style={{ position: 'absolute', left: '0.85rem', top: '50%', transform: 'translateY(-50%)', opacity: 0.7 }} />
                    <input
                      type="text"
                      className="db-search-input"
                      placeholder="Search profiles by name or email address..."
                      value={userSearchQuery}
                      onChange={(e) => setUserSearchQuery(e.target.value)}
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
                      fontWeight: 800,
                      background: userRoleFilter === 'all' ? '#ede9fe' : 'rgba(0,0,0,0.06)',
                      color: userRoleFilter === 'all' ? '#6d28d9' : 'inherit',
                      border: userRoleFilter === 'all' ? '1px solid #c4b5fd' : '1px solid transparent',
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
                      fontWeight: 800,
                      background: userRoleFilter === 'teacher' ? '#ede9fe' : 'rgba(0,0,0,0.06)',
                      color: userRoleFilter === 'teacher' ? '#6d28d9' : 'inherit',
                      border: userRoleFilter === 'teacher' ? '1px solid #c4b5fd' : '1px solid transparent',
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
                      fontWeight: 800,
                      background: userRoleFilter === 'learner' ? '#d1fae5' : 'rgba(0,0,0,0.06)',
                      color: userRoleFilter === 'learner' ? '#047857' : 'inherit',
                      border: userRoleFilter === 'learner' ? '1px solid #a7f3d0' : '1px solid transparent',
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
                        background: '#dc2626',
                        color: '#ffffff',
                        border: 'none',
                        fontSize: '0.8rem',
                        fontWeight: 800,
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        boxShadow: '0 4px 12px rgba(220, 38, 38, 0.35)'
                      }}
                    >
                      <Trash className="w-4 h-4" /> Delete Selected ({selectedUserIds.length})
                    </button>
                  )}

                  <button
                    onClick={refreshData}
                    style={{ padding: '0.45rem 0.85rem', borderRadius: '10px', background: '#e0e7ff', color: '#4338ca', fontSize: '0.8rem', fontWeight: 800, border: '1px solid #c7d2fe', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.35rem' }}
                    title="Reload data from LocalStorage"
                  >
                    <RefreshCw className="w-4 h-4" /> Refresh
                  </button>
                </div>
              </div>

              {/* Profiles Table with Unrestricted Deletion */}
              <div className="db-table-container">
                <table className="db-table">
                  <thead>
                    <tr>
                      <th style={{ width: '40px' }}>
                        <input
                          type="checkbox"
                          checked={allSelected}
                          onChange={handleSelectAllUsers}
                          style={{ cursor: 'pointer', width: '16px', height: '16px' }}
                          title="Select all profiles"
                        />
                      </th>
                      <th>Avatar</th>
                      <th>Full Name</th>
                      <th>Email Address</th>
                      <th>Role</th>
                      <th>Password</th>
                      <th style={{ textAlign: 'right' }}>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredUsers.length === 0 ? (
                      <tr>
                        <td colSpan={7} style={{ padding: '3rem', textAlign: 'center', fontSize: '0.95rem' }}>
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
                              background: isSelected ? 'rgba(139, 92, 246, 0.12)' : 'transparent',
                              transition: 'background 0.2s ease' 
                            }} 
                          >
                            <td>
                              <input
                                type="checkbox"
                                checked={isSelected}
                                onChange={() => handleToggleSelectUser(u.id)}
                                style={{ cursor: 'pointer', width: '16px', height: '16px' }}
                              />
                            </td>
                            <td>
                              {u.avatarConfig ? (
                                <RenderAvatar config={u.avatarConfig} size={38} />
                              ) : (
                                <img src={u.avatar} alt={u.name} style={{ width: '38px', height: '38px', borderRadius: '50%', objectFit: 'cover' }} />
                              )}
                            </td>
                            <td className="db-user-name">
                              {editingUserId === u.id ? (
                                <input 
                                  type="text" 
                                  value={editName} 
                                  onChange={(e) => setEditName(e.target.value)} 
                                  style={{ padding: '0.35rem 0.6rem', borderRadius: '8px', border: '1px solid #4f46e5', fontSize: '0.85rem', width: '160px', fontWeight: 700 }}
                                />
                              ) : (
                                u.name
                              )}
                            </td>
                            <td className="db-user-email">{u.email}</td>
                            <td>
                              <span className={u.role === 'teacher' ? 'db-role-badge-teacher' : 'db-role-badge-learner'}>
                                {u.role === 'teacher' ? '👩‍🏫 Teacher' : '🧑‍🎓 Learner'}
                              </span>
                            </td>
                            <td className="db-user-pwd">
                              {editingUserId === u.id ? (
                                <input 
                                  type="text" 
                                  value={editPassword} 
                                  onChange={(e) => setEditPassword(e.target.value)} 
                                  style={{ padding: '0.35rem 0.6rem', borderRadius: '8px', border: '1px solid #4f46e5', fontSize: '0.85rem', width: '130px', fontWeight: 700 }}
                                />
                              ) : (
                                u.password || '••••••••'
                              )}
                            </td>
                            <td style={{ textAlign: 'right' }}>
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
                                  style={{ padding: '0.35rem 0.75rem', borderRadius: '8px', background: '#e0e7ff', color: '#4338ca', border: 'none', cursor: 'pointer', fontSize: '0.78rem', marginRight: '0.4rem', fontWeight: 700 }}
                                >
                                  Edit
                                </button>
                              )}
                              
                              {/* UNRESTRICTED DELETE PROFILE BUTTON */}
                              <button
                                onClick={() => handleDeleteUser(u.id, u.name)}
                                style={{ padding: '0.35rem 0.75rem', borderRadius: '8px', background: '#ef4444', color: '#ffffff', border: 'none', cursor: 'pointer', fontSize: '0.78rem', fontWeight: 700, boxShadow: '0 2px 6px rgba(239, 68, 68, 0.3)' }}
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
                <span style={{ fontSize: '0.95rem', fontWeight: 800 }}>
                  Stored Course Lessons in Local Storage Database ({lessons.length})
                </span>
                <span style={{ fontSize: '0.8rem' }}>
                  Key: `lingua_lessons_v1`
                </span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {lessons.map(l => (
                  <div key={l.id} className="db-card-item" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                        <h4 style={{ margin: 0, fontSize: '1rem', fontWeight: 700 }}>{l.title}</h4>
                        <span style={{ padding: '0.2rem 0.6rem', borderRadius: '8px', fontSize: '0.72rem', fontWeight: 800, background: '#e0e7ff', color: '#4338ca' }}>
                          {l.module}
                        </span>
                      </div>
                      <p style={{ margin: '0.35rem 0 0', fontSize: '0.82rem' }}>
                        Level: <strong>{l.level}</strong> • Est. Time: {l.estimatedTime || '15 min'} • Author: {l.authorName}
                      </p>
                    </div>
                    <span style={{ padding: '0.3rem 0.85rem', borderRadius: '14px', fontSize: '0.78rem', fontWeight: 800, background: l.published ? '#d1fae5' : 'rgba(0,0,0,0.06)', color: l.published ? '#047857' : 'inherit' }}>
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
                <span style={{ fontSize: '0.95rem', fontWeight: 800 }}>
                  Interactive Quizzes ({quizzes.length})
                </span>
                <span style={{ fontSize: '0.8rem' }}>
                  Key: `lingua_quizzes_v1`
                </span>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '1rem' }}>
                {quizzes.map(q => (
                  <div key={q.id} className="db-card-item" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                      <h4 style={{ margin: '0 0 0.5rem', fontSize: '1rem', fontWeight: 700 }}>{q.title}</h4>
                      <p style={{ margin: 0, fontSize: '0.82rem' }}>
                        Lesson ID: <code style={{ color: '#4338ca', background: '#e0e7ff', padding: '0.15rem 0.5rem', borderRadius: '6px' }}>{q.lessonId}</code>
                      </p>
                    </div>
                    <div style={{ marginTop: '1rem', paddingTop: '0.75rem', borderTop: '1px solid rgba(0,0,0,0.08)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: '0.8rem', color: '#047857', fontWeight: 800 }}>
                        {q.questions ? q.questions.length : 0} Questions
                      </span>
                      <span style={{ fontSize: '0.75rem', padding: '0.25rem 0.6rem', borderRadius: '8px', background: 'rgba(0,0,0,0.06)', fontWeight: 700 }}>
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
              <div className="db-backup-export-card">
                <h3 style={{ margin: '0 0 0.6rem', fontSize: '1.15rem', fontWeight: 800 }}>📥 Export Full Database (JSON)</h3>
                <p style={{ fontSize: '0.85rem', margin: '0 0 1.25rem', lineHeight: 1.6 }}>
                  Download a complete `.json` backup file containing all registered user profiles, avatar configurations, lessons, quizzes, and student scores.
                </p>
                <button
                  onClick={exportBackupJSON}
                  style={{ padding: '0.8rem 1.4rem', borderRadius: '14px', background: 'linear-gradient(135deg, #6366f1, #8b5cf6)', color: '#ffffff', fontWeight: 800, border: 'none', cursor: 'pointer', fontSize: '0.9rem', boxShadow: '0 4px 15px rgba(99, 102, 241, 0.35)' }}
                >
                  📥 Export Database (.json)
                </button>
              </div>

              <div className="db-backup-restore-card">
                <h3 style={{ margin: '0 0 0.6rem', fontSize: '1.15rem', fontWeight: 800 }}>📤 Restore Database (JSON)</h3>
                <p style={{ fontSize: '0.85rem', margin: '0 0 1.25rem', lineHeight: 1.6 }}>
                  Select a previously exported `.json` database file from your computer to restore user profiles and course data.
                </p>
                <input
                  type="file"
                  accept=".json"
                  onChange={importBackupJSON}
                  style={{ fontSize: '0.88rem', fontWeight: 600 }}
                />
              </div>

              <div className="db-backup-reset-card">
                <h3 style={{ margin: '0 0 0.6rem', fontSize: '1.15rem', color: '#dc2626', fontWeight: 800 }}>⚠️ Reset Database Memory</h3>
                <p style={{ fontSize: '0.85rem', margin: '0 0 1.25rem', lineHeight: 1.6 }}>
                  Reset all browser local storage data back to default clean seeds.
                </p>
                <button
                  onClick={() => {
                    if (window.confirm('Are you sure you want to reset all local storage database memory to default clean seeds?')) {
                      dbService.resetToDefault();
                    }
                  }}
                  style={{ padding: '0.75rem 1.25rem', borderRadius: '12px', background: '#dc2626', color: '#ffffff', border: 'none', fontWeight: 800, cursor: 'pointer', fontSize: '0.88rem', boxShadow: '0 4px 12px rgba(220, 38, 38, 0.35)' }}
                >
                  <RefreshCw className="w-4 h-4 inline mr-1.5" /> Reset Local Storage Data
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Full Screen Footer Bar */}
        <div className="db-footer-bar">
          <span>
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
