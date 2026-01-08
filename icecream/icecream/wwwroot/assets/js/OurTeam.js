// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

const flavors = [
    {
        id: 'chocolate',
        name: 'Chocolate Dream',
        image: 'assets/img/chocolatedreamhero.jpg',
        color: '#ffffffff',
        bgColor: 'linear-gradient(135deg, rgba(0,0,0,0.9) 0%, rgba(44,44,84,0.9) 50%, rgba(0,0,0,0.9) 100%)'
    },
    {
        id: 'strawberry',
        name: 'Strawberry Delight',
        image: 'assets/img/Strawberry Delighthero.jpg',
        color: '#ffffffff',
        bgColor: 'linear-gradient(135deg, rgba(0,0,0,0.9) 0%, rgba(74,26,42,0.9) 50%, rgba(0,0,0,0.9) 100%)'
    },
    {
        id: 'vanilla',
        name: 'Fresh Vanilla',
        image: 'assets/img/FreshVanillahero.jpg',
        color: '#f8e0b0',
        bgColor: 'linear-gradient(135deg, rgba(0,0,0,0.9) 0%, rgba(42,42,42,0.9) 50%, rgba(0,0,0,0.9) 100%)'
    },
    {
        id: 'blueberry',
        name: 'Blueberry Blast',
        image: 'assets/img/Blueberry Blasthero.jpg',
        color: '#ffffffff',
        bgColor: 'linear-gradient(135deg, rgba(0,0,0,0.9) 0%, rgba(10,36,99,0.9) 50%, rgba(0,0,0,0.9) 100%)'
    },
    {
        id: 'mint',
        name: 'Mint Chocolate Chip',
        image: 'assets/img/Mint Chocolate Chiphero.jpg',
        color: '#ffffffff',
        bgColor: 'linear-gradient(135deg, rgba(0,0,0,0.9) 0%, rgba(13,59,42,0.9) 50%, rgba(0,0,0,0.9) 100%)'
    },
    {
        id: 'caramel',
        name: 'Salted Caramel',
        image: 'assets/img/saltedcaramalhero.jpeg',
        color: '#ffffffff',
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

// Initialize Hero Section
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
    
    // Try It Now button
    document.querySelector('.hero-section .btn-primary').addEventListener('click', function(e) {
        e.preventDefault();
        alert(`You've selected ${flavors[currentFlavorIndex].name}! Redirecting to order page...`);
        // यहाँ redirect code add कर सकते हो
        // window.location.href = 'order.html';
    });
});

// Navbar Scroll Effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Page load पर भी check करें
document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    }
});