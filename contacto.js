// CONTACTO 

// Boton de NOMBRE- CELULAR - MAIL -


class Cliente {
    constructor(nombre, celular , mail, direccion, mensaje){
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
  
  let formulario= document.getElementById ("customer");
  function mostrarCliente (cliente){
  formulario.innerHTML = `<h1> Gracias ${cliente.nombre} ! Sus datos ya fueron registrados y en breve se lo enviaremos a la dirección ${cliente.direccion}</h1>`;
  }
  
  
  
  
  
  