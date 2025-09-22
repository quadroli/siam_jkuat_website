// This function will be called after the header is loaded by header.js
const initializeHamburgerMenu = () => {
    const menuIcon = document.querySelector('.menu-icon');
    const navLinks = document.querySelector('.nav-links');
    if (menuIcon && navLinks) {
        menuIcon.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }
};

// This function runs after the main content is on the page
const initializeScrollAnimations = () => {
    const revealElements = document.querySelectorAll('.reveal');
    if (revealElements.length > 0) {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);
        revealElements.forEach(element => observer.observe(element));
    }
};

// This function handles the canvas background
const initializeMathRain = () => {
    const canvas = document.getElementById('math-rain');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;

        window.addEventListener('resize', () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        });

        const symbols = ['Σ', 'π', '∫', '√', '∞', '∂', '∇', 'ƒ', '≈', '≠', '≤', '≥'];
        const columns = Math.floor(width / 20);
        const drops = Array(columns).fill(1);

        function draw() {
            ctx.fillStyle = 'rgba(15, 32, 39, 0.05)';
            ctx.fillRect(0, 0, width, height);
            ctx.fillStyle = '#00a8e8';
            ctx.font = '15px monospace';
            for (let i = 0; i < drops.length; i++) {
                const text = symbols[Math.floor(Math.random() * symbols.length)];
                ctx.fillText(text, i * 20, drops[i] * 20);
                if (drops[i] * 20 > height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
        }
        setInterval(draw, 33);
    }
};

// Initialize everything
document.addEventListener('DOMContentLoaded', () => {
    // The header.js script will run first and load the header.
    // Once the header is loaded, we can initialize the hamburger menu.
    // We need a small delay to ensure the DOM is updated.
    setTimeout(initializeHamburgerMenu, 0);
    
    initializeScrollAnimations();
    initializeMathRain();
});
