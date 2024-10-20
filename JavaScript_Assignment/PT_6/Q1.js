// Define the input string
let input = "Hello, World!";

// Function to reverse a string
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Use setTimeout to create a delay
setTimeout(() => {
    // Reverse the string after 2 seconds
    let reversed = reverseString(input);
    // Print the reversed string
    console.log(reversed);
}, 2000); // 2000 milliseconds = 2 seconds
