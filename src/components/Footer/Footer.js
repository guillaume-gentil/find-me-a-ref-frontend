// imports :
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { unsetAdminNav } from '../../actions/ui_actions';
import './styles.scss';

// component :

function Footer() {
  const dispatch = useDispatch();
  dispatch(unsetAdminNav());
  return (
    <section className="footer">
      <Link className="footer__link" to="/mentions-legales">Informations</Link>
      <Link className="footer__link" to="/contact">Contact</Link>
      <p className="footer__copyright">Copyright Studio Cacahouète &#xA9;</p>
    </section>
  );
}

// export :
export default Footer;
