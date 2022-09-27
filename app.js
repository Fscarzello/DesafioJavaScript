// Variables del DOM

const btnCart = document.getElementById("btnCart");
const btnVaciarCarrito = document.getElementById("btnVaciarCarrito");
const contadorCarrito = document.getElementById("contadorCarrito");
const modalCarrito = document.getElementsByClassName("modal-body")[0];
let productos = [];

console.log(modalCarrito)

// carga el dom y ejecuta el fetch para obtener los datos de la api local y renderizar los productos
window.addEventListener("DOMContentLoaded", async () => {
  fetch("../api.json")
    .then((response) => response.json())
    .then((products) => {
      productos = products;
      renderProductos(productos);
    })
    .catch((er) => console.log(er));
});

function renderProductos(productos) {
  productos.forEach(({ imagen, nombre, precio, id }) => {
    const prodHTML = `
          <div class="col-12 col-md-4 mt-3 mb-3 d-flex justify-content-center">
              <div class="card text-dark" style="width: 18rem;">
                  <img src= ${imagen} class="card-img-top">
                  <div class="card-body">
                      <h5 class="card-title">${nombre}</h5>
                      <p class="card-text precio">$ ${precio}</p>
                      <button class="btn btn-primary btn--card btn-agregar" dataset=${id} id="btnAgregar${id}">Añadir al carrito</button>
                      
                  </div>
              </div>
          </div>
      `;

    document.getElementById("productos").innerHTML += prodHTML;
  });
}

document.addEventListener("click", function (e) {
  for (let producto of productos) {
    if (e.target && e.target.id === `btnAgregar${producto.id}`) {
      agregarCarrito(producto);
    }
  }
});

// Carrito
const carritoDeCompras = JSON.parse(localStorage.getItem("carrito")) || [];
let precioCarrito = JSON.parse(localStorage.getItem("precioCarrito")) || 0;
contadorCarrito.innerText = carritoDeCompras.length;
console.log(carritoDeCompras);

const agregarCarrito = (producto) => {
  let productoEnCarrito = false;

  for (let item of carritoDeCompras) {
    if (item.producto.id === producto.id) {
      productoEnCarrito = true;
      item.cantidad += 1;
    }
  }

  if (!productoEnCarrito) {
    carritoDeCompras.push({
      producto,
      cantidad: 1,
    });
  }

  contadorCarrito.innerText = carritoDeCompras.length;
  precioCarrito += producto.precio;
  console.log(carritoDeCompras);
  console.log("Precio carrito: ", precioCarrito);
  localStorage.setItem("carrito", JSON.stringify(carritoDeCompras));
  localStorage.setItem("precioCarrito", JSON.stringify(precioCarrito));

};

// previene el refresh del boton carrito
btnCart.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("btn carrito presionado");

  if (carritoDeCompras != null && carritoDeCompras != undefined) {
    // renderCart()
  } else {
    sweetAlertVaciar();
  }
  console.log(carritoDeCompras);
});
