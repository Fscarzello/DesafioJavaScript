



// CARRITO DE PRODUTOS



 const btnCart = document.getElementById('btnCart')
 const btnVaciarCarrito = document.getElementById('btnVaciarCarrito');
 const contadorCarrito = document.getElementById('contadorCarrito');
 const productos = document.getElementById('productos');
 const carritoDeCompras = [];


 // carga el dom y ejecuta el fetch para obtener los datos de la api local
 window.addEventListener('DOMContentLoaded', () => {

  fetch('../api.json')
  .then(response => response.json())
  .then(products => {
      console.log(products)
      
      renderProductos(products)
   
      
  })
  
  .catch( er => console.log(er))
  console.log('dom cargado')
})

function renderProductos(productos) {
  productos.forEach(({imagen, nombre, aviso, precio, id}) => {
      
      const prodHTML = `
          <div class="col-12 col-md-4 mt-3 mb-3 d-flex justify-content-center">
              <div class="card text-dark" style="width: 18rem;">
                  <img src= ${imagen} class="card-img-top">
                  <div class="card-body">
                      <h5 class="card-title">${nombre}</h5>
                      <p class="card-text">${aviso}</p>
                      <p class="card-text precio">$ ${precio}</p>
                      <button class="btn btn-primary btn--card btnComprar" dataset=${id} id="btnAgregar${id}">Añadir al carrito</button>
                      
                  </div>
              </div>
          </div>
      `;
      document.getElementById('productos').innerHTML += prodHTML;
      console.log(id)
  })
 

  // captura los click del contenedor de productos
  productos.addEventListener('click', e => {
    addCarrito(e)
})

}
// muestra el elemento del click btn comprar de cada card
const addCarrito = e => {
	console.log(e.target.classList.contains('btnComprar'))

    let cantidad = 1
    let nombre = document.querySelector('.card-title').textContent
    let precio = document.querySelector('.precio').textContent
    carritoDeCompras.push(cantidad)
    
    

    const renderCart = (carritoDeCompras) => {
    carritoDeCompras.forEach(({nombre, cantidad, precio}) => {

        let modalList = `
            <ul class="list-group">
                <li class="list-group-item d-flex justify-content-between align-items-center">
                <span class="badge bg-primary rounded-pill">${cantidad}</span>
                ${nombre} ${precio}
                <button type="button" class="btn btn-secondary" style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;">
                    rmv
                </button>
                </li>
            </ul>
            `;
        document.querySelector('.modal-body').innerHTML += modalList
    })

    renderCart()
}
        

	if(e.target.classList.contains('btnComprar')) {
     
      actualizarCarrito()
      almacenarCarrito()
	}
	e.stopPropagation()
}
