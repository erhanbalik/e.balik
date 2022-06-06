
// Theme Toggle
const modeBtn = document.querySelector('.mode-changer');
// Language Toggle
const engEl = document.getElementById('eng');
const turEl = document.getElementById('tur');
const whoEl = document.querySelector('.whoami');
const whoTitle = document.querySelector('.whoami-title');
const whoamiDesc = document.querySelector('.whoami-desc');
const skilssEl = document.querySelector('.skilss');
const projEl = document.querySelector('.projects');
const contEl = document.querySelector('.contact');
const langText = document.querySelector('.lang-text');
const skilssTitle = document.querySelector('.skilss-title');
const projectTitle = document.querySelector('.project-title');
const contactTitle = document.querySelector('.contact-title');

// Scroll to Top Function
topBtn = document.getElementById("scrollBtn");
window.onscroll = function() {scrollFunction()};

function scrollFunction(){
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
}

function scrollTopFuntion() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
/* SMALL SCREEN MENU OPENER */
const menuIcon = document.querySelector('.menu-icon');
menuIcon.addEventListener('click', () => {
    document.querySelector('.smallmenuList').classList.toggle('menuShow');
});

function toggleMenuIcon (x){
    x.classList.toggle('fa-indent');
    x.classList.toggle('fa-outdent');

}

// Slide show effect function
let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("slide");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 3000);
}

// Language Toggle Function

engEl.addEventListener('click', () => {
        const attr = engEl.getAttribute('lang');
        whoEl.textContent = langData[attr].whoami;
        whoTitle.textContent = langData[attr].whoami;
        whoamiDesc.textContent = langData[attr].whoamiDesc;
        skilssEl.textContent = langData[attr].skilss;
        skilssTitle.textContent = langData[attr].skilss;
        projEl.textContent = langData[attr].projects;
        projectTitle.textContent = langData[attr].projects;
        contEl.textContent = langData[attr].contact;
        contactTitle.textContent = langData[attr].contact;
    });

turEl.addEventListener('click', () => {
        const attr = turEl.getAttribute('lang');
        whoEl.textContent = langData[attr].whoami;
        whoTitle.textContent = langData[attr].whoami;
        whoamiDesc.textContent = langData[attr].whoamiDesc;
        skilssEl.textContent = langData[attr].skilss;
        skilssTitle.textContent = langData[attr].skilss;
        projEl.textContent = langData[attr].projects;
        projectTitle.textContent = langData[attr].projects;
        contEl.textContent = langData[attr].contact;
        contactTitle.textContent = langData[attr].contact;
    });


//  Theme Toggle Function
modeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});
// Theme Icon Toggle Function
function toggleModeIcon (x) {
    x.classList.toggle('fa-sun');
}
