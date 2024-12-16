//Type pour un film
interface Movie {
  title: string;
  director: string;
}

// Props pour le composant CinemaProps
interface CinemaProps {
  name: string;
  movies: Movie[];
}

const Cinema = (props: CinemaProps) => {
  return (
    <main>
      <div>
        <h2>{props.name}</h2>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Director</th>
            </tr>
          </thead>
          <tbody>
            {props.movies.map((movie) => (
              <tr>
                <td>{movie.title}</td>
                <td>{movie.director}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default Cinema;
