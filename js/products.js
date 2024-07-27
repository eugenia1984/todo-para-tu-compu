(() => {
  "use strict";

  function displayCategoryProducts(products) {
    const categories = ["keyboard", "mouse", "headphone"];

    // Se obtiene el array de productos desde el objeto `products`
    const productsArray = products.products;

    categories.forEach((category) => {
      const categoryProducts = productsArray.filter(
        (product) => product.category === category
      );
      const categoryContainer = document.getElementById(category);

      categoryProducts.forEach((product) => {
        const productCard = `
                <div class="col-md-6 col-lg-4">
                    <div class="card mb-3 px-1 pt-2">
                        <img src="${product.image}" class="card-img-top" alt="${product.name}">
                        <div class="card-body">
                            <h5 class="card-title">${product.name}</h5>
                            <p class="card-text">EUR ${product.price}</p>
                            <a href="product.html?id=${product.id}" class="btn btn-dark">Más info</a>
                        </div>
                    </div>
                </div>
            `;
        categoryContainer.innerHTML += productCard;
      });
    });
  }

  // Cargar productos desde products.json y mostrar en el sitio
  fetch("data/products.json")
    .then((response) => response.json())
    .then((data) => displayCategoryProducts(data));
})();
