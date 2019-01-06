var cart = [];

function getCart(item) {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemName = {itemName: `${item}`};
  var itemPrice = {itemprice: price};
  var price = Math.floor((Math.random() * 100) + 1);
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
