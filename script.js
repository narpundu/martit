const form = document.getElementById('productForm');
const preview = document.getElementById('productPreview');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('productName').value;
  const price = document.getElementById('productPrice').value;
  const description = document.getElementById('productDescription').value;
  const imageFile = document.getElementById('productImage').files[0];

  if (imageFile) {
    const reader = new FileReader();
    reader.onload = function() {
      preview.innerHTML = `
        <h3>${name}</h3>
        <p>Price: ₹${price}</p>
        <p>${description}</p>
        <img src="${reader.result}" alt="Product Image">
      `;
    };
    reader.readAsDataURL(imageFile);
  }
});
