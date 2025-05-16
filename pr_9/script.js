const showFormBtn = document.getElementById('show-form-btn');
const formSection = document.getElementById('product-form');
const banner = document.getElementById('productList');
const cartSidebar = document.getElementById('cartSidebar');
const toggleCartBtn = document.getElementById('toggle-cart');
const cartCount = document.getElementById('cart-count');
const imageType = document.getElementById('imageType');
const onlineInput = document.getElementById('onlineInput');
const offlineInput = document.getElementById('offlineInput');
const fileInput = document.getElementById('productImageOffline');

showFormBtn.onclick = () => {
  formSection.style.display = 'block';
  banner.style.display = 'none';
};

imageType.onchange = () => {
  if (imageType.value === 'online') {
    onlineInput.classList.remove('d-none');
    offlineInput.classList.add('d-none');
  } else {
    onlineInput.classList.add('d-none');
    offlineInput.classList.remove('d-none');
  }
};

document.getElementById('addProductForm').addEventListener('submit', async function(e) {
  e.preventDefault();
  const name = document.getElementById('productName').value;
  const desc = document.getElementById('productDesc').value;
  const price = document.getElementById('productPrice').value;
  let image = '';

  if (imageType.value === 'online') {
    image = document.getElementById('productImageOnline').value;
  } else {
    const file = fileInput.files[0];
    if (file) {
      image = await toBase64(file);
    }
  }

  const product = { name, desc, image, price };
  const products = JSON.parse(localStorage.getItem('products')) || [];
  products.push(product);
  localStorage.setItem('products', JSON.stringify(products));

  formSection.style.display = 'none';
  banner.style.display = 'flex';
  this.reset();
  renderProducts();
});

function toBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
    reader.readAsDataURL(file);
  });
}

function renderProducts() {
  const products = JSON.parse(localStorage.getItem('products')) || [];
  banner.innerHTML = '';
  
  // console.log("🔄 Rendering Products Individually:");
  products.forEach((product, index) => {
    // Log each product individually
    // console.log(`Product ${index + 1}:`, product);

    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <div class="product-info">
        <h4>${product.name}</h4>
        <p>${product.desc}</p>
        <strong>${product.price}₹</strong><br/>
        <button class="btn btn-sm btn-primary-custom mt-2" onclick="addToCart(${index})">
          <i class="bi bi-cart-plus"></i> Add to Cart
        </button>
      </div>
    `;
    banner.appendChild(card);
  });

  // Log the full array of products
  console.log("📦 All Products Array:", products);
}


function addToCart(index) {
  const products = JSON.parse(localStorage.getItem('products')) || [];
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  if (products[index]) {
    cart.push(products[index]);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
  }
}

function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  cartCount.innerText = cart.length;
}

function renderCart() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const cartItems = document.getElementById('cartItems');
  cartItems.innerHTML = '';
  cart.forEach((item, idx) => {
    const div = document.createElement('div');
    div.className = 'cart-item';
    div.innerHTML = `
      <div class="d-flex align-items-center">
        <img src="${item.image}" alt="${item.name}" />
        <div>
          <strong>${item.name}</strong><br/>
          <small>${item.price}₹</small>
        </div>
      </div>
      <button class="btn btn-sm btn-danger ms-2" onclick="removeCart(${idx})">
        <i class="bi bi-trash"></i>
      </button>
    `;
    cartItems.appendChild(div);
  });
}

function removeCart(index) {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.splice(index, 1);
  localStorage.setItem('cart', JSON.stringify(cart));
  renderCart();
  updateCartCount();
}

function closeCart() {
  cartSidebar.classList.remove('active');
}

toggleCartBtn.onclick = () => {
  cartSidebar.classList.toggle('active');
  renderCart();
};

renderProducts();
updateCartCount();
