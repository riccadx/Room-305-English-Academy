import { DEFAULT_USERS, DEFAULT_LESSONS, DEFAULT_QUIZZES, DEFAULT_PROGRESS } from '../data/initialData';

const KEYS = {
  USERS: 'lingua_users_v1',
  CURRENT_USER: 'lingua_current_user_v1',
  LESSONS: 'lingua_lessons_v1',
  QUIZZES: 'lingua_quizzes_v1',
  PROGRESS: 'lingua_progress_v1'
};

export const GOOGLE_SHEETS_URL = 'https://script.google.com/macros/s/AKfycbxM3lZVOF0b9OsPST73U0PDa8RtQ4z7qBL2whEVbCewOU6GTjmD1CY6ejh_0cJM5BjO/exec';

// Master Passcode required for Educator / Teacher Portal Access
export const TEACHER_PASSCODE = 'Big_305EN';

// Real-time background sync helper for Google Sheets
async function syncToGoogleSheet(action, data) {
  if (!GOOGLE_SHEETS_URL) return;
  try {
    const payload = {
      action,
      timestamp: new Date().toLocaleString(),
      ...data
    };
    await fetch(GOOGLE_SHEETS_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'text/plain'
      },
      body: JSON.stringify(payload)
    });
  } catch (err) {
    console.warn('Google Sheets sync notice:', err);
  }
}

// Fetch live database from Google Sheets on startup
export async function fetchLiveGoogleSheetData() {
  if (!GOOGLE_SHEETS_URL) return null;
  try {
    const res = await fetch(GOOGLE_SHEETS_URL + '?action=GET_ALL');
    if (!res.ok) return null;
    const data = await res.json();
    if (data && Array.isArray(data.users)) {
      const localUsers = JSON.parse(localStorage.getItem(KEYS.USERS) || '[]');
      const userMap = new Map();

      localUsers.forEach(u => userMap.set(u.email.toLowerCase(), u));
      data.users.forEach(u => {
        if (u.email) {
          const existing = userMap.get(u.email.toLowerCase()) || {};
          let parsedAvatar = u.avatarConfig;
          if (typeof parsedAvatar === 'string' && parsedAvatar.startsWith('{')) {
            try { parsedAvatar = JSON.parse(parsedAvatar); } catch(e){}
          }
          userMap.set(u.email.toLowerCase(), {
            ...existing,
            ...u,
            avatarConfig: parsedAvatar || existing.avatarConfig
          });
        }
      });

      const mergedUsers = Array.from(userMap.values());
      localStorage.setItem(KEYS.USERS, JSON.stringify(mergedUsers));
      return mergedUsers;
    }
  } catch (err) {
    console.warn('Google Sheets fetch notice:', err);
  }
  return null;
}

export const dbService = {
  // Initialize storage with seeds if empty & trigger cloud fetch
  init() {
    if (!localStorage.getItem(KEYS.USERS)) {
      localStorage.setItem(KEYS.USERS, JSON.stringify(DEFAULT_USERS));
    }
    if (!localStorage.getItem(KEYS.CURRENT_USER)) {
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

    // Trigger silent cloud sync from Google Sheets
    fetchLiveGoogleSheetData();
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

  loginUser(email, password, role = 'learner') {
    const users = this.getUsers();
    const cleanEmail = (email || '').trim().toLowerCase();
    
    // Exact email lookup in registered users database (case-insensitive & trimmed)
    let foundUser = users.find(u => (u.email || '').trim().toLowerCase() === cleanEmail);
    
    // Auto-create & register user if not found yet so login NEVER fails!
    if (!foundUser) {
      const defaultName = cleanEmail.split('@')[0] || 'Student';
      foundUser = this.registerUser({
        name: defaultName,
        email: cleanEmail,
        password: password || '••••••••',
        role: role
      });

      return { 
        success: true, 
        isNewRegistration: true,
        user: foundUser,
        message: `New account created & saved for ${cleanEmail}!` 
      };
    }

    // Validate password if user set a custom password
    if (foundUser.password && password && foundUser.password !== '••••••••' && foundUser.password !== password) {
      return { 
        success: false, 
        notFound: false,
        message: 'Incorrect password. Please check your password and try again.' 
      };
    }

    this.setCurrentUser(foundUser);

    // Sync login activity event to Google Sheet
    syncToGoogleSheet('LOGIN_USER', {
      name: foundUser.name,
      email: foundUser.email,
      role: foundUser.role
    });

    return { 
      success: true, 
      isNewRegistration: false,
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

      syncToGoogleSheet('UPDATE_USER', {
        name: users[existingIndex].name,
        email: users[existingIndex].email,
        role: users[existingIndex].role
      });

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

    // Sync registration live to Google Sheet database
    syncToGoogleSheet('REGISTER_USER', {
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
      password: newUser.password,
      role: newUser.role,
      createdAt: newUser.createdAt
    });

    return newUser;
  },

  updateUserAvatar(userId, avatarConfig) {
    const users = this.getUsers();
    const index = users.findIndex(u => u.id === userId);
    if (index !== -1) {
      users[index].avatarConfig = avatarConfig;
      localStorage.setItem(KEYS.USERS, JSON.stringify(users));
      
      const currentUser = this.getCurrentUser();
      if (currentUser && currentUser.id === userId) {
        currentUser.avatarConfig = avatarConfig;
        this.setCurrentUser(currentUser);
      }

      syncToGoogleSheet('UPDATE_AVATAR', {
        userId,
        character: avatarConfig.character,
        accessory: avatarConfig.accessory,
        bgGlow: avatarConfig.bgGlow
      });

      return users[index];
    }
    return null;
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

    // Sync lesson creation to Google Sheets
    syncToGoogleSheet('SAVE_LESSON', {
      id: lessonData.id,
      title: lessonData.title,
      level: lessonData.level,
      authorName: currentUser?.name || 'Teacher'
    });

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

    syncToGoogleSheet('DELETE_LESSON', { lessonId });
  },

  toggleLessonPublish(lessonId) {
    const lessons = this.getLessons();
    const lesson = lessons.find(l => l.id === lessonId);
    if (lesson) {
      lesson.published = !lesson.published;
      localStorage.setItem(KEYS.LESSONS, JSON.stringify(lessons));
      syncToGoogleSheet('TOGGLE_LESSON_PUBLISH', { lessonId, published: lesson.published });
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

    syncToGoogleSheet('SAVE_QUIZ', { lessonId: quizData.lessonId, title: quizData.title });
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

    // Sync learner progress to Google Sheets
    syncToGoogleSheet('SAVE_PROGRESS', {
      userId,
      lessonId,
      score: newScore,
      maxScore: maxScore || 0,
      attempts
    });

    return allProgress[userId];
  }
};

dbService.init();

