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
                    <div class="card px-0 pt-2 pb-0 shadow bg-body rounded mb-4">
                        <img src="${product.image}" class="card-img-top product-card py-2" alt="${product.name}">
                        <div class="card-body bg-dark" style="--bs-bg-opacity: 0.2">
                            <h3 class="card-title fs-5 product-title">${product.name}</h3>
                            <p class="card-text">EUR ${product.price}</p>
                            <a href="product.html?id=${product.id}" class="btn btn-dark text-uppercase" alt="botón para ir al detalle del producto">Más info</a>
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
