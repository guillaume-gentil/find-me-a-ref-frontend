// import :
import '../styles.scss';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Edit, Trash } from 'react-feather';
import PropTypes from 'prop-types';

// component :
function User({ user }) {
  const dispatch = useDispatch();

  function handleClassChange(e) {
    const targetedUser = e.target.querySelector('.user__link');
    // console.log(targetedUser);
    targetedUser.classList.toggle('hidden');
  }

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
        <Link className="users__interaction" to="#"><Edit size={25} /></Link>
        <Link className="users__interaction" to="#"><Trash size={25} /></Link>
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
