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

// Task 4: Map Method
const prices = [120, 300, 100];
const discountedPrices = prices.map(price => price * 0.6);
console.log("Discounted Prices:", discountedPrices);

// Task 5: Filter Method
const inventory = [7, 10, 16, 9, 10];
const availableStock = inventory.filter(quantity => quantity > 0);
console.log("Available Stock:", availableStock);

// Task 6: Reduce Method
const sales = [400, 100, 600, 800];
const totalRevenue = sales.reduce((acc, sale) => acc + sale, 0);
console.log("Total Revenue:", totalRevenue);

// Task 7: find() Method
const customers = ["Alice", "Bob", "Charlie", "David"];
const foundCustomer = customers.find(customer => customer === "Charlie");
console.log("Found Customer:", foundCustomer);