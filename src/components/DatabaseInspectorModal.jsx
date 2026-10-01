import React, { useState } from 'react';
import { Sparkles, X, Check, AlertTriangle, RefreshCw, Search, ShieldCheck, BookOpen, FileText, User } from './Icons';
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

  const [editingUserId, setEditingUserId] = useState(null);
  const [editName, setEditName] = useState('');
  const [editPassword, setEditPassword] = useState('');
  const [statusMsg, setStatusMsg] = useState('');

  const refreshData = () => {
    setUsers(dbService.getUsers());
    setLessons(dbService.getLessons());
    setQuizzes(dbService.getQuizzes());
  };

  const handleDeleteUser = (userId) => {
    if (userId === 'usr_teacher_1' || userId === 'usr_learner_1') {
      alert('Default demo accounts (Big & Student) cannot be deleted.');
      return;
    }
    if (window.confirm('Are you sure you want to delete this registered account?')) {
      const updated = users.filter(u => u.id !== userId);
      localStorage.setItem('lingua_users_v1', JSON.stringify(updated));
      setUsers(updated);
      setStatusMsg('✅ Account deleted successfully from Local Storage.');
      setTimeout(() => setStatusMsg(''), 3000);
    }
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
    setStatusMsg('✅ User account updated successfully.');
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
    const matchesSearch = u.name.toLowerCase().includes(userSearchQuery.toLowerCase()) || 
                          u.email.toLowerCase().includes(userSearchQuery.toLowerCase());
    const matchesRole = userRoleFilter === 'all' || u.role === userRoleFilter;
    return matchesSearch && matchesRole;
  });

  const teacherCount = users.filter(u => u.role === 'teacher').length;
  const learnerCount = users.filter(u => u.role === 'learner').length;

  return (
    <div 
      className="avatar-modal-overlay animate-fadeIn"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 999999,
        backgroundColor: 'rgba(9, 12, 21, 0.88)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem'
      }}
    >
      <div 
        className="avatar-modal-card"
        style={{
          width: '100%',
          maxWidth: '820px',
          maxHeight: '92vh',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          borderRadius: '24px',
          background: 'linear-gradient(145deg, rgba(26, 32, 53, 0.95), rgba(15, 23, 42, 0.98))',
          border: '1px solid rgba(139, 92, 246, 0.3)',
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6)'
        }}
      >
        {/* Header */}
        <div className="avatar-modal-header" style={{ padding: '1.25rem 1.5rem', background: 'rgba(255, 255, 255, 0.03)', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
          <div className="avatar-title-group" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{ padding: '0.6rem', borderRadius: '14px', background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.3), rgba(99, 102, 241, 0.3))', border: '1px solid rgba(139, 92, 246, 0.4)' }}>
              <Sparkles className="w-6 h-6 text-amber" />
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <h2 style={{ fontSize: '1.25rem', fontWeight: 800, margin: 0, color: '#ffffff', letterSpacing: '-0.01em' }}>
                  📊 Database Studio & Accounts Inspector
                </h2>
                <span style={{ padding: '0.2rem 0.6rem', borderRadius: '20px', fontSize: '0.7rem', fontWeight: 700, background: 'rgba(139, 92, 246, 0.2)', color: '#c4b5fd', border: '1px solid rgba(139, 92, 246, 0.4)' }}>
                  Teacher Portal Exclusive
                </span>
              </div>
              <p style={{ fontSize: '0.78rem', color: '#94a3b8', margin: '0.2rem 0 0', fontWeight: 500 }}>
                Manage registered accounts, view stored lessons, inspect student records & handle local storage JSON backups.
              </p>
            </div>
          </div>
          <button type="button" onClick={onClose} className="avatar-close-btn" title="Close Studio">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Stats Banner Bar */}
        <div style={{ padding: '0.75rem 1.5rem', background: 'rgba(0, 0, 0, 0.25)', borderBottom: '1px solid rgba(255, 255, 255, 0.06)', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.75rem' }}>
          <div style={{ background: 'rgba(255, 255, 255, 0.04)', padding: '0.5rem 0.8rem', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
            <span style={{ fontSize: '0.7rem', color: '#94a3b8', display: 'block', fontWeight: 600 }}>TOTAL ACCOUNTS</span>
            <span style={{ fontSize: '1.1rem', fontWeight: 800, color: '#ffffff' }}>{users.length} Users</span>
          </div>
          <div style={{ background: 'rgba(139, 92, 246, 0.08)', padding: '0.5rem 0.8rem', borderRadius: '12px', border: '1px solid rgba(139, 92, 246, 0.2)' }}>
            <span style={{ fontSize: '0.7rem', color: '#c4b5fd', display: 'block', fontWeight: 600 }}>EDUCATORS</span>
            <span style={{ fontSize: '1.1rem', fontWeight: 800, color: '#ddd6fe' }}>👩‍🏫 {teacherCount}</span>
          </div>
          <div style={{ background: 'rgba(16, 185, 129, 0.08)', padding: '0.5rem 0.8rem', borderRadius: '12px', border: '1px solid rgba(16, 185, 129, 0.2)' }}>
            <span style={{ fontSize: '0.7rem', color: '#6ee7b7', display: 'block', fontWeight: 600 }}>STUDENTS</span>
            <span style={{ fontSize: '1.1rem', fontWeight: 800, color: '#a7f3d0' }}>🧑‍🎓 {learnerCount}</span>
          </div>
          <div style={{ background: 'rgba(59, 130, 246, 0.08)', padding: '0.5rem 0.8rem', borderRadius: '12px', border: '1px solid rgba(59, 130, 246, 0.2)' }}>
            <span style={{ fontSize: '0.7rem', color: '#93c5fd', display: 'block', fontWeight: 600 }}>LESSONS & QUIZZES</span>
            <span style={{ fontSize: '1.1rem', fontWeight: 800, color: '#bfdbfe' }}>📚 {lessons.length} / 📝 {quizzes.length}</span>
          </div>
        </div>

        {/* Status Alert Message */}
        {statusMsg && (
          <div style={{ padding: '0.65rem 1.5rem', background: 'rgba(16, 185, 129, 0.2)', color: '#6ee7b7', fontSize: '0.85rem', fontWeight: 700, borderBottom: '1px solid rgba(16, 185, 129, 0.3)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Check className="w-4 h-4 text-emerald" />
            {statusMsg}
          </div>
        )}

        {/* Tab Navigation Header */}
        <div className="avatar-studio-tabs" style={{ padding: '0.5rem 1.5rem 0', background: 'transparent' }}>
          <button
            type="button"
            className={`studio-tab-btn ${activeTab === 'users' ? 'active' : ''}`}
            onClick={() => setActiveTab('users')}
          >
            <span>👥 Registered Accounts</span>
            <span className="studio-tab-count">{users.length}</span>
          </button>
          <button
            type="button"
            className={`studio-tab-btn ${activeTab === 'lessons' ? 'active' : ''}`}
            onClick={() => setActiveTab('lessons')}
          >
            <span>📚 Lessons</span>
            <span className="studio-tab-count">{lessons.length}</span>
          </button>
          <button
            type="button"
            className={`studio-tab-btn ${activeTab === 'quizzes' ? 'active' : ''}`}
            onClick={() => setActiveTab('quizzes')}
          >
            <span>📝 Quizzes</span>
            <span className="studio-tab-count">{quizzes.length}</span>
          </button>
          <button
            type="button"
            className={`studio-tab-btn ${activeTab === 'backup' ? 'active' : ''}`}
            onClick={() => setActiveTab('backup')}
          >
            <span>💾 Backup & JSON</span>
          </button>
        </div>

        {/* Main Scrollable Body Area */}
        <div className="avatar-modal-scroll" style={{ padding: '1.25rem 1.5rem', flex: 1, overflowY: 'auto' }}>
          {/* TAB 1: USERS & ACCOUNTS */}
          {activeTab === 'users' && (
            <div>
              {/* Search and Filters Bar */}
              <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1rem', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', gap: '0.5rem', flex: 1, minWidth: '220px' }}>
                  <div style={{ position: 'relative', flex: 1 }}>
                    <Search className="w-4 h-4" style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
                    <input
                      type="text"
                      placeholder="Search accounts by name or email..."
                      value={userSearchQuery}
                      onChange={(e) => setUserSearchQuery(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '0.45rem 0.75rem 0.45rem 2.2rem',
                        borderRadius: '10px',
                        background: 'rgba(0, 0, 0, 0.4)',
                        border: '1px solid rgba(255, 255, 255, 0.12)',
                        color: '#ffffff',
                        fontSize: '0.82rem',
                        outline: 'none'
                      }}
                    />
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.4rem', alignItems: 'center' }}>
                  <button
                    onClick={() => setUserRoleFilter('all')}
                    style={{
                      padding: '0.35rem 0.7rem',
                      borderRadius: '8px',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      background: userRoleFilter === 'all' ? 'rgba(139, 92, 246, 0.3)' : 'rgba(255,255,255,0.06)',
                      color: userRoleFilter === 'all' ? '#c4b5fd' : '#94a3b8',
                      border: userRoleFilter === 'all' ? '1px solid rgba(139, 92, 246, 0.5)' : '1px solid transparent',
                      cursor: 'pointer'
                    }}
                  >
                    All ({users.length})
                  </button>
                  <button
                    onClick={() => setUserRoleFilter('teacher')}
                    style={{
                      padding: '0.35rem 0.7rem',
                      borderRadius: '8px',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      background: userRoleFilter === 'teacher' ? 'rgba(139, 92, 246, 0.3)' : 'rgba(255,255,255,0.06)',
                      color: userRoleFilter === 'teacher' ? '#c4b5fd' : '#94a3b8',
                      border: userRoleFilter === 'teacher' ? '1px solid rgba(139, 92, 246, 0.5)' : '1px solid transparent',
                      cursor: 'pointer'
                    }}
                  >
                    Teachers ({teacherCount})
                  </button>
                  <button
                    onClick={() => setUserRoleFilter('learner')}
                    style={{
                      padding: '0.35rem 0.7rem',
                      borderRadius: '8px',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      background: userRoleFilter === 'learner' ? 'rgba(16, 185, 129, 0.3)' : 'rgba(255,255,255,0.06)',
                      color: userRoleFilter === 'learner' ? '#6ee7b7' : '#94a3b8',
                      border: userRoleFilter === 'learner' ? '1px solid rgba(16, 185, 129, 0.5)' : '1px solid transparent',
                      cursor: 'pointer'
                    }}
                  >
                    Learners ({learnerCount})
                  </button>
                  <button
                    onClick={refreshData}
                    style={{ padding: '0.35rem 0.7rem', borderRadius: '8px', background: 'rgba(255,255,255,0.08)', color: '#fff', fontSize: '0.75rem', border: '1px solid rgba(255,255,255,0.15)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.3rem' }}
                    title="Reload data from LocalStorage"
                  >
                    <RefreshCw className="w-3.5 h-3.5" /> Refresh
                  </button>
                </div>
              </div>

              {/* Table of Registered Users */}
              <div style={{ overflowX: 'auto', borderRadius: '14px', border: '1px solid rgba(255,255,255,0.08)', background: 'rgba(0,0,0,0.2)' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.83rem', textAlign: 'left' }}>
                  <thead>
                    <tr style={{ background: 'rgba(255,255,255,0.05)', color: '#94a3b8', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                      <th style={{ padding: '0.7rem 0.9rem' }}>Avatar</th>
                      <th style={{ padding: '0.7rem 0.9rem' }}>Full Name</th>
                      <th style={{ padding: '0.7rem 0.9rem' }}>Email Address</th>
                      <th style={{ padding: '0.7rem 0.9rem' }}>Role</th>
                      <th style={{ padding: '0.7rem 0.9rem' }}>Password</th>
                      <th style={{ padding: '0.7rem 0.9rem', textAlign: 'right' }}>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredUsers.length === 0 ? (
                      <tr>
                        <td colSpan={6} style={{ padding: '2rem', textAlign: 'center', color: '#94a3b8' }}>
                          No accounts found matching your search filter.
                        </td>
                      </tr>
                    ) : (
                      filteredUsers.map((u) => (
                        <tr key={u.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', transition: 'background 0.2s ease' }} className="hover:bg-white/5">
                          <td style={{ padding: '0.65rem 0.9rem' }}>
                            {u.avatarConfig ? (
                              <RenderAvatar config={u.avatarConfig} size={34} />
                            ) : (
                              <img src={u.avatar} alt={u.name} style={{ width: '34px', height: '34px', borderRadius: '50%', objectFit: 'cover' }} />
                            )}
                          </td>
                          <td style={{ padding: '0.65rem 0.9rem', fontWeight: 700, color: '#ffffff' }}>
                            {editingUserId === u.id ? (
                              <input 
                                type="text" 
                                value={editName} 
                                onChange={(e) => setEditName(e.target.value)} 
                                style={{ padding: '0.25rem 0.5rem', borderRadius: '6px', background: 'rgba(0,0,0,0.6)', color: '#fff', border: '1px solid #818cf8', fontSize: '0.8rem', width: '130px' }}
                              />
                            ) : (
                              u.name
                            )}
                          </td>
                          <td style={{ padding: '0.65rem 0.9rem', color: '#a5b4fc', fontFamily: 'monospace', fontSize: '0.78rem' }}>{u.email}</td>
                          <td style={{ padding: '0.65rem 0.9rem' }}>
                            <span style={{ padding: '0.25rem 0.6rem', borderRadius: '12px', fontSize: '0.72rem', fontWeight: 700, background: u.role === 'teacher' ? 'rgba(139, 92, 246, 0.25)' : 'rgba(16, 185, 129, 0.25)', color: u.role === 'teacher' ? '#c4b5fd' : '#6ee7b7', border: u.role === 'teacher' ? '1px solid rgba(139, 92, 246, 0.4)' : '1px solid rgba(16, 185, 129, 0.4)' }}>
                              {u.role === 'teacher' ? '👩‍🏫 Teacher' : '🧑‍🎓 Learner'}
                            </span>
                          </td>
                          <td style={{ padding: '0.65rem 0.9rem', color: '#94a3b8', fontFamily: 'monospace', fontSize: '0.78rem' }}>
                            {editingUserId === u.id ? (
                              <input 
                                type="text" 
                                value={editPassword} 
                                onChange={(e) => setEditPassword(e.target.value)} 
                                style={{ padding: '0.25rem 0.5rem', borderRadius: '6px', background: 'rgba(0,0,0,0.6)', color: '#fff', border: '1px solid #818cf8', fontSize: '0.8rem', width: '110px' }}
                              />
                            ) : (
                              u.password || '••••••••'
                            )}
                          </td>
                          <td style={{ padding: '0.65rem 0.9rem', textAlign: 'right' }}>
                            {editingUserId === u.id ? (
                              <button
                                onClick={() => saveEditUser(u.id)}
                                style={{ padding: '0.3rem 0.65rem', borderRadius: '6px', background: '#10b981', color: '#fff', border: 'none', cursor: 'pointer', fontSize: '0.75rem', fontWeight: 700, marginRight: '0.3rem' }}
                              >
                                Save
                              </button>
                            ) : (
                              <button
                                onClick={() => startEditUser(u)}
                                style={{ padding: '0.3rem 0.65rem', borderRadius: '6px', background: 'rgba(255,255,255,0.1)', color: '#a5b4fc', border: 'none', cursor: 'pointer', fontSize: '0.75rem', marginRight: '0.3rem' }}
                              >
                                Edit
                              </button>
                            )}
                            <button
                              onClick={() => handleDeleteUser(u.id)}
                              style={{ padding: '0.3rem 0.65rem', borderRadius: '6px', background: 'rgba(239,68,68,0.2)', color: '#f87171', border: '1px solid rgba(239,68,68,0.3)', cursor: 'pointer', fontSize: '0.75rem' }}
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 2: LESSONS */}
          {activeTab === 'lessons' && (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.85rem' }}>
                <span style={{ fontSize: '0.88rem', color: '#a5b4fc', fontWeight: 700 }}>
                  Saved Course Lessons in Database ({lessons.length})
                </span>
                <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>
                  Stored in `lingua_lessons_v1`
                </span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {lessons.map(l => (
                  <div key={l.id} style={{ padding: '0.9rem 1.15rem', borderRadius: '14px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <h4 style={{ margin: 0, fontSize: '0.95rem', color: '#ffffff', fontWeight: 700 }}>{l.title}</h4>
                        <span style={{ padding: '0.15rem 0.5rem', borderRadius: '8px', fontSize: '0.68rem', fontWeight: 700, background: 'rgba(99, 102, 241, 0.2)', color: '#a5b4fc' }}>
                          {l.module}
                        </span>
                      </div>
                      <p style={{ margin: '0.3rem 0 0', fontSize: '0.78rem', color: '#94a3b8' }}>
                        Level: <strong style={{ color: '#cbd5e1' }}>{l.level}</strong> • Est. Time: {l.estimatedTime || '15 min'} • Author: {l.authorName}
                      </p>
                    </div>
                    <span style={{ padding: '0.25rem 0.75rem', borderRadius: '12px', fontSize: '0.72rem', fontWeight: 700, background: l.published ? 'rgba(16,185,129,0.2)' : 'rgba(255,255,255,0.08)', color: l.published ? '#6ee7b7' : '#94a3b8', border: l.published ? '1px solid rgba(16,185,129,0.3)' : '1px solid transparent' }}>
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
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.85rem' }}>
                <span style={{ fontSize: '0.88rem', color: '#a5b4fc', fontWeight: 700 }}>
                  Interactive Quizzes in Database ({quizzes.length})
                </span>
                <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>
                  Stored in `lingua_quizzes_v1`
                </span>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '0.85rem' }}>
                {quizzes.map(q => (
                  <div key={q.id} style={{ padding: '1rem', borderRadius: '14px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                      <h4 style={{ margin: '0 0 0.4rem', fontSize: '0.95rem', color: '#ffffff', fontWeight: 700 }}>{q.title}</h4>
                      <p style={{ margin: 0, fontSize: '0.78rem', color: '#94a3b8' }}>
                        Lesson ID: <code style={{ color: '#c4b5fd', background: 'rgba(0,0,0,0.3)', padding: '0.1rem 0.4rem', borderRadius: '4px' }}>{q.lessonId}</code>
                      </p>
                    </div>
                    <div style={{ marginTop: '0.85rem', paddingTop: '0.6rem', borderTop: '1px solid rgba(255,255,255,0.06)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: '0.75rem', color: '#6ee7b7', fontWeight: 600 }}>
                        {q.questions ? q.questions.length : 0} Multiple-Choice Questions
                      </span>
                      <span style={{ fontSize: '0.7rem', color: '#cbd5e1', background: 'rgba(255,255,255,0.08)', padding: '0.2rem 0.5rem', borderRadius: '8px' }}>
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
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div style={{ padding: '1.25rem 1.5rem', borderRadius: '18px', background: 'rgba(99, 102, 241, 0.1)', border: '1px solid rgba(99, 102, 241, 0.3)' }}>
                <h3 style={{ margin: '0 0 0.5rem', fontSize: '1.1rem', color: '#ffffff', fontWeight: 700 }}>📥 Export Full Database (JSON)</h3>
                <p style={{ fontSize: '0.82rem', color: '#c7d2fe', margin: '0 0 1rem', lineHeight: 1.5 }}>
                  Download a full `.json` backup file containing all registered user accounts, cartoon avatar configs, teacher lessons, quizzes, and student learning history.
                </p>
                <button
                  onClick={exportBackupJSON}
                  style={{ padding: '0.7rem 1.3rem', borderRadius: '12px', background: 'linear-gradient(135deg, #6366f1, #8b5cf6)', color: '#ffffff', fontWeight: 700, border: 'none', cursor: 'pointer', fontSize: '0.88rem', boxShadow: '0 4px 15px rgba(99, 102, 241, 0.3)' }}
                >
                  📥 Download Complete Database Backup (.json)
                </button>
              </div>

              <div style={{ padding: '1.25rem 1.5rem', borderRadius: '18px', background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.3)' }}>
                <h3 style={{ margin: '0 0 0.5rem', fontSize: '1.1rem', color: '#ffffff', fontWeight: 700 }}>📤 Restore Database from Backup (JSON)</h3>
                <p style={{ fontSize: '0.82rem', color: '#a7f3d0', margin: '0 0 1rem', lineHeight: 1.5 }}>
                  Select a previously saved `.json` database file from your computer to instantly restore all registered accounts and course materials.
                </p>
                <input
                  type="file"
                  accept=".json"
                  onChange={importBackupJSON}
                  style={{ fontSize: '0.85rem', color: '#ffffff' }}
                />
              </div>

              <div style={{ padding: '1.25rem 1.5rem', borderRadius: '18px', background: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.3)' }}>
                <h3 style={{ margin: '0 0 0.5rem', fontSize: '1.1rem', color: '#f87171', fontWeight: 700 }}>⚠️ Reset Database to Defaults</h3>
                <p style={{ fontSize: '0.82rem', color: '#fca5a5', margin: '0 0 1rem', lineHeight: 1.5 }}>
                  Wipe custom user registrations and reset local browser memory back to clean seed data.
                </p>
                <button
                  onClick={() => {
                    if (window.confirm('Reset all local storage memory to default clean seeds?')) {
                      dbService.resetToDefault();
                    }
                  }}
                  style={{ padding: '0.65rem 1.1rem', borderRadius: '10px', background: 'rgba(239, 68, 68, 0.25)', color: '#f87171', border: '1px solid rgba(239, 68, 68, 0.5)', fontWeight: 700, cursor: 'pointer' }}
                >
                  <RefreshCw className="w-4 h-4 inline mr-1" /> Reset Local Storage Data
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="avatar-modal-footer" style={{ padding: '1rem 1.5rem', background: 'rgba(0,0,0,0.3)', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
          <button
            type="button"
            onClick={onClose}
            className="avatar-cancel-btn"
            style={{ width: '100%', borderRadius: '12px', padding: '0.65rem', fontWeight: 700 }}
          >
            Close Database Inspector Studio
          </button>
        </div>
      </div>
    </div>
  );
}
