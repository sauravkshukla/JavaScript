// Define ticket prices
const childPrice = 100;
const adultPrice = 150;
const seniorPrice = 120;

// Get viewer types and quantities
let numChildren = 2;
let numAdults = 1;
let numSeniors = 1;

// Calculate total price
let totalPrice = (numChildren * childPrice) +
                  (numAdults * adultPrice) +
                  (numSeniors * seniorPrice);

// Print the total price
console.log(`The total price to be paid is Rs. ${totalPrice}`);
