export const SEND_GAME_FORM = 'SEND_GAME_FORM';
export const SEND_EDIT_GAME_FORM = 'SEND_EDIT_GAME_FORM';
export const FETCH_GAME_INFOS = 'FETCH_GAME_INFOS';
export const SAVE_GAME_INFOS = 'SAVE_GAME_INFOS';

export const sendGameForm = (formObj) => ({
  type: 'SEND_GAME_FORM',
  formObj: formObj,
});
export const sendEditGameForm = (formObj) => ({
  type: 'SEND_EDIT_GAME_FORM',
  formObj: formObj,
});
export const fetchGameInfos = ({ id, token }) => ({
  type: 'FETCH_GAME_INFOS',
  gameId: id,
  token: token,
});
export const saveGameInfos = (game) => ({
  type: 'SAVE_GAME_INFOS',
  game: game,
});
