import React, { useState } from 'react';
import { GraduationCap, User, ShieldCheck, Sparkles, Plus, Check, AlertTriangle, Sun, Moon } from './Icons';
import { dbService } from '../services/db';
import EnglishMascot from './EnglishMascot';
import BackgroundCartoons from './BackgroundCartoons';

export default function AnimatedLogin({ onLoginSuccess, isDayMode, onToggleTheme }) {
  const [authMode, setAuthMode] = useState('signin'); // 'signin' | 'register'
  const [selectedRole, setSelectedRole] = useState('learner'); // 'learner' | 'teacher'

  // Form Fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('alex.rivera@student.edu');
  const [password, setPassword] = useState('••••••••');
  const [errorMessage, setErrorMessage] = useState('');

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
    if (authMode === 'signin') {
      if (role === 'learner') {
        setEmail('alex.rivera@student.edu');
      } else {
        setEmail('sarah.jenkins@lingua.edu');
      }
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

    const result = dbService.loginUser(email, password);
    if (!result.success) {
      setErrorMessage(result.message);
      return;
    }

    startCircularAuthProcess(result.user);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    setErrorMessage('');
    if (!name.trim()) return;

    const newUser = dbService.registerUser({
      name: name.trim(),
      email: email.trim(),
      password: password,
      role: selectedRole
    });

    startCircularAuthProcess(newUser);
  };

  const handleQuickDemo = (role) => {
    setErrorMessage('');
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
                  setName('');
                  setEmail('');
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
              <div className="login-error-alert mt-3 animate-fadeIn">
                <AlertTriangle className="w-4 h-4" />
                <span>{errorMessage}</span>
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
                <ShieldCheck className="w-4 h-4" /> Demo Educator (Sarah)
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

