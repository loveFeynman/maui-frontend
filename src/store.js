import { createStore, applyMiddleware, compose } from "redux";
// import { syncHistoryWithStore } from 'react-router-redux';
// import { browserHistory } from 'react-router';

import createSagaMiddleware from "redux-saga";
import mySaga from "./sagas/sagas";

import rootReducer from "./reducers/index";

const defaultState = {};

const sagaMiddleware = createSagaMiddleware();
// const enhancers = [defaultState, applyMiddleware(sagaMiddleware)];

const store = createStore(
  rootReducer,
  defaultState,
  compose(
    applyMiddleware(sagaMiddleware),
    // window.__REDUX_DEVTOOLS_EXTENSION__ &&
    //   window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);

sagaMiddleware.run(mySaga);

// export const history = syncHistoryWithStore(browserHistory, store);

export default store;
