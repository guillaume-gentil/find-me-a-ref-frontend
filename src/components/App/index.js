// import :
import Navbar from 'src/components/Navbar/Navbar';
import Filters from '../Filters/Filters';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './styles.scss';

// Component :
function App() {
  return (
    <div className="app">
      <Header />
      <Navbar />
      <Filters />
      <Footer />
    </div>
  );
}

// == Export
export default App;
