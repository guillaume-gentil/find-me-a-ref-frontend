import axios from 'axios';
import { FETCH_GAMES, saveGames } from '../actions/games';
import { setEmergency } from '../actions/ui_actions';

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
    default:
  }
  // next action :
  next(action);
};
export default gamesMiddleware;
