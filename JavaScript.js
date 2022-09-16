

// CONTACTO 

// Boton de NOMBRE- CELULAR - MAIL -


class Cliente {
  constructor(nombre, celular , mail, direccion, instagram , amigos, face, mensaje){
    this.nombre = nombre;
    this.celular = celular;
    this.mail = mail;
    this.direccion = direccion;
    this.instagram = instagram;
    this.amigos = amigos;
    this.face = face;
    this.mensaje = mensaje;
  }
}

let boton = document.getElementById("enviar");
boton.addEventListener("click", cargarCliente);                          //( parametro, funcion )

//caputra elementos
let cliente1= {}

function cargarCliente(){
  console.log("culo")
  let nombre = document.getElementById("formName").value;
  let celular = document.getElementById("formCell").value;
  let mail = document.getElementById("formMail").value;
  let direccion =  document.getElementById("formDirec").value;
  let instagram=  document.getElementById("code").value;
  let amigos=  document.getElementById("friends").value;
  let face=  document.getElementById("face").value;
  let mensaje=  document.getElementById("mensaje").value;
  cliente1= new Cliente (nombre, celular,mail,direccion,instagram,amigos,face,mensaje)
console.log(cliente1);
mostrarCliente(cliente1)
}

//BORRAS LOS ELEMENTOS 
function mostrarCliente (cliente){
  let formulario= document.getElementById ("customer");
  formulario.innerHTML = "";
}



//AGREGAR ELEMENTOS 
let nuevoContenido = document.createElement("div");
nuevoContenido.innerHTML = `<h1>Gracias ${Cliente.nombre} ! Sus datos ya fueron registrados y en breve se lo enviaremos a la dirección $ {Cliente.direccion}</h1>`


nuevoContenido.className ="Info-cliente";   //aplico la clase en mi nuevo div 
formulario.appendChild(nuevoContenido);


/*

// Productos

let producto = [
{
  id:1,
  nombre:"Pack Vino",
  precio:32000,
  imagen: "./Images/botellasVino.png",

},
{
  id:2,
  nombre:"Cerveza Busweise",
  precio:900,
  imagen: "./Images/cerveza-budweiser-lata.png",

},
{
  id:3,
  nombre:"Vodka Watermelon",
  precio:1400,
  imagen: "./Images/smirnoff-watermelon.png",

},
{
  id:4,
  nombre:"Cerveza Ipa",
  precio:900,
  imagen: "./Images/Ipa.png",

},
{
  id:5,
  nombre:"Whisky Jack Daniel",
  precio:4000,
  imagen:" ./Images/JackDaniel.png",

},
{
  id:6,
  nombre:"Cerveza Patagonia",
  precio:1000,
  imagen:"./Images/Patagonia.png",

},
{
  id:7,
  nombre:"Vodka",
  precio:2200,
  imagen:"./Images/vodka.png",

},
{
  id:8,
  nombre:"Vodka Absolut",
  precio:2800,
  imagen:"./Images/VodkaAbsolut.png",

},
{
  id:8,
  nombre:"Whisky",
  precio:5400,
  imagen:"./Images/WHISKY.png",

},
];



const dibujarProductos =document.querySelectorAll(`.btn-primary`);
dibujarProductos.forEach((producto)=>{
  producto.addEventListener(`click`, addToCartClicked);
});                                                                   //es una funcion que por cada metodo de array y cada eveno me va a ejecutar una funcion y por cada vuelta me devuele uno de los productos


function addToCartClicked (event){
  const button = event.target;
  const item = button.closest(`.card-img`)
}

*/