(() => {
  "use strict";

  // Obtener el id del producto desde la URL y el parametro 'id'
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get("id");

  function displayProductDetails() {
    fetch("data/products.json")
      .then((response) => response.json())
      .then((data) => {
        const product = data.products.find(
          (item) => item.id.toString() === productId
        );

        if (product) {
          const productDetail = `
                    <div class="row">
                      <div class="col-12 pb-5">
                          <h1 class="text-center product-name">${product.name}</h1>
                      </div>
                    </div>
                    <div class="row pt-2">
                      <div class="col-md-7">
                          <img src="${product.image}" class="img-fluid" alt="${product.name}">
                      </div>
                      <div class="col-md-5">
                          <p class="fw-bold">Descripción:</p>
                          <p class="product-description">${product.description}</p>
                          <p class="fw-bold">Precio:</p>
                          <p class="fw-bold fs-4">EUR ${product.price}</p>
                          <p class="fw-bold">Stock: ${product.stock}</p>
                      </div>
                    </div>
                `;
          document.getElementById("product-detail").innerHTML = productDetail;
        }
      });
  }

  displayProductDetails();
})();
