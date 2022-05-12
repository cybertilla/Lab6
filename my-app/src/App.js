import MovieForm from "./MovieForm";
import ListOfMovies from "./ListOfMovies";

function App() {
  return (
    <div>
      <header>
        <h1>Movie Finder</h1>
        <p>
          A collection of movies
        </p>
      </header>
      <MovieForm />
      <ListOfMovies />
    </div>
  );
}

export default App;
