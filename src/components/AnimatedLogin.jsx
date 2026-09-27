import React, { useState, useEffect } from 'react';
import { GraduationCap, User, ShieldCheck, Sparkles, Check } from './Icons';
import { dbService } from '../services/db';

export default function AnimatedLogin({ onLoginSuccess }) {
  const [selectedRole, setSelectedRole] = useState('learner'); // 'learner' | 'teacher'
  const [email, setEmail] = useState('alex.rivera@student.edu');
  const [password, setPassword] = useState('••••••••');
  
  // Circular Download / Progress Loading State
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const [progressPercent, setProgressPercent] = useState(0);
  const [statusMessage, setStatusMessage] = useState('Verifying credentials...');

  const handleRoleToggle = (role) => {
    setSelectedRole(role);
    if (role === 'learner') {
      setEmail('alex.rivera@student.edu');
    } else {
      setEmail('sarah.jenkins@lingua.edu');
    }
  };

  const startCircularAuthProcess = (targetRole) => {
    setIsAuthenticating(true);
    setProgressPercent(0);
    setStatusMessage('🔐 Verifying Credentials...');

    const duration = 1800; // 1.8s total loading experience
    const intervalTime = 30;
    const steps = duration / intervalTime;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const currentPercent = Math.min(100, Math.round((currentStep / steps) * 100));
      setProgressPercent(currentPercent);

      if (currentPercent < 30) {
        setStatusMessage('🔐 Verifying Security Credentials...');
      } else if (currentPercent < 65) {
        setStatusMessage(targetRole === 'learner' 
          ? '📚 Syncing 30-Week Pathway & Quizzes...' 
          : '👩‍🏫 Loading Educator Dashboard & Analytics...');
      } else if (currentPercent < 90) {
        setStatusMessage('🇯🇵 Loading Japanese Support & Audio Guides...');
      } else {
        setStatusMessage('✨ Authentication Complete! Launching Portal...');
      }

      if (currentStep >= steps) {
        clearInterval(timer);
        setTimeout(() => {
          setIsAuthenticating(false);
          const user = dbService.switchRole(targetRole);
          onLoginSuccess(user);
        }, 300);
      }
    }, intervalTime);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    startCircularAuthProcess(selectedRole);
  };

  const handleQuickDemo = (role) => {
    setSelectedRole(role);
    startCircularAuthProcess(role);
  };

  // SVG Circular Ring parameters
  const radius = 54;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progressPercent / 100) * circumference;

  return (
    <div className={`animated-login-backdrop role-${selectedRole}`}>
      {/* Background Ambient Glow Circles */}
      <div className="login-bg-glow glow-1" />
      <div className="login-bg-glow glow-2" />

      {/* FULL CIRCULAR DOWNLOAD / AUTHENTICATION OVERLAY */}
      {isAuthenticating && (
        <div className="circular-auth-overlay animate-fadeIn">
          <div className="circular-auth-card">
            {/* Outer Glowing Ring */}
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
                  className={`progress-ring-circle ${selectedRole}`}
                  stroke={selectedRole === 'learner' ? '#6366f1' : '#f59e0b'}
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

              {/* Central Percentage Counter */}
              <div className="circular-center-text">
                <span className="percent-num">{progressPercent}%</span>
                <span className="percent-label">PROGRESS</span>
              </div>
            </div>

            <h3 className="auth-status-title mt-4">
              {selectedRole === 'learner' ? 'Opening Student Portal' : 'Opening Educator Portal'}
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
        {/* Left Hero Side */}
        <div className="login-hero-side">
          <div>
            <div className="hero-brand-icon">
              <GraduationCap className="w-10 h-10 text-indigo" />
            </div>
            <h1 className="hero-brand-title">Room-305<br /><span className="brand-accent">English Academy</span></h1>
            <p className="hero-brand-desc">
              Interactive Weekly Self-Study & 30-Minute Live Online Speaking Portal.
            </p>
          </div>

          <div className="role-switch-container mt-6">
            <span className="role-switch-heading">Choose Portal Access:</span>
            <div className="role-pills-row">
              <button
                type="button"
                className={`role-choice-btn ${selectedRole === 'learner' ? 'active learner' : ''}`}
                onClick={() => handleRoleToggle('learner')}
              >
                <User className="w-4 h-4" /> Learner Portal
              </button>
              <button
                type="button"
                className={`role-choice-btn ${selectedRole === 'teacher' ? 'active teacher' : ''}`}
                onClick={() => handleRoleToggle('teacher')}
              >
                <ShieldCheck className="w-4 h-4" /> Educator Portal
              </button>
            </div>
          </div>
        </div>

        {/* Right Form Card */}
        <div className="login-form-card">
          <div>
            <div className="form-card-header">
              <span className="welcome-badge">
                {selectedRole === 'learner' ? '🧑‍🎓 Student Sign In' : '👩‍🏫 Educator Sign In'}
              </span>
              <h2 className="form-card-title">Welcome Back</h2>
              <p className="form-card-subtitle">
                {selectedRole === 'learner'
                  ? 'Access your 30-week study pathway, Monday–Thursday schedule & quizzes.'
                  : 'Access lesson creator, quiz builder & class performance analytics.'}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="login-form mt-5">
              <div className="form-group">
                <label className="form-label">Email Address</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  className="form-input login-input"
                  placeholder="Password"
                />
              </div>

              <button type="submit" className="login-submit-btn mt-6">
                <Sparkles className="w-4 h-4" />
                Sign In to {selectedRole === 'learner' ? 'Learner Portal' : 'Educator Portal'}
              </button>
            </form>
          </div>

          <div>
            <div className="quick-demo-divider mt-6">
              <span>Instant Demo Access</span>
            </div>

            <div className="quick-demo-buttons mt-3">
              <button
                type="button"
                className="quick-demo-btn btn-learner"
                onClick={() => handleQuickDemo('learner')}
              >
                <User className="w-4 h-4" /> Demo as Learner (Alex)
              </button>
              <button
                type="button"
                className="quick-demo-btn btn-teacher"
                onClick={() => handleQuickDemo('teacher')}
              >
                <ShieldCheck className="w-4 h-4" /> Demo as Educator (Sarah)
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
