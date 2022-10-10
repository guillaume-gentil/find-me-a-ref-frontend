// import :
import '../styles.scss';
import { Link } from 'react-router-dom';
import { Edit, Trash } from 'react-feather';
import Moment from 'moment';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { deleteGame } from '../../../actions/games_management';

// component :
function GameDisplay({ game }) {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.jwtToken);
  function handleDelete(e) {
    const requestObject = {
      id: game.id,
      token: token,
    };
    if (confirm('Etes-vous sûr de vouloir supprimer ce match?')) {
      console.log(requestObject);
      dispatch(deleteGame(requestObject));
    }
  }
  function handleClassChange(e) {
    const targetedGame = e.target.closest('.game-item');
    const linkElem = targetedGame.querySelector('.game-item__link');
    linkElem.classList.toggle('game-hidden');
  }
  const formatDate = Moment(game.date).format('DD-MM-YYYY à HH:MM');
  return (
    <section
      className="game-item"
      onClick={handleClassChange}
    >
      <div className="game-item__items">
        <section className="game-item__name">
          <p className="game-item__name--detail">{formatDate}</p>
          <p className="game-item__name--detail">{game.teams[0].name} VS {game.teams[1].name}</p>
        </section>
        <section className="game-item__details">
          <p className="game-item__details--item">{game.type.name}</p>
        </section>
      </div>

      <section className="game-item__link game-hidden">
        <Link className="games-management__interaction" to="#"><Edit size={25} /></Link>
        <button type="button" className="games-management__interaction" onClick={handleDelete}><Trash size={25} /></button>

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
