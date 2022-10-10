// import :
import '../styles.scss';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Edit, Trash } from 'react-feather';
import PropTypes from 'prop-types';
import { deleteUser } from '../../../actions/users_management';

// component :
function User({ user }) {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.jwtToken);

  function handleClassChange(e) {
    const targetedUser = e.target.closest('.user');
    const linkElem = targetedUser.querySelector('.user__link');
    linkElem.classList.toggle('hidden');
  }

  function handleDelete(e) {
    const requestObject = {
      id: user.id,
      token: token,
    };
    if (confirm('Etes-vous sûr de vouloir supprimer cet utilisateur?')) {
      console.log(requestObject);
      dispatch(deleteUser(requestObject));
    }
  }

  // console.log(user);
  return (
    <section
      className="user"
      onClick={handleClassChange}
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

      <section className="user__link hidden">
        <Link className="users__interaction" to={`/admin/users/${user.id}/edit`}><Edit size={25} /></Link>
        <button
          type="button"
          className="users__interaction"
          onClick={handleDelete}
        >
          <Trash size={25} />
        </button>
      </section>

    </section>
  );
}

// verify props :
User.propTypes = {
  user: PropTypes.object.isRequired,
};
// export :
export default User;
