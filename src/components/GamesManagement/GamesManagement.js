// import :
import './styles.scss';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
// import component :
import GameDisplay from './GameDisplay/GameDisplay';
import { fetchGames } from '../../actions/games';
import { setAdminNav } from '../../actions/ui_actions';

// component :
function GamesManagement() {
  // checking authorization :
  const token = useSelector((state) => state.jwtToken);
  // loading ou state content :
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGames(token));
    dispatch(setAdminNav());
  }, []);
  const games = useSelector((state) => state.games);
  return (
    <>
      <section className="games-management">
        <h2 className="games-management__gamestitle">Matchs</h2>
        <Link className="games-management__interaction--create" to="/admin/games/create">Créer un match</Link>
        <div className="game-item">
          <div className="game-item__items">
            <section className="game-item__name">
              <p className="game-item__name--detail">Date</p>
              <p className="game-item__name--detail">Equipe 1 VS Equipe 2</p>
            </section>
            <section className="game-item__details">
              <p className="game-item__details--item">Type</p>
            </section>
          </div>
        </div>
      </section>
      <section className="games-management">
        {games.map(
          (game) => <GameDisplay key={game.id} game={game} />,
        )}
      </section>
    </>
  );
}

// export :
export default GamesManagement;
