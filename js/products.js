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
                        <img src="${product.image}" class="card-img-top product-card" alt="${product.name}">
                        <div class="card-body">
                            <h3 class="card-title fs-5 product-title">${product.name}</h3>
                            <p class="card-text">EUR ${product.price}</p>
                            <a href="product.html?id=${product.id}" class="btn btn-dark" alt="botón para ir al detalle del producto">Más info</a>
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
