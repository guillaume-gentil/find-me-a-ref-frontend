export const SEND_ARENA_FORM = 'SEND_ARENA_FORM';
export const SEND_EDIT_ARENA_FORM = 'SEND_EDIT_ARENA_FORM';
export const FETCH_ARENA_INFOS = 'FETCH_ARENA_INFOS';
export const SAVE_ARENA_INFOS = 'SAVE_ARENA_INFOS';

export const sendArenaForm = (formObj) => ({
  type: 'SEND_ARENA_FORM',
  formObj: formObj,
});
export const sendEditArenaForm = (formObj) => ({
  type: 'SEND_EDIT_ARENA_FORM',
  formObj: formObj,
});
export const fetchArenaInfos = ({ id, token }) => ({
  type: 'FETCH_ARENA_INFOS',
  arenaId: id,
  token: token,
});
export const saveArenaInfos = (arena) => ({
  type: 'SAVE_ARENA_INFOS',
  arena: arena,
});
