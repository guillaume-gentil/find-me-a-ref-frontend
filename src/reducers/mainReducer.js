const initialState = {
  isMobile: false,
  isLoginOpen: false,
  isRegistration: false,
};

const mainReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'TOGGLE_MOBILE':
      return {
        ...state,
        isMobile: action.mobile,
      };

    case 'TOGGLE_LOGIN_BUTTON':
      return {
        ...state,
        isLoginOpen: !state.isLoginOpen,
      };

    case 'CHANGE_TO_REGISTRATION':
      return {
        ...state,
        isRegistration: true,
      };

    default:
      return state;
  }
};

export default mainReducer;
