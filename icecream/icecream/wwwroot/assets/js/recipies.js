// recipe.js - JavaScript for recipe page

// Sample recipe data - 30 ice cream recipes (18 free, 12 premium)
const recipes = [
    {
        id: 1,
        title: "Classic Vanilla",
        description: "A smooth and creamy vanilla ice cream with real vanilla bean specks.",
        image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        prepTime: "20 mins",
        cookTime: "30 mins",
        difficulty: "Easy",
        servings: "6",
        isPremium: false,
        ingredients: [
            "2 cups heavy cream",
            "1 cup whole milk",
            "3/4 cup granulated sugar",
            "1 tbsp pure vanilla extract",
            "Pinch of salt",
            "6 large egg yolks",
            "1 vanilla bean, split and scraped"
        ],
        instructions: [
            "In a medium saucepan, combine the cream, milk, sugar, salt, and vanilla bean seeds.",
            "Heat over medium heat until the mixture is hot but not boiling.",
            "In a separate bowl, whisk the egg yolks until smooth.",
            "Slowly pour about 1 cup of the hot cream mixture into the egg yolks, whisking constantly.",
            "Pour the egg yolk mixture back into the saucepan with the remaining cream mixture.",
            "Cook over low heat, stirring constantly, until the mixture thickens enough to coat the back of a spoon.",
            "Strain the mixture through a fine-mesh sieve into a clean bowl.",
            "Stir in the vanilla extract.",
            "Cover and refrigerate until completely chilled, at least 4 hours or overnight.",
            "Churn in an ice cream maker according to the manufacturer's instructions.",
            "Transfer to an airtight container and freeze until firm, at least 4 hours."
        ]
    },
    {
        id: 2,
        title: "Decadent Chocolate",
        description: "Rich and creamy chocolate ice cream made with premium cocoa powder.",
        image: "https://images.unsplash.com/photo-1488900128323-21503983a07e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        prepTime: "25 mins",
        cookTime: "25 mins",
        difficulty: "Medium",
        servings: "8",
        isPremium: true
    },
    {
        id: 3,
        title: "Strawberry Swirl",
        description: "Creamy strawberry ice cream with ribbons of fresh strawberry sauce.",
        image: "https://images.unsplash.com/photo-1628992682633-bf2d40cb595f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        prepTime: "30 mins",
        cookTime: "20 mins",
        difficulty: "Medium",
        servings: "6",
        isPremium: false
    },
    {
        id: 4,
        title: "Mint Chocolate Chip",
        description: "Refreshing mint ice cream loaded with dark chocolate chips.",
        image: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        prepTime: "15 mins",
        cookTime: "25 mins",
        difficulty: "Easy",
        servings: "6",
        isPremium: false
    },
    {
        id: 5,
        title: "Cookies and Cream",
        description: "Vanilla ice cream packed with chunks of chocolate sandwich cookies.",
        image: "https://images.unsplash.com/photo-1560008587-0c7c6c1534a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        prepTime: "20 mins",
        cookTime: "30 mins",
        difficulty: "Easy",
        servings: "8",
        isPremium: false
    },
    {
        id: 6,
        title: "Salted Caramel",
        description: "Sweet caramel ice cream with a hint of sea salt for balance.",
        image: "https://images.unsplash.com/photo-1541599540903-7ce2dda38a81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        prepTime: "35 mins",
        cookTime: "30 mins",
        difficulty: "Medium",
        servings: "6",
        isPremium: true
    },
    {
        id: 7,
        title: "Rocky Road",
        description: "Chocolate ice cream with marshmallows, almonds, and chocolate chunks.",
        image: "https://images.unsplash.com/photo-1562448078-9f57ac6e0c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        prepTime: "25 mins",
        cookTime: "25 mins",
        difficulty: "Medium",
        servings: "8",
        isPremium: false
    },
    {
        id: 8,
        title: "Pistachio",
        description: "Creamy pistachio ice cream with roasted pistachio pieces.",
        image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        prepTime: "30 mins",
        cookTime: "30 mins",
        difficulty: "Medium",
        servings: "6",
        isPremium: true
    },
    {
        id: 9,
        title: "Coffee Toffee Crunch",
        description: "Coffee ice cream with toffee pieces and a chocolate swirl.",
        image: "https://images.unsplash.com/photo-1488900128323-21503983a07e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        prepTime: "25 mins",
        cookTime: "25 mins",
        difficulty: "Medium",
        servings: "6",
        isPremium: true
    },
    {
        id: 10,
        title: "Lemon Sorbet",
        description: "Refreshing dairy-free lemon sorbet with a tangy finish.",
        image: "https://images.unsplash.com/photo-1628992682633-bf2d40cb595f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        prepTime: "15 mins",
        cookTime: "0 mins",
        difficulty: "Easy",
        servings: "4",
        isPremium: false
    },
    {
        id: 11,
        title: "Butter Pecan",
        description: "Buttery ice cream with roasted pecans and a hint of caramel.",
        image: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        prepTime: "30 mins",
        cookTime: "30 mins",
        difficulty: "Medium",
        servings: "6",
        isPremium: false
    },
    {
        id: 12,
        title: "Neapolitan",
        description: "Three classic flavors in one: chocolate, vanilla, and strawberry.",
        image: "https://images.unsplash.com/photo-1560008587-0c7c6c1534a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        prepTime: "40 mins",
        cookTime: "30 mins",
        difficulty: "Hard",
        servings: "8",
        isPremium: true
    },
    {
        id: 13,
        title: "Cookie Dough",
        description: "Vanilla ice cream with chunks of edible chocolate chip cookie dough.",
        image: "https://images.unsplash.com/photo-1541599540903-7ce2dda38a81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        prepTime: "35 mins",
        cookTime: "25 mins",
        difficulty: "Medium",
        servings: "8",
        isPremium: true
    },
    {
        id: 14,
        title: "Mango Sorbet",
        description: "Sweet and tangy mango sorbet made with fresh mango puree.",
        image: "https://images.unsplash.com/photo-1562448078-9f57ac6e0c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        prepTime: "20 mins",
        cookTime: "0 mins",
        difficulty: "Easy",
        servings: "4",
        isPremium: false
    },
    {
        id: 15,
        title: "Peanut Butter Cup",
        description: "Peanut butter ice cream with chopped peanut butter cups.",
        image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        prepTime: "25 mins",
        cookTime: "25 mins",
        difficulty: "Medium",
        servings: "6",
        isPremium: false
    },
    {
        id: 16,
        title: "Matcha Green Tea",
        description: "Creamy ice cream with premium Japanese matcha powder.",
        image: "https://images.unsplash.com/photo-1488900128323-21503983a07e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        prepTime: "20 mins",
        cookTime: "30 mins",
        difficulty: "Medium",
        servings: "6",
        isPremium: true
    },
    {
        id: 17,
        title: "Birthday Cake",
        description: "Funfetti cake batter ice cream with rainbow sprinkles.",
        image: "https://images.unsplash.com/photo-1628992682633-bf2d40cb595f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        prepTime: "25 mins",
        cookTime: "25 mins",
        difficulty: "Medium",
        servings: "8",
        isPremium: false
    },
    {
        id: 18,
        title: "Coconut Lime",
        description: "Tropical coconut ice cream with a zesty lime swirl.",
        image: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        prepTime: "30 mins",
        cookTime: "25 mins",
        difficulty: "Medium",
        servings: "6",
        isPremium: true
    },
    {
        id: 19,
        title: "Black Cherry",
        description: "Creamy cherry ice cream with dark cherry chunks.",
        image: "https://images.unsplash.com/photo-1560008587-0c7c6c1534a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        prepTime: "25 mins",
        cookTime: "30 mins",
        difficulty: "Medium",
        servings: "6",
        isPremium: false
    },
    {
        id: 20,
        title: "Honey Lavender",
        description: "Floral lavender ice cream sweetened with local honey.",
        image: "https://images.unsplash.com/photo-1541599540903-7ce2dda38a81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        prepTime: "30 mins",
        cookTime: "25 mins",
        difficulty: "Medium",
        servings: "6",
        isPremium: true
    },
    {
        id: 21,
        title: "Raspberry Ripple",
        description: "Vanilla ice cream with a tangy raspberry swirl.",
        image: "https://images.unsplash.com/photo-1562448078-9f57ac6e0c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        prepTime: "25 mins",
        cookTime: "25 mins",
        difficulty: "Medium",
        servings: "6",
        isPremium: false
    },
    {
        id: 22,
        title: "Tiramisu",
        description: "Coffee-flavored ice cream with mascarpone swirl and ladyfinger pieces.",
        image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        prepTime: "40 mins",
        cookTime: "30 mins",
        difficulty: "Hard",
        servings: "8",
        isPremium: true
    },
    {
        id: 23,
        title: "Pumpkin Spice",
        description: "Seasonal pumpkin ice cream with warm autumn spices.",
        image: "https://images.unsplash.com/photo-1488900128323-21503983a07e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        prepTime: "30 mins",
        cookTime: "30 mins",
        difficulty: "Medium",
        servings: "6",
        isPremium: false
    },
    {
        id: 24,
        title: "Butterscotch Swirl",
        description: "Creamy butterscotch ice cream with a caramelized sugar swirl.",
        image: "https://images.unsplash.com/photo-1628992682633-bf2d40cb595f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        prepTime: "35 mins",
        cookTime: "25 mins",
        difficulty: "Medium",
        servings: "6",
        isPremium: true
    },
    {
        id: 25,
        title: "Blue Moon",
        description: "Mysterious blue ice cream with a unique fruity flavor.",
        image: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        prepTime: "20 mins",
        cookTime: "25 mins",
        difficulty: "Easy",
        servings: "6",
        isPremium: false
    },
    {
        id: 26,
        title: "Chocolate Hazelnut",
        description: "Chocolate ice cream with swirls of hazelnut spread and toasted hazelnuts.",
        image: "https://images.unsplash.com/photo-1560008587-0c7c6c1534a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        prepTime: "30 mins",
        cookTime: "25 mins",
        difficulty: "Medium",
        servings: "6",
        isPremium: true
    },
    {
        id: 27,
        title: "Orange Creamsicle",
        description: "Creamy orange ice cream reminiscent of the classic popsicle.",
        image: "https://images.unsplash.com/photo-1541599540903-7ce2dda38a81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        prepTime: "25 mins",
        cookTime: "25 mins",
        difficulty: "Medium",
        servings: "6",
        isPremium: false
    },
    {
        id: 28,
        title: "Dulce de Leche",
        description: "Caramelized milk ice cream with a deep, rich flavor.",
        image: "https://images.unsplash.com/photo-1562448078-9f57ac6e0c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        prepTime: "40 mins",
        cookTime: "30 mins",
        difficulty: "Hard",
        servings: "6",
        isPremium: true
    },
    {
        id: 29,
        title: "Bubblegum",
        description: "Fun pink ice cream with the classic bubblegum flavor.",
        image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        prepTime: "20 mins",
        cookTime: "25 mins",
        difficulty: "Easy",
        servings: "6",
        isPremium: false
    },
    {
        id: 30,
        title: "Spiced Chai",
        description: "Warm chai tea ice cream with notes of cinnamon, cardamom, and ginger.",
        image: "https://images.unsplash.com/photo-1488900128323-21503983a07e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        prepTime: "30 mins",
        cookTime: "25 mins",
        difficulty: "Medium",
        servings: "6",
        isPremium: true
    }
];

// Default ingredients and instructions
const defaultIngredients = [
    "2 cups heavy cream",
    "1 cup whole milk", 
    "3/4 cup granulated sugar",
    "1 tsp vanilla extract",
    "Pinch of salt",
    "Flavor-specific ingredients"
];

const defaultInstructions = [
    "Combine all ingredients in a saucepan and heat until sugar dissolves.",
    "Allow mixture to cool completely, then refrigerate for at least 4 hours.",
    "Churn in ice cream maker according to manufacturer's instructions.",
    "Transfer to airtight container and freeze until firm, at least 4 hours."
];

// DOM elements
const recipesContainer = document.getElementById('recipesContainer');
const filterButtons = document.querySelectorAll('.filter-btn');
const searchInput = document.getElementById('searchInput');
const recipeModal = new bootstrap.Modal(document.getElementById('recipeModal'));
const premiumModal = new bootstrap.Modal(document.getElementById('premiumModal'));

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    renderRecipes(recipes);
    setupEventListeners();
});

// Render recipes to the page
function renderRecipes(recipesToRender) {
    recipesContainer.innerHTML = '';
    
    if (recipesToRender.length === 0) {
        recipesContainer.innerHTML = `
            <div class="col-12 text-center py-5">
                <i class="fas fa-ice-cream fa-4x mb-3 text-muted"></i>
                <h3>No recipes found</h3>
                <p class="text-muted">Try adjusting your search or filter</p>
            </div>
        `;
        return;
    }
    
    recipesToRender.forEach(recipe => {
        const recipeCard = createRecipeCard(recipe);
        recipesContainer.appendChild(recipeCard);
    });
}

// Create a recipe card element
function createRecipeCard(recipe) {
    const col = document.createElement('div');
    col.className = 'col-md-4 col-sm-6';
    
    const badgeClass = recipe.isPremium ? 'badge-premium' : 'badge-free';
    const badgeText = recipe.isPremium ? 'Premium' : 'Free';
    const buttonClass = recipe.isPremium ? 'recipe-btn-premium' : 'recipe-btn-free';
    const buttonText = recipe.isPremium ? 'Premium Recipe' : 'View Recipe';
    const buttonIcon = recipe.isPremium ? 'fas fa-crown' : 'fas fa-eye';
    
    col.innerHTML = `
        <div class="recipe-card">
            <div class="recipe-image">
                <img src="${recipe.image}" alt="${recipe.title}">
            </div>
            <div class="recipe-content">
                <div class="recipe-title">
                    <h4>${recipe.title}</h4>
                    <span class="recipe-badge ${badgeClass}">${badgeText}</span>
                </div>
                <p class="recipe-description">${recipe.description}</p>
                <div class="recipe-meta">
                    <span><i class="fas fa-clock"></i> ${recipe.prepTime}</span>
                    <span><i class="fas fa-utensils"></i> ${recipe.servings} servings</span>
                    <span><i class="fas fa-signal"></i> ${recipe.difficulty}</span>
                </div>
                <button class="recipe-btn ${buttonClass}" data-id="${recipe.id}">
                    <i class="${buttonIcon}"></i> ${buttonText}
                </button>
            </div>
        </div>
    `;
    
    return col;
}

// Setup event listeners
function setupEventListeners() {
    // Filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            // Filter recipes
            const filter = this.dataset.filter;
            let filteredRecipes = recipes;
            
            if (filter === 'free') {
                filteredRecipes = recipes.filter(recipe => !recipe.isPremium);
            } else if (filter === 'premium') {
                filteredRecipes = recipes.filter(recipe => recipe.isPremium);
            }
            
            renderRecipes(filteredRecipes);
        });
    });
    
    // Search input
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        const filteredRecipes = recipes.filter(recipe => 
            recipe.title.toLowerCase().includes(searchTerm) || 
            recipe.description.toLowerCase().includes(searchTerm)
        );
        
        renderRecipes(filteredRecipes);
    });
    
    // Recipe button clicks (event delegation)
    recipesContainer.addEventListener('click', function(e) {
        if (e.target.classList.contains('recipe-btn') || e.target.parentElement.classList.contains('recipe-btn')) {
            const button = e.target.classList.contains('recipe-btn') ? e.target : e.target.parentElement;
            const recipeId = parseInt(button.dataset.id);
            const recipe = recipes.find(r => r.id === recipeId);
            
            if (recipe) {
                if (recipe.isPremium) {
                    // Show premium modal
                    premiumModal.show();
                } else {
                    // Show recipe details modal
                    showRecipeModal(recipe);
                }
            }
        }
    });
    
    // Print recipe button
    document.getElementById('printRecipeBtn').addEventListener('click', function() {
        window.print();
    });
}

// Show recipe details in modal
function showRecipeModal(recipe) {
    const ingredients = recipe.ingredients || defaultIngredients;
    const instructions = recipe.instructions || defaultInstructions;
    
    const ingredientsHTML = ingredients.map(ing => `<li>${ing}</li>`).join('');
    const instructionsHTML = instructions.map((inst, index) => `<li>${inst}</li>`).join('');
    
    document.getElementById('recipeModalLabel').textContent = recipe.title;
    
    document.getElementById('modalBody').innerHTML = `
        <div class="modal-recipe-image">
            <img src="${recipe.image}" alt="${recipe.title}">
        </div>
        
        <div class="modal-recipe-details">
            <div class="detail-box">
                <i class="fas fa-clock"></i>
                <span>Prep Time</span>
                <small>${recipe.prepTime}</small>
            </div>
            <div class="detail-box">
                <i class="fas fa-fire"></i>
                <span>Cook Time</span>
                <small>${recipe.cookTime}</small>
            </div>
            <div class="detail-box">
                <i class="fas fa-signal"></i>
                <span>Difficulty</span>
                <small>${recipe.difficulty}</small>
            </div>
            <div class="detail-box">
                <i class="fas fa-utensils"></i>
                <span>Servings</span>
                <small>${recipe.servings}</small>
            </div>
        </div>
        
        <div class="modal-section">
            <h4>Ingredients</h4>
            <ul class="ingredients-list">
                ${ingredientsHTML}
            </ul>
        </div>
        
        <div class="modal-section">
            <h4>Instructions</h4>
            <ol class="instructions-list">
                ${instructionsHTML}
            </ol>
        </div>
    `;
    
    recipeModal.show();
}