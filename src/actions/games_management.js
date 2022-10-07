export const SEND_GAME_FORM = 'SEND_GAME_FORM';

export const sendGameForm = (formObj) => ({
  type: 'SEND_GAME_FORM',
  formObj: formObj,
});
