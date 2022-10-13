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
  ORDER_GAMES_BY_TEAM,
  ORDER_GAMES_BY_CATEGORY,
  ORDER_GAMES_BY_CLUB,
  ORDER_GAMES_BY_ARENA,
  ORDER_GAMES_BY_TYPE,
} from 'src/actions/filters';

import { saveGames } from '../actions/games';
import { setEmergency } from '../actions/ui_actions';

const filtersMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_UNCOMMITED_GAMES:
      axios.get(
        `${process.env.API_URL}/api/v1/games-by-users`,
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
        `${process.env.API_URL}/api/v1/categories`,
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
        `${process.env.API_URL}/api/v1/teams`,
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
        `${process.env.API_URL}/api/v1/clubs`,
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
        `${process.env.API_URL}/api/v1/arenas`,
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
        `${process.env.API_URL}/api/v1/types`,
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
    case ORDER_GAMES_BY_CATEGORY:
      axios.get(
        `${process.env.API_URL}/api/v1/categories/${action.categoryId}/games`,
      )
        .then((response) => {
          // console.log(response.data);

          // saving datas in the state
          store.dispatch(saveGames(response.data.games));
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    case ORDER_GAMES_BY_TEAM:
      axios.get(
        `${process.env.API_URL}/api/v1/teams/${action.teamId}/games`,
      )
        .then((response) => {
          // console.log(response.data);

          // saving datas in the state
          store.dispatch(saveGames(response.data.games));
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    case ORDER_GAMES_BY_CLUB:
      axios.get(
        `${process.env.API_URL}/api/v1/clubs/${action.clubId}/games`,
      )
        .then((response) => {
          // console.log(response.data);

          // saving datas in the state
          store.dispatch(saveGames(response.data.games));
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    case ORDER_GAMES_BY_ARENA:
      axios.get(
        `${process.env.API_URL}/api/v1/arenas/${action.arenaId}/games`,
      )
        .then((response) => {
          console.log(response.data);

          // saving datas in the state
          store.dispatch(saveGames(response.data.games));
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    case ORDER_GAMES_BY_TYPE:
      axios.get(
        `${process.env.API_URL}/api/v1/types/${action.typeId}/games`,
      )
        .then((response) => {
          console.log(response.data);

          // saving datas in the state
          store.dispatch(saveGames(response.data.games));
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
