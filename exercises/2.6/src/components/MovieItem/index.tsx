import { useState } from 'react';

interface MovieItemProps {
  title: string;
  director: string;
  description: string;
}

const MovieItem = ({ title, director, description } : MovieItemProps) => {
  const [showDescription, setShowDescription] = useState(false);

  return (
    <div onClick={() => setShowDescription(!showDescription)}>
      <h3>{title}</h3>
      <p>Directed by: {director}</p>
      {showDescription && <p>{description}</p>}
    </div>
  );
};

export default MovieItem;