(() => {
  "use strict";


  function displayDetailProduct(products) {
    console.log('products', products);
    console.log('Pagina de detalle del producto')

  }

  // Cargar productos desde products.json y mostrar en el sitio
  fetch("data/products.json")
    .then((response) => response.json())
    .then((data) => displayDetailProduct(data));
})();