// == Import
import Games from 'src/components/Games/Games';
import Contact from 'src/components/Contact/Contact';
import Navbar from 'src/components/Navbar/Navbar';
import Filters from '../Filters/Filters';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import './styles.scss';

// Component :
function App() {
  return (
    <div className="app">
      <Games />
      <Header />
      <Login />
      <Navbar />
      <Filters />
      <Contact />
      <Footer />
    </div>
  );
}

// == Export
export default App;
