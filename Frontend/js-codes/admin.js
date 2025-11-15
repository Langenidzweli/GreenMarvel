// ========================================
// GREEN MARVEL ADMIN DASHBOARD
// Complete Admin Panel with All Features
// ========================================

class AdminDashboard {
    constructor() {
        this.currentSection = 'dashboard';
        this.sidebarCollapsed = false;
        this.products = [];
        this.orders = [];
        this.specials = [];
        this.notifications = [];
        this.banners = [];
        this.init();
    }

    // ========================================
    // INITIALIZATION
    // ========================================
    init() {
        this.loadInitialData();
        this.setupEventListeners();
        this.setActiveSection('dashboard');
        this.updateNotificationBadge();
        console.log('Green Marvel Admin Dashboard initialized');
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
                status: 'active'
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
                status: 'active'
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
                status: 'active'
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
                ]
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
                ]
            }
        ];

        // Load specials
        this.specials = this.loadFromLocalStorage('specials') || [];

        // Load notifications
        this.notifications = this.loadFromLocalStorage('notifications') || [];

        // Load banners
        this.banners = this.loadFromLocalStorage('banners') || [];

        // Save initial data
        this.saveAllData();
    }

    // ========================================
    // EVENT LISTENERS SETUP
    // ========================================
    setupEventListeners() {
        // Sidebar toggle
        const sidebarToggle = document.getElementById('sidebarToggle');
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

        // Quick action buttons
        document.querySelectorAll('.quick-action-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const action = btn.getAttribute('data-action');
                this.handleQuickAction(action);
            });
        });

        // Search functionality
        const adminSearch = document.getElementById('adminSearch');
        if (adminSearch) {
            adminSearch.addEventListener('input', (e) => {
                this.handleSearch(e.target.value);
            });
        }

        // Add product button
        const addProductBtn = document.getElementById('addProductBtn');
        if (addProductBtn) {
            addProductBtn.addEventListener('click', () => {
                this.setActiveSection('add-product');
            });
        }

        // Product form submission
        const addProductForm = document.getElementById('addProductForm');
        if (addProductForm) {
            addProductForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleAddProduct(e);
            });
        }

        // Cancel product button
        const cancelProductBtn = document.getElementById('cancelProductBtn');
        if (cancelProductBtn) {
            cancelProductBtn.addEventListener('click', () => {
                this.setActiveSection('products');
            });
        }

        // Notification form
        const notificationForm = document.getElementById('notificationForm');
        if (notificationForm) {
            notificationForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleSendNotification(e);
            });
        }

        // Banner form
        const bannerForm = document.getElementById('bannerForm');
        if (bannerForm) {
            bannerForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleCreateBanner(e);
            });
        }

        // Settings form
        const storeSettingsForm = document.getElementById('storeSettingsForm');
        if (storeSettingsForm) {
            storeSettingsForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleSaveSettings(e);
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
    }

    // ========================================
    // SIDEBAR FUNCTIONALITY
    // ========================================
    toggleSidebar() {
        const sidebar = document.getElementById('adminSidebar');
        const main = document.getElementById('adminMain');
        
        this.sidebarCollapsed = !this.sidebarCollapsed;
        
        sidebar.classList.toggle('collapsed');
        main.classList.toggle('expanded');
        
        localStorage.setItem('adminSidebarCollapsed', this.sidebarCollapsed);
    }

    // ========================================
    // SECTION MANAGEMENT
    // ========================================
    setActiveSection(section) {
        // Update menu items
        document.querySelectorAll('.menu-item').forEach(item => {
            item.classList.remove('active');
        });
        
        document.querySelector(`[data-section="${section}"]`).classList.add('active');
        
        // Update content sections
        document.querySelectorAll('.content-section').forEach(section => {
            section.classList.remove('active');
        });
        
        document.getElementById(`${section}-section`).classList.add('active');
        
        // Update page title
        this.updatePageTitle(section);
        
        // Load section-specific data
        this.loadSectionData(section);
        
        this.currentSection = section;
    }

    updatePageTitle(section) {
        const titles = {
            'dashboard': 'Dashboard',
            'products': 'Product Management',
            'add-product': 'Add New Product',
            'orders': 'Order Management',
            'specials': 'Special Offers',
            'notifications': 'Website Notifications',
            'banners': 'Promotional Banners',
            'reports': 'Sales Reports',
            'settings': 'Store Settings'
        };
        
        const titleElement = document.getElementById('pageTitle');
        if (titleElement && titles[section]) {
            titleElement.textContent = titles[section];
        }
    }

    // ========================================
    // SECTION-SPECIFIC DATA LOADING
    // ========================================
    loadSectionData(section) {
        switch(section) {
            case 'dashboard':
                this.loadDashboardData();
                break;
            case 'products':
                this.loadProductsData();
                break;
            case 'orders':
                this.loadOrdersData();
                break;
            case 'specials':
                this.loadSpecialsData();
                break;
            case 'notifications':
                this.loadNotificationsData();
                break;
            case 'banners':
                this.loadBannersData();
                break;
            case 'reports':
                this.loadReportsData();
                break;
            case 'settings':
                this.loadSettingsData();
                break;
        }
    }

    // ========================================
    // DASHBOARD DATA
    // ========================================
    loadDashboardData() {
        // Calculate stats
        const totalRevenue = this.orders.reduce((sum, order) => sum + order.amount, 0);
        const totalOrders = this.orders.length;
        const totalProducts = this.products.length;
        const totalCustomers = [...new Set(this.orders.map(order => order.email))].length;

        // Update stats cards
        document.getElementById('totalRevenue').textContent = `R ${totalRevenue.toLocaleString()}`;
        document.getElementById('totalOrders').textContent = totalOrders.toLocaleString();
        document.getElementById('totalProducts').textContent = totalProducts.toLocaleString();
        document.getElementById('totalCustomers').textContent = totalCustomers.toLocaleString();

        // Update recent orders
        this.loadRecentOrders();

        // Update pending orders badge
        const pendingOrders = this.orders.filter(order => order.status === 'processing' || order.status === 'pending').length;
        document.getElementById('pendingOrders').textContent = pendingOrders;
    }

    loadRecentOrders() {
        const ordersList = document.getElementById('recentOrders');
        if (!ordersList) return;

        const recentOrders = this.orders.slice(0, 5);
        ordersList.innerHTML = recentOrders.map(order => `
            <div class="order-item" style="display: flex; justify-content: space-between; align-items: center; padding: 10px 0; border-bottom: 1px solid #f0f0f0;">
                <div class="order-info">
                    <strong style="color: #46853c;">${order.id}</strong>
                    <div style="color: #666; font-size: 0.9rem;">${order.customer}</div>
                </div>
                <div class="order-meta" style="text-align: right;">
                    <div style="font-weight: 600; color: #2c3e50;">R ${order.amount}</div>
                    <span class="status-badge ${order.status}" style="padding: 2px 8px; border-radius: 10px; font-size: 0.7rem; background: ${this.getStatusColor(order.status)}; color: white;">
                        ${order.status}
                    </span>
                </div>
            </div>
        `).join('');
    }

    getStatusColor(status) {
        const colors = {
            'completed': '#27ae60',
            'processing': '#3498db',
            'pending': '#f39c12',
            'cancelled': '#e74c3c'
        };
        return colors[status] || '#95a5a6';
    }

    // ========================================
    // PRODUCTS MANAGEMENT
    // ========================================
    loadProductsData() {
        this.renderProductsTable();
    }

    renderProductsTable() {
        const tableBody = document.querySelector('#productsTable tbody');
        if (!tableBody) return;

        tableBody.innerHTML = this.products.map(product => `
            <tr>
                <td>
                    <div class="product-cell">
                        <strong>${product.name}</strong>
                        <div style="font-size: 0.8rem; color: #666;">${product.shortDescription}</div>
                    </div>
                </td>
                <td>${this.formatCategory(product.category)}</td>
                <td>
                    ${product.salePrice ? 
                        `<span style="text-decoration: line-through; color: #999;">R ${product.price}</span>` : 
                        `<strong>R ${product.price}</strong>`
                    }
                </td>
                <td>
                    ${product.salePrice ? 
                        `<strong style="color: #e74c3c;">R ${product.salePrice}</strong>
                         <div style="font-size: 0.7rem; color: #27ae60;">
                             ${Math.round((1 - product.salePrice/product.price) * 100)}% OFF
                         </div>` : 
                        '-'
                    }
                </td>
                <td>
                    <span class="stock-badge ${product.stock < 10 ? 'low' : 'good'}">
                        ${product.stock} in stock
                    </span>
                </td>
                <td>
                    <span class="status-badge ${product.status}">
                        ${product.status}
                    </span>
                </td>
                <td>
                    <div class="action-buttons">
                        <button class="btn-edit" onclick="admin.editProduct(${product.id})">
                            <i class="fas fa-edit"></i>
                        </button>
                        <button class="btn-delete" onclick="admin.deleteProduct(${product.id})">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </td>
            </tr>
        `).join('');
    }

    formatCategory(category) {
        const categories = {
            'growth-oil': 'Growth Oil',
            'hair-spray': 'Hair Spray',
            'hair-food': 'Hair Food',
            'combo': 'Combo Deal',
            'special': 'Special Offer'
        };
        return categories[category] || category;
    }

    handleAddProduct(e) {
        const formData = new FormData(e.target);
        const productData = {
            id: Date.now(),
            name: formData.get('productName'),
            category: formData.get('productCategory'),
            price: parseFloat(formData.get('productPrice')),
            salePrice: formData.get('salePrice') ? parseFloat(formData.get('salePrice')) : null,
            size: formData.get('productSize'),
            stock: parseInt(formData.get('productStock')),
            shortDescription: formData.get('shortDescription'),
            fullDescription: formData.get('fullDescription'),
            image: formData.get('productImage'),
            isFeatured: formData.get('isFeatured') === 'on',
            isSpecial: formData.get('isSpecial') === 'on',
            isCombo: formData.get('isCombo') === 'on',
            status: 'active'
        };

        this.products.push(productData);
        this.saveToLocalStorage('products', this.products);
        
        this.showNotification('Product added successfully!', 'success');
        this.setActiveSection('products');
        e.target.reset();
    }

    editProduct(productId) {
        const product = this.products.find(p => p.id === productId);
        if (product) {
            // Populate form with product data
            document.getElementById('productName').value = product.name;
            document.getElementById('productCategory').value = product.category;
            document.getElementById('productPrice').value = product.price;
            document.getElementById('salePrice').value = product.salePrice || '';
            document.getElementById('productSize').value = product.size;
            document.getElementById('productStock').value = product.stock;
            document.getElementById('shortDescription').value = product.shortDescription;
            document.getElementById('fullDescription').value = product.fullDescription;
            document.getElementById('productImage').value = product.image;
            document.getElementById('isFeatured').checked = product.isFeatured;
            document.getElementById('isSpecial').checked = product.isSpecial;
            document.getElementById('isCombo').checked = product.isCombo;
            
            this.setActiveSection('add-product');
            this.showNotification('Edit the product details and save changes', 'info');
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
    // NOTIFICATIONS MANAGEMENT
    // ========================================
    loadNotificationsData() {
        this.renderActiveNotifications();
    }

    handleSendNotification(e) {
        const formData = new FormData(e.target);
        const notification = {
            id: Date.now(),
            title: formData.get('notificationTitle'),
            message: formData.get('notificationMessage'),
            type: formData.get('notificationType'),
            expiry: parseInt(formData.get('notificationExpiry')),
            createdAt: new Date().toISOString(),
            active: true
        };

        this.notifications.push(notification);
        this.saveToLocalStorage('notifications', this.notifications);
        
        // Update website notifications
        this.updateWebsiteNotifications();
        
        this.showNotification('Notification sent to website!', 'success');
        e.target.reset();
        this.renderActiveNotifications();
    }

    renderActiveNotifications() {
        const notificationsList = document.getElementById('activeNotifications');
        if (!notificationsList) return;

        const activeNotifications = this.notifications.filter(n => n.active);
        notificationsList.innerHTML = activeNotifications.map(notification => `
            <div class="notification-item ${notification.type}">
                <h4>${notification.title}</h4>
                <p>${notification.message}</p>
                <div style="display: flex; justify-content: between; align-items: center; margin-top: 10px;">
                    <small style="color: #666;">Created: ${new Date(notification.createdAt).toLocaleDateString()}</small>
                    <button onclick="admin.deleteNotification(${notification.id})" style="background: #e74c3c; color: white; border: none; padding: 2px 8px; border-radius: 4px; font-size: 0.7rem; cursor: pointer;">
                        Remove
                    </button>
                </div>
            </div>
        `).join('');
    }

    deleteNotification(notificationId) {
        this.notifications = this.notifications.filter(n => n.id !== notificationId);
        this.saveToLocalStorage('notifications', this.notifications);
        this.updateWebsiteNotifications();
        this.renderActiveNotifications();
        this.showNotification('Notification removed', 'success');
    }

    updateWebsiteNotifications() {
        // Save notifications for website to display
        const websiteNotifications = this.notifications
            .filter(n => n.active)
            .map(n => ({
                id: n.id,
                title: n.title,
                message: n.message,
                type: n.type
            }));
        
        this.saveToLocalStorage('websiteNotifications', websiteNotifications);
        this.updateNotificationBadge();
    }

    updateNotificationBadge() {
        const websiteNotifications = this.loadFromLocalStorage('websiteNotifications') || [];
        const badge = document.querySelector('.notification-badge');
        if (badge) {
            badge.textContent = websiteNotifications.length;
            badge.style.display = websiteNotifications.length > 0 ? 'flex' : 'none';
        }
    }

    // ========================================
    // BANNERS MANAGEMENT
    // ========================================
    loadBannersData() {
        this.renderActiveBanners();
    }

    handleCreateBanner(e) {
        const formData = new FormData(e.target);
        const banner = {
            id: Date.now(),
            title: formData.get('bannerTitle'),
            text: formData.get('bannerText'),
            image: formData.get('bannerImage'),
            link: formData.get('bannerLink'),
            position: formData.get('bannerPosition'),
            active: formData.get('bannerActive') === 'on',
            createdAt: new Date().toISOString()
        };

        this.banners.push(banner);
        this.saveToLocalStorage('banners', this.banners);
        this.saveToLocalStorage('websiteBanners', this.banners.filter(b => b.active));
        
        this.showNotification('Banner created successfully!', 'success');
        e.target.reset();
        this.renderActiveBanners();
    }

    renderActiveBanners() {
        const bannersGrid = document.getElementById('activeBanners');
        if (!bannersGrid) return;

        const activeBanners = this.banners.filter(b => b.active);
        bannersGrid.innerHTML = activeBanners.map(banner => `
            <div class="banner-card">
                <h4>${banner.title}</h4>
                <p>${banner.text}</p>
                <div style="margin: 10px 0;">
                    <img src="${banner.image}" alt="${banner.title}" style="width: 100%; height: 120px; object-fit: cover; border-radius: 8px;">
                </div>
                <div style="display: flex; justify-content: between; align-items: center;">
                    <small style="color: #666;">Position: ${banner.position}</small>
                    <button onclick="admin.deleteBanner(${banner.id})" style="background: #e74c3c; color: white; border: none; padding: 4px 8px; border-radius: 4px; cursor: pointer;">
                        Remove
                    </button>
                </div>
            </div>
        `).join('');
    }

    deleteBanner(bannerId) {
        this.banners = this.banners.filter(b => b.id !== bannerId);
        this.saveToLocalStorage('banners', this.banners);
        this.saveToLocalStorage('websiteBanners', this.banners.filter(b => b.active));
        this.renderActiveBanners();
        this.showNotification('Banner removed', 'success');
    }

    // ========================================
    // ORDERS MANAGEMENT
    // ========================================
    loadOrdersData() {
        this.renderOrdersTable();
    }

    renderOrdersTable() {
        const tableBody = document.querySelector('#ordersTable tbody');
        if (!tableBody) return;

        tableBody.innerHTML = this.orders.map(order => `
            <tr>
                <td><strong>${order.id}</strong></td>
                <td>
                    <div>${order.customer}</div>
                    <small style="color: #666;">${order.email}</small>
                </td>
                <td>${new Date(order.date).toLocaleDateString()}</td>
                <td><strong>R ${order.amount}</strong></td>
                <td>
                    <span class="status-badge ${order.status}">
                        ${order.status}
                    </span>
                </td>
                <td>
                    <button class="btn-edit" onclick="admin.viewOrder('${order.id}')">
                        <i class="fas fa-eye"></i>
                    </button>
                </td>
            </tr>
        `).join('');
    }

    viewOrder(orderId) {
        const order = this.orders.find(o => o.id === orderId);
        if (order) {
            alert(`Order Details:\n\nOrder ID: ${order.id}\nCustomer: ${order.customer}\nEmail: ${order.email}\nAmount: R ${order.amount}\nStatus: ${order.status}\n\nItems:\n${order.items.map(item => `- ${item.name} x${item.quantity} (R ${item.price})`).join('\n')}`);
        }
    }

    // ========================================
    // REPORTS DATA
    // ========================================
    loadReportsData() {
        const todaySales = this.calculateTodaySales();
        const weekSales = this.calculateWeekSales();
        const monthSales = this.calculateMonthSales();
        const totalRevenue = this.orders.reduce((sum, order) => sum + order.amount, 0);

        document.getElementById('todaySales').textContent = `R ${todaySales.toLocaleString()}`;
        document.getElementById('weekSales').textContent = `R ${weekSales.toLocaleString()}`;
        document.getElementById('monthSales').textContent = `R ${monthSales.toLocaleString()}`;
        document.getElementById('totalRevenueReport').textContent = `R ${totalRevenue.toLocaleString()}`;
    }

    calculateTodaySales() {
        const today = new Date().toDateString();
        return this.orders
            .filter(order => new Date(order.date).toDateString() === today)
            .reduce((sum, order) => sum + order.amount, 0);
    }

    calculateWeekSales() {
        const oneWeekAgo = new Date();
        oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
        return this.orders
            .filter(order => new Date(order.date) >= oneWeekAgo)
            .reduce((sum, order) => sum + order.amount, 0);
    }

    calculateMonthSales() {
        const oneMonthAgo = new Date();
        oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);
        return this.orders
            .filter(order => new Date(order.date) >= oneMonthAgo)
            .reduce((sum, order) => sum + order.amount, 0);
    }

    // ========================================
    // SETTINGS MANAGEMENT
    // ========================================
    loadSettingsData() {
        const settings = this.loadFromLocalStorage('storeSettings') || {
            storeName: 'Green Marvel',
            storeEmail: 'admin@greenmarvel.co.za',
            storePhone: '081 752 3336',
            freeShippingThreshold: 600,
            shippingCost: 50
        };

        document.getElementById('storeName').value = settings.storeName;
        document.getElementById('storeEmail').value = settings.storeEmail;
        document.getElementById('storePhone').value = settings.storePhone;
        document.getElementById('freeShippingThreshold').value = settings.freeShippingThreshold;
        document.getElementById('shippingCost').value = settings.shippingCost;
    }

    handleSaveSettings(e) {
        const formData = new FormData(e.target);
        const settings = {
            storeName: formData.get('storeName'),
            storeEmail: formData.get('storeEmail'),
            storePhone: formData.get('storePhone'),
            freeShippingThreshold: parseFloat(formData.get('freeShippingThreshold')),
            shippingCost: parseFloat(formData.get('shippingCost'))
        };

        this.saveToLocalStorage('storeSettings', settings);
        this.showNotification('Store settings saved successfully!', 'success');
    }

    // ========================================
    // QUICK ACTIONS
    // ========================================
    handleQuickAction(action) {
        switch(action) {
            case 'add-product':
                this.setActiveSection('add-product');
                break;
            case 'create-special':
                this.setActiveSection('specials');
                break;
            case 'send-notification':
                this.setActiveSection('notifications');
                break;
            case 'view-reports':
                this.setActiveSection('reports');
                break;
        }
    }

    // ========================================
    // SEARCH FUNCTIONALITY
    // ========================================
    handleSearch(query) {
        if (query.length < 2) return;
        this.performSearch(query, this.currentSection);
    }

    performSearch(query, section) {
        console.log(`Searching ${section} for: ${query}`);
        // Implement search logic based on current section
    }

    // ========================================
    // NOTIFICATION SYSTEM
    // ========================================
    showNotification(message, type = 'info') {
        // Remove existing notifications
        const existingNotifications = document.querySelectorAll('.admin-notification');
        existingNotifications.forEach(notification => notification.remove());

        const notification = document.createElement('div');
        notification.className = `admin-notification notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <i class="fas fa-${this.getNotificationIcon(type)}"></i>
                <span>${message}</span>
            </div>
        `;

        // Add styles if not already added
        if (!document.querySelector('#notification-styles')) {
            const styles = document.createElement('style');
            styles.id = 'notification-styles';
            styles.textContent = this.getNotificationStyles();
            document.head.appendChild(styles);
        }

        document.body.appendChild(notification);

        // Animate in
        setTimeout(() => notification.classList.add('show'), 100);

        // Remove after delay
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

    getNotificationStyles() {
        return `
            .admin-notification {
                position: fixed;
                top: 20px;
                right: 20px;
                background: white;
                padding: 15px 20px;
                border-radius: 10px;
                box-shadow: 0 4px 15px rgba(0,0,0,0.2);
                border-left: 4px solid #46853c;
                transform: translateX(100%);
                transition: transform 0.3s ease;
                z-index: 10000;
                max-width: 300px;
            }
            .admin-notification.show {
                transform: translateX(0);
            }
            .notification-content {
                display: flex;
                align-items: center;
                gap: 10px;
            }
            .notification-success { border-color: #27ae60; }
            .notification-error { border-color: #e74c3c; }
            .notification-warning { border-color: #f39c12; }
            .notification-info { border-color: #3498db; }
        `;
    }

    // ========================================
    // DATA PERSISTENCE
    // ========================================
    saveAllData() {
        this.saveToLocalStorage('products', this.products);
        this.saveToLocalStorage('orders', this.orders);
        this.saveToLocalStorage('specials', this.specials);
        this.saveToLocalStorage('notifications', this.notifications);
        this.saveToLocalStorage('banners', this.banners);
    }

    saveToLocalStorage(key, data) {
        try {
            localStorage.setItem(`greenMarvel_${key}`, JSON.stringify(data));
        } catch (error) {
            console.error('Error saving to localStorage:', error);
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
            document.getElementById('adminSearch').focus();
        }

        if (e.key === 'Escape') {
            const searchInput = document.getElementById('adminSearch');
            if (searchInput) searchInput.value = '';
        }
    }

    handleResize() {
        if (window.innerWidth < 768) {
            const sidebar = document.getElementById('adminSidebar');
            const main = document.getElementById('adminMain');
            
            sidebar.classList.add('collapsed');
            main.classList.add('expanded');
            this.sidebarCollapsed = true;
        }
    }
}

// ========================================
// INITIALIZATION
// ========================================

// Create global admin instance
const admin = new AdminDashboard();

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = AdminDashboard;
}