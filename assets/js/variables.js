const cartOpen = document.getElementById("cart");
const cartClose = document.getElementById("x-cart");

const cart = document.getElementsByClassName("cover")[0];
const cartBox = document.getElementsByClassName("cover__cart")[0];

const boxProductsNew = document.getElementById("products-new");
const boxProductsOffers = document.getElementById("products-offers");

const cartCounter = document.getElementById("cart-counter");
const totalPrice = document.querySelector(".total-price");
const boxProds = document.querySelector(".cover__cart-products");
const buyAllBtn = document.querySelector(".cover__cart-buy");

const newJSON = 'assets/js/product-new.json';
const offerJSON = 'assets/js/product-offer.json';

const productsNew = [];
const productsOffers = [];
const iva = 1.16;

let showA = "";
let showB = "";
let shoppingCart = [];
let contentJSON = [];