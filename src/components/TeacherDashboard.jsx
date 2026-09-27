import React, { useState } from 'react';
import { BookOpen, Plus, Edit, Trash, Eye, FileText, Headphones, Video, Sparkles, CheckCircle, AlertTriangle, Search, Filter } from './Icons';
import { dbService } from '../services/db';

export default function TeacherDashboard({ activeTab, setActiveTab, onLessonSelect }) {
  const [lessons, setLessons] = useState(dbService.getLessons());
  const [quizzes, setQuizzes] = useState(dbService.getQuizzes());
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedModuleFilter, setSelectedModuleFilter] = useState('All');
  
  // Editor state
  const [editingLessonId, setEditingLessonId] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    module: 'Grammar',
    level: 'Intermediate',
    estimatedTime: '15 min',
    content: '',
    audioUrl: '',
    videoUrl: '',
    pdfName: '',
    pdfSize: '1.2 MB'
  });

  // Quiz Builder state
  const [quizQuestions, setQuizQuestions] = useState([
    {
      id: 'q_' + Date.now(),
      questionText: '',
      options: ['', '', '', ''],
      correctAnswer: 0,
      explanation: ''
    }
  ]);

  const [notification, setNotification] = useState(null);

  const showToast = (msg, type = 'success') => {
    setNotification({ msg, type });
    setTimeout(() => setNotification(null), 3000);
  };

  const refreshData = () => {
    setLessons(dbService.getLessons());
    setQuizzes(dbService.getQuizzes());
  };

  const handleOpenCreateForm = () => {
    setEditingLessonId(null);
    setFormData({
      title: '',
      module: 'Grammar',
      level: 'Intermediate',
      estimatedTime: '15 min',
      content: `<h2>Lesson Overview</h2>\n<p>Introduce your core lesson concepts here...</p>\n\n<div class="callout callout-tip">\n  <strong>Grammar Rule:</strong> Explain your key rule here.\n</div>\n\n<h3>Key Vocabulary:</h3>\n<ul>\n  <li><strong>Term 1:</strong> Definition...</li>\n</ul>`,
      audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
      videoUrl: '',
      pdfName: 'Lesson_Study_Guide.pdf',
      pdfSize: '1.5 MB'
    });
    setQuizQuestions([
      {
        id: 'q_1',
        questionText: '',
        options: ['', '', '', ''],
        correctAnswer: 0,
        explanation: ''
      }
    ]);
    setActiveTab('create');
  };

  const handleEditLesson = (lesson) => {
    setEditingLessonId(lesson.id);
    setFormData({
      title: lesson.title,
      module: lesson.module,
      level: lesson.level,
      estimatedTime: lesson.estimatedTime || '15 min',
      content: lesson.content || '',
      audioUrl: lesson.audioUrl || '',
      videoUrl: lesson.videoUrl || '',
      pdfName: lesson.pdfAttachment?.name || '',
      pdfSize: lesson.pdfAttachment?.size || '1.2 MB'
    });

    const existingQuiz = quizzes.find(q => q.lessonId === lesson.id);
    if (existingQuiz && existingQuiz.questions?.length > 0) {
      setQuizQuestions(existingQuiz.questions);
    } else {
      setQuizQuestions([
        {
          id: 'q_1',
          questionText: '',
          options: ['', '', '', ''],
          correctAnswer: 0,
          explanation: ''
        }
      ]);
    }

    setActiveTab('create');
  };

  const handleDeleteLesson = (lessonId, title) => {
    if (window.confirm(`Are you sure you want to delete "${title}"? This will also remove the attached quiz.`)) {
      dbService.deleteLesson(lessonId);
      refreshData();
      showToast('Lesson deleted successfully', 'info');
    }
  };

  const handleTogglePublish = (lessonId) => {
    dbService.toggleLessonPublish(lessonId);
    refreshData();
    showToast('Publication status updated');
  };

  // Rich Text Insertion Helper
  const insertRichText = (tag, wrapper = false) => {
    if (wrapper) {
      setFormData(prev => ({
        ...prev,
        content: prev.content + `\n<${tag}>Wrapped Content</${tag}>`
      }));
    } else if (tag === 'callout') {
      setFormData(prev => ({
        ...prev,
        content: prev.content + `\n<div class="callout callout-tip">\n  <strong>Teacher Tip:</strong> Key takeaway for students.\n</div>`
      }));
    } else if (tag === 'table') {
      setFormData(prev => ({
        ...prev,
        content: prev.content + `\n<table class="lesson-table">\n  <thead>\n    <tr><th>Term</th><th>Meaning</th><th>Example</th></tr>\n  </thead>\n  <tbody>\n    <tr><td>Coordinate</td><td>To bring together</td><td>We coordinated the launch.</td></tr>\n  </tbody>\n</table>`
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        content: prev.content + `\n<${tag}>New section heading</${tag}>`
      }));
    }
  };

  // Quiz Question Handlers
  const handleAddQuestion = () => {
    setQuizQuestions(prev => [
      ...prev,
      {
        id: 'q_' + Date.now(),
        questionText: '',
        options: ['', '', '', ''],
        correctAnswer: 0,
        explanation: ''
      }
    ]);
  };

  const handleRemoveQuestion = (index) => {
    if (quizQuestions.length === 1) {
      showToast('Quiz must have at least 1 question', 'warning');
      return;
    }
    setQuizQuestions(prev => prev.filter((_, i) => i !== index));
  };

  const handleQuestionChange = (index, field, value) => {
    setQuizQuestions(prev => {
      const updated = [...prev];
      updated[index][field] = value;
      return updated;
    });
  };

  const handleOptionChange = (qIndex, oIndex, value) => {
    setQuizQuestions(prev => {
      const updated = [...prev];
      updated[qIndex].options[oIndex] = value;
      return updated;
    });
  };

  const handleSubmitLessonAndQuiz = (e) => {
    e.preventDefault();

    if (!formData.title.trim()) {
      showToast('Please enter a lesson title', 'warning');
      return;
    }

    if (!formData.content.trim()) {
      showToast('Please add lesson content', 'warning');
      return;
    }

    // Prepare PDF attachment object
    const pdfAttachment = formData.pdfName ? {
      name: formData.pdfName,
      size: formData.pdfSize || '1.2 MB',
      downloadUrl: '#'
    } : null;

    // Save Lesson
    const savedLesson = dbService.saveLesson({
      id: editingLessonId,
      title: formData.title,
      module: formData.module,
      level: formData.level,
      estimatedTime: formData.estimatedTime,
      content: formData.content,
      audioUrl: formData.audioUrl,
      videoUrl: formData.videoUrl,
      pdfAttachment
    });

    // Validated quiz questions
    const validQuestions = quizQuestions.filter(q => q.questionText.trim() !== '' && q.options.some(o => o.trim() !== ''));

    if (validQuestions.length > 0) {
      dbService.saveQuiz({
        lessonId: savedLesson.id || editingLessonId,
        title: `${formData.title} Quiz`,
        questions: validQuestions
      });
    }

    refreshData();
    showToast(editingLessonId ? 'Lesson & Quiz updated!' : 'New Lesson & Quiz published successfully!');
    setActiveTab('manage');
  };

  // Filter lessons
  const filteredLessons = lessons.filter(l => {
    const matchesSearch = l.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          l.module.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesModule = selectedModuleFilter === 'All' || l.module === selectedModuleFilter;
    return matchesSearch && matchesModule;
  });

  // Calculate statistics
  const totalLessons = lessons.length;
  const publishedLessons = lessons.filter(l => l.published).length;
  const totalQuizzes = quizzes.length;

  return (
    <div className="teacher-dashboard">
      {/* Toast Notification */}
      {notification && (
        <div className={`toast toast-${notification.type}`}>
          {notification.type === 'success' ? <CheckCircle className="w-5 h-5" /> : <AlertTriangle className="w-5 h-5" />}
          <span>{notification.msg}</span>
        </div>
      )}

      {/* Metric Cards Banner */}
      <div className="metrics-grid">
        <div className="metric-card bg-gradient-indigo">
          <div className="metric-header">
            <span className="metric-title">Total Lessons</span>
            <BookOpen className="w-6 h-6 metric-icon" />
          </div>
          <div className="metric-value">{totalLessons}</div>
          <div className="metric-subtext">{publishedLessons} published live</div>
        </div>

        <div className="metric-card bg-gradient-emerald">
          <div className="metric-header">
            <span className="metric-title">Active Quizzes</span>
            <Sparkles className="w-6 h-6 metric-icon" />
          </div>
          <div className="metric-value">{totalQuizzes}</div>
          <div className="metric-subtext">Attached to course modules</div>
        </div>

        <div className="metric-card bg-gradient-violet">
          <div className="metric-header">
            <span className="metric-title">Audio & Media Attachments</span>
            <Headphones className="w-6 h-6 metric-icon" />
          </div>
          <div className="metric-value">
            {lessons.filter(l => l.audioUrl || l.videoUrl || l.pdfAttachment).length}
          </div>
          <div className="metric-subtext">Rich learning materials</div>
        </div>
      </div>

      {/* Tab Controls */}
      <div className="section-header">
        <div className="tab-pills">
          <button
            className={`tab-btn ${activeTab === 'manage' ? 'active' : ''}`}
            onClick={() => setActiveTab('manage')}
          >
            <FileText className="w-4 h-4" />
            Manage Content ({lessons.length})
          </button>
          <button
            className={`tab-btn ${activeTab === 'create' ? 'active' : ''}`}
            onClick={handleOpenCreateForm}
          >
            <Plus className="w-4 h-4" />
            {editingLessonId ? 'Edit Lesson & Quiz' : 'New Lesson & Quiz Builder'}
          </button>
        </div>

        {activeTab === 'manage' && (
          <button className="primary-btn" onClick={handleOpenCreateForm}>
            <Plus className="w-4 h-4" />
            Create New Lesson
          </button>
        )}
      </div>

      {/* CONTENT MANAGEMENT TAB */}
      {activeTab === 'manage' && (
        <div className="manage-container">
          {/* Search & Filter Bar */}
          <div className="filter-bar">
            <div className="search-input-wrapper">
              <Search className="w-4 h-4 search-icon" />
              <input
                type="text"
                placeholder="Search lessons by title or topic..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
            </div>

            <div className="filter-select-wrapper">
              <Filter className="w-4 h-4 filter-icon" />
              <select
                value={selectedModuleFilter}
                onChange={(e) => setSelectedModuleFilter(e.target.value)}
                className="filter-select"
              >
                <option value="All">All Modules</option>
                <option value="Grammar">Grammar</option>
                <option value="Business">Business English</option>
                <option value="Vocabulary">Vocabulary</option>
                <option value="Pronunciation">Pronunciation</option>
              </select>
            </div>
          </div>

          {/* Lessons Table / Card Grid */}
          <div className="lessons-table-card">
            {filteredLessons.length === 0 ? (
              <div className="empty-state">
                <BookOpen className="w-12 h-12 text-muted" />
                <h3>No lessons found</h3>
                <p>Try adjusting your search criteria or create your first English lesson.</p>
                <button className="primary-btn mt-4" onClick={handleOpenCreateForm}>
                  <Plus className="w-4 h-4" /> Create Lesson
                </button>
              </div>
            ) : (
              <div className="table-responsive">
                <table className="custom-table">
                  <thead>
                    <tr>
                      <th>Lesson Title</th>
                      <th>Module & Level</th>
                      <th>Attached Media</th>
                      <th>Quiz Status</th>
                      <th>Publishing</th>
                      <th className="text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredLessons.map((lesson) => {
                      const quiz = quizzes.find(q => q.lessonId === lesson.id);
                      return (
                        <tr key={lesson.id}>
                          <td>
                            <div className="table-lesson-title">
                              <span className="title-text">{lesson.title}</span>
                              <span className="date-subtext">Created {lesson.createdAt}</span>
                            </div>
                          </td>
                          <td>
                            <div className="module-tags">
                              <span className="badge badge-module">{lesson.module}</span>
                              <span className="badge badge-level">{lesson.level}</span>
                            </div>
                          </td>
                          <td>
                            <div className="media-icons-group">
                              {lesson.audioUrl && <span title="Audio Clip"><Headphones className="w-4 h-4 text-emerald" /></span>}
                              {lesson.videoUrl && <span title="Video Embed"><Video className="w-4 h-4 text-indigo" /></span>}
                              {lesson.pdfAttachment && <span title="PDF Study Sheet"><FileText className="w-4 h-4 text-amber" /></span>}
                              {!lesson.audioUrl && !lesson.videoUrl && !lesson.pdfAttachment && <span className="text-muted">-</span>}
                            </div>
                          </td>
                          <td>
                            {quiz ? (
                              <span className="badge badge-success">
                                <CheckCircle className="w-3 h-3" /> {quiz.questions?.length || 0} Questions
                              </span>
                            ) : (
                              <span className="badge badge-warning">No Quiz Attached</span>
                            )}
                          </td>
                          <td>
                            <button
                              className={`status-pill ${lesson.published ? 'published' : 'draft'}`}
                              onClick={() => handleTogglePublish(lesson.id)}
                            >
                              {lesson.published ? 'Published' : 'Draft'}
                            </button>
                          </td>
                          <td>
                            <div className="action-buttons-group">
                              <button
                                className="icon-action-btn"
                                onClick={() => onLessonSelect(lesson)}
                                title="Preview as Learner"
                              >
                                <Eye className="w-4 h-4" />
                              </button>
                              <button
                                className="icon-action-btn"
                                onClick={() => handleEditLesson(lesson)}
                                title="Edit Lesson & Quiz"
                              >
                                <Edit className="w-4 h-4" />
                              </button>
                              <button
                                className="icon-action-btn danger"
                                onClick={() => handleDeleteLesson(lesson.id, lesson.title)}
                                title="Delete Lesson"
                              >
                                <Trash className="w-4 h-4" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      )}

      {/* CREATE / EDIT LESSON & QUIZ FORM TAB */}
      {activeTab === 'create' && (
        <form onSubmit={handleSubmitLessonAndQuiz} className="create-form-container">
          <div className="form-card">
            <h2 className="form-title">
              {editingLessonId ? '✏️ Edit Lesson & Quiz' : '📚 Lesson Creator & Quiz Builder'}
            </h2>

            {/* Basic Info Grid */}
            <div className="form-grid-2">
              <div className="form-group">
                <label className="form-label">Lesson Title *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Mastering Phrasal Verbs in Negotiation"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="form-input"
                />
              </div>

              <div className="form-grid-3">
                <div className="form-group">
                  <label className="form-label">Module Category</label>
                  <select
                    value={formData.module}
                    onChange={(e) => setFormData({ ...formData, module: e.target.value })}
                    className="form-input"
                  >
                    <option value="Grammar">Grammar</option>
                    <option value="Business">Business English</option>
                    <option value="Vocabulary">Vocabulary</option>
                    <option value="Pronunciation">Pronunciation</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Proficiency Level</label>
                  <select
                    value={formData.level}
                    onChange={(e) => setFormData({ ...formData, level: e.target.value })}
                    className="form-input"
                  >
                    <option value="Beginner">Beginner (A1-A2)</option>
                    <option value="Intermediate">Intermediate (B1-B2)</option>
                    <option value="Advanced">Advanced (C1-C2)</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Est. Time</label>
                  <input
                    type="text"
                    value={formData.estimatedTime}
                    onChange={(e) => setFormData({ ...formData, estimatedTime: e.target.value })}
                    className="form-input"
                    placeholder="15 min"
                  />
                </div>
              </div>
            </div>

            {/* Rich Content Editor Section */}
            <div className="form-group mt-4">
              <div className="editor-label-row">
                <label className="form-label">Lesson Content (Rich Text & Formatting) *</label>
                <div className="rich-toolbar">
                  <button type="button" onClick={() => insertRichText('h2')} className="toolbar-btn">H2 Heading</button>
                  <button type="button" onClick={() => insertRichText('h3')} className="toolbar-btn">H3 Subheading</button>
                  <button type="button" onClick={() => insertRichText('callout')} className="toolbar-btn">💡 Teacher Callout</button>
                  <button type="button" onClick={() => insertRichText('table')} className="toolbar-btn">📊 Vocab Table</button>
                </div>
              </div>

              <textarea
                required
                rows={10}
                value={formData.content}
                onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                className="form-textarea"
                placeholder="Write lesson text with HTML/Markdown tags or standard paragraphs..."
              />
            </div>

            {/* Media Uploads & Attachments */}
            <div className="form-section-divider">
              <h3>📎 Media & File Attachments</h3>
              <p className="sub-description">Upload or link supplementary listening audio, videos, and PDF worksheets.</p>
            </div>

            <div className="form-grid-3">
              <div className="form-group">
                <label className="form-label">
                  <Headphones className="w-4 h-4 inline mr-1 text-emerald" /> Audio Listening URL (MP3)
                </label>
                <input
                  type="text"
                  placeholder="https://example.com/audio.mp3"
                  value={formData.audioUrl}
                  onChange={(e) => setFormData({ ...formData, audioUrl: e.target.value })}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label">
                  <Video className="w-4 h-4 inline mr-1 text-indigo" /> Video Embed Link (YouTube/MP4)
                </label>
                <input
                  type="text"
                  placeholder="https://www.youtube.com/embed/..."
                  value={formData.videoUrl}
                  onChange={(e) => setFormData({ ...formData, videoUrl: e.target.value })}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label">
                  <FileText className="w-4 h-4 inline mr-1 text-amber" /> PDF Worksheet Attachment Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. Grammar_Practice_Sheet.pdf"
                  value={formData.pdfName}
                  onChange={(e) => setFormData({ ...formData, pdfName: e.target.value })}
                  className="form-input"
                />
              </div>
            </div>

            {/* QUIZ BUILDER SECTION */}
            <div className="form-section-divider mt-6">
              <div className="flex-between">
                <div>
                  <h3>🎯 Quiz Builder (Attached Multiple Choice Questions)</h3>
                  <p className="sub-description">Create interactive questions with correct answer selection & pedagogical feedback notes.</p>
                </div>
                <button type="button" onClick={handleAddQuestion} className="secondary-btn">
                  <Plus className="w-4 h-4" /> Add Question
                </button>
              </div>
            </div>

            <div className="quiz-questions-list">
              {quizQuestions.map((q, qIndex) => (
                <div key={q.id || qIndex} className="quiz-question-card">
                  <div className="quiz-question-header">
                    <span className="question-number">Question #{qIndex + 1}</span>
                    <button
                      type="button"
                      onClick={() => handleRemoveQuestion(qIndex)}
                      className="icon-action-btn danger"
                      title="Remove question"
                    >
                      <Trash className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="form-group">
                    <input
                      type="text"
                      placeholder="Enter the question prompt (e.g. Which tense is correct in this context?)"
                      value={q.questionText}
                      onChange={(e) => handleQuestionChange(qIndex, 'questionText', e.target.value)}
                      className="form-input font-medium"
                    />
                  </div>

                  <div className="options-grid mt-3">
                    {q.options.map((opt, oIndex) => (
                      <div key={oIndex} className="option-input-wrapper">
                        <label className="radio-label">
                          <input
                            type="radio"
                            name={`correct_${qIndex}`}
                            checked={q.correctAnswer === oIndex}
                            onChange={() => handleQuestionChange(qIndex, 'correctAnswer', oIndex)}
                          />
                          <span className="option-letter">{String.fromCharCode(65 + oIndex)}</span>
                        </label>
                        <input
                          type="text"
                          placeholder={`Option ${String.fromCharCode(65 + oIndex)}`}
                          value={opt}
                          onChange={(e) => handleOptionChange(qIndex, oIndex, e.target.value)}
                          className="form-input"
                        />
                      </div>
                    ))}
                  </div>

                  <div className="form-group mt-3">
                    <label className="form-label text-sm text-muted">
                      💡 Explanation for Learners (Shows after submission)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. We use Past Simple because the event occurred in a finished time period (yesterday)."
                      value={q.explanation}
                      onChange={(e) => handleQuestionChange(qIndex, 'explanation', e.target.value)}
                      className="form-input text-sm"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Submit Action Bar */}
            <div className="form-actions mt-6">
              <button
                type="button"
                onClick={() => setActiveTab('manage')}
                className="secondary-btn"
              >
                Cancel
              </button>
              <button type="submit" className="primary-btn">
                <Sparkles className="w-4 h-4" />
                {editingLessonId ? 'Save Changes' : 'Publish Lesson & Quiz'}
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
