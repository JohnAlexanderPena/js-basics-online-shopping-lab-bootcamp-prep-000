var cart = [];

function getCart(item) {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item){
this.itemName = item;
this.itemPrice = price;
  
var price = Math.floor(Math.random()*101);

cart.push(`itemName: ${item}, itemPrice: ${price}`);

console.log(`${item} has been added to your cart.`);


return cart;
  
}

function viewCart() {
  // write your code here
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
