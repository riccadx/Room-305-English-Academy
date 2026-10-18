import React, { useState } from 'react';
import { Lock, X, Check, AlertTriangle, ShieldCheck } from './Icons';
import { TEACHER_PASSCODE, GOOGLE_SPREADSHEET_ID, GOOGLE_SHEET_VIEW_URL } from '../services/db';

export default function GoogleSheetPasscodeModal({ isOpen, actionType = 'OPEN_SHEET', onSuccess, onClose }) {
  const [passcode, setPasscode] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const handleVerifyPasscode = (e) => {
    e.preventDefault();
    if (passcode.trim() === TEACHER_PASSCODE) {
      setErrorMsg('');
      if (actionType === 'OPEN_SHEET') {
        window.open(GOOGLE_SHEET_VIEW_URL, '_blank', 'noopener,noreferrer');
      }
      if (onSuccess) {
        onSuccess();
      }
      setPasscode('');
      onClose();
    } else {
      setErrorMsg('🔒 Access Denied: Incorrect Google Sheet Passcode. Please check the Educator Passcode.');
    }
  };

  return (
    <div className="viewer-modal-backdrop animate-fadeIn" style={{ zIndex: 100000 }}>
      <div className="viewer-modal-container max-w-md p-6 bg-slate-900 border border-emerald-500/40 rounded-2xl shadow-2xl">
        {/* Header */}
        <div className="flex-between mb-4 pb-3 border-b border-white/10">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400">
              <Lock className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base font-extrabold text-white">Google Sheet Access Protection</h3>
              <p className="text-xs text-muted">Passcode required to open/sync Google Sheet</p>
            </div>
          </div>
          <button className="icon-btn" onClick={onClose} title="Close Modal">
            <X className="w-5 h-5 text-gray-400" />
          </button>
        </div>

        {/* Protected Info Banner */}
        <div className="p-3 mb-4 rounded-xl bg-black/40 border border-white/10 text-xs">
          <span className="text-muted block mb-1">Protected Google Spreadsheet:</span>
          <span className="text-emerald-400 font-bold block">
            🔒 Room 305 Official Educator Sheet (Password Protected)
          </span>
        </div>

        {/* Passcode Form */}
        <form onSubmit={handleVerifyPasscode}>
          <div className="form-group mb-4">
            <label className="form-label font-bold text-xs uppercase tracking-wider text-gray-300">
              Enter Educator Security Passcode:
            </label>
            <input
              type="password"
              autoFocus
              value={passcode}
              onChange={(e) => {
                setPasscode(e.target.value);
                setErrorMsg('');
              }}
              placeholder="••••••••••••"
              className="form-input text-sm text-center tracking-widest"
              style={{ fontSize: '1.1rem', letterSpacing: '0.2em' }}
            />
          </div>

          {errorMsg && (
            <div className="p-3 mb-4 rounded-xl bg-rose-950/40 border border-rose-500/40 text-rose-300 text-xs flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 flex-shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          <div className="flex justify-end gap-2 mt-5">
            <button type="button" className="secondary-btn text-xs py-2 px-4" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="primary-btn text-xs py-2 px-5 bg-emerald-600 hover:bg-emerald-500">
              <ShieldCheck className="w-4 h-4" /> Unlock & Access Google Sheet
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
