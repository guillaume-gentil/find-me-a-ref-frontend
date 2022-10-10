export const FETCH_CLUBS = 'FETCH_CLUB';
export const SAVE_CLUBS = 'SAVE_CLUBS';
export const SEND_CLUB_FORM = 'SEND_CLUB_FORM';

export const fetchClubs = (token) => ({
  type: 'FETCH_CLUBS',
  token: token,
});
export const saveClubs = (clubs) => ({
  type: 'SAVE_CLUBS',
  clubs: clubs,
});

export const sendClubForm = (formObj) => ({
  type: 'SEND_CLUB_FORM',
  formObj: formObj,
});
