const initialState = {
  isMobile: false,
  isLoginOpen: false,
  isRegistration: false,
  isNavOpen: false,
  games: [
    {
      id: '1',
      date: '2022-10-11T07:48:34+02:00',
      arena: {
        id: '14',
        name: 'Lopez',
        address: '127, rue Pottier\n17 607 Michaud',
        zipCode: 64399,
      },
      type: {
        id: '4',
        name: 'demi finale',
      },
      teams: [
        {
          id: '1',
          name: 'Les Alligators N3',
          club: {
            name: 'Les Alligators',
          },
          category: {
            id: '6',
            name: 'N3',
          },
        },
        {
          id: '11',
          name: 'Krokos U9',
          club: {
            name: 'Krokos',
          },
          category: {
            id: '3',
            name: 'U9',
          },
        },
      ],
      users: [],
    },
    {
      id: '2',
      date: '2022-10-23T03:28:57+02:00',
      arena: {
        id: 1,
        name: 'Guillon',
        address: '3, chemin Morel\n84534 Verdier',
        zipCode: 27309,
      },
      type: {
        id: '1',
        name: 'quart de finale',
      },
      teams: [
        {
          id: '1',
          name: 'Les Alligators N3',
          club: {
            name: 'Les Alligators',
          },
          category: {
            id: '6',
            name: 'N3',
          },
        },
        {
          id: '8',
          name: "Les Yeti's U17",
          club: {
            name: "Les Yeti's",
          },
          category: {
            id: '4',
            name: 'U17',
          },
        },
      ],
      users: [
        {
          id: '11',
          firstname: 'Alexandrie',
          lastname: 'Gillet',
          email: 'salmon.raymond@club-internet.fr',
          level: 'D3',
        },
      ],
    },
  ],
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
    default:
      return state;
  }
};

export default mainReducer;
