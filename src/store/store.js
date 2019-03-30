import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { rootReducer } from '../reducers/root-reducer';
import thunk from '../middleware/thunk';

const configureStore = (preloadedState = {}) => {
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(...[thunk, logger])
  );
};

export default configureStore;
