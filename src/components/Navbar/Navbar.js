// imports :
import { Link } from 'react-router-dom';
import './styles.scss';

// component :
function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <li className="navbar__item"><Link to="/">Accueil</Link></li>
        <li className="navbar__item"><Link to="/infos">Informations</Link></li>
        <li className="navbar__item"><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

// export :
export default Navbar;
