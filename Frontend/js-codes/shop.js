// ========================================
// COMPACT QUICK VIEW MODAL FUNCTIONALITY
// ========================================

// Product data with complete descriptions
const productData = {
    1: {
        id: 1,
        name: "Growth Oil",
        badge: "BEST SELLER",
        rating: 5,
        ratingCount: 128,
        price: 130.00,
        originalPrice: null,
        size: "100ml",
        description: "Essential for all hair types for everyone",
        fullDescription: "Our premium Growth Oil is specially formulated with 100% natural ingredients to stimulate hair growth and strengthen hair follicles. Perfect for all hair types including color-treated hair. Regular use promotes thicker, healthier hair and reduces breakage.",
        features: [
            "Stimulates natural hair growth",
            "Strengthens hair follicles",
            "Nourishes and moisturizes scalp",
            "Reduces hair breakage and split ends",
            "Suitable for all hair types",
            "100% natural ingredients"
        ],
        images: [
            "../img/Growth-Oil.png",
            "../img/Growth-Oil-2.jpg",
            "../img/Growth-Oil-3.jpg"
        ],
        sizes: ["50ml", "100ml", "200ml"],
        inStock: true,
        sku: "GM-GO-100"
    },
    2: {
        id: 2,
        name: "Vitality Hair Spray",
        badge: "POPULAR",
        rating: 5,
        ratingCount: 96,
        price: 130.00,
        originalPrice: null,
        size: "100ml",
        description: "Penetrates into the scalp for maximal results",
        fullDescription: "Vitality Hair Spray combines the benefits of a treatment product with the convenience of a styling spray. It penetrates deep into the scalp to deliver essential nutrients while providing flexible hold and fighting frizz. Enriched with natural proteins for daily use.",
        features: [
            "Deep scalp penetration for maximum results",
            "Flexible natural hold without stiffness",
            "Fights dryness and frizz effectively",
            "Enriched with natural proteins",
            "Suitable for daily use",
            "Alcohol-free formula"
        ],
        images: [
            "../img/Vitality-Spray.png",
            "../img/Vitality-Spray-2.jpg"
        ],
        sizes: ["100ml", "200ml"],
        inStock: true,
        sku: "GM-VS-100"
    },
    3: {
        id: 3,
        name: "Hair Food",
        badge: "NEW",
        rating: 5,
        ratingCount: 87,
        price: 120.00,
        originalPrice: null,
        size: "100ml",
        description: "Protect your scalp and nurture your hair",
        fullDescription: "Hair Food is a deeply conditioning treatment that protects both your scalp and hair. Formulated with natural butters and oils, it repairs damage, restores moisture balance, and creates a protective barrier against environmental stressors. Use weekly for optimal results.",
        features: [
            "Deep conditioning treatment",
            "Protects scalp from damage",
            "Restores moisture balance",
            "Repairs damaged hair structure",
            "Weekly treatment for best results",
            "Natural butters and oils"
        ],
        images: [
            "../img/hairfood.png",
            "../img/hairfood-2.jpg"
        ],
        sizes: ["100ml", "200ml"],
        inStock: true,
        sku: "GM-HF-100"
    },
    4: {
        id: 4,
        name: "Repair Serum",
        badge: null,
        rating: 4,
        ratingCount: 64,
        price: 150.00,
        originalPrice: null,
        size: "50ml",
        description: "Deep repair for damaged and brittle hair",
        fullDescription: "Our Intensive Repair Serum is a concentrated formula designed to repair damaged hair at the cellular level. It restores strength, elasticity, and shine to brittle hair while preventing future breakage. Enriched with keratin proteins for structural repair.",
        features: [
            "Cellular level hair repair",
            "Restores strength and elasticity",
            "Prevents future breakage",
            "Keratin enriched formula",
            "Concentrated repair serum",
            "For severely damaged hair"
        ],
        images: [
            "../img/Growth-Oil.png",
            "../img/repair-serum-2.jpg"
        ],
        sizes: ["50ml", "100ml"],
        inStock: true,
        sku: "GM-IR-50"
    },
    5: {
        id: 5,
        name: "Hair Care Kit",
        badge: "COMBO",
        rating: 5,
        ratingCount: 42,
        price: 350.00,
        originalPrice: 400.00,
        size: "3 Items",
        description: "Everything you need for healthy hair growth",
        fullDescription: "Our Complete Hair Care Kit includes our three best-selling products: Growth Oil, Hair Food, and Vitality Spray. This comprehensive system provides everything you need for healthy hair growth and maintenance. Save 15% compared to buying individually.",
        features: [
            "Complete hair care system",
            "Save 15% on bundle price",
            "Includes 3 best-selling products",
            "Synergistic results when used together",
            "Perfect starter kit for new users",
            "Comprehensive hair solution"
        ],
        images: [
            "../img/kit-main.jpg",
            "../img/kit-content.jpg"
        ],
        sizes: ["Standard Kit"],
        inStock: true,
        sku: "GM-KIT-001"
    },
    6: {
        id: 6,
        name: "Scalp Treatment",
        badge: null,
        rating: 4,
        ratingCount: 53,
        price: 110.00,
        originalPrice: null,
        size: "100ml",
        description: "Soothes and revitalizes your scalp",
        fullDescription: "Scalp Treatment is specially formulated to soothe irritation, balance oil production, and remove product buildup. With tea tree oil and aloe vera, it refreshes and revitalizes your scalp, creating the optimal environment for healthy hair growth.",
        features: [
            "Soothes scalp irritation",
            "Balances oil production",
            "Removes product buildup",
            "Tea tree oil and aloe vera",
            "Creates optimal growth environment",
            "Refreshes and revitalizes"
        ],
        images: [
            "../img/hairfood.png",
            "../img/scalp-treatment-2.jpg"
        ],
        sizes: ["100ml", "200ml"],
        inStock: true,
        sku: "GM-ST-100"
    }
};

// Initialize quick view functionality
function initializeQuickView() {
    const quickViewButtons = document.querySelectorAll('.quick-view');
    const quickViewModal = document.querySelector('.quick-view-modal');
    const closeModal = document.querySelector('.close-modal');
    
    // Open modal on quick view button click
    quickViewButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productId = this.getAttribute('data-product');
            openQuickViewModal(productId);
        });
    });
    
    // Close modal on close button click
    closeModal.addEventListener('click', function() {
        closeQuickViewModal();
    });
    
    // Close modal when clicking outside
    quickViewModal.addEventListener('click', function(e) {
        if (e.target === this) {
            closeQuickViewModal();
        }
    });
    
    // Close modal on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && quickViewModal.classList.contains('active')) {
            closeQuickViewModal();
        }
    });
    
    // Add ARIA attributes for accessibility
    quickViewModal.setAttribute('aria-hidden', 'true');
    quickViewModal.setAttribute('aria-labelledby', 'modal-title');
    quickViewModal.setAttribute('role', 'dialog');
}

// Open quick view modal
function openQuickViewModal(productId) {
    const product = productData[productId];
    if (!product) return;
    
    const modal = document.querySelector('.quick-view-modal');
    
    // Update modal content with product data
    updateModalContent(product);
    
    // Initialize image gallery
    initializeImageGallery(product.images);
    
    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Focus management for accessibility
    modal.setAttribute('aria-hidden', 'false');
    document.querySelector('.close-modal').focus();
}

// Close quick view modal
function closeQuickViewModal() {
    const modal = document.querySelector('.quick-view-modal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
    modal.setAttribute('aria-hidden', 'true');
}

// Update modal content with product data
function updateModalContent(product) {
    // Update basic product info
    const badgeElement = document.querySelector('.product-badge-modal');
    badgeElement.textContent = product.badge || '';
    badgeElement.style.display = product.badge ? 'inline-block' : 'none';
    
    document.querySelector('.product-title').textContent = product.name;
    document.querySelector('.stars-modal').textContent = '★'.repeat(product.rating) + '☆'.repeat(5 - product.rating);
    document.querySelector('.rating-count-modal').textContent = `(${product.ratingCount})`;
    
    // Update price
    const priceElement = document.querySelector('.product-price-modal');
    priceElement.innerHTML = `R ${product.price.toFixed(2)}`;
    if (product.originalPrice) {
        priceElement.innerHTML += ` <span class="original-price-modal">R ${product.originalPrice.toFixed(2)}</span>`;
    }
    
    // Update description
    document.querySelector('.product-description-modal').textContent = product.fullDescription;
    
    // Update features
    const featureList = document.querySelector('.feature-list');
    featureList.innerHTML = '';
    product.features.forEach(feature => {
        const li = document.createElement('li');
        li.innerHTML = `<i class="fas fa-check"></i> ${feature}`;
        featureList.appendChild(li);
    });
    
    // Update size options
    const sizeButtons = document.querySelector('.size-buttons');
    sizeButtons.innerHTML = '';
    product.sizes.forEach(size => {
        const button = document.createElement('button');
        button.className = 'size-btn';
        button.textContent = size;
        if (size === product.size) {
            button.classList.add('active');
        }
        button.addEventListener('click', function() {
            document.querySelectorAll('.size-btn').forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        });
        sizeButtons.appendChild(button);
    });
    
    // Update product meta
    document.querySelector('.sku-value').textContent = product.sku;
    const stockElement = document.querySelector('.stock-value');
    stockElement.textContent = product.inStock ? 'In Stock' : 'Out of Stock';
    stockElement.style.color = product.inStock ? '#46853c' : '#e74c3c';
    
    // Update wishlist button
    const wishlistBtn = document.querySelector('.wishlist-btn-modal');
    wishlistBtn.classList.toggle('active', isProductInWishlist(product.id));
    wishlistBtn.setAttribute('data-product', product.id);
    
    // Update add to cart button
    const addToCartBtn = document.querySelector('.add-to-cart-btn-modal');
    addToCartBtn.setAttribute('data-product', product.id);
    
    // Reset quantity
    initializeQuantitySelector();
}

// Initialize image gallery
function initializeImageGallery(images) {
    const mainImage = document.querySelector('.main-product-image');
    const thumbnailsContainer = document.querySelector('.image-thumbnails');
    
    // Clear existing thumbnails
    thumbnailsContainer.innerHTML = '';
    
    // Set main image
    mainImage.src = images[0] || '../img/Growth-Oil.png';
    mainImage.alt = 'Product Image';
    
    // Create thumbnails (limit to 4 for compact layout)
    const displayImages = images.slice(0, 4);
    displayImages.forEach((image, index) => {
        const thumbnail = document.createElement('img');
        thumbnail.className = 'thumbnail';
        thumbnail.src = image || '../img/Growth-Oil.png';
        thumbnail.alt = `Thumbnail ${index + 1}`;
        
        if (index === 0) {
            thumbnail.classList.add('active');
        }
        
        thumbnail.addEventListener('click', function() {
            // Update main image
            mainImage.src = image || '../img/Growth-Oil.png';
            
            // Update active thumbnail
            document.querySelectorAll('.thumbnail').forEach(thumb => {
                thumb.classList.remove('active');
            });
            this.classList.add('active');
        });
        
        thumbnailsContainer.appendChild(thumbnail);
    });
}

// Initialize quantity selector
function initializeQuantitySelector() {
    const quantityDisplay = document.querySelector('.quantity-display');
    const decreaseBtn = document.querySelector('.quantity-btn.decrease');
    const increaseBtn = document.querySelector('.quantity-btn.increase');
    
    let quantity = 1;
    
    // Update quantity display
    function updateQuantityDisplay() {
        quantityDisplay.textContent = quantity;
    }
    
    // Decrease quantity
    decreaseBtn.addEventListener('click', function() {
        if (quantity > 1) {
            quantity--;
            updateQuantityDisplay();
        }
    });
    
    // Increase quantity
    increaseBtn.addEventListener('click', function() {
        if (quantity < 10) { // Limit to 10 for UX
            quantity++;
            updateQuantityDisplay();
        }
    });
    
    // Initialize display
    updateQuantityDisplay();
}

// Wishlist functionality
function isProductInWishlist(productId) {
    const wishlist = JSON.parse(localStorage.getItem('greenMarvelWishlist') || '[]');
    return wishlist.includes(productId.toString());
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeQuickView();
    initializeFilters();
    initializeSorting();
    initializeViewToggle();
    initializeWishlist();
    initializeAddToCart();
    initializePagination();
    initializeProductBadges();
    updateCartCounter();
    
    // Set data-id attributes for products (for sorting)
    document.querySelectorAll('.product-container').forEach((container, index) => {
        container.setAttribute('data-id', index + 1);
    });
});

// Filter Functionality
function initializeFilters() {
    const filterToggle = document.querySelector('.filter-toggle');
    const filterSection = document.querySelector('.filter-section');
    const applyFiltersBtn = document.querySelector('.apply-filters');
    const priceSlider = document.querySelector('.price-slider');
    const sizeOptions = document.querySelectorAll('.size-option');
    const categoryCheckboxes = document.querySelectorAll('.filter-checkbox input');
    
    // Toggle filter options
    filterToggle.addEventListener('click', function() {
        filterSection.classList.toggle('active');
    });
    
    // Close filters when clicking outside
    document.addEventListener('click', function(e) {
        if (!filterSection.contains(e.target) && !filterToggle.contains(e.target)) {
            filterSection.classList.remove('active');
        }
    });
    
    // Update price range display
    if (priceSlider) {
        priceSlider.addEventListener('input', function() {
            const priceValues = this.parentElement.querySelector('.price-values');
            const maxPrice = this.value;
            priceValues.innerHTML = `<span>R0</span><span>R${maxPrice}</span>`;
        });
    }
    
    // Size option selection
    sizeOptions.forEach(option => {
        option.addEventListener('click', function() {
            sizeOptions.forEach(opt => opt.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Apply filters
    applyFiltersBtn.addEventListener('click', function() {
        applyFilters();
        filterSection.classList.remove('active');
    });
}

function applyFilters() {
    const products = document.querySelectorAll('.product-container');
    const selectedCategories = getSelectedCategories();
    const maxPrice = parseInt(document.querySelector('.price-slider').value);
    const selectedSize = document.querySelector('.size-option.active').getAttribute('data-size');
    
    let visibleCount = 0;
    
    products.forEach(product => {
        const productPrice = parseInt(product.getAttribute('data-price'));
        const productCategory = product.getAttribute('data-category');
        const productSize = product.getAttribute('data-size');
        
        const categoryMatch = selectedCategories.includes('all') || selectedCategories.includes(productCategory);
        const priceMatch = productPrice <= maxPrice;
        const sizeMatch = selectedSize === 'all' || productSize === selectedSize;
        
        if (categoryMatch && priceMatch && sizeMatch) {
            product.style.display = 'flex';
            visibleCount++;
        } else {
            product.style.display = 'none';
        }
    });
    
    // Update product count
    document.querySelector('.products-count').textContent = `Showing ${visibleCount} products`;
}

function getSelectedCategories() {
    const selectedCategories = [];
    document.querySelectorAll('.filter-checkbox input:checked').forEach(checkbox => {
        selectedCategories.push(checkbox.getAttribute('data-category'));
    });
    return selectedCategories;
}

// Sorting Functionality
function initializeSorting() {
    const sortSelect = document.getElementById('sort');
    
    sortSelect.addEventListener('change', function() {
        sortProducts(this.value);
    });
}

function sortProducts(sortBy) {
    const productsGrid = document.getElementById('productsGrid');
    const products = Array.from(document.querySelectorAll('.product-container'));
    
    products.sort((a, b) => {
        switch (sortBy) {
            case 'price-low':
                return parseFloat(a.getAttribute('data-price')) - parseFloat(b.getAttribute('data-price'));
            case 'price-high':
                return parseFloat(b.getAttribute('data-price')) - parseFloat(a.getAttribute('data-price'));
            case 'rating':
                return parseFloat(b.getAttribute('data-rating')) - parseFloat(a.getAttribute('data-rating'));
            case 'newest':
                // For demo, we'll sort by ID (assuming higher ID = newer)
                return parseInt(b.getAttribute('data-id')) - parseInt(a.getAttribute('data-id'));
            case 'featured':
            default:
                return 0; // Keep original order
        }
    });
    
    // Reappend sorted products
    products.forEach(product => {
        productsGrid.appendChild(product);
    });
}

// View Toggle Functionality
function initializeViewToggle() {
    const viewOptions = document.querySelectorAll('.view-option');
    const productsGrid = document.getElementById('productsGrid');
    
    viewOptions.forEach(option => {
        option.addEventListener('click', function() {
            // Remove active class from all options
            viewOptions.forEach(opt => opt.classList.remove('active'));
            // Add active class to clicked option
            this.classList.add('active');
            
            // Update grid view
            const viewType = this.getAttribute('data-view');
            productsGrid.className = 'products-grid';
            if (viewType === 'list') {
                productsGrid.classList.add('list-view');
            }
        });
    });
}

// Wishlist Functionality
function initializeWishlist() {
    const wishlistIcons = document.querySelectorAll('.wishlist-icon');
    const modalWishlistBtn = document.querySelector('.wishlist-btn-modal');
    
    // Product grid wishlist icons
    wishlistIcons.forEach(icon => {
        icon.addEventListener('click', function() {
            const productContainer = this.closest('.product-container');
            const productId = getProductIdFromContainer(productContainer);
            
            toggleWishlist(productId, this);
        });
    });
    
    // Modal wishlist button
    if (modalWishlistBtn) {
        modalWishlistBtn.addEventListener('click', function() {
            const productId = this.getAttribute('data-product');
            toggleWishlist(productId, this);
            
            // Also update the product grid icon if visible
            const gridIcon = document.querySelector(`.product-container[data-id="${productId}"] .wishlist-icon`);
            if (gridIcon) {
                gridIcon.classList.toggle('active', this.classList.contains('active'));
            }
        });
    }
}

function toggleWishlist(productId, element) {
    const isActive = element.classList.contains('active');
    
    if (isActive) {
        element.classList.remove('active');
        removeFromWishlist(productId);
        showNotification('Product removed from wishlist', 'info');
    } else {
        element.classList.add('active');
        addToWishlist(productId);
        showNotification('Product added to wishlist', 'success');
    }
}

function addToWishlist(productId) {
    let wishlist = JSON.parse(localStorage.getItem('greenMarvelWishlist') || '[]');
    if (!wishlist.includes(productId)) {
        wishlist.push(productId);
        localStorage.setItem('greenMarvelWishlist', JSON.stringify(wishlist));
    }
}

function removeFromWishlist(productId) {
    let wishlist = JSON.parse(localStorage.getItem('greenMarvelWishlist') || '[]');
    wishlist = wishlist.filter(id => id !== productId);
    localStorage.setItem('greenMarvelWishlist', JSON.stringify(wishlist));
}

function getProductIdFromContainer(container) {
    // This is a helper function to get product ID from product container
    const productName = container.querySelector('.product-name').textContent;
    for (const [id, product] of Object.entries(productData)) {
        if (product.name === productName) {
            return id;
        }
    }
    return null;
}

// Add to Cart Functionality
function initializeAddToCart() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
    const modalAddToCartBtn = document.querySelector('.add-to-cart-btn-modal');
    
    // Product grid add to cart buttons
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productContainer = this.closest('.product-container');
            const productId = getProductIdFromContainer(productContainer);
            const product = productData[productId];
            
            if (product) {
                addToCart(product, 1);
                showAddToCartAnimation(this);
            }
        });
    });
    
    // Modal add to cart button
    if (modalAddToCartBtn) {
        modalAddToCartBtn.addEventListener('click', function() {
            const productId = this.getAttribute('data-product');
            const product = productData[productId];
            const quantity = parseInt(document.querySelector('.quantity-display').textContent);
            
            if (product) {
                addToCart(product, quantity);
                showAddToCartAnimation(this);
                closeQuickViewModal();
            }
        });
    }
}

function addToCart(product, quantity) {
    let cart = JSON.parse(localStorage.getItem('greenMarvelCart') || '[]');
    
    // Check if product already in cart
    const existingItemIndex = cart.findIndex(item => item.id === product.id);
    
    if (existingItemIndex > -1) {
        // Update quantity
        cart[existingItemIndex].quantity += quantity;
    } else {
        // Add new item
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: quantity,
            image: product.images[0],
            size: product.size
        });
    }
    
    localStorage.setItem('greenMarvelCart', JSON.stringify(cart));
    updateCartCounter();
    showNotification(`${product.name} added to cart`, 'success');
}

function showAddToCartAnimation(button) {
    const originalText = button.textContent;
    button.textContent = 'Adding...';
    button.style.backgroundColor = '#3a6f32';
    
    setTimeout(() => {
        button.textContent = 'Added!';
        button.style.backgroundColor = '#46853c';
        
        setTimeout(() => {
            button.textContent = originalText;
            button.style.backgroundColor = '#003300';
        }, 1000);
    }, 500);
}

function updateCartCounter() {
    const cart = JSON.parse(localStorage.getItem('greenMarvelCart') || '[]');
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    
    // Update cart counter in navigation
    const cartIcons = document.querySelectorAll('.cart-icon');
    cartIcons.forEach(icon => {
        // Remove existing counter
        const existingCounter = icon.querySelector('.cart-counter');
        if (existingCounter) {
            existingCounter.remove();
        }
        
        // Add new counter if items in cart
        if (totalItems > 0) {
            const counter = document.createElement('span');
            counter.className = 'cart-counter';
            counter.textContent = totalItems;
            counter.style.cssText = `
                position: absolute;
                top: -5px;
                right: -5px;
                background: #e74c3c;
                color: white;
                border-radius: 50%;
                width: 18px;
                height: 18px;
                font-size: 0.7rem;
                display: flex;
                align-items: center;
                justify-content: center;
                font-weight: bold;
            `;
            icon.style.position = 'relative';
            icon.appendChild(counter);
        }
    });
}

// Pagination
function initializePagination() {
    const pageButtons = document.querySelectorAll('.page-btn');
    
    pageButtons.forEach(button => {
        button.addEventListener('click', function() {
            if (!this.classList.contains('active') && !this.classList.contains('next')) {
                // Remove active class from all buttons
                pageButtons.forEach(btn => btn.classList.remove('active'));
                // Add active class to clicked button
                this.classList.add('active');
                
                // In a real implementation, this would load the corresponding page
                // For demo, we'll just show a message
                showNotification(`Loading page ${this.textContent}`, 'info');
            } else if (this.classList.contains('next')) {
                // Handle next button
                const activePage = document.querySelector('.page-btn.active');
                const nextPage = parseInt(activePage.textContent) + 1;
                
                if (nextPage <= 3) {
                    pageButtons.forEach(btn => btn.classList.remove('active'));
                    document.querySelector(`.page-btn:nth-child(${nextPage})`).classList.add('active');
                    showNotification(`Loading page ${nextPage}`, 'info');
                }
            }
        });
    });
}

// Utility Functions
function initializeProductBadges() {
    const badges = document.querySelectorAll('.product-badge');
    const badgeColors = {
        'BEST SELLER': '#46853c',
        'POPULAR': '#e74c3c',
        'NEW': '#3498db',
        'COMBO': '#9b59b6'
    };
    
    badges.forEach(badge => {
        const badgeText = badge.textContent.trim();
        if (badgeColors[badgeText]) {
            badge.style.backgroundColor = badgeColors[badgeText];
        }
    });
}

function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#46853c' : type === 'error' ? '#e74c3c' : '#3498db'};
        color: white;
        padding: 15px 20px;
        border-radius: 6px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        z-index: 3000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}