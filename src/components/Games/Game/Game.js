// import :
import { Link } from 'react-router-dom';
import '../styles.scss';
import registering from 'src/assets/img/registering.png';
import PropTypes from 'prop-types';

// component :
function Game() {
  console.log(game.arena);
  // choose the right color for the view :
  let gameState = 'game';
  const gameReferee = 1;

  const gamecolorOne = ' noregistered';
  const gameColorTwo = ' oneregistered';
  const gameColorThree = ' fullregistered';

  if (gameReferee === 0) {
    gameState += gamecolorOne;
  }
  else if (gameReferee === 1) {
    gameState += gameColorTwo;
  }
  else {
    gameState += gameColorThree;
  }

  // using props :

  return (
    <section className={gameState}>
      <h2 className="game__item">Equipe 1 VS Equipe 2</h2>
      <p className="game__item">01/08/1998</p>
      <p className="game__item">xxx</p>
      <p className="game__item">categorie : U12</p>
      <p className="game__counter">{gameReferee}/2</p>
      <Link to="/engagement"><img className="game__registering" src={registering} alt="registering button" /></Link>
    </section>
  );
}

// verifying props :
// Game.propTypes = {
//   arena: PropTypes.string.isRequired,
// };
// export :
export default Game;
