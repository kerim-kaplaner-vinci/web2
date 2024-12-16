import MovieList from '../../../../2.7/src/components/Film';

const MovieListPage = () => {
  const movies = [
    { title: 'Inception', director: 'Christopher Nolan', duration: 148 },
    { title: 'The Matrix', director: 'Lana Wachowski, Lilly Wachowski', duration: 136 },
    { title: 'Interstellar', director: 'Christopher Nolan', duration: 169 },
    { title: 'The Dark Knight', director: 'Christopher Nolan', duration: 152 },
    { title: 'Pulp Fiction', director: 'Quentin Tarantino', duration: 154 },
  ];

  return <MovieList movies={movies} />;
};

export default MovieListPage;