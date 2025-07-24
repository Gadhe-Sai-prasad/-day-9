
// TODO: Create a customer object
let customer = {
    name: "Sai Prasad",
    phone: "9948084756",
    email: "Sai@gmail.com",
    city: "Hyderabad",
    isPremium: true,
    age: 25
};

// TODO: Create a product object  
let manufacturedProduct = {
    name: "Kurkure",
    brand: "ITC",
    price: 20,
    category: "Snack",
    weight: "60g",
    inStock: true,
    deliveryTime: 10
};

// TODO: Create an order object using customer and product info
let productOrder = {
    customerName: customer.name,    // Using customer object!
    manufacturedProductName: manufacturedProduct.name,      // Using product object!
    quantity: 3,
    pricePerItem: manufacturedProduct.price,    // Using product object!
    totalAmount: manufacturedProduct.price * 3, // Calculation
    deliveryAddress: customer.city,  // Using customer object!
    orderDate: "Today",
    status: "Confirmed"
};

// TODO: Display organized information
console.log("=== CUSTOMER INFORMATION ===");
console.log("Name:", customer.name);
console.log("Phone:", customer.phone);
console.log("Email:", customer.email);
console.log("City:", customer.city);
console.log("Age:", customer.age + " years");
console.log("Membership:", customer.isPremium ? "Premium 👑" : "Regular 👤");

console.log("\n=== PRODUCT INFORMATION ===");
console.log("Name:", manufacturedProduct.name);
console.log("Brand:", manufacturedProduct.brand);
console.log("Price: ₹" + manufacturedProduct.price);
console.log("Category:", manufacturedProduct.category);
console.log("Weight:", manufacturedProduct.weight);
console.log("Stock:", manufacturedProduct.inStock ? "Available ✅" : "Out of Stock ❌");
console.log("Delivery:", manufacturedProduct.deliveryTime + " minutes");

console.log("\n=== ORDER SUMMARY ===");
console.log("Customer:", productOrder.customerName);
console.log("Product:", productOrder.ManufacturedProductName);
console.log("Quantity:", productOrder.quantity);
console.log("Price per item: ₹" + productOrder.pricePerItem);
console.log("Total Amount: ₹" + productOrder.totalAmount);
console.log("Delivery to:", productOrder.deliveryAddress);
console.log("Order Date:", productOrder.orderDate);
console.log("Status:", productOrder.status);

// TODO: Test object benefits
console.log("\n=== OBJECT BENEFITS TEST ===");
console.log("Easy access to customer name:", customer.name);
console.log("Easy calculation:", manufacturedProduct.price * 2);
console.log("Objects keep related data together! ✅");
