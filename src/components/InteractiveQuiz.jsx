import React, { useState } from 'react';
import { Sparkles, CheckCircle, AlertTriangle, ArrowLeft, RefreshCw, X, Award, HelpCircle } from './Icons';
import Confetti from './Confetti';
import { dbService } from '../services/db';

export default function InteractiveQuiz({ lesson, quiz, currentUser, onClose }) {
  const questions = quiz?.questions || [];
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleSelectOption = (qIndex, oIndex) => {
    if (submitted) return; // Locked after submit
    setSelectedAnswers(prev => ({
      ...prev,
      [qIndex]: oIndex
    }));
  };

  const handleNextQuestion = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handlePrevQuestion = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleSubmitQuiz = () => {
    let calculatedScore = 0;
    questions.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.correctAnswer) {
        calculatedScore += 1;
      }
    });

    setScore(calculatedScore);
    setSubmitted(true);

    // Save learner progress to DB
    dbService.saveLearnerProgress(currentUser?.id || 'usr_learner_1', lesson.id, {
      score: calculatedScore,
      maxScore: questions.length
    });

    // Fire confetti celebration if score is high (>60%)
    if (questions.length > 0 && (calculatedScore / questions.length) >= 0.6) {
      setShowConfetti(true);
    }
  };

  const handleRetakeQuiz = () => {
    setSelectedAnswers({});
    setSubmitted(false);
    setScore(0);
    setCurrentStep(0);
    setShowConfetti(false);
  };

  if (!questions.length) {
    return (
      <div className="viewer-modal-backdrop">
        <div className="viewer-modal-container max-w-md">
          <div className="p-6 text-center">
            <HelpCircle className="w-12 h-12 text-muted mx-auto mb-3" />
            <h3>No questions available</h3>
            <p className="text-muted text-sm mt-1">This quiz has no questions added by the educator yet.</p>
            <button className="primary-btn mt-4" onClick={onClose}>Back</button>
          </div>
        </div>
      </div>
    );
  }

  const currentQ = questions[currentStep];
  const isSelected = selectedAnswers[currentStep] !== undefined;
  const isLastQuestion = currentStep === questions.length - 1;
  const allAnswered = Object.keys(selectedAnswers).length === questions.length;

  return (
    <div className="viewer-modal-backdrop">
      <Confetti active={showConfetti} />

      <div className="viewer-modal-container quiz-modal-container">
        {/* Header Bar */}
        <div className="viewer-header">
          <button className="back-btn" onClick={onClose}>
            <ArrowLeft className="w-5 h-5" /> Return to Course
          </button>

          <div className="quiz-progress-text">
            <span>Quiz: <strong>{lesson.title}</strong></span>
          </div>

          <button className="icon-btn" onClick={onClose}>
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* QUIZ SCORE SUMMARY SCREEN */}
        {submitted ? (
          <div className="quiz-result-card">
            <div className="result-icon-wrapper">
              {score === questions.length ? (
                <Award className="w-16 h-16 text-yellow" />
              ) : score > 0 ? (
                <Sparkles className="w-16 h-16 text-indigo" />
              ) : (
                <AlertTriangle className="w-16 h-16 text-amber" />
              )}
            </div>

            <h2 className="result-title">
              {score === questions.length ? '🎉 Perfect Score! Outstanding!' : 'Great Job Completing the Quiz!'}
            </h2>

            <div className="score-display">
              <span className="score-num">{score}</span>
              <span className="score-total">/ {questions.length} Correct</span>
              <span className="score-percentage">
                ({Math.round((score / questions.length) * 100)}%)
              </span>
            </div>

            <p className="result-subtext">
              Your results and mastery score have been recorded to your Learning Progress.
            </p>

            {/* REVIEW QUESTIONS LIST WITH TEACHER EXPLANATIONS */}
            <div className="review-questions-section mt-6">
              <h3 className="review-header">Detailed Answer Breakdown & Teacher Notes</h3>

              {questions.map((q, idx) => {
                const userAns = selectedAnswers[idx];
                const isCorrect = userAns === q.correctAnswer;
                return (
                  <div key={q.id || idx} className={`review-card ${isCorrect ? 'correct' : 'incorrect'}`}>
                    <div className="review-question-title">
                      <span className="q-badge">Q{idx + 1}</span>
                      <span>{q.questionText}</span>
                    </div>

                    <div className="review-answers-grid mt-2">
                      <div className="ans-box user-ans">
                        <span className="ans-label">Your Choice:</span>
                        <span className={`ans-val ${isCorrect ? 'text-emerald font-semibold' : 'text-rose font-semibold'}`}>
                          {userAns !== undefined ? `${String.fromCharCode(65 + userAns)}. ${q.options[userAns]}` : 'Not Answered'}
                        </span>
                      </div>

                      {!isCorrect && (
                        <div className="ans-box correct-ans">
                          <span className="ans-label">Correct Answer:</span>
                          <span className="ans-val text-emerald font-semibold">
                            {String.fromCharCode(65 + q.correctAnswer)}. {q.options[q.correctAnswer]}
                          </span>
                        </div>
                      )}
                    </div>

                    {q.explanation && (
                      <div className="teacher-explanation-box mt-3">
                        <strong>💡 Educator Explanation:</strong> {q.explanation}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Action buttons */}
            <div className="result-actions mt-6">
              <button className="secondary-btn" onClick={handleRetakeQuiz}>
                <RefreshCw className="w-4 h-4" /> Retake Quiz
              </button>
              <button className="primary-btn" onClick={onClose}>
                Done & Return to Lessons
              </button>
            </div>
          </div>
        ) : (
          /* STEP BY STEP QUESTION RUNNER */
          <div className="quiz-runner-body">
            {/* Question Step Indicator */}
            <div className="step-indicator-bar">
              <div className="step-count-text">
                Question <strong>{currentStep + 1}</strong> of <strong>{questions.length}</strong>
              </div>
              <div className="quiz-progress-track">
                <div
                  className="quiz-progress-fill"
                  style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
                />
              </div>
            </div>

            {/* Question Prompt Box */}
            <div className="question-prompt-card mt-4">
              <h2 className="question-prompt-text">{currentQ.questionText}</h2>

              {/* Options Grid */}
              <div className="options-stack mt-5">
                {currentQ.options.map((opt, oIndex) => {
                  const isSelectedOption = selectedAnswers[currentStep] === oIndex;
                  return (
                    <button
                      key={oIndex}
                      className={`quiz-option-btn ${isSelectedOption ? 'selected' : ''}`}
                      onClick={() => handleSelectOption(currentStep, oIndex)}
                    >
                      <span className="option-letter-badge">{String.fromCharCode(65 + oIndex)}</span>
                      <span className="option-text">{opt}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Footer Navigation Bar */}
            <div className="quiz-runner-footer mt-6">
              <button
                className="secondary-btn"
                onClick={handlePrevQuestion}
                disabled={currentStep === 0}
              >
                Previous Question
              </button>

              <div className="right-nav-buttons">
                {!isLastQuestion ? (
                  <button
                    className="primary-btn"
                    onClick={handleNextQuestion}
                    disabled={!isSelected}
                  >
                    Next Question
                  </button>
                ) : (
                  <button
                    className="primary-btn btn-submit-quiz"
                    onClick={handleSubmitQuiz}
                    disabled={!allAnswered}
                  >
                    <Sparkles className="w-4 h-4" /> Submit Answers
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
