// imports :
import axios from 'axios';
import { FETCH_ALL_USERS, saveAllUsers } from '../actions/users_management';

// middleware :
const usersMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_ALL_USERS:
      axios.get('http://localhost:8000/api/v1/users', {
        headers: {
          Authorization: `Bearer ${action.token}`,
        },
      })
        .then((response) => {
          // console.log(response);
          // saving datas in the store
          store.dispatch(saveAllUsers(response.data.users));
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
