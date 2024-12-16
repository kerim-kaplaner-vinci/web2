import MovieItem from "../MovieItem";

//Type pour un film
interface Movie {
  title: string;
  director: string;
  description: string;
}

// Props pour le composant CinemaProps
interface CinemaProps {
  name: string;
  movies: Movie[];
}

const Cinema = ({ name, movies }: CinemaProps) => {
  return (
    <main>
      <div>
        <h2>{name}</h2>
        {movies.map((movie) => (
          <MovieItem
            title={movie.title}
            director={movie.director}
            description={movie.description}
          />
        ))}
      </div>
    </main>
  );
};

export default Cinema;
