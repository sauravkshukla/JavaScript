function validateForm(user) {
    if (typeof user.name !== 'string') {
        console.log("Name should be a string.");
    } else {
        console.log("Name is valid.");
    }

    if (typeof user.email !== 'string') {
        console.log("Email should be a string.");
    } else {
        console.log("Email is valid.");
    }

    if (typeof user.age !== 'number') {
        console.log("Age should be a number.");
    } else {
        console.log("Age is valid.");
    }
}

// Sample user input
let user = {
    name: "Saurav Shukla",
    email: "sauravkshukla@gmail.com",
    age: 22
};

validateForm(user);
