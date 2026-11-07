/*
================================================================================
DYNAMIC UI COMPONENTS & RENDERING ENGINE
================================================================================
This module reads SITE_CONFIG from data.js and generates structured DOM elements.
================================================================================
*/

const UIComponents = {
    // 1. Inject Theme Variables into CSS
    applyThemeVariables() {
        const root = document.documentElement;
        const { theme, fonts } = SITE_CONFIG;
        
        Object.keys(theme).forEach(key => {
            root.style.setProperty(`--${this.camelToKebab(key)}`, theme[key]);
        });

        if (fonts.heading) root.style.setProperty('--font-heading', fonts.heading);
        if (fonts.body) root.style.setProperty('--font-body', fonts.body);
    },

    // Helper: CamelCase to kebab-case
    camelToKebab(str) {
        return str.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase();
    },

    // Helper: Currency Formatter
    formatPrice(price) {
        return SITE_CONFIG.currencySymbol + price.toLocaleString();
    },

    // 2. Render Property Card
    renderPropertyCard(property) {
        return `
            <article class="property-card" data-category="${property.type}" data-price="${property.price}" data-beds="${property.bedrooms}">
                <div class="property-thumb">
                    <img src="${property.mainImage}" alt="${property.title}" loading="lazy">
                    <span class="property-badge">${property.badge}</span>
                    <button class="fav-btn" data-id="${property.id}" aria-label="Add to favorites">
                        <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                    </button>
                </div>
                <div class="property-content">
                    <div class="property-price">${this.formatPrice(property.price)}</div>
                    <h3 class="property-title">${property.title}</h3>
                    <div class="property-location">
                        <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                        ${property.location}
                    </div>
                    <div class="property-specs">
                        <span class="spec-item">🛏️ ${property.bedrooms} Beds</span>
                        <span class="spec-item">🛁 ${property.bathrooms} Baths</span>
                        <span class="spec-item">📐 ${property.area.toLocaleString()} ${SITE_CONFIG.areaUnit}</span>
                    </div>
                    <button class="btn btn-dark view-details-btn" data-id="${property.id}" style="margin-top: 1.25rem; width: 100%;">
                        View Residence
                    </button>
                </div>
            </article>
        `;
    },

    // 3. Render Modal Content
    renderPropertyModal(property, agent) {
        return `
            <div class="modal-gallery-main">
                <img src="${property.mainImage}" alt="${property.title}">
            </div>
            <div class="modal-body">
                <div class="modal-grid">
                    <div>
                        <span class="section-subtitle">${property.type.toUpperCase()}</span>
                        <h2 style="font-family: var(--font-heading); font-size: 2rem; margin-bottom: 0.5rem;">${property.title}</h2>
                        <p style="color: var(--text-muted); margin-bottom: 1.5rem;">${property.addressDetails}</p>
                        <h3 style="color: var(--accent); font-family: var(--font-heading); font-size: 1.75rem; margin-bottom: 1.5rem;">
                            ${this.formatPrice(property.price)}
                        </h3>
                        
                        <h4>Overview</h4>
                        <p style="color: var(--text-muted); margin-bottom: 1.5rem; line-height: 1.7;">${property.description}</p>
                        
                        <h4 style="margin-bottom: 0.75rem;">Key Features & Amenities</h4>
                        <ul style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem; margin-bottom: 2rem;">
                            ${property.features.map(f => `<li style="font-size: 0.9rem; color: var(--text-dark);">✓ ${f}</li>`).join('')}
                        </ul>
                    </div>

                    <div style="background-color: var(--bg-light); padding: 1.5rem; border-radius: var(--radius-md); height: fit-content;">
                        <h4 style="margin-bottom: 1rem;">Exclusive Advisor</h4>
                        <img src="${agent.image}" alt="${agent.name}" style="width: 80px; height: 80px; border-radius: 50%; object-fit: cover; margin-bottom: 0.75rem;">
                        <h5 style="font-size: 1.1rem;">${agent.name}</h5>
                        <p style="font-size: 0.85rem; color: var(--accent); margin-bottom: 1rem;">${agent.title}</p>
                        <a href="https://wa.me/${SITE_CONFIG.whatsappNumber}?text=Inquiry%20regarding%20${encodeURIComponent(property.title)}" target="_blank" class="btn btn-primary" style="width: 100%; margin-bottom: 0.5rem;">
                            Direct WhatsApp
                        </a>
                        <a href="tel:${agent.phone}" class="btn btn-outline" style="width: 100%;">Call Advisor</a>
                    </div>
                </div>
            </div>
        `;
    }
};