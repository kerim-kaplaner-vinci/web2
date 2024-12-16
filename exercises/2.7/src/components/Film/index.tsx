import { Movie } from '../../types';

interface MovieListProps {
    movies: Movie[];
  }
  
  const MovieList = ({ movies } : MovieListProps) => {
    return (
      <div>
        <h2>My Favorite Movies</h2>
        {movies.map((movie, index) => (
          <div key={index} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
            <h3>{movie.title}</h3>
            <p>Director: {movie.director}</p>
            <p>Duration: {movie.duration} minutes</p>
            {movie.imageUrl && <img src={movie.imageUrl} alt={movie.title} style={{ width: '100px' }} />}
            {movie.description && <p>Description: {movie.description}</p>}
            {movie.budget && <p>Budget: ${movie.budget} million</p>}
          </div>
        ))}
      </div>
    );
  };
  
  export default MovieList;