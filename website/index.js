let nextCartId = 0
let cartList = []
const cartListKey = "cartItems"

initializeData()
//Displays the shopping cart stored in local storage if it exists upon loading page
function initializeData() {
  displayCart()
}

function addItemCart(itemName,price) {

  // retrieve it (Or create a blank array if there isn't any info saved yet),
  var items = JSON.parse(localStorage.getItem('cartItems')) || [];

  //If nothing is in local storage then the below for/in loop cant add it so this catches that case.
  if (items.length == 0){
  quantity = 1
  items.push({quantity, itemName, price})
  }

  //If it does exist in the cart increment the quantity by 1.
  else{
    for (itemIndex in items) {
      //Increment the quantity
      if (items[itemIndex].itemName == itemName){
        items[itemIndex].quantity+=1
        break
      }

      // otherwise add the item to the cart.
      else if (itemIndex == (items.length-1)){
        quantity = 1
        items.push({quantity, itemName,price})
      }
    } 
  }

  // add task to localStorage
  stringData = JSON.stringify(items)
  localStorage.setItem(cartListKey, stringData)

  // Update Shopping Cart List page 
  displayCart()

}

// Display cart pulls the current local storage on page load or any time a new item is added.
function displayCart() {
  var localStorageItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  let shoppingCartElement = document.getElementById("to-do-list")
  shoppingCartTotalPrice = 0


  //erase the shopping cart
  shoppingCartElement.innerHTML = ''

  //add each item from local storage to the shopping cart.
  for (itemIndex in localStorageItems){
    let shoppingCartItem = document.createElement("li")
    shoppingCartItem.id = "cart-item-" + nextCartId
    shoppingCartItem.innerHTML = localStorageItems[itemIndex].quantity + '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0' + localStorageItems[itemIndex].itemName +'\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0' + (localStorageItems[itemIndex].price*localStorageItems[itemIndex].quantity)
    shoppingCartElement.appendChild(shoppingCartItem)
    nextCartId += 1
    shoppingCartTotalPrice+= (localStorageItems[itemIndex].price*localStorageItems[itemIndex].quantity)
  }

  total = document.getElementById("total")
  total.innerHTML = "Total Shopping Cart Price: "+ shoppingCartTotalPrice

}


function openPage(pageName, elmnt, color) {
  // Hide all elements with class="tabcontent" by default */
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Remove the background color of all tablinks/buttons
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }

  // Show the specific tab content
  document.getElementById(pageName).style.display = "block";

  // Add the specific color to the button used to open the tab content
  elmnt.style.backgroundColor = color;
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();