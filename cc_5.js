// Task 1: Object Properties
const customer = {
    name: "Amy Hill",
    age: 19,
    email: "emily.hill@email.com"
};

console.log(`Customer Name: ${customer.name}`);
console.log(`Customer Age: ${customer.age}`);
console.log(`Customer Email: ${customer.email}`);

// Task 2: Object Methods
const order = {
    orderId: 04873,
    totalAmount: 130,
    status: "Processing",
    displayOrder: function() {
        console.log(`Order ID: ${this.orderId}`);
        console.log(`Total Amount: $${this.totalAmount}`);
        console.log(`Status: ${this.status}`);
    }
};

order.displayOrder();

// Task 3: Array Manipulation (push, pop, shift, unshift)
const cartItems = ["Apple", "Orange", "Berry"];

cartItems.push("mango");
cartItems.pop();
cartItems.unshift("Kiwi");
cartItems.shift();

console.log("Final Cart Items:", cartItems);