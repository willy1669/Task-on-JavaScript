//E-commerce program that checks the quantity left and the cost 
//of items purchased
    //declaring variables for the store
    var boostStore = [
        {productName : "cardboard", price : 1000,    quantity : 8},
        {productName : "Aeroplane", price : 150000,   quantity : 3},
        {productName : "charger",  price : 5000,     quantity : 6},
        {productName : "phone", price : 25000,    quantity : 3},
    ];
    //declaring variables for list of orders
    var orders = [
        {productName : "Cardboard",  quantity : 3},
        {productName : "stabilizer", quantity : 2},
        {productName : "charger",    quantity : 4},

    ];
    function buyProduct(store,listOfOrder){
    //declaring other variables
    var totalPrice = 0;
    var newQuantity = 0;
    var newStore = [];
    
   
    //checking and comparing ordered items and items in the store
    orders.forEach(item =>{
        boostStore.forEach(product =>{
             if(product.productName == item.productName){ //checks if the orders are available in store
                if(item.quantity <= product.quantity){    //checks for quantity left after being ordered
                    totalPrice = item.quantity * product.price;  //calculates the total price of the item purchased
                    newQuantity = product.quantity - item.quantity;
                    newStore ="TotalPrice:" + totalPrice + " " +"QuantityLeft:"+newQuantity;
                    console.log(newStore);
                } else {
                    console.log("check back later");
                }
            } else {
                console.log("Relax as we stock our store");
              }
        });
    });

}
buyProduct("");



