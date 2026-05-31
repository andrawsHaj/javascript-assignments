// --- Create the Data ---
const menu = [
  { id: 1, name: "Burger",       category: "Food",    price: 35,  available: true  },
  { id: 2, name: "Pizza",        category: "Food",    price: 50,  available: true  },
  { id: 3, name: "Orange Juice", category: "Drink",   price: 12,  available: false },
  { id: 4, name: "Cola",         category: "Drink",   price: 8,   available: true  },
  { id: 5, name: "Ice Cream",    category: "Dessert", price: 15,  available: true  },
  { id: 6, name: "Caesar Salad", category: "Food",    price: 28,  available: true  },
  { id: 7, name: "Cheesecake",   category: "Dessert", price: 22,  available: false },
  { id: 8, name: "Water",        category: "Drink",   price: 5,   available: true  },
];

const customer = {
  name: "Ahmad",
  budget: 120,      
  isStudent: true,
};
 
const order = [1, 3, 5];

        


// --- Display the Menu ---
function displayMenu(){
menu.forEach((item) => {
    if (item.available === true) {
      console.log(item.id + " - " + item.name + " - " + item.category + " - " + item.price + " NIS - Available");
    } else {
      console.log(item.id + " - " + item.name + " - " + item.category + " - " + item.price + " NIS - Not Available");
    }
  });
}
displayMenu()


function getAvailableItems(){
  return menu.filter((item) => item.available === true);
}
console.log(getAvailableItems())



function findItemById(id){
    const found= menu.find((item) => {
        return item.id === id;
    })
    if(found){
        return found;
    }
    else{
        return "Item not found";
    }
}
console.log(findItemById(8))



// ---Order Logic---
function  getOrderItems(){
    const orderItem = order.map((id) => {
        const found = menu.find((item) => {
            return item.id === id
        });
        return found;
    
    });
    return orderItem;
}
console.log(getOrderItems())




function validateOrder() {
  order.forEach((id) => {
    let item = menu.find((menuItem) => {
      return menuItem.id === id;
    });

    if (item === undefined) {
      console.log("This item does not exist.");
    } else if (item.available === false) {
      console.log("Sorry, This item is currently not available.");
    }
  });
}
validateOrder()




// ---Payment and Discount---
function calculateTotal(){
    const total = order.reduce((sum,id) => {
        const item = menu.find((menuItem) => {
            return menuItem.id === id;
        });
        return sum + item.price;
    }, 0);

return total;
}
console.log(calculateTotal())



function applyDiscount(){
    let total = calculateTotal();
    let discountPercentage = 0;

  if (total > 150) {
    discountPercentage = 20;
  } else if (total > 100) {
    discountPercentage = 15;
  } else if (customer.isStudent === true) {
    discountPercentage = 10;
  }

  let discountAmount = (total * discountPercentage) / 100;
  let finalTotal = total - discountAmount;

  return {
    originalTotal: total,
    discountPercentage: discountPercentage,
    discountAmount: discountAmount,
    finalTotal: finalTotal,
  };
}
console.log(applyDiscount())


function canCustomerPay() {
  let discountInfo = applyDiscount();

  if (customer.budget >= discountInfo.finalTotal) {
    return true;
  } else {
    return false;
  }
}
console.log(canCustomerPay())




function printReceipt(discountInfo) {
console.log("========== RECEIPT ==========");
  console.log("Restaurant: JavaScript Burger House");
  console.log("Customer: " + customer.name);
  console.log("Items:");

  order.forEach((id) => {
    let item = menu.find((menuItem) => {
      return menuItem.id === id;
    });

    console.log("- " + item.name + ": " + item.price + " NIS");
  });

  console.log("Original Total: " + discountInfo.originalTotal + " NIS");
  console.log("Discount: " + discountInfo.discountPercentage + "%");
  console.log("Discount Amount: " + discountInfo.discountAmount + " NIS");
  console.log("Final Total: " + discountInfo.finalTotal + " NIS");
  console.log("Customer Budget: " + customer.budget + " NIS");

  if (canCustomerPay(discountInfo.finalTotal) === true) {
    console.log("Paid Successfully");
  } else {
    console.log("Not Enough Money");
  }

  console.log("=============================");
}
let total = calculateTotal();
let discountInfo = applyDiscount(total);
printReceipt(discountInfo);





// Bonus

function countItemsByCategory(){
 let result = order.reduce((acc, id) => {
    let item = menu.find((menuItem) => {
      return menuItem.id === id;
    });

    if (acc[item.category] === undefined) {
      acc[item.category] = 1;
    } else {
      acc[item.category] = acc[item.category] + 1;
    }
                           
    return acc;
  }, {});

  return result;
}
console.log(countItemsByCategory())




function getMostExpensiveItem() {
  let mostExpensive = null;

  order.forEach((id) => {
    let item = menu.find((menuItem) => {
      return menuItem.id === id;
    });

    if (mostExpensive === null || item.price > mostExpensive.price) {
      mostExpensive = item;
    }
  });
  console.log("Most expensive item: " + mostExpensive.name + " - " + mostExpensive.price + " NIS");
}
getMostExpensiveItem();




const orderUpdate = [
  { id: 1, quantity: 2 },
  { id: 4, quantity: 1 },
  { id: 5, quantity: 3 },
];



function calculateTotal() {
  let total = orderUpdate.reduce((sum, orderItem) => {
    let item = menu.find((menuItem) => {
      return menuItem.id === orderItem.id;
    });

    return sum + item.price * orderItem.quantity;
  }, 0);
  console.log("Total = " + total);

  return total;
}
calculateTotal();
