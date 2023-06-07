import BookComponent from '../components/Book'
import '../css/App.css'

// Array of Books
const books = [
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    rating: 4.5
  },
  {
    title: "1984",
    author: "George Orwell",
    rating: 4.3
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    rating: 4.2
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    rating: 4.7
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    rating: 4.1
  },
  {
    title: "To Kill a Kingdom",
    author: "Alexandra Christo",
    rating: 4.0
  },
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    rating: 4.6
  },
  {
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    rating: 4.8
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    rating: 4.4
  },
  {
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    rating: 4.9
  }
];

function App() {

  return (
    <div className='books'>
      <h1>LIST OF BEST BOOKS</h1>
      <div className="card-container">
        {
          books.map((book) => {
            return <BookComponent name={book.title} author={book.author} rating={book.rating} />
          })
        }
      </div>
    </div>
  )
}

export default App;
