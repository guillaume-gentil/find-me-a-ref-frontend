// import :
import './styles.scss';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
// import component :
import GameDisplay from './GameDisplay/GameDisplay';
import { fetchGames } from '../../actions/games';

// component :
function GamesManagement() {
  // checking authorization :
  const token = useSelector((state) => state.jwtToken);
  // loading ou state content :
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGames(token));
  }, []);
  const games = useSelector((state) => state.games);
  return (
    <>
      <section className="games">
        <h2 className="games__title">Matchs</h2>
        <Link className="games__interaction--create" to="#">Créer un match</Link>
        <div className="game">
          <div className="game__items">
            <section className="game__name">
              <p className="game__name--detail">Date</p>
              <p className="game__name--detail">Equipe 1 VS Equipe 2</p>
            </section>
            <section className="game__details">
              <p className="game__details--item">Type</p>
            </section>
          </div>
        </div>
      </section>
      <section className="games">
        {games.map(
          (game) => <GameDisplay key={game.id} game={game} />,
        )}
      </section>
    </>
  );
}

// export :
export default GamesManagement;
