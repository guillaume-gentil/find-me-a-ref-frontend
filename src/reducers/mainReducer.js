const initialState = {
  isMobile: false,
  isLoginOpen: false,
  isRegistration: false,
  isNavOpen: false,
  isLogged: false,
  loginInputMail: '',
  loginInputPass: '',
  jwtToken: '',
};

const mainReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'OPEN_NAVBAR':
      return {
        ...state,
        isNavOpen: !state.isNavOpen,
      };
    case 'TOGGLE_MOBILE':
      return {
        ...state,
        isMobile: action.mobile,
      };

    case 'TOGGLE_LOGIN_BUTTON':
      return {
        ...state,
        isLoginOpen: !state.isLoginOpen,
        isRegistration: false,
      };

    case 'CHANGE_TO_REGISTRATION':
      return {
        ...state,
        isRegistration: true,
      };

    case 'CHANGE_USERNAME_INPUT':
      return {
        ...state,
        loginInputMail: action.newInput,
      };

    case 'CHANGE_PASS_INPUT':
      return {
        ...state,
        loginInputPass: action.newInput,
      };

    case 'SAVE_JWT_TOKEN':
      sessionStorage.setItem('jwtToken', action.token);
      return {
        ...state,
        jwtToken: action.token,
        isLogged: true,
        isLoginOpen: false,
      };

    default:
      return state;
  }
};

export default mainReducer;
