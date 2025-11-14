// components.js - Dynamic component loader with active navigation
class ComponentLoader {
    constructor() {
        this.components = {
            'sticky-nav': '.sticky-nav-placeholder',
            'top-header': '.top-header-placeholder',
            'semi-top-bar': '.semi-top-bar-placeholder', 
            'main-nav': '.main-nav-placeholder',
            'features-section': '.features-section-placeholder',
            'footer': '.footer-placeholder'
        };
        this.initialized = false;
    }

    // ========================================
    // MAIN COMPONENT LOADING METHODS
    // ========================================

    async loadComponent(componentName, targetSelector) {
        try {
            const response = await fetch(`../components/${componentName}.html`);
            if (!response.ok) throw new Error(`Failed to load ${componentName}`);
            
            const html = await response.text();
            const targetElement = document.querySelector(targetSelector);
            
            if (targetElement) {
                targetElement.outerHTML = html;
                console.log(`✅ Loaded: ${componentName}`);
                
                // Initialize component-specific functionality
                this.initializeComponent(componentName);
            }
        } catch (error) {
            console.error(`❌ Error loading ${componentName}:`, error);
        }
    }

    async loadAllComponents() {
        if (this.initialized) return;
        
        const loadPromises = [];
        
        for (const [component, selector] of Object.entries(this.components)) {
            // Only load if placeholder exists
            if (document.querySelector(selector)) {
                loadPromises.push(this.loadComponent(component, selector));
            }
        }
        
        await Promise.all(loadPromises);
        this.initialized = true;
        console.log('🎉 All components loaded successfully!');
        
        // Initialize global functionality after all components are loaded
        this.initializeGlobalFunctionality();
    }

    // ========================================
    // COMPONENT-SPECIFIC INITIALIZERS
    // ========================================

    initializeComponent(componentName) {
        switch(componentName) {
            case 'sticky-nav':
                this.initializeStickyNav();
                break;
            case 'semi-top-bar':
                this.initializeSearchDropdown();
                break;
            case 'main-nav':
                this.initializeCategoriesDropdown();
                break;
            case 'footer':
                this.initializeNewsletter();
                break;
        }
    }

    initializeStickyNav() {
        // Sticky Navigation Functionality
        class StickyNavigation {
            constructor() {
                this.stickyNav = document.getElementById('stickyNav');
                this.scrollThreshold = 100;
                this.isVisible = false;
                
                if (this.stickyNav) {
                    this.init();
                }
            }

            init() {
                window.addEventListener('scroll', this.handleScroll.bind(this));
                window.addEventListener('resize', this.handleResize.bind(this));
                this.updateNavState();
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
                if (window.innerWidth < 768) {
                    this.scrollThreshold = 80;
                } else {
                    this.scrollThreshold = 100;
                }
                this.updateNavState();
            }
        }

        // Initialize sticky navigation
        new StickyNavigation();
    }

    initializeSearchDropdown() {
        // Search category dropdown functionality
        const categoryDropdown = document.querySelector('.category-dropdown');
        const searchCategoryMenu = document.querySelector('.search-category-menu');
        
        if (categoryDropdown && searchCategoryMenu) {
            categoryDropdown.addEventListener('mouseenter', () => {
                searchCategoryMenu.style.display = 'block';
                setTimeout(() => {
                    searchCategoryMenu.style.opacity = '1';
                    searchCategoryMenu.style.transform = 'translateY(0)';
                }, 10);
            });

            categoryDropdown.addEventListener('mouseleave', () => {
                searchCategoryMenu.style.opacity = '0';
                searchCategoryMenu.style.transform = 'translateY(-10px)';
                setTimeout(() => {
                    searchCategoryMenu.style.display = 'none';
                }, 300);
            });

            // Search functionality
            const searchButton = document.querySelector('.search-button');
            const searchInput = document.querySelector('.search-input');
            
            if (searchButton && searchInput) {
                searchButton.addEventListener('click', (e) => {
                    e.preventDefault();
                    this.performSearch(searchInput.value);
                });

                searchInput.addEventListener('keypress', (e) => {
                    if (e.key === 'Enter') {
                        e.preventDefault();
                        this.performSearch(searchInput.value);
                    }
                });
            }
        }
    }

    initializeCategoriesDropdown() {
        // Categories dropdown functionality
        const categoriesBtn = document.querySelector('.categories-btn');
        const dropdownMenu = document.querySelector('.dropdown-menu');
        
        if (categoriesBtn && dropdownMenu) {
            categoriesBtn.addEventListener('mouseenter', () => {
                dropdownMenu.style.display = 'block';
                setTimeout(() => {
                    dropdownMenu.style.opacity = '1';
                    dropdownMenu.style.transform = 'translateY(0)';
                }, 10);
            });

            categoriesBtn.addEventListener('mouseleave', () => {
                dropdownMenu.style.opacity = '0';
                dropdownMenu.style.transform = 'translateY(-10px)';
                setTimeout(() => {
                    dropdownMenu.style.display = 'none';
                }, 300);
            });
        }
    }

    initializeNewsletter() {
        // Newsletter form functionality
        const newsletterForm = document.getElementById('newsletterForm');
        
        if (newsletterForm) {
            newsletterForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const email = document.getElementById('newsletterEmail').value;
                this.subscribeToNewsletter(email);
            });
        }
    }

    // ========================================
    // GLOBAL FUNCTIONALITY & ACTIVE NAVIGATION
    // ========================================

    initializeGlobalFunctionality() {
        // Icon click handlers
        this.initializeIconHandlers();
        
        // Smooth scrolling for anchor links
        this.initializeSmoothScrolling();
        
        // Mobile menu toggle (if needed)
        this.initializeMobileMenu();
        
        // ACTIVE NAVIGATION - Initialize after all components loaded
        this.initializeActiveNavigation();
    }

    initializeActiveNavigation() {
        // Set active navigation link based on current page
        const currentPage = window.location.pathname.split('/').pop();
        
        // Get all navigation links from both main nav and sticky nav
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
        
        console.log('✅ Active navigation initialized for:', currentPage);
    }

    initializeIconHandlers() {
        // Icon click functionality
        document.addEventListener('click', (e) => {
            // Cart icon
            if (e.target.closest('.cart-icon')) {
                e.preventDefault();
                console.log('Cart clicked');
                window.location.href = 'cart.html';
            }
            
            // Wishlist icon
            if (e.target.closest('.whishlist-icon')) {
                e.preventDefault();
                console.log('Wishlist clicked');
                window.location.href = 'wishlist.html';
            }
            
            // Account icon
            if (e.target.closest('.account-icon')) {
                e.preventDefault();
                console.log('Account clicked');
                window.location.href = 'profile.html';
            }
            
            // Notification icon
            if (e.target.closest('.notification-icon')) {
                e.preventDefault();
                console.log('Notification clicked');
                window.location.href = 'notifications.html';
            }
        });
    }

    initializeSmoothScrolling() {
        // Smooth scrolling for anchor links
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

    initializeMobileMenu() {
        // Mobile menu toggle (you can expand this as needed)
        const menuToggle = document.querySelector('.menu-toggle');
        const navList = document.querySelector('.nav-list');
        
        if (menuToggle && navList) {
            menuToggle.addEventListener('click', () => {
                navList.classList.toggle('active');
                menuToggle.classList.toggle('active');
            });
        }
    }

    // ========================================
    // UTILITY METHODS
    // ========================================

    performSearch(query) {
        if (query.trim()) {
            console.log('Searching for:', query);
            // Implement your search logic here
            // window.location.href = `search.html?q=${encodeURIComponent(query)}`;
        }
    }

    subscribeToNewsletter(email) {
        if (this.validateEmail(email)) {
            console.log('Subscribing email:', email);
            // Implement your newsletter subscription logic here
            alert('Thank you for subscribing to our newsletter!');
            document.getElementById('newsletterEmail').value = '';
        } else {
            alert('Please enter a valid email address.');
        }
    }

    validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
}

// ========================================
// INITIALIZATION
// ========================================

// Initialize and load components when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    const loader = new ComponentLoader();
    loader.loadAllComponents();
});

// Export for use in other files if needed
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ComponentLoader;
}

// Load reviews component
function loadReviewsComponent() {
    const placeholders = document.querySelectorAll('.reviews-component-placeholder');
    placeholders.forEach(placeholder => {
        fetch('../components/reviews-component.html')
            .then(response => response.text())
            .then(data => {
                placeholder.innerHTML = data;
            })
            .catch(error => {
                console.error('Error loading reviews component:', error);
                placeholder.innerHTML = '<p>Reviews component failed to load.</p>';
            });
    });
}

// Call this function when the page loads
document.addEventListener('DOMContentLoaded', function() {
    loadReviewsComponent();
});