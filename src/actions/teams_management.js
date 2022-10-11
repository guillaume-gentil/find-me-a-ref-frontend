export const SEND_TEAM_FORM = 'SEND_TEAM_FORM';

export const DELETE_TEAM = 'DELETE_TEAM';
export const SEND_EDIT_TEAM_FORM = 'SEND_EDIT_TEAM_FORM';
export const FETCH_TEAM_INFOS = 'FETCH_TEAM_INFOS';
export const SAVE_TEAM_INFOS = 'SAVE_TEAM_INFOS';

export const sendTeamForm = (formObj) => ({
  type: 'SEND_TEAM_FORM',
  formObj: formObj,
});

export const deleteTeam = ({ token, id }) => ({
  type: 'DELETE_TEAM',
  token: token,
  id: id,
});
export const sendEditTeamForm = (formObj) => ({
  type: 'SEND_EDIT_TEAM_FORM',
  formObj: formObj,
});
export const fetchTeamInfos = ({ id, token }) => ({
  type: 'FETCH_TEAM_INFOS',
  teamId: id,
  token: token,
});
export const saveTeamInfos = (team) => ({
  type: 'SAVE_TEAM_INFOS',
  team: team,
});
