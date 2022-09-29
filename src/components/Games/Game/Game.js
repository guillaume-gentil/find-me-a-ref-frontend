// import :
import { Link } from 'react-router-dom';
import Moment from 'moment';
import '../styles.scss';
import registering from 'src/assets/img/registering.png';
import PropTypes from 'prop-types';

// component :
function Game({
  arena,
  date,
  teams,
  type,
  users,
}) {
  const formatDate = Moment(date).format('DD-MM-YYYY à HH:MM');
  // colorizing the view :
  let gameState = 'game';
  const gameReferee = users.length;

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

  // using props :  {teams.category}

  return (
    <section className={gameState}>
      <h2 className="game__item">{teams[0].name} VS </h2>
      <h2 className="game__item">{teams[1].name}</h2>
      <p className="game__item">{formatDate}</p>
      <p className="game__item">{arena.address}</p>
      <p className="game__item">{type.name}</p>
      <p className="game__counter">{gameReferee}/2</p>
      <Link to="/engagement"><img className="game__registering" src={registering} alt="registering button" /></Link>
    </section>
  );
}

// verifying props :
Game.propTypes = {
  arena: PropTypes.object.isRequired,
  date: PropTypes.string.isRequired,
  teams: PropTypes.arrayOf(
    PropTypes.shape({
      category: PropTypes.object.isRequired,
      club: PropTypes.object.isRequired,
    }),
  ).isRequired,
  type: PropTypes.object.isRequired,
  users: PropTypes.array.isRequired,
};

// export :
export default Game;
