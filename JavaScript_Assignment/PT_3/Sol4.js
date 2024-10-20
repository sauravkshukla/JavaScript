function hasProperty(obj, propertyName) {
    return obj.hasOwnProperty(propertyName)
  }
  
  const exampleObject = { name: "Saurav", age: 22 };
  console.log(hasProperty(exampleObject, "age")); 
  console.log(hasProperty(exampleObject, "email")); 
  