// Task 1: Object Properties
const customer = {  //declare object 
    name: "Amy Hill",
    age: 19,
    email: "emily.hill@email.com"
};
//logging each property 
console.log(`Customer Name: ${customer.name}`);
console.log(`Customer Age: ${customer.age}`);
console.log(`Customer Email: ${customer.email}`);

// Task 2: Object Methods
const order = { //declare object
    orderId: 04873,
    totalAmount: 130,
    status: "Processing",
    displayOrder: function() { //adding method 
        console.log(`Order ID: ${this.orderId}`); //logging details
        console.log(`Total Amount: $${this.totalAmount}`);
        console.log(`Status: ${this.status}`);
    }
};

order.displayOrder();

// Task 3: Array Manipulation (push, pop, shift, unshift)
const cartItems = ["Apple", "Orange", "Berry"]; //declare array

cartItems.push("mango"); //add new product
cartItems.pop("Berry"); //remove last item
cartItems.unshift("Kiwi"); //add item at beginning 
cartItems.shift("Apple"); //remove first item

console.log("Final Cart Items:", cartItems); //final array

// Task 4: Map Method
const prices = [120, 300, 100]; //declare array 
const discountedPrices = prices.map(price => price * 0.10); //apply 10% discount 
console.log("Discounted Prices:", discountedPrices); //logged new discount price

// Task 5: Filter Method
const inventory = [7, 10, 16, 9, 10]; //declare array
const availableStock = inventory.filter(quantity => quantity > 0); //remove products with zero stock
console.log("Available Stock:", availableStock); //logged filtered array 

// Task 6: Reduce Method
const sales = [400, 100, 600, 800]; //declare array
const totalRevenue = sales.reduce((acc, sale) => acc + sale, 0); //calculate total revenue 
console.log("Total Revenue:", totalRevenue); //logged total revenue 

// Task 7: find() Method
const customers = ["Alice", "Bob", "Charlie", "David"]; //declare array
const foundCustomer = customers.find(customer => customer === "Charlie"); //locate the customer using .find
console.log("Found Customer:", foundCustomer); //logged result 

// Task 8: Function Declaration
function calculateTax(amount, taxRate) { //Return the calculated tax and log it using a template literal
    const tax = amount * taxRate;
    console.log(`Calculated Tax: $${tax.toFixed(2)}`);
    return tax;
}

calculateTax(1500, 0.10);

// Task 9: Function Expression
const applyDiscount = function(price, discount) { //declare function expression 
    // const discountedPrice = price - (price * discount); //Return the discounted price
    console.log(`Discounted Price: $${discountedPrice.toFixed(2)}`); //log 
    return discountedPrice;
};

applyDiscount(1000, 0.08);

// Task 10: Arrow Function
const calculatePoints = purchaseAmount => { //arrow function
    const points = Math.floor(purchaseAmount / 10); //Return 1 point per $10 spent and log the result
    console.log(`Loyalty Points Earned: ${points}`);
    return points;
};

calculatePoints(250);
