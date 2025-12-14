
const topText = document.querySelector('.span-h1-hero-1');
const bottomText = document.querySelector('.span-h1-hero-2');
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

   



const products = [
  {
    id: "B001",
    showcaseImage:'../assets-magazin/img/img1.png',
    category: "Tricou personalizat",
    name: "TRICOUBUMBAC UNISEX",
    description: "Confortabil, imprimat durabil",
    price: 45,
    currency: "RON"
  },
  {
    id: "B002",
    showcaseImage:'../assets-magazin/img/img2.png',
    category: "Tricou personalizat",
    name: "TRICOU POLIESTER",
    description: "100% bumbac | mărimi S–XXL",
    price: 35,
    currency: "RON"
  },
  {
    id: "B003",
    showcaseImage:'../assets-magazin/img/img3.png',
    category: "Hanorace",
    name: "HANORAC FĂRĂ GLUGĂ",
    description: "Simplu, elegant și confortabil",
    price: 105,
    currency: "RON"
  },
  {
    id: "B004",
    showcaseImage:'../assets-magazin/img/img4.png',
    category: "Hanorace",
    name: "HANORAC CU GLUGĂ",
    description: "Moale, călduros și modern",
    price: 115,
    currency: "RON"
  },

  {
    id: "B005",
    showcaseImage:'../assets-magazin/img/img6.png',
    category: "Accesorii",
    name: "ȘAPCĂ PERSONALIZATĂ",
    description: "Practică și rezistentă",
    price: 35,
    currency: "RON"
  },{
  id: "B006",
    showcaseImage:'../assets-magazin/img/img5.png',
    category: "Accesorii",
    name: "TOTE BAG",
    description: "Eco, reutilizabilă, 38x42 cm",
    price: 30,
    currency: "RON"
  },
  {
    id: "C001",
    showcaseImage:'../assets-magazin/img/img7.png',
    category: "Materiale promoționale",
    name: "STICKER",
    description: "Autocolant colorat, forme diverse",
    price: 4,
    currency: "RON"
  },
  {
    id: "C002",
    showcaseImage:'../assets-magazin/img/img8.png',
    category: "Materiale promoționale",
    name: "STICKERE TĂIATE LA FORMĂ",
    description: "Vinil premium, decupare precisă",
    price: 6,
    currency: "RON"
  },
  {
    id: "C003",
    showcaseImage:'../assets-magazin/img/img9.png',
    category: "Materiale promoționale",
    name: "FLYERE / PLIANTE",
    description: "Hârtie lucioasă, A6–A4",
    price: 1.5,
    currency: "RON"
  },
  {
    id: "C004",
    showcaseImage:'../assets-magazin/img/img10.png',
    category: "Materiale promoționale",
    name: "CĂRȚI DE VIZITĂ",
    description: "Carton 300g, 8.5x5.5 cm",
    price: 0.7,
    currency: "RON"
  },
  {
    id: "C005",
    showcaseImage:'../assets-magazin/img/img11.png',
    category: "Materiale promoționale",
    name: "CARTE PERSONALIZATĂ",
    description: "Copertă cartonată / hârtie lucioasă",
    price: 50,
    currency: "RON"
  },
  {
    id: "C006",
    showcaseImage:'../assets-magazin/img/img12.png',
    category: "Materiale promoționale",
    name: "ROLL-UP PUBLICITAR",
    description: "Structură aluminiu + print PVC, 85x200 cm",
    price: 750,
    currency: "RON"
  },
  {
    id: "C007",
    showcaseImage:'../assets-magazin/img/img13.png',
    category: "Printuri decorative",
    name: "TABLOU RAMĂ DIN LEMN",
    description: "Tablou Lemn, 20x30 – 60x90 cm",
    price: 75,
    currency: "RON"
  },
  {
    id: "C008",
    showcaseImage:'../assets-magazin/img/img14.png',
    category: "Printuri decorative",
    name: "TABLOU CANVAS",
    description: "Canvas , 20x30 – 60x90 cm",
    price: 60,
    currency: "RON"
  },
  {
    id: "C009",
    showcaseImage:'../assets-magazin/img/img15.png',
    category: "Printuri decorative",
    name: "TABLOU ROLL",
    description: "Material textil|diverse dimensiuni|",
    price: 70,
    currency: "RON"
  },
  {
    id: "C0010",
    showcaseImage:'../assets-magazin/img/img16.png',
    category: "Produse personalizate",
    name: "CANĂ PERSONALIZATĂ",
    description: "Ceramică 330 ml, ideală pentru cadouri",
    price: 30,
    currency: "RON"
  },
  {
    id: "C0011",
    showcaseImage:'../assets-magazin/img/img17.png',
    category: "Produse personalizate",
    name: "BRELOC PERSONALIZAT",
    description: "Metal sau plastic, diverse forme",
    price: 10,
    currency: "RON"
  },
  {
    id: "C0012",
    showcaseImage:'../assets-magazin/img/img18.png',
    category: "Produse personalizate",
    name: "PUZZLE PERSONALIZAT",
    description: "120–500 piese, cadou creativ",
    price: 40,
    currency: "RON"
  },
  {
    id: "C0013",
    showcaseImage:'../assets-magazin/img/img19.png',
    category: "Produse personalizate",
    name: "MAGNET FRIGIDER",
    description: "Colorat și rezistent, PVC/lemn",
    price: 8,
    currency: "RON"
  },
  {
    id: "C0014",
    showcaseImage:'../assets-magazin/img/img20.png',
    category: "Produse personalizate",
    name: "PERNĂ PERSONALIZATĂ",
    description: "40x40 cm, poliester/bumbac",
    price: 50,
    currency: "RON"
  },
  {
    id: "C0015",
    showcaseImage:'../assets-magazin/img/img21.png',
    category: "Produse personalizate",
    name: "TERMOS PERSONALIZAT",
    description: "Oțel/aluminiu, 500–750 ml",
    price: 60,
    currency: "RON"
  }
];

function getCart() {
  const savedCart = localStorage.getItem('cart');
  return savedCart ? JSON.parse(savedCart) : [];
}

function saveCart(cart) {
  localStorage.setItem('cart', JSON.stringify(cart));
}

function addToCart(product, size) {
  let cart = getCart();
  
  // Cauta produsul cu aceeasi marime
  const existingItem = cart.find(item => item.id === product.id && item.size === size);
  
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      size: size,
      quantity: 1,
      image: product.showcaseImage
    });
  }

  saveCart(cart);
  showNotification('Produs adăugat în coș!');
}

function removeFromCart(index) {
  let cart = getCart();
  cart.splice(index, 1);
  saveCart(cart);
  updateCartTable();
}

function updateQuantity(index, newQuantity) {
  let cart = getCart();
  newQuantity = parseInt(newQuantity);
  
  if (newQuantity <= 0) {
    removeFromCart(index);
  } else {
    cart[index].quantity = newQuantity;
    saveCart(cart);
    updateCartTable();
  }
}

function updateCartTable() {
  const cartTable = document.querySelector('.shoppingCart tbody');
  if (!cartTable) return; // Nu suntem pe pagina cart

  let cart = getCart();
  cartTable.innerHTML = ''; // Goleste complet tabelul (inclusiv linia default)
  let subtotal = 0;

  if (cart.length === 0) {
    cartTable.innerHTML = '<tr><td colspan="5" style="text-align: center; padding: 20px;">Coșul este gol</td></tr>';
    updateTotals(0);
    return;
  }

  cart.forEach((item, index) => {
    const itemTotal = item.price * item.quantity;
    subtotal += itemTotal;

    const row = document.createElement('tr');
    row.innerHTML = `
      <td class="imageTitle">
        <img src="${item.image}" alt="${item.name}" style="width: 60px; height: auto;">
        <p ">${item.name}</p>
      </td>
      <td class="price">${item.size}</td>
      <td class="qty">
        <input type="number" value="${item.quantity}" min="1" 
          onchange="updateQuantity(${index}, this.value)" style="width: 50px;">
      </td>
      <td class="subtotal">${itemTotal} Lei</td>
      <td>
        <button onclick="removeFromCart(${index})" style="background: #ff4444; color: white; border: none; padding: 5px 10px; cursor: pointer; border-radius: 3px;">
          Șterge
        </button>
      </td>
    `;
    cartTable.appendChild(row);
  });

  updateTotals(subtotal);
}

function updateTotals(subtotal) {
  const shippingCost = 16;
  const total = subtotal + shippingCost;

  const totalPriceDiv = document.querySelector('.totalPrice');
  if (!totalPriceDiv) return;

  totalPriceDiv.innerHTML = `
    <p>Subtotal <span>${subtotal} Lei</span></p>
    <p>Shipping <span>${shippingCost} Lei</span></p>
    <p class="total">Total <span>${total} Lei</span></p>
  `;
}

function showNotification(message) {
  const notification = document.createElement('div');
  notification.textContent = message;
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: #4CAF50;
    color: white;
    padding: 15px 20px;
    border-radius: 5px;
    z-index: 1000;
    font-size: 14px;
  `;
  document.body.appendChild(notification);

  setTimeout(() => notification.remove(), 2000);
}

// ==================== PAGINA PRODUS ====================

document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const product = products.find(p => p.id === id);

  // Daca suntem pe pagina PRODUS
  if (product && document.getElementById('product-title')) {
    document.getElementById('product-title').textContent = product.category;
    document.getElementById('product-detail-h2').textContent = `#${product.id} - ${product.name}`;
    document.getElementById('product-detail-p').textContent = product.description;
    document.getElementById('price').textContent = product.price;
    document.getElementById('image-showcase').src = product.showcaseImage;

    const sizeSelect = document.getElementById('size-select');
    const addToCartBtn = document.getElementById('add-to-cart');

    // Dezactiveaza butonul initial
    addToCartBtn.disabled = true;
    addToCartBtn.style.opacity = '0.5';
    addToCartBtn.style.cursor = 'not-allowed';

    // Activeaza butonul la selectarea marimii
    sizeSelect.addEventListener('change', (e) => {
      if (e.target.value) {
        addToCartBtn.disabled = false;
        addToCartBtn.style.opacity = '1';
        addToCartBtn.style.cursor = 'pointer';
      }
    });

    // Click pe Add to Cart
    addToCartBtn.addEventListener('click', () => {
      const selectedSize = sizeSelect.value;
      if (selectedSize) {
        addToCart(product, selectedSize);
        sizeSelect.value = '';
        addToCartBtn.disabled = true;
        addToCartBtn.style.opacity = '0.5';
      }
    });
  }

  // Daca suntem pe pagina CART
  if (document.querySelector('.shoppingCart')) {
    updateCartTable();
  }
});

// Refresh cart-ul cand se intoarce userul pe pagina cart
window.addEventListener('focus', () => {
  if (document.querySelector('.shoppingCart')) {
    updateCartTable();
  }
});

// Acordion
document.querySelectorAll('.accordion-header').forEach(header => {
  header.addEventListener('click', () => {
    const item = header.parentElement;
    item.classList.toggle('open');
  });
});