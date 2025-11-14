// about.js - Clean gallery functionality for About page
class AboutPage {
    constructor() {
        this.isExpanded = false;
        this.init();
    }

    init() {
        this.initSmoothScrolling();
        this.initGalleryInteractions();
        this.initViewMoreButton();
        this.injectModalStyles();
    }

    // ========================================
    // SMOOTH SCROLLING FUNCTIONALITY
    // ========================================

    initSmoothScrolling() {
        const watchStoryBtn = document.querySelector('a[href="#our-gallery"]');
        
        if (watchStoryBtn) {
            watchStoryBtn.addEventListener('click', (e) => {
                e.preventDefault();
                const gallerySection = document.getElementById('our-gallery');
                if (gallerySection) {
                    gallerySection.scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        }
    }

    // ========================================
    // GALLERY INTERACTIONS & MODAL
    // ========================================

    initGalleryInteractions() {
        this.initGalleryClickHandlers();
    }

    initGalleryClickHandlers() {
        const galleryItems = document.querySelectorAll('.gallery-item');
        
        galleryItems.forEach(item => {
            item.addEventListener('click', (e) => {
                if (!e.target.closest('a')) {
                    this.openGalleryModal(item);
                }
            });
        });
    }

    openGalleryModal(item) {
        const image = item.querySelector('img').src;
        const title = item.querySelector('.gallery-caption h3')?.textContent || 'Gallery Image';
        const description = item.querySelector('.gallery-caption p')?.textContent || '';
        const detailedContent = this.getDetailedContent(title);
        
        this.createGalleryModal(image, title, description, detailedContent);
    }

    getDetailedContent(title) {
        // Detailed content for each image
        const contentMap = {
            'Economic Growth Forum': `
                <h4>Strategic Partnership with TEDA</h4>
                <p>This important meeting with Tshwane Economic Development Agency marked the beginning of our collaborative efforts to drive local economic growth and create sustainable business opportunities in the region.</p>
                <ul>
                    <li><strong>Objective:</strong> Establish partnerships for community development</li>
                    <li><strong>Focus:</strong> Sustainable business growth and job creation</li>
                    <li><strong>Outcome:</strong> Ongoing collaboration for economic empowerment</li>
                </ul>
                <p>We discussed various initiatives to support local entrepreneurship and create meaningful impact in our community.</p>
            `,
            'Product Showcase': `
                <h4>Product Demonstration Session</h4>
                <p>During this engaging session, we demonstrated our organic hair care products to potential partners and stakeholders, showcasing the quality and effectiveness of our formulations.</p>
                <ul>
                    <li><strong>Products Featured:</strong> Complete organic hair care line</li>
                    <li><strong>Audience:</strong> Potential distributors and partners</li>
                    <li><strong>Focus:</strong> Product benefits and market potential</li>
                </ul>
                <p>The session generated significant interest in our natural, ethically sourced products and opened doors for new business opportunities.</p>
            `,
            'Customer Engagement': `
                <h4>Direct Customer Interaction</h4>
                <p>This hands-on session allowed us to directly engage with customers, demonstrating product benefits and gathering valuable feedback to improve our offerings.</p>
                <ul>
                    <li><strong>Interaction Type:</strong> One-on-one product demonstrations</li>
                    <li><strong>Feedback Collection:</strong> Real-time customer insights</li>
                    <li><strong>Objective:</strong> Build customer relationships and trust</li>
                </ul>
                <p>Direct customer engagement helps us understand market needs and continuously improve our product formulations based on real user experiences.</p>
            `
        };

        return contentMap[title] || `
            <h4>Detailed Information</h4>
            <p>This image captures an important moment in our business journey. We're committed to transparency and sharing our progress with our valued customers and partners.</p>
            <p>For more information about this event or our products, please don't hesitate to contact us.</p>
        `;
    }

    createGalleryModal(imageSrc, title, description, detailedContent) {
        // Remove existing modal if any
        const existingModal = document.querySelector('.gallery-modal');
        if (existingModal) existingModal.remove();

        // Create modal element
        const modal = document.createElement('div');
        modal.className = 'gallery-modal';
        modal.innerHTML = `
            <div class="modal-overlay"></div>
            <div class="modal-content">
                <button class="modal-close">
                    <i class="fas fa-times"></i>
                </button>
                <div class="modal-image">
                    <img src="${imageSrc}" alt="${title}">
                </div>
                <div class="modal-caption">
                    <h3>${title}</h3>
                    <p class="modal-description">${description}</p>
                    <div class="modal-detailed-content">
                        ${detailedContent}
                    </div>
                </div>
            </div>
        `;

        document.body.appendChild(modal);

        // Add event listeners
        modal.querySelector('.modal-overlay').addEventListener('click', () => this.closeGalleryModal());
        modal.querySelector('.modal-close').addEventListener('click', () => this.closeGalleryModal());
        
        // Add escape key support
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') this.closeGalleryModal();
        });
    }

    closeGalleryModal() {
        const modal = document.querySelector('.gallery-modal');
        if (modal) modal.remove();
    }

    // ========================================
    // VIEW MORE / VIEW LESS FUNCTIONALITY
    // ========================================

    initViewMoreButton() {
        const viewMoreBtn = document.querySelector('.view-more-btn');
        
        if (viewMoreBtn) {
            viewMoreBtn.addEventListener('click', () => {
                if (this.isExpanded) {
                    this.showLessContent();
                } else {
                    this.showMoreContent();
                }
            });
        }
    }

    showMoreContent() {
        const button = document.querySelector('.view-more-btn');
        const comingSoonSection = document.querySelector('.coming-soon-section');
        
        if (!button || !comingSoonSection) return;

        // Show loading state
        button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading...';
        button.disabled = true;

        setTimeout(() => {
            // Show coming soon message
            comingSoonSection.classList.remove('hidden-item');
            
            // Update button to "View Less"
            button.innerHTML = '<i class="fas fa-chevron-up"></i> View Less';
            button.disabled = false;
            this.isExpanded = true;
        }, 500);
    }

    showLessContent() {
        const button = document.querySelector('.view-more-btn');
        const comingSoonSection = document.querySelector('.coming-soon-section');
        
        if (!button || !comingSoonSection) return;

        // Show loading state
        button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading...';
        button.disabled = true;

        setTimeout(() => {
            // Hide coming soon message
            comingSoonSection.classList.add('hidden-item');
            
            // Update button to "View More"
            button.innerHTML = '<i class="fas fa-chevron-down"></i> View More Gallery';
            button.disabled = false;
            this.isExpanded = false;
            
            // Scroll to top of gallery section
            const gallerySection = document.getElementById('our-gallery');
            if (gallerySection) {
                gallerySection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }, 500);
    }

    // ========================================
    // STYLES INJECTION
    // ========================================

    injectModalStyles() {
        // Only inject styles if they haven't been added already
        if (!document.querySelector('#about-modal-styles')) {
            const aboutStyles = document.createElement('style');
            aboutStyles.id = 'about-modal-styles';
            aboutStyles.textContent = this.getModalStyles();
            document.head.appendChild(aboutStyles);
        }
    }

    getModalStyles() {
        return `
            /* Modal Styles */
            .gallery-modal {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                z-index: 1000;
                display: flex;
                align-items: center;
                justify-content: center;
                animation: fadeIn 0.3s ease;
                padding: 20px;
                box-sizing: border-box;
            }
            
            @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }
            
            .modal-overlay {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.8);
                backdrop-filter: blur(5px);
            }
            
            .modal-content {
                position: relative;
                background: white;
                border-radius: 12px;
                max-width: 800px;
                width: 100%;
                max-height: 90vh;
                overflow: auto;
                z-index: 1001;
                animation: scaleIn 0.3s ease;
            }
            
            @keyframes scaleIn {
                from { transform: scale(0.9); opacity: 0; }
                to { transform: scale(1); opacity: 1; }
            }
            
            .modal-close {
                position: absolute;
                top: 15px;
                right: 15px;
                background: rgba(0, 0, 0, 0.7);
                color: white;
                border: none;
                border-radius: 50%;
                width: 40px;
                height: 40px;
                cursor: pointer;
                z-index: 1002;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: all 0.3s ease;
                font-size: 1.1rem;
            }
            
            .modal-close:hover {
                background: rgba(0, 0, 0, 0.9);
                transform: scale(1.1);
            }
            
            .modal-image img {
                width: 100%;
                height: auto;
                display: block;
                border-radius: 12px 12px 0 0;
                max-height: 50vh;
                object-fit: contain;
                background: #f8f8f8;
            }
            
            .modal-caption {
                padding: 25px;
            }
            
            .modal-caption h3 {
                font-size: 1.5rem;
                color: #2c3e50;
                margin-bottom: 10px;
                font-weight: 600;
            }
            
            .modal-description {
                color: #666;
                font-size: 1.1rem;
                margin-bottom: 20px;
                line-height: 1.6;
            }
            
            .modal-detailed-content {
                border-top: 1px solid #e0e0e0;
                padding-top: 20px;
            }
            
            .modal-detailed-content h4 {
                color: #2c3e50;
                margin-bottom: 15px;
                font-size: 1.2rem;
                font-weight: 600;
            }
            
            .modal-detailed-content p {
                color: #666;
                line-height: 1.6;
                margin-bottom: 15px;
            }
            
            .modal-detailed-content ul {
                color: #666;
                margin-bottom: 15px;
                padding-left: 20px;
            }
            
            .modal-detailed-content li {
                margin-bottom: 8px;
                line-height: 1.5;
            }
            
            .modal-detailed-content strong {
                color: #46853c;
            }
            
            /* Coming Soon Message */
            .coming-soon-section {
                margin-top: 40px;
                animation: fadeInUp 0.5s ease;
            }
            
            @keyframes fadeInUp {
                from {
                    opacity: 0;
                    transform: translateY(20px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
            
            .coming-soon-message {
                text-align: center;
                padding: 60px 40px;
                background: #f8f9fa;
                border-radius: 12px;
                border: 2px dashed #e0e0e0;
            }
            
            .coming-soon-message i {
                font-size: 3rem;
                color: #46853c;
                margin-bottom: 20px;
                opacity: 0.7;
            }
            
            .coming-soon-message h3 {
                color: #2c3e50;
                margin-bottom: 15px;
                font-weight: 600;
                font-size: 1.5rem;
            }
            
            .coming-soon-message p {
                color: #666;
                line-height: 1.6;
                max-width: 400px;
                margin: 0 auto;
                font-size: 1.1rem;
            }
            
            /* Hidden Items */
            .hidden-item {
                display: none;
            }
            
            /* Responsive Modal */
            @media (max-width: 768px) {
                .gallery-modal {
                    padding: 10px;
                }
                
                .modal-content {
                    max-width: 95%;
                    max-height: 95vh;
                }
                
                .modal-caption {
                    padding: 20px;
                }
                
                .modal-caption h3 {
                    font-size: 1.3rem;
                }
                
                .modal-close {
                    top: 10px;
                    right: 10px;
                    width: 35px;
                    height: 35px;
                }
                
                .coming-soon-message {
                    padding: 40px 20px;
                }
                
                .coming-soon-message h3 {
                    font-size: 1.3rem;
                }
            }
        `;
    }
}

// ========================================
// INITIALIZATION
// ========================================

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new AboutPage();
});