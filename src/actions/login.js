export const TOGGLE_MOBILE = 'TOGGLE_MOBILE';
export const TOGGLE_LOGIN_BUTTON = 'TOGGLE_LOGIN_BUTTON';
export const CHANGE_TO_REGISTRATION = 'CHANGE_TO_REGISTRATION';
export const CHANGE_USERNAME_INPUT = 'CHANGE_USERNAME_INPUT';
export const CHANGE_PASS_INPUT = 'CHANGE_PASS_INPUT';
export const SEND_AUTH_CREDENTIALS = 'SEND_AUTH_CREDENTIALS';
export const SAVE_JWT_TOKEN = 'SAVE_JWT_TOKEN';

export const toggleMobile = (mobile) => ({
  type: 'TOGGLE_MOBILE',
  mobile: mobile,
});
export const toggleLoginButton = () => ({
  type: 'TOGGLE_LOGIN_BUTTON',
});
export const changeToRegistration = () => ({
  type: 'CHANGE_TO_REGISTRATION',
});
export const changeUsernameInput = (input) => ({
  type: 'CHANGE_USERNAME_INPUT',
  newInput: input,
});
export const changePasswordInput = (input) => ({
  type: 'CHANGE_PASS_INPUT',
  newInput: input,
});
export const sendAuthCredentials = (logObject) => ({
  type: 'SEND_AUTH_CREDENTIALS',
  credentials: logObject,
});
export const saveJwtToken = (token) => ({
  type: 'SAVE_JWT_TOKEN',
  token: token,
});
