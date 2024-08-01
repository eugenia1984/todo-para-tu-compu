(() => {
  "use strict";

  /**
 * @param {Object} products - product: {
      "id": number,
      "name": string,
      "description": string,
      "price": number,
      "category": string, 
      "stock": number,
      "image": string,
      "isOutstanding": boolean
    }
 */
  function displayFeaturedProducts(products) {
    // Se obtiene el array de productos desde el objeto `products`
    const productsArray = products.products;

    // HTML elements
    const carouselInner = document.querySelector(".carousel-inner");
    const carouselIndicators = document.querySelector(".carousel-indicators");


    // Filtrar los productos destacados (isOutstanding: true)
    const featuredProducts = productsArray.filter(
      (product) => product.isOutstanding
    );

    // Iterar sobre el array de productos destacados para mostrarlos
    featuredProducts.forEach((product, index) => {
      // La clase 'active' se añade solo al primer elemento del carrusel
      const activeClass = index === 0 ? "active" : "";

      // Crear el HTML para los productos en el carrusel
      const productHTML = `
              <div class="carousel-item ${activeClass}">
                  <img src="${product.image}" class="d-block w-100" alt="${
        product.name
      }">
                  <div class="carousel-caption d-none d-md-block">
                      <h3 class="fs-5 w-bold text-uppercase product-name">${product.name}</h3>
                      <p class="fs-4 w-bold">EUR ${product.price.toFixed(2)}</p>
                      <a href="product.html?id=${product.id}" class="btn btn-dark mb-2" alt="botón para ir al detalle del producto">Más info</a>
                  </div>
              </div>
          `;
      // Agregar el HTML del producto al contenedor del carrusel
      carouselInner.innerHTML += productHTML;

      // Crear el HTML para los indicadores del carrusel
      const indicatorHTML = `
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="${index}" 
              class="${activeClass}" aria-current="${
        index === 0 ? "true" : "false"
      }" aria-label="${product.name}">
              </button>
          `;
      // Agregar el HTML del indicador al contenedor de indicadores
      carouselIndicators.innerHTML += indicatorHTML;
    });
  }

  // Cargar productos desde products.json y mostrar en el sitio
  fetch("data/products.json")
    .then((response) => response.json())
    .then((data) => displayFeaturedProducts(data));
})();
