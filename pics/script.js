// ===== DROPDOWN TOGGLE =====
document.querySelectorAll('.dropbtn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    const dropdown = btn.nextElementSibling;
    dropdown.classList.toggle('show-dropdown');
  });
});

// Close dropdown when clicking outside
window.addEventListener('click', (e) => {
  if (!e.target.matches('.dropbtn')) {
    document.querySelectorAll('.dropdown-content').forEach(dd => {
      dd.classList.remove('show-dropdown');
    });
  }
});

// ===== TYPING EFFECT =====
const text = "Frontend Developer";
let index = 0;
const typingEl = document.getElementById("typing-text");

function typeEffect() {
  if (typingEl && index < text.length) {
    typingEl.textContent += text.charAt(index);
    index++;
    setTimeout(typeEffect, 100);
  }
}
window.onload = typeEffect;

// ===== FADE-IN ON SCROLL =====
window.addEventListener("scroll", () => {
  document.querySelectorAll(".fade-in").forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add("show");
    }
  });
});

// ===== ACTIVE NAV LINK HIGHLIGHT =====
const navLinks = document.querySelectorAll("nav ul li a");
window.addEventListener("scroll", () => {
  let fromTop = window.scrollY;
  navLinks.forEach(link => {
    const section = document.querySelector(link.hash);
    if (section &&
        section.offsetTop <= fromTop + 100 &&
        section.offsetTop + section.offsetHeight > fromTop + 100) {
      navLinks.forEach(l => l.classList.remove("active"));
      link.classList.add("active");
    }
  });
});

// ===== ABOUT SECTION ANIMATION TRIGGER =====
window.addEventListener("scroll", () => {
  const elements = document.querySelectorAll(".animate-left, .animate-right, .animate-up, .animate-bottom");
  elements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add("show-animate");
    }
  });
});


// ====================
// GALLERY MODAL LOGIC
// ====================

/// Track current slides
let slideIndex = { j: 1, f: 1, frens: 1 };

// Open modal
function openModal(category) {
  const modal = document.getElementById("modal-" + category);
  if (!modal) return;
  modal.style.display = "block";
  showSlides(1, category);
}

// Close modal
function closeModal(category) {
  const modal = document.getElementById("modal-" + category);
  if (!modal) return;
  modal.style.display = "none";
}

// Show slide by category
function showSlides(n, category) {
  let slides = document.getElementsByClassName("mySlides-" + category);
  if (slides.length === 0) return;

  if (n > slides.length) slideIndex[category] = 1;
  if (n < 1) slideIndex[category] = slides.length;

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex[category]-1].style.display = "block";
}

// Next/Prev controls
function plusSlides(n, category) {
  showSlides(slideIndex[category] += n, category);
}

// Close modal if clicking outside image
window.addEventListener("click", function(event) {
  ["j","f","frens"].forEach(cat => {
    const modal = document.getElementById("modal-" + cat);
    if (event.target === modal) closeModal(cat);
  });
});
// Show specific slide when clicking thumbnail
function currentSlide(n, category) {
  slideIndex[category] = n;
  showSlides(n, category);
}
