// Mobile menu toggle
const toggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
toggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(anchor.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
    if (navLinks.classList.contains('open')) {
      navLinks.classList.remove('open');
    }
  });
});

// Typewriter settings
const words_pt = ["Desenvolvedor Backend", "Java", "Python"];
const words_en = ["Backend Developer", "Java", "Python"];
let words = words_pt;
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingSpeed = 80;
const deletingSpeed = 40;
const pauseBetween = 800;
const txtEl = document.getElementById("typing-text");

// Typewriter function
function type() {
  const current = words[wordIndex];
  if (!isDeleting) {
    txtEl.textContent = current.slice(0, charIndex + 1);
    charIndex++;
    if (charIndex === current.length) {
      isDeleting = true;
      setTimeout(type, pauseBetween);
    } else {
      setTimeout(type, typingSpeed);
    }
  } else {
    txtEl.textContent = current.slice(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      setTimeout(type, typingSpeed);
    } else {
      setTimeout(type, deletingSpeed);
    }
  }
}

// Translations dictionary
const translations = {
  pt: {
    nav_about:     "Sobre",
    nav_projects:  "Projetos",
    nav_skills:    "Skills",
    nav_contact:   "Contato",
    greeting:      "Olá, eu sou",
    hero_button:   "Vamos conversar",
    about_title:   "Sobre mim",
    about_text:    "Estou me formando em Ciência da Computação e quero me especializar em desenvolvimento backend. Tenho 3(três) anos de experiência com desenvolvimento de software em Python/Flask e estou iniciando minha jornada em Java.",
    projects_title:"Projetos",
    project1_title:"Tinder Literário",
    project1_desc: "Aplicação de um algoritmo de recomendação para troca de livros usados.",
    project1_desc_stack: "Tecnologias: Flask, Python, ML",
    skills_title:  "Skills",
    contact_title: "Contato",
    contact_text:  "Vamos trabalhar juntos? Envie um e-mail:",
    contact_button:"Enviar mensagem",
    footer_text:   "© 2025 Pedro Rocha. Todos os direitos reservados."
  },
  en: {
    nav_about:     "About",
    nav_projects:  "Projects",
    nav_skills:    "Skills",
    nav_contact:   "Contact",
    greeting:      "Hello, I'm",
    hero_button:   "Let's talk",
    about_title:   "About me",
    about_text:    "I am graduating in Computer Science and I want to specialize in backend development. I have 3 (three) years of experience with software development in Python/Flask and I am starting my journey in Java.",
    projects_title:"Projects",
    project1_title:"Literary Tinder",
    project1_desc: "Application of a recommendation algorithm for used book exchange.",
    project1_desc_stack: "Stack: Flask, Python, ML",
    skills_title:  "Skills",
    contact_title: "Contact",
    contact_text:  "Interested in working together? Send an email:",
    contact_button:"Send message",
    footer_text:   "© 2025 Pedro Rocha. All rights reserved."
  }
};

// Update all static texts
function updateStaticText(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
}

// Language toggle
let currentLang = "pt";
const langToggle = document.getElementById("lang-toggle");
langToggle.addEventListener("click", () => {
  currentLang = currentLang === "pt" ? "en" : "pt";
  langToggle.textContent = currentLang === "pt" ? "EN" : "PT";
  updateStaticText(currentLang);
  words = currentLang === "pt" ? words_pt : words_en;
  wordIndex = 0;
  charIndex = 0;
  isDeleting = false;
});

// Inicialização
document.addEventListener("DOMContentLoaded", () => {
  updateStaticText(currentLang);
  setTimeout(type, typingSpeed);
});
