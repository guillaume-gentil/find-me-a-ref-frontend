import axios from 'axios';
import { setErrorMessage } from '../actions/ui_actions';
import { saveClubs } from '../actions/filters';
import { removeUser } from '../selectors/removeUser';

const clubsMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case 'SEND_CLUB_FORM':
      axios.post(
        'http://localhost:8000/api/v1/clubs',
        {

          name: action.formObj.name,
          address: action.formObj.address,
          zip_code: action.formObj.zip_code,

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
    case 'DELETE_CLUB':
      axios.delete(
        `http://localhost:8000/api/v1/clubs/${action.id}`,
        {
          headers: {
            Authorization: `Bearer ${action.token}`,
          },
        },
      )
        .then((response) => {
          const clubs = removeUser(store.getState().clubs, action.id);
          store.dispatch(saveClubs(clubs));
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
export default clubsMiddleware;
