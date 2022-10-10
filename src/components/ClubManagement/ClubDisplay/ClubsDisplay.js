// import :
import '../styles.scss';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Edit, Trash } from 'react-feather';
import PropTypes from 'prop-types';
import { deleteClub } from '../../../actions/clubs_management';

// component :
function ClubDisplay({ club }) {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.jwtToken);

  function handleDelete(e) {
    const requestObject = {
      id: club.id,
      token: token,
    };
    if (confirm('Etes-vous sûr de vouloir supprimer ce club?')) {
      console.log(requestObject);
      dispatch(deleteClub(requestObject));
    }
  }

  function handleClassChange(e) {
    const targetedClub = e.target.closest('.club');
    const linkElem = targetedClub.querySelector('.club__link');
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
        <button type="button" className="clubs-management__interaction" onClick={handleDelete}><Trash size={25} /></button>

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
