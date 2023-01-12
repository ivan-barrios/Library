let myLibrary = [
  {title: "titulo", author:"Yo", pages:123, isRead:true}
];

function Book(title, author, pages, isRead) {
  this.title = title
  this.author = author
  this.pages = pages
  this.isRead = isRead
}

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
  console.log(myLibrary);
}

function displayBooks() {

}