// index.js - Main JavaScript for Creamy Bar Home Page

document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS (Animate On Scroll)
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        mirror: false
    });
    
    // Initialize Bootstrap tooltips
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
    
    // Interactive Flavor Circle Functionality
    const flavorData = {
        chocolate: {
            name: "Chocolate Dream",
            image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            color: "#8B4513"
        },
        strawberry: {
            name: "Strawberry Swirl",
            image: "https://images.unsplash.com/photo-1570196917203-59f2c611a5b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            color: "#FF6B8B"
        },
        vanilla: {
            name: "Fresh Vanilla",
            image: "https://images.unsplash.com/photo-1488900128323-21503983a07e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            color: "#F8F9FA"
        },
        blueberry: {
            name: "Blueberry Blast",
            image: "https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            color: "#4A4A9C"
        },
        mint: {
            name: "Minty Fresh",
            image: "https://images.unsplash.com/photo-1516559828984-fb3b99548b21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            color: "#98FF98"
        },
        caramel: {
            name: "Caramel Delight",
            image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            color: "#D2691E"
        }
    };
    
    // Set up flavor indicators
    const flavorIndicators = document.getElementById('flavor-indicators');
    const flavorKeys = Object.keys(flavorData);
    
    flavorKeys.forEach((flavor, index) => {
        const indicator = document.createElement('div');
        indicator.className = `flavor-indicator ${index === 0 ? 'active' : ''}`;
        indicator.dataset.flavor = flavor;
        indicator.style.backgroundColor = flavorData[flavor].color;
        indicator.addEventListener('click', () => {
            changeFlavor(flavor);
        });
        flavorIndicators.appendChild(indicator);
    });
    
    // Set up flavor dots
    const flavorDots = document.querySelectorAll('.flavor-dot');
    flavorDots.forEach(dot => {
        dot.addEventListener('click', function() {
            const flavor = this.dataset.flavor;
            changeFlavor(flavor);
        });
    });
    
    // Function to change flavor
    function changeFlavor(flavor) {
        const flavorInfo = flavorData[flavor];
        const mainImage = document.getElementById('main-flavor-image');
        const flavorName = document.getElementById('flavor-name');
        const indicators = document.querySelectorAll('.flavor-indicator');
        
        // Update image with fade effect
        mainImage.style.opacity = '0';
        setTimeout(() => {
            mainImage.src = flavorInfo.image;
            mainImage.alt = flavorInfo.name;
            mainImage.style.opacity = '1';
        }, 300);
        
        // Update flavor name
        flavorName.textContent = flavorInfo.name;
        flavorName.style.color = flavorInfo.color;
        
        // Update active indicator
        indicators.forEach(indicator => {
            if (indicator.dataset.flavor === flavor) {
                indicator.classList.add('active');
            } else {
                indicator.classList.remove('active');
            }
        });
        
        // Add animation to flavor name
        flavorName.style.transform = 'scale(1.1)';
        setTimeout(() => {
            flavorName.style.transform = 'scale(1)';
        }, 300);
    }
    
    // Auto rotate flavors every 5 seconds
    let currentFlavorIndex = 0;
    setInterval(() => {
        currentFlavorIndex = (currentFlavorIndex + 1) % flavorKeys.length;
        changeFlavor(flavorKeys[currentFlavorIndex]);
    }, 5000);
    
    // Countdown Timer
    function updateCountdown() {
        const targetDate = new Date();
        targetDate.setDate(targetDate.getDate() + 30); // 30 days from now
        
        const now = new Date().getTime();
        const distance = targetDate - now;
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        document.getElementById('days').textContent = days.toString().padStart(2, '0');
        document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
        document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
    }
    
    // Initialize and update countdown every second
    updateCountdown();
    setInterval(updateCountdown, 1000);
    
    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            // Close all other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current item
            item.classList.toggle('active');
        });
    });
    
    // Contact Form Submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simple form validation
            const name = this.querySelector('input[type="text"]').value.trim();
            const email = this.querySelector('input[type="email"]').value.trim();
            const message = this.querySelector('textarea').value.trim();
            
            if (!name || !email || !message) {
                alert('Please fill in all fields');
                return;
            }
            
            // Simulate form submission
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                submitBtn.textContent = 'Message Sent!';
                submitBtn.style.backgroundColor = '#28a745';
                
                setTimeout(() => {
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                    submitBtn.style.backgroundColor = '';
                    this.reset();
                }, 2000);
            }, 1500);
        });
    }
    
    // Newsletter Subscription
    const newsletterForm = document.querySelector('.footer .input-group');
    if (newsletterForm) {
        const newsletterInput = newsletterForm.querySelector('input[type="email"]');
        const newsletterBtn = newsletterForm.querySelector('button');
        
        newsletterBtn.addEventListener('click', function() {
            const email = newsletterInput.value.trim();
            
            if (!email) {
                alert('Please enter your email address');
                return;
            }
            
            if (!validateEmail(email)) {
                alert('Please enter a valid email address');
                return;
            }
            
            // Simulate subscription
            const originalText = this.textContent;
            this.textContent = 'Subscribing...';
            this.disabled = true;
            
            setTimeout(() => {
                this.textContent = 'Subscribed!';
                this.style.backgroundColor = '#28a745';
                newsletterInput.value = '';
                
                setTimeout(() => {
                    this.textContent = originalText;
                    this.disabled = false;
                    this.style.backgroundColor = '';
                }, 2000);
            }, 1500);
        });
    }
    
    // Email validation helper function
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.padding = '10px 0';
            navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.padding = '20px 0';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        }
    });
    
    // Chat bubble interaction
    const chatBubble = document.querySelector('.chat-bubble');
    if (chatBubble) {
        chatBubble.addEventListener('click', function() {
            alert("Hi there! Welcome to Creamy Bar. How can I help you today? You can ask about our flavors, hours, or locations!");
        });
    }
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