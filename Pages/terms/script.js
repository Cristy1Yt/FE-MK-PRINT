
const topText = document.querySelector('.span-h1-hero-1');
const bottomText = document.querySelector('.span-h1-hero-2');
const cards = document.querySelectorAll('.card') 
// const yearEl = document.querySelector(".year");
// const currentYear = new Date().getFullYear();
// yearEl.textContent = currentYear;

   
document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector('.span-icon-btn');
    const secNav = document.getElementById('second-nav');
 
    if(menuToggle && secNav){
        menuToggle.addEventListener('click', function(e) {
            e.preventDefault();
            const isActive = menuToggle.classList.toggle('active');
            menuToggle.style.gap = isActive ? '0.7rem' : '';
            secNav.classList.toggle('open', isActive);
        });
    }
});


