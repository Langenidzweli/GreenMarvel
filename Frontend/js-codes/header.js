// Sticky Navigation Functionality - Best Version
class StickyNavigation {
    constructor() {
        this.stickyNav = document.getElementById('stickyNav');
        this.scrollThreshold = 100; // Show nav when scrolled past 100px
        this.isVisible = false;
        
        this.init();
    }

    init() {
        // Add scroll event listener
        window.addEventListener('scroll', this.handleScroll.bind(this));
        
        // Add resize event listener
        window.addEventListener('resize', this.handleResize.bind(this));
        
        // Initialize nav state
        this.updateNavState();
        
        console.log('Sticky Navigation initialized');
    }

    handleScroll() {
        this.updateNavState();
    }

    showNav() {
        if (!this.isVisible) {
            this.stickyNav.classList.add('active');
            document.body.classList.add('sticky-nav-active');
            this.isVisible = true;
        }
    }

    hideNav() {
        if (this.isVisible) {
            this.stickyNav.classList.remove('active');
            document.body.classList.remove('sticky-nav-active');
            this.isVisible = false;
        }
    }

    updateNavState() {
        if (window.scrollY > this.scrollThreshold) {
            this.showNav();
        } else {
            this.hideNav();
        }
    }

    handleResize() {
        // Adjust threshold for mobile if needed
        if (window.innerWidth < 768) {
            this.scrollThreshold = 80;
        } else {
            this.scrollThreshold = 100;
        }
        
        // Update state after resize
        this.updateNavState();
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    new StickyNavigation();
});

// Add click handlers for all icons
document.addEventListener('DOMContentLoaded', function() {
    // Cart icon functionality
    document.querySelectorAll('.cart-icon').forEach(icon => {
        icon.addEventListener('click', function() {
            console.log('Cart clicked');
            // Redirect to cart page
            window.location.href = 'cart.html';
        });
    });

    // Wishlist icon functionality
    document.querySelectorAll('.whishlist-icon').forEach(icon => {
        icon.addEventListener('click', function() {
            console.log('Wishlist clicked');
            // Redirect to wishlist page
            window.location.href = 'wishlist.html';
        });
    });

    // Account icon functionality — go to profile page
    document.querySelectorAll('.account-icon').forEach(icon => {
        icon.addEventListener('click', function() {
            console.log('Account clicked');
            // Redirect to profile page
            window.location.href = 'profile.html';
        });
    });

    // Notification icon functionality
    document.querySelectorAll('.notification-icon').forEach(icon => {
        icon.addEventListener('click', function() {
            console.log('Notification clicked');
            // Show notifications dropdown or page
            window.location.href = 'notifications.html';
        });
    });

    // Note: account-icon now routes to profile; if you add a separate compare icon,
    // give it a distinct class (e.g. `.compare-icon`) and handle it separately.
});

// Add smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.sticky-nav-menu a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Only handle internal links that aren't external pages
            if (href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
});

// Add keyboard navigation support
document.addEventListener('keydown', function(e) {
    // ESC key to hide navigation (if needed)
    if (e.key === 'Escape') {
        document.body.classList.remove('sticky-nav-active');
    }
});

// Handle page load with existing scroll position
window.addEventListener('load', function() {
    if (window.scrollY > 100) {
        document.getElementById('stickyNav')?.classList.add('active');
        document.body.classList.add('sticky-nav-active');
    }
});

// ========================================
// ACTIVE NAVIGATION INDICATOR
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    // Get current page filename
    const currentPage = window.location.pathname.split('/').pop();
    
    // Get all navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    const stickyNavLinks = document.querySelectorAll('.sticky-nav-menu .nav-item a');
    
    // Function to set active link
    function setActiveLink(links) {
        links.forEach(link => {
            // Remove active class from all links first
            link.classList.remove('active');
            
            // Get the href attribute and extract just the filename
            const linkHref = link.getAttribute('href');
            const linkPage = linkHref.split('/').pop();
            
            // Check if this link matches current page
            if (linkPage === currentPage) {
                link.classList.add('active');
            }
        });
    }
    
    // Set active state for both main nav and sticky nav
    setActiveLink(navLinks);
    setActiveLink(stickyNavLinks);
    
    // Also update when navigating (optional - for single page apps)
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('active'));
            stickyNavLinks.forEach(l => l.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // Also update corresponding link in sticky nav
            const href = this.getAttribute('href');
            stickyNavLinks.forEach(stickyLink => {
                if (stickyLink.getAttribute('href') === href) {
                    stickyLink.classList.add('active');
                }
            });
        });
    });
});