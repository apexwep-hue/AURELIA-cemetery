/*
================================================================================
CUSTOMIZATION AREA - CENTRALIZED CONFIGURATION SYSTEM
================================================================================
Instructions for Customization:
1. COLORS & THEME: Update hex values inside `theme` to change global styling.
2. COMPANY INFO: Edit `brandName`, `email`, `phone`, `whatsapp`, etc.
3. CURRENCY & METRICS: Change `currencySymbol` and `areaUnit` (sqft / sqm).
4. DATA COLLECTION: Modify arrays (properties, agents, testimonials, FAQs).
================================================================================
*/

const SITE_CONFIG = {
    // Brand & Company Information
    brandName: "AURELIA",
    brandTagline: "Luxury Estates & Private Residences",
    companyName: "Aurelia International Realty LLC",
    logoText: "AURELIA",
    
    // Contact & Location
    email: "concierge@aureliarealestate.com",
    phone: "+1 (800) 555-0199",
    whatsappNumber: "18005550199",
    whatsappWelcomeMsg: "Hello Aurelia Concierge, I am interested in exploring your private estate portfolio.",
    address: "740 Park Avenue, Penthouse B, New York, NY 10021",
    workingHours: "Mon - Sat: 9:00 AM - 7:00 PM EST",
    
    // Localization & Metrics
    currencySymbol: "$",
    areaUnit: "sq ft",
    
    // Theme Colors (Applied automatically to CSS variables)
    theme: {
        primary: "#0F172A",       // Deep Midnight Navy
        secondary: "#1E293B",     // Charcoal Slate
        accent: "#C5A880",        // Champagne Gold
        accentHover: "#B09268",   // Dark Champagne Gold
        bgLight: "#F8FAFC",       // Soft Gray Background
        surface: "#FFFFFF",       // Card / Container Surface
        textDark: "#0F172A",      // Primary Text
        textMuted: "#64748B",     // Secondary / Muted Text
        borderLight: "#E2E8F0"    // Soft Border Color
    },

    // Typography
    fonts: {
        heading: "'Playfair Display', Georgia, serif",
        body: "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif"
    },

    // Social Media Links
    socials: {
        instagram: "https://instagram.com",
        linkedin: "https://linkedin.com",
        facebook: "https://facebook.com",
        youtube: "https://youtube.com",
        twitter: "https://twitter.com"
    },

    // Hero Section Content
    hero: {
        title: "Exceptional Properties for Extraordinary Lives",
        subtitle: "Discover curated luxury real estate, waterfront estates, and architectural masterpieces across prime global locations.",
        bgImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2000&q=80",
        badgeText: "Exclusive Private Listings"
    },

    // Statistics Counter
    statistics: [
        { label: "Volume Sold", value: "$2.4B+" },
        { label: "Exclusive Listings", value: "180+" },
        { label: "Client Satisfaction", value: "99.4%" },
        { label: "Global Presence", value: "14 Cities" }
    ],

    // Why Choose Us Value Propositions
    whyUs: [
        {
            icon: "shield",
            title: "Private Off-Market Access",
            description: "Exclusive access to non-public luxury estates, ultra-prime penthouses, and private islands."
        },
        {
            icon: "award",
            title: "Bespoke Advisory",
            description: "Tailored portfolio strategy, tax optimization guidance, and concierge acquisition management."
        },
        {
            icon: "chart",
            title: "Valuation Precision",
            description: "Proprietary algorithmic market analysis combined with deep local advisory expertise."
        },
        {
            icon: "globe",
            title: "Global Buyer Network",
            description: "Direct connection with ultra-high-net-worth buyers and institutional funds worldwide."
        }
    ],

    // Property Categories
    categories: [
        { id: "all", name: "All Residences" },
        { id: "villa", name: "Private Villas" },
        { id: "penthouse", name: "Penthouses" },
        { id: "waterfront", name: "Waterfront" },
        { id: "modern", name: "Modern Architecture" }
    ],

    // Featured Property Catalog
    properties: [
        {
            id: "prop-101",
            title: "The Bel-Air Glass Pavilion",
            type: "villa",
            status: "For Sale",
            featured: true,
            price: 24500000,
            location: "Bel-Air, Los Angeles, CA",
            addressDetails: "10771 Bellagio Rd, Los Angeles, CA 90077",
            bedrooms: 6,
            bathrooms: 8,
            area: 12400,
            garage: 4,
            yearBuilt: 2024,
            badge: "Featured Estate",
            mainImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
            gallery: [
                "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
                "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
                "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
                "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80"
            ],
            description: "An architectural masterpiece set behind private gates in prime Bel-Air. Offering panoramic skyline and ocean views, floor-to-ceiling glass walls, an infinity-edge heated swimming pool, and an automated smart home security ecosystem.",
            features: [
                "Infinity Edge Pool", "Smart Home Automation", "Private Wine Cellar",
                "Wellness Spa & Sauna", "Home Theater", "Sub-Zero & Wolf Kitchen",
                "Panoramiic City Views", "Gated Motor Court"
            ],
            agentId: "agent-1"
        },
        {
            id: "prop-102",
            title: "432 Park Avenue Grand Penthouse",
            type: "penthouse",
            status: "For Sale",
            featured: true,
            price: 38000000,
            location: "Midtown, New York, NY",
            addressDetails: "432 Park Ave, Floor 82, New York, NY 10022",
            bedrooms: 5,
            bathrooms: 6,
            area: 8250,
            garage: 2,
            yearBuilt: 2022,
            badge: "Crown Jewel",
            mainImage: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
            gallery: [
                "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
                "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80",
                "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80"
            ],
            description: "Soaring 1,000 feet above Central Park, this full-floor trophy penthouse provides unparalleled 360-degree views of Manhattan. Features 12.5ft ceilings, private elevator vestibule, custom Calacatta marble finishes, and 24/7 white-glove concierge.",
            features: [
                "360 Central Park Views", "Private Elevator Access", "Calacatta Marble Baths",
                "24/7 White-Glove Doorman", "Private Resident Dining Room", "75ft Indoor Pool"
            ],
            agentId: "agent-2"
        },
        {
            id: "prop-103",
            title: "Star Island Waterfront Sanctuary",
            type: "waterfront",
            status: "For Sale",
            featured: true,
            price: 42000000,
            location: "Miami Beach, FL",
            addressDetails: "22 Star Island Dr, Miami Beach, FL 33139",
            bedrooms: 7,
            bathrooms: 9,
            area: 15100,
            garage: 5,
            yearBuilt: 2023,
            badge: "Waterfront",
            mainImage: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80",
            gallery: [
                "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80",
                "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80"
            ],
            description: "Direct Biscayne Bay frontage with private deep-water dock capable of hosting a 130ft superyacht. Tropically landscaped estate grounds with resort pool, outdoor summer kitchen, private dock, and separate guest house.",
            features: [
                "Deep Water Dock", "100ft Bay Frontage", "Resort Pool & Cabana",
                "Detached Guest House", "Commercial Grade Security", "Elevator"
            ],
            agentId: "agent-1"
        },
        {
            id: "prop-104",
            title: "The Aspen Minimalist Chalet",
            type: "modern",
            status: "For Sale",
            featured: false,
            price: 18900000,
            location: "Aspen, Colorado",
            addressDetails: "410 Red Mountain Rd, Aspen, CO 81611",
            bedrooms: 5,
            bathrooms: 6,
            area: 7800,
            garage: 3,
            yearBuilt: 2024,
            badge: "Ski-In / Ski-Out",
            mainImage: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
            gallery: [
                "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
                "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1200&q=80"
            ],
            description: "Contemporary mountain retreat offering direct ski-in/ski-out access to Red Mountain. Crafted with local stone, cedar, and triple-pane architectural glass framing Aspen mountain ranges.",
            features: [
                "Ski-In / Ski-Out", "Heated Driveway", "Outdoor Heated Pool & Spa",
                "Custom Wine Room", "Custom Fireplace Lounge"
            ],
            agentId: "agent-3"
        },
        {
            id: "prop-105",
            title: "Beverly Hills French Provincial",
            type: "villa",
            status: "Pending",
            featured: false,
            price: 29000000,
            location: "Beverly Hills, CA",
            addressDetails: "910 N Bedford Dr, Beverly Hills, CA 90210",
            bedrooms: 6,
            bathrooms: 7,
            area: 11000,
            garage: 4,
            yearBuilt: 2021,
            badge: "Prime Location",
            mainImage: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80",
            gallery: [
                "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80"
            ],
            description: "Classic French Provincial estate in the coveted Flats of Beverly Hills. Meticulously manicured gardens, championship tennis court, full guest house, and screening room.",
            features: [
                "Tennis Court", "Screening Room", "Guest Residence", "Manicured Lawns"
            ],
            agentId: "agent-2"
        },
        {
            id: "prop-106",
            title: "Tribeca Industrial Penthouse",
            type: "penthouse",
            status: "For Sale",
            featured: false,
            price: 16500000,
            location: "Tribeca, New York, NY",
            addressDetails: "165 Franklin St, New York, NY 10013",
            bedrooms: 4,
            bathrooms: 4,
            area: 5400,
            garage: 1,
            yearBuilt: 2022,
            badge: "Historic Loft",
            mainImage: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?auto=format&fit=crop&w=1200&q=80",
            gallery: [
                "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?auto=format&fit=crop&w=1200&q=80"
            ],
            description: "Authentic historic cast-iron building loft converted into a high-end architectural masterpiece. Original exposed brick, wood beams, private rooftop terrace with outdoor fireplace.",
            features: [
                "Private Roof Terrace", "Exposed Cast Iron Beams", "Direct Elevator Access", "Gas Fireplace"
            ],
            agentId: "agent-3"
        }
    ],

    // Real Estate Agents / Advisors
    agents: [
        {
            id: "agent-1",
            name: "Victoria Sterling",
            title: "Managing Partner & Senior Estate Broker",
            phone: "+1 (310) 555-0144",
            email: "v.sterling@aureliarealestate.com",
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
            bio: "Over 15 years specializing in Ultra-Prime Los Angeles & Miami coastal estates. Over $1B in closed personal career transactions.",
            socials: { linkedin: "#", instagram: "#" }
        },
        {
            id: "agent-2",
            name: "Alexander Vance",
            title: "Director of New York Penthouse Division",
            phone: "+1 (212) 555-0188",
            email: "a.vance@aureliarealestate.com",
            image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80",
            bio: "Former investment banker turn top Manhattan real estate advisor. Renowned for off-market high-rise acquisitions and developments.",
            socials: { linkedin: "#", twitter: "#" }
        },
        {
            id: "agent-3",
            name: "Elena Rostova",
            title: "Senior Luxury Property Consultant",
            phone: "+1 (970) 555-0122",
            email: "e.rostova@aureliarealestate.com",
            image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80",
            bio: "Expert in luxury mountain chalets and high-yield international investment portfolios.",
            socials: { linkedin: "#", instagram: "#" }
        }
    ],

    // Testimonials
    testimonials: [
        {
            clientName: "Harrison & Sophia Ford",
            role: "Private Investor & Tech Executive",
            quote: "Aurelia secured our dream off-market Bel-Air property with absolute discretion and efficiency. Their understanding of privacy and valuation is unrivaled.",
            image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
        },
        {
            clientName: "Marcus Vance",
            role: "Managing Director, Global Capital",
            quote: "The seamless end-to-end service, from international tax strategy guidance to white-glove closing concierge, made buying our Manhattan penthouse effortless.",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
        }
    ],

    // FAQ Items
    faqs: [
        {
            question: "How do I gain access to private off-market listings?",
            answer: "We maintain a private inventory of off-market residences for high-net-worth clients. Contact our concierge or complete our advisory form to receive tailored access following privacy verification."
        },
        {
            question: "Do you assist with international purchases and tax structures?",
            answer: "Yes, our team collaborates with top-tier international legal and tax counsel to ensure smooth cross-border acquisitions and optimal ownership structuring."
        },
        {
            question: "What is the process for listing a property with Aurelia?",
            answer: "We initiate each listing with a comprehensive market analysis, confidential valuation, tailored architectural photography, and targeted multi-channel promotion to qualified buyers."
        },
        {
            question: "Can I request a private virtual walkthrough?",
            answer: "Absolutely. All properties offer high-definition 3D spatial walkthroughs and private live video tours guided by the assigned listing agent."
        }
    ]
};