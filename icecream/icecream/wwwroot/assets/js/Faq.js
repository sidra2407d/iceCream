  // Initialize AOS (Animate On Scroll)
        AOS.init({
            duration: 1000,
            once: true,
            offset: 100
        });
        
        // FAQ Data
        const faqData = [
            {
                id: 1,
                question: "What makes Creamy Bar ice cream different from others?",
                answer: "Our ice cream is crafted using a traditional Italian gelato technique that creates a denser, creamier texture with less air than regular ice cream. We use only the finest ingredients: locally sourced dairy, real vanilla beans, fresh fruits, and premium chocolates. Our recipes have been perfected over 35 years and contain no artificial flavors, colors, or preservatives.",
                category: "product",
                icon: "fa-ice-cream"
            },
            {
                id: 2,
                question: "Do you offer dairy-free or vegan options?",
                answer: "Yes! We have a rotating selection of dairy-free and vegan ice creams made with coconut milk, almond milk, or oat milk bases. Our vegan options are made without any animal products and still maintain the creamy texture you expect from Creamy Bar. Currently, we offer 5-7 vegan flavors at any given time, including Chocolate Fudge, Strawberry Swirl, and Cookies & Cream.",
                category: "dietary",
                icon: "fa-leaf"
            },
            {
                id: 3,
                question: "How should I store your ice cream at home?",
                answer: "For optimal freshness and texture, store your Creamy Bar ice cream in the coldest part of your freezer (usually the back) at 0°F (-18°C) or lower. Keep it in its original container and make sure the lid is sealed tightly. Avoid storing ice cream in the freezer door where temperature fluctuates. For best quality, consume within 2-3 weeks of purchase.",
                category: "product",
                icon: "fa-snowflake"
            },
            {
                id: 4,
                question: "What is your delivery policy and area?",
                answer: "We offer delivery within a 15-mile radius of our store. Orders over $25 qualify for free delivery. Delivery times are typically 30-60 minutes depending on location and order volume. We use insulated bags and dry ice to ensure your ice cream arrives in perfect condition. You can track your delivery in real-time through our app or website.",
                category: "delivery",
                icon: "fa-shipping-fast"
            },
            {
                id: 5,
                question: "How can I place a custom order for a special event?",
                answer: "We love creating custom ice cream experiences! For weddings, birthdays, or corporate events, please contact us at least 14 days in advance. You can call us at (123) 456-7890 or email events@creamybar.com. We offer custom flavors, personalized packaging, and even ice cream bars with toppings stations. Minimum order requirements apply for custom orders.",
                category: "ordering",
                icon: "fa-birthday-cake"
            },
            {
                id: 6,
                question: "Are your ice creams gluten-free?",
                answer: "Most of our ice creams are naturally gluten-free, except for flavors that contain cookies, brownies, or other baked goods. We clearly label all gluten-containing products. Our production process includes thorough cleaning between batches, but we do handle gluten in our kitchen, so there is a risk of cross-contamination. If you have severe celiac disease or gluten sensitivity, please inform our staff when ordering.",
                category: "dietary",
                icon: "fa-heart"
            },
            {
                id: 7,
                question: "Do you offer nutritional information for your products?",
                answer: "Yes, detailed nutritional information is available for all our standard flavors on our website and in-store. You can also request a printed nutrition guide at any of our locations. We're transparent about our ingredients and nutritional values to help you make informed choices. Our lighter options contain 30% less sugar and fat than our traditional ice creams.",
                category: "product",
                icon: "fa-chart-pie"
            },
            {
                id: 8,
                question: "What is your return policy?",
                answer: "Customer satisfaction is our priority. If you're not completely happy with your purchase, please contact us within 24 hours. We'll gladly replace your product or provide a full refund. For quality concerns, we may ask for photos of the product and packaging. Please note that we cannot accept returns of melted or partially consumed products for safety reasons.",
                category: "ordering",
                icon: "fa-exchange-alt"
            },
            {
                id: 9,
                question: "How often do you introduce new flavors?",
                answer: "We introduce 2-3 new seasonal flavors each quarter, plus occasional limited-edition creations. Our seasonal rotations include summer fruit sorbets, fall spice flavors, winter holiday specials, and spring floral-infused options. Sign up for our newsletter or follow us on social media to be the first to know about new flavor launches and limited-time offerings.",
                category: "product",
                icon: "fa-calendar-star"
            },
            {
                id: 10,
                question: "Can I visit your production facility?",
                answer: "Yes! We offer guided tours of our production facility every Saturday at 10am and 2pm. Tours last approximately 45 minutes and include a behind-the-scenes look at how we make our ice cream, a tasting session, and a Q&A with one of our ice cream makers. Tours are $15 per person and include a $5 gift card to use in our store. Reservations are required and can be made on our website.",
                category: "company",
                icon: "fa-hard-hat"
            },
            {
                id: 11,
                question: "Do you offer catering for events?",
                answer: "Absolutely! We provide full-service ice cream catering for events of all sizes, from intimate gatherings to large corporate functions. Our catering packages include staffed ice cream stations with multiple flavor options, a variety of toppings, waffle cones, and all necessary supplies. We also offer custom branded napkins and cups. Contact our events team for a customized quote based on your needs.",
                category: "ordering",
                icon: "fa-utensils"
            },
            {
                id: 12,
                question: "Are your ingredients locally sourced?",
                answer: "We're committed to supporting local producers whenever possible. Our dairy comes from a family-owned farm 30 miles away, and we source fruits from local growers during the growing season. We work directly with farmers to ensure the highest quality and freshest ingredients. About 65% of our ingredients are sourced within a 100-mile radius, and we're continuously working to increase this percentage.",
                category: "company",
                icon: "fa-tractor"
            }
        ];
        
        // DOM Elements
        const faqAccordion = document.getElementById('faq-accordion');
        const categoryButtons = document.querySelectorAll('.category-btn');
        const faqSearch = document.getElementById('faq-search');
        const searchBtn = document.getElementById('search-btn');
        const chatBubble = document.querySelector('.chat-bubble');
        
        // Current state
        let currentCategory = 'all';
        let filteredFaqs = [...faqData];
        
        // Initialize FAQ page
        function initFAQ() {
            renderFAQs();
            setupEventListeners();
        }
        
        // Render FAQ items
        function renderFAQs() {
            faqAccordion.innerHTML = '';
            
            filteredFaqs.forEach((faq, index) => {
                const faqItem = document.createElement('div');
                faqItem.className = 'accordion-item';
                faqItem.dataset.category = faq.category;
                faqItem.dataset.id = faq.id;
                faqItem.setAttribute('data-aos', 'fade-up');
                faqItem.setAttribute('data-aos-delay', (index % 3) * 100);
                
                // Create unique IDs for accordion
                const accordionId = `accordion-${faq.id}`;
                const headingId = `heading-${faq.id}`;
                const collapseId = `collapse-${faq.id}`;
                
                faqItem.innerHTML = `
                    <h2 class="accordion-header" id="${headingId}">
                        <button class="accordion-button ${index === 0 ? '' : 'collapsed'}" type="button" data-bs-toggle="collapse" data-bs-target="#${collapseId}" aria-expanded="${index === 0 ? 'true' : 'false'}" aria-controls="${collapseId}">
                            <div class="faq-icon">
                                <i class="fas ${faq.icon}"></i>
                            </div>
                            ${faq.question}
                        </button>
                    </h2>
                    <div id="${collapseId}" class="accordion-collapse collapse ${index === 0 ? 'show' : ''}" aria-labelledby="${headingId}" data-bs-parent="#faq-accordion">
                        <div class="accordion-body">
                            ${faq.answer}
                        </div>
                    </div>
                `;
                
                faqAccordion.appendChild(faqItem);
            });
            
            // If no FAQs match the filter
            if (filteredFaqs.length === 0) {
                faqAccordion.innerHTML = `
                    <div class="text-center py-5" data-aos="fade-up">
                        <i class="fas fa-search fa-3x mb-3" style="color: var(--primary); opacity: 0.5;"></i>
                        <h4>No questions found</h4>
                        <p>Try a different search term or category</p>
                        <button class="btn btn-primary mt-2" id="reset-filter">
                            <i class="fas fa-redo me-2"></i> Reset Filters
                        </button>
                    </div>
                `;
                
                // Add event listener to reset button
                document.getElementById('reset-filter')?.addEventListener('click', function() {
                    currentCategory = 'all';
                    filteredFaqs = [...faqData];
                    updateActiveCategoryButton();
                    renderFAQs();
                    faqSearch.value = '';
                });
            }
        }
        
        // Filter FAQs by category
        function filterByCategory(category) {
            currentCategory = category;
            
            if (category === 'all') {
                filteredFaqs = [...faqData];
            } else {
                filteredFaqs = faqData.filter(faq => faq.category === category);
            }
            
            renderFAQs();
            updateActiveCategoryButton();
        }
        
        // Search FAQs
        function searchFAQs(searchTerm) {
            if (!searchTerm.trim()) {
                // If search is empty, revert to category filter
                filterByCategory(currentCategory);
                return;
            }
            
            const term = searchTerm.toLowerCase();
            filteredFaqs = faqData.filter(faq => 
                faq.question.toLowerCase().includes(term) || 
                faq.answer.toLowerCase().includes(term) ||
                faq.category.toLowerCase().includes(term)
            );
            
            renderFAQs();
        }
        
        // Update active category button
        function updateActiveCategoryButton() {
            categoryButtons.forEach(btn => {
                if (btn.dataset.category === currentCategory) {
                    btn.classList.add('active');
                } else {
                    btn.classList.remove('active');
                }
            });
        }
        
        // Setup event listeners
        function setupEventListeners() {
            // Category button clicks
            categoryButtons.forEach(btn => {
                btn.addEventListener('click', function() {
                    const category = this.dataset.category;
                    filterByCategory(category);
                    
                    // Scroll to FAQs
                    document.getElementById('faq-section').scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'start'
                    });
                });
            });
            
            // Search functionality
            searchBtn.addEventListener('click', function() {
                searchFAQs(faqSearch.value);
            });
            
            faqSearch.addEventListener('keyup', function(e) {
                if (e.key === 'Enter') {
                    searchFAQs(faqSearch.value);
                }
            });
            
            // Chat bubble
            chatBubble.addEventListener('click', function() {
                alert("Hello! I'm here to help you find answers. Try searching for a specific question or browse by category above!");
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
        }
        
        // Initialize when DOM is loaded
        document.addEventListener('DOMContentLoaded', function() {
            initFAQ();
        });