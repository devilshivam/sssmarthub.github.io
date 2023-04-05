// Get the cart icon and the cart modal
const cartIcon = document.querySelector('.cart-icon');
const cartModal = document.querySelector('.cart-modal');

// Toggle the cart modal when the cart icon is clicked
cartIcon.addEventListener('click', () => {
  cartModal.classList.toggle('open');
});

// Get all the "add to cart" buttons
const addToCartButtons = document.querySelectorAll('.btn-add-to-cart');

// Add a click event listener to each "add to cart" button
addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Get the product information
    const product = button.closest('.product');
    const image = product.querySelector('img').getAttribute('src');
    const name = product.querySelector('h3').textContent;
    const price = product.querySelector('.product-price').textContent;

    // Add the product to the cart
    addToCart({ image, name, price });
  });
});

// Define the addToCart function
function addToCart(product) {
  // Get the cart items
  let cartItems = localStorage.getItem('cartItems');
  if (cartItems) {
    cartItems = JSON.parse(cartItems);
  } else {
    cartItems = [];
  }

  // Add the product to the cart
  cartItems.push(product);

  // Save the cart items to local storage
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
}
