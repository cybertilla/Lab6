import MovieForm from "./MovieForm";

function App() {
  return (
    <div>
      <header style={{ margin: "20px" }}>
        <h1>Movie Finder</h1>
        <p>
          A collection of movies
        </p>
      </header>
      <MovieForm />
    </div>
  );
}

export default App;
