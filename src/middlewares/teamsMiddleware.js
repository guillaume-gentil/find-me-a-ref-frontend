import axios from 'axios';
import { setErrorMessage } from '../actions/ui_actions';
import { saveTeams } from '../actions/filters';
import { removeUser } from '../selectors/removeUser';

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
    case 'DELETE_TEAM':
      axios.delete(
        `http://localhost:8000/api/v1/teams/${action.id}`,
        {
          headers: {
            Authorization: `Bearer ${action.token}`,
          },
        },
      )
        .then((response) => {
          const teams = removeUser(store.getState().teams, action.id);
          store.dispatch(saveTeams(teams));
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
export default teamsMiddleware;
