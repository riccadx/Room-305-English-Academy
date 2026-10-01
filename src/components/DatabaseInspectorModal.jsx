import React, { useState } from 'react';
import { Sparkles, X, Check, AlertTriangle, RefreshCw } from './Icons';
import { dbService } from '../services/db';
import { RenderAvatar } from './AvatarDesignerModal';

export default function DatabaseInspectorModal({ onClose }) {
  const [users, setUsers] = useState(() => dbService.getUsers());
  const [lessons, setLessons] = useState(() => dbService.getLessons());
  const [quizzes, setQuizzes] = useState(() => dbService.getQuizzes());
  const [activeTab, setActiveTab] = useState('users'); // 'users' | 'lessons' | 'quizzes' | 'backup'
  
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
      alert('Default demo accounts cannot be deleted.');
      return;
    }
    if (window.confirm('Are you sure you want to delete this registered account?')) {
      const updated = users.filter(u => u.id !== userId);
      localStorage.setItem('lingua_users_v1', JSON.stringify(updated));
      setUsers(updated);
      setStatusMsg('✅ Account deleted successfully.');
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
    setStatusMsg('📥 Database exported as JSON file successfully!');
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
        setStatusMsg('📤 Database restored successfully from backup JSON!');
        setTimeout(() => setStatusMsg(''), 3000);
      } catch (err) {
        alert('Invalid JSON backup file.');
      }
    };
    reader.readAsText(file);
  };

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
        backgroundColor: 'rgba(11, 15, 25, 0.88)',
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
          maxWidth: '750px',
          maxHeight: '92vh',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          borderRadius: '24px'
        }}
      >
        {/* Header */}
        <div className="avatar-modal-header">
          <div className="avatar-title-group">
            <Sparkles className="w-6 h-6 text-amber" />
            <div>
              <h2>📊 Local Storage & Database Inspector</h2>
              <p style={{ fontSize: '0.75rem', color: '#94a3b8', margin: 0, fontWeight: 500 }}>
                View, edit, and check all registered accounts, lessons & student progress stored in browser memory
              </p>
            </div>
          </div>
          <button type="button" onClick={onClose} className="avatar-close-btn" title="Close">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Status Message Alert */}
        {statusMsg && (
          <div style={{ padding: '0.6rem 1.25rem', background: 'rgba(16, 185, 129, 0.2)', color: '#6ee7b7', fontSize: '0.85rem', fontWeight: 'bold', borderBottom: '1px solid rgba(16, 185, 129, 0.3)' }}>
            {statusMsg}
          </div>
        )}

        {/* Tab Navigation Header */}
        <div className="avatar-studio-tabs">
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
            <span>💾 Backup / Export</span>
          </button>
        </div>

        {/* Main Body Area */}
        <div className="avatar-modal-scroll" style={{ padding: '1.25rem' }}>
          {/* TAB 1: USERS */}
          {activeTab === 'users' && (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                <span style={{ fontSize: '0.85rem', color: '#a5b4fc', fontWeight: 'bold' }}>
                  Registered Users in Database ({users.length})
                </span>
                <button
                  onClick={refreshData}
                  style={{ padding: '0.3rem 0.7rem', borderRadius: '8px', background: 'rgba(255,255,255,0.08)', color: '#fff', fontSize: '0.75rem', border: '1px solid rgba(255,255,255,0.15)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.3rem' }}
                >
                  <RefreshCw className="w-3.5 h-3.5" /> Refresh List
                </button>
              </div>

              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.82rem', textAlign: 'left' }}>
                  <thead>
                    <tr style={{ background: 'rgba(255,255,255,0.06)', color: '#94a3b8', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                      <th style={{ padding: '0.6rem 0.8rem' }}>Avatar</th>
                      <th style={{ padding: '0.6rem 0.8rem' }}>Full Name</th>
                      <th style={{ padding: '0.6rem 0.8rem' }}>Email Address</th>
                      <th style={{ padding: '0.6rem 0.8rem' }}>Role</th>
                      <th style={{ padding: '0.6rem 0.8rem' }}>Password</th>
                      <th style={{ padding: '0.6rem 0.8rem', textAlign: 'right' }}>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((u) => (
                      <tr key={u.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', color: '#ffffff' }}>
                        <td style={{ padding: '0.6rem 0.8rem' }}>
                          {u.avatarConfig ? (
                            <RenderAvatar config={u.avatarConfig} size={32} />
                          ) : (
                            <img src={u.avatar} alt={u.name} style={{ width: '32px', height: '32px', borderRadius: '50%' }} />
                          )}
                        </td>
                        <td style={{ padding: '0.6rem 0.8rem', fontWeight: 'bold' }}>
                          {editingUserId === u.id ? (
                            <input 
                              type="text" 
                              value={editName} 
                              onChange={(e) => setEditName(e.target.value)} 
                              style={{ padding: '0.2rem 0.4rem', borderRadius: '6px', background: 'rgba(0,0,0,0.5)', color: '#fff', border: '1px solid #818cf8', fontSize: '0.8rem' }}
                            />
                          ) : (
                            u.name
                          )}
                        </td>
                        <td style={{ padding: '0.6rem 0.8rem', color: '#a5b4fc' }}>{u.email}</td>
                        <td style={{ padding: '0.6rem 0.8rem' }}>
                          <span style={{ padding: '0.2rem 0.5rem', borderRadius: '12px', fontSize: '0.7rem', fontWeight: 'bold', background: u.role === 'teacher' ? 'rgba(139, 92, 246, 0.25)' : 'rgba(16, 185, 129, 0.25)', color: u.role === 'teacher' ? '#c4b5fd' : '#6ee7b7' }}>
                            {u.role === 'teacher' ? '👩‍🏫 Teacher' : '🧑‍🎓 Learner'}
                          </span>
                        </td>
                        <td style={{ padding: '0.6rem 0.8rem', color: '#94a3b8' }}>
                          {editingUserId === u.id ? (
                            <input 
                              type="text" 
                              value={editPassword} 
                              onChange={(e) => setEditPassword(e.target.value)} 
                              style={{ padding: '0.2rem 0.4rem', borderRadius: '6px', background: 'rgba(0,0,0,0.5)', color: '#fff', border: '1px solid #818cf8', fontSize: '0.8rem' }}
                            />
                          ) : (
                            u.password || '••••••••'
                          )}
                        </td>
                        <td style={{ padding: '0.6rem 0.8rem', textAlign: 'right' }}>
                          {editingUserId === u.id ? (
                            <button
                              onClick={() => saveEditUser(u.id)}
                              style={{ padding: '0.25rem 0.6rem', borderRadius: '6px', background: '#10b981', color: '#fff', border: 'none', cursor: 'pointer', fontSize: '0.72rem', fontWeight: 'bold', marginRight: '0.3rem' }}
                            >
                              Save
                            </button>
                          ) : (
                            <button
                              onClick={() => startEditUser(u)}
                              style={{ padding: '0.25rem 0.6rem', borderRadius: '6px', background: 'rgba(255,255,255,0.1)', color: '#a5b4fc', border: 'none', cursor: 'pointer', fontSize: '0.72rem', marginRight: '0.3rem' }}
                            >
                              Edit
                            </button>
                          )}
                          <button
                            onClick={() => handleDeleteUser(u.id)}
                            style={{ padding: '0.25rem 0.6rem', borderRadius: '6px', background: 'rgba(239,68,68,0.2)', color: '#f87171', border: '1px solid rgba(239,68,68,0.3)', cursor: 'pointer', fontSize: '0.72rem' }}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 2: LESSONS */}
          {activeTab === 'lessons' && (
            <div>
              <span style={{ fontSize: '0.85rem', color: '#a5b4fc', fontWeight: 'bold', display: 'block', marginBottom: '0.75rem' }}>
                Saved Lessons in Database ({lessons.length})
              </span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {lessons.map(l => (
                  <div key={l.id} style={{ padding: '0.8rem 1rem', borderRadius: '12px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <h4 style={{ margin: 0, fontSize: '0.9rem', color: '#fff' }}>{l.title}</h4>
                      <p style={{ margin: '0.2rem 0 0', fontSize: '0.75rem', color: '#94a3b8' }}>
                        Module: {l.module} • Level: {l.level} • Author: {l.authorName}
                      </p>
                    </div>
                    <span style={{ padding: '0.2rem 0.6rem', borderRadius: '10px', fontSize: '0.7rem', background: l.published ? 'rgba(16,185,129,0.2)' : 'rgba(255,255,255,0.1)', color: l.published ? '#6ee7b7' : '#94a3b8' }}>
                      {l.published ? 'Published' : 'Draft'}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: QUIZZES */}
          {activeTab === 'quizzes' && (
            <div>
              <span style={{ fontSize: '0.85rem', color: '#a5b4fc', fontWeight: 'bold', display: 'block', marginBottom: '0.75rem' }}>
                Saved Quizzes in Database ({quizzes.length})
              </span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {quizzes.map(q => (
                  <div key={q.id} style={{ padding: '0.8rem 1rem', borderRadius: '12px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
                    <h4 style={{ margin: 0, fontSize: '0.9rem', color: '#fff' }}>{q.title}</h4>
                    <p style={{ margin: '0.2rem 0 0', fontSize: '0.75rem', color: '#94a3b8' }}>
                      Attached to Lesson ID: {q.lessonId} • Total Questions: {q.questions ? q.questions.length : 0}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: BACKUP / EXPORT */}
          {activeTab === 'backup' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div style={{ padding: '1.25rem', borderRadius: '16px', background: 'rgba(99, 102, 241, 0.1)', border: '1px solid rgba(99, 102, 241, 0.25)' }}>
                <h3 style={{ margin: '0 0 0.5rem', fontSize: '1.1rem', color: '#ffffff' }}>📥 Export Full Database (JSON)</h3>
                <p style={{ fontSize: '0.82rem', color: '#a5b4fc', margin: '0 0 1rem' }}>
                  Download a complete JSON backup file containing all registered accounts, cartoon avatar configs, lessons, quizzes, and student scores.
                </p>
                <button
                  onClick={exportBackupJSON}
                  style={{ padding: '0.75rem 1.25rem', borderRadius: '12px', background: 'linear-gradient(135deg, #6366f1, #8b5cf6)', color: '#ffffff', fontWeight: 'bold', border: 'none', cursor: 'pointer', fontSize: '0.9rem' }}
                >
                  📥 Export Database Backup (.json)
                </button>
              </div>

              <div style={{ padding: '1.25rem', borderRadius: '16px', background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.25)' }}>
                <h3 style={{ margin: '0 0 0.5rem', fontSize: '1.1rem', color: '#ffffff' }}>📤 Restore Database (JSON)</h3>
                <p style={{ fontSize: '0.82rem', color: '#6ee7b7', margin: '0 0 1rem' }}>
                  Select a previously exported `.json` database backup file to restore registered accounts and data.
                </p>
                <input
                  type="file"
                  accept=".json"
                  onChange={importBackupJSON}
                  style={{ fontSize: '0.85rem', color: '#ffffff' }}
                />
              </div>

              <div style={{ padding: '1.25rem', borderRadius: '16px', background: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.25)' }}>
                <h3 style={{ margin: '0 0 0.5rem', fontSize: '1.1rem', color: '#f87171' }}>⚠️ Reset Database to Defaults</h3>
                <p style={{ fontSize: '0.82rem', color: '#fca5a5', margin: '0 0 1rem' }}>
                  Reset all browser storage back to default demo seeds.
                </p>
                <button
                  onClick={() => dbService.resetToDefault()}
                  style={{ padding: '0.6rem 1rem', borderRadius: '10px', background: 'rgba(239, 68, 68, 0.2)', color: '#f87171', border: '1px solid rgba(239, 68, 68, 0.4)', fontWeight: 'bold', cursor: 'pointer' }}
                >
                  <RefreshCw className="w-4 h-4 inline mr-1" /> Reset All Storage Data
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="avatar-modal-footer">
          <button
            type="button"
            onClick={onClose}
            className="avatar-cancel-btn"
            style={{ width: '100%' }}
          >
            Close Inspector
          </button>
        </div>
      </div>
    </div>
  );
}
