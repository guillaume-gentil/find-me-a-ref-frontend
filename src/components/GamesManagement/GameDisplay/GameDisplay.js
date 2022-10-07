// import :
import '../styles.scss';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Edit, Trash } from 'react-feather';
import PropTypes from 'prop-types';

// component :
function GameDisplay({ game }) {
  function handleClassChange(e) {
    const targetedGame = e.target.querySelector('.game__link');
    // console.log(targetedGame);
    targetedGame.classList.toggle('hidden');
  }
  console.log(game);
  return (
    <section
      className="game"
      onClick={handleClassChange}
    >
      <div className="game__items">
        <section className="game__name">
          <p className="game__name--detail">{game.date}</p>
          <p className="game__name--detail">{game.teams[0].name} VS {game.teams[1].name}</p>
        </section>
        <section className="game__details">
          <p className="game__details--item">{game.type.name}</p>
        </section>
      </div>

      <section className="game__link hidden">
        <Link className="games__interaction" to="#"><Edit size={25} /></Link>
        <Link className="games__interaction" to="#"><Trash size={25} /></Link>
      </section>

    </section>
  );
}

// verify props :
GameDisplay.propTypes = {
  game: PropTypes.object.isRequired,
};
// export :
export default GameDisplay;
