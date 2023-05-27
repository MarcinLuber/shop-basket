const addProductForm = document.querySelector('.form-add-product');
const nameInput = document.querySelector('[name="product-name"]');
const priceInput = document.querySelector('                       [name="product-price"]');
const productsUl = document.querySelector('.products-list');

const saveProductToLocalStorage = (name, price) => {
  const ProductsList = JSON.parse(localStorage.getItem('shop-products')) ?? [];
  ProductsList.push({ name, price });
  localStorage.setItem('shop-products', JSON.stringify(ProductsList));
};

const loadProductFromLocalStorage = () => {
  const ProductsList = JSON.parse(localStorage.getItem('shop-products')) ?? [];
};

const addProductToShop = (name, price) => {
  const newLi = document.createElement('li'); // <li>

  const newStrong = document.createElement('strong'); // <strong>
  newStrong.innerText = name;

  const newPriceText = document.createTextNode(` - ${price.toFixed(2)}`); // ""

  const newBtn = document.createElement('button'); // <button>
  newBtn.classList.add('btn-buy-product');
  newBtn.dataset.name = name;
  newBtn.dataset.price = String(price);
  newBtn.innerText = 'Kup!';
  newBtn.addEventListener('click', addProductToBasket);

  newLi.appendChild(newStrong); // <li><strong>...
  newLi.appendChild(newPriceText); // <li><strong>..." - "
  newLi.appendChild(newBtn); // <li><strong>..." - "<button>...

  productsUl.appendChild(newLi);
  saveProductToLocalStorage(name, price);
};

const handleAddProductFromSubmit = (event) => {
  event.preventDefault();

  const nameFromInput = nameInput.value;
  const priceFromInput = Number(priceInput.value);

  addProductToShop(nameFromInput, priceFromInput);
};

addProductForm.addEventListener('submit', handleAddProductFromSubmit);
