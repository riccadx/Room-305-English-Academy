import { DEFAULT_USERS, DEFAULT_LESSONS, DEFAULT_QUIZZES, DEFAULT_PROGRESS } from '../data/initialData';

const KEYS = {
  USERS: 'lingua_users_v1',
  CURRENT_USER: 'lingua_current_user_v1',
  LESSONS: 'lingua_lessons_v1',
  QUIZZES: 'lingua_quizzes_v1',
  PROGRESS: 'lingua_progress_v1'
};

export const dbService = {
  // Initialize storage with seeds if empty
  init() {
    if (!localStorage.getItem(KEYS.USERS)) {
      localStorage.setItem(KEYS.USERS, JSON.stringify(DEFAULT_USERS));
    }
    if (!localStorage.getItem(KEYS.CURRENT_USER)) {
      // Default logged in as Teacher for convenient demo, or Learner
      localStorage.setItem(KEYS.CURRENT_USER, JSON.stringify(DEFAULT_USERS[0]));
    }
    if (!localStorage.getItem(KEYS.LESSONS)) {
      localStorage.setItem(KEYS.LESSONS, JSON.stringify(DEFAULT_LESSONS));
    }
    if (!localStorage.getItem(KEYS.QUIZZES)) {
      localStorage.setItem(KEYS.QUIZZES, JSON.stringify(DEFAULT_QUIZZES));
    }
    if (!localStorage.getItem(KEYS.PROGRESS)) {
      localStorage.setItem(KEYS.PROGRESS, JSON.stringify(DEFAULT_PROGRESS));
    }
  },

  resetToDefault() {
    localStorage.setItem(KEYS.USERS, JSON.stringify(DEFAULT_USERS));
    localStorage.setItem(KEYS.CURRENT_USER, JSON.stringify(DEFAULT_USERS[0]));
    localStorage.setItem(KEYS.LESSONS, JSON.stringify(DEFAULT_LESSONS));
    localStorage.setItem(KEYS.QUIZZES, JSON.stringify(DEFAULT_QUIZZES));
    localStorage.setItem(KEYS.PROGRESS, JSON.stringify(DEFAULT_PROGRESS));
    window.location.reload();
  },

  // USER MANAGEMENT & AUTH
  getUsers() {
    return JSON.parse(localStorage.getItem(KEYS.USERS) || '[]');
  },

  getCurrentUser() {
    return JSON.parse(localStorage.getItem(KEYS.CURRENT_USER) || 'null');
  },

  setCurrentUser(user) {
    localStorage.setItem(KEYS.CURRENT_USER, JSON.stringify(user));
  },

  switchRole(role) {
    const users = this.getUsers();
    const targetUser = users.find(u => u.role === role) || users[0];
    this.setCurrentUser(targetUser);
    return targetUser;
  },

  loginUser(email, password) {
    const users = this.getUsers();
    const cleanEmail = email.trim().toLowerCase();
    
    // Strict exact email lookup in registered users database
    const foundUser = users.find(u => u.email.toLowerCase() === cleanEmail);
    
    if (!foundUser) {
      return { 
        success: false, 
        message: 'Account not found in database. Please click "Register / Sign Up" to create an account first.' 
      };
    }

    // Validate password if user set a custom password
    if (foundUser.password && password && foundUser.password !== '••••••••' && foundUser.password !== password) {
      return { 
        success: false, 
        message: 'Incorrect password. Please check your password and try again.' 
      };
    }

    this.setCurrentUser(foundUser);
    return { 
      success: true, 
      user: foundUser 
    };
  },

  registerUser(userData) {
    const users = this.getUsers();
    const cleanEmail = userData.email.trim().toLowerCase();
    
    // Check if user already exists
    const existingIndex = users.findIndex(u => u.email.toLowerCase() === cleanEmail);
    if (existingIndex !== -1) {
      users[existingIndex] = {
        ...users[existingIndex],
        ...userData,
        email: cleanEmail,
        role: userData.role || users[existingIndex].role || 'learner'
      };
      localStorage.setItem(KEYS.USERS, JSON.stringify(users));
      this.setCurrentUser(users[existingIndex]);
      return users[existingIndex];
    }

    const defaultAvatar = userData.role === 'teacher'
      ? 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80'
      : 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80';

    const newUser = {
      id: 'usr_' + Date.now(),
      createdAt: new Date().toISOString(),
      avatar: defaultAvatar,
      streak: 1,
      xp: 100,
      name: userData.name || 'User',
      email: cleanEmail,
      password: userData.password || '••••••••',
      role: userData.role || 'learner'
    };

    users.push(newUser);
    localStorage.setItem(KEYS.USERS, JSON.stringify(users));
    this.setCurrentUser(newUser);
    return newUser;
  },

  // LESSON MANAGEMENT (TEACHER CRUD)
  getLessons() {
    return JSON.parse(localStorage.getItem(KEYS.LESSONS) || '[]');
  },

  getLessonById(id) {
    const lessons = this.getLessons();
    return lessons.find(l => l.id === id) || null;
  },

  saveLesson(lessonData) {
    const lessons = this.getLessons();
    const currentUser = this.getCurrentUser();
    
    if (lessonData.id) {
      // Edit existing
      const index = lessons.findIndex(l => l.id === lessonData.id);
      if (index !== -1) {
        lessons[index] = { ...lessons[index], ...lessonData, updatedAt: new Date().toISOString() };
      }
    } else {
      // Create new
      const newLesson = {
        id: 'les_' + Date.now(),
        createdAt: new Date().toISOString().split('T')[0],
        published: true,
        authorId: currentUser?.id || 'usr_teacher_1',
        authorName: currentUser?.name || 'Teacher',
        audioUrl: lessonData.audioUrl || '',
        videoUrl: lessonData.videoUrl || '',
        pdfAttachment: lessonData.pdfAttachment || null,
        ...lessonData
      };
      lessons.unshift(newLesson);
      lessonData.id = newLesson.id;
    }

    localStorage.setItem(KEYS.LESSONS, JSON.stringify(lessons));
    return lessonData;
  },

  deleteLesson(lessonId) {
    let lessons = this.getLessons();
    lessons = lessons.filter(l => l.id !== lessonId);
    localStorage.setItem(KEYS.LESSONS, JSON.stringify(lessons));

    // Also remove attached quiz
    let quizzes = this.getQuizzes();
    quizzes = quizzes.filter(q => q.lessonId !== lessonId);
    localStorage.setItem(KEYS.QUIZZES, JSON.stringify(quizzes));
  },

  toggleLessonPublish(lessonId) {
    const lessons = this.getLessons();
    const lesson = lessons.find(l => l.id === lessonId);
    if (lesson) {
      lesson.published = !lesson.published;
      localStorage.setItem(KEYS.LESSONS, JSON.stringify(lessons));
    }
  },

  // QUIZ MANAGEMENT
  getQuizzes() {
    return JSON.parse(localStorage.getItem(KEYS.QUIZZES) || '[]');
  },

  getQuizByLessonId(lessonId) {
    const quizzes = this.getQuizzes();
    return quizzes.find(q => q.lessonId === lessonId) || null;
  },

  saveQuiz(quizData) {
    const quizzes = this.getQuizzes();
    const index = quizzes.findIndex(q => q.lessonId === quizData.lessonId || q.id === quizData.id);

    if (index !== -1) {
      quizzes[index] = { ...quizzes[index], ...quizData };
    } else {
      const newQuiz = {
        id: 'quiz_' + Date.now(),
        ...quizData
      };
      quizzes.push(newQuiz);
    }

    localStorage.setItem(KEYS.QUIZZES, JSON.stringify(quizzes));
  },

  // LEARNER PROGRESS TRACKING
  getProgress(userId) {
    const allProgress = JSON.parse(localStorage.getItem(KEYS.PROGRESS) || '{}');
    return allProgress[userId] || {};
  },

  saveLearnerProgress(userId, lessonId, quizResult = null) {
    const allProgress = JSON.parse(localStorage.getItem(KEYS.PROGRESS) || '{}');
    if (!allProgress[userId]) {
      allProgress[userId] = {};
    }

    const currentLessonProgress = allProgress[userId][lessonId] || {
      completed: false,
      completedAt: null,
      quizScore: 0,
      maxScore: 0,
      attempts: 0
    };

    const attempts = (currentLessonProgress.attempts || 0) + (quizResult ? 1 : 0);
    const newScore = quizResult ? quizResult.score : currentLessonProgress.quizScore;
    const maxScore = quizResult ? quizResult.maxScore : currentLessonProgress.maxScore;

    allProgress[userId][lessonId] = {
      completed: true,
      completedAt: new Date().toISOString(),
      quizScore: Math.max(currentLessonProgress.quizScore || 0, newScore),
      maxScore: maxScore || currentLessonProgress.maxScore || 0,
      attempts
    };

    localStorage.setItem(KEYS.PROGRESS, JSON.stringify(allProgress));
    return allProgress[userId];
  }
};

dbService.init();
