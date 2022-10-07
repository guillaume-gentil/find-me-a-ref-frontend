export const SEND_TEAM_FORM = 'SEND_TEAM_FORM';

export const sendTeamForm = (formObj) => ({
  type: 'SEND_TEAM_FORM',
  formObj: formObj,
});
