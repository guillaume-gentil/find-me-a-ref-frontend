import axios from 'axios';
import { saveJwtToken, sendAuthCredentials } from '../actions/login';

const authMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case 'SEND_AUTH_CREDENTIALS':
      axios.get('http://localhost:8000/api/v1/games/1', action.logObject)
        .then((response) => {
          // TODO : replace this value by api json web token
          const token = 'fake_token';
          store.dispatch(saveJwtToken(token));
          sessionStorage.setItem('jwtToken', token);
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
