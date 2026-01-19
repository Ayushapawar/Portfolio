// Scroll Reveal Animation
const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.15 });

reveals.forEach(r => observer.observe(r));

// Contact Form Alert
document.getElementById("contactForm").addEventListener("submit", e => {
  e.preventDefault();
  alert("Thanks for reaching out! I’ll contact you soon 😊");
});
// Typing Animation
const textArray = [
    "Computer Engineer",
  "Full Stack Developer"
];

let typingIndex = 0;
let charIndex = 0;
const typingElement = document.querySelector(".typing");

function typeText() {
  if (charIndex < textArray[typingIndex].length) {
    typingElement.textContent += textArray[typingIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeText, 100);
  } else {
    setTimeout(eraseText, 1500);
  }
}

function eraseText() {
  if (charIndex > 0) {
    typingElement.textContent =
      textArray[typingIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseText, 60);
  } else {
    typingIndex = (typingIndex + 1) % textArray.length;
    setTimeout(typeText, 400);
  }
}

document.addEventListener("DOMContentLoaded", typeText);
