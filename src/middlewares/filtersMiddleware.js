import axios from 'axios';
import {
  FETCH_UNCOMMITED_GAMES,
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

import { saveGames } from '../actions/games';
import { setEmergency } from '../actions/ui_actions';

const filtersMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_UNCOMMITED_GAMES:
      axios.get(
        'http://localhost:8000/api/v1/games-by-users',
      )
        .then((response) => {
          // console.log(response);
          // saving datas in the state
          store.dispatch(setEmergency(true));
          store.dispatch(saveGames(response.data.games));
        })
        .catch((error) => {
        // console.log(error);
        });
      break;
    case FETCH_CATEGORIES:
      axios.get(
        'http://localhost:8000/api/v1/categories',
      )
        .then((response) => {
          // console.log(response);

          // saving datas in the state
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
          // console.log(response);

          // saving datas in the state
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
          // console.log(response);

          // saving datas in the state
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

          // saving datas in the state
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

          // saving datas in the state
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
