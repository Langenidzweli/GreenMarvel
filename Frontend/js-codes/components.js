// components.js - Dynamic component loader
class ComponentLoader {
    constructor() {
        this.components = {
            'top-header': '.top-header-placeholder',
            'semi-top-bar': '.semi-top-bar-placeholder', 
            'main-nav': '.main-nav-placeholder',
            'features-section': '.features-section-placeholder',
            'footer': '.footer-placeholder'
        };
    }

    async loadComponent(componentName, targetSelector) {
        try {
            const response = await fetch(`/Frontend/components/${componentName}.html`);
            if (!response.ok) throw new Error(`Failed to load ${componentName}`);
            
            const html = await response.text();
            const targetElement = document.querySelector(targetSelector);
            
            if (targetElement) {
                targetElement.innerHTML = html;
                console.log(`✅ Loaded: ${componentName}`);
            }
        } catch (error) {
            console.error(`❌ Error loading ${componentName}:`, error);
        }
    }

    async loadAllComponents() {
        const loadPromises = [];
        
        for (const [component, selector] of Object.entries(this.components)) {
            loadPromises.push(this.loadComponent(component, selector));
        }
        
        await Promise.all(loadPromises);
        console.log('🎉 All components loaded successfully!');
    }
}

// Initialize and load components when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    const loader = new ComponentLoader();
    loader.loadAllComponents();
});