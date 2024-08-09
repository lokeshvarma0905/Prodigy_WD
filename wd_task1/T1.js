document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.getElementById('navbar');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) { // Adjust the scroll threshold as needed
            navbar.style.backgroundColor = '#222';
            navbar.style.color = '#ddd';
        } else {
            navbar.style.backgroundColor = '#333';
            navbar.style.color = '#fff';
        }
    });
});