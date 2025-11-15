// Profile Page JavaScript - Scoped to profile container
document.addEventListener('DOMContentLoaded', function() {
    // Get user data from localStorage or set default
    let userData = JSON.parse(localStorage.getItem('userData')) || {
        name: '',
        surname: '',
        email: '',
        mobile: ''
    };

    // DOM Elements - Scoped to profile container
    const profileContainer = document.querySelector('.profile-main-container');
    
    // Check if profile container exists
    if (!profileContainer) {
        console.error('Profile container not found');
        return;
    }

    const welcomeMessage = profileContainer.querySelector('#welcomeMessage');
    const navItems = profileContainer.querySelectorAll('.nav-item');
    const contentSections = profileContainer.querySelectorAll('.content-section');
    const saveBtn = profileContainer.querySelector('#saveProfile');
    const nameInput = profileContainer.querySelector('#name');
    const surnameInput = profileContainer.querySelector('#surname');
    const emailInput = profileContainer.querySelector('#email');
    const mobileInput = profileContainer.querySelector('#mobile');
    const backToShoppingOrders = profileContainer.querySelector('#backToShoppingOrders');
    const backToShoppingWishlist = profileContainer.querySelector('#backToShoppingWishlist');

    // Initialize page
    function initializePage() {
        // Update welcome message
        updateWelcomeMessage();
        
        // Load user data into form
        loadUserData();
        
        // Set up navigation
        setupNavigation();
        
        // Set up form handlers
        setupFormHandlers();
        
        // Set up back to shopping buttons
        setupBackToShoppingButtons();
    }

    // Update welcome message based on user name
    function updateWelcomeMessage() {
        const userName = userData.name || 'User';
        welcomeMessage.textContent = `Hi, ${userName}!`;
    }

    // Load user data into form fields
    function loadUserData() {
        nameInput.value = userData.name || '';
        surnameInput.value = userData.surname || '';
        emailInput.value = userData.email || '';
        mobileInput.value = userData.mobile || '';
    }

    // Set up navigation functionality
    function setupNavigation() {
        navItems.forEach(item => {
            item.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Get target section
                const targetSection = this.getAttribute('data-section');
                
                // Handle logout separately
                if (targetSection === 'logout') {
                    handleLogout();
                    return;
                }
                
                // Update active states
                navItems.forEach(nav => nav.classList.remove('active'));
                this.classList.add('active');
                
                // Show target section
                contentSections.forEach(section => {
                    section.classList.remove('active');
                    if (section.id === `${targetSection}-section`) {
                        section.classList.add('active');
                    }
                });
            });
        });
    }

    // Set up form handlers
    function setupFormHandlers() {
        // Save button handler
        saveBtn.addEventListener('click', function() {
            saveUserData();
        });

        // Auto-save on input change with debounce
        let saveTimeout;
        const formInputs = [nameInput, surnameInput, emailInput, mobileInput];
        
        formInputs.forEach(input => {
            input.addEventListener('input', function() {
                clearTimeout(saveTimeout);
                saveTimeout = setTimeout(() => {
                    // Only auto-save if we have some data
                    if (this.value.trim()) {
                        saveUserData(true);
                    }
                }, 2000);
            });
        });

        // Enter key to save
        formInputs.forEach(input => {
            input.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    saveUserData();
                }
            });
        });
    }

    // Set up back to shopping buttons
    function setupBackToShoppingButtons() {
        if (backToShoppingOrders) {
            backToShoppingOrders.addEventListener('click', function() {
                handleBackToShopping('Orders');
            });
        }
        
        if (backToShoppingWishlist) {
            backToShoppingWishlist.addEventListener('click', function() {
                handleBackToShopping('Wishlist');
            });
        }
    }

    // Handle back to shopping action
    function handleBackToShopping(fromSection) {
        showNotification(`Returning to shopping...`, 'info');
        
        // Simulate redirect with a short delay
        setTimeout(() => {
            // In a real application, this would redirect to the shopping page
            // For now, we'll just show a success message
            showNotification(`Happy shopping!`, 'success');
            console.log(`Redirecting to shopping page from ${fromSection}`);
            
            // If you want to actually redirect, uncomment the line below:
            // window.location.href = '../index.html'; // or your shopping page URL
        }, 1000);
    }

    // Save user data
    function saveUserData(isAutoSave = false) {
        // Validate form
        if (!validateForm()) {
            return;
        }

        // Update user data
        userData = {
            name: nameInput.value.trim(),
            surname: surnameInput.value.trim(),
            email: emailInput.value.trim(),
            mobile: mobileInput.value.trim()
        };

        // Save to localStorage
        localStorage.setItem('userData', JSON.stringify(userData));

        // Update welcome message
        updateWelcomeMessage();

        // Show success message
        if (isAutoSave) {
            showNotification('Changes saved automatically', 'success');
        } else {
            showNotification('Profile updated successfully!', 'success');
        }

        console.log('User data saved:', userData);
    }

    // Validate form data
    function validateForm() {
        const errors = [];

        // Email validation
        const email = emailInput.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email && !emailRegex.test(email)) {
            errors.push('Please enter a valid email address');
            emailInput.style.borderColor = '#dc3545';
        } else {
            emailInput.style.borderColor = '#e9ecef';
        }

        // Mobile validation
        const mobile = mobileInput.value.trim();
        const mobileRegex = /^\+?[\d\s-()]{10,}$/;
        if (mobile && !mobileRegex.test(mobile)) {
            errors.push('Please enter a valid mobile number');
            mobileInput.style.borderColor = '#dc3545';
        } else {
            mobileInput.style.borderColor = '#e9ecef';
        }

        // Show errors if any
        if (errors.length > 0) {
            showNotification(errors.join(', '), 'error');
            return false;
        }

        return true;
    }

    // Handle logout
    function handleLogout() {
        if (confirm('Are you sure you want to logout?')) {
            showNotification('Logging out...', 'info');
            
            // Simulate logout process
            setTimeout(() => {
                showNotification('You have been logged out successfully', 'success');
                console.log('User logged out');
            }, 1500);
        }
    }

    // Notification system
    function showNotification(message, type = 'info') {
        // Remove existing notifications
        const existingNotifications = document.querySelectorAll('.notification');
        existingNotifications.forEach(notification => notification.remove());

        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        
        const icons = {
            success: 'fa-check-circle',
            error: 'fa-exclamation-circle',
            info: 'fa-info-circle'
        };

        notification.innerHTML = `
            <div class="notification-content">
                <i class="fas ${icons[type] || 'fa-info-circle'}"></i>
                <span>${message}</span>
            </div>
        `;

        // Add styles
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #333;
            color: white;
            padding: 12px 20px;
            border-radius: 4px;
            z-index: 1000;
            max-width: 400px;
            font-size: 14px;
        `;

        // Add to page
        document.body.appendChild(notification);

        // Auto remove after 3 seconds
        setTimeout(() => {
            notification.remove();
        }, 3000);
    }

    // Initialize the page
    initializePage();
});