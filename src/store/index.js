import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from 'src/reducers/mainReducer';
import testMiddleware from 'src/middlewares/testMiddleware';
import authMiddleware from 'src/middlewares/authMiddleware';
import gamesMiddleware from 'src/middlewares/gamesMiddleware';
import filtersMiddleware from 'src/middlewares/filtersMiddleware';
import commitMiddleware from '../middlewares/commitMiddleware';
import usersMiddleware from '../middlewares/usersMiddleware';

const enhancers = composeWithDevTools(
  applyMiddleware(
    testMiddleware,
    authMiddleware,
    gamesMiddleware,
    filtersMiddleware,
    commitMiddleware,
    usersMiddleware,
  ),
);

const store = createStore(
  // reducer
  reducer,
  // enhancer
  enhancers,
);

export default store;
