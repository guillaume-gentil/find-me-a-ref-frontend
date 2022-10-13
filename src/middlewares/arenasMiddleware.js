import axios from 'axios';
import { saveArenas } from 'src/actions/filters';
import { saveArenaInfos } from '../actions/arenas_management';
import { setErrorMessage } from '../actions/ui_actions';
import { removeUser } from '../selectors/removeUser';

const arenasMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case 'SEND_ARENA_FORM':
      axios.post(
        `${process.env.API_URL}/api/v1/arenas`,
        {

          name: action.formObj.name,
          address: action.formObj.address,
          zip_code: action.formObj.zipcode,

        },
        {
          headers: {
            Authorization: `Bearer ${action.formObj.token}`,
          },
        },
      )
        .then((response) => {
          console.log(response);
          window.location = '/admin/arena';
        })
        .catch((error) => {
          console.log(error);
          const message = 'Une erreur est survenue.';
          store.dispatch(setErrorMessage(message));
        });
      break;
    case 'SEND_EDIT_ARENA_FORM':
      axios.put(
        `${process.env.API_URL}/api/v1/arenas/${action.formObj.id}/edit`,
        {

          name: action.formObj.name,
          address: action.formObj.address,
          zip_code: action.formObj.zipcode,

        },
        {
          headers: {
            Authorization: `Bearer ${action.formObj.token}`,
          },
        },
      )
        .then((response) => {
          console.log(response);
          window.location = '/admin/arena';
        })
        .catch((error) => {
          console.log(error);
          const message = 'Une erreur est survenue.';
          store.dispatch(setErrorMessage(message));
        });
      break;
    case 'FETCH_ARENA_INFOS':
      axios.get(`${process.env.API_URL}/api/v1/arenas/${action.arenaId}`, {
        headers: {
          Authorization: `Bearer ${action.token}`,
        },
      })
        .then((response) => {
          console.log(response);
          store.dispatch(saveArenaInfos(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    case 'DELETE_ARENA':
      axios.delete(
        `${process.env.API_URL}/api/v1/arenas/${action.id}`,
        {
          headers: {
            Authorization: `Bearer ${action.token}`,
          },
        },
      )
        .then((response) => {
          const arenas = removeUser(store.getState().arenas, action.id);
          store.dispatch(saveArenas(arenas));
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
export default arenasMiddleware;
