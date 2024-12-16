import './App.css'
import { useState } from 'react'
import MovieList from '../Film'
import AddMovieForm from '../AddFilm'
import { Movie } from '../../types'

function App() {
  const defaultMovies = [
    { title: 'Inception', director: 'Christopher Nolan', duration: 148 },
    { title: 'The Matrix', director: 'Lana Wachowski, Lilly Wachowski', duration: 136 },
    { title: 'Interstellar', director: 'Christopher Nolan', duration: 169 },
    { title: 'The Dark Knight', director: 'Christopher Nolan', duration: 152 },
    { title: 'Pulp Fiction', director: 'Quentin Tarantino', duration: 154 },
  ];
  const [movies, setMovies] = useState(defaultMovies);
  const addMovie = (movie: Movie) => {
    setMovies([...movies, movie]);
  };

  return (
    <div className="App">
      <h1>My Movie Collection</h1>
      <MovieList movies={movies} />
      <AddMovieForm onAddMovie={addMovie} />
    </div>
  );
}

export default App
