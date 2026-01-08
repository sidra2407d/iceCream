   // Initialize AOS (Animate On Scroll)
        AOS.init({
            duration: 1000,
            once: true,
            offset: 100
        });
        
        // Flavors Data for Interactive Hero Section
        const flavorsHero = [
            {
                id: 'chocolate',
                name: 'Chocolate Truffle',
                image: 'https://images.unsplash.com/photo-1623334044303-241021148842?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
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
        
        // Detailed Flavors Data
        const flavors = [
            {
                id: 1,
                name: "Vanilla",
                image: "https://images.unsplash.com/photo-1488900128323-21503983a07e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
                description: "Classic, creamy vanilla made with real Madagascar vanilla beans. A timeless favorite that's perfect on its own or as a base for toppings.",
                tags: ["classic", "creamy"],
                rating: 4.7,
                calories: 210,
                ingredients: "Fresh cream, milk, sugar, egg yolks, Madagascar vanilla beans",
                category: "classic"
            },
            {
                id: 2,
                name: "Chocolate",
                image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
                description: "Rich, decadent chocolate ice cream made with premium cocoa. A chocolate lover's dream come true.",
                tags: ["chocolate", "classic"],
                rating: 4.8,
                calories: 240,
                ingredients: "Fresh cream, milk, sugar, premium cocoa powder, chocolate chunks",
                category: "chocolate"
            },
            {
                id: 3,
                name: "Chocolate Chip",
                image: "https://images.unsplash.com/photo-1570196917203-59f2c611a5b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
                description: "Creamy vanilla ice cream loaded with crunchy chocolate chips throughout.",
                tags: ["chocolate", "creamy"],
                rating: 4.6,
                calories: 230,
                ingredients: "Fresh cream, milk, sugar, vanilla, semi-sweet chocolate chips",
                category: "chocolate"
            },
            {
                id: 4,
                name: "Strawberry",
                image: "https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
                description: "Sweet and tangy strawberry ice cream made with real strawberries. A refreshing summer favorite.",
                tags: ["fruity", "creamy"],
                rating: 4.5,
                calories: 200,
                ingredients: "Fresh cream, milk, sugar, fresh strawberries, natural strawberry flavor",
                category: "fruity"
            },
            {
                id: 5,
                name: "Mango",
                image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
                description: "Tropical mango ice cream bursting with fresh mango flavor. A taste of the tropics in every scoop.",
                tags: ["fruity", "creamy"],
                rating: 4.4,
                calories: 190,
                ingredients: "Fresh cream, milk, sugar, ripe mango pulp, mango chunks",
                category: "fruity"
            },
            {
                id: 6,
                name: "Coffee",
                image: "https://images.unsplash.com/photo-1510707577719-ae7c9b788690?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
                description: "Bold coffee ice cream made with freshly brewed espresso. A perfect pick-me-up dessert.",
                tags: ["classic", "creamy"],
                rating: 4.6,
                calories: 220,
                ingredients: "Fresh cream, milk, sugar, espresso coffee, coffee beans",
                category: "classic"
            },
            {
                id: 7,
                name: "Black Currant",
                image: "https://images.unsplash.com/photo-1536599424071-0b215a388ba7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
                description: "Tangy and sweet black currant ice cream with a vibrant purple color. A unique and refreshing flavor.",
                tags: ["fruity"],
                rating: 4.3,
                calories: 195,
                ingredients: "Fresh cream, milk, sugar, black currant puree, natural fruit extracts",
                category: "fruity"
            },
            {
                id: 8,
                name: "Cherry",
                image: "https://images.unsplash.com/photo-1562440499-64c9a111f713?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
                description: "Sweet cherry ice cream with real cherry pieces throughout. A classic fruit flavor done right.",
                tags: ["fruity", "creamy"],
                rating: 4.4,
                calories: 205,
                ingredients: "Fresh cream, milk, sugar, dark cherries, cherry juice",
                category: "fruity"
            },
            {
                id: 9,
                name: "Butterscotch",
                image: "https://images.unsplash.com/photo-1623334044303-241021148842?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
                description: "Rich butterscotch ice cream with ribbons of butterscotch sauce. A sweet and buttery delight.",
                tags: ["classic", "creamy"],
                rating: 4.7,
                calories: 260,
                ingredients: "Fresh cream, milk, sugar, butter, brown sugar, butterscotch sauce",
                category: "classic"
            },
            {
                id: 10,
                name: "Walnut",
                image: "https://images.unsplash.com/photo-1570196917203-59f2c611a5b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
                description: "Creamy vanilla ice cream loaded with crunchy walnut pieces. A perfect balance of creamy and crunchy.",
                tags: ["nutty", "creamy"],
                rating: 4.5,
                calories: 250,
                ingredients: "Fresh cream, milk, sugar, vanilla, toasted walnuts",
                category: "nutty"
            },
            {
                id: 11,
                name: "Vanilla and Strawberry",
                image: "https://images.unsplash.com/photo-1516559828984-fb3b99548b21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
                description: "Two classic flavors swirled together in perfect harmony. Creamy vanilla meets sweet strawberry.",
                tags: ["classic", "fruity", "creamy"],
                rating: 4.8,
                calories: 215,
                ingredients: "Fresh cream, milk, sugar, vanilla beans, strawberry puree",
                category: "classic"
            },
            {
                id: 12,
                name: "Pistachio",
                image: "https://images.unsplash.com/photo-1570196917203-59f2c611a5b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
                description: "Delicate pistachio ice cream with real pistachio nuts. A sophisticated and nutty flavor.",
                tags: ["nutty", "creamy"],
                rating: 4.6,
                calories: 245,
                ingredients: "Fresh cream, milk, sugar, pistachio paste, chopped pistachios",
                category: "nutty"
            },
            {
                id: 13,
                name: "Banana",
                image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
                description: "Creamy banana ice cream made with ripe bananas. A tropical treat that's naturally sweet.",
                tags: ["fruity", "creamy"],
                rating: 4.3,
                calories: 195,
                ingredients: "Fresh cream, milk, sugar, ripe bananas, natural banana flavor",
                category: "fruity"
            },
            {
                id: 14,
                name: "Banana Chocolate Chip",
                image: "https://images.unsplash.com/photo-1570196917203-59f2c611a5b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
                description: "Banana ice cream loaded with chocolate chips. The perfect combination of fruity and chocolatey.",
                tags: ["fruity", "chocolate"],
                rating: 4.7,
                calories: 235,
                ingredients: "Fresh cream, milk, sugar, ripe bananas, chocolate chips",
                category: "fruity"
            },
            {
                id: 15,
                name: "Chocolate Almond",
                image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
                description: "Rich chocolate ice cream with crunchy almond pieces. A delicious nutty twist on classic chocolate.",
                tags: ["chocolate", "nutty"],
                rating: 4.8,
                calories: 255,
                ingredients: "Fresh cream, milk, sugar, premium cocoa, toasted almonds",
                category: "chocolate"
            },
            {
                id: 16,
                name: "Chocolate Truffle",
                image: "https://images.unsplash.com/photo-1623334044303-241021148842?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
                description: "Decadent chocolate ice cream swirled with velvety chocolate truffle pieces and a hint of sea salt.",
                tags: ["chocolate", "creamy"],
                rating: 4.9,
                calories: 280,
                ingredients: "Fresh cream, milk, sugar, dark chocolate, cocoa, chocolate truffle pieces, sea salt",
                category: "chocolate"
            },
            {
                id: 17,
                name: "Kiwi Fruit",
                image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
                description: "Tangy and refreshing kiwi fruit ice cream. A unique and vibrant green treat.",
                tags: ["fruity"],
                rating: 4.2,
                calories: 185,
                ingredients: "Fresh cream, milk, sugar, kiwi fruit puree, kiwi seeds",
                category: "fruity"
            },
            {
                id: 18,
                name: "Pineapple",
                image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
                description: "Sweet and tangy pineapple ice cream. A tropical delight that's perfect for summer.",
                tags: ["fruity"],
                rating: 4.3,
                calories: 190,
                ingredients: "Fresh cream, milk, sugar, pineapple chunks, pineapple juice",
                category: "fruity"
            },
            {
                id: 19,
                name: "Fruit and Nut",
                image: "https://images.unsplash.com/photo-1570196917203-59f2c611a5b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
                description: "Creamy vanilla ice cream loaded with mixed dried fruits and nuts. A classic combination that never disappoints.",
                tags: ["nutty", "fruity", "creamy"],
                rating: 4.7,
                calories: 265,
                ingredients: "Fresh cream, milk, sugar, vanilla, mixed dried fruits, assorted nuts",
                category: "nutty"
            },
            {
                id: 20,
                name: "Cashew Caramel Crunch",
                image: "https://images.unsplash.com/photo-1623334044303-241021148842?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
                description: "Creamy caramel ice cream with crunchy cashew pieces and caramel swirls. A sweet and salty delight.",
                tags: ["nutty", "creamy"],
                rating: 4.8,
                calories: 275,
                ingredients: "Fresh cream, milk, sugar, caramel sauce, roasted cashews, sea salt",
                category: "nutty"
            }
        ];
        
        // DOM Elements for Interactive Hero
        const flavorImage = document.getElementById('main-flavor-image');
        const flavorName = document.getElementById('flavor-name');
        const flavorIndicators = document.getElementById('flavor-indicators');
        const heroSection = document.querySelector('.hero-section');
        const flavorDots = document.querySelectorAll('.flavor-dot');
        const flavorsGrid = document.getElementById('flavors-grid');
        const filterButtons = document.querySelectorAll('.filter-btn');
        const flavorModal = document.getElementById('flavorModal');
        
        // Current flavor index for hero
        let currentFlavorIndex = 0;
        let autoChangeInterval;
        
        // Initialize flavor indicators for hero
        function initFlavorIndicators() {
            flavorIndicators.innerHTML = '';
            
            flavorsHero.forEach((flavor, index) => {
                const indicator = document.createElement('div');
                indicator.className = `flavor-indicator ${index === currentFlavorIndex ? 'active' : ''}`;
                indicator.dataset.index = index;
                
                indicator.addEventListener('click', () => {
                    changeFlavor(index);
                });
                
                flavorIndicators.appendChild(indicator);
            });
        }
        
        // Change flavor function for hero
        function changeFlavor(index) {
            // Update current flavor index
            currentFlavorIndex = index;
            
            // Get flavor data
            const flavor = flavorsHero[index];
            
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
        
        // Auto change flavor for hero
        function startAutoChange() {
            autoChangeInterval = setInterval(() => {
                currentFlavorIndex = (currentFlavorIndex + 1) % flavorsHero.length;
                changeFlavor(currentFlavorIndex);
            }, 5000); // Change every 5 seconds
        }
        
        // Reset auto change interval
        function resetAutoChange() {
            clearInterval(autoChangeInterval);
            startAutoChange();
        }
        
        // Initialize flavor cards for grid
        function initFlavorCards() {
            flavorsGrid.innerHTML = '';
            
            flavors.forEach((flavor, index) => {
                const delay = (index % 4) * 100;
                
                const flavorCard = document.createElement('div');
                flavorCard.className = `col-lg-3 col-md-4 col-sm-6 mb-4 flavor-card`;
                flavorCard.dataset.category = flavor.category;
                flavorCard.style.animationDelay = `${delay}ms`;
                
                // Create tags HTML
                let tagsHtml = '';
                flavor.tags.forEach(tag => {
                    tagsHtml += `<span class="flavor-tag ${tag}">${tag}</span>`;
                });
                
                flavorCard.innerHTML = `
                    <div class="flavor-detail-card" data-flavor-id="${flavor.id}">
                        <img src="${flavor.image}" class="flavor-detail-img" alt="${flavor.name}">
                        <div class="flavor-detail-content">
                            <h4 class="flavor-detail-title">${flavor.name}</h4>
                            <p class="flavor-detail-description">${flavor.description.substring(0, 80)}...</p>
                            <div class="flavor-detail-tags">
                                ${tagsHtml}
                            </div>
                            <div class="flavor-stats">
                                <div class="stat">
                                    <div class="stat-value">${flavor.rating}</div>
                                    <div class="stat-label">Rating</div>
                                </div>
                                <div class="stat">
                                    <div class="stat-value">${flavor.calories}</div>
                                    <div class="stat-label">Calories</div>
                                </div>
                                <div class="stat">
                                    <button class="btn btn-sm btn-outline-primary view-details-btn" data-bs-toggle="modal" data-bs-target="#flavorModal" data-flavor-id="${flavor.id}">
                                        <i class="fas fa-eye"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
                
                flavorsGrid.appendChild(flavorCard);
                
                // Add click event to view details button
                flavorCard.querySelector('.view-details-btn').addEventListener('click', () => {
                    openFlavorModal(flavor.id);
                });
                
                // Add click event to the entire card
                flavorCard.addEventListener('click', (e) => {
                    if (!e.target.classList.contains('view-details-btn') && !e.target.closest('.view-details-btn')) {
                        openFlavorModal(flavor.id);
                    }
                });
            });
        }
        
        // Open flavor modal with details
        function openFlavorModal(flavorId) {
            const flavor = flavors.find(f => f.id === flavorId);
            if (!flavor) return;
            
            // Update modal content
            document.getElementById('modal-flavor-img').src = flavor.image;
            document.getElementById('modal-flavor-img').alt = flavor.name;
            document.getElementById('modal-flavor-name').textContent = flavor.name;
            document.getElementById('modal-flavor-description').textContent = flavor.description;
            document.getElementById('modal-flavor-rating').textContent = flavor.rating;
            document.getElementById('modal-flavor-calories').textContent = flavor.calories;
            document.getElementById('modal-flavor-ingredients').textContent = flavor.ingredients;
            
            // Update tags
            const modalTagsContainer = document.getElementById('modal-flavor-tags');
            modalTagsContainer.innerHTML = '';
            flavor.tags.forEach(tag => {
                const tagElement = document.createElement('span');
                tagElement.className = `flavor-tag ${tag}`;
                tagElement.textContent = tag;
                modalTagsContainer.appendChild(tagElement);
            });
        }
        
        // Filter flavors by category
        function filterFlavors(category) {
            const flavorCards = document.querySelectorAll('.flavor-card');
            
            flavorCards.forEach(card => {
                if (category === 'all' || card.dataset.category === category) {
                    card.style.display = 'block';
                    // Trigger animation
                    card.querySelector('.flavor-detail-card').style.animation = 'none';
                    setTimeout(() => {
                        card.querySelector('.flavor-detail-card').style.animation = 'fadeInUp 0.6s forwards';
                    }, 10);
                } else {
                    card.style.display = 'none';
                }
            });
            
            // Update active filter button
            filterButtons.forEach(btn => {
                if (btn.dataset.filter === category) {
                    btn.classList.add('active');
                } else {
                    btn.classList.remove('active');
                }
            });
        }
        
        // Initialize when DOM is loaded
        document.addEventListener('DOMContentLoaded', function() {
            // Initialize interactive hero section
            initFlavorIndicators();
            startAutoChange();
            
            // Initialize flavor cards
            initFlavorCards();
            
            // Add click events to flavor dots in hero
            flavorDots.forEach(dot => {
                dot.addEventListener('click', function() {
                    const flavorId = this.dataset.flavor;
                    const flavorIndex = flavorsHero.findIndex(f => f.id === flavorId);
                    if (flavorIndex !== -1) {
                        changeFlavor(flavorIndex);
                    }
                });
            });
            
            // Add click events to filter buttons
            filterButtons.forEach(btn => {
                btn.addEventListener('click', function() {
                    const filter = this.dataset.filter;
                    filterFlavors(filter);
                });
            });
            
            // Set flavor of the day button event
            document.querySelector('.flavor-modal-btn').addEventListener('click', function() {
                openFlavorModal(15); // Chocolate Truffle
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
            
            // Initialize modal event
            flavorModal.addEventListener('show.bs.modal', function(event) {
                const button = event.relatedTarget;
                if (button && button.dataset.flavorId) {
                    openFlavorModal(parseInt(button.dataset.flavorId));
                }
            });
        });