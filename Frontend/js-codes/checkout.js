// ========================================
// CHECKOUT PAGE FUNCTIONALITY
// ========================================

// Shipping costs
const SHIPPING_COSTS = {
    courier: 59,
    paxi: 49
};

const FREE_SHIPPING_THRESHOLD = 600;

// ========================================
// INITIALIZATION
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    initializeCheckout();
    setupEventListeners();
    loadUserData();
});

// ========================================
// INITIALIZE CHECKOUT
// ========================================
function initializeCheckout() {
    loadCartItems();
    updateOrderSummary();
    setupShippingToggle();
}

// ========================================
// LOAD CART ITEMS FROM STORAGE
// ========================================
function loadCartItems() {
    const savedCart = localStorage.getItem('greenMarvelCart');
    const orderItemsContainer = document.getElementById('orderItems');
    
    if (!savedCart || savedCart === '[]') {
        // Redirect to cart if empty
        window.location.href = 'cart.html';
        return;
    }

    try {
        const cart = JSON.parse(savedCart);
        renderOrderItems(cart);
    } catch (e) {
        console.error('Error loading cart:', e);
        window.location.href = 'cart.html';
    }
}

// ========================================
// RENDER ORDER ITEMS
// ========================================
function renderOrderItems(cart) {
    const orderItemsContainer = document.getElementById('orderItems');
    orderItemsContainer.innerHTML = '';

    cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'order-item';
        
        itemElement.innerHTML = `
            <img src="${item.image || '../img/sample-product.jpg'}" alt="${item.name}">
            <div class="order-item-details">
                <div class="order-item-name">${item.name}</div>
                <div class="order-item-meta">
                    <span>Qty: ${item.quantity}</span>
                    <span>Size: ${item.size || 'Standard'}</span>
                </div>
            </div>
            <div class="order-item-price">
                R ${(item.price * item.quantity).toFixed(2)}
            </div>
        `;
        
        orderItemsContainer.appendChild(itemElement);
    });
}

// ========================================
// UPDATE ORDER SUMMARY
// ========================================
function updateOrderSummary() {
    const savedCart = localStorage.getItem('greenMarvelCart');
    if (!savedCart) return;

    const cart = JSON.parse(savedCart);
    
    // Calculate subtotal
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    // Get shipping method
    const shippingMethod = document.querySelector('input[name="shipping"]:checked').value;
    const shippingCost = SHIPPING_COSTS[shippingMethod];
    
    // Get discount
    let discountAmount = 0;
    const savedDiscount = localStorage.getItem('appliedDiscount');
    if (savedDiscount) {
        try {
            const discountData = JSON.parse(savedDiscount);
            discountAmount = subtotal * (discountData.percentage / 100);
        } catch (e) {}
    }
    
    // Calculate total
    const totalBeforeShipping = subtotal - discountAmount;
    const finalShippingCost = totalBeforeShipping >= FREE_SHIPPING_THRESHOLD ? 0 : shippingCost;
    const total = totalBeforeShipping + finalShippingCost;

    // Update display
    document.getElementById('subtotal').textContent = `R ${subtotal.toFixed(2)}`;
    document.getElementById('shippingCost').textContent = finalShippingCost === 0 ? 'FREE' : `R ${finalShippingCost.toFixed(2)}`;
    document.getElementById('totalAmount').textContent = `R ${total.toFixed(2)}`;

    // Update discount display
    const discountRow = document.getElementById('discountRow');
    const discountAmountEl = document.getElementById('discountAmount');
    if (discountAmount > 0) {
        discountRow.style.display = 'flex';
        discountAmountEl.textContent = `-R ${discountAmount.toFixed(2)}`;
    } else {
        discountRow.style.display = 'none';
    }

    // Update shipping progress
    updateShippingProgress(totalBeforeShipping);
}

// ========================================
// UPDATE SHIPPING PROGRESS
// ========================================
function updateShippingProgress(subtotal) {
    const shippingProgress = document.getElementById('shippingProgress');
    const progressFill = document.getElementById('progressFill');
    const remainingAmount = document.getElementById('remainingAmount');

    if (subtotal < FREE_SHIPPING_THRESHOLD) {
        shippingProgress.style.display = 'block';
        const progress = (subtotal / FREE_SHIPPING_THRESHOLD) * 100;
        progressFill.style.width = `${Math.min(progress, 100)}%`;
        remainingAmount.textContent = `R ${(FREE_SHIPPING_THRESHOLD - subtotal).toFixed(2)}`;
    } else {
        shippingProgress.style.display = 'none';
    }
}

// ========================================
// SETUP SHIPPING METHOD TOGGLE
// ========================================
function setupShippingToggle() {
    const shippingRadios = document.querySelectorAll('input[name="shipping"]');
    const courierSection = document.getElementById('courierSection');
    const paxiSection = document.getElementById('paxiSection');

    shippingRadios.forEach(radio => {
        radio.addEventListener('change', function() {
            if (this.value === 'courier') {
                courierSection.style.display = 'block';
                paxiSection.style.display = 'none';
                // Make courier fields required
                document.getElementById('address').required = true;
                document.getElementById('city').required = true;
                document.getElementById('suburb').required = true;
                document.getElementById('province').required = true;
                document.getElementById('postalCode').required = true;
                // Make paxi fields not required
                document.getElementById('paxiNumber').required = false;
                document.getElementById('paxiCity').required = false;
                document.getElementById('paxiLocation').required = false;
            } else {
                courierSection.style.display = 'none';
                paxiSection.style.display = 'block';
                // Make courier fields not required
                document.getElementById('address').required = false;
                document.getElementById('city').required = false;
                document.getElementById('suburb').required = false;
                document.getElementById('province').required = false;
                document.getElementById('postalCode').required = false;
                // Make paxi fields required
                document.getElementById('paxiNumber').required = true;
                document.getElementById('paxiCity').required = true;
                document.getElementById('paxiLocation').required = true;
            }
            updateOrderSummary();
        });
    });
}

// ========================================
// LOAD USER DATA (Simulated - replace with actual user data)
// ========================================
function loadUserData() {
    // In a real application, you would fetch this from your backend
    const userData = {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com',
        phone: '071 234 5678'
    };

    // Populate form fields
    document.getElementById('paxiIdNumber').value = userData.paxiIdNumber || '';
    document.getElementById('firstName').value = userData.firstName;
    document.getElementById('lastName').value = userData.lastName;
    document.getElementById('email').value = userData.email;
    document.getElementById('phone').value = userData.phone;
}

// ========================================
// SETUP EVENT LISTENERS
// ========================================
function setupEventListeners() {
    // Place order button
    const placeOrderBtn = document.getElementById('placeOrderBtn');
    placeOrderBtn.addEventListener('click', handlePlaceOrder);

    // Form auto-save
    document.querySelectorAll('input, select, textarea').forEach(element => {
        element.addEventListener('input', saveFormData);
    });
}

// ========================================
// SAVE FORM DATA TO LOCAL STORAGE
// ========================================
function saveFormData() {
    const formData = {
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        shipping: document.querySelector('input[name="shipping"]:checked').value,
        address: document.getElementById('address').value,
        city: document.getElementById('city').value,
        suburb: document.getElementById('suburb').value,
        province: document.getElementById('province').value,
        postalCode: document.getElementById('postalCode').value,
        deliveryInstructions: document.getElementById('deliveryInstructions').value,
        paxiNumber: document.getElementById('paxiNumber').value,
        paxiCity: document.getElementById('paxiCity').value,
        paxiLocation: document.getElementById('paxiLocation').value
    };

    localStorage.setItem('checkoutFormData', JSON.stringify(formData));
}

// ========================================
// LOAD SAVED FORM DATA
// ========================================
function loadSavedFormData() {
    const savedData = localStorage.getItem('checkoutFormData');
    if (savedData) {
        try {
            const formData = JSON.parse(savedData);
            
            // Populate all fields
            Object.keys(formData).forEach(key => {
                const element = document.getElementById(key);
                if (element && formData[key]) {
                    element.value = formData[key];
                }
            });

            // Set shipping method
            const shippingRadio = document.querySelector(`input[name="shipping"][value="${formData.shipping}"]`);
            if (shippingRadio) {
                shippingRadio.checked = true;
                shippingRadio.dispatchEvent(new Event('change'));
            }
        } catch (e) {
            console.error('Error loading saved form data:', e);
        }
    }
}

// ========================================
// VALIDATE FORM
// ========================================
function validateForm() {
    const requiredFields = [
        'firstName', 'lastName', 'email', 'phone'
    ];

    const shippingMethod = document.querySelector('input[name="shipping"]:checked').value;
    
    if (shippingMethod === 'courier') {
        requiredFields.push('address', 'city', 'suburb', 'province', 'postalCode');
    } else {
        requiredFields.push('paxiNumber', 'paxiCity', 'paxiLocation');
    }

    let isValid = true;
    const errors = [];

    requiredFields.forEach(fieldId => {
        const field = document.getElementById(fieldId);
        if (!field.value.trim()) {
            isValid = false;
            field.classList.add('error');
            errors.push(`${field.labels[0].textContent} is required`);
        } else {
            field.classList.remove('error');
        }
    });

    // Email validation
    const emailField = document.getElementById('email');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailField.value && !emailRegex.test(emailField.value)) {
        isValid = false;
        emailField.classList.add('error');
        errors.push('Please enter a valid email address');
    }

    // Phone validation
    const phoneField = document.getElementById('phone');
    const phoneRegex = /^[\+]?[0-9\s\-\(\)]{10,}$/;
    if (phoneField.value && !phoneRegex.test(phoneField.value.replace(/\s/g, ''))) {
        isValid = false;
        phoneField.classList.add('error');
        errors.push('Please enter a valid phone number');
    }

    if (!isValid) {
        showError(errors.join('<br>'));
    }

    return isValid;
}

// ========================================
// SHOW ERROR MESSAGE
// ========================================
function showError(message) {
    // Create or update error message display
    let errorDiv = document.getElementById('checkoutError');
    if (!errorDiv) {
        errorDiv = document.createElement('div');
        errorDiv.id = 'checkoutError';
        errorDiv.className = 'error-message';
        document.querySelector('.checkout-left').prepend(errorDiv);
    }
    
    errorDiv.innerHTML = `
        <i class="fas fa-exclamation-circle"></i>
        <div>${message}</div>
    `;
    errorDiv.style.display = 'block';

    // Scroll to error
    errorDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// ========================================
// HANDLE PLACE ORDER
// ========================================
function handlePlaceOrder() {
    if (!validateForm()) {
        return;
    }

    const placeOrderBtn = document.getElementById('placeOrderBtn');
    const originalText = placeOrderBtn.innerHTML;
    
    // Show loading state
    placeOrderBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
    placeOrderBtn.disabled = true;

    // Simulate processing delay
    setTimeout(() => {
        processOrder();
        
        // Restore button state (in case of error)
        placeOrderBtn.innerHTML = originalText;
        placeOrderBtn.disabled = false;
    }, 2000);
}

// ========================================
// PROCESS ORDER
// ========================================
function processOrder() {
    // Collect order data
    const orderData = {
        customer: {
            firstName: document.getElementById('firstName').value,
            lastName: document.getElementById('lastName').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value
        },
        shipping: {
            method: document.querySelector('input[name="shipping"]:checked').value,
            address: document.getElementById('address').value,
            city: document.getElementById('city').value,
            suburb: document.getElementById('suburb').value,
            province: document.getElementById('province').value,
            postalCode: document.getElementById('postalCode').value,
            instructions: document.getElementById('deliveryInstructions').value,
            paxiNumber: document.getElementById('paxiNumber').value,
            paxiCity: document.getElementById('paxiCity').value,
            paxiLocation: document.getElementById('paxiLocation').value
        },
        payment: {
            method: 'payfast'
        },
        cart: JSON.parse(localStorage.getItem('greenMarvelCart') || '[]'),
        totals: calculateOrderTotals()
    };

    // Here you would typically send this data to your backend
    // For now, we'll simulate a successful order and redirect to PayFast
    
    console.log('Order data:', orderData);
    
    // Clear cart and saved data
    localStorage.removeItem('greenMarvelCart');
    localStorage.removeItem('appliedDiscount');
    localStorage.removeItem('checkoutFormData');
    
    // Redirect to PayFast or order confirmation
    // window.location.href = 'https://www.payfast.co.za/eng/process?merchant_id=YOUR_MERCHANT_ID&...';
    
    // For demo purposes, redirect to confirmation page
    alert('Order placed successfully! Redirecting to payment...');
    window.location.href = 'order-confirmation.html';
}

// ========================================
// CALCULATE ORDER TOTALS
// ========================================
function calculateOrderTotals() {
    const savedCart = localStorage.getItem('greenMarvelCart');
    const cart = JSON.parse(savedCart || '[]');
    
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    const shippingMethod = document.querySelector('input[name="shipping"]:checked').value;
    const shippingCost = SHIPPING_COSTS[shippingMethod];
    
    let discountAmount = 0;
    const savedDiscount = localStorage.getItem('appliedDiscount');
    if (savedDiscount) {
        try {
            const discountData = JSON.parse(savedDiscount);
            discountAmount = subtotal * (discountData.percentage / 100);
        } catch (e) {}
    }
    
    const totalBeforeShipping = subtotal - discountAmount;
    const finalShippingCost = totalBeforeShipping >= FREE_SHIPPING_THRESHOLD ? 0 : shippingCost;
    const total = totalBeforeShipping + finalShippingCost;

    return {
        subtotal: subtotal,
        shipping: finalShippingCost,
        discount: discountAmount,
        total: total
    };
}

// ========================================
// LOAD SAVED FORM DATA ON INIT
// ========================================
// Call this function in initializeCheckout()
function initializeCheckout() {
    loadCartItems();
    updateOrderSummary();
    setupShippingToggle();
    loadSavedFormData(); // Add this line
}