import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <nav>
      <button onClick={() => navigate("/")}>Home</button>
      <button onClick={() => navigate("/cinema")}>Cinema</button>
      <button onClick={() => navigate("/movie-list")}> Films</button>
      <button onClick={() => navigate("/add-movie")}>Ajouter un film</button>
    </nav>
  );
};

export default NavBar;