// Mobile Navigation Toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navToggle.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('active');
    }
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            // Close mobile menu if open
            navLinks.classList.remove('active');
            
            // Smooth scroll to target
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Fade-in animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe elements for fade-in animation
document.querySelectorAll('.expertise-card, .experience-item, .impact-card, .tools-category, .contact-item').forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
});

// Add active class to navigation links based on scroll position
const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-links a[href^="#"]');

function updateActiveNav() {
    let current = '';
    let closestSection = null;
    let closestDistance = Infinity;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const distance = Math.abs(window.scrollY + 100 - sectionTop);
        
        if (distance < closestDistance) {
            closestDistance = distance;
            closestSection = section.getAttribute('id');
        }
        
        if (window.scrollY >= (sectionTop - 100)) {
            current = section.getAttribute('id');
        }
    });
    
    // Use the closest section if no section is fully in view
    if (!current && closestSection) {
        current = closestSection;
    }
    
    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href') === `#${current}`) {
            item.classList.add('active');
        }
    });
}

window.addEventListener('scroll', updateActiveNav);
window.addEventListener('resize', updateActiveNav);

// Initialize active nav
updateActiveNav();

// Progressive Disclosure for Experience Section
document.querySelectorAll('.btn-read-more').forEach(button => {
    button.addEventListener('click', function() {
        const targetId = this.getAttribute('data-target');
        const details = this.previousElementSibling;
        
        if (details.classList.contains('active')) {
            details.classList.remove('active');
            this.textContent = 'Read More';
            this.classList.remove('active');
        } else {
            details.classList.add('active');
            this.textContent = 'Read Less';
            this.classList.add('active');
        }
    });
});

// Scroll Progress Indicator
const navProgressBar = document.querySelector('.nav-progress-bar');

function updateProgressBar() {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight - windowHeight;
    const scrolled = window.scrollY;
    
    if (documentHeight > 0) {
        const progress = (scrolled / documentHeight) * 100;
        navProgressBar.style.width = `${progress}%`;
    }
}

// Update progress bar on scroll
window.addEventListener('scroll', updateProgressBar);
window.addEventListener('resize', updateProgressBar);

// Initialize progress bar
updateProgressBar();

// Add active class styling via CSS
const style = document.createElement('style');
style.textContent = `
    .nav-links a.active {
        color: var(--color-accent) !important;
        font-weight: 600;
    }
`;
document.head.appendChild(style);

// Form submission handling (placeholder for future form implementation)
document.addEventListener('DOMContentLoaded', () => {
    // Add subtle hover effects to cards
    const cards = document.querySelectorAll('.expertise-card, .impact-card, .contact-item');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transition = 'all 0.3s ease';
        });
    });
    
    // Initialize with some elements visible
    setTimeout(() => {
        document.querySelectorAll('.fade-in').forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                el.classList.add('visible');
            }
        });
    }, 100);
});

// Update copyright year
const yearSpan = document.querySelector('.footer-copyright');
if (yearSpan) {
    const currentYear = new Date().getFullYear();
    yearSpan.textContent = yearSpan.textContent.replace('2025', currentYear);
}