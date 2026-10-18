// 30-Week Learning Pathway Data for Room-305-English-Academy (2+2 Hybrid Model with Daily Quizzes)

export const CURRICULUM_LEVELS = [
  {
    "id": "beginner",
    "name": "Beginner",
    "weeks": "Weeks 1–10",
    "color": "indigo",
    "desc": "Build basic foundations, everyday vocabulary & confidence"
  },
  {
    "id": "intermediate",
    "name": "Intermediate",
    "weeks": "Weeks 11–20",
    "color": "emerald",
    "desc": "Express opinions, converse naturally & write organized paragraphs"
  },
  {
    "id": "advanced",
    "name": "Advanced",
    "weeks": "Weeks 21–30",
    "color": "violet",
    "desc": "Master academic, professional, debate & presentation skills"
  }
];

export const WEEKLY_CURRICULUM = [
  {
    "weekNumber": 1,
    "level": "beginner",
    "title": "Introductions & Getting to Know People",
    "goal": "Introduce yourself confidently, state your background, and ask basic questions.",
    "vocabulary": [
      {
        "word": "target_word_1_w1",
        "partOfSpeech": "noun",
        "meaning": "key concept related to Introductions & Getting to Know People",
        "japanese": "主要概念",
        "example": "Using key expressions in Week 1.",
        "helpExplanation": "Week 1の重要キーワードです。"
      },
      {
        "word": "phrase_2_w1",
        "partOfSpeech": "noun phrase",
        "meaning": "useful expression for natural speaking",
        "japanese": "自然な表現",
        "example": "I agree with your point regarding this topic.",
        "helpExplanation": "会話で役立つ定型表現です。"
      },
      {
        "word": "perspective_w1",
        "partOfSpeech": "noun",
        "meaning": "a particular attitude or way of regarding something",
        "japanese": "視点、観点",
        "example": "Share your personal perspective during discussion.",
        "helpExplanation": "自分の考えや見解のことです。"
      },
      {
        "word": "analysis_w1",
        "partOfSpeech": "noun",
        "meaning": "detailed examination of elements or structure",
        "japanese": "分析、考察",
        "example": "Analyze the reading passage carefully.",
        "helpExplanation": "論理的に整理・分析することです。"
      },
      {
        "word": "practice_w1",
        "partOfSpeech": "verb",
        "meaning": "perform an activity regularly to improve",
        "japanese": "練習する",
        "example": "Practice speaking aloud with your partner.",
        "helpExplanation": "声に出して練習することです。"
      },
      {
        "word": "feedback_w1",
        "partOfSpeech": "noun",
        "meaning": "helpful advice or evaluation on performance",
        "japanese": "フィードバック",
        "example": "Instructor feedback guides your pronunciation.",
        "helpExplanation": "指導員からのアドバイスです。"
      },
      {
        "word": "dialogue_w1",
        "partOfSpeech": "noun",
        "meaning": "conversation between two or more people",
        "japanese": "対話、ダイアログ",
        "example": "Prepare your role-play script on Wednesday.",
        "helpExplanation": "役割を演じる対話文です。"
      },
      {
        "word": "synthesis_w1",
        "partOfSpeech": "noun",
        "meaning": "combining ideas into a connected whole",
        "japanese": "統合、まとめ",
        "example": "Synthesize your weekly learning on Thursday.",
        "helpExplanation": "一週間の学びを統合することです。"
      }
    ],
    "schedule": {
      "monday": {
        "type": "self_study_knowledge",
        "title": "Monday Self-Study: Introductions & Getting to Know People Knowledge & Comprehension",
        "focus": "Target Vocabulary (8–12 Words) + Audio Listening & Reading Passage",
        "audioUrl": "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
        "transcript": "Speaker A: Welcome to Week 1 of Room 305 Academy! Today we explore Introductions & Getting to Know People.\nSpeaker B: That sounds fascinating! Let's examine the main concepts and practice key expressions.",
        "transcriptJapanese": "スピーカーA: 305アカデミーの第1週へようこそ！今日は「Introductions & Getting to Know People」を探求します。\nスピーカーB: とても興味深いですね！主要な概念を検討し、キー表現を練習しましょう。",
        "readingPassage": "In Week 1, students focus on Introductions & Getting to Know People. By examining real-world contexts, learners build confidence to express ideas clearly.",
        "readingPassageJapanese": "第1週では、生徒は「Introductions & Getting to Know People」に焦点を当てます。現実的な文脈を学習することで、クリアに意見を表現する自信を育みます。",
        "quizTitle": "Monday Vocabulary & Comprehension Quiz",
        "comprehensionQuestions": [
          {
            "q": "What is the primary topic of Week 1?",
            "options": [
              "Introductions & Getting to Know People",
              "General Grammar",
              "Unrelated Topic",
              "Free Conversation"
            ],
            "correct": 0
          },
          {
            "q": "What is the main goal of Monday self-study?",
            "options": [
              "Knowledge & Comprehension",
              "Live Debate",
              "Final Exam",
              "No Study"
            ],
            "correct": 0
          }
        ],
        "outputTask": "Complete Monday comprehension quiz & submit reflection notes."
      },
      "tuesday": {
        "type": "online_class_practice",
        "title": "Tuesday Online Class (30m): Interactive Practice on Introductions & Getting to Know People",
        "focus": "Live Discussion on Monday’s Reading/Listening + Pronunciation Q&A",
        "classTime": "Tuesday 20:00 - 20:30 (JST)",
        "meetingLink": "https://zoom.us/j/room305-tuesday-class",
        "liveActivities": [
          "1. Live interactive discussion on Monday’s reading: \"Introductions & Getting to Know People\".",
          "2. Answer comprehension questions using target vocabulary.",
          "3. Receive instructor feedback on pronunciation and phrasing."
        ],
        "quizTitle": "Tuesday Live Class Practice Quiz",
        "questions": [
          {
            "q": "Which expression is best for asking about introductions & getting to know people in a conversation?",
            "options": [
              "\"Could you tell me more about Introductions & Getting to Know People?\"",
              "\"I do not know.\"",
              "\"No comment.\"",
              "\"Goodbye.\""
            ],
            "correct": 0
          },
          {
            "q": "During live class, what is the best strategy if you need a moment to think?",
            "options": [
              "Use a polite filler like \"Let me see...\"",
              "Remain silent for 5 minutes",
              "Leave the call",
              "Speak in Japanese only"
            ],
            "correct": 0
          }
        ],
        "outputTask": "Complete Tuesday practice quiz & log instructor feedback."
      },
      "wednesday": {
        "type": "self_study_writing",
        "title": "Wednesday Self-Study: Writing & Speaking Prep for Introductions & Getting to Know People",
        "focus": "Grammar Review + Thursday Role-Play Assignment & Script Draft",
        "grammarPoint": "Grammar Pattern for Introductions & Getting to Know People",
        "grammarExplanation": "Review target sentence structures to communicate introduce yourself confidently, state your background, and ask basic questions.",
        "grammarJapaneseHelp": "「Introductions & Getting to Know People」に関する効果的な英文作成のための文法パターンを復習します。",
        "scaffoldedSentence": "Regarding Introductions & Getting to Know People, I believe that _____ because _____.",
        "thursdayTaskAssignment": "Prepare a 2-minute script or outline for Thursday's live role-play on Introductions & Getting to Know People.",
        "quizTitle": "Wednesday Grammar & Sentence Structure Quiz",
        "questions": [
          {
            "q": "Which conjunction logically connects a main point with a reason in Introductions & Getting to Know People?",
            "options": [
              "because",
              "although",
              "unless",
              "neither"
            ],
            "correct": 0
          },
          {
            "q": "What is the goal of Wednesday self-study?",
            "options": [
              "Writing assignment & Thursday script preparation",
              "Just watching video",
              "Skipping study",
              "Final graduation"
            ],
            "correct": 0
          }
        ],
        "outputTask": "Complete Wednesday grammar quiz & submit script draft."
      },
      "thursday": {
        "type": "online_class_synthesis",
        "title": "Thursday Online Class (30m): Role-Play & Synthesis (Introductions & Getting to Know People)",
        "focus": "Execute Wednesday’s Script + Unscripted Q&A + Weekly Master Quiz",
        "classTime": "Thursday 20:00 - 20:30 (JST)",
        "meetingLink": "https://zoom.us/j/room305-thursday-class",
        "rolePlayActivities": [
          "1. Execute role-plays or presentations using Wednesday's prepared script.",
          "2. Engage in unscripted follow-up Q&A with instructor and classmates.",
          "3. Complete Weekly Master Quiz & Self-Reflection."
        ],
        "quizTitle": "Thursday Weekly Master Synthesis Quiz",
        "questions": [
          {
            "q": "In Week 1, what is key to successful role-play execution?",
            "options": [
              "Applying Wednesday script & target vocabulary in conversation",
              "Reading silently",
              "Ignoring partner",
              "Only speaking Japanese"
            ],
            "correct": 0
          },
          {
            "q": "How do you express diplomatic disagreement or alternative views on Introductions & Getting to Know People?",
            "options": [
              "\"I understand your point, but from my perspective...\"",
              "\"You are wrong.\"",
              "\"I disagree stop talking.\"",
              "\"No way.\""
            ],
            "correct": 0
          },
          {
            "q": "What completes the 2+2 weekly learning cycle on Thursday?",
            "options": [
              "Live role-play, Master Quiz, and Teacher Evaluation",
              "Starting Week 1 again",
              "No output",
              "Writing only"
            ],
            "correct": 0
          }
        ],
        "outputTask": "Complete Thursday Master Quiz, log teacher evaluation & self-reflection."
      }
    }
  },
  {
    "weekNumber": 2,
    "level": "beginner",
    "title": "Daily Life & Routines",
    "goal": "Describe daily schedules, morning habits, and frequency adverbs (always, usually, rarely).",
    "vocabulary": [
      {
        "word": "target_word_1_w2",
        "partOfSpeech": "noun",
        "meaning": "key concept related to Daily Life & Routines",
        "japanese": "主要概念",
        "example": "Using key expressions in Week 2.",
        "helpExplanation": "Week 2の重要キーワードです。"
      },
      {
        "word": "phrase_2_w2",
        "partOfSpeech": "noun phrase",
        "meaning": "useful expression for natural speaking",
        "japanese": "自然な表現",
        "example": "I agree with your point regarding this topic.",
        "helpExplanation": "会話で役立つ定型表現です。"
      },
      {
        "word": "perspective_w2",
        "partOfSpeech": "noun",
        "meaning": "a particular attitude or way of regarding something",
        "japanese": "視点、観点",
        "example": "Share your personal perspective during discussion.",
        "helpExplanation": "自分の考えや見解のことです。"
      },
      {
        "word": "analysis_w2",
        "partOfSpeech": "noun",
        "meaning": "detailed examination of elements or structure",
        "japanese": "分析、考察",
        "example": "Analyze the reading passage carefully.",
        "helpExplanation": "論理的に整理・分析することです。"
      },
      {
        "word": "practice_w2",
        "partOfSpeech": "verb",
        "meaning": "perform an activity regularly to improve",
        "japanese": "練習する",
        "example": "Practice speaking aloud with your partner.",
        "helpExplanation": "声に出して練習することです。"
      },
      {
        "word": "feedback_w2",
        "partOfSpeech": "noun",
        "meaning": "helpful advice or evaluation on performance",
        "japanese": "フィードバック",
        "example": "Instructor feedback guides your pronunciation.",
        "helpExplanation": "指導員からのアドバイスです。"
      },
      {
        "word": "dialogue_w2",
        "partOfSpeech": "noun",
        "meaning": "conversation between two or more people",
        "japanese": "対話、ダイアログ",
        "example": "Prepare your role-play script on Wednesday.",
        "helpExplanation": "役割を演じる対話文です。"
      },
      {
        "word": "synthesis_w2",
        "partOfSpeech": "noun",
        "meaning": "combining ideas into a connected whole",
        "japanese": "統合、まとめ",
        "example": "Synthesize your weekly learning on Thursday.",
        "helpExplanation": "一週間の学びを統合することです。"
      }
    ],
    "schedule": {
      "monday": {
        "type": "self_study_knowledge",
        "title": "Monday Self-Study: Daily Life & Routines Knowledge & Comprehension",
        "focus": "Target Vocabulary (8–12 Words) + Audio Listening & Reading Passage",
        "audioUrl": "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
        "transcript": "Speaker A: Welcome to Week 2 of Room 305 Academy! Today we explore Daily Life & Routines.\nSpeaker B: That sounds fascinating! Let's examine the main concepts and practice key expressions.",
        "transcriptJapanese": "スピーカーA: 305アカデミーの第2週へようこそ！今日は「Daily Life & Routines」を探求します。\nスピーカーB: とても興味深いですね！主要な概念を検討し、キー表現を練習しましょう。",
        "readingPassage": "In Week 2, students focus on Daily Life & Routines. By examining real-world contexts, learners build confidence to express ideas clearly.",
        "readingPassageJapanese": "第2週では、生徒は「Daily Life & Routines」に焦点を当てます。現実的な文脈を学習することで、クリアに意見を表現する自信を育みます。",
        "quizTitle": "Monday Vocabulary & Comprehension Quiz",
        "comprehensionQuestions": [
          {
            "q": "What is the primary topic of Week 2?",
            "options": [
              "Daily Life & Routines",
              "General Grammar",
              "Unrelated Topic",
              "Free Conversation"
            ],
            "correct": 0
          },
          {
            "q": "What is the main goal of Monday self-study?",
            "options": [
              "Knowledge & Comprehension",
              "Live Debate",
              "Final Exam",
              "No Study"
            ],
            "correct": 0
          }
        ],
        "outputTask": "Complete Monday comprehension quiz & submit reflection notes."
      },
      "tuesday": {
        "type": "online_class_practice",
        "title": "Tuesday Online Class (30m): Interactive Practice on Daily Life & Routines",
        "focus": "Live Discussion on Monday’s Reading/Listening + Pronunciation Q&A",
        "classTime": "Tuesday 19:00 - 19:30 (JST)",
        "meetingLink": "https://zoom.us/j/room305-tuesday-class",
        "liveActivities": [
          "1. Live interactive discussion on Monday’s reading: \"Daily Life & Routines\".",
          "2. Answer comprehension questions using target vocabulary.",
          "3. Receive instructor feedback on pronunciation and phrasing."
        ],
        "quizTitle": "Tuesday Live Class Practice Quiz",
        "questions": [
          {
            "q": "Which expression is best for asking about daily life & routines in a conversation?",
            "options": [
              "\"Could you tell me more about Daily Life & Routines?\"",
              "\"I do not know.\"",
              "\"No comment.\"",
              "\"Goodbye.\""
            ],
            "correct": 0
          },
          {
            "q": "During live class, what is the best strategy if you need a moment to think?",
            "options": [
              "Use a polite filler like \"Let me see...\"",
              "Remain silent for 5 minutes",
              "Leave the call",
              "Speak in Japanese only"
            ],
            "correct": 0
          }
        ],
        "outputTask": "Complete Tuesday practice quiz & log instructor feedback."
      },
      "wednesday": {
        "type": "self_study_writing",
        "title": "Wednesday Self-Study: Writing & Speaking Prep for Daily Life & Routines",
        "focus": "Grammar Review + Thursday Role-Play Assignment & Script Draft",
        "grammarPoint": "Grammar Pattern for Daily Life & Routines",
        "grammarExplanation": "Review target sentence structures to communicate describe daily schedules, morning habits, and frequency adverbs (always, usually, rarely).",
        "grammarJapaneseHelp": "「Daily Life & Routines」に関する効果的な英文作成のための文法パターンを復習します。",
        "scaffoldedSentence": "Regarding Daily Life & Routines, I believe that _____ because _____.",
        "thursdayTaskAssignment": "Prepare a 2-minute script or outline for Thursday's live role-play on Daily Life & Routines.",
        "quizTitle": "Wednesday Grammar & Sentence Structure Quiz",
        "questions": [
          {
            "q": "Which conjunction logically connects a main point with a reason in Daily Life & Routines?",
            "options": [
              "because",
              "although",
              "unless",
              "neither"
            ],
            "correct": 0
          },
          {
            "q": "What is the goal of Wednesday self-study?",
            "options": [
              "Writing assignment & Thursday script preparation",
              "Just watching video",
              "Skipping study",
              "Final graduation"
            ],
            "correct": 0
          }
        ],
        "outputTask": "Complete Wednesday grammar quiz & submit script draft."
      },
      "thursday": {
        "type": "online_class_synthesis",
        "title": "Thursday Online Class (30m): Role-Play & Synthesis (Daily Life & Routines)",
        "focus": "Execute Wednesday’s Script + Unscripted Q&A + Weekly Master Quiz",
        "classTime": "Thursday 19:00 - 19:30 (JST)",
        "meetingLink": "https://zoom.us/j/room305-thursday-class",
        "rolePlayActivities": [
          "1. Execute role-plays or presentations using Wednesday's prepared script.",
          "2. Engage in unscripted follow-up Q&A with instructor and classmates.",
          "3. Complete Weekly Master Quiz & Self-Reflection."
        ],
        "quizTitle": "Thursday Weekly Master Synthesis Quiz",
        "questions": [
          {
            "q": "In Week 2, what is key to successful role-play execution?",
            "options": [
              "Applying Wednesday script & target vocabulary in conversation",
              "Reading silently",
              "Ignoring partner",
              "Only speaking Japanese"
            ],
            "correct": 0
          },
          {
            "q": "How do you express diplomatic disagreement or alternative views on Daily Life & Routines?",
            "options": [
              "\"I understand your point, but from my perspective...\"",
              "\"You are wrong.\"",
              "\"I disagree stop talking.\"",
              "\"No way.\""
            ],
            "correct": 0
          },
          {
            "q": "What completes the 2+2 weekly learning cycle on Thursday?",
            "options": [
              "Live role-play, Master Quiz, and Teacher Evaluation",
              "Starting Week 1 again",
              "No output",
              "Writing only"
            ],
            "correct": 0
          }
        ],
        "outputTask": "Complete Thursday Master Quiz, log teacher evaluation & self-reflection."
      }
    }
  },
  {
    "weekNumber": 3,
    "level": "beginner",
    "title": "Family, Friends & People",
    "goal": "Describe personalities, appearances, and relationships using descriptive adjectives.",
    "vocabulary": [
      {
        "word": "target_word_1_w3",
        "partOfSpeech": "noun",
        "meaning": "key concept related to Family, Friends & People",
        "japanese": "主要概念",
        "example": "Using key expressions in Week 3.",
        "helpExplanation": "Week 3の重要キーワードです。"
      },
      {
        "word": "phrase_2_w3",
        "partOfSpeech": "noun phrase",
        "meaning": "useful expression for natural speaking",
        "japanese": "自然な表現",
        "example": "I agree with your point regarding this topic.",
        "helpExplanation": "会話で役立つ定型表現です。"
      },
      {
        "word": "perspective_w3",
        "partOfSpeech": "noun",
        "meaning": "a particular attitude or way of regarding something",
        "japanese": "視点、観点",
        "example": "Share your personal perspective during discussion.",
        "helpExplanation": "自分の考えや見解のことです。"
      },
      {
        "word": "analysis_w3",
        "partOfSpeech": "noun",
        "meaning": "detailed examination of elements or structure",
        "japanese": "分析、考察",
        "example": "Analyze the reading passage carefully.",
        "helpExplanation": "論理的に整理・分析することです。"
      },
      {
        "word": "practice_w3",
        "partOfSpeech": "verb",
        "meaning": "perform an activity regularly to improve",
        "japanese": "練習する",
        "example": "Practice speaking aloud with your partner.",
        "helpExplanation": "声に出して練習することです。"
      },
      {
        "word": "feedback_w3",
        "partOfSpeech": "noun",
        "meaning": "helpful advice or evaluation on performance",
        "japanese": "フィードバック",
        "example": "Instructor feedback guides your pronunciation.",
        "helpExplanation": "指導員からのアドバイスです。"
      },
      {
        "word": "dialogue_w3",
        "partOfSpeech": "noun",
        "meaning": "conversation between two or more people",
        "japanese": "対話、ダイアログ",
        "example": "Prepare your role-play script on Wednesday.",
        "helpExplanation": "役割を演じる対話文です。"
      },
      {
        "word": "synthesis_w3",
        "partOfSpeech": "noun",
        "meaning": "combining ideas into a connected whole",
        "japanese": "統合、まとめ",
        "example": "Synthesize your weekly learning on Thursday.",
        "helpExplanation": "一週間の学びを統合することです。"
      }
    ],
    "schedule": {
      "monday": {
        "type": "self_study_knowledge",
        "title": "Monday Self-Study: Family, Friends & People Knowledge & Comprehension",
        "focus": "Target Vocabulary (8–12 Words) + Audio Listening & Reading Passage",
        "audioUrl": "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
        "transcript": "Speaker A: Welcome to Week 3 of Room 305 Academy! Today we explore Family, Friends & People.\nSpeaker B: That sounds fascinating! Let's examine the main concepts and practice key expressions.",
        "transcriptJapanese": "スピーカーA: 305アカデミーの第3週へようこそ！今日は「Family, Friends & People」を探求します。\nスピーカーB: とても興味深いですね！主要な概念を検討し、キー表現を練習しましょう。",
        "readingPassage": "In Week 3, students focus on Family, Friends & People. By examining real-world contexts, learners build confidence to express ideas clearly.",
        "readingPassageJapanese": "第3週では、生徒は「Family, Friends & People」に焦点を当てます。現実的な文脈を学習することで、クリアに意見を表現する自信を育みます。",
        "quizTitle": "Monday Vocabulary & Comprehension Quiz",
        "comprehensionQuestions": [
          {
            "q": "What is the primary topic of Week 3?",
            "options": [
              "Family, Friends & People",
              "General Grammar",
              "Unrelated Topic",
              "Free Conversation"
            ],
            "correct": 0
          },
          {
            "q": "What is the main goal of Monday self-study?",
            "options": [
              "Knowledge & Comprehension",
              "Live Debate",
              "Final Exam",
              "No Study"
            ],
            "correct": 0
          }
        ],
        "outputTask": "Complete Monday comprehension quiz & submit reflection notes."
      },
      "tuesday": {
        "type": "online_class_practice",
        "title": "Tuesday Online Class (30m): Interactive Practice on Family, Friends & People",
        "focus": "Live Discussion on Monday’s Reading/Listening + Pronunciation Q&A",
        "classTime": "Tuesday 20:00 - 20:30 (JST)",
        "meetingLink": "https://zoom.us/j/room305-tuesday-class",
        "liveActivities": [
          "1. Live interactive discussion on Monday’s reading: \"Family, Friends & People\".",
          "2. Answer comprehension questions using target vocabulary.",
          "3. Receive instructor feedback on pronunciation and phrasing."
        ],
        "quizTitle": "Tuesday Live Class Practice Quiz",
        "questions": [
          {
            "q": "Which expression is best for asking about family, friends & people in a conversation?",
            "options": [
              "\"Could you tell me more about Family, Friends & People?\"",
              "\"I do not know.\"",
              "\"No comment.\"",
              "\"Goodbye.\""
            ],
            "correct": 0
          },
          {
            "q": "During live class, what is the best strategy if you need a moment to think?",
            "options": [
              "Use a polite filler like \"Let me see...\"",
              "Remain silent for 5 minutes",
              "Leave the call",
              "Speak in Japanese only"
            ],
            "correct": 0
          }
        ],
        "outputTask": "Complete Tuesday practice quiz & log instructor feedback."
      },
      "wednesday": {
        "type": "self_study_writing",
        "title": "Wednesday Self-Study: Writing & Speaking Prep for Family, Friends & People",
        "focus": "Grammar Review + Thursday Role-Play Assignment & Script Draft",
        "grammarPoint": "Grammar Pattern for Family, Friends & People",
        "grammarExplanation": "Review target sentence structures to communicate describe personalities, appearances, and relationships using descriptive adjectives.",
        "grammarJapaneseHelp": "「Family, Friends & People」に関する効果的な英文作成のための文法パターンを復習します。",
        "scaffoldedSentence": "Regarding Family, Friends & People, I believe that _____ because _____.",
        "thursdayTaskAssignment": "Prepare a 2-minute script or outline for Thursday's live role-play on Family, Friends & People.",
        "quizTitle": "Wednesday Grammar & Sentence Structure Quiz",
        "questions": [
          {
            "q": "Which conjunction logically connects a main point with a reason in Family, Friends & People?",
            "options": [
              "because",
              "although",
              "unless",
              "neither"
            ],
            "correct": 0
          },
          {
            "q": "What is the goal of Wednesday self-study?",
            "options": [
              "Writing assignment & Thursday script preparation",
              "Just watching video",
              "Skipping study",
              "Final graduation"
            ],
            "correct": 0
          }
        ],
        "outputTask": "Complete Wednesday grammar quiz & submit script draft."
      },
      "thursday": {
        "type": "online_class_synthesis",
        "title": "Thursday Online Class (30m): Role-Play & Synthesis (Family, Friends & People)",
        "focus": "Execute Wednesday’s Script + Unscripted Q&A + Weekly Master Quiz",
        "classTime": "Thursday 20:00 - 20:30 (JST)",
        "meetingLink": "https://zoom.us/j/room305-thursday-class",
        "rolePlayActivities": [
          "1. Execute role-plays or presentations using Wednesday's prepared script.",
          "2. Engage in unscripted follow-up Q&A with instructor and classmates.",
          "3. Complete Weekly Master Quiz & Self-Reflection."
        ],
        "quizTitle": "Thursday Weekly Master Synthesis Quiz",
        "questions": [
          {
            "q": "In Week 3, what is key to successful role-play execution?",
            "options": [
              "Applying Wednesday script & target vocabulary in conversation",
              "Reading silently",
              "Ignoring partner",
              "Only speaking Japanese"
            ],
            "correct": 0
          },
          {
            "q": "How do you express diplomatic disagreement or alternative views on Family, Friends & People?",
            "options": [
              "\"I understand your point, but from my perspective...\"",
              "\"You are wrong.\"",
              "\"I disagree stop talking.\"",
              "\"No way.\""
            ],
            "correct": 0
          },
          {
            "q": "What completes the 2+2 weekly learning cycle on Thursday?",
            "options": [
              "Live role-play, Master Quiz, and Teacher Evaluation",
              "Starting Week 1 again",
              "No output",
              "Writing only"
            ],
            "correct": 0
          }
        ],
        "outputTask": "Complete Thursday Master Quiz, log teacher evaluation & self-reflection."
      }
    }
  },
  {
    "weekNumber": 4,
    "level": "beginner",
    "title": "Food, Dining & Restaurants",
    "goal": "Order food, ask about menu items, and express dietary preferences.",
    "vocabulary": [
      {
        "word": "target_word_1_w4",
        "partOfSpeech": "noun",
        "meaning": "key concept related to Food, Dining & Restaurants",
        "japanese": "主要概念",
        "example": "Using key expressions in Week 4.",
        "helpExplanation": "Week 4の重要キーワードです。"
      },
      {
        "word": "phrase_2_w4",
        "partOfSpeech": "noun phrase",
        "meaning": "useful expression for natural speaking",
        "japanese": "自然な表現",
        "example": "I agree with your point regarding this topic.",
        "helpExplanation": "会話で役立つ定型表現です。"
      },
      {
        "word": "perspective_w4",
        "partOfSpeech": "noun",
        "meaning": "a particular attitude or way of regarding something",
        "japanese": "視点、観点",
        "example": "Share your personal perspective during discussion.",
        "helpExplanation": "自分の考えや見解のことです。"
      },
      {
        "word": "analysis_w4",
        "partOfSpeech": "noun",
        "meaning": "detailed examination of elements or structure",
        "japanese": "分析、考察",
        "example": "Analyze the reading passage carefully.",
        "helpExplanation": "論理的に整理・分析することです。"
      },
      {
        "word": "practice_w4",
        "partOfSpeech": "verb",
        "meaning": "perform an activity regularly to improve",
        "japanese": "練習する",
        "example": "Practice speaking aloud with your partner.",
        "helpExplanation": "声に出して練習することです。"
      },
      {
        "word": "feedback_w4",
        "partOfSpeech": "noun",
        "meaning": "helpful advice or evaluation on performance",
        "japanese": "フィードバック",
        "example": "Instructor feedback guides your pronunciation.",
        "helpExplanation": "指導員からのアドバイスです。"
      },
      {
        "word": "dialogue_w4",
        "partOfSpeech": "noun",
        "meaning": "conversation between two or more people",
        "japanese": "対話、ダイアログ",
        "example": "Prepare your role-play script on Wednesday.",
        "helpExplanation": "役割を演じる対話文です。"
      },
      {
        "word": "synthesis_w4",
        "partOfSpeech": "noun",
        "meaning": "combining ideas into a connected whole",
        "japanese": "統合、まとめ",
        "example": "Synthesize your weekly learning on Thursday.",
        "helpExplanation": "一週間の学びを統合することです。"
      }
    ],
    "schedule": {
      "monday": {
        "type": "self_study_knowledge",
        "title": "Monday Self-Study: Food, Dining & Restaurants Knowledge & Comprehension",
        "focus": "Target Vocabulary (8–12 Words) + Audio Listening & Reading Passage",
        "audioUrl": "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
        "transcript": "Speaker A: Welcome to Week 4 of Room 305 Academy! Today we explore Food, Dining & Restaurants.\nSpeaker B: That sounds fascinating! Let's examine the main concepts and practice key expressions.",
        "transcriptJapanese": "スピーカーA: 305アカデミーの第4週へようこそ！今日は「Food, Dining & Restaurants」を探求します。\nスピーカーB: とても興味深いですね！主要な概念を検討し、キー表現を練習しましょう。",
        "readingPassage": "In Week 4, students focus on Food, Dining & Restaurants. By examining real-world contexts, learners build confidence to express ideas clearly.",
        "readingPassageJapanese": "第4週では、生徒は「Food, Dining & Restaurants」に焦点を当てます。現実的な文脈を学習することで、クリアに意見を表現する自信を育みます。",
        "quizTitle": "Monday Vocabulary & Comprehension Quiz",
        "comprehensionQuestions": [
          {
            "q": "What is the primary topic of Week 4?",
            "options": [
              "Food, Dining & Restaurants",
              "General Grammar",
              "Unrelated Topic",
              "Free Conversation"
            ],
            "correct": 0
          },
          {
            "q": "What is the main goal of Monday self-study?",
            "options": [
              "Knowledge & Comprehension",
              "Live Debate",
              "Final Exam",
              "No Study"
            ],
            "correct": 0
          }
        ],
        "outputTask": "Complete Monday comprehension quiz & submit reflection notes."
      },
      "tuesday": {
        "type": "online_class_practice",
        "title": "Tuesday Online Class (30m): Interactive Practice on Food, Dining & Restaurants",
        "focus": "Live Discussion on Monday’s Reading/Listening + Pronunciation Q&A",
        "classTime": "Tuesday 19:00 - 19:30 (JST)",
        "meetingLink": "https://zoom.us/j/room305-tuesday-class",
        "liveActivities": [
          "1. Live interactive discussion on Monday’s reading: \"Food, Dining & Restaurants\".",
          "2. Answer comprehension questions using target vocabulary.",
          "3. Receive instructor feedback on pronunciation and phrasing."
        ],
        "quizTitle": "Tuesday Live Class Practice Quiz",
        "questions": [
          {
            "q": "Which expression is best for asking about food, dining & restaurants in a conversation?",
            "options": [
              "\"Could you tell me more about Food, Dining & Restaurants?\"",
              "\"I do not know.\"",
              "\"No comment.\"",
              "\"Goodbye.\""
            ],
            "correct": 0
          },
          {
            "q": "During live class, what is the best strategy if you need a moment to think?",
            "options": [
              "Use a polite filler like \"Let me see...\"",
              "Remain silent for 5 minutes",
              "Leave the call",
              "Speak in Japanese only"
            ],
            "correct": 0
          }
        ],
        "outputTask": "Complete Tuesday practice quiz & log instructor feedback."
      },
      "wednesday": {
        "type": "self_study_writing",
        "title": "Wednesday Self-Study: Writing & Speaking Prep for Food, Dining & Restaurants",
        "focus": "Grammar Review + Thursday Role-Play Assignment & Script Draft",
        "grammarPoint": "Grammar Pattern for Food, Dining & Restaurants",
        "grammarExplanation": "Review target sentence structures to communicate order food, ask about menu items, and express dietary preferences.",
        "grammarJapaneseHelp": "「Food, Dining & Restaurants」に関する効果的な英文作成のための文法パターンを復習します。",
        "scaffoldedSentence": "Regarding Food, Dining & Restaurants, I believe that _____ because _____.",
        "thursdayTaskAssignment": "Prepare a 2-minute script or outline for Thursday's live role-play on Food, Dining & Restaurants.",
        "quizTitle": "Wednesday Grammar & Sentence Structure Quiz",
        "questions": [
          {
            "q": "Which conjunction logically connects a main point with a reason in Food, Dining & Restaurants?",
            "options": [
              "because",
              "although",
              "unless",
              "neither"
            ],
            "correct": 0
          },
          {
            "q": "What is the goal of Wednesday self-study?",
            "options": [
              "Writing assignment & Thursday script preparation",
              "Just watching video",
              "Skipping study",
              "Final graduation"
            ],
            "correct": 0
          }
        ],
        "outputTask": "Complete Wednesday grammar quiz & submit script draft."
      },
      "thursday": {
        "type": "online_class_synthesis",
        "title": "Thursday Online Class (30m): Role-Play & Synthesis (Food, Dining & Restaurants)",
        "focus": "Execute Wednesday’s Script + Unscripted Q&A + Weekly Master Quiz",
        "classTime": "Thursday 19:00 - 19:30 (JST)",
        "meetingLink": "https://zoom.us/j/room305-thursday-class",
        "rolePlayActivities": [
          "1. Execute role-plays or presentations using Wednesday's prepared script.",
          "2. Engage in unscripted follow-up Q&A with instructor and classmates.",
          "3. Complete Weekly Master Quiz & Self-Reflection."
        ],
        "quizTitle": "Thursday Weekly Master Synthesis Quiz",
        "questions": [
          {
            "q": "In Week 4, what is key to successful role-play execution?",
            "options": [
              "Applying Wednesday script & target vocabulary in conversation",
              "Reading silently",
              "Ignoring partner",
              "Only speaking Japanese"
            ],
            "correct": 0
          },
          {
            "q": "How do you express diplomatic disagreement or alternative views on Food, Dining & Restaurants?",
            "options": [
              "\"I understand your point, but from my perspective...\"",
              "\"You are wrong.\"",
              "\"I disagree stop talking.\"",
              "\"No way.\""
            ],
            "correct": 0
          },
          {
            "q": "What completes the 2+2 weekly learning cycle on Thursday?",
            "options": [
              "Live role-play, Master Quiz, and Teacher Evaluation",
              "Starting Week 1 again",
              "No output",
              "Writing only"
            ],
            "correct": 0
          }
        ],
        "outputTask": "Complete Thursday Master Quiz, log teacher evaluation & self-reflection."
      }
    }
  },
  {
    "weekNumber": 5,
    "level": "beginner",
    "title": "Shopping & Daily Services",
    "goal": "Ask for prices, sizes, and request assistance at retail shops.",
    "vocabulary": [
      {
        "word": "target_word_1_w5",
        "partOfSpeech": "noun",
        "meaning": "key concept related to Shopping & Daily Services",
        "japanese": "主要概念",
        "example": "Using key expressions in Week 5.",
        "helpExplanation": "Week 5の重要キーワードです。"
      },
      {
        "word": "phrase_2_w5",
        "partOfSpeech": "noun phrase",
        "meaning": "useful expression for natural speaking",
        "japanese": "自然な表現",
        "example": "I agree with your point regarding this topic.",
        "helpExplanation": "会話で役立つ定型表現です。"
      },
      {
        "word": "perspective_w5",
        "partOfSpeech": "noun",
        "meaning": "a particular attitude or way of regarding something",
        "japanese": "視点、観点",
        "example": "Share your personal perspective during discussion.",
        "helpExplanation": "自分の考えや見解のことです。"
      },
      {
        "word": "analysis_w5",
        "partOfSpeech": "noun",
        "meaning": "detailed examination of elements or structure",
        "japanese": "分析、考察",
        "example": "Analyze the reading passage carefully.",
        "helpExplanation": "論理的に整理・分析することです。"
      },
      {
        "word": "practice_w5",
        "partOfSpeech": "verb",
        "meaning": "perform an activity regularly to improve",
        "japanese": "練習する",
        "example": "Practice speaking aloud with your partner.",
        "helpExplanation": "声に出して練習することです。"
      },
      {
        "word": "feedback_w5",
        "partOfSpeech": "noun",
        "meaning": "helpful advice or evaluation on performance",
        "japanese": "フィードバック",
        "example": "Instructor feedback guides your pronunciation.",
        "helpExplanation": "指導員からのアドバイスです。"
      },
      {
        "word": "dialogue_w5",
        "partOfSpeech": "noun",
        "meaning": "conversation between two or more people",
        "japanese": "対話、ダイアログ",
        "example": "Prepare your role-play script on Wednesday.",
        "helpExplanation": "役割を演じる対話文です。"
      },
      {
        "word": "synthesis_w5",
        "partOfSpeech": "noun",
        "meaning": "combining ideas into a connected whole",
        "japanese": "統合、まとめ",
        "example": "Synthesize your weekly learning on Thursday.",
        "helpExplanation": "一週間の学びを統合することです。"
      }
    ],
    "schedule": {
      "monday": {
        "type": "self_study_knowledge",
        "title": "Monday Self-Study: Shopping & Daily Services Knowledge & Comprehension",
        "focus": "Target Vocabulary (8–12 Words) + Audio Listening & Reading Passage",
        "audioUrl": "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
        "transcript": "Speaker A: Welcome to Week 5 of Room 305 Academy! Today we explore Shopping & Daily Services.\nSpeaker B: That sounds fascinating! Let's examine the main concepts and practice key expressions.",
        "transcriptJapanese": "スピーカーA: 305アカデミーの第5週へようこそ！今日は「Shopping & Daily Services」を探求します。\nスピーカーB: とても興味深いですね！主要な概念を検討し、キー表現を練習しましょう。",
        "readingPassage": "In Week 5, students focus on Shopping & Daily Services. By examining real-world contexts, learners build confidence to express ideas clearly.",
        "readingPassageJapanese": "第5週では、生徒は「Shopping & Daily Services」に焦点を当てます。現実的な文脈を学習することで、クリアに意見を表現する自信を育みます。",
        "quizTitle": "Monday Vocabulary & Comprehension Quiz",
        "comprehensionQuestions": [
          {
            "q": "What is the primary topic of Week 5?",
            "options": [
              "Shopping & Daily Services",
              "General Grammar",
              "Unrelated Topic",
              "Free Conversation"
            ],
            "correct": 0
          },
          {
            "q": "What is the main goal of Monday self-study?",
            "options": [
              "Knowledge & Comprehension",
              "Live Debate",
              "Final Exam",
              "No Study"
            ],
            "correct": 0
          }
        ],
        "outputTask": "Complete Monday comprehension quiz & submit reflection notes."
      },
      "tuesday": {
        "type": "online_class_practice",
        "title": "Tuesday Online Class (30m): Interactive Practice on Shopping & Daily Services",
        "focus": "Live Discussion on Monday’s Reading/Listening + Pronunciation Q&A",
        "classTime": "Tuesday 20:00 - 20:30 (JST)",
        "meetingLink": "https://zoom.us/j/room305-tuesday-class",
        "liveActivities": [
          "1. Live interactive discussion on Monday’s reading: \"Shopping & Daily Services\".",
          "2. Answer comprehension questions using target vocabulary.",
          "3. Receive instructor feedback on pronunciation and phrasing."
        ],
        "quizTitle": "Tuesday Live Class Practice Quiz",
        "questions": [
          {
            "q": "Which expression is best for asking about shopping & daily services in a conversation?",
            "options": [
              "\"Could you tell me more about Shopping & Daily Services?\"",
              "\"I do not know.\"",
              "\"No comment.\"",
              "\"Goodbye.\""
            ],
            "correct": 0
          },
          {
            "q": "During live class, what is the best strategy if you need a moment to think?",
            "options": [
              "Use a polite filler like \"Let me see...\"",
              "Remain silent for 5 minutes",
              "Leave the call",
              "Speak in Japanese only"
            ],
            "correct": 0
          }
        ],
        "outputTask": "Complete Tuesday practice quiz & log instructor feedback."
      },
      "wednesday": {
        "type": "self_study_writing",
        "title": "Wednesday Self-Study: Writing & Speaking Prep for Shopping & Daily Services",
        "focus": "Grammar Review + Thursday Role-Play Assignment & Script Draft",
        "grammarPoint": "Grammar Pattern for Shopping & Daily Services",
        "grammarExplanation": "Review target sentence structures to communicate ask for prices, sizes, and request assistance at retail shops.",
        "grammarJapaneseHelp": "「Shopping & Daily Services」に関する効果的な英文作成のための文法パターンを復習します。",
        "scaffoldedSentence": "Regarding Shopping & Daily Services, I believe that _____ because _____.",
        "thursdayTaskAssignment": "Prepare a 2-minute script or outline for Thursday's live role-play on Shopping & Daily Services.",
        "quizTitle": "Wednesday Grammar & Sentence Structure Quiz",
        "questions": [
          {
            "q": "Which conjunction logically connects a main point with a reason in Shopping & Daily Services?",
            "options": [
              "because",
              "although",
              "unless",
              "neither"
            ],
            "correct": 0
          },
          {
            "q": "What is the goal of Wednesday self-study?",
            "options": [
              "Writing assignment & Thursday script preparation",
              "Just watching video",
              "Skipping study",
              "Final graduation"
            ],
            "correct": 0
          }
        ],
        "outputTask": "Complete Wednesday grammar quiz & submit script draft."
      },
      "thursday": {
        "type": "online_class_synthesis",
        "title": "Thursday Online Class (30m): Role-Play & Synthesis (Shopping & Daily Services)",
        "focus": "Execute Wednesday’s Script + Unscripted Q&A + Weekly Master Quiz",
        "classTime": "Thursday 20:00 - 20:30 (JST)",
        "meetingLink": "https://zoom.us/j/room305-thursday-class",
        "rolePlayActivities": [
          "1. Execute role-plays or presentations using Wednesday's prepared script.",
          "2. Engage in unscripted follow-up Q&A with instructor and classmates.",
          "3. Complete Weekly Master Quiz & Self-Reflection."
        ],
        "quizTitle": "Thursday Weekly Master Synthesis Quiz",
        "questions": [
          {
            "q": "In Week 5, what is key to successful role-play execution?",
            "options": [
              "Applying Wednesday script & target vocabulary in conversation",
              "Reading silently",
              "Ignoring partner",
              "Only speaking Japanese"
            ],
            "correct": 0
          },
          {
            "q": "How do you express diplomatic disagreement or alternative views on Shopping & Daily Services?",
            "options": [
              "\"I understand your point, but from my perspective...\"",
              "\"You are wrong.\"",
              "\"I disagree stop talking.\"",
              "\"No way.\""
            ],
            "correct": 0
          },
          {
            "q": "What completes the 2+2 weekly learning cycle on Thursday?",
            "options": [
              "Live role-play, Master Quiz, and Teacher Evaluation",
              "Starting Week 1 again",
              "No output",
              "Writing only"
            ],
            "correct": 0
          }
        ],
        "outputTask": "Complete Thursday Master Quiz, log teacher evaluation & self-reflection."
      }
    }
  },
  {
    "weekNumber": 6,
    "level": "beginner",
    "title": "University & Study Life",
    "goal": "Talk about school subjects, exams, and university routines.",
    "vocabulary": [
      {
        "word": "target_word_1_w6",
        "partOfSpeech": "noun",
        "meaning": "key concept related to University & Study Life",
        "japanese": "主要概念",
        "example": "Using key expressions in Week 6.",
        "helpExplanation": "Week 6の重要キーワードです。"
      },
      {
        "word": "phrase_2_w6",
        "partOfSpeech": "noun phrase",
        "meaning": "useful expression for natural speaking",
        "japanese": "自然な表現",
        "example": "I agree with your point regarding this topic.",
        "helpExplanation": "会話で役立つ定型表現です。"
      },
      {
        "word": "perspective_w6",
        "partOfSpeech": "noun",
        "meaning": "a particular attitude or way of regarding something",
        "japanese": "視点、観点",
        "example": "Share your personal perspective during discussion.",
        "helpExplanation": "自分の考えや見解のことです。"
      },
      {
        "word": "analysis_w6",
        "partOfSpeech": "noun",
        "meaning": "detailed examination of elements or structure",
        "japanese": "分析、考察",
        "example": "Analyze the reading passage carefully.",
        "helpExplanation": "論理的に整理・分析することです。"
      },
      {
        "word": "practice_w6",
        "partOfSpeech": "verb",
        "meaning": "perform an activity regularly to improve",
        "japanese": "練習する",
        "example": "Practice speaking aloud with your partner.",
        "helpExplanation": "声に出して練習することです。"
      },
      {
        "word": "feedback_w6",
        "partOfSpeech": "noun",
        "meaning": "helpful advice or evaluation on performance",
        "japanese": "フィードバック",
        "example": "Instructor feedback guides your pronunciation.",
        "helpExplanation": "指導員からのアドバイスです。"
      },
      {
        "word": "dialogue_w6",
        "partOfSpeech": "noun",
        "meaning": "conversation between two or more people",
        "japanese": "対話、ダイアログ",
        "example": "Prepare your role-play script on Wednesday.",
        "helpExplanation": "役割を演じる対話文です。"
      },
      {
        "word": "synthesis_w6",
        "partOfSpeech": "noun",
        "meaning": "combining ideas into a connected whole",
        "japanese": "統合、まとめ",
        "example": "Synthesize your weekly learning on Thursday.",
        "helpExplanation": "一週間の学びを統合することです。"
      }
    ],
    "schedule": {
      "monday": {
        "type": "self_study_knowledge",
        "title": "Monday Self-Study: University & Study Life Knowledge & Comprehension",
        "focus": "Target Vocabulary (8–12 Words) + Audio Listening & Reading Passage",
        "audioUrl": "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
        "transcript": "Speaker A: Welcome to Week 6 of Room 305 Academy! Today we explore University & Study Life.\nSpeaker B: That sounds fascinating! Let's examine the main concepts and practice key expressions.",
        "transcriptJapanese": "スピーカーA: 305アカデミーの第6週へようこそ！今日は「University & Study Life」を探求します。\nスピーカーB: とても興味深いですね！主要な概念を検討し、キー表現を練習しましょう。",
        "readingPassage": "In Week 6, students focus on University & Study Life. By examining real-world contexts, learners build confidence to express ideas clearly.",
        "readingPassageJapanese": "第6週では、生徒は「University & Study Life」に焦点を当てます。現実的な文脈を学習することで、クリアに意見を表現する自信を育みます。",
        "quizTitle": "Monday Vocabulary & Comprehension Quiz",
        "comprehensionQuestions": [
          {
            "q": "What is the primary topic of Week 6?",
            "options": [
              "University & Study Life",
              "General Grammar",
              "Unrelated Topic",
              "Free Conversation"
            ],
            "correct": 0
          },
          {
            "q": "What is the main goal of Monday self-study?",
            "options": [
              "Knowledge & Comprehension",
              "Live Debate",
              "Final Exam",
              "No Study"
            ],
            "correct": 0
          }
        ],
        "outputTask": "Complete Monday comprehension quiz & submit reflection notes."
      },
      "tuesday": {
        "type": "online_class_practice",
        "title": "Tuesday Online Class (30m): Interactive Practice on University & Study Life",
        "focus": "Live Discussion on Monday’s Reading/Listening + Pronunciation Q&A",
        "classTime": "Tuesday 19:00 - 19:30 (JST)",
        "meetingLink": "https://zoom.us/j/room305-tuesday-class",
        "liveActivities": [
          "1. Live interactive discussion on Monday’s reading: \"University & Study Life\".",
          "2. Answer comprehension questions using target vocabulary.",
          "3. Receive instructor feedback on pronunciation and phrasing."
        ],
        "quizTitle": "Tuesday Live Class Practice Quiz",
        "questions": [
          {
            "q": "Which expression is best for asking about university & study life in a conversation?",
            "options": [
              "\"Could you tell me more about University & Study Life?\"",
              "\"I do not know.\"",
              "\"No comment.\"",
              "\"Goodbye.\""
            ],
            "correct": 0
          },
          {
            "q": "During live class, what is the best strategy if you need a moment to think?",
            "options": [
              "Use a polite filler like \"Let me see...\"",
              "Remain silent for 5 minutes",
              "Leave the call",
              "Speak in Japanese only"
            ],
            "correct": 0
          }
        ],
        "outputTask": "Complete Tuesday practice quiz & log instructor feedback."
      },
      "wednesday": {
        "type": "self_study_writing",
        "title": "Wednesday Self-Study: Writing & Speaking Prep for University & Study Life",
        "focus": "Grammar Review + Thursday Role-Play Assignment & Script Draft",
        "grammarPoint": "Grammar Pattern for University & Study Life",
        "grammarExplanation": "Review target sentence structures to communicate talk about school subjects, exams, and university routines.",
        "grammarJapaneseHelp": "「University & Study Life」に関する効果的な英文作成のための文法パターンを復習します。",
        "scaffoldedSentence": "Regarding University & Study Life, I believe that _____ because _____.",
        "thursdayTaskAssignment": "Prepare a 2-minute script or outline for Thursday's live role-play on University & Study Life.",
        "quizTitle": "Wednesday Grammar & Sentence Structure Quiz",
        "questions": [
          {
            "q": "Which conjunction logically connects a main point with a reason in University & Study Life?",
            "options": [
              "because",
              "although",
              "unless",
              "neither"
            ],
            "correct": 0
          },
          {
            "q": "What is the goal of Wednesday self-study?",
            "options": [
              "Writing assignment & Thursday script preparation",
              "Just watching video",
              "Skipping study",
              "Final graduation"
            ],
            "correct": 0
          }
        ],
        "outputTask": "Complete Wednesday grammar quiz & submit script draft."
      },
      "thursday": {
        "type": "online_class_synthesis",
        "title": "Thursday Online Class (30m): Role-Play & Synthesis (University & Study Life)",
        "focus": "Execute Wednesday’s Script + Unscripted Q&A + Weekly Master Quiz",
        "classTime": "Thursday 19:00 - 19:30 (JST)",
        "meetingLink": "https://zoom.us/j/room305-thursday-class",
        "rolePlayActivities": [
          "1. Execute role-plays or presentations using Wednesday's prepared script.",
          "2. Engage in unscripted follow-up Q&A with instructor and classmates.",
          "3. Complete Weekly Master Quiz & Self-Reflection."
        ],
        "quizTitle": "Thursday Weekly Master Synthesis Quiz",
        "questions": [
          {
            "q": "In Week 6, what is key to successful role-play execution?",
            "options": [
              "Applying Wednesday script & target vocabulary in conversation",
              "Reading silently",
              "Ignoring partner",
              "Only speaking Japanese"
            ],
            "correct": 0
          },
          {
            "q": "How do you express diplomatic disagreement or alternative views on University & Study Life?",
            "options": [
              "\"I understand your point, but from my perspective...\"",
              "\"You are wrong.\"",
              "\"I disagree stop talking.\"",
              "\"No way.\""
            ],
            "correct": 0
          },
          {
            "q": "What completes the 2+2 weekly learning cycle on Thursday?",
            "options": [
              "Live role-play, Master Quiz, and Teacher Evaluation",
              "Starting Week 1 again",
              "No output",
              "Writing only"
            ],
            "correct": 0
          }
        ],
        "outputTask": "Complete Thursday Master Quiz, log teacher evaluation & self-reflection."
      }
    }
  },
  {
    "weekNumber": 7,
    "level": "beginner",
    "title": "Time, Schedules & Making Plans",
    "goal": "Schedule appointments, invite friends, and set meetups.",
    "vocabulary": [
      {
        "word": "target_word_1_w7",
        "partOfSpeech": "noun",
        "meaning": "key concept related to Time, Schedules & Making Plans",
        "japanese": "主要概念",
        "example": "Using key expressions in Week 7.",
        "helpExplanation": "Week 7の重要キーワードです。"
      },
      {
        "word": "phrase_2_w7",
        "partOfSpeech": "noun phrase",
        "meaning": "useful expression for natural speaking",
        "japanese": "自然な表現",
        "example": "I agree with your point regarding this topic.",
        "helpExplanation": "会話で役立つ定型表現です。"
      },
      {
        "word": "perspective_w7",
        "partOfSpeech": "noun",
        "meaning": "a particular attitude or way of regarding something",
        "japanese": "視点、観点",
        "example": "Share your personal perspective during discussion.",
        "helpExplanation": "自分の考えや見解のことです。"
      },
      {
        "word": "analysis_w7",
        "partOfSpeech": "noun",
        "meaning": "detailed examination of elements or structure",
        "japanese": "分析、考察",
        "example": "Analyze the reading passage carefully.",
        "helpExplanation": "論理的に整理・分析することです。"
      },
      {
        "word": "practice_w7",
        "partOfSpeech": "verb",
        "meaning": "perform an activity regularly to improve",
        "japanese": "練習する",
        "example": "Practice speaking aloud with your partner.",
        "helpExplanation": "声に出して練習することです。"
      },
      {
        "word": "feedback_w7",
        "partOfSpeech": "noun",
        "meaning": "helpful advice or evaluation on performance",
        "japanese": "フィードバック",
        "example": "Instructor feedback guides your pronunciation.",
        "helpExplanation": "指導員からのアドバイスです。"
      },
      {
        "word": "dialogue_w7",
        "partOfSpeech": "noun",
        "meaning": "conversation between two or more people",
        "japanese": "対話、ダイアログ",
        "example": "Prepare your role-play script on Wednesday.",
        "helpExplanation": "役割を演じる対話文です。"
      },
      {
        "word": "synthesis_w7",
        "partOfSpeech": "noun",
        "meaning": "combining ideas into a connected whole",
        "japanese": "統合、まとめ",
        "example": "Synthesize your weekly learning on Thursday.",
        "helpExplanation": "一週間の学びを統合することです。"
      }
    ],
    "schedule": {
      "monday": {
        "type": "self_study_knowledge",
        "title": "Monday Self-Study: Time, Schedules & Making Plans Knowledge & Comprehension",
        "focus": "Target Vocabulary (8–12 Words) + Audio Listening & Reading Passage",
        "audioUrl": "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
        "transcript": "Speaker A: Welcome to Week 7 of Room 305 Academy! Today we explore Time, Schedules & Making Plans.\nSpeaker B: That sounds fascinating! Let's examine the main concepts and practice key expressions.",
        "transcriptJapanese": "スピーカーA: 305アカデミーの第7週へようこそ！今日は「Time, Schedules & Making Plans」を探求します。\nスピーカーB: とても興味深いですね！主要な概念を検討し、キー表現を練習しましょう。",
        "readingPassage": "In Week 7, students focus on Time, Schedules & Making Plans. By examining real-world contexts, learners build confidence to express ideas clearly.",
        "readingPassageJapanese": "第7週では、生徒は「Time, Schedules & Making Plans」に焦点を当てます。現実的な文脈を学習することで、クリアに意見を表現する自信を育みます。",
        "quizTitle": "Monday Vocabulary & Comprehension Quiz",
        "comprehensionQuestions": [
          {
            "q": "What is the primary topic of Week 7?",
            "options": [
              "Time, Schedules & Making Plans",
              "General Grammar",
              "Unrelated Topic",
              "Free Conversation"
            ],
            "correct": 0
          },
          {
            "q": "What is the main goal of Monday self-study?",
            "options": [
              "Knowledge & Comprehension",
              "Live Debate",
              "Final Exam",
              "No Study"
            ],
            "correct": 0
          }
        ],
        "outputTask": "Complete Monday comprehension quiz & submit reflection notes."
      },
      "tuesday": {
        "type": "online_class_practice",
        "title": "Tuesday Online Class (30m): Interactive Practice on Time, Schedules & Making Plans",
        "focus": "Live Discussion on Monday’s Reading/Listening + Pronunciation Q&A",
        "classTime": "Tuesday 20:00 - 20:30 (JST)",
        "meetingLink": "https://zoom.us/j/room305-tuesday-class",
        "liveActivities": [
          "1. Live interactive discussion on Monday’s reading: \"Time, Schedules & Making Plans\".",
          "2. Answer comprehension questions using target vocabulary.",
          "3. Receive instructor feedback on pronunciation and phrasing."
        ],
        "quizTitle": "Tuesday Live Class Practice Quiz",
        "questions": [
          {
            "q": "Which expression is best for asking about time, schedules & making plans in a conversation?",
            "options": [
              "\"Could you tell me more about Time, Schedules & Making Plans?\"",
              "\"I do not know.\"",
              "\"No comment.\"",
              "\"Goodbye.\""
            ],
            "correct": 0
          },
          {
            "q": "During live class, what is the best strategy if you need a moment to think?",
            "options": [
              "Use a polite filler like \"Let me see...\"",
              "Remain silent for 5 minutes",
              "Leave the call",
              "Speak in Japanese only"
            ],
            "correct": 0
          }
        ],
        "outputTask": "Complete Tuesday practice quiz & log instructor feedback."
      },
      "wednesday": {
        "type": "self_study_writing",
        "title": "Wednesday Self-Study: Writing & Speaking Prep for Time, Schedules & Making Plans",
        "focus": "Grammar Review + Thursday Role-Play Assignment & Script Draft",
        "grammarPoint": "Grammar Pattern for Time, Schedules & Making Plans",
        "grammarExplanation": "Review target sentence structures to communicate schedule appointments, invite friends, and set meetups.",
        "grammarJapaneseHelp": "「Time, Schedules & Making Plans」に関する効果的な英文作成のための文法パターンを復習します。",
        "scaffoldedSentence": "Regarding Time, Schedules & Making Plans, I believe that _____ because _____.",
        "thursdayTaskAssignment": "Prepare a 2-minute script or outline for Thursday's live role-play on Time, Schedules & Making Plans.",
        "quizTitle": "Wednesday Grammar & Sentence Structure Quiz",
        "questions": [
          {
            "q": "Which conjunction logically connects a main point with a reason in Time, Schedules & Making Plans?",
            "options": [
              "because",
              "although",
              "unless",
              "neither"
            ],
            "correct": 0
          },
          {
            "q": "What is the goal of Wednesday self-study?",
            "options": [
              "Writing assignment & Thursday script preparation",
              "Just watching video",
              "Skipping study",
              "Final graduation"
            ],
            "correct": 0
          }
        ],
        "outputTask": "Complete Wednesday grammar quiz & submit script draft."
      },
      "thursday": {
        "type": "online_class_synthesis",
        "title": "Thursday Online Class (30m): Role-Play & Synthesis (Time, Schedules & Making Plans)",
        "focus": "Execute Wednesday’s Script + Unscripted Q&A + Weekly Master Quiz",
        "classTime": "Thursday 20:00 - 20:30 (JST)",
        "meetingLink": "https://zoom.us/j/room305-thursday-class",
        "rolePlayActivities": [
          "1. Execute role-plays or presentations using Wednesday's prepared script.",
          "2. Engage in unscripted follow-up Q&A with instructor and classmates.",
          "3. Complete Weekly Master Quiz & Self-Reflection."
        ],
        "quizTitle": "Thursday Weekly Master Synthesis Quiz",
        "questions": [
          {
            "q": "In Week 7, what is key to successful role-play execution?",
            "options": [
              "Applying Wednesday script & target vocabulary in conversation",
              "Reading silently",
              "Ignoring partner",
              "Only speaking Japanese"
            ],
            "correct": 0
          },
          {
            "q": "How do you express diplomatic disagreement or alternative views on Time, Schedules & Making Plans?",
            "options": [
              "\"I understand your point, but from my perspective...\"",
              "\"You are wrong.\"",
              "\"I disagree stop talking.\"",
              "\"No way.\""
            ],
            "correct": 0
          },
          {
            "q": "What completes the 2+2 weekly learning cycle on Thursday?",
            "options": [
              "Live role-play, Master Quiz, and Teacher Evaluation",
              "Starting Week 1 again",
              "No output",
              "Writing only"
            ],
            "correct": 0
          }
        ],
        "outputTask": "Complete Thursday Master Quiz, log teacher evaluation & self-reflection."
      }
    }
  },
  {
    "weekNumber": 8,
    "level": "beginner",
    "title": "Travel, Navigation & Directions",
    "goal": "Ask for street directions, train tickets, and hotel assistance.",
    "vocabulary": [
      {
        "word": "target_word_1_w8",
        "partOfSpeech": "noun",
        "meaning": "key concept related to Travel, Navigation & Directions",
        "japanese": "主要概念",
        "example": "Using key expressions in Week 8.",
        "helpExplanation": "Week 8の重要キーワードです。"
      },
      {
        "word": "phrase_2_w8",
        "partOfSpeech": "noun phrase",
        "meaning": "useful expression for natural speaking",
        "japanese": "自然な表現",
        "example": "I agree with your point regarding this topic.",
        "helpExplanation": "会話で役立つ定型表現です。"
      },
      {
        "word": "perspective_w8",
        "partOfSpeech": "noun",
        "meaning": "a particular attitude or way of regarding something",
        "japanese": "視点、観点",
        "example": "Share your personal perspective during discussion.",
        "helpExplanation": "自分の考えや見解のことです。"
      },
      {
        "word": "analysis_w8",
        "partOfSpeech": "noun",
        "meaning": "detailed examination of elements or structure",
        "japanese": "分析、考察",
        "example": "Analyze the reading passage carefully.",
        "helpExplanation": "論理的に整理・分析することです。"
      },
      {
        "word": "practice_w8",
        "partOfSpeech": "verb",
        "meaning": "perform an activity regularly to improve",
        "japanese": "練習する",
        "example": "Practice speaking aloud with your partner.",
        "helpExplanation": "声に出して練習することです。"
      },
      {
        "word": "feedback_w8",
        "partOfSpeech": "noun",
        "meaning": "helpful advice or evaluation on performance",
        "japanese": "フィードバック",
        "example": "Instructor feedback guides your pronunciation.",
        "helpExplanation": "指導員からのアドバイスです。"
      },
      {
        "word": "dialogue_w8",
        "partOfSpeech": "noun",
        "meaning": "conversation between two or more people",
        "japanese": "対話、ダイアログ",
        "example": "Prepare your role-play script on Wednesday.",
        "helpExplanation": "役割を演じる対話文です。"
      },
      {
        "word": "synthesis_w8",
        "partOfSpeech": "noun",
        "meaning": "combining ideas into a connected whole",
        "japanese": "統合、まとめ",
        "example": "Synthesize your weekly learning on Thursday.",
        "helpExplanation": "一週間の学びを統合することです。"
      }
    ],
    "schedule": {
      "monday": {
        "type": "self_study_knowledge",
        "title": "Monday Self-Study: Travel, Navigation & Directions Knowledge & Comprehension",
        "focus": "Target Vocabulary (8–12 Words) + Audio Listening & Reading Passage",
        "audioUrl": "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
        "transcript": "Speaker A: Welcome to Week 8 of Room 305 Academy! Today we explore Travel, Navigation & Directions.\nSpeaker B: That sounds fascinating! Let's examine the main concepts and practice key expressions.",
        "transcriptJapanese": "スピーカーA: 305アカデミーの第8週へようこそ！今日は「Travel, Navigation & Directions」を探求します。\nスピーカーB: とても興味深いですね！主要な概念を検討し、キー表現を練習しましょう。",
        "readingPassage": "In Week 8, students focus on Travel, Navigation & Directions. By examining real-world contexts, learners build confidence to express ideas clearly.",
        "readingPassageJapanese": "第8週では、生徒は「Travel, Navigation & Directions」に焦点を当てます。現実的な文脈を学習することで、クリアに意見を表現する自信を育みます。",
        "quizTitle": "Monday Vocabulary & Comprehension Quiz",
        "comprehensionQuestions": [
          {
            "q": "What is the primary topic of Week 8?",
            "options": [
              "Travel, Navigation & Directions",
              "General Grammar",
              "Unrelated Topic",
              "Free Conversation"
            ],
            "correct": 0
          },
          {
            "q": "What is the main goal of Monday self-study?",
            "options": [
              "Knowledge & Comprehension",
              "Live Debate",
              "Final Exam",
              "No Study"
            ],
            "correct": 0
          }
        ],
        "outputTask": "Complete Monday comprehension quiz & submit reflection notes."
      },
      "tuesday": {
        "type": "online_class_practice",
        "title": "Tuesday Online Class (30m): Interactive Practice on Travel, Navigation & Directions",
        "focus": "Live Discussion on Monday’s Reading/Listening + Pronunciation Q&A",
        "classTime": "Tuesday 19:00 - 19:30 (JST)",
        "meetingLink": "https://zoom.us/j/room305-tuesday-class",
        "liveActivities": [
          "1. Live interactive discussion on Monday’s reading: \"Travel, Navigation & Directions\".",
          "2. Answer comprehension questions using target vocabulary.",
          "3. Receive instructor feedback on pronunciation and phrasing."
        ],
        "quizTitle": "Tuesday Live Class Practice Quiz",
        "questions": [
          {
            "q": "Which expression is best for asking about travel, navigation & directions in a conversation?",
            "options": [
              "\"Could you tell me more about Travel, Navigation & Directions?\"",
              "\"I do not know.\"",
              "\"No comment.\"",
              "\"Goodbye.\""
            ],
            "correct": 0
          },
          {
            "q": "During live class, what is the best strategy if you need a moment to think?",
            "options": [
              "Use a polite filler like \"Let me see...\"",
              "Remain silent for 5 minutes",
              "Leave the call",
              "Speak in Japanese only"
            ],
            "correct": 0
          }
        ],
        "outputTask": "Complete Tuesday practice quiz & log instructor feedback."
      },
      "wednesday": {
        "type": "self_study_writing",
        "title": "Wednesday Self-Study: Writing & Speaking Prep for Travel, Navigation & Directions",
        "focus": "Grammar Review + Thursday Role-Play Assignment & Script Draft",
        "grammarPoint": "Grammar Pattern for Travel, Navigation & Directions",
        "grammarExplanation": "Review target sentence structures to communicate ask for street directions, train tickets, and hotel assistance.",
        "grammarJapaneseHelp": "「Travel, Navigation & Directions」に関する効果的な英文作成のための文法パターンを復習します。",
        "scaffoldedSentence": "Regarding Travel, Navigation & Directions, I believe that _____ because _____.",
        "thursdayTaskAssignment": "Prepare a 2-minute script or outline for Thursday's live role-play on Travel, Navigation & Directions.",
        "quizTitle": "Wednesday Grammar & Sentence Structure Quiz",
        "questions": [
          {
            "q": "Which conjunction logically connects a main point with a reason in Travel, Navigation & Directions?",
            "options": [
              "because",
              "although",
              "unless",
              "neither"
            ],
            "correct": 0
          },
          {
            "q": "What is the goal of Wednesday self-study?",
            "options": [
              "Writing assignment & Thursday script preparation",
              "Just watching video",
              "Skipping study",
              "Final graduation"
            ],
            "correct": 0
          }
        ],
        "outputTask": "Complete Wednesday grammar quiz & submit script draft."
      },
      "thursday": {
        "type": "online_class_synthesis",
        "title": "Thursday Online Class (30m): Role-Play & Synthesis (Travel, Navigation & Directions)",
        "focus": "Execute Wednesday’s Script + Unscripted Q&A + Weekly Master Quiz",
        "classTime": "Thursday 19:00 - 19:30 (JST)",
        "meetingLink": "https://zoom.us/j/room305-thursday-class",
        "rolePlayActivities": [
          "1. Execute role-plays or presentations using Wednesday's prepared script.",
          "2. Engage in unscripted follow-up Q&A with instructor and classmates.",
          "3. Complete Weekly Master Quiz & Self-Reflection."
        ],
        "quizTitle": "Thursday Weekly Master Synthesis Quiz",
        "questions": [
          {
            "q": "In Week 8, what is key to successful role-play execution?",
            "options": [
              "Applying Wednesday script & target vocabulary in conversation",
              "Reading silently",
              "Ignoring partner",
              "Only speaking Japanese"
            ],
            "correct": 0
          },
          {
            "q": "How do you express diplomatic disagreement or alternative views on Travel, Navigation & Directions?",
            "options": [
              "\"I understand your point, but from my perspective...\"",
              "\"You are wrong.\"",
              "\"I disagree stop talking.\"",
              "\"No way.\""
            ],
            "correct": 0
          },
          {
            "q": "What completes the 2+2 weekly learning cycle on Thursday?",
            "options": [
              "Live role-play, Master Quiz, and Teacher Evaluation",
              "Starting Week 1 again",
              "No output",
              "Writing only"
            ],
            "correct": 0
          }
        ],
        "outputTask": "Complete Thursday Master Quiz, log teacher evaluation & self-reflection."
      }
    }
  },
  {
    "weekNumber": 9,
    "level": "beginner",
    "title": "Hobbies, Sports & Free Time",
    "goal": "Share weekend activities, sports, and entertainment preferences.",
    "vocabulary": [
      {
        "word": "target_word_1_w9",
        "partOfSpeech": "noun",
        "meaning": "key concept related to Hobbies, Sports & Free Time",
        "japanese": "主要概念",
        "example": "Using key expressions in Week 9.",
        "helpExplanation": "Week 9の重要キーワードです。"
      },
      {
        "word": "phrase_2_w9",
        "partOfSpeech": "noun phrase",
        "meaning": "useful expression for natural speaking",
        "japanese": "自然な表現",
        "example": "I agree with your point regarding this topic.",
        "helpExplanation": "会話で役立つ定型表現です。"
      },
      {
        "word": "perspective_w9",
        "partOfSpeech": "noun",
        "meaning": "a particular attitude or way of regarding something",
        "japanese": "視点、観点",
        "example": "Share your personal perspective during discussion.",
        "helpExplanation": "自分の考えや見解のことです。"
      },
      {
        "word": "analysis_w9",
        "partOfSpeech": "noun",
        "meaning": "detailed examination of elements or structure",
        "japanese": "分析、考察",
        "example": "Analyze the reading passage carefully.",
        "helpExplanation": "論理的に整理・分析することです。"
      },
      {
        "word": "practice_w9",
        "partOfSpeech": "verb",
        "meaning": "perform an activity regularly to improve",
        "japanese": "練習する",
        "example": "Practice speaking aloud with your partner.",
        "helpExplanation": "声に出して練習することです。"
      },
      {
        "word": "feedback_w9",
        "partOfSpeech": "noun",
        "meaning": "helpful advice or evaluation on performance",
        "japanese": "フィードバック",
        "example": "Instructor feedback guides your pronunciation.",
        "helpExplanation": "指導員からのアドバイスです。"
      },
      {
        "word": "dialogue_w9",
        "partOfSpeech": "noun",
        "meaning": "conversation between two or more people",
        "japanese": "対話、ダイアログ",
        "example": "Prepare your role-play script on Wednesday.",
        "helpExplanation": "役割を演じる対話文です。"
      },
      {
        "word": "synthesis_w9",
        "partOfSpeech": "noun",
        "meaning": "combining ideas into a connected whole",
        "japanese": "統合、まとめ",
        "example": "Synthesize your weekly learning on Thursday.",
        "helpExplanation": "一週間の学びを統合することです。"
      }
    ],
    "schedule": {
      "monday": {
        "type": "self_study_knowledge",
        "title": "Monday Self-Study: Hobbies, Sports & Free Time Knowledge & Comprehension",
        "focus": "Target Vocabulary (8–12 Words) + Audio Listening & Reading Passage",
        "audioUrl": "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
        "transcript": "Speaker A: Welcome to Week 9 of Room 305 Academy! Today we explore Hobbies, Sports & Free Time.\nSpeaker B: That sounds fascinating! Let's examine the main concepts and practice key expressions.",
        "transcriptJapanese": "スピーカーA: 305アカデミーの第9週へようこそ！今日は「Hobbies, Sports & Free Time」を探求します。\nスピーカーB: とても興味深いですね！主要な概念を検討し、キー表現を練習しましょう。",
        "readingPassage": "In Week 9, students focus on Hobbies, Sports & Free Time. By examining real-world contexts, learners build confidence to express ideas clearly.",
        "readingPassageJapanese": "第9週では、生徒は「Hobbies, Sports & Free Time」に焦点を当てます。現実的な文脈を学習することで、クリアに意見を表現する自信を育みます。",
        "quizTitle": "Monday Vocabulary & Comprehension Quiz",
        "comprehensionQuestions": [
          {
            "q": "What is the primary topic of Week 9?",
            "options": [
              "Hobbies, Sports & Free Time",
              "General Grammar",
              "Unrelated Topic",
              "Free Conversation"
            ],
            "correct": 0
          },
          {
            "q": "What is the main goal of Monday self-study?",
            "options": [
              "Knowledge & Comprehension",
              "Live Debate",
              "Final Exam",
              "No Study"
            ],
            "correct": 0
          }
        ],
        "outputTask": "Complete Monday comprehension quiz & submit reflection notes."
      },
      "tuesday": {
        "type": "online_class_practice",
        "title": "Tuesday Online Class (30m): Interactive Practice on Hobbies, Sports & Free Time",
        "focus": "Live Discussion on Monday’s Reading/Listening + Pronunciation Q&A",
        "classTime": "Tuesday 20:00 - 20:30 (JST)",
        "meetingLink": "https://zoom.us/j/room305-tuesday-class",
        "liveActivities": [
          "1. Live interactive discussion on Monday’s reading: \"Hobbies, Sports & Free Time\".",
          "2. Answer comprehension questions using target vocabulary.",
          "3. Receive instructor feedback on pronunciation and phrasing."
        ],
        "quizTitle": "Tuesday Live Class Practice Quiz",
        "questions": [
          {
            "q": "Which expression is best for asking about hobbies, sports & free time in a conversation?",
            "options": [
              "\"Could you tell me more about Hobbies, Sports & Free Time?\"",
              "\"I do not know.\"",
              "\"No comment.\"",
              "\"Goodbye.\""
            ],
            "correct": 0
          },
          {
            "q": "During live class, what is the best strategy if you need a moment to think?",
            "options": [
              "Use a polite filler like \"Let me see...\"",
              "Remain silent for 5 minutes",
              "Leave the call",
              "Speak in Japanese only"
            ],
            "correct": 0
          }
        ],
        "outputTask": "Complete Tuesday practice quiz & log instructor feedback."
      },
      "wednesday": {
        "type": "self_study_writing",
        "title": "Wednesday Self-Study: Writing & Speaking Prep for Hobbies, Sports & Free Time",
        "focus": "Grammar Review + Thursday Role-Play Assignment & Script Draft",
        "grammarPoint": "Grammar Pattern for Hobbies, Sports & Free Time",
        "grammarExplanation": "Review target sentence structures to communicate share weekend activities, sports, and entertainment preferences.",
        "grammarJapaneseHelp": "「Hobbies, Sports & Free Time」に関する効果的な英文作成のための文法パターンを復習します。",
        "scaffoldedSentence": "Regarding Hobbies, Sports & Free Time, I believe that _____ because _____.",
        "thursdayTaskAssignment": "Prepare a 2-minute script or outline for Thursday's live role-play on Hobbies, Sports & Free Time.",
        "quizTitle": "Wednesday Grammar & Sentence Structure Quiz",
        "questions": [
          {
            "q": "Which conjunction logically connects a main point with a reason in Hobbies, Sports & Free Time?",
            "options": [
              "because",
              "although",
              "unless",
              "neither"
            ],
            "correct": 0
          },
          {
            "q": "What is the goal of Wednesday self-study?",
            "options": [
              "Writing assignment & Thursday script preparation",
              "Just watching video",
              "Skipping study",
              "Final graduation"
            ],
            "correct": 0
          }
        ],
        "outputTask": "Complete Wednesday grammar quiz & submit script draft."
      },
      "thursday": {
        "type": "online_class_synthesis",
        "title": "Thursday Online Class (30m): Role-Play & Synthesis (Hobbies, Sports & Free Time)",
        "focus": "Execute Wednesday’s Script + Unscripted Q&A + Weekly Master Quiz",
        "classTime": "Thursday 20:00 - 20:30 (JST)",
        "meetingLink": "https://zoom.us/j/room305-thursday-class",
        "rolePlayActivities": [
          "1. Execute role-plays or presentations using Wednesday's prepared script.",
          "2. Engage in unscripted follow-up Q&A with instructor and classmates.",
          "3. Complete Weekly Master Quiz & Self-Reflection."
        ],
        "quizTitle": "Thursday Weekly Master Synthesis Quiz",
        "questions": [
          {
            "q": "In Week 9, what is key to successful role-play execution?",
            "options": [
              "Applying Wednesday script & target vocabulary in conversation",
              "Reading silently",
              "Ignoring partner",
              "Only speaking Japanese"
            ],
            "correct": 0
          },
          {
            "q": "How do you express diplomatic disagreement or alternative views on Hobbies, Sports & Free Time?",
            "options": [
              "\"I understand your point, but from my perspective...\"",
              "\"You are wrong.\"",
              "\"I disagree stop talking.\"",
              "\"No way.\""
            ],
            "correct": 0
          },
          {
            "q": "What completes the 2+2 weekly learning cycle on Thursday?",
            "options": [
              "Live role-play, Master Quiz, and Teacher Evaluation",
              "Starting Week 1 again",
              "No output",
              "Writing only"
            ],
            "correct": 0
          }
        ],
        "outputTask": "Complete Thursday Master Quiz, log teacher evaluation & self-reflection."
      }
    }
  },
  {
    "weekNumber": 10,
    "level": "beginner",
    "title": "Beginner Capstone & Synthesis Project",
    "goal": "Synthesize Weeks 1–9 skills in a final beginner speaking project.",
    "vocabulary": [
      {
        "word": "target_word_1_w10",
        "partOfSpeech": "noun",
        "meaning": "key concept related to Beginner Capstone & Synthesis Project",
        "japanese": "主要概念",
        "example": "Using key expressions in Week 10.",
        "helpExplanation": "Week 10の重要キーワードです。"
      },
      {
        "word": "phrase_2_w10",
        "partOfSpeech": "noun phrase",
        "meaning": "useful expression for natural speaking",
        "japanese": "自然な表現",
        "example": "I agree with your point regarding this topic.",
        "helpExplanation": "会話で役立つ定型表現です。"
      },
      {
        "word": "perspective_w10",
        "partOfSpeech": "noun",
        "meaning": "a particular attitude or way of regarding something",
        "japanese": "視点、観点",
        "example": "Share your personal perspective during discussion.",
        "helpExplanation": "自分の考えや見解のことです。"
      },
      {
        "word": "analysis_w10",
        "partOfSpeech": "noun",
        "meaning": "detailed examination of elements or structure",
        "japanese": "分析、考察",
        "example": "Analyze the reading passage carefully.",
        "helpExplanation": "論理的に整理・分析することです。"
      },
      {
        "word": "practice_w10",
        "partOfSpeech": "verb",
        "meaning": "perform an activity regularly to improve",
        "japanese": "練習する",
        "example": "Practice speaking aloud with your partner.",
        "helpExplanation": "声に出して練習することです。"
      },
      {
        "word": "feedback_w10",
        "partOfSpeech": "noun",
        "meaning": "helpful advice or evaluation on performance",
        "japanese": "フィードバック",
        "example": "Instructor feedback guides your pronunciation.",
        "helpExplanation": "指導員からのアドバイスです。"
      },
      {
        "word": "dialogue_w10",
        "partOfSpeech": "noun",
        "meaning": "conversation between two or more people",
        "japanese": "対話、ダイアログ",
        "example": "Prepare your role-play script on Wednesday.",
        "helpExplanation": "役割を演じる対話文です。"
      },
      {
        "word": "synthesis_w10",
        "partOfSpeech": "noun",
        "meaning": "combining ideas into a connected whole",
        "japanese": "統合、まとめ",
        "example": "Synthesize your weekly learning on Thursday.",
        "helpExplanation": "一週間の学びを統合することです。"
      }
    ],
    "schedule": {
      "monday": {
        "type": "self_study_knowledge",
        "title": "Monday Self-Study: Beginner Capstone & Synthesis Project Knowledge & Comprehension",
        "focus": "Target Vocabulary (8–12 Words) + Audio Listening & Reading Passage",
        "audioUrl": "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
        "transcript": "Speaker A: Welcome to Week 10 of Room 305 Academy! Today we explore Beginner Capstone & Synthesis Project.\nSpeaker B: That sounds fascinating! Let's examine the main concepts and practice key expressions.",
        "transcriptJapanese": "スピーカーA: 305アカデミーの第10週へようこそ！今日は「Beginner Capstone & Synthesis Project」を探求します。\nスピーカーB: とても興味深いですね！主要な概念を検討し、キー表現を練習しましょう。",
        "readingPassage": "In Week 10, students focus on Beginner Capstone & Synthesis Project. By examining real-world contexts, learners build confidence to express ideas clearly.",
        "readingPassageJapanese": "第10週では、生徒は「Beginner Capstone & Synthesis Project」に焦点を当てます。現実的な文脈を学習することで、クリアに意見を表現する自信を育みます。",
        "quizTitle": "Monday Vocabulary & Comprehension Quiz",
        "comprehensionQuestions": [
          {
            "q": "What is the primary topic of Week 10?",
            "options": [
              "Beginner Capstone & Synthesis Project",
              "General Grammar",
              "Unrelated Topic",
              "Free Conversation"
            ],
            "correct": 0
          },
          {
            "q": "What is the main goal of Monday self-study?",
            "options": [
              "Knowledge & Comprehension",
              "Live Debate",
              "Final Exam",
              "No Study"
            ],
            "correct": 0
          }
        ],
        "outputTask": "Complete Monday comprehension quiz & submit reflection notes."
      },
      "tuesday": {
        "type": "online_class_practice",
        "title": "Tuesday Online Class (30m): Interactive Practice on Beginner Capstone & Synthesis Project",
        "focus": "Live Discussion on Monday’s Reading/Listening + Pronunciation Q&A",
        "classTime": "Tuesday 19:00 - 19:30 (JST)",
        "meetingLink": "https://zoom.us/j/room305-tuesday-class",
        "liveActivities": [
          "1. Live interactive discussion on Monday’s reading: \"Beginner Capstone & Synthesis Project\".",
          "2. Answer comprehension questions using target vocabulary.",
          "3. Receive instructor feedback on pronunciation and phrasing."
        ],
        "quizTitle": "Tuesday Live Class Practice Quiz",
        "questions": [
          {
            "q": "Which expression is best for asking about beginner capstone & synthesis project in a conversation?",
            "options": [
              "\"Could you tell me more about Beginner Capstone & Synthesis Project?\"",
              "\"I do not know.\"",
              "\"No comment.\"",
              "\"Goodbye.\""
            ],
            "correct": 0
          },
          {
            "q": "During live class, what is the best strategy if you need a moment to think?",
            "options": [
              "Use a polite filler like \"Let me see...\"",
              "Remain silent for 5 minutes",
              "Leave the call",
              "Speak in Japanese only"
            ],
            "correct": 0
          }
        ],
        "outputTask": "Complete Tuesday practice quiz & log instructor feedback."
      },
      "wednesday": {
        "type": "self_study_writing",
        "title": "Wednesday Self-Study: Writing & Speaking Prep for Beginner Capstone & Synthesis Project",
        "focus": "Grammar Review + Thursday Role-Play Assignment & Script Draft",
        "grammarPoint": "Grammar Pattern for Beginner Capstone & Synthesis Project",
        "grammarExplanation": "Review target sentence structures to communicate synthesize weeks 1–9 skills in a final beginner speaking project.",
        "grammarJapaneseHelp": "「Beginner Capstone & Synthesis Project」に関する効果的な英文作成のための文法パターンを復習します。",
        "scaffoldedSentence": "Regarding Beginner Capstone & Synthesis Project, I believe that _____ because _____.",
        "thursdayTaskAssignment": "Prepare a 2-minute script or outline for Thursday's live role-play on Beginner Capstone & Synthesis Project.",
        "quizTitle": "Wednesday Grammar & Sentence Structure Quiz",
        "questions": [
          {
            "q": "Which conjunction logically connects a main point with a reason in Beginner Capstone & Synthesis Project?",
            "options": [
              "because",
              "although",
              "unless",
              "neither"
            ],
            "correct": 0
          },
          {
            "q": "What is the goal of Wednesday self-study?",
            "options": [
              "Writing assignment & Thursday script preparation",
              "Just watching video",
              "Skipping study",
              "Final graduation"
            ],
            "correct": 0
          }
        ],
        "outputTask": "Complete Wednesday grammar quiz & submit script draft."
      },
      "thursday": {
        "type": "online_class_synthesis",
        "title": "Thursday Online Class (30m): Role-Play & Synthesis (Beginner Capstone & Synthesis Project)",
        "focus": "Execute Wednesday’s Script + Unscripted Q&A + Weekly Master Quiz",
        "classTime": "Thursday 19:00 - 19:30 (JST)",
        "meetingLink": "https://zoom.us/j/room305-thursday-class",
        "rolePlayActivities": [
          "1. Execute role-plays or presentations using Wednesday's prepared script.",
          "2. Engage in unscripted follow-up Q&A with instructor and classmates.",
          "3. Complete Weekly Master Quiz & Self-Reflection."
        ],
        "quizTitle": "Thursday Weekly Master Synthesis Quiz",
        "questions": [
          {
            "q": "In Week 10, what is key to successful role-play execution?",
            "options": [
              "Applying Wednesday script & target vocabulary in conversation",
              "Reading silently",
              "Ignoring partner",
              "Only speaking Japanese"
            ],
            "correct": 0
          },
          {
            "q": "How do you express diplomatic disagreement or alternative views on Beginner Capstone & Synthesis Project?",
            "options": [
              "\"I understand your point, but from my perspective...\"",
              "\"You are wrong.\"",
              "\"I disagree stop talking.\"",
              "\"No way.\""
            ],
            "correct": 0
          },
          {
            "q": "What completes the 2+2 weekly learning cycle on Thursday?",
            "options": [
              "Live role-play, Master Quiz, and Teacher Evaluation",
              "Starting Week 1 again",
              "No output",
              "Writing only"
            ],
            "correct": 0
          }
        ],
        "outputTask": "Complete Thursday Master Quiz, log teacher evaluation & self-reflection."
      }
    }
  },
  {
    "weekNumber": 11,
    "level": "intermediate",
    "title": "Culture & International Exchange",
    "goal": "Discuss cultural differences, customs, and etiquette politely in English.",
    "vocabulary": [
      {
        "word": "target_word_1_w11",
        "partOfSpeech": "noun",
        "meaning": "key concept related to Culture & International Exchange",
        "japanese": "主要概念",
        "example": "Using key expressions in Week 11.",
        "helpExplanation": "Week 11の重要キーワードです。"
      },
      {
        "word": "phrase_2_w11",
        "partOfSpeech": "noun phrase",
        "meaning": "useful expression for natural speaking",
        "japanese": "自然な表現",
        "example": "I agree with your point regarding this topic.",
        "helpExplanation": "会話で役立つ定型表現です。"
      },
      {
        "word": "perspective_w11",
        "partOfSpeech": "noun",
        "meaning": "a particular attitude or way of regarding something",
        "japanese": "視点、観点",
        "example": "Share your personal perspective during discussion.",
        "helpExplanation": "自分の考えや見解のことです。"
      },
      {
        "word": "analysis_w11",
        "partOfSpeech": "noun",
        "meaning": "detailed examination of elements or structure",
        "japanese": "分析、考察",
        "example": "Analyze the reading passage carefully.",
        "helpExplanation": "論理的に整理・分析することです。"
      },
      {
        "word": "practice_w11",
        "partOfSpeech": "verb",
        "meaning": "perform an activity regularly to improve",
        "japanese": "練習する",
        "example": "Practice speaking aloud with your partner.",
        "helpExplanation": "声に出して練習することです。"
      },
      {
        "word": "feedback_w11",
        "partOfSpeech": "noun",
        "meaning": "helpful advice or evaluation on performance",
        "japanese": "フィードバック",
        "example": "Instructor feedback guides your pronunciation.",
        "helpExplanation": "指導員からのアドバイスです。"
      },
      {
        "word": "dialogue_w11",
        "partOfSpeech": "noun",
        "meaning": "conversation between two or more people",
        "japanese": "対話、ダイアログ",
        "example": "Prepare your role-play script on Wednesday.",
        "helpExplanation": "役割を演じる対話文です。"
      },
      {
        "word": "synthesis_w11",
        "partOfSpeech": "noun",
        "meaning": "combining ideas into a connected whole",
        "japanese": "統合、まとめ",
        "example": "Synthesize your weekly learning on Thursday.",
        "helpExplanation": "一週間の学びを統合することです。"
      }
    ],
    "schedule": {
      "monday": {
        "type": "self_study_knowledge",
        "title": "Monday Self-Study: Culture & International Exchange Knowledge & Comprehension",
        "focus": "Target Vocabulary (8–12 Words) + Audio Listening & Reading Passage",
        "audioUrl": "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
        "transcript": "Speaker A: Welcome to Week 11 of Room 305 Academy! Today we explore Culture & International Exchange.\nSpeaker B: That sounds fascinating! Let's examine the main concepts and practice key expressions.",
        "transcriptJapanese": "スピーカーA: 305アカデミーの第11週へようこそ！今日は「Culture & International Exchange」を探求します。\nスピーカーB: とても興味深いですね！主要な概念を検討し、キー表現を練習しましょう。",
        "readingPassage": "In Week 11, students focus on Culture & International Exchange. By examining real-world contexts, learners build confidence to express ideas clearly.",
        "readingPassageJapanese": "第11週では、生徒は「Culture & International Exchange」に焦点を当てます。現実的な文脈を学習することで、クリアに意見を表現する自信を育みます。",
        "quizTitle": "Monday Vocabulary & Comprehension Quiz",
        "comprehensionQuestions": [
          {
            "q": "What is the primary topic of Week 11?",
            "options": [
              "Culture & International Exchange",
              "General Grammar",
              "Unrelated Topic",
              "Free Conversation"
            ],
            "correct": 0
          },
          {
            "q": "What is the main goal of Monday self-study?",
            "options": [
              "Knowledge & Comprehension",
              "Live Debate",
              "Final Exam",
              "No Study"
            ],
            "correct": 0
          }
        ],
        "outputTask": "Complete Monday comprehension quiz & submit reflection notes."
      },
      "tuesday": {
        "type": "online_class_practice",
        "title": "Tuesday Online Class (30m): Interactive Practice on Culture & International Exchange",
        "focus": "Live Discussion on Monday’s Reading/Listening + Pronunciation Q&A",
        "classTime": "Tuesday 20:00 - 20:30 (JST)",
        "meetingLink": "https://zoom.us/j/room305-tuesday-class",
        "liveActivities": [
          "1. Live interactive discussion on Monday’s reading: \"Culture & International Exchange\".",
          "2. Answer comprehension questions using target vocabulary.",
          "3. Receive instructor feedback on pronunciation and phrasing."
        ],
        "quizTitle": "Tuesday Live Class Practice Quiz",
        "questions": [
          {
            "q": "Which expression is best for asking about culture & international exchange in a conversation?",
            "options": [
              "\"Could you tell me more about Culture & International Exchange?\"",
              "\"I do not know.\"",
              "\"No comment.\"",
              "\"Goodbye.\""
            ],
            "correct": 0
          },
          {
            "q": "During live class, what is the best strategy if you need a moment to think?",
            "options": [
              "Use a polite filler like \"Let me see...\"",
              "Remain silent for 5 minutes",
              "Leave the call",
              "Speak in Japanese only"
            ],
            "correct": 0
          }
        ],
        "outputTask": "Complete Tuesday practice quiz & log instructor feedback."
      },
      "wednesday": {
        "type": "self_study_writing",
        "title": "Wednesday Self-Study: Writing & Speaking Prep for Culture & International Exchange",
        "focus": "Grammar Review + Thursday Role-Play Assignment & Script Draft",
        "grammarPoint": "Grammar Pattern for Culture & International Exchange",
        "grammarExplanation": "Review target sentence structures to communicate discuss cultural differences, customs, and etiquette politely in english.",
        "grammarJapaneseHelp": "「Culture & International Exchange」に関する効果的な英文作成のための文法パターンを復習します。",
        "scaffoldedSentence": "Regarding Culture & International Exchange, I believe that _____ because _____.",
        "thursdayTaskAssignment": "Prepare a 2-minute script or outline for Thursday's live role-play on Culture & International Exchange.",
        "quizTitle": "Wednesday Grammar & Sentence Structure Quiz",
        "questions": [
          {
            "q": "Which conjunction logically connects a main point with a reason in Culture & International Exchange?",
            "options": [
              "because",
              "although",
              "unless",
              "neither"
            ],
            "correct": 0
          },
          {
            "q": "What is the goal of Wednesday self-study?",
            "options": [
              "Writing assignment & Thursday script preparation",
              "Just watching video",
              "Skipping study",
              "Final graduation"
            ],
            "correct": 0
          }
        ],
        "outputTask": "Complete Wednesday grammar quiz & submit script draft."
      },
      "thursday": {
        "type": "online_class_synthesis",
        "title": "Thursday Online Class (30m): Role-Play & Synthesis (Culture & International Exchange)",
        "focus": "Execute Wednesday’s Script + Unscripted Q&A + Weekly Master Quiz",
        "classTime": "Thursday 20:00 - 20:30 (JST)",
        "meetingLink": "https://zoom.us/j/room305-thursday-class",
        "rolePlayActivities": [
          "1. Execute role-plays or presentations using Wednesday's prepared script.",
          "2. Engage in unscripted follow-up Q&A with instructor and classmates.",
          "3. Complete Weekly Master Quiz & Self-Reflection."
        ],
        "quizTitle": "Thursday Weekly Master Synthesis Quiz",
        "questions": [
          {
            "q": "In Week 11, what is key to successful role-play execution?",
            "options": [
              "Applying Wednesday script & target vocabulary in conversation",
              "Reading silently",
              "Ignoring partner",
              "Only speaking Japanese"
            ],
            "correct": 0
          },
          {
            "q": "How do you express diplomatic disagreement or alternative views on Culture & International Exchange?",
            "options": [
              "\"I understand your point, but from my perspective...\"",
              "\"You are wrong.\"",
              "\"I disagree stop talking.\"",
              "\"No way.\""
            ],
            "correct": 0
          },
          {
            "q": "What completes the 2+2 weekly learning cycle on Thursday?",
            "options": [
              "Live role-play, Master Quiz, and Teacher Evaluation",
              "Starting Week 1 again",
              "No output",
              "Writing only"
            ],
            "correct": 0
          }
        ],
        "outputTask": "Complete Thursday Master Quiz, log teacher evaluation & self-reflection."
      }
    }
  },
  {
    "weekNumber": 12,
    "level": "intermediate",
    "title": "Health, Wellness & Lifestyle",
    "goal": "Talk about fitness, mental wellness, and healthy habits.",
    "vocabulary": [
      {
        "word": "target_word_1_w12",
        "partOfSpeech": "noun",
        "meaning": "key concept related to Health, Wellness & Lifestyle",
        "japanese": "主要概念",
        "example": "Using key expressions in Week 12.",
        "helpExplanation": "Week 12の重要キーワードです。"
      },
      {
        "word": "phrase_2_w12",
        "partOfSpeech": "noun phrase",
        "meaning": "useful expression for natural speaking",
        "japanese": "自然な表現",
        "example": "I agree with your point regarding this topic.",
        "helpExplanation": "会話で役立つ定型表現です。"
      },
      {
        "word": "perspective_w12",
        "partOfSpeech": "noun",
        "meaning": "a particular attitude or way of regarding something",
        "japanese": "視点、観点",
        "example": "Share your personal perspective during discussion.",
        "helpExplanation": "自分の考えや見解のことです。"
      },
      {
        "word": "analysis_w12",
        "partOfSpeech": "noun",
        "meaning": "detailed examination of elements or structure",
        "japanese": "分析、考察",
        "example": "Analyze the reading passage carefully.",
        "helpExplanation": "論理的に整理・分析することです。"
      },
      {
        "word": "practice_w12",
        "partOfSpeech": "verb",
        "meaning": "perform an activity regularly to improve",
        "japanese": "練習する",
        "example": "Practice speaking aloud with your partner.",
        "helpExplanation": "声に出して練習することです。"
      },
      {
        "word": "feedback_w12",
        "partOfSpeech": "noun",
        "meaning": "helpful advice or evaluation on performance",
        "japanese": "フィードバック",
        "example": "Instructor feedback guides your pronunciation.",
        "helpExplanation": "指導員からのアドバイスです。"
      },
      {
        "word": "dialogue_w12",
        "partOfSpeech": "noun",
        "meaning": "conversation between two or more people",
        "japanese": "対話、ダイアログ",
        "example": "Prepare your role-play script on Wednesday.",
        "helpExplanation": "役割を演じる対話文です。"
      },
      {
        "word": "synthesis_w12",
        "partOfSpeech": "noun",
        "meaning": "combining ideas into a connected whole",
        "japanese": "統合、まとめ",
        "example": "Synthesize your weekly learning on Thursday.",
        "helpExplanation": "一週間の学びを統合することです。"
      }
    ],
    "schedule": {
      "monday": {
        "type": "self_study_knowledge",
        "title": "Monday Self-Study: Health, Wellness & Lifestyle Knowledge & Comprehension",
        "focus": "Target Vocabulary (8–12 Words) + Audio Listening & Reading Passage",
        "audioUrl": "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
        "transcript": "Speaker A: Welcome to Week 12 of Room 305 Academy! Today we explore Health, Wellness & Lifestyle.\nSpeaker B: That sounds fascinating! Let's examine the main concepts and practice key expressions.",
        "transcriptJapanese": "スピーカーA: 305アカデミーの第12週へようこそ！今日は「Health, Wellness & Lifestyle」を探求します。\nスピーカーB: とても興味深いですね！主要な概念を検討し、キー表現を練習しましょう。",
        "readingPassage": "In Week 12, students focus on Health, Wellness & Lifestyle. By examining real-world contexts, learners build confidence to express ideas clearly.",
        "readingPassageJapanese": "第12週では、生徒は「Health, Wellness & Lifestyle」に焦点を当てます。現実的な文脈を学習することで、クリアに意見を表現する自信を育みます。",
        "quizTitle": "Monday Vocabulary & Comprehension Quiz",
        "comprehensionQuestions": [
          {
            "q": "What is the primary topic of Week 12?",
            "options": [
              "Health, Wellness & Lifestyle",
              "General Grammar",
              "Unrelated Topic",
              "Free Conversation"
            ],
            "correct": 0
          },
          {
            "q": "What is the main goal of Monday self-study?",
            "options": [
              "Knowledge & Comprehension",
              "Live Debate",
              "Final Exam",
              "No Study"
            ],
            "correct": 0
          }
        ],
        "outputTask": "Complete Monday comprehension quiz & submit reflection notes."
      },
      "tuesday": {
        "type": "online_class_practice",
        "title": "Tuesday Online Class (30m): Interactive Practice on Health, Wellness & Lifestyle",
        "focus": "Live Discussion on Monday’s Reading/Listening + Pronunciation Q&A",
        "classTime": "Tuesday 19:00 - 19:30 (JST)",
        "meetingLink": "https://zoom.us/j/room305-tuesday-class",
        "liveActivities": [
          "1. Live interactive discussion on Monday’s reading: \"Health, Wellness & Lifestyle\".",
          "2. Answer comprehension questions using target vocabulary.",
          "3. Receive instructor feedback on pronunciation and phrasing."
        ],
        "quizTitle": "Tuesday Live Class Practice Quiz",
        "questions": [
          {
            "q": "Which expression is best for asking about health, wellness & lifestyle in a conversation?",
            "options": [
              "\"Could you tell me more about Health, Wellness & Lifestyle?\"",
              "\"I do not know.\"",
              "\"No comment.\"",
              "\"Goodbye.\""
            ],
            "correct": 0
          },
          {
            "q": "During live class, what is the best strategy if you need a moment to think?",
            "options": [
              "Use a polite filler like \"Let me see...\"",
              "Remain silent for 5 minutes",
              "Leave the call",
              "Speak in Japanese only"
            ],
            "correct": 0
          }
        ],
        "outputTask": "Complete Tuesday practice quiz & log instructor feedback."
      },
      "wednesday": {
        "type": "self_study_writing",
        "title": "Wednesday Self-Study: Writing & Speaking Prep for Health, Wellness & Lifestyle",
        "focus": "Grammar Review + Thursday Role-Play Assignment & Script Draft",
        "grammarPoint": "Grammar Pattern for Health, Wellness & Lifestyle",
        "grammarExplanation": "Review target sentence structures to communicate talk about fitness, mental wellness, and healthy habits.",
        "grammarJapaneseHelp": "「Health, Wellness & Lifestyle」に関する効果的な英文作成のための文法パターンを復習します。",
        "scaffoldedSentence": "Regarding Health, Wellness & Lifestyle, I believe that _____ because _____.",
        "thursdayTaskAssignment": "Prepare a 2-minute script or outline for Thursday's live role-play on Health, Wellness & Lifestyle.",
        "quizTitle": "Wednesday Grammar & Sentence Structure Quiz",
        "questions": [
          {
            "q": "Which conjunction logically connects a main point with a reason in Health, Wellness & Lifestyle?",
            "options": [
              "because",
              "although",
              "unless",
              "neither"
            ],
            "correct": 0
          },
          {
            "q": "What is the goal of Wednesday self-study?",
            "options": [
              "Writing assignment & Thursday script preparation",
              "Just watching video",
              "Skipping study",
              "Final graduation"
            ],
            "correct": 0
          }
        ],
        "outputTask": "Complete Wednesday grammar quiz & submit script draft."
      },
      "thursday": {
        "type": "online_class_synthesis",
        "title": "Thursday Online Class (30m): Role-Play & Synthesis (Health, Wellness & Lifestyle)",
        "focus": "Execute Wednesday’s Script + Unscripted Q&A + Weekly Master Quiz",
        "classTime": "Thursday 19:00 - 19:30 (JST)",
        "meetingLink": "https://zoom.us/j/room305-thursday-class",
        "rolePlayActivities": [
          "1. Execute role-plays or presentations using Wednesday's prepared script.",
          "2. Engage in unscripted follow-up Q&A with instructor and classmates.",
          "3. Complete Weekly Master Quiz & Self-Reflection."
        ],
        "quizTitle": "Thursday Weekly Master Synthesis Quiz",
        "questions": [
          {
            "q": "In Week 12, what is key to successful role-play execution?",
            "options": [
              "Applying Wednesday script & target vocabulary in conversation",
              "Reading silently",
              "Ignoring partner",
              "Only speaking Japanese"
            ],
            "correct": 0
          },
          {
            "q": "How do you express diplomatic disagreement or alternative views on Health, Wellness & Lifestyle?",
            "options": [
              "\"I understand your point, but from my perspective...\"",
              "\"You are wrong.\"",
              "\"I disagree stop talking.\"",
              "\"No way.\""
            ],
            "correct": 0
          },
          {
            "q": "What completes the 2+2 weekly learning cycle on Thursday?",
            "options": [
              "Live role-play, Master Quiz, and Teacher Evaluation",
              "Starting Week 1 again",
              "No output",
              "Writing only"
            ],
            "correct": 0
          }
        ],
        "outputTask": "Complete Thursday Master Quiz, log teacher evaluation & self-reflection."
      }
    }
  },
  {
    "weekNumber": 13,
    "level": "intermediate",
    "title": "Technology & Social Media",
    "goal": "Debate the pros and cons of smartphones and digital apps.",
    "vocabulary": [
      {
        "word": "target_word_1_w13",
        "partOfSpeech": "noun",
        "meaning": "key concept related to Technology & Social Media",
        "japanese": "主要概念",
        "example": "Using key expressions in Week 13.",
        "helpExplanation": "Week 13の重要キーワードです。"
      },
      {
        "word": "phrase_2_w13",
        "partOfSpeech": "noun phrase",
        "meaning": "useful expression for natural speaking",
        "japanese": "自然な表現",
        "example": "I agree with your point regarding this topic.",
        "helpExplanation": "会話で役立つ定型表現です。"
      },
      {
        "word": "perspective_w13",
        "partOfSpeech": "noun",
        "meaning": "a particular attitude or way of regarding something",
        "japanese": "視点、観点",
        "example": "Share your personal perspective during discussion.",
        "helpExplanation": "自分の考えや見解のことです。"
      },
      {
        "word": "analysis_w13",
        "partOfSpeech": "noun",
        "meaning": "detailed examination of elements or structure",
        "japanese": "分析、考察",
        "example": "Analyze the reading passage carefully.",
        "helpExplanation": "論理的に整理・分析することです。"
      },
      {
        "word": "practice_w13",
        "partOfSpeech": "verb",
        "meaning": "perform an activity regularly to improve",
        "japanese": "練習する",
        "example": "Practice speaking aloud with your partner.",
        "helpExplanation": "声に出して練習することです。"
      },
      {
        "word": "feedback_w13",
        "partOfSpeech": "noun",
        "meaning": "helpful advice or evaluation on performance",
        "japanese": "フィードバック",
        "example": "Instructor feedback guides your pronunciation.",
        "helpExplanation": "指導員からのアドバイスです。"
      },
      {
        "word": "dialogue_w13",
        "partOfSpeech": "noun",
        "meaning": "conversation between two or more people",
        "japanese": "対話、ダイアログ",
        "example": "Prepare your role-play script on Wednesday.",
        "helpExplanation": "役割を演じる対話文です。"
      },
      {
        "word": "synthesis_w13",
        "partOfSpeech": "noun",
        "meaning": "combining ideas into a connected whole",
        "japanese": "統合、まとめ",
        "example": "Synthesize your weekly learning on Thursday.",
        "helpExplanation": "一週間の学びを統合することです。"
      }
    ],
    "schedule": {
      "monday": {
        "type": "self_study_knowledge",
        "title": "Monday Self-Study: Technology & Social Media Knowledge & Comprehension",
        "focus": "Target Vocabulary (8–12 Words) + Audio Listening & Reading Passage",
        "audioUrl": "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
        "transcript": "Speaker A: Welcome to Week 13 of Room 305 Academy! Today we explore Technology & Social Media.\nSpeaker B: That sounds fascinating! Let's examine the main concepts and practice key expressions.",
        "transcriptJapanese": "スピーカーA: 305アカデミーの第13週へようこそ！今日は「Technology & Social Media」を探求します。\nスピーカーB: とても興味深いですね！主要な概念を検討し、キー表現を練習しましょう。",
        "readingPassage": "In Week 13, students focus on Technology & Social Media. By examining real-world contexts, learners build confidence to express ideas clearly.",
        "readingPassageJapanese": "第13週では、生徒は「Technology & Social Media」に焦点を当てます。現実的な文脈を学習することで、クリアに意見を表現する自信を育みます。",
        "quizTitle": "Monday Vocabulary & Comprehension Quiz",
        "comprehensionQuestions": [
          {
            "q": "What is the primary topic of Week 13?",
            "options": [
              "Technology & Social Media",
              "General Grammar",
              "Unrelated Topic",
              "Free Conversation"
            ],
            "correct": 0
          },
          {
            "q": "What is the main goal of Monday self-study?",
            "options": [
              "Knowledge & Comprehension",
              "Live Debate",
              "Final Exam",
              "No Study"
            ],
            "correct": 0
          }
        ],
        "outputTask": "Complete Monday comprehension quiz & submit reflection notes."
      },
      "tuesday": {
        "type": "online_class_practice",
        "title": "Tuesday Online Class (30m): Interactive Practice on Technology & Social Media",
        "focus": "Live Discussion on Monday’s Reading/Listening + Pronunciation Q&A",
        "classTime": "Tuesday 20:00 - 20:30 (JST)",
        "meetingLink": "https://zoom.us/j/room305-tuesday-class",
        "liveActivities": [
          "1. Live interactive discussion on Monday’s reading: \"Technology & Social Media\".",
          "2. Answer comprehension questions using target vocabulary.",
          "3. Receive instructor feedback on pronunciation and phrasing."
        ],
        "quizTitle": "Tuesday Live Class Practice Quiz",
        "questions": [
          {
            "q": "Which expression is best for asking about technology & social media in a conversation?",
            "options": [
              "\"Could you tell me more about Technology & Social Media?\"",
              "\"I do not know.\"",
              "\"No comment.\"",
              "\"Goodbye.\""
            ],
            "correct": 0
          },
          {
            "q": "During live class, what is the best strategy if you need a moment to think?",
            "options": [
              "Use a polite filler like \"Let me see...\"",
              "Remain silent for 5 minutes",
              "Leave the call",
              "Speak in Japanese only"
            ],
            "correct": 0
          }
        ],
        "outputTask": "Complete Tuesday practice quiz & log instructor feedback."
      },
      "wednesday": {
        "type": "self_study_writing",
        "title": "Wednesday Self-Study: Writing & Speaking Prep for Technology & Social Media",
        "focus": "Grammar Review + Thursday Role-Play Assignment & Script Draft",
        "grammarPoint": "Grammar Pattern for Technology & Social Media",
        "grammarExplanation": "Review target sentence structures to communicate debate the pros and cons of smartphones and digital apps.",
        "grammarJapaneseHelp": "「Technology & Social Media」に関する効果的な英文作成のための文法パターンを復習します。",
        "scaffoldedSentence": "Regarding Technology & Social Media, I believe that _____ because _____.",
        "thursdayTaskAssignment": "Prepare a 2-minute script or outline for Thursday's live role-play on Technology & Social Media.",
        "quizTitle": "Wednesday Grammar & Sentence Structure Quiz",
        "questions": [
          {
            "q": "Which conjunction logically connects a main point with a reason in Technology & Social Media?",
            "options": [
              "because",
              "although",
              "unless",
              "neither"
            ],
            "correct": 0
          },
          {
            "q": "What is the goal of Wednesday self-study?",
            "options": [
              "Writing assignment & Thursday script preparation",
              "Just watching video",
              "Skipping study",
              "Final graduation"
            ],
            "correct": 0
          }
        ],
        "outputTask": "Complete Wednesday grammar quiz & submit script draft."
      },
      "thursday": {
        "type": "online_class_synthesis",
        "title": "Thursday Online Class (30m): Role-Play & Synthesis (Technology & Social Media)",
        "focus": "Execute Wednesday’s Script + Unscripted Q&A + Weekly Master Quiz",
        "classTime": "Thursday 20:00 - 20:30 (JST)",
        "meetingLink": "https://zoom.us/j/room305-thursday-class",
        "rolePlayActivities": [
          "1. Execute role-plays or presentations using Wednesday's prepared script.",
          "2. Engage in unscripted follow-up Q&A with instructor and classmates.",
          "3. Complete Weekly Master Quiz & Self-Reflection."
        ],
        "quizTitle": "Thursday Weekly Master Synthesis Quiz",
        "questions": [
          {
            "q": "In Week 13, what is key to successful role-play execution?",
            "options": [
              "Applying Wednesday script & target vocabulary in conversation",
              "Reading silently",
              "Ignoring partner",
              "Only speaking Japanese"
            ],
            "correct": 0
          },
          {
            "q": "How do you express diplomatic disagreement or alternative views on Technology & Social Media?",
            "options": [
              "\"I understand your point, but from my perspective...\"",
              "\"You are wrong.\"",
              "\"I disagree stop talking.\"",
              "\"No way.\""
            ],
            "correct": 0
          },
          {
            "q": "What completes the 2+2 weekly learning cycle on Thursday?",
            "options": [
              "Live role-play, Master Quiz, and Teacher Evaluation",
              "Starting Week 1 again",
              "No output",
              "Writing only"
            ],
            "correct": 0
          }
        ],
        "outputTask": "Complete Thursday Master Quiz, log teacher evaluation & self-reflection."
      }
    }
  },
  {
    "weekNumber": 14,
    "level": "intermediate",
    "title": "Environment & Sustainability",
    "goal": "Discuss recycling, eco-friendly habits, and climate action.",
    "vocabulary": [
      {
        "word": "target_word_1_w14",
        "partOfSpeech": "noun",
        "meaning": "key concept related to Environment & Sustainability",
        "japanese": "主要概念",
        "example": "Using key expressions in Week 14.",
        "helpExplanation": "Week 14の重要キーワードです。"
      },
      {
        "word": "phrase_2_w14",
        "partOfSpeech": "noun phrase",
        "meaning": "useful expression for natural speaking",
        "japanese": "自然な表現",
        "example": "I agree with your point regarding this topic.",
        "helpExplanation": "会話で役立つ定型表現です。"
      },
      {
        "word": "perspective_w14",
        "partOfSpeech": "noun",
        "meaning": "a particular attitude or way of regarding something",
        "japanese": "視点、観点",
        "example": "Share your personal perspective during discussion.",
        "helpExplanation": "自分の考えや見解のことです。"
      },
      {
        "word": "analysis_w14",
        "partOfSpeech": "noun",
        "meaning": "detailed examination of elements or structure",
        "japanese": "分析、考察",
        "example": "Analyze the reading passage carefully.",
        "helpExplanation": "論理的に整理・分析することです。"
      },
      {
        "word": "practice_w14",
        "partOfSpeech": "verb",
        "meaning": "perform an activity regularly to improve",
        "japanese": "練習する",
        "example": "Practice speaking aloud with your partner.",
        "helpExplanation": "声に出して練習することです。"
      },
      {
        "word": "feedback_w14",
        "partOfSpeech": "noun",
        "meaning": "helpful advice or evaluation on performance",
        "japanese": "フィードバック",
        "example": "Instructor feedback guides your pronunciation.",
        "helpExplanation": "指導員からのアドバイスです。"
      },
      {
        "word": "dialogue_w14",
        "partOfSpeech": "noun",
        "meaning": "conversation between two or more people",
        "japanese": "対話、ダイアログ",
        "example": "Prepare your role-play script on Wednesday.",
        "helpExplanation": "役割を演じる対話文です。"
      },
      {
        "word": "synthesis_w14",
        "partOfSpeech": "noun",
        "meaning": "combining ideas into a connected whole",
        "japanese": "統合、まとめ",
        "example": "Synthesize your weekly learning on Thursday.",
        "helpExplanation": "一週間の学びを統合することです。"
      }
    ],
    "schedule": {
      "monday": {
        "type": "self_study_knowledge",
        "title": "Monday Self-Study: Environment & Sustainability Knowledge & Comprehension",
        "focus": "Target Vocabulary (8–12 Words) + Audio Listening & Reading Passage",
        "audioUrl": "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
        "transcript": "Speaker A: Welcome to Week 14 of Room 305 Academy! Today we explore Environment & Sustainability.\nSpeaker B: That sounds fascinating! Let's examine the main concepts and practice key expressions.",
        "transcriptJapanese": "スピーカーA: 305アカデミーの第14週へようこそ！今日は「Environment & Sustainability」を探求します。\nスピーカーB: とても興味深いですね！主要な概念を検討し、キー表現を練習しましょう。",
        "readingPassage": "In Week 14, students focus on Environment & Sustainability. By examining real-world contexts, learners build confidence to express ideas clearly.",
        "readingPassageJapanese": "第14週では、生徒は「Environment & Sustainability」に焦点を当てます。現実的な文脈を学習することで、クリアに意見を表現する自信を育みます。",
        "quizTitle": "Monday Vocabulary & Comprehension Quiz",
        "comprehensionQuestions": [
          {
            "q": "What is the primary topic of Week 14?",
            "options": [
              "Environment & Sustainability",
              "General Grammar",
              "Unrelated Topic",
              "Free Conversation"
            ],
            "correct": 0
          },
          {
            "q": "What is the main goal of Monday self-study?",
            "options": [
              "Knowledge & Comprehension",
              "Live Debate",
              "Final Exam",
              "No Study"
            ],
            "correct": 0
          }
        ],
        "outputTask": "Complete Monday comprehension quiz & submit reflection notes."
      },
      "tuesday": {
        "type": "online_class_practice",
        "title": "Tuesday Online Class (30m): Interactive Practice on Environment & Sustainability",
        "focus": "Live Discussion on Monday’s Reading/Listening + Pronunciation Q&A",
        "classTime": "Tuesday 19:00 - 19:30 (JST)",
        "meetingLink": "https://zoom.us/j/room305-tuesday-class",
        "liveActivities": [
          "1. Live interactive discussion on Monday’s reading: \"Environment & Sustainability\".",
          "2. Answer comprehension questions using target vocabulary.",
          "3. Receive instructor feedback on pronunciation and phrasing."
        ],
        "quizTitle": "Tuesday Live Class Practice Quiz",
        "questions": [
          {
            "q": "Which expression is best for asking about environment & sustainability in a conversation?",
            "options": [
              "\"Could you tell me more about Environment & Sustainability?\"",
              "\"I do not know.\"",
              "\"No comment.\"",
              "\"Goodbye.\""
            ],
            "correct": 0
          },
          {
            "q": "During live class, what is the best strategy if you need a moment to think?",
            "options": [
              "Use a polite filler like \"Let me see...\"",
              "Remain silent for 5 minutes",
              "Leave the call",
              "Speak in Japanese only"
            ],
            "correct": 0
          }
        ],
        "outputTask": "Complete Tuesday practice quiz & log instructor feedback."
      },
      "wednesday": {
        "type": "self_study_writing",
        "title": "Wednesday Self-Study: Writing & Speaking Prep for Environment & Sustainability",
        "focus": "Grammar Review + Thursday Role-Play Assignment & Script Draft",
        "grammarPoint": "Grammar Pattern for Environment & Sustainability",
        "grammarExplanation": "Review target sentence structures to communicate discuss recycling, eco-friendly habits, and climate action.",
        "grammarJapaneseHelp": "「Environment & Sustainability」に関する効果的な英文作成のための文法パターンを復習します。",
        "scaffoldedSentence": "Regarding Environment & Sustainability, I believe that _____ because _____.",
        "thursdayTaskAssignment": "Prepare a 2-minute script or outline for Thursday's live role-play on Environment & Sustainability.",
        "quizTitle": "Wednesday Grammar & Sentence Structure Quiz",
        "questions": [
          {
            "q": "Which conjunction logically connects a main point with a reason in Environment & Sustainability?",
            "options": [
              "because",
              "although",
              "unless",
              "neither"
            ],
            "correct": 0
          },
          {
            "q": "What is the goal of Wednesday self-study?",
            "options": [
              "Writing assignment & Thursday script preparation",
              "Just watching video",
              "Skipping study",
              "Final graduation"
            ],
            "correct": 0
          }
        ],
        "outputTask": "Complete Wednesday grammar quiz & submit script draft."
      },
      "thursday": {
        "type": "online_class_synthesis",
        "title": "Thursday Online Class (30m): Role-Play & Synthesis (Environment & Sustainability)",
        "focus": "Execute Wednesday’s Script + Unscripted Q&A + Weekly Master Quiz",
        "classTime": "Thursday 19:00 - 19:30 (JST)",
        "meetingLink": "https://zoom.us/j/room305-thursday-class",
        "rolePlayActivities": [
          "1. Execute role-plays or presentations using Wednesday's prepared script.",
          "2. Engage in unscripted follow-up Q&A with instructor and classmates.",
          "3. Complete Weekly Master Quiz & Self-Reflection."
        ],
        "quizTitle": "Thursday Weekly Master Synthesis Quiz",
        "questions": [
          {
            "q": "In Week 14, what is key to successful role-play execution?",
            "options": [
              "Applying Wednesday script & target vocabulary in conversation",
              "Reading silently",
              "Ignoring partner",
              "Only speaking Japanese"
            ],
            "correct": 0
          },
          {
            "q": "How do you express diplomatic disagreement or alternative views on Environment & Sustainability?",
            "options": [
              "\"I understand your point, but from my perspective...\"",
              "\"You are wrong.\"",
              "\"I disagree stop talking.\"",
              "\"No way.\""
            ],
            "correct": 0
          },
          {
            "q": "What completes the 2+2 weekly learning cycle on Thursday?",
            "options": [
              "Live role-play, Master Quiz, and Teacher Evaluation",
              "Starting Week 1 again",
              "No output",
              "Writing only"
            ],
            "correct": 0
          }
        ],
        "outputTask": "Complete Thursday Master Quiz, log teacher evaluation & self-reflection."
      }
    }
  },
  {
    "weekNumber": 15,
    "level": "intermediate",
    "title": "Future Goals & Career Ambitions",
    "goal": "Articulate career ambitions, graduate school, and personal goals.",
    "vocabulary": [
      {
        "word": "target_word_1_w15",
        "partOfSpeech": "noun",
        "meaning": "key concept related to Future Goals & Career Ambitions",
        "japanese": "主要概念",
        "example": "Using key expressions in Week 15.",
        "helpExplanation": "Week 15の重要キーワードです。"
      },
      {
        "word": "phrase_2_w15",
        "partOfSpeech": "noun phrase",
        "meaning": "useful expression for natural speaking",
        "japanese": "自然な表現",
        "example": "I agree with your point regarding this topic.",
        "helpExplanation": "会話で役立つ定型表現です。"
      },
      {
        "word": "perspective_w15",
        "partOfSpeech": "noun",
        "meaning": "a particular attitude or way of regarding something",
        "japanese": "視点、観点",
        "example": "Share your personal perspective during discussion.",
        "helpExplanation": "自分の考えや見解のことです。"
      },
      {
        "word": "analysis_w15",
        "partOfSpeech": "noun",
        "meaning": "detailed examination of elements or structure",
        "japanese": "分析、考察",
        "example": "Analyze the reading passage carefully.",
        "helpExplanation": "論理的に整理・分析することです。"
      },
      {
        "word": "practice_w15",
        "partOfSpeech": "verb",
        "meaning": "perform an activity regularly to improve",
        "japanese": "練習する",
        "example": "Practice speaking aloud with your partner.",
        "helpExplanation": "声に出して練習することです。"
      },
      {
        "word": "feedback_w15",
        "partOfSpeech": "noun",
        "meaning": "helpful advice or evaluation on performance",
        "japanese": "フィードバック",
        "example": "Instructor feedback guides your pronunciation.",
        "helpExplanation": "指導員からのアドバイスです。"
      },
      {
        "word": "dialogue_w15",
        "partOfSpeech": "noun",
        "meaning": "conversation between two or more people",
        "japanese": "対話、ダイアログ",
        "example": "Prepare your role-play script on Wednesday.",
        "helpExplanation": "役割を演じる対話文です。"
      },
      {
        "word": "synthesis_w15",
        "partOfSpeech": "noun",
        "meaning": "combining ideas into a connected whole",
        "japanese": "統合、まとめ",
        "example": "Synthesize your weekly learning on Thursday.",
        "helpExplanation": "一週間の学びを統合することです。"
      }
    ],
    "schedule": {
      "monday": {
        "type": "self_study_knowledge",
        "title": "Monday Self-Study: Future Goals & Career Ambitions Knowledge & Comprehension",
        "focus": "Target Vocabulary (8–12 Words) + Audio Listening & Reading Passage",
        "audioUrl": "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
        "transcript": "Speaker A: Welcome to Week 15 of Room 305 Academy! Today we explore Future Goals & Career Ambitions.\nSpeaker B: That sounds fascinating! Let's examine the main concepts and practice key expressions.",
        "transcriptJapanese": "スピーカーA: 305アカデミーの第15週へようこそ！今日は「Future Goals & Career Ambitions」を探求します。\nスピーカーB: とても興味深いですね！主要な概念を検討し、キー表現を練習しましょう。",
        "readingPassage": "In Week 15, students focus on Future Goals & Career Ambitions. By examining real-world contexts, learners build confidence to express ideas clearly.",
        "readingPassageJapanese": "第15週では、生徒は「Future Goals & Career Ambitions」に焦点を当てます。現実的な文脈を学習することで、クリアに意見を表現する自信を育みます。",
        "quizTitle": "Monday Vocabulary & Comprehension Quiz",
        "comprehensionQuestions": [
          {
            "q": "What is the primary topic of Week 15?",
            "options": [
              "Future Goals & Career Ambitions",
              "General Grammar",
              "Unrelated Topic",
              "Free Conversation"
            ],
            "correct": 0
          },
          {
            "q": "What is the main goal of Monday self-study?",
            "options": [
              "Knowledge & Comprehension",
              "Live Debate",
              "Final Exam",
              "No Study"
            ],
            "correct": 0
          }
        ],
        "outputTask": "Complete Monday comprehension quiz & submit reflection notes."
      },
      "tuesday": {
        "type": "online_class_practice",
        "title": "Tuesday Online Class (30m): Interactive Practice on Future Goals & Career Ambitions",
        "focus": "Live Discussion on Monday’s Reading/Listening + Pronunciation Q&A",
        "classTime": "Tuesday 20:00 - 20:30 (JST)",
        "meetingLink": "https://zoom.us/j/room305-tuesday-class",
        "liveActivities": [
          "1. Live interactive discussion on Monday’s reading: \"Future Goals & Career Ambitions\".",
          "2. Answer comprehension questions using target vocabulary.",
          "3. Receive instructor feedback on pronunciation and phrasing."
        ],
        "quizTitle": "Tuesday Live Class Practice Quiz",
        "questions": [
          {
            "q": "Which expression is best for asking about future goals & career ambitions in a conversation?",
            "options": [
              "\"Could you tell me more about Future Goals & Career Ambitions?\"",
              "\"I do not know.\"",
              "\"No comment.\"",
              "\"Goodbye.\""
            ],
            "correct": 0
          },
          {
            "q": "During live class, what is the best strategy if you need a moment to think?",
            "options": [
              "Use a polite filler like \"Let me see...\"",
              "Remain silent for 5 minutes",
              "Leave the call",
              "Speak in Japanese only"
            ],
            "correct": 0
          }
        ],
        "outputTask": "Complete Tuesday practice quiz & log instructor feedback."
      },
      "wednesday": {
        "type": "self_study_writing",
        "title": "Wednesday Self-Study: Writing & Speaking Prep for Future Goals & Career Ambitions",
        "focus": "Grammar Review + Thursday Role-Play Assignment & Script Draft",
        "grammarPoint": "Grammar Pattern for Future Goals & Career Ambitions",
        "grammarExplanation": "Review target sentence structures to communicate articulate career ambitions, graduate school, and personal goals.",
        "grammarJapaneseHelp": "「Future Goals & Career Ambitions」に関する効果的な英文作成のための文法パターンを復習します。",
        "scaffoldedSentence": "Regarding Future Goals & Career Ambitions, I believe that _____ because _____.",
        "thursdayTaskAssignment": "Prepare a 2-minute script or outline for Thursday's live role-play on Future Goals & Career Ambitions.",
        "quizTitle": "Wednesday Grammar & Sentence Structure Quiz",
        "questions": [
          {
            "q": "Which conjunction logically connects a main point with a reason in Future Goals & Career Ambitions?",
            "options": [
              "because",
              "although",
              "unless",
              "neither"
            ],
            "correct": 0
          },
          {
            "q": "What is the goal of Wednesday self-study?",
            "options": [
              "Writing assignment & Thursday script preparation",
              "Just watching video",
              "Skipping study",
              "Final graduation"
            ],
            "correct": 0
          }
        ],
        "outputTask": "Complete Wednesday grammar quiz & submit script draft."
      },
      "thursday": {
        "type": "online_class_synthesis",
        "title": "Thursday Online Class (30m): Role-Play & Synthesis (Future Goals & Career Ambitions)",
        "focus": "Execute Wednesday’s Script + Unscripted Q&A + Weekly Master Quiz",
        "classTime": "Thursday 20:00 - 20:30 (JST)",
        "meetingLink": "https://zoom.us/j/room305-thursday-class",
        "rolePlayActivities": [
          "1. Execute role-plays or presentations using Wednesday's prepared script.",
          "2. Engage in unscripted follow-up Q&A with instructor and classmates.",
          "3. Complete Weekly Master Quiz & Self-Reflection."
        ],
        "quizTitle": "Thursday Weekly Master Synthesis Quiz",
        "questions": [
          {
            "q": "In Week 15, what is key to successful role-play execution?",
            "options": [
              "Applying Wednesday script & target vocabulary in conversation",
              "Reading silently",
              "Ignoring partner",
              "Only speaking Japanese"
            ],
            "correct": 0
          },
          {
            "q": "How do you express diplomatic disagreement or alternative views on Future Goals & Career Ambitions?",
            "options": [
              "\"I understand your point, but from my perspective...\"",
              "\"You are wrong.\"",
              "\"I disagree stop talking.\"",
              "\"No way.\""
            ],
            "correct": 0
          },
          {
            "q": "What completes the 2+2 weekly learning cycle on Thursday?",
            "options": [
              "Live role-play, Master Quiz, and Teacher Evaluation",
              "Starting Week 1 again",
              "No output",
              "Writing only"
            ],
            "correct": 0
          }
        ],
        "outputTask": "Complete Thursday Master Quiz, log teacher evaluation & self-reflection."
      }
    }
  },
  {
    "weekNumber": 16,
    "level": "intermediate",
    "title": "Workplace & Professional Communication",
    "goal": "Practice job interview questions and workplace communication.",
    "vocabulary": [
      {
        "word": "target_word_1_w16",
        "partOfSpeech": "noun",
        "meaning": "key concept related to Workplace & Professional Communication",
        "japanese": "主要概念",
        "example": "Using key expressions in Week 16.",
        "helpExplanation": "Week 16の重要キーワードです。"
      },
      {
        "word": "phrase_2_w16",
        "partOfSpeech": "noun phrase",
        "meaning": "useful expression for natural speaking",
        "japanese": "自然な表現",
        "example": "I agree with your point regarding this topic.",
        "helpExplanation": "会話で役立つ定型表現です。"
      },
      {
        "word": "perspective_w16",
        "partOfSpeech": "noun",
        "meaning": "a particular attitude or way of regarding something",
        "japanese": "視点、観点",
        "example": "Share your personal perspective during discussion.",
        "helpExplanation": "自分の考えや見解のことです。"
      },
      {
        "word": "analysis_w16",
        "partOfSpeech": "noun",
        "meaning": "detailed examination of elements or structure",
        "japanese": "分析、考察",
        "example": "Analyze the reading passage carefully.",
        "helpExplanation": "論理的に整理・分析することです。"
      },
      {
        "word": "practice_w16",
        "partOfSpeech": "verb",
        "meaning": "perform an activity regularly to improve",
        "japanese": "練習する",
        "example": "Practice speaking aloud with your partner.",
        "helpExplanation": "声に出して練習することです。"
      },
      {
        "word": "feedback_w16",
        "partOfSpeech": "noun",
        "meaning": "helpful advice or evaluation on performance",
        "japanese": "フィードバック",
        "example": "Instructor feedback guides your pronunciation.",
        "helpExplanation": "指導員からのアドバイスです。"
      },
      {
        "word": "dialogue_w16",
        "partOfSpeech": "noun",
        "meaning": "conversation between two or more people",
        "japanese": "対話、ダイアログ",
        "example": "Prepare your role-play script on Wednesday.",
        "helpExplanation": "役割を演じる対話文です。"
      },
      {
        "word": "synthesis_w16",
        "partOfSpeech": "noun",
        "meaning": "combining ideas into a connected whole",
        "japanese": "統合、まとめ",
        "example": "Synthesize your weekly learning on Thursday.",
        "helpExplanation": "一週間の学びを統合することです。"
      }
    ],
    "schedule": {
      "monday": {
        "type": "self_study_knowledge",
        "title": "Monday Self-Study: Workplace & Professional Communication Knowledge & Comprehension",
        "focus": "Target Vocabulary (8–12 Words) + Audio Listening & Reading Passage",
        "audioUrl": "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
        "transcript": "Speaker A: Welcome to Week 16 of Room 305 Academy! Today we explore Workplace & Professional Communication.\nSpeaker B: That sounds fascinating! Let's examine the main concepts and practice key expressions.",
        "transcriptJapanese": "スピーカーA: 305アカデミーの第16週へようこそ！今日は「Workplace & Professional Communication」を探求します。\nスピーカーB: とても興味深いですね！主要な概念を検討し、キー表現を練習しましょう。",
        "readingPassage": "In Week 16, students focus on Workplace & Professional Communication. By examining real-world contexts, learners build confidence to express ideas clearly.",
        "readingPassageJapanese": "第16週では、生徒は「Workplace & Professional Communication」に焦点を当てます。現実的な文脈を学習することで、クリアに意見を表現する自信を育みます。",
        "quizTitle": "Monday Vocabulary & Comprehension Quiz",
        "comprehensionQuestions": [
          {
            "q": "What is the primary topic of Week 16?",
            "options": [
              "Workplace & Professional Communication",
              "General Grammar",
              "Unrelated Topic",
              "Free Conversation"
            ],
            "correct": 0
          },
          {
            "q": "What is the main goal of Monday self-study?",
            "options": [
              "Knowledge & Comprehension",
              "Live Debate",
              "Final Exam",
              "No Study"
            ],
            "correct": 0
          }
        ],
        "outputTask": "Complete Monday comprehension quiz & submit reflection notes."
      },
      "tuesday": {
        "type": "online_class_practice",
        "title": "Tuesday Online Class (30m): Interactive Practice on Workplace & Professional Communication",
        "focus": "Live Discussion on Monday’s Reading/Listening + Pronunciation Q&A",
        "classTime": "Tuesday 19:00 - 19:30 (JST)",
        "meetingLink": "https://zoom.us/j/room305-tuesday-class",
        "liveActivities": [
          "1. Live interactive discussion on Monday’s reading: \"Workplace & Professional Communication\".",
          "2. Answer comprehension questions using target vocabulary.",
          "3. Receive instructor feedback on pronunciation and phrasing."
        ],
        "quizTitle": "Tuesday Live Class Practice Quiz",
        "questions": [
          {
            "q": "Which expression is best for asking about workplace & professional communication in a conversation?",
            "options": [
              "\"Could you tell me more about Workplace & Professional Communication?\"",
              "\"I do not know.\"",
              "\"No comment.\"",
              "\"Goodbye.\""
            ],
            "correct": 0
          },
          {
            "q": "During live class, what is the best strategy if you need a moment to think?",
            "options": [
              "Use a polite filler like \"Let me see...\"",
              "Remain silent for 5 minutes",
              "Leave the call",
              "Speak in Japanese only"
            ],
            "correct": 0
          }
        ],
        "outputTask": "Complete Tuesday practice quiz & log instructor feedback."
      },
      "wednesday": {
        "type": "self_study_writing",
        "title": "Wednesday Self-Study: Writing & Speaking Prep for Workplace & Professional Communication",
        "focus": "Grammar Review + Thursday Role-Play Assignment & Script Draft",
        "grammarPoint": "Grammar Pattern for Workplace & Professional Communication",
        "grammarExplanation": "Review target sentence structures to communicate practice job interview questions and workplace communication.",
        "grammarJapaneseHelp": "「Workplace & Professional Communication」に関する効果的な英文作成のための文法パターンを復習します。",
        "scaffoldedSentence": "Regarding Workplace & Professional Communication, I believe that _____ because _____.",
        "thursdayTaskAssignment": "Prepare a 2-minute script or outline for Thursday's live role-play on Workplace & Professional Communication.",
        "quizTitle": "Wednesday Grammar & Sentence Structure Quiz",
        "questions": [
          {
            "q": "Which conjunction logically connects a main point with a reason in Workplace & Professional Communication?",
            "options": [
              "because",
              "although",
              "unless",
              "neither"
            ],
            "correct": 0
          },
          {
            "q": "What is the goal of Wednesday self-study?",
            "options": [
              "Writing assignment & Thursday script preparation",
              "Just watching video",
              "Skipping study",
              "Final graduation"
            ],
            "correct": 0
          }
        ],
        "outputTask": "Complete Wednesday grammar quiz & submit script draft."
      },
      "thursday": {
        "type": "online_class_synthesis",
        "title": "Thursday Online Class (30m): Role-Play & Synthesis (Workplace & Professional Communication)",
        "focus": "Execute Wednesday’s Script + Unscripted Q&A + Weekly Master Quiz",
        "classTime": "Thursday 19:00 - 19:30 (JST)",
        "meetingLink": "https://zoom.us/j/room305-thursday-class",
        "rolePlayActivities": [
          "1. Execute role-plays or presentations using Wednesday's prepared script.",
          "2. Engage in unscripted follow-up Q&A with instructor and classmates.",
          "3. Complete Weekly Master Quiz & Self-Reflection."
        ],
        "quizTitle": "Thursday Weekly Master Synthesis Quiz",
        "questions": [
          {
            "q": "In Week 16, what is key to successful role-play execution?",
            "options": [
              "Applying Wednesday script & target vocabulary in conversation",
              "Reading silently",
              "Ignoring partner",
              "Only speaking Japanese"
            ],
            "correct": 0
          },
          {
            "q": "How do you express diplomatic disagreement or alternative views on Workplace & Professional Communication?",
            "options": [
              "\"I understand your point, but from my perspective...\"",
              "\"You are wrong.\"",
              "\"I disagree stop talking.\"",
              "\"No way.\""
            ],
            "correct": 0
          },
          {
            "q": "What completes the 2+2 weekly learning cycle on Thursday?",
            "options": [
              "Live role-play, Master Quiz, and Teacher Evaluation",
              "Starting Week 1 again",
              "No output",
              "Writing only"
            ],
            "correct": 0
          }
        ],
        "outputTask": "Complete Thursday Master Quiz, log teacher evaluation & self-reflection."
      }
    }
  },
  {
    "weekNumber": 17,
    "level": "intermediate",
    "title": "Storytelling & Travel Experiences",
    "goal": "Narrate past travel experiences using narrative tenses.",
    "vocabulary": [
      {
        "word": "target_word_1_w17",
        "partOfSpeech": "noun",
        "meaning": "key concept related to Storytelling & Travel Experiences",
        "japanese": "主要概念",
        "example": "Using key expressions in Week 17.",
        "helpExplanation": "Week 17の重要キーワードです。"
      },
      {
        "word": "phrase_2_w17",
        "partOfSpeech": "noun phrase",
        "meaning": "useful expression for natural speaking",
        "japanese": "自然な表現",
        "example": "I agree with your point regarding this topic.",
        "helpExplanation": "会話で役立つ定型表現です。"
      },
      {
        "word": "perspective_w17",
        "partOfSpeech": "noun",
        "meaning": "a particular attitude or way of regarding something",
        "japanese": "視点、観点",
        "example": "Share your personal perspective during discussion.",
        "helpExplanation": "自分の考えや見解のことです。"
      },
      {
        "word": "analysis_w17",
        "partOfSpeech": "noun",
        "meaning": "detailed examination of elements or structure",
        "japanese": "分析、考察",
        "example": "Analyze the reading passage carefully.",
        "helpExplanation": "論理的に整理・分析することです。"
      },
      {
        "word": "practice_w17",
        "partOfSpeech": "verb",
        "meaning": "perform an activity regularly to improve",
        "japanese": "練習する",
        "example": "Practice speaking aloud with your partner.",
        "helpExplanation": "声に出して練習することです。"
      },
      {
        "word": "feedback_w17",
        "partOfSpeech": "noun",
        "meaning": "helpful advice or evaluation on performance",
        "japanese": "フィードバック",
        "example": "Instructor feedback guides your pronunciation.",
        "helpExplanation": "指導員からのアドバイスです。"
      },
      {
        "word": "dialogue_w17",
        "partOfSpeech": "noun",
        "meaning": "conversation between two or more people",
        "japanese": "対話、ダイアログ",
        "example": "Prepare your role-play script on Wednesday.",
        "helpExplanation": "役割を演じる対話文です。"
      },
      {
        "word": "synthesis_w17",
        "partOfSpeech": "noun",
        "meaning": "combining ideas into a connected whole",
        "japanese": "統合、まとめ",
        "example": "Synthesize your weekly learning on Thursday.",
        "helpExplanation": "一週間の学びを統合することです。"
      }
    ],
    "schedule": {
      "monday": {
        "type": "self_study_knowledge",
        "title": "Monday Self-Study: Storytelling & Travel Experiences Knowledge & Comprehension",
        "focus": "Target Vocabulary (8–12 Words) + Audio Listening & Reading Passage",
        "audioUrl": "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
        "transcript": "Speaker A: Welcome to Week 17 of Room 305 Academy! Today we explore Storytelling & Travel Experiences.\nSpeaker B: That sounds fascinating! Let's examine the main concepts and practice key expressions.",
        "transcriptJapanese": "スピーカーA: 305アカデミーの第17週へようこそ！今日は「Storytelling & Travel Experiences」を探求します。\nスピーカーB: とても興味深いですね！主要な概念を検討し、キー表現を練習しましょう。",
        "readingPassage": "In Week 17, students focus on Storytelling & Travel Experiences. By examining real-world contexts, learners build confidence to express ideas clearly.",
        "readingPassageJapanese": "第17週では、生徒は「Storytelling & Travel Experiences」に焦点を当てます。現実的な文脈を学習することで、クリアに意見を表現する自信を育みます。",
        "quizTitle": "Monday Vocabulary & Comprehension Quiz",
        "comprehensionQuestions": [
          {
            "q": "What is the primary topic of Week 17?",
            "options": [
              "Storytelling & Travel Experiences",
              "General Grammar",
              "Unrelated Topic",
              "Free Conversation"
            ],
            "correct": 0
          },
          {
            "q": "What is the main goal of Monday self-study?",
            "options": [
              "Knowledge & Comprehension",
              "Live Debate",
              "Final Exam",
              "No Study"
            ],
            "correct": 0
          }
        ],
        "outputTask": "Complete Monday comprehension quiz & submit reflection notes."
      },
      "tuesday": {
        "type": "online_class_practice",
        "title": "Tuesday Online Class (30m): Interactive Practice on Storytelling & Travel Experiences",
        "focus": "Live Discussion on Monday’s Reading/Listening + Pronunciation Q&A",
        "classTime": "Tuesday 20:00 - 20:30 (JST)",
        "meetingLink": "https://zoom.us/j/room305-tuesday-class",
        "liveActivities": [
          "1. Live interactive discussion on Monday’s reading: \"Storytelling & Travel Experiences\".",
          "2. Answer comprehension questions using target vocabulary.",
          "3. Receive instructor feedback on pronunciation and phrasing."
        ],
        "quizTitle": "Tuesday Live Class Practice Quiz",
        "questions": [
          {
            "q": "Which expression is best for asking about storytelling & travel experiences in a conversation?",
            "options": [
              "\"Could you tell me more about Storytelling & Travel Experiences?\"",
              "\"I do not know.\"",
              "\"No comment.\"",
              "\"Goodbye.\""
            ],
            "correct": 0
          },
          {
            "q": "During live class, what is the best strategy if you need a moment to think?",
            "options": [
              "Use a polite filler like \"Let me see...\"",
              "Remain silent for 5 minutes",
              "Leave the call",
              "Speak in Japanese only"
            ],
            "correct": 0
          }
        ],
        "outputTask": "Complete Tuesday practice quiz & log instructor feedback."
      },
      "wednesday": {
        "type": "self_study_writing",
        "title": "Wednesday Self-Study: Writing & Speaking Prep for Storytelling & Travel Experiences",
        "focus": "Grammar Review + Thursday Role-Play Assignment & Script Draft",
        "grammarPoint": "Grammar Pattern for Storytelling & Travel Experiences",
        "grammarExplanation": "Review target sentence structures to communicate narrate past travel experiences using narrative tenses.",
        "grammarJapaneseHelp": "「Storytelling & Travel Experiences」に関する効果的な英文作成のための文法パターンを復習します。",
        "scaffoldedSentence": "Regarding Storytelling & Travel Experiences, I believe that _____ because _____.",
        "thursdayTaskAssignment": "Prepare a 2-minute script or outline for Thursday's live role-play on Storytelling & Travel Experiences.",
        "quizTitle": "Wednesday Grammar & Sentence Structure Quiz",
        "questions": [
          {
            "q": "Which conjunction logically connects a main point with a reason in Storytelling & Travel Experiences?",
            "options": [
              "because",
              "although",
              "unless",
              "neither"
            ],
            "correct": 0
          },
          {
            "q": "What is the goal of Wednesday self-study?",
            "options": [
              "Writing assignment & Thursday script preparation",
              "Just watching video",
              "Skipping study",
              "Final graduation"
            ],
            "correct": 0
          }
        ],
        "outputTask": "Complete Wednesday grammar quiz & submit script draft."
      },
      "thursday": {
        "type": "online_class_synthesis",
        "title": "Thursday Online Class (30m): Role-Play & Synthesis (Storytelling & Travel Experiences)",
        "focus": "Execute Wednesday’s Script + Unscripted Q&A + Weekly Master Quiz",
        "classTime": "Thursday 20:00 - 20:30 (JST)",
        "meetingLink": "https://zoom.us/j/room305-thursday-class",
        "rolePlayActivities": [
          "1. Execute role-plays or presentations using Wednesday's prepared script.",
          "2. Engage in unscripted follow-up Q&A with instructor and classmates.",
          "3. Complete Weekly Master Quiz & Self-Reflection."
        ],
        "quizTitle": "Thursday Weekly Master Synthesis Quiz",
        "questions": [
          {
            "q": "In Week 17, what is key to successful role-play execution?",
            "options": [
              "Applying Wednesday script & target vocabulary in conversation",
              "Reading silently",
              "Ignoring partner",
              "Only speaking Japanese"
            ],
            "correct": 0
          },
          {
            "q": "How do you express diplomatic disagreement or alternative views on Storytelling & Travel Experiences?",
            "options": [
              "\"I understand your point, but from my perspective...\"",
              "\"You are wrong.\"",
              "\"I disagree stop talking.\"",
              "\"No way.\""
            ],
            "correct": 0
          },
          {
            "q": "What completes the 2+2 weekly learning cycle on Thursday?",
            "options": [
              "Live role-play, Master Quiz, and Teacher Evaluation",
              "Starting Week 1 again",
              "No output",
              "Writing only"
            ],
            "correct": 0
          }
        ],
        "outputTask": "Complete Thursday Master Quiz, log teacher evaluation & self-reflection."
      }
    }
  },
  {
    "weekNumber": 18,
    "level": "intermediate",
    "title": "News & Current Topics",
    "goal": "Summarize news articles and discuss global events.",
    "vocabulary": [
      {
        "word": "target_word_1_w18",
        "partOfSpeech": "noun",
        "meaning": "key concept related to News & Current Topics",
        "japanese": "主要概念",
        "example": "Using key expressions in Week 18.",
        "helpExplanation": "Week 18の重要キーワードです。"
      },
      {
        "word": "phrase_2_w18",
        "partOfSpeech": "noun phrase",
        "meaning": "useful expression for natural speaking",
        "japanese": "自然な表現",
        "example": "I agree with your point regarding this topic.",
        "helpExplanation": "会話で役立つ定型表現です。"
      },
      {
        "word": "perspective_w18",
        "partOfSpeech": "noun",
        "meaning": "a particular attitude or way of regarding something",
        "japanese": "視点、観点",
        "example": "Share your personal perspective during discussion.",
        "helpExplanation": "自分の考えや見解のことです。"
      },
      {
        "word": "analysis_w18",
        "partOfSpeech": "noun",
        "meaning": "detailed examination of elements or structure",
        "japanese": "分析、考察",
        "example": "Analyze the reading passage carefully.",
        "helpExplanation": "論理的に整理・分析することです。"
      },
      {
        "word": "practice_w18",
        "partOfSpeech": "verb",
        "meaning": "perform an activity regularly to improve",
        "japanese": "練習する",
        "example": "Practice speaking aloud with your partner.",
        "helpExplanation": "声に出して練習することです。"
      },
      {
        "word": "feedback_w18",
        "partOfSpeech": "noun",
        "meaning": "helpful advice or evaluation on performance",
        "japanese": "フィードバック",
        "example": "Instructor feedback guides your pronunciation.",
        "helpExplanation": "指導員からのアドバイスです。"
      },
      {
        "word": "dialogue_w18",
        "partOfSpeech": "noun",
        "meaning": "conversation between two or more people",
        "japanese": "対話、ダイアログ",
        "example": "Prepare your role-play script on Wednesday.",
        "helpExplanation": "役割を演じる対話文です。"
      },
      {
        "word": "synthesis_w18",
        "partOfSpeech": "noun",
        "meaning": "combining ideas into a connected whole",
        "japanese": "統合、まとめ",
        "example": "Synthesize your weekly learning on Thursday.",
        "helpExplanation": "一週間の学びを統合することです。"
      }
    ],
    "schedule": {
      "monday": {
        "type": "self_study_knowledge",
        "title": "Monday Self-Study: News & Current Topics Knowledge & Comprehension",
        "focus": "Target Vocabulary (8–12 Words) + Audio Listening & Reading Passage",
        "audioUrl": "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
        "transcript": "Speaker A: Welcome to Week 18 of Room 305 Academy! Today we explore News & Current Topics.\nSpeaker B: That sounds fascinating! Let's examine the main concepts and practice key expressions.",
        "transcriptJapanese": "スピーカーA: 305アカデミーの第18週へようこそ！今日は「News & Current Topics」を探求します。\nスピーカーB: とても興味深いですね！主要な概念を検討し、キー表現を練習しましょう。",
        "readingPassage": "In Week 18, students focus on News & Current Topics. By examining real-world contexts, learners build confidence to express ideas clearly.",
        "readingPassageJapanese": "第18週では、生徒は「News & Current Topics」に焦点を当てます。現実的な文脈を学習することで、クリアに意見を表現する自信を育みます。",
        "quizTitle": "Monday Vocabulary & Comprehension Quiz",
        "comprehensionQuestions": [
          {
            "q": "What is the primary topic of Week 18?",
            "options": [
              "News & Current Topics",
              "General Grammar",
              "Unrelated Topic",
              "Free Conversation"
            ],
            "correct": 0
          },
          {
            "q": "What is the main goal of Monday self-study?",
            "options": [
              "Knowledge & Comprehension",
              "Live Debate",
              "Final Exam",
              "No Study"
            ],
            "correct": 0
          }
        ],
        "outputTask": "Complete Monday comprehension quiz & submit reflection notes."
      },
      "tuesday": {
        "type": "online_class_practice",
        "title": "Tuesday Online Class (30m): Interactive Practice on News & Current Topics",
        "focus": "Live Discussion on Monday’s Reading/Listening + Pronunciation Q&A",
        "classTime": "Tuesday 19:00 - 19:30 (JST)",
        "meetingLink": "https://zoom.us/j/room305-tuesday-class",
        "liveActivities": [
          "1. Live interactive discussion on Monday’s reading: \"News & Current Topics\".",
          "2. Answer comprehension questions using target vocabulary.",
          "3. Receive instructor feedback on pronunciation and phrasing."
        ],
        "quizTitle": "Tuesday Live Class Practice Quiz",
        "questions": [
          {
            "q": "Which expression is best for asking about news & current topics in a conversation?",
            "options": [
              "\"Could you tell me more about News & Current Topics?\"",
              "\"I do not know.\"",
              "\"No comment.\"",
              "\"Goodbye.\""
            ],
            "correct": 0
          },
          {
            "q": "During live class, what is the best strategy if you need a moment to think?",
            "options": [
              "Use a polite filler like \"Let me see...\"",
              "Remain silent for 5 minutes",
              "Leave the call",
              "Speak in Japanese only"
            ],
            "correct": 0
          }
        ],
        "outputTask": "Complete Tuesday practice quiz & log instructor feedback."
      },
      "wednesday": {
        "type": "self_study_writing",
        "title": "Wednesday Self-Study: Writing & Speaking Prep for News & Current Topics",
        "focus": "Grammar Review + Thursday Role-Play Assignment & Script Draft",
        "grammarPoint": "Grammar Pattern for News & Current Topics",
        "grammarExplanation": "Review target sentence structures to communicate summarize news articles and discuss global events.",
        "grammarJapaneseHelp": "「News & Current Topics」に関する効果的な英文作成のための文法パターンを復習します。",
        "scaffoldedSentence": "Regarding News & Current Topics, I believe that _____ because _____.",
        "thursdayTaskAssignment": "Prepare a 2-minute script or outline for Thursday's live role-play on News & Current Topics.",
        "quizTitle": "Wednesday Grammar & Sentence Structure Quiz",
        "questions": [
          {
            "q": "Which conjunction logically connects a main point with a reason in News & Current Topics?",
            "options": [
              "because",
              "although",
              "unless",
              "neither"
            ],
            "correct": 0
          },
          {
            "q": "What is the goal of Wednesday self-study?",
            "options": [
              "Writing assignment & Thursday script preparation",
              "Just watching video",
              "Skipping study",
              "Final graduation"
            ],
            "correct": 0
          }
        ],
        "outputTask": "Complete Wednesday grammar quiz & submit script draft."
      },
      "thursday": {
        "type": "online_class_synthesis",
        "title": "Thursday Online Class (30m): Role-Play & Synthesis (News & Current Topics)",
        "focus": "Execute Wednesday’s Script + Unscripted Q&A + Weekly Master Quiz",
        "classTime": "Thursday 19:00 - 19:30 (JST)",
        "meetingLink": "https://zoom.us/j/room305-thursday-class",
        "rolePlayActivities": [
          "1. Execute role-plays or presentations using Wednesday's prepared script.",
          "2. Engage in unscripted follow-up Q&A with instructor and classmates.",
          "3. Complete Weekly Master Quiz & Self-Reflection."
        ],
        "quizTitle": "Thursday Weekly Master Synthesis Quiz",
        "questions": [
          {
            "q": "In Week 18, what is key to successful role-play execution?",
            "options": [
              "Applying Wednesday script & target vocabulary in conversation",
              "Reading silently",
              "Ignoring partner",
              "Only speaking Japanese"
            ],
            "correct": 0
          },
          {
            "q": "How do you express diplomatic disagreement or alternative views on News & Current Topics?",
            "options": [
              "\"I understand your point, but from my perspective...\"",
              "\"You are wrong.\"",
              "\"I disagree stop talking.\"",
              "\"No way.\""
            ],
            "correct": 0
          },
          {
            "q": "What completes the 2+2 weekly learning cycle on Thursday?",
            "options": [
              "Live role-play, Master Quiz, and Teacher Evaluation",
              "Starting Week 1 again",
              "No output",
              "Writing only"
            ],
            "correct": 0
          }
        ],
        "outputTask": "Complete Thursday Master Quiz, log teacher evaluation & self-reflection."
      }
    }
  },
  {
    "weekNumber": 19,
    "level": "intermediate",
    "title": "Expressing Opinions & Polite Disagreement",
    "goal": "Express viewpoints diplomatically using phrases like \"I see your point, but...\"",
    "vocabulary": [
      {
        "word": "target_word_1_w19",
        "partOfSpeech": "noun",
        "meaning": "key concept related to Expressing Opinions & Polite Disagreement",
        "japanese": "主要概念",
        "example": "Using key expressions in Week 19.",
        "helpExplanation": "Week 19の重要キーワードです。"
      },
      {
        "word": "phrase_2_w19",
        "partOfSpeech": "noun phrase",
        "meaning": "useful expression for natural speaking",
        "japanese": "自然な表現",
        "example": "I agree with your point regarding this topic.",
        "helpExplanation": "会話で役立つ定型表現です。"
      },
      {
        "word": "perspective_w19",
        "partOfSpeech": "noun",
        "meaning": "a particular attitude or way of regarding something",
        "japanese": "視点、観点",
        "example": "Share your personal perspective during discussion.",
        "helpExplanation": "自分の考えや見解のことです。"
      },
      {
        "word": "analysis_w19",
        "partOfSpeech": "noun",
        "meaning": "detailed examination of elements or structure",
        "japanese": "分析、考察",
        "example": "Analyze the reading passage carefully.",
        "helpExplanation": "論理的に整理・分析することです。"
      },
      {
        "word": "practice_w19",
        "partOfSpeech": "verb",
        "meaning": "perform an activity regularly to improve",
        "japanese": "練習する",
        "example": "Practice speaking aloud with your partner.",
        "helpExplanation": "声に出して練習することです。"
      },
      {
        "word": "feedback_w19",
        "partOfSpeech": "noun",
        "meaning": "helpful advice or evaluation on performance",
        "japanese": "フィードバック",
        "example": "Instructor feedback guides your pronunciation.",
        "helpExplanation": "指導員からのアドバイスです。"
      },
      {
        "word": "dialogue_w19",
        "partOfSpeech": "noun",
        "meaning": "conversation between two or more people",
        "japanese": "対話、ダイアログ",
        "example": "Prepare your role-play script on Wednesday.",
        "helpExplanation": "役割を演じる対話文です。"
      },
      {
        "word": "synthesis_w19",
        "partOfSpeech": "noun",
        "meaning": "combining ideas into a connected whole",
        "japanese": "統合、まとめ",
        "example": "Synthesize your weekly learning on Thursday.",
        "helpExplanation": "一週間の学びを統合することです。"
      }
    ],
    "schedule": {
      "monday": {
        "type": "self_study_knowledge",
        "title": "Monday Self-Study: Expressing Opinions & Polite Disagreement Knowledge & Comprehension",
        "focus": "Target Vocabulary (8–12 Words) + Audio Listening & Reading Passage",
        "audioUrl": "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
        "transcript": "Speaker A: Welcome to Week 19 of Room 305 Academy! Today we explore Expressing Opinions & Polite Disagreement.\nSpeaker B: That sounds fascinating! Let's examine the main concepts and practice key expressions.",
        "transcriptJapanese": "スピーカーA: 305アカデミーの第19週へようこそ！今日は「Expressing Opinions & Polite Disagreement」を探求します。\nスピーカーB: とても興味深いですね！主要な概念を検討し、キー表現を練習しましょう。",
        "readingPassage": "In Week 19, students focus on Expressing Opinions & Polite Disagreement. By examining real-world contexts, learners build confidence to express ideas clearly.",
        "readingPassageJapanese": "第19週では、生徒は「Expressing Opinions & Polite Disagreement」に焦点を当てます。現実的な文脈を学習することで、クリアに意見を表現する自信を育みます。",
        "quizTitle": "Monday Vocabulary & Comprehension Quiz",
        "comprehensionQuestions": [
          {
            "q": "What is the primary topic of Week 19?",
            "options": [
              "Expressing Opinions & Polite Disagreement",
              "General Grammar",
              "Unrelated Topic",
              "Free Conversation"
            ],
            "correct": 0
          },
          {
            "q": "What is the main goal of Monday self-study?",
            "options": [
              "Knowledge & Comprehension",
              "Live Debate",
              "Final Exam",
              "No Study"
            ],
            "correct": 0
          }
        ],
        "outputTask": "Complete Monday comprehension quiz & submit reflection notes."
      },
      "tuesday": {
        "type": "online_class_practice",
        "title": "Tuesday Online Class (30m): Interactive Practice on Expressing Opinions & Polite Disagreement",
        "focus": "Live Discussion on Monday’s Reading/Listening + Pronunciation Q&A",
        "classTime": "Tuesday 20:00 - 20:30 (JST)",
        "meetingLink": "https://zoom.us/j/room305-tuesday-class",
        "liveActivities": [
          "1. Live interactive discussion on Monday’s reading: \"Expressing Opinions & Polite Disagreement\".",
          "2. Answer comprehension questions using target vocabulary.",
          "3. Receive instructor feedback on pronunciation and phrasing."
        ],
        "quizTitle": "Tuesday Live Class Practice Quiz",
        "questions": [
          {
            "q": "Which expression is best for asking about expressing opinions & polite disagreement in a conversation?",
            "options": [
              "\"Could you tell me more about Expressing Opinions & Polite Disagreement?\"",
              "\"I do not know.\"",
              "\"No comment.\"",
              "\"Goodbye.\""
            ],
            "correct": 0
          },
          {
            "q": "During live class, what is the best strategy if you need a moment to think?",
            "options": [
              "Use a polite filler like \"Let me see...\"",
              "Remain silent for 5 minutes",
              "Leave the call",
              "Speak in Japanese only"
            ],
            "correct": 0
          }
        ],
        "outputTask": "Complete Tuesday practice quiz & log instructor feedback."
      },
      "wednesday": {
        "type": "self_study_writing",
        "title": "Wednesday Self-Study: Writing & Speaking Prep for Expressing Opinions & Polite Disagreement",
        "focus": "Grammar Review + Thursday Role-Play Assignment & Script Draft",
        "grammarPoint": "Grammar Pattern for Expressing Opinions & Polite Disagreement",
        "grammarExplanation": "Review target sentence structures to communicate express viewpoints diplomatically using phrases like \"i see your point, but...\"",
        "grammarJapaneseHelp": "「Expressing Opinions & Polite Disagreement」に関する効果的な英文作成のための文法パターンを復習します。",
        "scaffoldedSentence": "Regarding Expressing Opinions & Polite Disagreement, I believe that _____ because _____.",
        "thursdayTaskAssignment": "Prepare a 2-minute script or outline for Thursday's live role-play on Expressing Opinions & Polite Disagreement.",
        "quizTitle": "Wednesday Grammar & Sentence Structure Quiz",
        "questions": [
          {
            "q": "Which conjunction logically connects a main point with a reason in Expressing Opinions & Polite Disagreement?",
            "options": [
              "because",
              "although",
              "unless",
              "neither"
            ],
            "correct": 0
          },
          {
            "q": "What is the goal of Wednesday self-study?",
            "options": [
              "Writing assignment & Thursday script preparation",
              "Just watching video",
              "Skipping study",
              "Final graduation"
            ],
            "correct": 0
          }
        ],
        "outputTask": "Complete Wednesday grammar quiz & submit script draft."
      },
      "thursday": {
        "type": "online_class_synthesis",
        "title": "Thursday Online Class (30m): Role-Play & Synthesis (Expressing Opinions & Polite Disagreement)",
        "focus": "Execute Wednesday’s Script + Unscripted Q&A + Weekly Master Quiz",
        "classTime": "Thursday 20:00 - 20:30 (JST)",
        "meetingLink": "https://zoom.us/j/room305-thursday-class",
        "rolePlayActivities": [
          "1. Execute role-plays or presentations using Wednesday's prepared script.",
          "2. Engage in unscripted follow-up Q&A with instructor and classmates.",
          "3. Complete Weekly Master Quiz & Self-Reflection."
        ],
        "quizTitle": "Thursday Weekly Master Synthesis Quiz",
        "questions": [
          {
            "q": "In Week 19, what is key to successful role-play execution?",
            "options": [
              "Applying Wednesday script & target vocabulary in conversation",
              "Reading silently",
              "Ignoring partner",
              "Only speaking Japanese"
            ],
            "correct": 0
          },
          {
            "q": "How do you express diplomatic disagreement or alternative views on Expressing Opinions & Polite Disagreement?",
            "options": [
              "\"I understand your point, but from my perspective...\"",
              "\"You are wrong.\"",
              "\"I disagree stop talking.\"",
              "\"No way.\""
            ],
            "correct": 0
          },
          {
            "q": "What completes the 2+2 weekly learning cycle on Thursday?",
            "options": [
              "Live role-play, Master Quiz, and Teacher Evaluation",
              "Starting Week 1 again",
              "No output",
              "Writing only"
            ],
            "correct": 0
          }
        ],
        "outputTask": "Complete Thursday Master Quiz, log teacher evaluation & self-reflection."
      }
    }
  },
  {
    "weekNumber": 20,
    "level": "intermediate",
    "title": "Intermediate Panel Discussion & Review",
    "goal": "Participate in an unscripted group panel discussion.",
    "vocabulary": [
      {
        "word": "target_word_1_w20",
        "partOfSpeech": "noun",
        "meaning": "key concept related to Intermediate Panel Discussion & Review",
        "japanese": "主要概念",
        "example": "Using key expressions in Week 20.",
        "helpExplanation": "Week 20の重要キーワードです。"
      },
      {
        "word": "phrase_2_w20",
        "partOfSpeech": "noun phrase",
        "meaning": "useful expression for natural speaking",
        "japanese": "自然な表現",
        "example": "I agree with your point regarding this topic.",
        "helpExplanation": "会話で役立つ定型表現です。"
      },
      {
        "word": "perspective_w20",
        "partOfSpeech": "noun",
        "meaning": "a particular attitude or way of regarding something",
        "japanese": "視点、観点",
        "example": "Share your personal perspective during discussion.",
        "helpExplanation": "自分の考えや見解のことです。"
      },
      {
        "word": "analysis_w20",
        "partOfSpeech": "noun",
        "meaning": "detailed examination of elements or structure",
        "japanese": "分析、考察",
        "example": "Analyze the reading passage carefully.",
        "helpExplanation": "論理的に整理・分析することです。"
      },
      {
        "word": "practice_w20",
        "partOfSpeech": "verb",
        "meaning": "perform an activity regularly to improve",
        "japanese": "練習する",
        "example": "Practice speaking aloud with your partner.",
        "helpExplanation": "声に出して練習することです。"
      },
      {
        "word": "feedback_w20",
        "partOfSpeech": "noun",
        "meaning": "helpful advice or evaluation on performance",
        "japanese": "フィードバック",
        "example": "Instructor feedback guides your pronunciation.",
        "helpExplanation": "指導員からのアドバイスです。"
      },
      {
        "word": "dialogue_w20",
        "partOfSpeech": "noun",
        "meaning": "conversation between two or more people",
        "japanese": "対話、ダイアログ",
        "example": "Prepare your role-play script on Wednesday.",
        "helpExplanation": "役割を演じる対話文です。"
      },
      {
        "word": "synthesis_w20",
        "partOfSpeech": "noun",
        "meaning": "combining ideas into a connected whole",
        "japanese": "統合、まとめ",
        "example": "Synthesize your weekly learning on Thursday.",
        "helpExplanation": "一週間の学びを統合することです。"
      }
    ],
    "schedule": {
      "monday": {
        "type": "self_study_knowledge",
        "title": "Monday Self-Study: Intermediate Panel Discussion & Review Knowledge & Comprehension",
        "focus": "Target Vocabulary (8–12 Words) + Audio Listening & Reading Passage",
        "audioUrl": "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
        "transcript": "Speaker A: Welcome to Week 20 of Room 305 Academy! Today we explore Intermediate Panel Discussion & Review.\nSpeaker B: That sounds fascinating! Let's examine the main concepts and practice key expressions.",
        "transcriptJapanese": "スピーカーA: 305アカデミーの第20週へようこそ！今日は「Intermediate Panel Discussion & Review」を探求します。\nスピーカーB: とても興味深いですね！主要な概念を検討し、キー表現を練習しましょう。",
        "readingPassage": "In Week 20, students focus on Intermediate Panel Discussion & Review. By examining real-world contexts, learners build confidence to express ideas clearly.",
        "readingPassageJapanese": "第20週では、生徒は「Intermediate Panel Discussion & Review」に焦点を当てます。現実的な文脈を学習することで、クリアに意見を表現する自信を育みます。",
        "quizTitle": "Monday Vocabulary & Comprehension Quiz",
        "comprehensionQuestions": [
          {
            "q": "What is the primary topic of Week 20?",
            "options": [
              "Intermediate Panel Discussion & Review",
              "General Grammar",
              "Unrelated Topic",
              "Free Conversation"
            ],
            "correct": 0
          },
          {
            "q": "What is the main goal of Monday self-study?",
            "options": [
              "Knowledge & Comprehension",
              "Live Debate",
              "Final Exam",
              "No Study"
            ],
            "correct": 0
          }
        ],
        "outputTask": "Complete Monday comprehension quiz & submit reflection notes."
      },
      "tuesday": {
        "type": "online_class_practice",
        "title": "Tuesday Online Class (30m): Interactive Practice on Intermediate Panel Discussion & Review",
        "focus": "Live Discussion on Monday’s Reading/Listening + Pronunciation Q&A",
        "classTime": "Tuesday 19:00 - 19:30 (JST)",
        "meetingLink": "https://zoom.us/j/room305-tuesday-class",
        "liveActivities": [
          "1. Live interactive discussion on Monday’s reading: \"Intermediate Panel Discussion & Review\".",
          "2. Answer comprehension questions using target vocabulary.",
          "3. Receive instructor feedback on pronunciation and phrasing."
        ],
        "quizTitle": "Tuesday Live Class Practice Quiz",
        "questions": [
          {
            "q": "Which expression is best for asking about intermediate panel discussion & review in a conversation?",
            "options": [
              "\"Could you tell me more about Intermediate Panel Discussion & Review?\"",
              "\"I do not know.\"",
              "\"No comment.\"",
              "\"Goodbye.\""
            ],
            "correct": 0
          },
          {
            "q": "During live class, what is the best strategy if you need a moment to think?",
            "options": [
              "Use a polite filler like \"Let me see...\"",
              "Remain silent for 5 minutes",
              "Leave the call",
              "Speak in Japanese only"
            ],
            "correct": 0
          }
        ],
        "outputTask": "Complete Tuesday practice quiz & log instructor feedback."
      },
      "wednesday": {
        "type": "self_study_writing",
        "title": "Wednesday Self-Study: Writing & Speaking Prep for Intermediate Panel Discussion & Review",
        "focus": "Grammar Review + Thursday Role-Play Assignment & Script Draft",
        "grammarPoint": "Grammar Pattern for Intermediate Panel Discussion & Review",
        "grammarExplanation": "Review target sentence structures to communicate participate in an unscripted group panel discussion.",
        "grammarJapaneseHelp": "「Intermediate Panel Discussion & Review」に関する効果的な英文作成のための文法パターンを復習します。",
        "scaffoldedSentence": "Regarding Intermediate Panel Discussion & Review, I believe that _____ because _____.",
        "thursdayTaskAssignment": "Prepare a 2-minute script or outline for Thursday's live role-play on Intermediate Panel Discussion & Review.",
        "quizTitle": "Wednesday Grammar & Sentence Structure Quiz",
        "questions": [
          {
            "q": "Which conjunction logically connects a main point with a reason in Intermediate Panel Discussion & Review?",
            "options": [
              "because",
              "although",
              "unless",
              "neither"
            ],
            "correct": 0
          },
          {
            "q": "What is the goal of Wednesday self-study?",
            "options": [
              "Writing assignment & Thursday script preparation",
              "Just watching video",
              "Skipping study",
              "Final graduation"
            ],
            "correct": 0
          }
        ],
        "outputTask": "Complete Wednesday grammar quiz & submit script draft."
      },
      "thursday": {
        "type": "online_class_synthesis",
        "title": "Thursday Online Class (30m): Role-Play & Synthesis (Intermediate Panel Discussion & Review)",
        "focus": "Execute Wednesday’s Script + Unscripted Q&A + Weekly Master Quiz",
        "classTime": "Thursday 19:00 - 19:30 (JST)",
        "meetingLink": "https://zoom.us/j/room305-thursday-class",
        "rolePlayActivities": [
          "1. Execute role-plays or presentations using Wednesday's prepared script.",
          "2. Engage in unscripted follow-up Q&A with instructor and classmates.",
          "3. Complete Weekly Master Quiz & Self-Reflection."
        ],
        "quizTitle": "Thursday Weekly Master Synthesis Quiz",
        "questions": [
          {
            "q": "In Week 20, what is key to successful role-play execution?",
            "options": [
              "Applying Wednesday script & target vocabulary in conversation",
              "Reading silently",
              "Ignoring partner",
              "Only speaking Japanese"
            ],
            "correct": 0
          },
          {
            "q": "How do you express diplomatic disagreement or alternative views on Intermediate Panel Discussion & Review?",
            "options": [
              "\"I understand your point, but from my perspective...\"",
              "\"You are wrong.\"",
              "\"I disagree stop talking.\"",
              "\"No way.\""
            ],
            "correct": 0
          },
          {
            "q": "What completes the 2+2 weekly learning cycle on Thursday?",
            "options": [
              "Live role-play, Master Quiz, and Teacher Evaluation",
              "Starting Week 1 again",
              "No output",
              "Writing only"
            ],
            "correct": 0
          }
        ],
        "outputTask": "Complete Thursday Master Quiz, log teacher evaluation & self-reflection."
      }
    }
  },
  {
    "weekNumber": 21,
    "level": "advanced",
    "title": "Global Issues & International Perspectives",
    "goal": "Analyze complex global topics with critical thinking and nuanced vocabulary.",
    "vocabulary": [
      {
        "word": "target_word_1_w21",
        "partOfSpeech": "noun",
        "meaning": "key concept related to Global Issues & International Perspectives",
        "japanese": "主要概念",
        "example": "Using key expressions in Week 21.",
        "helpExplanation": "Week 21の重要キーワードです。"
      },
      {
        "word": "phrase_2_w21",
        "partOfSpeech": "noun phrase",
        "meaning": "useful expression for natural speaking",
        "japanese": "自然な表現",
        "example": "I agree with your point regarding this topic.",
        "helpExplanation": "会話で役立つ定型表現です。"
      },
      {
        "word": "perspective_w21",
        "partOfSpeech": "noun",
        "meaning": "a particular attitude or way of regarding something",
        "japanese": "視点、観点",
        "example": "Share your personal perspective during discussion.",
        "helpExplanation": "自分の考えや見解のことです。"
      },
      {
        "word": "analysis_w21",
        "partOfSpeech": "noun",
        "meaning": "detailed examination of elements or structure",
        "japanese": "分析、考察",
        "example": "Analyze the reading passage carefully.",
        "helpExplanation": "論理的に整理・分析することです。"
      },
      {
        "word": "practice_w21",
        "partOfSpeech": "verb",
        "meaning": "perform an activity regularly to improve",
        "japanese": "練習する",
        "example": "Practice speaking aloud with your partner.",
        "helpExplanation": "声に出して練習することです。"
      },
      {
        "word": "feedback_w21",
        "partOfSpeech": "noun",
        "meaning": "helpful advice or evaluation on performance",
        "japanese": "フィードバック",
        "example": "Instructor feedback guides your pronunciation.",
        "helpExplanation": "指導員からのアドバイスです。"
      },
      {
        "word": "dialogue_w21",
        "partOfSpeech": "noun",
        "meaning": "conversation between two or more people",
        "japanese": "対話、ダイアログ",
        "example": "Prepare your role-play script on Wednesday.",
        "helpExplanation": "役割を演じる対話文です。"
      },
      {
        "word": "synthesis_w21",
        "partOfSpeech": "noun",
        "meaning": "combining ideas into a connected whole",
        "japanese": "統合、まとめ",
        "example": "Synthesize your weekly learning on Thursday.",
        "helpExplanation": "一週間の学びを統合することです。"
      }
    ],
    "schedule": {
      "monday": {
        "type": "self_study_knowledge",
        "title": "Monday Self-Study: Global Issues & International Perspectives Knowledge & Comprehension",
        "focus": "Target Vocabulary (8–12 Words) + Audio Listening & Reading Passage",
        "audioUrl": "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
        "transcript": "Speaker A: Welcome to Week 21 of Room 305 Academy! Today we explore Global Issues & International Perspectives.\nSpeaker B: That sounds fascinating! Let's examine the main concepts and practice key expressions.",
        "transcriptJapanese": "スピーカーA: 305アカデミーの第21週へようこそ！今日は「Global Issues & International Perspectives」を探求します。\nスピーカーB: とても興味深いですね！主要な概念を検討し、キー表現を練習しましょう。",
        "readingPassage": "In Week 21, students focus on Global Issues & International Perspectives. By examining real-world contexts, learners build confidence to express ideas clearly.",
        "readingPassageJapanese": "第21週では、生徒は「Global Issues & International Perspectives」に焦点を当てます。現実的な文脈を学習することで、クリアに意見を表現する自信を育みます。",
        "quizTitle": "Monday Vocabulary & Comprehension Quiz",
        "comprehensionQuestions": [
          {
            "q": "What is the primary topic of Week 21?",
            "options": [
              "Global Issues & International Perspectives",
              "General Grammar",
              "Unrelated Topic",
              "Free Conversation"
            ],
            "correct": 0
          },
          {
            "q": "What is the main goal of Monday self-study?",
            "options": [
              "Knowledge & Comprehension",
              "Live Debate",
              "Final Exam",
              "No Study"
            ],
            "correct": 0
          }
        ],
        "outputTask": "Complete Monday comprehension quiz & submit reflection notes."
      },
      "tuesday": {
        "type": "online_class_practice",
        "title": "Tuesday Online Class (30m): Interactive Practice on Global Issues & International Perspectives",
        "focus": "Live Discussion on Monday’s Reading/Listening + Pronunciation Q&A",
        "classTime": "Tuesday 20:00 - 20:30 (JST)",
        "meetingLink": "https://zoom.us/j/room305-tuesday-class",
        "liveActivities": [
          "1. Live interactive discussion on Monday’s reading: \"Global Issues & International Perspectives\".",
          "2. Answer comprehension questions using target vocabulary.",
          "3. Receive instructor feedback on pronunciation and phrasing."
        ],
        "quizTitle": "Tuesday Live Class Practice Quiz",
        "questions": [
          {
            "q": "Which expression is best for asking about global issues & international perspectives in a conversation?",
            "options": [
              "\"Could you tell me more about Global Issues & International Perspectives?\"",
              "\"I do not know.\"",
              "\"No comment.\"",
              "\"Goodbye.\""
            ],
            "correct": 0
          },
          {
            "q": "During live class, what is the best strategy if you need a moment to think?",
            "options": [
              "Use a polite filler like \"Let me see...\"",
              "Remain silent for 5 minutes",
              "Leave the call",
              "Speak in Japanese only"
            ],
            "correct": 0
          }
        ],
        "outputTask": "Complete Tuesday practice quiz & log instructor feedback."
      },
      "wednesday": {
        "type": "self_study_writing",
        "title": "Wednesday Self-Study: Writing & Speaking Prep for Global Issues & International Perspectives",
        "focus": "Grammar Review + Thursday Role-Play Assignment & Script Draft",
        "grammarPoint": "Grammar Pattern for Global Issues & International Perspectives",
        "grammarExplanation": "Review target sentence structures to communicate analyze complex global topics with critical thinking and nuanced vocabulary.",
        "grammarJapaneseHelp": "「Global Issues & International Perspectives」に関する効果的な英文作成のための文法パターンを復習します。",
        "scaffoldedSentence": "Regarding Global Issues & International Perspectives, I believe that _____ because _____.",
        "thursdayTaskAssignment": "Prepare a 2-minute script or outline for Thursday's live role-play on Global Issues & International Perspectives.",
        "quizTitle": "Wednesday Grammar & Sentence Structure Quiz",
        "questions": [
          {
            "q": "Which conjunction logically connects a main point with a reason in Global Issues & International Perspectives?",
            "options": [
              "because",
              "although",
              "unless",
              "neither"
            ],
            "correct": 0
          },
          {
            "q": "What is the goal of Wednesday self-study?",
            "options": [
              "Writing assignment & Thursday script preparation",
              "Just watching video",
              "Skipping study",
              "Final graduation"
            ],
            "correct": 0
          }
        ],
        "outputTask": "Complete Wednesday grammar quiz & submit script draft."
      },
      "thursday": {
        "type": "online_class_synthesis",
        "title": "Thursday Online Class (30m): Role-Play & Synthesis (Global Issues & International Perspectives)",
        "focus": "Execute Wednesday’s Script + Unscripted Q&A + Weekly Master Quiz",
        "classTime": "Thursday 20:00 - 20:30 (JST)",
        "meetingLink": "https://zoom.us/j/room305-thursday-class",
        "rolePlayActivities": [
          "1. Execute role-plays or presentations using Wednesday's prepared script.",
          "2. Engage in unscripted follow-up Q&A with instructor and classmates.",
          "3. Complete Weekly Master Quiz & Self-Reflection."
        ],
        "quizTitle": "Thursday Weekly Master Synthesis Quiz",
        "questions": [
          {
            "q": "In Week 21, what is key to successful role-play execution?",
            "options": [
              "Applying Wednesday script & target vocabulary in conversation",
              "Reading silently",
              "Ignoring partner",
              "Only speaking Japanese"
            ],
            "correct": 0
          },
          {
            "q": "How do you express diplomatic disagreement or alternative views on Global Issues & International Perspectives?",
            "options": [
              "\"I understand your point, but from my perspective...\"",
              "\"You are wrong.\"",
              "\"I disagree stop talking.\"",
              "\"No way.\""
            ],
            "correct": 0
          },
          {
            "q": "What completes the 2+2 weekly learning cycle on Thursday?",
            "options": [
              "Live role-play, Master Quiz, and Teacher Evaluation",
              "Starting Week 1 again",
              "No output",
              "Writing only"
            ],
            "correct": 0
          }
        ],
        "outputTask": "Complete Thursday Master Quiz, log teacher evaluation & self-reflection."
      }
    }
  },
  {
    "weekNumber": 22,
    "level": "advanced",
    "title": "Leadership & Social Change",
    "goal": "Discuss transformative leadership and social movements.",
    "vocabulary": [
      {
        "word": "target_word_1_w22",
        "partOfSpeech": "noun",
        "meaning": "key concept related to Leadership & Social Change",
        "japanese": "主要概念",
        "example": "Using key expressions in Week 22.",
        "helpExplanation": "Week 22の重要キーワードです。"
      },
      {
        "word": "phrase_2_w22",
        "partOfSpeech": "noun phrase",
        "meaning": "useful expression for natural speaking",
        "japanese": "自然な表現",
        "example": "I agree with your point regarding this topic.",
        "helpExplanation": "会話で役立つ定型表現です。"
      },
      {
        "word": "perspective_w22",
        "partOfSpeech": "noun",
        "meaning": "a particular attitude or way of regarding something",
        "japanese": "視点、観点",
        "example": "Share your personal perspective during discussion.",
        "helpExplanation": "自分の考えや見解のことです。"
      },
      {
        "word": "analysis_w22",
        "partOfSpeech": "noun",
        "meaning": "detailed examination of elements or structure",
        "japanese": "分析、考察",
        "example": "Analyze the reading passage carefully.",
        "helpExplanation": "論理的に整理・分析することです。"
      },
      {
        "word": "practice_w22",
        "partOfSpeech": "verb",
        "meaning": "perform an activity regularly to improve",
        "japanese": "練習する",
        "example": "Practice speaking aloud with your partner.",
        "helpExplanation": "声に出して練習することです。"
      },
      {
        "word": "feedback_w22",
        "partOfSpeech": "noun",
        "meaning": "helpful advice or evaluation on performance",
        "japanese": "フィードバック",
        "example": "Instructor feedback guides your pronunciation.",
        "helpExplanation": "指導員からのアドバイスです。"
      },
      {
        "word": "dialogue_w22",
        "partOfSpeech": "noun",
        "meaning": "conversation between two or more people",
        "japanese": "対話、ダイアログ",
        "example": "Prepare your role-play script on Wednesday.",
        "helpExplanation": "役割を演じる対話文です。"
      },
      {
        "word": "synthesis_w22",
        "partOfSpeech": "noun",
        "meaning": "combining ideas into a connected whole",
        "japanese": "統合、まとめ",
        "example": "Synthesize your weekly learning on Thursday.",
        "helpExplanation": "一週間の学びを統合することです。"
      }
    ],
    "schedule": {
      "monday": {
        "type": "self_study_knowledge",
        "title": "Monday Self-Study: Leadership & Social Change Knowledge & Comprehension",
        "focus": "Target Vocabulary (8–12 Words) + Audio Listening & Reading Passage",
        "audioUrl": "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
        "transcript": "Speaker A: Welcome to Week 22 of Room 305 Academy! Today we explore Leadership & Social Change.\nSpeaker B: That sounds fascinating! Let's examine the main concepts and practice key expressions.",
        "transcriptJapanese": "スピーカーA: 305アカデミーの第22週へようこそ！今日は「Leadership & Social Change」を探求します。\nスピーカーB: とても興味深いですね！主要な概念を検討し、キー表現を練習しましょう。",
        "readingPassage": "In Week 22, students focus on Leadership & Social Change. By examining real-world contexts, learners build confidence to express ideas clearly.",
        "readingPassageJapanese": "第22週では、生徒は「Leadership & Social Change」に焦点を当てます。現実的な文脈を学習することで、クリアに意見を表現する自信を育みます。",
        "quizTitle": "Monday Vocabulary & Comprehension Quiz",
        "comprehensionQuestions": [
          {
            "q": "What is the primary topic of Week 22?",
            "options": [
              "Leadership & Social Change",
              "General Grammar",
              "Unrelated Topic",
              "Free Conversation"
            ],
            "correct": 0
          },
          {
            "q": "What is the main goal of Monday self-study?",
            "options": [
              "Knowledge & Comprehension",
              "Live Debate",
              "Final Exam",
              "No Study"
            ],
            "correct": 0
          }
        ],
        "outputTask": "Complete Monday comprehension quiz & submit reflection notes."
      },
      "tuesday": {
        "type": "online_class_practice",
        "title": "Tuesday Online Class (30m): Interactive Practice on Leadership & Social Change",
        "focus": "Live Discussion on Monday’s Reading/Listening + Pronunciation Q&A",
        "classTime": "Tuesday 19:00 - 19:30 (JST)",
        "meetingLink": "https://zoom.us/j/room305-tuesday-class",
        "liveActivities": [
          "1. Live interactive discussion on Monday’s reading: \"Leadership & Social Change\".",
          "2. Answer comprehension questions using target vocabulary.",
          "3. Receive instructor feedback on pronunciation and phrasing."
        ],
        "quizTitle": "Tuesday Live Class Practice Quiz",
        "questions": [
          {
            "q": "Which expression is best for asking about leadership & social change in a conversation?",
            "options": [
              "\"Could you tell me more about Leadership & Social Change?\"",
              "\"I do not know.\"",
              "\"No comment.\"",
              "\"Goodbye.\""
            ],
            "correct": 0
          },
          {
            "q": "During live class, what is the best strategy if you need a moment to think?",
            "options": [
              "Use a polite filler like \"Let me see...\"",
              "Remain silent for 5 minutes",
              "Leave the call",
              "Speak in Japanese only"
            ],
            "correct": 0
          }
        ],
        "outputTask": "Complete Tuesday practice quiz & log instructor feedback."
      },
      "wednesday": {
        "type": "self_study_writing",
        "title": "Wednesday Self-Study: Writing & Speaking Prep for Leadership & Social Change",
        "focus": "Grammar Review + Thursday Role-Play Assignment & Script Draft",
        "grammarPoint": "Grammar Pattern for Leadership & Social Change",
        "grammarExplanation": "Review target sentence structures to communicate discuss transformative leadership and social movements.",
        "grammarJapaneseHelp": "「Leadership & Social Change」に関する効果的な英文作成のための文法パターンを復習します。",
        "scaffoldedSentence": "Regarding Leadership & Social Change, I believe that _____ because _____.",
        "thursdayTaskAssignment": "Prepare a 2-minute script or outline for Thursday's live role-play on Leadership & Social Change.",
        "quizTitle": "Wednesday Grammar & Sentence Structure Quiz",
        "questions": [
          {
            "q": "Which conjunction logically connects a main point with a reason in Leadership & Social Change?",
            "options": [
              "because",
              "although",
              "unless",
              "neither"
            ],
            "correct": 0
          },
          {
            "q": "What is the goal of Wednesday self-study?",
            "options": [
              "Writing assignment & Thursday script preparation",
              "Just watching video",
              "Skipping study",
              "Final graduation"
            ],
            "correct": 0
          }
        ],
        "outputTask": "Complete Wednesday grammar quiz & submit script draft."
      },
      "thursday": {
        "type": "online_class_synthesis",
        "title": "Thursday Online Class (30m): Role-Play & Synthesis (Leadership & Social Change)",
        "focus": "Execute Wednesday’s Script + Unscripted Q&A + Weekly Master Quiz",
        "classTime": "Thursday 19:00 - 19:30 (JST)",
        "meetingLink": "https://zoom.us/j/room305-thursday-class",
        "rolePlayActivities": [
          "1. Execute role-plays or presentations using Wednesday's prepared script.",
          "2. Engage in unscripted follow-up Q&A with instructor and classmates.",
          "3. Complete Weekly Master Quiz & Self-Reflection."
        ],
        "quizTitle": "Thursday Weekly Master Synthesis Quiz",
        "questions": [
          {
            "q": "In Week 22, what is key to successful role-play execution?",
            "options": [
              "Applying Wednesday script & target vocabulary in conversation",
              "Reading silently",
              "Ignoring partner",
              "Only speaking Japanese"
            ],
            "correct": 0
          },
          {
            "q": "How do you express diplomatic disagreement or alternative views on Leadership & Social Change?",
            "options": [
              "\"I understand your point, but from my perspective...\"",
              "\"You are wrong.\"",
              "\"I disagree stop talking.\"",
              "\"No way.\""
            ],
            "correct": 0
          },
          {
            "q": "What completes the 2+2 weekly learning cycle on Thursday?",
            "options": [
              "Live role-play, Master Quiz, and Teacher Evaluation",
              "Starting Week 1 again",
              "No output",
              "Writing only"
            ],
            "correct": 0
          }
        ],
        "outputTask": "Complete Thursday Master Quiz, log teacher evaluation & self-reflection."
      }
    }
  },
  {
    "weekNumber": 23,
    "level": "advanced",
    "title": "AI, Automation & Digital Transformation",
    "goal": "Debate ethics of artificial intelligence and automation in society.",
    "vocabulary": [
      {
        "word": "target_word_1_w23",
        "partOfSpeech": "noun",
        "meaning": "key concept related to AI, Automation & Digital Transformation",
        "japanese": "主要概念",
        "example": "Using key expressions in Week 23.",
        "helpExplanation": "Week 23の重要キーワードです。"
      },
      {
        "word": "phrase_2_w23",
        "partOfSpeech": "noun phrase",
        "meaning": "useful expression for natural speaking",
        "japanese": "自然な表現",
        "example": "I agree with your point regarding this topic.",
        "helpExplanation": "会話で役立つ定型表現です。"
      },
      {
        "word": "perspective_w23",
        "partOfSpeech": "noun",
        "meaning": "a particular attitude or way of regarding something",
        "japanese": "視点、観点",
        "example": "Share your personal perspective during discussion.",
        "helpExplanation": "自分の考えや見解のことです。"
      },
      {
        "word": "analysis_w23",
        "partOfSpeech": "noun",
        "meaning": "detailed examination of elements or structure",
        "japanese": "分析、考察",
        "example": "Analyze the reading passage carefully.",
        "helpExplanation": "論理的に整理・分析することです。"
      },
      {
        "word": "practice_w23",
        "partOfSpeech": "verb",
        "meaning": "perform an activity regularly to improve",
        "japanese": "練習する",
        "example": "Practice speaking aloud with your partner.",
        "helpExplanation": "声に出して練習することです。"
      },
      {
        "word": "feedback_w23",
        "partOfSpeech": "noun",
        "meaning": "helpful advice or evaluation on performance",
        "japanese": "フィードバック",
        "example": "Instructor feedback guides your pronunciation.",
        "helpExplanation": "指導員からのアドバイスです。"
      },
      {
        "word": "dialogue_w23",
        "partOfSpeech": "noun",
        "meaning": "conversation between two or more people",
        "japanese": "対話、ダイアログ",
        "example": "Prepare your role-play script on Wednesday.",
        "helpExplanation": "役割を演じる対話文です。"
      },
      {
        "word": "synthesis_w23",
        "partOfSpeech": "noun",
        "meaning": "combining ideas into a connected whole",
        "japanese": "統合、まとめ",
        "example": "Synthesize your weekly learning on Thursday.",
        "helpExplanation": "一週間の学びを統合することです。"
      }
    ],
    "schedule": {
      "monday": {
        "type": "self_study_knowledge",
        "title": "Monday Self-Study: AI, Automation & Digital Transformation Knowledge & Comprehension",
        "focus": "Target Vocabulary (8–12 Words) + Audio Listening & Reading Passage",
        "audioUrl": "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
        "transcript": "Speaker A: Welcome to Week 23 of Room 305 Academy! Today we explore AI, Automation & Digital Transformation.\nSpeaker B: That sounds fascinating! Let's examine the main concepts and practice key expressions.",
        "transcriptJapanese": "スピーカーA: 305アカデミーの第23週へようこそ！今日は「AI, Automation & Digital Transformation」を探求します。\nスピーカーB: とても興味深いですね！主要な概念を検討し、キー表現を練習しましょう。",
        "readingPassage": "In Week 23, students focus on AI, Automation & Digital Transformation. By examining real-world contexts, learners build confidence to express ideas clearly.",
        "readingPassageJapanese": "第23週では、生徒は「AI, Automation & Digital Transformation」に焦点を当てます。現実的な文脈を学習することで、クリアに意見を表現する自信を育みます。",
        "quizTitle": "Monday Vocabulary & Comprehension Quiz",
        "comprehensionQuestions": [
          {
            "q": "What is the primary topic of Week 23?",
            "options": [
              "AI, Automation & Digital Transformation",
              "General Grammar",
              "Unrelated Topic",
              "Free Conversation"
            ],
            "correct": 0
          },
          {
            "q": "What is the main goal of Monday self-study?",
            "options": [
              "Knowledge & Comprehension",
              "Live Debate",
              "Final Exam",
              "No Study"
            ],
            "correct": 0
          }
        ],
        "outputTask": "Complete Monday comprehension quiz & submit reflection notes."
      },
      "tuesday": {
        "type": "online_class_practice",
        "title": "Tuesday Online Class (30m): Interactive Practice on AI, Automation & Digital Transformation",
        "focus": "Live Discussion on Monday’s Reading/Listening + Pronunciation Q&A",
        "classTime": "Tuesday 20:00 - 20:30 (JST)",
        "meetingLink": "https://zoom.us/j/room305-tuesday-class",
        "liveActivities": [
          "1. Live interactive discussion on Monday’s reading: \"AI, Automation & Digital Transformation\".",
          "2. Answer comprehension questions using target vocabulary.",
          "3. Receive instructor feedback on pronunciation and phrasing."
        ],
        "quizTitle": "Tuesday Live Class Practice Quiz",
        "questions": [
          {
            "q": "Which expression is best for asking about ai, automation & digital transformation in a conversation?",
            "options": [
              "\"Could you tell me more about AI, Automation & Digital Transformation?\"",
              "\"I do not know.\"",
              "\"No comment.\"",
              "\"Goodbye.\""
            ],
            "correct": 0
          },
          {
            "q": "During live class, what is the best strategy if you need a moment to think?",
            "options": [
              "Use a polite filler like \"Let me see...\"",
              "Remain silent for 5 minutes",
              "Leave the call",
              "Speak in Japanese only"
            ],
            "correct": 0
          }
        ],
        "outputTask": "Complete Tuesday practice quiz & log instructor feedback."
      },
      "wednesday": {
        "type": "self_study_writing",
        "title": "Wednesday Self-Study: Writing & Speaking Prep for AI, Automation & Digital Transformation",
        "focus": "Grammar Review + Thursday Role-Play Assignment & Script Draft",
        "grammarPoint": "Grammar Pattern for AI, Automation & Digital Transformation",
        "grammarExplanation": "Review target sentence structures to communicate debate ethics of artificial intelligence and automation in society.",
        "grammarJapaneseHelp": "「AI, Automation & Digital Transformation」に関する効果的な英文作成のための文法パターンを復習します。",
        "scaffoldedSentence": "Regarding AI, Automation & Digital Transformation, I believe that _____ because _____.",
        "thursdayTaskAssignment": "Prepare a 2-minute script or outline for Thursday's live role-play on AI, Automation & Digital Transformation.",
        "quizTitle": "Wednesday Grammar & Sentence Structure Quiz",
        "questions": [
          {
            "q": "Which conjunction logically connects a main point with a reason in AI, Automation & Digital Transformation?",
            "options": [
              "because",
              "although",
              "unless",
              "neither"
            ],
            "correct": 0
          },
          {
            "q": "What is the goal of Wednesday self-study?",
            "options": [
              "Writing assignment & Thursday script preparation",
              "Just watching video",
              "Skipping study",
              "Final graduation"
            ],
            "correct": 0
          }
        ],
        "outputTask": "Complete Wednesday grammar quiz & submit script draft."
      },
      "thursday": {
        "type": "online_class_synthesis",
        "title": "Thursday Online Class (30m): Role-Play & Synthesis (AI, Automation & Digital Transformation)",
        "focus": "Execute Wednesday’s Script + Unscripted Q&A + Weekly Master Quiz",
        "classTime": "Thursday 20:00 - 20:30 (JST)",
        "meetingLink": "https://zoom.us/j/room305-thursday-class",
        "rolePlayActivities": [
          "1. Execute role-plays or presentations using Wednesday's prepared script.",
          "2. Engage in unscripted follow-up Q&A with instructor and classmates.",
          "3. Complete Weekly Master Quiz & Self-Reflection."
        ],
        "quizTitle": "Thursday Weekly Master Synthesis Quiz",
        "questions": [
          {
            "q": "In Week 23, what is key to successful role-play execution?",
            "options": [
              "Applying Wednesday script & target vocabulary in conversation",
              "Reading silently",
              "Ignoring partner",
              "Only speaking Japanese"
            ],
            "correct": 0
          },
          {
            "q": "How do you express diplomatic disagreement or alternative views on AI, Automation & Digital Transformation?",
            "options": [
              "\"I understand your point, but from my perspective...\"",
              "\"You are wrong.\"",
              "\"I disagree stop talking.\"",
              "\"No way.\""
            ],
            "correct": 0
          },
          {
            "q": "What completes the 2+2 weekly learning cycle on Thursday?",
            "options": [
              "Live role-play, Master Quiz, and Teacher Evaluation",
              "Starting Week 1 again",
              "No output",
              "Writing only"
            ],
            "correct": 0
          }
        ],
        "outputTask": "Complete Thursday Master Quiz, log teacher evaluation & self-reflection."
      }
    }
  },
  {
    "weekNumber": 24,
    "level": "advanced",
    "title": "Diversity, Equity & Inclusion",
    "goal": "Examine inclusive policies, accessibility, and cultural equity.",
    "vocabulary": [
      {
        "word": "target_word_1_w24",
        "partOfSpeech": "noun",
        "meaning": "key concept related to Diversity, Equity & Inclusion",
        "japanese": "主要概念",
        "example": "Using key expressions in Week 24.",
        "helpExplanation": "Week 24の重要キーワードです。"
      },
      {
        "word": "phrase_2_w24",
        "partOfSpeech": "noun phrase",
        "meaning": "useful expression for natural speaking",
        "japanese": "自然な表現",
        "example": "I agree with your point regarding this topic.",
        "helpExplanation": "会話で役立つ定型表現です。"
      },
      {
        "word": "perspective_w24",
        "partOfSpeech": "noun",
        "meaning": "a particular attitude or way of regarding something",
        "japanese": "視点、観点",
        "example": "Share your personal perspective during discussion.",
        "helpExplanation": "自分の考えや見解のことです。"
      },
      {
        "word": "analysis_w24",
        "partOfSpeech": "noun",
        "meaning": "detailed examination of elements or structure",
        "japanese": "分析、考察",
        "example": "Analyze the reading passage carefully.",
        "helpExplanation": "論理的に整理・分析することです。"
      },
      {
        "word": "practice_w24",
        "partOfSpeech": "verb",
        "meaning": "perform an activity regularly to improve",
        "japanese": "練習する",
        "example": "Practice speaking aloud with your partner.",
        "helpExplanation": "声に出して練習することです。"
      },
      {
        "word": "feedback_w24",
        "partOfSpeech": "noun",
        "meaning": "helpful advice or evaluation on performance",
        "japanese": "フィードバック",
        "example": "Instructor feedback guides your pronunciation.",
        "helpExplanation": "指導員からのアドバイスです。"
      },
      {
        "word": "dialogue_w24",
        "partOfSpeech": "noun",
        "meaning": "conversation between two or more people",
        "japanese": "対話、ダイアログ",
        "example": "Prepare your role-play script on Wednesday.",
        "helpExplanation": "役割を演じる対話文です。"
      },
      {
        "word": "synthesis_w24",
        "partOfSpeech": "noun",
        "meaning": "combining ideas into a connected whole",
        "japanese": "統合、まとめ",
        "example": "Synthesize your weekly learning on Thursday.",
        "helpExplanation": "一週間の学びを統合することです。"
      }
    ],
    "schedule": {
      "monday": {
        "type": "self_study_knowledge",
        "title": "Monday Self-Study: Diversity, Equity & Inclusion Knowledge & Comprehension",
        "focus": "Target Vocabulary (8–12 Words) + Audio Listening & Reading Passage",
        "audioUrl": "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
        "transcript": "Speaker A: Welcome to Week 24 of Room 305 Academy! Today we explore Diversity, Equity & Inclusion.\nSpeaker B: That sounds fascinating! Let's examine the main concepts and practice key expressions.",
        "transcriptJapanese": "スピーカーA: 305アカデミーの第24週へようこそ！今日は「Diversity, Equity & Inclusion」を探求します。\nスピーカーB: とても興味深いですね！主要な概念を検討し、キー表現を練習しましょう。",
        "readingPassage": "In Week 24, students focus on Diversity, Equity & Inclusion. By examining real-world contexts, learners build confidence to express ideas clearly.",
        "readingPassageJapanese": "第24週では、生徒は「Diversity, Equity & Inclusion」に焦点を当てます。現実的な文脈を学習することで、クリアに意見を表現する自信を育みます。",
        "quizTitle": "Monday Vocabulary & Comprehension Quiz",
        "comprehensionQuestions": [
          {
            "q": "What is the primary topic of Week 24?",
            "options": [
              "Diversity, Equity & Inclusion",
              "General Grammar",
              "Unrelated Topic",
              "Free Conversation"
            ],
            "correct": 0
          },
          {
            "q": "What is the main goal of Monday self-study?",
            "options": [
              "Knowledge & Comprehension",
              "Live Debate",
              "Final Exam",
              "No Study"
            ],
            "correct": 0
          }
        ],
        "outputTask": "Complete Monday comprehension quiz & submit reflection notes."
      },
      "tuesday": {
        "type": "online_class_practice",
        "title": "Tuesday Online Class (30m): Interactive Practice on Diversity, Equity & Inclusion",
        "focus": "Live Discussion on Monday’s Reading/Listening + Pronunciation Q&A",
        "classTime": "Tuesday 19:00 - 19:30 (JST)",
        "meetingLink": "https://zoom.us/j/room305-tuesday-class",
        "liveActivities": [
          "1. Live interactive discussion on Monday’s reading: \"Diversity, Equity & Inclusion\".",
          "2. Answer comprehension questions using target vocabulary.",
          "3. Receive instructor feedback on pronunciation and phrasing."
        ],
        "quizTitle": "Tuesday Live Class Practice Quiz",
        "questions": [
          {
            "q": "Which expression is best for asking about diversity, equity & inclusion in a conversation?",
            "options": [
              "\"Could you tell me more about Diversity, Equity & Inclusion?\"",
              "\"I do not know.\"",
              "\"No comment.\"",
              "\"Goodbye.\""
            ],
            "correct": 0
          },
          {
            "q": "During live class, what is the best strategy if you need a moment to think?",
            "options": [
              "Use a polite filler like \"Let me see...\"",
              "Remain silent for 5 minutes",
              "Leave the call",
              "Speak in Japanese only"
            ],
            "correct": 0
          }
        ],
        "outputTask": "Complete Tuesday practice quiz & log instructor feedback."
      },
      "wednesday": {
        "type": "self_study_writing",
        "title": "Wednesday Self-Study: Writing & Speaking Prep for Diversity, Equity & Inclusion",
        "focus": "Grammar Review + Thursday Role-Play Assignment & Script Draft",
        "grammarPoint": "Grammar Pattern for Diversity, Equity & Inclusion",
        "grammarExplanation": "Review target sentence structures to communicate examine inclusive policies, accessibility, and cultural equity.",
        "grammarJapaneseHelp": "「Diversity, Equity & Inclusion」に関する効果的な英文作成のための文法パターンを復習します。",
        "scaffoldedSentence": "Regarding Diversity, Equity & Inclusion, I believe that _____ because _____.",
        "thursdayTaskAssignment": "Prepare a 2-minute script or outline for Thursday's live role-play on Diversity, Equity & Inclusion.",
        "quizTitle": "Wednesday Grammar & Sentence Structure Quiz",
        "questions": [
          {
            "q": "Which conjunction logically connects a main point with a reason in Diversity, Equity & Inclusion?",
            "options": [
              "because",
              "although",
              "unless",
              "neither"
            ],
            "correct": 0
          },
          {
            "q": "What is the goal of Wednesday self-study?",
            "options": [
              "Writing assignment & Thursday script preparation",
              "Just watching video",
              "Skipping study",
              "Final graduation"
            ],
            "correct": 0
          }
        ],
        "outputTask": "Complete Wednesday grammar quiz & submit script draft."
      },
      "thursday": {
        "type": "online_class_synthesis",
        "title": "Thursday Online Class (30m): Role-Play & Synthesis (Diversity, Equity & Inclusion)",
        "focus": "Execute Wednesday’s Script + Unscripted Q&A + Weekly Master Quiz",
        "classTime": "Thursday 19:00 - 19:30 (JST)",
        "meetingLink": "https://zoom.us/j/room305-thursday-class",
        "rolePlayActivities": [
          "1. Execute role-plays or presentations using Wednesday's prepared script.",
          "2. Engage in unscripted follow-up Q&A with instructor and classmates.",
          "3. Complete Weekly Master Quiz & Self-Reflection."
        ],
        "quizTitle": "Thursday Weekly Master Synthesis Quiz",
        "questions": [
          {
            "q": "In Week 24, what is key to successful role-play execution?",
            "options": [
              "Applying Wednesday script & target vocabulary in conversation",
              "Reading silently",
              "Ignoring partner",
              "Only speaking Japanese"
            ],
            "correct": 0
          },
          {
            "q": "How do you express diplomatic disagreement or alternative views on Diversity, Equity & Inclusion?",
            "options": [
              "\"I understand your point, but from my perspective...\"",
              "\"You are wrong.\"",
              "\"I disagree stop talking.\"",
              "\"No way.\""
            ],
            "correct": 0
          },
          {
            "q": "What completes the 2+2 weekly learning cycle on Thursday?",
            "options": [
              "Live role-play, Master Quiz, and Teacher Evaluation",
              "Starting Week 1 again",
              "No output",
              "Writing only"
            ],
            "correct": 0
          }
        ],
        "outputTask": "Complete Thursday Master Quiz, log teacher evaluation & self-reflection."
      }
    }
  },
  {
    "weekNumber": 25,
    "level": "advanced",
    "title": "Academic & Professional Writing",
    "goal": "Write formal emails, executive summaries, and research abstracts.",
    "vocabulary": [
      {
        "word": "target_word_1_w25",
        "partOfSpeech": "noun",
        "meaning": "key concept related to Academic & Professional Writing",
        "japanese": "主要概念",
        "example": "Using key expressions in Week 25.",
        "helpExplanation": "Week 25の重要キーワードです。"
      },
      {
        "word": "phrase_2_w25",
        "partOfSpeech": "noun phrase",
        "meaning": "useful expression for natural speaking",
        "japanese": "自然な表現",
        "example": "I agree with your point regarding this topic.",
        "helpExplanation": "会話で役立つ定型表現です。"
      },
      {
        "word": "perspective_w25",
        "partOfSpeech": "noun",
        "meaning": "a particular attitude or way of regarding something",
        "japanese": "視点、観点",
        "example": "Share your personal perspective during discussion.",
        "helpExplanation": "自分の考えや見解のことです。"
      },
      {
        "word": "analysis_w25",
        "partOfSpeech": "noun",
        "meaning": "detailed examination of elements or structure",
        "japanese": "分析、考察",
        "example": "Analyze the reading passage carefully.",
        "helpExplanation": "論理的に整理・分析することです。"
      },
      {
        "word": "practice_w25",
        "partOfSpeech": "verb",
        "meaning": "perform an activity regularly to improve",
        "japanese": "練習する",
        "example": "Practice speaking aloud with your partner.",
        "helpExplanation": "声に出して練習することです。"
      },
      {
        "word": "feedback_w25",
        "partOfSpeech": "noun",
        "meaning": "helpful advice or evaluation on performance",
        "japanese": "フィードバック",
        "example": "Instructor feedback guides your pronunciation.",
        "helpExplanation": "指導員からのアドバイスです。"
      },
      {
        "word": "dialogue_w25",
        "partOfSpeech": "noun",
        "meaning": "conversation between two or more people",
        "japanese": "対話、ダイアログ",
        "example": "Prepare your role-play script on Wednesday.",
        "helpExplanation": "役割を演じる対話文です。"
      },
      {
        "word": "synthesis_w25",
        "partOfSpeech": "noun",
        "meaning": "combining ideas into a connected whole",
        "japanese": "統合、まとめ",
        "example": "Synthesize your weekly learning on Thursday.",
        "helpExplanation": "一週間の学びを統合することです。"
      }
    ],
    "schedule": {
      "monday": {
        "type": "self_study_knowledge",
        "title": "Monday Self-Study: Academic & Professional Writing Knowledge & Comprehension",
        "focus": "Target Vocabulary (8–12 Words) + Audio Listening & Reading Passage",
        "audioUrl": "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
        "transcript": "Speaker A: Welcome to Week 25 of Room 305 Academy! Today we explore Academic & Professional Writing.\nSpeaker B: That sounds fascinating! Let's examine the main concepts and practice key expressions.",
        "transcriptJapanese": "スピーカーA: 305アカデミーの第25週へようこそ！今日は「Academic & Professional Writing」を探求します。\nスピーカーB: とても興味深いですね！主要な概念を検討し、キー表現を練習しましょう。",
        "readingPassage": "In Week 25, students focus on Academic & Professional Writing. By examining real-world contexts, learners build confidence to express ideas clearly.",
        "readingPassageJapanese": "第25週では、生徒は「Academic & Professional Writing」に焦点を当てます。現実的な文脈を学習することで、クリアに意見を表現する自信を育みます。",
        "quizTitle": "Monday Vocabulary & Comprehension Quiz",
        "comprehensionQuestions": [
          {
            "q": "What is the primary topic of Week 25?",
            "options": [
              "Academic & Professional Writing",
              "General Grammar",
              "Unrelated Topic",
              "Free Conversation"
            ],
            "correct": 0
          },
          {
            "q": "What is the main goal of Monday self-study?",
            "options": [
              "Knowledge & Comprehension",
              "Live Debate",
              "Final Exam",
              "No Study"
            ],
            "correct": 0
          }
        ],
        "outputTask": "Complete Monday comprehension quiz & submit reflection notes."
      },
      "tuesday": {
        "type": "online_class_practice",
        "title": "Tuesday Online Class (30m): Interactive Practice on Academic & Professional Writing",
        "focus": "Live Discussion on Monday’s Reading/Listening + Pronunciation Q&A",
        "classTime": "Tuesday 20:00 - 20:30 (JST)",
        "meetingLink": "https://zoom.us/j/room305-tuesday-class",
        "liveActivities": [
          "1. Live interactive discussion on Monday’s reading: \"Academic & Professional Writing\".",
          "2. Answer comprehension questions using target vocabulary.",
          "3. Receive instructor feedback on pronunciation and phrasing."
        ],
        "quizTitle": "Tuesday Live Class Practice Quiz",
        "questions": [
          {
            "q": "Which expression is best for asking about academic & professional writing in a conversation?",
            "options": [
              "\"Could you tell me more about Academic & Professional Writing?\"",
              "\"I do not know.\"",
              "\"No comment.\"",
              "\"Goodbye.\""
            ],
            "correct": 0
          },
          {
            "q": "During live class, what is the best strategy if you need a moment to think?",
            "options": [
              "Use a polite filler like \"Let me see...\"",
              "Remain silent for 5 minutes",
              "Leave the call",
              "Speak in Japanese only"
            ],
            "correct": 0
          }
        ],
        "outputTask": "Complete Tuesday practice quiz & log instructor feedback."
      },
      "wednesday": {
        "type": "self_study_writing",
        "title": "Wednesday Self-Study: Writing & Speaking Prep for Academic & Professional Writing",
        "focus": "Grammar Review + Thursday Role-Play Assignment & Script Draft",
        "grammarPoint": "Grammar Pattern for Academic & Professional Writing",
        "grammarExplanation": "Review target sentence structures to communicate write formal emails, executive summaries, and research abstracts.",
        "grammarJapaneseHelp": "「Academic & Professional Writing」に関する効果的な英文作成のための文法パターンを復習します。",
        "scaffoldedSentence": "Regarding Academic & Professional Writing, I believe that _____ because _____.",
        "thursdayTaskAssignment": "Prepare a 2-minute script or outline for Thursday's live role-play on Academic & Professional Writing.",
        "quizTitle": "Wednesday Grammar & Sentence Structure Quiz",
        "questions": [
          {
            "q": "Which conjunction logically connects a main point with a reason in Academic & Professional Writing?",
            "options": [
              "because",
              "although",
              "unless",
              "neither"
            ],
            "correct": 0
          },
          {
            "q": "What is the goal of Wednesday self-study?",
            "options": [
              "Writing assignment & Thursday script preparation",
              "Just watching video",
              "Skipping study",
              "Final graduation"
            ],
            "correct": 0
          }
        ],
        "outputTask": "Complete Wednesday grammar quiz & submit script draft."
      },
      "thursday": {
        "type": "online_class_synthesis",
        "title": "Thursday Online Class (30m): Role-Play & Synthesis (Academic & Professional Writing)",
        "focus": "Execute Wednesday’s Script + Unscripted Q&A + Weekly Master Quiz",
        "classTime": "Thursday 20:00 - 20:30 (JST)",
        "meetingLink": "https://zoom.us/j/room305-thursday-class",
        "rolePlayActivities": [
          "1. Execute role-plays or presentations using Wednesday's prepared script.",
          "2. Engage in unscripted follow-up Q&A with instructor and classmates.",
          "3. Complete Weekly Master Quiz & Self-Reflection."
        ],
        "quizTitle": "Thursday Weekly Master Synthesis Quiz",
        "questions": [
          {
            "q": "In Week 25, what is key to successful role-play execution?",
            "options": [
              "Applying Wednesday script & target vocabulary in conversation",
              "Reading silently",
              "Ignoring partner",
              "Only speaking Japanese"
            ],
            "correct": 0
          },
          {
            "q": "How do you express diplomatic disagreement or alternative views on Academic & Professional Writing?",
            "options": [
              "\"I understand your point, but from my perspective...\"",
              "\"You are wrong.\"",
              "\"I disagree stop talking.\"",
              "\"No way.\""
            ],
            "correct": 0
          },
          {
            "q": "What completes the 2+2 weekly learning cycle on Thursday?",
            "options": [
              "Live role-play, Master Quiz, and Teacher Evaluation",
              "Starting Week 1 again",
              "No output",
              "Writing only"
            ],
            "correct": 0
          }
        ],
        "outputTask": "Complete Thursday Master Quiz, log teacher evaluation & self-reflection."
      }
    }
  },
  {
    "weekNumber": 26,
    "level": "advanced",
    "title": "Debate, Logic & Critical Thinking",
    "goal": "Master formal debate structures, refutations, and counterarguments.",
    "vocabulary": [
      {
        "word": "target_word_1_w26",
        "partOfSpeech": "noun",
        "meaning": "key concept related to Debate, Logic & Critical Thinking",
        "japanese": "主要概念",
        "example": "Using key expressions in Week 26.",
        "helpExplanation": "Week 26の重要キーワードです。"
      },
      {
        "word": "phrase_2_w26",
        "partOfSpeech": "noun phrase",
        "meaning": "useful expression for natural speaking",
        "japanese": "自然な表現",
        "example": "I agree with your point regarding this topic.",
        "helpExplanation": "会話で役立つ定型表現です。"
      },
      {
        "word": "perspective_w26",
        "partOfSpeech": "noun",
        "meaning": "a particular attitude or way of regarding something",
        "japanese": "視点、観点",
        "example": "Share your personal perspective during discussion.",
        "helpExplanation": "自分の考えや見解のことです。"
      },
      {
        "word": "analysis_w26",
        "partOfSpeech": "noun",
        "meaning": "detailed examination of elements or structure",
        "japanese": "分析、考察",
        "example": "Analyze the reading passage carefully.",
        "helpExplanation": "論理的に整理・分析することです。"
      },
      {
        "word": "practice_w26",
        "partOfSpeech": "verb",
        "meaning": "perform an activity regularly to improve",
        "japanese": "練習する",
        "example": "Practice speaking aloud with your partner.",
        "helpExplanation": "声に出して練習することです。"
      },
      {
        "word": "feedback_w26",
        "partOfSpeech": "noun",
        "meaning": "helpful advice or evaluation on performance",
        "japanese": "フィードバック",
        "example": "Instructor feedback guides your pronunciation.",
        "helpExplanation": "指導員からのアドバイスです。"
      },
      {
        "word": "dialogue_w26",
        "partOfSpeech": "noun",
        "meaning": "conversation between two or more people",
        "japanese": "対話、ダイアログ",
        "example": "Prepare your role-play script on Wednesday.",
        "helpExplanation": "役割を演じる対話文です。"
      },
      {
        "word": "synthesis_w26",
        "partOfSpeech": "noun",
        "meaning": "combining ideas into a connected whole",
        "japanese": "統合、まとめ",
        "example": "Synthesize your weekly learning on Thursday.",
        "helpExplanation": "一週間の学びを統合することです。"
      }
    ],
    "schedule": {
      "monday": {
        "type": "self_study_knowledge",
        "title": "Monday Self-Study: Debate, Logic & Critical Thinking Knowledge & Comprehension",
        "focus": "Target Vocabulary (8–12 Words) + Audio Listening & Reading Passage",
        "audioUrl": "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
        "transcript": "Speaker A: Welcome to Week 26 of Room 305 Academy! Today we explore Debate, Logic & Critical Thinking.\nSpeaker B: That sounds fascinating! Let's examine the main concepts and practice key expressions.",
        "transcriptJapanese": "スピーカーA: 305アカデミーの第26週へようこそ！今日は「Debate, Logic & Critical Thinking」を探求します。\nスピーカーB: とても興味深いですね！主要な概念を検討し、キー表現を練習しましょう。",
        "readingPassage": "In Week 26, students focus on Debate, Logic & Critical Thinking. By examining real-world contexts, learners build confidence to express ideas clearly.",
        "readingPassageJapanese": "第26週では、生徒は「Debate, Logic & Critical Thinking」に焦点を当てます。現実的な文脈を学習することで、クリアに意見を表現する自信を育みます。",
        "quizTitle": "Monday Vocabulary & Comprehension Quiz",
        "comprehensionQuestions": [
          {
            "q": "What is the primary topic of Week 26?",
            "options": [
              "Debate, Logic & Critical Thinking",
              "General Grammar",
              "Unrelated Topic",
              "Free Conversation"
            ],
            "correct": 0
          },
          {
            "q": "What is the main goal of Monday self-study?",
            "options": [
              "Knowledge & Comprehension",
              "Live Debate",
              "Final Exam",
              "No Study"
            ],
            "correct": 0
          }
        ],
        "outputTask": "Complete Monday comprehension quiz & submit reflection notes."
      },
      "tuesday": {
        "type": "online_class_practice",
        "title": "Tuesday Online Class (30m): Interactive Practice on Debate, Logic & Critical Thinking",
        "focus": "Live Discussion on Monday’s Reading/Listening + Pronunciation Q&A",
        "classTime": "Tuesday 19:00 - 19:30 (JST)",
        "meetingLink": "https://zoom.us/j/room305-tuesday-class",
        "liveActivities": [
          "1. Live interactive discussion on Monday’s reading: \"Debate, Logic & Critical Thinking\".",
          "2. Answer comprehension questions using target vocabulary.",
          "3. Receive instructor feedback on pronunciation and phrasing."
        ],
        "quizTitle": "Tuesday Live Class Practice Quiz",
        "questions": [
          {
            "q": "Which expression is best for asking about debate, logic & critical thinking in a conversation?",
            "options": [
              "\"Could you tell me more about Debate, Logic & Critical Thinking?\"",
              "\"I do not know.\"",
              "\"No comment.\"",
              "\"Goodbye.\""
            ],
            "correct": 0
          },
          {
            "q": "During live class, what is the best strategy if you need a moment to think?",
            "options": [
              "Use a polite filler like \"Let me see...\"",
              "Remain silent for 5 minutes",
              "Leave the call",
              "Speak in Japanese only"
            ],
            "correct": 0
          }
        ],
        "outputTask": "Complete Tuesday practice quiz & log instructor feedback."
      },
      "wednesday": {
        "type": "self_study_writing",
        "title": "Wednesday Self-Study: Writing & Speaking Prep for Debate, Logic & Critical Thinking",
        "focus": "Grammar Review + Thursday Role-Play Assignment & Script Draft",
        "grammarPoint": "Grammar Pattern for Debate, Logic & Critical Thinking",
        "grammarExplanation": "Review target sentence structures to communicate master formal debate structures, refutations, and counterarguments.",
        "grammarJapaneseHelp": "「Debate, Logic & Critical Thinking」に関する効果的な英文作成のための文法パターンを復習します。",
        "scaffoldedSentence": "Regarding Debate, Logic & Critical Thinking, I believe that _____ because _____.",
        "thursdayTaskAssignment": "Prepare a 2-minute script or outline for Thursday's live role-play on Debate, Logic & Critical Thinking.",
        "quizTitle": "Wednesday Grammar & Sentence Structure Quiz",
        "questions": [
          {
            "q": "Which conjunction logically connects a main point with a reason in Debate, Logic & Critical Thinking?",
            "options": [
              "because",
              "although",
              "unless",
              "neither"
            ],
            "correct": 0
          },
          {
            "q": "What is the goal of Wednesday self-study?",
            "options": [
              "Writing assignment & Thursday script preparation",
              "Just watching video",
              "Skipping study",
              "Final graduation"
            ],
            "correct": 0
          }
        ],
        "outputTask": "Complete Wednesday grammar quiz & submit script draft."
      },
      "thursday": {
        "type": "online_class_synthesis",
        "title": "Thursday Online Class (30m): Role-Play & Synthesis (Debate, Logic & Critical Thinking)",
        "focus": "Execute Wednesday’s Script + Unscripted Q&A + Weekly Master Quiz",
        "classTime": "Thursday 19:00 - 19:30 (JST)",
        "meetingLink": "https://zoom.us/j/room305-thursday-class",
        "rolePlayActivities": [
          "1. Execute role-plays or presentations using Wednesday's prepared script.",
          "2. Engage in unscripted follow-up Q&A with instructor and classmates.",
          "3. Complete Weekly Master Quiz & Self-Reflection."
        ],
        "quizTitle": "Thursday Weekly Master Synthesis Quiz",
        "questions": [
          {
            "q": "In Week 26, what is key to successful role-play execution?",
            "options": [
              "Applying Wednesday script & target vocabulary in conversation",
              "Reading silently",
              "Ignoring partner",
              "Only speaking Japanese"
            ],
            "correct": 0
          },
          {
            "q": "How do you express diplomatic disagreement or alternative views on Debate, Logic & Critical Thinking?",
            "options": [
              "\"I understand your point, but from my perspective...\"",
              "\"You are wrong.\"",
              "\"I disagree stop talking.\"",
              "\"No way.\""
            ],
            "correct": 0
          },
          {
            "q": "What completes the 2+2 weekly learning cycle on Thursday?",
            "options": [
              "Live role-play, Master Quiz, and Teacher Evaluation",
              "Starting Week 1 again",
              "No output",
              "Writing only"
            ],
            "correct": 0
          }
        ],
        "outputTask": "Complete Thursday Master Quiz, log teacher evaluation & self-reflection."
      }
    }
  },
  {
    "weekNumber": 27,
    "level": "advanced",
    "title": "Presentations & Public Speaking",
    "goal": "Deliver persuasive 5-minute keynote presentations with Q&A.",
    "vocabulary": [
      {
        "word": "target_word_1_w27",
        "partOfSpeech": "noun",
        "meaning": "key concept related to Presentations & Public Speaking",
        "japanese": "主要概念",
        "example": "Using key expressions in Week 27.",
        "helpExplanation": "Week 27の重要キーワードです。"
      },
      {
        "word": "phrase_2_w27",
        "partOfSpeech": "noun phrase",
        "meaning": "useful expression for natural speaking",
        "japanese": "自然な表現",
        "example": "I agree with your point regarding this topic.",
        "helpExplanation": "会話で役立つ定型表現です。"
      },
      {
        "word": "perspective_w27",
        "partOfSpeech": "noun",
        "meaning": "a particular attitude or way of regarding something",
        "japanese": "視点、観点",
        "example": "Share your personal perspective during discussion.",
        "helpExplanation": "自分の考えや見解のことです。"
      },
      {
        "word": "analysis_w27",
        "partOfSpeech": "noun",
        "meaning": "detailed examination of elements or structure",
        "japanese": "分析、考察",
        "example": "Analyze the reading passage carefully.",
        "helpExplanation": "論理的に整理・分析することです。"
      },
      {
        "word": "practice_w27",
        "partOfSpeech": "verb",
        "meaning": "perform an activity regularly to improve",
        "japanese": "練習する",
        "example": "Practice speaking aloud with your partner.",
        "helpExplanation": "声に出して練習することです。"
      },
      {
        "word": "feedback_w27",
        "partOfSpeech": "noun",
        "meaning": "helpful advice or evaluation on performance",
        "japanese": "フィードバック",
        "example": "Instructor feedback guides your pronunciation.",
        "helpExplanation": "指導員からのアドバイスです。"
      },
      {
        "word": "dialogue_w27",
        "partOfSpeech": "noun",
        "meaning": "conversation between two or more people",
        "japanese": "対話、ダイアログ",
        "example": "Prepare your role-play script on Wednesday.",
        "helpExplanation": "役割を演じる対話文です。"
      },
      {
        "word": "synthesis_w27",
        "partOfSpeech": "noun",
        "meaning": "combining ideas into a connected whole",
        "japanese": "統合、まとめ",
        "example": "Synthesize your weekly learning on Thursday.",
        "helpExplanation": "一週間の学びを統合することです。"
      }
    ],
    "schedule": {
      "monday": {
        "type": "self_study_knowledge",
        "title": "Monday Self-Study: Presentations & Public Speaking Knowledge & Comprehension",
        "focus": "Target Vocabulary (8–12 Words) + Audio Listening & Reading Passage",
        "audioUrl": "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
        "transcript": "Speaker A: Welcome to Week 27 of Room 305 Academy! Today we explore Presentations & Public Speaking.\nSpeaker B: That sounds fascinating! Let's examine the main concepts and practice key expressions.",
        "transcriptJapanese": "スピーカーA: 305アカデミーの第27週へようこそ！今日は「Presentations & Public Speaking」を探求します。\nスピーカーB: とても興味深いですね！主要な概念を検討し、キー表現を練習しましょう。",
        "readingPassage": "In Week 27, students focus on Presentations & Public Speaking. By examining real-world contexts, learners build confidence to express ideas clearly.",
        "readingPassageJapanese": "第27週では、生徒は「Presentations & Public Speaking」に焦点を当てます。現実的な文脈を学習することで、クリアに意見を表現する自信を育みます。",
        "quizTitle": "Monday Vocabulary & Comprehension Quiz",
        "comprehensionQuestions": [
          {
            "q": "What is the primary topic of Week 27?",
            "options": [
              "Presentations & Public Speaking",
              "General Grammar",
              "Unrelated Topic",
              "Free Conversation"
            ],
            "correct": 0
          },
          {
            "q": "What is the main goal of Monday self-study?",
            "options": [
              "Knowledge & Comprehension",
              "Live Debate",
              "Final Exam",
              "No Study"
            ],
            "correct": 0
          }
        ],
        "outputTask": "Complete Monday comprehension quiz & submit reflection notes."
      },
      "tuesday": {
        "type": "online_class_practice",
        "title": "Tuesday Online Class (30m): Interactive Practice on Presentations & Public Speaking",
        "focus": "Live Discussion on Monday’s Reading/Listening + Pronunciation Q&A",
        "classTime": "Tuesday 20:00 - 20:30 (JST)",
        "meetingLink": "https://zoom.us/j/room305-tuesday-class",
        "liveActivities": [
          "1. Live interactive discussion on Monday’s reading: \"Presentations & Public Speaking\".",
          "2. Answer comprehension questions using target vocabulary.",
          "3. Receive instructor feedback on pronunciation and phrasing."
        ],
        "quizTitle": "Tuesday Live Class Practice Quiz",
        "questions": [
          {
            "q": "Which expression is best for asking about presentations & public speaking in a conversation?",
            "options": [
              "\"Could you tell me more about Presentations & Public Speaking?\"",
              "\"I do not know.\"",
              "\"No comment.\"",
              "\"Goodbye.\""
            ],
            "correct": 0
          },
          {
            "q": "During live class, what is the best strategy if you need a moment to think?",
            "options": [
              "Use a polite filler like \"Let me see...\"",
              "Remain silent for 5 minutes",
              "Leave the call",
              "Speak in Japanese only"
            ],
            "correct": 0
          }
        ],
        "outputTask": "Complete Tuesday practice quiz & log instructor feedback."
      },
      "wednesday": {
        "type": "self_study_writing",
        "title": "Wednesday Self-Study: Writing & Speaking Prep for Presentations & Public Speaking",
        "focus": "Grammar Review + Thursday Role-Play Assignment & Script Draft",
        "grammarPoint": "Grammar Pattern for Presentations & Public Speaking",
        "grammarExplanation": "Review target sentence structures to communicate deliver persuasive 5-minute keynote presentations with q&a.",
        "grammarJapaneseHelp": "「Presentations & Public Speaking」に関する効果的な英文作成のための文法パターンを復習します。",
        "scaffoldedSentence": "Regarding Presentations & Public Speaking, I believe that _____ because _____.",
        "thursdayTaskAssignment": "Prepare a 2-minute script or outline for Thursday's live role-play on Presentations & Public Speaking.",
        "quizTitle": "Wednesday Grammar & Sentence Structure Quiz",
        "questions": [
          {
            "q": "Which conjunction logically connects a main point with a reason in Presentations & Public Speaking?",
            "options": [
              "because",
              "although",
              "unless",
              "neither"
            ],
            "correct": 0
          },
          {
            "q": "What is the goal of Wednesday self-study?",
            "options": [
              "Writing assignment & Thursday script preparation",
              "Just watching video",
              "Skipping study",
              "Final graduation"
            ],
            "correct": 0
          }
        ],
        "outputTask": "Complete Wednesday grammar quiz & submit script draft."
      },
      "thursday": {
        "type": "online_class_synthesis",
        "title": "Thursday Online Class (30m): Role-Play & Synthesis (Presentations & Public Speaking)",
        "focus": "Execute Wednesday’s Script + Unscripted Q&A + Weekly Master Quiz",
        "classTime": "Thursday 20:00 - 20:30 (JST)",
        "meetingLink": "https://zoom.us/j/room305-thursday-class",
        "rolePlayActivities": [
          "1. Execute role-plays or presentations using Wednesday's prepared script.",
          "2. Engage in unscripted follow-up Q&A with instructor and classmates.",
          "3. Complete Weekly Master Quiz & Self-Reflection."
        ],
        "quizTitle": "Thursday Weekly Master Synthesis Quiz",
        "questions": [
          {
            "q": "In Week 27, what is key to successful role-play execution?",
            "options": [
              "Applying Wednesday script & target vocabulary in conversation",
              "Reading silently",
              "Ignoring partner",
              "Only speaking Japanese"
            ],
            "correct": 0
          },
          {
            "q": "How do you express diplomatic disagreement or alternative views on Presentations & Public Speaking?",
            "options": [
              "\"I understand your point, but from my perspective...\"",
              "\"You are wrong.\"",
              "\"I disagree stop talking.\"",
              "\"No way.\""
            ],
            "correct": 0
          },
          {
            "q": "What completes the 2+2 weekly learning cycle on Thursday?",
            "options": [
              "Live role-play, Master Quiz, and Teacher Evaluation",
              "Starting Week 1 again",
              "No output",
              "Writing only"
            ],
            "correct": 0
          }
        ],
        "outputTask": "Complete Thursday Master Quiz, log teacher evaluation & self-reflection."
      }
    }
  },
  {
    "weekNumber": 28,
    "level": "advanced",
    "title": "Complex Problem-Solving & Group Decisions",
    "goal": "Facilitate executive group decision-making sessions.",
    "vocabulary": [
      {
        "word": "target_word_1_w28",
        "partOfSpeech": "noun",
        "meaning": "key concept related to Complex Problem-Solving & Group Decisions",
        "japanese": "主要概念",
        "example": "Using key expressions in Week 28.",
        "helpExplanation": "Week 28の重要キーワードです。"
      },
      {
        "word": "phrase_2_w28",
        "partOfSpeech": "noun phrase",
        "meaning": "useful expression for natural speaking",
        "japanese": "自然な表現",
        "example": "I agree with your point regarding this topic.",
        "helpExplanation": "会話で役立つ定型表現です。"
      },
      {
        "word": "perspective_w28",
        "partOfSpeech": "noun",
        "meaning": "a particular attitude or way of regarding something",
        "japanese": "視点、観点",
        "example": "Share your personal perspective during discussion.",
        "helpExplanation": "自分の考えや見解のことです。"
      },
      {
        "word": "analysis_w28",
        "partOfSpeech": "noun",
        "meaning": "detailed examination of elements or structure",
        "japanese": "分析、考察",
        "example": "Analyze the reading passage carefully.",
        "helpExplanation": "論理的に整理・分析することです。"
      },
      {
        "word": "practice_w28",
        "partOfSpeech": "verb",
        "meaning": "perform an activity regularly to improve",
        "japanese": "練習する",
        "example": "Practice speaking aloud with your partner.",
        "helpExplanation": "声に出して練習することです。"
      },
      {
        "word": "feedback_w28",
        "partOfSpeech": "noun",
        "meaning": "helpful advice or evaluation on performance",
        "japanese": "フィードバック",
        "example": "Instructor feedback guides your pronunciation.",
        "helpExplanation": "指導員からのアドバイスです。"
      },
      {
        "word": "dialogue_w28",
        "partOfSpeech": "noun",
        "meaning": "conversation between two or more people",
        "japanese": "対話、ダイアログ",
        "example": "Prepare your role-play script on Wednesday.",
        "helpExplanation": "役割を演じる対話文です。"
      },
      {
        "word": "synthesis_w28",
        "partOfSpeech": "noun",
        "meaning": "combining ideas into a connected whole",
        "japanese": "統合、まとめ",
        "example": "Synthesize your weekly learning on Thursday.",
        "helpExplanation": "一週間の学びを統合することです。"
      }
    ],
    "schedule": {
      "monday": {
        "type": "self_study_knowledge",
        "title": "Monday Self-Study: Complex Problem-Solving & Group Decisions Knowledge & Comprehension",
        "focus": "Target Vocabulary (8–12 Words) + Audio Listening & Reading Passage",
        "audioUrl": "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
        "transcript": "Speaker A: Welcome to Week 28 of Room 305 Academy! Today we explore Complex Problem-Solving & Group Decisions.\nSpeaker B: That sounds fascinating! Let's examine the main concepts and practice key expressions.",
        "transcriptJapanese": "スピーカーA: 305アカデミーの第28週へようこそ！今日は「Complex Problem-Solving & Group Decisions」を探求します。\nスピーカーB: とても興味深いですね！主要な概念を検討し、キー表現を練習しましょう。",
        "readingPassage": "In Week 28, students focus on Complex Problem-Solving & Group Decisions. By examining real-world contexts, learners build confidence to express ideas clearly.",
        "readingPassageJapanese": "第28週では、生徒は「Complex Problem-Solving & Group Decisions」に焦点を当てます。現実的な文脈を学習することで、クリアに意見を表現する自信を育みます。",
        "quizTitle": "Monday Vocabulary & Comprehension Quiz",
        "comprehensionQuestions": [
          {
            "q": "What is the primary topic of Week 28?",
            "options": [
              "Complex Problem-Solving & Group Decisions",
              "General Grammar",
              "Unrelated Topic",
              "Free Conversation"
            ],
            "correct": 0
          },
          {
            "q": "What is the main goal of Monday self-study?",
            "options": [
              "Knowledge & Comprehension",
              "Live Debate",
              "Final Exam",
              "No Study"
            ],
            "correct": 0
          }
        ],
        "outputTask": "Complete Monday comprehension quiz & submit reflection notes."
      },
      "tuesday": {
        "type": "online_class_practice",
        "title": "Tuesday Online Class (30m): Interactive Practice on Complex Problem-Solving & Group Decisions",
        "focus": "Live Discussion on Monday’s Reading/Listening + Pronunciation Q&A",
        "classTime": "Tuesday 19:00 - 19:30 (JST)",
        "meetingLink": "https://zoom.us/j/room305-tuesday-class",
        "liveActivities": [
          "1. Live interactive discussion on Monday’s reading: \"Complex Problem-Solving & Group Decisions\".",
          "2. Answer comprehension questions using target vocabulary.",
          "3. Receive instructor feedback on pronunciation and phrasing."
        ],
        "quizTitle": "Tuesday Live Class Practice Quiz",
        "questions": [
          {
            "q": "Which expression is best for asking about complex problem-solving & group decisions in a conversation?",
            "options": [
              "\"Could you tell me more about Complex Problem-Solving & Group Decisions?\"",
              "\"I do not know.\"",
              "\"No comment.\"",
              "\"Goodbye.\""
            ],
            "correct": 0
          },
          {
            "q": "During live class, what is the best strategy if you need a moment to think?",
            "options": [
              "Use a polite filler like \"Let me see...\"",
              "Remain silent for 5 minutes",
              "Leave the call",
              "Speak in Japanese only"
            ],
            "correct": 0
          }
        ],
        "outputTask": "Complete Tuesday practice quiz & log instructor feedback."
      },
      "wednesday": {
        "type": "self_study_writing",
        "title": "Wednesday Self-Study: Writing & Speaking Prep for Complex Problem-Solving & Group Decisions",
        "focus": "Grammar Review + Thursday Role-Play Assignment & Script Draft",
        "grammarPoint": "Grammar Pattern for Complex Problem-Solving & Group Decisions",
        "grammarExplanation": "Review target sentence structures to communicate facilitate executive group decision-making sessions.",
        "grammarJapaneseHelp": "「Complex Problem-Solving & Group Decisions」に関する効果的な英文作成のための文法パターンを復習します。",
        "scaffoldedSentence": "Regarding Complex Problem-Solving & Group Decisions, I believe that _____ because _____.",
        "thursdayTaskAssignment": "Prepare a 2-minute script or outline for Thursday's live role-play on Complex Problem-Solving & Group Decisions.",
        "quizTitle": "Wednesday Grammar & Sentence Structure Quiz",
        "questions": [
          {
            "q": "Which conjunction logically connects a main point with a reason in Complex Problem-Solving & Group Decisions?",
            "options": [
              "because",
              "although",
              "unless",
              "neither"
            ],
            "correct": 0
          },
          {
            "q": "What is the goal of Wednesday self-study?",
            "options": [
              "Writing assignment & Thursday script preparation",
              "Just watching video",
              "Skipping study",
              "Final graduation"
            ],
            "correct": 0
          }
        ],
        "outputTask": "Complete Wednesday grammar quiz & submit script draft."
      },
      "thursday": {
        "type": "online_class_synthesis",
        "title": "Thursday Online Class (30m): Role-Play & Synthesis (Complex Problem-Solving & Group Decisions)",
        "focus": "Execute Wednesday’s Script + Unscripted Q&A + Weekly Master Quiz",
        "classTime": "Thursday 19:00 - 19:30 (JST)",
        "meetingLink": "https://zoom.us/j/room305-thursday-class",
        "rolePlayActivities": [
          "1. Execute role-plays or presentations using Wednesday's prepared script.",
          "2. Engage in unscripted follow-up Q&A with instructor and classmates.",
          "3. Complete Weekly Master Quiz & Self-Reflection."
        ],
        "quizTitle": "Thursday Weekly Master Synthesis Quiz",
        "questions": [
          {
            "q": "In Week 28, what is key to successful role-play execution?",
            "options": [
              "Applying Wednesday script & target vocabulary in conversation",
              "Reading silently",
              "Ignoring partner",
              "Only speaking Japanese"
            ],
            "correct": 0
          },
          {
            "q": "How do you express diplomatic disagreement or alternative views on Complex Problem-Solving & Group Decisions?",
            "options": [
              "\"I understand your point, but from my perspective...\"",
              "\"You are wrong.\"",
              "\"I disagree stop talking.\"",
              "\"No way.\""
            ],
            "correct": 0
          },
          {
            "q": "What completes the 2+2 weekly learning cycle on Thursday?",
            "options": [
              "Live role-play, Master Quiz, and Teacher Evaluation",
              "Starting Week 1 again",
              "No output",
              "Writing only"
            ],
            "correct": 0
          }
        ],
        "outputTask": "Complete Thursday Master Quiz, log teacher evaluation & self-reflection."
      }
    }
  },
  {
    "weekNumber": 29,
    "level": "advanced",
    "title": "Business Negotiations & Authentic English",
    "goal": "Simulate business negotiations and contract reviews.",
    "vocabulary": [
      {
        "word": "target_word_1_w29",
        "partOfSpeech": "noun",
        "meaning": "key concept related to Business Negotiations & Authentic English",
        "japanese": "主要概念",
        "example": "Using key expressions in Week 29.",
        "helpExplanation": "Week 29の重要キーワードです。"
      },
      {
        "word": "phrase_2_w29",
        "partOfSpeech": "noun phrase",
        "meaning": "useful expression for natural speaking",
        "japanese": "自然な表現",
        "example": "I agree with your point regarding this topic.",
        "helpExplanation": "会話で役立つ定型表現です。"
      },
      {
        "word": "perspective_w29",
        "partOfSpeech": "noun",
        "meaning": "a particular attitude or way of regarding something",
        "japanese": "視点、観点",
        "example": "Share your personal perspective during discussion.",
        "helpExplanation": "自分の考えや見解のことです。"
      },
      {
        "word": "analysis_w29",
        "partOfSpeech": "noun",
        "meaning": "detailed examination of elements or structure",
        "japanese": "分析、考察",
        "example": "Analyze the reading passage carefully.",
        "helpExplanation": "論理的に整理・分析することです。"
      },
      {
        "word": "practice_w29",
        "partOfSpeech": "verb",
        "meaning": "perform an activity regularly to improve",
        "japanese": "練習する",
        "example": "Practice speaking aloud with your partner.",
        "helpExplanation": "声に出して練習することです。"
      },
      {
        "word": "feedback_w29",
        "partOfSpeech": "noun",
        "meaning": "helpful advice or evaluation on performance",
        "japanese": "フィードバック",
        "example": "Instructor feedback guides your pronunciation.",
        "helpExplanation": "指導員からのアドバイスです。"
      },
      {
        "word": "dialogue_w29",
        "partOfSpeech": "noun",
        "meaning": "conversation between two or more people",
        "japanese": "対話、ダイアログ",
        "example": "Prepare your role-play script on Wednesday.",
        "helpExplanation": "役割を演じる対話文です。"
      },
      {
        "word": "synthesis_w29",
        "partOfSpeech": "noun",
        "meaning": "combining ideas into a connected whole",
        "japanese": "統合、まとめ",
        "example": "Synthesize your weekly learning on Thursday.",
        "helpExplanation": "一週間の学びを統合することです。"
      }
    ],
    "schedule": {
      "monday": {
        "type": "self_study_knowledge",
        "title": "Monday Self-Study: Business Negotiations & Authentic English Knowledge & Comprehension",
        "focus": "Target Vocabulary (8–12 Words) + Audio Listening & Reading Passage",
        "audioUrl": "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
        "transcript": "Speaker A: Welcome to Week 29 of Room 305 Academy! Today we explore Business Negotiations & Authentic English.\nSpeaker B: That sounds fascinating! Let's examine the main concepts and practice key expressions.",
        "transcriptJapanese": "スピーカーA: 305アカデミーの第29週へようこそ！今日は「Business Negotiations & Authentic English」を探求します。\nスピーカーB: とても興味深いですね！主要な概念を検討し、キー表現を練習しましょう。",
        "readingPassage": "In Week 29, students focus on Business Negotiations & Authentic English. By examining real-world contexts, learners build confidence to express ideas clearly.",
        "readingPassageJapanese": "第29週では、生徒は「Business Negotiations & Authentic English」に焦点を当てます。現実的な文脈を学習することで、クリアに意見を表現する自信を育みます。",
        "quizTitle": "Monday Vocabulary & Comprehension Quiz",
        "comprehensionQuestions": [
          {
            "q": "What is the primary topic of Week 29?",
            "options": [
              "Business Negotiations & Authentic English",
              "General Grammar",
              "Unrelated Topic",
              "Free Conversation"
            ],
            "correct": 0
          },
          {
            "q": "What is the main goal of Monday self-study?",
            "options": [
              "Knowledge & Comprehension",
              "Live Debate",
              "Final Exam",
              "No Study"
            ],
            "correct": 0
          }
        ],
        "outputTask": "Complete Monday comprehension quiz & submit reflection notes."
      },
      "tuesday": {
        "type": "online_class_practice",
        "title": "Tuesday Online Class (30m): Interactive Practice on Business Negotiations & Authentic English",
        "focus": "Live Discussion on Monday’s Reading/Listening + Pronunciation Q&A",
        "classTime": "Tuesday 20:00 - 20:30 (JST)",
        "meetingLink": "https://zoom.us/j/room305-tuesday-class",
        "liveActivities": [
          "1. Live interactive discussion on Monday’s reading: \"Business Negotiations & Authentic English\".",
          "2. Answer comprehension questions using target vocabulary.",
          "3. Receive instructor feedback on pronunciation and phrasing."
        ],
        "quizTitle": "Tuesday Live Class Practice Quiz",
        "questions": [
          {
            "q": "Which expression is best for asking about business negotiations & authentic english in a conversation?",
            "options": [
              "\"Could you tell me more about Business Negotiations & Authentic English?\"",
              "\"I do not know.\"",
              "\"No comment.\"",
              "\"Goodbye.\""
            ],
            "correct": 0
          },
          {
            "q": "During live class, what is the best strategy if you need a moment to think?",
            "options": [
              "Use a polite filler like \"Let me see...\"",
              "Remain silent for 5 minutes",
              "Leave the call",
              "Speak in Japanese only"
            ],
            "correct": 0
          }
        ],
        "outputTask": "Complete Tuesday practice quiz & log instructor feedback."
      },
      "wednesday": {
        "type": "self_study_writing",
        "title": "Wednesday Self-Study: Writing & Speaking Prep for Business Negotiations & Authentic English",
        "focus": "Grammar Review + Thursday Role-Play Assignment & Script Draft",
        "grammarPoint": "Grammar Pattern for Business Negotiations & Authentic English",
        "grammarExplanation": "Review target sentence structures to communicate simulate business negotiations and contract reviews.",
        "grammarJapaneseHelp": "「Business Negotiations & Authentic English」に関する効果的な英文作成のための文法パターンを復習します。",
        "scaffoldedSentence": "Regarding Business Negotiations & Authentic English, I believe that _____ because _____.",
        "thursdayTaskAssignment": "Prepare a 2-minute script or outline for Thursday's live role-play on Business Negotiations & Authentic English.",
        "quizTitle": "Wednesday Grammar & Sentence Structure Quiz",
        "questions": [
          {
            "q": "Which conjunction logically connects a main point with a reason in Business Negotiations & Authentic English?",
            "options": [
              "because",
              "although",
              "unless",
              "neither"
            ],
            "correct": 0
          },
          {
            "q": "What is the goal of Wednesday self-study?",
            "options": [
              "Writing assignment & Thursday script preparation",
              "Just watching video",
              "Skipping study",
              "Final graduation"
            ],
            "correct": 0
          }
        ],
        "outputTask": "Complete Wednesday grammar quiz & submit script draft."
      },
      "thursday": {
        "type": "online_class_synthesis",
        "title": "Thursday Online Class (30m): Role-Play & Synthesis (Business Negotiations & Authentic English)",
        "focus": "Execute Wednesday’s Script + Unscripted Q&A + Weekly Master Quiz",
        "classTime": "Thursday 20:00 - 20:30 (JST)",
        "meetingLink": "https://zoom.us/j/room305-thursday-class",
        "rolePlayActivities": [
          "1. Execute role-plays or presentations using Wednesday's prepared script.",
          "2. Engage in unscripted follow-up Q&A with instructor and classmates.",
          "3. Complete Weekly Master Quiz & Self-Reflection."
        ],
        "quizTitle": "Thursday Weekly Master Synthesis Quiz",
        "questions": [
          {
            "q": "In Week 29, what is key to successful role-play execution?",
            "options": [
              "Applying Wednesday script & target vocabulary in conversation",
              "Reading silently",
              "Ignoring partner",
              "Only speaking Japanese"
            ],
            "correct": 0
          },
          {
            "q": "How do you express diplomatic disagreement or alternative views on Business Negotiations & Authentic English?",
            "options": [
              "\"I understand your point, but from my perspective...\"",
              "\"You are wrong.\"",
              "\"I disagree stop talking.\"",
              "\"No way.\""
            ],
            "correct": 0
          },
          {
            "q": "What completes the 2+2 weekly learning cycle on Thursday?",
            "options": [
              "Live role-play, Master Quiz, and Teacher Evaluation",
              "Starting Week 1 again",
              "No output",
              "Writing only"
            ],
            "correct": 0
          }
        ],
        "outputTask": "Complete Thursday Master Quiz, log teacher evaluation & self-reflection."
      }
    }
  },
  {
    "weekNumber": 30,
    "level": "advanced",
    "title": "Advanced Capstone Presentation & Graduation",
    "goal": "Deliver final capstone project presentation and receive completion diploma.",
    "vocabulary": [
      {
        "word": "target_word_1_w30",
        "partOfSpeech": "noun",
        "meaning": "key concept related to Advanced Capstone Presentation & Graduation",
        "japanese": "主要概念",
        "example": "Using key expressions in Week 30.",
        "helpExplanation": "Week 30の重要キーワードです。"
      },
      {
        "word": "phrase_2_w30",
        "partOfSpeech": "noun phrase",
        "meaning": "useful expression for natural speaking",
        "japanese": "自然な表現",
        "example": "I agree with your point regarding this topic.",
        "helpExplanation": "会話で役立つ定型表現です。"
      },
      {
        "word": "perspective_w30",
        "partOfSpeech": "noun",
        "meaning": "a particular attitude or way of regarding something",
        "japanese": "視点、観点",
        "example": "Share your personal perspective during discussion.",
        "helpExplanation": "自分の考えや見解のことです。"
      },
      {
        "word": "analysis_w30",
        "partOfSpeech": "noun",
        "meaning": "detailed examination of elements or structure",
        "japanese": "分析、考察",
        "example": "Analyze the reading passage carefully.",
        "helpExplanation": "論理的に整理・分析することです。"
      },
      {
        "word": "practice_w30",
        "partOfSpeech": "verb",
        "meaning": "perform an activity regularly to improve",
        "japanese": "練習する",
        "example": "Practice speaking aloud with your partner.",
        "helpExplanation": "声に出して練習することです。"
      },
      {
        "word": "feedback_w30",
        "partOfSpeech": "noun",
        "meaning": "helpful advice or evaluation on performance",
        "japanese": "フィードバック",
        "example": "Instructor feedback guides your pronunciation.",
        "helpExplanation": "指導員からのアドバイスです。"
      },
      {
        "word": "dialogue_w30",
        "partOfSpeech": "noun",
        "meaning": "conversation between two or more people",
        "japanese": "対話、ダイアログ",
        "example": "Prepare your role-play script on Wednesday.",
        "helpExplanation": "役割を演じる対話文です。"
      },
      {
        "word": "synthesis_w30",
        "partOfSpeech": "noun",
        "meaning": "combining ideas into a connected whole",
        "japanese": "統合、まとめ",
        "example": "Synthesize your weekly learning on Thursday.",
        "helpExplanation": "一週間の学びを統合することです。"
      }
    ],
    "schedule": {
      "monday": {
        "type": "self_study_knowledge",
        "title": "Monday Self-Study: Advanced Capstone Presentation & Graduation Knowledge & Comprehension",
        "focus": "Target Vocabulary (8–12 Words) + Audio Listening & Reading Passage",
        "audioUrl": "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
        "transcript": "Speaker A: Welcome to Week 30 of Room 305 Academy! Today we explore Advanced Capstone Presentation & Graduation.\nSpeaker B: That sounds fascinating! Let's examine the main concepts and practice key expressions.",
        "transcriptJapanese": "スピーカーA: 305アカデミーの第30週へようこそ！今日は「Advanced Capstone Presentation & Graduation」を探求します。\nスピーカーB: とても興味深いですね！主要な概念を検討し、キー表現を練習しましょう。",
        "readingPassage": "In Week 30, students focus on Advanced Capstone Presentation & Graduation. By examining real-world contexts, learners build confidence to express ideas clearly.",
        "readingPassageJapanese": "第30週では、生徒は「Advanced Capstone Presentation & Graduation」に焦点を当てます。現実的な文脈を学習することで、クリアに意見を表現する自信を育みます。",
        "quizTitle": "Monday Vocabulary & Comprehension Quiz",
        "comprehensionQuestions": [
          {
            "q": "What is the primary topic of Week 30?",
            "options": [
              "Advanced Capstone Presentation & Graduation",
              "General Grammar",
              "Unrelated Topic",
              "Free Conversation"
            ],
            "correct": 0
          },
          {
            "q": "What is the main goal of Monday self-study?",
            "options": [
              "Knowledge & Comprehension",
              "Live Debate",
              "Final Exam",
              "No Study"
            ],
            "correct": 0
          }
        ],
        "outputTask": "Complete Monday comprehension quiz & submit reflection notes."
      },
      "tuesday": {
        "type": "online_class_practice",
        "title": "Tuesday Online Class (30m): Interactive Practice on Advanced Capstone Presentation & Graduation",
        "focus": "Live Discussion on Monday’s Reading/Listening + Pronunciation Q&A",
        "classTime": "Tuesday 19:00 - 19:30 (JST)",
        "meetingLink": "https://zoom.us/j/room305-tuesday-class",
        "liveActivities": [
          "1. Live interactive discussion on Monday’s reading: \"Advanced Capstone Presentation & Graduation\".",
          "2. Answer comprehension questions using target vocabulary.",
          "3. Receive instructor feedback on pronunciation and phrasing."
        ],
        "quizTitle": "Tuesday Live Class Practice Quiz",
        "questions": [
          {
            "q": "Which expression is best for asking about advanced capstone presentation & graduation in a conversation?",
            "options": [
              "\"Could you tell me more about Advanced Capstone Presentation & Graduation?\"",
              "\"I do not know.\"",
              "\"No comment.\"",
              "\"Goodbye.\""
            ],
            "correct": 0
          },
          {
            "q": "During live class, what is the best strategy if you need a moment to think?",
            "options": [
              "Use a polite filler like \"Let me see...\"",
              "Remain silent for 5 minutes",
              "Leave the call",
              "Speak in Japanese only"
            ],
            "correct": 0
          }
        ],
        "outputTask": "Complete Tuesday practice quiz & log instructor feedback."
      },
      "wednesday": {
        "type": "self_study_writing",
        "title": "Wednesday Self-Study: Writing & Speaking Prep for Advanced Capstone Presentation & Graduation",
        "focus": "Grammar Review + Thursday Role-Play Assignment & Script Draft",
        "grammarPoint": "Grammar Pattern for Advanced Capstone Presentation & Graduation",
        "grammarExplanation": "Review target sentence structures to communicate deliver final capstone project presentation and receive completion diploma.",
        "grammarJapaneseHelp": "「Advanced Capstone Presentation & Graduation」に関する効果的な英文作成のための文法パターンを復習します。",
        "scaffoldedSentence": "Regarding Advanced Capstone Presentation & Graduation, I believe that _____ because _____.",
        "thursdayTaskAssignment": "Prepare a 2-minute script or outline for Thursday's live role-play on Advanced Capstone Presentation & Graduation.",
        "quizTitle": "Wednesday Grammar & Sentence Structure Quiz",
        "questions": [
          {
            "q": "Which conjunction logically connects a main point with a reason in Advanced Capstone Presentation & Graduation?",
            "options": [
              "because",
              "although",
              "unless",
              "neither"
            ],
            "correct": 0
          },
          {
            "q": "What is the goal of Wednesday self-study?",
            "options": [
              "Writing assignment & Thursday script preparation",
              "Just watching video",
              "Skipping study",
              "Final graduation"
            ],
            "correct": 0
          }
        ],
        "outputTask": "Complete Wednesday grammar quiz & submit script draft."
      },
      "thursday": {
        "type": "online_class_synthesis",
        "title": "Thursday Online Class (30m): Role-Play & Synthesis (Advanced Capstone Presentation & Graduation)",
        "focus": "Execute Wednesday’s Script + Unscripted Q&A + Weekly Master Quiz",
        "classTime": "Thursday 19:00 - 19:30 (JST)",
        "meetingLink": "https://zoom.us/j/room305-thursday-class",
        "rolePlayActivities": [
          "1. Execute role-plays or presentations using Wednesday's prepared script.",
          "2. Engage in unscripted follow-up Q&A with instructor and classmates.",
          "3. Complete Weekly Master Quiz & Self-Reflection."
        ],
        "quizTitle": "Thursday Weekly Master Synthesis Quiz",
        "questions": [
          {
            "q": "In Week 30, what is key to successful role-play execution?",
            "options": [
              "Applying Wednesday script & target vocabulary in conversation",
              "Reading silently",
              "Ignoring partner",
              "Only speaking Japanese"
            ],
            "correct": 0
          },
          {
            "q": "How do you express diplomatic disagreement or alternative views on Advanced Capstone Presentation & Graduation?",
            "options": [
              "\"I understand your point, but from my perspective...\"",
              "\"You are wrong.\"",
              "\"I disagree stop talking.\"",
              "\"No way.\""
            ],
            "correct": 0
          },
          {
            "q": "What completes the 2+2 weekly learning cycle on Thursday?",
            "options": [
              "Live role-play, Master Quiz, and Teacher Evaluation",
              "Starting Week 1 again",
              "No output",
              "Writing only"
            ],
            "correct": 0
          }
        ],
        "outputTask": "Complete Thursday Master Quiz, log teacher evaluation & self-reflection."
      }
    }
  }
];
