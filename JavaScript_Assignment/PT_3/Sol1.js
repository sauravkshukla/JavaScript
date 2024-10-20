const car = {
    make: "Kia",
    model: "Seltos",
    year: 2024
  };
  
  function displayCarProperties(car) {
    for (const property in car) {
      console.log(`${property}: ${car[property]}`);
    }
  }
  displayCarProperties(car);
