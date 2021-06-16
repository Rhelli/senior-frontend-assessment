import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import vehiclesReducer from './vehicles/vehiclesReducer';

const rootReducer = combineReducers({
  vehiclesStore: vehiclesReducer,
});

export default function initializeStore(initialState = {}) {
  const middleware = [];

  if (process.env.NODE_ENV === 'development') {
    const logger = createLogger({ collapsed: true });
    middleware.push(logger);
  }
  middleware.push(thunk);

  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middleware),
  );

  return store;
}