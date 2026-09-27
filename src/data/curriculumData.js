// 30-Week Learning Pathway Data for Room-305-English-Academy
// beginner (Weeks 1-10), Intermediate (Weeks 11-20), Advanced (Weeks 21-30)

export const CURRICULUM_LEVELS = [
  { id: 'beginner', name: 'Beginner', weeks: 'Weeks 1–10', color: 'indigo', desc: 'Build basic foundations, everyday vocabulary & confidence' },
  { id: 'intermediate', name: 'Intermediate', weeks: 'Weeks 11–20', color: 'emerald', desc: 'Express opinions, converse naturally & write organized paragraphs' },
  { id: 'advanced', name: 'Advanced', weeks: 'Weeks 21–30', color: 'violet', desc: 'Master academic, professional, debate & presentation skills' }
];

export const WEEKLY_CURRICULUM = [
  // --- BEGINNER LEVEL (WEEKS 1 - 10) ---
  {
    weekNumber: 1,
    level: 'beginner',
    title: 'Introductions & Getting to Know People',
    goal: 'Introduce yourself confidently, state your background, and ask basic questions.',
    vocabulary: [
      {
        word: 'recommend',
        partOfSpeech: 'verb',
        meaning: 'to suggest something as a good choice',
        japanese: 'おすすめする',
        example: 'Could you recommend a good local restaurant near the academy?',
        helpExplanation: '何か良いものを提案・推薦する時に使います。'
      },
      {
        word: 'unfamiliar',
        partOfSpeech: 'adjective',
        meaning: 'not knowing or recognizing something well',
        japanese: '詳しくない、なじみがない',
        example: 'The international student was unfamiliar with the city subway system.',
        helpExplanation: '場所やルールに慣れていない状態を表します。'
      },
      {
        word: 'exchange student',
        partOfSpeech: 'noun phrase',
        meaning: 'a student who studies abroad at a partner institution',
        japanese: '交換留学生',
        example: 'Ken is an exchange student studying linguistics in Tokyo.',
        helpExplanation: '海外の提携校から来ている留学生のことです。'
      },
      {
        word: 'hometown',
        partOfSpeech: 'noun',
        meaning: 'the town or city where you grew up',
        japanese: '出身地、故郷',
        example: 'My hometown is Kyoto, famous for historic temples.',
        helpExplanation: '生まれ育った街や故郷を指します。'
      },
      {
        word: 'major',
        partOfSpeech: 'noun / verb',
        meaning: 'the main subject a student studies at university',
        japanese: '専攻',
        example: 'I major in International Relations.',
        helpExplanation: '大学での専門分野・専攻科目を意味します。'
      }
    ],
    schedule: {
      monday: {
        type: 'listening',
        title: 'Monday Listening: First Day at Room 305 Academy',
        instructions: 'Listen once for the main idea, then listen again for details.',
        audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
        transcript: 'Ken: Hi! I am Ken from Osaka. Is this Room 305?\nSarah: Hello Ken! Yes, welcome. I am Sarah from Toronto. Could you recommend a seat?\nKen: Sure, you can sit right here next to me!',
        transcriptJapanese: 'ケン: こんにちは！大阪出身のケンです。ここが305号室ですか？\nサラ: こんにちはケン！はい、ようこそ。トロント出身のサラです。おすすめの席はありますか？\nケン: もちろん、僕の隣の席に座ってください！',
        questions: [
          { q: 'Where is Ken from?', options: ['Tokyo', 'Osaka', 'Toronto', 'Kyoto'], correct: 1 },
          { q: 'What does Sarah ask Ken to recommend?', options: ['A textbook', 'A seat', 'A café', 'A teacher'], correct: 1 }
        ]
      },
      tuesday: {
        type: 'writing',
        title: 'Tuesday Writing: Self-Introduction Paragraph',
        grammarPoint: 'Using Present Simple for personal facts and habits',
        grammarExplanation: 'Use "I am...", "I live in...", and "I major in..." to introduce your profile clearly.',
        grammarJapaneseHelp: '「I am + 名詞/形容詞」や「I live in + 場所」を使って自分のプロフィールを表現します。',
        exercisePrompt: 'Complete the sentences below to write a short self-introduction:',
        scaffoldedSentence: 'My name is _____. I am from _____ and I like to study _____. I would like to _____ new friends in Room 305.',
        writingTaskPrompt: 'Write a 3-sentence intro introducing yourself to your international partner.'
      },
      wednesday: {
        type: 'reading',
        title: 'Wednesday Reading: Two Students Meet at Room 305',
        passage: 'Ken was a first-year student at Room 305 Academy. He was unfamiliar with the campus layout, so he arrived early. Outside the classroom, he met Sarah, an exchange student from Canada. Sarah asked him to recommend a good places to eat lunch. Ken smiled and suggested a small ramen shop near the station.',
        passageJapanese: 'ケンは305アカデミーの1年生でした。彼はキャンパスの配置に詳しくなかったので、早めに到着しました。教室の外で、カナダからの交換留学生であるサラに出会いました。サラは彼にランチのおすすめの場所を尋ねました。ケンは微笑んで駅の近くの小さなラーメン屋を提案しました。',
        rolePlayPrep: {
          roleA: 'Student A (Japanese Student): Greet the new exchange student, explain your hometown, and recommend a place to eat.',
          roleB: 'Student B (Exchange Student): Ask for directions/recommendations and share your study major.',
          usefulExpressions: [
            'Nice to meet you! Where are you from?',
            'Could you recommend a good place to...',
            'I major in...',
            'How long have you been in Japan?'
          ]
        }
      },
      thursday: {
        type: 'speaking',
        title: 'Thursday Speaking: 30-Minute Online Role-Play & Discussion',
        classTime: 'Thursday 19:00 - 19:30 (JST)',
        meetingLink: 'https://zoom.us/j/room305-speaking-class',
        discussionPrompts: [
          '1. Perform your prepared 2-minute introduction role-play with your partner.',
          '2. Ask 2 follow-up questions about their hometown or favorite food.',
          '3. Free Discussion: What is your favorite spot in Japan for foreign visitors?'
        ]
      }
    }
  },
  {
    weekNumber: 2,
    level: 'beginner',
    title: 'Daily Life & Routines',
    goal: 'Describe daily schedules, morning habits, and frequency adverbs (always, usually, rarely).',
    vocabulary: [
      {
        word: 'commute',
        partOfSpeech: 'verb / noun',
        meaning: 'to travel back and forth between home and school/work',
        japanese: '通学する、通勤する',
        example: 'I commute to Room 305 Academy by train every morning.',
        helpExplanation: '家と学校や会社を往復することを意味します。'
      },
      {
        word: 'habit',
        partOfSpeech: 'noun',
        meaning: 'something you do regularly without thinking',
        japanese: '習慣、癖',
        example: 'Drinking green tea before studying is my daily habit.',
        helpExplanation: '日常的に繰り返し行う行動や習慣です。'
      }
    ],
    schedule: {
      monday: {
        type: 'listening',
        title: 'Monday Listening: Morning Routine Comparison',
        instructions: 'Listen for frequency words like usually, always, and never.',
        audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
        transcript: 'Alex: I usually wake up at 7 AM and commute by train.\nYuki: Really? I always wake up at 6 AM to drink coffee first.',
        transcriptJapanese: 'アレックス: 私はたいてい午前7時に起きて電車で通学します。\nユウキ: 本当？ 私はいつも朝6時に起きて最初にコーヒーを飲みます。',
        questions: [
          { q: 'What time does Yuki wake up?', options: ['6 AM', '7 AM', '8 AM', '9 AM'], correct: 0 }
        ]
      },
      tuesday: {
        type: 'writing',
        title: 'Tuesday Writing: Daily Schedule Paragraph',
        grammarPoint: 'Adverbs of Frequency (Always, Usually, Sometimes, Never)',
        grammarExplanation: 'Place adverbs of frequency before the main verb (e.g., I *usually* eat breakfast).',
        grammarJapaneseHelp: '頻度を表す副詞（always, usually等）は一般動詞の前に置きます。',
        exercisePrompt: 'Write 3 sentences about your daily morning routine using adverbs of frequency.',
        scaffoldedSentence: 'In the morning, I always _____. Then I usually _____ before I commute.',
        writingTaskPrompt: 'Describe your typical weekday from morning to evening.'
      },
      wednesday: {
        type: 'reading',
        title: 'Wednesday Reading: A Day in the Life of an Academy Student',
        passage: 'Yuki starts her day at 6:30 AM. She has a 45-minute train commute to Room 305 Academy. During her commute, she reviews English vocabulary on her smartphone. After classes finish at 4 PM, she practices speaking with international classmates.',
        passageJapanese: 'ユウキは午前6時30分に一日を始めます。彼女は305アカデミーまで電車で45分かけて通学します。通学中にスマートフォンで英語の単語を復習します。午後4時に授業が終わった後、留学生のクラスメイトと会話の練習をします。',
        rolePlayPrep: {
          roleA: 'Student A: Describe your morning routine and ask Student B about their commute.',
          roleB: 'Student B: Compare your schedule with Student A and share your favorite daily habit.',
          usefulExpressions: [
            'How long is your commute?',
            'I usually wake up around...',
            'What is your favorite morning habit?'
          ]
        }
      },
      thursday: {
        type: 'speaking',
        title: 'Thursday Speaking: Schedule & Routine Exchange',
        classTime: 'Thursday 19:00 - 19:30 (JST)',
        meetingLink: 'https://zoom.us/j/room305-speaking-class',
        discussionPrompts: [
          '1. Compare your weekday routine with your speaking partner.',
          '2. Discuss: Are you a morning person or a night owl?'
        ]
      }
    }
  },
  {
    weekNumber: 3,
    level: 'beginner',
    title: 'Family, Friends & People',
    goal: 'Describe personalities, appearances, and relationships using descriptive adjectives.',
    vocabulary: [
      {
        word: 'outgoing',
        partOfSpeech: 'adjective',
        meaning: 'friendly, energetic, and enjoying being around others',
        japanese: '社交的な、明るい',
        example: 'My best friend is very outgoing and makes friends easily.',
        helpExplanation: '明るくてフレンドリーな性格を表します。'
      }
    ],
    schedule: {
      monday: {
        type: 'listening',
        title: 'Monday Listening: Describing Best Friends',
        audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
        transcript: 'Lisa: My brother is quiet, but my friend Hiro is super outgoing!',
        transcriptJapanese: 'リサ: 私の兄は静かですが、友人のヒロはとても社交的です！',
        questions: [{ q: 'Who is outgoing?', options: ['Lisa', 'Brother', 'Hiro', 'Teacher'], correct: 2 }]
      },
      tuesday: {
        type: 'writing',
        title: 'Tuesday Writing: Personality Descriptions',
        grammarPoint: 'Adjectives of Personality (Kind, Outgoing, Hardworking)',
        grammarExplanation: 'Use "He/She is [adjective]" or "They look [adjective]".',
        grammarJapaneseHelp: '性格を表す形容詞を使って身近な人を紹介します。',
        scaffoldedSentence: 'My friend is very _____ and always helps me with _____.'
      },
      wednesday: {
        type: 'reading',
        title: 'Wednesday Reading: Meeting New Friends',
        passage: 'Hiro loves introducing his friends to international visitors.',
        passageJapanese: 'ヒロは友人 海外からの訪問者に紹介するのが大好きです。',
        rolePlayPrep: {
          roleA: 'Student A: Introduce a family member or close friend.',
          roleB: 'Student B: Ask questions about their personality and hobbies.',
          usefulExpressions: ['What is your friend like?', 'Is he/she outgoing?']
        }
      },
      thursday: {
        type: 'speaking',
        title: 'Thursday Speaking: People & Relationships Roleplay',
        classTime: 'Thursday 19:00 - 19:30 (JST)',
        meetingLink: 'https://zoom.us/j/room305-speaking-class',
        discussionPrompts: ['Talk about someone you admire in your life.']
      }
    }
  },
  { weekNumber: 4, level: 'beginner', title: 'Food & Restaurants', goal: 'Order food, ask about menu items, and express dietary preferences.' },
  { weekNumber: 5, level: 'beginner', title: 'Shopping & Services', goal: 'Ask for prices, sizes, and request help at shops.' },
  { weekNumber: 6, level: 'beginner', title: 'University & Study', goal: 'Talk about school subjects, exams, and university life.' },
  { weekNumber: 7, level: 'beginner', title: 'Time, Dates & Making Plans', goal: 'Schedule appointments, invite friends, and set meetups.' },
  { weekNumber: 8, level: 'beginner', title: 'Travel & Directions', goal: 'Ask for street directions, train tickets, and hotel help.' },
  { weekNumber: 9, level: 'beginner', title: 'Hobbies & Free Time', goal: 'Share weekend activities, sports, and entertainment preferences.' },
  { weekNumber: 10, level: 'beginner', title: 'Beginner Review & Speaking Project', goal: 'Synthesize Weeks 1–9 skills in a final beginner presentation.' },

  // --- INTERMEDIATE LEVEL (WEEKS 11 - 20) ---
  {
    weekNumber: 11,
    level: 'intermediate',
    title: 'Culture & International Exchange',
    goal: 'Discuss cultural differences, customs, and etiquette politely in English.',
    vocabulary: [
      {
        word: 'custom',
        partOfSpeech: 'noun',
        meaning: 'an accepted way of behaving or doing things in a specific society',
        japanese: '風習、習慣',
        example: 'Taking off shoes at the entrance is a traditional Japanese custom.',
        helpExplanation: '国や地域固有の伝統的なマナーや生活習慣です。'
      }
    ],
    schedule: {
      monday: {
        type: 'listening',
        title: 'Monday Listening: Cultural Differences in Greetings',
        audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
        transcript: 'Emma: In Canada we usually shake hands or hug, whereas bowing is standard in Japan.',
        transcriptJapanese: 'エマ: カナダでは握手やハグをしますが、日本ではお辞儀が標準的ですね。',
        questions: [{ q: 'What greeting is standard in Japan?', options: ['Hugging', 'Bowing', 'High five', 'Waving'], correct: 1 }]
      },
      tuesday: {
        type: 'writing',
        title: 'Tuesday Writing: Explaining a Cultural Custom',
        grammarPoint: 'Contrast Connectors (Whereas, On the other hand, In contrast)',
        grammarExplanation: 'Use connectors to highlight differences between cultures.',
        grammarJapaneseHelp: '「Whereas」や「On the other hand」を使って文化の違いを比較表現します。',
        scaffoldedSentence: 'In Japan, people usually _____, whereas in Western countries, people ____.'
      },
      wednesday: {
        type: 'reading',
        title: 'Wednesday Reading: Experiencing New Cultures',
        passage: 'Navigating cultural nuances helps international students feel at home.',
        passageJapanese: '文化的なニュアンスを理解することで、留学生はリラックスして過ごせます。',
        rolePlayPrep: {
          roleA: 'Student A: Explain a Japanese tradition to an international friend.',
          roleB: 'Student B: Ask curious questions about Japanese etiquette.',
          usefulExpressions: ['In Japan, it is customary to...', 'What should I keep in mind when...']
        }
      },
      thursday: {
        type: 'speaking',
        title: 'Thursday Speaking: Cultural Exchange Roundtable',
        classTime: 'Thursday 19:30 - 20:00 (JST)',
        meetingLink: 'https://zoom.us/j/room305-speaking-class',
        discussionPrompts: ['Share a cultural custom from another country that surprised you!']
      }
    }
  },
  { weekNumber: 12, level: 'intermediate', title: 'Health & Lifestyle', goal: 'Talk about fitness, mental wellness, and healthy habits.' },
  { weekNumber: 13, level: 'intermediate', title: 'Technology & Social Media', goal: 'Debate the pros and cons of smartphones and digital apps.' },
  { weekNumber: 14, level: 'intermediate', title: 'Environment & Sustainability', goal: 'Discuss recycling, eco-friendly habits, and climate action.' },
  { weekNumber: 15, level: 'intermediate', title: 'Education & Future Goals', goal: 'Articulate career ambitions, graduate school, and personal goals.' },
  { weekNumber: 16, level: 'intermediate', title: 'Work & Career', goal: 'Practice job interview questions and workplace communication.' },
  { weekNumber: 17, level: 'intermediate', title: 'Travel Experiences & Storytelling', goal: 'Narrate past travel experiences using narrative tenses.' },
  { weekNumber: 18, level: 'intermediate', title: 'News & Current Topics', goal: 'Summarize news articles and discuss global events.' },
  { weekNumber: 19, level: 'intermediate', title: 'Giving Opinions & Agreeing/Disagreeing', goal: 'Express viewpoints diplomatically using phrases like "I see your point, but..."' },
  { weekNumber: 20, level: 'intermediate', title: 'Intermediate Review & Discussion Project', goal: 'Participate in an unscripted group panel discussion.' },

  // --- ADVANCED LEVEL (WEEKS 21 - 30) ---
  {
    weekNumber: 21,
    level: 'advanced',
    title: 'Global Issues & International Perspectives',
    goal: 'Analyze complex global topics with critical thinking and nuanced vocabulary.',
    vocabulary: [
      {
        word: 'perspective',
        partOfSpeech: 'noun',
        meaning: 'a particular attitude toward or way of regarding something; a point of view',
        japanese: '視点、観点、捉え方',
        example: 'Studying abroad gives students a broader international perspective.',
        helpExplanation: '物事を見る視点や考え方の切り口を意味します。'
      }
    ],
    schedule: {
      monday: {
        type: 'listening',
        title: 'Monday Listening: Global Economic Trends Podcast',
        audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
        transcript: 'Speaker: From a global perspective, rapid digital adoption is reshaping trade.',
        transcriptJapanese: 'スピーカー: グローバルな視点から見ると、急速なデジタルの普及が貿易を再構築しています。',
        questions: [{ q: 'What is reshaping trade?', options: ['Digital adoption', 'Agriculture', 'Tourism', 'Shipping'], correct: 0 }]
      },
      tuesday: {
        type: 'writing',
        title: 'Tuesday Writing: Persuasive Essay Draft',
        grammarPoint: 'Advanced Cohesive Devices (Furthermore, Consequently, Notwithstanding)',
        grammarExplanation: 'Structure formal academic arguments logically using cohesive transitions.',
        grammarJapaneseHelp: '論理的な論文執筆のために「Consequently」「Furthermore」等の接頭辞を活用します。',
        scaffoldedSentence: 'While some argue that _____, consequently, we must consider _____.'
      },
      wednesday: {
        type: 'reading',
        title: 'Wednesday Reading: Global Innovation Analysis',
        passage: 'Critical analysis of international perspectives fosters cross-border collaboration.',
        passageJapanese: '国際的な視点の批判的分析は、国境を越えた協力を促進します。',
        rolePlayPrep: {
          roleA: 'Student A: Present a 3-minute argument on a global challenge.',
          roleB: 'Student B: Counter with an alternative perspective and ask probing questions.',
          usefulExpressions: ['From my perspective...', 'Have you considered the economic implications of...']
        }
      },
      thursday: {
        type: 'speaking',
        title: 'Thursday Speaking: International Debate & Symposium',
        classTime: 'Thursday 20:00 - 20:30 (JST)',
        meetingLink: 'https://zoom.us/j/room305-speaking-class',
        discussionPrompts: ['Debate: Should global policies prioritize economic growth or environmental preservation?']
      }
    }
  },
  { weekNumber: 22, level: 'advanced', title: 'Leadership & Social Change', goal: 'Discuss transformative leadership and social movements.' },
  { weekNumber: 23, level: 'advanced', title: 'AI, Digital Transformation & the Future', goal: 'Debate ethics of artificial intelligence and automation in society.' },
  { weekNumber: 24, level: 'advanced', title: 'Society, Diversity & Inclusion', goal: 'Examine inclusive policies, accessibility, and cultural equity.' },
  { weekNumber: 25, level: 'advanced', title: 'Academic & Professional Communication', goal: 'Write formal emails, executive summaries, and research abstracts.' },
  { weekNumber: 26, level: 'advanced', title: 'Debate, Arguments & Critical Thinking', goal: 'Master formal debate structures, refutations, and counterarguments.' },
  { weekNumber: 27, level: 'advanced', title: 'Presentations & Public Speaking', goal: 'Deliver persuasive 5-minute keynote presentations with Q&A.' },
  { weekNumber: 28, level: 'advanced', title: 'Problem-Solving & Group Discussion', goal: 'Facilitate executive group decision-making sessions.' },
  { weekNumber: 29, level: 'advanced', title: 'Professional English & Real-World Tasks', goal: 'Simulate business negotiations and contract reviews.' },
  { weekNumber: 30, level: 'advanced', title: 'Advanced Review & Final Presentation', goal: 'Deliver final capstone project presentation and receive completion diploma.' }
];
