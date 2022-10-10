// import :
import '../styles.scss';
import { Link } from 'react-router-dom';
import { Edit, Trash } from 'react-feather';
import PropTypes from 'prop-types';

// component :
function ClubDisplay({ club }) {
  function handleClassChange(e) {
    const targetedUser = e.target.closest('.club');
    const linkElem = targetedUser.querySelector('.club__link');
    linkElem.classList.toggle('club-hidden');
  }
  return (
    <section
      className="club"
      onClick={handleClassChange}
    >
      <div className="club__items">
        <section className="club__name">
          <p className="club__name--detail">{club.name}</p>
        </section>
        <section className="club__details">
          <p className="club__details--item">{club.address}</p>
        </section>
      </div>

      <section className="club__link club-hidden">
        <Link className="clubs-management__interaction" to="#"><Edit size={25} /></Link>
        <Link className="clubs-management__interaction" to="#"><Trash size={25} /></Link>

      </section>

    </section>
  );
}

// verify props :
ClubDisplay.propTypes = {
  club: PropTypes.object.isRequired,
};
// export :
export default ClubDisplay;
