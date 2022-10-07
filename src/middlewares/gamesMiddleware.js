import axios from 'axios';
import { FETCH_GAMES, saveGames } from '../actions/games';
import { setEmergency, setErrorMessage } from '../actions/ui_actions';

const gamesMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_GAMES:
      axios.get(
        'http://localhost:8000/api/v1/games-by-dates',
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
    default:
  }
  // next action :
  next(action);
};
export default gamesMiddleware;
