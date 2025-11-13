// ========================================
//           FAQ JAVASCRIPT
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    // FAQ Accordion Functionality
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            // Close all other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current item
            item.classList.toggle('active');
        });
    });
    
    // FAQ Category Filtering
    const categoryButtons = document.querySelectorAll('.faq-category-btn');
    const faqSections = document.querySelectorAll('.faq-section');
    
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.getAttribute('data-category');
            
            // Update active button
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Show/hide sections based on category
            if (category === 'all') {
                faqSections.forEach(section => {
                    section.style.display = 'block';
                    // Scroll to top of FAQ section
                    document.querySelector('.faq-container').scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'start'
                    });
                });
            } else {
                faqSections.forEach(section => {
                    if (section.id === category) {
                        section.style.display = 'block';
                        // Scroll to the active section
                        section.scrollIntoView({ 
                            behavior: 'smooth',
                            block: 'start'
                        });
                    } else {
                        section.style.display = 'none';
                    }
                });
            }
        });
    });

    // FAQ Search Functionality
    const searchInput = document.querySelector('.search-faq input');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase().trim();
            const questions = document.querySelectorAll('.faq-question');
            let foundResults = false;
            
            questions.forEach(question => {
                const questionText = question.querySelector('.question-text').textContent.toLowerCase();
                const faqItem = question.closest('.faq-item');
                const faqSection = faqItem.closest('.faq-section');
                
                if (questionText.includes(searchTerm)) {
                    faqItem.style.display = 'block';
                    faqSection.style.display = 'block';
                    foundResults = true;
                } else {
                    faqItem.style.display = 'none';
                }
            });
            
            // Show no results message
            const existingNoResults = document.querySelector('.no-results');
            if (existingNoResults) {
                existingNoResults.remove();
            }
            
            if (!foundResults && searchTerm.length > 0) {
                const noResults = document.createElement('div');
                noResults.className = 'no-results';
                noResults.innerHTML = `
                    <div style="text-align: center; padding: 40px; color: #666;">
                        <h3>No results found for "${searchTerm}"</h3>
                        <p>Try different keywords or browse our categories</p>
                    </div>
                `;
                document.querySelector('.faq-container').insertBefore(noResults, document.querySelector('.contact-support'));
            }
        });
        
        // Clear search when clicking search button without text
        const searchBtn = document.querySelector('.search-btn');
        searchBtn.addEventListener('click', function() {
            if (searchInput.value.trim() === '') {
                // Reset to show all questions
                const questions = document.querySelectorAll('.faq-item');
                questions.forEach(item => {
                    item.style.display = 'block';
                });
                
                const sections = document.querySelectorAll('.faq-section');
                sections.forEach(section => {
                    section.style.display = 'block';
                });
                
                // Remove no results message
                const existingNoResults = document.querySelector('.no-results');
                if (existingNoResults) {
                    existingNoResults.remove();
                }
            }
        });
    }
    
    // Auto-expand first question in each section
    function expandFirstQuestions() {
        const sections = document.querySelectorAll('.faq-section');
        sections.forEach(section => {
            const firstQuestion = section.querySelector('.faq-item');
            if (firstQuestion && !firstQuestion.classList.contains('active')) {
                firstQuestion.classList.add('active');
            }
        });
    }
    
    // Expand first questions on page load
    setTimeout(expandFirstQuestions, 1000);
    
    // Add smooth scrolling for better UX
    function smoothScrollToElement(element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
    
    // Keyboard navigation support
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            // Close all FAQ items when ESC is pressed
            faqItems.forEach(item => {
                item.classList.remove('active');
            });
        }
    });
});

// Export functions for potential reuse
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initFAQ: function() {
            // For potential external initialization
            document.addEventListener('DOMContentLoaded', function() {
                // Reinitialize if needed
            });
        }
    };
}