const initialState = {
  isMobile: false,
  isLoginOpen: false,
  isRegistration: false,
  isNavOpen: false,
  isGamesLoaded: false,
  games: [],
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

      // saving games from API :
    case 'SAVE_GAMES':
      return {
        ...state,
        isGamesLoaded: true,
        games: action.games,
      };

    default:
      return state;
  }
};

export default mainReducer;
