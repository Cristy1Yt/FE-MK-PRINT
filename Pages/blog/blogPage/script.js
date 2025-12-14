const menuToggle = document.querySelector('.span-icon-btn');
const secNav = document.getElementById('second-nav')

const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear
   
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


const articles = [
    {
  id: 0,
  title: "Psihologia culorilor în marketing: ce culoare alegi pentru brandul tău",
  sections: [
    {
      subtitle: "De ce contează culorile în marketing",
      content: "Culorile influențează emoțiile, percepțiile și deciziile de cumpărare mai mult decât ne dăm seama. În marketing, culoarea este unul dintre primele elemente observate și poate determina dacă un brand este perceput ca fiind profesionist, prietenos, premium sau dinamic."
    },
    {
      subtitle: "Albastru – încredere și profesionalism",
      content: "Albastrul este asociat cu siguranța, stabilitatea și seriozitatea. Este frecvent utilizat de companii din domeniul tehnologiei, financiar și corporate deoarece inspiră încredere și calm."
    },
    {
      subtitle: "Roșu – energie și acțiune",
      content: "Roșul este o culoare puternică, care atrage atenția imediat. Este asociată cu pasiunea, energia și urgența, fiind ideală pentru promoții, call-to-action-uri și branduri care vor să transmită dinamism."
    },
    {
      subtitle: "Negru, alb și gri – eleganță și echilibru",
      content: "Negrul transmite lux, putere și rafinament, în timp ce albul sugerează simplitate și claritate. Griul oferă echilibru și neutralitate. Împreună, aceste culori sunt des întâlnite în brandingul premium și minimal."
    },
    {
      subtitle: "Cum alegi culoarea potrivită pentru brand",
      content: "Alegerea culorii trebuie să țină cont de publicul țintă, domeniul de activitate și valorile brandului. Important este ca paleta cromatică să fie consecventă pe website, materiale tipărite și social media pentru a crea recunoaștere și coerență."
    }
  ]
},
  {
    id: 1,
    title: "Cum alegi identitatea vizuală potrivită pentru brandul tău în mediul digital și tipărit",
    sections: [
      {
        subtitle: "Prima impresie contează",
        content: "Într-o lume în care prima impresie contează mai mult ca oricând, identitatea vizuală a unui brand devine un element esențial pentru succes. Fie că vorbim despre un website modern sau materiale tipărite, imaginea pe care o prezinți influențează direct modul în care ești perceput de public. Designul web și materialele de imprimare trebuie să lucreze împreună pentru a transmite aceeași poveste, același ton și aceeași energie. O identitate vizuală bine aleasă îți poate transforma complet brandul, făcându-l vizibil, memorabil și ușor de recunoscut atât online, cât și offline."
      },
      {
        subtitle: "Culorile – fundația oricărei identități vizuale",
        content: "În design web și în tipărire, culorile sunt primul element remarcat. Ele stabilesc atmosfera și tonul brandului. Albastrul transmite profesionalism și încredere, roșul sugerează energie și dinamism, negrul și griul exprimă eleganță, verdele echilibru, iar portocaliul și galbenul creativitate și optimism. Indiferent de culorile alese, este important ca ele să fie folosite consecvent în toate materialele pentru a crea o imagine unitară."
      },
      {
        subtitle: "O paletă vizuală simplă și eficientă",
        content: "Pentru un brand profesionist este esențială o paletă cromatică bine definită. Specialiștii recomandă folosirea unei culori principale, a uneia secundare și a unei culori de accent. Utilizarea acelorași culori pe site, broșuri, afișe sau cărți de vizită creează coerență și recunoaștere. Simplitatea este cheia unui aspect modern și curat."
      },
      {
        subtitle: "Alege fonturi care îți completează imaginea",
        content: "Tipografia are un impact major atât pe ecran, cât și pe hârtie. Fonturile trebuie să fie lizibile, estetice și potrivite stilului brandului. Fonturile sans-serif sunt ideale pentru website-uri, iar fonturile serif funcționează excelent în materiale tipărite sau branduri premium. Este recomandat să folosești două fonturi principale: unul pentru titluri și unul pentru paragrafe."
      },
      {
        subtitle: "Design aerisit și structurat",
        content: "Un design bun nu înseamnă încărcare, ci organizare. Spațiile clare între elemente, structura ordonată și evitarea elementelor în exces ajută utilizatorul să înțeleagă rapid mesajul. Un design aerisit oferă claritate, impact și o experiență vizuală plăcută."
      }
    ]
  },

  {
    id: 2,
    title: "Cum influențează designul web comportamentul utilizatorilor",
    sections: [
      {
        subtitle: "Prima impresie contează",
        content: "Designul web determină în primele secunde dacă un utilizator rămâne pe site sau îl părăsește. Un aspect modern, profesional și curat inspiră încredere și transmite imediat că afacerea este serioasă și bine organizată."
      },
      {
        subtitle: "Navigare intuitivă și structură clară",
        content: "Un site bine structurat îi permite vizitatorului să găsească rapid informațiile de care are nevoie. Meniurile simple, secțiunile bine delimitate și paginile ordonate oferă o experiență confortabilă și îl mențin mai mult timp pe site."
      },
      {
        subtitle: "Elemente vizuale care ghidează utilizatorul",
        content: "Imaginile de calitate, titlurile bine plasate, spațiile albe și butoanele vizibile creează un flux natural al privirii și îl conduc pe utilizator spre informațiile importante."
      },
      {
        subtitle: "Performanță și adaptare mobilă",
        content: "Viteza site-ului influențează direct comportamentul vizitatorilor. Un site rapid și responsive menține atenția utilizatorilor și oferă o experiență uniformă pe toate dispozitivele."
      }
    ]
  },

  {
    id: 3,
    title: "Rolul tipăriturilor în promovarea unei afaceri",
    sections: [
      {
        subtitle: "Importanța materialelor tipărite",
        content: "Chiar dacă mediul digital este dominant, materialele tipărite rămân un instrument esențial în promovare. Ele oferă o prezență fizică, tangibilă, care conferă credibilitate și profesionalism."
      },
      {
        subtitle: "Tipuri de materiale și impactul lor",
        content: "Afișele oferă vizibilitate puternică, pliantele permit distribuirea rapidă a informațiilor, cărțile de vizită creează prima impresie profesională, iar bannerele asigură impact vizual la scară mare."
      },
      {
        subtitle: "Beneficii în marketingul offline",
        content: "Materialele tipărite sunt memorabile, ușor de păstrat și transmit seriozitate. În combinație cu promovarea digitală, ele creează o strategie completă și eficientă."
      }
    ]
  },

  {
    id: 4,
    title: "Cum contribuie identitatea vizuală la recunoașterea unui brand",
    sections: [
      {
        subtitle: "Forța primei impresii vizuale",
        content: "Identitatea vizuală este primul element prin care publicul interacționează cu un brand. O imagine coerentă permite recunoașterea rapidă și memorabilitatea."
      },
      {
        subtitle: "Logo-ul și tipografia",
        content: "Logo-ul este simbolul central al brandului, iar fonturile reprezintă vocea sa vizuală. Folosirea consecventă a acestora contribuie la consolidarea identității."
      },
      {
        subtitle: "Coerență și memorabilitate",
        content: "Repetarea strategică a elementelor vizuale în toate materialele ajută brandul să devină familiar și de încredere."
      }
    ]
  },

  {
    id: 5,
    title: "Avantajele unei combinații eficiente între web design și print",
    sections: [
      {
        subtitle: "Prezență online și offline",
        content: "Combinarea web designului cu materialele tipărite asigură o vizibilitate completă și o experiență coerentă pentru public."
      },
      {
        subtitle: "Impact dublu",
        content: "Web-ul oferă acces rapid la informații, iar printul creează o impresie fizică de durată. Împreună, ele cresc eficiența comunicării."
      }
    ]
  },

  {
    id: 6,
    title: "Cum pregătești corect un fișier pentru imprimare",
    sections: [
      {
        subtitle: "Pregătirea fișierelor",
        content: "Un fișier pregătit corect previne erorile de tipar, culorile greșite sau tăierea elementelor importante."
      },
      {
        subtitle: "Culori, rezoluție și formate",
        content: "Fișierele pentru print trebuie să fie în CMYK, cu rezoluție de 300 DPI și salvate în formate precum PDF, TIFF sau EPS."
      }
    ]
  },

  {
    id: 7,
    title: "De ce este important un logo profesionist",
    sections: [
      {
        subtitle: "Simbolul brandului",
        content: "Logo-ul este elementul central al identității vizuale și influențează direct percepția publicului."
      },
      {
        subtitle: "Recunoaștere și credibilitate",
        content: "Un logo bine realizat este memorabil, ușor de recunoscut și transmite profesionalism."
      }
    ]
  },

  {
    id: 8,
    title: "Diferențele dintre designul digital și designul pentru tipar",
    sections: [
      {
        subtitle: "Culori și rezoluție",
        content: "Designul digital folosește RGB și rezoluții mici, în timp ce tiparul necesită CMYK și 300 DPI pentru claritate."
      },
      {
        subtitle: "Layout și suport",
        content: "Digitalul este fluid și responsive, iar tiparul este fix și precis."
      }
    ]
  },
  {
    id: 9,
    title: "Materialele premium în tipărire – cum influențează calitatea percepută",
    sections: [
      {
        subtitle: "Calitatea ca diferențiator",
        content: "Materialele premium transmit profesionalism, seriozitate și atenție la detalii încă de la primul contact."
      },
      {
        subtitle: "Hârtie și finisaje",
        content: "Hârtia groasă, finisajele speciale și detaliile tactile cresc valoarea percepută a brandului."
      }
    ]
  },
  {
  id: 10,
  title: "Psihologia formelor în design și impactul asupra percepției brandului",
  sections: [
    {
      subtitle: "Formele ca limbaj vizual",
      content: "Formele sunt un limbaj vizual puternic care comunică emoții și mesaje fără a folosi cuvinte. În design, ele influențează modul în care utilizatorii percep un brand încă din primele secunde."
    },
    {
      subtitle: "Forme rotunde – prietenie și apropiere",
      content: "Cercurile și formele rotunjite sunt asociate cu armonia, comunitatea și siguranța. Ele transmit emoții pozitive și sunt frecvent folosite de branduri care doresc să pară accesibile și prietenoase."
    },
    {
      subtitle: "Forme pătrate și dreptunghiulare – stabilitate și încredere",
      content: "Pătratele și dreptunghiurile sugerează ordine, stabilitate și profesionalism. Sunt utilizate des în brandingul corporate și în layout-uri care pun accent pe structură și claritate."
    },
    {
      subtitle: "Forme triunghiulare – energie și direcție",
      content: "Triunghiurile transmit mișcare, dinamism și progres. În funcție de orientare, ele pot sugera ascensiune, forță sau tensiune și sunt potrivite pentru branduri inovatoare."
    },
    {
      subtitle: "Utilizarea formelor în identitatea vizuală",
      content: "Alegerea formelor trebuie să fie în armonie cu personalitatea brandului. Coerența formelor în logo, website și materiale tipărite ajută la crearea unei identități vizuale clare și memorabile."
    }
  ]
}

];

// 1️⃣ luăm id-ul din URL
const params = new URLSearchParams(window.location.search);
const articleId = Number(params.get("id"));

// 2️⃣ găsim articolul
const article = articles.find(item => item.id === articleId);

if (!article) {
  console.error("Articolul nu există");
}

// 3️⃣ titlu articol
document.querySelector(".title").textContent = article.title;

// 4️⃣ conținut articol
const articleContent = document.querySelector(".article-content");
articleContent.innerHTML = "";

// 5️⃣ generăm secțiunile
article.sections.forEach(section => {
  const sectionEl = document.createElement("div");
  sectionEl.classList.add("article");

  sectionEl.innerHTML = `
    <h2 class="article-title">${section.subtitle}</h2>
    <blockquote class="article-description">
      ${section.content}
    </blockquote>
  `;

  articleContent.appendChild(sectionEl);
});
