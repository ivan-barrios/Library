//DATA
let myLibrary = [
  {title: "The Almanack of Naval Ravikant", author:"Naval Ravikant", pages:'', isRead:true}
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
  if (newBook.title === '' || newBook.author === '' || newBook.pages === '') {
    alert('Oops, you forgot a field!');
    return
  }
  clearForm();
  myLibrary.push(newBook);
  updateDisplay();
}

function clearForm() {
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('pages').value = '';
  document.getElementById('isRead').checked = false;
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
  const remove = document.createElement('button');

  isRead.addEventListener('click', () => {
    const index = myLibrary.indexOf(book);
    if (myLibrary[index].isRead){
      myLibrary[index].isRead = false;
      updateDisplay();
    }
    else {
      myLibrary[index].isRead = true;
      updateDisplay();
    }
  })

  //Removes from the books-display and from myLibrary
  remove.addEventListener('click', () => {
    container.innerHTML = '';
    const index = myLibrary.indexOf(book);
    myLibrary.splice(index, 1);
    updateDisplay();
  })

  container.classList.add('card-container');
  isRead.classList.add('read-btn');
  remove.classList.add('remove-btn');

  title.textContent = `Title: ${book.title}`;
  author.textContent = `Author: ${book.author}`;
  pages.textContent = `Pages: ${book.pages}`;
  remove.textContent = 'R';
  
  if (book.isRead) {
    isRead.textContent = 'Read';
    isRead.style.backgroundColor = ('lightblue');
  }
  else{
    isRead.textContent = 'Not Read';
    isRead.style.backgroundColor = ('pink');
  }

  container.appendChild(title);
  container.appendChild(author);
  container.appendChild(pages);
  container.appendChild(isRead);
  container.appendChild(remove);
  booksDisplay.appendChild(container);
}

function displayBooks() {
  for (let i = 0; i < myLibrary.length; i++) {
    createBookCard(myLibrary[i]);
  }
}

displayBooks();