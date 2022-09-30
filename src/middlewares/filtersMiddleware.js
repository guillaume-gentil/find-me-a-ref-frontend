import axios from 'axios';
import {
  FETCH_CATEGORIES,
  saveCategories,
  FETCH_TEAMS,
  saveTeams,
  FETCH_CLUBS,
  saveClubs,
  FETCH_ARENAS,
  saveArenas,
  FETCH_TYPES,
  saveTypes,
} from 'src/actions/filters';

const filtersMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_CATEGORIES:
      axios.get(
        'http://localhost:8000/api/v1/categories',
      )
        .then((response) => {
          // console.log(response);

          // saving datas in the store
          store.dispatch(saveCategories(response.data.categories));
        })
        .catch((error) => {
        // console.log(error);
        });
      break;
    case FETCH_TEAMS:
      axios.get(
        'http://localhost:8000/api/v1/teams',
      )
        .then((response) => {
          console.log(response);

          // saving datas in the store
          store.dispatch(saveTeams(response.data.teams));
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    case FETCH_CLUBS:
      axios.get(
        'http://localhost:8000/api/v1/clubs',
      )
        .then((response) => {
          console.log(response);

          // saving datas in the store
          store.dispatch(saveClubs(response.data.clubs));
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    case FETCH_ARENAS:
      axios.get(
        'http://localhost:8000/api/v1/arenas',
      )
        .then((response) => {
          // console.log(response);

          // saving datas in the store
          store.dispatch(saveArenas(response.data.arenas));
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    case FETCH_TYPES:
      axios.get(
        'http://localhost:8000/api/v1/types',
      )
        .then((response) => {
          // console.log(response);

          // saving datas in the store
          store.dispatch(saveTypes(response.data.types));
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
export default filtersMiddleware;
