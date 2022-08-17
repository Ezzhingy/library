function createBook(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = () => {
        return `${title} by ${author}, ${pages} pages`
    };
}

function addBookToLibrary(user) {
  LIBRARY.push(user);
}

function displayBook() {
  const body = document.querySelector(".body");
  body.innerHTML = '';

  for (let book of LIBRARY) {
    const bookContainer = document.createElement('div');
    bookContainer.classList.add("card");
    bookContainer.innerText = book.info();
    body.appendChild(bookContainer);
  }
}

function openForm(e) {
  document.querySelector(".form-container").style.display = "block";
}

function closeForm(e) {
  document.querySelector(".form-container").style.display = "none";
}

function getData(e) {
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const pages = document.getElementById('pages').value;
  const read = document.querySelector('input[name="read"]:checked').value;

  const aBook = new createBook(title, author, pages, read);
  
  document.querySelector(".actual-form").reset();

  addBookToLibrary(aBook);

  displayBook();
}

const LIBRARY = [];

const addBookBtn = document.querySelector('.add-book');
addBookBtn.addEventListener('click', openForm);

const buttonCancel = document.querySelector('.button-cancel');
const buttonAdd = document.querySelector('.button-add');
buttonCancel.addEventListener('click', closeForm);
buttonAdd.addEventListener('click', getData);
