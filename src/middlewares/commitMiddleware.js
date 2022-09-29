import axios from 'axios';

const testMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case 'TEST_LINK':
      axios.patch(
        'http://localhost:8000/api/v1/games/id',
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
