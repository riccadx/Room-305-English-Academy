import React, { useState, useRef } from 'react';
import { ArrowLeft, Headphones, Video, FileText, Play, Pause, Download, CheckCircle, Sparkles, X, BookOpen } from './Icons';
import { dbService } from '../services/db';

export default function LessonViewer({ lesson, currentUser, onClose, onOpenQuiz }) {
  const [progress, setProgress] = useState(dbService.getProgress(currentUser?.id || 'usr_learner_1'));
  const isCompleted = progress[lesson.id]?.completed;
  
  // Custom Audio Player State
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const audioRef = useRef(null);

  const togglePlayAudio = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleSpeedChange = (speed) => {
    setPlaybackSpeed(speed);
    if (audioRef.current) {
      audioRef.current.playbackRate = speed;
    }
  };

  const handleMarkAsCompleted = () => {
    const updated = dbService.saveLearnerProgress(currentUser?.id || 'usr_learner_1', lesson.id);
    setProgress(updated);
  };

  const attachedQuiz = dbService.getQuizByLessonId(lesson.id);

  return (
    <div className="viewer-modal-backdrop">
      <div className="viewer-modal-container">
        {/* Header Bar */}
        <div className="viewer-header">
          <button className="back-btn" onClick={onClose}>
            <ArrowLeft className="w-5 h-5" /> Back to Dashboard
          </button>

          <div className="viewer-header-badges">
            <span className="badge badge-module">{lesson.module}</span>
            <span className="badge badge-level">{lesson.level}</span>
            {isCompleted && (
              <span className="badge badge-success">
                <CheckCircle className="w-3.5 h-3.5" /> Completed
              </span>
            )}
          </div>

          <button className="icon-btn" onClick={onClose}>
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Reader Body */}
        <div className="viewer-body">
          <h1 className="viewer-title">{lesson.title}</h1>
          <div className="viewer-meta">
            <span>Author: <strong>{lesson.authorName}</strong></span>
            <span>•</span>
            <span>Published: <strong>{lesson.createdAt}</strong></span>
            <span>•</span>
            <span>Est. Time: <strong>{lesson.estimatedTime || '15 min'}</strong></span>
          </div>

          {/* AUDIO PLAYER BAR */}
          {lesson.audioUrl && (
            <div className="audio-player-card">
              <audio
                ref={audioRef}
                src={lesson.audioUrl}
                onEnded={() => setIsPlaying(false)}
              />
              <div className="audio-controls-row">
                <button className="audio-play-btn" onClick={togglePlayAudio}>
                  {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                </button>
                <div className="audio-info">
                  <div className="audio-label">
                    <Headphones className="w-4 h-4 text-emerald inline mr-1" />
                    <span>Native Speaker Pronunciation & Audio Guide</span>
                  </div>
                  <div className="audio-subtext">{isPlaying ? 'Playing Audio...' : 'Click play to listen'}</div>
                </div>

                {/* Playback Speed Controls */}
                <div className="speed-toggle-group">
                  <span className="speed-label">Speed:</span>
                  {[0.8, 1.0, 1.25].map((s) => (
                    <button
                      key={s}
                      className={`speed-btn ${playbackSpeed === s ? 'active' : ''}`}
                      onClick={() => handleSpeedChange(s)}
                    >
                      {s}x
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* VIDEO EMBED PLAYER */}
          {lesson.videoUrl && (
            <div className="video-player-container my-6">
              <div className="video-header">
                <Video className="w-4 h-4 text-indigo inline mr-1" />
                <span>Video Masterclass Lesson</span>
              </div>
              <div className="video-responsive-wrapper">
                <iframe
                  src={lesson.videoUrl}
                  title={lesson.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          )}

          {/* PDF DOWNLOAD CARD */}
          {lesson.pdfAttachment && (
            <div className="pdf-attachment-card">
              <div className="pdf-info">
                <FileText className="w-6 h-6 text-amber" />
                <div>
                  <div className="pdf-filename">{lesson.pdfAttachment.name}</div>
                  <div className="pdf-size">{lesson.pdfAttachment.size} • PDF Printable Worksheet & Notes</div>
                </div>
              </div>
              <a
                href={`data:text/plain;charset=utf-8,${encodeURIComponent('Worksheet Summary for: ' + lesson.title)}`}
                download={lesson.pdfAttachment.name}
                className="secondary-btn"
              >
                <Download className="w-4 h-4" /> Download PDF
              </a>
            </div>
          )}

          {/* RICH TEXT HTML LESSON CONTENT */}
          <div
            className="lesson-content-body mt-6"
            dangerouslySetInnerHTML={{ __html: lesson.content }}
          />

          {/* LESSON FOOTER ACTIONS */}
          <div className="viewer-footer-bar mt-8">
            <button
              className={`secondary-btn ${isCompleted ? 'btn-completed' : ''}`}
              onClick={handleMarkAsCompleted}
            >
              <CheckCircle className="w-4 h-4" />
              {isCompleted ? 'Marked as Completed' : 'Mark as Completed'}
            </button>

            {attachedQuiz && (
              <button
                className="primary-btn"
                onClick={() => {
                  onClose();
                  onOpenQuiz(lesson, attachedQuiz);
                }}
              >
                <Sparkles className="w-4 h-4" />
                Take Attached Quiz ({attachedQuiz.questions?.length || 0} Questions)
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
