 // Initialize AOS (Animate On Scroll)
        AOS.init({
            duration: 1000,
            once: true,
            offset: 100
        });
        
        // Flavors Data for Interactive Hero Section - SAME AS INDEX
        const flavors = [
            {
                id: 'chocolate',
                name: 'Chocolate Dream',
                image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
                color: '#6B4423',
                bgColor: 'linear-gradient(135deg, rgba(0,0,0,0.9) 0%, rgba(44,44,84,0.9) 50%, rgba(0,0,0,0.9) 100%)'
            },
            {
                id: 'strawberry',
                name: 'Strawberry Delight',
                image: 'https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
                color: '#ff3366',
                bgColor: 'linear-gradient(135deg, rgba(0,0,0,0.9) 0%, rgba(74,26,42,0.9) 50%, rgba(0,0,0,0.9) 100%)'
            },
            {
                id: 'vanilla',
                name: 'Fresh Vanilla',
                image: 'https://images.unsplash.com/photo-1488900128323-21503983a07e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
                color: '#f8e0b0',
                bgColor: 'linear-gradient(135deg, rgba(0,0,0,0.9) 0%, rgba(42,42,42,0.9) 50%, rgba(0,0,0,0.9) 100%)'
            },
            {
                id: 'blueberry',
                name: 'Blueberry Blast',
                image: 'https://images.unsplash.com/photo-1536599424071-0b215a388ba7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
                color: '#4a4a8a',
                bgColor: 'linear-gradient(135deg, rgba(0,0,0,0.9) 0%, rgba(10,36,99,0.9) 50%, rgba(0,0,0,0.9) 100%)'
            },
            {
                id: 'mint',
                name: 'Mint Chocolate Chip',
                image: 'https://images.unsplash.com/photo-1570196917203-59f2c611a5b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
                color: '#98ff98',
                bgColor: 'linear-gradient(135deg, rgba(0,0,0,0.9) 0%, rgba(13,59,42,0.9) 50%, rgba(0,0,0,0.9) 100%)'
            },
            {
                id: 'caramel',
                name: 'Salted Caramel',
                image: 'https://images.unsplash.com/photo-1623334044303-241021148842?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
                color: '#d2691e',
                bgColor: 'linear-gradient(135deg, rgba(0,0,0,0.9) 0%, rgba(61,37,14,0.9) 50%, rgba(0,0,0,0.9) 100%)'
            }
        ];
        
        // DOM Elements for Interactive Hero - SAME AS INDEX
        const flavorImage = document.getElementById('main-flavor-image');
        const flavorName = document.getElementById('flavor-name');
        const flavorIndicators = document.getElementById('flavor-indicators');
        const heroSection = document.querySelector('.hero-section');
        const flavorDots = document.querySelectorAll('.flavor-dot');
        
        // Current flavor index
        let currentFlavorIndex = 0;
        let autoChangeInterval;
        
        // Initialize flavor indicators - SAME AS INDEX
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
        
        // Change flavor function - SAME AS INDEX
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
        
        // Auto change flavor - SAME AS INDEX
        function startAutoChange() {
            autoChangeInterval = setInterval(() => {
                currentFlavorIndex = (currentFlavorIndex + 1) % flavors.length;
                changeFlavor(currentFlavorIndex);
            }, 5000); // Change every 5 seconds
        }
        
        // Reset auto change interval - SAME AS INDEX
        function resetAutoChange() {
            clearInterval(autoChangeInterval);
            startAutoChange();
        }
        
        // FAQ Accordion Functionality
        document.addEventListener('DOMContentLoaded', function() {
            // Initialize interactive hero section - SAME AS INDEX
            initFlavorIndicators();
            startAutoChange();
            
            // Add click events to flavor dots - SAME AS INDEX
            flavorDots.forEach(dot => {
                dot.addEventListener('click', function() {
                    const flavorId = this.dataset.flavor;
                    const flavorIndex = flavors.findIndex(f => f.id === flavorId);
                    if (flavorIndex !== -1) {
                        changeFlavor(flavorIndex);
                    }
                });
            });
            
            // Get in Touch button
            document.querySelector('.hero-section .btn-primary').addEventListener('click', function(e) {
                e.preventDefault();
                const contactSection = document.getElementById('contact');
                window.scrollTo({
                    top: contactSection.offsetTop - 80,
                    behavior: 'smooth'
                });
            });
            
            // Find Our Store button
            document.querySelector('.hero-section .btn-secondary').addEventListener('click', function(e) {
                e.preventDefault();
                const mapSection = document.getElementById('map');
                window.scrollTo({
                    top: mapSection.offsetTop - 80,
                    behavior: 'smooth'
                });
            });
            
            const faqQuestions = document.querySelectorAll('.faq-question');
            
            faqQuestions.forEach(question => {
                question.addEventListener('click', () => {
                    const faqItem = question.parentElement;
                    
                    // Close all other FAQ items
                    document.querySelectorAll('.faq-item').forEach(item => {
                        if (item !== faqItem) {
                            item.classList.remove('active');
                        }
                    });
                    
                    // Toggle current FAQ item
                    faqItem.classList.toggle('active');
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
            
            // Contact Form Submission
            const contactForm = document.getElementById('contactForm');
            const successMessage = document.getElementById('successMessage');
            
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Simple form validation
                const firstName = document.getElementById('firstName').value;
                const lastName = document.getElementById('lastName').value;
                const email = document.getElementById('email').value;
                const subject = document.getElementById('subject').value;
                const message = document.getElementById('message').value;
                
                if (!firstName || !lastName || !email || !subject || !message) {
                    alert('Please fill in all required fields.');
                    return;
                }
                
                // Email validation
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(email)) {
                    alert('Please enter a valid email address.');
                    return;
                }
                
                // Show success message
                successMessage.classList.add('show');
                
                // Scroll to success message
                successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
                
                // Reset form after 5 seconds
                setTimeout(() => {
                    contactForm.reset();
                    successMessage.classList.remove('show');
                }, 5000);
            });
            
            // Newsletter Subscription
            const subscribeBtn = document.getElementById('subscribeBtn');
            const newsletterEmail = document.getElementById('newsletterEmail');
            
            subscribeBtn.addEventListener('click', function() {
                if (!newsletterEmail.value) {
                    alert('Please enter your email address.');
                    return;
                }
                
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(newsletterEmail.value)) {
                    alert('Please enter a valid email address.');
                    return;
                }
                
                alert('Thank you for subscribing to our newsletter!');
                newsletterEmail.value = '';
            });
            
            // Smooth scrolling for anchor links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    const targetId = this.getAttribute('href');
                    if (targetId === '#') return;
                    
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        e.preventDefault();
                        window.scrollTo({
                            top: targetElement.offsetTop - 80,
                            behavior: 'smooth'
                        });
                    }
                });
            });
            
            // Chat bubble functionality
            const chatBubble = document.querySelector('.chat-bubble');
            chatBubble.addEventListener('click', function() {
                alert("Welcome to Creamy Bar! How can we help you today?\n\nOur virtual assistant is currently being upgraded. Please call us at +1 (234) 567-8900 or send us a message using the contact form above.");
            });
            
            // Initialize Bootstrap tooltips
            const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
            tooltipTriggerList.map(function (tooltipTriggerEl) {
                return new bootstrap.Tooltip(tooltipTriggerEl);
            });
        });