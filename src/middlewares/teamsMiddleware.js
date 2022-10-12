import axios from 'axios';
import { saveTeamInfos } from '../actions/teams_management';
import { setErrorMessage } from '../actions/ui_actions';
import { saveTeams } from '../actions/filters';
import { removeUser } from '../selectors/removeUser';

const teamsMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case 'SEND_TEAM_FORM':
      axios.post(
        `${process.env.API_URL}/api/v1/teams`,
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
        `${process.env.API_URL}/api/v1/teams/${action.id}`,
        {
          headers: {
            Authorization: `Bearer ${action.token}`,
          },
        },
      )
        .then((response) => {
          const teams = removeUser(store.getState().teams, action.id);
          store.dispatch(saveTeams(teams));
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
          const message = 'Une erreur est survenue.';
          store.dispatch(setErrorMessage(message));
        });
      break;
    case 'SEND_EDIT_TEAM_FORM':
      axios.put(
        `${process.env.API_URL}/api/v1/teams/${action.formObj.id}/edit`,
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
    case 'FETCH_TEAM_INFOS':
      axios.get(`${process.env.API_URL}/api/v1/teams/${action.teamId}`, {
        headers: {
          Authorization: `Bearer ${action.token}`,
        },
      })
        .then((response) => {
          console.log(response);
          store.dispatch(saveTeamInfos(response.data));
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
