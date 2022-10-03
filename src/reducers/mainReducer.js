const initialState = {
  isMobile: false,
  isLoginOpen: false,
  isRegistration: false,
  isNavOpen: false,
  isLoading: true,
  isLogged: false,
  loginInputMail: '',
  loginInputPass: '',
  jwtToken: '',
  isGamesLoaded: false,
  games: [],
  uncommited: [],
  categories: [],
  teams: [],
  clubs: [],
  arenas: [],
  types: [],
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

    case 'DISCONNECT_USER':
      sessionStorage.removeItem('jwtToken');
      return {
        ...state,
        jwtToken: '',
        isLogged: false,
      };

    case 'REMOVE_LOADING':
      return {
        ...state,
        isLoading: false,
      };
      // saving games from API :
    case 'SAVE_GAMES':
      return {
        ...state,
        isGamesLoaded: true,
        games: action.games,
      };
      // saving categories from API :
    case 'SAVE_UNCOMMITED_GAMES':
      return {
        ...state,
        uncommited: action.uncommited,
      };
      // saving categories from API :
    case 'SAVE_CATEGORIES':
      return {
        ...state,
        categories: action.categories,
      };
      // saving Teams from API :
    case 'SAVE_TEAMS':
      return {
        ...state,
        teams: action.teams,
      };
      // saving clubs from API :
    case 'SAVE_CLUBS':
      return {
        ...state,
        clubs: action.clubs,
      };
      // saving arenas from API :
    case 'SAVE_ARENAS':
      return {
        ...state,
        arenas: action.arenas,
      };
      // saving types from API :
    case 'SAVE_TYPES':
      return {
        ...state,
        types: action.types,
      };
    case 'CHANGE_GAMES_TO_UNCOMMITED_GAMES':
      return {
        ...state,
        games: state.uncommited,
      };
    default:
      return state;
  }
};

export default mainReducer;
