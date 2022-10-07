export const FETCH_ALL_USERS = 'FETCH_ALL_USERS';
export const SAVE_ALL_USERS = 'SAVE_ALL_USERS';
export const SEND_USER_FORM = 'SEND_USER_FORM';
export const CHANGE_INPUT_PASS = 'CHANGE_INPUT_PASS';
export const CHANGE_INPUT_ADDRESS = 'CHANGE_INPUT_ADDRESS';
export const CHANGE_INPUT_FIRSTNAME = 'CHANGE_INPUT_FIRSTNAME';
export const CHANGE_INPUT_LASTNAME = 'CHANGE_INPUT_LASTNAME';
export const CHANGE_INPUT_EMAIL = 'CHANGE_INPUT_EMAIL';
export const CHANGE_INPUT_ZIPCODE = 'CHANGE_INPUT_ZIPCODE';
export const CHANGE_INPUT_LEVEL = 'CHANGE_INPUT_LEVEL';
export const CHANGE_INPUT_LICENSE = 'CHANGE_INPUT_LICENSE';

export const sendUserForm = (formObj) => ({
  type: 'SEND_USER_FORM',
  formObj: formObj,
});
export const changeInputPass = (value) => ({
  type: 'CHANGE_INPUT_PASS',
  newValue: value,
});
export const changeInputFirstname = (value) => ({
  type: 'CHANGE_INPUT_FIRSTNAME',
  newValue: value,
});
export const changeInputLastname = (value) => ({
  type: 'CHANGE_INPUT_LASTNAME',
  newValue: value,
});
export const changeInputEmail = (value) => ({
  type: 'CHANGE_INPUT_EMAIL',
  newValue: value,
});
export const changeInputAddress = (value) => ({
  type: 'CHANGE_INPUT_ADDRESS',
  newValue: value,
});
export const changeInputZipcode = (value) => ({
  type: 'CHANGE_INPUT_ZIPCODE',
  newValue: value,
});
export const changeInputLevel = (value) => ({
  type: 'CHANGE_INPUT_LEVEL',
  newValue: value,
});
export const changeInputLicense = (value) => ({
  type: 'CHANGE_INPUT_LICENSE',
  newValue: value,
});
export const fetchAllUsers = (token) => ({
  type: 'FETCH_ALL_USERS',
  token: token,
});
export const saveAllUsers = (users) => ({
  type: 'SAVE_ALL_USERS',
  users: users,
});
