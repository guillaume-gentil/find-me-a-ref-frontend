// import :
import '../styles.scss';
import { Link } from 'react-router-dom';
import { Edit, Trash } from 'react-feather';
import PropTypes from 'prop-types';

// component :
function TeamDisplay({ team }) {
  function handleClassChange(e) {
    const targetedUser = e.target.closest('.team');
    const linkElem = targetedUser.querySelector('.team__link');
    linkElem.classList.toggle('team-hidden');
  }
  return (
    <section
      className="team"
      onClick={handleClassChange}
    >
      <div className="team__items">
        <section className="team__name">
          <p className="team__name--detail">{team.name}</p>
        </section>
        <section className="team__details">
          <p className="team__details--item">{team.club.name}</p>
          <p className="team__details--item">{team.club.address}</p>
        </section>
      </div>

      <section className="team__link team-hidden">
        <Link className="teams-management__interaction" to="#"><Edit size={25} /></Link>
        <Link className="teams-management__interaction" to="#"><Trash size={25} /></Link>

      </section>

    </section>
  );
}

// verify props :
TeamDisplay.propTypes = {
  team: PropTypes.object.isRequired,
};
// export :
export default TeamDisplay;
