// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// Flavors Data for Interactive Hero Section
const flavors = [
    {
        id: 'family',
        name: 'Family Tradition',
        image: 'https://images.unsplash.com/photo-1570196917203-59f2c611a5b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        color: '#ff66b2',
        bgColor: 'linear-gradient(135deg, rgba(0,0,0,0.9) 0%, rgba(44,44,84,0.9) 50%, rgba(0,0,0,0.9) 100%)'
    },
    {
        id: 'tradition',
        name: 'Italian Tradition',
        image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        color: '#ffcc00',
        bgColor: 'linear-gradient(135deg, rgba(0,0,0,0.9) 0%, rgba(74,26,42,0.9) 50%, rgba(0,0,0,0.9) 100%)'
    },
    {
        id: 'quality',
        name: 'Quality Ingredients',
        image: 'https://images.unsplash.com/photo-1488900128323-21503983a07e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        color: '#9d65c9',
        bgColor: 'linear-gradient(135deg, rgba(0,0,0,0.9) 0%, rgba(42,42,42,0.9) 50%, rgba(0,0,0,0.9) 100%)'
    },
    {
        id: 'community',
        name: 'Community Love',
        image: 'https://images.unsplash.com/photo-1536599424071-0b215a388ba7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        color: '#ff3366',
        bgColor: 'linear-gradient(135deg, rgba(0,0,0,0.9) 0%, rgba(10,36,99,0.9) 50%, rgba(0,0,0,0.9) 100%)'
    },
    {
        id: 'innovation',
        name: 'Continuous Innovation',
        image: 'https://images.unsplash.com/photo-1570196917203-59f2c611a5b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        color: '#98ff98',
        bgColor: 'linear-gradient(135deg, rgba(0,0,0,0.9) 0%, rgba(13,59,42,0.9) 50%, rgba(0,0,0,0.9) 100%)'
    },
    {
        id: 'sustainability',
        name: 'Sustainable Future',
        image: 'https://images.unsplash.com/photo-1623334044303-241021148842?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        color: '#d2691e',
        bgColor: 'linear-gradient(135deg, rgba(0,0,0,0.9) 0%, rgba(61,37,14,0.9) 50%, rgba(0,0,0,0.9) 100%)'
    }
];

// DOM Elements for Interactive Hero
const flavorImage = document.getElementById('main-flavor-image');
const flavorName = document.getElementById('flavor-name');
const flavorIndicators = document.getElementById('flavor-indicators');
const heroSection = document.querySelector('.hero-section');
const flavorDots = document.querySelectorAll('.flavor-dot');

// Current flavor index
let currentFlavorIndex = 0;
let autoChangeInterval;

// Initialize flavor indicators
function initFlavorIndicators() {
    flavorIndicators.innerHTML = '';
    
    flavors.forEach((flavor, index) => {
        const indicator = document.createElement('div');
        indicator.className = `flavor-indicator ${index === currentFlavorIndex ? 'active' : ''}`;
        indicator.dataset.index = index;
        
        indicator.addEventListener('click', () => {
            changeFlavor(index);
        });
        
        flavorIndicators.appendChild(indicator);
    });
}

// Change flavor function
function changeFlavor(index) {
    // Update current flavor index
    currentFlavorIndex = index;
    
    // Get flavor data
    const flavor = flavors[index];
    
    // Update image with fade effect
    flavorImage.style.opacity = 0;
    setTimeout(() => {
        flavorImage.src = flavor.image;
        flavorImage.alt = flavor.name;
        flavorImage.style.opacity = 1;
    }, 300);
    
    // Update flavor name
    flavorName.textContent = flavor.name;
    flavorName.style.color = flavor.color;
    
    // Update hero section background
    heroSection.style.background = flavor.bgColor;
    
    // Update indicators
    document.querySelectorAll('.flavor-indicator').forEach((indicator, i) => {
        if (i === index) {
            indicator.classList.add('active');
        } else {
            indicator.classList.remove('active');
        }
    });
    
    // Update flavor dots
    flavorDots.forEach(dot => {
        if (dot.dataset.flavor === flavor.id) {
            dot.style.backgroundColor = flavor.color;
            dot.style.transform = 'scale(1.3)';
        } else {
            dot.style.backgroundColor = '';
            dot.style.transform = '';
        }
    });
    
    // Reset auto change interval
    resetAutoChange();
}

// Auto change flavor
function startAutoChange() {
    autoChangeInterval = setInterval(() => {
        currentFlavorIndex = (currentFlavorIndex + 1) % flavors.length;
        changeFlavor(currentFlavorIndex);
    }, 5000); // Change every 5 seconds
}

// Reset auto change interval
function resetAutoChange() {
    clearInterval(autoChangeInterval);
    startAutoChange();
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize interactive hero section
    initFlavorIndicators();
    startAutoChange();
    
    // Add click events to flavor dots
    flavorDots.forEach(dot => {
        dot.addEventListener('click', function() {
            const flavorId = this.dataset.flavor;
            const flavorIndex = flavors.findIndex(f => f.id === flavorId);
            if (flavorIndex !== -1) {
                changeFlavor(flavorIndex);
            }
        });
    });
    
    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.padding = '10px 0';
            navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.padding = '15px 0';
            navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
        }
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Update active nav link
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.remove('active');
                });
                this.classList.add('active');
            }
        });
    });
    
    // Initialize Bootstrap tooltips
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
    
    // Chat bubble click event
    document.querySelector('.chat-bubble').addEventListener('click', function() {
        alert("Hello! I'm Creamy Bar's virtual assistant. How can I help you today?");
    });
});