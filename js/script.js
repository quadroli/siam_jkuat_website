document.addEventListener('DOMContentLoaded', () => {
    // --- Hamburger Menu Logic ---
    const menuIcon = document.querySelector('.menu-icon');
    const navLinks = document.querySelector('.nav-links');

    if (menuIcon && navLinks) {
        menuIcon.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // --- Scroll Animation Logic ---
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

        revealElements.forEach(element => {
            observer.observe(element);
        });
    }

    // --- Math Rain Canvas Logic ---
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
        const drops = [];

        for (let i = 0; i < columns; i++) {
            drops[i] = 1;
        }

        function draw() {
            ctx.fillStyle = 'rgba(15, 32, 39, 0.05)';
            ctx.fillRect(0, 0, width, height);

            ctx.fillStyle = '#00a8e8'; // Primary color for the symbols
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
});
