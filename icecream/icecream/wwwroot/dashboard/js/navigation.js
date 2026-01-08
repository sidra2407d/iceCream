// Navigation handling for multi-page application

document.addEventListener('DOMContentLoaded', function() {
    // Set current page as active in sidebar
    setActiveNavLink();
    
    // Handle sidebar toggle on mobile
    setupSidebarToggle();
    
    // Handle responsive sidebar
    setupResponsiveSidebar();
});

function setActiveNavLink() {
    const currentPage = getCurrentPage();
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        
        if (href && (href === currentPage || href.includes(currentPage))) {
            link.classList.add('active');
        }
    });
}

function getCurrentPage() {
    const path = window.location.pathname;
    const page = path.split('/').pop();
    
    if (page === '' || page === 'index.html' || page.includes('dashboard')) {
        return 'index.html';
    }
    
    return page;
}

function setupSidebarToggle() {
    const sidebar = document.querySelector('.sidebar');
    const mainContent = document.querySelector('.main-content');
    
    // Only apply on mobile/small screens
    if (window.innerWidth <= 992) {
        sidebar.style.width = '70px';
        mainContent.style.marginLeft = '70px';
        
        sidebar.addEventListener('mouseenter', () => {
            sidebar.style.width = '280px';
            mainContent.style.marginLeft = '280px';
        });
        
        sidebar.addEventListener('mouseleave', () => {
            sidebar.style.width = '70px';
            mainContent.style.marginLeft = '70px';
        });
    }
}

function setupResponsiveSidebar() {
    window.addEventListener('resize', () => {
        const sidebar = document.querySelector('.sidebar');
        const mainContent = document.querySelector('.main-content');
        
        if (window.innerWidth <= 992) {
            sidebar.style.width = '70px';
            mainContent.style.marginLeft = '70px';
        } else {
            sidebar.style.width = '280px';
            mainContent.style.marginLeft = '280px';
        }
    });
}