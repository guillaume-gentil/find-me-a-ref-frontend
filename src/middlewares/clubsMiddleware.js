import axios from 'axios';
import { FETCH_CLUBS, saveClubs } from '../actions/clubs_management';
import { setErrorMessage } from '../actions/ui_actions';

const clubsMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_CLUBS:
      axios.get(
        'http://localhost:8000/api/v1/clubs',
      )
        .then((response) => {
          console.log(response);
          // saving datas in the store
          // store.dispatch(saveClubs(response.data.clubs));
        })
        .catch((error) => {
          console.log(error);
          const message = 'Une erreur est survenue.';
          store.dispatch(setErrorMessage(message));
        });
      break;

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
    default:
  }
  // next action :
  next(action);
};
export default clubsMiddleware;
