// import :
import './styles.scss';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
// import component :
import ClubDisplay from './ClubDisplay/ClubsDisplay';
import { fetchClubs } from '../../actions/clubs_management';

// component :
function ClubsManagement() {
  // checking authorization :
  const token = useSelector((state) => state.jwtToken);
  // loading ou state content :
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchClubs(token));
  }, []);
  const clubs = useSelector((state) => state.clubs);
  return (
    <>
      <section className="clubs-management">
        <h2 className="clubs-management__clubstitle">Matchs</h2>
        <Link className="clubs-management__interaction--create" to="/admin/clubs/create">Créer un match</Link>
        <div className="club">
          <div className="club__items">
            <section className="club__name">
              <p className="club__name--detail">Date</p>
              <p className="club__name--detail">Equipe 1 VS Equipe 2</p>
            </section>
            <section className="club__details">
              <p className="club__details--item">Type</p>
            </section>
          </div>
        </div>
      </section>
      <section className="clubs-management">
        {clubs.map(
          (club) => <ClubDisplay key={club.id} club={club} />,
        )}
      </section>
    </>
  );
}

// export :
export default ClubsManagement;
