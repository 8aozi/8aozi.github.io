const root = document.documentElement;
const toggle = document.querySelector('.theme-toggle');
const languageButtons = document.querySelectorAll('.language-button');
const translations = {
  zh: { navAbout:'关于', navWork:'项目', navNotes:'动态', navJourney:'经历', heroIntro:'你好，我是你的名字，一名华中科技大学计算机学院大数据专业本科生。我喜欢把复杂的问题拆开，再用清晰、可靠的方式重新组合。', heroButton:'查看我的项目', contactMe:'联系我', availability:'目前开放合作与研究机会', aboutText:'我是华中科技大学计算机学院大数据专业本科生，研究兴趣集中在多模态模型、智能体和机器学习系统。对我而言，好的研究不只是一篇论文，也应该能被复现、被解释，最终走进真实世界。', news1:'加入 ONE Lab，开始参与多模态与智能体方向的研究。', news2:'持续学习大数据、机器学习与科研方法。', news3:'进入华中科技大学计算机学院，开始本科阶段学习。', eduDesc:'计算机学院 · 大数据专业 · 本科生', labDesc:'实验室研究 · 多模态模型与智能体方向', backTop:'回到顶部 ↑' },
  en: { navAbout:'About', navWork:'Work', navNotes:'Notes', navJourney:'Journey', heroIntro:'Hi, I am Your Name, an undergraduate in Big Data at the School of Computer Science, Huazhong University of Science and Technology. I like taking complex questions apart and putting them back together clearly.', heroButton:'View my work', contactMe:'Get in touch', availability:'Open to research and collaborations', aboutText:'I study Big Data at HUST. My interests include multimodal models, AI agents, and machine learning systems. Good research should be reproducible, explainable, and useful in the real world.', news1:'Joined ONE Lab to work on multimodal models and AI agents.', news2:'Learning Big Data, machine learning, and research methods.', news3:'Started my undergraduate study at the School of Computer Science, HUST.', eduDesc:'School of Computer Science · Big Data · Undergraduate', labDesc:'Lab research · Multimodal models and AI agents', backTop:'Back to top ↑' }
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
