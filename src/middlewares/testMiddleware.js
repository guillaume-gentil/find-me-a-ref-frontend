import axios from 'axios';
import { testLink } from '../actions/test';

const testMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case 'TEST_LINK':
      axios.get(
        'http://guillaume-gentil.vpnuser.lan/einstein/Apo/01-find-me-a-ref-back/public/api/v1/test',
      )
        .then((response) => {
          console.log(response);
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
export default testMiddleware;
