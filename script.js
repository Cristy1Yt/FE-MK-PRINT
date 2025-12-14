
const topText = document.querySelector('.span-h1-hero-1');
const bottomText = document.querySelector('.span-h1-hero-2');
const cards = document.querySelectorAll('.card')
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

   
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

   

        


window.addEventListener('scroll', () => {
  const scroll = window.scrollY;
   
   topText.style.transform = `translateX(${scroll * 2}px)`;    // merge spre dreapta
   bottomText.style.transform = `translateX(${-scroll * 2}px)`; // merge spre stânga
   
});


  let scrollProgress = 0

   let directions =[
    {direction:2,speed:0.08,maxRotation:1.5},
    {direction:2,speed:0.08,maxRotation:1.2},
    {direction:-2,speed:0.08,maxRotation:1.3},
    {direction:2,speed:0.08,maxRotation:1.7},
    {direction:-1,speed:0.08,maxRotation:1.4},
]

 function initRotation(){


window.addEventListener('scroll' , () =>{
  const scrollHeight = document.documentElement.scrollHeight - window.scrollHeight;
  scrollProgress = (window.scrollY - window.innerHeight)*10;

  cards.forEach((card,index) =>{
    const config = directions[index];
    const rotation = (scrollProgress / 100) * config.maxRotation * config.direction * config.speed; 
    card.style.transform = `rotateZ(${rotation}deg) rotateX(${rotation * 0.3}deg) rotateY(${rotation * 0.2}deg)`;
  })



})
      


window.addEventListener('scroll' , () =>{
  const scrollHeight = document.documentElement.scrollHeight - window.scrollHeight;
  scrollProgress = (window.scrollY - window.innerHeight)*10;

  cards.forEach((card,index) =>{
    const config = directions[index];
    const rotation = (scrollProgress / 100) * config.maxRotation * config.direction * config.speed; 
    card.style.transform = `rotateZ(${rotation}deg) rotateX(${rotation * 0.3}deg) rotateY(${rotation * 0.2}deg)`;
  })



})
gsap.registerPlugin(ScrollTrigger);



const text = document.getElementById("text");

// Start position: top-right
gsap.set(text, {
  x: window.innerWidth * 1.2,
  y: -window.innerHeight * 0.6,
  opacity: 1,
  rotation: -1,
});

gsap.to(text, {
  x: -window.innerWidth * 1.2,
  y: window.innerHeight * 2,
  opacity: 1,
  rotation: -1,
  ease: "none",
  scrollTrigger: {
    trigger: "#services",
    start: "top center",  // 👈 Schimbat în "top center" - pornește când #services ajunge la centrul ecranului
    end: "bottom center", // 👈 Se termină când #services iese din ecran
    scrub: 1,
    pin: false,
    invalidateOnRefresh: true,
    // debug: true
  }
});

   
};

initRotation()


 
{
cards.forEach(card => {
  const backText = card.querySelector('.back-card-text'); 
  const icon = document.querySelector('.icon-back-card')
  card.addEventListener("mouseenter", () => {
    backText.style.opacity = "1"
     backText.style.transition = "opacity 1s ease";

  });

  card.addEventListener("mouseleave", () => {
    backText.style.opacity ="0"
    backText.style.transition = "opacity 0.3s ease";
  
 
  });
});
}
{
const tumb = document.querySelectorAll('.product-tumb')

tumb.forEach((blog, index) => {
   blog.style.background = `url(./assets/img/blog${index + 1}.png)`
    blog.style.backgroundSize = "cover";
    blog.style.backgroundPosition = "center";
})
}

const card = document.querySelector('.card-1');
let scrollY = 0;

window.addEventListener('scroll', () => {
  scrollY = window.scrollY;
  requestAnimationFrame(() => {
    card.style.backgroundPosition = `center ${scrollY * 0.5}px`;
  });
});



document.querySelectorAll('.blog-box').forEach(card => {
    card.addEventListener('click', () => {
        const productId = card.getAttribute('data-id');
        
        // Link corect la productPage
        window.location.href = `Pages/blog/blogPage/blog.html?id=${productId}`;
    });
});