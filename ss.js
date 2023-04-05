// Get mobile navigation and navigation toggle button
const mobileNav = document.querySelector('.mobile-nav');
const navToggle = document.querySelector('.nav-toggle');

// Toggle mobile navigation when the navigation toggle button is clicked
navToggle.addEventListener('click', () => {
  mobileNav.classList.toggle('active');
});

// Get all "Add to Cart" buttons and add a click event listener to each one
const addToCartButtons = document.querySelectorAll('.add-to-cart');
addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    const productId = button.dataset.productId;
    // Add product to cart logic here
    console.log(`Product ${productId} added to cart`);
  });
});

// Get filter select element and all products
const filterSelect = document.querySelector('.filter-select');
const products = document.querySelectorAll('.product');

// Filter products based on the selected category in the filter dropdown
filterSelect.addEventListener('change', () => {
  const selectedValue = filterSelect.value;
  products.forEach(product => {
    if (selectedValue === 'all' || product.dataset.category === selectedValue) {
      product.style.display = 'block';
    } else {
      product.style.display = 'none';
    }
  });
});
