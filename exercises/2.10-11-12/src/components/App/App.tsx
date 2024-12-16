import './App.css';
import { Outlet } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import NavBar from '../NavBar';

function App() {
  return (
      <div className="App">
        <Header />
        <NavBar />
        <Outlet />
        <Footer />
      </div>
  );
}

export default App;