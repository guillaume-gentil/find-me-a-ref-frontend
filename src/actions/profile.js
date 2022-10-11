export const FETCH_USER_DATA = 'FETCH_USER_DATA';
export const SAVE_CURRENT_USER = 'SAVE_CURRENT_USER';

export const fetchUserData = (token) => ({
  type: 'FETCH_USER_DATA',
  token: token,
});
export const saveCurrentUser = (userData) => ({
  type: 'SAVE_CURRENT_USER',
  userData: userData,
});
