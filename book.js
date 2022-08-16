function createBook(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = () => {
        return `${title} by ${author}, ${pages} pages, ${read}`
    };
}

function addBookToLibrary() {
  // do stuff here
}

// const book = new createBook('The Hobbit', 'J.R.R Tolkien', 295, 'not read yet');
// console.log(book.info());

let myLibrary = [];