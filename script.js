// Initialize Lucide icons
lucide.createIcons();

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Header scroll effect
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.style.padding = '1rem 0';
        header.style.backgroundColor = 'rgba(76, 29, 149, 0.95)'; // Darker violet (matched to #4c1d95)
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.padding = '1.5rem 0';
        header.style.backgroundColor = 'var(--header-violet)';
        header.style.backdropFilter = 'none';
    }
});

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Elements to animate
const animElements = document.querySelectorAll('.project-card, .service-item, .skill-card, .hero-content, .hero-image');
animElements.forEach(el => {
    el.classList.add('animate-on-scroll');
    observer.observe(el);
});
