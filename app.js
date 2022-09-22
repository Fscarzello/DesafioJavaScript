

// CONTACTO 

// Boton de NOMBRE- CELULAR - MAIL -


class Cliente {
  constructor(nombre, celular , mail, direccion, instagram , amigos, face, mensaje){
    this.nombre = nombre;
    this.celular = celular;
    this.mail = mail;
    this.direccion = direccion;
    this.mensaje = mensaje;
  }
}

let boton = document.getElementById("enviar");
boton.addEventListener("click", cargarCliente); 
                                                        

//caputra elementos
let cliente1= {}

function cargarCliente(){
  let nombre = document.getElementById("formName").value;
  let celular = document.getElementById("formCell").value;
  let mail = document.getElementById("formMail").value;
  let direccion=  document.getElementById("formDirec").value;
  let mensaje=  document.getElementById("mensaje").value;
  cliente1= new Cliente (nombre, celular,mail,direccion,mensaje)
console.log(cliente1);
mostrarCliente(cliente1)
}

let lista = document.getElementById(`lista`)
let checks = document.querySelectorAll(`.valores`);


boton.addEventListener("click", function (){
  checks.forEach((e)=>{
    if(e.checked == true){
      console.log(e.value)
    }
  })

})

//BORRAS LOS ELEMENTOS 
function mostrarCliente (cliente){
  let formulario= document.getElementById ("customer");
  formulario.innerHTML = "";
}



//AGREGAR ELEMENTOS 
let nuevoContenido = document.createElement("div");
nuevoContenido.className = `list-group`
nuevoContenido.innerHTML = `<h1> Gracias ${Cliente.nombre} ! Sus datos ya fueron registrados y en breve se lo enviaremos a la dirección $ {Cliente.direccion}</h1>`

formulario.appendChild(nuevoContenido);




// CARRITO DE PRODUTOS



 const btnCart = document.getElementById('btnCart')
 const btnVaciarCarrito = document.getElementById('btnVaciarCarrito');
 let contadorCarrito = document.getElementById('contadorCarrito');
 const productos = document.getElementById('productos');
 let carritoDeCompras = [];


 // carga el dom y ejecuta el fetch para obtener los datos de la api local
 window.addEventListener('DOMContentLoaded', () => {

  fetch('api.json')
  .then(response => response.json())
  .then(products => {
      console.log(products)
      
      renderProductos(products)
   
      
  })
  
  .catch( er => console.log(er))
  console.log('dom cargado')
})

 const dibujarProductos =()=>{
let contenedor= document.getElementById(`productos`);
productos.forEach((producto,indice)=>{
  let card= document.createElement("div");
  card.classList.add("card" , "col-sm-12", "col-lg-3");   //agrego una lista de clase
  card.innerHTML=` <img src="${producto.imagen}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${producto.nombre}</h5>
    <p class="card-text">${producto.precio}</p>
    <a href="#" class="btn btn-primary">Añadir al carrito</a>
  </div>`
  contenedor.appendChild(card)
})

}

dibujarProductos()
