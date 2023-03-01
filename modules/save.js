const save = (books) => {
  localStorage.setItem('books', JSON.stringify(books));
};
export default save;