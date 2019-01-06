var cart = [];

function getCart(item) {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item){
 var [ {itemName: name, itemPrice: price} ];
 var price = Math.floor((Math.random() * 100));
 for (var i =0; i < cart.length; i++){
   cart.push(`${item} has been added to your cart.`);
   return cart;
}
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
