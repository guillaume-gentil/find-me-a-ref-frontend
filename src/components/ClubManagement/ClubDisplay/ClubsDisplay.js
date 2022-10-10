// import :
import '../styles.scss';
import { Link } from 'react-router-dom';
import { Edit, Trash } from 'react-feather';
import Moment from 'moment';
import PropTypes from 'prop-types';

// component :
function ClubDisplay({ club }) {
  function handleClassChange(e) {
    const targetedUser = e.target.closest('.club');
    const linkElem = targetedUser.querySelector('.club__link');
    linkElem.classList.toggle('club-hidden');
  }
  const formatDate = Moment(club.date).format('DD-MM-YYYY à HH:MM');
  return (
  // <section
  //   className="club"
  //   onClick={handleClassChange}
  // >
  //   <div className="club__items">
  //     <section className="club__name">
  //       <p className="club__name--detail">{formatDate}</p>
  //       <p className="club__name--detail">{club.teams[0].name} VS {club.teams[1].name}</p>
  //     </section>
  //     <section className="club__details">
  //       <p className="club__details--item">{club.type.name}</p>
  //     </section>
  //   </div>

    <section className="club__link club-hidden">
      <Link className="clubs-management__interaction" to="#"><Edit size={25} /></Link>
      <Link className="clubs-management__interaction" to="#"><Trash size={25} /></Link>

    </section>

  // </section>
  );
}

// verify props :
ClubDisplay.propTypes = {
  club: PropTypes.object.isRequired,
};
// export :
export default ClubDisplay;
