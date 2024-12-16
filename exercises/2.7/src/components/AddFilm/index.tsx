import { Movie } from "../../types";
import { useState } from "react";

interface AddMovieFormProps {
  onAddMovie: (movie: Movie) => void;
}

const AddMovieForm = ({ onAddMovie }: AddMovieFormProps) => {
  const [title, setTitle] = useState("");
  const [director, setDirector] = useState("");
  const [duration, setDuration] = useState(0);
  const [imageUrl, setImageUrl] = useState("");
  const [description, setDescription] = useState("");
  const [budget, setBudget] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newMovie: Movie = {
      title,
      director,
      duration,
      imageUrl,
      description,
      budget,
    };
    onAddMovie(newMovie);
    setTitle("");
    setDirector("");
    setDuration(0);
    setImageUrl("");
    setDescription("");
    setBudget(0);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add a New Movie</h2>
      <div>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Director:</label>
        <input
          type="text"
          value={director}
          onChange={(e) => setDirector(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Duration (minutes):</label>
        <input
          type="number"
          value={duration}
          onChange={(e) => setDuration(Number(e.target.value))}
          required
        />
      </div>
      <div>
        <label>Image URL:</label>
        <input
          type="text"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
      </div>
      <div>
        <label>Description:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div>
        <label>Budget (million):</label>
        <input
          type="number"
          value={budget}
          onChange={(e) => setBudget(Number(e.target.value))}
        />
      </div>
      <button type="submit">Add Movie</button>
    </form>
  );
};

export default AddMovieForm;
