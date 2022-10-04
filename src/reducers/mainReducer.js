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
};

const mainReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'OPEN_NAVBAR':
      return {
        ...state,
        isNavOpen: !state.isNavOpen,
      };
    case 'OPEN_LOGIN':
      return {
        ...state,
        isLoginOpen: true,
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

    case 'CHANGE_GAME_DATA':
    {
      console.log(action);
      const gamesCopy = state.games;
      const newGames = gamesCopy.filter((game) => game.id !== action.gameData.id);
      newGames.push(action.gameData);

      return {
        ...state,
        games: newGames,
      };
    }

    default:
      return state;
  }
};

export default mainReducer;
