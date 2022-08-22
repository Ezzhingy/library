class CreateBook {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }

  info() {
    return `${this.title} by ${this.author}, ${this.pages} pages`;
  }

  addBookToLibrary() {
    LIBRARY.push(this);
  }
}

const runner = (function() {

  function _listeners() {
    document.addEventListener('click', _removeBook);  
    document.addEventListener('click', _toggleRead);
  }
  
  function _displayBook() {
    const body = document.querySelector(".body");
    body.innerHTML = '';
  
    let index = 0;
  
    for (let book of LIBRARY) {
  
      const bookContainer = document.createElement('div');
      const removeBtn = document.createElement('button');
      const readBtn = document.createElement('button');
  
      bookContainer.classList.add("card");
      bookContainer.innerText = book.info();
  
      removeBtn.classList.add("remove-btn");
      removeBtn.innerText = 'Remove';
      removeBtn.setAttribute('data-index', index);
      bookContainer.appendChild(removeBtn);
  
      if (book.read == 'read') {
        readBtn.classList.add('read-btn');
      } else {
        readBtn.classList.add('unread-btn');
      }
      readBtn.setAttribute('data-index-read', index);
      bookContainer.appendChild(readBtn);
  
      index++;
  
      body.appendChild(bookContainer);
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
  
    const aBook = new CreateBook(title, author, pages, read);
    
    document.querySelector(".actual-form").reset();
  
    aBook.addBookToLibrary();
  
    _displayBook();
  
    _listeners();
  }
  
  function _removeBook(e) {
    if (e.target.hasAttribute('data-index')) {
      const index = e.target.getAttribute('data-index');
      LIBRARY.splice(index, 1);
      _displayBook();
    }
  }
  
  function _toggleRead(e) {
    if (e.target.className == 'read-btn') {
      e.target.classList.remove('read-btn');
      e.target.classList.add('unread-btn');
      const index = e.target.getAttribute('data-index-read');
      LIBRARY[index].read = 'unread';
    } else if (e.target.className == 'unread-btn') {
      e.target.classList.remove('unread-btn');
      e.target.classList.add('read-btn');
      const index = e.target.getAttribute('data-index-read');
      LIBRARY[index].read = 'read';
    }
  }

  return {closeForm, openForm, getData}
})();


const LIBRARY = [];
const addBookBtn = document.querySelector('.add-book');
addBookBtn.addEventListener('click', runner.openForm);

const buttonCancel = document.querySelector('.button-cancel');
const buttonAdd = document.querySelector('.button-add');
buttonCancel.addEventListener('click', runner.closeForm);
buttonAdd.addEventListener('click', runner.getData);

