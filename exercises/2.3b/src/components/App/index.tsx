import "./App.css";
import Footer from "../Footer";
import Header from "../Header";
import Utilisateur from "../Utilisateurs";

function App() {
  return (
    <div className="page">
      <Header />
      <Utilisateur />
      <Footer />
    </div>
  );
}

export default App;