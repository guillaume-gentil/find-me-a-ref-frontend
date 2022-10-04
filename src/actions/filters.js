// ACTIONS DICTIONNARY
export const FETCH_UNCOMMITED_GAMES = 'FETCH_UNCOMMITED_GAMES';
export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';
export const FETCH_TEAMS = 'FETCH_TEAMS';
export const FETCH_CLUBS = 'FETCH_CLUBS';
export const FETCH_ARENAS = 'FETCH_ARENAS';
export const FETCH_TYPES = 'FETCH_TYPES';
export const SAVE_UNCOMMITED_GAMES = 'SAVE_UNCOMMITED_GAMES';
export const SAVE_CATEGORIES = 'SAVE_CATEGORIES';
export const SAVE_TEAMS = 'SAVE_TEAMS';
export const SAVE_CLUBS = 'SAVE_CLUBS';
export const SAVE_ARENAS = 'SAVE_ARENAS';
export const SAVE_TYPES = 'SAVE_TYPES';
export const CHANGE_GAMES_TO_UNCOMMITED_GAMES = 'CHANGE_GAMES_TO_UNCOMMITED_GAMES';
export const ORDER_GAMES_BY_DATES = 'ORDER_GAMES_BY_DATES';
export const ORDER_GAMES_BY_CATEGORY = 'ORDER_GAMES_BY_CATEGORY';
export const ORDER_GAMES_BY_TEAM = 'ORDER_GAMES_BY_TEAM';
export const ORDER_GAMES_BY_CLUB = 'ORDER_GAMES_BY_CLUB';
export const ORDER_GAMES_BY_ARENA = 'ORDER_GAMES_BY_ARENA';
export const ORDER_GAMES_BY_TYPE = 'ORDER_GAMES_BY_TYPE';

// ACTIONS
export const fetchUncommitedGames = () => ({
  type: 'FETCH_UNCOMMITED_GAMES',
});
export const saveUncommitedGames = (games) => ({
  type: 'SAVE_UNCOMMITED_GAMES',
  uncommited: games,
});
export const changeGamesToUncommitedGames = () => ({
  type: 'SAVE_UNCOMMITED_GAMES',
});
export const fetchCategories = () => ({
  type: 'FETCH_CATEGORIES',
});
export const saveCategories = (categories) => ({
  type: 'SAVE_CATEGORIES',
  categories: categories,
});
export const fetchTeams = () => ({
  type: 'FETCH_TEAMS',
});
export const saveTeams = (teams) => ({
  type: 'SAVE_TEAMS',
  teams: teams,
});
export const fetchClubs = () => ({
  type: 'FETCH_CLUBS',
});
export const saveClubs = (clubs) => ({
  type: 'SAVE_CLUBS',
  clubs: clubs,
});
export const fetchArenas = () => ({
  type: 'FETCH_ARENAS',
});
export const saveArenas = (arenas) => ({
  type: 'SAVE_ARENAS',
  arenas: arenas,
});
export const fetchTypes = () => ({
  type: 'FETCH_TYPES',
});
export const saveTypes = (types) => ({
  type: 'SAVE_TYPES',
  types: types,
});
export const orderGamesByDates = () => ({
  type: 'FETCH_GAMES',
});
export const orderGamesByCategory = (categoryId) => ({
  type: 'ORDER_GAMES_BY_CATEGORY',
  categoryId: categoryId,
});
export const orderGamesByTeam = (teamId) => ({
  type: 'ORDER_GAMES_BY_TEAM',
  teamId: teamId,
});
export const orderGamesByClub = (clubId) => ({
  type: 'ORDER_GAMES_BY_CLUB',
  clubId: clubId,
});
export const orderGamesByArena = (arenaId) => ({
  type: 'ORDER_GAMES_BY_ARENA',
  arenaId: arenaId,
});
export const orderGamesByType = (typeId) => ({
  type: 'ORDER_GAMES_BY_TYPE',
  typeId: typeId,
});
