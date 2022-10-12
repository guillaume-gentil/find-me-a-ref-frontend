export const OPEN_NAVBAR = 'OPEN_NAVBAR';
export const REMOVE_LOADING = 'REMOVE_LOADING';
export const SET_EMERGENCY = 'SET_EMERGENCY';
export const OPEN_LOGIN = 'OPEN_LOGIN';
export const SET_ADMIN_NAV = 'SET_ADMIN_NAV';
export const UNSET_ADMIN_NAV = 'UNSET_ADMIN_NAV';
export const SET_ERROR_MESSAGE = 'SET_ERROR_MESSAGE';
export const OPEN_FILTERS = 'OPEN_FILTERS';
export const SET_PASS_MODAL_VISIBLE = 'SET_PASS_MODAL_VISIBLE';
export const SET_PASS_MODAL_HIDDEN = 'SET_PASS_MODAL_HIDDEN';
export const COLORIZE_MODAL = 'COLORIZE_MODAL';
export const UNCOLORIZE_MODAL = 'UNCOLORIZE_MODAL';
export const SET_TEAM_NAME_MODAL_VISIBLE = 'SET_TEAM_NAME_MODAL_VISIBLE';
export const SET_TEAM_NAME_MODAL_HIDDEN = 'SET_TEAM_NAME_MODAL_HIDDEN';
export const OPEN_MAIL_CONFIRM = 'OPEN_MAIL_CONFIRM';
export const CLOSE_MAIL_CONFIRM = 'CLOSE_MAIL_CONFIRM';

export const openNavbar = () => ({
  type: 'OPEN_NAVBAR',
});
export const removeLoading = () => ({
  type: 'REMOVE_LOADING',
});
export const setEmergency = (emergencyState) => ({
  type: 'SET_EMERGENCY',
  emergencyState: emergencyState,
});
export const openLogin = () => ({
  type: 'OPEN_LOGIN',
});
export const setAdminNav = () => ({
  type: 'SET_ADMIN_NAV',
});
export const unsetAdminNav = () => ({
  type: 'UNSET_ADMIN_NAV',
});
export const setErrorMessage = (message) => ({
  type: 'SET_ERROR_MESSAGE',
  message: message,
});
export const openFilters = () => ({
  type: 'OPEN_FILTERS',
});
export const setPassModalVisible = () => ({
  type: 'SET_PASS_MODAL_VISIBLE',
});
export const setPassModalHidden = () => ({
  type: 'SET_PASS_MODAL_HIDDEN',
});
export const colorizeModal = (identifier) => ({
  type: 'COLORIZE_MODAL',
  identifier: identifier,
});
export const uncolorizeModal = (identifier) => ({
  type: 'UNCOLORIZE_MODAL',
  identifier: identifier,
});
export const setTeamNameModalVisible = () => ({
  type: 'SET_TEAM_NAME_MODAL_VISIBLE',
});
export const setTeamNameModalHidden = () => ({
  type: 'SET_TEAM_NAME_MODAL_HIDDEN',
});
export const openMailConfirm = () => ({
  type: 'OPEN_MAIL_CONFIRM',
});
export const closeMailConfirm = () => ({
  type: 'CLOSE_MAIL_CONFIRM',
});
