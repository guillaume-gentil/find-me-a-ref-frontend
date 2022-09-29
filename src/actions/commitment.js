export const ADD_REF_TO_GAME = 'ADD_REF_TO_GAME';

export const addRefToGame = ({ refMail, gameId }) => ({
  type: 'ADD_REF_TO_GAME',
  mail: refMail,
  gameId: gameId,
});
