// import :
import '../styles.scss';
import { Link } from 'react-router-dom';

// component :
function UsersManagement() {
  return (
    <section className="user">
      <span>
        <p>Nom</p>
      </span>
      <span>
        <p>Prénom</p>
      </span>
      <span>
        <p>Numéro de tel</p>
      </span>
      <span>
        <address>Adresse mail</address>
      </span>
      <span>
        <address>Adresse</address>
      </span>
      <Link to="#">Editer</Link>
      <Link to="#">Supprimer</Link>
    </section>
  );
}

// export :
export default UsersManagement;
