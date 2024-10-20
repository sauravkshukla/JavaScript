function greetPerson(name) {
    return new Promise((resolve, reject) => {
      if (name) {
        resolve(`Hello, ${name}!`);
      } else {
        reject("Name not provided.");
      }
    });
  }
  
  // Example usage:
  greetPerson("Mithun")
    .then(greeting => console.log(greeting))  // Output: Hello, Mithun!
    .catch(error => console.log(error));
  