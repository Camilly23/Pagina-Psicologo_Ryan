       // Animações ao scroll
        document.addEventListener('DOMContentLoaded', function () {
            const animatedElements = document.querySelectorAll('.animate-scale-up');
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'scale(1)';
                    }
                });
            }, { threshold: 0.1 });
            animatedElements.forEach(el => {
                el.style.opacity = '0';
                el.style.transform = 'scale(0.8)';
                el.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
                observer.observe(el);
            });
            // Menu mobile toggle
            const menuButton = document.querySelector('.md\\:hidden');
            const mobileMenu = document.querySelector('.md\\:flex');
            menuButton.addEventListener('click', function () {
                mobileMenu.classList.toggle('hidden');
            });

            // Smooth scroll para links de navegação
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();

                    const targetId = this.getAttribute('href');
                    if (targetId === '#') return;

                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        window.scrollTo({
                            top: targetElement.offsetTop - 100,
                            behavior: 'smooth'
                        });
                    }
                });
            });
        });