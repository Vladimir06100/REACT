import "./App.css";
import Book from "./Book";
/**
 */
const booksArray = [
  {
    title: "Le seigneur des anneaux",
    author: "JRR Tolkien",
    date: "1954",
    note: 5,
    image:
      "https://fr.web.img3.acsta.net/medias/nmedia/18/35/14/33/18366630.jpg",
  },
  {
    title: "Fondation",
    author: "Isaac Asimov",
    date: "1951",
    note: 4.8,
    image:
      "https://images.leslibraires.ca/books/9782070360536/front/9782070360536_large.jpg",
  },
  {
    title: "Harry Potter",
    author: "JK Rowling",
    date: "19597",
    note: 4.9,
    image: "https://m.media-amazon.com/images/I/81m1s4wIPML.jpg",
  },
];

function App() {
  return (
    <div className="App">
      {booksArray.map(bookObject => {
        console.log(bookObject);
        return (
          <Book
            author={bookObject.author}
            title={bookObject.title}
            dateOfPublication={bookObject.dateOfPublication}
            note={bookObject.note}
            //! внимание на страницу Book.js источник должен совпадать с параметрами
            image={bookObject.image}
          />
        );
      })}
    </div>
  );
}

export default App;
