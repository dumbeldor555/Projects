

// creat book costouctor 

function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;

}


// books prototype methods goes here

// creat ui constroctur

function UI() {}

//UI prototypes

UI.prototype.addBookList = function(book) {
const list = document.getElementById('book-list');
// creat tr element
const row = document.createElement('tr');

row.innerHTML = `
   <td>${book.title}</td>
   <td>${book.author}</td>
   <td>${book.isbn}</td>
   <td><a href="#" class="delete">X</a></td>
`;
// append childe into the list 
list.appendChild(row);

}

UI.prototype.clearFields = function(){
// clear fileds 

document.getElementById('title').value = '';
document.getElementById('author').value = '';
document.getElementById('isbn').value = '';


}


// show error
UI.prototype.showError = function(msg){
const errorDiv = document.createElement('div');
const pereghraph = document.createElement('p');
const messege = document.createTextNode(msg);
pereghraph.appendChild(messege);
errorDiv.appendChild(pereghraph);
errorDiv.className = 'error';
const container = document.querySelector('.container');
const form = document.querySelector('#book-form');
container.insertBefore(errorDiv, form);

 
// clearing error after 3 sec
setTimeout(function(){
document.querySelector('.error').remove();
},1500);

}

// show succses
UI.prototype.showSuccses = function(msg) {
  const succsesDiv = document.createElement('div');
  const pereghraph = document.createElement('p');
  const messege = document.createTextNode(msg);
  pereghraph.appendChild(messege);
  succsesDiv.appendChild(pereghraph);
  succsesDiv.className = 'succses';
  const container = document.querySelector('.container');
  const form = document.querySelector('#book-form');
  container.insertBefore(succsesDiv, form);
  
setTimeout(function(){
document.querySelector('.succses').remove();
},1500);
  
}

// show book removed
UI.prototype.removeBook = function(target) {
  if(target.className === 'delete'){
    target.parentElement.parentElement.remove();
    
  }
}
// storing a book in the locals storage

class Store {
  static getBook(){
  let books;
  if(localStorage.getItem('books') === null){
    books = [];
  }else if(localStorage.getItem('books') !== null) {
    books = JSON.parse(localStorage.getItem('books'));
  }

  return books;
  }
  static addBook(book){
   const books = Store.getBook();
   books.push(book);
   localStorage.setItem('books', JSON.stringify(books));

  }

  static displayBook() {
  
  }
  static removeBook(){

  }
}

// storing local storage myWay

function storingData(book) {
let arr;
if(localStorage.getItem('books') === null){
  arr = [];
}else {
  arr = JSON.parse(localStorage.getItem('books'));
}
arr.push(book);
localStorage.setItem('books', JSON.stringify(arr));

}

// deletItem from local storage my way
function deleteFromLS(isbn) {
  const books = JSON.parse(localStorage.getItem('books'));
  console.log(books);
  books.forEach(function(element, index){
    if(isbn === element.isbn) {
     books.splice(index, 1);
    }
  })
 
  localStorage.setItem('books', JSON.stringify(books));
}

// loading books when browser is loaded

document.addEventListener('DOMContentLoaded', function(){
 const books = JSON.parse(localStorage.getItem('books'));
 books.forEach(function(book){
   const ui = new UI;

   //add book to ui
   ui.addBookList(book);
 })
})


// some how you dont seem to figure out why your code isnt working



// adding event listner
document.getElementById('book-form').addEventListener('submit', addingToUI);

function addingToUI(x){

// getting form values
const title = document.getElementById('title').value,
      author = document.getElementById('author').value,
      isbn = document.getElementById('isbn').value

// intiaiting UI object
const ui = new UI();

if(title !== '' & author !== '' & isbn !== ''){

// initiating book object
const book = new Book(title, author, isbn);

// displaying data in the UI
ui.addBookList(book);

// storing books to local storage
// Store.addBook(book);
storingData(book);

// clearing fields
ui.clearFields();

// calling succses function
ui.showSuccses('Book added..!!!');

}else {
  ui.showError('All feilds must be filds');
}


x.preventDefault();
}

// clearing added book items when user clicks X button

document.querySelector('#book-list').addEventListener('click', function(x){

const ui = new UI();
ui.removeBook(x.target); 

if(x.target.className === 'delete'){
  deleteFromLS(x.target.parentElement.previousElementSibling.textContent);
  ui.showSuccses('Book Removed');
   
}
x.p1reventDefault();
});

