// ========================================
// CART PAGE FUNCTIONALITY
// ========================================

// Cart data structure
let cart = [];

// Predefined discount codes
const DISCOUNT_CODES = {
    'SAVE10': 10,
    'SAVE15': 15,
    'SAVE20': 20,
    'WELCOME': 5
};

const FREE_SHIPPING_THRESHOLD = 600;
const SHIPPING_COST = 50;

// ========================================
// INITIALIZATION
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    loadCartFromStorage();
    renderCart();
    setupEventListeners();
});

// ========================================
// LOAD CART FROM LOCAL STORAGE
// ========================================
function loadCartFromStorage() {
    const savedCart = localStorage.getItem('greenMarvelCart');
    if (savedCart) {
        try {
            cart = JSON.parse(savedCart);
            if (!Array.isArray(cart)) {
                cart = [];
            }
        } catch (e) {
            console.error('Error loading cart:', e);
            cart = [];
        }
    }
}

// ========================================
// SAVE CART TO LOCAL STORAGE
// ========================================
function saveCartToStorage() {
    localStorage.setItem('greenMarvelCart', JSON.stringify(cart));
}

// ========================================
// RENDER CART
// ========================================
function renderCart() {
    const emptyCart = document.getElementById('emptyCart');
    const cartContent = document.getElementById('cartContent');

    if (cart.length === 0) {
        emptyCart.style.display = 'block';
        cartContent.style.display = 'none';
    } else {
        emptyCart.style.display = 'none';
        cartContent.style.display = 'block';
        renderCartItems();
        updateCartSummary();
    }
}

// ========================================
// RENDER CART ITEMS IN CARDS
// ========================================
function renderCartItems() {
    const cartItemsList = document.getElementById('cartItemsList');
    const itemCount = document.getElementById('itemCount');

    cartItemsList.innerHTML = '';
    itemCount.textContent = cart.length;

    cart.forEach((item, index) => {
        const subtotal = item.price * item.quantity;
        
        const card = document.createElement('div');
        card.className = 'cart-item-card';
        card.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="cart-item-image">
            
            <div class="cart-item-details">
                <h3 class="cart-item-name">${item.name}</h3>
                <p class="cart-item-size">${item.size || 'Standard'}</p>
                <div class="cart-item-price-info">
                    <span class="price-label">Unit Price:</span>
                    <span class="product-unit-price">R ${item.price.toFixed(2)}</span>
                </div>
            </div>
            
            <div class="cart-item-actions">
                <div class="quantity-control">
                    <button class="quantity-btn" onclick="decrementQuantity(${index})" title="Decrease quantity">−</button>
                    <input type="number" class="quantity-input" value="${item.quantity}" readonly>
                    <button class="quantity-btn" onclick="incrementQuantity(${index})" title="Increase quantity">+</button>
                </div>
                
                <div class="cart-item-subtotal">
                    <span class="subtotal-label">Subtotal</span>
                    <span class="product-subtotal">R ${subtotal.toFixed(2)}</span>
                </div>
                
                <button class="remove-item-btn" onclick="removeItem(${index})" title="Remove item" aria-label="Remove item">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `;

        cartItemsList.appendChild(card);
    });
}

// ========================================
// UPDATE QUANTITY FUNCTIONS
// ========================================
function incrementQuantity(index) {
    if (index >= 0 && index < cart.length) {
        cart[index].quantity += 1;
        saveCartToStorage();
        renderCart();
    }
}

function decrementQuantity(index) {
    if (index >= 0 && index < cart.length) {
        if (cart[index].quantity > 1) {
            cart[index].quantity -= 1;
        } else {
            removeItem(index);
            return;
        }
        saveCartToStorage();
        renderCart();
    }
}

// ========================================
// REMOVE ITEM
// ========================================
function removeItem(index) {
    if (index >= 0 && index < cart.length) {
        cart.splice(index, 1);
        saveCartToStorage();
        renderCart();
    }
}

// ========================================
// CLEAR CART
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    const clearCartBtn = document.getElementById('clearCartBtn');
    if (clearCartBtn) {
        clearCartBtn.addEventListener('click', function() {
            if (confirm('Are you sure you want to clear your cart? This action cannot be undone.')) {
                cart = [];
                saveCartToStorage();
                renderCart();
            }
        });
    }
});

// ========================================
// UPDATE CART SUMMARY
// ========================================
function updateCartSummary() {
    // Calculate subtotal
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    // Get discount from localStorage
    let discountPercentage = 0;
    const savedDiscount = localStorage.getItem('appliedDiscount');
    if (savedDiscount) {
        try {
            const discountData = JSON.parse(savedDiscount);
            discountPercentage = discountData.percentage || 0;
        } catch (e) {}
    }
    
    // Calculate discount
    const discountAmount = subtotal * (discountPercentage / 100);
    
    // Calculate total
    const totalBeforeShipping = subtotal - discountAmount;
    const shippingCost = totalBeforeShipping >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_COST;
    const total = totalBeforeShipping + shippingCost;

    // Update summary displays
    document.getElementById('subtotal').textContent = `R ${subtotal.toFixed(2)}`;
    document.getElementById('totalAmount').textContent = `R ${total.toFixed(2)}`;

    // Update shipping
    const shippingCostElement = document.getElementById('shippingCost');
    if (shippingCost === 0) {
        shippingCostElement.innerHTML = '<span class="free-shipping">FREE</span>';
    } else {
        shippingCostElement.textContent = `R ${shippingCost.toFixed(2)}`;
    }

    // Update discount display
    const discountAppliedElement = document.getElementById('discountApplied');
    const discountAmountElement = document.getElementById('discountAmount');
    if (discountPercentage > 0) {
        discountAppliedElement.style.display = 'flex';
        discountAmountElement.textContent = `-R ${discountAmount.toFixed(2)}`;
    } else {
        discountAppliedElement.style.display = 'none';
    }

    // Update shipping threshold message
    const shippingThreshold = document.getElementById('shippingThreshold');
    const remainingAmount = document.getElementById('remainingAmount');
    if (totalBeforeShipping < FREE_SHIPPING_THRESHOLD && cart.length > 0) {
        shippingThreshold.style.display = 'flex';
        remainingAmount.textContent = `R ${(FREE_SHIPPING_THRESHOLD - totalBeforeShipping).toFixed(2)}`;
    } else {
        shippingThreshold.style.display = 'none';
    }
}

// ========================================
// APPLY DISCOUNT CODE
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    const applyCodeBtn = document.getElementById('applyCodeBtn');
    const discountCodeInput = document.getElementById('discountCode');

    if (applyCodeBtn) {
        applyCodeBtn.addEventListener('click', function() {
            const code = discountCodeInput.value.trim().toUpperCase();

            if (!code) {
                alert('Please enter a discount code');
                return;
            }

            if (DISCOUNT_CODES.hasOwnProperty(code)) {
                const discountPercentage = DISCOUNT_CODES[code];
                localStorage.setItem('appliedDiscount', JSON.stringify({
                    code: code,
                    percentage: discountPercentage
                }));
                updateCartSummary();
                discountCodeInput.value = '';
                alert(`Discount code applied! You saved ${discountPercentage}%`);
            } else {
                alert('Invalid discount code. Try: SAVE10, SAVE15, SAVE20, or WELCOME');
                discountCodeInput.value = '';
            }
        });

        // Allow applying code with Enter key
        discountCodeInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                applyCodeBtn.click();
            }
        });
    }
});

// ========================================
// CHECKOUT BUTTON
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    const checkoutBtn = document.getElementById('checkoutBtn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', function() {
            if (cart.length === 0) {
                alert('Your cart is empty!');
                return;
            }

            // Here you would redirect to checkout page
            // For now, we'll show an alert
            alert('Proceeding to checkout with ' + cart.length + ' item(s).');
            // Uncomment the line below to redirect to checkout page
            // window.location.href = 'checkout.html';
        });
    }
});

// ========================================
// SETUP EVENT LISTENERS
// ========================================
function setupEventListeners() {
    // Any additional event listeners can be set up here
    console.log('Cart page initialized');
}

// ========================================
// EXPORT FUNCTIONS FOR EXTERNAL USE
// ========================================
window.removeItem = removeItem;
window.incrementQuantity = incrementQuantity;
window.decrementQuantity = decrementQuantity;
