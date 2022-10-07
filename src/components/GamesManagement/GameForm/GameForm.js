import { useEffect } from 'react';
import { CornerUpLeft } from 'react-feather';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllUsers } from '../../../actions/users_management';
import {
  fetchArenas, fetchTeams, fetchTypes,
} from '../../../actions/filters';
import '../styles.scss';
import { setErrorMessage } from '../../../actions/ui_actions';
import { sendGameForm } from '../../../actions/games_management';

function GameForm() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.jwtToken);
  const error = useSelector((state) => state.errorMessage);
  useEffect(() => {
    dispatch(fetchAllUsers(token));
    dispatch(fetchTeams());
    dispatch(fetchArenas());
    dispatch(fetchTypes());
  }, []);

  const userList = useSelector((state) => state.allUsers);
  const teamList = useSelector((state) => state.teams);
  const arenaList = useSelector((state) => state.arenas);
  const typeList = useSelector((state) => state.types);

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
    };
    // eslint-disable-next-line max-len
    if (isEmptyOrSpaces(requestObject.date) || isEmptyOrSpaces(requestObject.arena) || isEmptyOrSpaces(requestObject.type) || requestObject.teams.length < 2) {
      const message = 'Veuillez renseigner tous les champs.';
      dispatch(setErrorMessage(message));
    }
    else {
      dispatch(sendGameForm(requestObject));
    }
  }

  return (
    <div className="game-form">
      <section className="game-form__top">
        <h3 className="game-form__title">
          Matchs
        </h3>
        <button
          type="button"
          className="game-form__back"
        ><CornerUpLeft />
        </button>
      </section>
      <form action="" method="POST" className="game-form__form" onSubmit={handleFormSubmit}>
        <fieldset className="game-form__fieldset">
          <label htmlFor="date">
            Date
            <input type="datetime-local" name="date" id="date" />
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
                  >{user.firstname} {user.lastname}
                  </option>
                ),
              )}
            </select>
          </label>
        </fieldset>
        <fieldset className="game-form__fieldset">
          <label htmlFor="arena">
            Gymnase
            <select name="arena" id="arena">
              <option value="">-</option>
              {arenaList.map(
                (arena) => (
                  <option
                    key={arena.id}
                    value={arena.id}
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
                  >{type.name}
                  </option>
                ),
              )}
            </select>
          </label>
          {error && <p className="error_message">Erreur : Veuillez remplir tous les champs</p>}
          <button type="submit" className="game-form__submit">Valider</button>
        </fieldset>
      </form>
    </div>
  );
}

export default GameForm;
