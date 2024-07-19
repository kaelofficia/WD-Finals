document.addEventListener('DOMContentLoaded', function () {
    const navToggle = document.querySelector('.nav-toggle');
    const navClose = document.querySelector('.nav-close');
    const navMenu = document.querySelector('.nav-menu');

    navToggle.addEventListener('click', function () {
        navMenu.classList.toggle('active');
        navClose.style.display = 'flex'; 
    });

    navClose.addEventListener('click', function () {
        navMenu.classList.toggle('active');
        navClose.style.display = 'none'; 
    });
});
