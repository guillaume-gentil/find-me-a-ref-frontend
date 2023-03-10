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
  const token = useSelector((state) => state.jwtToken);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllUsers(token));
  }, []);
  const users = useSelector((state) => state.allUsers);
  return (
    <>
      <section className="users">
        <h2 className="users__title">Utilisateurs</h2>
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
        {users.map(
          (user) => <User key={user.id} user={user} />,
        )}
      </section>
    </>
  );
}

// export :
export default UsersManagement;
