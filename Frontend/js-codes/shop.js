// shop.js - Complete JavaScript for the redesigned shop page (No Pop-ups)

// Initialize all functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initProductCarousels();
    initAddToCartButtons();
    initWishlistButtons();
    initCartCount();
});

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

// Initialize add to cart buttons
function initAddToCartButtons() {
    const addToCartBtns = document.querySelectorAll('.add-to-cart-btn');
    
    addToCartBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const productId = parseInt(this.getAttribute('data-product-id'));
            const productName = this.getAttribute('data-product-name');
            const productPrice = parseFloat(this.getAttribute('data-product-price'));
            const productSize = this.getAttribute('data-product-size');
            const productImage = this.getAttribute('data-product-image');
            
            // Add to cart
            addToCart({
                id: productId,
                name: productName,
                price: productPrice,
                size: productSize,
                image: productImage,
                quantity: 1
            });
            
            // Update button state temporarily
            updateButtonState(this);
        });
    });
}

// Initialize wishlist buttons
function initWishlistButtons() {
    const wishlistBtns = document.querySelectorAll('.wishlist-btn');
    
    wishlistBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            this.classList.toggle('active');
            const heartIcon = this.querySelector('i');
            heartIcon.classList.toggle('far');
            heartIcon.classList.toggle('fas');
        });
    });
}

// Add product to cart - COMPATIBLE WITH PRODUCT DETAIL PAGE
function addToCart(product) {
    // Get existing cart or initialize empty array
    let cart = JSON.parse(localStorage.getItem('greenMarvelCart') || '[]');
    
    // Check if product already exists in cart (by id ONLY)
    const existingProductIndex = cart.findIndex(item => 
        item.id === product.id
    );
    
    if (existingProductIndex > -1) {
        // Increment quantity if product already in cart
        cart[existingProductIndex].quantity += product.quantity;
    } else {
        // Add new product to cart
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            size: product.size,
            image: product.image,
            quantity: product.quantity || 1
        });
    }
    
    // Save updated cart to localStorage
    localStorage.setItem('greenMarvelCart', JSON.stringify(cart));
    
    // Update cart count in header
    updateCartCount();
    
    return cart;
}

// Update button state after adding to cart
function updateButtonState(button) {
    const originalText = button.innerHTML;
    button.innerHTML = '<i class="fas fa-check"></i> Added!';
    button.classList.add('added');
    
    setTimeout(() => {
        button.innerHTML = originalText;
        button.classList.remove('added');
    }, 1000);
}

// Update cart count in header
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('greenMarvelCart') || '[]');
    const totalItems = cart.reduce((total, item) => total + (item.quantity || 1), 0);
    
    // Update cart count in header
    const cartCounts = document.querySelectorAll('.cart-count');
    cartCounts.forEach(cartCount => {
        if (cartCount) {
            cartCount.textContent = totalItems;
            cartCount.style.display = totalItems > 0 ? 'flex' : 'none';
        }
    });
}

// Initialize cart count on page load
function initCartCount() {
    updateCartCount();
}

// Product search functionality (if search input exists)
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