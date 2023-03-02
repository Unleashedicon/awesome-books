const removeBook = (books, bookToRemove) => {
    return books.filter((book) => book !== bookToRemove);
  };
  
  export default removeBook;
  