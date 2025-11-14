/* ========================================
   PROFILE PAGE JAVASCRIPT
======================================== */

// Tab switching functionality
document.addEventListener('DOMContentLoaded', function() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            
            // Remove active class from all tabs
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked tab
            this.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });

    // Edit profile functionality
    const editBtn = document.getElementById('editBtn');
    const saveBtn = document.getElementById('saveBtn');
    const cancelBtn = document.getElementById('cancelBtn');
    const profileForm = document.getElementById('profileForm');
    const formInputs = profileForm.querySelectorAll('input, select');

    if (editBtn) {
        editBtn.addEventListener('click', function() {
            // Enable form inputs
            formInputs.forEach(input => {
                input.removeAttribute('readonly');
                input.removeAttribute('disabled');
            });
            
            // Toggle button visibility
            editBtn.style.display = 'none';
            saveBtn.style.display = 'flex';
            cancelBtn.style.display = 'flex';
        });
    }

    if (cancelBtn) {
        cancelBtn.addEventListener('click', function() {
            // Disable form inputs
            formInputs.forEach(input => {
                input.setAttribute('readonly', 'readonly');
                if (input.tagName === 'SELECT') {
                    input.setAttribute('disabled', 'disabled');
                }
            });
            
            // Toggle button visibility
            editBtn.style.display = 'flex';
            saveBtn.style.display = 'none';
            cancelBtn.style.display = 'none';
        });
    }

    if (saveBtn) {
        saveBtn.addEventListener('click', function(e) {
            e.preventDefault();

            // Collect form data (DOB removed)
            const formData = {
                firstName: document.getElementById('firstName').value,
                lastName: document.getElementById('lastName').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                gender: document.getElementById('gender') ? document.getElementById('gender').value : ''
            };
            
            // Show success message
            showNotification('Profile updated successfully!', 'success');
            
            // Disable form inputs
            formInputs.forEach(input => {
                input.setAttribute('readonly', 'readonly');
                if (input.tagName === 'SELECT') {
                    input.setAttribute('disabled', 'disabled');
                }
            });
            
            // Toggle button visibility
            editBtn.style.display = 'flex';
            saveBtn.style.display = 'none';
            cancelBtn.style.display = 'none';
            
            console.log('Profile data saved:', formData);
        });
    }

    // Avatar is now an icon (no file upload). If you want an icon picker, implement it here.

    // Change password button
    const changePasswordBtn = document.querySelector('.change-password-btn');
    if (changePasswordBtn) {
        changePasswordBtn.addEventListener('click', function() {
            const newPassword = prompt('Enter new password:');
            if (newPassword && newPassword.length >= 6) {
                showNotification('Password changed successfully!', 'success');
            } else if (newPassword) {
                showNotification('Password must be at least 6 characters!', 'error');
            }
        });
    }

    // Two-factor authentication button
    const twoFactorBtn = document.querySelector('.two-factor-btn');
    if (twoFactorBtn) {
        twoFactorBtn.addEventListener('click', function() {
            showNotification('2FA setup initiated. Check your email for instructions.', 'info');
        });
    }

    // Add new address button
    const addAddressBtn = document.querySelector('.add-address-btn');
    if (addAddressBtn) {
        addAddressBtn.addEventListener('click', function() {
            showNotification('Opening address form...', 'info');
        });
    }

    // Edit address buttons
    const editAddressBtns = document.querySelectorAll('.edit-address');
    editAddressBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            showNotification('Edit address form would open here', 'info');
        });
    });

    // Delete address buttons
    const deleteAddressBtns = document.querySelectorAll('.delete-address');
    deleteAddressBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            if (confirm('Are you sure you want to delete this address?')) {
                this.closest('.address-card').remove();
                showNotification('Address deleted successfully!', 'success');
            }
        });
    });

    // Order tracking
    const viewOrderBtns = document.querySelectorAll('.view-order-btn');
    viewOrderBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const orderId = this.closest('.order-card').querySelector('.order-id').textContent;
            showNotification(`Loading details for ${orderId}...`, 'info');
        });
    });

    // Save preferences button
    const savePreferencesBtn = document.querySelector('.save-preferences-btn');
    if (savePreferencesBtn) {
        savePreferencesBtn.addEventListener('click', function() {
            const preferences = {
                promotionalEmails: document.querySelectorAll('.preference-item input')[0].checked,
                orderUpdatesSMS: document.querySelectorAll('.preference-item input')[1].checked,
                weeklyNewsletter: document.querySelectorAll('.preference-item input')[2].checked,
                shoppingHistory: document.querySelectorAll('.preference-item input')[3].checked,
                personalizedRecommendations: document.querySelectorAll('.preference-item input')[4].checked
            };
            
            showNotification('Preferences saved successfully!', 'success');
            console.log('Preferences saved:', preferences);
        });
    }

    // Newsletter subscription
    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('newsletterEmail').value;
            showNotification('Thank you for subscribing!', 'success');
            this.reset();
        });
    }
});

// Notification function
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 6px;
        color: white;
        font-weight: 600;
        z-index: 10000;
        animation: slideIn 0.3s ease-out;
        max-width: 400px;
    `;
    
    const colors = {
        success: '#46853c',
        error: '#dc3545',
        info: '#0d7fbf'
    };
    
    notification.style.backgroundColor = colors[type] || colors.info;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-out forwards';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Add animation styles
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);