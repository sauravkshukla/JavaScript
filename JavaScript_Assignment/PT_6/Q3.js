// Store's inventory with prices in USD
let storeInventory = {
    "apple": 2,
    "banana": 1,
    "orange": 3,
    "milk": 5,
    "bread": 4
};

// Exchange rate: 1 USD = 80 INR
const exchangeRate = 80;

// Function to convert prices from USD to INR using map
function convertPricesToINR(inventory, rate) {
    // Convert the inventory into an array of key-value pairs, map over it, and then convert it back to an object
    return Object.fromEntries(
        Object.entries(inventory).map(([item, price]) => [item, price * rate])
    );
}

// Convert the store inventory prices to INR
let storeInventoryInINR = convertPricesToINR(storeInventory, exchangeRate);

console.log("Prices in INR:", storeInventoryInINR);
