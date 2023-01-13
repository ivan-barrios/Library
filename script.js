//DATA
let myLibrary = [
  {title: "titulo", author:"Yo", pages:123, isRead:true},
  {title: "titulazo", author:"El", pages:2, isRead:false},
  {title: "UFFF", author:"alla", pages:1233, isRead:true},
  {title: "CACA", author:"nomolestes", pages:444, isRead:true}
];

function Book(title, author, pages, isRead) {
  this.title = title
  this.author = author
  this.pages = pages
  this.isRead = isRead
}




//UI
const booksDisplay = document.querySelector('.books-display');
const addBookBtn = document.querySelector('.add-book-btn');


//Adding new book to the library
function getBookFromInput() {
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const pages = document.getElementById('pages').value;
  const isRead = document.getElementById('isRead').checked;
  return new Book(title,author,pages,isRead);
}

function addBookToLibrary(e) {
  e.preventDefault();
  const newBook = getBookFromInput();
  myLibrary.push(newBook);
  updateDisplay();
  console.log(myLibrary);
}

function updateDisplay() {
  resetDisplay();
  displayBooks();
}

function resetDisplay(){
  document.querySelector('.books-display').innerHTML = '';
}

//Display of the new book
function createBookCard(book){
  const container = document.createElement('div');
  const title = document.createElement('p');
  const author = document.createElement('p');
  const pages = document.createElement('p');
  const isRead = document.createElement('button');

  container.classList.add('card-container');
  isRead.classList.add('read-btn');

  title.textContent = `Title: ${book.title}`;
  author.textContent = `Author: ${book.author}`;
  pages.textContent = `Pages: ${book.pages}`;
  
  if (book.isRead) {
    isRead.textContent = 'Read';
  }
  else{
    isRead.textContent = 'Not Read';
  }

  container.appendChild(title);
  container.appendChild(author);
  container.appendChild(pages);
  container.appendChild(isRead);
  booksDisplay.appendChild(container);
}

function displayBooks() {
  for (let i = 0; i < myLibrary.length; i++) {
    createBookCard(myLibrary[i]);
  }
}

displayBooks();