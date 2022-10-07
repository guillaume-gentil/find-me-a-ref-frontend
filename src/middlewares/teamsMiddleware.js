import axios from 'axios';
import { setErrorMessage } from '../actions/ui_actions';

const teamsMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case 'SEND_TEAM_FORM':
      axios.post(
        'http://localhost:8000/api/v1/teams',
        {

          name: action.formObj.name,
          club: action.formObj.club,
          category: action.formObj.category,

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
export default teamsMiddleware;
