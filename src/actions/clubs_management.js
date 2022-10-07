export const SEND_CLUB_FORM = 'SEND_CLUB_FORM';

export const sendClubForm = (formObj) => ({
  type: 'SEND_CLUB_FORM',
  formObj: formObj,
});
