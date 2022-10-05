// import :
import { Link } from 'react-router-dom';
import Moment from 'moment';
import PropTypes from 'prop-types';
import '../styles.scss';
import registered from 'src/assets/img/engage2.png';
import unregistered from 'src/assets/img/engage3.png';
import { useDispatch, useSelector } from 'react-redux';
import { openLogin } from '../../../actions/ui_actions';
import { findUserMail } from '../../../selectors/findUserMail';

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

  const dispatch = useDispatch();

  const token = useSelector((state) => state.jwtToken);

  const userMail = findUserMail(token);

  const isRegistered = users.find((user) => user.email === userMail);

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

  if (isRegistered) {
    gameState += ' isregistered';
  }

  const isLogged = useSelector((state) => state.isLogged);

  if (isLogged) {
    return (
      <Link to={`/engagement/${id}`}>
        <section className={gameState}>
          <h2 className="game__item">{teams[0].name} VS </h2>
          <h2 className="game__item">{teams[1].name}</h2>
          <p className="game__item">{formatDate}</p>
          <p className="game__item">{arena.address}</p>
          <p className="game__item">{type.name}</p>
          <p className="game__counter">Arbitres : {gameReferee}/2</p>
          {/* <img
          className="game__registering"
          src={isRegistered ? unregistered : registered} alt="registering button" /> */}
          {!isRegistered ? <button className="game__register--button game__registering">J'arbitre !</button> : <button className="game__register--button unregistering">Je me désengage</button>}
        </section>
      </Link>
    );
  }
  return (
    <a
      href=""
      onClick={(e) => {
        e.preventDefault();
        dispatch(openLogin());
      }}
    >
      <section className={gameState}>
        <h2 className="game__item">{teams[0].name} VS </h2>
        <h2 className="game__item">{teams[1].name}</h2>
        <p className="game__item">{formatDate}</p>
        <p className="game__item">{arena.address}</p>
        <p className="game__item">{type.name}</p>
        <p className="game__counter">Arbitres : {gameReferee}/2</p>
      </section>
    </a>
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
