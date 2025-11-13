// about.js - Enhanced interactions for About page

class AboutPage {
    constructor() {
        this.init();
    }

    init() {
        this.initScrollAnimations();
        this.initTeamHoverEffects();
        this.initProcessCounters();
        this.initValueAnimations();
    }

    // Initialize scroll animations
    initScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, observerOptions);

        // Observe all sections for animation
        document.querySelectorAll('.process-card, .story-card, .value-item, .team-card').forEach(el => {
            observer.observe(el);
        });
    }

    // Team member hover effects
    initTeamHoverEffects() {
        const teamCards = document.querySelectorAll('.team-card');
        
        teamCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                this.animateTeamCard(card, true);
            });
            
            card.addEventListener('mouseleave', () => {
                this.animateTeamCard(card, false);
            });
        });
    }

    animateTeamCard(card, isHovering) {
        const image = card.querySelector('.team-image');
        const socialLinks = card.querySelectorAll('.team-social a');
        
        if (isHovering) {
            // Add hover class for CSS animations
            card.classList.add('team-hover');
            
            // Animate social links with stagger
            socialLinks.forEach((link, index) => {
                setTimeout(() => {
                    link.style.transform = 'translateY(0)';
                    link.style.opacity = '1';
                }, index * 100);
            });
        } else {
            // Remove hover class
            card.classList.remove('team-hover');
            
            // Reset social links
            socialLinks.forEach(link => {
                link.style.transform = 'translateY(10px)';
                link.style.opacity = '0';
            });
        }
    }

    // Process step counter animations
    initProcessCounters() {
        const processCards = document.querySelectorAll('.process-card');
        
        processCards.forEach((card, index) => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        this.animateProcessCounter(card, index);
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.5 });

            observer.observe(card);
        });
    }

    animateProcessCounter(card, index) {
        const number = card.querySelector('.process-number');
        if (number) {
            number.style.animation = `countUp 0.8s ease-out ${index * 0.2}s forwards`;
        }
    }

    // Value item animations
    initValueAnimations() {
        const valueItems = document.querySelectorAll('.value-item');
        
        valueItems.forEach((item, index) => {
            item.style.animationDelay = `${index * 0.1}s`;
        });
    }

    // Parallax effect for hero section
    initParallax() {
        const hero = document.querySelector('.about-header');
        if (!hero) return;

        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallaxSpeed = 0.5;
            hero.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
        });
    }

    // Smooth scrolling for navigation
    initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    // Team member modal functionality
    initTeamModals() {
        const teamCards = document.querySelectorAll('.team-card');
        
        teamCards.forEach(card => {
            card.addEventListener('click', (e) => {
                if (!e.target.closest('.team-social')) {
                    this.openTeamModal(card);
                }
            });
        });
    }

    openTeamModal(card) {
        // You can expand this to show detailed team member information
        const name = card.querySelector('h3').textContent;
        const role = card.querySelector('.team-role').textContent;
        const bio = card.querySelector('.team-bio').textContent;
        
        console.log(`Opening modal for: ${name} - ${role}`);
        // Implement modal opening logic here
    }

    // Statistics counter animation
    initStatsCounter() {
        const stats = document.querySelectorAll('.stat-number');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animateStatCounter(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        stats.forEach(stat => observer.observe(stat));
    }

    animateStatCounter(element) {
        const target = parseInt(element.textContent);
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;

        const timer = setInterval(() => {
            current += step;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            element.textContent = Math.floor(current);
        }, 16);
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new AboutPage();
});

// Add CSS animations via JavaScript
const style = document.createElement('style');
style.textContent = `
    @keyframes countUp {
        from {
            transform: scale(0.5);
            opacity: 0;
        }
        to {
            transform: scale(1);
            opacity: 1;
        }
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .animate-in {
        animation: fadeInUp 0.6s ease-out forwards;
    }
    
    .team-social a {
        transform: translateY(10px);
        opacity: 0;
        transition: all 0.3s ease;
    }
    
    .team-hover .team-social a {
        transform: translateY(0);
        opacity: 1;
    }
`;
document.head.appendChild(style);