import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from 'src/reducers/mainReducer';
import testMiddleware from 'src/middlewares/testMiddleware';
import authMiddleware from 'src/middlewares/authMiddleware';
import gamesMiddleware from 'src/middlewares/gamesMiddleware';

const enhancers = composeWithDevTools(
  applyMiddleware(
    testMiddleware,
    authMiddleware,
  ),
);

const store = createStore(
  // reducer
  reducer,
  // enhancer
  enhancers,
);

export default store;
