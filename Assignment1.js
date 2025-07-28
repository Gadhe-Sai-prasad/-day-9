// TODO: Create variables for "Britannia Bread"
let manufacturedProductName = "Britannia White Bread";
let ActualPrice = 30;
let Offer = 3;
let isAvailable = true;
let deliveryMinutes = 17;
let belongs = "Bakery";

// TODO: Customer details
let boughtBy = "Sai";
let boughtAge = 22;
let hasPremiumService = true;
//sai prasad

// TODO: Simple calculations (primitives working together)
let finalPrice = ActualPrice - Offer;
let deliveryHours = deliveryMinutes / 60;

// TODO: Display everything using console.log
console.log("=== BLINKIT MANUFACTURED PRODUCT INFORMATION ===");
console.log("Manufactured Product Name:", manufacturedProductName);
console.log("Belongs to :", belongs);
console.log("Actual Price: ₹" + ActualPrice);
console.log("Offer: ₹" + Offer);
console.log("Final Price: ₹" + finalPrice);
console.log("Is Available:", isAvailable ? "Yes ✅" : "No ❌");
console.log("DeliveryTime:", deliveryMinutes + " minutes (" + deliveryHours + " hours)");

console.log("\n=== CUSTOMER INFORMATION ===");
console.log("Customer Name:", boughtBy);
console.log("Age:", boughtAge + " years");
console.log("Membership:", hasPremiumService ? "Premium 👑" : "Regular 👤");

// TODO: Test your understanding
console.log("\n=== CALCULATIONS TEST ===");
console.log("Is product affordable under ₹50?", finalPrice < 50);
console.log("Can deliver in under 30 minutes?", deliveryMinutes < 30);
console.log("Is customer adult?", boughtAge >= 18);
