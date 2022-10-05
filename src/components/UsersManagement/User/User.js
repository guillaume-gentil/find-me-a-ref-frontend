// import :
import '../styles.scss';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toggleUserDetails } from 'src/actions/users_management';

// component :
function UsersManagement() {
  const dispatch = useDispatch();
  const isUserOpen = useSelector((state) => state.isUserOpen);
  // const openDetails = (isUserOpen ? 'user user__detail--open' : 'user user__details--hidden');

  return (
    <section
      className="user"
      onClick={() => {
        dispatch(toggleUserDetails());
      }}
    >
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
      {isUserOpen && (
      <section className="user__link">
        <Link className="users__interaction" to="#">Editer</Link>
        <Link className="users__interaction" to="#">Supprimer</Link>
      </section>
      )}
    </section>
  );
}

// export :
export default UsersManagement;
