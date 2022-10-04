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
      <div className="games__legend">
        <p className="games__legend--blue">&#9899; - Engagé sur le match</p>
        <p className="games__legend--green">&#9899; - Validé</p>
        <p className="games__legend--orange">&#9899; - Un arbitre manquant</p>
        <p className="games__legend--red">&#9899; - Urgence</p>
      </div>
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
