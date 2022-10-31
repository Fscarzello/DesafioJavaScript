const addEvent = (e) => {

    const btn = e.target;
    const item = btn.closest(".box__prod");
    const itemImg = item.querySelector(".box__prod-img a img").src;
    const itemDescription = item.querySelector(".description").textContent;
    const itemPrice = item.querySelector(".box__prod-info a h3").textContent;

    const newItem = {

        desc: itemDescription,
        price: itemPrice,
        img: itemImg,
        amount: 1

    }

    addEventItem(newItem);
    alertSuccessful();

}

const addEventItem = (newItem) => {

    const inputCount = boxProds.getElementsByClassName("input-count");

    for (i = 0; i < shoppingCart.length; i++) {
       
        if (shoppingCart[i].desc.trim() === newItem.desc.trim()){

            shoppingCart[i].amount ++;
            const inputValue = inputCount[i]
            inputValue.value++;
            totalPrices();

            return null;

        }

    }

    shoppingCart.push(newItem);
    addEventShow();

}

const addEventShow = () => {

    boxProds.innerHTML = "";

    shoppingCart.map(item => {

        const div = document.createElement('div');
        div.classList.add('cart-product');
        div.innerHTML = `
                    
            <img src="${item.img}">
            <div>

                <p class="desc"> ${item.desc} </p>
                <p> Precio : ${item.price} </p>

            </div>
            <input type="number" min="1" value=${item.amount} class="input-count">
            <button class="cart-delete"><i class="fa-solid fa-delete-left"></i></button>
        
        `;

        boxProds.appendChild(div);

        div.querySelector(".cart-delete").addEventListener('click', removeItem);
        div.querySelector(".input-count").addEventListener('change', inputAddition);

    });

    totalPrices();

}

const totalPrices = () => {

    let total = 0;
    let counter = 0;
    shoppingCart.forEach((item) => {

        const priceItem = Number(item.price.replace("$", ''));
        total = total + priceItem*item.amount;
        counter = counter + item.amount;

    });

    totalPrice.innerHTML = `${total.toFixed(2)}`
    cartCounter.innerText = counter;
    saveStorage();

}

const removeItem = (e) => {

    const btnDelete = e.target;
    const div = btnDelete.closest(".cart-product");
    const desc = div.querySelector(".desc").textContent;

    for (i = 0; i < shoppingCart.length; i++){

        shoppingCart[i].desc.trim() === desc.trim() && shoppingCart.splice(i, 1);

    }

    div.remove();
    totalPrices();
    alertRemove();

}

const inputAddition = (e) => {

    const sumIn = e.target;
    const div = sumIn.closest(".cart-product");
    const desc = div.querySelector(".desc").textContent;

    shoppingCart.forEach(item => {

        if (item.desc.trim() === desc){

            sumIn.value <= 0 ? (sumIn.value = 1) : sumIn.value;
            item.amount = sumIn.value;
            totalPrices();

        }

    });

}

const saveStorage = () => {

    localStorage.setItem('cart', JSON.stringify(shoppingCart));

}

window.onload = () => {

    const storage = JSON.parse(localStorage.getItem('cart'));

    storage && (shoppingCart = storage); addEventShow(); 

}

const deleteStorage = () => {

    const storage = JSON.parse(localStorage.getItem('cart'));

    storage && localStorage.removeItem('cart');

}