// ========================================
// PRODUCT DATA
// ========================================

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
        category: "growth-oil",
        type: "regular",
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
        category: "hair-spray",
        type: "regular",
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
        category: "hair-food",
        type: "regular",
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
        category: "growth-oil",
        type: "regular",
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
        sizes: ["50ml", "100ml"],
        inStock: true,
        sku: "GM-IR-50"
    },
    5: {
        id: 5,
        name: "Complete Hair Care Kit",
        badge: "COMBO",
        rating: 5,
        ratingCount: 42,
        price: 350.00,
        originalPrice: 400.00,
        size: "3 Items",
        category: "combo",
        type: "combo",
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
        category: "hair-food",
        type: "regular",
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
        sizes: ["100ml", "200ml"],
        inStock: true,
        sku: "GM-ST-100"
    },
    7: {
        id: 7,
        name: "Growth & Repair Duo",
        badge: "COMBO",
        rating: 5,
        ratingCount: 38,
        price: 240.00,
        originalPrice: 280.00,
        size: "2 Items",
        category: "combo",
        type: "combo",
        description: "Powerful combination for hair growth and repair",
        fullDescription: "This powerful duo combines our best-selling Growth Oil with our intensive Repair Serum for maximum results. Perfect for those dealing with hair loss and damage, this combination accelerates growth while repairing existing damage.",
        features: [
            "Accelerates hair growth",
            "Repairs existing damage",
            "Saves 15% on individual prices",
            "Perfect for damaged hair",
            "Synergistic formula combination",
            "Visible results in 4-6 weeks"
        ],
        sizes: ["Duo Pack"],
        inStock: true,
        sku: "GM-DUO-001"
    },
    8: {
        id: 8,
        name: "Luxury Hair Bundle",
        badge: "COMBO",
        rating: 5,
        ratingCount: 29,
        price: 450.00,
        originalPrice: 550.00,
        size: "4 Items",
        category: "combo",
        type: "combo",
        description: "Ultimate luxury hair care experience",
        fullDescription: "Our Luxury Hair Bundle includes all our premium products plus exclusive accessories. Experience the ultimate in hair care with this complete set that covers every aspect of hair health and styling.",
        features: [
            "Includes all premium products",
            "Exclusive hair care accessories",
            "Save over 20%",
            "Luxury packaging",
            "Complete hair care solution",
            "Perfect gift set"
        ],
        sizes: ["Luxury Bundle"],
        inStock: true,
        sku: "GM-LUX-001"
    },
    9: {
        id: 9,
        name: "Travel Size Trio",
        badge: "SPECIAL",
        rating: 4,
        ratingCount: 47,
        price: 90.00,
        originalPrice: 120.00,
        size: "3 Travel Items",
        category: "combo",
        type: "special",
        description: "Perfect for travel and on-the-go care",
        fullDescription: "Our Travel Size Trio includes mini versions of our three essential products. Perfect for travel, gym bags, or trying out our products before committing to full sizes. All the benefits in convenient travel-friendly packaging.",
        features: [
            "Travel-friendly sizes",
            "Perfect for trying products",
            "Save 25% on individual prices",
            "TSA compliant sizes",
            "All essential products included",
            "Great for gifts"
        ],
        sizes: ["Travel Pack"],
        inStock: true,
        sku: "GM-TRV-001"
    }
};

// ========================================
// CAROUSEL FUNCTIONALITY
// ========================================

function initializeCarousels() {
    const carousels = document.querySelectorAll('.products-carousel');
    
    carousels.forEach(carousel => {
        const prevBtn = carousel.querySelector('.prev-btn');
        const nextBtn = carousel.querySelector('.next-btn');
        const grid = carousel.querySelector('.products-grid');
        const dots = carousel.parentElement.querySelectorAll('.dot');
        const products = grid.querySelectorAll('.product-container');
        
        // Create slides array with 3 products per slide
        const slides = [];
        for (let i = 0; i < products.length; i += 3) {
            slides.push(Array.from(products).slice(i, i + 3));
        }
        
        let currentSlide = 0;
        
        function showSlide(slideIndex) {
            // Hide all products
            products.forEach(product => {
                product.style.display = 'none';
            });
            
            // Show products for current slide
            if (slides[slideIndex]) {
                slides[slideIndex].forEach(product => {
                    product.style.display = 'flex';
                });
            }
            
            // Update dots
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === slideIndex);
            });
            
            // Update button states
            if (prevBtn) prevBtn.disabled = slideIndex === 0;
            if (nextBtn) nextBtn.disabled = slideIndex === slides.length - 1;
            
            currentSlide = slideIndex;
        }
        
        // Initialize carousel
        showSlide(0);
        
        // Event listeners for buttons
        if (prevBtn) {
            prevBtn.addEventListener('click', function() {
                if (currentSlide > 0) {
                    showSlide(currentSlide - 1);
                }
            });
        }
        
        if (nextBtn) {
            nextBtn.addEventListener('click', function() {
                if (currentSlide < slides.length - 1) {
                    showSlide(currentSlide + 1);
                }
            });
        }
        
        // Event listeners for dots
        dots.forEach((dot, index) => {
            dot.addEventListener('click', function() {
                showSlide(index);
            });
        });
    });
}

// ========================================
// SHOP INITIALIZATION
// ========================================

function initializeShop() {
    console.log('Initializing Green Marvel Shop...');
    
    // Initialize functionality
    initializeCarousels();
    initializeQuickView();
    initializeFilters();
    initializeSorting();
    initializeViewToggle();
    initializeWishlist();
    initializeAddToCart();
    
    // Update cart counter
    updateCartCounter();
    
    console.log('Green Marvel Shop initialized successfully');
}

// ========================================
// QUICK VIEW MODAL FUNCTIONS
// ========================================

function initializeQuickView() {
    const quickViewButtons = document.querySelectorAll('.quick-view');
    const quickViewModal = document.getElementById('quickViewModal');
    const closeModal = document.getElementById('closeModal');
    const modalOverlay = document.getElementById('modalOverlay');
    
    if (!quickViewModal || !closeModal || !modalOverlay) {
        console.error('Quick view modal elements not found');
        return;
    }
    
    // Open modal on quick view button click
    quickViewButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const productId = this.getAttribute('data-product');
            openQuickViewModal(productId);
        });
    });
    
    // Close modal on close button click
    closeModal.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        closeQuickViewModal();
    });
    
    // Close modal when clicking on overlay
    modalOverlay.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        closeQuickViewModal();
    });
    
    // Close modal on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && quickViewModal.classList.contains('active')) {
            closeQuickViewModal();
        }
    });
    
    // Prevent modal content clicks from closing modal
    const modalContent = quickViewModal.querySelector('.modal-content');
    if (modalContent) {
        modalContent.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    }
}

function openQuickViewModal(productId) {
    const product = productData[productId];
    if (!product) {
        console.error('Product not found:', productId);
        return;
    }
    
    const modal = document.getElementById('quickViewModal');
    if (!modal) {
        console.error('Modal element not found');
        return;
    }

    // Update modal content with product data
    updateModalContent(product);
    
    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Focus management for accessibility
    modal.setAttribute('aria-hidden', 'false');
    const closeBtn = document.getElementById('closeModal');
    if (closeBtn) closeBtn.focus();
}

function closeQuickViewModal() {
    const modal = document.getElementById('quickViewModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
        modal.setAttribute('aria-hidden', 'true');
    }
}

function updateModalContent(product) {
    // Update basic product info
    const badgeElement = document.querySelector('.product-badge-modal');
    if (badgeElement) {
        badgeElement.textContent = product.badge || '';
        badgeElement.style.display = product.badge ? 'inline-block' : 'none';
    }
    
    const titleElement = document.querySelector('.product-title');
    if (titleElement) titleElement.textContent = product.name;
    
    const starsElement = document.querySelector('.stars-modal');
    if (starsElement) starsElement.textContent = '★'.repeat(product.rating) + '☆'.repeat(5 - product.rating);
    
    const ratingCountElement = document.querySelector('.rating-count-modal');
    if (ratingCountElement) ratingCountElement.textContent = `(${product.ratingCount} reviews)`;
    
    // Update price
    const priceElement = document.querySelector('.product-price-modal');
    if (priceElement) {
        priceElement.innerHTML = `R ${product.price.toFixed(2)}`;
        if (product.originalPrice) {
            priceElement.innerHTML += ` <span class="original-price">R ${product.originalPrice.toFixed(2)}</span>`;
        }
    }
    
    // Update description
    const descriptionElement = document.querySelector('.product-description-modal');
    if (descriptionElement) {
        descriptionElement.textContent = product.fullDescription;
    }
    
    // Update features
    const featureList = document.querySelector('.feature-list');
    if (featureList) {
        featureList.innerHTML = '';
        product.features.forEach(feature => {
            const li = document.createElement('li');
            li.innerHTML = `<i class="fas fa-check"></i> ${feature}`;
            featureList.appendChild(li);
        });
    }
    
    // Update size options
    const sizeButtons = document.querySelector('.size-buttons');
    if (sizeButtons) {
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
    }
    
    // Update product image
    const productImage = document.querySelector('.main-product-image');
    if (productImage) {
        productImage.src = `../img/${product.name.toLowerCase().replace(/ /g, '-')}.png`;
        productImage.alt = product.name;
    }
    
    // Update wishlist button
    const wishlistBtn = document.querySelector('.wishlist-btn-modal');
    if (wishlistBtn) {
        wishlistBtn.classList.toggle('active', isProductInWishlist(product.id));
        wishlistBtn.setAttribute('data-product', product.id);
    }
    
    // Update add to cart button
    const addToCartBtn = document.querySelector('.add-to-cart-btn-modal');
    if (addToCartBtn) {
        addToCartBtn.setAttribute('data-product', product.id);
    }
    
    // Reset quantity
    initializeQuantitySelector();
}

function initializeQuantitySelector() {
    const quantityDisplay = document.querySelector('.quantity-display');
    const decreaseBtn = document.querySelector('.quantity-btn.decrease');
    const increaseBtn = document.querySelector('.quantity-btn.increase');
    
    if (!quantityDisplay || !decreaseBtn || !increaseBtn) return;
    
    let quantity = 1;
    
    function updateQuantityDisplay() {
        quantityDisplay.textContent = quantity;
        decreaseBtn.disabled = quantity <= 1;
        increaseBtn.disabled = quantity >= 10;
    }
    
    decreaseBtn.addEventListener('click', function() {
        if (quantity > 1) {
            quantity--;
            updateQuantityDisplay();
        }
    });
    
    increaseBtn.addEventListener('click', function() {
        if (quantity < 10) {
            quantity++;
            updateQuantityDisplay();
        }
    });
    
    updateQuantityDisplay();
}

// ========================================
// FILTER FUNCTIONALITY
// ========================================

function initializeFilters() {
    const filterToggle = document.querySelector('.filter-toggle');
    const filterSection = document.querySelector('.filter-section');
    const applyFiltersBtn = document.querySelector('.apply-filters');
    const priceSlider = document.querySelector('.price-slider');
    const sizeOptions = document.querySelectorAll('.size-option');
    
    if (!filterToggle || !filterSection) return;
    
    filterToggle.addEventListener('click', function() {
        filterSection.classList.toggle('active');
    });
    
    document.addEventListener('click', function(e) {
        if (!filterSection.contains(e.target) && !filterToggle.contains(e.target)) {
            filterSection.classList.remove('active');
        }
    });
    
    if (priceSlider) {
        priceSlider.addEventListener('input', function() {
            const priceValues = this.parentElement.querySelector('.price-values');
            if (priceValues) {
                const maxPrice = this.value;
                priceValues.innerHTML = `<span>R0</span><span>R${maxPrice}</span>`;
            }
        });
    }
    
    sizeOptions.forEach(option => {
        option.addEventListener('click', function() {
            sizeOptions.forEach(opt => opt.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    if (applyFiltersBtn) {
        applyFiltersBtn.addEventListener('click', function() {
            applyFilters();
            filterSection.classList.remove('active');
        });
    }
}

function applyFilters() {
    const sections = document.querySelectorAll('.products-section');
    
    sections.forEach(section => {
        const products = section.querySelectorAll('.product-container');
        const selectedCategories = getSelectedCategories();
        const priceSlider = document.querySelector('.price-slider');
        const activeSizeOption = document.querySelector('.size-option.active');
        
        if (!priceSlider || !activeSizeOption) return;
        
        const maxPrice = parseInt(priceSlider.value);
        const selectedSize = activeSizeOption.getAttribute('data-size');
        
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
        
        // Reinitialize carousel after filtering
        initializeCarousels();
    });
}

function getSelectedCategories() {
    const selectedCategories = [];
    document.querySelectorAll('.filter-checkbox input:checked').forEach(checkbox => {
        selectedCategories.push(checkbox.getAttribute('data-category'));
    });
    return selectedCategories;
}

// ========================================
// SORTING FUNCTIONALITY
// ========================================

function initializeSorting() {
    const sortSelect = document.getElementById('sort');
    
    if (sortSelect) {
        sortSelect.addEventListener('change', function() {
            sortProducts(this.value);
        });
    }
}

function sortProducts(sortBy) {
    const sections = document.querySelectorAll('.products-section');
    
    sections.forEach(section => {
        const grid = section.querySelector('.products-grid');
        if (!grid) return;
        
        const products = Array.from(section.querySelectorAll('.product-container'));
        
        products.sort((a, b) => {
            switch (sortBy) {
                case 'price-low':
                    return parseFloat(a.getAttribute('data-price')) - parseFloat(b.getAttribute('data-price'));
                case 'price-high':
                    return parseFloat(b.getAttribute('data-price')) - parseFloat(a.getAttribute('data-price'));
                case 'rating':
                    return parseFloat(b.getAttribute('data-rating')) - parseFloat(a.getAttribute('data-rating'));
                case 'newest':
                    return parseInt(b.getAttribute('data-id')) - parseInt(a.getAttribute('data-id'));
                case 'featured':
                default:
                    return 0;
            }
        });
        
        // Reorder products in grid
        products.forEach(product => {
            grid.appendChild(product);
        });
        
        // Reinitialize carousel after sorting
        initializeCarousels();
    });
}

// ========================================
// VIEW TOGGLE FUNCTIONALITY
// ========================================

function initializeViewToggle() {
    const viewOptions = document.querySelectorAll('.view-option');
    
    viewOptions.forEach(option => {
        option.addEventListener('click', function() {
            const sections = document.querySelectorAll('.products-section');
            
            viewOptions.forEach(opt => opt.classList.remove('active'));
            this.classList.add('active');
            
            const viewType = this.getAttribute('data-view');
            
            sections.forEach(section => {
                const grid = section.querySelector('.products-grid');
                if (!grid) return;
                
                grid.className = 'products-grid';
                if (viewType === 'list') {
                    grid.classList.add('list-view');
                }
            });
            
            // Reinitialize carousel for new view
            initializeCarousels();
        });
    });
}

// ========================================
// WISHLIST FUNCTIONALITY
// ========================================

function initializeWishlist() {
    // Delegate events for dynamically loaded products
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('wishlist-icon') || e.target.closest('.wishlist-icon')) {
            const icon = e.target.classList.contains('wishlist-icon') ? e.target : e.target.closest('.wishlist-icon');
            const productContainer = icon.closest('.product-container');
            const productId = productContainer.getAttribute('data-id');
            toggleWishlist(productId, icon);
        }
    });
    
    const modalWishlistBtn = document.querySelector('.wishlist-btn-modal');
    if (modalWishlistBtn) {
        modalWishlistBtn.addEventListener('click', function() {
            const productId = this.getAttribute('data-product');
            if (productId) {
                toggleWishlist(productId, this);
                
                // Update heart icon
                const icon = this.querySelector('i');
                if (icon) {
                    if (this.classList.contains('active')) {
                        icon.className = 'fas fa-heart';
                    } else {
                        icon.className = 'far fa-heart';
                    }
                }
                
                // Sync with grid icon
                const gridIcon = document.querySelector(`.product-container[data-id="${productId}"] .wishlist-icon`);
                if (gridIcon) {
                    gridIcon.classList.toggle('active', this.classList.contains('active'));
                }
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

function isProductInWishlist(productId) {
    const wishlist = JSON.parse(localStorage.getItem('greenMarvelWishlist') || '[]');
    return wishlist.includes(productId.toString());
}

// ========================================
// ADD TO CART FUNCTIONALITY
// ========================================

function initializeAddToCart() {
    // Delegate events for dynamically loaded products
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('add-to-cart-btn') || e.target.closest('.add-to-cart-btn')) {
            const button = e.target.classList.contains('add-to-cart-btn') ? e.target : e.target.closest('.add-to-cart-btn');
            const productContainer = button.closest('.product-container');
            const productId = productContainer.getAttribute('data-id');
            const product = productData[productId];
            
            if (product) {
                addToCart(product, 1);
                showAddToCartAnimation(button);
            }
        }
    });
    
    const modalAddToCartBtn = document.querySelector('.add-to-cart-btn-modal');
    if (modalAddToCartBtn) {
        modalAddToCartBtn.addEventListener('click', function() {
            const productId = this.getAttribute('data-product');
            const product = productData[productId];
            const quantityDisplay = document.querySelector('.quantity-display');
            
            if (product && quantityDisplay) {
                const quantity = parseInt(quantityDisplay.textContent);
                addToCart(product, quantity);
                showAddToCartAnimation(this);
                closeQuickViewModal();
            }
        });
    }
}

function addToCart(product, quantity) {
    let cart = JSON.parse(localStorage.getItem('greenMarvelCart') || '[]');
    
    const existingItemIndex = cart.findIndex(item => item.id === product.id);
    
    if (existingItemIndex > -1) {
        cart[existingItemIndex].quantity += quantity;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: quantity,
            size: product.size,
            image: `../img/${product.name.toLowerCase().replace(/ /g, '-')}.png`
        });
    }
    
    localStorage.setItem('greenMarvelCart', JSON.stringify(cart));
    updateCartCounter();
    showNotification(`${product.name} added to cart`, 'success');
}

function showAddToCartAnimation(button) {
    const originalText = button.innerHTML;
    button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Adding...';
    button.style.backgroundColor = '#3a6f32';
    button.disabled = true;
    
    setTimeout(() => {
        button.innerHTML = '<i class="fas fa-check"></i> Added!';
        button.style.backgroundColor = '#46853c';
        
        setTimeout(() => {
            button.innerHTML = originalText;
            button.style.backgroundColor = '';
            button.disabled = false;
        }, 1000);
    }, 500);
}

function updateCartCounter() {
    const cart = JSON.parse(localStorage.getItem('greenMarvelCart') || '[]');
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    
    const cartIcons = document.querySelectorAll('.cart-icon');
    cartIcons.forEach(icon => {
        const existingCounter = icon.querySelector('.cart-counter');
        if (existingCounter) {
            existingCounter.remove();
        }
        
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

// ========================================
// UTILITY FUNCTIONS
// ========================================

function showNotification(message, type = 'info') {
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
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
        border-radius: 8px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// ========================================
// INITIALIZATION
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    initializeShop();
});

window.addEventListener('error', function(e) {
    console.error('JavaScript Error:', e.error);
});