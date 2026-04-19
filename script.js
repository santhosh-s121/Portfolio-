document.addEventListener('DOMContentLoaded', () => {

    // Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links li');

    hamburger.addEventListener('click', () => {
        // Toggle Nav
        navLinks.classList.toggle('active');

        // Hamburger Animation
        hamburger.classList.toggle('toggle');

        // Icon Switch
        const icon = hamburger.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Close Mobile Menu on Link Click
    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            const icon = hamburger.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });

    // Scroll Header Background Change
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(10, 10, 10, 0.95)';
            navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.3)';
        } else {
            navbar.style.background = 'rgba(10, 10, 10, 0.85)';
            navbar.style.boxShadow = 'none';
        }
    });

    // Intersection Observer for Animations
    const observerOptions = {
        threshold: 0,
        rootMargin: "0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            } else {
                // Optional: remove if you want it to hide again when scrolling away
                entry.target.classList.remove('active');
            }
        });
    }, observerOptions);

    // Fade-in Elements
    const elementsToAnimate = document.querySelectorAll('.fade-in-up, .reveal-left, .reveal-right, .section-title, .project-card, .skill-category, .timeline-item');

    elementsToAnimate.forEach(el => {
        observer.observe(el);
    });

    // Smooth Scroll for Safari/Legacy Browsers (Optional backup)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });


});






const particleConfig = {
    "particles": {
        "number": { "value": 50, "density": { "enable": true, "value_area": 300 } },
        "color": { "value": "#fa5b1c" },
        "shape": { "type": "circle", "stroke": { "width": 1, "color": "#ede1e1" } },
        "opacity": { "value": 0.12, "random": true },
        "size": { "value": 3, "random": true },
        "line_linked": { "enable": true, "distance": 150, "color": "#ffffff", "opacity": 0.4, "width": 1 },
        "move": { "enable": true, "speed": 5, "out_mode": "out" }
    },
    "interactivity": {
        "detect_on": "window",
        "events": { "onhover": { "enable": true, "mode": "repulse" }, "onclick": { "enable": true, "mode": "push" }, "resize": true },
        "modes": { "repulse": { "distance": 100, "duration": 0.4 }, "push": { "particles_nb": 4 } }
    },
    "retina_detect": true
};

// Initialize particles securely
if (typeof particlesJS !== 'undefined' && document.getElementById('particles-hero')) {
    particlesJS("particles-hero", particleConfig);
}
if (typeof particlesJS !== 'undefined' && document.getElementById('particles-contact')) {
    particlesJS("particles-contact", particleConfig);
}

// Fallback: If elements are still invisible after 2 seconds, reveal them anyway
setTimeout(() => {
    document.querySelectorAll('.reveal-left, .reveal-right, .fade-in-up').forEach(el => {
        if (!el.classList.contains('active')) {
            el.classList.add('active');
        }
    });
}, 2000);





