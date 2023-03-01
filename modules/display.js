const displayBooks = books => {
  const bookList = document.getElementById('book-list');
  bookList.innerHTML = '';
  
  for (let i = 0; i < books.length; i += 1) {
    const book = books[i];
    const booklistitem = document.createElement('li');
    booklistitem.innerHTML = `<p>${book.title} by ${book.author}</p> <button class='remove-btn' data-index='${i}'>Remove</button>`;
    bookList.appendChild(booklistitem);
  }
}
export default displayBooks;
  