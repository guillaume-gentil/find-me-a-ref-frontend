export const SEND_CLUB_FORM = 'SEND_CLUB_FORM';
export const DELETE_CLUB = 'DELETE_CLUB';

export const sendClubForm = (formObj) => ({
  type: 'SEND_CLUB_FORM',
  formObj: formObj,
});
export const deleteClub = ({ token, id }) => ({
  type: 'DELETE_CLUB',
  token: token,
  id: id,
});
