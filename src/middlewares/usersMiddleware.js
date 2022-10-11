// imports :
import axios from 'axios';
import { FETCH_ALL_USERS, saveAllUsers, saveUser } from '../actions/users_management';
import { setErrorMessage } from '../actions/ui_actions';
import { removeUser } from '../selectors/removeUser';
import { saveCurrentUser } from '../actions/profile';

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
    case 'FETCH_USER_DATA':
      axios.get('http://localhost:8000/api/v1/users/edit', {
        headers: {
          Authorization: `Bearer ${action.token}`,
        },
      })
        .then((response) => {
          console.log(response.data);
          store.dispatch(saveCurrentUser(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    case 'FETCH_USER':
      axios.get(`http://localhost:8000/api/v1/users/${action.id}`, {
        headers: {
          Authorization: `Bearer ${action.token}`,
        },
      })
        .then((response) => {
          console.log(response);
          // saving datas in the store
          store.dispatch(saveUser(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    case 'SEND_USER_FORM':
      axios.post(
        'http://localhost:8000/api/v1/users',
        {

          firstname: action.formObj.firstname,
          lastname: action.formObj.lastname,
          email: action.formObj.email,
          roles: action.formObj.roles,
          password: action.formObj.password,

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
    case 'SEND_EDIT_USER_FORM':
      axios.put(
        `http://localhost:8000/api/v1/users/${action.formObj.id}/edit`,
        {

          firstname: action.formObj.firstname,
          lastname: action.formObj.lastname,
          email: action.formObj.email,
          roles: action.formObj.roles,
          password: action.formObj.password,

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
    case 'DELETE_USER':
      axios.delete(
        `http://localhost:8000/api/v1/users/${action.id}`,
        {
          headers: {
            Authorization: `Bearer ${action.token}`,
          },
        },
      )
        .then((response) => {
          const allUsers = removeUser(store.getState().allUsers, action.id);
          store.dispatch(saveAllUsers(allUsers));
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
