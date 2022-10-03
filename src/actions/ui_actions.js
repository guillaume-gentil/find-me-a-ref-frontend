export const OPEN_NAVBAR = 'OPEN_NAVBAR';
export const REMOVE_LOADING = 'REMOVE_LOADING';
export const SET_EMERGENCY = 'SET_EMERGENCY';

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
