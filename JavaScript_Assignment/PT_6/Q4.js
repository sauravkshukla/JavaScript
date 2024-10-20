// List of books with their authors and publication years
let books = [
    { title: "The Road", author: "Cormac McCarthy", year: 2006 },
    { title: "The Fault in Our Stars", author: "John Green", year: 2012 },
    { title: "Gone Girl", author: "Gillian Flynn", year: 2012 },
    { title: "The Goldfinch", author: "Donna Tartt", year: 2013 },
    { title: "Outliers", author: "Malcolm Gladwell", year: 2008 }
];

// Function to capitalize author names
function capitalizeAuthorName(name) {
    return name.split(' ')
               .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
               .join(' ');
}

// Filter books published after 2010 and capitalize author names
let recentBooks = books
    .filter(book => book.year >= 2010) // Filter books published after or in 2010
    .map(book => ({ 
        title: book.title, 
        author: capitalizeAuthorName(book.author), // Capitalize author's name
        year: book.year 
    }));

console.log(recentBooks);
