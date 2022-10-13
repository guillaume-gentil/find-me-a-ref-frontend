import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { CornerUpLeft } from 'react-feather';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllUsers } from '../../../actions/users_management';
import {
  fetchArenas, fetchTeams, fetchTypes,
} from '../../../actions/filters';
import '../styles.scss';
import { setErrorMessage } from '../../../actions/ui_actions';
import { fetchGameInfos, sendEditGameForm } from '../../../actions/games_management';

function GameFormEdit() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const token = useSelector((state) => state.jwtToken);
  const error = useSelector((state) => state.errorMessage);
  useEffect(() => {
    dispatch(fetchGameInfos({ id, token }));
    dispatch(fetchAllUsers(token));
    dispatch(fetchTeams());
    dispatch(fetchArenas());
    dispatch(fetchTypes());
  }, []);

  const userList = useSelector((state) => state.allUsers);
  const teamList = useSelector((state) => state.teams);
  const arenaList = useSelector((state) => state.arenas);
  const typeList = useSelector((state) => state.types);
  const game = useSelector((state) => state.editedComponent);

  function isEmptyOrSpaces(str) {
    return str === null || str.match(/^ *$/) !== null;
  }

  function filterReferee(arr) {
    const filteredReferee = arr.filter((item) => !isEmptyOrSpaces(item));
    return filteredReferee;
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    const requestObject = {
      date: e.target.querySelector('#date').value,
      teams: [e.target.querySelector('#team1').value, e.target.querySelector('#team2').value],
      users: filterReferee([e.target.querySelector('#referee1').value, e.target.querySelector('#referee2').value]),
      arena: e.target.querySelector('#arena').value,
      type: e.target.querySelector('#type').value,
      token: token,
      id: id,
    };
    // eslint-disable-next-line max-len
    if (isEmptyOrSpaces(requestObject.date) || isEmptyOrSpaces(requestObject.arena) || isEmptyOrSpaces(requestObject.type) || requestObject.teams.length < 2) {
      const message = 'Veuillez renseigner tous les champs.';
      dispatch(setErrorMessage(message));
    }
    else {
      dispatch(sendEditGameForm(requestObject));
    }
  }
  if (game) {
    return (
      <div className="game-item-form">
        <section className="game-item-form__top">
          <h3 className="game-item-form__title">
            Matchs
          </h3>
          <Link to="/admin/games">
            <button
              type="button"
              className="game-item-form__back"
            ><CornerUpLeft />
            </button>
          </Link>
        </section>
        <form action="" method="POST" className="game-item-form__form" onSubmit={handleFormSubmit}>
          <fieldset className="game-item-form__fieldset">
            <label htmlFor="date">
              Date
              <input type="datetime-local" name="date" id="date" defaultValue={game.date.split('+')[0]} />
            </label>
            <label htmlFor="team1">
              Equipe 1
              <select name="team1" id="team1">
                <option value="">-</option>
                {teamList.map(
                  (team) => (
                    <option
                      key={team.id}
                      value={team.id}
                      selected={game.teams[0].id === team.id}
                    >{team.name}
                    </option>
                  ),
                )}
              </select>
            </label>
            <label htmlFor="team2">
              Equipe 2
              <select name="team2" id="team2">
                <option value="">-</option>
                {teamList.map(
                  (team) => (
                    <option
                      key={team.id}
                      value={team.id}
                      selected={game.teams[1].id === team.id}
                    >{team.name}
                    </option>
                  ),
                )}
              </select>
            </label>
            <label htmlFor="referee1">
              Arbitre 1
              <select name="referee1" id="referee1">
                <option value="">-</option>
                {userList.map(
                  (user) => (
                    <option
                      key={user.id}
                      value={user.id}
                      selected={game.users.length >= 1 && game.users[0].id === user.id}
                    >{user.firstname} {user.lastname}
                    </option>
                  ),
                )}
              </select>
            </label>
            <label htmlFor="referee2">
              Arbitre 2
              <select name="referee2" id="referee2">
                <option value="">-</option>
                {userList.map(
                  (user) => (
                    <option
                      key={user.id}
                      value={user.id}
                      selected={game.users.length >= 2 && game.users[1].id === user.id}
                    >{user.firstname} {user.lastname}
                    </option>
                  ),
                )}
              </select>
            </label>
          </fieldset>
          <fieldset className="game-item-form__fieldset">
            <label htmlFor="arena">
              Gymnase
              <select name="arena" id="arena">
                <option value="">-</option>
                {arenaList.map(
                  (arena) => (
                    <option
                      key={arena.id}
                      value={arena.id}
                      selected={game.arena.id === arena.id}
                    >{arena.name} {arena.address}
                    </option>
                  ),
                )}
              </select>
            </label>
            <label htmlFor="type">
              Type de match
              <select name="type" id="type">
                <option value="">-</option>
                {typeList.map(
                  (type) => (
                    <option
                      key={type.id}
                      value={type.id}
                      selected={game.type.id === type.id}
                    >{type.name}
                    </option>
                  ),
                )}
              </select>
            </label>
            {error && <p className="error_message">Erreur : Veuillez remplir tous les champs</p>}
            <button type="submit" className="game-item-form__submit">Valider</button>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default GameFormEdit;
