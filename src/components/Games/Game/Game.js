// import :
import { Link } from 'react-router-dom';
import Moment from 'moment';
import PropTypes from 'prop-types';
import '../styles.scss';
import registering from 'src/assets/img/registering.png';

// component :
function Game({
  arena,
  date,
  teams,
  type,
  users,
  id,
}) {
  // change date time format :
  const formatDate = Moment(date).format('DD-MM-YYYY à HH:MM');

  // colorizing the view :
  // find the number of referees
  const gameReferee = users.length;
  // change the classname depending on the number of referees
  let gameState = 'game';
  const gamecolorOne = ' noregistered';
  const gameColorTwo = ' oneregistered';
  const gameColorThree = ' fullregistered';
  // condition for the color change
  if (gameReferee === 0) {
    gameState += gamecolorOne;
  }
  else if (gameReferee === 1) {
    gameState += gameColorTwo;
  }
  else {
    gameState += gameColorThree;
  }

  return (
    <Link to={`/engagement/${id}`}>
      <section className={gameState}>
        <h2 className="game__item">{teams[0].name} VS </h2>
        <h2 className="game__item">{teams[1].name}</h2>
        <p className="game__item">{formatDate}</p>
        <p className="game__item">{arena.address}</p>
        <p className="game__item">{type.name}</p>
        <p className="game__counter">{gameReferee}/2</p>
        <Link to={`/engagement/${id}`}><img className="game__registering" src={registering} alt="registering button" /></Link>
      </section>
    </Link>
  );
}

// verify props :
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
  id: PropTypes.number.isRequired,
};

// export :
export default Game;
