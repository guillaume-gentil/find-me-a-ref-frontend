// == Import
import Games from 'src/components/Games/Games';
import Contact from 'src/components/Contact/Contact';
import Commitment from 'src/components/Commitment/Commitment';
import Filters from '../Filters/Filters';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Legals from '../Legals/Legals';
import './styles.scss';

// Component :
function App() {
  return (
    <div className="app">
      <Header />
      <Login />
      <Filters />
      <Games />
      <Footer />
    </div>
  );
}

// == Export
export default App;
