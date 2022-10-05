// import :
import './styles.scss';
import { Link } from 'react-router-dom';
import User from './User/User';

// component :
function UsersManagement() {
  return (
    <>
      <section>
        <h2 className="users__title">Utilisateurs</h2>
        <Link className="users__createButton" to="#">Créer un utilisateur</Link>
        <div className="user">
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
        </div>
      </section>
      <section>
        <User />
      </section>
    </>
  );
}

// export :
export default UsersManagement;
