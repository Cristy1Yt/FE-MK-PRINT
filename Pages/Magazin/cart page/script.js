"use strict";

// ── EMAILJS INIT - LA ÎNCEPUT ──────────────────────────────
if (typeof emailjs !== 'undefined') {
  emailjs.init('yVWfsb2JrXReKGfoF');
  console.log('✅ EmailJS initialized');
} else {
  console.error('❌ EmailJS not loaded');
}

const phasesCheckout = [
  { phase: 1, label: 'Conectare' },
  { phase: 2, label: 'Adresă' },
  { phase: 3, label: 'Plată' },
  { phase: 4, label: 'Confirmă' },
  { phase: 5, label: 'Gata' },
];

let currentPhase = 2;

// State global
const state = {
  addresses: [],
  selected: null,
  showForm: false,
  paymentMethod: null,
  orderEmail: null
};

// ── DISPLAY ROW ────────────────────────────────────────────
function displayRow() {
  const button = document.querySelector('.btn-check');
  if (!button) {
    console.error('.btn-check not found');
    return;
  }

  button.removeEventListener('click', checkoutHandler);
  button.addEventListener('click', checkoutHandler);
}

function checkoutHandler(e) {
  e.preventDefault();
  localStorage.setItem('lastPhase', currentPhase.toString());
  
  const cartSection = document.querySelector('.cart-area');
  const phaseSection = document.querySelector('.phases-box');
  phaseSection.classList.toggle('active');
  cartSection.classList.toggle('removed');
}

// ── SHOW PHASE ROW ──────────────────────────────────────────
function showPhaseRow() {
  document.querySelector('.phase-row').innerHTML = phasesCheckout.map((p, index) => `
    <div class="phase ${p.phase < currentPhase ? 'done' : ''} 
                      ${p.phase === currentPhase ? 'active' : ''} 
                      ${p.phase > currentPhase ? 'pending' : ''}">
      <span class="phase-number ${p.phase < currentPhase ? 'done' : ''}">${p.phase}</span>
      <span class="phase-label">${p.label}</span>
    </div>
    ${index < phasesCheckout.length - 1 ? `<div class="phase-line ${p.phase < currentPhase ? 'done' : 'pending'}"></div>` : ''}
  `).join('');

  addPhaseNavigation();
}

function addPhaseNavigation() {
  const phaseNumbers = document.querySelectorAll('.phase-number');
  phaseNumbers.forEach(phaseNum => {
    const phaseValue = parseInt(phaseNum.textContent);
    
    if (phaseValue < currentPhase) {
      phaseNum.style.cursor = 'pointer';
      phaseNum.addEventListener('click', function() {
        currentPhase = phaseValue;
        displayContent();
      });
    }
  });
}

// ── LOCAL STORAGE ──────────────────────────────────────────
function getAddress() {
  const saved = localStorage.getItem('deliveryAddress');
  return saved ? JSON.parse(saved) : null;
}

function saveAddress(addr) {
  localStorage.setItem('deliveryAddress', JSON.stringify(addr));
}

function getCart() {
  const savedCart = localStorage.getItem('cart');
  return savedCart ? JSON.parse(savedCart) : [];
}

// ── RENDER ADRESS-DETAILS-BOX ─────────────────────────────
function renderAddressDetails() {
  const addr = getAddress();
  const box = document.querySelector('.adress-details-box');
  if (!box) return;

  if (addr) {
    box.innerHTML = `
      <p class="name">${addr.name}</p>
      <span class="adress-detail">${addr.street}</span>
      <span class="adress-detail">${addr.zip} ${addr.city}</span>
      <span class="adress-detail">${addr.country}</span>
    `;
  } else {
    box.innerHTML = `<p class="name">Nu există o adresă curentă</p>`;
  }
}

// ── PHASE EVENTS ───────────────────────────────────────────
function initPhaseEvents() {
  const btnNext = document.querySelector('.next-phase');
  if (!btnNext) return;

  btnNext.addEventListener('click', function(e) {
    e.preventDefault();

    const modifySection = document.querySelector('.adress-modify');
    const adressSection = document.querySelector('.adress-section');

    if (modifySection && modifySection.classList.contains('active')) {
      const selected = state.addresses.find(function(addr) {
        return addr.id === state.selected;
      });

      if (!selected) return;

      saveAddress(selected);
      renderAddressDetails();
      modifySection.classList.remove('active');
      adressSection.classList.remove('removed');
      return;
    }

    currentPhase++;
    displayContent();
  });
}

// ── MODIFY ────────────────────────────────────────────────
function modify() {
  const btnModify = document.querySelectorAll('.modify-btn');
  btnModify.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      document.querySelector('.adress-modify').classList.add('active');
      document.querySelector('.adress-section').classList.add('removed');
    });
  });

  const savedAddr = getAddress();
  if (savedAddr) {
    state.addresses = [savedAddr];
    state.selected = savedAddr.id;
  }

  const addressList = document.getElementById('addressList');
  const newForm     = document.getElementById('newForm');
  const btnCancel   = document.getElementById('btnCancel');
  const btnSave     = document.getElementById('btnSave');

  function render() {
    addressList.innerHTML = '';

    state.addresses.forEach((addr) => {
      const card = document.createElement('div');
      card.className = 'address-card' + (state.selected === addr.id ? ' selected' : '');
      card.innerHTML = `
        <div class="radio-dot"></div>
        <div class="card-body">
          <div class="card-name">${addr.name}</div>
          <div class="card-address">
            <p>${addr.street}</p>
            <p>${addr.zip} ${addr.city}</p>
            <p>${addr.country}</p>
          </div>
        </div>
        <span class="badge-selected">SELECTATĂ</span>
      `;
      card.addEventListener('click', function() { selectAddress(addr.id); });
      addressList.appendChild(card);
    });

    if (!state.showForm) {
      const newOption = document.createElement('div');
      newOption.className = 'new-option' + (state.selected === 'new' ? ' selected' : '');
      newOption.innerHTML = `
        <div class="radio-dot"></div>
        <span class="new-label">Adaugă o adresă nouă</span>
      `;
      newOption.addEventListener('click', openNewForm);
      addressList.appendChild(newOption);
    }

    newForm.classList.toggle('visible', state.showForm);
  }

  function selectAddress(id) {
    state.selected = id;
    state.showForm = false;
    render();
  }

  function openNewForm() {
    state.selected = 'new';
    state.showForm = true;
    clearForm();
    render();
    setTimeout(function() { document.getElementById('firstName').focus(); }, 50);
  }

  function closeForm() {
    state.showForm = false;
    state.selected = state.addresses.length > 0 ? state.addresses[0].id : null;
    render();
  }

  function clearForm() {
    ['firstName', 'lastName', 'street', 'zip', 'city'].forEach(function(id) {
      document.getElementById(id).value = '';
    });
    document.getElementById('country').value = 'România';
    clearErrors();
  }

  function clearErrors() {
    document.querySelectorAll('.field').forEach(function(f) {
      f.classList.remove('has-error');
      const inp = f.querySelector('input');
      if (inp) inp.classList.remove('error');
    });
  }

  const requiredFields = ['firstName', 'lastName', 'street', 'zip', 'city'];

  function validate() {
    clearErrors();
    let ok = true;
    requiredFields.forEach(function(id) {
      const inp  = document.getElementById(id);
      const wrap = document.getElementById('field-' + id);
      if (!inp || !inp.value.trim()) {
        ok = false;
        if (inp)  inp.classList.add('error');
        if (wrap) wrap.classList.add('has-error');
      }
    });
    return ok;
  }

  function saveNewAddress() {
    if (!validate()) return;

    const newAddr = {
      id:      Date.now(),
      name:    document.getElementById('firstName').value.trim() + ' ' + document.getElementById('lastName').value.trim(),
      street:  document.getElementById('street').value.trim(),
      city:    document.getElementById('city').value.trim(),
      zip:     document.getElementById('zip').value.trim(),
      country: document.getElementById('country').value.trim(),
    };

    state.addresses.push(newAddr);
    state.selected = newAddr.id;
    state.showForm = false;

    saveAddress(newAddr);
    renderAddressDetails();

    document.querySelector('.adress-modify').classList.remove('active');
    document.querySelector('.adress-section').classList.remove('removed');

    render();
  }

  btnSave.addEventListener('click', saveNewAddress);
  btnCancel.addEventListener('click', closeForm);

  requiredFields.forEach(function(id) {
    const inp = document.getElementById(id);
    if (inp) {
      inp.addEventListener('input', function() {
        inp.classList.remove('error');
        const wrap = document.getElementById('field-' + id);
        if (wrap) wrap.classList.remove('has-error');
      });
    }
  });

  render();
}

// ── PAY FORM ──────────────────────────────────────────────
function initPayForm() {
  const payCard = document.getElementById('payCard');
  const payRamburs = document.getElementById('payRamburs');
  const cardForm = document.getElementById('cardForm');
  const ramburInfo = document.getElementById('ramburInfo');
  const confirmBtn = document.getElementById('confirmPayment');
  const orderEmailInput = document.getElementById('orderEmail');
  
  console.log('initPayForm called');
  console.log('payCard:', payCard);
  console.log('payRamburs:', payRamburs);
  console.log('confirmBtn:', confirmBtn);
  
  if (!confirmBtn) {
    console.error('confirmPayment button not found - check your HTML');
    return;
  }

  state.paymentMethod = null;

  // Click pe Card
  if (payCard) {
    payCard.addEventListener('click', function() {
      payCard.classList.add('selected');
      if (payRamburs) payRamburs.classList.remove('selected');
      if (cardForm) cardForm.classList.add('visible');
      if (ramburInfo) ramburInfo.classList.remove('visible');
      state.paymentMethod = 'card';
      console.log('✓ Card selected');
    });
  }

  // Click pe Ramburs
  if (payRamburs) {
    payRamburs.addEventListener('click', function() {
      payRamburs.classList.add('selected');
      if (payCard) payCard.classList.remove('selected');
      if (cardForm) cardForm.classList.remove('visible');
      if (ramburInfo) ramburInfo.classList.add('visible');
      state.paymentMethod = 'ramburs';
      console.log('✓ Ramburs selected');
    });
  }

  // Formatare Nr. Card
  const cardNumberInput = document.getElementById('card-number');
  if (cardNumberInput) {
    cardNumberInput.addEventListener('input', function(e) {
      let value = e.target.value.replace(/\s/g, '');
      let formatted = value.match(/.{1,4}/g)?.join(' ') || value;
      e.target.value = formatted;
    });
  }

  // Formatare MM/AA
  const monthInput = document.getElementById('month');
  const yearInput = document.getElementById('year');

  if (monthInput) {
    monthInput.addEventListener('input', function(e) {
      if (e.target.value.length === 2 && yearInput) {
        yearInput.focus();
      }
    });
  }

  // Doar cifre pentru CVC
  const cvcInput = document.getElementById('cvc');
  if (cvcInput) {
    cvcInput.addEventListener('input', function(e) {
      e.target.value = e.target.value.replace(/[^0-9]/g, '');
    });
  }

  function validateCard() {
    const name = document.getElementById('name');
    const cardNumber = document.getElementById('card-number');
    const month = document.getElementById('month');
    const year = document.getElementById('year');
    const cvc = document.getElementById('cvc');

    let isValid = true;

    if (!name || !name.value.trim()) {
      if (name) showError(name);
      isValid = false;
    } else {
      if (name) clearError(name);
    }

    const cardDigits = cardNumber.value.replace(/\s/g, '');
    if (cardDigits.length < 15) {
      showError(cardNumber);
      isValid = false;
    } else {
      clearError(cardNumber);
    }

    if (!month.value || !year.value || month.value > 12 || month.value < 1) {
      showError(month);
      showError(year);
      isValid = false;
    } else {
      clearError(month);
      clearError(year);
    }

    if (!cvc.value || cvc.value.length !== 3) {
      showError(cvc);
      isValid = false;
    } else {
      clearError(cvc);
    }

    return isValid;
  }

  function showError(input) {
    if (!input) return;
    input.classList.add('error');
    const errorMsg = input.parentElement.querySelector('.error-msg');
    if (errorMsg) errorMsg.classList.add('show');
  }

  function clearError(input) {
    if (!input) return;
    input.classList.remove('error');
    const errorMsg = input.parentElement.querySelector('.error-msg');
    if (errorMsg) errorMsg.classList.remove('show');
  }

  // Confirm Button - NUMAI PENTRU SELECTARE METODA
  confirmBtn.addEventListener('click', function(e) {
    e.preventDefault();

    console.log('🔍 confirmPayment clicked');
    console.log('paymentMethod:', state.paymentMethod);

    if (!state.paymentMethod) {
      alert('Te rugăm să selectezi o metodă de plată!');
      return;
    }

    if (state.paymentMethod === 'card') {
      if (validateCard()) {
        console.log('✓ Card valid - moving to phase 4');
        state.orderEmail = orderEmailInput ? orderEmailInput.value.trim() : '';
        currentPhase++;
        displayContent();
      } else {
        console.log('✗ Card invalid');
      }
    } else if (state.paymentMethod === 'ramburs') {
      console.log('✓ Ramburs selected - moving to phase 4');
      state.orderEmail = orderEmailInput ? orderEmailInput.value.trim() : '';
      currentPhase++;
      displayContent();
    }else{
      alert('Te rugăm să selectezi o metodă de plată!');
    }
  });
}

// ── PLACE ORDER ────────────────────────────────────────────
function initPlaceOrder() {
  const placeOrderBtn = document.getElementById('placeOrderBtn');
  const orderEmailInput = document.getElementById('orderEmail');
  
  if (!placeOrderBtn) {
    console.error('placeOrderBtn not found');
    return;
  }

  placeOrderBtn.addEventListener('click', function(e) {
    e.preventDefault();

    // VALIDARE EMAIL LA PHASE 4
    if (!orderEmailInput || !orderEmailInput.value.trim()) {
      showEmailError(orderEmailInput, 'Te rugăm să introduci o adresă de email!');
      return;
    }

    if (!validateEmail(orderEmailInput.value.trim())) {
      showEmailError(orderEmailInput, 'Te rugăm să introduci o adresă de email validă!');
      return;
    }

    clearEmailError(orderEmailInput);
    state.orderEmail = orderEmailInput.value.trim();
    sendOrderEmail();
  });
}

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function showEmailError(input, message) {
  if (!input) return;
  input.classList.add('error');
  const errorMsg = input.parentElement.querySelector('.error-msg');
  if (errorMsg) {
    errorMsg.textContent = message;
    errorMsg.classList.add('show');
  }
  alert(message);
}

function clearEmailError(input) {
  if (!input) return;
  input.classList.remove('error');
  const errorMsg = input.parentElement.querySelector('.error-msg');
  if (errorMsg) errorMsg.classList.remove('show');
}

// ── SEND ORDER EMAIL (EmailJS) ─────────────────────────────
function sendOrderEmail() {
  const cart = getCart();
  const deliveryAddr = getAddress();
  const email = state.orderEmail;

  if (!email || !email.includes('@')) {
    alert('Email invalid!');
    return;
  }

  // ✅ CONSTRUIEȘTE items_list CA RÂNDURI COMPLETE HTML
  let itemsTableHTML = '';
  let subtotal = 0;

  cart.forEach(item => {
    const itemTotal = item.price * item.quantity;
    subtotal += itemTotal;
    const imageUrl = convertToAbsoluteUrl(item.image);
    
    // ← RÂND COMPLET CU TOT
    itemsTableHTML += `<tr>
        <td style="text-align: center; padding: 14px 12px;"><img src="${imageUrl}" alt="${item.name}" style="width: 50px; height: 50px; object-fit: cover; border-radius: 4px; border: 1px solid #e0e0e0;"></td>
        <td style="padding: 14px 12px;"><strong style="color: #12263a;">${item.id}</strong><br><strong>${item.name}</strong><br><span style="color: #999; font-size: 12px;">Mărime: ${item.size}</span></td>
        <td style="text-align: center; padding: 14px 12px;">${item.quantity}</td>
        <td style="text-align: right; padding: 14px 12px;">${item.price.toFixed(2)}</td>
        <td style="text-align: right; padding: 14px 12px;"><strong>${itemTotal.toFixed(2)}</strong></td>
      </tr>`;
  });

  const shippingCost = subtotal >= 150 ? 0 : 16;
  const total = subtotal + shippingCost;

  // ✅ PARAMETRI - Trebuie EXACT aceleași variabile ca în template
  const templateParams = {
    to_email: email,
    customer_name: deliveryAddr?.name || 'Client',
    order_number: `ORD-${Date.now()}`,
    order_date: new Date().toISOString().substring(0, 10),
    payment_method: state.paymentMethod === 'card' ? 'Plată cu cardul' : 'Plată la ramburs',
    items_list: itemsTableHTML,
    subtotal: subtotal.toFixed(2),
    shipping: shippingCost.toFixed(2),
    total: total.toFixed(2),
    street: deliveryAddr?.street || '',
    zip: deliveryAddr?.zip || '',
    city: deliveryAddr?.city || '',
    country: deliveryAddr?.country || '',
    year: new Date().getFullYear().toString()
  };

  console.log('📧 Parametri:', templateParams);
  console.log('Items HTML:', itemsTableHTML);

  if (typeof emailjs === 'undefined') {
    alert('❌ EmailJS nu e încărcat.');
    return;
  }

  emailjs.send('service_u4zjerv', 'template_dwm5y6n', templateParams)
    .then(response => {
      console.log('✅ Email trimis:', response);
      alert('✅ Comandă plasată!\n\nEmail trimis la: ' + email);
      localStorage.removeItem('cart');
      currentPhase = 5;
      displayContent();
    })
    .catch(err => {
      console.error('❌ Eroare:', err);
      alert('❌ Eroare ' + err.status + ': ' + err.text);
    });
}

// ── CONVERT RELATIVE PATH TO ABSOLUTE URL ──────────────────
function convertToAbsoluteUrl(relativePath) {
  if (relativePath.startsWith('http://') || relativePath.startsWith('https://')) {
    return relativePath;
  }
  const domain = window.location.origin;
  const normalizedPath = relativePath
    .replace(/\.\.\//g, '')
    .replace(/^\/+/, '');
  return `${domain}/FE-MK-PRINT/Pages/Magazin/assets-magazin/${normalizedPath}`;
}

// ── RENDER CONFIRMATION ────────────────────────────────────
function renderConfirmation() {
  const cart = getCart();
  const deliveryAddr = getAddress();
  const productsList = document.getElementById('confirmationProductsList');
  const deliveryBox = document.getElementById('deliveryAddressBox');
  const billingBox = document.getElementById('billingAddressBox');
  const paymentBox = document.getElementById('paymentMethodBox');

  if (!productsList) {
    console.error('Confirmation elements not found');
    return;
  }

  let subtotal = 0;
  productsList.innerHTML = '';

  cart.forEach(item => {
    const itemTotal = item.price * item.quantity;
    subtotal += itemTotal;

    const productHtml = `
      <div class="confirmation-product-item">
        <img src="${item.image}" alt="${item.name}">
        <div class="confirmation-product-info">
          <p class="product-name">${item.id} - ${item.name}</p>
          <p class="product-size">Mărime: ${item.size}</p>
          <p>Cantitate: <strong>${item.quantity}</strong></p>
          <p class="product-price">${item.price} Lei × ${item.quantity} = <strong>${itemTotal.toFixed(2)} Lei</strong></p>
        </div>
      </div>
    `;
    productsList.innerHTML += productHtml;
  });

  let shippingCost = subtotal >= 150 ? 0 : 16;
  const total = subtotal + shippingCost;

  const subtotalEl = document.querySelector('.subtotal-value');
  const shippingEl = document.querySelector('.shipping-value');
  const totalEl = document.querySelector('.total-value');

  if (subtotalEl) subtotalEl.textContent = subtotal.toFixed(2);
  if (shippingEl) shippingEl.textContent = shippingCost.toFixed(2);
  if (totalEl) totalEl.textContent = total.toFixed(2);

  if (deliveryBox && deliveryAddr) {
    deliveryBox.innerHTML = `
      <p class="address-name">${deliveryAddr.name}</p>
      <p class="address-street">${deliveryAddr.street}</p>
      <p>${deliveryAddr.zip} ${deliveryAddr.city}</p>
      <p>${deliveryAddr.country}</p>
    `;
  }

  if (billingBox && deliveryAddr) {
    billingBox.innerHTML = `
      <p style="color: #4caf50; font-weight: 500;">Aceeași cu adresa de livrare</p>
      <p class="address-name">${deliveryAddr.name}</p>
      <p class="address-street">${deliveryAddr.street}</p>
      <p>${deliveryAddr.zip} ${deliveryAddr.city}</p>
      <p>${deliveryAddr.country}</p>
    `;
  }

  if (paymentBox) {
    if (state.paymentMethod === 'card') {
      const cardInput = document.getElementById('card-number');
      const cardNum = cardInput ? cardInput.value : '';
      paymentBox.innerHTML = `
        <p class="payment-method-name">💳 Plată cu cardul</p>
        <p>Număr card: ••••••••••••${cardNum.slice(-4) || '****'}</p>
      `;
    } else if (state.paymentMethod === 'ramburs') {
      paymentBox.innerHTML = `
        <p class="payment-method-name">📦 Plată la ramburs</p>
        <p>Vei plăti la livrare</p>
      `;
    }
  }
}

// ── DISPLAY CONTENT ───────────────────────────────────────
async function displayContent() {
  const phases = {
    2: './phases/adress.html',
    3: './phases/pay.html',
    4: './phases/confirmation.html'
  };

  if (!phases[currentPhase]) return;

  const response = await fetch(phases[currentPhase]);
  const html = await response.text();
  document.querySelector('.phase-content').innerHTML = html;

  showPhaseRow();

  const btnPhase = document.getElementById('btnSave');
  const btnNext = document.querySelector('.next-phase');

  // Ascunde butonul la phase 3 și 4
  if (currentPhase === 3 || currentPhase === 4) {
    if (btnPhase) btnPhase.style.display = 'none';
    if (btnNext) btnNext.style.display = 'none';
  } else {
    if (btnPhase) btnPhase.style.display = 'block';
    if (btnNext) btnNext.style.display = 'block';
  }

  if (currentPhase === 2) {
    renderAddressDetails();
    modify();
    initPhaseEvents();
  }

  if (currentPhase === 3) {
    initPayForm();
  }

  if (currentPhase === 4) {
    renderConfirmation();
    initPlaceOrder();
  }
}

// ── PHASE 4 NEXT BUTTON ────────────────────────────────────
function addPhase4NextButton() {
  const nextPhaseBtn = document.querySelector('.next-phase');
  if (nextPhaseBtn) {
    nextPhaseBtn.addEventListener('click', function(e) {
      e.preventDefault();
      currentPhase++;
      displayContent();
    });
  }
}

// ── INIT ───────────────────────────────────────────────────
function initCheckout() {
  displayRow();
  
  const lastPhase = localStorage.getItem('lastPhase');
  if (lastPhase) {
    currentPhase = parseInt(lastPhase);
    localStorage.removeItem('lastPhase');
  }
  
  displayContent();
  renderAddressDetails();
}

// ── EMAILJS INIT ───────────────────────────────────────────
emailjs.init('yVWfsb2JrXReKGfoF');

document.addEventListener('DOMContentLoaded', function() {
  initCheckout();
});