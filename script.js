const button = document.getElementById('language-toggle');
const page = document.documentElement;
function setLanguage(language) {
  const lang = language === 'en' ? 'en' : 'zh';
  page.lang = lang === 'zh' ? 'zh-CN' : 'en';
  document.querySelectorAll('[data-zh][data-en]').forEach(element => {
    element.textContent = element.dataset[lang];
  });
  button.textContent = lang === 'zh' ? 'EN' : '中文';
  button.setAttribute('aria-label', lang === 'zh' ? 'Switch to English' : '切换为中文');
  document.title = lang === 'zh' ? '刘光悦 (Guangyue Liu) · 个人主页' : 'Guangyue Liu (刘光悦) · Homepage';
  try { localStorage.setItem('language', lang); } catch (_) {}
}
button.addEventListener('click', () => setLanguage(page.lang === 'zh-CN' ? 'en' : 'zh'));
document.getElementById('year').textContent = new Date().getFullYear();
let savedLanguage = 'zh';
try { savedLanguage = localStorage.getItem('language') || 'zh'; } catch (_) {}
setLanguage(savedLanguage);
