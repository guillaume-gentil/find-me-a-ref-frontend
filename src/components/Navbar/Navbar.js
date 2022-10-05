// imports :
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Menu } from 'react-feather';
import { openNavbar } from '../../actions/ui_actions';
import './styles.scss';

// component :
function Navbar() {
  const dispatch = useDispatch();
  const isNavOpen = useSelector((state) => state.isNavOpen);
  const isAdmin = useSelector((state) => state.userRoles.includes('ROLE_ADMIN'));
  const adminNav = useSelector((state) => state.adminNav);

  if (adminNav) {
    return (
      <nav className="navbar topPartHeader__menu">
        <button type="button" className="navbar__button" onClick={() => dispatch(openNavbar())}>
          <Menu size={40} />
        </button>
        <ul className={isNavOpen ? 'navbar__list open' : 'navbar__list'}>
          <li className="navbar__item"><Link to="/">Accueil</Link></li>
          <li className="navbar__item"><Link to="/admin/users">Utilisateurs</Link></li>
          <li className="navbar__item"><Link to="/admin/games">Matchs</Link></li>
          <li className="navbar__item"><Link to="/admin/clubs">Clubs</Link></li>
          <li className="navbar__item"><Link to="/admin/teams">Equipes</Link></li>
          <li className="navbar__item"><Link to="/admin/arena">Gymnases</Link></li>
        </ul>
      </nav>
    );
  }

  return (
    <nav className="navbar topPartHeader__menu">
      <button type="button" className="navbar__button" onClick={() => dispatch(openNavbar())}>
        <Menu size={40} />
      </button>
      <ul className={isNavOpen ? 'navbar__list open' : 'navbar__list'}>
        <li className="navbar__item"><Link to="/">Accueil</Link></li>
        <li className="navbar__item"><Link to="/mentions-legales">Informations</Link></li>
        <li className="navbar__item"><Link to="/contact">Contact</Link></li>
        {isAdmin && <li className="navbar__item"><Link to="/admin">Admin</Link></li>}
      </ul>
    </nav>
  );
}

// export :
export default Navbar;
