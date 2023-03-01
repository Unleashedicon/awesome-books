const books = [
  { title: 'Pride and Prejudice', author: 'Jane Austen' },
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
  { title: 'To Kill a Mockingbird', author: 'Harper Lee' },
  { title: 'The Lord of the Rings', author: 'J.R.R. Tolkien' },
]
const load = () => {
    return JSON.parse(localStorage.getItem('books')) || books;
  }
export default load;