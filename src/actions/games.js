// ACTIONS DICTIONNARY
export const FETCH_GAMES = 'FETCH_GAMES';
export const SAVE_GAMES = 'SAVE_GAMES';

// ACTIONS
export const fetchGames = () => ({
  type: 'FETCH_GAMES',
});
export const saveGames = (games) => ({
  type: 'SAVE_GAMES',
  games: games,

});
