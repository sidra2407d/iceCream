// Initialize AOS (Animate On Scroll)
        AOS.init({
            duration: 1000,
            once: true,
            offset: 100
        });
        
        // Gallery Data for Interactive Hero Section
        const galleryCategories = [
            {
                id: 'all',
                name: 'All Photos',
                image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
                color: '#ff66b2',
                bgColor: 'linear-gradient(135deg, rgba(0,0,0,0.9) 0%, rgba(44,44,84,0.9) 50%, rgba(0,0,0,0.9) 100%)'
            },
            {
                id: 'flavors',
                name: 'Flavors Gallery',
                image: 'https://images.unsplash.com/photo-1488900128323-21503983a07e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
                color: '#ffcc00',
                bgColor: 'linear-gradient(135deg, rgba(0,0,0,0.9) 0%, rgba(74,26,42,0.9) 50%, rgba(0,0,0,0.9) 100%)'
            },
            {
                id: 'shop',
                name: 'Our Shop',
                image: 'https://images.unsplash.com/photo-1530133532239-eda6f53fcf0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
                color: '#9d65c9',
                bgColor: 'linear-gradient(135deg, rgba(0,0,0,0.9) 0%, rgba(42,42,42,0.9) 50%, rgba(0,0,0,0.9) 100%)'
            },
            {
                id: 'team',
                name: 'Our Team',
                image: 'https://images.unsplash.com/photo-1570196917203-59f2c611a5b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
                color: '#ff3366',
                bgColor: 'linear-gradient(135deg, rgba(0,0,0,0.9) 0%, rgba(10,36,99,0.9) 50%, rgba(0,0,0,0.9) 100%)'
            },
            {
                id: 'events',
                name: 'Events & Celebrations',
                image: 'https://images.unsplash.com/photo-1536599424071-0b215a388ba7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
                color: '#98ff98',
                bgColor: 'linear-gradient(135deg, rgba(0,0,0,0.9) 0%, rgba(13,59,42,0.9) 50%, rgba(0,0,0,0.9) 100%)'
            },
            {
                id: 'customers',
                name: 'Happy Customers',
                image: 'https://images.unsplash.com/photo-1560008581-09826d1de69e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
                color: '#d2691e',
                bgColor: 'linear-gradient(135deg, rgba(0,0,0,0.9) 0%, rgba(61,37,14,0.9) 50%, rgba(0,0,0,0.9) 100%)'
            }
        ];
        
        // Gallery Data for Photo Gallery
        const galleryData = [
            {
                id: 1,
                category: "flavors",
                image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
                title: "Classic Vanilla Bean",
                description: "Our signature vanilla made with real Madagascar vanilla beans"
            },
            {
                id: 2,
                category: "flavors",
                image: "https://images.unsplash.com/photo-1488900128323-21503983a07e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
                title: "Chocolate Dream",
                description: "Rich dark chocolate with cocoa nibs for extra texture"
            },
            {
                id: 3,
                category: "shop",
                image: "https://images.unsplash.com/photo-1530133532239-eda6f53fcf0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
                title: "Our First Shop",
                description: "The original Creamy Bar location opened in 1985"
            },
            {
                id: 4,
                category: "shop",
                image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
                title: "Modern Interior",
                description: "Our newest location with contemporary design"
            },
            {
                id: 5,
                category: "team",
                image: "https://images.unsplash.com/photo-1570196917203-59f2c611a5b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
                title: "Master Ice Cream Makers",
                description: "Our team crafting a new batch of creamy goodness"
            },
            {
                id: 6,
                category: "team",
                image: "https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
                title: "Taste Testing Session",
                description: "Our quality control team sampling new flavor creations"
            },
            {
                id: 7,
                category: "events",
                image: "https://images.unsplash.com/photo-1536599424071-0b215a388ba7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
                title: "Annual Ice Cream Festival",
                description: "Our biggest community event of the year"
            },
            {
                id: 8,
                category: "events",
                image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
                title: "Birthday Celebrations",
                description: "Making sweet memories with our little customers"
            },
            {
                id: 9,
                category: "customers",
                image: "https://images.unsplash.com/photo-1560008581-09826d1de69e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
                title: "Family Treat Time",
                description: "A family enjoying our ice cream on a sunny day"
            },
            {
                id: 10,
                category: "customers",
                image: "https://images.unsplash.com/photo-1623334044303-241021148842?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
                title: "Sweet Smiles",
                description: "The joy of the first lick is priceless"
            },
            {
                id: 11,
                category: "flavors",
                image: "https://images.unsplash.com/photo-1562448079-7c4d6f8b2c0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
                title: "Seasonal Strawberry",
                description: "Made with fresh, local strawberries in summer"
            },
            {
                id: 12,
                category: "flavors",
                image: "https://images.unsplash.com/photo-1541599188778-1d6d4e21f8b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
                title: "Mint Chocolate Chip",
                description: "Refreshing mint with dark chocolate chunks"
            }
        ];
        
        // Video Data
        const videoData = {
            video1: "https://www.youtube.com/embed/6YH8l4J2rVk",
            video2: "https://www.youtube.com/embed/sv3TXMSv6Lw",
            video3: "https://www.youtube.com/embed/Gb0h3WAwF8Y"
        };
        
        // DOM Elements for Interactive Hero
        const flavorImage = document.getElementById('main-flavor-image');
        const flavorName = document.getElementById('flavor-name');
        const flavorIndicators = document.getElementById('flavor-indicators');
        const heroSection = document.querySelector('.hero-section');
        const flavorDots = document.querySelectorAll('.flavor-dot');
        
        // DOM Elements for Gallery
        const galleryContainer = document.getElementById('gallery-container');
        const filterButtons = document.querySelectorAll('.filter-btn');
        const lightboxModal = document.getElementById('lightboxModal');
        const lightboxImage = document.getElementById('lightboxImage');
        const lightboxCaption = document.getElementById('lightboxCaption');
        const lightboxPrev = document.getElementById('lightboxPrev');
        const lightboxNext = document.getElementById('lightboxNext');
        const videoModal = document.getElementById('videoModal');
        const videoFrame = document.getElementById('videoFrame');
        
        // Current state
        let currentCategoryIndex = 0;
        let currentFilter = 'all';
        let currentLightboxIndex = 0;
        let filteredGalleryItems = [];
        let autoChangeInterval;
        
        // Initialize flavor indicators for hero section
        function initFlavorIndicators() {
            flavorIndicators.innerHTML = '';
            
            galleryCategories.forEach((category, index) => {
                const indicator = document.createElement('div');
                indicator.className = `flavor-indicator ${index === currentCategoryIndex ? 'active' : ''}`;
                indicator.dataset.index = index;
                
                indicator.addEventListener('click', () => {
                    changeCategory(index);
                });
                
                flavorIndicators.appendChild(indicator);
            });
        }
        
        // Change category function for hero section
        function changeCategory(index) {
            // Update current category index
            currentCategoryIndex = index;
            
            // Get category data
            const category = galleryCategories[index];
            
            // Update image with fade effect
            flavorImage.style.opacity = 0;
            setTimeout(() => {
                flavorImage.src = category.image;
                flavorImage.alt = category.name;
                flavorImage.style.opacity = 1;
            }, 300);
            
            // Update flavor name
            flavorName.textContent = category.name;
            flavorName.style.color = category.color;
            
            // Update hero section background
            heroSection.style.background = category.bgColor;
            
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
                if (dot.dataset.flavor === category.id) {
                    dot.style.backgroundColor = category.color;
                    dot.style.transform = 'scale(1.3)';
                } else {
                    dot.style.backgroundColor = '';
                    dot.style.transform = '';
                }
            });
            
            // Reset auto change interval
            resetAutoChange();
        }
        
        // Auto change category in hero section
        function startAutoChange() {
            autoChangeInterval = setInterval(() => {
                currentCategoryIndex = (currentCategoryIndex + 1) % galleryCategories.length;
                changeCategory(currentCategoryIndex);
            }, 5000); // Change every 5 seconds
        }
        
        // Reset auto change interval
        function resetAutoChange() {
            clearInterval(autoChangeInterval);
            startAutoChange();
        }
        
        // Initialize gallery
        function initGallery() {
            renderGalleryItems();
            setupEventListeners();
        }
        
        // Render gallery items
        function renderGalleryItems() {
            galleryContainer.innerHTML = '';
            
            // Filter items based on current filter
            filteredGalleryItems = currentFilter === 'all' 
                ? galleryData 
                : galleryData.filter(item => item.category === currentFilter);
            
            // Render each item
            filteredGalleryItems.forEach((item, index) => {
                const galleryItem = document.createElement('div');
                galleryItem.className = 'gallery-item';
                galleryItem.dataset.index = index;
                galleryItem.dataset.category = item.category;
                
                galleryItem.innerHTML = `
                    <img src="${item.image}" alt="${item.title}" class="gallery-img">
                    <div class="gallery-overlay">
                        <div class="gallery-category">${getCategoryName(item.category)}</div>
                        <h5 class="gallery-title">${item.title}</h5>
                        <p>${item.description}</p>
                    </div>
                `;
                
                galleryContainer.appendChild(galleryItem);
            });
            
            // Add click event to each gallery item
            document.querySelectorAll('.gallery-item').forEach((item, index) => {
                item.addEventListener('click', () => openLightbox(index));
            });
        }
        
        // Get category display name
        function getCategoryName(category) {
            const categoryNames = {
                'flavors': 'Flavors',
                'shop': 'Our Shop',
                'team': 'Our Team',
                'events': 'Events',
                'customers': 'Happy Customers'
            };
            return categoryNames[category] || category;
        }
        
        // Open lightbox with image
        function openLightbox(index) {
            currentLightboxIndex = index;
            const item = filteredGalleryItems[index];
            
            lightboxImage.src = item.image;
            lightboxImage.alt = item.title;
            
            lightboxCaption.innerHTML = `
                <h5>${item.title}</h5>
                <p class="mb-0">${item.description}</p>
                <small class="text-muted">${getCategoryName(item.category)}</small>
            `;
            
            const lightbox = new bootstrap.Modal(lightboxModal);
            lightbox.show();
        }
        
        // Navigate lightbox
        function navigateLightbox(direction) {
            if (direction === 'prev') {
                currentLightboxIndex = (currentLightboxIndex - 1 + filteredGalleryItems.length) % filteredGalleryItems.length;
            } else {
                currentLightboxIndex = (currentLightboxIndex + 1) % filteredGalleryItems.length;
            }
            
            const item = filteredGalleryItems[currentLightboxIndex];
            lightboxImage.src = item.image;
            lightboxImage.alt = item.title;
            
            lightboxCaption.innerHTML = `
                <h5>${item.title}</h5>
                <p class="mb-0">${item.description}</p>
                <small class="text-muted">${getCategoryName(item.category)}</small>
            `;
        }
        
        // Setup event listeners
        function setupEventListeners() {
            // Filter buttons
            filterButtons.forEach(button => {
                button.addEventListener('click', function() {
                    // Update active button
                    filterButtons.forEach(btn => btn.classList.remove('active'));
                    this.classList.add('active');
                    
                    // Update current filter
                    currentFilter = this.dataset.filter;
                    
                    // Re-render gallery
                    renderGalleryItems();
                });
            });
            
            // Lightbox navigation
            lightboxPrev.addEventListener('click', () => navigateLightbox('prev'));
            lightboxNext.addEventListener('click', () => navigateLightbox('next'));
            
            // Video modal
            document.querySelectorAll('.video-card').forEach(card => {
                card.addEventListener('click', function() {
                    const videoId = this.dataset.videoId;
                    videoFrame.src = videoData[videoId];
                });
            });
            
            // Close video modal
            videoModal.addEventListener('hidden.bs.modal', function() {
                videoFrame.src = '';
            });
            
            // Newsletter subscription
            document.getElementById('subscribe-btn').addEventListener('click', function() {
                const email = document.getElementById('newsletter-email').value;
                if (email && validateEmail(email)) {
                    alert(`Thank you for subscribing with ${email}! You'll receive our sweet updates soon.`);
                    document.getElementById('newsletter-email').value = '';
                } else {
                    alert('Please enter a valid email address.');
                }
            });
            
            // Chat bubble
            document.querySelector('.chat-bubble').addEventListener('click', function() {
                alert("Hello! I'm Creamy Bar's virtual assistant. Would you like to know more about our flavors or find a location near you?");
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
        }
        
        // Email validation
        function validateEmail(email) {
            const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(String(email).toLowerCase());
        }
        
        // Initialize when DOM is loaded
        document.addEventListener('DOMContentLoaded', function() {
            // Initialize interactive hero section
            initFlavorIndicators();
            startAutoChange();
            
            // Add click events to flavor dots
            flavorDots.forEach(dot => {
                dot.addEventListener('click', function() {
                    const categoryId = this.dataset.flavor;
                    const categoryIndex = galleryCategories.findIndex(c => c.id === categoryId);
                    if (categoryIndex !== -1) {
                        changeCategory(categoryIndex);
                        
                        // Also filter the gallery when clicking on a dot
                        filterButtons.forEach(btn => {
                            if (btn.dataset.filter === categoryId) {
                                btn.click();
                            }
                        });
                    }
                });
            });
            
            // Initialize gallery
            initGallery();
            
            // Initialize Bootstrap tooltips
            const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
            tooltipTriggerList.map(function (tooltipTriggerEl) {
                return new bootstrap.Tooltip(tooltipTriggerEl);
            });
        });