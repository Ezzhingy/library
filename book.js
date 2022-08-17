function createBook(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.index = null;
    this.info = () => {
        return `${title} by ${author}, ${pages} pages`
    };
}

function addBookToLibrary(user) {
  LIBRARY.push(user);
  user.index = LIBRARY.length - 1;
}

function displayBook() {
  const body = document.querySelector(".body");
  body.innerHTML = '';
  
  let index = 0;

  for (let book of LIBRARY) {

    const bookContainer = document.createElement('div');
    const removeBtn = document.createElement('button');

    bookContainer.classList.add("card");
    bookContainer.innerText = book.info();

    removeBtn.innerText = 'Remove';
    removeBtn.setAttribute('data-index', index);
    removeBtn.classList.add("remove-btn");
    bookContainer.appendChild(removeBtn);

    index++;

    body.appendChild(bookContainer);

    document.addEventListener('click', removeBook);
  }
}

function openForm() {
  document.querySelector(".form-container").style.display = "block";
}

function closeForm() {
  document.querySelector(".form-container").style.display = "none";
}

function getData() {
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const pages = document.getElementById('pages').value;
  const read = document.querySelector('input[name="read"]:checked').value;

  const aBook = new createBook(title, author, pages, read);
  
  document.querySelector(".actual-form").reset();

  addBookToLibrary(aBook);

  displayBook();
}

function removeBook(e) {
  if (e.target.hasAttribute('data-index')) {
    const index = e.target.getAttribute('data-index');
    console.log(index);
    LIBRARY.splice(index, 1);
    displayBook();
  }

}

const LIBRARY = [];

const addBookBtn = document.querySelector('.add-book');
addBookBtn.addEventListener('click', openForm);

const buttonCancel = document.querySelector('.button-cancel');
const buttonAdd = document.querySelector('.button-add');
buttonCancel.addEventListener('click', closeForm);
buttonAdd.addEventListener('click', getData);

