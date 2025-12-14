
const tumb = document.querySelectorAll('.product-tumb')

tumb.forEach((card, index) => {
   card.style.background = `url(./assets-magazin/img/img${index+1}.png)`
    card.style.backgroundSize = "cover";
    card.style.backgroundPosition = "center";
})
  

document.querySelectorAll('.product-card a').forEach(link => {
    link.addEventListener('click', event => event.preventDefault());
});



document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', () => {
        const productId = card.getAttribute('data-id');
        
        // Link corect la productPage
        window.location.href = `./productPage/index.html?id=${productId}`;
    });
});



        