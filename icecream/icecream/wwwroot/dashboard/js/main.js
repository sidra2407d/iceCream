// Main JavaScript file for common functionality

document.addEventListener('DOMContentLoaded', function() {
    // Common initialization for all pages
    
    // Logout button functionality
    const logoutBtn = document.querySelector('.logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function() {
            if (confirm('Are you sure you want to logout?')) {
                showNotification('Logged out successfully! Redirecting...', 'info');
                // Redirect to login page after 2 seconds
                setTimeout(() => {
                    window.location.href = 'login.html';
                }, 2000);
            }
        });
    }

    // Common button handlers
    setupCommonButtons();
    
    // Setup form submissions
    setupForms();
});

// Show notification function
function showNotification(message, type) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    
    // Create ice cream cone for notification
    const iceCreamHTML = `
        <div class="icecream-cone" style="width: 30px; height: 36px;">
            <div class="scoop" style="width: 24px; height: 21px; background: linear-gradient(135deg, ${type === 'success' ? '#27ae60' : (type === 'info' ? '#ff66b2' : '#ff5252')} 0%, ${type === 'success' ? '#2ecc71' : (type === 'info' ? '#ff3385' : '#ff0000')} 100%);"></div>
            <div class="cone" style="width: 17px; height: 18px;"></div>
        </div>`;
    
    notification.innerHTML = `
        <div class="notification-content">
            ${iceCreamHTML}
            <span>${message}</span>
        </div>
        <button class="notification-close"><i class="fas fa-times"></i></button>
    `;
    
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: white;
        color: var(--primary);
        padding: 15px 20px;
        border-radius: 10px;
        box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 15px;
        z-index: 10000;
        animation: slideIn 0.3s ease;
        max-width: 400px;
        border-left: 4px solid ${type === 'success' ? '#27ae60' : (type === 'info' ? '#ff66b2' : '#ff5252')};
    `;
    
    document.body.appendChild(notification);
    
    // Add animation styles if not already present
    if (!document.querySelector('#notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            @keyframes slideIn {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
            @keyframes slideOut {
                from { transform: translateX(0); opacity: 1; }
                to { transform: translateX(100%); opacity: 0; }
            }
        `;
        document.head.appendChild(style);
    }
    
    // Close button
    notification.querySelector('.notification-close').addEventListener('click', () => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    });
    
    // Auto remove
    setTimeout(() => {
        if (notification.parentElement) {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// Setup common buttons
function setupCommonButtons() {
    // Delete buttons
    const deleteButtons = document.querySelectorAll('.delete-btn');
    deleteButtons.forEach(button => {
        button.addEventListener('click', function() {
            const row = this.closest('tr');
            const item = row.cells[1]?.textContent || 'Item';
            
            if (confirm(`Are you sure you want to delete: ${item}?`)) {
                row.style.opacity = '0.5';
                setTimeout(() => {
                    row.remove();
                    showNotification('Item deleted successfully!', 'success');
                }, 300);
            }
        });
    });

    // Edit buttons
    const editButtons = document.querySelectorAll('.edit-btn');
    editButtons.forEach(button => {
        button.addEventListener('click', function() {
            const row = this.closest('tr');
            const item = row.cells[1]?.textContent || 'Item';
            showNotification(`Editing: ${item}`, 'info');
        });
    });

    // View buttons
    const viewButtons = document.querySelectorAll('.view-btn');
    viewButtons.forEach(button => {
        button.addEventListener('click', function() {
            const row = this.closest('tr');
            const itemId = row.cells[0]?.textContent || 'Item';
            showNotification(`Viewing details for: ${itemId}`, 'info');
        });
    });

    // Update buttons
    const updateButtons = document.querySelectorAll('.update-btn');
    updateButtons.forEach(button => {
        button.addEventListener('click', function() {
            const row = this.closest('tr');
            const statusCell = row.querySelector('.status');
            
            if (statusCell) {
                if (statusCell.classList.contains('pending')) {
                    statusCell.textContent = 'Processing';
                    statusCell.className = 'status processing';
                } else if (statusCell.classList.contains('processing')) {
                    statusCell.textContent = 'Sent';
                    statusCell.className = 'status sent';
                } else if (statusCell.classList.contains('sent')) {
                    statusCell.textContent = 'Completed';
                    statusCell.className = 'status completed';
                } else {
                    statusCell.textContent = 'Pending';
                    statusCell.className = 'status pending';
                }
                
                showNotification('Status updated successfully!', 'success');
            }
        });
    });
}

// Setup form submissions
function setupForms() {
    const recipeForm = document.getElementById('recipeForm');
    if (recipeForm) {
        recipeForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const recipeName = document.getElementById('recipeName').value;
            showNotification(`Recipe "${recipeName}" added successfully!`, 'success');
            recipeForm.reset();
        });
    }

    // Save settings button
    const saveSettingsBtn = document.querySelector('#settings .page-actions .primary-btn');
    if (saveSettingsBtn) {
        saveSettingsBtn.addEventListener('click', function() {
            showNotification('Settings saved successfully!', 'success');
        });
    }
}

// Mark active page in sidebar
function markActivePage(pageName) {
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        if (href && href.includes(pageName)) {
            link.classList.add('active');
        }
    });
}

// Export functions for use in other files
window.CommonFunctions = {
    showNotification,
    setupCommonButtons,
    setupForms,
    markActivePage
};