const addBook = (books, title, author) => {
  const newBook = {title, author};
  books.push(newBook);
}
export default addBook;