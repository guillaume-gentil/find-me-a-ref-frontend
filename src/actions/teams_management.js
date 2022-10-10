export const SEND_TEAM_FORM = 'SEND_TEAM_FORM';
export const DELETE_TEAM = 'DELETE_TEAM';

export const sendTeamForm = (formObj) => ({
  type: 'SEND_TEAM_FORM',
  formObj: formObj,
});
export const deleteTeam = ({ token, id }) => ({
  type: 'DELETE_TEAM',
  token: token,
  id: id,
});
