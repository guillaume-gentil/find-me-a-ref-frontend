// actions dictionnary :

export const TOGGLE_USER_DETAILS = 'TOGGLE_USER_DETAILS';
export const FETCH_ALL_USERS = 'FETCH_ALL_USERS';

// actions :

export const toggleUserDetails = () => ({
  type: 'TOGGLE_USER_DETAILS',
});
export const fetchAllUsers = () => ({
  type: 'FETCH_ALL_USERS',
});
