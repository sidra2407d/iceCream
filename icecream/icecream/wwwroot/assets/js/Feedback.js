// Feedback Form Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS animations
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100
    });

    // Character counter for feedback message
    const messageTextarea = document.getElementById('message');
    const charCount = document.getElementById('charCount');
    
    if (messageTextarea && charCount) {
        messageTextarea.addEventListener('input', function() {
            const length = this.value.length;
            charCount.textContent = length;
            
            if (length > 450) {
                charCount.style.color = '#FF6B8B';
            } else {
                charCount.style.color = '#6c757d';
            }
        });
    }

    // Star rating interaction
    const starInputs = document.querySelectorAll('.star-rating input');
    const starLabels = document.querySelectorAll('.star-rating label');
    
    starLabels.forEach(label => {
        label.addEventListener('mouseenter', function() {
            const rating = this.getAttribute('for').replace('star', '');
            highlightStars(rating);
        });
        
        label.addEventListener('mouseleave', function() {
            const checkedInput = document.querySelector('.star-rating input:checked');
            if (checkedInput) {
                highlightStars(checkedInput.value);
            } else {
                resetStars();
            }
        });
    });
    
    starInputs.forEach(input => {
        input.addEventListener('change', function() {
            highlightStars(this.value);
        });
    });
    
    function highlightStars(rating) {
        starLabels.forEach(label => {
            const starValue = label.getAttribute('for').replace('star', '');
            if (starValue <= rating) {
                label.style.color = '#FFD700';
            } else {
                label.style.color = '#ddd';
            }
        });
    }
    
    function resetStars() {
        starLabels.forEach(label => {
            label.style.color = '#ddd';
        });
    }

    // Form submission
    const feedbackForm = document.getElementById('feedbackForm');
    const submitBtn = document.querySelector('.feedback-btn');
    const btnText = submitBtn.querySelector('.btn-text');
    const btnLoader = submitBtn.querySelector('.btn-loader');
    
    if (feedbackForm) {
        feedbackForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Show loading state
            btnText.classList.add('d-none');
            btnLoader.classList.remove('d-none');
            submitBtn.disabled = true;
            
            // Simulate form submission
            setTimeout(() => {
                // Success message
                showNotification('Thank you for your feedback! We appreciate your input.', 'success');
                
                // Reset form
                feedbackForm.reset();
                resetStars();
                charCount.textContent = '0';
                charCount.style.color = '#6c757d';
                
                // Reset button
                btnText.classList.remove('d-none');
                btnLoader.classList.add('d-none');
                submitBtn.disabled = false;
            }, 2000);
        });
    }

    // Notification function
    function showNotification(message, type) {
        // Remove existing notifications
        const existingNotifications = document.querySelectorAll('.feedback-notification');
        existingNotifications.forEach(notification => notification.remove());
        
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `feedback-notification alert alert-${type === 'success' ? 'success' : 'danger'}`;
        notification.innerHTML = `
            <div class="d-flex align-items-center">
                <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'} me-3"></i>
                <div>${message}</div>
                <button type="button" class="btn-close ms-auto" onclick="this.parentElement.parentElement.remove()"></button>
            </div>
        `;
        
        // Style notification
        notification.style.position = 'fixed';
        notification.style.top = '20px';
        notification.style.right = '20px';
        notification.style.zIndex = '9999';
        notification.style.minWidth = '300px';
        notification.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
        notification.style.borderRadius = '10px';
        notification.style.border = 'none';
        
        // Add to document
        document.body.appendChild(notification);
        
        // Auto-remove after 5 seconds
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 5000);
    }

    // Make feedback categories more interactive
    const feedbackTypeLabels = document.querySelectorAll('.feedback-categories .form-check-label');
    feedbackTypeLabels.forEach(label => {
        label.addEventListener('click', function() {
            feedbackTypeLabels.forEach(l => {
                l.style.transform = 'scale(1)';
                l.style.boxShadow = 'none';
            });
            
            this.style.transform = 'scale(1.05)';
            this.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
        });
    });

    // Make flavor checkboxes more interactive
    const flavorCheckboxes = document.querySelectorAll('.flavor-checkboxes .form-check-label');
    flavorCheckboxes.forEach(label => {
        const checkbox = label.previousElementSibling;
        
        label.addEventListener('click', function() {
            if (checkbox.checked) {
                this.style.transform = 'scale(1.05)';
                this.style.boxShadow = '0 5px 15px rgba(255, 209, 102, 0.2)';
            } else {
                this.style.transform = 'scale(1)';
                this.style.boxShadow = 'none';
            }
        });
    });

    // Initialize tooltips
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
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