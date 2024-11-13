const App = () => {
  const pageTitle = "Informations sur les films dans les cinémas";

  const cinema1Name = "UGC DeBrouckère";

  const moviesCinema1 = [
    {
      title: "HAIKYU-THE DUMPSTER BATTLE",
      director: "Susumu Mitsunaka",
    },
    {
      title: "GOODBYE JULIA",
      director: "Mohamed Kordofani",
    },
    {
      title: "INCEPTION",
      director: "Christopher Nolan",
    },
    {
      title: "PARASITE",
      director: "Bong Joon-ho",
    },
  ];

  const cinema2Name = "UGC Toison d'Or";

  const moviesCinema2 = [
    {
      title: "THE WATCHERS",
      director: "Ishana Night Shyamalan",
    },
    {
      title: "BAD BOYS: RIDE OR DIE",
      director: "Adil El Arbi, Bilall Fallah",
    },
    {
      title: "TENET",
      director: "Christopher Nolan",
    },
    {
      title: "THE IRISHMAN",
      director: "Martin Scorsese",
    },
  ];

  return (
    <div>
      <PageTitle title={pageTitle} />

      <Cinema name={cinema1Name} movies={moviesCinema1} />

      <Cinema name={cinema2Name} movies={moviesCinema2} />
    </div>
  );
};

// Props pour le composant PageTitle
interface TitleProps {
  title: string;
}

const PageTitle = (props: TitleProps) => {
  return <h1>{props.title}</h1>;
};

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

export default App;
