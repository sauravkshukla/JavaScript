function ageInDays(person) {
    let fullName = `${person.firstName} ${person.lastName}`;
    let ageInDays = person.age * 365;
  
    return function() {
      console.log(`The person's full name is ${fullName} and their age in days is ${ageInDays}.`);
    };
  }
  
  // Example usage:
  let person = { firstName: "John", lastName: "Doe", age: 25 };
  let logAgeInDays = ageInDays(person);
  
  logAgeInDays();  // Output: The person's full name is John Doe and their age in days is 9125.
  