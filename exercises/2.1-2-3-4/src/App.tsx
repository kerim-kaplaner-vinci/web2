const App = () => {
  const pageTitle = "Informations sur les films dans les cinémas";

  const cinema1Name = "UGC DeBrouckère";

  const movie1 = {
    title: "HAIKYU-THE DUMPSTER BATTLE",
    director: "Susumu Mitsunaka",
  };
  const movie2 = {
    title: "GOODBYE JULIA ",
    director: "Mohamed Kordofani",
  };

  const cinema2Name = "UGC Toison d'Or";
  const movie3 = {
    title: "THE WATCHERS",
    director: "Ishana Night Shyamalan",
  };
  const movie4 = {
    title: "BAD BOYS: RIDE OR DIE",
    director: "Adil El Arbi, Bilall Fallah",
  };

  return (
    <div>
      <PageTitle title={pageTitle} />

      <Cinema
        name={cinema1Name}
        movie1={movie1}
        movie2={movie2}
      />

      <Cinema
        name={cinema2Name}
        movie1={movie3}
        movie2={movie4}
      />
    </div>
  );
};

// Props pour le composant PageTitle
interface TitleProps {
  title: string;
}

const PageTitle = (props: TitleProps) => {
  return (
    <h1>{props.title}</h1>
  );
};

//Type pour un film
interface Movie {
  title: string;
  director: string;
}

// Props pour le composant CinemaProps
interface CinemaProps {
  name: string;
  movie1: Movie;
  movie2: Movie;
}

const Cinema = (props: CinemaProps) => {
  return (
    <main>
      <div>
        <h2>{props.name}</h2>
        <p> 
          <strong>{props.movie1.title}</strong> directed by {props.movie1.director} 
        </p> 
        <p> 
          <strong>{props.movie2.title}</strong> directed by {props.movie2.director}
        </p>
      </div>
    </main>
  );
};

export default App;
