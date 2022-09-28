export const TOGGLE_MOBILE = 'TOGGLE_MOBILE';
export const TOGGLE_LOGIN_BUTTON = 'TOGGLE_LOGIN_BUTTON';
export const CHANGE_TO_REGISTRATION = 'CHANGE_TO_REGISTRATION';

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
