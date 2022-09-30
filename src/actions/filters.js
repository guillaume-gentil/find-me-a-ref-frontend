// ACTIONS DICTIONNARY
export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';
export const FETCH_TEAMS = 'FETCH_TEAMS';
export const FETCH_CLUBS = 'FETCH_CLUBS';
export const FETCH_ARENAS = 'FETCH_ARENAS';
export const FETCH_TYPES = 'FETCH_TYPES';
export const SAVE_CATEGORIES = 'SAVE_CATEGORIES';
export const SAVE_TEAMS = 'SAVE_TEAMS';
export const SAVE_CLUBS = 'SAVE_CLUBS';
export const SAVE_ARENAS = 'SAVE_ARENAS';
export const SAVE_TYPES = 'SAVE_TYPES';

// ACTIONS
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
  type: 'SAVE_CATEGORIES',
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
