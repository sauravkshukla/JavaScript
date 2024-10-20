function doubleArray(arr, callback) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      result.push(callback(arr[i]));
    }
    return result;
  }
  
  function double(num) {
    return num * 2;
  }
  
  // Example usage:
  let numbers = [1, 2, 3, 4, 5];
  let doubledNumbers = doubleArray(numbers, double);
  
  console.log(doubledNumbers);  // Output: [2, 4, 6, 8, 10]
  