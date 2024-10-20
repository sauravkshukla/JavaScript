function countProperties(obj) {
    return Object.keys(obj).length;
  }
  
  const exampleObject = { a: 1, b: 2, c: 3 };
  console.log(countProperties(exampleObject));
  