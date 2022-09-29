import axios from 'axios';
import { FETCH_GAMES, saveGames } from '../actions/games';

const gamesMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_GAMES:
      axios.get(
        // 'http://guillaume-gentil.vpnuser.lan/einstein/Apo/01-find-me-a-ref-back/public/api/v1/games',
        'http://localhost:8000//api/v1/games-by-dates',
      )
        .then((response) => {
          console.log(response);
          // saving datas in the store
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
