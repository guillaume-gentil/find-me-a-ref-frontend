import axios from 'axios';
import { changeGameData } from '../actions/commitment';

const commitMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case 'ADD_REF_TO_GAME':
      axios.patch(`${process.env.API_URL}/api/v1/games/${action.gameId}`, { user_email: action.userMail }, {
        headers: {
          Authorization: `Bearer ${action.token}`,
        },
      })
        .then((response) => {
          const gameData = response.data;
          console.log(gameData);
          store.dispatch(changeGameData(gameData));
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    default:
  }
  // on passe l'action au suivant (middleware suivant ou reducer)
  next(action);
};
export default commitMiddleware;
