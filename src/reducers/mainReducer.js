const initialState = {
  isMobile: false,
  isLoginOpen: false,
  isRegistration: false,
  isNavOpen: false,
  isFilterOpen: false,
  isLoading: true,
  isLogged: false,
  isPassModalVisible: false,
  isProfileOnEdit: false,
  isTeamNameModalVisible: false,
  isMailModalOpen: false,
  adminNav: false,
  loginInputMail: '',
  loginInputPass: '',
  jwtToken: '',
  isGamesLoaded: false,
  games: [],
  uncommited: false,
  categories: [],
  teams: [],
  clubs: [],
  arenas: [],
  types: [],
  // Controlled inputs
  userFormInputPass: '',
  userFormInputFirstname: '',
  userFormInputLastname: '',
  userFormInputEmail: '',
  userFormInputAddress: '',
  userFormInputZipcode: '',
  userFormInputLicense: '',
  userFormInputLevel: '',
  errorMessage: '',
  allUsers: [],
  userRoles: [],
  editedComponent: null,
  currentUser: null,
  checkPwdUppercase: false,
  checkPwdDigit: false,
  checkPwdSymbol: false,
  checkPwdLetters: false,
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
    case 'OPEN_FILTERS':
      return {
        ...state,
        isFilterOpen: !state.isFilterOpen,
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
        userRoles: [],
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
    case 'SET_EMERGENCY':
      return {
        ...state,
        uncommited: action.emergencyState,
      };

    case 'CHANGE_GAME_DATA':
    {
      const gamesCopy = state.games;
      const newGames = gamesCopy.filter((game) => game.id !== action.gameData.id);
      newGames.push(action.gameData);

      return {
        ...state,
        games: newGames,
      };
    }

    case 'SET_ADMIN_NAV':
      return {
        ...state,
        adminNav: true,
      };
    case 'UNSET_ADMIN_NAV':
      return {
        ...state,
        adminNav: false,
      };
    case 'CHANGE_INPUT_PASS':
      return {
        ...state,
        userFormInputPass: action.newValue,
      };
    case 'CHANGE_INPUT_ADDRESS':
      return {
        ...state,
        userFormInputAddress: action.newValue,
      };
    case 'CHANGE_INPUT_FIRSTNAME':
      return {
        ...state,
        userFormInputFirstname: action.newValue,
      };
    case 'CHANGE_INPUT_LASTNAME':
      return {
        ...state,
        userFormInputLastname: action.newValue,
      };
    case 'CHANGE_INPUT_EMAIL':
      return {
        ...state,
        userFormInputEmail: action.newValue,
      };
    case 'CHANGE_INPUT_ZIPCODE':
      return {
        ...state,
        userFormInputZipcode: action.newValue,
      };
    case 'CHANGE_INPUT_LEVEL':
      return {
        ...state,
        userFormInputPass: action.newValue,
      };
    case 'CHANGE_INPUT_LICENSE':
      return {
        ...state,
        userFormInputLevel: action.newValue,
      };
    case 'SET_ERROR_MESSAGE':
      return {
        ...state,
        errorMessage: action.message,
      };
    case 'SAVE_ALL_USERS':
      return {
        ...state,
        allUsers: action.users,
      };
    case 'SAVE_USER':
      return {
        ...state,
        editedComponent: action.user,
      };
    case 'SET_USER_ROLES':
      return {
        ...state,
        userRoles: action.userRoles,
      };
    case 'SAVE_GAME_INFOS':
      return {
        ...state,
        editedComponent: action.game,
      };
    case 'SAVE_ARENA_INFOS':
      return {
        ...state,
        editedComponent: action.arena,
      };
    case 'SAVE_TEAM_INFOS':
      return {
        ...state,
        editedComponent: action.team,
      };
    case 'SAVE_CLUB_INFOS':
      return {
        ...state,
        editedComponent: action.club,
      };
    case 'SET_PASS_MODAL_VISIBLE':
      return {
        ...state,
        isPassModalVisible: true,
      };
    case 'SET_PASS_MODAL_HIDDEN':
      return {
        ...state,
        isPassModalVisible: false,
      };
    case 'COLORIZE_MODAL':
      if (action.identifier === 'uppercase') {
        return {
          ...state,
          checkPwdUppercase: true,
        };
      } if (action.identifier === 'digit') {
        return {
          ...state,
          checkPwdDigit: true,
        };
      } if (action.identifier === 'symbol') {
        return {
          ...state,
          checkPwdSymbol: true,
        };
      }
      return {
        ...state,
        checkPwdLetters: true,
      };
    case 'UNCOLORIZE_MODAL':
      if (action.identifier === 'uppercase') {
        return {
          ...state,
          checkPwdUppercase: false,
        };
      } if (action.identifier === 'digit') {
        return {
          ...state,
          checkPwdDigit: false,
        };
      } if (action.identifier === 'symbol') {
        return {
          ...state,
          checkPwdSymbol: false,
        };
      }
      return {
        ...state,
        checkPwdLetters: false,
      };
    case 'SET_TEAM_NAME_MODAL_VISIBLE':
      return {
        ...state,
        isTeamNameModalVisible: true,
      };
    case 'SET_TEAM_NAME_MODAL_HIDDEN':
      return {
        ...state,
        isTeamNameModalVisible: false,
      };
    case 'OPEN_MAIL_CONFIRM':
      return {
        ...state,
        isMailModalOpen: true,
      };
    case 'CLOSE_MAIL_CONFIRM':
      return {
        ...state,
        isMailModalOpen: false,
      };
    case 'SAVE_CURRENT_USER':
      return {
        ...state,
        currentUser: action.userData,
      };
    case 'SET_PROFILE_EDIT':
      return {
        ...state,
        isProfileOnEdit: action.boolean,
      };
    default:
      return state;
  }
};

export default mainReducer;
