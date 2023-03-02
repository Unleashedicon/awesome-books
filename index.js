import BookList from './modules/booklist.js';

const bookList = new BookList();

bookList.displayBooks();

const addBtn = document.querySelector('.add-btn');
addBtn.addEventListener('click', (event) => {
  const titleinput = document.querySelector('#title');
  const authorinput = document.querySelector('#author');
  const title = titleinput.value;
  const author = authorinput.value;
  bookList.addBook(title, author);
  event.preventDefault();
  titleinput.value = '';
  authorinput.value = '';
});

const bookListElement = document.getElementById('book-list');
bookListElement.addEventListener('click', (event) => {
  const removeBtn = event.target.closest('.remove-btn');
  if (removeBtn) {
    const index = removeBtn.getAttribute('data-index');
    const book = bookList.books[index];
    bookList.removeBook(book);
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

window.addEventListener('load', () => {
  window.location.hash = '#List';
});


