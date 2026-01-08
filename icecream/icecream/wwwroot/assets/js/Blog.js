  // Initialize AOS (Animate On Scroll)
        AOS.init({
            duration: 1000,
            once: true,
            offset: 100
        });
        
        // Blog Categories Data for Interactive Hero
        const blogCategories = [
            {
                id: 'recipes',
                name: 'Recipes',
                image: 'https://images.unsplash.com/photo-1570196917203-59f2c611a5b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
                color: '#ff66b2',
                bgColor: 'linear-gradient(135deg, rgba(0,0,0,0.9) 0%, rgba(44,44,84,0.9) 50%, rgba(0,0,0,0.9) 100%)',
                description: 'Delicious ice cream recipes to try at home'
            },
            {
                id: 'tips',
                name: 'Making Tips',
                image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
                color: '#ffcc00',
                bgColor: 'linear-gradient(135deg, rgba(0,0,0,0.9) 0%, rgba(74,26,42,0.9) 50%, rgba(0,0,0,0.9) 100%)',
                description: 'Expert tips for perfect ice cream'
            },
            {
                id: 'behind',
                name: 'Behind The Scenes',
                image: 'https://images.unsplash.com/photo-1488900128323-21503983a07e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
                color: '#9d65c9',
                bgColor: 'linear-gradient(135deg, rgba(0,0,0,0.9) 0%, rgba(42,42,42,0.9) 50%, rgba(0,0,0,0.9) 100%)',
                description: 'See how we create our ice creams'
            },
            {
                id: 'seasonal',
                name: 'Seasonal Flavors',
                image: 'https://images.unsplash.com/photo-1536599424071-0b215a388ba7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
                color: '#ff3366',
                bgColor: 'linear-gradient(135deg, rgba(0,0,0,0.9) 0%, rgba(10,36,99,0.9) 50%, rgba(0,0,0,0.9) 100%)',
                description: 'Discover our seasonal creations'
            },
            {
                id: 'history',
                name: 'Ice Cream History',
                image: 'https://images.unsplash.com/photo-1516559828984-fb3b99548b21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
                color: '#98ff98',
                bgColor: 'linear-gradient(135deg, rgba(0,0,0,0.9) 0%, rgba(13,59,42,0.9) 50%, rgba(0,0,0,0.9) 100%)',
                description: 'The fascinating history of ice cream'
            },
            {
                id: 'health',
                name: 'Health & Nutrition',
                image: 'https://images.unsplash.com/photo-1560008581-09826d1de69e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
                color: '#d2691e',
                bgColor: 'linear-gradient(135deg, rgba(0,0,0,0.9) 0%, rgba(61,37,14,0.9) 50%, rgba(0,0,0,0.9) 100%)',
                description: 'Nutritional facts and healthy options'
            }
        ];
        
        // Blog Posts Data
        const blogPosts = [
            {
                id: 1,
                title: "The Art of Crafting Perfect Ice Cream: A Step-by-Step Guide",
                category: "recipes",
                excerpt: "Discover the secrets behind creating the perfect scoop of ice cream. From ingredient selection to churning techniques, learn how we craft our premium ice creams.",
                image: "https://images.unsplash.com/photo-1516559828984-fb3b99548b21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
                author: "Maria Ricci",
                date: "November 15, 2023",
                readTime: "8 min",
                featured: true,
                content: `
                    <h2>The Art of Crafting Perfect Ice Cream</h2>
                    <p>Creating the perfect scoop of ice cream is both a science and an art. At Creamy Bar, we've spent decades perfecting our techniques to deliver that creamy, dreamy texture that keeps our customers coming back for more.</p>
                    
                    <h3>Choosing the Right Ingredients</h3>
                    <p>Quality starts with ingredients. We source only the finest:</p>
                    <ul>
                        <li><strong>Dairy:</strong> Our cream comes from local, grass-fed cows for a richer flavor.</li>
                        <li><strong>Sweeteners:</strong> We use a blend of cane sugar and organic honey for balanced sweetness.</li>
                        <li><strong>Flavorings:</strong> Real vanilla beans, fresh fruits, and premium chocolate.</li>
                        <li><strong>Stabilizers:</strong> Just a touch of natural stabilizers for perfect texture.</li>
                    </ul>
                    
                    <div class="blog-quote">
                        "The secret to great ice cream isn't in fancy equipment - it's in patience, quality ingredients, and attention to detail." - Maria Ricci
                    </div>
                    
                    <h3>The Churning Process</h3>
                    <p>Proper churning is crucial for that signature creamy texture. Here's our process:</p>
                    <ol>
                        <li>Chill the base mixture to exactly 40°F (4°C)</li>
                        <li>Churn at a steady pace to incorporate just the right amount of air</li>
                        <li>Stop at the perfect consistency - not too soft, not too hard</li>
                        <li>Transfer to containers for the hardening phase</li>
                    </ol>
                    
                    <h3>Temperature Control</h3>
                    <p>Ice cream is sensitive to temperature fluctuations. We maintain strict temperature controls throughout:</p>
                    <ul>
                        <li>Storage at -20°F (-29°C)</li>
                        <li>Display cases at -10°F (-23°C)</li>
                        <li>Transport in specialized refrigerated vehicles</li>
                    </ul>
                    
                    <div class="blog-tags">
                        <a href="#" class="tag">Ice Cream Making</a>
                        <a href="#" class="tag">Recipes</a>
                        <a href="#" class="tag">Techniques</a>
                        <a href="#" class="tag">Behind The Scenes</a>
                    </div>
                `
            },
            {
                id: 2,
                title: "5 DIY Ice Cream Recipes You Can Make at Home",
                category: "recipes",
                excerpt: "No fancy equipment needed! Try these simple and delicious ice cream recipes you can make in your own kitchen.",
                image: "https://images.unsplash.com/photo-1570196917203-59f2c611a5b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
                author: "Giovanni Ricci",
                date: "November 10, 2023",
                readTime: "6 min",
                featured: false
            },
            {
                id: 3,
                title: "The History of Ice Cream: From Ancient China to Modern Day",
                category: "history",
                excerpt: "Take a journey through time and discover how ice cream evolved from a royal delicacy to a beloved treat enjoyed worldwide.",
                image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
                author: "Maria Ricci",
                date: "November 5, 2023",
                readTime: "10 min",
                featured: false
            },
            {
                id: 4,
                title: "Our Seasonal Pumpkin Spice Ice Cream: The Recipe Story",
                category: "seasonal",
                excerpt: "How we developed our award-winning pumpkin spice ice cream, from testing 50+ recipes to finding the perfect balance of spices.",
                image: "https://images.unsplash.com/photo-1488900128323-21503983a07e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
                author: "Sophia Chen",
                date: "October 28, 2023",
                readTime: "7 min",
                featured: false
            },
            {
                id: 5,
                title: "Common Ice Cream Making Mistakes and How to Avoid Them",
                category: "tips",
                excerpt: "Learn from our mistakes! We share the most common ice cream making errors and how to ensure perfect results every time.",
                image: "https://images.unsplash.com/photo-1536599424071-0b215a388ba7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
                author: "Maria Ricci",
                date: "October 20, 2023",
                readTime: "5 min",
                featured: false
            },
            {
                id: 6,
                title: "Behind the Scenes: A Day at Our Ice Cream Factory",
                category: "behind",
                excerpt: "Join us for a virtual tour of our production facility and meet the team that brings your favorite flavors to life.",
                image: "https://images.unsplash.com/photo-1516559828984-fb3b99548b21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
                author: "Giovanni Ricci",
                date: "October 15, 2023",
                readTime: "9 min",
                featured: false
            },
            {
                id: 7,
                title: "Healthy Ice Cream Alternatives: Delicious & Nutritious Options",
                category: "health",
                excerpt: "Discover our range of healthier ice cream options that don't compromise on taste or texture.",
                image: "https://images.unsplash.com/photo-1560008581-09826d1de69e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
                author: "Dr. Sarah Johnson",
                date: "October 10, 2023",
                readTime: "6 min",
                featured: false
            },
            {
                id: 8,
                title: "The Science of Ice Cream: Why Freezing Matters",
                category: "tips",
                excerpt: "Understanding the science behind ice crystal formation and how it affects texture and mouthfeel.",
                image: "https://images.unsplash.com/photo-1570196917203-59f2c611a5b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
                author: "Dr. Michael Roberts",
                date: "October 5, 2023",
                readTime: "8 min",
                featured: false
            }
        ];
        
        // Blog Tags Data
        const blogTags = [
            "Recipes", "Ice Cream Making", "Tips & Tricks", "Seasonal", 
            "History", "Health", "Behind The Scenes", "Dairy-Free",
            "Homemade", "Gelato", "Sorbet", "Vegan", "Summer", "Winter"
        ];
        
        // DOM Elements for Interactive Hero
        const flavorImage = document.getElementById('main-flavor-image');
        const flavorName = document.getElementById('flavor-name');
        const flavorIndicators = document.getElementById('flavor-indicators');
        const heroSection = document.querySelector('.hero-section');
        const flavorDots = document.querySelectorAll('.flavor-dot');
        
        // DOM Elements for Blog
        const blogContainer = document.getElementById('blog-container');
        const categoryList = document.getElementById('category-list');
        const recentPosts = document.getElementById('recent-posts');
        const tagCloud = document.getElementById('tag-cloud');
        const loadMoreBtn = document.getElementById('load-more-btn');
        const blogDetailSection = document.getElementById('blog-detail');
        const blogListSection = document.getElementById('blog-list');
        const featuredPostSection = document.getElementById('featured');
        const backToBlogBtn = document.getElementById('back-to-blog');
        const blogDetailContent = document.getElementById('blog-detail-content');
        const readFeaturedBtn = document.getElementById('read-featured');
        
        // Current state
        let currentCategoryIndex = 0;
        let autoChangeInterval;
        let visiblePosts = 4;
        
        // Initialize flavor indicators for hero section
        function initFlavorIndicators() {
            flavorIndicators.innerHTML = '';
            
            blogCategories.forEach((category, index) => {
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
            const category = blogCategories[index];
            
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
                currentCategoryIndex = (currentCategoryIndex + 1) % blogCategories.length;
                changeCategory(currentCategoryIndex);
            }, 6000); // Change every 6 seconds
        }
        
        // Reset auto change interval
        function resetAutoChange() {
            clearInterval(autoChangeInterval);
            startAutoChange();
        }
        
        // Initialize blog posts
        function initBlog() {
            renderBlogPosts();
            renderCategories();
            renderRecentPosts();
            renderTags();
            setupEventListeners();
        }
        
        // Render blog posts
        function renderBlogPosts() {
            blogContainer.innerHTML = '';
            
            // Get posts to display (excluding featured post)
            const postsToShow = blogPosts
                .filter(post => !post.featured)
                .slice(0, visiblePosts);
            
            // Render each post
            postsToShow.forEach((post, index) => {
                const blogCard = document.createElement('div');
                blogCard.className = 'col-md-6 mb-4';
                blogCard.setAttribute('data-aos', 'fade-up');
                blogCard.setAttribute('data-aos-delay', (index % 2 === 0 ? 100 : 200));
                
                blogCard.innerHTML = `
                    <div class="blog-card" data-id="${post.id}">
                        <img src="${post.image}" alt="${post.title}" class="blog-img">
                        <div class="blog-content">
                            <div class="blog-category">${getCategoryName(post.category)}</div>
                            <h3 class="blog-title">${post.title}</h3>
                            <div class="blog-meta">
                                <span><i class="fas fa-user"></i> ${post.author}</span>
                                <span><i class="fas fa-calendar"></i> ${post.date}</span>
                                <span><i class="fas fa-clock"></i> ${post.readTime} read</span>
                            </div>
                            <p class="blog-excerpt">${post.excerpt}</p>
                            <a href="#" class="blog-read-more" data-id="${post.id}">
                                Read More <i class="fas fa-arrow-right ms-2"></i>
                            </a>
                        </div>
                    </div>
                `;
                
                blogContainer.appendChild(blogCard);
            });
            
            // Show/hide load more button
            if (visiblePosts >= blogPosts.filter(post => !post.featured).length) {
                loadMoreBtn.style.display = 'none';
            } else {
                loadMoreBtn.style.display = 'block';
            }
        }
        
        // Render categories in sidebar
        function renderCategories() {
            categoryList.innerHTML = '';
            
            // Count posts per category
            const categoryCounts = {};
            blogPosts.forEach(post => {
                categoryCounts[post.category] = (categoryCounts[post.category] || 0) + 1;
            });
            
            // Create category list items
            blogCategories.forEach(category => {
                const count = categoryCounts[category.id] || 0;
                
                const listItem = document.createElement('li');
                listItem.innerHTML = `
                    <a href="#" data-category="${category.id}">
                        ${category.name}
                        <span class="category-count">${count}</span>
                    </a>
                `;
                
                categoryList.appendChild(listItem);
            });
        }
        
        // Render recent posts in sidebar
        function renderRecentPosts() {
            recentPosts.innerHTML = '';
            
            // Get 3 most recent posts (excluding featured)
            const recent = blogPosts
                .filter(post => !post.featured)
                .slice(0, 3);
            
            // Render each recent post
            recent.forEach(post => {
                const recentPostDiv = document.createElement('div');
                recentPostDiv.className = 'recent-post';
                
                recentPostDiv.innerHTML = `
                    <img src="${post.image}" alt="${post.title}" class="recent-post-img">
                    <div>
                        <h5 class="recent-post-title">${post.title}</h5>
                        <div class="recent-post-date">${post.date}</div>
                        <a href="#" class="blog-read-more small" data-id="${post.id}">Read more</a>
                    </div>
                `;
                
                recentPosts.appendChild(recentPostDiv);
            });
        }
        
        // Render tags in sidebar
        function renderTags() {
            tagCloud.innerHTML = '';
            
            blogTags.forEach(tag => {
                const tagElement = document.createElement('a');
                tagElement.href = '#';
                tagElement.className = 'tag';
                tagElement.textContent = tag;
                
                tagCloud.appendChild(tagElement);
            });
        }
        
        // Get category display name
        function getCategoryName(categoryId) {
            const category = blogCategories.find(c => c.id === categoryId);
            return category ? category.name : categoryId;
        }
        
        // Show blog detail
        function showBlogDetail(postId) {
            // Find the post
            const post = blogPosts.find(p => p.id === postId);
            if (!post) return;
            
            // Hide blog list and featured section, show detail section
            blogListSection.style.display = 'none';
            featuredPostSection.style.display = 'none';
            blogDetailSection.style.display = 'block';
            
            // Scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
            
            // Render blog detail content
            blogDetailContent.innerHTML = `
                <img src="${post.image}" alt="${post.title}" class="blog-detail-img">
                <div class="blog-category mb-3">${getCategoryName(post.category)}</div>
                <h1 class="blog-detail-title">${post.title}</h1>
                <div class="blog-detail-meta">
                    <img src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80" 
                         alt="${post.author}" class="author-img">
                    <div>
                        <div><strong>${post.author}</strong></div>
                        <div class="text-muted">${post.date} • ${post.readTime} read</div>
                    </div>
                </div>
                <div class="blog-content">
                    ${post.content || `
                        <p>${post.excerpt}</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <h2>More About This Topic</h2>
                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <div class="blog-quote">
                            "Ice cream brings people together in a way that few other foods can. It's a universal language of joy and celebration."
                        </div>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                        <div class="blog-tags">
                            <a href="#" class="tag">${getCategoryName(post.category)}</a>
                            <a href="#" class="tag">Ice Cream</a>
                            <a href="#" class="tag">Recipes</a>
                        </div>
                    `}
                </div>
            `;
            
            // Render related posts
            const relatedPosts = blogPosts
                .filter(p => p.id !== postId && p.category === post.category)
                .slice(0, 3);
            
            const relatedPostsContainer = document.getElementById('related-posts');
            relatedPostsContainer.innerHTML = '';
            
            relatedPosts.forEach(relatedPost => {
                const relatedPostDiv = document.createElement('div');
                relatedPostDiv.className = 'recent-post';
                
                relatedPostDiv.innerHTML = `
                    <img src="${relatedPost.image}" alt="${relatedPost.title}" class="recent-post-img">
                    <div>
                        <h5 class="recent-post-title">${relatedPost.title}</h5>
                        <div class="recent-post-date">${relatedPost.date}</div>
                        <a href="#" class="blog-read-more small" data-id="${relatedPost.id}">Read more</a>
                    </div>
                `;
                
                relatedPostsContainer.appendChild(relatedPostDiv);
            });
        }
        
        // Show blog list
        function showBlogList() {
            blogListSection.style.display = 'block';
            featuredPostSection.style.display = 'block';
            blogDetailSection.style.display = 'none';
            
            // Scroll to blog section
            window.scrollTo({ top: blogListSection.offsetTop - 80, behavior: 'smooth' });
        }
        
        // Setup event listeners
        function setupEventListeners() {
            // Add click events to flavor dots
            flavorDots.forEach(dot => {
                dot.addEventListener('click', function() {
                    const categoryId = this.dataset.flavor;
                    const categoryIndex = blogCategories.findIndex(c => c.id === categoryId);
                    if (categoryIndex !== -1) {
                        changeCategory(categoryIndex);
                    }
                });
            });
            
            // Load more button
            loadMoreBtn.addEventListener('click', function() {
                visiblePosts += 4;
                renderBlogPosts();
            });
            
            // Read more buttons (delegated event)
            document.addEventListener('click', function(e) {
                // Blog card click
                if (e.target.closest('.blog-card')) {
                    const blogCard = e.target.closest('.blog-card');
                    const postId = parseInt(blogCard.dataset.id);
                    showBlogDetail(postId);
                    e.preventDefault();
                }
                
                // Read more link click
                if (e.target.closest('.blog-read-more')) {
                    const readMoreLink = e.target.closest('.blog-read-more');
                    if (readMoreLink.dataset.id) {
                        const postId = parseInt(readMoreLink.dataset.id);
                        showBlogDetail(postId);
                        e.preventDefault();
                    }
                }
                
                // Category link click
                if (e.target.closest('[data-category]')) {
                    const categoryLink = e.target.closest('[data-category]');
                    const categoryId = categoryLink.dataset.category;
                    alert(`Filtering by category: ${getCategoryName(categoryId)} - This feature will be implemented soon!`);
                    e.preventDefault();
                }
            });
            
            // Back to blog button
            backToBlogBtn.addEventListener('click', function(e) {
                showBlogList();
                e.preventDefault();
            });
            
            // Read featured post button
            readFeaturedBtn.addEventListener('click', function(e) {
                const featuredPost = blogPosts.find(post => post.featured);
                if (featuredPost) {
                    showBlogDetail(featuredPost.id);
                }
                e.preventDefault();
            });
            
            // Newsletter forms
            document.getElementById('blog-newsletter-form').addEventListener('submit', function(e) {
                e.preventDefault();
                const email = document.getElementById('blog-email').value;
                if (email && validateEmail(email)) {
                    alert(`Thank you for subscribing to our blog newsletter! We'll send our latest stories to ${email}.`);
                    document.getElementById('blog-email').value = '';
                } else {
                    alert('Please enter a valid email address.');
                }
            });
            
            document.getElementById('footer-subscribe-btn').addEventListener('click', function() {
                const email = document.getElementById('footer-blog-email').value;
                if (email && validateEmail(email)) {
                    alert(`Thank you for subscribing to our blog updates! We'll notify you at ${email}.`);
                    document.getElementById('footer-blog-email').value = '';
                } else {
                    alert('Please enter a valid email address.');
                }
            });
            
            // Chat bubble
            document.querySelector('.chat-bubble').addEventListener('click', function() {
                alert("Hello! I'm Creamy Bar's virtual assistant. Would you like help finding a specific blog post or recipe?");
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
                    if (targetElement && targetElement.style.display !== 'none') {
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
            
            // Initialize blog
            initBlog();
            
            // Initialize Bootstrap tooltips
            const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
            tooltipTriggerList.map(function (tooltipTriggerEl) {
                return new bootstrap.Tooltip(tooltipTriggerEl);
            });
        });