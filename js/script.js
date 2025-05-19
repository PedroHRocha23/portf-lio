// === Mobile menu toggle ===
const toggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
toggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// === Smooth scroll ===
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

// === Typewriter effect ===
const words = ["Desenvolvedor Backend", "Java", "Python"];
let wordIndex    = 0;
let charIndex    = 0;
let isDeleting   = false;
const typingSpeed   = 80;   // mais rápido
const deletingSpeed = 40;
const pauseBetween  = 800;  // pausa curta entre palavras
const txtEl = document.getElementById("typing-text");

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

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(type, typingSpeed);
});
