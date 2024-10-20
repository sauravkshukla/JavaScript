function calculateTotal(...prices) {
    let total = 0;
    for (let price of prices) {
        total += price;
    }
    return total;
}
let ans = calculateTotal(125,20,30)
console.log(`The total cart value is : ${ans}`); 
