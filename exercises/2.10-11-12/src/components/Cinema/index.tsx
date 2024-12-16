import Cinema from '../../../../2.6/src/components/Cinema';

const CinemaPage = () => {
  const cinema1Name = "UGC DeBrouckère";
  const movies = [
    { title: "HAIKYU-THE DUMPSTER BATTLE", director: "Susumu Mitsunaka", description: "..." },
    { title: "GOODBYE JULIA", director: "Mohamed Kordofani", description: "..." },
  ];

  return <Cinema name={cinema1Name} movies={movies} />;
};

export default CinemaPage;