const menuToggle = document.querySelector('.span-icon-btn');
const secNav = document.getElementById('second-nav')
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

   
   menuToggle.addEventListener('click', function(e) {
       e.preventDefault()
      const isActive = menuToggle.classList.toggle('active');
       
       if(isActive){
           menuToggle.style.gap = '0.7rem';
           
       }else{
           menuToggle.style.gap = '';
       }
       secNav.classList.toggle('open', isActive);
       
   });

const tumb = document.querySelectorAll('.product-tumb')

tumb.forEach((blog, index) => {
   blog.style.background = `url(./assets-services/blog${index + 1}.png)`
    blog.style.backgroundSize = "cover";
    blog.style.backgroundPosition = "center";
})


document.querySelectorAll('.blog-box').forEach(card => {
    card.addEventListener('click', () => {
        const productId = card.getAttribute('data-id');
        
        // Link corect la productPage
        window.location.href = `../blog/blogPage/blog.html?id=${productId}`;
    });
});



// JavaScript - fade in/out la scroll
const observerOptions = {
  threshold: 0.3, // Când 30% din element e vizibil
  rootMargin: '0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Element intră în viewport
      entry.target.classList.add('visible');
      entry.target.classList.remove('hidden');
    } else {
      // Element iese din viewport
      entry.target.classList.add('hidden');
      entry.target.classList.remove('visible');
    }
  });
}, observerOptions);

// Observă toate elementele cu clasa .services-boxes
document.querySelectorAll('.services-boxes').forEach(box => {
  observer.observe(box);
});