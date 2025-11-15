// ========================================
// GREEN MARVEL ADMIN DASHBOARD
// Complete Admin Panel with All Features
// Enhanced with Green Accents & Full Functionality
// ========================================

class AdminDashboard {
    constructor() {
        this.currentSection = 'home';
        this.sidebarCollapsed = false;
        this.products = [];
        this.orders = [];
        this.customers = [];
        this.collections = [];
        this.inventory = [];
        this.campaigns = [];
        this.notifications = [];
        this.banners = [];
        this.settings = {};
        this.drafts = [];
        this.abandonedCheckouts = [];
        this.init();
    }

    // ========================================
    // INITIALIZATION
    // ========================================
    init() {
        this.loadInitialData();
        this.setupEventListeners();
        this.setActiveSection('home');
        this.updateStats();
        this.applyGreenTheme();
        console.log('Green Marvel Admin Dashboard initialized');
    }

    // ========================================
    // GREEN THEME ENHANCEMENTS
    // ========================================
    applyGreenTheme() {
        this.addGreenLoadingEffects();
        this.enhanceButtonsWithGreen();
        this.addSuccessAnimations();
    }

    addGreenLoadingEffects() {
        const statsCards = document.querySelectorAll('.stat-card');
        statsCards.forEach((card, index) => {
            card.style.animationDelay = `${index * 0.1}s`;
            card.classList.add('fade-in-up');
        });
    }

    enhanceButtonsWithGreen() {
        const primaryButtons = document.querySelectorAll('.btn-primary');
        primaryButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                const ripple = document.createElement('span');
                const rect = this.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;
                
                ripple.style.cssText = `
                    position: absolute;
                    border-radius: 50%;
                    background: rgba(0, 128, 96, 0.6);
                    transform: scale(0);
                    animation: ripple-animation 0.6s linear;
                    width: ${size}px;
                    height: ${size}px;
                    left: ${x}px;
                    top: ${y}px;
                `;
                
                this.style.position = 'relative';
                this.style.overflow = 'hidden';
                this.appendChild(ripple);
                
                setTimeout(() => ripple.remove(), 600);
            });
        });
    }

    addSuccessAnimations() {
        const style = document.createElement('style');
        style.textContent = `
            @keyframes fade-in-up {
                from {
                    opacity: 0;
                    transform: translateY(20px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
            
            @keyframes ripple-animation {
                to {
                    transform: scale(4);
                    opacity: 0;
                }
            }
            
            .fade-in-up {
                animation: fade-in-up 0.6s ease-out;
            }
            
            .success-pulse {
                animation: success-pulse 2s infinite;
            }
            
            @keyframes success-pulse {
                0% {
                    box-shadow: 0 0 0 0 rgba(0, 128, 96, 0.4);
                }
                70% {
                    box-shadow: 0 0 0 10px rgba(0, 128, 96, 0);
                }
                100% {
                    box-shadow: 0 0 0 0 rgba(0, 128, 96, 0);
                }
            }

            .search-loading {
                padding: 20px;
                text-align: center;
                color: var(--accent-green);
            }
            
            .loading-spinner {
                border: 2px solid var(--accent-green-light);
                border-top: 2px solid var(--accent-green);
                border-radius: 50%;
                width: 20px;
                height: 20px;
                animation: spin 1s linear infinite;
                margin: 0 auto 10px;
            }
            
            @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }

            .success-overlay {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: rgba(0, 128, 96, 0.9);
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                color: white;
                border-radius: 8px;
                animation: fadeIn 0.3s ease;
                z-index: 10;
            }
            
            .success-overlay i {
                font-size: 24px;
                margin-bottom: 8px;
            }
        `;
        document.head.appendChild(style);
    }

    // ========================================
    // LOAD INITIAL DATA
    // ========================================
    loadInitialData() {
        // Load products
        this.products = this.loadFromLocalStorage('products') || [
            {
                id: 1,
                name: 'Growth Oil',
                category: 'growth-oil',
                price: 130,
                salePrice: null,
                size: '100ml',
                stock: 45,
                shortDescription: 'Essential for all hair types for everyone',
                fullDescription: 'Our premium Growth Oil is specially formulated with 100% natural ingredients to stimulate hair growth and strengthen hair follicles.',
                image: '../img/Growth-Oil.png',
                isFeatured: true,
                isSpecial: false,
                isCombo: false,
                status: 'active',
                sku: 'GM-GO-100',
                barcode: '1234567890123',
                weight: 0.1,
                createdAt: '2024-01-01'
            },
            {
                id: 2,
                name: 'Vitality Hair Spray',
                category: 'hair-spray',
                price: 130,
                salePrice: 110,
                size: '100ml',
                stock: 32,
                shortDescription: 'Penetrates into the scalp for maximal results',
                fullDescription: 'Vitality Hair Spray combines the benefits of a treatment product with the convenience of a styling spray.',
                image: '../img/Vitality-Spray.png',
                isFeatured: true,
                isSpecial: true,
                isCombo: false,
                status: 'active',
                sku: 'GM-VS-100',
                barcode: '1234567890124',
                weight: 0.12,
                createdAt: '2024-01-02'
            },
            {
                id: 3,
                name: 'Hair Food',
                category: 'hair-food',
                price: 120,
                salePrice: null,
                size: '100ml',
                stock: 28,
                shortDescription: 'Protect your scalp and nurture your hair',
                fullDescription: 'Hair Food is a deeply conditioning treatment that protects both your scalp and hair.',
                image: '../img/hairfood.png',
                isFeatured: false,
                isSpecial: false,
                isCombo: false,
                status: 'active',
                sku: 'GM-HF-100',
                barcode: '1234567890125',
                weight: 0.15,
                createdAt: '2024-01-03'
            }
        ];

        // Load orders
        this.orders = this.loadFromLocalStorage('orders') || [
            {
                id: 'GM-1001',
                customer: 'Thabo Johnson',
                email: 'thabo@example.com',
                date: '2024-01-15',
                amount: 390,
                status: 'completed',
                items: [
                    { name: 'Growth Oil', quantity: 2, price: 130 },
                    { name: 'Hair Spray', quantity: 1, price: 130 }
                ],
                shippingAddress: '123 Main St, Johannesburg',
                paymentMethod: 'Credit Card'
            },
            {
                id: 'GM-1002',
                customer: 'Nomsa Mbeki',
                email: 'nomsa@example.com',
                date: '2024-01-15',
                amount: 260,
                status: 'processing',
                items: [
                    { name: 'Hair Food', quantity: 2, price: 120 }
                ],
                shippingAddress: '456 Oak Ave, Cape Town',
                paymentMethod: 'PayFast'
            },
            {
                id: 'GM-1003',
                customer: 'Sipho Ndlovu',
                email: 'sipho@example.com',
                date: '2024-01-16',
                amount: 520,
                status: 'pending',
                items: [
                    { name: 'Growth Oil', quantity: 4, price: 130 }
                ],
                shippingAddress: '789 Pine Rd, Durban',
                paymentMethod: 'EFT'
            }
        ];

        // Load customers
        this.customers = this.loadFromLocalStorage('customers') || [
            {
                id: 1,
                name: 'Thabo Johnson',
                email: 'thabo@example.com',
                phone: '+27 11 123 4567',
                orders: 3,
                totalSpent: 890,
                lastOrder: '2024-01-15',
                status: 'active',
                joinDate: '2024-01-01'
            },
            {
                id: 2,
                name: 'Nomsa Mbeki',
                email: 'nomsa@example.com',
                phone: '+27 21 987 6543',
                orders: 2,
                totalSpent: 520,
                lastOrder: '2024-01-15',
                status: 'active',
                joinDate: '2024-01-05'
            },
            {
                id: 3,
                name: 'Sipho Ndlovu',
                email: 'sipho@example.com',
                phone: '+27 31 456 7890',
                orders: 1,
                totalSpent: 520,
                lastOrder: '2024-01-16',
                status: 'active',
                joinDate: '2024-01-10'
            }
        ];

        // Load collections
        this.collections = this.loadFromLocalStorage('collections') || [
            {
                id: 1,
                name: 'Home page',
                products: [1, 2],
                condition: 'manual',
                status: 'active',
                description: 'Featured products for the home page'
            },
            {
                id: 2,
                name: 'Featured Products',
                products: [1, 2],
                condition: 'manual',
                status: 'active',
                description: 'Special featured products collection'
            },
            {
                id: 3,
                name: 'Product conditions',
                products: [3],
                condition: 'automatic',
                status: 'active',
                description: 'Products with special conditions'
            }
        ];

        // Load campaigns
        this.campaigns = this.loadFromLocalStorage('campaigns') || [
            {
                id: 1,
                name: 'Summer Sale',
                type: 'discount',
                status: 'active',
                startDate: '2024-01-01',
                endDate: '2024-01-31',
                budget: 5000,
                spent: 1200,
                description: 'Summer promotion with special discounts'
            },
            {
                id: 2,
                name: 'New Customer Welcome',
                type: 'email',
                status: 'active',
                startDate: '2024-01-01',
                endDate: '2024-12-31',
                budget: 1000,
                spent: 350,
                description: 'Welcome campaign for new customers'
            }
        ];

        // Load drafts
        this.drafts = this.loadFromLocalStorage('drafts') || [
            {
                id: 'DRAFT-001',
                customer: 'Lerato Smith',
                email: 'lerato@example.com',
                date: '2024-01-16',
                amount: 380,
                items: [
                    { name: 'Growth Oil', quantity: 2, price: 130 },
                    { name: 'Hair Food', quantity: 1, price: 120 }
                ],
                status: 'draft'
            }
        ];

        // Load abandoned checkouts
        this.abandonedCheckouts = this.loadFromLocalStorage('abandonedCheckouts') || [
            {
                id: 'ABN-001',
                customer: 'James Wilson',
                email: 'james@example.com',
                date: '2024-01-16',
                amount: 260,
                items: [
                    { name: 'Hair Spray', quantity: 2, price: 130 }
                ],
                recoveryEmailSent: false,
                cartUrl: 'https://greenmarvel.co.za/cart/abn001'
            }
        ];

        // Load settings
        this.settings = this.loadFromLocalStorage('settings') || {
            storeName: 'Green Marvel',
            storeEmail: 'admin@greenmarvel.co.za',
            storePhone: '081 752 3336',
            storeAddress: '123 Main Street, Johannesburg, South Africa',
            currency: 'ZAR',
            freeShippingThreshold: 600,
            shippingCost: 50,
            taxRate: 15,
            storeDescription: 'Premium natural hair care products',
            socialMedia: {
                facebook: 'https://facebook.com/greenmarvel',
                instagram: 'https://instagram.com/greenmarvel',
                twitter: 'https://twitter.com/greenmarvel'
            }
        };

        // Save initial data
        this.saveAllData();
    }

    // ========================================
    // EVENT LISTENERS SETUP
    // ========================================
    setupEventListeners() {
        // Sidebar toggle
        const sidebarToggle = document.querySelector('.sidebar-toggle');
        if (sidebarToggle) {
            sidebarToggle.addEventListener('click', () => this.toggleSidebar());
        }

        // Menu item clicks
        document.querySelectorAll('.menu-item').forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                const section = item.getAttribute('data-section');
                this.setActiveSection(section);
            });
        });

        // Tab functionality
        this.setupTabListeners();

        // Search functionality
        const adminSearch = document.querySelector('.header-search input');
        if (adminSearch) {
            adminSearch.addEventListener('input', (e) => {
                this.handleSearch(e.target.value);
            });
        }

        // Add product button
        const addProductBtn = document.querySelector('.btn-primary');
        if (addProductBtn && addProductBtn.textContent.includes('Add product')) {
            addProductBtn.addEventListener('click', () => {
                this.showAddProductForm();
            });
        }

        // Create gift card button
        const createGiftCardBtn = document.querySelector('.btn-primary');
        if (createGiftCardBtn && createGiftCardBtn.textContent.includes('Create gift card')) {
            createGiftCardBtn.addEventListener('click', () => {
                this.createGiftCard();
            });
        }

        // Create campaign button
        const createCampaignBtn = document.querySelector('.btn-primary');
        if (createCampaignBtn && createCampaignBtn.textContent.includes('Create campaign')) {
            createCampaignBtn.addEventListener('click', () => {
                this.createCampaign();
            });
        }

        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            this.handleKeyboardShortcuts(e);
        });

        // Window resize handling
        window.addEventListener('resize', () => {
            this.handleResize();
        });

        // Collection checkboxes
        this.setupCollectionCheckboxes();
    }

    setupTabListeners() {
        // Orders tabs
        const orderTabs = document.querySelectorAll('#orders-section .tab-btn');
        orderTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const tabId = tab.getAttribute('data-tab');
                this.switchTab('orders-section', tabId);
            });
        });
    }

    setupCollectionCheckboxes() {
        // This would be enhanced to handle collection selection
        document.addEventListener('change', (e) => {
            if (e.target.matches('.collections-list input[type="checkbox"]')) {
                const collectionId = e.target.getAttribute('data-collection-id');
                this.handleCollectionSelection(collectionId, e.target.checked);
            }
        });
    }

    handleCollectionSelection(collectionId, isSelected) {
        console.log(`Collection ${collectionId} ${isSelected ? 'selected' : 'deselected'}`);
        // In a full implementation, this would update the collection state
    }

    // ========================================
    // SIDEBAR FUNCTIONALITY
    // ========================================
    toggleSidebar() {
        const sidebar = document.querySelector('.admin-sidebar');
        sidebar.classList.toggle('mobile-open');
    }

    // ========================================
    // SECTION MANAGEMENT
    // ========================================
    setActiveSection(section) {
        // Update menu items
        document.querySelectorAll('.menu-item').forEach(item => {
            item.classList.remove('active');
        });
        
        const activeMenuItem = document.querySelector(`[data-section="${section}"]`);
        if (activeMenuItem) {
            activeMenuItem.classList.add('active');
        }
        
        // Update content sections
        document.querySelectorAll('.content-section').forEach(section => {
            section.classList.remove('active');
        });
        
        const activeSection = document.getElementById(`${section}-section`);
        if (activeSection) {
            activeSection.classList.add('active');
        }
        
        // Update breadcrumb
        this.updateBreadcrumb(section);
        
        // Load section-specific data
        this.loadSectionData(section);
        
        this.currentSection = section;
    }

    updateBreadcrumb(section) {
        const breadcrumb = document.querySelector('.breadcrumb');
        if (!breadcrumb) return;

        const sectionTitles = {
            'home': 'Home',
            'orders': 'Orders',
            'products': 'Products',
            'collections': 'Collections',
            'inventory': 'Inventory',
            'purchase-orders': 'Purchase Orders',
            'transfers': 'Transfers',
            'gift-cards': 'Gift Cards',
            'customers': 'Customers',
            'segments': 'Segments',
            'marketing': 'Marketing',
            'campaigns': 'Campaigns',
            'attribution': 'Attribution',
            'automations': 'Automations',
            'analytics': 'Analytics',
            'reports': 'Reports',
            'live-view': 'Live View',
            'online-store': 'Online Store'
        };

        breadcrumb.textContent = sectionTitles[section] || 'Home';
    }

    // ========================================
    // SECTION-SPECIFIC DATA LOADING
    // ========================================
    loadSectionData(section) {
        switch(section) {
            case 'home':
                this.loadDashboardData();
                break;
            case 'products':
                this.loadProductsData();
                break;
            case 'orders':
                this.loadOrdersData();
                break;
            case 'customers':
                this.loadCustomersData();
                break;
            case 'collections':
                this.loadCollectionsData();
                break;
            case 'inventory':
                this.loadInventoryData();
                break;
            case 'marketing':
                this.loadMarketingData();
                break;
            case 'analytics':
                this.loadAnalyticsData();
                break;
            case 'campaigns':
                this.loadCampaignsData();
                break;
            case 'gift-cards':
                this.loadGiftCardsData();
                break;
        }
    }

    // ========================================
    // DASHBOARD DATA
    // ========================================
    loadDashboardData() {
        this.updateStats();
        this.renderRecentActivity();
    }

    updateStats() {
        // Calculate stats
        const totalRevenue = this.orders.reduce((sum, order) => sum + order.amount, 0);
        const totalOrders = this.orders.length;
        const totalProducts = this.products.length;
        const totalCustomers = this.customers.length;

        // Update stats cards if they exist
        const totalRevenueEl = document.getElementById('totalRevenue');
        const totalOrdersEl = document.getElementById('totalOrders');
        const totalProductsEl = document.getElementById('totalProducts');
        const totalCustomersEl = document.getElementById('totalCustomers');

        if (totalRevenueEl) totalRevenueEl.textContent = `R ${totalRevenue.toLocaleString()}`;
        if (totalOrdersEl) totalOrdersEl.textContent = totalOrders.toLocaleString();
        if (totalProductsEl) totalProductsEl.textContent = totalProducts.toLocaleString();
        if (totalCustomersEl) totalCustomersEl.textContent = totalCustomers.toLocaleString();
    }

    renderRecentActivity() {
        // This would render recent activity in the dashboard
        console.log('Rendering recent activity...');
    }

    // ========================================
    // PRODUCTS MANAGEMENT
    // ========================================
    loadProductsData() {
        this.renderProductsStats();
        this.renderProductsTable();
    }

    renderProductsStats() {
        const totalProducts = this.products.length;
        const activeProducts = this.products.filter(p => p.status === 'active').length;
        const outOfStock = this.products.filter(p => p.stock === 0).length;

        // Update product stats
        const statsElements = document.querySelectorAll('#products-section .stat-value-large');
        if (statsElements.length >= 3) {
            statsElements[0].textContent = totalProducts;
            statsElements[1].textContent = activeProducts;
            statsElements[2].textContent = outOfStock;
        }
    }

    renderProductsTable() {
        const productsContainer = document.querySelector('#products-section .table-container');
        if (!productsContainer) return;

        const productsHTML = this.products.map(product => `
            <div class="product-row">
                <div class="product-info">
                    <strong>${product.name}</strong>
                    <span class="product-sku">${product.sku}</span>
                </div>
                <div class="product-stock ${product.stock < 10 ? 'low-stock' : ''}">
                    ${product.stock} in stock
                </div>
                <div class="product-price">
                    R ${product.price}
                    ${product.salePrice ? `<span class="sale-price">R ${product.salePrice}</span>` : ''}
                </div>
                <div class="product-actions">
                    <button class="btn-edit" onclick="admin.editProduct(${product.id})">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="btn-delete" onclick="admin.deleteProduct(${product.id})">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        `).join('');

        productsContainer.innerHTML = productsHTML;
    }

    showAddProductForm() {
        this.showNotification('Add product form would open here', 'info');
        // In full implementation, this would show a modal with product form
    }

    editProduct(productId) {
        const product = this.products.find(p => p.id === productId);
        if (product) {
            this.showNotification(`Editing product: ${product.name}`, 'info');
            // In full implementation, this would open edit form
        }
    }

    deleteProduct(productId) {
        if (confirm('Are you sure you want to delete this product?')) {
            this.products = this.products.filter(p => p.id !== productId);
            this.saveToLocalStorage('products', this.products);
            this.renderProductsTable();
            this.showNotification('Product deleted successfully', 'success');
        }
    }

    // ========================================
    // ORDERS MANAGEMENT
    // ========================================
    loadOrdersData() {
        this.renderOrdersStats();
        this.renderOrdersTable();
        this.renderDraftsTable();
        this.renderAbandonedCheckouts();
    }

    renderOrdersStats() {
        const today = new Date().toDateString();
        const todayOrders = this.orders.filter(order => new Date(order.date).toDateString() === today);
        const itemsOrdered = todayOrders.reduce((sum, order) => 
            sum + order.items.reduce((itemSum, item) => itemSum + item.quantity, 0), 0
        );
        const fulfilledOrders = this.orders.filter(order => order.status === 'completed').length;
        const pendingOrders = this.orders.filter(order => order.status === 'pending').length;

        // Update order stats
        const orderStats = document.querySelectorAll('#orders-tab .stat-value');
        if (orderStats.length >= 6) {
            orderStats[0].textContent = todayOrders.length;
            orderStats[1].textContent = itemsOrdered;
            orderStats[2].textContent = `R 0`; // Returns
            orderStats[3].textContent = fulfilledOrders;
            orderStats[4].textContent = fulfilledOrders; // Orders delivered
            orderStats[5].textContent = '0'; // Fulfillment time
        }

        // Update pending orders badge in sidebar
        const pendingBadge = document.querySelector('.order-badge');
        if (pendingBadge) {
            pendingBadge.textContent = pendingOrders;
        }
    }

    renderOrdersTable() {
        const ordersContainer = document.querySelector('#orders-tab .orders-list');
        if (!ordersContainer) return;

        const ordersHTML = this.orders.map(order => `
            <div class="order-item">
                <div class="order-info">
                    <strong>${order.id}</strong>
                    <span class="order-customer">${order.customer}</span>
                </div>
                <div class="order-date">${new Date(order.date).toLocaleDateString()}</div>
                <div class="order-amount">R ${order.amount}</div>
                <div class="order-status status-${order.status}">${order.status}</div>
                <div class="order-actions">
                    <button class="btn-view" onclick="admin.viewOrder('${order.id}')">
                        <i class="fas fa-eye"></i>
                    </button>
                </div>
            </div>
        `).join('');

        ordersContainer.innerHTML = ordersHTML;
    }

    renderDraftsTable() {
        const draftsContainer = document.querySelector('#drafts-tab .empty-state');
        if (draftsContainer && this.drafts.length > 0) {
            draftsContainer.innerHTML = `
                <h3>Draft Orders</h3>
                <div class="drafts-list">
                    ${this.drafts.map(draft => `
                        <div class="draft-item">
                            <strong>${draft.id}</strong>
                            <span>${draft.customer}</span>
                            <span>R ${draft.amount}</span>
                            <button class="btn-primary" onclick="admin.completeDraft('${draft.id}')">Complete</button>
                        </div>
                    `).join('')}
                </div>
            `;
        }
    }

    renderAbandonedCheckouts() {
        const abandonedContainer = document.querySelector('#abandoned-tab .empty-state');
        if (abandonedContainer && this.abandonedCheckouts.length > 0) {
            abandonedContainer.innerHTML = `
                <h3>Abandoned Checkouts</h3>
                <p>See when customers put items in their cart but don't check out.</p>
                <div class="abandoned-list">
                    ${this.abandonedCheckouts.map(checkout => `
                        <div class="abandoned-item">
                            <div class="abandoned-info">
                                <strong>${checkout.customer}</strong>
                                <span>${checkout.email}</span>
                                <span>R ${checkout.amount}</span>
                            </div>
                            <div class="abandoned-actions">
                                <button class="btn-secondary" onclick="admin.sendRecoveryEmail('${checkout.id}')">
                                    Send Recovery Email
                                </button>
                            </div>
                        </div>
                    `).join('')}
                </div>
            `;
        }
    }

    viewOrder(orderId) {
        const order = this.orders.find(o => o.id === orderId);
        if (order) {
            this.showNotification(`Viewing order: ${orderId}`, 'info');
            // In full implementation, this would open order details modal
        }
    }

    completeDraft(draftId) {
        const draft = this.drafts.find(d => d.id === draftId);
        if (draft) {
            this.drafts = this.drafts.filter(d => d.id !== draftId);
            this.orders.push({
                ...draft,
                status: 'completed',
                id: `GM-${Date.now()}`
            });
            this.saveAllData();
            this.renderDraftsTable();
            this.showNotification('Draft completed successfully', 'success');
        }
    }

    sendRecoveryEmail(checkoutId) {
        const checkout = this.abandonedCheckouts.find(c => c.id === checkoutId);
        if (checkout) {
            checkout.recoveryEmailSent = true;
            this.saveToLocalStorage('abandonedCheckouts', this.abandonedCheckouts);
            this.showNotification(`Recovery email sent to ${checkout.customer}`, 'success');
        }
    }

    // ========================================
    // CUSTOMERS MANAGEMENT
    // ========================================
    loadCustomersData() {
        this.renderCustomersStats();
        this.renderCustomersTable();
    }

    renderCustomersStats() {
        const totalCustomers = this.customers.length;
        const newThisMonth = this.customers.filter(customer => {
            const customerDate = new Date(customer.joinDate);
            const now = new Date();
            return customerDate.getMonth() === now.getMonth() && customerDate.getFullYear() === now.getFullYear();
        }).length;
        const activeCustomers = this.customers.filter(customer => customer.status === 'active').length;

        // Update customer stats
        const statsElements = document.querySelectorAll('#customers-section .stat-value-large');
        if (statsElements.length >= 3) {
            statsElements[0].textContent = totalCustomers;
            statsElements[1].textContent = newThisMonth;
            statsElements[2].textContent = activeCustomers;
        }
    }

    renderCustomersTable() {
        const customersContainer = document.querySelector('#customers-section .empty-state');
        if (customersContainer && this.customers.length > 0) {
            customersContainer.innerHTML = `
                <h3>Customer List</h3>
                <div class="customers-list">
                    ${this.customers.map(customer => `
                        <div class="customer-item">
                            <div class="customer-info">
                                <strong>${customer.name}</strong>
                                <span>${customer.email}</span>
                                <span>${customer.phone}</span>
                            </div>
                            <div class="customer-stats">
                                <span>${customer.orders} orders</span>
                                <span>R ${customer.totalSpent} spent</span>
                            </div>
                            <div class="customer-actions">
                                <button class="btn-view" onclick="admin.viewCustomer(${customer.id})">
                                    View Details
                                </button>
                            </div>
                        </div>
                    `).join('')}
                </div>
            `;
        }
    }

    viewCustomer(customerId) {
        const customer = this.customers.find(c => c.id === customerId);
        if (customer) {
            this.showNotification(`Viewing customer: ${customer.name}`, 'info');
            // In full implementation, this would open customer details
        }
    }

    // ========================================
    // COLLECTIONS MANAGEMENT
    // ========================================
    loadCollectionsData() {
        this.renderCollectionsList();
    }

    renderCollectionsList() {
        const collectionsList = document.querySelector('.collections-list');
        if (!collectionsList) return;

        collectionsList.innerHTML = this.collections.map(collection => `
            <div class="collection-item">
                <input type="checkbox" data-collection-id="${collection.id}">
                <span class="collection-title">${collection.name}</span>
                <span class="collection-count">${collection.products.length} products</span>
            </div>
        `).join('');
    }

    // ========================================
    // INVENTORY MANAGEMENT
    // ========================================
    loadInventoryData() {
        this.renderInventoryStats();
    }

    renderInventoryStats() {
        const lowStock = this.products.filter(p => p.stock > 0 && p.stock < 10).length;
        const outOfStock = this.products.filter(p => p.stock === 0).length;
        const totalValue = this.products.reduce((sum, product) => sum + (product.price * product.stock), 0);

        // Update inventory stats
        const statsElements = document.querySelectorAll('#inventory-section .stat-value');
        if (statsElements.length >= 3) {
            statsElements[0].textContent = lowStock;
            statsElements[1].textContent = outOfStock;
            statsElements[2].textContent = `R ${totalValue.toLocaleString()}`;
        }
    }

    // ========================================
    // MARKETING MANAGEMENT
    // ========================================
    loadMarketingData() {
        this.renderMarketingStats();
    }

    renderMarketingStats() {
        // Marketing stats would be rendered here
        console.log('Loading marketing data...');
    }

    createCampaign() {
        this.showNotification('Create campaign form would open here', 'info');
    }

    // ========================================
    // CAMPAIGNS MANAGEMENT
    // ========================================
    loadCampaignsData() {
        this.renderCampaignsList();
    }

    renderCampaignsList() {
        const campaignsContainer = document.querySelector('#campaigns-section .empty-state');
        if (campaignsContainer && this.campaigns.length > 0) {
            campaignsContainer.innerHTML = `
                <h3>Marketing Campaigns</h3>
                <div class="campaigns-list">
                    ${this.campaigns.map(campaign => `
                        <div class="campaign-item">
                            <div class="campaign-info">
                                <strong>${campaign.name}</strong>
                                <span>${campaign.type} • ${campaign.status}</span>
                                <span>Budget: R ${campaign.budget} • Spent: R ${campaign.spent}</span>
                            </div>
                            <div class="campaign-actions">
                                <button class="btn-view" onclick="admin.viewCampaign(${campaign.id})">
                                    View Details
                                </button>
                            </div>
                        </div>
                    `).join('')}
                </div>
            `;
        }
    }

    viewCampaign(campaignId) {
        const campaign = this.campaigns.find(c => c.id === campaignId);
        if (campaign) {
            this.showNotification(`Viewing campaign: ${campaign.name}`, 'info');
        }
    }

    // ========================================
    // GIFT CARDS MANAGEMENT
    // ========================================
    loadGiftCardsData() {
        // Gift cards data would be loaded here
    }

    createGiftCard() {
        this.showNotification('Create gift card form would open here', 'info');
    }

    // ========================================
    // ANALYTICS MANAGEMENT
    // ========================================
    loadAnalyticsData() {
        this.renderAnalyticsStats();
    }

    renderAnalyticsStats() {
        const totalSales = this.orders.reduce((sum, order) => sum + order.amount, 0);
        const conversionRate = this.calculateConversionRate();
        const averageOrderValue = totalSales / (this.orders.length || 1);

        // Update analytics stats
        const statsElements = document.querySelectorAll('#analytics-section .stat-value-large');
        if (statsElements.length >= 3) {
            statsElements[0].textContent = `R ${Math.round(totalSales).toLocaleString()}`;
            statsElements[1].textContent = `${conversionRate}%`;
            statsElements[2].textContent = `R ${Math.round(averageOrderValue).toLocaleString()}`;
        }
    }

    calculateConversionRate() {
        const totalVisitors = 1000;
        const totalOrders = this.orders.length;
        return ((totalOrders / totalVisitors) * 100).toFixed(1);
    }

    // ========================================
    // TAB MANAGEMENT
    // ========================================
    switchTab(sectionId, tabId) {
        const section = document.getElementById(sectionId);
        if (!section) return;

        // Update tab buttons
        section.querySelectorAll('.tab-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        section.querySelector(`[data-tab="${tabId}"]`).classList.add('active');

        // Update tab content
        section.querySelectorAll('.tab-content').forEach(content => {
            content.classList.remove('active');
        });
        section.getElementById(`${tabId}-tab`).classList.add('active');
    }

    // ========================================
    // SEARCH FUNCTIONALITY
    // ========================================
    handleSearch(query) {
        if (query.length < 2) {
            this.clearSearchResults();
            return;
        }
        this.performSearch(query, this.currentSection);
    }

    performSearch(query, section) {
        let results = [];
        
        this.showSearchLoading();
        
        setTimeout(() => {
            switch(section) {
                case 'products':
                    results = this.searchProducts(query);
                    break;
                case 'orders':
                    results = this.searchOrders(query);
                    break;
                case 'customers':
                    results = this.searchCustomers(query);
                    break;
                default:
                    results = this.searchAll(query);
            }
            
            this.displaySearchResults(results, section);
        }, 300);
    }

    showSearchLoading() {
        this.clearSearchResults();
        
        const loadingHTML = `
            <div class="search-results">
                <div class="search-loading">
                    <div class="loading-spinner"></div>
                    <span>Searching...</span>
                </div>
            </div>
        `;
        
        document.querySelector('.admin-content').insertAdjacentHTML('afterbegin', loadingHTML);
    }

    searchProducts(query) {
        return this.products.filter(product => 
            product.name.toLowerCase().includes(query.toLowerCase()) ||
            product.category.toLowerCase().includes(query.toLowerCase()) ||
            product.shortDescription.toLowerCase().includes(query.toLowerCase()) ||
            product.sku.toLowerCase().includes(query.toLowerCase())
        );
    }

    searchOrders(query) {
        return this.orders.filter(order =>
            order.id.toLowerCase().includes(query.toLowerCase()) ||
            order.customer.toLowerCase().includes(query.toLowerCase()) ||
            order.email.toLowerCase().includes(query.toLowerCase())
        );
    }

    searchCustomers(query) {
        return this.customers.filter(customer =>
            customer.name.toLowerCase().includes(query.toLowerCase()) ||
            customer.email.toLowerCase().includes(query.toLowerCase()) ||
            customer.phone.toLowerCase().includes(query.toLowerCase())
        );
    }

    searchAll(query) {
        return [
            ...this.searchProducts(query),
            ...this.searchOrders(query),
            ...this.searchCustomers(query)
        ];
    }

    displaySearchResults(results, section) {
        let existingResults = document.getElementById('search-results');
        if (!existingResults) {
            existingResults = document.createElement('div');
            existingResults.id = 'search-results';
            existingResults.className = 'search-results';
            document.querySelector('.admin-content').prepend(existingResults);
        }

        if (results.length === 0) {
            existingResults.innerHTML = '<div class="no-results">No results found</div>';
            return;
        }

        const resultsHTML = results.map(result => `
            <div class="search-result-item" data-id="${result.id}" onclick="admin.handleSearchResultClick('${result.id}', '${this.getResultType(result)}')">
                <h4>${result.name || result.id}</h4>
                <p>${result.email || result.shortDescription || result.customer || ''}</p>
                <small>${this.getResultType(result)}</small>
            </div>
        `).join('');

        existingResults.innerHTML = `
            <div class="search-results-header">
                <h3>Search Results (${results.length})</h3>
                <button class="close-search" onclick="admin.clearSearchResults()">×</button>
            </div>
            <div class="search-results-list">${resultsHTML}</div>
        `;
    }

    getResultType(result) {
        if (result.hasOwnProperty('price')) return 'Product';
        if (result.hasOwnProperty('amount')) return 'Order';
        if (result.hasOwnProperty('orders')) return 'Customer';
        return 'Unknown';
    }

    handleSearchResultClick(id, type) {
        switch(type) {
            case 'Product':
                this.editProduct(parseInt(id));
                break;
            case 'Order':
                this.viewOrder(id);
                break;
            case 'Customer':
                this.viewCustomer(parseInt(id));
                break;
        }
        this.clearSearchResults();
    }

    clearSearchResults() {
        const existingResults = document.getElementById('search-results');
        if (existingResults) {
            existingResults.remove();
        }
    }

    // ========================================
    // NOTIFICATION SYSTEM
    // ========================================
    showNotification(message, type = 'info') {
        const existingNotifications = document.querySelectorAll('.admin-notification');
        existingNotifications.forEach(notification => notification.remove());

        const notification = document.createElement('div');
        notification.className = `admin-notification notification-${type}`;
        
        const icon = this.getNotificationIcon(type);
        const title = this.getNotificationTitle(type);
        
        notification.innerHTML = `
            <div class="notification-content">
                <i class="fas fa-${icon}"></i>
                <div class="notification-text">
                    <strong>${title}</strong>
                    <span>${message}</span>
                </div>
            </div>
        `;

        if (!document.querySelector('#notification-styles')) {
            const styles = document.createElement('style');
            styles.id = 'notification-styles';
            styles.textContent = this.getNotificationStyles();
            document.head.appendChild(styles);
        }

        document.body.appendChild(notification);

        if (type === 'success') {
            notification.classList.add('success-pulse');
        }

        setTimeout(() => notification.classList.add('show'), 100);

        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }

    getNotificationIcon(type) {
        const icons = {
            'success': 'check-circle',
            'error': 'exclamation-circle',
            'warning': 'exclamation-triangle',
            'info': 'info-circle'
        };
        return icons[type] || 'info-circle';
    }

    getNotificationTitle(type) {
        const titles = {
            'success': 'Success!',
            'error': 'Error',
            'warning': 'Warning',
            'info': 'Information'
        };
        return titles[type] || 'Notification';
    }

    getNotificationStyles() {
        return `
            .admin-notification {
                position: fixed;
                top: 20px;
                right: 20px;
                background: white;
                padding: 15px 20px;
                border-radius: 8px;
                box-shadow: 0 4px 15px rgba(0,0,0,0.2);
                border-left: 4px solid #000;
                transform: translateX(100%);
                transition: transform 0.3s ease;
                z-index: 10000;
                max-width: 300px;
                border: 1px solid #e1e3e5;
            }
            .admin-notification.show {
                transform: translateX(0);
            }
            .notification-content {
                display: flex;
                align-items: center;
                gap: 10px;
            }
            .notification-text {
                display: flex;
                flex-direction: column;
            }
            .notification-text strong {
                font-size: 12px;
                text-transform: uppercase;
                color: #6d7175;
            }
            .notification-success { 
                border-color: #008060;
                background: linear-gradient(135deg, var(--white) 0%, var(--accent-green-light) 100%);
            }
            .notification-error { border-color: #d72c0d; }
            .notification-warning { border-color: #ffc453; }
            .notification-info { border-color: #2c6ecb; }
            
            .search-results {
                background: white;
                border: 1px solid var(--accent-green);
                border-radius: 8px;
                margin-bottom: 20px;
                box-shadow: 0 2px 8px rgba(0, 128, 96, 0.1);
            }
            
            .search-results-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 15px 20px;
                border-bottom: 1px solid var(--accent-green);
                background: var(--accent-green-light);
            }
            
            .search-results-header h3 {
                margin: 0;
                font-size: 16px;
                font-weight: 600;
                color: var(--accent-green);
            }
            
            .close-search {
                background: none;
                border: none;
                font-size: 20px;
                cursor: pointer;
                color: var(--accent-green);
            }
            
            .search-results-list {
                padding: 10px 0;
            }
            
            .search-result-item {
                padding: 10px 20px;
                border-bottom: 1px solid var(--border-light);
                cursor: pointer;
                transition: background-color 0.2s;
            }
            
            .search-result-item:hover {
                background-color: var(--accent-green-light);
            }
            
            .search-result-item h4 {
                margin: 0 0 5px 0;
                font-size: 14px;
                font-weight: 600;
                color: var(--accent-green);
            }
            
            .search-result-item p {
                margin: 0 0 5px 0;
                color: var(--text-light);
                font-size: 13px;
            }
            
            .search-result-item small {
                color: var(--accent-green);
                font-size: 12px;
                font-weight: 500;
            }
            
            .no-results {
                padding: 20px;
                text-align: center;
                color: var(--accent-green);
            }

            .product-row, .order-item, .customer-item, .collection-item, .campaign-item, .draft-item, .abandoned-item {
                display: flex;
                align-items: center;
                padding: 12px;
                border-bottom: 1px solid var(--border-light);
                gap: 15px;
            }

            .low-stock {
                color: #d72c0d;
                font-weight: 600;
            }

            .sale-price {
                color: #008060;
                font-weight: 600;
            }

            .status-completed { color: #008060; }
            .status-processing { color: #ffc453; }
            .status-pending { color: #2c6ecb; }

            .btn-edit, .btn-delete, .btn-view {
                background: none;
                border: none;
                padding: 6px;
                border-radius: 4px;
                cursor: pointer;
                transition: background-color 0.2s;
            }

            .btn-edit:hover { background: var(--accent-green-light); color: var(--accent-green); }
            .btn-delete:hover { background: #fef0f0; color: #d72c0d; }
            .btn-view:hover { background: var(--accent-green-light); color: var(--accent-green); }
        `;
    }

    // ========================================
    // DATA PERSISTENCE
    // ========================================
    saveAllData() {
        this.saveToLocalStorage('products', this.products);
        this.saveToLocalStorage('orders', this.orders);
        this.saveToLocalStorage('customers', this.customers);
        this.saveToLocalStorage('collections', this.collections);
        this.saveToLocalStorage('campaigns', this.campaigns);
        this.saveToLocalStorage('drafts', this.drafts);
        this.saveToLocalStorage('abandonedCheckouts', this.abandonedCheckouts);
        this.saveToLocalStorage('settings', this.settings);
    }

    saveToLocalStorage(key, data) {
        try {
            localStorage.setItem(`greenMarvel_${key}`, JSON.stringify(data));
        } catch (error) {
            console.error('Error saving to localStorage:', error);
            this.showNotification('Error saving data', 'error');
        }
    }

    loadFromLocalStorage(key) {
        try {
            const data = localStorage.getItem(`greenMarvel_${key}`);
            return data ? JSON.parse(data) : null;
        } catch (error) {
            console.error('Error loading from localStorage:', error);
            return null;
        }
    }

    // ========================================
    // UTILITY FUNCTIONS
    // ========================================
    handleKeyboardShortcuts(e) {
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            document.querySelector('.header-search input').focus();
        }

        if (e.key === 'Escape') {
            this.clearSearchResults();
            const searchInput = document.querySelector('.header-search input');
            if (searchInput) searchInput.value = '';
        }
    }

    handleResize() {
        if (window.innerWidth < 768) {
            const sidebar = document.querySelector('.admin-sidebar');
            if (!sidebar.classList.contains('mobile-open')) {
                sidebar.classList.add('mobile-open');
            }
        }
    }

    // ========================================
    // DATA EXPORT/IMPORT
    // ========================================
    exportData() {
        const data = {
            products: this.products,
            orders: this.orders,
            customers: this.customers,
            collections: this.collections,
            campaigns: this.campaigns,
            drafts: this.drafts,
            abandonedCheckouts: this.abandonedCheckouts,
            settings: this.settings,
            exportDate: new Date().toISOString()
        };

        const dataStr = JSON.stringify(data, null, 2);
        const dataBlob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(dataBlob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `green-marvel-backup-${new Date().toISOString().split('T')[0]}.json`;
        link.click();
        URL.revokeObjectURL(url);

        this.showNotification('Data exported successfully', 'success');
    }

    importData(file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const data = JSON.parse(e.target.result);
                
                if (data.products) this.products = data.products;
                if (data.orders) this.orders = data.orders;
                if (data.customers) this.customers = data.customers;
                if (data.collections) this.collections = data.collections;
                if (data.campaigns) this.campaigns = data.campaigns;
                if (data.drafts) this.drafts = data.drafts;
                if (data.abandonedCheckouts) this.abandonedCheckouts = data.abandonedCheckouts;
                if (data.settings) this.settings = data.settings;
                
                this.saveAllData();
                this.updateStats();
                this.showNotification('Data imported successfully', 'success');
            } catch (error) {
                this.showNotification('Error importing data', 'error');
                console.error('Import error:', error);
            }
        };
        reader.readAsText(file);
    }

    // ========================================
    // ADVANCED FEATURES
    // ========================================
    generateReport(type, period) {
        let reportData = {};
        
        switch(type) {
            case 'sales':
                reportData = this.generateSalesReport(period);
                break;
            case 'products':
                reportData = this.generateProductsReport(period);
                break;
            case 'customers':
                reportData = this.generateCustomersReport(period);
                break;
        }
        
        this.displayReport(reportData, type);
    }

    generateSalesReport(period) {
        const now = new Date();
        let startDate;
        
        switch(period) {
            case 'week':
                startDate = new Date(now.setDate(now.getDate() - 7));
                break;
            case 'month':
                startDate = new Date(now.setMonth(now.getMonth() - 1));
                break;
            case 'year':
                startDate = new Date(now.setFullYear(now.getFullYear() - 1));
                break;
            default:
                startDate = new Date(now.setDate(now.getDate() - 30));
        }
        
        const periodOrders = this.orders.filter(order => new Date(order.date) >= startDate);
        const totalRevenue = periodOrders.reduce((sum, order) => sum + order.amount, 0);
        const averageOrderValue = totalRevenue / (periodOrders.length || 1);
        
        return {
            period: period,
            totalOrders: periodOrders.length,
            totalRevenue: totalRevenue,
            averageOrderValue: averageOrderValue,
            orders: periodOrders
        };
    }

    generateProductsReport(period) {
        const topProducts = this.products
            .sort((a, b) => b.stock - a.stock)
            .slice(0, 5);
        
        return {
            period: period,
            topProducts: topProducts,
            totalProducts: this.products.length,
            lowStockCount: this.products.filter(p => p.stock < 10).length
        };
    }

    generateCustomersReport(period) {
        const topCustomers = this.customers
            .sort((a, b) => b.totalSpent - a.totalSpent)
            .slice(0, 5);
        
        return {
            period: period,
            topCustomers: topCustomers,
            totalCustomers: this.customers.length,
            newCustomers: this.customers.filter(c => {
                const joinDate = new Date(c.joinDate);
                const monthAgo = new Date();
                monthAgo.setMonth(monthAgo.getMonth() - 1);
                return joinDate >= monthAgo;
            }).length
        };
    }

    displayReport(reportData, type) {
        this.showNotification(`${type} report generated for ${reportData.period} period`, 'info');
        console.log('Report Data:', reportData);
        
        // In a full implementation, this would display the report in a modal or new section
    }

    showSuccessAnimation(element) {
        const successOverlay = document.createElement('div');
        successOverlay.className = 'success-overlay';
        successOverlay.innerHTML = `
            <i class="fas fa-check-circle"></i>
            <span>Success!</span>
        `;
        
        element.style.position = 'relative';
        element.appendChild(successOverlay);
        
        setTimeout(() => {
            successOverlay.remove();
        }, 2000);
    }
}

// ========================================
// INITIALIZATION
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    const admin = new AdminDashboard();
    
    window.admin = admin;

    document.addEventListener('keydown', (e) => {
        admin.handleKeyboardShortcuts(e);
    });

    window.exportAdminData = () => admin.exportData();
    
    window.importAdminData = (fileInput) => {
        if (fileInput.files.length > 0) {
            admin.importData(fileInput.files[0]);
        }
    };

    window.generateSalesReport = (period) => admin.generateReport('sales', period);
    window.generateProductsReport = (period) => admin.generateReport('products', period);
    window.generateCustomersReport = (period) => admin.generateReport('customers', period);
});

if (typeof module !== 'undefined' && module.exports) {
    module.exports = AdminDashboard;
}