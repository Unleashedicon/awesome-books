class BookList {
  constructor() {
    this.books = JSON.parse(localStorage.getItem('books')) || [
      { title: 'Pride and Prejudice', author: 'Jane Austen' },
      { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
      { title: 'To Kill a Mockingbird', author: 'Harper Lee' },
      { title: 'The Lord of the Rings', author: 'J.R.R. Tolkien' },
    ];
  }

  save() {
    localStorage.setItem('books', JSON.stringify(this.books));
  }

  load() {
    this.books = JSON.parse(localStorage.getItem('books')) || [];
  }

  addBook(title, author) {
    const newBook = { title, author };
    this.books.push(newBook);
    this.save();
    this.displayBooks();
  }

  removeBook(title) {
    this.books = this.books.filter((book) => book.title !== title);
    this.save();
  }

  displayBooks() {
    const bookList = document.getElementById('book-list');
    bookList.innerHTML = '';

    for (let i = 0; i < this.books.length; i += 1) {
      const book = this.books[i];
      const booklistitem = document.createElement('li');
      booklistitem.innerHTML = `<p>${book.title} by ${book.author}</p> <button class='remove-btn' data-index='${i}'>Remove</button>`;
      bookList.appendChild(booklistitem);
    }
  }
}

const bookList = new BookList();

bookList.load();
bookList.displayBooks();

const addBtn = document.querySelector('.add-btn');
addBtn.addEventListener('click', (event) => {
  const titleinput = document.querySelector('#title');
  const authorinput = document.querySelector('#author');
  const title = titleinput.value;
  const author = authorinput.value;
  bookList.addBook(title, author);
  event.preventDefault();
});

const bookListElement = document.getElementById('book-list');
bookListElement.addEventListener('click', (event) => {
  const removeBtn = event.target.closest('.remove-btn');
  if (removeBtn) {
    const index = removeBtn.getAttribute('data-index');
    const book = bookList.books[index];
    bookList.removeBook(book.title);
    bookList.displayBooks();
  }
});

const links = document.querySelectorAll('a');
links.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const targetId = link.getAttribute('href');
    const sections = document.querySelectorAll('main section');
    sections.forEach((section) => {
      section.style.display = 'none';
    });
    const targetsection = document.querySelector(targetId);
    targetsection.style.display = 'block';
  });
});
