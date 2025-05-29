// Function to load and inject the shared navigation
async function loadSharedNavigation() {
    try {
        const response = await fetch('shared-nav.html');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const html = await response.text();
        
        // Find the nav-container element
        const navContainer = document.querySelector('#nav-container');
        if (navContainer) {
            // Replace the nav container's content with the shared navigation
            navContainer.innerHTML = html;
            
            // Initialize mobile menu functionality
            initializeMobileMenu();
            
            // Add toggleMobileMenu function to window object so it's globally accessible
            window.toggleMobileMenu = function() {
                const menu = document.getElementById('mobileMenu');
                if (menu) {
                    if (menu.classList.contains('hidden')) {
                        menu.classList.remove('hidden');
                        // Force a reflow
                        menu.offsetHeight;
                        menu.classList.add('show');
                        document.body.style.overflow = 'hidden';
                    } else {
                        menu.classList.remove('show');
                        document.body.style.overflow = '';
                        setTimeout(() => {
                            menu.classList.add('hidden');
                        }, 300);
                    }
                }
            };
        } else {
            console.error('Navigation container not found');
        }
    } catch (error) {
        console.error('Error loading shared navigation:', error);
    }
}

// Function to initialize mobile menu functionality
function initializeMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileLinks = document.querySelectorAll('#mobileMenu a');
    
    // Add click handlers to mobile menu links
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                toggleMobileMenu();
            }
        });
    });
    
    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
                // Close mobile menu if open
                if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                    toggleMobileMenu();
                }
            }
        });
    });
}

// Load the shared navigation when the DOM is ready
document.addEventListener('DOMContentLoaded', loadSharedNavigation); 