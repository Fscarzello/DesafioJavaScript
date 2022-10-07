cartOpen.addEventListener('click', () => {

    cart.classList.toggle('cover__cart-active')

});

cartClose.addEventListener('click', () => {

    cart.classList.toggle('cover__cart-active')

});

cartBox.addEventListener('click', (e) => {

    e.stopPropagation()

});

cart.addEventListener('click', () => {

    cartClose.click()

});

buyAllBtn.addEventListener('click', () => {

    if (shoppingCart.length > 0) {

        deleteStorage();
        alertBuy();

    } else {

        alertNone();

    }

});

const initializationA = (data) => {

    contentJSON = data
    contentJSON.forEach(element => {

        showA += addDataA(element)

    })
    boxProductsNew.innerHTML = showA

    const add = document.querySelectorAll(".add");
    add.forEach(btn => {

        btn.addEventListener('click', addEvent); 
            
    });

}

const initializationB = (data) => {

    contentJSON = data
    contentJSON.forEach(element => {

        showB += addDataB(element)

    })
    boxProductsOffers.innerHTML = showB

    const add = document.querySelectorAll(".add");
    add.forEach(btn => {

        btn.addEventListener('click', addEvent);
            
    });

}

const addDataA = (content) => {

    const {id, description, price, img} = content;
    let showProdA = "";
    showProdA += `
        
        <div class="box__prod">

            <div class="box__prod-img">

                <a href="#">

                    <img src="${img}" alt="prod-new-${id}">

                </a>

            </div>

            <div class="box__prod-info">

                <a href="#">

                    <h3> ${price} $ </h3>

                </a>

                <p class="description"> ${description.toUpperCase()} </p>
                <button id="add${id}" class="anim-btn add"> Añadir al Carrito </button>

            </div>

        </div>
        
    `;
    return showProdA;

}

const addDataB = (content) => {

    const {id, description, price, img} = content;
    let showProductB = "";
    showProductB += `
    
        <div class="box__prod">

            <div class="box__prod-img">

                <a href="#">

                    <img src="${img}" alt="prod-new-${id}">

                </a>

            </div>

            <div class="box__prod-info">

                <a href="#">

                    <h3> ${price} $ </h3>

                </a>

                <p class="description"> ${description.toUpperCase()} </p>
                <button id="add${id}" class="anim-btn add"> Añadir al Carrito </button>

            </div>

        </div>
    
    `;
    return showProductB;

}

const alertSuccessful = () => {

    const Toast = Swal.mixin({

        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {

          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)

        }

    })
      
      Toast.fire({

        icon: 'success',
        title: '¡Producto agregado al carrito!',
        background: '#3c70a3',
        customClass: {

            popup: 'popup-sweet',
            title: 'title-sweet',
            timerProgressBar: 'progress-sweet'

        }

    })

}

const alertRemove = () => {

    const Toast = Swal.mixin({

        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {

          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)

        }
    })
      
      Toast.fire({

        icon: 'error',
        title: '¡Producto eliminado del carrito!',
        background: '#3c70a3',
        customClass: {

            popup: 'popup-sweet',
            title: 'title-sweet',
            timerProgressBar: 'progress-sweet'

        }

    })

}

const alertError = () => {

    Swal.fire({

        icon: 'error',
        title: 'Oops...',
        text: '¡Ha ocurrido un error, prueba más tarde!',
        background: '#3c70a3',
        customClass: {

            popup: 'popup-sweet',
            title: 'title-sweet',
            confirmButton: 'button-sweet anim-btn',
            htmlContainer: 'html-container-sweet'

        }

    })

}

const alertNone = () => {

    Swal.fire({

        icon: 'error',
        title: '¡Carrito Vacio!',
        text: 'Aun no haz agregado productos a tu carrito.',
        background: '#3c70a3',
        customClass: {

            popup: 'popup-sweet',
            title: 'title-sweet',
            confirmButton: 'button-sweet anim-btn',
            htmlContainer: 'html-container-sweet'

        }

    })

}

const alertLoading = () => {

    let timerInterval

        Swal.fire({
        title: '¡Cargando!',
        html: '<b></b> ms.',
        timer: 1000,
        timerProgressBar: true,
        background: '#3c70a3',
        customClass: {

            popup: 'popup-sweet',
            title: 'title-sweet',
            htmlContainer: 'html-container-sweet',
            timerProgressBar: 'progress-sweet'

        },

        didOpen: () => {

            Swal.showLoading()
            const b = Swal.getHtmlContainer().querySelector('b')
            timerInterval = setInterval(() => {
            b.textContent = Swal.getTimerLeft()
            }, 100)

        },

        willClose: () => {

            clearInterval(timerInterval)

        }

        })

        .then((result) => {

        if (result.dismiss === Swal.DismissReason.timer) {

            console.log("");        

        }
    })

}

const alertBuy = () => {

    const priceAll = document.querySelector(".total-price").innerText;

    const swalWithBootstrapButtons = Swal.mixin({

        background: '#3c70a3',
        customClass: {

            popup: 'popup-sweet',
            title: 'title-sweet',
            htmlContainer: 'html-container-sweet',
            confirmButton: 'btn btn-success anim-btn',
            cancelButton: 'btn btn-danger anim-btn'

        },
        buttonsStyling: false

      })
      
      swalWithBootstrapButtons.fire({

        title: '¿Quieres Comprar Todo?',
        text: `Se te descontará ${priceAll} $ de tu saldo en Scar Tragos`,
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Sii, ¡Comprar Todo!',
        cancelButtonText: '¡No!, me he arrepentido',
        reverseButtons: true

      })

      .then((result) => {

        if (result.isConfirmed) {

          swalWithBootstrapButtons.fire(

            '¡Gracias Por Tu Compra!',
            'Tus productos se te enviaran muy pronto...',
            'success'

          )

        } 

        else if (result.dismiss === Swal.DismissReason.cancel) {

          swalWithBootstrapButtons.fire(

            '¡Cancelaste tu compra!',
            'No se te descontara nada de tu saldo',
            'error'

          )

        }

      })

}