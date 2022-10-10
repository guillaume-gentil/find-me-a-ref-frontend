export const SEND_CLUB_FORM = 'SEND_CLUB_FORM';
export const SEND_EDIT_CLUB_FORM = 'SEND_EDIT_CLUB_FORM';
export const FETCH_CLUB_INFOS = 'FETCH_CLUB_INFOS';
export const SAVE_CLUB_INFOS = 'SAVE_CLUB_INFOS';

export const sendClubForm = (formObj) => ({
  type: 'SEND_CLUB_FORM',
  formObj: formObj,
});
export const sendEditClubForm = (formObj) => ({
  type: 'SEND_EDIT_CLUB_FORM',
  formObj: formObj,
});
export const fetchClubInfos = ({ id, token }) => ({
  type: 'FETCH_CLUB_INFOS',
  clubId: id,
  token: token,
});
export const saveClubInfos = (club) => ({
  type: 'SAVE_CLUB_INFOS',
  club: club,
});
