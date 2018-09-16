var myModule = (function () {

  var numItems = document.getElementById("count");
  var totalCost = document.getElementById("sumCost");
  //set total and cart items to 0
  var total = 0;
  var amount = 0;

  //update cart display for each if statement and when cart is cleared
  var updateCart = function(amount, total) {
    numItems.innerHTML = amount;
    totalCost.innerHTML = "$" + total;
  };

  //public method
  var addPrice = function(itemName) {

    var brandPrices = [{brand: "extra", price: 1.50},
                       {brand: "doubleMint", price: 1.00},
                       {brand: "trident", price: 1.25},
                       {brand: "bubbleGum", price: 1.75}
                      ];
    //create empty array to push in clicked items
    var newArray = [];

    if (itemName === "extra") {
      newArray.push({brand: "extra", price: 1.50});
      total += brandPrices[0].price;
      amount += newArray.length;
    }

    if (itemName === "doubleMint") {
      newArray.push({brand: "doubleMint", price: 1.00});
      total += brandPrices[1].price;
      amount += newArray.length;
    }

    if (itemName === "trident") {
      newArray.push({brand: "trident", price: 1.25});
      total += brandPrices[2].price;
      amount += newArray.length;
    }

    if (itemName === "bubbleGum") {
      newArray.push({brand: "bubbleGum", price: 1.75});
      total += brandPrices[3].price;
      amount += newArray.length;
    }
    //call private method updateCart to display new total and amount values
    updateCart(amount,total);

  };//end of addPrice method

  //public method
  var clear = function() {
    amount = 0;
    total = 0;
    updateCart(amount,total);
  };

  //return public methods
  return {
    addPrice: addPrice,
    clear: clear
  };

})();//end of module

//Events

document.getElementById("extra").addEventListener("click", function() {
  myModule.addPrice("extra");
  console.log("added extra");
});

document.getElementById("doubleMint").addEventListener("click", function() {
  myModule.addPrice("doubleMint");
  console.log("added double mint");
});

document.getElementById("trident").addEventListener("click", function() {
  myModule.addPrice("trident");
  console.log("added trident");
});

document.getElementById("bubbleGum").addEventListener("click", function() {
  myModule.addPrice("bubbleGum");
  console.log("added bubble gum");
});

document.getElementById("clearCart").addEventListener("click", function() {
  myModule.clear();
  console.log("cart cleared");
});
