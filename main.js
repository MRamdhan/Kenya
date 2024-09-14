// Toggle the burger menu on and off
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links li');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close the burger menu after clicking a link (for mobile)
navItems.forEach(item => {
    item.addEventListener('click', () => {
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
        }
    });
});

// Show the "Jump to Top" button when scrolling down
window.addEventListener("scroll", function() {
    const jumpToTop = document.getElementById("jumpToTop");
    if (window.pageYOffset > 200) {
        jumpToTop.classList.add("show");
    } else {
        jumpToTop.classList.remove("show");
    }
});

// Smooth scroll back to top
const jumpToTop = document.getElementById("jumpToTop");
jumpToTop.addEventListener("click", function(event) {
    event.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});