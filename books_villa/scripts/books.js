class Book {
    title = "";
    author = "";
    category = "";
    pages = 0;
    price = 0;

    constructor(title, author, category, pages, price) {
        this.title = title;
        this.author = author;
        this.category = category;
        this.pages = pages;
        this.price = price;
    }

}

module.exports = Book;