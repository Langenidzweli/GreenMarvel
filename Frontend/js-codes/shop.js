// shop.js - Complete JavaScript for the redesigned shop page

// (Filter and Sort UI removed) - related initialization and helper functions were removed

// Initialize product carousels
function initProductCarousels() {
    const carousels = document.querySelectorAll('.products-carousel');
    
    carousels.forEach(carousel => {
        const prevBtn = carousel.querySelector('.prev-btn');
        const nextBtn = carousel.querySelector('.next-btn');
        const productsGrid = carousel.querySelector('.products-grid');
        const dots = carousel.querySelectorAll('.dot');
        
        let currentSlide = 0;
        const totalSlides = dots.length;
        
        // Previous button functionality
        if (prevBtn) {
            prevBtn.addEventListener('click', function() {
                currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
                updateCarousel(carousel, currentSlide);
            });
        }
        
        // Next button functionality
        if (nextBtn) {
            nextBtn.addEventListener('click', function() {
                currentSlide = (currentSlide + 1) % totalSlides;
                updateCarousel(carousel, currentSlide);
            });
        }
        
        // Dot navigation
        dots.forEach((dot, index) => {
            dot.addEventListener('click', function() {
                currentSlide = index;
                updateCarousel(carousel, currentSlide);
            });
        });
        
        // Initialize carousel
        updateCarousel(carousel, currentSlide);
        
        // Auto-advance carousel (optional)
        let autoAdvance = setInterval(() => {
            currentSlide = (currentSlide + 1) % totalSlides;
            updateCarousel(carousel, currentSlide);
        }, 5000);
        
        // Pause auto-advance on hover
        carousel.addEventListener('mouseenter', () => {
            clearInterval(autoAdvance);
        });
        
        carousel.addEventListener('mouseleave', () => {
            autoAdvance = setInterval(() => {
                currentSlide = (currentSlide + 1) % totalSlides;
                updateCarousel(carousel, currentSlide);
            }, 5000);
        });
    });
}

// Update carousel display
function updateCarousel(carousel, slideIndex) {
    const productsGrid = carousel.querySelector('.products-grid');
    const dots = carousel.querySelectorAll('.dot');
    const prevBtn = carousel.querySelector('.prev-btn');
    const nextBtn = carousel.querySelector('.next-btn');
    
    // Update active dot
    dots.forEach(dot => dot.classList.remove('active'));
    if (dots[slideIndex]) {
        dots[slideIndex].classList.add('active');
    }
    
    // Update transform for slide
    const slideWidth = 100 / 3; // 3 products per slide
    productsGrid.style.transform = `translateX(-${slideIndex * slideWidth}%)`;
    
    // Update button states
    if (prevBtn && nextBtn) {
        prevBtn.disabled = slideIndex === 0;
        nextBtn.disabled = slideIndex === dots.length - 1;
    }
}

// View options removed (UI removed from page)

// Initialize add to cart functionality
function initAddToCart() {
    const addToCartBtns = document.querySelectorAll('.add-to-cart-btn');
    
    addToCartBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const productContainer = this.closest('.product-container');
            const productName = productContainer.querySelector('.product-name').textContent;
            const productPrice = productContainer.querySelector('.product-price').textContent;
            
            // Add to cart logic here
            addToCart({
                name: productName,
                price: productPrice,
                // Add other product details as needed
            });
            
            // Show confirmation
            showCartConfirmation(productName);
        });
    });
}

// Add product to cart
function addToCart(product) {
    // Get existing cart or initialize empty array
    let cart = JSON.parse(localStorage.getItem('shoppingCart') || '[]');
    
    // Check if product already exists in cart
    const existingProductIndex = cart.findIndex(item => item.name === product.name);
    
    if (existingProductIndex > -1) {
        // Increment quantity if product already in cart
        cart[existingProductIndex].quantity = (cart[existingProductIndex].quantity || 1) + 1;
    } else {
        // Add new product to cart
        product.quantity = 1;
        cart.push(product);
    }
    
    // Save updated cart to localStorage
    localStorage.setItem('shoppingCart', JSON.stringify(cart));
    
    // Update cart count in header
    updateCartCount();
}

// Update cart count in header
function updateCartCount() {
    const cartCounts = document.querySelectorAll('.cart-count');
    const cart = JSON.parse(localStorage.getItem('shoppingCart') || '[]');
    const totalItems = cart.reduce((total, item) => total + (item.quantity || 1), 0);
    
    cartCounts.forEach(cartCount => {
        if (cartCount) {
            cartCount.textContent = totalItems;
            cartCount.style.display = totalItems > 0 ? 'flex' : 'none';
        }
    });
}

// Show cart confirmation
function showCartConfirmation(productName) {
    // Create and show a confirmation message
    const confirmation = document.createElement('div');
    confirmation.className = 'cart-confirmation';
    confirmation.innerHTML = `
        <i class="fas fa-check-circle"></i>
        <span>${productName} added to cart</span>
    `;
    
    document.body.appendChild(confirmation);
    
    // Show with animation
    setTimeout(() => {
        confirmation.classList.add('show');
    }, 10);
    
    // Hide after delay
    setTimeout(() => {
        confirmation.classList.remove('show');
        setTimeout(() => {
            if (confirmation.parentNode) {
                confirmation.parentNode.removeChild(confirmation);
            }
        }, 300);
    }, 3000);
}

// Initialize cart count on page load
function initCartCount() {
    updateCartCount();
}

// Product search functionality
function initProductSearch() {
    const searchInput = document.querySelector('.search-input');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            filterProductsBySearch(searchTerm);
        });
    }
}

// Filter products by search term
function filterProductsBySearch(searchTerm) {
    const products = document.querySelectorAll('.product-container');
    
    products.forEach(product => {
        const productName = product.querySelector('.product-name').textContent.toLowerCase();
        const productDescription = product.querySelector('.product-description').textContent.toLowerCase();
        
        if (productName.includes(searchTerm) || productDescription.includes(searchTerm)) {
            product.style.display = 'flex';
        } else {
            product.style.display = 'none';
        }
    });
}

// Initialize all functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initProductCarousels();
    initAddToCart();
    initCartCount();
    initProductSearch();
});

// Export functions for use in other modules if needed
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initProductCarousels,
        initAddToCart,
        initCartCount,
        initProductSearch
    };
}