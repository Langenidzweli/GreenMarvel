// Your wishlist array — EMPTY by default.
// Later we connect this to Firebase or your DB.
let wishlist = [];

const emptyState = document.getElementById("wishlist-empty");
const wishlistItemsContainer = document.getElementById("wishlist-items");

// Load & render wishlist
function renderWishlist() {
    if (wishlist.length === 0) {
        emptyState.style.display = "block";
        wishlistItemsContainer.style.display = "none";
        wishlistItemsContainer.innerHTML = "";
    } else {
        emptyState.style.display = "none";
        wishlistItemsContainer.style.display = "grid";

        wishlistItemsContainer.innerHTML = "";

        wishlist.forEach(item => {
            wishlistItemsContainer.innerHTML += `
                <div class="wishlist-item">
                    <div class="item-image">
                        <img src="${item.image}" alt="${item.name}">
                    </div>
                    <div class="item-details">
                        <h3 class="item-name">${item.name}</h3>
                        <p class="item-description">${item.description}</p>
                        <p class="item-price">${item.price}</p>

                        <div class="item-actions">
                            <button class="move-cart-btn"><i class="fas fa-shopping-cart"></i> Move to Cart</button>
                            <button class="remove-btn" onclick="removeItem('${item.id}')">
                                <i class="fas fa-trash"></i> Remove
                            </button>
                        </div>
                    </div>
                </div>
            `;
        });
    }
}

// Remove item
function removeItem(id) {
    wishlist = wishlist.filter(item => item.id !== id);
    renderWishlist();
}

// Initial render
renderWishlist();