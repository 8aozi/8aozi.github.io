const root = document.documentElement;
const toggle = document.querySelector('.theme-toggle');
const languageButtons = document.querySelectorAll('.language-button');

const translations = {
  zh: {
    pageTitle: '刘光悦 · 个人主页',
    name: '刘光悦',
    navAbout: '关于',
    navWork: '项目',
    navNotes: '动态',
    navJourney: '经历',
    heroTitle: '把好奇心，<em>做成</em><br />可以被使用的东西。',
    heroIntro: '你好，我是刘光悦，一名华中科技大学计算机学院 24 级大数据专业本科生。',
    heroButton: '查看我的项目',
    contactMe: '联系我',
    availability: '希望与更多导师合作学习',
    aboutTitle: '研究让我保持<br /><em>开放与具体。</em>',
    aboutText: '我是华中科技大学计算机学院 24 级大数据专业本科生，研究兴趣集中在 MLLM、Human-AI Interaction 等方向，仍在持续探索。',
    interest1: '多模态大语言模型',
    interest2: 'Human-AI Interaction',
    interest3: 'AI Agent',
    interest4: '机器学习',
    workTitle: '最近在做的事',
    projectMeta1: '研究项目 · 2025',
    projectTitle1: '让多模态模型<br />学会解释自己',
    projectDesc1: '探索多模态模型理解、生成与交互能力的研究项目。',
    projectMeta2: '实验室 · 2025',
    projectTitle2: 'Agent Lab',
    projectDesc2: '记录智能体实验、失败样本与可复用工具。',
    projectMeta3: '写作 · 持续更新',
    projectTitle3: '开放笔记',
    projectDesc3: '关于研究、设计和日常观察的短文与阅读记录。',
    notesTitle: '保持移动，<br /><em>保持记录。</em>',
    news1: '进入华中科技大学计算机学院，开始本科阶段学习。',
    news2: '加入 ONE Lab，开始参与多模态与智能体方向的研究。',
    news3: '两篇与学长合作的论文正在参加 ICLR 2027 评审。',
    journeyTitle: '走过的地方',
    journeySub: '教育 · 研究 · 合作',
    eduDesc: '计算机学院 · 大数据专业 · 本科生',
    wuhan: '武汉，中国',
    labDesc: '实验室研究 · 多模态模型与智能体方向',
    research: '研究',
    contactTitle: '有想法，<em>就写信。</em>',
    backTop: '回到顶部 ↑'
  },
  en: {
    pageTitle: 'Guangyue Liu · Personal Homepage',
    name: 'Guangyue Liu',
    navAbout: 'About',
    navWork: 'Work',
    navNotes: 'Notes',
    navJourney: 'Journey',
    heroTitle: 'Turning curiosity into<br /><em>things people can use.</em>',
    heroIntro: 'Hi, I am Guangyue Liu, a Big Data undergraduate in the School of Computer Science at Huazhong University of Science and Technology.',
    heroButton: 'View my work',
    contactMe: 'Get in touch',
    availability: 'Open to learning with more advisors',
    aboutTitle: 'Research keeps me<br /><em>open and concrete.</em>',
    aboutText: 'I am a Big Data undergraduate at HUST. My interests include multimodal large language models and human-AI interaction, and I am still exploring.',
    interest1: 'Multimodal LLMs',
    interest2: 'Human-AI Interaction',
    interest3: 'AI Agents',
    interest4: 'Machine Learning',
    workTitle: 'What I am working on',
    projectMeta1: 'Research · 2025',
    projectTitle1: 'Helping multimodal<br />models explain themselves',
    projectDesc1: 'A research project exploring understanding, generation, and interaction in multimodal models.',
    projectMeta2: 'Lab · 2025',
    projectTitle2: 'Agent Lab',
    projectDesc2: 'Notes on agent experiments, failure cases, and reusable tools.',
    projectMeta3: 'Writing · Ongoing',
    projectTitle3: 'Open Notes',
    projectDesc3: 'Short pieces and reading notes on research, design, and everyday observations.',
    notesTitle: 'Keep moving,<br /><em>keep notes.</em>',
    news1: 'Started my undergraduate study at the School of Computer Science, HUST.',
    news2: 'Joined ONE Lab to work on multimodal models and AI agents.',
    news3: 'Two papers co-authored with senior students are under review for ICLR 2027.',
    journeyTitle: 'The journey so far',
    journeySub: 'Education · Research · Collaboration',
    eduDesc: 'School of Computer Science · Big Data · Undergraduate',
    wuhan: 'Wuhan, China',
    labDesc: 'Lab research · Multimodal models and AI agents',
    research: 'Research',
    contactTitle: 'Have an idea?<br /><em>Write to me.</em>',
    backTop: 'Back to top ↑'
  }
};

function setLanguage(lang) {
  const selectedLanguage = translations[lang] ? lang : 'zh';

  document.documentElement.lang = selectedLanguage === 'zh' ? 'zh-CN' : 'en';

  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const value = translations[selectedLanguage][element.dataset.i18n];

    if (value !== undefined) {
      element.innerHTML = value;
    }
  });

  languageButtons.forEach((button) => {
    button.classList.toggle('active', button.dataset.lang === selectedLanguage);
  });

  localStorage.setItem('language', selectedLanguage);
}

languageButtons.forEach((button) => {
  button.addEventListener('click', () => setLanguage(button.dataset.lang));
});

setLanguage(localStorage.getItem('language') || 'zh');

const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'dark') {
  root.dataset.theme = 'dark';
  toggle.setAttribute('aria-pressed', 'true');
}

toggle.addEventListener('click', () => {
  const dark = root.dataset.theme !== 'dark';

  if (dark) {
    root.dataset.theme = 'dark';
  } else {
    delete root.dataset.theme;
  }

  toggle.setAttribute('aria-pressed', String(dark));
  localStorage.setItem('theme', dark ? 'dark' : 'light');
});
