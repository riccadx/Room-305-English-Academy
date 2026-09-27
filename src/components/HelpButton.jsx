import React, { useState } from 'react';
import { HelpCircle, ChevronRight } from './Icons';

export default function HelpButton({ japaneseText, explanation = '', label = 'Help / ヒント' }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="help-button-container">
      <button
        type="button"
        className={`help-toggle-btn ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        title="Click to reveal Japanese translation and explanation"
      >
        <HelpCircle className="w-3.5 h-3.5" />
        <span>{label}</span>
      </button>

      {isOpen && (
        <div className="help-content-popover animate-fadeIn">
          <div className="help-japanese-translation">
            <span className="help-jp-badge">日本語訳</span>
            <span className="help-jp-text">{japaneseText}</span>
          </div>
          {explanation && (
            <div className="help-explanation-text">
              <strong>💡 解説:</strong> {explanation}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
