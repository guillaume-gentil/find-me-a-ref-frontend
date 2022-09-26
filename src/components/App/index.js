// == Import

import Filters from '../Filters/Filters';
import Header from '../Header/Header';
import './styles.scss';

// Component imports :
import Footer from '../Footer/Footer';

// Component :
function App() {
  return (
    <div className="app">
      <Filters />
      <Header />
      <Filters />
      <Footer />
    </div>
  );
}

// == Export
export default App;
