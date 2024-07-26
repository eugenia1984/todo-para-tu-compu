(() => {
  "use strict";

  // Obtener el id del producto desde la URL y el parametro 'id'
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get("id");

  function displayProductDetails() {
    fetch("data/products.json")
      .then((response) => response.json())
      .then((data) => {

        const product = (data.products).find((item) => item.id.toString() === productId);

        if (product) {
          const productDetail = `
                    <div class="row pt-5">
                        <div class="col-md-6">
                            <img src="${product.image}" class="img-fluid" alt="${product.name}">
                        </div>
                        <div class="col-md-6">
                            <h1>${product.name}</h1>
                            <p>${product.description}</p>
                            <h4>$${product.price}</h4>
                        </div>
                    </div>
                `;
          document.getElementById("product-detail").innerHTML = productDetail;
        }
      });
  }

  displayProductDetails();
})();
