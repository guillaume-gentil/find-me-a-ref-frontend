// == Import
import { useSelector } from 'react-redux';

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
  const hideFilters = useSelector((state) => state.isLoginOpen);
  return (
    <div className="app">
      <Header />
      {!hideFilters && (<Filters />)}
      <Login />
      <Games />
      <Footer />
    </div>
  );
}

// == Export
export default App;
