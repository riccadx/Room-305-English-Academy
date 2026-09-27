import React, { useState } from 'react';
import { GraduationCap, User, ShieldCheck, Sparkles, BookOpen, Check } from './Icons';
import { dbService } from '../services/db';

export default function AnimatedLogin({ onLoginSuccess }) {
  const [selectedRole, setSelectedRole] = useState('learner'); // 'learner' | 'teacher'
  const [email, setEmail] = useState('alex.rivera@student.edu');
  const [password, setPassword] = useState('••••••••');
  const [isLoading, setIsLoading] = useState(false);

  const handleRoleToggle = (role) => {
    setSelectedRole(role);
    if (role === 'learner') {
      setEmail('alex.rivera@student.edu');
    } else {
      setEmail('sarah.jenkins@lingua.edu');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      const user = dbService.switchRole(selectedRole);
      onLoginSuccess(user);
    }, 600);
  };

  const handleQuickDemo = (role) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      const user = dbService.switchRole(role);
      onLoginSuccess(user);
    }, 400);
  };

  return (
    <div className={`animated-login-backdrop role-${selectedRole}`}>
      {/* Background Animated Glow Elements */}
      <div className="login-bg-glow glow-1" />
      <div className="login-bg-glow glow-2" />

      <div className="animated-login-container">
        {/* Left Hero Graphic / Brand Card */}
        <div className="login-hero-side">
          <div className="hero-brand-icon">
            <GraduationCap className="w-10 h-10 text-indigo" />
          </div>
          <h1 className="hero-brand-title">Room-305<br /><span className="brand-accent">English Academy</span></h1>
          <p className="hero-brand-desc">
            Interactive Weekly Self-Study & 30-Minute Live Online Speaking Portal.
          </p>

          {/* Interactive Role Switcher Toggle */}
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

        {/* Right Animated Form Card (Matching Gold/Dark Aesthetic) */}
        <div className="login-form-card">
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

            <button type="submit" className="login-submit-btn mt-6" disabled={isLoading}>
              {isLoading ? (
                <span className="spinner-text">Authenticating...</span>
              ) : (
                <>
                  <Sparkles className="w-4 h-4" />
                  Sign In to {selectedRole === 'learner' ? 'Learner Portal' : 'Educator Portal'}
                </>
              )}
            </button>
          </form>

          {/* Quick 1-Click Demo Buttons */}
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
  );
}
