// imports :
import axios from 'axios';
import { FETCH_ALL_USERS } from '../actions/users_management';

// middleware :
const usersMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_ALL_USERS:
      axios.get(
        'http://localhost:8000/api/v1/users',
      )
        .then((response) => {
          console.log(response);
          // saving datas in the store
          // store.dispatch(saveGames(response.data.games));
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

// export :
export default usersMiddleware;
