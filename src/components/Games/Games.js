// imports :
import { useDispatch, useSelector } from 'react-redux';
import './styles.scss';
import { useEffect } from 'react';
import Game from './Game/Game';
import { fetchGames } from '../../actions/games';

// component :
function Games() {
  // const isGamesLoaded = useSelector((state) => state.isGamesLoaded);
  const dispatch = useDispatch();
  const games = useSelector((state) => state.games);
  useEffect(() => {
    dispatch(fetchGames());
  }, []);

  return (
    <section className="games">
      <p className="games__text">Les prochains matchs :</p>
      {games.map(
        (game) => <Game key={game.id} {...game} />,
      )}
      <button type="button" className="games__more"> Voir plus</button>
    </section>
  );
}

// export :
export default Games;
