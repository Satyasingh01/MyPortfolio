
// JavaScript for Portfolio Website
// DOM Elements
const themeToggleBtn = document.getElementById('theme-toggle');
const hamburgerBtn = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const form = document.getElementById('contact-form');
const fadeElems = document.querySelectorAll('.fade-in');
const progressBars = document.querySelectorAll('.progress-fill');
const modal = document.getElementById('project-modal');
const modalClose = document.getElementById('modal-close');
const projectCards = document.querySelectorAll('.project-card');

// Theme Toggle
themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
        localStorage.setItem('theme', 'dark');
    } else {
        themeToggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
        localStorage.setItem('theme', 'light');
    }
});

// Load saved theme
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
}

// Mobile Navigation
hamburgerBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close mobile nav when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Form Validation (no EmailJS)
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;

    const name = document.getElementById('name');
    if (name.value.trim() === '') {
        showError(name, 'Please enter your name');
        isValid = false;
    } else {
        clearError(name);
    }

    const email = document.getElementById('email');
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;   // ✅ Correct pattern
if (!emailRegex.test(email.value.trim())) {
    showError(email, 'Please enter a valid email');
    isValid = false;
} else {
    clearError(email);
}

    const message = document.getElementById('message');
    if (message.value.trim() === '') {
        showError(message, 'Please enter your message');
        isValid = false;
    } else {
        clearError(message);
    }

    if (isValid) {
        alert('Thanks for your message! I will get back to you soon.');
        form.reset();
    }
});

function showError(input, message) {
    const formGroup = input.parentElement;
    const errorMsg = formGroup.querySelector('.error-message');
    errorMsg.textContent = message;
    errorMsg.style.display = 'block';
    input.style.borderColor = '#ef4444';
}

function clearError(input) {
    const formGroup = input.parentElement;
    const errorMsg = formGroup.querySelector('.error-message');
    errorMsg.textContent = '';
    errorMsg.style.display = 'none';
    input.style.borderColor = '';
}

// Text Animation
const textElements = document.querySelectorAll('.animated-text');
const texts = [
    "Aspiring Software Engineer",
    "Full Stack Developer",
    "UI/UX Enthusiast",
    "Problem Solver",
    "Tech Innovator"
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

function typeText() {
    const currentText = texts[textIndex];
    if (isDeleting) {
        charIndex--;
        typingSpeed = 50;
    } else {
        charIndex++;
        typingSpeed = 100;
    }

    textElements.forEach(el => {
        el.textContent = currentText.substring(0, charIndex);
    });

    if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        typingSpeed = 1000;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        typingSpeed = 500;
    }

    setTimeout(typeText, typingSpeed);
}
setTimeout(typeText, 1000);

// Scroll animations
function checkFade() {
    fadeElems.forEach(elem => {
        const elemTop = elem.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elemTop < windowHeight - 100) {
            elem.classList.add('appear');
            if (elem.closest('#skills')) {
                animateProgressBars();
            }
        }
    });
}
function animateProgressBars() {
    progressBars.forEach(bar => {
        const width = bar.getAttribute('data-width');
        bar.style.width = width;
    });
}
window.addEventListener('scroll', checkFade);
window.addEventListener('load', checkFade);

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Modal functionality
projectCards.forEach(card => {
    card.addEventListener('click', () => {
        const title = card.querySelector('h3').textContent;
        const imgSrc = card.querySelector('img').src;
        const description = card.querySelector('p').textContent;

        document.getElementById('modal-title').textContent = title;
        document.getElementById('modal-img').src = imgSrc;
        document.getElementById('modal-description').textContent = description;

        const tagsContainer = document.getElementById('modal-tags');
        tagsContainer.innerHTML = '';
        const tags = card.querySelectorAll('.tag');
        tags.forEach(tag => tagsContainer.appendChild(tag.cloneNode(true)));

        document.getElementById('modal-link').href = card.querySelector('.btn').href;
        modal.classList.add('active');
    });
});
modalClose.addEventListener('click', () => modal.classList.remove('active'));
window.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.remove('active');
});

// Particles background
tsParticles.load("tsparticles", {
    background: { color: { value: "#0d1117" } },
    fpsLimit: 60,
    interactivity: {
        events: {
            onHover: { enable: true, mode: "repulse" },
            onClick: { enable: true, mode: "push" },
            resize: true
        },
        modes: {
            repulse: { distance: 100, duration: 0.4 },
            push: { quantity: 4 }
        }
    },
    particles: {
        color: { value: "#ffffff" },
        links: { color: "#ffffff", distance: 120, enable: true, opacity: 0.4, width: 1 },
        collisions: { enable: true },
        move: { enable: true, speed: 1, outModes: { default: "bounce" } },
        number: { value: 60, density: { enable: true, area: 800 } },
        opacity: { value: 0.5 },
        shape: { type: "circle" },
        size: { value: { min: 1, max: 4 } }
    },
    detectRetina: true
});

