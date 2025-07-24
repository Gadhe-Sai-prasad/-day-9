
// TODO: Create arrays for different Blinkit data

// Customer's shopping cart
let cartShopping = ["chips 2 packs", "kurkure",  "lays", "goodie biscuit", "twingles"
];

// Available product categories
let productCategories = [
    "Snacks",
    "Snacks & Munchies",
    "Snacks & Munchies",
    "Snacks & Munchies",
    "Snacks & Munchies"
];

// Delivery time slots
let deliverySlots = [
    "7:00 AM - 8:00 AM",
    "8:00 AM - 9:00 AM",
    "12:00 AM - 2:00 PM",
    "2:00 PM - 4:00 PM",
    "4:00 PM - 6:00 PM"
];

// Blinkit store locations
let storeLocations = [
    "l.b.nagar",
    "Dilshuknagar",
    "S.R Nagar",
    "Chaitanyapuri",
    "Victoria Memorial"
];

// Customer list
let recentCustomers = [
    "Sai Prasad",
    "Kavya",  
    "Srinivas",
    "Pranay"
];

// TODO: Display all arrays
console.log("=== CART SHOPPING===");
console.log("Total items:", cartShopping.length);
console.log("1.", cartShopping[0]);
console.log("2.", cartShopping[1]);
console.log("3.", cartShopping[2]);
console.log("4.", cartShopping[3]);
console.log("5.", cartShopping[4]);
console.log("First item:", cartShopping[0]);
console.log("Last item:", cartShopping[cartShopping.length - 1]);

console.log("\n=== PRODUCT CATEGORIES ===");
console.log("Total categories:", productCategories.length);
for (let i = 0; i < productCategories.length; i++) {
    console.log((i + 1) + ".", productCategories[i]);
}

console.log("\n=== DELIVERY SLOTS ===");
console.log("Available slots:", deliverySlots.length);
console.log("Morning:", deliverySlots[0]);
console.log("Mid-Morning:", deliverySlots[1]);
console.log("Noon:", deliverySlots[2]);
console.log("Afternoon:", deliverySlots[3]);
console.log("Evening:", deliverySlots[4]);

console.log("\n=== STORE LOCATIONS ===");
console.log("Total stores:", storeLocations.length);
console.log("Nearest:", storeLocations[0]);
console.log("All locations:", storeLocations[0] + ", " + storeLocations[1] + ", " + 
           storeLocations[2] + ", " + storeLocations[3] + ", " + storeLocations[4]);

console.log("\n=== RECENT CUSTOMERS ===");
console.log("Total customers:", recentCustomers.length);
console.log("Latest:", recentCustomers[0]);
console.log("Second:", recentCustomers[1]);
console.log("Third:", recentCustomers[2]);
console.log("Fourth:", recentCustomers[3]);

// TODO: Test array benefits
console.log("\n=== ARRAY BENEFITS TEST ===");
console.log("Easy counting:", cartShopping.length + " items in cart");
console.log("Easy access:", "First category is " + productCategories[0]);
console.log("Arrays organize multiple items perfectly! ✅");
