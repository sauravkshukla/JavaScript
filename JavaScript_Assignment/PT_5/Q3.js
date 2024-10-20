function addNumbers(a, b) {
    console.log(sum); // Outputs: undefined (due to hoisting)
    var sum = a + b;
    return sum;
}

let result = addNumbers(5, 7); 
console.log(result); // Outputs: 12
