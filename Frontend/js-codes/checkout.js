/* ============================
   GREEN MARVEL — CHECKOUT JS
   Shopify-style Checkout Logic
=============================== */

// ------- Dummy Cart Example (Replace with backend data) -------
const cartItems = [
  { id: 1, name: "Organic Lemon Tea", price: 45, qty: 2 },
  { id: 2, name: "Green Marvel Detox Mix", price: 120, qty: 1 },
];

// ------- DOM Elements -------
const cartContainer = document.querySelector("#cart-items");
const subtotalEl = document.querySelector("#subtotal");
const shippingEl = document.querySelector("#shippingCost");
const totalEl = document.querySelector("#grandTotal");
const shippingOptions = document.querySelectorAll("input[name='shipping-method']");
const paymentMethods = document.querySelectorAll("input[name='payment-method']");
const checkoutForm = document.querySelector("#checkout-form");

// ------- Functions -------

// Render cart
function renderCart() {
  cartContainer.innerHTML = "";

  cartItems.forEach((item) => {
    const div = document.createElement("div");
    div.classList.add("cart-item");

    div.innerHTML = `
      <span>${item.name} × ${item.qty}</span>
      <strong>R${(item.price * item.qty).toFixed(2)}</strong>
    `;

    cartContainer.appendChild(div);
  });

  updateTotals();
}

// Calculate subtotal
function calculateSubtotal() {
  return cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);
}

// Update totals
function updateTotals() {
  const subtotal = calculateSubtotal();
  const shipping = getSelectedShippingCost();
  const total = subtotal + shipping;

  subtotalEl.textContent = `R${subtotal.toFixed(2)}`;
  shippingEl.textContent = `R${shipping.toFixed(2)}`;
  totalEl.textContent = `R${total.toFixed(2)}`;
}

// Get shipping cost
function getSelectedShippingCost() {
  const selected = document.querySelector("input[name='shipping-method']:checked");
  return selected ? Number(selected.dataset.cost) : 0;
}

// Save checkout progress
function saveToLocalStorage() {
  const data = {
    fullName: document.querySelector("#fullName").value,
    phone: document.querySelector("#phone").value,
    address: document.querySelector("#address").value,
    city: document.querySelector("#city").value,
    postal: document.querySelector("#postal").value,
    shipping: document.querySelector("input[name='shipping-method']:checked")?.id,
    payment: document.querySelector("input[name='payment-method']:checked")?.id,
  };

  localStorage.setItem("checkoutData", JSON.stringify(data));
}

// Load saved checkout data
function loadFromLocalStorage() {
  const data = JSON.parse(localStorage.getItem("checkoutData"));
  if (!data) return;

  document.querySelector("#fullName").value = data.fullName || "";
  document.querySelector("#phone").value = data.phone || "";
  document.querySelector("#address").value = data.address || "";
  document.querySelector("#city").value = data.city || "";
  document.querySelector("#postal").value = data.postal || "";

  if (data.shipping) document.querySelector(`#${data.shipping}`).checked = true;
  if (data.payment) document.querySelector(`#${data.payment}`).checked = true;

  updateTotals();
}

// Card formatting
function setupCardFormatting() {
  const cardNumberEl = document.querySelector("#cardNumber");
  const expiryEl = document.querySelector("#expiry");
  const cvvEl = document.querySelector("#cvv");

  // Card number (#### #### #### ####)
  cardNumberEl.addEventListener("input", (e) => {
    let value = e.target.value.replace(/\D/g, "").slice(0, 16);
    e.target.value = value.replace(/(.{4})/g, "$1 ").trim();
  });

  // Expiry (MM/YY)
  expiryEl.addEventListener("input", (e) => {
    let value = e.target.value.replace(/\D/g, "").slice(0, 4);
    if (value.length >= 3) value = value.replace(/(\d{2})(\d{1,2})/, "$1/$2");
    e.target.value = value;
  });

  // CVV (3 digits)
  cvvEl.addEventListener("input", (e) => {
    e.target.value = e.target.value.replace(/\D/g, "").slice(0, 3);
  });
}

// Validate form
function validateCheckout() {
  const required = document.querySelectorAll("[required]");
  let valid = true;

  required.forEach((field) => {
    if (!field.value.trim()) {
      field.classList.add("error");
      valid = false;
    } else {
      field.classList.remove("error");
    }
  });

  return valid;
}

// Submit Checkout
checkoutForm?.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!validateCheckout()) {
    alert("Please fill in all required fields");
    return;
  }

  alert("Order placed successfully! 🎉");
  localStorage.removeItem("checkoutData");

  // redirect to order confirmation page
  window.location.href = "order-confirmation.html";
});

// ------- Event Listeners -------

shippingOptions.forEach((opt) => {
  opt.addEventListener("change", () => {
    updateTotals();
    saveToLocalStorage();
  });
});

paymentMethods.forEach((opt) => {
  opt.addEventListener("change", saveToLocalStorage);
});

// Inputs auto-save
document.querySelectorAll("input, select, textarea").forEach((el) => {
  el.addEventListener("input", saveToLocalStorage);
});

// ------- Initialize -------
renderCart();
loadFromLocalStorage();
setupCardFormatting();
