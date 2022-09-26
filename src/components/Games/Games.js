// imports :
import './styles.scss';
import Game from './Game/Game';

// component :
function Games() {
  return (
    <section className="games">
      <p className="games__text">Les prochains matchs :</p>
      <Game />
      <Game />
      <Game />
      <Game />
      <Game />
      <Game />
      <Game />
      <Game />
      <Game />
      <Game />
      <Game />
      <button type="button" className="games__more"> Voir plus</button>
    </section>
  );
}

// export :
export default Games;
