const root = document.documentElement;
const toggle = document.querySelector('.theme-toggle');
const languageButtons = document.querySelectorAll('.language-button');
const translations = {
  zh: { navAbout:'关于', navWork:'项目', navNotes:'动态', navJourney:'经历', heroIntro:'你好，我是刘光悦，一名华中科技大学计算机学院24届大数据专业本科生。', 
    heroButton:'查看我的项目', contactMe:'联系我', availability:'希望与更多导师合作学习', 
    aboutText:'我是华中科技大学计算机学院24届大数据专业本科生，研究兴趣集中在MLLM、human-ai-interaction、探索中。', 
    news1:'进入华中科技大学计算机学院，开始本科阶段学习', 
    news2:'加入 ONE Lab，开始参与多模态与智能体方向的研究。', 
    news3:'两篇与学长合作的论文正在 ICLR 2027 评审中。', 
    eduDesc:'计算机学院 · 大数据专业 · 本科生', 
    labDesc:'实验室研究 · 多模态模型与智能体方向', 
    backTop:'回到顶部 ↑' },
  en: { navAbout:'About', navWork:'Work', 
    navNotes:'Notes', navJourney:'Journey', 
    heroIntro:'Hi, I am Your Name, an undergraduate in Big Data at the School of Computer Science, Huazhong University of Science and Technology. I like taking complex questions apart and putting them back together clearly.', 
    heroButton:'View my work', contactMe:'Get in touch', 
    availability:'Open to research and collaborations', 
    aboutText:'I study Big Data at HUST. My interests include multimodal models, AI agents, and machine learning systems. Good research should be reproducible, explainable, and useful in the real world.', 
    news1:'Started my undergraduate study at the School of Computer Science, HUST.', 
    news2:'Joined ONE Lab to work on multimodal models and AI agents.', 
    news3:'Two co-authored papers (with senior student) under review, ICLR 2027.', 
    eduDesc:'School of Computer Science · Big Data · Undergraduate', 
    labDesc:'Lab research · Multimodal models and AI agents', 
    backTop:'Back to top ↑' }
};
function setLanguage(lang) {
  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
  document.querySelectorAll('[data-i18n]').forEach((el) => { const value = translations[lang][el.dataset.i18n]; if (value) el.innerHTML = value; });
  languageButtons.forEach((button) => button.classList.toggle('active', button.dataset.lang === lang));
  localStorage.setItem('language', lang);
}
document.querySelectorAll('[data-i18n]').forEach((el) => el.dataset.i18n = el.dataset.i18n || '');
languageButtons.forEach((button) => button.addEventListener('click', () => setLanguage(button.dataset.lang)));
setLanguage(localStorage.getItem('language') || 'zh');
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') { root.dataset.theme = 'dark'; toggle.setAttribute('aria-pressed', 'true'); }
toggle.addEventListener('click', () => {
  const dark = root.dataset.theme !== 'dark';
  if (dark) root.dataset.theme = 'dark'; else delete root.dataset.theme;
  toggle.setAttribute('aria-pressed', String(dark));
  localStorage.setItem('theme', dark ? 'dark' : 'light');
});
