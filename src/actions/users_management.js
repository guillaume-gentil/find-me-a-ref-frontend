// actions dictionnary :

export const FETCH_ALL_USERS = 'FETCH_ALL_USERS';
export const SAVE_ALL_USERS = 'SAVE_ALL_USERS';

// actions :

export const fetchAllUsers = (token) => ({
  type: 'FETCH_ALL_USERS',
  token: token,
});
export const saveAllUsers = (users) => ({
  type: 'SAVE_ALL_USERS',
  users: users,
});
