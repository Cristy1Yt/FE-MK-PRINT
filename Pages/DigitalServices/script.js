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

   const servicesData = {
    web:{
        subServicii:['Landing & prezentare' ,  'E-commerce' , 'Optimizare viteză & UX' , ' Mentenanță'],
        textP:'Dezvoltăm platforme digitale , construite pe arhitecturi moderne, optimizate , securizate și scalabile pe termen lung.',
        textB: 'Website-urile noastre sunt concepute cu atenție la detalii și orientare strategică,  un instrument activ de creștere pentru compania ta.',   
    },
     ux:{
        subServicii:['Wireframes' ,  'Design' , 'Optimizare UI' , 'Identități vizuale'],
        textP:'Proiectăm experiențe digitale intuitive care simplifică interacțiunea utilizatorului și cresc rata de conversie prin structură clară și design strategic.',
        textB: 'Designul nostru nu este doar estetic, ci funcțional și orientat spre rezultate, ajutând brandul tău să creeze încredere, să îmbunătățească experiența utilizatorilor și să transforme vizitele în oportunități reale.',   
    },
     ads:{
        subServicii:['Creatives social media' ,  'Vizualuri' , ' Vizuale social media' , 'Bannere animate'],
        textP:'Implementăm campanii de publicitate digitală bazate pe analiză de date și targetare avansată, optimizate pentru performanță și rentabilitate.',
        textB: 'Publicitatea noastră digitală este construită strategic pentru a genera vizibilitate relevantă și pentru a aduce clienți noi în compania ta, contribuind activ la creșterea veniturilor.',   
    },  
     branding:{ 
        subServicii:['Logo design' ,  'Ghiduri vizuale' , 'Rebranding' , 'Sisteme vizuale '],
        textP:'Definim și consolidăm identitatea digitală a brandului prin strategie, poziționare și coerență vizuală pe toate canalele online.',
        textB: 'Brandingul digital bine construit îți oferă claritate, diferențiere și autoritate pe piață, transformând percepția publicului într-un avantaj competitiv pentru compania ta.',   
    },
  
}

const serviceLi = document.querySelectorAll('.service-li')
const serviceUl = document.querySelector('.service-ul')
const descUl = document.querySelector('.desc-ul')
const descP = document.querySelector('.desc-p')
const descB = document.querySelector('.desc-b')
const descriptionContainer = document.querySelector('.description-service')
serviceLi.forEach(item => {
     item.addEventListener('click' , () => {
        const id = item.getAttribute('data-id');
        const data = servicesData[id];
       

        if(data){
           descriptionContainer.classList.remove('animate-fade');
            descUl.innerHTML = data.subServicii.map(feature => `<li class="desc-li">${feature}</li>`).join('');


            void descriptionContainer.offsetWidth;

            descP.textContent = data.textP;
            descB.textContent = data.textB

          descriptionContainer.classList.add('animate-fade');
             
        }


     })
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

const reviews  = {

  birotehmk : {
    firm:'BirotehMK',
    review: ' ,,Echipa MKPrint a dat dovadă de un profesionalism rar în proiectul. O echipă care a luat rapid în frâu toate complexitățile tehnice,transformându-le în soluții simple și eficiente.Un partener de încredere !"'
  },
   Condimental: {
    firm:'Condimental',
    review: '„Parteneriatul cu MK Print ne-a impresionat prin calitatea execuției și promptitudine. Soluții livrate înainte de deadline , respectând standardele noastre de brand . Recomandăm cu încredere !”'
  },
    FleursDor: {
    firm:' Fleurs d’Or',
    review: '„Branding și design web realizate de MK Print au fost impecabile ca aspect și rezistență. Colaborarea a fost ușoară și eficientă, iar echipa a fost deschisă la propuneri și ajustări.”'
  }, 

    tavernaVrânceană: {
    firm:' Taverna Vrânceană',
    review: 'Am apelat la MK Print pentru bannere animate. Rezultatul a fost peste așteptări — culori vibrante, materiale de calitate și un service orientat spre client. Recomand pentru orice afacere ce dorește să se promoveze eficient!'
  }, 

   goldenWine:{
    firm:'  Golden Wine',
    review:'„Recomandăm MK Print pentru calitatea ghidurilor vizuale. De la consultanță la livrare, tot procesul a fost bine organizat și orientat spre satisfacția clientului. Produsele finale reflectă angajamentul lor pentru excelență.”'
   }

}


const arowLeft = document.querySelector('.arrow-left')
const arowRight = document.querySelector('.arrow-right')
const reviewContent = document.querySelector('.result-content')

const  reviewsArray = Object.values(reviews);


let currentIndex = 0 ;

function displayReviews(index){
    const brandName  = document.getElementById('brand')
     const reviewText  = document.getElementById('review')

     brandName.textContent = reviewsArray[index].firm
     reviewText .textContent = reviewsArray[index].review
}


function goToPrevious(){
    currentIndex -- ; 
     

    if(currentIndex < 0){
       currentIndex = reviewsArray.length - 1;
    }

    displayReviews(currentIndex)
}


function goToNext(){
    currentIndex++;
    if(currentIndex  >= reviewsArray.length ){
       
        currentIndex = 0;
    }

    displayReviews(currentIndex)
}

arowLeft.addEventListener('click' , goToPrevious)
arowRight.addEventListener('click' , goToNext)


displayReviews(currentIndex);