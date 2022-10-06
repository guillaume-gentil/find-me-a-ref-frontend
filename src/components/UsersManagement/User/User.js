// import :
import '../styles.scss';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toggleUserDetails } from 'src/actions/users_management';
import PropTypes from 'prop-types';

// component :
function User({ user }) {
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
          <p className="user__name--detail">{user.lastname}</p>
          <p className="user__name--detail">{user.firstname}</p>
        </section>
        <section className="user__details">
          <p className="user__details--item">{user.phoneNumber}</p>
          <address className="user__details--item">{user.email}</address>
          <address className="user__details--item">{user.address}</address>
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

// verify props :
User.propTypes = {
  user: PropTypes.object.isRequired,
};
// export :
export default User;
