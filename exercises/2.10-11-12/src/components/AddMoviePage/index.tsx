import { useOutletContext } from "react-router-dom";
import { MovieContext } from "../../types";
import AddMovieForm from "../AddMovieForm";

const AddMoviePage = () => {
  const { onMovieAdded }: MovieContext = useOutletContext();
  return (
    <div>
      <h1>"Add a movie"</h1>
      <AddMovieForm onMovieAdded={onMovieAdded} />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default AddMoviePage;