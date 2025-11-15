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
        `,
        category: 'growth-oil'
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
        `,
        category: 'hair-spray'
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
        `,
        category: 'hair-food'
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
        `,
        category: 'serum'
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
        `,
        category: 'combo'
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
        `,
        category: 'treatment'
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
        `,
        category: 'combo'
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
        `,
        category: 'combo'
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
        `,
        category: 'combo'
    }
];

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    loadProductDetails();
    initializeEventListeners();
    loadRelatedProducts();
});

// Load product details based on URL id
function loadProductDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id')) || 1;

    const product = products.find(p => p.id === productId);
    if (!product) {
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

// Load related products (You May Also Like)
function loadRelatedProducts() {
    const urlParams = new URLSearchParams(window.location.search);
    const currentProductId = parseInt(urlParams.get('id')) || 1;
    
    // Get current product
    const currentProduct = products.find(p => p.id === currentProductId);
    if (!currentProduct) return;
    
    // Filter related products (exclude current product and get products from same category or similar price range)
    const relatedProducts = products
        .filter(p => p.id !== currentProductId)
        .sort((a, b) => {
            // Prioritize same category
            if (a.category === currentProduct.category && b.category !== currentProduct.category) return -1;
            if (b.category === currentProduct.category && a.category !== currentProduct.category) return 1;
            
            // Then prioritize similar price range (±30%)
            const aPriceDiff = Math.abs(a.price - currentProduct.price) / currentProduct.price;
            const bPriceDiff = Math.abs(b.price - currentProduct.price) / currentProduct.price;
            
            return aPriceDiff - bPriceDiff;
        })
        .slice(0, 3); // Get only 3 related products
    
    const relatedGrid = document.querySelector('.related-products-grid');
    relatedGrid.innerHTML = '';
    
    if (relatedProducts.length === 0) {
        relatedGrid.innerHTML = '<p class="no-related-products">No related products found.</p>';
        return;
    }
    
    relatedProducts.forEach(product => {
        const productElement = createRelatedProductElement(product);
        relatedGrid.appendChild(productElement);
    });
}

// Create HTML element for related product
function createRelatedProductElement(product) {
    const productDiv = document.createElement('div');
    productDiv.className = 'related-product';
    
    productDiv.innerHTML = `
        <a href="product-detail.html?id=${product.id}" class="related-product-link">
            <img src="${product.image}" alt="${product.name}" class="related-product-image">
            <div class="related-product-details">
                <h3 class="related-product-name">${product.name}</h3>
                <p class="related-product-description">${product.description}</p>
                <div class="related-product-size">${product.size}</div>
                <div class="related-product-price">
                    R ${product.price}.00
                    ${product.originalPrice ? `<span class="original-price">R ${product.originalPrice}.00</span>` : ''}
                </div>
            </div>
        </a>
        <div class="related-product-actions">
            <button class="related-add-to-cart-btn" 
                    data-product-id="${product.id}" 
                    data-product-name="${product.name}" 
                    data-product-price="${product.price}" 
                    data-product-size="${product.size}" 
                    data-product-image="${product.image}">
                <i class="fas fa-shopping-bag"></i>
                Add to Bag
            </button>
            <button class="related-wishlist-btn" title="Add to Wishlist">
                <i class="far fa-heart"></i>
            </button>
        </div>
    `;
    
    return productDiv;
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
            const productImage = document.getElementById('mainProductImage').src;
            const productId = getCurrentProductId();
            
            const productDetails = {
                id: productId,
                name: productTitle,
                size: productSize,
                price: currentPrice,
                quantity: quantity,
                image: productImage
            };
            
            addToCart(productDetails);
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
        });
    }
    
    // Info cards toggle
    const infoCards = document.querySelectorAll('.info-card');
    
    infoCards.forEach(card => {
        const header = card.querySelector('.info-card-header');
        
        header.addEventListener('click', function() {
            card.classList.toggle('active');
        });
    });
    
    // Related products add to cart buttons (delegated event listener)
    document.addEventListener('click', function(e) {
        if (e.target.closest('.related-add-to-cart-btn')) {
            e.preventDefault();
            const button = e.target.closest('.related-add-to-cart-btn');
            
            const productDetails = {
                id: parseInt(button.getAttribute('data-product-id')),
                name: button.getAttribute('data-product-name'),
                size: button.getAttribute('data-product-size'),
                price: parseInt(button.getAttribute('data-product-price')),
                quantity: 1,
                image: button.getAttribute('data-product-image')
            };
            
            addToCart(productDetails);
            
            // Update button state temporarily
            updateRelatedButtonState(button);
        }
        
        // Related products wishlist buttons
        if (e.target.closest('.related-wishlist-btn')) {
            e.preventDefault();
            const button = e.target.closest('.related-wishlist-btn');
            
            button.classList.toggle('active');
            const heartIcon = button.querySelector('i');
            heartIcon.classList.toggle('far');
            heartIcon.classList.toggle('fas');
        }
    });
}

function getCurrentProductId() {
    const urlParams = new URLSearchParams(window.location.search);
    return parseInt(urlParams.get('id')) || 1;
}

function updateAddToCartButton(quantity) {
    const addToCartBtn = document.querySelector('.add-to-bag-btn');
    if (addToCartBtn && quantity > 1) {
        addToCartBtn.innerHTML = `<i class="fas fa-shopping-bag"></i> Add ${quantity} to Bag`;
    } else if (addToCartBtn) {
        addToCartBtn.innerHTML = `<i class="fas fa-shopping-bag"></i> Add to Bag`;
    }
}

function updateRelatedButtonState(button) {
    const originalText = button.innerHTML;
    button.innerHTML = '<i class="fas fa-check"></i> Added!';
    button.style.background = '#46853c';
    
    setTimeout(() => {
        button.innerHTML = originalText;
        button.style.background = '#1a1a1a';
    }, 1000);
}

// Cart functions - COMPATIBLE WITH SHOP.JS
function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem('greenMarvelCart') || '[]');
    
    // Check if product already exists in cart (by id ONLY)
    const existingItemIndex = cart.findIndex(item => 
        item.id === product.id
    );
    
    if (existingItemIndex > -1) {
        // Update quantity if product already exists
        cart[existingItemIndex].quantity += product.quantity;
    } else {
        // Add new product to cart
        cart.push(product);
    }
    
    localStorage.setItem('greenMarvelCart', JSON.stringify(cart));
    updateCartCount();
    
    return cart;
}

function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('greenMarvelCart') || '[]');
    const totalItems = cart.reduce((total, item) => total + (item.quantity || 1), 0);
    
    // Update cart count in header if exists
    const cartCounts = document.querySelectorAll('.cart-count');
    cartCounts.forEach(cartCount => {
        if (cartCount) {
            cartCount.textContent = totalItems;
            cartCount.style.display = totalItems > 0 ? 'flex' : 'none';
        }
    });
}

// Initialize cart count on page load
updateCartCount();