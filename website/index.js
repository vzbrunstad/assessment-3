let nextCartId = 0
let cartList = []
const cartListKey = "cartItems"

initializeData()

function initializeData() {
  displayCart()

}


function addItemCart(itemName,price) {

  // retrieve it (Or create a blank array if there isn't any info saved yet),
  var items = JSON.parse(localStorage.getItem('cartItems')) || [];

  if (items.length == 0){
  quantity = 1
  items.push({quantity, itemName,price})
  }

  else{

    for (itemIndex in items) {

      if (items[itemIndex].itemName == itemName){
        items[itemIndex].quantity+=1
        break
      }

      else if (itemIndex == (items.length-1)){
        quantity = 1
        items.push({quantity, itemName,price})
      }
    } 
  }

  

 

  // add task to localStorage
  stringData = JSON.stringify(items)
  localStorage.setItem(cartListKey, stringData)

  // Update Shopping Cart List 
  displayCart()

}

function displayCart() {
  var localStorageItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  let shoppingCartElement = document.getElementById("to-do-list")
  shoppingCartTotalPrice = 0


  
  shoppingCartElement.innerHTML = ''

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
  // console.log(taskListElement)

  //  // add text to new list item
  
  // newListItem.innerHTML = taskName
  // // add list item to existing list
  // taskListElement.appendChild(newListItem)


  // var localStorage = JSON.parse(localStorage.getItem('cartItems'));
  //   console.log(localStorage)

  // // find existing parent list element
  // let taskListElement = document.getElementById("to-do-list")
  // if (!taskListElement) {
  //   return
  // }



  // // create a new list item
  // let newListItem = document.createElement("li")
  // newListItem.id = "list-item-" + nextListId
  // nextListId += 1
  // newListItem.className = "task-list-item"
  // // newListItem.addEventListener("click", toggleItemState)

  // // add text to new list item
  // newListItem.innerHTML = taskName

  // // add list item to existing list
  // taskListElement.appendChild(newListItem)















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