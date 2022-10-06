import axios from 'axios';
import { setErrorMessage } from '../actions/ui_actions';

const usersMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
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
    default:
  }
  // on passe l'action au suivant (middleware suivant ou reducer)
  next(action);
};
export default usersMiddleware;
