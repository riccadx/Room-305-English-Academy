import React, { useState } from 'react';
import { GraduationCap, User, ShieldCheck, Sparkles, Plus, Check, AlertTriangle, Sun, Moon } from './Icons';
import { dbService, TEACHER_PASSCODE } from '../services/db';
import EnglishMascot from './EnglishMascot';
import BackgroundCartoons from './BackgroundCartoons';
import AvatarDesignerModal from './AvatarDesignerModal';

export default function AnimatedLogin({ onLoginSuccess, isDayMode, onToggleTheme }) {
  const [authMode, setAuthMode] = useState('signin'); // 'signin' | 'register'
  const [selectedRole, setSelectedRole] = useState('learner'); // 'learner' | 'teacher'

  // Form Fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('alex.rivera@student.edu');
  const [password, setPassword] = useState('••••••••');
  const [teacherPasscode, setTeacherPasscode] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Teacher Passcode Modal Verification State
  const [showPasscodeModal, setShowPasscodeModal] = useState(false);
  const [passcodeModalInput, setPasscodeModalInput] = useState('');
  const [passcodeModalError, setPasscodeModalError] = useState('');
  const [pendingTeacherAction, setPendingTeacherAction] = useState(null);

  // First-Time Registration Cartoon Avatar Customization
  const [pendingNewUser, setPendingNewUser] = useState(null);
  const [accountNotFound, setAccountNotFound] = useState(false);

  // Interactive Mascot Input Focus States
  const [isFocusedOnEmail, setIsFocusedOnEmail] = useState(false);
  const [isFocusedOnPassword, setIsFocusedOnPassword] = useState(false);
  
  // Circular Download / Progress Loading State
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const [progressPercent, setProgressPercent] = useState(0);
  const [statusMessage, setStatusMessage] = useState('Verifying credentials...');
  const [targetUser, setTargetUser] = useState(null);

  const handleRoleToggle = (role) => {
    setSelectedRole(role);
    setErrorMessage('');
    setAccountNotFound(false);
    if (authMode === 'signin') {
      if (role === 'learner') {
        setEmail('alex.rivera@student.edu');
      } else {
        setEmail('sarah.jenkins@lingua.edu');
      }
    }
  };

  const verifyPasscodeModal = (e) => {
    if (e) e.preventDefault();
    if (passcodeModalInput.trim() !== TEACHER_PASSCODE) {
      setPasscodeModalError('❌ Incorrect Passcode. Only authorized teachers can access Educator Portal.');
      return;
    }
    setPasscodeModalError('');
    setShowPasscodeModal(false);
    setPasscodeModalInput('');
    if (pendingTeacherAction) {
      pendingTeacherAction();
      setPendingTeacherAction(null);
    }
  };

  const startCircularAuthProcess = (userObj) => {
    setTargetUser(userObj);
    setIsAuthenticating(true);
    setProgressPercent(0);
    setStatusMessage('🔐 Verifying Credentials...');

    const duration = 1800; // 1.8s loading animation
    const intervalTime = 30;
    const steps = duration / intervalTime;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const currentPercent = Math.min(100, Math.round((currentStep / steps) * 100));
      setProgressPercent(currentPercent);

      if (currentPercent < 30) {
        setStatusMessage('🔐 Verifying Account & Database Record...');
      } else if (currentPercent < 65) {
        setStatusMessage(userObj.role === 'learner' 
          ? '📚 Loading Student Dashboard & 30-Week Pathway...' 
          : '👩‍🏫 Loading Educator Dashboard & Class Tools...');
      } else if (currentPercent < 90) {
        setStatusMessage('🇯🇵 Initializing Japanese Help System...');
      } else {
        setStatusMessage('✨ Account Verified! Launching Portal...');
      }

      if (currentStep >= steps) {
        clearInterval(timer);
        setTimeout(() => {
          setIsAuthenticating(false);
          onLoginSuccess(userObj);
        }, 300);
      }
    }, intervalTime);
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    setErrorMessage('');
    setAccountNotFound(false);

    // If teacher role, verify passcode
    if (selectedRole === 'teacher' && teacherPasscode.trim() !== TEACHER_PASSCODE) {
      setErrorMessage('⛔ Teacher Access Denied: Incorrect Teacher Passcode.');
      return;
    }

    const result = dbService.loginUser(email, password, selectedRole);
    if (!result.success) {
      setErrorMessage(result.message);
      if (result.notFound) {
        setAccountNotFound(true);
      }
      return;
    }

    if (result.isNewRegistration) {
      // New account created on the fly! Open Cartoon Avatar Studio
      setPendingNewUser(result.user);
    } else {
      startCircularAuthProcess(result.user);
    }
  };

  const handleRegister = (e) => {
    if (e) e.preventDefault();
    setErrorMessage('');
    setAccountNotFound(false);

    // If teacher role, verify passcode
    if (selectedRole === 'teacher' && teacherPasscode.trim() !== TEACHER_PASSCODE) {
      setErrorMessage('⛔ Teacher Access Denied: Incorrect Teacher Passcode.');
      return;
    }

    const effectiveName = name.trim() || email.split('@')[0] || 'Learner';

    const newUser = dbService.registerUser({
      name: effectiveName,
      email: email.trim(),
      password: password,
      role: selectedRole
    });

    // Open First-Time Avatar Designer Modal!
    setPendingNewUser(newUser);
  };

  const handleQuickRegisterFromLogin = () => {
    handleRegister();
  };

  const handleSaveAvatar = (avatarConfig) => {
    if (pendingNewUser) {
      const updatedUser = dbService.updateUserAvatar(pendingNewUser.id, avatarConfig);
      setPendingNewUser(null);
      startCircularAuthProcess(updatedUser || pendingNewUser);
    }
  };

  const handleQuickDemo = (role) => {
    setErrorMessage('');
    if (role === 'teacher') {
      // Prompt for passcode modal
      setPendingTeacherAction(() => () => {
        const user = dbService.switchRole('teacher');
        setSelectedRole('teacher');
        startCircularAuthProcess(user);
      });
      setShowPasscodeModal(true);
      return;
    }
    const user = dbService.switchRole(role);
    setSelectedRole(role);
    startCircularAuthProcess(user);
  };


  // SVG Circular Ring parameters
  const radius = 54;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progressPercent / 100) * circumference;

  return (
    <div className={`animated-login-backdrop role-${selectedRole}`}>
      {/* Top Corner Day/Night Theme Toggler */}
      {onToggleTheme && (
        <button
          className="login-corner-theme-btn"
          onClick={onToggleTheme}
          title={isDayMode ? "Switch to Night Mode 🌙" : "Switch to Day Mode ☀️"}
        >
          {isDayMode ? <Moon className="w-4 h-4 text-indigo" /> : <Sun className="w-4 h-4 text-amber" />}
          <span>{isDayMode ? 'Night Mode' : 'Day Mode'}</span>
        </button>
      )}

      {/* Dynamic Animated Background Scene */}
      <div className="login-bg-scene">
        <div className="login-bg-grid" />
        <div className="login-bg-glow glow-1" />
        <div className="login-bg-glow glow-2" />
        <div className="login-bg-glow glow-center" />

        {/* Animated Background Cartoon Characters Layer */}
        <BackgroundCartoons />

        {/* Floating Background English Academy Badges */}
        <div className="bg-floating-badge badge-top-left">
          <span>🎧 Listening & Audio Hub</span>
        </div>
        <div className="bg-floating-badge badge-top-right">
          <span>🗓️ Thursday 30-Min Live Speaking</span>
        </div>
        <div className="bg-floating-badge badge-bottom-left">
          <span>💡 Try English First (ヒント)</span>
        </div>
        <div className="bg-floating-badge badge-bottom-right">
          <span>📚 30-Week Learning Pathway</span>
        </div>
        <div className="bg-floating-badge badge-mid-left">
          <span>✍️ Mon-Thu Self Study</span>
        </div>
        <div className="bg-floating-badge badge-mid-right">
          <span>🇬🇧 Room-305 Academy</span>
        </div>

        {/* Animated Floating Words in Background */}
        <div className="bg-word-stream">
          <span className="bg-word word-1">Fluency</span>
          <span className="bg-word word-2">Confidence</span>
          <span className="bg-word word-3">Pronunciation</span>
          <span className="bg-word word-4">Vocabulary</span>
          <span className="bg-word word-5">Listening</span>
          <span className="bg-word word-6">Speaking</span>
        </div>
      </div>




      {/* FULL CIRCULAR DOWNLOAD / AUTHENTICATION OVERLAY */}
      {isAuthenticating && (
        <div className="circular-auth-overlay animate-fadeIn">
          <div className="circular-auth-card">
            <div className="circular-svg-wrapper">
              <svg className="progress-ring-svg" width="140" height="140">
                <circle
                  className="progress-ring-track"
                  stroke="rgba(255, 255, 255, 0.1)"
                  strokeWidth="8"
                  fill="transparent"
                  r={radius}
                  cx="70"
                  cy="70"
                />
                <circle
                  className={`progress-ring-circle ${targetUser?.role || selectedRole}`}
                  stroke={(targetUser?.role || selectedRole) === 'learner' ? '#6366f1' : '#f59e0b'}
                  strokeWidth="8"
                  strokeLinecap="round"
                  fill="transparent"
                  r={radius}
                  cx="70"
                  cy="70"
                  style={{
                    strokeDasharray: circumference,
                    strokeDashoffset: strokeDashoffset,
                    transition: 'stroke-dashoffset 0.05s linear'
                  }}
                />
              </svg>

              <div className="circular-center-text">
                <span className="percent-num">{progressPercent}%</span>
                <span className="percent-label">PROGRESS</span>
              </div>
            </div>

            <h3 className="auth-status-title mt-4">
              {(targetUser?.role || selectedRole) === 'learner' ? 'Opening Learner Portal' : 'Opening Educator Portal'}
            </h3>

            <p className="auth-status-msg mt-2">{statusMessage}</p>

            <div className="loading-dots-bar mt-4">
              <div className="dot dot-1" />
              <div className="dot dot-2" />
              <div className="dot dot-3" />
            </div>
          </div>
        </div>
      )}

      <div className="animated-login-container">
        {/* Left Hero Side with Interactive Eddie Mascot */}
        <div className="login-hero-side flex flex-col justify-between">
          <div>
            {/* Live Interactive Cartoon Mascot */}
            <EnglishMascot 
              isFocusedOnPassword={isFocusedOnPassword}
              isFocusedOnEmail={isFocusedOnEmail}
              role={selectedRole}
            />

            <h1 className="hero-brand-title text-center">Room-305<br /><span className="brand-accent">English Academy</span></h1>
            <p className="hero-brand-desc text-center">
              Weekly Self-Study + Thursday 30-Minute Live Online Speaking Portal.
            </p>
          </div>

          <div className="role-switch-container mt-6">
            <span className="role-switch-heading">Choose Target Role:</span>
            <div className="role-pills-row">
              <button
                type="button"
                className={`role-choice-btn ${selectedRole === 'learner' ? 'active learner' : ''}`}
                onClick={() => handleRoleToggle('learner')}
              >
                <User className="w-4 h-4" /> Learner (Student)
              </button>
              <button
                type="button"
                className={`role-choice-btn ${selectedRole === 'teacher' ? 'active teacher' : ''}`}
                onClick={() => handleRoleToggle('teacher')}
              >
                <ShieldCheck className="w-4 h-4" /> Educator (Teacher)
              </button>
            </div>
          </div>
        </div>

        {/* Right Form Card with Sign In / Register Tabs */}
        <div className="login-form-card">
          <div>
            {/* Mode Selector Tabs (Sign In vs Register) */}
            <div className="auth-mode-tabs mb-4">
              <button
                type="button"
                className={`auth-mode-btn ${authMode === 'signin' ? 'active' : ''}`}
                onClick={() => {
                  setAuthMode('signin');
                  setErrorMessage('');
                }}
              >
                Sign In
              </button>
              <button
                type="button"
                className={`auth-mode-btn ${authMode === 'register' ? 'active' : ''}`}
                onClick={() => {
                  setAuthMode('register');
                  setErrorMessage('');
                  setAccountNotFound(false);
                }}
              >
                Register / Sign Up
              </button>
            </div>

            <div className="form-card-header">
              <span className="welcome-badge">
                {authMode === 'signin' ? '🔐 Registered Account Login' : '✨ New Account Registration'}
              </span>
              <h2 className="form-card-title">
                {authMode === 'signin' ? 'Welcome Back' : 'Create Your Account'}
              </h2>
              <p className="form-card-subtitle">
                {authMode === 'signin'
                  ? 'Enter your registered email & password to enter your portal.'
                  : 'Register as a Student or Educator to save your progress permanently.'}
              </p>
            </div>

            {/* Error Message Alert */}
            {errorMessage && (
              <div className="login-error-alert mt-3 animate-fadeIn flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 flex-shrink-0 text-amber" />
                  <span>{errorMessage}</span>
                </div>
                {accountNotFound && email && (
                  <button
                    type="button"
                    onClick={handleQuickRegisterFromLogin}
                    className="mt-1 py-2 px-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs flex items-center justify-center gap-2 transition shadow-md cursor-pointer"
                    style={{
                      background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                      border: 'none',
                      color: '#ffffff',
                      fontWeight: 800
                    }}
                  >
                    <Sparkles className="w-4 h-4 text-amber" />
                    Register "{email}" Now & Launch Studio 🚀
                  </button>
                )}
              </div>
            )}

            {/* SIGN IN FORM */}
            {authMode === 'signin' && (
              <form onSubmit={handleSignIn} className="login-form mt-4">
                <div className="form-group">
                  <label className="form-label">Email Address</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onFocus={() => setIsFocusedOnEmail(true)}
                    onBlur={() => setIsFocusedOnEmail(false)}
                    className="form-input login-input"
                    placeholder="enter@room305.edu"
                  />
                </div>

                <div className="form-group mt-3">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onFocus={() => setIsFocusedOnPassword(true)}
                    onBlur={() => setIsFocusedOnPassword(false)}
                    className="form-input login-input"
                    placeholder="Password"
                  />
                </div>

                {selectedRole === 'teacher' && (
                  <div className="form-group mt-3 animate-fadeIn">
                    <label className="form-label text-amber-300 font-bold flex items-center gap-1">
                      🔑 Teacher Secret Passcode *
                    </label>
                    <input
                      type="password"
                      required
                      value={teacherPasscode}
                      onChange={(e) => setTeacherPasscode(e.target.value)}
                      className="form-input login-input"
                      style={{ border: '1px solid #f59e0b' }}
                      placeholder="Enter Master Teacher Passcode"
                    />
                  </div>
                )}

                <button type="submit" className="login-submit-btn mt-5">
                  <Sparkles className="w-4 h-4" />
                  Sign In & Enter Portal
                </button>
              </form>
            )}

            {/* REGISTER FORM */}
            {authMode === 'register' && (
              <form onSubmit={handleRegister} className="login-form mt-4">
                <div className="form-group">
                  <label className="form-label">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="form-input login-input"
                    placeholder="e.g. Yuki Tanaka"
                  />
                </div>

                <div className="form-group mt-3">
                  <label className="form-label">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onFocus={() => setIsFocusedOnEmail(true)}
                    onBlur={() => setIsFocusedOnEmail(false)}
                    className="form-input login-input"
                    placeholder="e.g. yuki.tanaka@student.edu"
                  />
                </div>

                <div className="form-group mt-3">
                  <label className="form-label">Password *</label>
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onFocus={() => setIsFocusedOnPassword(true)}
                    onBlur={() => setIsFocusedOnPassword(false)}
                    className="form-input login-input"
                    placeholder="Choose a password"
                  />
                </div>

                <div className="form-group mt-3">
                  <label className="form-label">Account Type</label>
                  <div className="role-pills-row">
                    <button
                      type="button"
                      className={`role-choice-btn ${selectedRole === 'learner' ? 'active learner' : ''}`}
                      onClick={() => setSelectedRole('learner')}
                    >
                      🧑‍🎓 Student / Learner
                    </button>
                    <button
                      type="button"
                      className={`role-choice-btn ${selectedRole === 'teacher' ? 'active teacher' : ''}`}
                      onClick={() => setSelectedRole('teacher')}
                    >
                      👩‍🏫 Educator / Teacher
                    </button>
                  </div>
                </div>

                {selectedRole === 'teacher' && (
                  <div className="form-group mt-3 animate-fadeIn">
                    <label className="form-label text-amber-300 font-bold flex items-center gap-1">
                      🔑 Teacher Secret Passcode *
                    </label>
                    <input
                      type="password"
                      required
                      value={teacherPasscode}
                      onChange={(e) => setTeacherPasscode(e.target.value)}
                      className="form-input login-input"
                      style={{ border: '1px solid #f59e0b' }}
                      placeholder="Enter Master Teacher Passcode"
                    />
                  </div>
                )}

                <button type="submit" className="login-submit-btn mt-5">
                  <Plus className="w-4 h-4" />
                  Register Account & Save
                </button>
              </form>
            )}
          </div>

          <div>
            <div className="quick-demo-divider mt-4">
              <span>Instant Demo Access</span>
            </div>

            <div className="quick-demo-buttons mt-3">
              <button
                type="button"
                className="quick-demo-btn btn-learner"
                onClick={() => handleQuickDemo('learner')}
              >
                <User className="w-4 h-4" /> Demo Learner (Alex)
              </button>
              <button
                type="button"
                className="quick-demo-btn btn-teacher"
                onClick={() => handleQuickDemo('teacher')}
              >
                <ShieldCheck className="w-4 h-4" /> Demo Educator (Sarah) 🔐
              </button>
            </div>

            {/* Saved Registered Accounts List */}
            {dbService.getUsers().filter(u => u.id !== 'usr_teacher_1' && u.id !== 'usr_learner_1').length > 0 && (
              <div className="saved-accounts-section mt-4 pt-3 border-t border-white/10">
                <div className="quick-demo-divider mb-2">
                  <span>👥 Saved Accounts on this Device</span>
                </div>
                <div className="flex flex-wrap gap-2 justify-center mt-2">
                  {dbService.getUsers().filter(u => u.id !== 'usr_teacher_1' && u.id !== 'usr_learner_1').map(u => (
                    <button
                      key={u.id}
                      type="button"
                      onClick={() => {
                        setEmail(u.email);
                        setSelectedRole(u.role);
                        if (u.role === 'teacher') {
                          setPendingTeacherAction(() => () => {
                            startCircularAuthProcess(u);
                          });
                          setShowPasscodeModal(true);
                        } else {
                          startCircularAuthProcess(u);
                        }
                      }}
                      className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-white text-xs flex items-center gap-2 cursor-pointer transition shadow-sm"
                      style={{
                        background: 'rgba(255, 255, 255, 0.08)',
                        border: '1px solid rgba(255, 255, 255, 0.15)'
                      }}
                      title={`Click to log in as ${u.name} (${u.email})`}
                    >
                      <span style={{ fontSize: '0.9rem' }}>{u.role === 'teacher' ? '👩‍🏫' : '🧑‍🎓'}</span>
                      <span className="font-bold text-white">{u.name}</span>
                      <span style={{ fontSize: '0.7rem', color: '#a5b4fc' }}>({u.email})</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* FIRST-TIME REGISTRATION CARTOON AVATAR DESIGNER MODAL */}
      {pendingNewUser && (
        <AvatarDesignerModal
          user={pendingNewUser}
          onSave={handleSaveAvatar}
        />
      )}

      {/* MASTER TEACHER PASSCODE VERIFICATION MODAL */}
      {showPasscodeModal && (
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
            className="avatar-modal-card p-6"
            style={{
              width: '100%',
              maxWidth: '440px',
              background: 'linear-gradient(165deg, rgba(26, 35, 58, 0.98), rgba(15, 22, 38, 0.98))',
              border: '1px solid rgba(255, 255, 255, 0.18)',
              borderRadius: '24px',
              color: '#ffffff',
              padding: '1.5rem'
            }}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2 text-amber-400 font-bold text-lg">
                <ShieldCheck className="w-6 h-6 text-amber" />
                <span>Teacher Security Verification</span>
              </div>
              <button
                type="button"
                onClick={() => {
                  setShowPasscodeModal(false);
                  setPasscodeModalError('');
                }}
                className="avatar-close-btn"
              >
                ✕
              </button>
            </div>

            <p className="text-xs text-gray-300 mb-4" style={{ fontSize: '0.85rem', color: '#cbd5e1' }}>
              Access to Educator / Teacher tools is restricted. Please enter the <strong>Master Teacher Passcode</strong>:
            </p>

            {passcodeModalError && (
              <div className="login-error-alert mb-3 text-xs" style={{ padding: '0.5rem', borderRadius: '8px', background: 'rgba(239, 68, 68, 0.2)', color: '#f87171' }}>
                <span>{passcodeModalError}</span>
              </div>
            )}

            <form onSubmit={verifyPasscodeModal} className="flex flex-col gap-3">
              <input
                type="password"
                autoFocus
                value={passcodeModalInput}
                onChange={(e) => setPasscodeModalInput(e.target.value)}
                placeholder="Enter Teacher Passcode"
                className="form-input login-input"
                style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '12px', background: 'rgba(0,0,0,0.4)', color: '#fff', border: '1px solid rgba(255,255,255,0.2)' }}
              />
              <div className="flex gap-2 mt-4" style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
                <button
                  type="button"
                  onClick={() => setShowPasscodeModal(false)}
                  className="avatar-cancel-btn flex-1"
                  style={{ flex: 1, padding: '0.75rem', borderRadius: '12px', background: 'rgba(255,255,255,0.1)', color: '#94a3b8' }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="primary-btn flex-1"
                  style={{
                    flex: 1,
                    padding: '0.75rem',
                    borderRadius: '12px',
                    background: 'linear-gradient(135deg, #8b5cf6, #6366f1)',
                    color: '#ffffff',
                    fontWeight: 800,
                    border: 'none',
                    cursor: 'pointer'
                  }}
                >
                  🔓 Unlock Educator Portal
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}


