// imports :
import { useSelector } from 'react-redux';
import './styles.scss';
import Game from './Game/Game';

// component :
function Games() {
  // const isGamesLoaded = useSelector((state) => state.isGamesLoaded);

  const games = useSelector((state) => state.games);

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
