// == Import

import Filters from '../Filters/Filters';
import Header from '../Header/Header';
import './styles.scss';

// == Composant
function App() {
  return (
    <div className="app">
      <Filters />
      <Header />
    </div>
  );
}

// == Export
export default App;
