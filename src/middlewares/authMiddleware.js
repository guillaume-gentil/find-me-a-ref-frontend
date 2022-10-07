import axios from 'axios';
import { saveJwtToken, setUserRoles } from '../actions/login';
import { fetchUserRole } from '../selectors/fetchUserRole';

const authMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case 'SEND_AUTH_CREDENTIALS':
      axios.post('http://localhost:8000/api/v1/login_check', action.credentials)
        .then((response) => {
          // TODO : replace this value by api json web token
          const { token } = response.data;
          store.dispatch(saveJwtToken(token));
          store.dispatch(setUserRoles(fetchUserRole(token)));
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    default:
  }
  // on passe l'action au suivant (middleware suivant ou reducer)
  next(action);
};
export default authMiddleware;
