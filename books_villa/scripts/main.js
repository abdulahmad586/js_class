const Book = require('./books');

const allBooks = [
    new Book("Harry Potter", "Mary Jane", "fiction", 300, 10.5),
    new Book("Pride and Prejudice", "Jane Austen", "fiction", 150, 4.99),
    new Book("Three-Body Problem", "Cixen Liu", "Science-fiction", 310, 20),
    new Book("Dark Forest", "Cixen Liu", "Science-fiction", 300, 17.99),
    new Book("Deaths End", "Cixen Liu", "Science-fiction", 320, 17.99),
    new Book("Sand and Foam", "Khalil Gibran", "Poetry", 20, 99.99),
    new Book("Return of the Prophet", "Khalil Gibran", "Prose", 56, 49.99),
];

const totalNumberOfBooks = allBooks.length;
console.log("Total number of books:", totalNumberOfBooks);

const fictionBooks = allBooks.filter((b) => {
    return b.category === "fiction";
});

console.log("Fiction Books:", fictionBooks.length);

const query = "and";
const searchResults = allBooks.filter((book) => {
    return book.title.includes(query);
});

console.log(`SEARCH RESULTS, ${searchResults.length}:`, searchResults);

const sortedByPrice = allBooks.sort((a, b) => {
    return a.price - b.price;
})

console.log("SORTED LIST:", sortedByPrice);

const newBook = new Book("Things fall apart", "Chinua Achebe", "fiction", 299, 29.99);

allBooks.push(newBook);

console.log(allBooks);

allBooks.pop();

console.log(allBooks);