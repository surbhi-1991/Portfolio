// Smooth Scrolling
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });

        // Close the nav menu if it's open (for mobile)
        if (window.innerWidth < 768) {
            document.querySelector('.nav-links').classList.remove('active');
        }
    });
});

// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Optional: Change Navbar Style on Scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('nav');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = '#ff3b30'; // Darker Red-Orange
    } else {
        navbar.style.backgroundColor = '#ff5e57'; // Original Red-Orange
    }
});
