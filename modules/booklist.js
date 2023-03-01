import save from './save.js';
import load from './load.js';
import addBook from './add.js';
import removeBook from './remove.js';
import displayBooks from './display.js';

class BookList {
  constructor() {
    this.books = load();
  }

  save() {
    save(this.books);
  }

  addBook(title, author) {
    addBook(this.books, title, author);
    this.save();
    this.displayBooks();
  }

  removeBook(title) {
    this.books = removeBook(this.books, title);
    this.save();
    this.displayBooks();
  }

  displayBooks() {
    displayBooks(this.books);
  }
}

export default BookList;