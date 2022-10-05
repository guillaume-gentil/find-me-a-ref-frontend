// import :
import './styles.scss';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
// import component :
import User from './User/User';
import { fetchAllUsers } from '../../actions/users_management';

// component :
function UsersManagement() {
  const dispatch = useDispatch();
  useEffect(dispatch(fetchAllUsers));

  return (
    <>
      <section className="users">
        <h2 className="users__title">Utilisateurs</h2>
        <Link className="users__interaction" to="#">Créer un utilisateur</Link>
        <div className="user">
          <div className="user__items">
            <section className="user__name">
              <p className="user__name--detail">Nom</p>
              <p className="user__name--detail">Prénom</p>
            </section>
            <section className="user__details">
              <p className="user__details--item">Numéro de tel</p>
              <address className="user__details--item">Adresse mail</address>
              <address className="user__details--item">Adresse</address>
            </section>
          </div>
        </div>
      </section>
      <section className="users">
        <User />
      </section>
    </>
  );
}

// export :
export default UsersManagement;
