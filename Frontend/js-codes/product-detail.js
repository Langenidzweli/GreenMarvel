// product-detail.js - Complete dynamic product detail page

// Product database with all products
const productDatabase = {
    '1': {
        id: '1',
        name: 'Growth Oil',
        category: 'growth-oil',
        badge: 'BEST SELLER',
        rating: 5,
        reviewCount: 128,
        features: ['For all hair types', 'Promotes hair growth', 'Nourishes scalp'],
        shortDescription: 'Premium natural formula for hair growth and scalp health. Stimulates hair follicles and strengthens hair from roots.',
        description: {
            title: 'Transform Your Hair Health',
            content: `
                <p>Our premium Growth Oil is specially formulated to stimulate hair growth and improve overall scalp health. Regular use can help:</p>
                <ul>
                    <li>Stimulate hair follicles for faster growth</li>
                    <li>Strengthen hair from roots to tips</li>
                    <li>Reduce hair breakage and split ends</li>
                    <li>Nourish and moisturize the scalp</li>
                    <li>Improve hair texture and shine</li>
                </ul>
                <p>Made with 100% natural ingredients including rosemary oil, castor oil, and essential vitamins that work together to promote healthy hair growth.</p>
            `
        },
        usage: {
            title: 'Simple Application Process',
            content: `
                <ol>
                    <li>Shake the bottle well before use</li>
                    <li>Apply a small amount (3-5 drops) to your fingertips</li>
                    <li>Massage gently into your scalp using circular motions</li>
                    <li>Focus on areas with thinning hair or slow growth</li>
                    <li>Leave overnight or for at least 2 hours before washing</li>
                    <li>Use 3-4 times per week for best results</li>
                </ol>
                <p><strong>Tip:</strong> For enhanced absorption, apply after a warm shower when pores are open.</p>
            `
        },
        ingredients: {
            title: 'Pure Natural Ingredients',
            content: `
                <p>Our Growth Oil contains only the finest natural ingredients:</p>
                <ul>
                    <li><strong>Rosemary Oil:</strong> Stimulates blood circulation to hair follicles</li>
                    <li><strong>Castor Oil:</strong> Rich in ricinoleic acid to promote hair growth</li>
                    <li><strong>Coconut Oil:</strong> Deep conditioning and protein protection</li>
                    <li><strong>Argan Oil:</strong> Vitamin E for shine and strength</li>
                    <li><strong>Peppermint Oil:</strong> Cooling effect that stimulates follicles</li>
                    <li><strong>Vitamin E:</strong> Antioxidant protection for hair cells</li>
                    <li><strong>Biotin:</strong> Essential vitamin for hair growth</li>
                </ul>
                <p><em>Free from parabens, sulfates, silicones, and artificial fragrances.</em></p>
            `
        },
        sizes: [
            { size: '50ml', price: 90, originalPrice: null },
            { size: '100ml', price: 130, originalPrice: null },
            { size: '200ml', price: 220, originalPrice: 250 }
        ],
        defaultSize: '100ml',
        code: 'GM001',
        images: [
            '../img/Growth-Oil.png',
            '../img/Growth-Oil-2.jpg',
            '../img/Growth-Oil-3.jpg'
        ],
        inStock: true,
        tags: ['hair growth', 'scalp health', 'natural'],
        reviews: {
            overallRating: 5.0,
            breakdown: [
                { stars: 5, percentage: 90 },
                { stars: 4, percentage: 8 },
                { stars: 3, percentage: 2 },
                { stars: 2, percentage: 0 },
                { stars: 1, percentage: 0 }
            ],
            reviews: [
                {
                    reviewer: 'Sarah M.',
                    rating: 5,
                    title: 'Amazing Results!',
                    content: 'I\'ve been using this oil for 3 months and my hair has never been healthier. I can see new growth and my hair is so much stronger. Highly recommend!',
                    date: 'March 15, 2024'
                },
                {
                    reviewer: 'James T.',
                    rating: 5,
                    title: 'Game Changer for Thinning Hair',
                    content: 'I was skeptical at first, but after 2 months I can honestly say this product works. My thinning spots are filling in and my hair feels thicker.',
                    date: 'February 28, 2024'
                }
            ]
        }
    },
    '2': {
        id: '2',
        name: 'Vitality Hair Spray',
        category: 'hair-spray',
        badge: 'POPULAR',
        rating: 5,
        reviewCount: 96,
        features: ['Scalp penetration formula', 'Lightweight', 'Non-greasy'],
        shortDescription: 'Advanced scalp penetration formula that revitalizes hair follicles and promotes healthy hair growth.',
        description: {
            title: 'Revitalize Your Hair',
            content: `
                <p>Our Vitality Hair Spray is designed to penetrate deep into the scalp to nourish hair follicles and promote healthy growth.</p>
                <ul>
                    <li>Deep scalp penetration for maximum effectiveness</li>
                    <li>Lightweight formula that doesn't weigh hair down</li>
                    <li>Strengthens hair from root to tip</li>
                    <li>Adds volume and body to fine hair</li>
                    <li>Protects against environmental damage</li>
                </ul>
            `
        },
        usage: {
            title: 'Easy Daily Use',
            content: `
                <ol>
                    <li>Shake well before each use</li>
                    <li>Hold 6-8 inches from dry or towel-dried hair</li>
                    <li>Spray evenly throughout hair, focusing on roots</li>
                    <li>Style as desired - no need to rinse out</li>
                    <li>Use daily for best results</li>
                </ol>
            `
        },
        ingredients: {
            title: 'Advanced Formula',
            content: `
                <p>Key ingredients include:</p>
                <ul>
                    <li><strong>Biotin Complex:</strong> Strengthens hair structure</li>
                    <li><strong>Niacin:</strong> Improves blood circulation to follicles</li>
                    <li><strong>Aloe Vera:</strong> Soothes and moisturizes scalp</li>
                    <li><strong>Green Tea Extract:</strong> Antioxidant protection</li>
                    <li><strong>Vitamin B5:</strong> Adds shine and softness</li>
                </ul>
            `
        },
        sizes: [
            { size: '100ml', price: 130, originalPrice: null },
            { size: '200ml', price: 220, originalPrice: null }
        ],
        defaultSize: '100ml',
        code: 'GM002',
        images: [
            '../img/Vitality-Spray.png',
            '../img/Vitality-Spray-2.jpg'
        ],
        inStock: true,
        tags: ['hair spray', 'scalp care', 'lightweight'],
        reviews: {
            overallRating: 4.9,
            breakdown: [
                { stars: 5, percentage: 85 },
                { stars: 4, percentage: 12 },
                { stars: 3, percentage: 3 },
                { stars: 2, percentage: 0 },
                { stars: 1, percentage: 0 }
            ],
            reviews: [
                {
                    reviewer: 'Emma L.',
                    rating: 5,
                    title: 'Lightweight and Effective',
                    content: 'Love that this spray isn\'t sticky or heavy. My hair feels refreshed and looks fuller after just a few weeks of use.',
                    date: 'March 10, 2024'
                }
            ]
        }
    },
    '3': {
        id: '3',
        name: 'Hair Food',
        category: 'hair-food',
        badge: 'NEW',
        rating: 5,
        reviewCount: 87,
        features: ['Scalp protection', 'Deep nourishment', 'Repairs damage'],
        shortDescription: 'Nutrient-rich formula that feeds your hair and scalp with essential vitamins and minerals.',
        description: {
            title: 'Nourish Your Hair',
            content: `
                <p>Our Hair Food treatment provides deep nourishment to repair damage and restore hair health.</p>
                <ul>
                    <li>Repairs split ends and breakage</li>
                    <li>Restores moisture balance</li>
                    <li>Protects against heat styling damage</li>
                    <li>Adds elasticity and strength</li>
                    <li>Improves overall hair texture</li>
                </ul>
            `
        },
        usage: {
            title: 'Weekly Treatment',
            content: `
                <ol>
                    <li>Apply to clean, towel-dried hair</li>
                    <li>Focus on ends and damaged areas</li>
                    <li>Leave for 10-15 minutes</li>
                    <li>Rinse thoroughly with warm water</li>
                    <li>Use once weekly for maintenance</li>
                </ol>
            `
        },
        ingredients: {
            title: 'Nutrient-Rich Formula',
            content: `
                <p>Packed with essential nutrients:</p>
                <ul>
                    <li><strong>Shea Butter:</strong> Deep conditioning</li>
                    <li><strong>Argan Oil:</strong> Repair and protection</li>
                    <li><strong>Keratin:</strong> Strengthens hair structure</li>
                    <li><strong>Jojoba Oil:</strong> Balances scalp oils</li>
                    <li><strong>Vitamin Complex:</strong> Essential nutrients</li>
                </ul>
            `
        },
        sizes: [
            { size: '100ml', price: 120, originalPrice: null },
            { size: '200ml', price: 200, originalPrice: 220 }
        ],
        defaultSize: '100ml',
        code: 'GM003',
        images: [
            '../img/hairfood.png',
            '../img/hairfood-2.jpg'
        ],
        inStock: true,
        tags: ['hair treatment', 'deep conditioner', 'repair'],
        reviews: {
            overallRating: 4.8,
            breakdown: [
                { stars: 5, percentage: 80 },
                { stars: 4, percentage: 15 },
                { stars: 3, percentage: 5 },
                { stars: 2, percentage: 0 },
                { stars: 1, percentage: 0 }
            ],
            reviews: [
                {
                    reviewer: 'Michael R.',
                    rating: 5,
                    title: 'Saved My Damaged Hair',
                    content: 'After years of coloring, my hair was brittle. This treatment brought it back to life in just a month!',
                    date: 'February 20, 2024'
                }
            ]
        }
    },
    '4': {
        id: '4',
        name: 'Intensive Repair Serum',
        category: 'growth-oil',
        badge: 'SPECIAL',
        rating: 4,
        reviewCount: 64,
        features: ['Deep repair', 'For damaged hair', 'Quick absorption'],
        shortDescription: 'Powerful concentrated serum for severely damaged hair that needs intensive care and repair.',
        description: {
            title: 'Intensive Hair Repair',
            content: `
                <p>Our most powerful formula for severely damaged hair that needs immediate attention and repair.</p>
                <ul>
                    <li>Repairs chemical and heat damage</li>
                    <li>Restores protein structure</li>
                    <li>Prevents future breakage</li>
                    <li>Quick-absorbing non-greasy formula</li>
                    <li>Visible results in 2 weeks</li>
                </ul>
            `
        },
        usage: {
            title: 'Targeted Treatment',
            content: `
                <ol>
                    <li>Apply to clean, damp hair</li>
                    <li>Focus on most damaged areas</li>
                    <li>Do not rinse - style as usual</li>
                    <li>Use 2-3 times weekly</li>
                    <li>For severe damage, use daily for first 2 weeks</li>
                </ol>
            `
        },
        ingredients: {
            title: 'Advanced Repair Complex',
            content: `
                <p>Specialized ingredients for severe damage:</p>
                <ul>
                    <li><strong>Hydrolyzed Keratin:</strong> Rebuilds hair structure</li>
                    <li><strong>Ceramides:</strong> Seals and protects</li>
                    <li><strong>Panthenol:</strong> Penetrates deeply</li>
                    <li><strong>Amino Acids:</strong> Strengthens from within</li>
                    <li><strong>UV Protection:</strong> Prevents sun damage</li>
                </ul>
            `
        },
        sizes: [
            { size: '50ml', price: 150, originalPrice: null }
        ],
        defaultSize: '50ml',
        code: 'GM004',
        images: [
            '../img/Growth-Oil.png'
        ],
        inStock: true,
        tags: ['repair', 'damaged hair', 'intensive care'],
        reviews: {
            overallRating: 4.5,
            breakdown: [
                { stars: 5, percentage: 70 },
                { stars: 4, percentage: 20 },
                { stars: 3, percentage: 8 },
                { stars: 2, percentage: 2 },
                { stars: 1, percentage: 0 }
            ],
            reviews: [
                {
                    reviewer: 'Jessica K.',
                    rating: 5,
                    title: 'Miracle Worker',
                    content: 'After bleaching disaster, this serum saved my hair. It\'s actually growing healthy now!',
                    date: 'March 5, 2024'
                }
            ]
        }
    },
    '5': {
        id: '5',
        name: 'Complete Hair Care Kit',
        category: 'combo',
        badge: 'COMBO',
        rating: 5,
        reviewCount: 42,
        features: ['Complete solution', '3 premium products', 'Save 15%'],
        shortDescription: 'Everything you need for healthy hair growth in one convenient kit. Perfect for starting your hair care journey.',
        description: {
            title: 'Complete Hair Care System',
            content: `
                <p>Our most popular products combined into one comprehensive kit for complete hair care.</p>
                <ul>
                    <li>Growth Oil for scalp health and stimulation</li>
                    <li>Vitality Spray for daily maintenance</li>
                    <li>Hair Food for weekly deep conditioning</li>
                    <li>Save 15% compared to buying individually</li>
                    <li>Perfect for all hair types and concerns</li>
                </ul>
            `
        },
        usage: {
            title: 'Complete Routine',
            content: `
                <p><strong>Daily:</strong> Use Vitality Spray in the morning</p>
                <p><strong>3-4 times weekly:</strong> Apply Growth Oil at night</p>
                <p><strong>Weekly:</strong> Use Hair Food treatment</p>
                <p>This routine covers all aspects of hair health from stimulation to protection and repair.</p>
            `
        },
        ingredients: {
            title: 'Premium Ingredients Collection',
            content: `
                <p>Combines the best of all our formulas:</p>
                <ul>
                    <li>All natural oils and extracts</li>
                    <li>Vitamin-rich complexes</li>
                    <li>Plant-based proteins</li>
                    <li>Essential nutrients</li>
                    <li>No harsh chemicals or sulfates</li>
                </ul>
            `
        },
        sizes: [
            { size: 'Kit', price: 350, originalPrice: 400 }
        ],
        defaultSize: 'Kit',
        code: 'GM005',
        images: [
            '../img/combo-1.jpg'
        ],
        inStock: true,
        tags: ['combo', 'kit', 'complete care'],
        reviews: {
            overallRating: 4.9,
            breakdown: [
                { stars: 5, percentage: 88 },
                { stars: 4, percentage: 10 },
                { stars: 3, percentage: 2 },
                { stars: 2, percentage: 0 },
                { stars: 1, percentage: 0 }
            ],
            reviews: [
                {
                    reviewer: 'David P.',
                    rating: 5,
                    title: 'Perfect Starter Kit',
                    content: 'As someone new to hair care, this kit made it easy to establish a routine. Seeing great results already!',
                    date: 'February 15, 2024'
                }
            ]
        }
    },
    '6': {
        id: '6',
        name: 'Scalp Treatment',
        category: 'hair-food',
        badge: 'SPECIAL',
        rating: 4,
        reviewCount: 53,
        features: ['Scalp soother', 'Reduces irritation', 'Promotes healing'],
        shortDescription: 'Specialized treatment for sensitive or irritated scalp conditions. Soothes and restores scalp health.',
        description: {
            title: 'Soothe Your Scalp',
            content: `
                <p>Our Scalp Treatment is specially formulated for sensitive, irritated, or problematic scalps.</p>
                <ul>
                    <li>Reduces itching and flaking</li>
                    <li>Calms inflammation and redness</li>
                    <li>Restores scalp pH balance</li>
                    <li>Promotes healing of damaged skin</li>
                    <li>Creates optimal environment for hair growth</li>
                </ul>
            `
        },
        usage: {
            title: 'Targeted Scalp Care',
            content: `
                <ol>
                    <li>Apply directly to scalp after washing</li>
                    <li>Massage gently for 2-3 minutes</li>
                    <li>Leave for 5-10 minutes</li>
                    <li>Rinse thoroughly</li>
                    <li>Use 2-3 times weekly as needed</li>
                </ol>
            `
        },
        ingredients: {
            title: 'Soothing Ingredients',
            content: `
                <p>Gentle yet effective ingredients:</p>
                <ul>
                    <li><strong>Tea Tree Oil:</strong> Natural antiseptic properties</li>
                    <li><strong>Chamomile Extract:</strong> Calms irritation</li>
                    <li><strong>Aloe Vera:</strong> Soothes and moisturizes</li>
                    <li><strong>Zinc PCA:</strong> Regulates oil production</li>
                    <li><strong>Allantoin:</strong> Promotes healing</li>
                </ul>
            `
        },
        sizes: [
            { size: '100ml', price: 110, originalPrice: null }
        ],
        defaultSize: '100ml',
        code: 'GM006',
        images: [
            '../img/hairfood.png'
        ],
        inStock: true,
        tags: ['scalp care', 'sensitive', 'treatment'],
        reviews: {
            overallRating: 4.3,
            breakdown: [
                { stars: 5, percentage: 65 },
                { stars: 4, percentage: 25 },
                { stars: 3, percentage: 8 },
                { stars: 2, percentage: 2 },
                { stars: 1, percentage: 0 }
            ],
            reviews: [
                {
                    reviewer: 'Rachel S.',
                    rating: 5,
                    title: 'Finally Relief!',
                    content: 'I\'ve had scalp issues for years. This is the first product that actually provides relief without drying out my hair.',
                    date: 'March 1, 2024'
                }
            ]
        }
    },
    '7': {
        id: '7',
        name: 'Growth & Repair Duo',
        category: 'combo',
        badge: 'COMBO',
        rating: 5,
        reviewCount: 38,
        features: ['Growth + Repair', 'Perfect combination', 'Save 20%'],
        shortDescription: 'The perfect combination of growth stimulation and damage repair in one powerful duo.',
        description: {
            title: 'Growth Meets Repair',
            content: `
                <p>This powerful duo combines our best growth product with our most effective repair treatment.</p>
                <ul>
                    <li>Growth Oil stimulates new hair growth</li>
                    <li>Hair Food repairs existing damage</li>
                    <li>Comprehensive approach to hair health</li>
                    <li>Save 20% compared to buying separately</li>
                    <li>Visible results in 4-6 weeks</li>
                </ul>
            `
        },
        usage: {
            title: 'Dual Action Routine',
            content: `
                <p><strong>Evenings:</strong> Apply Growth Oil to scalp</p>
                <p><strong>Weekly:</strong> Use Hair Food as deep treatment</p>
                <p>This combination addresses both new growth and existing hair health simultaneously.</p>
            `
        },
        ingredients: {
            title: 'Synergistic Formulas',
            content: `
                <p>Combines the power of two formulas:</p>
                <ul>
                    <li><strong>Growth Formula:</strong> Rosemary, Castor, Peppermint oils</li>
                    <li><strong>Repair Formula:</strong> Shea Butter, Keratin, Argan Oil</li>
                    <li>Works together for comprehensive results</li>
                </ul>
            `
        },
        sizes: [
            { size: 'Duo', price: 240, originalPrice: 280 }
        ],
        defaultSize: 'Duo',
        code: 'GM007',
        images: [
            '../img/combo-2.jpg'
        ],
        inStock: true,
        tags: ['combo', 'growth', 'repair'],
        reviews: {
            overallRating: 4.8,
            breakdown: [
                { stars: 5, percentage: 82 },
                { stars: 4, percentage: 15 },
                { stars: 3, percentage: 3 },
                { stars: 2, percentage: 0 },
                { stars: 1, percentage: 0 }
            ],
            reviews: [
                {
                    reviewer: 'Thomas L.',
                    rating: 5,
                    title: 'Best Combo Ever',
                    content: 'The perfect pair! My hair is growing faster AND looks healthier. Couldn\'t ask for more.',
                    date: 'February 25, 2024'
                }
            ]
        }
    },
    '8': {
        id: '8',
        name: 'Luxury Hair Bundle',
        category: 'combo',
        badge: 'COMBO',
        rating: 5,
        reviewCount: 29,
        features: ['4 premium products', 'Complete luxury care', 'Save 25%'],
        shortDescription: 'Our ultimate luxury bundle with four premium products for complete hair transformation.',
        description: {
            title: 'Luxury Hair Transformation',
            content: `
                <p>Experience the ultimate in hair care with our premium luxury bundle.</p>
                <ul>
                    <li>Growth Oil for stimulation</li>
                    <li>Vitality Spray for daily care</li>
                    <li>Hair Food for deep treatment</li>
                    <li>Scalp Treatment for scalp health</li>
                    <li>Save 25% compared to individual purchase</li>
                </ul>
            `
        },
        usage: {
            title: 'Luxury Care Routine',
            content: `
                <p><strong>Daily AM:</strong> Vitality Spray</p>
                <p><strong>Daily PM:</strong> Growth Oil</p>
                <p><strong>Weekly:</strong> Hair Food treatment</p>
                <p><strong>As needed:</strong> Scalp Treatment</p>
                <p>The complete system for luxurious, healthy hair.</p>
            `
        },
        ingredients: {
            title: 'Premium Collection',
            content: `
                <p>The finest ingredients in hair care:</p>
                <ul>
                    <li>All our premium natural oils</li>
                    <li>Advanced vitamin complexes</li>
                    <li>Plant-based proteins</li>
                    <li>Soothing botanical extracts</li>
                </ul>
            `
        },
        sizes: [
            { size: 'Bundle', price: 450, originalPrice: 550 }
        ],
        defaultSize: 'Bundle',
        code: 'GM008',
        images: [
            '../img/combo-3.jpg'
        ],
        inStock: true,
        tags: ['luxury', 'bundle', 'premium'],
        reviews: {
            overallRating: 5.0,
            breakdown: [
                { stars: 5, percentage: 95 },
                { stars: 4, percentage: 5 },
                { stars: 3, percentage: 0 },
                { stars: 2, percentage: 0 },
                { stars: 1, percentage: 0 }
            ],
            reviews: [
                {
                    reviewer: 'Amanda B.',
                    rating: 5,
                    title: 'Worth Every Penny',
                    content: 'This bundle transformed my hair completely. It\'s like having a professional treatment at home!',
                    date: 'February 18, 2024'
                }
            ]
        }
    },
    '9': {
        id: '9',
        name: 'Travel Size Trio',
        category: 'combo',
        badge: 'SPECIAL',
        rating: 4,
        reviewCount: 47,
        features: ['Travel friendly', '3 mini products', 'Perfect for on-the-go'],
        shortDescription: 'All your hair care essentials in travel-friendly sizes. Perfect for vacations or gym bag.',
        description: {
            title: 'Hair Care On The Go',
            content: `
                <p>Never compromise on hair care while traveling with our convenient travel trio.</p>
                <ul>
                    <li>Growth Oil (30ml)</li>
                    <li>Vitality Spray (50ml)</li>
                    <li>Hair Food (50ml)</li>
                    <li>TSA-friendly sizes</li>
                    <li>Leak-proof packaging</li>
                </ul>
            `
        },
        usage: {
            title: 'Travel Routine',
            content: `
                <p>Maintain your hair care routine anywhere:</p>
                <ol>
                    <li>Pack easily in carry-on luggage</li>
                    <li>Continue your regular routine</li>
                    <li>No more hotel product compromises</li>
                </ol>
            `
        },
        ingredients: {
            title: 'Same Premium Quality',
            content: `
                <p>Same formulas, smaller sizes:</p>
                <ul>
                    <li>Identical ingredients to full sizes</li>
                    <li>Same effectiveness</li>
                    <li>Just more convenient for travel</li>
                </ul>
            `
        },
        sizes: [
            { size: 'Travel Set', price: 90, originalPrice: 120 }
        ],
        defaultSize: 'Travel Set',
        code: 'GM009',
        images: [
            '../img/special-1.jpg'
        ],
        inStock: true,
        tags: ['travel', 'mini', 'portable'],
        reviews: {
            overallRating: 4.2,
            breakdown: [
                { stars: 5, percentage: 60 },
                { stars: 4, percentage: 30 },
                { stars: 3, percentage: 8 },
                { stars: 2, percentage: 2 },
                { stars: 1, percentage: 0 }
            ],
            reviews: [
                {
                    reviewer: 'Kevin M.',
                    rating: 5,
                    title: 'Perfect for Business Travel',
                    content: 'As someone who travels weekly, this set is a lifesaver. My hair stays healthy no matter where I am.',
                    date: 'February 28, 2024'
                }
            ]
        }
    }
};

// Get all products for related items
function getAllProducts() {
    return Object.values(productDatabase);
}

// Get related products (same category, excluding current product)
function getRelatedProducts(currentProductId, limit = 3) {
    const currentProduct = productDatabase[currentProductId];
    if (!currentProduct) return [];
    
    return getAllProducts()
        .filter(product => 
            product.id !== currentProductId
        )
        .slice(0, limit);
}

document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    
    console.log('Loading product with ID:', productId);
    
    if (productId && productDatabase[productId]) {
        loadProductDetails(productId);
    } else {
        showErrorState();
    }
    
    initializeEventListeners();
});

function loadProductDetails(productId) {
    const product = productDatabase[productId];
    
    if (!product) {
        showErrorState();
        return;
    }
    
    // Update page title
    document.title = `${product.name} - Green Marvel`;
    
    // Update breadcrumb
    document.getElementById('breadcrumbProductName').textContent = product.name;
    
    // Update product images
    updateProductImages(product);
    
    // Update product details
    updateProductDetails(product);
    
    // Update product information tabs
    updateProductInfo(product);
    
    // Update related products
    updateRelatedProducts(product);
    
    // Show product page
    document.getElementById('loadingState').style.display = 'none';
    document.getElementById('productDetailPage').style.display = 'block';
}

function updateProductImages(product) {
    const mainImage = document.getElementById('mainProductImage');
    const thumbnailsContainer = document.getElementById('imageThumbnails');
    
    // Set main image
    if (product.images && product.images.length > 0) {
        mainImage.src = product.images[0];
        mainImage.alt = product.name;
    }
    
    // Create thumbnails
    thumbnailsContainer.innerHTML = '';
    product.images.forEach((image, index) => {
        const thumbnail = document.createElement('div');
        thumbnail.className = `thumbnail ${index === 0 ? 'active' : ''}`;
        thumbnail.setAttribute('data-image', image);
        thumbnail.innerHTML = `<img src="${image}" alt="${product.name} view ${index + 1}">`;
        thumbnailsContainer.appendChild(thumbnail);
    });
}

function updateProductDetails(product) {
    // Update badge
    const badge = document.getElementById('productBadge');
    if (product.badge) {
        badge.textContent = product.badge;
        badge.className = `product-badge ${product.badge.toLowerCase().replace(' ', '-')}`;
        badge.style.display = 'inline-block';
    } else {
        badge.style.display = 'none';
    }
    
    // Update title
    document.getElementById('productTitle').textContent = product.name;
    
    // Update rating
    updateRatingStars('productStars', product.rating);
    document.getElementById('ratingText').textContent = `${product.rating}/5`;
    
    // Update features
    const featuresContainer = document.getElementById('productFeatures');
    featuresContainer.innerHTML = '';
    product.features.forEach(feature => {
        const featureTag = document.createElement('span');
        featureTag.className = 'feature-tag';
        featureTag.textContent = feature;
        featuresContainer.appendChild(featureTag);
    });
    
    // Update short description
    document.getElementById('productShortDescription').textContent = product.shortDescription;
    
    // Update size options
    updateSizeOptions(product);
    
    // Update price
    updatePriceDisplay(product);
    
    // Update product code
    document.getElementById('productCode').textContent = product.code;
    
    // Update add to bag button
    const addToBagBtn = document.getElementById('addToBagBtn');
    if (!product.inStock) {
        addToBagBtn.textContent = 'Out of Stock';
        addToBagBtn.disabled = true;
        addToBagBtn.style.background = '#ccc';
    }
}

function updateSizeOptions(product) {
    const sizeOptionsContainer = document.getElementById('sizeOptions');
    sizeOptionsContainer.innerHTML = '';
    
    product.sizes.forEach((sizeOption, index) => {
        const button = document.createElement('button');
        button.className = `size-option ${sizeOption.size === product.defaultSize ? 'active' : ''}`;
        button.setAttribute('data-size', sizeOption.size);
        button.setAttribute('data-price', sizeOption.price);
        button.setAttribute('data-original-price', sizeOption.originalPrice || '');
        button.textContent = sizeOption.size;
        sizeOptionsContainer.appendChild(button);
    });
}

function updatePriceDisplay(product) {
    const currentPrice = document.getElementById('currentPrice');
    const originalPrice = document.getElementById('originalPrice');
    
    const defaultSize = product.sizes.find(size => size.size === product.defaultSize) || product.sizes[0];
    if (defaultSize) {
        currentPrice.textContent = `R ${defaultSize.price}.00`;
        if (defaultSize.originalPrice) {
            originalPrice.textContent = `R ${defaultSize.originalPrice}.00`;
            originalPrice.style.display = 'inline';
        } else {
            originalPrice.style.display = 'none';
        }
    }
}

function updateProductInfo(product) {
    // Update description tab
    if (product.description) {
        document.getElementById('descriptionTitle').textContent = product.description.title;
        document.getElementById('descriptionContent').innerHTML = product.description.content;
    }
    
    // Update usage tab
    if (product.usage) {
        document.getElementById('usageTitle').textContent = product.usage.title;
        document.getElementById('usageContent').innerHTML = product.usage.content;
    }
    
    // Update ingredients tab
    if (product.ingredients) {
        document.getElementById('ingredientsTitle').textContent = product.ingredients.title;
        document.getElementById('ingredientsContent').innerHTML = product.ingredients.content;
    }
}

function updateRatingStars(containerId, rating) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';
    
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < 5; i++) {
        const star = document.createElement('i');
        if (i < fullStars) {
            star.className = 'fas fa-star';
        } else if (i === fullStars && hasHalfStar) {
            star.className = 'fas fa-star-half-alt';
        } else {
            star.className = 'far fa-star';
        }
        container.appendChild(star);
    }
}

function updateRelatedProducts(product) {
    const relatedProducts = getRelatedProducts(product.id);
    const container = document.getElementById('relatedProductsGrid');
    
    if (!relatedProducts || relatedProducts.length === 0) {
        container.innerHTML = '<p class="no-related">No related products found.</p>';
        return;
    }
    
    container.innerHTML = '';
    relatedProducts.forEach(relatedProduct => {
        const defaultSize = relatedProduct.sizes.find(s => s.size === relatedProduct.defaultSize) || relatedProduct.sizes[0];
        
        const productHTML = `
            <div class="related-product" onclick="window.location.href='product-detail.html?id=${relatedProduct.id}'">
                <img src="${relatedProduct.images[0]}" alt="${relatedProduct.name}">
                <h3>${relatedProduct.name}</h3>
                <p class="price">R ${defaultSize.price}.00</p>
                <button class="quick-add-btn" onclick="event.stopPropagation(); addRelatedToCart('${relatedProduct.id}')">
                    Add to Bag
                </button>
            </div>
        `;
        
        container.innerHTML += productHTML;
    });
}

function addRelatedToCart(productId) {
    const product = productDatabase[productId];
    if (product) {
        addToCart({
            id: product.id,
            name: product.name,
            price: product.sizes[0].price,
            size: product.defaultSize,
            quantity: 1,
            image: product.images[0]
        });
        showNotification(`${product.name} added to cart!`, 'success');
    }
}

function initializeEventListeners() {
    // Image thumbnail clicks
    document.addEventListener('click', function(e) {
        if (e.target.closest('.thumbnail')) {
            const thumbnail = e.target.closest('.thumbnail');
            const mainImage = document.getElementById('mainProductImage');
            const thumbnails = document.querySelectorAll('.thumbnail');
            
            thumbnails.forEach(t => t.classList.remove('active'));
            thumbnail.classList.add('active');
            
            const newImageSrc = thumbnail.getAttribute('data-image');
            if (newImageSrc) {
                mainImage.src = newImageSrc;
            }
        }
    });
    
    // Size option clicks
    document.addEventListener('click', function(e) {
        if (e.target.closest('.size-option')) {
            const sizeOption = e.target.closest('.size-option');
            const sizeOptions = document.querySelectorAll('.size-option');
            const currentPrice = document.getElementById('currentPrice');
            const originalPrice = document.getElementById('originalPrice');
            
            sizeOptions.forEach(opt => opt.classList.remove('active'));
            sizeOption.classList.add('active');
            
            const newPrice = sizeOption.getAttribute('data-price');
            const originalPriceValue = sizeOption.getAttribute('data-original-price');
            
            if (newPrice && currentPrice) {
                currentPrice.textContent = `R ${newPrice}.00`;
                
                if (originalPriceValue) {
                    originalPrice.textContent = `R ${originalPriceValue}.00`;
                    originalPrice.style.display = 'inline';
                } else {
                    originalPrice.style.display = 'none';
                }
            }
        }
    });
    
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
            const productId = new URLSearchParams(window.location.search).get('id');
            const product = productDatabase[productId];
            
            if (product && product.inStock) {
                const selectedSize = document.querySelector('.size-option.active');
                const quantity = parseInt(document.querySelector('.quantity').textContent);
                
                const productDetails = {
                    id: product.id,
                    name: product.name,
                    size: selectedSize ? selectedSize.getAttribute('data-size') : product.defaultSize,
                    price: selectedSize ? parseInt(selectedSize.getAttribute('data-price')) : product.sizes[0].price,
                    quantity: quantity,
                    image: product.images[0]
                };
                
                addToCart(productDetails);
                showAddToCartConfirmation(productDetails);
            }
        });
    }
    
    // Tab system
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabPanes = document.querySelectorAll('.tab-pane');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');
            
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabPanes.forEach(pane => pane.classList.remove('active'));
            
            this.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
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
        item.id === product.id && item.size === product.size
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
    
    // Add styles
    confirmation.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: white;
        border-radius: 12px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        z-index: 1000;
        padding: 20px;
        transform: translateX(150%);
        transition: transform 0.3s ease;
        max-width: 350px;
        border: 2px solid #46853c;
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

function showErrorState() {
    document.getElementById('loadingState').style.display = 'none';
    document.getElementById('productDetailPage').style.display = 'none';
    document.getElementById('errorState').style.display = 'block';
}

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    const backgroundColor = type === 'error' ? '#e74c3c' : 
                           type === 'warning' ? '#f39c12' : '#46853c';
    
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${backgroundColor};
        color: white;
        padding: 15px 20px;
        border-radius: 8px;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        z-index: 1001;
        transform: translateX(150%);
        transition: transform 0.3s ease;
        font-weight: 600;
    `;
    
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

// Add CSS for additional elements
const additionalStyles = document.createElement('style');
additionalStyles.textContent = `
    .add-to-cart-confirmation .confirmation-content {
        display: flex;
        align-items: center;
        gap: 15px;
    }
    
    .add-to-cart-confirmation .fa-check-circle {
        color: #46853c;
        font-size: 2rem;
    }
    
    .add-to-cart-confirmation .confirmation-details {
        flex: 1;
    }
    
    .add-to-cart-confirmation .confirmation-details strong {
        display: block;
        margin-bottom: 5px;
        color: #333;
    }
    
    .add-to-cart-confirmation .confirmation-details p {
        margin: 2px 0;
        color: #666;
        font-size: 0.9rem;
    }
    
    .add-to-cart-confirmation .confirmation-price {
        font-weight: 600;
        color: #333 !important;
    }
    
    .add-to-cart-confirmation .view-bag-btn {
        background: #46853c;
        color: white;
        border: none;
        padding: 8px 15px;
        border-radius: 6px;
        cursor: pointer;
        font-weight: 600;
        transition: background-color 0.3s ease;
        font-family: 'Montserrat', sans-serif;
    }
    
    .add-to-cart-confirmation .view-bag-btn:hover {
        background: #3a6f32;
    }
    
    .no-reviews, .no-related {
        text-align: center;
        color: #666;
        font-style: italic;
        padding: 40px 20px;
        grid-column: 1 / -1;
    }
`;
document.head.appendChild(additionalStyles);