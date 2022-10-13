import axios from 'axios';
import { FETCH_GAMES, saveGames } from '../actions/games';
import { saveGameInfos } from '../actions/games_management';
import { setEmergency, setErrorMessage } from '../actions/ui_actions';
import { removeUser } from '../selectors/removeUser';

const gamesMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_GAMES:
      axios.get(
        `${process.env.REACT_APP_API_URL}/api/v1/games-by-dates`,
      )
        .then((response) => {
          // console.log(response);
          // saving datas in the store
          store.dispatch(setEmergency(false));
          store.dispatch(saveGames(response.data.games));
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    case 'SEND_GAME_FORM':
      axios.post(
        'http://localhost:8000/api/v1/games',
        {

          date: action.formObj.date,
          teams: action.formObj.teams,
          users: action.formObj.users,
          arena: action.formObj.arena,
          type: action.formObj.type,

        },
        {
          headers: {
            Authorization: `Bearer ${action.formObj.token}`,
          },
        },
      )
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
          const message = 'Une erreur est survenue.';
          store.dispatch(setErrorMessage(message));
        });
      break;
    case 'SEND_EDIT_GAME_FORM':
      axios.put(
        `http://localhost:8000/api/v1/games/${action.formObj.id}/edit`,
        {

          date: action.formObj.date,
          teams: action.formObj.teams,
          users: action.formObj.users,
          arena: action.formObj.arena,
          type: action.formObj.type,

        },
        {
          headers: {
            Authorization: `Bearer ${action.formObj.token}`,
          },
        },
      )
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
          const message = 'Une erreur est survenue.';
          store.dispatch(setErrorMessage(message));
        });
      break;
    case 'FETCH_GAME_INFOS':
      axios.get(`http://localhost:8000/api/v1/games/${action.gameId}`, {
        headers: {
          Authorization: `Bearer ${action.token}`,
        },
      })
        .then((response) => {
          console.log(response);
          store.dispatch(saveGameInfos(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    case 'DELETE_GAME':
      axios.delete(
        `http://localhost:8000/api/v1/games/${action.id}`,
        {
          headers: {
            Authorization: `Bearer ${action.token}`,
          },
        },
      )
        .then((response) => {
          const games = removeUser(store.getState().games, action.id);
          store.dispatch(saveGames(games));
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    default:
  }
  // next action :
  next(action);
};
export default gamesMiddleware;
