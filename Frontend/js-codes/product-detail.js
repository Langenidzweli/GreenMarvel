// product-detail.js
// Product data array
const products = [
    {
        id: 1,
        name: 'Growth Oil',
        image: '../img/Growth-Oil.png',
        description: 'Premium natural formula for hair growth and scalp health. Stimulates hair follicles and strengthens hair from roots.',
        size: '100ml',
        price: 130,
        originalPrice: null,
        rating: 5,
        reviewCount: 128,
        howToUse: `
            <ol>
                <li>Shake the bottle well before use</li>
                <li>Apply a small amount (3-5 drops) to your fingertips</li>
                <li>Massage gently into your scalp using circular motions</li>
                <li>Focus on areas with thinning hair or slow growth</li>
                <li>Leave overnight or for at least 2 hours before washing</li>
                <li>Use 3-4 times per week for best results</li>
            </ol>
        `,
        ingredients: `
            <p>Our Growth Oil contains only the finest natural ingredients:</p>
            <ul>
                <li><strong>Rosemary Oil:</strong> Stimulates blood circulation to hair follicles</li>
                <li><strong>Castor Oil:</strong> Rich in ricinoleic acid to promote hair growth</li>
                <li><strong>Coconut Oil:</strong> Deep conditioning and protein protection</li>
                <li><strong>Argan Oil:</strong> Vitamin E for shine and strength</li>
                <li><strong>Peppermint Oil:</strong> Cooling effect that stimulates follicles</li>
            </ul>
        `
    },
    {
        id: 2,
        name: 'Vitality Hair Spray',
        image: '../img/Vitality-Spray.png',
        description: 'Scalp penetration formula for enhanced hair vitality and strength.',
        size: '100ml',
        price: 130,
        originalPrice: null,
        rating: 5,
        reviewCount: 96,
        howToUse: `
            <ol>
                <li>Shake well before use</li>
                <li>Spray directly onto scalp</li>
                <li>Massage in gently</li>
                <li>Do not rinse</li>
                <li>Use daily for best results</li>
            </ol>
        `,
        ingredients: `
            <p>Natural ingredients for vitality:</p>
            <ul>
                <li><strong>Aloe Vera:</strong> Soothes scalp</li>
                <li><strong>Ginseng:</strong> Promotes circulation</li>
                <li><strong>Vitamin B5:</strong> Strengthens hair</li>
                <li><strong>Tea Tree Oil:</strong> Cleanses follicles</li>
                <li><strong>Lavender Oil:</strong> Calms irritation</li>
            </ul>
        `
    },
    {
        id: 3,
        name: 'Hair Food',
        image: '../img/hairfood.png',
        description: 'Scalp protection & nourishment for healthy hair growth.',
        size: '100ml',
        price: 120,
        originalPrice: null,
        rating: 5,
        reviewCount: 87,
        howToUse: `
            <ol>
                <li>Apply to damp hair</li>
                <li>Massage into scalp and hair</li>
                <li>Style as usual</li>
                <li>Use after washing</li>
                <li>Avoid roots if oily</li>
            </ol>
        `,
        ingredients: `
            <p>Nourishing ingredients:</p>
            <ul>
                <li><strong>Shea Butter:</strong> Moisturizes</li>
                <li><strong>Jojoba Oil:</strong> Balances oil</li>
                <li><strong>Vitamin E:</strong> Protects</li>
                <li><strong>Aloe Vera:</strong> Hydrates</li>
                <li><strong>Honey:</strong> Conditions</li>
            </ul>
        `
    },
    {
        id: 4,
        name: 'Intensive Repair Serum',
        image: '../img/Growth-Oil.png',
        description: 'Deep repair serum for damaged hair.',
        size: '50ml',
        price: 150,
        originalPrice: null,
        rating: 4,
        reviewCount: 64,
        howToUse: `
            <ol>
                <li>Apply to ends</li>
                <li>Work upwards</li>
                <li>Leave in</li>
                <li>Use on wet or dry hair</li>
                <li>Daily application</li>
            </ol>
        `,
        ingredients: `
            <p>Repair ingredients:</p>
            <ul>
                <li><strong>Keratin:</strong> Strengthens</li>
                <li><strong>Argan Oil:</strong> Repairs</li>
                <li><strong>Collagen:</strong> Builds</li>
                <li><strong>Silk Protein:</strong> Smooths</li>
                <li><strong>Vitamin C:</strong> Protects</li>
            </ul>
        `
    },
    {
        id: 5,
        name: 'Complete Hair Care Kit',
        image: '../img/Complete-Hair-Care-Kit.png',
        description: 'Complete hair care solution with multiple products.',
        size: '3 Items',
        price: 350,
        originalPrice: 400,
        rating: 5,
        reviewCount: 42,
        howToUse: `
            <ol>
                <li>Use shampoo first</li>
                <li>Apply conditioner</li>
                <li>Finish with oil</li>
                <li>Weekly mask</li>
                <li>Daily spray</li>
            </ol>
        `,
        ingredients: `
            <p>Kit ingredients vary by product.</p>
        `
    },
    {
        id: 6,
        name: 'Scalp Treatment',
        image: '../img/hairfood.png',
        description: 'Scalp soother for irritated scalps.',
        size: '100ml',
        price: 110,
        originalPrice: null,
        rating: 4,
        reviewCount: 53,
        howToUse: `
            <ol>
                <li>Apply to scalp</li>
                <li>Massage gently</li>
                <li>Leave for 30 min</li>
                <li>Rinse</li>
                <li>Use twice weekly</li>
            </ol>
        `,
        ingredients: `
            <p>Soothing ingredients:</p>
            <ul>
                <li><strong>Tea Tree:</strong> Antiseptic</li>
                <li><strong>Aloe:</strong> Calms</li>
                <li><strong>Menthol:</strong> Cools</li>
                <li><strong>Chamomile:</strong> Soothes</li>
                <li><strong>Lavender:</strong> Relaxes</li>
            </ul>
        `
    },
    {
        id: 7,
        name: 'Growth & Hair Food',
        image: '../img/combo-2.jpg',
        description: 'Growth & repair combo for better hair health.',
        size: '2 Items',
        price: 240,
        originalPrice: 280,
        rating: 5,
        reviewCount: 38,
        howToUse: `
            <ol>
                <li>Use growth oil nightly</li>
                <li>Apply hair food daily</li>
                <li>Massage well</li>
                <li>Consistent use</li>
                <li>Monitor progress</li>
            </ol>
        `,
        ingredients: `
            <p>Combined ingredients from both products.</p>
        `
    },
    {
        id: 8,
        name: 'Hair Spray & Growth Oil',
        image: '../img/combo-3.jpg',
        description: 'Premium bundle set for complete care.',
        size: '4 Items',
        price: 450,
        originalPrice: 550,
        rating: 5,
        reviewCount: 29,
        howToUse: `
            <ol>
                <li>Spray on scalp</li>
                <li>Apply oil</li>
                <li>Use other items as needed</li>
                <li>Daily routine</li>
                <li>Weekly deep care</li>
            </ol>
        `,
        ingredients: `
            <p>Ingredients from bundle products.</p>
        `
    },
    {
        id: 9,
        name: 'Travel Size Trio',
        image: '../img/special-1.jpg',
        description: 'Travel-size set for on-the-go care.',
        size: '3 Travel Items',
        price: 90,
        originalPrice: 120,
        rating: 4,
        reviewCount: 47,
        howToUse: `
            <ol>
                <li>Pack in carry-on</li>
                <li>Use as normal</li>
                <li>Refill when empty</li>
                <li>Convenient sizes</li>
                <li>Perfect for trips</li>
            </ol>
        `,
        ingredients: `
            <p>Travel versions of main products.</p>
        `
    }
];

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    loadProductDetails();
    initializeEventListeners();
});

// Load product details based on URL id
function loadProductDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id')) || 1; // Default to 1 if no id

    const product = products.find(p => p.id === productId);
    if (!product) {
        // Fallback if product not found
        document.getElementById('productTitle').textContent = 'Product Not Found';
        return;
    }

    // Set title and meta
    document.title = `Product Details - ${product.name}`;
    
    // Set breadcrumb product name
    document.getElementById('currentProduct').textContent = product.name;

    // Set elements
    document.getElementById('mainProductImage').src = product.image;
    document.getElementById('mainProductImage').alt = product.name;
    document.getElementById('productTitle').textContent = product.name;
    document.getElementById('productShortDescription').textContent = product.description;
    document.getElementById('productSize').textContent = product.size;
    document.getElementById('currentPrice').textContent = `R ${product.price}.00`;
    
    if (product.originalPrice) {
        const originalPriceEl = document.getElementById('originalPrice');
        originalPriceEl.textContent = `R ${product.originalPrice}.00`;
        originalPriceEl.style.display = 'block';
    }

    // Set rating stars
    const starsEl = document.getElementById('productStars');
    starsEl.innerHTML = '';
    for (let i = 0; i < 5; i++) {
        const star = document.createElement('i');
        star.className = i < product.rating ? 'fas fa-star' : 'far fa-star';
        starsEl.appendChild(star);
    }

    // Set how to use and ingredients
    document.getElementById('usageContent').innerHTML = product.howToUse;
    document.getElementById('ingredientsContent').innerHTML = product.ingredients;
}

function initializeEventListeners() {
    // Quantity selector
    const decreaseBtn = document.querySelector('.decrease');
    const increaseBtn = document.querySelector('.increase');
    const quantityDisplay = document.querySelector('.quantity');
    
    if (decreaseBtn && increaseBtn && quantityDisplay) {
        let quantity = 1;
        
        decreaseBtn.addEventListener('click', function() {
            if (quantity > 1) {
                quantity--;
                quantityDisplay.textContent = quantity;
                updateAddToCartButton(quantity);
            }
        });
        
        increaseBtn.addEventListener('click', function() {
            if (quantity < 10) {
                quantity++;
                quantityDisplay.textContent = quantity;
                updateAddToCartButton(quantity);
            } else {
                showNotification('Maximum quantity reached (10 items)', 'warning');
            }
        });
    }
    
    // Add to bag button
    const addToBagBtn = document.getElementById('addToBagBtn');
    if (addToBagBtn) {
        addToBagBtn.addEventListener('click', function() {
            const quantity = parseInt(document.querySelector('.quantity').textContent);
            const productTitle = document.getElementById('productTitle').textContent;
            const currentPrice = parseInt(document.getElementById('currentPrice').textContent.replace('R ', '').replace('.00', ''));
            const productSize = document.getElementById('productSize').textContent;
            
            const productDetails = {
                name: productTitle,
                size: productSize,
                price: currentPrice,
                quantity: quantity
            };
            
            addToCart(productDetails);
            showAddToCartConfirmation(productDetails);
        });
    }
    
    // Wishlist button
    const wishlistBtn = document.getElementById('wishlistBtn');
    if (wishlistBtn) {
        wishlistBtn.addEventListener('click', function() {
            this.classList.toggle('active');
            const heartIcon = this.querySelector('i');
            heartIcon.classList.toggle('far');
            heartIcon.classList.toggle('fas');
            
            if (this.classList.contains('active')) {
                showNotification('Added to wishlist!', 'success');
            } else {
                showNotification('Removed from wishlist', 'success');
            }
        });
    }
    
    // Info cards toggle
    const infoCards = document.querySelectorAll('.info-card');
    
    infoCards.forEach(card => {
        const header = card.querySelector('.info-card-header');
        
        header.addEventListener('click', function() {
            // Toggle current card
            card.classList.toggle('active');
        });
    });
}

function updateAddToCartButton(quantity) {
    const addToCartBtn = document.querySelector('.add-to-bag-btn');
    if (addToCartBtn && quantity > 1) {
        addToCartBtn.innerHTML = `<i class="fas fa-shopping-bag"></i> Add ${quantity} to Bag`;
    } else if (addToCartBtn) {
        addToCartBtn.innerHTML = `<i class="fas fa-shopping-bag"></i> Add to Bag`;
    }
}

function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem('shoppingCart') || '[]');
    
    const existingItemIndex = cart.findIndex(item => 
        item.name === product.name && item.size === product.size
    );
    
    if (existingItemIndex > -1) {
        cart[existingItemIndex].quantity += product.quantity;
    } else {
        cart.push(product);
    }
    
    localStorage.setItem('shoppingCart', JSON.stringify(cart));
    updateCartCount();
    
    return cart;
}

function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('shoppingCart') || '[]');
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    
    // Update cart count in header if exists
    const cartCountElements = document.querySelectorAll('.cart-count');
    cartCountElements.forEach(element => {
        if (element) {
            element.textContent = totalItems;
            element.style.display = totalItems > 0 ? 'flex' : 'none';
        }
    });
}

function showAddToCartConfirmation(product) {
    const confirmation = document.createElement('div');
    confirmation.className = 'add-to-cart-confirmation';
    confirmation.innerHTML = `
        <div class="confirmation-content">
            <i class="fas fa-check-circle"></i>
            <div class="confirmation-details">
                <strong>Added to Bag!</strong>
                <p>${product.quantity}x ${product.name} - ${product.size}</p>
                <p class="confirmation-price">R ${(product.price * product.quantity).toFixed(2)}</p>
            </div>
            <button class="view-bag-btn">View Bag</button>
        </div>
    `;
    
    document.body.appendChild(confirmation);
    
    // Show with animation
    setTimeout(() => {
        confirmation.style.transform = 'translateX(0)';
    }, 10);
    
    // Add event listener to View Bag button
    const viewBagBtn = confirmation.querySelector('.view-bag-btn');
    if (viewBagBtn) {
        viewBagBtn.addEventListener('click', function() {
            window.location.href = 'cart.html';
        });
    }
    
    // Hide after delay
    setTimeout(() => {
        confirmation.style.transform = 'translateX(150%)';
        setTimeout(() => {
            if (confirmation.parentNode) {
                confirmation.parentNode.removeChild(confirmation);
            }
        }, 300);
    }, 4000);
}

function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 10);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(150%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Initialize cart count on page load
updateCartCount();