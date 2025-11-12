// ===== Responsive Navbar Toggle =====
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const navbar = document.querySelector(".navbar");

  if (menuToggle && navbar) {
    menuToggle.addEventListener("click", () => {
      navbar.classList.toggle("active");
    });
  }
});

// ========================================
// FOOTER FUNCTIONALITY
// ========================================

// Newsletter form submission
function initializeNewsletterForm() {
    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = document.getElementById('newsletterEmail');
            const submitBtn = document.getElementById('newsletterSubmit');
            
            if (emailInput && submitBtn) {
                const email = emailInput.value;
                
                // Validate email format
                if (!isValidEmail(email)) {
                    showNewsletterMessage('Please enter a valid email address', 'error');
                    return;
                }
                
                // Simulate form submission
                const originalHtml = submitBtn.innerHTML;
                submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
                submitBtn.disabled = true;
                
                // Simulate API call
                setTimeout(() => {
                    submitBtn.innerHTML = '<i class="fas fa-check"></i>';
                    showNewsletterMessage('Subscribed successfully!', 'success');
                    newsletterForm.reset();
                    
                    setTimeout(() => {
                        submitBtn.innerHTML = originalHtml;
                        submitBtn.disabled = false;
                    }, 2000);
                }, 1000);
            }
        });
    }
}

// Email validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Show newsletter message
function showNewsletterMessage(message, type) {
    // Remove existing message
    const existingMessage = document.querySelector('.newsletter-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // Create new message
    const messageElement = document.createElement('div');
    messageElement.className = `newsletter-message newsletter-${type}`;
    messageElement.textContent = message;
    messageElement.style.cssText = `
        margin-top: 8px;
        padding: 6px 10px;
        border-radius: 4px;
        font-size: 0.75rem;
        text-align: center;
        ${type === 'success' ? 
            'background: rgba(70, 133, 60, 0.2); color: #46853c; border: 1px solid #46853c;' : 
            'background: rgba(220, 53, 69, 0.2); color: #dc3545; border: 1px solid #dc3545;'
        }
    `;
    
    const newsletterSection = document.querySelector('.newsletter-section');
    if (newsletterSection) {
        newsletterSection.appendChild(messageElement);
        
        setTimeout(() => {
            messageElement.remove();
        }, 4000);
    }
}

// Initialize footer
function initializeFooter() {
    initializeNewsletterForm();
}

// Call when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    initializeFooter();
});
