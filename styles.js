let books = [];

function loadBooks() {
  const storedBooks = localStorage.getItem('books');
  if (storedBooks) {
    books = JSON.parse(storedBooks);
  } else {
    books = [
      { title: 'Pride and Prejudice', author: 'Jane Austen' },
      { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
      { title: 'To Kill a Mockingbird', author: 'Harper Lee' },
      { title: 'The Lord of the Rings', author: 'J.R.R. Tolkien' },
    ];
  }
}

function saveBooks() {
  localStorage.setItem('books', JSON.stringify(books));
}

function displayBooks() {
  const bookList = document.getElementById('book-list');
  bookList.innerHTML = '';

  for (let i = 0; i < books.length; i += 1) {
    const book = books[i];
    const booklistitem = document.createElement('li');
    booklistitem.innerHTML = `<p>${book.title} <br> ${book.author}</p> <button class='remove-btn' data-index='${i}'>Remove</button> <hr>`;
    bookList.appendChild(booklistitem);
  }
}

function removeBook(title) {
  const newBooks = books.filter((book) => book.title !== title);
  books = newBooks;
  saveBooks();
  displayBooks();
}

function addBook(title, author) {
  const newBook = { title, author };
  books.push(newBook);
  saveBooks();
  displayBooks();
}

const addBtn = document.querySelector('.add-btn');
addBtn.addEventListener('click', (event) => {
  const titleinput = document.querySelector('#title');
  const authorinput = document.querySelector('#author');
  const title = titleinput.value;
  const author = authorinput.value;
  addBook(title, author);
  event.preventDefault();
});

loadBooks();
displayBooks();

const bookList = document.getElementById('book-list');
bookList.addEventListener('click', (event) => {
  const removeBtn = event.target.closest('.remove-btn');
  if (removeBtn) {
    const index = removeBtn.getAttribute('data-index');
    const book = books[index];
    removeBook(book.title);
  }
});
