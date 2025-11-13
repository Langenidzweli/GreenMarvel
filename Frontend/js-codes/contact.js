// contact.js - Modern contact form functionality

class ContactPage {
    constructor() {
        this.form = document.getElementById('contactForm');
        this.submitBtn = this.form?.querySelector('.submit-btn');
        this.faqItems = document.querySelectorAll('.faq-item');
        
        this.init();
    }

    init() {
        this.initFormSubmission();
        this.initFAQAccordion();
        this.initInputAnimations();
        this.initFormValidation();
    }

    // Form submission with validation
    initFormSubmission() {
        if (!this.form) return;

        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            if (this.validateForm()) {
                this.submitForm();
            }
        });
    }

    // Form validation
    validateForm() {
        let isValid = true;
        const inputs = this.form.querySelectorAll('input[required], select[required], textarea[required]');
        
        inputs.forEach(input => {
            input.classList.remove('error');
            
            if (!input.value.trim()) {
                input.classList.add('error');
                this.showError(input, 'This field is required');
                isValid = false;
            } else if (input.type === 'email' && !this.isValidEmail(input.value)) {
                input.classList.add('error');
                this.showError(input, 'Please enter a valid email address');
                isValid = false;
            }
        });

        return isValid;
    }

    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    showError(input, message) {
        // Remove existing error
        const existingError = input.parentNode.querySelector('.error-message');
        if (existingError) {
            existingError.remove();
        }

        // Create error message
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.style.cssText = `
            color: #e74c3c;
            font-size: 0.85rem;
            margin-top: 5px;
            animation: fadeInUp 0.3s ease;
        `;
        errorDiv.textContent = message;
        
        input.parentNode.appendChild(errorDiv);

        // Remove error on input
        input.addEventListener('input', () => {
            input.classList.remove('error');
            errorDiv.remove();
        }, { once: true });
    }

    // Form submission simulation
    async submitForm() {
        if (!this.submitBtn) return;

        // Show loading state
        this.setLoadingState(true);

        try {
            // Simulate API call
            await this.simulateAPICall();
            
            // Show success message
            this.showSuccessMessage();
            
            // Reset form
            this.form.reset();
            
        } catch (error) {
            this.showErrorMessage();
        } finally {
            this.setLoadingState(false);
        }
    }

    setLoadingState(loading) {
        if (loading) {
            this.submitBtn.classList.add('loading');
            this.submitBtn.disabled = true;
        } else {
            this.submitBtn.classList.remove('loading');
            this.submitBtn.disabled = false;
        }
    }

    simulateAPICall() {
        return new Promise((resolve, reject) => {
            // Simulate network delay
            setTimeout(() => {
                // 90% success rate for demo
                Math.random() > 0.1 ? resolve() : reject();
            }, 2000);
        });
    }

    showSuccessMessage() {
        // Create success message
        const successDiv = document.createElement('div');
        successDiv.className = 'form-success show';
        successDiv.innerHTML = `
            <i class="fas fa-check-circle" style="font-size: 2rem; margin-bottom: 10px;"></i>
            <h3 style="margin: 10px 0 5px; color: #155724;">Message Sent Successfully!</h3>
            <p style="margin: 0; opacity: 0.8;">We'll get back to you within 2 hours. Thank you for contacting us.</p>
        `;

        this.form.parentNode.insertBefore(successDiv, this.form);

        // Remove success message after 5 seconds
        setTimeout(() => {
            successDiv.remove();
        }, 5000);
    }

    showErrorMessage() {
        alert('Sorry, there was an error sending your message. Please try again or contact us directly.');
    }

    // FAQ Accordion functionality
    initFAQAccordion() {
        this.faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            
            question.addEventListener('click', () => {
                // Close all other items
                this.faqItems.forEach(otherItem => {
                    if (otherItem !== item && otherItem.classList.contains('active')) {
                        otherItem.classList.remove('active');
                    }
                });
                
                // Toggle current item
                item.classList.toggle('active');
            });
        });
    }

    // Input animations and enhancements
    initInputAnimations() {
        const inputs = this.form?.querySelectorAll('input, textarea, select');
        
        inputs?.forEach(input => {
            // Add focus effects
            input.addEventListener('focus', () => {
                input.parentNode.classList.add('focused');
            });
            
            input.addEventListener('blur', () => {
                input.parentNode.classList.remove('focused');
            });
            
            // Real-time validation for email
            if (input.type === 'email') {
                input.addEventListener('blur', () => {
                    if (input.value && !this.isValidEmail(input.value)) {
                        input.classList.add('error');
                        this.showError(input, 'Please enter a valid email address');
                    }
                });
            }
        });
    }

    // Enhanced form validation
    initFormValidation() {
        const phoneInput = this.form?.querySelector('#phone');
        
        if (phoneInput) {
            phoneInput.addEventListener('input', (e) => {
                // Format phone number
                let value = e.target.value.replace(/\D/g, '');
                
                if (value.length > 0) {
                    value = value.match(/.{1,3}/g).join(' ');
                    if (value.length > 11) value = value.substring(0, 11);
                }
                
                e.target.value = value;
            });
        }
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ContactPage();
});

// Add CSS for error states
const style = document.createElement('style');
style.textContent = `
    .form-group input.error,
    .form-group select.error,
    .form-group textarea.error {
        border-color: #e74c3c !important;
        box-shadow: 0 0 0 3px rgba(231, 76, 60, 0.1) !important;
    }
    
    .form-group.focused .input-icon {
        color: #3a6f32;
        transform: scale(1.1);
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .faq-item .faq-answer {
        animation: fadeInUp 0.3s ease;
    }
`;
document.head.appendChild(style);