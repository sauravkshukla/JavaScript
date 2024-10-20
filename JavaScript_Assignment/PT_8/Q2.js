function manipulateString(str) {
    let manipulatedString = str.toUpperCase();
  
    function logString() {
      console.log(`The manipulated string is: ${manipulatedString}`);
    }
  
    return logString;
  }
  
  // Example usage:
  let log = manipulateString("hello, world!");
  log();  // Output: The manipulated string is: HELLO, WORLD!
  