// import :
import './styles.scss';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
// import component :
import TeamDisplay from './TeamDisplay/TeamDisplay';
// fetchTeams is already coded in filters :
import { fetchTeams } from '../../actions/filters';
import { setAdminNav } from '../../actions/ui_actions';

// component :
function TeamsManagement() {
  // checking authorization :
  const token = useSelector((state) => state.jwtToken);
  // loading ou state content :
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTeams(token));
    dispatch(setAdminNav());
  }, []);
  const teams = useSelector((state) => state.teams);
  return (
    <>
      <section className="teams">
        <h2 className="teams__title">Equipes</h2>
        <Link className="teams__interaction--create" to="/admin/teams/create">Créer une équipe</Link>
        <div className="team">
          <div className="team__items">
            <section className="team__name">
              <p className="team__name--detail">Nom de l'équipe</p>
              <p className="team__name--detail">Club</p>
            </section>
            <section className="game-item__details">
              <p className="game-item__details--item">Adresse du club</p>
            </section>
          </div>
        </div>
      </section>
      <section className="teams">
        {teams.map(
          (team) => <TeamDisplay key={team.id} team={team} />,
        )}
      </section>
    </>
  );
}

// export :
export default TeamsManagement;
