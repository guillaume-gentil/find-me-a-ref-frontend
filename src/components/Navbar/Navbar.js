// imports :
import { useDispatch, useSelector } from 'react-redux';
import { Menu } from 'react-feather';
import { openNavbar } from '../../actions/ui_actions';
import './styles.scss';

// component :
function Navbar() {
  const dispatch = useDispatch();
  const isNavOpen = useSelector((state) => state.isNavOpen);
  return (
    <nav className="navbar topPartHeader__menu">
      <button type="button" className="navbar__button" onClick={() => dispatch(openNavbar())}>
        <Menu size={40} />
      </button>
      <ul className={isNavOpen ? 'navbar__list open' : 'navbar__list'}>
        <li className="navbar__item"><a href="">Accueil</a></li>
        <li className="navbar__item"><a href="">Informations</a></li>
        <li className="navbar__item"><a href="">Contact</a></li>
      </ul>
    </nav>
  );
}

// export :
export default Navbar;
