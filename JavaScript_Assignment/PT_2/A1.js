function isUserPresent(username, userList) {
    if (userList.includes(username)) {
        return `${username} is present in the list.`;
    } else {
        return `${username} is not present in the list.`;
    }
}

const users = ["Saurav", "Gaurav", "Shubham", "Harsh", "Shivam", "Sundram","Sammar"];
console.log(isUserPresent("Saurav", users));  
console.log(isUserPresent("Aman", users)); 
