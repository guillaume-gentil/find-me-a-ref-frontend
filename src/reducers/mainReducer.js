const initialState = {
  isNavOpen: false,
};

const mainReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'OPEN_NAVBAR':
      return {
        ...state,
        isNavOpen: !state.isNavOpen,
      };
    default:
      return state;
  }
};

export default mainReducer;
