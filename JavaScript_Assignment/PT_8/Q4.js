function getBookTitles(books, callback) {
    // Create a new list of book titles using map
    let titles = books.map(book => book.title);
  
    // Pass the list of titles to the callback function
    callback(titles);
  }
  
  function logTitlesAlphabetically(titles) {
    // Sort the titles alphabetically and log them
    titles.sort();
    console.log("Book titles in alphabetical order:");
    titles.forEach(title => console.log(title));
  }
  
  // Example usage:
  let books = [
    { title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951 },
    { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
    { title: "1984", author: "George Orwell", year: 1949 },
    { title: "Pride and Prejudice", author: "Jane Austen", year: 1813 }
  ];
  
  getBookTitles(books, logTitlesAlphabetically);
  
  // Output:
  // Book titles in alphabetical order:
  // 1984
  // Pride and Prejudice
  // The Catcher in the Rye
  // To Kill a Mockingbird
  