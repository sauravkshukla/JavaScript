// Attempt to call the function before it's declared
try {
    let result = multiplyNumbers(5, 7);
    console.log(result); // This will not work, an error will be thrown
} catch (error) {
    console.log(error); // ReferenceError: Cannot access 'multiplyNumbers' before initialization
}

// Function expression
const multiplyNumbers = function (a, b) {
  return a * b;
};
