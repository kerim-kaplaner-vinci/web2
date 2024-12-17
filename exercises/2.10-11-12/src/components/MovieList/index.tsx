import MovieListView from "../MovieListView";
import { MovieContext } from "../../types";
import { useOutletContext } from "react-router-dom";
const MovieListPage = () => {
  const { movies }: MovieContext = useOutletContext();

  return (
    <div>
      <h1>"My favorite movies"</h1>

      <MovieListView movies={movies} />

      <br />
      <br />
      <br />
      <br />
    </div>
  );
};
export default MovieListPage;