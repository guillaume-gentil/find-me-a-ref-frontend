// import :
import './styles.scss';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
// import component :
import ClubDisplay from './ClubDisplay/ClubsDisplay';
// fetchClubs is already coded in filters :
import { fetchClubs } from '../../actions/filters';
import { setAdminNav } from '../../actions/ui_actions';

// component :
function ClubsManagement() {
  // checking authorization :
  const token = useSelector((state) => state.jwtToken);
  // loading ou state content :
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchClubs(token));
    dispatch(setAdminNav());
  }, []);
  const clubs = useSelector((state) => state.clubs);
  return (
    <>
      <section className="clubs">
        <h2 className="clubs__title">Clubs</h2>
        <Link className="clubs__interaction--create" to="/admin/clubs/create">Créer un club</Link>
        <div className="club">
          <div className="club__items">
            <section className="club__name">
              <p className="club__name--detail">Nom du Club</p>
              <p className="club__name--detail">Adresse</p>
            </section>
          </div>
        </div>
      </section>
      <section className="clubs">
        {clubs.map(
          (club) => <ClubDisplay key={club.id} club={club} />,
        )}
      </section>
    </>
  );
}

// export :
export default ClubsManagement;
