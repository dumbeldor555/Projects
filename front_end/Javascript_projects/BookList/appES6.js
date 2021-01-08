// book constructor

class Book {
constructor(title, author, isbn){
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

}

//UI constructor

class UI {
  
//UI prototypes

addBookList(book) {
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
  
clearFields(){
  // clear fileds 
  
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('isbn').value = '';
  }
  
  
  // show error
showError(msg){
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
  },3000);
  
  }
  
  // show succses
showSuccses(msg) {
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
  },3000);
    
  }
  
  // show book removed
removeBook(target) {
    if(target.className === 'delete'){
      target.parentElement.parentElement.remove();
    }
  }
}

// stornig books to the local storage
class Store {
  static getBooks() {
    let books;
    if(localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }

    return books;
  }

  static displayBooks() {
    const books = Store.getBooks();

    books.forEach(function(book){
      const ui  = new UI;

      // Add book to UI
      ui.addBookToList(book);
    });
  }

  static addBook(book) {
    const books = Store.getBooks();

    books.push(book);

    localStorage.setItem('books', JSON.stringify(books));
  }

  static removeBook(isbn) {
    const books = Store.getBooks();

    books.forEach(function(book, index){
     if(book.isbn === isbn) {
      books.splice(index, 1);
     }
    });

    localStorage.setItem('books', JSON.stringify(books));
  }
}




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
Store.addBook(book);

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
  ui.showSuccses('Book Removed');
  Store.removeBook(x.target.parentElement.previousElementSibling.textContent);
}
x.preventDefault();
});
