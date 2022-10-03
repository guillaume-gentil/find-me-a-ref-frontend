export const ADD_REF_TO_GAME = 'ADD_REF_TO_GAME';
export const CHANGE_GAME_DATA = 'CHANGE_GAME_DATA';

export const addRefToGame = ({ userMail, gameId, token }) => ({
  type: 'ADD_REF_TO_GAME',
  userMail: userMail,
  gameId: gameId,
  token: token,
});

export const changeGameData = (gameData) => ({
  type: 'CHANGE_GAME_DATA',
  gameData: gameData,
});
