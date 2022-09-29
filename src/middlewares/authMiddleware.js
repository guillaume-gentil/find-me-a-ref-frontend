import axios from 'axios';
import { saveJwtToken, sendAuthCredentials } from '../actions/login';

const authMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case 'SEND_AUTH_CREDENTIALS':
      axios.post('http://localhost/React/01-find-me-a-ref-back/public/api/v1/login_check', action.credentials)
        .then((response) => {
          // TODO : replace this value by api json web token
          const { token } = response.data;
          store.dispatch(saveJwtToken(token));
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
