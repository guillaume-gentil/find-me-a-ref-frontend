import axios from 'axios';
import { saveClubInfos } from '../actions/clubs_management';
import { setEmergency, setErrorMessage } from '../actions/ui_actions';

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
    case 'SEND_EDIT_CLUB_FORM':
      axios.put(
        `http://localhost:8000/api/v1/clubs/${action.formObj.id}/edit`,
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
    case 'FETCH_CLUB_INFOS':
      axios.get(`http://localhost:8000/api/v1/clubs/${action.clubId}`, {
        headers: {
          Authorization: `Bearer ${action.token}`,
        },
      })
        .then((response) => {
          console.log(response);
          store.dispatch(saveClubInfos(response.data));
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
