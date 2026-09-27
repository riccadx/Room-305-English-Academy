export const DEFAULT_USERS = [
  {
    id: 'usr_teacher_1',
    name: 'Ms. Sarah Jenkins',
    email: 'sarah.jenkins@lingua.edu',
    role: 'teacher',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
    title: 'Senior English Educator',
    department: 'Humanities & Linguistics'
  },
  {
    id: 'usr_learner_1',
    name: 'Alex Rivera',
    email: 'alex.rivera@student.edu',
    role: 'learner',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    level: 'Intermediate (B2)',
    streak: 5,
    xp: 420
  }
];

export const DEFAULT_LESSONS = [
  {
    id: 'les_1',
    title: 'Mastering Present Perfect vs. Past Simple in Professional Contexts',
    module: 'Grammar',
    level: 'Intermediate',
    estimatedTime: '15 min',
    authorId: 'usr_teacher_1',
    authorName: 'Ms. Sarah Jenkins',
    createdAt: '2026-09-20',
    published: true,
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    pdfAttachment: {
      name: 'Present_Perfect_vs_Past_Simple_Cheatsheet.pdf',
      size: '1.2 MB',
      downloadUrl: '#download-pdf-1'
    },
    content: `
      <h2>1. Introduction: Life Experiences vs. Completed Historical Events</h2>
      <p>In business and academic English, selecting between the <strong>Present Perfect</strong> and <strong>Past Simple</strong> alters how your listener perceives the relevance of past actions to the current situation.</p>
      
      <div className="callout callout-tip">
        <strong>Golden Rule:</strong> If the time period is <em>finished</em> (e.g. yesterday, last year, in 2024), use <strong>Past Simple</strong>. If the time frame is <em>ongoing</em> or the result impacts the present moment (e.g. today, this month, so far), use <strong>Present Perfect</strong>.
      </div>

      <h3>Key Comparisons with Real-World Examples:</h3>
      <ul>
        <li><strong>Past Simple (Specific Past Time):</strong> "Our team <em>launched</em> the campaign last Tuesday." <em>(Finished time marker: last Tuesday)</em></li>
        <li><strong>Present Perfect (Unspecified / Ongoing Impact):</strong> "Our team <em>has launched</em> three international campaigns this quarter." <em>(Ongoing timeframe: this quarter)</em></li>
      </ul>

      <h2>2. Key Signal Words to Memorize</h2>
      <table className="lesson-table">
        <thead>
          <tr>
            <th>Grammar Tense</th>
            <th>Signal Words & Time Phrases</th>
            <th>Sample Sentence</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Past Simple</strong></td>
            <td>yesterday, last week, ago, in 2019, at 3 PM</td>
            <td>I <em>received</em> your proposal yesterday afternoon.</td>
          </tr>
          <tr>
            <td><strong>Present Perfect</strong></td>
            <td>already, yet, just, so far, recently, since 2022</td>
            <td>We <em>have already finalized</em> the Q3 budget report.</td>
          </tr>
        </tbody>
      </table>

      <h2>3. Common Pitfalls to Avoid</h2>
      <p>Do <strong>not</strong> combine specific past time markers with the Present Perfect:</p>
      <p className="incorrect-text">❌ Incorrect: <s>I have sent the email yesterday morning.</s></p>
      <p className="correct-text">✅ Correct: I sent the email yesterday morning. OR I have already sent the email.</p>
    `
  },
  {
    id: 'les_2',
    title: 'High-Impact Phrases for Business Presentations & Pitching',
    module: 'Business',
    level: 'Advanced',
    estimatedTime: '20 min',
    authorId: 'usr_teacher_1',
    authorName: 'Ms. Sarah Jenkins',
    createdAt: '2026-09-22',
    published: true,
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    pdfAttachment: {
      name: 'Executive_Presentation_Vocabulary.pdf',
      size: '2.4 MB',
      downloadUrl: '#download-pdf-2'
    },
    content: `
      <h2>1. Structuring Your Presentation Opening</h2>
      <p>Captivating an audience within the first 60 seconds requires confident transitions and formal framing.</p>
      
      <h3>The Hook & Purpose Statement:</h3>
      <p>Instead of saying "Today I'm gonna talk about revenue," elevate your tone with these executive structures:</p>
      <ul>
        <li><em>"On behalf of the strategy team, I'd like to extend a warm welcome. Today, I'm going to walk you through our product roadmap."</em></li>
        <li><em>"What I intend to highlight today is the unprecedented shift in customer demographics."</em></li>
      </ul>

      <div className="callout callout-info">
        <strong>Vocabulary Focus:</strong> <em>"Walk you through"</em> means to guide someone step-by-step through a complex idea or document.
      </div>

      <h2>2. Navigating Transitions Elegantly</h2>
      <p>Use signposting language to keep stakeholders focused as you move from one slide to the next:</p>
      <ul>
        <li><strong>Moving to a new point:</strong> <em>"Turning our attention now to key market drivers..."</em></li>
        <li><strong>Elaborating on data:</strong> <em>"This chart underscores a substantial 24% increase in user retention."</em></li>
        <li><strong>Handling interruptions:</strong> <em>"That's a pertinent question; if you don't mind, I'll address that during the Q&A session."</em></li>
      </ul>
    `
  },
  {
    id: 'les_3',
    title: 'Essential Phrasal Verbs for Everyday Conversation & Meetings',
    module: 'Vocabulary',
    level: 'Beginner',
    estimatedTime: '12 min',
    authorId: 'usr_teacher_1',
    authorName: 'Ms. Sarah Jenkins',
    createdAt: '2026-09-25',
    published: true,
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
    videoUrl: '',
    pdfAttachment: {
      name: '50_Essential_Phrasal_Verbs.pdf',
      size: '850 KB',
      downloadUrl: '#download-pdf-3'
    },
    content: `
      <h2>1. Understanding Phrasal Verbs</h2>
      <p>Phrasal verbs combine a standard verb with a preposition or adverb (e.g., <em>bring + up</em> = bring up). The combined meaning is often completely different from the individual words!</p>
      
      <h2>2. Top 5 Daily Workplace Phrasal Verbs</h2>
      <ol>
        <li><strong>Bring up</strong> (to introduce a topic for discussion)
          <br /><em>Example:</em> "She brought up the design issue during our morning standup."
        </li>
        <li><strong>Call off</strong> (to cancel an event or appointment)
          <br /><em>Example:</em> "Due to severe weather, management decided to call off the outdoor conference."
        </li>
        <li><strong>Follow up</strong> (to pursue or check in on a previous communication)
          <br /><em>Example:</em> "I will follow up with the client by tomorrow afternoon."
        </li>
        <li><strong>Figure out</strong> (to understand or solve a problem)
          <br /><em>Example:</em> "We need to figure out why the app is lagging."
        </li>
        <li><strong>Run out of</strong> (to exhaust the available supply of something)
          <br /><em>Example:</em> "We ran out of printer paper right before the meeting."
        </li>
      </ol>
    `
  }
];

export const DEFAULT_QUIZZES = [
  {
    id: 'quiz_1',
    lessonId: 'les_1',
    title: 'Present Perfect vs. Past Simple Comprehension Test',
    questions: [
      {
        id: 'q1_1',
        questionText: 'Which sentence correctly uses the Past Simple for a finished time frame?',
        options: [
          'I have visited Paris last summer with my family.',
          'I visited Paris last summer with my family.',
          'I had been visiting Paris last summer.',
          'I visit Paris last summer.'
        ],
        correctAnswer: 1, // B
        explanation: 'Because "last summer" is a finished time period, we must use the Past Simple ("visited") rather than the Present Perfect ("have visited").'
      },
      {
        id: 'q1_2',
        questionText: 'Complete the sentence: "The project manager ________ the quarterly report yet."',
        options: [
          'didn\'t finish',
          'hasn\'t finished',
          'wasn\'t finishing',
          'don\'t finish'
        ],
        correctAnswer: 1, // B
        explanation: 'The keyword "yet" indicates an action that is expected in an ongoing timeframe up to the present moment, requiring the negative Present Perfect ("hasn\'t finished").'
      },
      {
        id: 'q1_3',
        questionText: 'Choose the correct option: "She ________ in New York for 5 years now (and still lives there)."',
        options: [
          'lived',
          'was living',
          'has lived',
          'lives ago'
        ],
        correctAnswer: 2, // C
        explanation: 'For a state that began in the past and continues up to the present moment, we use the Present Perfect ("has lived").'
      }
    ]
  },
  {
    id: 'quiz_2',
    lessonId: 'les_2',
    title: 'Business Presentation & Pitching Terminology Quiz',
    questions: [
      {
        id: 'q2_1',
        questionText: 'What does the phrasal idiom "walk someone through something" mean in a presentation?',
        options: [
          'To physically pace around the room while explaining.',
          'To guide someone step-by-step through details or slides.',
          'To end a meeting abruptly.',
          'To ask the audience to take notes.'
        ],
        correctAnswer: 1,
        explanation: '"Walk someone through" is a common professional idiom for carefully explaining a document, process, or presentation slide step-by-step.'
      },
      {
        id: 'q2_2',
        questionText: 'Which phrase is most appropriate when transitioning to data on a new slide?',
        options: [
          'Look at this picture now.',
          'Turning our attention now to key market drivers...',
          'I am done with the last page.',
          'Moving on because time is running out.'
        ],
        correctAnswer: 1,
        explanation: '"Turning our attention now to..." is formal signposting language used in executive presentations.'
      }
    ]
  },
  {
    id: 'quiz_3',
    lessonId: 'les_3',
    title: 'Workplace Phrasal Verbs Quick Check',
    questions: [
      {
        id: 'q3_1',
        questionText: 'If a meeting is "called off", what happened?',
        options: [
          'It was rescheduled to a later hour.',
          'It was cancelled completely.',
          'It was extended by 30 minutes.',
          'It was recorded for later viewing.'
        ],
        correctAnswer: 1,
        explanation: '"Call off" is a phrasal verb meaning to cancel an event.'
      },
      {
        id: 'q3_2',
        questionText: 'Fill in the blank: "I need to ________ with the supplier regarding our shipment status."',
        options: [
          'follow up',
          'bring up',
          'run out',
          'call off'
        ],
        correctAnswer: 0,
        explanation: '"Follow up" means to check in or pursue a previous task or inquiry.'
      }
    ]
  }
];

export const DEFAULT_PROGRESS = {
  usr_learner_1: {
    les_1: { completed: true, completedAt: '2026-09-26T14:30:00Z', quizScore: 3, maxScore: 3, attempts: 1 },
    les_3: { completed: true, completedAt: '2026-09-27T08:15:00Z', quizScore: 2, maxScore: 2, attempts: 1 }
  }
};
