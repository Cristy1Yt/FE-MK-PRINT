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

     

let blogContent = [
    {
        id:0,
        title:'Psihologia culorilor în marketing',
        date:'6 Decembrie 2025'
    },
     {
        id:1,
        title:'Cum alegi identitatea vizuală',
        date:'12 Decembrie 2025'
    },
     {
        id:2,
        title:'Cum influențează designul comportamentul utilizatorilor ',
        date:'20 Decembrie 2025'
    },
     {
        id:3,
        title:'Rolul tipăriturilor în promovarea unei afaceri ',
        date:'13 Decembrie 2025'
    },
     {
        id:4,
        title:'Cum contribuie identitatea vizuală la recunoașterea unui brand',
        date:'16 Decembrie 2025'
    },
     {
        id:5,
        title:'Avantajele unei combinații eficiente între web design și print',
        date:'19 Decembrie 2025'
    },
     {
        id:6,
        title:'Cum pregătești corect un fișier pentru imprimare ',
        date:'21 Decembrie 2025'
    },
     {
        id:7,
        title:'De ce este important un logo profesionist',
        date:'22 Decembrie 2025'
    },
     {
        id:8,
        title:'Diferențele dintre designul digital și designul pentru tipar ',
        date:'26 Decembrie 2025'
    },
     {
        id:9,
        title:'Materialele premium în tipărire – cum influențează calitatea percepută',
        date:'28 Decembrie 2025'
    }, {
        id:10,
        title:'Psihologia formelor în design ',
        date:'28 Decembrie 2025'
    },
]


const container = document.getElementById('blog-container')

blogContent.forEach(post =>{
  const box = document.createElement('div')
  box.classList.add('blog-box')

  box.innerHTML = `
    <div class="blog-box">
               <div class="product-tumb">
		          </div>
		               <div class="blog-details">
			             <span class="blog-title">${post.title}</span>
			              <div class="producer">
                      <div class="user-image"><img src="blog-assets/img/logo.jpeg" alt="img"></div>
                      <div class="user-span"><span> MK PRINT <br>Marketing team</span> </div>
                    </div>

                    <span class="date-span">${post.date}</span>
		           </div>
               </div>
  `;

  

   box.addEventListener('click', () => {
    window.location.href = `./blogPage/blog.html?id=${post.id}`;
  });

  container.appendChild(box);
})

 
const tumb = document.querySelectorAll('.product-tumb')

tumb.forEach((card, index) => {
   card.style.background = `url(blog-assets/img/blog${index+1}.png)`
    card.style.backgroundSize = "cover";
    card.style.backgroundPosition = "center";
})
