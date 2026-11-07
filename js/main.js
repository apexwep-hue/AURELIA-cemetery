/*
================================================================================
APPLICATION LOGIC & EVENT HANDLERS
================================================================================
*/

document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize CSS Variables & Branding
    UIComponents.applyThemeVariables();
    initBranding();

    // 2. Render Dynamic Components
    renderHeroAndStats();
    renderCategories();
    renderProperties(SITE_CONFIG.properties);
    renderWhyUs();
    renderAgents();
    renderFAQs();
    renderFooter();

    // 3. Setup Interactive Controllers
    setupNavigation();
    setupFilters();
    setupModal();
    setupScrollEffects();
    setupContactForm();
});

// Branding Population
function initBranding() {
    document.getElementById('brand-logo').innerHTML = `${SITE_CONFIG.brandName}<span>.</span>`;
    document.getElementById('footer-logo').innerHTML = `${SITE_CONFIG.brandName}<span>.</span>`;
    document.title = `${SITE_CONFIG.brandName} | Luxury Real Estate`;
    
    // Setup WhatsApp Floating CTA
    const waLink = document.getElementById('whatsapp-link');
    waLink.href = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(SITE_CONFIG.whatsappWelcomeMsg)}`;
}

// Render Hero Content & Stats Counter
function renderHeroAndStats() {
    document.getElementById('hero-badge').textContent = SITE_CONFIG.hero.badgeText;
    document.getElementById('hero-title').textContent = SITE_CONFIG.hero.title;
    document.getElementById('hero-subtitle').textContent = SITE_CONFIG.hero.subtitle;
    document.getElementById('hero').style.backgroundImage = `url('${SITE_CONFIG.hero.bgImage}')`;

    const statsGrid = document.getElementById('stats-grid');
    statsGrid.innerHTML = SITE_CONFIG.statistics.map(stat => `
        <div>
            <div class="stat-value">${stat.value}</div>
            <div class="stat-label">${stat.label}</div>
        </div>
    `).join('');
}

// Render Category Pills
function renderCategories() {
    const categoryContainer = document.getElementById('category-pills');
    categoryContainer.innerHTML = SITE_CONFIG.categories.map((cat, idx) => `
        <button class="pill-btn ${idx === 0 ? 'active' : ''}" data-category="${cat.id}">
            ${cat.name}
        </button>
    `).join('');
}

// Render Properties Cards
function renderProperties(properties) {
    const grid = document.getElementById('properties-grid');
    if (properties.length === 0) {
        grid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: var(--text-muted); padding: 3rem 0;">No residences match your specified criteria.</p>`;
        return;
    }
    grid.innerHTML = properties.map(prop => UIComponents.renderPropertyCard(prop)).join('');
}

// Render Why Choose Us Cards
function renderWhyUs() {
    const grid = document.getElementById('why-grid');
    grid.innerHTML = SITE_CONFIG.whyUs.map(item => `
        <div class="why-card" data-reveal>
            <div class="why-icon">✦</div>
            <h3 style="font-size: 1.2rem; margin-bottom: 0.5rem; color: var(--primary);">${item.title}</h3>
            <p style="color: var(--text-muted); font-size: 0.95rem;">${item.description}</p>
        </div>
    `).join('');
}

// Render Agent Cards
function renderAgents() {
    const grid = document.getElementById('agents-grid');
    grid.innerHTML = SITE_CONFIG.agents.map(agent => `
        <div class="agent-card" data-reveal>
            <div class="agent-img">
                <img src="${agent.image}" alt="${agent.name}" loading="lazy">
            </div>
            <div class="agent-info">
                <h3 class="agent-name">${agent.name}</h3>
                <div class="agent-title">${agent.title}</div>
                <p class="agent-bio">${agent.bio}</p>
                <a href="mailto:${agent.email}" class="btn btn-outline" style="width: 100%; font-size: 0.85rem;">Contact Advisor</a>
            </div>
        </div>
    `).join('');
}

// Render FAQs
function renderFAQs() {
    const accordion = document.getElementById('faq-accordion');
    accordion.innerHTML = SITE_CONFIG.faqs.map(faq => `
        <div class="faq-item">
            <button class="faq-header">
                <span>${faq.question}</span>
                <span class="faq-icon">+</span>
            </button>
            <div class="faq-body">
                <p>${faq.answer}</p>
            </div>
        </div>
    `).join('');

    // Toggle logic
    accordion.querySelectorAll('.faq-header').forEach(button => {
        button.addEventListener('click', () => {
            const item = button.parentElement;
            item.classList.toggle('open');
            const icon = button.querySelector('.faq-icon');
            icon.textContent = item.classList.contains('open') ? '−' : '+';
        });
    });
}

// Render Footer Data
function renderFooter() {
    document.getElementById('footer-tagline').textContent = SITE_CONFIG.brandTagline;
    document.getElementById('footer-address').textContent = SITE_CONFIG.address;
    
    document.getElementById('footer-contact-info').innerHTML = `
        <li>Email: ${SITE_CONFIG.email}</li>
        <li>Phone: ${SITE_CONFIG.phone}</li>
        <li>Hours: ${SITE_CONFIG.workingHours}</li>
    `;

    document.getElementById('footer-socials').innerHTML = Object.keys(SITE_CONFIG.socials).map(key => `
        <li><a href="${SITE_CONFIG.socials[key]}" target="_blank" style="text-transform: capitalize;">${key}</a></li>
    `).join('');

    document.getElementById('footer-copyright').innerHTML = `&copy; ${new Date().getFullYear()} ${SITE_CONFIG.companyName}. All rights reserved.`;
}

// Navigation & Mobile Menu Handler
function setupNavigation() {
    const header = document.getElementById('header');
    const hamburger = document.getElementById('hamburger-btn');
    const navMenu = document.getElementById('nav-menu');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
}

// Filter Logic for Hero Form & Category Pills
function setupFilters() {
    const categoryContainer = document.getElementById('category-pills');
    const searchForm = document.getElementById('property-search-form');

    // Populate Select Options dynamically from dataset
    const locations = [...new Set(SITE_CONFIG.properties.map(p => p.location.split(',')[1]?.trim() || p.location))];
    const types = [...new Set(SITE_CONFIG.properties.map(p => p.type))];

    const locSelect = document.getElementById('filter-location');
    locations.forEach(loc => {
        locSelect.innerHTML += `<option value="${loc}">${loc}</option>`;
    });

    const typeSelect = document.getElementById('filter-type');
    types.forEach(t => {
        typeSelect.innerHTML += `<option value="${t}">${t.toUpperCase()}</option>`;
    });

    // Category Pill Event Listener
    categoryContainer.addEventListener('click', (e) => {
        if (!e.target.classList.contains('pill-btn')) return;

        document.querySelectorAll('.pill-btn').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');

        const cat = e.target.dataset.category;
        if (cat === 'all') {
            renderProperties(SITE_CONFIG.properties);
        } else {
            const filtered = SITE_CONFIG.properties.filter(p => p.type === cat);
            renderProperties(filtered);
        }
    });

    // Hero Form Search Listener
    searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const loc = document.getElementById('filter-location').value;
        const type = document.getElementById('filter-type').value;
        const beds = document.getElementById('filter-bedrooms').value;
        const maxPrice = document.getElementById('filter-price').value;

        const filtered = SITE_CONFIG.properties.filter(p => {
            const matchLoc = loc === 'all' || p.location.includes(loc);
            const matchType = type === 'all' || p.type === type;
            const matchBeds = beds === 'all' || p.bedrooms >= parseInt(beds);
            const matchPrice = maxPrice === 'all' || p.price <= parseInt(maxPrice);
            return matchLoc && matchType && matchBeds && matchPrice;
        });

        renderProperties(filtered);
        document.getElementById('properties').scrollIntoView({ behavior: 'smooth' });
    });
}

// Property Details Modal Handler
function setupModal() {
    const modal = document.getElementById('property-modal');
    const closeBtn = document.getElementById('modal-close-btn');
    const modalContent = document.getElementById('modal-content');

    document.addEventListener('click', (e) => {
        const btn = e.target.closest('.view-details-btn');
        if (btn) {
            const propId = btn.dataset.id;
            const property = SITE_CONFIG.properties.find(p => p.id === propId);
            const agent = SITE_CONFIG.agents.find(a => a.id === property.agentId) || SITE_CONFIG.agents[0];

            modalContent.innerHTML = UIComponents.renderPropertyModal(property, agent);
            modal.classList.add('open');
            document.body.style.overflow = 'hidden';
        }
    });

    const closeModal = () => {
        modal.classList.remove('open');
        document.body.style.overflow = 'auto';
    };

    closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });
}

// Scroll Reveal & Back to Top Controller
function setupScrollEffects() {
    const backToTop = document.getElementById('back-to-top');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Intersection Observer for Reveal Effects
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('[data-reveal]').forEach(el => observer.observe(el));
}

// Contact Form Handler
function setupContactForm() {
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your private inquiry. An Aurelia Advisory Partner will reach out to you shortly.');
        form.reset();
    });
}