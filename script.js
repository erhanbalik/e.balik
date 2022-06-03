const langData = {
    'en': {
        'whoami': 'Who am I?',
        'skilss': 'Skills',
        'contact': "Let's Contact",
        'projects': 'Projects',
    },
    'tr': {
        'whoami': 'Ben kimim?',
        'skilss': 'Yetenekler',
        'contact': 'Iletisim',
        'projects': 'Projeler',
    }
}
// Theme Toggle
const modeBtn = document.querySelector('.mode-changer');
// Language Toggle
const langEl = document.querySelector('.dropdown-items');
const link = document.querySelectorAll('a');
const whoEl = document.querySelector('.whoami');
const skilssEl = document.querySelector('.skilss');
const projEl = document.querySelector('.projects');
const contEl = document.querySelector('.contact');
const langText = document.querySelector('.lang-text');

link.forEach(el => {
    el.addEventListener('click', () => {
        langEl.querySelector('.active').classList.remove('active');
        el.classList.add('active');

        const attr = el.getAttribute('lang');
        whoEl.textContent = langData[attr].whoami;
        skilssEl.textContent = langData[attr].skilss;
        projEl.textContent = langData[attr].projects;
        contEl.textContent = langData[attr].contact;
        langText.textContent = attr.toUpperCase();
    });
});

//  Theme Toggle Function
modeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});
// Theme Icon Toggle Function
function toggleModeIcon (x) {
    x.classList.toggle('fa-sun');
}