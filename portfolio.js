document.addEventListener('DOMContentLoaded', () => {
    
    const hamburger = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');
    
    // Function to toggle the menu open/closed
    const toggleMenu = () => {
        // Toggles the 'active' class on the navigation links container
        navLinks.classList.toggle('active');
        // Optional: Toggle an 'active' class on the hamburger icon itself (for animations)
        hamburger.classList.toggle('active'); 
        // Optional: Prevent background scrolling when menu is open
        document.body.classList.toggle('menu-open'); 
    };

    // 1. Add click listener to the hamburger menu
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', toggleMenu);
    }
    

    // 2. Close the menu when a link is clicked (for single-page navigation)
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            // Only close if the menu is currently open
            if (navLinks.classList.contains('active')) {
                toggleMenu();
            }
        });
    });
});